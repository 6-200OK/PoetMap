import {
	createSSRApp
} from "vue";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from "./App.vue";
import { setupStore } from "./stores";
export function createApp() {
	const app = createSSRApp(App);
	app.use(ElementPlus),
	setupStore(app)
	return {
		app,
	};
}
