import './assets/main.css'


import { createApp } from 'vue'
import App from './App.vue'
import HighChartsVue from 'highcharts-vue'
import Highcharts from 'highcharts'

// 한국어 로케일 설정
// Highcharts.setOptions({
//   lang: {
//     months: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
//     weekdays: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'],
//     shortMonths: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
//     thousandsSep: ',',
//     decimalPoint: '.',
//     numericSymbols: ['K', 'M', 'G', 'T', 'P', 'E'],
//     resetZoom: '줌 리셋',
//     resetZoomTitle: '1:1로 확대하려면 클릭',
//     noData: '표시할 데이터가 없습니다'
//   }
// })

const app = createApp(App)
app.use(HighChartsVue)
app.mount('#app')
