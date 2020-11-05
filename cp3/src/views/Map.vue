<template>
<iframe id="mapFrame" :src="src"></iframe>
</template>

<script>
export default {
  name: 'Map',
  computed: {
    src() {
      alert('https://maps.google.com/maps?q=' + this.latitude + ',' + this.longitude + '&hl=es;z=14output=embed');
      return 'https://maps.google.com/maps?q=' + this.latitude + ',' + this.longitude + '&hl=es;z=14&amp;output=embed';
    },
    latitude() {
      return this.$root.$data.houses[this.$root.$data.mapID - 1].latitude;
    },
    longitude() {
      return this.$root.$data.houses[this.$root.$data.mapID - 1].longitude;
    }
  },
  watch: {
    src() {
      document.getElementById('mapFrame').contentWindow.location.reload();
    }
  }
}
</script>

<style scoped>
#mapFrame {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 750px;
  border: none;
}
</style>
