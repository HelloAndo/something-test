// 只能用require语法?
const Mock = require('mockjs')
const random = Mock.Random

var data = {
  "news": []
};
var i = 100
while (i > 0) {
  data.news.push({
    id: random.natural(0,100),
    title: random.ctitle(6, 10),
    date: random.date('yyyy-MM-dd'),
    likes: random.natural(0,1000),
    views: random.natural(0, 999999)
  })
  i--
}

module.exports = function () {
  return data
}