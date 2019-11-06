### 疑难杂症403，400

1. #### 403，一般是没有用户权限，即access_token缺失

   - when：工作3月

   - where：钱塘江项目，一张图模块开发

   - why：Arcgis组件需要传url（即通过地图服务获取数据），现在数据改成从接口获取，然而Arcgis不支持直接传入geoData，只能传url，因此需要能够直接获取到接口返回的数据。

   - how：刚开始面临的一个问题，项目平时调用接口只需要以如下写法就可以了

     ```javascript
     export default getApi('/gateway/services/changeData/api/jiekouming');
     ```

     

     这种是利用封装好的axios获取数据，所有的baseUrl都是已经配置好的，为了将此接口直接转换成url我需要在gateway前面手动拼上项目服务器的地址（以我本机ip地址为例）

     ```javascript
     url: 'http://172.19.34.155:8080/gateway/services/changeData/api/jiekouming'
     ```

     

     然而在实际的开发过程中，会分为两个发布环境，分别是开发环境和线上环境，通常以变量的形式存在，所有在url需要使用字符串拼接的方式

     > 此处假设两个环境变量存放在**root变量**里面

     ```javascript
     url: `${root}/gateway/services/changeData/api/jiekouming`
     ```

     此时已经解决了线上环境和开发环境不同的问题，但是通过外链接肯定无法直接访问服务器上的接口，下面最关键的一步是获取页面的access_token并拼接在接口后，具体如何取得access_token根据项目的具体情况而定，钱塘江项目的access_token是放在**sessionStorage**里面的

     ```javascript
     url: `${root}/gateway/services/changeData/api/jiekouming?access_token=${sessionStorage.getItem('access_token')}`
     ```

     

     

     通过上述操作，就可以使传入的url变成可以在浏览器中直接访问的url

     PS：把access_token直接拼接在url后面往往会遇到一些问题，例如有些组件（例如arcGis）会因为url过长自动将发送请求的方式**从get换成post**，另外就是容易遇到**400问题**

     

2. #### 400请求在送到服务器之前就报错了

   * when：工作三个半月

   * where：钱塘江项目，一张图模块开发

   * why：钱塘江系统设置了两种用户权限，分别是user和admin登陆，使用user登陆能正常获取到接口的数据，使用admin登陆调用接口会报400错误，需要解决400的问题

   * how：经过多次排查发现只有在登陆user的时候才能正常的获取拼接access_token后的url，在登陆admin无法获取到拼接access_token后的url，会报错400。此时发现**access_token过长会导致接口400**并且admin是具有管理员权限，access_token会比user的长得多，所以只有在登陆admin的情况会出现400问题，而user不会

     **在排查的过程中，会出现都是admin登陆有时候400有时候不是400的问题，在彻底明白是access_token燥造成的原因后才明白，如果之前是用user登陆过系统，不清除缓存重新加载或者说不重新打开浏览器窗口重新加载的话，上次user登陆的sessionStorage会残留在本地的储存中，这个时候就算退出user登陆，重新使用admin登陆，还是不会出现400；同理，先登录admin在登陆user，依然会出现400问题**



