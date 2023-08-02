const formatter = new Intl.DateTimeFormat("ru", {
	weekday: "long",
	year: "numeric",
	month: "long",
	day: "numeric",
	hour: "numeric",
	minute: "numeric",
	second: "numeric",
});

export const getCurrentData = () => formatter.format(new Date());
