<template>
    <thead>
        <tr>
            <th class="text-left" v-for="(tableHeadTitle, index) in tableHeadTitles" :key="index">{{ tableHeadTitle }}</th>
        </tr>
    </thead>
</template>

<script>
export default {
    props: {
        tableHeadTitles: {
            type: Array
        }
    }
}
</script>