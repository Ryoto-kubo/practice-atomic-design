<template>
    <v-list-item>
        <v-list-item-content>
            <v-list-item-title>{{ listItemTitle }}</v-list-item-title>
            <v-list-item-subtitle>{{ listItemSubtitle }}</v-list-item-subtitle>
        </v-list-item-content>
    </v-list-item>
</template>

<script>
export default {
    props: {
        listItemTitle: {
            type: String
        },
        listItemSubtitle: {
            type: String
        }
    }
}
</script>