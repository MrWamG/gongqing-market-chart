<!-- 图表单页 -->
<template>
    <div class="container" id="container">
        <div id="section">
            <div class="title">共青农贸市场环境监控系统</div>
            <div class="content">
                <div class="weather">
                    <div>{{ data.weather.province + " " + data.weather.city + " " + data.weather.weather }}</div>
                    <div class="temperature">
                        <span class="value">{{ data.weather.temperature }}</span>
                        <span>℃</span>
                    </div>
                    <div>{{ `风向:${data.weather.winddirection} 风速:${data.weather.windpower}及 温度:${data.weather.humidity}%` }}</div>
                    <div>{{ data.weather.reporttime }}</div>
                </div>
                <div class="side">
                    <div class="name">{{ data.area[0].title + "监控区域" }}</div>
                    <div class="list">
                        <div class="item" v-for="item in data.area[0].children" :key="item.title">
                            <div class="describe">{{ item.title }}</div>
                            <div class="context">
                                <div>{{ item.value }}</div>
                                <div>{{ '单位：' + item.unit }}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="center">
                    <img id="img" ref="Img" src="@/assets/banner.png" alt="">
                    <Customer ref="Customer"></Customer>
                </div>
                <div class="side">
                    <div class="name">{{ data.area[1].title + "监控区域" }}</div>
                    <div class="list">
                        <div class="item" v-for="item in data.area[1].children" :key="item.title">
                            <div class="describe">{{ item.title }}</div>
                            <div class="context">
                                <div>{{ item.value }}</div>
                                <div>{{ '单位：' + item.unit }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./index"></script>

<style lang="less" scoped>
    @import "index.less";
</style>