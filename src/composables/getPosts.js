import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'

const getPosts = () => {
	const posts = ref([])
	const error = ref(null)

	const load = async () => {
		try {
			// fetching data from firebase and automatically updating posts while new one is added
			await projectFirestore
			.collection('posts')
			.orderBy('createdAt', 'desc')
			.onSnapshot((snap) => {
				let docs = snap.docs.map(doc => {
					return { ...doc.data(), id: doc.id }
				})
				posts.value = docs
			})
		} catch (err) {
			error.value = err.message
			console.log(error.value)
		}
	}

	return { posts, error, load }
}

export default getPosts