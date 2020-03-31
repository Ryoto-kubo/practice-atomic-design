<template>
	<div>
		<v-progress-linear color="grey" value="10" height="40" striped></v-progress-linear>
		<br>
		<MyButton btnTitle='Active' :btnClickMethod="addClicked" />
		<pre>
			{{ $store.getters.clicked }}
		</pre>
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