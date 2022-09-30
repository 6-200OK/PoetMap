import { defineStore } from "pinia";

export const userStore = defineStore({
  id: "app-user",
  state: () => ({
    poetInfo: []
  }),
  actions: {
    setPoetInfo(info) {
      this.poetInfo = info;
    }
  }
})