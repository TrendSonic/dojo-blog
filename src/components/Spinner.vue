<template>
	<div class="spin"></div>
</template>

<style scoped>
.spin {
	display: block;
	height: 40px;
	width: 40px;
	border-radius: 50%;
	border: 3px solid transparent;
	margin: 30px auto;
	border-top-color: #ff8800;
	animation: spin 1s ease-in-out infinite;
}

@keyframes spin {
	to {
		transform: rotateZ(360deg);
	}
}
</style>