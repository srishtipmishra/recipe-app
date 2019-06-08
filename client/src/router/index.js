import Vue from 'vue'
import Router from 'vue-router'
import Register from '../components/Register'
import Login from '../components/Login'
import HelloWorld from '../components/HelloWorld'
import AllRecipes from '../components/AllRecipes'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/register',
			name: 'register',
			component: Register
		},
		{
			path: '/',
			name: 'login',
			component: Login
		},
		{
			path: '/hello',
			name: 'helloWorld',
			component: HelloWorld
		},
		{
			path: '/allrecipes',
			name: 'allRecipes',
			component: AllRecipes
		}
	]
})
