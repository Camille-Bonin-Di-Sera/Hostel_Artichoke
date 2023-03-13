import { reactive } from 'vue';

    export const store = reactive({
        user:{},
        lastname:'',
        firstname:'',
        pseudoConnected:'',
        emailConnected:'',
        token: localStorage.getItem('usertoken')
    })