<script setup></script>
<template>
	<div>
		<nav class="bg-green-500 text-white p-4">
			<ul class="flex space-x-4 justify-center">
				<li>
					<router-link to="/" class="hover:text-green-200">Home</router-link>
				</li>
				<li>
					<router-link to="/new-contact" class="hover:text-green-200"
						>New Contact</router-link
					>
				</li>
			</ul>
		</nav>
		<router-view class="md:w-[50vw] mx-auto"></router-view>
	</div>
</template>

<style scoped>
nav ul {
	list-style-type: none;
	padding: 0;
}

nav ul li {
	display: inline;
}

.router-link-active {
	font-weight: bold;
}
</style>
