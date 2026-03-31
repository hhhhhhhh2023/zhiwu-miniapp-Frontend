Page({
  data: {
    photo: "",
    form: {
      name: "",
      species: "",
      date: "",
      method: ""
    }
  },

  onBack() {
    wx.navigateBack();
  },

  onPickPhoto() {
    wx.chooseImage({
      count: 1,
      sizeType: ["compressed"],
      sourceType: ["album", "camera"],
      success: (res) => {
        this.setData({ photo: res.tempFilePaths[0] });
      }
    });
  },

  onInputName(e) {
    this.setData({ "form.name": e.detail.value });
  },

  onInputSpecies(e) {
    this.setData({ "form.species": e.detail.value });
  },

  onInputDate(e) {
    this.setData({ "form.date": e.detail.value });
  },

  onInputMethod(e) {
    this.setData({ "form.method": e.detail.value });
  },

  onSubmit() {
    wx.showToast({
      title: "保存成功",
      icon: "success"
    });
    setTimeout(() => {
      wx.navigateBack();
    }, 600);
  }
});
