import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'

const getPost = (id) => {
	const post = ref(null)
	const error = ref(null)

	const load = async () => {
		try {
			// fethcing single post
			let res = await projectFirestore.collection('posts').doc(id).get()
			
			// checking if res exist
			if(!res.exists) {
				throw Error('That post does not exist')
			}

			post.value = { ...res.data(), id: res.id }
		} catch (err) {
			error.value = err.message
		}
	}

	return { post, error, load }
}

export default getPost