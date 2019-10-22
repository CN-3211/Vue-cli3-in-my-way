<template>
  <div class="wrap">
    <el-row>
      <el-col v-for="{ id, ref } in mapGroup" :key="id" :span="12">
        <!-- 此处的zoomParams => mapOneZoom(zoomParams, id, ref)纯粹是为了练习用法，不做参考 -->
        <LMap :ref="ref" @zoomanim="zoomParams => mapOneZoom(zoomParams, id, ref)" @move="moveParams => mapOneMove(moveParams, id, ref)" :id="id" class="full-width height-800">
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
        { id: 'id1', ref: 'ref1' },
        { id: 'id2', ref: 'ref2' }
      ]
    }
  },
  methods: {
    mapOneMove(move1) {
      console.log('move1 :', move1);
    },
    mapOneZoom(zoom1) {
      console.log('zoom1 :', zoom1);
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