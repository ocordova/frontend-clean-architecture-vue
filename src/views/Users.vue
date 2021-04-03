<template>
  <loading v-if="isLoading" />
  <div class="text-gray-900" v-else>
    <div class="w-full flex flex-wrap items-center justify-between mt-8">
      <h1 class="font-semibold text-3xl">Users</h1>
      <div></div>
    </div>
    <div lass="mt-8">
      <div class="flex flex-wrap -mx-1 lg:mx-4">
        <div
          class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3"
          v-for="(user, index) in users"
          :key="index"
        >
          <div
            class="flex flex-col items-center justify-center rounded-lg shadow-lg p-2 md:p-4 border h-64"
          >
            <div
              class="m-1 mr-2 w-20 h-20 relative flex justify-center items-center rounded-full bg-gray-400 text-4xl text-white uppercase"
            >
              {{ user.nameFirstLetter() }}
            </div>

            <h1 class="text-lg mt-3 max-w-full truncate">
              {{ user.name }}
            </h1>
            <p class="text-gray-400 mt-2 max-w-full truncate">
              {{ user.email }}
            </p>
          </div>
        </div>
      </div>
      <div class="flex flex-row justify-center items-center my-8">
        <button
          @click="previousPage"
          :disabled="!hasPrevious"
          class="h-12 w-12 mr-8 flex justify-center items-center rounded-full bg-gray-200 cursor-pointer hover:bg-gray-500 hover:text-white disabled:opacity-50 disabled:text-gray-900 disabled:bg-gray-200 disabled:cursor-not-allowed"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-chevron-left w-6 h-6"
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        <button
          @click="nextPage"
          :disabled="!hasNext"
          class="h-12 w-12 ml-1 flex justify-center items-center rounded-full bg-gray-200 cursor-pointer hover:bg-gray-500 hover:text-white disabled:opacity-50"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-chevron-right w-6 h-6"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { onMounted, ref } from '@vue/composition-api'
import { useProvider } from '@/core/presentation/provider'
import Loading from '../components/Loading'
export default {
  setup() {
    const provider = useProvider()
    const users = ref([])
    const pagination = ref({})
    const currentPage = ref(1)
    const isLoading = ref(true)
    const hasNext = ref(false)
    const hasPrevious = ref(false)

    const getUsers = async () => {
      isLoading.value = true
      const { data, pagination } = await provider.users.getUsers(
        currentPage.value
      )
      isLoading.value = false
      users.value = data
      pagination.value = pagination
      currentPage.value = pagination.page
      hasPrevious.value = pagination.hasPrevious()
      hasNext.value = pagination.hasNext()
    }

    const nextPage = () => {
      currentPage.value++
      getUsers()
    }

    const previousPage = () => {
      currentPage.value--
      getUsers()
    }

    onMounted(getUsers)

    return {
      isLoading,
      users,
      currentPage,
      pagination,
      hasNext,
      hasPrevious,
      nextPage,
      previousPage
    }
  },
  components: { Loading }
}
</script>
