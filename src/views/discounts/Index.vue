<template>
  <main class="container flex items-center justify-center h-screen mx-auto">
    <div class="flex flex-col">
      <div class="overflow-x-auto">
        <div class="p-1.5 w-full inline-block align-middle">
          <div class="mt-3 overflow-hidden border rounded-lg">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th scope="col" class="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase">
                    ID
                  </th>
                  <th scope="col" class="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase">
                    Titre en français
                  </th>
                  <th scope="col" class="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase">
                    Titre en anglais
                  </th>
                  <th scope="col" class="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase">
                    Description en Français
                  </th>
                  <th scope="col" class="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase">
                    Description en Anglais
                  </th>
                  <th scope="col" class="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase">
                    Code promotionnel
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200">
                <tr v-for="discount in discounts" :key="discount.id">
                  <td class ="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                    {{ discount.id }}
                  </td>
                  <td class ="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                    {{discount.title_fr_discount}}
                  </td>
                  <td class ="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                    {{discount.title_ang_discount}}
                  </td>
                  <td class ="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                    {{discount.describe_fr}}
                  </td>
                  <td class ="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                    {{discount.describe_ang}}
                  </td>
                  <td class ="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                    {{discount.code_discount}}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>


<script>
import axios from 'axios';
import {onMounted, ref} from 'vue';

export default
{
  setup()
  {
    let discounts = ref([])

    onMounted(() => {
      axios
          .get('http://localhost/api/discounts')
          .then ((res) => {
            discounts.value = res.data.data;
          })
          .catch((error) => {
            console.log(error.res.data);
          });
    });

    return {
      discounts
    };
  },
};
</script>