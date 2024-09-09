import { define } from "../../utils/core.ts";

export const handler = define.handlers({
	GET(_ctx) {
		return Response.json({ message: "OK" });
	},
});
