<template>
  <div :id="id" class="leaflet-map">
    <slot v-if="ready"></slot>
  </div>
</template>

<script>
  import 'leaflet/dist/leaflet.css';
  import { map, control, DomEvent, CRS, Icon, canvas } from 'leaflet';
  import { ICON_DEFAULT } from '../utils';
  
  export default {
    data() {
      return {
        id: 'map',
        ready: false
      }
    },
    mounted() {
      this.layer = map('map',  {
        center: [31, 120],
        zoom: 13
      });
      this.$nextTick(() => {
        this.ready = true;
        this.$emit('loaded')
      })
    }
  }
</script>