<template>
    <v-simple-table>
        <template v-slot:default>
            <TableHead :tableHeadTitles="tableHeadTitles" />
            <TableBody :tableBodies="tableBodies" />
        </template>
    </v-simple-table>
</template>

<script>
import TableHead from '../atoms/TableHead.vue'
import TableBody from '../atoms/TableBody.vue'

export default {
    components: {
        TableHead,
        TableBody
    },
    props: {
        tableHeadTitles: {
            type: Array
        },
        tableBodies: {
            type: Array
        }
    }
}
</script>