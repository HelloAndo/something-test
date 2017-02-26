<template>
  <div id="app">
    <div v-if="process === 'development'">
      <img src="./assets/logo.png">
    </div>
    <router-link :to="'table'">表格</router-link>
    <router-link :to="'hello'">HELLO</router-link>
    <a href="javascript:"
        @click="addQuery">添加query</a>
    <a href="javascript:"
        @click="getQuery">获取query</a>
    <router-view></router-view>
  </div>
</template>

<script>
var process = 'development'
export default {
  name: 'app',
  computed: {
    process () {
      return this.$parent.process
    }
  },
  methods: {
    addQuery () {

      let query = {
        a: 'apple',
        b: 'boy',
        c: 'car',
        d: '单身狗'
      };
      let encodeQ = '';
      for(let key in query) {
        encodeQ = encodeQ.concat('&' + key + '=' + encodeURI(query[key]));
      }
      // console.log(encodeQ)
      console.log(window.location.hash.split('?'))
      window.location.hash.split('?').length > 1
      ? window.location.hash.split('?')[1] = encodeQ
      : window.location.hash = encodeQ.replace(/^&/, '?')
      // window.location.hash = encodeQ.replace(/&/, '?')
      // this.$router.push({query: {
      //   a: 'apple',
      //   b: 'boy',
      //   c: 'car',
      //   d: '单身狗'
      // }})
    },
    getQuery () {
      // let q = window.location.hash.split('?')[1];
      // let qs = {};
      // let queryArr = q.split('&');
      // for (let i = 0; i < queryArr.length; i++) {
      //   qs[queryArr[i].split('=')[0]] = decodeURI(queryArr[i].split('=')[1]);
      // }
      // console.log(qs)
      console.log(this.getUrlParam('e'))
      console.log(this.getUrlParam('a'))
      console.log(this.getUrlParam('b'))
      console.log(this.getUrlParam('c'))
      console.log(this.getUrlParam('d'))
    },
    //获取url中的参数
    getUrlParam (name) {
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
      var r = 
      window.location.hash.split('?').length > 1
      ? window.location.hash.split('?')[1].match(reg)
      : null
      // var r = window.location.hash.split('?')[1].match(reg); //匹配目标参数
      // debugger
      return r ? decodeURI(r[2]) : null;
      // if (r != null) return decodeURI(r[2]); return null; //返回参数值
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
