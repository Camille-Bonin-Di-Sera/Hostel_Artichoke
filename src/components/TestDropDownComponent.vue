<template>
    <div>
        utilisateur connecter
        <table>
            <thead>
                <tr>
                    <th>pseudo</th>
                    <th>email</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        {{store.pseudoConnected}}
                    </td>
                    <td>
                        {{store.emailConnected}}
                    </td>

                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from "axios";
import router from "@/router";
import {store} from "@/store";
import('../assets/Style/main.css');
export default {
    data()
    {
        return {
           store
        }
    },
    props: ['lang_fr'],


};
console.log(store);
</script>

<style scoped>

</style>