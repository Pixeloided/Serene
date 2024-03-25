import { firebaseConfig } from '$lib/firebase.js';
import { error } from '@sveltejs/kit';
import { initializeApp } from 'firebase/app';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { getDownloadURL, getStorage, ref } from 'firebase/storage';
import { compile } from 'mdsvex';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	const app = initializeApp(firebaseConfig);
	const db = getFirestore(app);

	const docRef = doc(db, "posts", params.slug);
	const docSnap = await getDoc(docRef);
	if (docSnap.exists()) {
		const data = docSnap.data();
		if (data.published !== true) return error(404, 'Not found');
		let content: string | undefined = undefined;
		switch (data.type) {
			case "text":
				const contentRef = doc(db, "content", params.slug);
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
			slug: params.slug, 
			title: data.title, 
			author: data.author,
			description: data.description,
			content_type: data.type,
			content,
		};
	}
	else error(404, 'Not found');
}

export const ssr = true;