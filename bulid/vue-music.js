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
	                silent: false,
	                menuShow: false,
	                model: "list"
	            },
	            time: {
	                cur: "00:00",
	                all: "00:00"
	            },
	            now: {},
	            list: []
	        };
	    },
	    created: function created() {
	        var i = void 0;
	        for (i in this.source) {
	            this.list.push(this.source[i].id);
	        }
	    },
	
	    methods: {
	        musicToggle: function musicToggle() {
	            this.open = !this.open;
	
	            if (this.init) {
	
	                this.init = false;
	
	                this.loadSource(this.source[0], false);
	            }
	        },
	        musicSelect: function musicSelect(item) {
	            if (item.id === this.now.id) return;
	            if (item.selected) {
	                this.list.splice(this.list.indexOf(item.id), 1);
	            } else {
	                this.list.push(item.id);
	            }
	            item.selected = !item.selected;
	        },
	        next: function next(bool) {
	            if (this.status.model === 'loop') return;
	            var id = this.now.id;
	            var length = this.list.length;
	            var i = void 0,
	                j = void 0,
	                now = void 0;
	            if (this.status.model === 'list') {
	                for (i in this.list) {
	                    if (this.list[i] === id) break;
	                }
	                now = this.list[bool ? i == length - 1 ? 0 : ++i : i == 0 ? --length : --i];
	            } else {
	                now = this.list[Math.floor(Math.random() * length + 1) - 1];
	            }
	            for (j in this.source) {
	                if (this.source[j].id === now) {
	                    this.loadSource(this.source[j]);
	                    break;
	                }
	            }
	        },
	        loadSource: function loadSource(item) {
	            var bool = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
	
	            if (this.now.playing !== undefined) {
	                this.now.playing = false;
	            }
	            item.playing = true;
	            this.now = item;
	            this.$refs.audio.setAttribute('src', this.now.src);
	            this.$refs.banner.setAttribute('src', this.now.img);
	            if (bool) {
	                this.$refs.audio.play();
	                this.status.playing = true;
	            }
	        },
	        changeModel: function changeModel() {
	            var ret = "";
	            switch (this.status.model) {
	                case "list":
	                    ret = "rand";
	                    this.$refs.audio.loop = false;
	                    break;
	                case "rand":
	                    ret = "loop";
	                    this.$refs.audio.loop = true;
	                    break;
	                case "loop":
	                    ret = "list";
	                    this.$refs.audio.loop = false;
	                    break;
	            }
	            this.status.model = ret;
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
	            vm.next(true);
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
	
	        this.$refs.paused.onclick = function () {
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
	    class: [open ? 'M-open' : 'M-close'],
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
	  }, [_h('div', {
	    staticClass: "header"
	  }, [_h('div', [_h('a', [_s(now.name)]), " ", _h('a', [_s(now.player)])]), " ", _h('button', {
	    class: ['menu-btn', status.menuShow ? 'menu-click' : ''],
	    on: {
	      "click": function($event) {
	        status.menuShow = !status.menuShow
	      }
	    }
	  })]), " ", _h('div', {
	    staticClass: "center"
	  }, [_h('div', {
	    staticClass: "M-play-control"
	  }, [_h('button', {
	    class: ['sm-btn', 'M-model-' + status.model],
	    on: {
	      "click": changeModel
	    }
	  }), " ", _h('button', {
	    staticClass: "sm-btn prev",
	    on: {
	      "click": function($event) {
	        next(false)
	      }
	    }
	  }), " ", _h('button', {
	    ref: "paused",
	    class: ['lg-btn', status.playing ? 'play-go' : 'play-wait']
	  }), " ", _h('button', {
	    staticClass: "sm-btn next",
	    on: {
	      "click": function($event) {
	        next(true)
	      }
	    }
	  })]), " ", _h('div', {
	    staticClass: "M-voice-control"
	  }, [_h('button', {
	    ref: "muted",
	    class: ['sm-btn', status.silent ? 'voice-no' : 'voice-go']
	  }), " ", _h('span', {
	    ref: "allvoice",
	    staticClass: "M-all-voice"
	  }, [_h('span', {
	    ref: "curvoice",
	    staticClass: "M-cur-voice"
	  })])])]), " ", _h('div', {
	    staticClass: "footer"
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
	  }, [_s(tipText), _m(0)]), " ", _h('div', {
	    class: ['M-menu', status.menuShow ? 'menu-show' : '']
	  }, [_h('div', {
	    staticClass: "header"
	  }, [_m(1), " ", _h('span', {
	    staticClass: "close",
	    on: {
	      "click": function($event) {
	        status.menuShow = false
	      }
	    }
	  }, ["×"])]), " ", _h('div', {
	    staticClass: "body"
	  }, [_m(2), " ", _l((source), function(item) {
	    return _h('div', {
	      staticClass: "item"
	    }, [_h('div', {
	      staticClass: "left"
	    }, [_h('a', {
	      class: ['select', item.selected ? 'selected' : ''],
	      on: {
	        "click": function($event) {
	          musicSelect(item)
	        }
	      }
	    }), " ", _h('div', [_h('span', {
	      directives: [{
	        name: "show",
	        value: (item.playing),
	        expression: "item.playing"
	      }],
	      class: ['icon', status.playing ? 'icon-play' : 'icon-pause']
	    }), " ", _h('a', {
	      staticClass: "name",
	      on: {
	        "click": function($event) {
	          loadSource(item)
	        }
	      }
	    }, [_s(item.name)])]), " ", _h('div', {
	      staticClass: "hover"
	    }, [_h('button', {
	      on: {
	        "click": function($event) {
	          loadSource(item)
	        }
	      }
	    }, ["播"]), " ", _h('button', {
	      on: {
	        "click": function($event) {
	          musicSelect(item)
	        }
	      }
	    }, ["列"])])]), " ", _h('div', {
	      staticClass: "right"
	    }, ["\n                        " + _s(item.player) + "\n                    "])])
	  })])])]), " ", _h('button', {
	    staticClass: "toggle",
	    on: {
	      "click": musicToggle
	    }
	  })])
	}},staticRenderFns: [function (){with(this) {
	  return _h('em', [_h('i')])
	}},function (){with(this) {
	  return _h('span', {
	    staticClass: "list"
	  }, ["歌曲列表"])
	}},function (){with(this) {
	  return _h('div', {
	    staticClass: "title"
	  }, [_h('a', {
	    staticClass: "select selected"
	  }), " ", _h('div', {
	    staticClass: "left"
	  }, ["歌曲"]), " ", _h('div', {
	    staticClass: "right"
	  }, ["歌手"])])
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