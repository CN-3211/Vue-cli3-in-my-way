<script>
  import { debounce } from '~utils';
  export default {
    functional: true,
    render(createElement, context) {
      let listeners = context.listeners;
      listeners.click = debounce(context.listeners.click, 1000);
      return createElement('el-button', {
        attrs: context.props,
        on: listeners,
      }, context.slots().default)
    }
  }
</script>