---

title: 如何删除Object的一个键值对

meta: 

  - name: 如何活用ES6新增的解构赋值

    content: 页面描述（为了SEO）

  - name: keywords

    content: 页面关键词（为了SEO）

date: 2019-11-11（创建日期）

update_date: 2019-11-12（更新日期）
 
tags: 

  - JavaScript

copyright: 博文版权，默认：允许转载，需保留原文链接，著作权归博主所有

---

## JavaScript对象操作方法------删除一个键值对

```javascript
const Obj = {
    id: 1,
    firstName: 'huang',
    lastName: 'zihan',
    time: '2019/09/23',
    status: 'working'
}

const { id, ...query } = Obj;//  通过解构赋值，删除Obj对象中的id的键值对
console.log('打印出来的是删除后的对象', query);
```

上述方法是通过ES6的解构赋值实现快速删除Obj的一个键值对，这种删除方式**不会改变原对象**，只会把删除id后的结果返回给query对象，原对象obj依然包含id属性



下面通过原生的Object方法实现删除对象的某一个键值对

```javascript
delete Obj.id;//  原生的js语法删除Obj
```

> 使用delete的方法删除时，只能删除对象的一个属性，不能删除别的内容（例如：变量，函数等），当使用delete无法删除时。会返回**false**







