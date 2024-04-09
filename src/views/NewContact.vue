<template>
	<div class="p-4">
		<h2 class="text-green-500 text-lg mb-4">Add New Contact</h2>
		<form @submit.prevent="addContact">
			<!-- First Name -->
			<div class="mb-4">
				<label class="block" for="firstName">First Name:</label>
				<input
					v-model="contact.firstName"
					type="text"
					id="firstName"
					class="input"
					required
				/>
			</div>
			<!-- Last Name -->
			<div class="mb-4">
				<label class="block" for="lastName">Last Name:</label>
				<input
					v-model="contact.lastName"
					type="text"
					id="lastName"
					class="input"
					required
				/>
			</div>
			<!-- Email -->
			<div class="mb-4">
				<label class="block" for="email">Email:</label>
				<input
					v-model="contact.email"
					type="email"
					id="email"
					class="input"
					required
				/>
			</div>
			<!-- Address -->
			<div class="mb-4">
				<label class="block" for="address">Address:</label>
				<input
					v-model="contact.address"
					type="text"
					id="address"
					class="input"
				/>
			</div>
			<!-- Phone -->
			<div class="mb-4">
				<label class="block" for="phone">Phone:</label>
				<input v-model="contact.phone" type="tel" id="phone" class="input" />
			</div>
			<!-- Notes -->
			<div class="mb-4">
				<label class="block" for="notes">Notes:</label>
				<textarea
					v-model="contact.notes"
					id="notes"
					class="textarea"
				></textarea>
			</div>
			<button
				type="submit"
				class="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
			>
				Add Contact
			</button>
		</form>
	</div>
</template>

<script>
export default {
	name: 'NewContact',
	data() {
		return {
			contact: {
				firstName: '',
				lastName: '',
				email: '',
				address: '',
				phone: '',
				notes: '',
			},
		}
	},
	methods: {
		addContact() {
			let contacts = JSON.parse(localStorage.getItem('contacts')) || []
			const id = Date.now()
			contacts.push({ ...this.contact, id })
			localStorage.setItem('contacts', JSON.stringify(contacts))
			this.$router.push({ name: 'ContactDetails', params: { id } })
		},
	},
}
</script>

<style scoped>
.input,
.textarea {
	width: 100%;
	padding: 0.5rem;
	margin-bottom: 0.5rem;
	border-radius: 0.25rem;
	border: 1px solid #d1d5db;
}

.textarea {
	min-height: 100px;
}
</style>
