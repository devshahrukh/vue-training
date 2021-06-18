<template>
	<div>
		<div>
			<h1 class="heading">This is coming from Company Components - {{name}}</h1>

			<b><i>{{parentName}}</i></b> <br> <br>

			<button @click="clickMe">Button from Child Component</button>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'CompanyName',
		props: {
			parentName: {
				default: ''
			}
		},
		data () {
			return {
				name: `This is new Component's Name State`
			}
		},
		methods: {
			clickMe () {
				this.parentName = 'New Value'
				this.$emit('eventEmitted', {
					eventParam: 'Shahrukh is changed from a child component'
				})
			}
		}
	}
</script>

<style>
	.heading {
		color: red;
	}
</style>