(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vueMusic"] = factory();
	else
		root["vueMusic"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/static/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
	/* styles */
	__webpack_require__(1)
	
	/* script */
	__vue_exports__ = __webpack_require__(2)
	
	/* template */
	var __vue_template__ = __webpack_require__(3)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-1", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-1", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] music.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 1 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	
	exports.default = {
	    props: {
	        source: {
	            default: null,
	            required: true
	        }
	    },
	    data: function data() {
	        return {
	            open: false,
	            timeWidth: 541,
	            voiceWidth: 70,
	            tipShow: false,
	            tipWidth: 25,
	            tipText: "",
	            init: true,
	            status: {
	                playing: false,
	                silent: false
	            },
	            time: {
	                cur: "00:00",
	                all: "00:00"
	            }
	        };
	    },
	
	    methods: {
	        musicToggle: function musicToggle() {
	            var box = this.$refs.box;
	
	            this.open ? box.style.left = "-541px" : box.style.left = "0px";
	
	            this.open = !this.open;
	
	            if (this.init) {
	
	                this.init = false;
	
	                this.$refs.audio.setAttribute('src', this.source.src);
	
	                this.$refs.banner.setAttribute('src', this.source.img);
	            }
	        },
	        formatSeconds: function formatSeconds(second) {
	            var minute = 0;
	            var hour = 0;
	            if (second > 60) {
	                minute = parseInt(second / 60);
	                second = (second % 60).toFixed(0);
	                if (minute > 60) {
	                    hour = parseInt(minute / 60);
	                    minute = parseInt(minute % 60);
	                }
	            } else {
	                second = parseInt(second);
	            }
	            second = second < 10 ? '0' + second : second;
	            minute = minute < 10 ? '0' + minute : minute;
	            return [hour, minute, second];
	        }
	    },
	    mounted: function mounted() {
	        var vm = this;
	        var audio = this.$refs.audio;
	        audio.volume = 0.5;
	
	        audio.oncanplay = function () {
	            // 缓冲已足够开始时
	        };
	
	        audio.oncanplaythrough = function () {
	            // 缓冲已完成
	        };
	
	        audio.onended = function () {
	            // console.log("onended : 音乐播放完毕");
	            vm.status.playing = false;
	        };
	
	        audio.onloadedmetadata = function () {
	            // 数据的分辨率或时间长度已加载完成
	            var time = vm.formatSeconds(this.duration);
	            vm.time.all = time[1] + ":" + time[2];
	        };
	
	        audio.onplay = function () {
	            // console.log("onplay : 播放开始");
	        };
	
	        audio.onwaiting = function () {
	            // console.log("onwaiting : 播放过程中开始缓冲");
	        };
	
	        audio.ontimeupdate = function () {
	            // 当播放位置改变时
	            var time = vm.formatSeconds(this.currentTime);
	            vm.$refs.curtime.style.width = vm.timeWidth * this.currentTime / this.duration + "px";
	            vm.time.cur = time[1] + ":" + time[2];
	        };
	
	        audio.onplaying = function () {
	            // console.log('onplaying : 播放中...');
	        };
	
	        this.$refs.muted.onclick = function () {
	            vm.status.silent = !vm.status.silent;
	            audio.muted = !audio.muted;
	        };
	
	        vm.$refs.paused.onclick = function () {
	            vm.status.playing = !vm.status.playing;
	            audio.paused ? audio.play() : audio.pause();
	        };
	
	        //            document.getElementById('loop').onclick = function () {
	        //                audio.loop = !audio.loop;
	        //            };
	
	        this.$refs.allvoice.onclick = function (e) {
	            audio.volume = e.layerX / vm.voiceWidth;
	            vm.$refs.curvoice.style.width = e.layerX + "px";
	        };
	
	        this.$refs.alltime.onclick = function (e) {
	            vm.$refs.curtime.style.width = e.layerX + "px";
	            audio.currentTime = e.layerX / vm.timeWidth * audio.duration;
	        };
	
	        this.$refs.alltime.onmousemove = function (e) {
	            var time = vm.formatSeconds(audio.duration / vm.timeWidth * e.layerX);
	            vm.tipShow = true;
	            vm.$refs.tip.style.left = e.layerX - vm.tipWidth + "px";
	            vm.tipText = time[1] + ":" + time[2];
	        };
	    }
	};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('div', {
	    ref: "box",
	    attrs: {
	      "id": "music"
	    }
	  }, [_h('audio', {
	    ref: "audio"
	  }), " ", _h('div', {
	    staticClass: "M-main"
	  }, [_h('div', {
	    staticClass: "M-warp"
	  }, [_h('img', {
	    ref: "banner",
	    staticClass: "M-face"
	  }), " ", _h('div', {
	    staticClass: "M-control"
	  }, [_h('div', [_h('a', [_s(source.name)]), " ", _h('a', [_s(source.player)])]), " ", _h('div', {
	    staticClass: "center"
	  }, [_m(0), " ", _h('button', {
	    ref: "paused",
	    class: [status.playing ? 'play-go' : 'play-wait'],
	    attrs: {
	      "id": "paused"
	    }
	  }), " ", _h('div', {
	    staticClass: "M-voice-control"
	  }, [_h('button', {
	    ref: "muted",
	    class: [status.silent ? 'voice-no' : 'voice-go'],
	    attrs: {
	      "id": "muted"
	    }
	  }), " ", _h('span', {
	    ref: "allvoice",
	    staticClass: "M-all-voice"
	  }, [_h('span', {
	    ref: "curvoice",
	    staticClass: "M-cur-voice"
	  })])])]), " ", _h('div', {
	    staticClass: "bottom"
	  }, [_h('span', [_s(time.cur) + " / " + _s(time.all)])])])]), " ", _h('span', {
	    ref: "alltime",
	    staticClass: "M-allBar",
	    on: {
	      "mouseout": function($event) {
	        tipShow = false
	      }
	    }
	  }, [_h('span', {
	    ref: "curtime",
	    staticClass: "M-curBar"
	  })]), " ", _h('div', {
	    directives: [{
	      name: "show",
	      value: (tipShow),
	      expression: "tipShow"
	    }],
	    ref: "tip",
	    staticClass: "M-tip"
	  }, [_s(tipText), _m(1)])]), " ", _h('button', {
	    staticClass: "toggle",
	    on: {
	      "click": musicToggle
	    }
	  })])
	}},staticRenderFns: [function (){with(this) {
	  return _h('button')
	}},function (){with(this) {
	  return _h('em', [_h('i')])
	}}]}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-1", module.exports)
	  }
	}

/***/ }
/******/ ])
});
;
//# sourceMappingURL=vue-music.js.map