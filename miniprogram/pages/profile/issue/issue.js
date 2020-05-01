// miniprogram/pages/profile/issue/issue.js
Page({
  detailsPage(e){
    wx.navigateTo({
      url:"../issue/detailsPage/detailsPage",
      events:{
        acceptDataFromOpenedPage: function(data) {
          console.log(data)
        }
      },
      success: (res)=> {
        // 通过eventChannel向被打开页面传送数据
        res.eventChannel.emit('acceptDataFromOpenerPage', {data: e.currentTarget.dataset.goodid})
      }
    })
       },
  /**
   * 页面的初始数据
   */
  data: {
    myGoods:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.cloud.callFunction({
      name:'getMyPublishGoods',
      complete:(res)=>{
        if(App.globalData==undefined){
          wx.showToast({
            title: '请先登录',
            icon:'none',
            mask:'true'
          })
        }
        //console.log(res.result.data[0])
       if(res.result.data[0]._openid==App.globalData.openid){
        this.setData({
          myGoods:res.result.data
        })
        //console.log(this.data.myGoods)
      }
      
      }
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