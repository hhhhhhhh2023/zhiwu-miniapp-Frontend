Page({
  data: {
    myPlants: [{ id: 1, name: "龟背竹", days: 2 }],
    hotPlants: [
      { id: 11, name: "多肉" },
      { id: 12, name: "绿萝" },
      { id: 13, name: "仙人掌" },
      { id: 14, name: "月季" }
    ]
  },

  onBackHome() {
    wx.switchTab({ url: "/pages/dashboard/dashboard" });
  },

  onAddPlant() {
    wx.navigateTo({ url: "/pages/plants/index" });
  }
});