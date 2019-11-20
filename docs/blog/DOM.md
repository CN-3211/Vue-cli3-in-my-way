---

title: DOM属性

meta:

  - name: Javascript一些DOM操作

    content: 页面描述（为了SEO）

  - name: 尚未完全掌握

    content: 页面关键词（为了SEO）

date: 2019-11-20（创建日期）

update_date: 2019-11-20（更新日期）
 
tags: 

  - JavaScript

copyright: 博文版权，默认：允许转载，需保留原文链接，著作权归博主所有

---

## Object属性的操作



### 对象赋值

```javascript
// 把一个对象赋值给新的对象
let obj1 = { a: 1, b: 2 };
let obj2 = obj1;

// 仅改变指针的指向，当obj1改变的时候obj2也会改变
let obj1 = { a: 1, b: 2 };
let obj2 = obj1;
obj1.a = 3;
console.log('obj2') // { a: 3, b: 2 }

// 但是当obj1的数据类型从对象变成简单数据类型时
let obj1 = { a: 1, b: 2 };
let obj2 = obj1;
obj1 = 1;
console.log('obj2') //{ a: 1, b:2 };
```



## in运算符

最重要的一点**in运算符不能识别对象的属性是自己的还是继承的**

```javascript
// in运算符检查键名，包含的话返回true
let obj = { a: 1, b: 2 };
'a' in obj //true

// toString()是继承的属性，也会被in运算符识别
'toString' in obj //true
```

### for in

和in运算符一样，for in 也不能识别继承的属性，但是会**跳过不可遍历的属性**

```javascript
// toString等就是不可遍历的属性
let obj = { a: 1, b: 2 };
for(let i in obj) {
    console.log(i);// a, b 
}

// 原型链上定义的属性也会被for in 循环出来
Object.prototype.testhzh = 'aaa';
let obj = { a: 1, b: 2, c: 3};
for(let i in obj) {
    console.log('i :', i); // a, b, c, testhzh
}

// 结合hasOwnProperty()方法循环自身属性
for(let i in obj) {
    if(obj.hasOwnProperty(i)){
        console.log('i2 :', i); // a, b, c
    }
}
```