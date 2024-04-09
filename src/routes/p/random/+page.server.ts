import type { PageServerLoad } from './$types';
import { firebaseConfig } from '$lib/firebase.js';
import { initializeApp } from 'firebase/app';
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { error, redirect } from '@sveltejs/kit';
import { compile } from 'mdsvex';
import { getDownloadURL, getStorage, ref } from 'firebase/storage';

export const load = (async ({ params }) => {
    const app = initializeApp(firebaseConfig);
	const db = getFirestore(app);
	const listSnap = await getDoc(doc(db, "list", "list"));
    const list: string[] = listSnap.data()?.list;
    if (list.length === 0) throw redirect(302, '/');
    const slug = list[Math.floor(Math.random()*list.length)];

    const docRef = doc(db, "posts", slug);
	const docSnap = await getDoc(docRef);
	if (docSnap.exists()) {
		const data = docSnap.data();
		if (data.published !== true) return error(404, 'Not found');
		let content: string | undefined = undefined;
		switch (data.type) {
			case "text":
				const contentRef = doc(db, "content", slug);
				const contentSnap = await getDoc(contentRef);
				content = (await compile(contentSnap.data()?.content as string))?.code;
				break;
			case "image":
				const storage = getStorage(app);
				content = await getDownloadURL(ref(storage, `content/published/${data.image_loc}`));
				break;
			default:
				return error(500, 'Internal Error: non-real document type state.');
		}
		return { 
			slug, 
			title: data.title, 
			author: data.author,
			description: data.description,
			content_type: data.type,
			content,
		};
	}
	else error(404, 'Not found');

}) satisfies PageServerLoad;