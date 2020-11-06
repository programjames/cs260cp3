<template>
<div>
  <div class="wrapper">
    <form>
      <i class="fas fa-search"></i><input v-model="searchText" />
    </form>
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
      return this.$root.$data.houses.filter(house => house.city.toLowerCase().search(this.searchText.toLowerCase()) >= 0);
    }
  }
}
</script>

<style scoped>
.wrapper form {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  align-items: center;
}

.wrapper form * {
  margin-left: 5px;
  margin-right: 5px;
}

.input-text {
  width: auto;
}

@media only screen and (min-width: 1200px) {
  form {
    height: 75px;
    font-size: 28pt;
  }

  form * {
    display: flex;
    align-items: center;
    height: 50px;
    font-size: 28pt;
  }
}
</style>
