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
    props: {
      id: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        ready: false
      }
    },
    mounted() {
      this.layer = map(this.id,  {
        center: [31, 120],
        zoom: 13
      });
      // this.$listeners是个对象，变量对象实现leaflet插件的原生方法也能在组件中使用
      console.log('this.$listeners :', this.$listeners);
      Object.keys(this.$listeners).forEach(item => {
        const event = this.$listeners[item];
        this.layer.on(item, event)
      })
      // 除了遍历this.$listeners，使用leaflet自带的DomEvent也是同样的效果，原理也相同
      console.log('DomEvent', DomEvent.on(this.layer, this.$listeners));

      this.$nextTick(() => {
        this.ready = true;
        this.$emit('loaded')
      })
    }
  }
</script>