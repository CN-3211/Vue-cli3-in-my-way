<template>
  <div class="chimee">
    <ChimeeOrigin class="width-400 height-300" :src="src" :play.sync="isPlay"></ChimeeOrigin>
    <el-button @click="onChangeSrc" plain>点击更换地址</el-button>
  </div>
</template>

<script>
import ChimeeOrigin from './chimeeOrigin';
export default {
  data() {
    return {
      src: '111.mp4',
      isPlay: true
    }
  },
  methods: {
    onChangeSrc() {
      this.src = 'https://media.w3.org/2010/05/sintel/trailer.mp4'
    }
  },
  components: {
    ChimeeOrigin
  }
}
</script>

<style>

</style>