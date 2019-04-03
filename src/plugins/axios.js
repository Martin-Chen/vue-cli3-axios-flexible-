import axios from 'axios'
import qs from 'qs'

// var AUTH_TOKEN = 'X-CSRF-TOKEN'
// axios.defaults.baseURL = 'http://api.qihaxiaoshuo.com';
axios.defaults.baseURL = 'http://beta.api.qihaxiaoshuo.com';
// axios.defaults.baseURL = 'http://cxk.m.news.ttbus.com';



// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.transformRequest = [function (data) {
  //数据序列化
  return qs.stringify(data);
}
];

// var instance = axios.create({
//     baseURL: 'http://m.news.toutiaobashi.com',
//     timeout: 15000,
//     headers: {'X-Custom-Header': 'X-CSRF-TOKEN'}
//     });
// Add a request interceptor
axios.interceptors.request.use(function (config) {
    return config;
  // Do something before request is sent
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
  // Do something with response data
  // if(response.data.status == '403'){
  //   alert('您的token已经失效，请重新登录')
  // } else {
  return response;
  // } 
}, function (error) {
  // Do something with response error
  return Promise.reject(error);
});
