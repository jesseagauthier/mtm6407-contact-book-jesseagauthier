<template>
	<div class="p-6">
		<h1 class="text-green-500 mb-4">Welcome to the Contact Book</h1>
		<div class="mb-4">
			<input
				type="text"
				v-model="searchQuery"
				placeholder="Search by name..."
				class="mb-4 p-2 rounded border-2 border-green-500 w-full"
			/>
		</div>
		<table class="min-w-full table-auto">
			<thead>
				<tr class="bg-green-200">
					<th class="px-4 py-2">First Name</th>
					<th class="px-4 py-2">Last Name</th>
					<th class="px-4 py-2">Email</th>
					<th class="px-4 py-2">Actions</th>
				</tr>
			</thead>
			<tbody>
				<tr
					v-for="contact in filteredAndSortedContacts"
					:key="contact.id"
					class="border-t"
				>
					<td class="px-4 py-2">{{ contact.firstName }}</td>
					<td class="px-4 py-2">{{ contact.lastName }}</td>
					<td class="px-4 py-2">{{ contact.email }}</td>
					<td
						class="px-4 py-2 flex flex-wrap md:flex-nowrap justify-center space-y-2 md:space-y-0 md:space-x-2"
					>
						<button
							@click="viewContact(contact.id)"
							class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-[100%]"
						>
							View
						</button>
						<button
							@click="deleteContact(contact.id)"
							class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-[100%]"
						>
							Delete
						</button>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
import tempContacts from '../data/contact.js'

export default {
	name: 'HomeView',
	data() {
		return {
			contacts: [],
			searchQuery: '',
		}
	},
	computed: {
		filteredAndSortedContacts() {
			return this.contacts
				.filter((contact) => {
					return (
						contact.firstName
							.toLowerCase()
							.includes(this.searchQuery.toLowerCase()) ||
						contact.lastName
							.toLowerCase()
							.includes(this.searchQuery.toLowerCase())
					)
				})
				.sort((a, b) => {
					return a.lastName.localeCompare(b.lastName)
				})
		},
	},
	methods: {
		loadContacts() {
			this.contacts =
				JSON.parse(localStorage.getItem('contacts')) || tempContacts
		},
		viewContact(id) {
			this.$router.push({ name: 'ContactDetails', params: { id } })
		},
		deleteContact(id) {
			this.contacts = this.contacts.filter((contact) => contact.id !== id)
			localStorage.setItem('contacts', JSON.stringify(this.contacts))

			this.loadContacts()
		},
	},
	mounted() {
		this.loadContacts()
	},
}
</script>
