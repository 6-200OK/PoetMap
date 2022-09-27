import {
	createSSRApp
} from "vue";
import 'cesium/Source/Widgets/widgets.css'
import App from "./App.vue";
export function createApp() {
	const app = createSSRApp(App);
	return {
		app,
	};
}
