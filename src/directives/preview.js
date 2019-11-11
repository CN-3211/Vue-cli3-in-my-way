import Vue from 'vue';
import { className } from '_postcss-selector-parser@6.0.2@postcss-selector-parser';

Vue.directive('preview', {
  bind(el, binding) {
    function previewImg(e) {
      console.log('el :', el);
      let wrap = document.createElement('div')
      let div = document.createElement('div')
      let img = document.createElement('img')
      el.__myDiv__ = div
      div.setAttribute('class', 'previewBlur')
      img.src = el.src;
      img.style.width = '400px';
      img.style.height = '400px';
      console.log('binding :', binding);
      div.setAttribute('class', 'previewBlur')
      wrap.setAttribute('class', 'wrapBlur')
      img.setAttribute('class', 'previewImg')
      document.body.append(wrap)
      wrap.append(div)
      wrap.append(img)
      console.log('e :', e);
      function divClick() {
        document.body.removeChild(wrap)
        div.removeEventListener('click', divClick)
      }
      el.__divClick__ = divClick
      el.__previewImg__ = previewImg
      div.addEventListener('click', divClick)
    }
    el.addEventListener('click', previewImg)
    // document.addEventListener('click', previewImg)
  },
  unbind(el) {
    el.__myDiv__.removeEventListener('click', el.__divClick__)
    el.removeEventListener('click', el.__previewImg__)
  }
})
