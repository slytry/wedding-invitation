import w from "wretch";

export const api = w("/api", { mode: "cors" })
	.errorType("json")
	.resolve((r) => r.json());
