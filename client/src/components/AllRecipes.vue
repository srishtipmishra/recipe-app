<template>
	<div>
		<label>{{recipeName}} Recipe</label>
		<div>
			<ul id="example-1">
				<li v-for="item in allRecipes" v-bind:key="item.id">
					{{ item.name }}
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
import axios from 'axios'
export default {
	data () {
		return {
			allRecipes: [],
			recipeName: 'Tuscany Buttered Salmon',
			errors: []
		}
	},
	created () {
		axios.get('http://localhost:3000/Recipes')
			.then(response => {
				this.allRecipes = response.data
			})
			.catch(e => {
				this.errors.push(e)
			})
	}
}
</script>
<style>
</style>
