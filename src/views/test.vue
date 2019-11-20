<template>
  <div class="test">
    <div class="imgWrap">
      <img v-preview width="100" height="100" src="img/icons/android-chrome-512x512.png" />
    </div>
    <div class="textWrap">   text test<span>text1 test2</span></div>
    <div class="textSibling">text test<span>text1 test2</span></div>
    <span></span>
    <img src="" alt="">
    <a href=""></a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: ''
    }
  },
  mounted() {
    let divWrap = document.getElementsByClassName('test')[0];
    let divSelf = document.getElementsByClassName('textWrap')[0];
    let divSibling = document.getElementsByClassName('textSibling')[0];
    let divNew = document.createElement('p');
    // 遍历父节点下的所有子节点
    (function DOMComb(parent, callBack) {
      if(parent.hasChildNodes()) {
        for(let node = parent.firstChild;node;node = node.nextSibling) {
          DOMComb(node, callBack)
        }
      }
      callBack(parent)
    })(divWrap, node=>{
      console.log('node :', node);
    })
    // let nodeArr = Array.prototype.map.call(divWrap.childNodes)
    // console.log('nodeArr :', nodeArr);
    // divWrap.childNodes.forEach(item => {
    //   console.log('item :', item);
    // })
    // divSelf.textContent = '<p>12345</p><p>12345</p>'
    // while (divSelf !== null) {
    //   console.log(divSelf.nodeName)
    //   divSelf = divSelf.nextSibling;
    // }
    console.log('divNew :', divNew.isConnected);
    divWrap.appendChild(divNew)
    console.log('divNew :', divNew.isConnected);
    console.log('divWrap :', divWrap.childNodes);
    console.log(divSelf.nextSibling === divSibling)
    console.log(divSibling.previousSibling === divSelf)
    console.log('nodeName :', divSelf.nodeName);
    console.log('nodeValue1 :', divSelf.firstChild.nodeValue);
    console.log('nodeValue2:', divSelf.textContent);
    console.log('divSelf :', divSelf);
    console.log('aaa :', document);
    console.log('asd :', document.nodeType);
  }
}
</script>

<style lang="scss" scoped>

</style>