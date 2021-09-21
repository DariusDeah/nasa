<template>
  <form @submit.prevent="showdata()">
    <div class="calendar">
      <input type="date" v-model="state.date">
      <button type="submit" class="btn btn-primary">
        submit
      </button>
    </div>
  </form>
  <div>
    <h4>{{ Title }}</h4>
    <div>
      <img :src="Url" alt="">
      <p>{{ Story }}</p>
    </div>
  </div>
</template>

<script>
import { logger } from '../utils/Logger'
import { nasaApiService } from '../services/NasaApiService'
import { reactive } from '@vue/reactivity'
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
export default {
  components: {},
  name: 'CalendarPage',
  setup() {
    const state = reactive({
      date: ''
    })

    return {
      state,
      async showdata() {
        try {
          await nasaApiService.getNasaData(state.date)
        } catch (error) {
          logger.log(error)
        }
      },
      Url: computed(() => AppState.apod.url),
      Date: computed(() => AppState.apod.date),
      Story: computed(() => AppState.apod.explanation),
      Title: computed(() => AppState.apod.title)

    }
  }
}
</script>
<style scoped lang="scss">

</style>
