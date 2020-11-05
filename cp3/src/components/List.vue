<template>
<div class="wrapper">
  <div class="houses">
    <div class="house" v-for="house in houses" :key="house.id">
      <div class="info">
        <h1>{{house.address}}</h1>
        <h2>{{house.city}}, UT</h2>
      </div>
      <img class="preview" :src="'/images/houses/'+house.id+'.jpg'">
      <div class="price">
        <h2>{{house.price}}</h2>
        <h3>(${{Math.round(house.price.substring(1)/house.sq_ft*100)/100}}/ft²)</h3>
        <button class="auto" @click="showMap(house)">Show on Map</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'List',
  props: {
    houses: Array,
  },
  methods: {
    showMap(house) {
      this.$root.$data.mapID = house.id;
      this.$router.push("Map");
    },
  },
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
