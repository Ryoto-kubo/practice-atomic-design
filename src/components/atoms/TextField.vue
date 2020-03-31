<template>
    <v-text-field :label="textFieldLabel" v-model="inputText"></v-text-field>
</template>

<script>
export default {
    props: {
        textFieldLabel: {
            type: String
        },
        value: {
            type: String
        }
    },
    computed: {
        inputText: {
            get: function() {
                return this.value
            },
            set: function(value) {
                this.$emit('change', value)
            }
        }
    }
}
</script>