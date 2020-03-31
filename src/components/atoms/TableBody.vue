<template>
    <tbody>
        <tr v-for="(tableBody, index) in tableBodies" :key="index">
            <th>{{ tableBody.title }}</th>
            <td v-for="(tableData, index) in tableBody.items" :key="index">{{ tableData }}</td>
        </tr>
    </tbody>
</template>

<script>
export default {
    props: {
        tableBodies: {
            type: Array
        }
    }
}
</script>