<template>
  <div class="text-gray-900 mx-auto max-w-4xl px-8 md:px-16">
    <div class="w-full flex flex-wrap items-center justify-between mt-8">
      <h1 class="font-semibold text-3xl">Create user</h1>
    </div>
    <div
      class="flex flex-col max-w-xl mx-auto mt-8 rounded-lg shadow-lg p-2 md:p-4 border text-gray-900"
    >
      <form @submit="createUser">
        <div class="grid grid-cols-1 gap-6 p-2">
          <label class="block">
            <span class="text-gray-700">Name</span>
            <input
              class="block w-full mt-2 rounded-md border-gray-300 shadow-sm focus:border-gray-300 focus:ring focus:ring-gray-200 focus:ring-opacity-50"
              type="text"
              minlength="5"
              required
              v-model="mutableUser.name"
            />
          </label>
          <label class="block">
            <span class="text-gray-700">Email</span>
            <input
              class="block w-full mt-2 rounded-md border-gray-300 shadow-sm focus:border-gray-300 focus:ring focus:ring-gray-200 focus:ring-opacity-50"
              type="text"
              minlength="5"
              required
              v-model="mutableUser.email"
            />
          </label>
          <label class="block">
            <span class="text-gray-700">Gender</span>
            <select
              class="block w-full mt-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              required
              v-model="mutableUser.gender"
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </label>
          <label class="block">
            <span class="text-gray-700">Status</span>
            <select
              class="block w-full mt-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              required
              v-model="mutableUser.status"
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </label>
          <button
            @click="createUser"
            class="h-10 px-5 m-2 text-white transition-colors duration-150 bg-gray-500 rounded-lg focus:shadow-outline hover:bg-gray-700"
          >
            Create user
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import { defineComponent, ref, reactive } from '@vue/composition-api'
import { useProvider } from '@/core/presentation/provider'
import { router } from '@/ui/router'
export default defineComponent({
  setup() {
    const provider = new useProvider()
    const isLoading = ref(true)
    const mutableUser = reactive({
      name: '',
      email: '',
      gender: '',
      status: ''
    })

    const createUser = async (evt) => {
      evt.preventDefault()
      isLoading.value = true
      const response = await provider.users.createUser(mutableUser)
      isLoading.value = false
      if (response.code == 201) {
        router.push({ name: 'users' })
      }
    }

    return {
      mutableUser,
      createUser
    }
  }
})
</script>
