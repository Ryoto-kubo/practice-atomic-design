<template>
    <v-text-field :label="textFieldLabel"></v-text-field>
</template>

<script>
export default {
    props: {
        textFieldLabel: {
            type: String
        }
    }
}
</script>