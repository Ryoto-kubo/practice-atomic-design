<template>
	<div>
		<h1>This is Today.vue</h1>
		<MyButton btnTitle='Active' />
	</div>
</template>

<script>
import MyButton from '../components/atoms/MyButton.vue'

export default {
	components: {
		MyButton
	}
}
</script>