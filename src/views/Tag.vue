<template>
	
</template>

<script>
import Spinner from '../components/Spinner.vue'
import PostList from '../components/PostList.vue'
import getPosts from '../composables/getPosts'
import {useRoute} from 'vue-router'

export default {
	setup() {
		const route = useRoute()
		console.log(route.params.tag)
		const { posts, error, load } = getPosts()

		load()

		return { posts, error }
	}
}
</script>

<style>

</style>
