<template>
<div>
  <div class="wrapper">
    <div class="search">
      <form class="pure-form">
        Between <input v-model="minPrice" /> and <input v-model="maxPrice" />
      </form>
    </div>
  </div>
  <List :houses="houses" />
</div>
</template>

<script>
import List from '@/components/List.vue'

export default {
  name: 'Home',
  components: {
    List
  },
  data() {
    return {
      minPrice: 100000,
      maxPrice: 1000000,
    }
  },
  computed: {
    houses() {
      return this.$root.$data.houses.filter(house =>
        parseInt(house.price.substring(1)) > parseInt(this.minPrice) &&
        parseInt(house.price.substring(1)) < parseInt(this.maxPrice));
    }
  }
}
</script>
