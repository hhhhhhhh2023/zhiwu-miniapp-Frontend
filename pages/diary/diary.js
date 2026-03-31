Page({
  data: {
    myPlants: [
      {
        id: 1,
        name: "龟背竹",
        days: 2,
        image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=600&q=80"
      }
    ],
    hotPlants: [
      {
        id: 11,
        name: "多肉",
        image: "https://images.unsplash.com/photo-1459156212016-c812468e2115?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: 12,
        name: "绿萝",
        image: "https://images.unsplash.com/photo-1463320726281-696a485928c7?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: 13,
        name: "仙人掌",
        image: "https://images.unsplash.com/photo-1453906971074-ce568cccbc63?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: 14,
        name: "月季",
        image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=600&q=80"
      }
    ]
  },

  onBackToGarden() {
    wx.switchTab({ url: "/pages/dashboard/dashboard" });
  },

  onAddPlant() {
    wx.navigateTo({ url: "/pages/reminders/reminders" });
  }
});
