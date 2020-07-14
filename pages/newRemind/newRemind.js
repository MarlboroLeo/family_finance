import { compareDate,formatDate,formatDate4YearMotchDay } from "../../utils/util.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {

    "weeks":[{
      "name":"一",
      "value":"1"
  },{
      "name":"二",
      "value":"2"
  },{
      "name":"三",
      "value":"3"
  },{
      "name":"四",
      "value":"4"
  },{
      "name":"五",
      "value":"5"
  },{
      "name":"六",
      "value":"6"
  },{
      "name":"日",
      "value":"0"
  }],
  "excRule": [{
      "name": "每天",
      "value": "everyDay"
  },{
      "name": "仅一次",
      "value": "onlyOnce"
  },{
      "name": "周一至周五",
      "value": "monToFri"
  },{
      "name": "周末",
      "value": "weekend"
  },{
      "name": "自定义",
      "value": "customize"
  }],
  "excRuleHidden": true,
  "excRuleIndex": 0,
  "customizeWeekHidden": true,
  "formMsgHidden":true,
  "formMsg":"",
  "disableHookBtn":false,
  "weeksColor":["","","","","","",""],
  "weeksFontColor":["","","","","","",""],
  "initDate": "",
  "initEndDate": "",
  "startDate":"",
  "endDate":"",

  },
  changeStartDate: function(e){
    this.setData({
      startDate: e.detail.value
    })
  },
  changeEndDate: function(e){
    this.setData({
      endDate: e.detail.value
    })
  },
  confirmExcRule: function(e){
    this.setData({
      excRuleHidden: true
    })
  },
  changeExcRule: function(e){
    this.setData({
      excRuleHidden:false
    })
  },
  selectExcRule: function(e){
    var num = e.target.dataset.num;
    this.setData({
      excRuleIndex:num
    });
    if (num==4){
      this.setData({
        customizeWeekHidden:false
      })
    } else{
      this.setData({
        customizeWeekHidden:true
      })
    };
  },
  changeWeekColor: function(event){
    var num = event.target.dataset.num;
    var weeksColorValue = this.data.weeksColor;
    var weeksFontColorValue = this.data.weeksFontColor;
    var color = weeksColorValue[num];
    var fontColor = "";
    if (color == ""){
      color = "#6495ED";
      fontColor = "white"
    }else{
      color="";
      fontColor = ""
    };
    weeksColorValue[num] = color;
    weeksFontColorValue[num] = fontColor;
    this.setData({
      weeksColor:weeksColorValue,
      weeksFontColor:weeksFontColorValue
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
    var excRule = data.excRule.trim();
    if(excRule.length == 0){
      passValiData = false;
      formMsg += (++valiNum) + "、重复为空\n"
    } else{
      if(excRule == "customize" && data.excRuleValue.length == 0){
        passValiData = false;
        formMsg += (++valiNum) + "、至少选择一个自定义执行日期\n"
      };      
    }
    var startDate = data.startDate;
    if(startDate.trim().length == 0){
      passValiData = false;
      formMsg += (++valiNum) + "、开始时间为空\n"
    };
    var endDate = data.endDate;
    if(endDate.trim().length == 0){
      passValiData = false;
      formMsg += (++valiNum) + "、结束时间为空\n"
    };
    if(startDate.trim().length > 0 && endDate.trim().length > 0 && compareDate(startDate, endDate)){
      passValiData = false;
      formMsg += (++valiNum) + "、开始时间不能大于结束时间\n"
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
    var initEndDate = formatDate4YearMotchDay(now.getFullYear()+1,now.getMonth() + 1, now.getDate())
    this.setData({
      initDate:initDate,
      startDate: initDate,
      endDate:initDate,
      initEndDate:initEndDate
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