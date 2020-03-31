<template>
	<div>
		<h1>This is Today.vue</h1>
		<MyButton btnTitle='Active' :btnClickMethod="addClicked" />
	</div>
</template>

<script>
import MyButton from '../components/atoms/MyButton.vue'
import { mapMutations } from 'vuex'

export default {
	components: {
		MyButton
	},
	methods: {
		...mapMutations([
			'addClicked'
		])
	}
}
</script>