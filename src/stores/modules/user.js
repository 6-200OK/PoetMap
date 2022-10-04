import { defineStore } from "pinia";

export const userStore = defineStore({
  id: "app-user",
  state: () => ({
    poetInfo: [],
    introduction: '',
	currentAdressName: '',
  }),
  actions: {
    setPoetInfo(info) {
      this.poetInfo = info;
    },
    setPoetIntro(intro) {
      this.introduction = intro;
    },
	setCurrentAdressName(name){
		this.currentAdressName = name;
	}
  }
})