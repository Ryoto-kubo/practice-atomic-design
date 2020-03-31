<template>
    <v-btn @click="btnClickMethod">{{ btnTitle }}</v-btn>
</template>

<script>
export default {
    props: {
        btnTitle: {
            type: String
        },
        btnClickMethod: {
            type: Function
        }
    }
}
</script>
