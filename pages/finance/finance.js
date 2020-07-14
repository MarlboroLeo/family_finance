// pages/fiunance/finance.js
var util = require("../../utils/util.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {

    tabs: [
      {
        id: 0,
        name: "查询报表",
        isActive: true
      },
      {
        id: 1,
        name: "填写报表",
        isActive: false
      }
    ],
    financeList:[
      {id: 0,name: "月度报表",open: false,statement:[
        {
          statementId:1,
          date:"2020-01-01"
        },
        {
          statementId:11,
          date:"2020-05-01"
        },
      ]},
      {id: 1,name: "季度报表",open: false,statement:[]},
      {id: 2,name: "年度报表",open: false,statement:[]},
    ],
    "type": [
      {
        name: "月度报表",
        value: "month"
      }, {
        name: "季度报表",
        value: "quarter"
      }, {
        name: "年度报表",
        value: "year"
      },
    ],
    "initDate": "",
    "formMsgHidden": true,
    "formMsg": "",
    "disableBtn": false,
    "writeDate": "",
    "typeHidden": true,
    "typeIndex": 0
  },
  //自定义事件,用来接受子组件传递来的数据
  handleItemChange(e) {
    // console.log(e) detail:index: 1
    const { index } = e.detail;
    let { tabs } = this.data;
    tabs.forEach((v, i) => i === index ? v.isActive = true : v.isActive = false);
    this.setData({ tabs })
  },

  kindToggle: function (e) {        
    var id = e.currentTarget.id, list = this.data.financeList;
    for (var i = 0, len = list.length; i < len; ++i) {
      if (list[i].id == id) {
        list[i].open = !list[i].open
      } else {
        list[i].open = false
      }
    }
    this.setData({
      financeList: list
    });
  },

  changeType: function () {
    this.setData({
      typeHidden: false
    });

  },
  confirmType: function () {
    this.setData({
      typeHidden: true
    })
  },
  selectType: function (e) {
    var num = e.target.dataset.num;
    this.setData({
      typeIndex: num
    });
  },
  changeWriteDate: function (e) {
    this.setData({
      writeDate: e.detail.value
    });
  },

  hiddenFormMsg: function () {
    this.setData({
      formMsgHidden: true
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var now = new Date();
    var initDate = util.formatDate(now);
    this.setData({
      initDate: initDate,
      writeDate: initDate
    });
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