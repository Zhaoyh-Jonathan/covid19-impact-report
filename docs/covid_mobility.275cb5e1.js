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
})({"../static/covid_mobility.csv":[function(require,module,exports) {
module.exports = "/covid_mobility.70df1dd8.csv";
},{}],"covid_mobility.js":[function(require,module,exports) {
"use strict";

var _covid_mobility = _interopRequireDefault(require("../static/covid_mobility.csv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

"use strict"; // the code should be executed in "strict mode".
// With strict mode, you can not, for example, use undeclared variables
// preparation for our svg


var margin = {
  top: 50,
  right: 35,
  bottom: 50,
  left: 150
},
    width = window.innerWidth - (margin.left + margin.right),
    height = window.innerHeight / 2 - (margin.top + margin.bottom);
var data = [];
var stateSet = new Set();
var line_svg = null;
var confirm_line = null;
var driving_line = null;
var dataFilter = null;
var x = d3.scaleTime().range([0, width]);
var y0 = d3.scaleLinear().range([height, 0]);
var y1 = d3.scaleLinear().range([height, 0]);
var xAxis = d3.axisBottom(x);
var yAxisLeft = d3.axisLeft(y0);
var yAxisRight = d3.axisRight(y1);
var parseTime = d3.timeParse("%Y-%m-%d"); // Get the data

d3.csv(_covid_mobility.default).then(function (d) {
  d.forEach(function (row) {
    stateSet.add(row.state);
    data.push({
      date: parseTime(row.date),
      Confirmed: row.daily_cases,
      driving: row.percentage,
      state: row.state
    });
  });
  drawMenu();
  dataFilter = filterData("Alabama");
  line_svg = initializeCanvas(dataFilter);
});
d3.select("#selectButton").on("change", function (d) {
  // recover the option that has been chosen
  var selectedOption = d3.select(this).property("value"); // run the updateChart function with this selected option

  update(selectedOption);
});

function filterData(state) {
  var dataFilter = data.filter(function (row) {
    return row["state"] == state;
  });
  return dataFilter;
}

function update(selectedGroup) {
  // Create new data with the selection?
  // Give these new data to update line
  dataFilter = filterData(selectedGroup);
  drawGraph(dataFilter, selectedGroup);
} // Add the brushing


var brush = d3.brushX() // Add the brush feature using the d3.brush function
.extent([[0, 0], [width, height]]) // initialise the brush area: start at 0,0 and finishes at width,height: it means I select the whole graph area
.on("end", updateChart); // A function that set idleTimeOut to null

var idleTimeout;

function idled() {
  idleTimeout = null;
} // A function that update the chart for given boundaries


function updateChart(event) {
  // What are the selected boundaries?
  var extent = event.selection; // If no selection, back to initial coordinate. Otherwise, update X axis domain

  if (!extent) {
    if (!idleTimeout) return idleTimeout = setTimeout(idled, 350); // This allows to wait a little bit

    x.domain(d3.extent(dataFilter, function (d) {
      return d.date;
    }));
  } else {
    x.domain([x.invert(extent[0]), x.invert(extent[1])]); // line_svg.select(".brush").call(brush.move, null); // This remove the grey brush area as soon as the selection has been done

    line_svg.call(brush).call(brush.move, null);
  } // Update axis and line position


  line_svg.select("g.xAxis").transition().duration(1000).call(xAxis);
  line_svg.select(".confirm_line").transition().duration(1000).attr("d", confirm_line);
  line_svg.select(".driving_line").transition().duration(1000).attr("d", driving_line);
} // If user double click, reinitialize the chart


function drawMenu() {
  d3.select("#selectButton").selectAll("myOptions").data(stateSet).enter().append("option").text(function (d) {
    return d;
  }) // text showed in the menu
  .attr("value", function (d) {
    return d;
  });
} // Scale the range of the data


function tweenDash() {
  var l = this.getTotalLength(),
      i = d3.interpolateString("0," + l, l + "," + l);
  return function (t) {
    return i(t);
  };
}

function transition(path) {
  var _this = this;

  path.transition().duration(5000).attrTween("stroke-dasharray", tweenDash).on("end", function () {
    d3.select(_this).call(transition);
  });
}

function initializeCanvas(dataFilter) {
  x.domain(d3.extent(dataFilter, function (d) {
    return d.date;
  }));
  y0.domain([0, d3.max(dataFilter, function (d) {
    return Math.max(d.Confirmed);
  })]);
  y1.domain([-200, 200]);
  confirm_line = d3.line().x(function (d) {
    return x(d.date);
  }).y(function (d) {
    return y0(d.Confirmed);
  }); // this is the mobility percentage

  driving_line = d3.line().x(function (d) {
    return x(d.date);
  }).y(function (d) {
    return y1(d.driving);
  });
  line_svg = d3.select("#d3-demo").append("svg").attr("width", width + margin.left + margin.right).attr("height", height + margin.top + margin.bottom).append("g").attr("transform", "translate(" + margin.left / 2 + "," + margin.top + ")");
  line_svg.append("path").datum(dataFilter) // Add the confirm line path.
  .attr("class", "confirm_line").attr("d", confirm_line); // .call(transition);

  line_svg.append("path").datum(dataFilter) // Add the confirmline2 path.
  .attr("class", "driving_line").attr("d", driving_line); // .call(transition);
  // add line brush

  line_svg.append("g").attr("class", "brush").call(brush);
  line_svg.append("g") // Add the X Axis
  .attr("class", "xAxis").attr("transform", "translate(0," + height + ")").call(xAxis);
  line_svg.append("g").attr("class", "axisSteelBlue").call(yAxisLeft);
  line_svg.append("g").attr("class", "axisRed").attr("transform", "translate(" + width + " ,0)").call(yAxisRight);
  line_svg.append("text").attr("text-anchor", "end").attr("x", width / 2).attr("y", height + 30).attr("class", "date").style("text-anchor", "middle").text("Date");
  line_svg.append("text").attr("text-anchor", "end").attr("x", width / 2).attr("y", -10).attr("class", "title").style("text-anchor", "middle").text("Weekly Case Vs Weekly Mobility (Alabama)");
  line_svg.append("text").attr("transform", "rotate(-90)").attr("y", 80 - margin.left).attr("x", 0 - height / 2).attr("dy", "1em").style("text-anchor", "middle").text("Weekly Cases");
  line_svg.append("text").attr("transform", "rotate(-90)").attr("y", 30 + width).attr("x", 0 - height / 2).attr("dy", "1em").style("text-anchor", "middle").text("Weekly Mobility Percentage Change");
  line_svg.append("defs").append("line_svg:clipPath").attr("id", "clip").append("line_svg:rect").attr("width", width).attr("height", height).attr("x", 0).attr("y", 0);
  line_svg.append("g").attr("clip-path", "url(#clip)");
  line_svg.append("g").attr("class", "brush").call(brush);
  line_svg.on("dblclick", function () {
    x.domain(d3.extent(dataFilter, function (d) {
      return d.date;
    }));
    line_svg.select("g.xAxis").transition().duration(1000).call(xAxis);
    line_svg.select(".confirm_line").transition().duration(1000).attr("d", confirm_line);
    line_svg.select(".driving_line").transition().duration(1000).attr("d", driving_line);
  });
  return line_svg;
}

function drawGraph(dataFilter, state) {
  x.domain(d3.extent(dataFilter, function (d) {
    return d.date;
  }));
  y0.domain([0, d3.max(dataFilter, function (d) {
    return Math.max(d.Confirmed);
  })]);
  var maxPercent = d3.max(dataFilter, function (d) {
    var ma = Math.abs(Math.max(d.driving));
    var mi = Math.abs(Math.min(d.driving));
    var m = Math.max(ma, mi);

    if (m % 100 > 50) {
      return m - m % 100 + 100;
    } else {
      return m - m % 100 + 50;
    }
  });
  y1.domain([-maxPercent, maxPercent]);
  d3.select(".confirm_line").datum(dataFilter) // Add the confirmline2 path.
  .transition().duration(1000).attr("d", confirm_line);
  d3.select(".driving_line").datum(dataFilter) // Add the confirmline2 path.
  .transition().duration(1000).attr("d", driving_line);
  line_svg.select("text.title").text("Weekly Case Vs Weekly Mobility (".concat(state, ")"));
  line_svg.select("g.axisSteelBlue").transition().duration(1000).call(yAxisLeft);
  line_svg.select("g.axisRed").transition().duration(1000).call(yAxisRight);
  line_svg.select("g.xAxis") // Add the X Axis
  .transition().duration(1000).call(xAxis);
}
},{"../static/covid_mobility.csv":"../static/covid_mobility.csv"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "52601" + '/');

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
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
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
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","covid_mobility.js"], null)
//# sourceMappingURL=/covid_mobility.275cb5e1.js.map