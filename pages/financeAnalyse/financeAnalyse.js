// pages/financeAnalyse/financeAnalyse.js
const app = getApp()
import * as echarts from '../../components/echarts/echarts';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listData: [
      {
        id: 1,
        title: "各类收入占比",
        tuData: [
          {
            value: 10000,
            name: "被动收入"
          },
          {
            value: 21000,
            name: "工资收入"
          }
        ]
      },
      {
        id: 2,
        title: "各类支出占比",
        tuData: [
          {
            value: 3000,
            name: "房租"
          },
          {
            value: 600,
            name: "交通"
          },
          {
            value: 1000,
            name: "生活"
          },
          {
            value: 1000,
            name: "其他支出"
          },
        ]
      },

    ],
    // 图表初始化
    ec: {
      onInit: function (canvas, width, height, dpr, data) {
        const barChart = echarts.init(canvas, null, {
          width: width,
          height: height,
          devicePixelRatio: dpr // new
        });
        canvas.setChart(barChart);
        var option = {
          tooltip: {
            trigger: 'item',
            formatter: '{a} \n{b} : {c} ({d}%)'
          },
          toolbox: {
            show: true,
            feature: {
              restore: { show: true }
            }
          },
          calculable: true,
          series: [{
            name: '成分',
            type: 'pie',
            center: ['50%', '30%','20%'],
            radius: '50%',
            data: data
          }]
        }
        barChart.setOption(option);

        return barChart;
      }
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})