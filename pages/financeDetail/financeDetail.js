// pages/financeDetail/financeDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    financeDetailData: {
      "income": [{
        "name": "工资收入",
        "value": 10000.00
      },
      {
        "name": "被动收入",
        "value": 15000.00
      }],
      "expenses": [{
        "name": "生活支出",
        "value": 1500.00
      },
      {
        "name": "房租支出",
        "value": 1200.00
      }
      ,
      {
        "name": "交通支出",
        "value": 500.00
      }
      ,
      {
        "name": "其他支出",
        "value": 900.00
      }],
      "assets": [
        {
          "name": "存款",
          "value": 11900.00
        },
        {
          "name": "股票",
          "value": 10000.00
        }
      ],
      "liabilities": [
        {
          "name": "信用卡",
          "value": 1000.00
        },
        {
          "name": "贷款",
          "value": 0.00
        }
      ],

    },
    "totalIncome":25000.00,
    "totalExpenses":6000.00,
    "cashFlow": 16000
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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