<template>
  <div id="cVideo"></div>
</template>

<script>
import 'chimee-player/lib/chimee-player.css';
import ChimeePlayer  from 'chimee-player';

export default {
  props: {
    src: {
      type: String,
      default: ''
    },
    autoPlay: {
      type: Boolean,
      default: false
    },
    controls: {
      type: Boolean,
      default: true
    },
    poster: {
      type: String,
      default: ''
    },
    play: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    const options = {
      wrapper: '#cVideo',
      src: this.src,
      autoPlay: this.autoPlay,
      controls: this.controls,
      poster: this.poster
    }
    this.instance = new ChimeePlayer(options);

    // 后面三个this不明白
    this.play && this.instance.play();

    this.instance.on('play', () => {
      this.$emit('update:play', true)
    })
    this.instance.on('pause', () => {
      this.$emit('update:play', false)
    })
    console.log('this.play :', this.play);
    console.log('this.instance.play() :', this.instance.play());
    // this.play && this.instance.play();
  },
  methods : {
    
  },
  watch: {
    src: {
      handler(val) {
        this.instance.load(val)
        this.instance.play()
      }
    },
    play: {
      handler(val) {
        if(val) {
          this.instance.play();
        } else {
          this.instance.pause();
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#wrapper{
  /deep/{
    .chimee-container{
    position: relative;
  }
  .time-ad{
    background-color: transparent;
    border:0;
  }
  .time-ad img{
    display: block;
    width: 30px;
  }
  .time-ad em{
    position: absolute;
    right: -7px;
    top: 35px;
    width: 60px;
    text-align: center;
    font-size: 12px;
    background-color: rgba(156, 85, 85, 0.66);
    padding: 0 3px;
    z-index: -1;
    border-radius: 5px;
  }
  .time-ad cm-pp-close{
    display: none;
  }
  .time-ad cm-pp-body{
    padding: 0;
  }
  }
}
</style>