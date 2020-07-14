//获取应用实例
const app = getApp()
import * as echarts from '../../components/echarts/echarts';
Page({
  data: {
    //测试的列表数据，实际使用的话可能需要手动进行数据整理
    
    list: [
      {
        id: 0,
        name: "提醒事项",
        open: false,        
        pages: [
          {pageId:0,path:"remindDettail", title: "吃饭"},
          {pageId:1,path:"remindDettail", title: "睡觉"},
          {pageId:1,path:"remindDettail", title: "打豆豆"}
          ]
      }, {
        id: 1,
        name: "财务分析",
        open: false,        
        pages: [
          {pageId:0,path: "financeAnalyse", title: "月度分析"},
          {pageId:1,path: "financeAnalyse", title: "季度分析"},
          {pageId:2,path: "financeAnalyse", title: "年度分析"}
          ]
      }],

  },
  kindToggle: function (e) {        
    var id = e.currentTarget.id, list = this.data.list;
    for (var i = 0, len = list.length; i < len; ++i) {
      if (list[i].id == id) {
        list[i].open = !list[i].open
      } else {
        list[i].open = false
      }
    }
    this.setData({
      list: list
    });
  },
})
 
