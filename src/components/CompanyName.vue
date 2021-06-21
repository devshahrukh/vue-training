<template>
	<div>
		<div>
			<h1 class="heading">This is coming from Company Components - {{name}}</h1>

			<b><i>{{parentName}}</i></b> <br> <br>

			<button @click="clickMe">Button from Child Component</button>
		</div>

		<div>
			<button @click="handleApperance">Click me Toggle</button>
			<transition name="slide-fade">
				<span v-if="showSpan">
					<p>This text is represinting TransitionThis text is represinting TransitionThis text is represinting TransitionThis text is represinting TransitionThis text is represinting Transition</p>
					<span>This text is represinting Transition</span>
				</span>	
			</transition>
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
				showSpan: false,
				name: `This is new Component's Name State`
			}
		},
		methods: {
			handleApperance () {
				this.showSpan = !this.showSpan
			},
			clickMe () {
				this.parentName = 'New Value'
				this.$emit('eventEmitted', {
					eventParam: 'Shahrukh is changed from a child component'
				})
			}
		}
	}
</script>

<style scoped>
	.heading {
		color: red;
	}
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>