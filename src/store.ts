import { reactive } from 'vue';

    export const store = reactive({
        userId: localStorage.getItem('user'),
        lastname:'',
        firstname:'',
        pseudoConnected:'',
        emailConnected:'',
        token: null,
    })