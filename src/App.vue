<template>
	<Navbar />
  <router-view/>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
	components: { Navbar }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.navigation {
	display: flex;
	align-items: center;
	justify-content: center;
}

.navigation h3 {
	margin: 0;
}

.navigation a {
	text-decoration: none;
	color: #fff;
	background: #ff8800;
	padding: 5px 10px;
	margin: 0 10px;
	border-radius: 5px;
}
</style>
