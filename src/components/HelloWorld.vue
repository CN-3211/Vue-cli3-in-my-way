<template>
  <div class="wrap">
    <el-row>
      <el-col v-for="{ id, zoomMethod, moveMethod, mapInstance } in mapGroup" :key="id" :span="12">
        <LMap @zoomanim="zoomParams => getZoomMethod(zoomParams, zoomMethod)" @move="moveParams => getMoveMethod(moveParams, moveMethod, id)" @loaded="layer => getMapInstance(layer, mapInstance)" :id="id" class="full-width height-800">
          <LTileLayer></LTileLayer>
        </LMap>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import LMap from './leaflet/components/map';
import LTileLayer from './leaflet/components/tileLayer';
export default {
  data() {
    return {
      mapGroup: [
        { id: 'id1', zoomMethod: 'zMethod1', moveMethod: 'mMethod1', mapInstance: 'instance1' },
        { id: 'id2', zoomMethod: 'zMethod2', moveMethod: 'mMethod2', mapInstance: 'instance2' }
      ]
    }
  },
  methods: {
    //  利用下面方式将v-for循环出来的内容绑定不同function
    getMapInstance(layer, mapInstance) {
      this[mapInstance](layer);
    },
    getZoomMethod(params, zoomMethod) {
      this[zoomMethod](params);
    },
    getMoveMethod(params, moveMethod, id) {
      console.log('id :', id);
      // console.log('params :', params.target.getCenter());
      this[moveMethod](params);
      // this.mapInstance2.setView([30,120])
      // this.mapInstance2.setView(this.movePoint1);
    },
    //  缩放和移动事件
    zMethod1(params) {
      let centerPoint = params.target.getZoom();
    },
    mMethod1(params) {
      this.movePoint1 = params.target.getCenter();
      // console.log('params1 :', this.movePoint1);
    },
    zMethod2(params) {
      console.log('params3 :', params);
    },
    mMethod2(params) {
      this.movePoint2 = params.target.getCenter();
      console.log('params22 :', this.movePoint2);
    },
    // 存储instance
    instance1(layer) {
      this.mapInstance1 = layer;
    },
    instance2(layer) {
      this.mapInstance2 = layer;
;    },
    mapOneMove(move) {
    },
    mapOneZoom(zoom, id) {
      if(id === 'id1') {
        
      }
      // console.log('zoom :', zoom);
    }
  },
  components: {
    LMap,
    LTileLayer
  }
}
</script>

<style>

</style>