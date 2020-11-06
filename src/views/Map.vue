<template>
<iframe id="mapFrame" :src="src"></iframe>
</template>

<script>
export default {
  name: 'Map',
  computed: {
    src() {
      return 'https://maps.google.com/maps?q=' + this.latitude + ',' + this.longitude + '&hl=eng&z=14&output=embed';
    },
    latitude() {
      return this.$root.$data.houses[this.$root.$data.mapID - 1].latitude;
    },
    longitude() {
      return this.$root.$data.houses[this.$root.$data.mapID - 1].longitude;
    }
  }
}
</script>

<style scoped>
#mapFrame {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 400px;
  border: none;
}

@media only screen and (min-width: 1200px) {
  #mapFrame {
    height: 750px;
  }
}
</style>
