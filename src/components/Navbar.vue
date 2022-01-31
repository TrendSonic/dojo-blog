<template>
	<header>
		<h1>The Dojo Blog</h1>
		<nav class="navigation">
			<router-link :to="{ name: 'Home'}">
				<h3>Home</h3>
			</router-link>
			<router-link :to="{ name: 'Create'}">
				<h3>Create</h3>
			</router-link>
	</nav>
	</header>
</template>

<style scoped>
header {
	display: flex;
	max-width: 1200px;
	align-items: center;
	justify-content: space-between;
	margin: 0 auto;
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