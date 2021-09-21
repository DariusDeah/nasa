<template>
  <div class="calendar">
    <input type="date" v-model="state.date">
  </div>
</template>

<script>
import { logger } from '../utils/Logger'
import { nasaApiService } from '../services/NasaApiService'
import { reactive } from '@vue/reactivity'
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
          logger.error(error)
        }
      }
    }
  }
}
</script>
<style scoped>
</style>
