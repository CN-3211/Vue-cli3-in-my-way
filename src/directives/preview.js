import Vue from 'vue';

Vue.directive('preview', {
  bind(el, binding) {
    function previewImg() {
      // 创建三个div作为容器
      let wrap = document.createElement('div')
      let blur = document.createElement('div')
      let img = document.createElement('img')

      el.__blur__ = blur
      blur.setAttribute('class', 'previewBlur')
      img.src = el.src;
      img.style.width = '400px';
      img.style.height = '400px';

      blur.setAttribute('class', 'previewBlur')
      wrap.setAttribute('class', 'wrapBlur')
      img.setAttribute('class', 'previewImg')
      document.body.append(wrap)
      wrap.append(blur)
      wrap.append(img)

      function blurClick() {
        document.body.removeChild(wrap)
        blur.removeEventListener('click', blurClick)
      }
      el.__blurClick__ = blurClick
      el.__previewImg__ = previewImg
      blur.addEventListener('click', blurClick)
    }
    el.addEventListener('click', previewImg)
  },
  unbind(el) {
    el.__blur__.removeEventListener('click', el.__blurClick__)
    el.removeEventListener('click', el.__previewImg__)
  }
})
