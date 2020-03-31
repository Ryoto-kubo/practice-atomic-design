<template>
    <div>
        <ListItem v-for="(listItem, index) in listItems" :key="index" :listItemTitle="listItem.title" :listItemSubtitle="listItem.body" />
    </div>
</template>

<script>
import ListItem from '../atoms/ListItem.vue'

export default {
    props: {
        listItems: {
            type: Array
        }
    },
    components: {
        ListItem
    }
}
</script>