<template>
	<b-container fluid>
		<div class="registration-form">
			<b-row class="form-entries">
				<b-col md-3><label class= "form-label" for="firstName" >First Name:</label></b-col>
				<b-col md-9><b-form-input type="text" id="firstName" v-model="firstName"/></b-col>
			</b-row>
			<b-row class="form-entries">
				<b-col md-3><label class= "form-label" for="lastName">Last Name:</label></b-col>
				<b-col md-9><b-form-input type="text" id="lastName" v-model="lastName"/></b-col>
			</b-row>
			<b-row class="form-entries">
				<b-col md-4><label class= "form-label" for="userName">User Name:</label></b-col>
				<b-col md-8><b-form-input type="text" id="userName" v-model="userName"/></b-col>
			</b-row>
			<b-row class="form-entries">
				<b-col md-4><label class= "form-label" for="email">Email:</label></b-col>
				<b-col md-8><b-form-input type="email" id="email" v-model="email"/></b-col>
			</b-row>
			<b-row class="form-entries">
				<b-col md-4><label class= "form-label" for="password">Password:</label></b-col>
				<b-col md-8><b-form-input type="password" v-model="password"/></b-col>
			</b-row>
			<b-row class="form-button">
				<b-button variant= "primary" type="submit">Register</b-button>
			</b-row>
		</div>
	</b-container>
</template>
<script>
export default {
	data () {
		return {
			firstName: '',
			lastName: '',
			userName: '',
			email: '',
			password: ''
		}
	},
	methods: {
		useMe () {
		}
	}
}
</script>
<style scoped>
	.form-label{
		/* display: flex;
		align-items: flex-start;*/
		width: 100px;
		text-transform: uppercase;
		margin-top: 5px;
	}
	.registration-form{
		display: flex;
		flex-flow: column;
		justify-content: center;
		border: 1px solid #990000;
		border-radius: 10px;
		margin-left: auto;
		margin-right: auto;
		width: 45%;
		height: 300px;
		font-family: 'Lucida Sans Unicode', 'Lucida Grande', 'sans-serif';
	}
	.form-entries{
		display: flex;
		flex-flow: row;
		justify-content: center;
		align-items: flex-start;
		margin-left: 10px;
		margin-top: 5px;
		width: 100%;
	}
	.form-button{
		width: 100%;
		display: flex;
		justify-content: center;
		padding: 15px;
	}
</style>
