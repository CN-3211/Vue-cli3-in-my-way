<script>
import { tileLayer } from 'leaflet';
import { tileUrl } from '../utils/index'
export default {
  props: {
    url: {
      type: String,
      default: () => tileUrl
    },
    visible: {
      type: Boolean,
      default: true
    }
  },
  mounted() {
    // this.visible && this.
    console.log('this :', this);
    this.layer = L.tileLayer(
      "http://webrd01.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=7&x={x}&y={y}&z={z}",
      {
        subdomains: ["1", "2", "3", "4"],
        attribution: "高德"
      }
    ).addTo(this.$parent.layer)
    this.$nextTick(() => {
      this.$emit('loaded')
    })
  }
}
</script>