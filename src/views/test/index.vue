<template>
  <div class="wrap" functional>
    <!-- <debounce>
      <button type="submit" @click="a">sadad</button>
    </debounce> -->
    <!-- <debounce>
      <el-button type="primary" @click="a">sadad</el-button>
    </debounce>
    <debounce :auth="'AUTN_XXX'">
      <el-input style="width: 50px;" v-model="text">122121211</el-input>
    </debounce> -->
     <debounceBtn @click="a">asdasdasd</debounceBtn>
<!--    <debounceBtn2 class="debounce" type="primary" @click="a">12122</debounceBtn2>-->
  </div>
</template>

<script>
import debounce from './debounce';
import debounceBtn from './debounceBtn';
import debounceBtn2 from './debounceBtn2';

export default {
  data() {
    return {
      text: ''
    }
  },
  methods: {
    handleInput() {
      console.log(this.text)
      
    },
    a(e) {
      console.log(1);
    }
  },
  components: {
    debounce,
    debounceBtn,
    debounceBtn2
  }
}
</script>

<style>
</style>
