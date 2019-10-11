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
    
  }
</script>