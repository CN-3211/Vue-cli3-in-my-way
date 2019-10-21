<template>
  <div id="mapGroup">
    <div id="map"></div>
  </div>
</template>

<script>
  import 'leaflet/dist/leaflet.css';
  import L from 'leaflet';
  export default {
    mounted() {
      let map = L.map('map', {
        center: [31, 120],
        zoom: 13
      });
      L.tileLayer(
        "http://webrd01.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=7&x={x}&y={y}&z={z}",
        {
          subdomains: ["1", "2", "3", "4"],
          attribution: "高德"
        }
      ).addTo(map);
    }
  }
</script>
<style lang="scss" scoped>
  #map{
    width: 100%;
    height: 800px;
  }
</style>