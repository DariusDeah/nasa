<template>
  <section class="container-fluid">
    <div class="row ">
      <form @submit.prevent="showdata()">
        <div class="calendar">
          <input type="date" v-model="state.date">
          <button type="submit" class="btn btn-primary">
            submit
          </button>
        </div>
      </form>
    </div>
  </section>
  <section class="container-fluid bg-black">
    <div class="row  text-center  ">
      <header class="col-lg-6 bg-dark text-light p-0">
        <div class="row">
          <h4>{{ Title }}</h4>
        </div>
        <div class="row">
          <p>{{ Story }}</p>
        </div>
      </header>
      <div class="col-lg-6 ">
        <img class="img img-fluid" :src="Url" alt="">
      </div>
    </div>
  </section>
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
.img{
  @media only screen and (min-width:900px)    {
    height: 85vh;

  }
}
</style>
