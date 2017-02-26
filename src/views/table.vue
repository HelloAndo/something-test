<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>title</th>
          <th>点赞</th>
          <th>日期</th>
          <th>阅读量</th>
        </tr>
      </thead>
      <tr v-for="item in list">
        <td>{{item.id}}</td>
        <td>{{item.title}}</td>
        <td>{{item.likes}}</td>
        <td>{{item.date}}</td>
        <td>{{item.views}}</td>
      </tr>
    </table>
    <div v-for="item in comments">
      <p v-for="c in item.data">{{c.content}}</p>
    </div>

  </div>
</template>
<script>
import api from '../services/api.js'
export default {
  data () {
    return {
      list: [],
      comments: []
    }
  },
  methods: {
    getList (data) {
      api.getList()
      .then((res) => {
        this.list = res
        console.log(this.list)
        return api.getComments()
      })
      .then((res) => {
        this.comments = res
        console.log(this.comments)
      })
      .catch((err) => {
        console.warn(err.responseText)
        throw new Error(err.responseText)
      })
    }
  },
  created () {
    this.getList()
  }
}
</script>