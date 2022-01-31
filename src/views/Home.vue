<template>
  <div class="home">
		<h1>Home</h1>
		<h3 v-if="error">{{ error }}</h3>
		<PostList :posts="posts" />
  </div>
</template>

<script>
import PostList from '../components/PostList.vue'
import getPosts from '../composables/getPosts'

export default {
  name: 'Home',
	components: { PostList },
	setup() {
		const { posts, error, load } = getPosts()

		load()

		return { posts, error }
	}
}
</script>

<style scoped>
.home {
	max-width: 1200px;
	margin: 0 auto;
	padding: 10px;
}
</style>
