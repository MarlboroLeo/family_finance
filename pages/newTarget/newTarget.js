
import { compareDate,formatDate,formatDate4YearMotchDay } from "../../utils/util.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {

  "formMsgHidden":true,
  "formMsg":"",
  "disableHookBtn":false,
  "initDate": "",
  "finishDate":"",

  },
  changeFinishDate: function(e){
    this.setData({
      finishDate: e.detail.value
    })
  },


  formSubmit: function(event){
    var that = this;
    var data =event.detail.value;
    var passValiData = true;
    var valiNum = 0;
    var formMsg = "";
    if(data.name.trim().length == 0){
      passValiData = false;
      formMsg += (++valiNum) + "、标题为空\n"
    };
    if(data.desc.trim().length == 0){
      passValiData = false;
      formMsg += (++valiNum) + "、描述为空\n"
    };
    var finishDate = data.finishDate;
    if(finishDate.trim().length == 0){
      passValiData = false;
      formMsg += (++valiNum) + "、完成时限为空\n"
    };
    if(!passValiData){
      that.setData({
        formMsgHidden:false,
        formMsg:formMsg
      })
      return;
    };
  },
  hiddenFormMsg:function(){
    this.setData({
      formMsgHidden:true
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var now = new Date()
    var initDate = formatDate(now)
    this.setData({
      initDate:initDate,
      finishDate: initDate,
    })
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