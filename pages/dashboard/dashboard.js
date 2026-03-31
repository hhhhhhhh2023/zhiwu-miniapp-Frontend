Page({
  data: {
    tabs: ["阳台", "书房", "公司"],
    activeTab: "阳台",
    reminders: [
      { id: 1, text: "您已经有15天没给多肉浇水啦，今日最低温为7℃，适合给多肉浇水", checked: true },
      { id: 2, text: "满天星：我的叶子都耷拉了，好想咕噜咕噜喝一杯营养剂，让我重新变得元气满满", checked: false },
      { id: 3, text: "近日天气寒冷，适合将植物放在温暖、光照充足且通风良好的位置", checked: false }
    ],
    plants: [
      {
        id: 1,
        name: "龟背竹",
        days: 2
      },
      {
        id: 2,
        name: "万年青",
        days: 4
      },
      {
        id: 3,
        name: "绿萝",
        days: 1
      },
      {
        id: 4,
        name: "多肉",
        days: 3
      }
    ]
  },

  onSwitchTab(e) {
    this.setData({ activeTab: e.currentTarget.dataset.tab });
  },

  onAddPlant() {
    wx.navigateTo({ url: "/pages/plant/index" });
  },

  onToggleReminder(e) {
    const id = e.currentTarget.dataset.id;
    const reminders = this.data.reminders.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    this.setData({ reminders });
  }
});
