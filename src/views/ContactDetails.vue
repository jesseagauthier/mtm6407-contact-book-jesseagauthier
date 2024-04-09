<template>
	<div class="p-4">
		<h2 class="text-green-500 text-lg mb-4">Contact Details</h2>
		<div v-if="contact">
			<template v-if="isEditMode">
				<div class="mb-4">
					<input
						v-model="contact.firstName"
						placeholder="First Name"
						class="input"
					/>
				</div>
				<div class="mb-4">
					<input
						v-model="contact.lastName"
						placeholder="Last Name"
						class="input"
					/>
				</div>
				<div class="mb-4">
					<input v-model="contact.email" placeholder="Email" class="input" />
				</div>
				<div class="mb-4">
					<input
						v-model="contact.address"
						placeholder="Address"
						class="input"
					/>
				</div>
				<div class="mb-4">
					<input v-model="contact.phone" placeholder="Phone" class="input" />
				</div>
				<div class="mb-4">
					<textarea
						v-model="contact.notes"
						placeholder="Notes"
						class="textarea"
					></textarea>
				</div>
			</template>
			<template v-else>
				<p><strong>First Name:</strong> {{ contact.firstName }}</p>
				<p><strong>Last Name:</strong> {{ contact.lastName }}</p>
				<p><strong>Email:</strong> {{ contact.email }}</p>
				<p v-if="contact.address">
					<strong>Address:</strong> {{ contact.address }}
				</p>
				<p v-if="contact.phone"><strong>Phone:</strong> {{ contact.phone }}</p>
				<p v-if="contact.notes"><strong>Notes:</strong> {{ contact.notes }}</p>
			</template>
		</div>
		<div v-else>
			<p>Contact not found.</p>
		</div>
		<button
			@click="toggleEditMode"
			class="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 mr-2"
		>
			{{ isEditMode ? 'Save' : 'Edit' }}
		</button>
		<button
			@click="cancelEdit"
			v-if="isEditMode"
			class="mt-4 px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
		>
			Cancel
		</button>
		<button
			@click="$router.push('/')"
			class="mt-4 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 ml-2"
		>
			Back to Contacts
		</button>
	</div>
</template>

<script>
export default {
	name: 'ContactDetails',
	data() {
		return {
			contact: null,
			isEditMode: false,
		}
	},
	methods: {
		toggleEditMode() {
			if (this.isEditMode) {
				const contacts = JSON.parse(localStorage.getItem('contacts')) || []
				const index = contacts.findIndex((c) => c.id === this.contact.id)
				if (index !== -1) {
					contacts[index] = this.contact
					localStorage.setItem('contacts', JSON.stringify(contacts))
				}
			}
			this.isEditMode = !this.isEditMode
		},
		cancelEdit() {
			this.isEditMode = false
			this.loadContact()
		},
		loadContact() {
			const id = parseInt(this.$route.params.id, 10)
			const contacts = JSON.parse(localStorage.getItem('contacts')) || []
			this.contact = contacts.find((contact) => contact.id === id)
		},
	},
	mounted() {
		this.loadContact()
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
	border: 1px solid #d1d5db; /* gray-300 */
}

.textarea {
	min-height: 100px;
}

.hover\:bg-blue-600:hover {
	background-color: #2563eb;
}

.hover\:bg-gray-600:hover {
	background-color: #4b5563;
}
</style>
