import { ref } from 'vue'

const getTags = (posts) => {
	const allTags = ref([])
	const tagSet = new Set()

	posts.forEach(item => {
		item.tags.forEach(tag => tagSet.add(tag))
	})

	allTags.value = [...tagSet]

	return { allTags }
}

export default getTags