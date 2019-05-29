<template>
	<div>
		<b-container class= "form-style" fluid>
			<b-row class="form-inputs">
				<b-form-input type="text" v-model="userName" placeholder="Enter username"/>
			</b-row>
			<b-row class="form-inputs">
				<b-form-input type="password" v-model="password" placeholder="Enter password"/>
			</b-row>
			<b-row class="form-button">
				<a href="#" @click="routeToRegistration" class="primary-text">Create an account?</a>
				<b-button variant= "primary" class="btn btn-primary" type="submit" role="button" @click="logIn">Submit</b-button>
			</b-row>
		</b-container>
	</div>
</template>
<script>
import AuthService from '../auth/authService.js'
export default {
	data () {
		return {
			userName: '',
			password: ''
		}
	},
	methods: {
		routeToRegistration () {
			this.$router.push('/register')
		},
		logIn () {
			AuthService.login({username: this.userName, password: this.password})
		}
	}
}
</script>
<style>
	.form-style {
		width: 45%;
		display: flex;
		flex-flow: column;
		justify-content: center;
		border: 1px solid #990000;
		border-radius: 10px;
		margin-left: auto;
		margin-right: auto;
		width: 45%;
		height: 200px;
		font-family: 'Lucida Sans Unicode', 'Lucida Grande', 'sans-serif';
	}
	.form-inputs{
		display: flex;
		justify-content: center;
		width: 70%;
		margin-left: auto;
		margin-right: auto;
		margin-top: 10px;
	}
	.form-button{
		width: 100%;
		display: flex;
		justify-content: center;
		padding: 15px;
		padding: 10px;
	}
</style>
