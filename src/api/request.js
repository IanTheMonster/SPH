import axios from 'axios'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
const requests = axios.create({
    baseURL: 'http://gmall-h5-api.atguigu.cn/api',
    timeout: 5000, //超时响应为5000ms
})//返回axios示例对象
requests.interceptors.request.use((config)=>{
    nprogress.start();
    return config;
})
requests.interceptors.response.use((response)=>{
    nprogress.done();
    return response.data;// 返回成功数据
},(error)=>{
    return Promise.reject(new Error("Request failed"));
})
export default requests;