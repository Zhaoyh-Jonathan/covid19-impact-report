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
})({"QGcX":[function(require,module,exports) {
module.exports = [{
  "Month": 1,
  "Province_State": "Alabama",
  "Last_Update": "1/9/2021 5:30",
  "Lat": 32.3182,
  "Long_": -86.9023,
  "Confirmed": 455582,
  "Deaths": 7566
}, {
  "Month": 1,
  "Province_State": "Alaska",
  "Last_Update": "1/9/2021 5:30",
  "Lat": 61.3707,
  "Long_": -152.4044,
  "Confirmed": 54216,
  "Deaths": 262
}, {
  "Month": 1,
  "Province_State": "American Samoa",
  "Last_Update": "1/9/2021 5:30",
  "Lat": -14.271,
  "Long_": -170.132,
  "Confirmed": 0,
  "Deaths": 0
}, {
  "Month": 1,
  "Province_State": "Arizona",
  "Last_Update": "1/9/2021 5:30",
  "Lat": 33.7298,
  "Long_": -111.4312,
  "Confirmed": 753379,
  "Deaths": 13098
}, {
  "Month": 1,
  "Province_State": "Arkansas",
  "Last_Update": "1/9/2021 5:30",
  "Lat": 34.9697,
  "Long_": -92.3731,
  "Confirmed": 294387,
  "Deaths": 4838
}, {
  "Month": 1,
  "Province_State": "California",
  "Last_Update": "1/9/2021 5:30",
  "Lat": 36.1162,
  "Long_": -119.6816,
  "Confirmed": 3310949,
  "Deaths": 40702
}, {
  "Month": 1,
  "Province_State": "Colorado",
  "Last_Update": "1/9/2021 5:30",
  "Lat": 39.0598,
  "Long_": -105.3111,
  "Confirmed": 395019,
  "Deaths": 5620
}, {
  "Month": 1,
  "Province_State": "Connecticut",
  "Last_Update": "1/9/2021 5:30",
  "Lat": 41.5978,
  "Long_": -72.7554,
  "Confirmed": 250023,
  "Deaths": 7046
}, {
  "Month": 1,
  "Province_State": "Delaware",
  "Last_Update": "1/9/2021 5:30",
  "Lat": 39.3185,
  "Long_": -75.5071,
  "Confirmed": 77551,
  "Deaths": 1301
}, {
  "Month": 1,
  "Province_State": "District of Columbia",
  "Last_Update": "1/9/2021 5:30",
  "Lat": 38.8974,
  "Long_": -77.0268,
  "Confirmed": 36662,
  "Deaths": 909
}, {
  "Month": 1,
  "Province_State": "Florida",
  "Last_Update": "1/9/2021 5:30",
  "Lat": 27.7663,
  "Long_": -81.6868,
  "Confirmed": 1713589,
  "Deaths": 26360
}, {
  "Month": 1,
  "Province_State": "Georgia",
  "Last_Update": "1/9/2021 5:30",
  "Lat": 33.0406,
  "Long_": -83.6431,
  "Confirmed": 905858,
  "Deaths": 14196
}, {
  "Month": 1,
  "Province_State": "Guam",
  "Last_Update": "1/9/2021 5:30",
  "Lat": 13.4443,
  "Long_": 144.7937,
  "Confirmed": 7579,
  "Deaths": 129
}, {
  "Month": 1,
  "Province_State": "Hawaii",
  "Last_Update": "1/9/2021 5:30",
  "Lat": 21.0943,
  "Long_": -157.4983,
  "Confirmed": 25994,
  "Deaths": 406
}, {
  "Month": 1,
  "Province_State": "Idaho",
  "Last_Update": "1/9/2021 5:30",
  "Lat": 44.2405,
  "Long_": -114.4788,
  "Confirmed": 162683,
  "Deaths": 1725
}, {
  "Month": 1,
  "Province_State": "Illinois",
  "Last_Update": "1/9/2021 5:30",
  "Lat": 40.3495,
  "Long_": -88.9861,
  "Confirmed": 1123873,
  "Deaths": 21213
}, {
  "Month": 1,
  "Province_State": "Indiana",
  "Last_Update": "1/9/2021 5:30",
  "Lat": 39.8494,
  "Long_": -86.2583,
  "Confirmed": 624959,
  "Deaths": 11262
}, {
  "Month": 1,
  "Province_State": "Iowa",
  "Last_Update": "1/9/2021 5:30",
  "Lat": 42.0115,
  "Long_": -93.2105,
  "Confirmed": 319110,
  "Deaths": 4651
}, {
  "Month": 1,
  "Province_State": "Kansas",
  "Last_Update": "1/9/2021 5:30",
  "Lat": 38.5266,
  "Long_": -96.7265,
  "Confirmed": 276956,
  "Deaths": 3767
}, {
  "Month": 1,
  "Province_State": "Kentucky",
  "Last_Update": "1/9/2021 5:30",
  "Lat": 37.6681,
  "Long_": -84.6701,
  "Confirmed": 361115,
  "Deaths": 3714
}, {
  "Month": 1,
  "Province_State": "Louisiana",
  "Last_Update": "1/9/2021 5:30",
  "Lat": 31.1695,
  "Long_": -91.8678,
  "Confirmed": 397276,
  "Deaths": 8801
}, {
  "Month": 1,
  "Province_State": "Maine",
  "Last_Update": "1/9/2021 5:30",
  "Lat": 44.6939,
  "Long_": -69.3819,
  "Confirmed": 39168,
  "Deaths": 590
}, {
  "Month": 1,
  "Province_State": "Maryland",
  "Last_Update": "1/9/2021 5:30",
  "Lat": 39.0639,
  "Long_": -76.8021,
  "Confirmed": 352726,
  "Deaths": 7107
}, {
  "Month": 1,
  "Province_State": "Massachusetts",
  "Last_Update": "1/9/2021 5:30",
  "Lat": 42.2302,
  "Long_": -71.5301,
  "Confirmed": 521360,
  "Deaths": 14531
}, {
  "Month": 1,
  "Province_State": "Michigan",
  "Last_Update": "1/9/2021 5:30",
  "Lat": 43.3266,
  "Long_": -84.5361,
  "Confirmed": 610138,
  "Deaths": 15525
}, {
  "Month": 1,
  "Province_State": "Minnesota",
  "Last_Update": "1/9/2021 5:30",
  "Lat": 45.6945,
  "Long_": -93.9002,
  "Confirmed": 460819,
  "Deaths": 6255
}, {
  "Month": 1,
  "Province_State": "Mississippi",
  "Last_Update": "1/9/2021 5:30",
  "Lat": 32.7416,
  "Long_": -89.6787,
  "Confirmed": 274190,
  "Deaths": 6018
}, {
  "Month": 1,
  "Province_State": "Missouri",
  "Last_Update": "1/9/2021 5:30",
  "Lat": 38.4561,
  "Long_": -92.2884,
  "Confirmed": 472942,
  "Deaths": 7040
}, {
  "Month": 1,
  "Province_State": "Montana",
  "Last_Update": "1/9/2021 5:30",
  "Lat": 46.9219,
  "Long_": -110.4544,
  "Confirmed": 93762,
  "Deaths": 1232
}, {
  "Month": 1,
  "Province_State": "Nebraska",
  "Last_Update": "1/9/2021 5:30",
  "Lat": 41.1254,
  "Long_": -98.2681,
  "Confirmed": 190570,
  "Deaths": 1921
}, {
  "Month": 1,
  "Province_State": "Nevada",
  "Last_Update": "1/9/2021 5:30",
  "Lat": 38.3135,
  "Long_": -117.0554,
  "Confirmed": 277349,
  "Deaths": 4264
}, {
  "Month": 1,
  "Province_State": "New Hampshire",
  "Last_Update": "1/9/2021 5:30",
  "Lat": 43.4525,
  "Long_": -71.5639,
  "Confirmed": 65655,
  "Deaths": 1042
}, {
  "Month": 1,
  "Province_State": "New Jersey",
  "Last_Update": "1/9/2021 5:30",
  "Lat": 40.2989,
  "Long_": -74.521,
  "Confirmed": 692543,
  "Deaths": 21455
}, {
  "Month": 1,
  "Province_State": "New Mexico",
  "Last_Update": "1/9/2021 5:30",
  "Lat": 34.8405,
  "Long_": -106.2485,
  "Confirmed": 173539,
  "Deaths": 3265
}, {
  "Month": 1,
  "Province_State": "New York",
  "Last_Update": "1/9/2021 5:30",
  "Lat": 42.1657,
  "Long_": -74.9481,
  "Confirmed": 1408698,
  "Deaths": 43453
}, {
  "Month": 1,
  "Province_State": "North Carolina",
  "Last_Update": "1/9/2021 5:30",
  "Lat": 35.6301,
  "Long_": -79.8064,
  "Confirmed": 752627,
  "Deaths": 9287
}, {
  "Month": 1,
  "Province_State": "North Dakota",
  "Last_Update": "1/9/2021 5:30",
  "Lat": 47.5289,
  "Long_": -99.784,
  "Confirmed": 97561,
  "Deaths": 1447
}, {
  "Month": 1,
  "Province_State": "Northern Mariana Islands",
  "Last_Update": "1/9/2021 5:30",
  "Lat": 15.0979,
  "Long_": 145.6739,
  "Confirmed": 132,
  "Deaths": 2
}, {
  "Month": 1,
  "Province_State": "Ohio",
  "Last_Update": "1/9/2021 5:30",
  "Lat": 40.3888,
  "Long_": -82.7649,
  "Confirmed": 892781,
  "Deaths": 16384
}, {
  "Month": 1,
  "Province_State": "Oklahoma",
  "Last_Update": "1/9/2021 5:30",
  "Lat": 35.5653,
  "Long_": -96.9289,
  "Confirmed": 386590,
  "Deaths": 3504
}, {
  "Month": 1,
  "Province_State": "Oregon",
  "Last_Update": "1/9/2021 5:30",
  "Lat": 44.572,
  "Long_": -122.0709,
  "Confirmed": 142416,
  "Deaths": 1957
}, {
  "Month": 1,
  "Province_State": "Pennsylvania",
  "Last_Update": "1/9/2021 5:30",
  "Lat": 40.5908,
  "Long_": -77.2098,
  "Confirmed": 842475,
  "Deaths": 21562
}, {
  "Month": 1,
  "Province_State": "Puerto Rico",
  "Last_Update": "1/9/2021 5:30",
  "Lat": 18.2208,
  "Long_": -66.5901,
  "Confirmed": 93406,
  "Deaths": 1823
}, {
  "Month": 1,
  "Province_State": "Rhode Island",
  "Last_Update": "1/9/2021 5:30",
  "Lat": 41.6809,
  "Long_": -71.5118,
  "Confirmed": 114438,
  "Deaths": 2154
}, {
  "Month": 1,
  "Province_State": "South Carolina",
  "Last_Update": "1/9/2021 5:30",
  "Lat": 33.8569,
  "Long_": -80.945,
  "Confirmed": 439785,
  "Deaths": 7014
}, {
  "Month": 1,
  "Province_State": "South Dakota",
  "Last_Update": "1/9/2021 5:30",
  "Lat": 44.2998,
  "Long_": -99.4388,
  "Confirmed": 108070,
  "Deaths": 1775
}, {
  "Month": 1,
  "Province_State": "Tennessee",
  "Last_Update": "1/9/2021 5:30",
  "Lat": 35.7478,
  "Long_": -86.6923,
  "Confirmed": 724742,
  "Deaths": 9574
}, {
  "Month": 1,
  "Province_State": "Texas",
  "Last_Update": "1/9/2021 5:30",
  "Lat": 31.0545,
  "Long_": -97.5635,
  "Confirmed": 2363266,
  "Deaths": 36924
}, {
  "Month": 1,
  "Province_State": "Utah",
  "Last_Update": "1/9/2021 5:30",
  "Lat": 40.15,
  "Long_": -111.8624,
  "Confirmed": 345430,
  "Deaths": 1663
}, {
  "Month": 1,
  "Province_State": "Vermont",
  "Last_Update": "1/9/2021 5:30",
  "Lat": 44.0459,
  "Long_": -72.7107,
  "Confirmed": 11831,
  "Deaths": 173
}, {
  "Month": 1,
  "Province_State": "Virgin Islands",
  "Last_Update": "1/9/2021 5:30",
  "Lat": 18.3358,
  "Long_": -64.8963,
  "Confirmed": 2398,
  "Deaths": 24
}, {
  "Month": 1,
  "Province_State": "Virginia",
  "Last_Update": "1/9/2021 5:30",
  "Lat": 37.7693,
  "Long_": -78.17,
  "Confirmed": 502221,
  "Deaths": 6449
}, {
  "Month": 1,
  "Province_State": "Washington",
  "Last_Update": "1/9/2021 5:30",
  "Lat": 47.4009,
  "Long_": -121.4905,
  "Confirmed": 311597,
  "Deaths": 4285
}, {
  "Month": 1,
  "Province_State": "West Virginia",
  "Last_Update": "1/9/2021 5:30",
  "Lat": 38.4912,
  "Long_": -80.9545,
  "Confirmed": 120340,
  "Deaths": 2015
}, {
  "Month": 1,
  "Province_State": "Wisconsin",
  "Last_Update": "1/9/2021 5:30",
  "Lat": 44.2685,
  "Long_": -89.6165,
  "Confirmed": 590997,
  "Deaths": 6430
}, {
  "Month": 1,
  "Province_State": "Wyoming",
  "Last_Update": "1/9/2021 5:30",
  "Lat": 42.756,
  "Long_": -107.3025,
  "Confirmed": 51704,
  "Deaths": 596
}, {
  "Month": 10,
  "Province_State": "Alabama",
  "Last_Update": "10/9/2020 4:30",
  "Lat": 32.3182,
  "Long_": -86.9023,
  "Confirmed": 191932,
  "Deaths": 2932
}, {
  "Month": 10,
  "Province_State": "Alaska",
  "Last_Update": "10/9/2020 4:30",
  "Lat": 61.3707,
  "Long_": -152.4044,
  "Confirmed": 15908,
  "Deaths": 81
}, {
  "Month": 10,
  "Province_State": "American Samoa",
  "Last_Update": "10/9/2020 4:30",
  "Lat": -14.271,
  "Long_": -170.132,
  "Confirmed": 0,
  "Deaths": 0
}, {
  "Month": 10,
  "Province_State": "Arizona",
  "Last_Update": "10/9/2020 4:30",
  "Lat": 33.7298,
  "Long_": -111.4312,
  "Confirmed": 244045,
  "Deaths": 5934
}, {
  "Month": 10,
  "Province_State": "Arkansas",
  "Last_Update": "10/9/2020 4:30",
  "Lat": 34.9697,
  "Long_": -92.3731,
  "Confirmed": 110874,
  "Deaths": 1900
}, {
  "Month": 10,
  "Province_State": "California",
  "Last_Update": "10/9/2020 4:30",
  "Lat": 36.1162,
  "Long_": -119.6816,
  "Confirmed": 932079,
  "Deaths": 17618
}, {
  "Month": 10,
  "Province_State": "Colorado",
  "Last_Update": "10/9/2020 4:30",
  "Lat": 39.0598,
  "Long_": -105.3111,
  "Confirmed": 104426,
  "Deaths": 2278
}, {
  "Month": 10,
  "Province_State": "Connecticut",
  "Last_Update": "10/9/2020 4:30",
  "Lat": 41.5978,
  "Long_": -72.7554,
  "Confirmed": 71207,
  "Deaths": 4616
}, {
  "Month": 10,
  "Province_State": "Delaware",
  "Last_Update": "10/9/2020 4:30",
  "Lat": 39.3185,
  "Long_": -75.5071,
  "Confirmed": 24751,
  "Deaths": 731
}, {
  "Month": 10,
  "Province_State": "District of Columbia",
  "Last_Update": "10/9/2020 4:30",
  "Lat": 38.8974,
  "Long_": -77.0268,
  "Confirmed": 17144,
  "Deaths": 646
}, {
  "Month": 10,
  "Province_State": "Florida",
  "Last_Update": "10/9/2020 4:30",
  "Lat": 27.7663,
  "Long_": -81.6868,
  "Confirmed": 800216,
  "Deaths": 16720
}, {
  "Month": 10,
  "Province_State": "Georgia",
  "Last_Update": "10/9/2020 4:30",
  "Lat": 33.0406,
  "Long_": -83.6431,
  "Confirmed": 358225,
  "Deaths": 7955
}, {
  "Month": 10,
  "Province_State": "Guam",
  "Last_Update": "10/9/2020 4:30",
  "Lat": 13.4443,
  "Long_": 144.7937,
  "Confirmed": 4628,
  "Deaths": 79
}, {
  "Month": 10,
  "Province_State": "Hawaii",
  "Last_Update": "10/9/2020 4:30",
  "Lat": 21.0943,
  "Long_": -157.4983,
  "Confirmed": 15003,
  "Deaths": 216
}, {
  "Month": 10,
  "Province_State": "Idaho",
  "Last_Update": "10/9/2020 4:30",
  "Lat": 44.2405,
  "Long_": -114.4788,
  "Confirmed": 63810,
  "Deaths": 626
}, {
  "Month": 10,
  "Province_State": "Illinois",
  "Last_Update": "10/9/2020 4:30",
  "Lat": 40.3495,
  "Long_": -88.9861,
  "Confirmed": 408648,
  "Deaths": 9994
}, {
  "Month": 10,
  "Province_State": "Indiana",
  "Last_Update": "10/9/2020 4:30",
  "Lat": 39.8494,
  "Long_": -86.2583,
  "Confirmed": 175893,
  "Deaths": 4469
}, {
  "Month": 10,
  "Province_State": "Iowa",
  "Last_Update": "10/9/2020 4:30",
  "Lat": 42.0115,
  "Long_": -93.2105,
  "Confirmed": 125722,
  "Deaths": 1714
}, {
  "Month": 10,
  "Province_State": "Kansas",
  "Last_Update": "10/9/2020 4:30",
  "Lat": 38.5266,
  "Long_": -96.7265,
  "Confirmed": 86805,
  "Deaths": 1029
}, {
  "Month": 10,
  "Province_State": "Kentucky",
  "Last_Update": "10/9/2020 4:30",
  "Lat": 37.6681,
  "Long_": -84.6701,
  "Confirmed": 105242,
  "Deaths": 1476
}, {
  "Month": 10,
  "Province_State": "Louisiana",
  "Last_Update": "10/9/2020 4:30",
  "Lat": 31.1695,
  "Long_": -91.8678,
  "Confirmed": 182270,
  "Deaths": 5919
}, {
  "Month": 10,
  "Province_State": "Maine",
  "Last_Update": "10/9/2020 4:30",
  "Lat": 44.6939,
  "Long_": -69.3819,
  "Confirmed": 6566,
  "Deaths": 146
}, {
  "Month": 10,
  "Province_State": "Maryland",
  "Last_Update": "10/9/2020 4:30",
  "Lat": 39.0639,
  "Long_": -76.8021,
  "Confirmed": 144314,
  "Deaths": 4137
}, {
  "Month": 10,
  "Province_State": "Massachusetts",
  "Last_Update": "10/9/2020 4:30",
  "Lat": 42.2302,
  "Long_": -71.5301,
  "Confirmed": 157146,
  "Deaths": 9975
}, {
  "Month": 10,
  "Province_State": "Michigan",
  "Last_Update": "10/9/2020 4:30",
  "Lat": 43.3266,
  "Long_": -84.5361,
  "Confirmed": 193388,
  "Deaths": 7665
}, {
  "Month": 10,
  "Province_State": "Minnesota",
  "Last_Update": "10/9/2020 4:30",
  "Lat": 45.6945,
  "Long_": -93.9002,
  "Confirmed": 145465,
  "Deaths": 2491
}, {
  "Month": 10,
  "Province_State": "Mississippi",
  "Last_Update": "10/9/2020 4:30",
  "Lat": 32.7416,
  "Long_": -89.6787,
  "Confirmed": 119336,
  "Deaths": 3328
}, {
  "Month": 10,
  "Province_State": "Missouri",
  "Last_Update": "10/9/2020 4:30",
  "Lat": 38.4561,
  "Long_": -92.2884,
  "Confirmed": 183587,
  "Deaths": 2932
}, {
  "Month": 10,
  "Province_State": "Montana",
  "Last_Update": "10/9/2020 4:30",
  "Lat": 46.9219,
  "Long_": -110.4544,
  "Confirmed": 31916,
  "Deaths": 364
}, {
  "Month": 10,
  "Province_State": "Nebraska",
  "Last_Update": "10/9/2020 4:30",
  "Lat": 41.1254,
  "Long_": -98.2681,
  "Confirmed": 69645,
  "Deaths": 646
}, {
  "Month": 10,
  "Province_State": "Nevada",
  "Last_Update": "10/9/2020 4:30",
  "Lat": 38.3135,
  "Long_": -117.0554,
  "Confirmed": 99784,
  "Deaths": 1777
}, {
  "Month": 10,
  "Province_State": "New Hampshire",
  "Last_Update": "10/9/2020 4:30",
  "Lat": 43.4525,
  "Long_": -71.5639,
  "Confirmed": 10884,
  "Deaths": 482
}, {
  "Month": 10,
  "Province_State": "New Jersey",
  "Last_Update": "10/9/2020 4:30",
  "Lat": 40.2989,
  "Long_": -74.521,
  "Confirmed": 248338,
  "Deaths": 16339
}, {
  "Month": 10,
  "Province_State": "New Mexico",
  "Last_Update": "10/9/2020 4:30",
  "Lat": 34.8405,
  "Long_": -106.2485,
  "Confirmed": 45909,
  "Deaths": 1007
}, {
  "Month": 10,
  "Province_State": "New York",
  "Last_Update": "10/9/2020 4:30",
  "Lat": 42.1657,
  "Long_": -74.9481,
  "Confirmed": 509368,
  "Deaths": 33724
}, {
  "Month": 10,
  "Province_State": "North Carolina",
  "Last_Update": "10/9/2020 4:30",
  "Lat": 35.6301,
  "Long_": -79.8064,
  "Confirmed": 271830,
  "Deaths": 4332
}, {
  "Month": 10,
  "Province_State": "North Dakota",
  "Last_Update": "10/9/2020 4:30",
  "Lat": 47.5289,
  "Long_": -99.784,
  "Confirmed": 42483,
  "Deaths": 512
}, {
  "Month": 10,
  "Province_State": "Northern Mariana Islands",
  "Last_Update": "10/9/2020 4:30",
  "Lat": 15.0979,
  "Long_": 145.6739,
  "Confirmed": 92,
  "Deaths": 2
}, {
  "Month": 10,
  "Province_State": "Ohio",
  "Last_Update": "10/9/2020 4:30",
  "Lat": 40.3888,
  "Long_": -82.7649,
  "Confirmed": 212782,
  "Deaths": 5945
}, {
  "Month": 10,
  "Province_State": "Oklahoma",
  "Last_Update": "10/9/2020 4:30",
  "Lat": 35.5653,
  "Long_": -96.9289,
  "Confirmed": 121495,
  "Deaths": 1326
}, {
  "Month": 10,
  "Province_State": "Oregon",
  "Last_Update": "10/9/2020 4:30",
  "Lat": 44.572,
  "Long_": -122.0709,
  "Confirmed": 44388,
  "Deaths": 675
}, {
  "Month": 10,
  "Province_State": "Pennsylvania",
  "Last_Update": "10/9/2020 4:30",
  "Lat": 40.5908,
  "Long_": -77.2098,
  "Confirmed": 210586,
  "Deaths": 8774
}, {
  "Month": 10,
  "Province_State": "Puerto Rico",
  "Last_Update": "10/9/2020 4:30",
  "Lat": 18.2208,
  "Long_": -66.5901,
  "Confirmed": 65743,
  "Deaths": 820
}, {
  "Month": 10,
  "Province_State": "Rhode Island",
  "Last_Update": "10/9/2020 4:30",
  "Lat": 41.6809,
  "Long_": -71.5118,
  "Confirmed": 32874,
  "Deaths": 1201
}, {
  "Month": 10,
  "Province_State": "South Carolina",
  "Last_Update": "10/9/2020 4:30",
  "Lat": 33.8569,
  "Long_": -80.945,
  "Confirmed": 175594,
  "Deaths": 3896
}, {
  "Month": 10,
  "Province_State": "South Dakota",
  "Last_Update": "10/9/2020 4:30",
  "Lat": 44.2998,
  "Long_": -99.4388,
  "Confirmed": 44559,
  "Deaths": 415
}, {
  "Month": 10,
  "Province_State": "Tennessee",
  "Last_Update": "10/9/2020 4:30",
  "Lat": 35.7478,
  "Long_": -86.6923,
  "Confirmed": 259488,
  "Deaths": 3341
}, {
  "Month": 10,
  "Province_State": "Texas",
  "Last_Update": "10/9/2020 4:30",
  "Lat": 31.0545,
  "Long_": -97.5635,
  "Confirmed": 934760,
  "Deaths": 18714
}, {
  "Month": 10,
  "Province_State": "Utah",
  "Last_Update": "10/9/2020 4:30",
  "Lat": 40.15,
  "Long_": -111.8624,
  "Confirmed": 112932,
  "Deaths": 601
}, {
  "Month": 10,
  "Province_State": "Vermont",
  "Last_Update": "10/9/2020 4:30",
  "Lat": 44.0459,
  "Long_": -72.7107,
  "Confirmed": 2155,
  "Deaths": 58
}, {
  "Month": 10,
  "Province_State": "Virgin Islands",
  "Last_Update": "10/9/2020 4:30",
  "Lat": 18.3358,
  "Long_": -64.8963,
  "Confirmed": 1362,
  "Deaths": 21
}, {
  "Month": 10,
  "Province_State": "Virginia",
  "Last_Update": "10/9/2020 4:30",
  "Lat": 37.7693,
  "Long_": -78.17,
  "Confirmed": 179639,
  "Deaths": 3643
}, {
  "Month": 10,
  "Province_State": "Washington",
  "Last_Update": "10/9/2020 4:30",
  "Lat": 47.4009,
  "Long_": -121.4905,
  "Confirmed": 109932,
  "Deaths": 2331
}, {
  "Month": 10,
  "Province_State": "West Virginia",
  "Last_Update": "10/9/2020 4:30",
  "Lat": 38.4912,
  "Long_": -80.9545,
  "Confirmed": 23992,
  "Deaths": 453
}, {
  "Month": 10,
  "Province_State": "Wisconsin",
  "Last_Update": "10/9/2020 4:30",
  "Lat": 44.2685,
  "Long_": -89.6165,
  "Confirmed": 232061,
  "Deaths": 1972
}, {
  "Month": 10,
  "Province_State": "Wyoming",
  "Last_Update": "10/9/2020 4:30",
  "Lat": 42.756,
  "Long_": -107.3025,
  "Confirmed": 13028,
  "Deaths": 87
}, {
  "Month": 11,
  "Province_State": "Alabama",
  "Last_Update": "11/9/2020 5:30",
  "Lat": 32.3182,
  "Long_": -86.9023,
  "Confirmed": 247229,
  "Deaths": 3577
}, {
  "Month": 11,
  "Province_State": "Alaska",
  "Last_Update": "11/9/2020 5:30",
  "Lat": 61.3707,
  "Long_": -152.4044,
  "Confirmed": 32065,
  "Deaths": 121
}, {
  "Month": 11,
  "Province_State": "American Samoa",
  "Last_Update": "11/9/2020 5:30",
  "Lat": -14.271,
  "Long_": -170.132,
  "Confirmed": 0,
  "Deaths": 0
}, {
  "Month": 11,
  "Province_State": "Arizona",
  "Last_Update": "11/9/2020 5:30",
  "Lat": 33.7298,
  "Long_": -111.4312,
  "Confirmed": 325995,
  "Deaths": 6634
}, {
  "Month": 11,
  "Province_State": "Arkansas",
  "Last_Update": "11/9/2020 5:30",
  "Lat": 34.9697,
  "Long_": -92.3731,
  "Confirmed": 156247,
  "Deaths": 2470
}, {
  "Month": 11,
  "Province_State": "California",
  "Last_Update": "11/9/2020 5:30",
  "Lat": 36.1162,
  "Long_": -119.6816,
  "Confirmed": 1226219,
  "Deaths": 19152
}, {
  "Month": 11,
  "Province_State": "Colorado",
  "Last_Update": "11/9/2020 5:30",
  "Lat": 39.0598,
  "Long_": -105.3111,
  "Confirmed": 228772,
  "Deaths": 3003
}, {
  "Month": 11,
  "Province_State": "Connecticut",
  "Last_Update": "11/9/2020 5:30",
  "Lat": 41.5978,
  "Long_": -72.7554,
  "Confirmed": 112581,
  "Deaths": 4961
}, {
  "Month": 11,
  "Province_State": "Delaware",
  "Last_Update": "11/9/2020 5:30",
  "Lat": 39.3185,
  "Long_": -75.5071,
  "Confirmed": 35251,
  "Deaths": 817
}, {
  "Month": 11,
  "Province_State": "District of Columbia",
  "Last_Update": "11/9/2020 5:30",
  "Lat": 38.8974,
  "Long_": -77.0268,
  "Confirmed": 21448,
  "Deaths": 680
}, {
  "Month": 11,
  "Province_State": "Florida",
  "Last_Update": "11/9/2020 5:30",
  "Lat": 27.7663,
  "Long_": -81.6868,
  "Confirmed": 992660,
  "Deaths": 18500
}, {
  "Month": 11,
  "Province_State": "Georgia",
  "Last_Update": "11/9/2020 5:30",
  "Lat": 33.0406,
  "Long_": -83.6431,
  "Confirmed": 469516,
  "Deaths": 9442
}, {
  "Month": 11,
  "Province_State": "Guam",
  "Last_Update": "11/9/2020 5:30",
  "Lat": 13.4443,
  "Long_": 144.7937,
  "Confirmed": 6768,
  "Deaths": 112
}, {
  "Month": 11,
  "Province_State": "Hawaii",
  "Last_Update": "11/9/2020 5:30",
  "Lat": 21.0943,
  "Long_": -157.4983,
  "Confirmed": 18138,
  "Deaths": 244
}, {
  "Month": 11,
  "Province_State": "Idaho",
  "Last_Update": "11/9/2020 5:30",
  "Lat": 44.2405,
  "Long_": -114.4788,
  "Confirmed": 100484,
  "Deaths": 920
}, {
  "Month": 11,
  "Province_State": "Illinois",
  "Last_Update": "11/9/2020 5:30",
  "Lat": 40.3495,
  "Long_": -88.9861,
  "Confirmed": 720114,
  "Deaths": 12882
}, {
  "Month": 11,
  "Province_State": "Indiana",
  "Last_Update": "11/9/2020 5:30",
  "Lat": 39.8494,
  "Long_": -86.2583,
  "Confirmed": 333312,
  "Deaths": 6351
}, {
  "Month": 11,
  "Province_State": "Iowa",
  "Last_Update": "11/9/2020 5:30",
  "Lat": 42.0115,
  "Long_": -93.2105,
  "Confirmed": 228690,
  "Deaths": 2399
}, {
  "Month": 11,
  "Province_State": "Kansas",
  "Last_Update": "11/9/2020 5:30",
  "Lat": 38.5266,
  "Long_": -96.7265,
  "Confirmed": 155396,
  "Deaths": 1529
}, {
  "Month": 11,
  "Province_State": "Kentucky",
  "Last_Update": "11/9/2020 5:30",
  "Lat": 37.6681,
  "Long_": -84.6701,
  "Confirmed": 176925,
  "Deaths": 1896
}, {
  "Month": 11,
  "Province_State": "Louisiana",
  "Last_Update": "11/9/2020 5:30",
  "Lat": 31.1695,
  "Long_": -91.8678,
  "Confirmed": 232245,
  "Deaths": 6407
}, {
  "Month": 11,
  "Province_State": "Maine",
  "Last_Update": "11/9/2020 5:30",
  "Lat": 44.6939,
  "Long_": -69.3819,
  "Confirmed": 11508,
  "Deaths": 191
}, {
  "Month": 11,
  "Province_State": "Maryland",
  "Last_Update": "11/9/2020 5:30",
  "Lat": 39.0639,
  "Long_": -76.8021,
  "Confirmed": 196447,
  "Deaths": 4625
}, {
  "Month": 11,
  "Province_State": "Massachusetts",
  "Last_Update": "11/9/2020 5:30",
  "Lat": 42.2302,
  "Long_": -71.5301,
  "Confirmed": 224964,
  "Deaths": 10722
}, {
  "Month": 11,
  "Province_State": "Michigan",
  "Last_Update": "11/9/2020 5:30",
  "Lat": 43.3266,
  "Long_": -84.5361,
  "Confirmed": 378152,
  "Deaths": 9467
}, {
  "Month": 11,
  "Province_State": "Minnesota",
  "Last_Update": "11/9/2020 5:30",
  "Lat": 45.6945,
  "Long_": -93.9002,
  "Confirmed": 312969,
  "Deaths": 3637
}, {
  "Month": 11,
  "Province_State": "Mississippi",
  "Last_Update": "11/9/2020 5:30",
  "Lat": 32.7416,
  "Long_": -89.6787,
  "Confirmed": 151785,
  "Deaths": 3806
}, {
  "Month": 11,
  "Province_State": "Missouri",
  "Last_Update": "11/9/2020 5:30",
  "Lat": 38.4561,
  "Long_": -92.2884,
  "Confirmed": 302931,
  "Deaths": 3850
}, {
  "Month": 11,
  "Province_State": "Montana",
  "Last_Update": "11/9/2020 5:30",
  "Lat": 46.9219,
  "Long_": -110.4544,
  "Confirmed": 61801,
  "Deaths": 671
}, {
  "Month": 11,
  "Province_State": "Nebraska",
  "Last_Update": "11/9/2020 5:30",
  "Lat": 41.1254,
  "Long_": -98.2681,
  "Confirmed": 126466,
  "Deaths": 989
}, {
  "Month": 11,
  "Province_State": "Nevada",
  "Last_Update": "11/9/2020 5:30",
  "Lat": 38.3135,
  "Long_": -117.0554,
  "Confirmed": 150527,
  "Deaths": 2136
}, {
  "Month": 11,
  "Province_State": "New Hampshire",
  "Last_Update": "11/9/2020 5:30",
  "Lat": 43.4525,
  "Long_": -71.5639,
  "Confirmed": 20636,
  "Deaths": 526
}, {
  "Month": 11,
  "Province_State": "New Jersey",
  "Last_Update": "11/9/2020 5:30",
  "Lat": 40.2989,
  "Long_": -74.521,
  "Confirmed": 364047,
  "Deaths": 16978
}, {
  "Month": 11,
  "Province_State": "New Mexico",
  "Last_Update": "11/9/2020 5:30",
  "Lat": 34.8405,
  "Long_": -106.2485,
  "Confirmed": 95417,
  "Deaths": 1540
}, {
  "Month": 11,
  "Province_State": "New York",
  "Last_Update": "11/9/2020 5:30",
  "Lat": 42.1657,
  "Long_": -74.9481,
  "Confirmed": 648641,
  "Deaths": 34573
}, {
  "Month": 11,
  "Province_State": "North Carolina",
  "Last_Update": "11/9/2020 5:30",
  "Lat": 35.6301,
  "Long_": -79.8064,
  "Confirmed": 361778,
  "Deaths": 5240
}, {
  "Month": 11,
  "Province_State": "North Dakota",
  "Last_Update": "11/9/2020 5:30",
  "Lat": 47.5289,
  "Long_": -99.784,
  "Confirmed": 78658,
  "Deaths": 926
}, {
  "Month": 11,
  "Province_State": "Northern Mariana Islands",
  "Last_Update": "11/9/2020 5:30",
  "Lat": 15.0979,
  "Long_": 145.6739,
  "Confirmed": 105,
  "Deaths": 2
}, {
  "Month": 11,
  "Province_State": "Ohio",
  "Last_Update": "11/9/2020 5:30",
  "Lat": 40.3888,
  "Long_": -82.7649,
  "Confirmed": 414432,
  "Deaths": 8717
}, {
  "Month": 11,
  "Province_State": "Oklahoma",
  "Last_Update": "11/9/2020 5:30",
  "Lat": 35.5653,
  "Long_": -96.9289,
  "Confirmed": 195545,
  "Deaths": 1736
}, {
  "Month": 11,
  "Province_State": "Oregon",
  "Last_Update": "11/9/2020 5:30",
  "Lat": 44.572,
  "Long_": -122.0709,
  "Confirmed": 74119,
  "Deaths": 905
}, {
  "Month": 11,
  "Province_State": "Pennsylvania",
  "Last_Update": "11/9/2020 5:30",
  "Lat": 40.5908,
  "Long_": -77.2098,
  "Confirmed": 360944,
  "Deaths": 10297
}, {
  "Month": 11,
  "Province_State": "Puerto Rico",
  "Last_Update": "11/9/2020 5:30",
  "Lat": 18.2208,
  "Long_": -66.5901,
  "Confirmed": 72166,
  "Deaths": 1094
}, {
  "Month": 11,
  "Province_State": "Rhode Island",
  "Last_Update": "11/9/2020 5:30",
  "Lat": 41.6809,
  "Long_": -71.5118,
  "Confirmed": 53954,
  "Deaths": 1346
}, {
  "Month": 11,
  "Province_State": "South Carolina",
  "Last_Update": "11/9/2020 5:30",
  "Lat": 33.8569,
  "Long_": -80.945,
  "Confirmed": 216129,
  "Deaths": 4353
}, {
  "Month": 11,
  "Province_State": "South Dakota",
  "Last_Update": "11/9/2020 5:30",
  "Lat": 44.2998,
  "Long_": -99.4388,
  "Confirmed": 79900,
  "Deaths": 943
}, {
  "Month": 11,
  "Province_State": "Tennessee",
  "Last_Update": "11/9/2020 5:30",
  "Lat": 35.7478,
  "Long_": -86.6923,
  "Confirmed": 366518,
  "Deaths": 4554
}, {
  "Month": 11,
  "Province_State": "Texas",
  "Last_Update": "11/9/2020 5:30",
  "Lat": 31.0545,
  "Long_": -97.5635,
  "Confirmed": 1281337,
  "Deaths": 22199
}, {
  "Month": 11,
  "Province_State": "Utah",
  "Last_Update": "11/9/2020 5:30",
  "Lat": 40.15,
  "Long_": -111.8624,
  "Confirmed": 193809,
  "Deaths": 868
}, {
  "Month": 11,
  "Province_State": "Vermont",
  "Last_Update": "11/9/2020 5:30",
  "Lat": 44.0459,
  "Long_": -72.7107,
  "Confirmed": 4100,
  "Deaths": 67
}, {
  "Month": 11,
  "Province_State": "Virgin Islands",
  "Last_Update": "11/9/2020 5:30",
  "Lat": 18.3358,
  "Long_": -64.8963,
  "Confirmed": 1544,
  "Deaths": 23
}, {
  "Month": 11,
  "Province_State": "Virginia",
  "Last_Update": "11/9/2020 5:30",
  "Lat": 37.7693,
  "Long_": -78.17,
  "Confirmed": 235942,
  "Deaths": 4058
}, {
  "Month": 11,
  "Province_State": "Washington",
  "Last_Update": "11/9/2020 5:30",
  "Lat": 47.4009,
  "Long_": -121.4905,
  "Confirmed": 169500,
  "Deaths": 2731
}, {
  "Month": 11,
  "Province_State": "West Virginia",
  "Last_Update": "11/9/2020 5:30",
  "Lat": 38.4912,
  "Long_": -80.9545,
  "Confirmed": 46997,
  "Deaths": 729
}, {
  "Month": 11,
  "Province_State": "Wisconsin",
  "Last_Update": "11/9/2020 5:30",
  "Lat": 44.2685,
  "Long_": -89.6165,
  "Confirmed": 409054,
  "Deaths": 3487
}, {
  "Month": 11,
  "Province_State": "Wyoming",
  "Last_Update": "11/9/2020 5:30",
  "Lat": 42.756,
  "Long_": -107.3025,
  "Confirmed": 32489,
  "Deaths": 215
}, {
  "Month": 12,
  "Province_State": "Alabama",
  "Last_Update": "12/9/2020 5:30",
  "Lat": 32.3182,
  "Long_": -86.9023,
  "Confirmed": 356820,
  "Deaths": 4774
}, {
  "Month": 12,
  "Province_State": "Alaska",
  "Last_Update": "12/9/2020 5:30",
  "Lat": 61.3707,
  "Long_": -152.4044,
  "Confirmed": 46483,
  "Deaths": 203
}, {
  "Month": 12,
  "Province_State": "American Samoa",
  "Last_Update": "12/9/2020 5:30",
  "Lat": -14.271,
  "Long_": -170.132,
  "Confirmed": 0,
  "Deaths": 0
}, {
  "Month": 12,
  "Province_State": "Arizona",
  "Last_Update": "12/9/2020 5:30",
  "Lat": 33.7298,
  "Long_": -111.4312,
  "Confirmed": 512489,
  "Deaths": 8718
}, {
  "Month": 12,
  "Province_State": "Arkansas",
  "Last_Update": "12/9/2020 5:30",
  "Lat": 34.9697,
  "Long_": -92.3731,
  "Confirmed": 222430,
  "Deaths": 3637
}, {
  "Month": 12,
  "Province_State": "California",
  "Last_Update": "12/9/2020 5:30",
  "Lat": 36.1162,
  "Long_": -119.6816,
  "Confirmed": 2291414,
  "Deaths": 25417
}, {
  "Month": 12,
  "Province_State": "Colorado",
  "Last_Update": "12/9/2020 5:30",
  "Lat": 39.0598,
  "Long_": -105.3111,
  "Confirmed": 330859,
  "Deaths": 4750
}, {
  "Month": 12,
  "Province_State": "Connecticut",
  "Last_Update": "12/9/2020 5:30",
  "Lat": 41.5978,
  "Long_": -72.7554,
  "Confirmed": 183663,
  "Deaths": 5964
}, {
  "Month": 12,
  "Province_State": "Delaware",
  "Last_Update": "12/9/2020 5:30",
  "Lat": 39.3185,
  "Long_": -75.5071,
  "Confirmed": 56596,
  "Deaths": 1055
}, {
  "Month": 12,
  "Province_State": "District of Columbia",
  "Last_Update": "12/9/2020 5:30",
  "Lat": 38.8974,
  "Long_": -77.0268,
  "Confirmed": 28758,
  "Deaths": 780
}, {
  "Month": 12,
  "Province_State": "Florida",
  "Last_Update": "12/9/2020 5:30",
  "Lat": 27.7663,
  "Long_": -81.6868,
  "Confirmed": 1306123,
  "Deaths": 21546
}, {
  "Month": 12,
  "Province_State": "Georgia",
  "Last_Update": "12/9/2020 5:30",
  "Lat": 33.0406,
  "Long_": -83.6431,
  "Confirmed": 654743,
  "Deaths": 10846
}, {
  "Month": 12,
  "Province_State": "Guam",
  "Last_Update": "12/9/2020 5:30",
  "Lat": 13.4443,
  "Long_": 144.7937,
  "Confirmed": 7308,
  "Deaths": 121
}, {
  "Month": 12,
  "Province_State": "Hawaii",
  "Last_Update": "12/9/2020 5:30",
  "Lat": 21.0943,
  "Long_": -157.4983,
  "Confirmed": 21570,
  "Deaths": 285
}, {
  "Month": 12,
  "Province_State": "Idaho",
  "Last_Update": "12/9/2020 5:30",
  "Lat": 44.2405,
  "Long_": -114.4788,
  "Confirmed": 139864,
  "Deaths": 1403
}, {
  "Month": 12,
  "Province_State": "Illinois",
  "Last_Update": "12/9/2020 5:30",
  "Lat": 40.3495,
  "Long_": -88.9861,
  "Confirmed": 955380,
  "Deaths": 17811
}, {
  "Month": 12,
  "Province_State": "Indiana",
  "Last_Update": "12/9/2020 5:30",
  "Lat": 39.8494,
  "Long_": -86.2583,
  "Confirmed": 505017,
  "Deaths": 9314
}, {
  "Month": 12,
  "Province_State": "Iowa",
  "Last_Update": "12/9/2020 5:30",
  "Lat": 42.0115,
  "Long_": -93.2105,
  "Confirmed": 280064,
  "Deaths": 3822
}, {
  "Month": 12,
  "Province_State": "Kansas",
  "Last_Update": "12/9/2020 5:30",
  "Lat": 38.5266,
  "Long_": -96.7265,
  "Confirmed": 225206,
  "Deaths": 2736
}, {
  "Month": 12,
  "Province_State": "Kentucky",
  "Last_Update": "12/9/2020 5:30",
  "Lat": 37.6681,
  "Long_": -84.6701,
  "Confirmed": 265261,
  "Deaths": 2623
}, {
  "Month": 12,
  "Province_State": "Louisiana",
  "Last_Update": "12/9/2020 5:30",
  "Lat": 31.1695,
  "Long_": -91.8678,
  "Confirmed": 311229,
  "Deaths": 7448
}, {
  "Month": 12,
  "Province_State": "Maine",
  "Last_Update": "12/9/2020 5:30",
  "Lat": 44.6939,
  "Long_": -69.3819,
  "Confirmed": 23499,
  "Deaths": 334
}, {
  "Month": 12,
  "Province_State": "Maryland",
  "Last_Update": "12/9/2020 5:30",
  "Lat": 39.0639,
  "Long_": -76.8021,
  "Confirmed": 273689,
  "Deaths": 5848
}, {
  "Month": 12,
  "Province_State": "Massachusetts",
  "Last_Update": "12/9/2020 5:30",
  "Lat": 42.2302,
  "Long_": -71.5301,
  "Confirmed": 367918,
  "Deaths": 12338
}, {
  "Month": 12,
  "Province_State": "Michigan",
  "Last_Update": "12/9/2020 5:30",
  "Lat": 43.3266,
  "Long_": -84.5361,
  "Confirmed": 528621,
  "Deaths": 13018
}, {
  "Month": 12,
  "Province_State": "Minnesota",
  "Last_Update": "12/9/2020 5:30",
  "Lat": 45.6945,
  "Long_": -93.9002,
  "Confirmed": 413107,
  "Deaths": 5321
}, {
  "Month": 12,
  "Province_State": "Mississippi",
  "Last_Update": "12/9/2020 5:30",
  "Lat": 32.7416,
  "Long_": -89.6787,
  "Confirmed": 213055,
  "Deaths": 4747
}, {
  "Month": 12,
  "Province_State": "Missouri",
  "Last_Update": "12/9/2020 5:30",
  "Lat": 38.4561,
  "Long_": -92.2884,
  "Confirmed": 399955,
  "Deaths": 5664
}, {
  "Month": 12,
  "Province_State": "Montana",
  "Last_Update": "12/9/2020 5:30",
  "Lat": 46.9219,
  "Long_": -110.4544,
  "Confirmed": 81300,
  "Deaths": 950
}, {
  "Month": 12,
  "Province_State": "Nebraska",
  "Last_Update": "12/9/2020 5:30",
  "Lat": 41.1254,
  "Long_": -98.2681,
  "Confirmed": 165297,
  "Deaths": 1611
}, {
  "Month": 12,
  "Province_State": "Nevada",
  "Last_Update": "12/9/2020 5:30",
  "Lat": 38.3135,
  "Long_": -117.0554,
  "Confirmed": 222595,
  "Deaths": 3063
}, {
  "Month": 12,
  "Province_State": "New Hampshire",
  "Last_Update": "12/9/2020 5:30",
  "Lat": 43.4525,
  "Long_": -71.5639,
  "Confirmed": 43879,
  "Deaths": 741
}, {
  "Month": 12,
  "Province_State": "New Jersey",
  "Last_Update": "12/9/2020 5:30",
  "Lat": 40.2989,
  "Long_": -74.521,
  "Confirmed": 523295,
  "Deaths": 18952
}, {
  "Month": 12,
  "Province_State": "New Mexico",
  "Last_Update": "12/9/2020 5:30",
  "Lat": 34.8405,
  "Long_": -106.2485,
  "Confirmed": 141186,
  "Deaths": 2436
}, {
  "Month": 12,
  "Province_State": "New York",
  "Last_Update": "12/9/2020 5:30",
  "Lat": 42.1657,
  "Long_": -74.9481,
  "Confirmed": 963390,
  "Deaths": 37840
}, {
  "Month": 12,
  "Province_State": "North Carolina",
  "Last_Update": "12/9/2020 5:30",
  "Lat": 35.6301,
  "Long_": -79.8064,
  "Confirmed": 532830,
  "Deaths": 6729
}, {
  "Month": 12,
  "Province_State": "North Dakota",
  "Last_Update": "12/9/2020 5:30",
  "Lat": 47.5289,
  "Long_": -99.784,
  "Confirmed": 92203,
  "Deaths": 1282
}, {
  "Month": 12,
  "Province_State": "Northern Mariana Islands",
  "Last_Update": "12/9/2020 5:30",
  "Lat": 15.0979,
  "Long_": 145.6739,
  "Confirmed": 122,
  "Deaths": 2
}, {
  "Month": 12,
  "Province_State": "Ohio",
  "Last_Update": "12/9/2020 5:30",
  "Lat": 40.3888,
  "Long_": -82.7649,
  "Confirmed": 690748,
  "Deaths": 14330
}, {
  "Month": 12,
  "Province_State": "Oklahoma",
  "Last_Update": "12/9/2020 5:30",
  "Lat": 35.5653,
  "Long_": -96.9289,
  "Confirmed": 287030,
  "Deaths": 2453
}, {
  "Month": 12,
  "Province_State": "Oregon",
  "Last_Update": "12/9/2020 5:30",
  "Lat": 44.572,
  "Long_": -122.0709,
  "Confirmed": 112260,
  "Deaths": 1468
}, {
  "Month": 12,
  "Province_State": "Pennsylvania",
  "Last_Update": "12/9/2020 5:30",
  "Lat": 40.5908,
  "Long_": -77.2098,
  "Confirmed": 636061,
  "Deaths": 15665
}, {
  "Month": 12,
  "Province_State": "Puerto Rico",
  "Last_Update": "12/9/2020 5:30",
  "Lat": 18.2208,
  "Long_": -66.5901,
  "Confirmed": 75888,
  "Deaths": 1484
}, {
  "Month": 12,
  "Province_State": "Rhode Island",
  "Last_Update": "12/9/2020 5:30",
  "Lat": 41.6809,
  "Long_": -71.5118,
  "Confirmed": 87949,
  "Deaths": 1777
}, {
  "Month": 12,
  "Province_State": "South Carolina",
  "Last_Update": "12/9/2020 5:30",
  "Lat": 33.8569,
  "Long_": -80.945,
  "Confirmed": 303475,
  "Deaths": 5249
}, {
  "Month": 12,
  "Province_State": "South Dakota",
  "Last_Update": "12/9/2020 5:30",
  "Lat": 44.2998,
  "Long_": -99.4388,
  "Confirmed": 98720,
  "Deaths": 1464
}, {
  "Month": 12,
  "Province_State": "Tennessee",
  "Last_Update": "12/9/2020 5:30",
  "Lat": 35.7478,
  "Long_": -86.6923,
  "Confirmed": 580809,
  "Deaths": 6810
}, {
  "Month": 12,
  "Province_State": "Texas",
  "Last_Update": "12/9/2020 5:30",
  "Lat": 31.0545,
  "Long_": -97.5635,
  "Confirmed": 1754975,
  "Deaths": 27741
}, {
  "Month": 12,
  "Province_State": "Utah",
  "Last_Update": "12/9/2020 5:30",
  "Lat": 40.15,
  "Long_": -111.8624,
  "Confirmed": 271940,
  "Deaths": 1256
}, {
  "Month": 12,
  "Province_State": "Vermont",
  "Last_Update": "12/9/2020 5:30",
  "Lat": 44.0459,
  "Long_": -72.7107,
  "Confirmed": 7276,
  "Deaths": 134
}, {
  "Month": 12,
  "Province_State": "Virgin Islands",
  "Last_Update": "12/9/2020 5:30",
  "Lat": 18.3358,
  "Long_": -64.8963,
  "Confirmed": 2010,
  "Deaths": 23
}, {
  "Month": 12,
  "Province_State": "Virginia",
  "Last_Update": "12/9/2020 5:30",
  "Lat": 37.7693,
  "Long_": -78.17,
  "Confirmed": 344345,
  "Deaths": 4984
}, {
  "Month": 12,
  "Province_State": "Washington",
  "Last_Update": "12/9/2020 5:30",
  "Lat": 47.4009,
  "Long_": -121.4905,
  "Confirmed": 242330,
  "Deaths": 3420
}, {
  "Month": 12,
  "Province_State": "West Virginia",
  "Last_Update": "12/9/2020 5:30",
  "Lat": 38.4912,
  "Long_": -80.9545,
  "Confirmed": 84225,
  "Deaths": 1318
}, {
  "Month": 12,
  "Province_State": "Wisconsin",
  "Last_Update": "12/9/2020 5:30",
  "Lat": 44.2685,
  "Long_": -89.6165,
  "Confirmed": 516226,
  "Deaths": 5192
}, {
  "Month": 12,
  "Province_State": "Wyoming",
  "Last_Update": "12/9/2020 5:30",
  "Lat": 42.756,
  "Long_": -107.3025,
  "Confirmed": 44133,
  "Deaths": 405
}, {
  "Month": 2,
  "Province_State": "Alabama",
  "Last_Update": "2/9/2021 5:30",
  "Lat": 32.3182,
  "Long_": -86.9023,
  "Confirmed": 485986,
  "Deaths": 9590
}, {
  "Month": 2,
  "Province_State": "Alaska",
  "Last_Update": "2/9/2021 5:30",
  "Lat": 61.3707,
  "Long_": -152.4044,
  "Confirmed": 57393,
  "Deaths": 289
}, {
  "Month": 2,
  "Province_State": "American Samoa",
  "Last_Update": "2/9/2021 5:30",
  "Lat": -14.271,
  "Long_": -170.132,
  "Confirmed": 0,
  "Deaths": 0
}, {
  "Month": 2,
  "Province_State": "Arizona",
  "Last_Update": "2/9/2021 5:30",
  "Lat": 33.7298,
  "Long_": -111.4312,
  "Confirmed": 806163,
  "Deaths": 15480
}, {
  "Month": 2,
  "Province_State": "Arkansas",
  "Last_Update": "2/9/2021 5:30",
  "Lat": 34.9697,
  "Long_": -92.3731,
  "Confirmed": 315230,
  "Deaths": 5348
}, {
  "Month": 2,
  "Province_State": "California",
  "Last_Update": "2/9/2021 8:30",
  "Lat": 36.1162,
  "Long_": -119.6816,
  "Confirmed": 3527338,
  "Deaths": 49120
}, {
  "Month": 2,
  "Province_State": "Colorado",
  "Last_Update": "2/9/2021 5:30",
  "Lat": 39.0598,
  "Long_": -105.3111,
  "Confirmed": 419812,
  "Deaths": 5887
}, {
  "Month": 2,
  "Province_State": "Connecticut",
  "Last_Update": "2/9/2021 5:30",
  "Lat": 41.5978,
  "Long_": -72.7554,
  "Confirmed": 273101,
  "Deaths": 7523
}, {
  "Month": 2,
  "Province_State": "Delaware",
  "Last_Update": "2/9/2021 5:30",
  "Lat": 39.3185,
  "Long_": -75.5071,
  "Confirmed": 84531,
  "Deaths": 1366
}, {
  "Month": 2,
  "Province_State": "District of Columbia",
  "Last_Update": "2/9/2021 5:30",
  "Lat": 38.8974,
  "Long_": -77.0268,
  "Confirmed": 39553,
  "Deaths": 994
}, {
  "Month": 2,
  "Province_State": "Florida",
  "Last_Update": "2/9/2021 5:30",
  "Lat": 27.7663,
  "Long_": -81.6868,
  "Confirmed": 1863707,
  "Deaths": 29813
}, {
  "Month": 2,
  "Province_State": "Georgia",
  "Last_Update": "2/9/2021 5:30",
  "Lat": 33.0406,
  "Long_": -83.6431,
  "Confirmed": 983747,
  "Deaths": 16742
}, {
  "Month": 2,
  "Province_State": "Guam",
  "Last_Update": "2/9/2021 5:30",
  "Lat": 13.4443,
  "Long_": 144.7937,
  "Confirmed": 7715,
  "Deaths": 130
}, {
  "Month": 2,
  "Province_State": "Hawaii",
  "Last_Update": "2/9/2021 5:30",
  "Lat": 21.0943,
  "Long_": -157.4983,
  "Confirmed": 27297,
  "Deaths": 429
}, {
  "Month": 2,
  "Province_State": "Idaho",
  "Last_Update": "2/9/2021 5:30",
  "Lat": 44.2405,
  "Long_": -114.4788,
  "Confirmed": 169150,
  "Deaths": 1826
}, {
  "Month": 2,
  "Province_State": "Illinois",
  "Last_Update": "2/9/2021 5:30",
  "Lat": 40.3495,
  "Long_": -88.9861,
  "Confirmed": 1172736,
  "Deaths": 22426
}, {
  "Month": 2,
  "Province_State": "Indiana",
  "Last_Update": "2/9/2021 5:30",
  "Lat": 39.8494,
  "Long_": -86.2583,
  "Confirmed": 654660,
  "Deaths": 12336
}, {
  "Month": 2,
  "Province_State": "Iowa",
  "Last_Update": "2/9/2021 5:30",
  "Lat": 42.0115,
  "Long_": -93.2105,
  "Confirmed": 359344,
  "Deaths": 5336
}, {
  "Month": 2,
  "Province_State": "Kansas",
  "Last_Update": "2/9/2021 5:30",
  "Lat": 38.5266,
  "Long_": -96.7265,
  "Confirmed": 293215,
  "Deaths": 4573
}, {
  "Month": 2,
  "Province_State": "Kentucky",
  "Last_Update": "2/9/2021 5:30",
  "Lat": 37.6681,
  "Long_": -84.6701,
  "Confirmed": 396018,
  "Deaths": 4426
}, {
  "Month": 2,
  "Province_State": "Louisiana",
  "Last_Update": "2/9/2021 5:30",
  "Lat": 31.1695,
  "Long_": -91.8678,
  "Confirmed": 422287,
  "Deaths": 9440
}, {
  "Month": 2,
  "Province_State": "Maine",
  "Last_Update": "2/9/2021 5:30",
  "Lat": 44.6939,
  "Long_": -69.3819,
  "Confirmed": 43367,
  "Deaths": 658
}, {
  "Month": 2,
  "Province_State": "Maryland",
  "Last_Update": "2/9/2021 5:30",
  "Lat": 39.0639,
  "Long_": -76.8021,
  "Confirmed": 375737,
  "Deaths": 7697
}, {
  "Month": 2,
  "Province_State": "Massachusetts",
  "Last_Update": "2/9/2021 5:30",
  "Lat": 42.2302,
  "Long_": -71.5301,
  "Confirmed": 567764,
  "Deaths": 15779
}, {
  "Month": 2,
  "Province_State": "Michigan",
  "Last_Update": "2/9/2021 5:30",
  "Lat": 43.3266,
  "Long_": -84.5361,
  "Confirmed": 636269,
  "Deaths": 16342
}, {
  "Month": 2,
  "Province_State": "Minnesota",
  "Last_Update": "2/9/2021 5:30",
  "Lat": 45.6945,
  "Long_": -93.9002,
  "Confirmed": 478157,
  "Deaths": 6491
}, {
  "Month": 2,
  "Province_State": "Mississippi",
  "Last_Update": "2/9/2021 5:30",
  "Lat": 32.7416,
  "Long_": -89.6787,
  "Confirmed": 290242,
  "Deaths": 6553
}, {
  "Month": 2,
  "Province_State": "Missouri",
  "Last_Update": "2/9/2021 5:30",
  "Lat": 38.4561,
  "Long_": -92.2884,
  "Confirmed": 491070,
  "Deaths": 8059
}, {
  "Month": 2,
  "Province_State": "Montana",
  "Last_Update": "2/9/2021 5:30",
  "Lat": 46.9219,
  "Long_": -110.4544,
  "Confirmed": 98641,
  "Deaths": 1341
}, {
  "Month": 2,
  "Province_State": "Nebraska",
  "Last_Update": "2/9/2021 5:30",
  "Lat": 41.1254,
  "Long_": -98.2681,
  "Confirmed": 198751,
  "Deaths": 2047
}, {
  "Month": 2,
  "Province_State": "Nevada",
  "Last_Update": "2/9/2021 5:30",
  "Lat": 38.3135,
  "Long_": -117.0554,
  "Confirmed": 290671,
  "Deaths": 4868
}, {
  "Month": 2,
  "Province_State": "New Hampshire",
  "Last_Update": "2/9/2021 5:30",
  "Lat": 43.4525,
  "Long_": -71.5639,
  "Confirmed": 73161,
  "Deaths": 1153
}, {
  "Month": 2,
  "Province_State": "New Jersey",
  "Last_Update": "2/9/2021 5:30",
  "Lat": 40.2989,
  "Long_": -74.521,
  "Confirmed": 764375,
  "Deaths": 22834
}, {
  "Month": 2,
  "Province_State": "New Mexico",
  "Last_Update": "2/9/2021 5:30",
  "Lat": 34.8405,
  "Long_": -106.2485,
  "Confirmed": 182475,
  "Deaths": 3610
}, {
  "Month": 2,
  "Province_State": "New York",
  "Last_Update": "2/9/2021 5:30",
  "Lat": 42.1657,
  "Long_": -74.9481,
  "Confirmed": 1585435,
  "Deaths": 46703
}, {
  "Month": 2,
  "Province_State": "North Carolina",
  "Last_Update": "2/9/2021 5:30",
  "Lat": 35.6301,
  "Long_": -79.8064,
  "Confirmed": 840096,
  "Deaths": 10896
}, {
  "Month": 2,
  "Province_State": "North Dakota",
  "Last_Update": "2/9/2021 5:30",
  "Lat": 47.5289,
  "Long_": -99.784,
  "Confirmed": 99228,
  "Deaths": 1467
}, {
  "Month": 2,
  "Province_State": "Northern Mariana Islands",
  "Last_Update": "2/9/2021 5:30",
  "Lat": 15.0979,
  "Long_": 145.6739,
  "Confirmed": 143,
  "Deaths": 2
}, {
  "Month": 2,
  "Province_State": "Ohio",
  "Last_Update": "2/9/2021 5:30",
  "Lat": 40.3888,
  "Long_": -82.7649,
  "Confirmed": 952306,
  "Deaths": 16749
}, {
  "Month": 2,
  "Province_State": "Oklahoma",
  "Last_Update": "2/9/2021 5:30",
  "Lat": 35.5653,
  "Long_": -96.9289,
  "Confirmed": 418318,
  "Deaths": 4155
}, {
  "Month": 2,
  "Province_State": "Oregon",
  "Last_Update": "2/9/2021 5:30",
  "Lat": 44.572,
  "Long_": -122.0709,
  "Confirmed": 152711,
  "Deaths": 2154
}, {
  "Month": 2,
  "Province_State": "Pennsylvania",
  "Last_Update": "2/9/2021 5:30",
  "Lat": 40.5908,
  "Long_": -77.2098,
  "Confirmed": 913912,
  "Deaths": 23540
}, {
  "Month": 2,
  "Province_State": "Puerto Rico",
  "Last_Update": "2/9/2021 5:30",
  "Lat": 18.2208,
  "Long_": -66.5901,
  "Confirmed": 98835,
  "Deaths": 1957
}, {
  "Month": 2,
  "Province_State": "Rhode Island",
  "Last_Update": "2/9/2021 5:30",
  "Lat": 41.6809,
  "Long_": -71.5118,
  "Confirmed": 123145,
  "Deaths": 2376
}, {
  "Month": 2,
  "Province_State": "South Carolina",
  "Last_Update": "2/9/2021 5:30",
  "Lat": 33.8569,
  "Long_": -80.945,
  "Confirmed": 501277,
  "Deaths": 8256
}, {
  "Month": 2,
  "Province_State": "South Dakota",
  "Last_Update": "2/9/2021 5:30",
  "Lat": 44.2998,
  "Long_": -99.4388,
  "Confirmed": 111165,
  "Deaths": 1859
}, {
  "Month": 2,
  "Province_State": "Tennessee",
  "Last_Update": "2/9/2021 5:30",
  "Lat": 35.7478,
  "Long_": -86.6923,
  "Confirmed": 764008,
  "Deaths": 11115
}, {
  "Month": 2,
  "Province_State": "Texas",
  "Last_Update": "2/9/2021 5:30",
  "Lat": 31.0545,
  "Long_": -97.5635,
  "Confirmed": 2593816,
  "Deaths": 42041
}, {
  "Month": 2,
  "Province_State": "Utah",
  "Last_Update": "2/9/2021 5:30",
  "Lat": 40.15,
  "Long_": -111.8624,
  "Confirmed": 366034,
  "Deaths": 1842
}, {
  "Month": 2,
  "Province_State": "Vermont",
  "Last_Update": "2/9/2021 5:30",
  "Lat": 44.0459,
  "Long_": -72.7107,
  "Confirmed": 14359,
  "Deaths": 196
}, {
  "Month": 2,
  "Province_State": "Virgin Islands",
  "Last_Update": "2/9/2021 5:30",
  "Lat": 18.3358,
  "Long_": -64.8963,
  "Confirmed": 2575,
  "Deaths": 25
}, {
  "Month": 2,
  "Province_State": "Virginia",
  "Last_Update": "2/9/2021 5:30",
  "Lat": 37.7693,
  "Long_": -78.17,
  "Confirmed": 561812,
  "Deaths": 7197
}, {
  "Month": 2,
  "Province_State": "Washington",
  "Last_Update": "2/9/2021 5:30",
  "Lat": 47.4009,
  "Long_": -121.4905,
  "Confirmed": 333794,
  "Deaths": 4822
}, {
  "Month": 2,
  "Province_State": "West Virginia",
  "Last_Update": "2/9/2021 5:30",
  "Lat": 38.4912,
  "Long_": -80.9545,
  "Confirmed": 129364,
  "Deaths": 2254
}, {
  "Month": 2,
  "Province_State": "Wisconsin",
  "Last_Update": "2/9/2021 5:30",
  "Lat": 44.2685,
  "Long_": -89.6165,
  "Confirmed": 611789,
  "Deaths": 6871
}, {
  "Month": 2,
  "Province_State": "Wyoming",
  "Last_Update": "2/9/2021 5:30",
  "Lat": 42.756,
  "Long_": -107.3025,
  "Confirmed": 53683,
  "Deaths": 662
}, {
  "Month": 4,
  "Province_State": "Alabama",
  "Last_Update": "4/30/2020 2:32",
  "Lat": 32.3182,
  "Long_": -86.9023,
  "Confirmed": 6979,
  "Deaths": 256
}, {
  "Month": 4,
  "Province_State": "Alaska",
  "Last_Update": "4/30/2020 2:32",
  "Lat": 61.3707,
  "Long_": -152.4044,
  "Confirmed": 355,
  "Deaths": 9
}, {
  "Month": 4,
  "Province_State": "American Samoa",
  "Last_Update": "4/30/2020 2:32",
  "Lat": -14.271,
  "Long_": -170.132,
  "Confirmed": 0,
  "Deaths": 0
}, {
  "Month": 4,
  "Province_State": "Arizona",
  "Last_Update": "4/30/2020 2:32",
  "Lat": 33.7298,
  "Long_": -111.4312,
  "Confirmed": 7209,
  "Deaths": 308
}, {
  "Month": 4,
  "Province_State": "Arkansas",
  "Last_Update": "4/30/2020 2:32",
  "Lat": 34.9697,
  "Long_": -92.3731,
  "Confirmed": 3193,
  "Deaths": 57
}, {
  "Month": 4,
  "Province_State": "California",
  "Last_Update": "4/30/2020 2:32",
  "Lat": 36.1162,
  "Long_": -119.6816,
  "Confirmed": 49310,
  "Deaths": 1946
}, {
  "Month": 4,
  "Province_State": "Colorado",
  "Last_Update": "4/30/2020 2:32",
  "Lat": 39.0598,
  "Long_": -105.3111,
  "Confirmed": 14758,
  "Deaths": 766
}, {
  "Month": 4,
  "Province_State": "Connecticut",
  "Last_Update": "4/30/2020 2:32",
  "Lat": 41.5978,
  "Long_": -72.7554,
  "Confirmed": 26767,
  "Deaths": 2169
}, {
  "Month": 4,
  "Province_State": "Delaware",
  "Last_Update": "4/30/2020 2:32",
  "Lat": 39.3185,
  "Long_": -75.5071,
  "Confirmed": 4655,
  "Deaths": 206
}, {
  "Month": 4,
  "Province_State": "District of Columbia",
  "Last_Update": "4/30/2020 2:32",
  "Lat": 38.8974,
  "Long_": -77.0268,
  "Confirmed": 4106,
  "Deaths": 205
}, {
  "Month": 4,
  "Province_State": "Florida",
  "Last_Update": "4/30/2020 2:32",
  "Lat": 27.7663,
  "Long_": -81.6868,
  "Confirmed": 33193,
  "Deaths": 1218
}, {
  "Month": 4,
  "Province_State": "Georgia",
  "Last_Update": "4/30/2020 2:32",
  "Lat": 33.0406,
  "Long_": -83.6431,
  "Confirmed": 25775,
  "Deaths": 1101
}, {
  "Month": 4,
  "Province_State": "Guam",
  "Last_Update": "4/30/2020 2:32",
  "Lat": 13.4443,
  "Long_": 144.7937,
  "Confirmed": 141,
  "Deaths": 5
}, {
  "Month": 4,
  "Province_State": "Hawaii",
  "Last_Update": "4/30/2020 2:32",
  "Lat": 21.0943,
  "Long_": -157.4983,
  "Confirmed": 613,
  "Deaths": 16
}, {
  "Month": 4,
  "Province_State": "Idaho",
  "Last_Update": "4/30/2020 2:32",
  "Lat": 44.2405,
  "Long_": -114.4788,
  "Confirmed": 1952,
  "Deaths": 60
}, {
  "Month": 4,
  "Province_State": "Illinois",
  "Last_Update": "4/30/2020 2:32",
  "Lat": 40.3495,
  "Long_": -88.9861,
  "Confirmed": 50358,
  "Deaths": 2215
}, {
  "Month": 4,
  "Province_State": "Indiana",
  "Last_Update": "4/30/2020 2:32",
  "Lat": 39.8494,
  "Long_": -86.2583,
  "Confirmed": 17182,
  "Deaths": 1116
}, {
  "Month": 4,
  "Province_State": "Iowa",
  "Last_Update": "4/30/2020 2:32",
  "Lat": 42.0115,
  "Long_": -93.2105,
  "Confirmed": 6843,
  "Deaths": 148
}, {
  "Month": 4,
  "Province_State": "Kansas",
  "Last_Update": "4/30/2020 2:32",
  "Lat": 38.5266,
  "Long_": -96.7265,
  "Confirmed": 3839,
  "Deaths": 134
}, {
  "Month": 4,
  "Province_State": "Kentucky",
  "Last_Update": "4/30/2020 2:32",
  "Lat": 37.6681,
  "Long_": -84.6701,
  "Confirmed": 4537,
  "Deaths": 234
}, {
  "Month": 4,
  "Province_State": "Louisiana",
  "Last_Update": "4/30/2020 2:32",
  "Lat": 31.1695,
  "Long_": -91.8678,
  "Confirmed": 27660,
  "Deaths": 1845
}, {
  "Month": 4,
  "Province_State": "Maine",
  "Last_Update": "4/30/2020 2:32",
  "Lat": 44.6939,
  "Long_": -69.3819,
  "Confirmed": 1056,
  "Deaths": 52
}, {
  "Month": 4,
  "Province_State": "Maryland",
  "Last_Update": "4/30/2020 2:32",
  "Lat": 39.0639,
  "Long_": -76.8021,
  "Confirmed": 20849,
  "Deaths": 1078
}, {
  "Month": 4,
  "Province_State": "Massachusetts",
  "Last_Update": "4/30/2020 2:32",
  "Lat": 42.2302,
  "Long_": -71.5301,
  "Confirmed": 60265,
  "Deaths": 3405
}, {
  "Month": 4,
  "Province_State": "Michigan",
  "Last_Update": "4/30/2020 2:32",
  "Lat": 43.3266,
  "Long_": -84.5361,
  "Confirmed": 40399,
  "Deaths": 3670
}, {
  "Month": 4,
  "Province_State": "Minnesota",
  "Last_Update": "4/30/2020 2:32",
  "Lat": 45.6945,
  "Long_": -93.9002,
  "Confirmed": 4644,
  "Deaths": 319
}, {
  "Month": 4,
  "Province_State": "Mississippi",
  "Last_Update": "4/30/2020 2:32",
  "Lat": 32.7416,
  "Long_": -89.6787,
  "Confirmed": 6569,
  "Deaths": 250
}, {
  "Month": 4,
  "Province_State": "Missouri",
  "Last_Update": "4/30/2020 2:32",
  "Lat": 38.4561,
  "Long_": -92.2884,
  "Confirmed": 7760,
  "Deaths": 343
}, {
  "Month": 4,
  "Province_State": "Montana",
  "Last_Update": "4/30/2020 2:32",
  "Lat": 46.9219,
  "Long_": -110.4544,
  "Confirmed": 451,
  "Deaths": 16
}, {
  "Month": 4,
  "Province_State": "Nebraska",
  "Last_Update": "4/30/2020 2:32",
  "Lat": 41.1254,
  "Long_": -98.2681,
  "Confirmed": 3851,
  "Deaths": 56
}, {
  "Month": 4,
  "Province_State": "Nevada",
  "Last_Update": "4/30/2020 2:32",
  "Lat": 38.3135,
  "Long_": -117.0554,
  "Confirmed": 4934,
  "Deaths": 230
}, {
  "Month": 4,
  "Province_State": "New Hampshire",
  "Last_Update": "4/30/2020 2:32",
  "Lat": 43.4525,
  "Long_": -71.5639,
  "Confirmed": 2058,
  "Deaths": 60
}, {
  "Month": 4,
  "Province_State": "New Jersey",
  "Last_Update": "4/30/2020 2:32",
  "Lat": 40.2989,
  "Long_": -74.521,
  "Confirmed": 116365,
  "Deaths": 6771
}, {
  "Month": 4,
  "Province_State": "New Mexico",
  "Last_Update": "4/30/2020 2:32",
  "Lat": 34.8405,
  "Long_": -106.2485,
  "Confirmed": 3213,
  "Deaths": 112
}, {
  "Month": 4,
  "Province_State": "New York",
  "Last_Update": "4/30/2020 2:32",
  "Lat": 42.1657,
  "Long_": -74.9481,
  "Confirmed": 299691,
  "Deaths": 23477
}, {
  "Month": 4,
  "Province_State": "North Carolina",
  "Last_Update": "4/30/2020 2:32",
  "Lat": 35.6301,
  "Long_": -79.8064,
  "Confirmed": 10180,
  "Deaths": 382
}, {
  "Month": 4,
  "Province_State": "North Dakota",
  "Last_Update": "4/30/2020 2:32",
  "Lat": 47.5289,
  "Long_": -99.784,
  "Confirmed": 1033,
  "Deaths": 19
}, {
  "Month": 4,
  "Province_State": "Northern Mariana Islands",
  "Last_Update": "4/30/2020 2:32",
  "Lat": 15.0979,
  "Long_": 145.6739,
  "Confirmed": 14,
  "Deaths": 2
}, {
  "Month": 4,
  "Province_State": "Ohio",
  "Last_Update": "4/30/2020 2:32",
  "Lat": 40.3888,
  "Long_": -82.7649,
  "Confirmed": 17303,
  "Deaths": 1160
}, {
  "Month": 4,
  "Province_State": "Oklahoma",
  "Last_Update": "4/30/2020 2:32",
  "Lat": 35.5653,
  "Long_": -96.9289,
  "Confirmed": 3473,
  "Deaths": 214
}, {
  "Month": 4,
  "Province_State": "Oregon",
  "Last_Update": "4/30/2020 2:32",
  "Lat": 44.572,
  "Long_": -122.0709,
  "Confirmed": 2446,
  "Deaths": 101
}, {
  "Month": 4,
  "Province_State": "Pennsylvania",
  "Last_Update": "4/30/2020 2:32",
  "Lat": 40.5908,
  "Long_": -77.2098,
  "Confirmed": 46327,
  "Deaths": 2373
}, {
  "Month": 4,
  "Province_State": "Puerto Rico",
  "Last_Update": "4/30/2020 2:32",
  "Lat": 18.2208,
  "Long_": -66.5901,
  "Confirmed": 1433,
  "Deaths": 86
}, {
  "Month": 4,
  "Province_State": "Rhode Island",
  "Last_Update": "4/30/2020 2:32",
  "Lat": 41.6809,
  "Long_": -71.5118,
  "Confirmed": 8247,
  "Deaths": 251
}, {
  "Month": 4,
  "Province_State": "South Carolina",
  "Last_Update": "4/30/2020 2:32",
  "Lat": 33.8569,
  "Long_": -80.945,
  "Confirmed": 5882,
  "Deaths": 231
}, {
  "Month": 4,
  "Province_State": "South Dakota",
  "Last_Update": "4/30/2020 2:32",
  "Lat": 44.2998,
  "Long_": -99.4388,
  "Confirmed": 2373,
  "Deaths": 13
}, {
  "Month": 4,
  "Province_State": "Tennessee",
  "Last_Update": "4/30/2020 2:32",
  "Lat": 35.7478,
  "Long_": -86.6923,
  "Confirmed": 10366,
  "Deaths": 195
}, {
  "Month": 4,
  "Province_State": "Texas",
  "Last_Update": "4/30/2020 2:32",
  "Lat": 31.0545,
  "Long_": -97.5635,
  "Confirmed": 27542,
  "Deaths": 803
}, {
  "Month": 4,
  "Province_State": "Utah",
  "Last_Update": "4/30/2020 2:32",
  "Lat": 40.15,
  "Long_": -111.8624,
  "Confirmed": 4497,
  "Deaths": 45
}, {
  "Month": 4,
  "Province_State": "Vermont",
  "Last_Update": "4/30/2020 2:32",
  "Lat": 44.0459,
  "Long_": -72.7107,
  "Confirmed": 862,
  "Deaths": 47
}, {
  "Month": 4,
  "Province_State": "Virgin Islands",
  "Last_Update": "4/30/2020 2:32",
  "Lat": 18.3358,
  "Long_": -64.8963,
  "Confirmed": 57,
  "Deaths": 4
}, {
  "Month": 4,
  "Province_State": "Virginia",
  "Last_Update": "4/30/2020 2:32",
  "Lat": 37.7693,
  "Long_": -78.17,
  "Confirmed": 14962,
  "Deaths": 522
}, {
  "Month": 4,
  "Province_State": "Washington",
  "Last_Update": "4/30/2020 2:32",
  "Lat": 47.4009,
  "Long_": -121.4905,
  "Confirmed": 14070,
  "Deaths": 828
}, {
  "Month": 4,
  "Province_State": "West Virginia",
  "Last_Update": "4/30/2020 2:32",
  "Lat": 38.4912,
  "Long_": -80.9545,
  "Confirmed": 1110,
  "Deaths": 38
}, {
  "Month": 4,
  "Province_State": "Wisconsin",
  "Last_Update": "4/30/2020 2:32",
  "Lat": 44.2685,
  "Long_": -89.6165,
  "Confirmed": 6520,
  "Deaths": 308
}, {
  "Month": 4,
  "Province_State": "Wyoming",
  "Last_Update": "4/30/2020 2:32",
  "Lat": 42.756,
  "Long_": -107.3025,
  "Confirmed": 545,
  "Deaths": 7
}, {
  "Month": 5,
  "Province_State": "Alabama",
  "Last_Update": "5/9/2020 2:32",
  "Lat": 32.3182,
  "Long_": -86.9023,
  "Confirmed": 17689,
  "Deaths": 618
}, {
  "Month": 5,
  "Province_State": "Alaska",
  "Last_Update": "5/9/2020 2:32",
  "Lat": 61.3707,
  "Long_": -152.4044,
  "Confirmed": 433,
  "Deaths": 10
}, {
  "Month": 5,
  "Province_State": "American Samoa",
  "Last_Update": "5/9/2020 2:32",
  "Lat": -14.271,
  "Long_": -170.132,
  "Confirmed": 0,
  "Deaths": 0
}, {
  "Month": 5,
  "Province_State": "Arizona",
  "Last_Update": "5/9/2020 2:32",
  "Lat": 33.7298,
  "Long_": -111.4312,
  "Confirmed": 19258,
  "Deaths": 904
}, {
  "Month": 5,
  "Province_State": "Arkansas",
  "Last_Update": "5/9/2020 2:32",
  "Lat": 34.9697,
  "Long_": -92.3731,
  "Confirmed": 7013,
  "Deaths": 133
}, {
  "Month": 5,
  "Province_State": "California",
  "Last_Update": "5/9/2020 2:32",
  "Lat": 36.1162,
  "Long_": -119.6816,
  "Confirmed": 110937,
  "Deaths": 4144
}, {
  "Month": 5,
  "Province_State": "Colorado",
  "Last_Update": "5/9/2020 2:32",
  "Lat": 39.0598,
  "Long_": -105.3111,
  "Confirmed": 26098,
  "Deaths": 1443
}, {
  "Month": 5,
  "Province_State": "Connecticut",
  "Last_Update": "5/9/2020 2:32",
  "Lat": 41.5978,
  "Long_": -72.7554,
  "Confirmed": 42022,
  "Deaths": 3912
}, {
  "Month": 5,
  "Province_State": "Delaware",
  "Last_Update": "5/9/2020 2:32",
  "Lat": 39.3185,
  "Long_": -75.5071,
  "Confirmed": 9422,
  "Deaths": 494
}, {
  "Month": 5,
  "Province_State": "District of Columbia",
  "Last_Update": "5/9/2020 2:32",
  "Lat": 38.8974,
  "Long_": -77.0268,
  "Confirmed": 8717,
  "Deaths": 462
}, {
  "Month": 5,
  "Province_State": "Florida",
  "Last_Update": "5/9/2020 2:32",
  "Lat": 27.7663,
  "Long_": -81.6868,
  "Confirmed": 55424,
  "Deaths": 2447
}, {
  "Month": 5,
  "Province_State": "Georgia",
  "Last_Update": "5/9/2020 2:32",
  "Lat": 33.0406,
  "Long_": -83.6431,
  "Confirmed": 46331,
  "Deaths": 2004
}, {
  "Month": 5,
  "Province_State": "Guam",
  "Last_Update": "5/9/2020 2:32",
  "Lat": 13.4443,
  "Long_": 144.7937,
  "Confirmed": 172,
  "Deaths": 5
}, {
  "Month": 5,
  "Province_State": "Hawaii",
  "Last_Update": "5/9/2020 2:32",
  "Lat": 21.0943,
  "Long_": -157.4983,
  "Confirmed": 651,
  "Deaths": 17
}, {
  "Month": 5,
  "Province_State": "Idaho",
  "Last_Update": "5/9/2020 2:32",
  "Lat": 44.2405,
  "Long_": -114.4788,
  "Confirmed": 2803,
  "Deaths": 82
}, {
  "Month": 5,
  "Province_State": "Illinois",
  "Last_Update": "5/9/2020 2:32",
  "Lat": 40.3495,
  "Long_": -88.9861,
  "Confirmed": 118917,
  "Deaths": 5330
}, {
  "Month": 5,
  "Province_State": "Indiana",
  "Last_Update": "5/9/2020 2:32",
  "Lat": 39.8494,
  "Long_": -86.2583,
  "Confirmed": 34211,
  "Deaths": 2096
}, {
  "Month": 5,
  "Province_State": "Iowa",
  "Last_Update": "5/9/2020 2:32",
  "Lat": 42.0115,
  "Long_": -93.2105,
  "Confirmed": 19244,
  "Deaths": 531
}, {
  "Month": 5,
  "Province_State": "Kansas",
  "Last_Update": "5/9/2020 2:32",
  "Lat": 38.5266,
  "Long_": -96.7265,
  "Confirmed": 9690,
  "Deaths": 215
}, {
  "Month": 5,
  "Province_State": "Kentucky",
  "Last_Update": "5/9/2020 2:32",
  "Lat": 37.6681,
  "Long_": -84.6701,
  "Confirmed": 9704,
  "Deaths": 431
}, {
  "Month": 5,
  "Province_State": "Louisiana",
  "Last_Update": "5/9/2020 2:32",
  "Lat": 31.1695,
  "Long_": -91.8678,
  "Confirmed": 39577,
  "Deaths": 2786
}, {
  "Month": 5,
  "Province_State": "Maine",
  "Last_Update": "5/9/2020 2:32",
  "Lat": 44.6939,
  "Long_": -69.3819,
  "Confirmed": 2282,
  "Deaths": 89
}, {
  "Month": 5,
  "Province_State": "Maryland",
  "Last_Update": "5/9/2020 2:32",
  "Lat": 39.0639,
  "Long_": -76.8021,
  "Confirmed": 52015,
  "Deaths": 2509
}, {
  "Month": 5,
  "Province_State": "Massachusetts",
  "Last_Update": "5/9/2020 2:32",
  "Lat": 42.2302,
  "Long_": -71.5301,
  "Confirmed": 96301,
  "Deaths": 6768
}, {
  "Month": 5,
  "Province_State": "Michigan",
  "Last_Update": "5/9/2020 2:32",
  "Lat": 43.3266,
  "Long_": -84.5361,
  "Confirmed": 56969,
  "Deaths": 5464
}, {
  "Month": 5,
  "Province_State": "Minnesota",
  "Last_Update": "5/9/2020 2:32",
  "Lat": 45.6945,
  "Long_": -93.9002,
  "Confirmed": 24190,
  "Deaths": 1036
}, {
  "Month": 5,
  "Province_State": "Mississippi",
  "Last_Update": "5/9/2020 2:32",
  "Lat": 32.7416,
  "Long_": -89.6787,
  "Confirmed": 15229,
  "Deaths": 723
}, {
  "Month": 5,
  "Province_State": "Missouri",
  "Last_Update": "5/9/2020 2:32",
  "Lat": 38.4561,
  "Long_": -92.2884,
  "Confirmed": 13293,
  "Deaths": 774
}, {
  "Month": 5,
  "Province_State": "Montana",
  "Last_Update": "5/9/2020 2:32",
  "Lat": 46.9219,
  "Long_": -110.4544,
  "Confirmed": 505,
  "Deaths": 17
}, {
  "Month": 5,
  "Province_State": "Nebraska",
  "Last_Update": "5/9/2020 2:32",
  "Lat": 41.1254,
  "Long_": -98.2681,
  "Confirmed": 13905,
  "Deaths": 170
}, {
  "Month": 5,
  "Province_State": "Nevada",
  "Last_Update": "5/9/2020 2:32",
  "Lat": 38.3135,
  "Long_": -117.0554,
  "Confirmed": 8517,
  "Deaths": 417
}, {
  "Month": 5,
  "Province_State": "New Hampshire",
  "Last_Update": "5/9/2020 2:32",
  "Lat": 43.4525,
  "Long_": -71.5639,
  "Confirmed": 4492,
  "Deaths": 238
}, {
  "Month": 5,
  "Province_State": "New Jersey",
  "Last_Update": "5/9/2020 2:32",
  "Lat": 40.2989,
  "Long_": -74.521,
  "Confirmed": 159922,
  "Deaths": 11634
}, {
  "Month": 5,
  "Province_State": "New Mexico",
  "Last_Update": "5/9/2020 2:32",
  "Lat": 34.8405,
  "Long_": -106.2485,
  "Confirmed": 7624,
  "Deaths": 351
}, {
  "Month": 5,
  "Province_State": "New York",
  "Last_Update": "5/9/2020 2:32",
  "Lat": 42.1657,
  "Long_": -74.9481,
  "Confirmed": 369660,
  "Deaths": 29710
}, {
  "Month": 5,
  "Province_State": "North Carolina",
  "Last_Update": "5/9/2020 2:32",
  "Lat": 35.6301,
  "Long_": -79.8064,
  "Confirmed": 27794,
  "Deaths": 929
}, {
  "Month": 5,
  "Province_State": "North Dakota",
  "Last_Update": "5/9/2020 2:32",
  "Lat": 47.5289,
  "Long_": -99.784,
  "Confirmed": 2554,
  "Deaths": 60
}, {
  "Month": 5,
  "Province_State": "Northern Mariana Islands",
  "Last_Update": "5/9/2020 2:32",
  "Lat": 15.0979,
  "Long_": 145.6739,
  "Confirmed": 22,
  "Deaths": 2
}, {
  "Month": 5,
  "Province_State": "Ohio",
  "Last_Update": "5/9/2020 2:32",
  "Lat": 40.3888,
  "Long_": -82.7649,
  "Confirmed": 35033,
  "Deaths": 2344
}, {
  "Month": 5,
  "Province_State": "Oklahoma",
  "Last_Update": "5/9/2020 2:32",
  "Lat": 35.5653,
  "Long_": -96.9289,
  "Confirmed": 6418,
  "Deaths": 334
}, {
  "Month": 5,
  "Province_State": "Oregon",
  "Last_Update": "5/9/2020 2:32",
  "Lat": 44.572,
  "Long_": -122.0709,
  "Confirmed": 4185,
  "Deaths": 153
}, {
  "Month": 5,
  "Province_State": "Pennsylvania",
  "Last_Update": "5/9/2020 2:32",
  "Lat": 40.5908,
  "Long_": -77.2098,
  "Confirmed": 75697,
  "Deaths": 5537
}, {
  "Month": 5,
  "Province_State": "Puerto Rico",
  "Last_Update": "5/9/2020 2:32",
  "Lat": 18.2208,
  "Long_": -66.5901,
  "Confirmed": 3718,
  "Deaths": 133
}, {
  "Month": 5,
  "Province_State": "Rhode Island",
  "Last_Update": "5/9/2020 2:32",
  "Lat": 41.6809,
  "Long_": -71.5118,
  "Confirmed": 14819,
  "Deaths": 711
}, {
  "Month": 5,
  "Province_State": "South Carolina",
  "Last_Update": "5/9/2020 2:32",
  "Lat": 33.8569,
  "Long_": -80.945,
  "Confirmed": 11394,
  "Deaths": 487
}, {
  "Month": 5,
  "Province_State": "South Dakota",
  "Last_Update": "5/9/2020 2:32",
  "Lat": 44.2998,
  "Long_": -99.4388,
  "Confirmed": 4960,
  "Deaths": 62
}, {
  "Month": 5,
  "Province_State": "Tennessee",
  "Last_Update": "5/9/2020 2:32",
  "Lat": 35.7478,
  "Long_": -86.6923,
  "Confirmed": 22566,
  "Deaths": 364
}, {
  "Month": 5,
  "Province_State": "Texas",
  "Last_Update": "5/9/2020 2:32",
  "Lat": 31.0545,
  "Long_": -97.5635,
  "Confirmed": 63045,
  "Deaths": 1736
}, {
  "Month": 5,
  "Province_State": "Utah",
  "Last_Update": "5/9/2020 2:32",
  "Lat": 40.15,
  "Long_": -111.8624,
  "Confirmed": 9533,
  "Deaths": 112
}, {
  "Month": 5,
  "Province_State": "Vermont",
  "Last_Update": "5/9/2020 2:32",
  "Lat": 44.0459,
  "Long_": -72.7107,
  "Confirmed": 977,
  "Deaths": 55
}, {
  "Month": 5,
  "Province_State": "Virgin Islands",
  "Last_Update": "5/9/2020 2:32",
  "Lat": 18.3358,
  "Long_": -64.8963,
  "Confirmed": 69,
  "Deaths": 6
}, {
  "Month": 5,
  "Province_State": "Virginia",
  "Last_Update": "5/9/2020 2:32",
  "Lat": 37.7693,
  "Long_": -78.17,
  "Confirmed": 43611,
  "Deaths": 1370
}, {
  "Month": 5,
  "Province_State": "Washington",
  "Last_Update": "5/9/2020 2:32",
  "Lat": 47.4009,
  "Long_": -121.4905,
  "Confirmed": 21349,
  "Deaths": 1117
}, {
  "Month": 5,
  "Province_State": "West Virginia",
  "Last_Update": "5/9/2020 2:32",
  "Lat": 38.4912,
  "Long_": -80.9545,
  "Confirmed": 1989,
  "Deaths": 75
}, {
  "Month": 5,
  "Province_State": "Wisconsin",
  "Last_Update": "5/9/2020 2:32",
  "Lat": 44.2685,
  "Long_": -89.6165,
  "Confirmed": 18230,
  "Deaths": 588
}, {
  "Month": 5,
  "Province_State": "Wyoming",
  "Last_Update": "5/9/2020 2:32",
  "Lat": 42.756,
  "Long_": -107.3025,
  "Confirmed": 898,
  "Deaths": 16
}, {
  "Month": 6,
  "Province_State": "Alabama",
  "Last_Update": "6/9/2020 3:33",
  "Lat": 32.3182,
  "Long_": -86.9023,
  "Confirmed": 37589,
  "Deaths": 929
}, {
  "Month": 6,
  "Province_State": "Alaska",
  "Last_Update": "6/9/2020 3:33",
  "Lat": 61.3707,
  "Long_": -152.4044,
  "Confirmed": 901,
  "Deaths": 14
}, {
  "Month": 6,
  "Province_State": "American Samoa",
  "Last_Update": "6/9/2020 3:33",
  "Lat": -14.271,
  "Long_": -170.132,
  "Confirmed": 0,
  "Deaths": 0
}, {
  "Month": 6,
  "Province_State": "Arizona",
  "Last_Update": "6/9/2020 3:33",
  "Lat": 33.7298,
  "Long_": -111.4312,
  "Confirmed": 74545,
  "Deaths": 1598
}, {
  "Month": 6,
  "Province_State": "Arkansas",
  "Last_Update": "6/9/2020 3:33",
  "Lat": 34.9697,
  "Long_": -92.3731,
  "Confirmed": 20257,
  "Deaths": 265
}, {
  "Month": 6,
  "Province_State": "California",
  "Last_Update": "6/9/2020 3:33",
  "Lat": 36.1162,
  "Long_": -119.6816,
  "Confirmed": 231578,
  "Deaths": 5983
}, {
  "Month": 6,
  "Province_State": "Colorado",
  "Last_Update": "6/9/2020 3:33",
  "Lat": 39.0598,
  "Long_": -105.3111,
  "Confirmed": 32511,
  "Deaths": 1681
}, {
  "Month": 6,
  "Province_State": "Connecticut",
  "Last_Update": "6/9/2020 3:33",
  "Lat": 41.5978,
  "Long_": -72.7554,
  "Confirmed": 46362,
  "Deaths": 4320
}, {
  "Month": 6,
  "Province_State": "Delaware",
  "Last_Update": "6/9/2020 3:33",
  "Lat": 39.3185,
  "Long_": -75.5071,
  "Confirmed": 11376,
  "Deaths": 565
}, {
  "Month": 6,
  "Province_State": "District of Columbia",
  "Last_Update": "6/9/2020 3:33",
  "Lat": 38.8974,
  "Long_": -77.0268,
  "Confirmed": 10292,
  "Deaths": 551
}, {
  "Month": 6,
  "Province_State": "Florida",
  "Last_Update": "6/9/2020 3:33",
  "Lat": 27.7663,
  "Long_": -81.6868,
  "Confirmed": 146341,
  "Deaths": 3447
}, {
  "Month": 6,
  "Province_State": "Georgia",
  "Last_Update": "6/9/2020 3:33",
  "Lat": 33.0406,
  "Long_": -83.6431,
  "Confirmed": 79417,
  "Deaths": 2784
}, {
  "Month": 6,
  "Province_State": "Guam",
  "Last_Update": "6/9/2020 3:33",
  "Lat": 13.4443,
  "Long_": 144.7937,
  "Confirmed": 253,
  "Deaths": 5
}, {
  "Month": 6,
  "Province_State": "Hawaii",
  "Last_Update": "6/9/2020 3:33",
  "Lat": 21.0943,
  "Long_": -157.4983,
  "Confirmed": 900,
  "Deaths": 18
}, {
  "Month": 6,
  "Province_State": "Idaho",
  "Last_Update": "6/9/2020 3:33",
  "Lat": 44.2405,
  "Long_": -114.4788,
  "Confirmed": 5752,
  "Deaths": 91
}, {
  "Month": 6,
  "Province_State": "Illinois",
  "Last_Update": "6/9/2020 3:33",
  "Lat": 40.3495,
  "Long_": -88.9861,
  "Confirmed": 142461,
  "Deaths": 6902
}, {
  "Month": 6,
  "Province_State": "Indiana",
  "Last_Update": "6/9/2020 3:33",
  "Lat": 39.8494,
  "Long_": -86.2583,
  "Confirmed": 45228,
  "Deaths": 2559
}, {
  "Month": 6,
  "Province_State": "Iowa",
  "Last_Update": "6/9/2020 3:33",
  "Lat": 42.0115,
  "Long_": -93.2105,
  "Confirmed": 28845,
  "Deaths": 711
}, {
  "Month": 6,
  "Province_State": "Kansas",
  "Last_Update": "6/9/2020 3:33",
  "Lat": 38.5266,
  "Long_": -96.7265,
  "Confirmed": 14209,
  "Deaths": 273
}, {
  "Month": 6,
  "Province_State": "Kentucky",
  "Last_Update": "6/9/2020 3:33",
  "Lat": 37.6681,
  "Long_": -84.6701,
  "Confirmed": 15347,
  "Deaths": 560
}, {
  "Month": 6,
  "Province_State": "Louisiana",
  "Last_Update": "6/9/2020 3:33",
  "Lat": 31.1695,
  "Long_": -91.8678,
  "Confirmed": 57081,
  "Deaths": 3199
}, {
  "Month": 6,
  "Province_State": "Maine",
  "Last_Update": "6/9/2020 3:33",
  "Lat": 44.6939,
  "Long_": -69.3819,
  "Confirmed": 3219,
  "Deaths": 105
}, {
  "Month": 6,
  "Province_State": "Maryland",
  "Last_Update": "6/9/2020 3:33",
  "Lat": 39.0639,
  "Long_": -76.8021,
  "Confirmed": 67254,
  "Deaths": 3175
}, {
  "Month": 6,
  "Province_State": "Massachusetts",
  "Last_Update": "6/9/2020 3:33",
  "Lat": 42.2302,
  "Long_": -71.5301,
  "Confirmed": 108768,
  "Deaths": 8094
}, {
  "Month": 6,
  "Province_State": "Michigan",
  "Last_Update": "6/9/2020 3:33",
  "Lat": 43.3266,
  "Long_": -84.5361,
  "Confirmed": 70223,
  "Deaths": 6161
}, {
  "Month": 6,
  "Province_State": "Minnesota",
  "Last_Update": "6/9/2020 3:33",
  "Lat": 45.6945,
  "Long_": -93.9002,
  "Confirmed": 35861,
  "Deaths": 1470
}, {
  "Month": 6,
  "Province_State": "Mississippi",
  "Last_Update": "6/9/2020 3:33",
  "Lat": 32.7416,
  "Long_": -89.6787,
  "Confirmed": 26567,
  "Deaths": 1059
}, {
  "Month": 6,
  "Province_State": "Missouri",
  "Last_Update": "6/9/2020 3:33",
  "Lat": 38.4561,
  "Long_": -92.2884,
  "Confirmed": 21118,
  "Deaths": 1004
}, {
  "Month": 6,
  "Province_State": "Montana",
  "Last_Update": "6/9/2020 3:33",
  "Lat": 46.9219,
  "Long_": -110.4544,
  "Confirmed": 919,
  "Deaths": 22
}, {
  "Month": 6,
  "Province_State": "Nebraska",
  "Last_Update": "6/9/2020 3:33",
  "Lat": 41.1254,
  "Long_": -98.2681,
  "Confirmed": 19042,
  "Deaths": 269
}, {
  "Month": 6,
  "Province_State": "Nevada",
  "Last_Update": "6/9/2020 3:33",
  "Lat": 38.3135,
  "Long_": -117.0554,
  "Confirmed": 17894,
  "Deaths": 504
}, {
  "Month": 6,
  "Province_State": "New Hampshire",
  "Last_Update": "6/9/2020 3:33",
  "Lat": 43.4525,
  "Long_": -71.5639,
  "Confirmed": 5760,
  "Deaths": 367
}, {
  "Month": 6,
  "Province_State": "New Jersey",
  "Last_Update": "6/9/2020 3:33",
  "Lat": 40.2989,
  "Long_": -74.521,
  "Confirmed": 172199,
  "Deaths": 14992
}, {
  "Month": 6,
  "Province_State": "New Mexico",
  "Last_Update": "6/9/2020 3:33",
  "Lat": 34.8405,
  "Long_": -106.2485,
  "Confirmed": 11982,
  "Deaths": 493
}, {
  "Month": 6,
  "Province_State": "New York",
  "Last_Update": "6/9/2020 3:33",
  "Lat": 42.1657,
  "Long_": -74.9481,
  "Confirmed": 393403,
  "Deaths": 31403
}, {
  "Month": 6,
  "Province_State": "North Carolina",
  "Last_Update": "6/9/2020 3:33",
  "Lat": 35.6301,
  "Long_": -79.8064,
  "Confirmed": 63736,
  "Deaths": 1357
}, {
  "Month": 6,
  "Province_State": "North Dakota",
  "Last_Update": "6/9/2020 3:33",
  "Lat": 47.5289,
  "Long_": -99.784,
  "Confirmed": 3539,
  "Deaths": 79
}, {
  "Month": 6,
  "Province_State": "Northern Mariana Islands",
  "Last_Update": "6/9/2020 3:33",
  "Lat": 15.0979,
  "Long_": 145.6739,
  "Confirmed": 30,
  "Deaths": 19
}, {
  "Month": 6,
  "Province_State": "Ohio",
  "Last_Update": "6/9/2020 3:33",
  "Lat": 40.3888,
  "Long_": -82.7649,
  "Confirmed": 51046,
  "Deaths": 2926
}, {
  "Month": 6,
  "Province_State": "Oklahoma",
  "Last_Update": "6/9/2020 3:33",
  "Lat": 35.5653,
  "Long_": -96.9289,
  "Confirmed": 13175,
  "Deaths": 385
}, {
  "Month": 6,
  "Province_State": "Oregon",
  "Last_Update": "6/9/2020 3:33",
  "Lat": 44.572,
  "Long_": -122.0709,
  "Confirmed": 8485,
  "Deaths": 204
}, {
  "Month": 6,
  "Province_State": "Pennsylvania",
  "Last_Update": "6/9/2020 3:33",
  "Lat": 40.5908,
  "Long_": -77.2098,
  "Confirmed": 90467,
  "Deaths": 6614
}, {
  "Month": 6,
  "Province_State": "Puerto Rico",
  "Last_Update": "6/9/2020 3:33",
  "Lat": 18.2208,
  "Long_": -66.5901,
  "Confirmed": 7250,
  "Deaths": 153
}, {
  "Month": 6,
  "Province_State": "Rhode Island",
  "Last_Update": "6/9/2020 3:33",
  "Lat": 41.6809,
  "Long_": -71.5118,
  "Confirmed": 16764,
  "Deaths": 946
}, {
  "Month": 6,
  "Province_State": "South Carolina",
  "Last_Update": "6/9/2020 3:33",
  "Lat": 33.8569,
  "Long_": -80.945,
  "Confirmed": 34644,
  "Deaths": 720
}, {
  "Month": 6,
  "Province_State": "South Dakota",
  "Last_Update": "6/9/2020 3:33",
  "Lat": 44.2998,
  "Long_": -99.4388,
  "Confirmed": 6716,
  "Deaths": 91
}, {
  "Month": 6,
  "Province_State": "Tennessee",
  "Last_Update": "6/9/2020 3:33",
  "Lat": 35.7478,
  "Long_": -86.6923,
  "Confirmed": 42297,
  "Deaths": 592
}, {
  "Month": 6,
  "Province_State": "Texas",
  "Last_Update": "6/9/2020 3:33",
  "Lat": 31.0545,
  "Long_": -97.5635,
  "Confirmed": 157434,
  "Deaths": 2564
}, {
  "Month": 6,
  "Province_State": "Utah",
  "Last_Update": "6/9/2020 3:33",
  "Lat": 40.15,
  "Long_": -111.8624,
  "Confirmed": 21664,
  "Deaths": 168
}, {
  "Month": 6,
  "Province_State": "Vermont",
  "Last_Update": "6/9/2020 3:33",
  "Lat": 44.0459,
  "Long_": -72.7107,
  "Confirmed": 1208,
  "Deaths": 56
}, {
  "Month": 6,
  "Province_State": "Virgin Islands",
  "Last_Update": "6/9/2020 3:33",
  "Lat": 18.3358,
  "Long_": -64.8963,
  "Confirmed": 81,
  "Deaths": 6
}, {
  "Month": 6,
  "Province_State": "Virginia",
  "Last_Update": "6/9/2020 3:33",
  "Lat": 37.7693,
  "Long_": -78.17,
  "Confirmed": 62189,
  "Deaths": 1740
}, {
  "Month": 6,
  "Province_State": "Washington",
  "Last_Update": "6/9/2020 3:33",
  "Lat": 47.4009,
  "Long_": -121.4905,
  "Confirmed": 32831,
  "Deaths": 1297
}, {
  "Month": 6,
  "Province_State": "West Virginia",
  "Last_Update": "6/9/2020 3:33",
  "Lat": 38.4912,
  "Long_": -80.9545,
  "Confirmed": 2870,
  "Deaths": 93
}, {
  "Month": 6,
  "Province_State": "Wisconsin",
  "Last_Update": "6/9/2020 3:33",
  "Lat": 44.2685,
  "Long_": -89.6165,
  "Confirmed": 28058,
  "Deaths": 777
}, {
  "Month": 6,
  "Province_State": "Wyoming",
  "Last_Update": "6/9/2020 3:33",
  "Lat": 42.756,
  "Long_": -107.3025,
  "Confirmed": 1450,
  "Deaths": 20
}, {
  "Month": 7,
  "Province_State": "Alabama",
  "Last_Update": "7/9/2020 4:34",
  "Lat": 32.3182,
  "Long_": -86.9023,
  "Confirmed": 86664,
  "Deaths": 1565
}, {
  "Month": 7,
  "Province_State": "Alaska",
  "Last_Update": "7/9/2020 4:34",
  "Lat": 61.3707,
  "Long_": -152.4044,
  "Confirmed": 2879,
  "Deaths": 23
}, {
  "Month": 7,
  "Province_State": "American Samoa",
  "Last_Update": "7/9/2020 4:34",
  "Lat": -14.271,
  "Long_": -170.132,
  "Confirmed": 0,
  "Deaths": 0
}, {
  "Month": 7,
  "Province_State": "Arizona",
  "Last_Update": "7/9/2020 4:34",
  "Lat": 33.7298,
  "Long_": -111.4312,
  "Confirmed": 170798,
  "Deaths": 3626
}, {
  "Month": 7,
  "Province_State": "Arkansas",
  "Last_Update": "7/9/2020 4:34",
  "Lat": 34.9697,
  "Long_": -92.3731,
  "Confirmed": 41759,
  "Deaths": 442
}, {
  "Month": 7,
  "Province_State": "California",
  "Last_Update": "7/9/2020 4:34",
  "Lat": 36.1162,
  "Long_": -119.6816,
  "Confirmed": 499519,
  "Deaths": 9026
}, {
  "Month": 7,
  "Province_State": "Colorado",
  "Last_Update": "7/9/2020 4:34",
  "Lat": 39.0598,
  "Long_": -105.3111,
  "Confirmed": 46204,
  "Deaths": 1822
}, {
  "Month": 7,
  "Province_State": "Connecticut",
  "Last_Update": "7/9/2020 4:34",
  "Lat": 41.5978,
  "Long_": -72.7554,
  "Confirmed": 49670,
  "Deaths": 4431
}, {
  "Month": 7,
  "Province_State": "Delaware",
  "Last_Update": "7/9/2020 4:34",
  "Lat": 39.3185,
  "Long_": -75.5071,
  "Confirmed": 14689,
  "Deaths": 597
}, {
  "Month": 7,
  "Province_State": "District of Columbia",
  "Last_Update": "7/9/2020 4:34",
  "Lat": 38.8974,
  "Long_": -77.0268,
  "Confirmed": 12057,
  "Deaths": 584
}, {
  "Month": 7,
  "Province_State": "Florida",
  "Last_Update": "7/9/2020 4:34",
  "Lat": 27.7663,
  "Long_": -81.6868,
  "Confirmed": 461379,
  "Deaths": 6586
}, {
  "Month": 7,
  "Province_State": "Georgia",
  "Last_Update": "7/9/2020 4:34",
  "Lat": 33.0406,
  "Long_": -83.6431,
  "Confirmed": 182286,
  "Deaths": 3671
}, {
  "Month": 7,
  "Province_State": "Guam",
  "Last_Update": "7/9/2020 4:34",
  "Lat": 13.4443,
  "Long_": 144.7937,
  "Confirmed": 356,
  "Deaths": 5
}, {
  "Month": 7,
  "Province_State": "Hawaii",
  "Last_Update": "7/9/2020 4:34",
  "Lat": 21.0943,
  "Long_": -157.4983,
  "Confirmed": 1989,
  "Deaths": 26
}, {
  "Month": 7,
  "Province_State": "Idaho",
  "Last_Update": "7/9/2020 4:34",
  "Lat": 44.2405,
  "Long_": -114.4788,
  "Confirmed": 20242,
  "Deaths": 177
}, {
  "Month": 7,
  "Province_State": "Illinois",
  "Last_Update": "7/9/2020 4:34",
  "Lat": 40.3495,
  "Long_": -88.9861,
  "Confirmed": 178135,
  "Deaths": 7670
}, {
  "Month": 7,
  "Province_State": "Indiana",
  "Last_Update": "7/9/2020 4:34",
  "Lat": 39.8494,
  "Long_": -86.2583,
  "Confirmed": 65253,
  "Deaths": 2875
}, {
  "Month": 7,
  "Province_State": "Iowa",
  "Last_Update": "7/9/2020 4:34",
  "Lat": 42.0115,
  "Long_": -93.2105,
  "Confirmed": 44285,
  "Deaths": 865
}, {
  "Month": 7,
  "Province_State": "Kansas",
  "Last_Update": "7/9/2020 4:34",
  "Lat": 38.5266,
  "Long_": -96.7265,
  "Confirmed": 26881,
  "Deaths": 357
}, {
  "Month": 7,
  "Province_State": "Kentucky",
  "Last_Update": "7/9/2020 4:34",
  "Lat": 37.6681,
  "Long_": -84.6701,
  "Confirmed": 29386,
  "Deaths": 731
}, {
  "Month": 7,
  "Province_State": "Louisiana",
  "Last_Update": "7/9/2020 4:34",
  "Lat": 31.1695,
  "Long_": -91.8678,
  "Confirmed": 114481,
  "Deaths": 3925
}, {
  "Month": 7,
  "Province_State": "Maine",
  "Last_Update": "7/9/2020 4:34",
  "Lat": 44.6939,
  "Long_": -69.3819,
  "Confirmed": 3888,
  "Deaths": 122
}, {
  "Month": 7,
  "Province_State": "Maryland",
  "Last_Update": "7/9/2020 4:34",
  "Lat": 39.0639,
  "Long_": -76.8021,
  "Confirmed": 87177,
  "Deaths": 3488
}, {
  "Month": 7,
  "Province_State": "Massachusetts",
  "Last_Update": "7/9/2020 4:34",
  "Lat": 42.2302,
  "Long_": -71.5301,
  "Confirmed": 117098,
  "Deaths": 8580
}, {
  "Month": 7,
  "Province_State": "Michigan",
  "Last_Update": "7/9/2020 4:34",
  "Lat": 43.3266,
  "Long_": -84.5361,
  "Confirmed": 89781,
  "Deaths": 6443
}, {
  "Month": 7,
  "Province_State": "Minnesota",
  "Last_Update": "7/9/2020 4:34",
  "Lat": 45.6945,
  "Long_": -93.9002,
  "Confirmed": 53692,
  "Deaths": 1634
}, {
  "Month": 7,
  "Province_State": "Mississippi",
  "Last_Update": "7/9/2020 4:34",
  "Lat": 32.7416,
  "Long_": -89.6787,
  "Confirmed": 57579,
  "Deaths": 1611
}, {
  "Month": 7,
  "Province_State": "Missouri",
  "Last_Update": "7/9/2020 4:34",
  "Lat": 38.4561,
  "Long_": -92.2884,
  "Confirmed": 49638,
  "Deaths": 1255
}, {
  "Month": 7,
  "Province_State": "Montana",
  "Last_Update": "7/9/2020 4:34",
  "Lat": 46.9219,
  "Long_": -110.4544,
  "Confirmed": 3814,
  "Deaths": 55
}, {
  "Month": 7,
  "Province_State": "Nebraska",
  "Last_Update": "7/9/2020 4:34",
  "Lat": 41.1254,
  "Long_": -98.2681,
  "Confirmed": 25766,
  "Deaths": 328
}, {
  "Month": 7,
  "Province_State": "Nevada",
  "Last_Update": "7/9/2020 4:34",
  "Lat": 38.3135,
  "Long_": -117.0554,
  "Confirmed": 46824,
  "Deaths": 801
}, {
  "Month": 7,
  "Province_State": "New Hampshire",
  "Last_Update": "7/9/2020 4:34",
  "Lat": 43.4525,
  "Long_": -71.5639,
  "Confirmed": 6544,
  "Deaths": 415
}, {
  "Month": 7,
  "Province_State": "New Jersey",
  "Last_Update": "7/9/2020 4:34",
  "Lat": 40.2989,
  "Long_": -74.521,
  "Confirmed": 183205,
  "Deaths": 15825
}, {
  "Month": 7,
  "Province_State": "New Mexico",
  "Last_Update": "7/9/2020 4:34",
  "Lat": 34.8405,
  "Long_": -106.2485,
  "Confirmed": 20388,
  "Deaths": 635
}, {
  "Month": 7,
  "Province_State": "New York",
  "Last_Update": "7/9/2020 4:34",
  "Lat": 42.1657,
  "Long_": -74.9481,
  "Confirmed": 414370,
  "Deaths": 32683
}, {
  "Month": 7,
  "Province_State": "North Carolina",
  "Last_Update": "7/9/2020 4:34",
  "Lat": 35.6301,
  "Long_": -79.8064,
  "Confirmed": 120532,
  "Deaths": 1922
}, {
  "Month": 7,
  "Province_State": "North Dakota",
  "Last_Update": "7/9/2020 4:34",
  "Lat": 47.5289,
  "Long_": -99.784,
  "Confirmed": 6301,
  "Deaths": 103
}, {
  "Month": 7,
  "Province_State": "Northern Mariana Islands",
  "Last_Update": "7/9/2020 4:34",
  "Lat": 15.0979,
  "Long_": 145.6739,
  "Confirmed": 42,
  "Deaths": 2
}, {
  "Month": 7,
  "Province_State": "Ohio",
  "Last_Update": "7/9/2020 4:34",
  "Lat": 40.3888,
  "Long_": -82.7649,
  "Confirmed": 89626,
  "Deaths": 3595
}, {
  "Month": 7,
  "Province_State": "Oklahoma",
  "Last_Update": "7/9/2020 4:34",
  "Lat": 35.5653,
  "Long_": -96.9289,
  "Confirmed": 35740,
  "Deaths": 536
}, {
  "Month": 7,
  "Province_State": "Oregon",
  "Last_Update": "7/9/2020 4:34",
  "Lat": 44.572,
  "Long_": -122.0709,
  "Confirmed": 18131,
  "Deaths": 316
}, {
  "Month": 7,
  "Province_State": "Pennsylvania",
  "Last_Update": "7/9/2020 4:34",
  "Lat": 40.5908,
  "Long_": -77.2098,
  "Confirmed": 115807,
  "Deaths": 7194
}, {
  "Month": 7,
  "Province_State": "Puerto Rico",
  "Last_Update": "7/9/2020 4:34",
  "Lat": 18.2208,
  "Long_": -66.5901,
  "Confirmed": 16572,
  "Deaths": 214
}, {
  "Month": 7,
  "Province_State": "Rhode Island",
  "Last_Update": "7/9/2020 4:34",
  "Lat": 41.6809,
  "Long_": -71.5118,
  "Confirmed": 18950,
  "Deaths": 1007
}, {
  "Month": 7,
  "Province_State": "South Carolina",
  "Last_Update": "7/9/2020 4:34",
  "Lat": 33.8569,
  "Long_": -80.945,
  "Confirmed": 87572,
  "Deaths": 1667
}, {
  "Month": 7,
  "Province_State": "South Dakota",
  "Last_Update": "7/9/2020 4:34",
  "Lat": 44.2998,
  "Long_": -99.4388,
  "Confirmed": 8685,
  "Deaths": 129
}, {
  "Month": 7,
  "Province_State": "Tennessee",
  "Last_Update": "7/9/2020 4:34",
  "Lat": 35.7478,
  "Long_": -86.6923,
  "Confirmed": 102871,
  "Deaths": 1033
}, {
  "Month": 7,
  "Province_State": "Texas",
  "Last_Update": "7/9/2020 4:34",
  "Lat": 31.0545,
  "Long_": -97.5635,
  "Confirmed": 429579,
  "Deaths": 6839
}, {
  "Month": 7,
  "Province_State": "Utah",
  "Last_Update": "7/9/2020 4:34",
  "Lat": 40.15,
  "Long_": -111.8624,
  "Confirmed": 39696,
  "Deaths": 300
}, {
  "Month": 7,
  "Province_State": "Vermont",
  "Last_Update": "7/9/2020 4:34",
  "Lat": 44.0459,
  "Long_": -72.7107,
  "Confirmed": 1407,
  "Deaths": 57
}, {
  "Month": 7,
  "Province_State": "Virgin Islands",
  "Last_Update": "7/9/2020 4:34",
  "Lat": 18.3358,
  "Long_": -64.8963,
  "Confirmed": 385,
  "Deaths": 8
}, {
  "Month": 7,
  "Province_State": "Virginia",
  "Last_Update": "7/9/2020 4:34",
  "Lat": 37.7693,
  "Long_": -78.17,
  "Confirmed": 88904,
  "Deaths": 2141
}, {
  "Month": 7,
  "Province_State": "Washington",
  "Last_Update": "7/9/2020 4:34",
  "Lat": 47.4009,
  "Long_": -121.4905,
  "Confirmed": 56736,
  "Deaths": 1588
}, {
  "Month": 7,
  "Province_State": "West Virginia",
  "Last_Update": "7/9/2020 4:34",
  "Lat": 38.4912,
  "Long_": -80.9545,
  "Confirmed": 6375,
  "Deaths": 112
}, {
  "Month": 7,
  "Province_State": "Wisconsin",
  "Last_Update": "7/9/2020 4:34",
  "Lat": 44.2685,
  "Long_": -89.6165,
  "Confirmed": 52108,
  "Deaths": 919
}, {
  "Month": 7,
  "Province_State": "Wyoming",
  "Last_Update": "7/9/2020 4:34",
  "Lat": 42.756,
  "Long_": -107.3025,
  "Confirmed": 2686,
  "Deaths": 26
}, {
  "Month": 8,
  "Province_State": "Alabama",
  "Last_Update": "8/9/2020 4:35",
  "Lat": 32.3182,
  "Long_": -86.9023,
  "Confirmed": 124944,
  "Deaths": 2162
}, {
  "Month": 8,
  "Province_State": "Alaska",
  "Last_Update": "8/9/2020 4:35",
  "Lat": 61.3707,
  "Long_": -152.4044,
  "Confirmed": 5226,
  "Deaths": 37
}, {
  "Month": 8,
  "Province_State": "American Samoa",
  "Last_Update": "8/9/2020 4:35",
  "Lat": -14.271,
  "Long_": -170.132,
  "Confirmed": 0,
  "Deaths": 0
}, {
  "Month": 8,
  "Province_State": "Arizona",
  "Last_Update": "8/9/2020 4:35",
  "Lat": 33.7298,
  "Long_": -111.4312,
  "Confirmed": 201661,
  "Deaths": 5030
}, {
  "Month": 8,
  "Province_State": "Arkansas",
  "Last_Update": "8/9/2020 4:35",
  "Lat": 34.9697,
  "Long_": -92.3731,
  "Confirmed": 60856,
  "Deaths": 784
}, {
  "Month": 8,
  "Province_State": "California",
  "Last_Update": "8/9/2020 4:35",
  "Lat": 36.1162,
  "Long_": -119.6816,
  "Confirmed": 707908,
  "Deaths": 12937
}, {
  "Month": 8,
  "Province_State": "Colorado",
  "Last_Update": "8/9/2020 4:35",
  "Lat": 39.0598,
  "Long_": -105.3111,
  "Confirmed": 57223,
  "Deaths": 1942
}, {
  "Month": 8,
  "Province_State": "Connecticut",
  "Last_Update": "8/9/2020 4:35",
  "Lat": 41.5978,
  "Long_": -72.7554,
  "Confirmed": 52495,
  "Deaths": 4465
}, {
  "Month": 8,
  "Province_State": "Delaware",
  "Last_Update": "8/9/2020 4:35",
  "Lat": 39.3185,
  "Long_": -75.5071,
  "Confirmed": 17349,
  "Deaths": 615
}, {
  "Month": 8,
  "Province_State": "District of Columbia",
  "Last_Update": "8/9/2020 4:35",
  "Lat": 38.8974,
  "Long_": -77.0268,
  "Confirmed": 13959,
  "Deaths": 606
}, {
  "Month": 8,
  "Province_State": "Florida",
  "Last_Update": "8/9/2020 4:35",
  "Lat": 27.7663,
  "Long_": -81.6868,
  "Confirmed": 621586,
  "Deaths": 11119
}, {
  "Month": 8,
  "Province_State": "Georgia",
  "Last_Update": "8/9/2020 4:35",
  "Lat": 33.0406,
  "Long_": -83.6431,
  "Confirmed": 268973,
  "Deaths": 5604
}, {
  "Month": 8,
  "Province_State": "Guam",
  "Last_Update": "8/9/2020 4:35",
  "Lat": 13.4443,
  "Long_": 144.7937,
  "Confirmed": 1287,
  "Deaths": 10
}, {
  "Month": 8,
  "Province_State": "Hawaii",
  "Last_Update": "8/9/2020 4:35",
  "Lat": 21.0943,
  "Long_": -157.4983,
  "Confirmed": 8339,
  "Deaths": 63
}, {
  "Month": 8,
  "Province_State": "Idaho",
  "Last_Update": "8/9/2020 4:35",
  "Lat": 44.2405,
  "Long_": -114.4788,
  "Confirmed": 31858,
  "Deaths": 359
}, {
  "Month": 8,
  "Province_State": "Illinois",
  "Last_Update": "8/9/2020 4:35",
  "Lat": 40.3495,
  "Long_": -88.9861,
  "Confirmed": 235058,
  "Deaths": 8228
}, {
  "Month": 8,
  "Province_State": "Indiana",
  "Last_Update": "8/9/2020 4:35",
  "Lat": 39.8494,
  "Long_": -86.2583,
  "Confirmed": 93313,
  "Deaths": 3250
}, {
  "Month": 8,
  "Province_State": "Iowa",
  "Last_Update": "8/9/2020 4:35",
  "Lat": 42.0115,
  "Long_": -93.2105,
  "Confirmed": 64599,
  "Deaths": 1113
}, {
  "Month": 8,
  "Province_State": "Kansas",
  "Last_Update": "8/9/2020 4:35",
  "Lat": 38.5266,
  "Long_": -96.7265,
  "Confirmed": 41736,
  "Deaths": 449
}, {
  "Month": 8,
  "Province_State": "Kentucky",
  "Last_Update": "8/9/2020 4:35",
  "Lat": 37.6681,
  "Long_": -84.6701,
  "Confirmed": 48031,
  "Deaths": 929
}, {
  "Month": 8,
  "Province_State": "Louisiana",
  "Last_Update": "8/9/2020 4:35",
  "Lat": 31.1695,
  "Long_": -91.8678,
  "Confirmed": 147867,
  "Deaths": 4931
}, {
  "Month": 8,
  "Province_State": "Maine",
  "Last_Update": "8/9/2020 4:35",
  "Lat": 44.6939,
  "Long_": -69.3819,
  "Confirmed": 4514,
  "Deaths": 132
}, {
  "Month": 8,
  "Province_State": "Maryland",
  "Last_Update": "8/9/2020 4:35",
  "Lat": 39.0639,
  "Long_": -76.8021,
  "Confirmed": 107791,
  "Deaths": 3752
}, {
  "Month": 8,
  "Province_State": "Massachusetts",
  "Last_Update": "8/9/2020 4:35",
  "Lat": 42.2302,
  "Long_": -71.5301,
  "Confirmed": 128229,
  "Deaths": 9049
}, {
  "Month": 8,
  "Province_State": "Michigan",
  "Last_Update": "8/9/2020 4:35",
  "Lat": 43.3266,
  "Long_": -84.5361,
  "Confirmed": 112526,
  "Deaths": 6748
}, {
  "Month": 8,
  "Province_State": "Minnesota",
  "Last_Update": "8/9/2020 4:35",
  "Lat": 45.6945,
  "Long_": -93.9002,
  "Confirmed": 75189,
  "Deaths": 1865
}, {
  "Month": 8,
  "Province_State": "Mississippi",
  "Last_Update": "8/9/2020 4:35",
  "Lat": 32.7416,
  "Long_": -89.6787,
  "Confirmed": 82676,
  "Deaths": 2441
}, {
  "Month": 8,
  "Province_State": "Missouri",
  "Last_Update": "8/9/2020 4:35",
  "Lat": 38.4561,
  "Long_": -92.2884,
  "Confirmed": 84706,
  "Deaths": 1533
}, {
  "Month": 8,
  "Province_State": "Montana",
  "Last_Update": "8/9/2020 4:35",
  "Lat": 46.9219,
  "Long_": -110.4544,
  "Confirmed": 7340,
  "Deaths": 104
}, {
  "Month": 8,
  "Province_State": "Nebraska",
  "Last_Update": "8/9/2020 4:35",
  "Lat": 41.1254,
  "Long_": -98.2681,
  "Confirmed": 34046,
  "Deaths": 392
}, {
  "Month": 8,
  "Province_State": "Nevada",
  "Last_Update": "8/9/2020 4:35",
  "Lat": 38.3135,
  "Long_": -117.0554,
  "Confirmed": 68908,
  "Deaths": 1302
}, {
  "Month": 8,
  "Province_State": "New Hampshire",
  "Last_Update": "8/9/2020 4:35",
  "Lat": 43.4525,
  "Long_": -71.5639,
  "Confirmed": 7254,
  "Deaths": 432
}, {
  "Month": 8,
  "Province_State": "New Jersey",
  "Last_Update": "8/9/2020 4:35",
  "Lat": 40.2989,
  "Long_": -74.521,
  "Confirmed": 195098,
  "Deaths": 15953
}, {
  "Month": 8,
  "Province_State": "New Mexico",
  "Last_Update": "8/9/2020 4:35",
  "Lat": 34.8405,
  "Long_": -106.2485,
  "Confirmed": 25283,
  "Deaths": 770
}, {
  "Month": 8,
  "Province_State": "New York",
  "Last_Update": "8/9/2020 4:35",
  "Lat": 42.1657,
  "Long_": -74.9481,
  "Confirmed": 434100,
  "Deaths": 32951
}, {
  "Month": 8,
  "Province_State": "North Carolina",
  "Last_Update": "8/9/2020 4:35",
  "Lat": 35.6301,
  "Long_": -79.8064,
  "Confirmed": 166127,
  "Deaths": 2692
}, {
  "Month": 8,
  "Province_State": "North Dakota",
  "Last_Update": "8/9/2020 4:35",
  "Lat": 47.5289,
  "Long_": -99.784,
  "Confirmed": 11702,
  "Deaths": 142
}, {
  "Month": 8,
  "Province_State": "Northern Mariana Islands",
  "Last_Update": "8/9/2020 4:35",
  "Lat": 15.0979,
  "Long_": 145.6739,
  "Confirmed": 56,
  "Deaths": 2
}, {
  "Month": 8,
  "Province_State": "Ohio",
  "Last_Update": "8/9/2020 4:35",
  "Lat": 40.3888,
  "Long_": -82.7649,
  "Confirmed": 122260,
  "Deaths": 4385
}, {
  "Month": 8,
  "Province_State": "Oklahoma",
  "Last_Update": "8/9/2020 4:35",
  "Lat": 35.5653,
  "Long_": -96.9289,
  "Confirmed": 58119,
  "Deaths": 799
}, {
  "Month": 8,
  "Province_State": "Oregon",
  "Last_Update": "8/9/2020 4:35",
  "Lat": 44.572,
  "Long_": -122.0709,
  "Confirmed": 26554,
  "Deaths": 458
}, {
  "Month": 8,
  "Province_State": "Pennsylvania",
  "Last_Update": "8/9/2020 4:35",
  "Lat": 40.5908,
  "Long_": -77.2098,
  "Confirmed": 138134,
  "Deaths": 7658
}, {
  "Month": 8,
  "Province_State": "Puerto Rico",
  "Last_Update": "8/9/2020 4:35",
  "Lat": 18.2208,
  "Long_": -66.5901,
  "Confirmed": 32848,
  "Deaths": 434
}, {
  "Month": 8,
  "Province_State": "Rhode Island",
  "Last_Update": "8/9/2020 4:35",
  "Lat": 41.6809,
  "Long_": -71.5118,
  "Confirmed": 21683,
  "Deaths": 1046
}, {
  "Month": 8,
  "Province_State": "South Carolina",
  "Last_Update": "8/9/2020 4:35",
  "Lat": 33.8569,
  "Long_": -80.945,
  "Confirmed": 118324,
  "Deaths": 2709
}, {
  "Month": 8,
  "Province_State": "South Dakota",
  "Last_Update": "8/9/2020 4:35",
  "Lat": 44.2998,
  "Long_": -99.4388,
  "Confirmed": 13322,
  "Deaths": 167
}, {
  "Month": 8,
  "Province_State": "Tennessee",
  "Last_Update": "8/9/2020 4:35",
  "Lat": 35.7478,
  "Long_": -86.6923,
  "Confirmed": 153115,
  "Deaths": 1747
}, {
  "Month": 8,
  "Province_State": "Texas",
  "Last_Update": "8/9/2020 4:35",
  "Lat": 31.0545,
  "Long_": -97.5635,
  "Confirmed": 632865,
  "Deaths": 13064
}, {
  "Month": 8,
  "Province_State": "Utah",
  "Last_Update": "8/9/2020 4:35",
  "Lat": 40.15,
  "Long_": -111.8624,
  "Confirmed": 51854,
  "Deaths": 407
}, {
  "Month": 8,
  "Province_State": "Vermont",
  "Last_Update": "8/9/2020 4:35",
  "Lat": 44.0459,
  "Long_": -72.7107,
  "Confirmed": 1616,
  "Deaths": 58
}, {
  "Month": 8,
  "Province_State": "Virgin Islands",
  "Last_Update": "8/9/2020 4:35",
  "Lat": 18.3358,
  "Long_": -64.8963,
  "Confirmed": 1129,
  "Deaths": 14
}, {
  "Month": 8,
  "Province_State": "Virginia",
  "Last_Update": "8/9/2020 4:35",
  "Lat": 37.7693,
  "Long_": -78.17,
  "Confirmed": 119747,
  "Deaths": 2569
}, {
  "Month": 8,
  "Province_State": "Washington",
  "Last_Update": "8/9/2020 4:35",
  "Lat": 47.4009,
  "Long_": -121.4905,
  "Confirmed": 75195,
  "Deaths": 1904
}, {
  "Month": 8,
  "Province_State": "West Virginia",
  "Last_Update": "8/9/2020 4:35",
  "Lat": 38.4912,
  "Long_": -80.9545,
  "Confirmed": 10109,
  "Deaths": 215
}, {
  "Month": 8,
  "Province_State": "Wisconsin",
  "Last_Update": "8/9/2020 4:35",
  "Lat": 44.2685,
  "Long_": -89.6165,
  "Confirmed": 75337,
  "Deaths": 1122
}, {
  "Month": 8,
  "Province_State": "Wyoming",
  "Last_Update": "8/9/2020 4:35",
  "Lat": 42.756,
  "Long_": -107.3025,
  "Confirmed": 3829,
  "Deaths": 37
}, {
  "Month": 9,
  "Province_State": "Alabama",
  "Last_Update": "9/9/2020 4:30",
  "Lat": 32.3182,
  "Long_": -86.9023,
  "Confirmed": 153584,
  "Deaths": 2517
}, {
  "Month": 9,
  "Province_State": "Alaska",
  "Last_Update": "9/9/2020 4:30",
  "Lat": 61.3707,
  "Long_": -152.4044,
  "Confirmed": 7722,
  "Deaths": 56
}, {
  "Month": 9,
  "Province_State": "American Samoa",
  "Last_Update": "9/9/2020 4:30",
  "Lat": -14.271,
  "Long_": -170.132,
  "Confirmed": 0,
  "Deaths": 0
}, {
  "Month": 9,
  "Province_State": "Arizona",
  "Last_Update": "9/9/2020 4:30",
  "Lat": 33.7298,
  "Long_": -111.4312,
  "Confirmed": 218184,
  "Deaths": 5632
}, {
  "Month": 9,
  "Province_State": "Arkansas",
  "Last_Update": "9/9/2020 4:30",
  "Lat": 34.9697,
  "Long_": -92.3731,
  "Confirmed": 82755,
  "Deaths": 1350
}, {
  "Month": 9,
  "Province_State": "California",
  "Last_Update": "9/9/2020 4:30",
  "Lat": 36.1162,
  "Long_": -119.6816,
  "Confirmed": 818673,
  "Deaths": 15782
}, {
  "Month": 9,
  "Province_State": "Colorado",
  "Last_Update": "9/9/2020 4:30",
  "Lat": 39.0598,
  "Long_": -105.3111,
  "Confirmed": 70025,
  "Deaths": 2046
}, {
  "Month": 9,
  "Province_State": "Connecticut",
  "Last_Update": "9/9/2020 4:30",
  "Lat": 41.5978,
  "Long_": -72.7554,
  "Confirmed": 57329,
  "Deaths": 4505
}, {
  "Month": 9,
  "Province_State": "Delaware",
  "Last_Update": "9/9/2020 4:30",
  "Lat": 39.3185,
  "Long_": -75.5071,
  "Confirmed": 20531,
  "Deaths": 651
}, {
  "Month": 9,
  "Province_State": "District of Columbia",
  "Last_Update": "9/9/2020 4:30",
  "Lat": 38.8974,
  "Long_": -77.0268,
  "Confirmed": 15300,
  "Deaths": 626
}, {
  "Month": 9,
  "Province_State": "Florida",
  "Last_Update": "9/9/2020 4:30",
  "Lat": 27.7663,
  "Long_": -81.6868,
  "Confirmed": 704568,
  "Deaths": 14143
}, {
  "Month": 9,
  "Province_State": "Georgia",
  "Last_Update": "9/9/2020 4:30",
  "Lat": 33.0406,
  "Long_": -83.6431,
  "Confirmed": 316306,
  "Deaths": 6994
}, {
  "Month": 9,
  "Province_State": "Guam",
  "Last_Update": "9/9/2020 4:30",
  "Lat": 13.4443,
  "Long_": 144.7937,
  "Confirmed": 2443,
  "Deaths": 47
}, {
  "Month": 9,
  "Province_State": "Hawaii",
  "Last_Update": "9/9/2020 4:30",
  "Lat": 21.0943,
  "Long_": -157.4983,
  "Confirmed": 12290,
  "Deaths": 134
}, {
  "Month": 9,
  "Province_State": "Idaho",
  "Last_Update": "9/9/2020 4:30",
  "Lat": 44.2405,
  "Long_": -114.4788,
  "Confirmed": 41434,
  "Deaths": 464
}, {
  "Month": 9,
  "Province_State": "Illinois",
  "Last_Update": "9/9/2020 4:30",
  "Lat": 40.3495,
  "Long_": -88.9861,
  "Confirmed": 293448,
  "Deaths": 8881
}, {
  "Month": 9,
  "Province_State": "Indiana",
  "Last_Update": "9/9/2020 4:30",
  "Lat": 39.8494,
  "Long_": -86.2583,
  "Confirmed": 119066,
  "Deaths": 3632
}, {
  "Month": 9,
  "Province_State": "Iowa",
  "Last_Update": "9/9/2020 4:30",
  "Lat": 42.0115,
  "Long_": -93.2105,
  "Confirmed": 88235,
  "Deaths": 1341
}, {
  "Month": 9,
  "Province_State": "Kansas",
  "Last_Update": "9/9/2020 4:30",
  "Lat": 38.5266,
  "Long_": -96.7265,
  "Confirmed": 60844,
  "Deaths": 651
}, {
  "Month": 9,
  "Province_State": "Kentucky",
  "Last_Update": "9/9/2020 4:30",
  "Lat": 37.6681,
  "Long_": -84.6701,
  "Confirmed": 67856,
  "Deaths": 1170
}, {
  "Month": 9,
  "Province_State": "Louisiana",
  "Last_Update": "9/9/2020 4:30",
  "Lat": 31.1695,
  "Long_": -91.8678,
  "Confirmed": 165624,
  "Deaths": 5490
}, {
  "Month": 9,
  "Province_State": "Maine",
  "Last_Update": "9/9/2020 4:30",
  "Lat": 44.6939,
  "Long_": -69.3819,
  "Confirmed": 5337,
  "Deaths": 141
}, {
  "Month": 9,
  "Province_State": "Maryland",
  "Last_Update": "9/9/2020 4:30",
  "Lat": 39.0639,
  "Long_": -76.8021,
  "Confirmed": 124311,
  "Deaths": 3946
}, {
  "Month": 9,
  "Province_State": "Massachusetts",
  "Last_Update": "9/9/2020 4:30",
  "Lat": 42.2302,
  "Long_": -71.5301,
  "Confirmed": 131584,
  "Deaths": 9423
}, {
  "Month": 9,
  "Province_State": "Michigan",
  "Last_Update": "9/9/2020 4:30",
  "Lat": 43.3266,
  "Long_": -84.5361,
  "Confirmed": 136820,
  "Deaths": 7072
}, {
  "Month": 9,
  "Province_State": "Minnesota",
  "Last_Update": "9/9/2020 4:30",
  "Lat": 45.6945,
  "Long_": -93.9002,
  "Confirmed": 98447,
  "Deaths": 2072
}, {
  "Month": 9,
  "Province_State": "Mississippi",
  "Last_Update": "9/9/2020 4:30",
  "Lat": 32.7416,
  "Long_": -89.6787,
  "Confirmed": 97638,
  "Deaths": 2957
}, {
  "Month": 9,
  "Province_State": "Missouri",
  "Last_Update": "9/9/2020 4:30",
  "Lat": 38.4561,
  "Long_": -92.2884,
  "Confirmed": 126751,
  "Deaths": 2066
}, {
  "Month": 9,
  "Province_State": "Montana",
  "Last_Update": "9/9/2020 4:30",
  "Lat": 46.9219,
  "Long_": -110.4544,
  "Confirmed": 12724,
  "Deaths": 177
}, {
  "Month": 9,
  "Province_State": "Nebraska",
  "Last_Update": "9/9/2020 4:30",
  "Lat": 41.1254,
  "Long_": -98.2681,
  "Confirmed": 45044,
  "Deaths": 478
}, {
  "Month": 9,
  "Province_State": "Nevada",
  "Last_Update": "9/9/2020 4:30",
  "Lat": 38.3135,
  "Long_": -117.0554,
  "Confirmed": 79595,
  "Deaths": 1593
}, {
  "Month": 9,
  "Province_State": "New Hampshire",
  "Last_Update": "9/9/2020 4:30",
  "Lat": 43.4525,
  "Long_": -71.5639,
  "Confirmed": 8233,
  "Deaths": 439
}, {
  "Month": 9,
  "Province_State": "New Jersey",
  "Last_Update": "9/9/2020 4:30",
  "Lat": 40.2989,
  "Long_": -74.521,
  "Confirmed": 209848,
  "Deaths": 16117
}, {
  "Month": 9,
  "Province_State": "New Mexico",
  "Last_Update": "9/9/2020 4:30",
  "Lat": 34.8405,
  "Long_": -106.2485,
  "Confirmed": 29157,
  "Deaths": 875
}, {
  "Month": 9,
  "Province_State": "New York",
  "Last_Update": "9/9/2020 4:30",
  "Lat": 42.1657,
  "Long_": -74.9481,
  "Confirmed": 460553,
  "Deaths": 33310
}, {
  "Month": 9,
  "Province_State": "North Carolina",
  "Last_Update": "9/9/2020 4:30",
  "Lat": 35.6301,
  "Long_": -79.8064,
  "Confirmed": 209136,
  "Deaths": 3494
}, {
  "Month": 9,
  "Province_State": "North Dakota",
  "Last_Update": "9/9/2020 4:30",
  "Lat": 47.5289,
  "Long_": -99.784,
  "Confirmed": 21401,
  "Deaths": 239
}, {
  "Month": 9,
  "Province_State": "Northern Mariana Islands",
  "Last_Update": "9/9/2020 4:30",
  "Lat": 15.0979,
  "Long_": 145.6739,
  "Confirmed": 70,
  "Deaths": 2
}, {
  "Month": 9,
  "Province_State": "Ohio",
  "Last_Update": "9/9/2020 4:30",
  "Lat": 40.3888,
  "Long_": -82.7649,
  "Confirmed": 152907,
  "Deaths": 5027
}, {
  "Month": 9,
  "Province_State": "Oklahoma",
  "Last_Update": "9/9/2020 4:30",
  "Lat": 35.5653,
  "Long_": -96.9289,
  "Confirmed": 86219,
  "Deaths": 1018
}, {
  "Month": 9,
  "Province_State": "Oregon",
  "Last_Update": "9/9/2020 4:30",
  "Lat": 44.572,
  "Long_": -122.0709,
  "Confirmed": 33291,
  "Deaths": 555
}, {
  "Month": 9,
  "Province_State": "Pennsylvania",
  "Last_Update": "9/9/2020 4:30",
  "Lat": 40.5908,
  "Long_": -77.2098,
  "Confirmed": 163180,
  "Deaths": 8101
}, {
  "Month": 9,
  "Province_State": "Puerto Rico",
  "Last_Update": "9/9/2020 4:30",
  "Lat": 18.2208,
  "Long_": -66.5901,
  "Confirmed": 48467,
  "Deaths": 654
}, {
  "Month": 9,
  "Province_State": "Rhode Island",
  "Last_Update": "9/9/2020 4:30",
  "Lat": 41.6809,
  "Long_": -71.5118,
  "Confirmed": 24556,
  "Deaths": 1113
}, {
  "Month": 9,
  "Province_State": "South Carolina",
  "Last_Update": "9/9/2020 4:30",
  "Lat": 33.8569,
  "Long_": -80.945,
  "Confirmed": 147634,
  "Deaths": 3359
}, {
  "Month": 9,
  "Province_State": "South Dakota",
  "Last_Update": "9/9/2020 4:30",
  "Lat": 44.2998,
  "Long_": -99.4388,
  "Confirmed": 21997,
  "Deaths": 223
}, {
  "Month": 9,
  "Province_State": "Tennessee",
  "Last_Update": "9/9/2020 4:30",
  "Lat": 35.7478,
  "Long_": -86.6923,
  "Confirmed": 194611,
  "Deaths": 2420
}, {
  "Month": 9,
  "Province_State": "Texas",
  "Last_Update": "9/9/2020 4:30",
  "Lat": 31.0545,
  "Long_": -97.5635,
  "Confirmed": 774438,
  "Deaths": 16179
}, {
  "Month": 9,
  "Province_State": "Utah",
  "Last_Update": "9/9/2020 4:30",
  "Lat": 40.15,
  "Long_": -111.8624,
  "Confirmed": 72136,
  "Deaths": 457
}, {
  "Month": 9,
  "Province_State": "Vermont",
  "Last_Update": "9/9/2020 4:30",
  "Lat": 44.0459,
  "Long_": -72.7107,
  "Confirmed": 1749,
  "Deaths": 58
}, {
  "Month": 9,
  "Province_State": "Virgin Islands",
  "Last_Update": "9/9/2020 4:30",
  "Lat": 18.3358,
  "Long_": -64.8963,
  "Confirmed": 1318,
  "Deaths": 20
}, {
  "Month": 9,
  "Province_State": "Virginia",
  "Last_Update": "9/9/2020 4:30",
  "Lat": 37.7693,
  "Long_": -78.17,
  "Confirmed": 147516,
  "Deaths": 3187
}, {
  "Month": 9,
  "Province_State": "Washington",
  "Last_Update": "9/9/2020 4:30",
  "Lat": 47.4009,
  "Long_": -121.4905,
  "Confirmed": 88823,
  "Deaths": 2093
}, {
  "Month": 9,
  "Province_State": "West Virginia",
  "Last_Update": "9/9/2020 4:30",
  "Lat": 38.4912,
  "Long_": -80.9545,
  "Confirmed": 15693,
  "Deaths": 350
}, {
  "Month": 9,
  "Province_State": "Wisconsin",
  "Last_Update": "9/9/2020 4:30",
  "Lat": 44.2685,
  "Long_": -89.6165,
  "Confirmed": 119955,
  "Deaths": 1300
}, {
  "Month": 9,
  "Province_State": "Wyoming",
  "Last_Update": "9/9/2020 4:30",
  "Lat": 42.756,
  "Long_": -107.3025,
  "Confirmed": 5821,
  "Deaths": 50
}];
},{}],"quTw":[function(require,module,exports) {
"use strict";

var _covid = _interopRequireDefault(require("../static/covid.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var covidData = _covid.default.filter(function (p) {
  return p.Month == 2;
});

var width = 900;
var height = 600;
var svg = d3.select("#us-map").append("svg").attr("width", width).attr("height", height);
var projection = d3.geoAlbersUsa().translate([width / 2, height / 2]) // translate to center of screen
.scale([1000]); // scale things down so see entire US

var path = d3.geoPath().projection(projection);
var colorScale = d3.scaleLinear().domain([0, 500000, 1000000, 1500000, 2000000, 2500000, 3000000, 3500000]) //.domain([0,166666.7,333333.3,500000,666666.7,833333.5,1000000])
.range(["#ffffff", "#fcffa1", "#fbf544", "#fbb844", "#ff4d00", "#ff0000", "#c20404", "#941010"]);
console.log(colorScale.domain().slice());

Number.prototype.round = function (decimals) {
  return Number(Math.round(this + "e" + decimals) + "e-" + decimals);
};

var tooltip = d3.select(".map").append("div").attr("class", "tooltip").style("opacity", 0);

function range(start, count) {
  return Array.apply(0, Array(count + 1)).map(function (element, index) {
    return index + start;
  });
}

function draw_map() {
  console.log("DRAW MAP Func");
  d3.json("https://gist.githubusercontent.com/Bradleykingz/3aa5206b6819a3c38b5d73cb814ed470/raw/a476b9098ba0244718b496697c5b350460d32f99/us-states.json", function (error, uState) {
    if (error) throw error;

    _(uState.features).keyBy('properties.name').merge(_.keyBy(covidData, 'Province_State')).values().value();

    svg.selectAll('path').data(uState.features).enter().append('path').attr("d", path).attr('class', 'state').style('fill', function (d, i) {
      var uConfirmed = d.Confirmed; //console.log(uConfirmed);

      return uConfirmed ? colorScale(uConfirmed) : "#ccc";
    }).on('mousemove', function (d) {
      tooltip.transition().duration(200).style("opacity", .9); //Any time the mouse moves, the tooltip should be at the same position

      tooltip.style("left", d3.event.pageX + "px").style("top", d3.event.pageY + "px") //The text inside should be State: rate%
      .text(function () {
        return "".concat(d.Province_State, ": ").concat(d.Confirmed.round(0));
      });
    });
    /*
    // A function that update the chart when slider is moved
    function updateMap(yearOfChosen) {
    // recompute density estimation
    console.log(yearOfChosen)
        // Listen to the slider
    d3.select("#mySlider").on("change", function(d){
    selectedValue = this.value
    updateMap(selectedValue)
    })*/
  });
  /*
  makeSlider();
    function makeSlider() {
  var margin = {right: 15, left: 15},
      containerWidth = 900,
      containerHeight = 40,
      sliderWidth = containerWidth - margin.left - margin.right,
      sliderHeight = containerHeight,
      startDate = "2020-04",
      endDate = "2021-02";
    var svgSlider = d3.select("#mySlider")
              .append("svg")
              .attr("height", containerHeight)
              .attr("width", containerWidth);
    var x = d3.scaleLinear()
      .domain([0,1])
      .range([0, sliderWidth])
      .clamp(true);
    var slider = svgSlider.append("g")
      .attr("class", "slider")
      .attr("transform", "translate(" + margin.left + "," + sliderHeight / 2 + ")");
    // Slider body
  slider.append("slider")
      .attr("class", "track")
      .attr("x1", x.range()[0])
      .attr("x2", x.range()[1])
      .select(function() { return this.parentNode.appendChild(this.cloneNode(true)); })
      .attr("class", "track-inset")
      .select(function() { return this.parentNode.appendChild(this.cloneNode(true)); })
      .attr("class", "track-overlay")
      .call(d3.drag()
          .on("start.interrupt", function() { slider.interrupt(); })
          .on("start drag", function() { handleDrag(x.invert(d3.event.x)); }));
    // Ticks
  slider.insert("g", ".track-overlay")
      .attr("class", "ticks")
      .attr("transform", "translate(0," + 18 + ")")
      .selectAll("text")
      .data(x.ticks(10))
      .enter().append("text")
      .attr("x", x)
      .attr("text-anchor", "middle")
      .text(function(d) { return d; });
    // Handle
  var handle = slider.insert("circle", ".track-overlay")
      .attr("class", "handle")
      .attr("r", 9);
    slider.transition()
      .duration(750);
  */
  // Must be nested function because of d3.drag().on("start drag", ...) code,
  // drag function has to be defined after slider's handle is created,
  // but handle has to be created last to be drawn on top of slider

  /*function handleDrag(eventX) {
      handle.attr("cx", x(eventX));
        // gather data only for the selected year
      var selectedDate = eventX;
        console.log(selectedDate);
        var selectedDateDataArray = [];
      var currDate = selectedDate;
        covidData.forEach(function(entry) {
      if (entry.Month == parseInt(selectedDate.substring(5,7))) {
          console.log(entry);
          selectedDateDataArray.push(entry);
      }
      });
    }
    // Manually call to instantiate map upon load
  handleDrag(x.invert(0));
  }
  */
  //create a new SVG in the body

  var legend = d3.select("body").append('svg') //add it with the '.legend' class
  .attr('class', 'legend') //it should be 14px wide
  .attr('width', 180) //and 148px high
  .attr('height', 180) //then either select all the 'g's inside the svg
  //or create placeholders
  .selectAll('g') //Fill the data into our placeholders in reverse order
  //This arranges our legend in descending order.
  //The 'data' here is the items we entered in the 'domain',
  //in this case [min, max]
  //We use 'slice()' to create a shallow copy of the array
  //Since we don't want to modify the original one
  .data(colorScale.domain().slice().reverse()) //Every node in teh data should have a 'g' appended
  .enter().append('g') //the 'g' should have this attribute
  .attr("transform", function (d, i) {
    return "translate(0," + i * 20 + ")";
  }); //Inside every 'legend', insert a rect

  legend.append("rect") //that's 18px wide
  .attr("width", 18) //and 18px high
  .attr("height", 18) //then fill it will the color assigned by the scale
  .style("fill", colorScale);
  legend.append("text").attr("x", 24).attr("y", 9).attr("dy", ".35em").text(function (d) {
    return "".concat(d.round(0));
  });
}

document.getElementById("map-vis-section").addEventListener('click', function () {
  console.log("MAP loading");
  draw_map();
  console.log("MAP loaded");
});
},{"../static/covid.json":"QGcX"}]},{},["quTw"], null)
//# sourceMappingURL=https://cse412-21w.github.io/covid19-impact-report/map.876cda2d.js.map