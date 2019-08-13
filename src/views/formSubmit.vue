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
import axios from 'axios'
export default {
  data () {
    return {
      list: {}
    }
  },
  beforeMount () {
    this.getlist()
  },
  methods: {
    getlist () {
      axios.get('api/article/?format=json').then(res => {
        if (res.status === 200) {
          this.list = res.data
        }
      })
    }
  }
}
</script>
