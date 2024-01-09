import * as apis from "@/api/index"
import Customer from "./components/Customer.vue"
import { defineComponent } from 'vue';
export default defineComponent({
    components: {
        Customer
    },
    data() {
        return {
            data:{
                area:[
                    { title: "1号监控区域", children: [
                        { title: "硫化氢浓度", value: 0.0064, unit: "mg/m³" },
                        { title: "环境温度", value: 11.5, unit: "℃" },
                        { title: "PM2.5浓度", value: 134, unit: "ug/m³" },
                        { title: "PM10浓度", value: 156, unit: "ug/m³" },
                        { title: "环境湿度", value: 73.7, unit: "%RH" },
                        { title: "CO2浓度", value: 440, unit: "ppm" },
                        { title: "环境噪声", value: 40, unit: "dB" },
                    ]},
                    { title: "2号监控区域", children: [
                        { title: "硫化氢浓度", value: 0.0064, unit: "mg/m³" },
                        { title: "环境温度", value: 11.5, unit: "℃" },
                        { title: "PM2.5浓度", value: 134, unit: "ug/m³" },
                        { title: "PM10浓度", value: 156, unit: "ug/m³" },
                        { title: "环境湿度", value: 73.7, unit: "%RH" },
                        { title: "CO2浓度", value: 440, unit: "ppm" },
                        { title: "环境噪声", value: 40, unit: "dB" },
                    ]},
                ],
                // 天气数据
                weather:{
                    province: "",
                    city: "",
                    adcode: "",
                    weather: "",
                    temperature: "",
                    winddirection: "",
                    windpower: "",
                    humidity: "",
                    reporttime: "",
                    temperature_float: "",
                    humidity_float: ""
                }
            }
        }
    },
    created() {
        this.init();
    },
    destroyed() {

    },
    methods: {
        init(){
            // 获取天气
            apis.weather().then(({data}:{data:any})=>{
                this.data.weather = data.lives[0];
            });
            // 获取环境
            apis.enviroment().then(({data}:{data:any})=>{
                const result = [
                    {title:"1号",children:[]},
                    {title:"2号",children:[]},
                ];
                data.data.devs[0].dps.map((item:any)=>{
                    let areaIndex = result.findIndex(vo=>item.title.indexOf(vo.title) > -1);
                    (result[areaIndex].children as any).push({
                        ...item,
                        title:item.title.replace(/2号|1号/g,"")
                    });
                });
                this.data.area = result;
            });
        }
    },
    computed: {

    }
})