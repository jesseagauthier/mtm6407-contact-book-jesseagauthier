import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NewContact from '../views/NewContact.vue'
import ContactDetails from '../views/ContactDetails.vue'

const routes = [
	{
		path: '/',
		name: 'Home',
		component: HomeView,
	},
	{
		path: '/new-contact',
		name: 'New Contact',
		component: NewContact,
	},
	{
		path: '/contact/:id',
		name: 'ContactDetails',
		component: ContactDetails,
		props: true,
	},
]

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
})

export default router
