<template>
    <v-btn>{{ btnTitle }}</v-btn>
</template>

<script>
export default {
    props: {
        btnTitle: {
            type: String
        }
    }
}
</script>
