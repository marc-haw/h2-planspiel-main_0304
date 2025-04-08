export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["background.jpg","background.png","bakery.png","biotech.png","bus.png","cons.png","description.png","factory.png","favicon.png","halfeuro.png","hospital.png","leaf1.png","leaf2.png","leaf3.png","leaf4.png","leaf5.png","leaf6.png","maritim.png","minus.png","noco2.png","plus.png","pros.png"]),
	mimeTypes: {".jpg":"image/jpeg",".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.DART-Z4b.js",app:"_app/immutable/entry/app.CGcWqe41.js",imports:["_app/immutable/entry/start.DART-Z4b.js","_app/immutable/chunks/DF4zmOa2.js","_app/immutable/chunks/BR-9bjsj.js","_app/immutable/chunks/ryPej1yY.js","_app/immutable/entry/app.CGcWqe41.js","_app/immutable/chunks/BR-9bjsj.js","_app/immutable/chunks/CSH2t-aH.js","_app/immutable/chunks/Bfq2k9M2.js","_app/immutable/chunks/DpWqROj8.js","_app/immutable/chunks/CYwCykLz.js","_app/immutable/chunks/ryPej1yY.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/calibrate",
				pattern: /^\/calibrate\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
