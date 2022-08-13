import axios from 'axios'

const getResViaFetch = async (code) => {
  const response = await fetch(`http://120.55.12.109:8080/v1/api/test/${code}`)
  const res = await response.json()
}

const getResViaXHR = (code) => {
  const xhr = new XMLHttpRequest()

  xhr.addEventListener('readystatechange',(e) => {
    if(xhr.readyState === 4) {
      if(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
        console.log(xhr.response)
      } else console.log(xhr.status)
    }
  })
  xhr.open('GET', `http://120.55.12.109:8080/v1/api/test/${code}`)
  xhr.responseType = 'json'
  xhr.send(null)
}

const getResViaAxios = async (code) => {
  axios.get(`http://120.55.12.109:8080/v1/api/test/${code}`).then(res => {
    console.log(res)
  }).catch(err => {
    console.log(err)
  })
}

export const fetchData = [
  {text:'获取 200 响应', id: '2011', callback: getResViaFetch.bind(null, 200)},
  {text:'获取 400 响应', id: '2012', callback: getResViaFetch.bind(null, 400)},
  {text:'获取 500 响应', id: '2013', callback: getResViaFetch.bind(null, 500)},
  {text:'获取 502 响应', id: '2014', callback: getResViaFetch.bind(null, 502)},
]

export const xhrData = [
  {text:'获取 200 响应', id: '2021', callback: getResViaXHR.bind(null, 200)},
  {text:'获取 400 响应', id: '2022', callback: getResViaXHR.bind(null, 400)},
  {text:'获取 500 响应', id: '2023', callback: getResViaXHR.bind(null, 500)},
  {text:'获取 502 响应', id: '2024', callback: getResViaXHR.bind(null, 502)},
]

export const axiosData = [
  {text:'获取 200 响应', id: '2031', callback: getResViaAxios.bind(null, 200)},
  {text:'获取 400 响应', id: '2032', callback: getResViaAxios.bind(null, 400)},
  {text:'获取 500 响应', id: '2033', callback: getResViaAxios.bind(null, 500)},
  {text:'获取 502 响应', id: '2034', callback: getResViaAxios.bind(null, 502)},
]



