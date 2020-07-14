// pages/targetDetail/targetDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    task: {
      id: 12,
      status: 1,
      name: "喝水",
      finishTime: "2020-07-02",
      content: "多喝热水"
    }
},
delRemind: function(e){
    // app.collectFormId(e.detail.formId)
    var that = this
    var id = e.target.dataset.taskid
    wx.showModal({
      title: '提示',
      content: '确认删除提醒？',
      success: function (res) {
        console.log("已删除"+ id);
        
      }
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