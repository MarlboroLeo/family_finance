// components/Tabs/Tabs.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabs:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleItemTap(e){
      // console.log("hahah")
      // 1 获取索引
     
      const {index}=e.currentTarget.dataset;

       // !!!!!这个是吧tabs这个数据定义在当前data中的写法!!!!!
      // 2 获取data中的数组
      // let tabs=this.data.tabs;
      // ES6 解构  
      // 最严谨的做法:重新拷贝一份数组,在对这个数组的备份进行处理,不要直接修改源数组(this.data.)
      // let tabs=JSON.parse(JSON.stringify(this.data.tabs)) 深拷贝

      // let {tabs}=this.data;

      // 3 循环数组
      // [].forEach 遍历数组,同时修改v 也会修改源数组

      // tabs.forEach((v,i)=>i===index?v.isActive=true:v.isActive=false);
      // this.setData({tabs})


      //当采用父组件向自组件传递数据的时候,上面的写法就不会改变父组件中的isActive值,
      // 触发父组件中的自定义同时传递数据过去给父组件
      this.triggerEvent("itemChange", {index});
     


    }
  }
})
