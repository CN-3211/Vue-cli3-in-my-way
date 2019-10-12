<template>
  <div class="wrap">
    <LMap class="width-800 height-800">
      <LTileLayer></LTileLayer>
    </LMap>
  </div>
</template>

<script>
import LMap from './leaflet/components/map';
import LTileLayer from './leaflet/components/tileLayer';
export default {
  components: {
    LMap,
    LTileLayer
  }
}
</script>

<style>

</style>