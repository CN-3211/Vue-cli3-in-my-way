<!--
 * @Author: your name
 * @Date: 2019-11-06 13:38:45
 * @LastEditTime: 2019-12-11 15:28:57
 * @LastEditors: huangzh873
 * @Description: event delegation -- 事件委托
 * @FilePath: \Vue-cli3-in-my-way\src\views\test.vue
 -->
<template>
  <div class="delegation">
    <ul id="lists234">
      <li class="list cursor-pointer"><span>list 1</span></li>
      <li class="list cursor-pointer"><span>list 2</span></li>
      <li class="list cursor-pointer"><span>list 3</span></li>
    </ul>
    <p>{{clickElement}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      clickElement: ''
    }
  },
  mounted() {
    var lists = document.getElementById('lists234');

    /**
     * @description: 父节点，要判断的tag名（大写）， 需要触发的事件，回调函数
     * @param {_parentNode, _targetName, _event, _hanlder} 
     * @return: 
     */
    let that = this;
    function delegate(_parentNode, _targetName, _event, _hanlder) {
      _parentNode.addEventListener(_event, function (e) {
        // 判断点击的元素是否有父级元素
        let tmp = e.target.parentNode === _parentNode ? e.target : e.target.parentNode;
        while (tmp) {
          if(tmp.tagName === _targetName) {
            break
          }
          tmp = tmp.parentNode
        }
        if(tmp.tagName === _targetName) {
          _hanlder(e)
        } else{
          return
        }
      })
    }
    delegate(lists, 'LI', 'click', function(e) {
      that.clickElement = '刚刚点击得元素是'+ e.target.innerText;
    })
  }
}

</script>

<style lang="scss" scoped>
.delegation {
  .list {
    width: 200px;
    height: 80px;
    border: 1px solid red;
  }
}
</style>