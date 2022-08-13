const throwRangeError = () => {
  const a = new Array(-20)
}
const throwReferenceError = () => {
  throw new ReferenceError('referenceError', 'index.jsx', 19)
}
const throwTypeError = () => {
  const o = new 10
}
const throwURIError = () => {
  decodeURIComponent('%')
}


const throwAggregateError = () => {
  Promise.any([
    Promise.reject(new Error("unhandled error")),
  ])
}
const throwUnhandledRejection = () => {
  new Promise((resolve, reject) => reject('someone throw err'))
}

const throwImgError = () => {
  const img = document.createElement('img')
  img.src = "https://example.com/404.jpg"
}

const throwScriptError = () => {
  const script = document.createElement('script')
  script.src = "https://example.com/404.js"
  document.head.append(script)
}


export const JSData = [
  {text:'ReferenceError', id: '1011', callback: throwReferenceError},
  {text:'TypeError', id: '1013', callback: throwTypeError},
  {text:'RangeError', id: '1014', callback: throwRangeError},
  {text:'URIError', id: '1015', callback: throwURIError},
]

export const PromiseData = [
  {text:'unhandledRejection', id: '1021', callback: throwUnhandledRejection},
  {text:'AggregateError', id: '1022', callback: throwAggregateError},
]

export const ResourceData = [
  {text:'img', id: '1031', callback: throwImgError},
  {text:'script', id: '1032', callback: throwScriptError},
]