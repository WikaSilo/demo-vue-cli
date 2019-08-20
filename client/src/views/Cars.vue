<template>
  <div>
    <ul>
      <li v-for="car in cars" :key="car.id">
        <router-link :to="`/cars/${car.id}`">{{ car.name }}</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
import axios from '@/apis/server.js'

export default {
  name: 'cars',
  data: function () {
    return {
      cars: []
    }
  },
  created: function () {
    axios.get('/cars')
      .then(({ data }) => {
        this.cars = data
      })
      .catch(err => {
        console.log(err)
        alert('error!')
      })
  }
}
</script>

<style>

</style>
