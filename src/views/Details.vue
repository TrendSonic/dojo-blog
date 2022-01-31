<template>
	<div v-if="error">
		{{ error }}
	</div>
	<div v-if="post" class="post">
		<h3>{{ post.title }}</h3>
		<p class="pre">{{ post.body }}</p>
	</div>
	<div v-else>
		<Spinner />
	</div>
</template>

<script>
import getPost from '../composables/getPost'
import Spinner from '../components/Spinner.vue'

export default {
	props: [ 'id' ],
	components: { Spinner },
	setup(props) {
		const { post, error, load } = getPost(props.id)

		load()

		return { post, error }
	}
}
</script>

<style>
	.post {
		max-width: 1200px;
		margin: 30px auto;
	}

	.post p {
		color: #444;
		line-height: 1.5em;
		margin-top: 40px;
	}

	.pre {
		white-space: pre-wrap;
	}

  .post h3 {
    display: inline-block;
    position: relative;
    font-size: 26px;
    color: white;
    margin-bottom: 10px;
    max-width: 400px;
  }
  .post h3::before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background: #ff8800;
    position: absolute;
    z-index: -1;
    padding-right: 40px;
    left: -30px;
    transform: rotateZ(-1deg);
  }
</style>
