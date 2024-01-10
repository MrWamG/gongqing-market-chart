import axios from 'axios';

// 获取天气信息
export function weather(){
    return axios({
        url:"https://restapi.amap.com/v3/weather/weatherInfo?city=%E5%85%B1%E9%9D%92%E5%9F%8E&key=3bc6a1970ea482bb4fc41be1e846129c",
        method:"get",
    })
}

// 获取环境数据
export function enviroment(){
    return axios({
        url:"/api/vibe/api/v1/device/lastdp?did=36856",
        method:"get",
        headers: {
            "X-Shareid":"Ig3xhLJwGiv9madecnVwZwjGBknNC8UR"
        }
    })
}

// 获取客流量数据
export function customer(){
    return axios({
        url:"/api/ed/chromedriver/getLog",
        method:"get",
    })
}