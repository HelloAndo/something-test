import $ from 'jquery'
export default function xhr(opts) {
  return new Promise ((resolve, reject) => {
    $.ajax(opts)
      .done(resolve)
      .fail(reject)
  })
}