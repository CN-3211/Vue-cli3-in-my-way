<template>
  <div class="cesiumImagery">
    <vc-viewer @ready="ready">
      <vc-layer-imagery ref="layerText" :alpha="alpha" :brightness="brightness" :contrast="contrast" :sortOrder="20">
        <vc-provider-imagery-wmts
          :url="urlText"
          :wmtsStyle="style"
          :tileMatrixSetID="tileMatrixSetID"
          :credit="credit"
          :subdomains="subdomains"
          :tilingScheme="tilingScheme"
          :tileMatrixLabels="tileMatrixLabels"
          :token="token"
          :layer="layer2"
        ></vc-provider-imagery-wmts>
      </vc-layer-imagery>
      <vc-layer-imagery :alpha="alpha" :brightness="brightness" :contrast="contrast" :sortOrder="10">
        <vc-provider-imagery-wmts
          :url="url"
          :wmtsStyle="style"
          :tileMatrixSetID="tileMatrixSetID"
          :credit="credit"
          :subdomains="subdomains"
          :tilingScheme="tilingScheme"
          :tileMatrixLabels="tileMatrixLabels"
          :token="token"
          :layer="layer1"
        ></vc-provider-imagery-wmts>
      </vc-layer-imagery>
    </vc-viewer>
    <div class="demo-tool">
      <span>透明度</span>
      <vue-slider v-model="alpha" :min="0" :max="1" :interval="0.01"></vue-slider>
      <span>亮度</span>
      <vue-slider v-model="brightness" :min="0" :max="3" :interval="0.01"></vue-slider>
      <span>对比度</span>
      <vue-slider v-model="contrast" :min="0" :max="3" :interval="0.01"></vue-slider>
      <span>切换服务</span>
      <el-select v-model="url" placeholder="请选择服务">
        <el-option v-for="item in options" :key="item.value" :value="item.value">
          {{item.label}}
        </el-option>
      </el-select>
    </div>
  </div>
</template>

<script>
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/antd.css'
  export default {
    data() {
      return {
        layer1: 'img',
        layer2: 'cia',
        url:
          'https://{s}.tianditu.gov.cn/img_c/wmts?service=WMTS&version=1.0.0&request=GetTile&tilematrix={TileMatrix}&layer=img&style={style}&tilerow={TileRow}&tilecol={TileCol}&tilematrixset={TileMatrixSet}&format=tiles',
        urlText:
          'https://{s}.tianditu.gov.cn/cia_c/wmts?service=WMTS&version=1.0.0&request=GetTile&tilematrix={TileMatrix}&layer=cia&style={style}&tilerow={TileRow}&tilecol={TileCol}&tilematrixset={TileMatrixSet}&format=tiles',
        style: 'default',
        tileMatrixSetID: 'c',
        tileMatrixLabels: [
          '1',
          '2',
          '3',
          '4',
          '5',
          '6',
          '7',
          '8',
          '9',
          '10',
          '11',
          '12',
          '13',
          '14',
          '15',
          '16',
          '17',
          '18',
          '19'
        ],
        credit: '天地图WMTS服务',
        subdomains: ['t0', 't1', 't2', 't3', 't4', 't5', 't6', 't7'],
        tilingScheme: {},
        options: [
          {
            label: 'image',
            value:
              'https://{s}.tianditu.gov.cn/img_c/wmts?service=WMTS&version=1.0.0&request=GetTile&tilematrix={TileMatrix}&layer=img&style={style}&tilerow={TileRow}&tilecol={TileCol}&tilematrixset={TileMatrixSet}&format=tiles'
          },
          {
            label: 'vector',
            value:
              'https://{s}.tianditu.gov.cn/vec_c/wmts?service=WMTS&version=1.0.0&request=GetTile&tilematrix={TileMatrix}&layer=vec&style={style}&tilerow={TileRow}&tilecol={TileCol}&tilematrixset={TileMatrixSet}&format=tiles'
          }
        ],
        alpha: 1,
        brightness: 1,
        contrast: 1,
        token: '436ce7e50d27eede2f2929307e6b33c0'
      }
    },
    methods: {
      ready(cesiumInstance) {
        const { Cesium, viewer } = cesiumInstance
        this.cesiumInstance = cesiumInstance
        this.tilingScheme = new Cesium.GeographicTilingScheme()
      }
    },
    components: {
      VueSlider
    }
  }
</script>