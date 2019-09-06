<template>
  <div class="formSubmit">
    <ul>
      <li v-for="item in list" :key="item.id">
        <p>{{item.article_title}}</p>
        <p>{{item.article_header}}</p>
      </li>
    </ul>
  </div>
</template>
<script>
import { getFakeJson } from '~api';
export default {
  data () {
    return {
      list: [],
      dataFake: [],
      value: []
    }
  },
  async mounted () {
    let data = await getFakeJson()
    console.log('data :', data);
  },
  methods: {
    // setFake(params) {
    //   getFake(params).then( data => {
    //     this.dataFake = data;
    //     this.dataFake.forEach(item => {
    //       this.list.push(Object.keys)  
    //       console.log('this.list :', this.list);
    //     })
    //   })
    // }
  }
}
</script>
