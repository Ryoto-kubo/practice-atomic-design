<template>
    <v-card>
        <v-card-title>連絡先登録</v-card-title>
        <v-card-text>
            <TextField textFieldLabel="電話番号" :value="phoneNumber" @change="changePhoneNumber" />
            <TextField textFieldLabel="メールアドレス" :value="mailAddress" @change="changeMailAddress" />
            <v-btn @click.stop="dialog = true">保存</v-btn>
            <v-row justify="center">
                <v-dialog v-model="dialog" max-width="300">
                    <v-card>
                        <v-card-text>
                            バックエンドの実装は、まだ完了していません。
                        </v-card-text>
                        <v-card-actions>
                            <v-btn @click="dialog = false">
                                了解
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-row>
        </v-card-text>
    </v-card>
</template>

<script>
import TextField from '../atoms/TextField.vue'

export default {
    components: {
        // MyButton,
        TextField
    },
    data() {
        return {
            phoneNumber: '',
            mailAddress: '',
            dialog: false
        }
    },
    methods: {
        changePhoneNumber(changedPhoneNumber) {
            this.phoneNumber = changedPhoneNumber
        },
        changeMailAddress(changedMailAddress) {
            this.mailAddress = changedMailAddress
        },
        changeDialogPropaty() {
            this.dialog = !this.dialog
        }
    }
}
</script>