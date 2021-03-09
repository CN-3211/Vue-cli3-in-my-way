<template>
  <div class="test">
    <vc-viewer class="viewer" :animation="animation" :timeline="timeline" :camera.sync="camera" @ready="ready">
      <vc-layer-imagery>
        <vc-provider-imagery-supermap ref="imageryProvider" :url="url" @readyPromise="readyPromise"></vc-provider-imagery-supermap>
      </vc-layer-imagery>
    </vc-viewer>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        // 左下角的圆形仪表盘
        animation: false,
        // 下方的时间轴
        timeline: false,
        camera: {
          position: {
            lng: 114.405511,
            lat: 30.53104,
            height: 100000
          },
          heading: 360,
          pitch: -90,
          roll: 0
        },
        url: 'https://www.supermapol.com/realspace/services/3D-dixingyingxiang/rest/realspace/datas/MosaicResult'
      }
    },
    methods: {
      ready(cesiumInstance) {
        const { Cesium, viewer } = cesiumInstance
        this.cesiumInstance = cesiumInstance
      },
      readyPromise() {
        const { Cesium, viewer } = this.cesiumInstance
        viewer.zoomTo(this.$refs.imageryProvider.providerContainer.imageryLayer)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .test {
    .viewer {
      width: 100%;
      height: 100%;
    }
  }
</style>