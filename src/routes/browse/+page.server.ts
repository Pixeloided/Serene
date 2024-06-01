import { ensureOpen, redis } from '$lib/redis';
import type { PageServerLoad } from './$types';

export const load = (async ({ url }) => {
	await ensureOpen();
	const params = url.searchParams;
	const list_slugs = await redis.lRange('all', 0, -1);
	const param_len =
		(params.get('l') ? parseInt(params.get('l')!) : 25) == 0 ? 25 : parseInt(params.get('l')!);
	const length = list_slugs.length > param_len ? param_len : list_slugs.length;
	const list: object[] = [];
	const filters = {
		prose: false,
		art: false,
		poetry: false,
		community: false
	};

	function capitalizeFirstLetter(string: string | null): string {
		if (string == null) return '';
		return string.charAt(0).toUpperCase() + string.slice(1);
	}

	for (let i = 0; i < length; i++) {
		if ((await redis.get(`content:${list_slugs[i]}:published`)) != 'true') return;
		switch (params.get('f')) {
			case 'prose':
				if ((await redis.get(`content:${list_slugs[i]}:content-classifier`)) != 'prose') return;
				break;
			case 'art':
				if ((await redis.get(`content:${list_slugs[i]}:content-classifier`)) != 'art') return;
				break;
			case 'poetry':
				if ((await redis.get(`content:${list_slugs[i]}:content-classifier`)) != 'poetry') return;
				break;
			case 'community-partner':
				if (
					(await redis.get(`content:${list_slugs[i]}:content-classifier`)) != 'community-partners'
				)
					return;
				break;
			default:
				break;
		}
		const classifier = await redis.get(`content:${list_slugs[i]}:content-classifier`);
		switch (classifier) {
			case 'prose':
				filters.prose = true;
				break;
			case 'art':
				filters.art = true;
				break;
			case 'poetry':
				filters.poetry = true;
				break;
			case 'community-partners':
				filters.community = true;
				break;
			default:
				break;
		}
		list.push({
			slug: list_slugs[i],
			date: await redis.get(`content:${list_slugs[i]}:date`),
			description: await redis.get(`content:${list_slugs[i]}:description`),
			name: await redis.get(`content:${list_slugs[i]}:name`),
			title: await redis.get(`content:${list_slugs[i]}:title`),
			views: await redis.get(`content:${list_slugs[i]}:views`),
			classifier: capitalizeFirstLetter(classifier)
		});
	}

	return {
		posts: list,
		paginate: true,
		count: list_slugs.length,
		max_len: param_len,
		available_filters: filters
	};
}) satisfies PageServerLoad;
