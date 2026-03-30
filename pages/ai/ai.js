// pages/ai/ai.js
Page({
  data: {
    inputText: "",
    messages: [],
    aiReplies: [],
  },

  onInput(e) {
    this.setData({ inputText: e.detail.value });
  },

  // 发送消息
  sendMsg() {
    let msg = this.data.inputText.trim();
    if (!msg) return;

    let messages = this.data.messages;
    messages.push({ userMsg: msg });

    this.setData({ messages, inputText: "" });

    // 模拟AI回复（以后可替换成真实API）
    let reply = "我是AI小植，我已经收到你的问题啦！";
    let aiReplies = this.data.aiReplies;
    aiReplies.push({ aiMsg: reply });

    this.setData({ aiReplies });
  },
});