<script>
import { tileLayer } from 'leaflet';
import { tileUrl } from '../utils/index'
export default {
  props: {
    url: {
        type: String,
        default: () => tileUrl
    }
  },
  mounted() {
    this.$nextTick(() => {
        this.$emit('loaded')
    })
  }
}
</script>