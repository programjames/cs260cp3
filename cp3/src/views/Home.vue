<template>
<div>
  <div class="wrapper">
    <div class="search">
      <form class="pure-form">
        <i class="fas fa-search"></i><input v-model="searchText" />
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
      searchText: '',
    }
  },
  computed: {
    houses() {
      return this.$root.$data.houses.filter(house => house.address.toLowerCase().search(this.searchText.toLowerCase()) >= 0);
    }
  }
}
</script>
