<template>
<div>
  <div class="wrapper">
    <form>
      <span class="bold">$</span><input class="input-text" v-model="minPrice" />–<input class="input-text" v-model="maxPrice" />
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
      minPrice: "100,000",
      maxPrice: "1,000,000",
    }
  },
  computed: {
    houses() {
      return this.$root.$data.houses.filter(house =>
        parseInt(house.price.substring(1)) > this.minp &&
        parseInt(house.price.substring(1)) < this.maxp);
    },
    minp() {
      return Number(this.minPrice.replace(/,/g, ""));
    },
    maxp() {
      return Number(this.maxPrice.replace(/,/g, ""))
    }
  },
  watch: {
    minPrice(n, o) {
      if (n !== o) {
        this.minPrice = this.minp.toLocaleString();
      }
    },
    maxPrice(n, o) {
      if (n !== o) {
        this.maxPrice = this.maxp.toLocaleString();
      }
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

.bold {
  font-weight: bold;
}

.wrapper form * {
  margin-left: 5px;
  margin-right: 5px;
}

.wrapper form span {
  margin-right: 0;
}

.wrapper form .input-text {
  width: 20%;
  padding-left: 5px;
  padding-right: 5px;
}

@media only screen and (min-width: 500px) {
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

  .wrapper form .input-text {
    width: 200px;
  }
}
</style>
