const path = require("path");
module.exports = {
	i18n: {
		locales: ["en", "tr"],
		defaultLocale: "tr",
		localeDetection: true,

	},
	localePath: path.resolve("./public/locales"),
	reloadOnPrerender: process.env.NODE_ENV === 'development',
};
