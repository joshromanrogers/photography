// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"imgs/photography/music/music1.jpg":[function(require,module,exports) {
module.exports = "/music1.bd7241b8.jpg";
},{}],"imgs/photography/music/music10.jpg":[function(require,module,exports) {
module.exports = "/music10.f17e703b.jpg";
},{}],"imgs/photography/music/music11.jpg":[function(require,module,exports) {
module.exports = "/music11.b0c42854.jpg";
},{}],"imgs/photography/music/music12.jpg":[function(require,module,exports) {
module.exports = "/music12.a34b511b.jpg";
},{}],"imgs/photography/music/music13.jpg":[function(require,module,exports) {
module.exports = "/music13.5933a7c1.jpg";
},{}],"imgs/photography/music/music14.jpg":[function(require,module,exports) {
module.exports = "/music14.2e92ad80.jpg";
},{}],"imgs/photography/music/music15.jpg":[function(require,module,exports) {
module.exports = "/music15.7b00bea8.jpg";
},{}],"imgs/photography/music/music16.jpg":[function(require,module,exports) {
module.exports = "/music16.383617be.jpg";
},{}],"imgs/photography/music/music17.jpg":[function(require,module,exports) {
module.exports = "/music17.8880bed0.jpg";
},{}],"imgs/photography/music/music18.jpg":[function(require,module,exports) {
module.exports = "/music18.15c2e36d.jpg";
},{}],"imgs/photography/music/music19.jpg":[function(require,module,exports) {
module.exports = "/music19.eddddaae.jpg";
},{}],"imgs/photography/music/music2.jpg":[function(require,module,exports) {
module.exports = "/music2.c477aba3.jpg";
},{}],"imgs/photography/music/music20.jpg":[function(require,module,exports) {
module.exports = "/music20.4120845a.jpg";
},{}],"imgs/photography/music/music22.jpg":[function(require,module,exports) {
module.exports = "/music22.f717bdd1.jpg";
},{}],"imgs/photography/music/music21.jpg":[function(require,module,exports) {
module.exports = "/music21.4dcfea5b.jpg";
},{}],"imgs/photography/music/music23.jpg":[function(require,module,exports) {
module.exports = "/music23.fa82968d.jpg";
},{}],"imgs/photography/music/music3.jpg":[function(require,module,exports) {
module.exports = "/music3.602dd4ba.jpg";
},{}],"imgs/photography/music/music4.jpg":[function(require,module,exports) {
module.exports = "/music4.8f3e5d4e.jpg";
},{}],"imgs/photography/music/music5.jpg":[function(require,module,exports) {
module.exports = "/music5.c389faa6.jpg";
},{}],"imgs/photography/music/music6.jpg":[function(require,module,exports) {
module.exports = "/music6.beab1208.jpg";
},{}],"imgs/photography/music/music7.jpg":[function(require,module,exports) {
module.exports = "/music7.4dd3f08a.jpg";
},{}],"imgs/photography/music/music8.jpg":[function(require,module,exports) {
module.exports = "/music8.b4e07707.jpg";
},{}],"imgs/photography/music/music9.jpg":[function(require,module,exports) {
module.exports = "/music9.df441ab3.jpg";
},{}],"imgs/photography/music/*.jpg":[function(require,module,exports) {
module.exports = {
  "music1": require("./music1.jpg"),
  "music10": require("./music10.jpg"),
  "music11": require("./music11.jpg"),
  "music12": require("./music12.jpg"),
  "music13": require("./music13.jpg"),
  "music14": require("./music14.jpg"),
  "music15": require("./music15.jpg"),
  "music16": require("./music16.jpg"),
  "music17": require("./music17.jpg"),
  "music18": require("./music18.jpg"),
  "music19": require("./music19.jpg"),
  "music2": require("./music2.jpg"),
  "music20": require("./music20.jpg"),
  "music22": require("./music22.jpg"),
  "music21": require("./music21.jpg"),
  "music23": require("./music23.jpg"),
  "music3": require("./music3.jpg"),
  "music4": require("./music4.jpg"),
  "music5": require("./music5.jpg"),
  "music6": require("./music6.jpg"),
  "music7": require("./music7.jpg"),
  "music8": require("./music8.jpg"),
  "music9": require("./music9.jpg")
};
},{"./music1.jpg":"imgs/photography/music/music1.jpg","./music10.jpg":"imgs/photography/music/music10.jpg","./music11.jpg":"imgs/photography/music/music11.jpg","./music12.jpg":"imgs/photography/music/music12.jpg","./music13.jpg":"imgs/photography/music/music13.jpg","./music14.jpg":"imgs/photography/music/music14.jpg","./music15.jpg":"imgs/photography/music/music15.jpg","./music16.jpg":"imgs/photography/music/music16.jpg","./music17.jpg":"imgs/photography/music/music17.jpg","./music18.jpg":"imgs/photography/music/music18.jpg","./music19.jpg":"imgs/photography/music/music19.jpg","./music2.jpg":"imgs/photography/music/music2.jpg","./music20.jpg":"imgs/photography/music/music20.jpg","./music22.jpg":"imgs/photography/music/music22.jpg","./music21.jpg":"imgs/photography/music/music21.jpg","./music23.jpg":"imgs/photography/music/music23.jpg","./music3.jpg":"imgs/photography/music/music3.jpg","./music4.jpg":"imgs/photography/music/music4.jpg","./music5.jpg":"imgs/photography/music/music5.jpg","./music6.jpg":"imgs/photography/music/music6.jpg","./music7.jpg":"imgs/photography/music/music7.jpg","./music8.jpg":"imgs/photography/music/music8.jpg","./music9.jpg":"imgs/photography/music/music9.jpg"}],"js/place-image.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.placeImage = placeImage;

var _ = _interopRequireDefault(require("../imgs/photography/music/*.jpg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var i = 0;

function placeImage(x, y) {
  var nextImage = _.default[Object.keys(_.default)[i]];

  var mql = window.matchMedia("(max-width: 640px)"); // create img element,
  // set the src as an img in the images array,
  // give top left coords based on x and y input values

  var img = document.createElement("img");
  img.setAttribute("src", nextImage);
  img.classList.add("collage-img");
  img.style.maxHeight = "1800px";

  if (mql.matches) {
    img.style.left = x / 4 + "%";
    img.style.top = y / 8 + "%";
    img.style.transform = "translate(-50%, -50%) scale(".concat(Math.random() * 1.2 + 0.5, ") rotate(").concat(Math.random() * 20 - 10, "deg)");
  } else {
    img.style.left = x / 10 + "%";
    img.style.top = y / 10 + "%";
    img.style.transform = "translate(-50%, -50%) scale(".concat(Math.random() * 0.2 + 0.2, ") rotate(").concat(Math.random() * 20 - 10, "deg)");
  }

  console.log(img.style.left);
  console.log(img.style.top); // add to page

  var collageBody = document.querySelector(".collage-body");
  collageBody.appendChild(img);
  i = i + 1; // loop back to first image when the end of images array reached

  if (i >= Object.keys(_.default).length) {
    i = 0;
  }
}
},{"../imgs/photography/music/*.jpg":"imgs/photography/music/*.jpg"}],"../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "58220" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/place-image.js"], null)
//# sourceMappingURL=/place-image.6582f05b.js.map