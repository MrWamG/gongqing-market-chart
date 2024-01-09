<!-- 折线图 -->
<template>
    <div id="customer"></div>
</template>

<script>
import * as echarts from "echarts"
import * as apis from "@/api/index"
import { EChartsType } from "echarts";
import { defineComponent,ref } from 'vue';
import dayjs from "dayjs";
export default defineComponent({
    components: {

    },
    data() {
        return {
            chart: null,
            data: []
        }
    },
    created() {

    },
    mounted() {
        this.init()
    },
    destroyed() {

    },
    methods: {
        init(){
            const chartDom = document.getElementById("customer");
            // 图片加载完毕后（等待父级宽度被图片撑开）再载入 echart，避免出现 0 宽度
            const img = document.getElementById("img");
            this.$nextTick(()=>{
                // 获取客流量
                img.addEventListener("load",()=>{
                    apis.customer().then(response=>{
                        const data = response.data.data.rows;
                        console.log("客流量=>",data);
                        this.data = data;
                        this.chart = echarts.init(chartDom);
                        this.chart.setOption(this.option);
                    })
                })
            })
        }
    },
    computed: {
        option() {
            return {
                legend: {
                    data: ['进人数', '出人数', '重复进人数'],
                    textStyle: {
                        color:"white"
                    }
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: this.data.map(item=>{
                        return dayjs(item.f_date).format("YYYY-MM-DD HH:mm:ss")
                    }),
                    axisLabel: {
                        // X 轴文字颜色
                        textStyle: {
                            color: 'white'
                        }
                    }
                },
                yAxis: {
                    type: 'value',
                    axisLabel: {
                        // y 轴文字颜色
                        textStyle: {
                            color: 'white'
                        }
                    }
                },
                series: [
                    {
                        name: '进人数',
                        type: 'line',
                        stack: 'Total',
                        data: this.data.map(item=>{
                            return item.num_in
                        })
                    },
                    {
                        name: '出人数',
                        type: 'line',
                        stack: 'Total',
                        data: this.data.map(item=>{
                            return item.num_out
                        })
                    },
                    {
                        name: '重复进人数',
                        type: 'line',
                        stack: 'Total',
                        data: this.data.map(item=>{
                            return item.num_repeat
                        })
                    },
                ].map(item=>{
                    return {
                        ...item,
                        label: {
                            textStyle: {
                                color: 'white'
                            }
                        }
                    }
                })
            }
        }
    }
})
</script>

<style lang="less">
@import "Customer.less";
</style>