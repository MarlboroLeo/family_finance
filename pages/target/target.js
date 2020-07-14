// pages/target/target.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: [
      {
        id: 0,
        name: "未完成",
        isActive: true
      },
      {
        id: 1,
        name: "已完成",
        isActive: false
      },
    ],
    unfinished:[
      {
        id:15,
        flag:false,
        name:"赚他个一个亿"
      },
      {
          id:16,
          flag:false,
          name:"赚他个两个亿"
      }
    ],
    finished:[
      {
        id:20,
        flag:false,
        name:"完成了第二个目标"
      },
      {
          id:1,
          flag:false,
          name:"完成了第一个目标"
      }
    ],

  },
  //自定义事件,用来接受子组件传递来的数据
  handleItemChange(e) {
    // console.log(e) detail:index: 1
    const { index } = e.detail;
    let { tabs } = this.data;
    tabs.forEach((v, i) => i === index ? v.isActive = true : v.isActive = false);
    this.setData({ tabs })
  },
  buttonNavigate: function(e){
    wx.navigateTo({			//以navigate进行跳转
      url: '../newTarget/newTarget',			//保证路径正确，如果这样书写记得最前面加/，也可以这样写：../demo/demo
    })
  },
  toTaskDetail: function(e){
    var id = e.target.dataset.taskid 
    wx.navigateTo({
      url: '../targetDetail/targetDetail?id=' + id
    })
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
    // 页面渲染完成

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