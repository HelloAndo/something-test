import xhr from './xhr'

export default {
  
  getList: xhr.bind(null, {
    url: '/api/news',
    type: 'GET'
  }),

  getComments: xhr.bind(null, {
    url: '/api/comments'
  })
}