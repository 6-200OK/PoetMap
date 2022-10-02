import { defineStore } from "pinia";

export const userStore = defineStore({
  id: "app-user",
  state: () => ({
    poetInfo: [],
    introduction: ''
  }),
  actions: {
    setPoetInfo(info) {
      this.poetInfo = info;
    },
    setPoetIntro(intro) {
      this.introduction = intro;
    }
  }
})