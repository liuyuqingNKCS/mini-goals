// pages/mypage/mypage.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    likenum: 25,
    archives: [
      {
        name: '读书',
        day: 2,
      },
      {
        name: '背单词',
        day: 5,
      },
      {
        name: '爱万戌哥',
        day: 30,
      },
    ],
    toView: 'yellow',
    scrollTop: 0,
    scrolls: [
      {
        name: '黄色',
        tag: 'yellow',
      },
      {
        name: '绿色',
        tag: 'green',
      },
      {
        name: '红色',
        tag: 'red',
      },
      {
        name: '黄色',
        tag: 'yellow',
      },
      {
        name: '绿色',
        tag: 'green',
      },
      {
        name: '红色',
        tag: 'red',
      },
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('onLoad')
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    }
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

  },
  scroll: function (e) {
    console.log(e)
  },
  upper: function (e) {
    console.log('滚动到顶部')
  },
  lower: function (e) {
    console.log('滚动到底部')
  },
})