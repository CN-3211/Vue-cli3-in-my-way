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
import { getFake } from '../api/getFake';
export default {
  data () {
    return {
      list: [],
      dataFake: []
    }
  },
  beforeMount () {
    
    this.setFake({userId:1})
  },
  methods: {
    setFake(params) {
      getFake(params).then( data => {
        this.dataFake = data;
        this.dataFake.forEach(item => {
          this.list.push(Object.keys)  
          console.log('this.list :', this.list);
        })
      })
    }
  }
}
</script>
