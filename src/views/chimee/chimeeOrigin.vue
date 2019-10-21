<template>
  <div id="wrapper"></div>
</template>

<script>
import Chimee from 'chimee';

export default {
  mounted() {
    const chimee = new Chimee('#wrapper');
    chimee.on('play', () => console.log('play!!'));
    chimee.load('http://cdn.toxicjohann.com/lostStar.mp4');
    chimee.play(); // play!!
  }
}
</script>

<style>

</style>