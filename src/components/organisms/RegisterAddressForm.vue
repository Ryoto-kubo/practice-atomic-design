<template>
    <v-card>
        <v-card-title>連絡先登録</v-card-title>
        <v-card-text>
            <TextField textFieldLabel="電話番号" />
            <TextField textFieldLabel="メールアドレス" />
            <MyButton btnTitle="保存" />
        </v-card-text>
    </v-card>
</template>

<script>
import MyButton from '../atoms/MyButton.vue'
import TextField from '../atoms/TextField.vue'

export default {
    components: {
        MyButton,
        TextField
    }
}
</script>