<template>
    <v-card>
        <v-card-title>時間割</v-card-title>
        <v-card-text>
            <SimpleTable :tableHeadTitles="timeScheduleTitles" :tableBodies="timeScheduleBodies" />
        </v-card-text>
    </v-card>
</template>

<script>
import SimpleTable from '../molecules/SimpleTable.vue'

export default {
    components: {
        SimpleTable
    },
    data() {
        return {
            timeScheduleTitles: [
                '',
                '月曜',
                '火曜',
                '水曜',
                '木曜',
                '金曜'
            ],
            timeScheduleBodies: [
                {
                    title: 1,
                    items: [
                        '西洋史',
                        '日本史',
                        '心理学',
                        '',
                        '量子力学'
                    ]
                },
                {
                    title: 2,
                    items: [
                        '異文化理解',
                        '初年次セミナー',
                        '',
                        '簿記入門',
                        '有機分光学'
                    ]
                },
                {
                    title: 3,
                    items: [
                        '生体エネルギー論',
                        '遺伝子工学',
                        '',
                        '',
                        '微分・積分'
                    ]
                },
                {
                    title: 4,
                    items: [
                        '生物学概論',
                        'イオン溶液論',
                        '代謝生化学',
                        '英語8',
                        '遺伝子発現の仕組み'
                    ]
                },
                {
                    title: 5,
                    items: [
                        '',
                        '',
                        '意思決定論',
                        '論文購読',
                        ''
                    ]
                }
            ]
        }
    }
}
</script>