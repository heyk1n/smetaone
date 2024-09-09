import { App, fsRoutes } from "fresh";
import type { State } from "./utils/core.ts";

export const app = new App<State>();

await fsRoutes(app, {
	dir: "./",
	loadIsland: (path) => import(`./islands/${path}`),
	loadRoute: (path) => import(`./routes/${path}`),
});

if (import.meta.main) {
	await app.listen();
}
