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
        <h2>${{(Math.round(Number(house.price.substring(1)))).toLocaleString()}}</h2>
        <h3>({{Math.round(house.price.substring(1)/house.sq_ft*100)/100}}/ft²)</h3>
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
  width: 100%;
}

.houses {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.house {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  margin-top: 30px;
  width: 100%;
}

.info {
  width: 100%;
  background-color: #ccc;
  padding-top: 10px;
  padding-bottom: 10px;
}

.info h1,
.info h2 {
  padding: 0;
  margin: 0;
  text-align: center;
}

.info h1 {
  font-weight: normal;
}

.info h2 {
  font-size: 16pt;
}

.preview {
  width: 100%;
  height: 300px;
  object-fit: cover;
  object-position: center;
}

.price {
  background-color: #ddd;
  width: 100%;
}

.price h2,
.price h3 {
  padding: 0;
  margin: 0;
  text-align: center;
  font-weight: normal;
}

button {
  width: 100%;
  background-color: #000;
  color: #fff;
  border: none;
  margin-top: 5px;
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 14pt;
  font-family: Georgia;
  font-weight: bold;
}

@media only screen and (min-width: 500px) {
  .houses {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .house {
    width: 30%;
    margin: 20px;
  }
}
</style>
