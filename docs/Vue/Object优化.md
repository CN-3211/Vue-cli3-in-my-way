###  Vue数据优化方法之Object

```javascript
const obj = {
    example1: 'exa',
    example2: 'exa2'
}
Obj.assign({}, obj, example1 = 'exa3')
// 改变obj里面的example2的值，效率更高
Object.freeze(obj)
// 冻结vue给对象添加的set和get方法，一般在return内使用，对象冻结了之后，
// 除非通过Object.assign改变对象的值，否则通过obj.example1的方式改变对象的值不起作用，无法让视图同步更新
```

除了以上两种方法可以对数据进行优化以外，还能能把数据直接写在return的外面，data的里面

```javascript
export default {
    data() {
        this.dataJs = '仅能用于在js中处理数据，相当于var了一个变量，不能用在template里'
        return {
            dataView: '在template同步更新'
        }
    }
}
```

写在return外面data里面的数据通常有两种特征

1. 死数据，其值通常不会被改变，例如geoJson画出来的地图数据
2. 数据可以进行改变，但是只会在**script**标签中间使用，类似var了一个变量，不具有vue里面的数据绑定的特性





**以后更改对象的值，统一使用Object.assign方式修改，不仅提高性能，还为以后的react学习打基础（react已经统一了更改对象的规范，即使用Object.assign实现）**