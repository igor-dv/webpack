const webpack = require("../lib/webpack");

describe("HashedModuleIdsPlugin", () => {
	it("should not throw the error when passing 'context' prop to the ctor", () => {
		expect(() => {
			new webpack.HashedModuleIdsPlugin({
				context: "temp"
			});
		}).not.toThrowError();
	});

	it("will persist the 'context' prop in the options", () => {
		const plugin = new webpack.HashedModuleIdsPlugin({
			context: "temp"
		});

		expect(plugin.options.context).toEqual("temp");
	});
});
