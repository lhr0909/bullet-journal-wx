//index.js
var app = getApp();

Page({
  data: {
    indicator_dots: false,
    autoplay: false,
    circular: false,
    current_index: 0,
    notes: [
      {
        date: "05/28/2017",
        items: [
          {
            type: "todo",
            content: "check stuff",
            done: false
          },
          {
            type: "todo",
            content: "shop",
            done: true
          },
          {
            type: "event",
            content: "date w/ love"
          },
          {
            type: "notes",
            content: "random thought"
          }
        ]
      },
      {
        date: "05/29/2017",
        items: [
          {
            type: "todo",
            content: "check stuff",
            done: false
          },
          {
            type: "todo",
            content: "shop",
            done: true
          },
          {
            type: "event",
            content: "date w/ love"
          },
          {
            type: "notes",
            content: "random thought"
          }
        ]
      },
    ]
  },
  onLoad: function (options) {
    this.setData({
      current_index: this.data.notes.length - 1
    });
  }
});
