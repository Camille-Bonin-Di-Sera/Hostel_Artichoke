import { reactive } from 'vue';

    export const store = reactive({
        userId: localStorage.getItem('userId'),
        lastname:'',
        firstname:'',
        pseudoConnected:'',
        emailConnected:'',
        token: localStorage.getItem('usertoken'),
    })