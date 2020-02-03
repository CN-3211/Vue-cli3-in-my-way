<script>
  import { debounce } from '~utils';
  export default {
    functional: true,
    render(h, context) {
      const vnode = context.slots().default[0];
      const isComp = !!vnode.componentOptions;
      console.log(vnode);
      if (vnode.tag === 'button') {
        const defaultClick = vnode.data.on.click;
        vnode.data.on.click = debounce(defaultClick, 1000);
      } else if (isComp && vnode.componentOptions.tag === 'el-button') {
        const defaultClick = vnode.componentOptions.listeners.click;
        vnode.componentOptions.listeners.click = debounce(defaultClick, 1000);
      } else if (isComp && vnode.componentOptions.tag === 'el-input') {
        const defaultInput = vnode.componentOptions.listeners.input;
        vnode.componentOptions.listeners.input = debounce(defaultInput, 1000);
      }
      return vnode;
    }
  }
</script>