<template>
    <v-card>
        <v-card-title>お知らせ</v-card-title>
        <v-card-text>
            <ListItems :listItems="myInfos" />
        </v-card-text>
    </v-card>
</template>

<script>
import ListItems from '../molecules/ListItems.vue'

export default {
    components: {
        ListItems
    },
    data() {
        return {
            myInfos: [
                {
                    title: '学生証登録について',
                    body: ' the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the lea'
                },
                {
                    title: '前期始業のタイミングについて',
                    body: 'ct that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as oppos'
                },
                {
                    title: 'シラバスの確認について',
                    body: 'rds, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.1'
                }
            ]
        }
    }
}
</script>