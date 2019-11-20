---

title: 对Objec进行优化

meta: 

  - name: 将变量在不同的位置来优化页面的性能

    content: 页面描述（为了SEO）

  - name: keywords

    content: 页面关键词（为了SEO）

date: 2019-9-16（创建日期）

update_date: 2019-10-28（更新日期）
 
tags: 

  - Vue

copyright: 博文版权，默认：允许转载，需保留原文链接，著作权归博主所有

---

##  Vue数据优化方法之Object

```javascript
const obj = {
    example1: 'exa',
    example2: 'exa2'
}
let obj2 = Obj.assign({}, obj, example1 = 'exa3')
// 浅克隆的方式改变obj里面的example2的值，并赋值给新对象obj2，不会改变原来的对象
Object.freeze(obj)
// 冻结vue给对象添加的set和get方法，对象冻结了之后，通过obj.example1 = newValue不能改变对象的值
// 但是可以通过Object.assign浅克隆对象
```

除了以上两种方法可以对数据进行优化以外，还能能把数据直接写在return的外面，data的里面

```javascript
export default {
    data() {
        this.dataJs = '在return外面data里面定义的数据'
        // vue不会给他添加set和get的监听方法，同时这里的数据也可以在template中显         示，但是不会同步视图的更新
        return {
            dataView: '正常定义在return里面的data数据'
            // 可以在templete中显示，并且可数据改变后视图会同步更新，如果这里的数据			 被Object.freeze后，效果类似于在data里return外声明变量
        }
    }
}
```

另外在data外面还可以在method里面任意定义**this.bianliang**使用，这种情况下声明的变量只能在<script></script>中全局使用，和以前的var效果类似



**以后更改对象的值，统一使用Object.assign方式修改，不仅提高性能，还为以后的react学习打基础（react已经统一了更改对象的规范，即使用Object.assign实现）**