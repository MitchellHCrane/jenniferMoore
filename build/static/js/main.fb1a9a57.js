/*! For license information please see main.fb1a9a57.js.LICENSE.txt */
(() => {
  var __webpack_modules__ = {
      540: (module) => {
        var factory;
        window,
          (factory = function () {
            return (function (e) {
              var t = {};
              function n(r) {
                if (t[r]) return t[r].exports;
                var a = (t[r] = { i: r, l: !1, exports: {} });
                return (
                  e[r].call(a.exports, a, a.exports, n), (a.l = !0), a.exports
                );
              }
              return (
                (n.m = e),
                (n.c = t),
                (n.d = function (e, t, r) {
                  n.o(e, t) ||
                    Object.defineProperty(e, t, { enumerable: !0, get: r });
                }),
                (n.r = function (e) {
                  "undefined" !== typeof Symbol &&
                    Symbol.toStringTag &&
                    Object.defineProperty(e, Symbol.toStringTag, {
                      value: "Module",
                    }),
                    Object.defineProperty(e, "__esModule", { value: !0 });
                }),
                (n.t = function (e, t) {
                  if ((1 & t && (e = n(e)), 8 & t)) return e;
                  if (4 & t && "object" === typeof e && e && e.__esModule)
                    return e;
                  var r = Object.create(null);
                  if (
                    (n.r(r),
                    Object.defineProperty(r, "default", {
                      enumerable: !0,
                      value: e,
                    }),
                    2 & t && "string" != typeof e)
                  )
                    for (var a in e)
                      n.d(
                        r,
                        a,
                        function (t) {
                          return e[t];
                        }.bind(null, a)
                      );
                  return r;
                }),
                (n.n = function (e) {
                  var t =
                    e && e.__esModule
                      ? function () {
                          return e.default;
                        }
                      : function () {
                          return e;
                        };
                  return n.d(t, "a", t), t;
                }),
                (n.o = function (e, t) {
                  return Object.prototype.hasOwnProperty.call(e, t);
                }),
                (n.p = "/"),
                n((n.s = 0))
              );
            })({
              "./node_modules/css-loader/index.js!./src/DefaultStyle.css":
                function (module, exports, __webpack_require__) {
                  eval(
                    'exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);\n// imports\n\n\n// module\nexports.push([module.i, ":root {\\n    --primary-one: #30C5FF;\\n    --primary-one-light: #A0E4FF;\\n    --primary-two: #FFE74C;\\n    --primary-three: #69E062;\\n    --secondary-one: #2A2D34;\\n    --secondary-one-light: #9E9FA2;\\n    --secondary-two: #1B4965;\\n}\\n\\n._2rRxbhZfd2m69aGyclMHup {\\n    font-family: \'Helvetica\', \'Arial\', sans-serif;\\n    font-size: 16px;\\n    padding: 1em;\\n    background-color: #f1f1f1;\\n    border-radius: 4px;\\n    border: 1px solid var(--secondary-one-light);\\n}\\n\\n.FhD6sRmOe8tMY0xW6D0KO {\\n    padding: 0 0 1em 0;\\n}\\n\\nlabel {\\n    display: block;\\n    color: #777777;\\n}\\n\\n._3UZinu8u1JJRVIMHioZRr5 {\\n    position: absolute;\\n    width: 2em;\\n    padding: .7em 0 0 0;\\n    margin: 2px 0 0 0;\\n    text-align: center;\\n    line-height: normal;\\n    color: var(--secondary-one-light);\\n}\\n\\ninput {\\n    width: 100%;\\n    text-indent: 1em;\\n    border-radius: 4px;\\n    font-size: 16px;\\n    padding: .7em;\\n    margin: 0 0 .2em 0;\\n    border: 1px solid var(--secondary-one);\\n    box-sizing: border-box;\\n    -webkit-box-sizing: border-box;\\n    -moz-box-sizing: border-box;\\n}\\n\\ninput:focus {\\n    border: 1px solid var(--primary-one);\\n}\\n\\n._3N7LQgadYQG6Efvq5phiUY {\\n    padding: .1em 0 .1em 0;\\n}\\n\\nselect {\\n    width: 100%;\\n    border-radius: 4px;\\n    font-size: 16px;\\n    border: 1px solid var(--secondary-one);\\n}\\n\\n._37q431tzwiJw837-Dlr_8F {\\n    display: table;\\n    width: 100%;\\n    color: white;\\n    border-radius: 4px;\\n    margin: 1em 0 0 0 ;\\n}\\n\\n._3gGF3MGRKxzQZh6RczOEoz {\\n    display: table-row;\\n    background-color: var(--primary-one);\\n}\\n\\n._1b3zzIo85pUJ3f_AHItArg {\\n    display: table-cell;\\n    text-align: left;\\n    padding: 1em 0 1em 1em;\\n    border-bottom: 1px solid var(--primary-one-light);\\n}\\n\\n.jAN-uedtUK0ALBwN8-1Q0 {\\n    display: table-cell;\\n    text-align: right;\\n    padding: 1em 1em 1em 0;\\n    border-bottom: 1px solid var(--primary-one-light);\\n}\\n\\n.ggtReN8zzGuVkr5-qrqOl {\\n    background-color: var(--secondary-two);\\n    border-bottom: none;\\n}\\n\\nbutton {\\n    background-color: var(--secondary-one);\\n    border: none;\\n    color: white;\\n    padding: 0.5em 1em;\\n    text-align: center;\\n    text-decoration: none;\\n    display: inline-block;\\n    font-size: 16px;\\n}\\n\\n._1Q5hFe2AK7t_TU9za5kvCy {\\n    padding-top: 1em;\\n}\\n\\n._39yvVzrxrpb0jfSJ06VKQG {\\n    text-align: center;\\n}\\n\\n._26dq5g2bVLIO2cIh28C30n h3 {\\n    text-align: center;\\n    color: var(--secondary-one)\\n}\\n\\n._1tsxtEnK38HdtdMO1YnSI6 {\\n    display: table;\\n    padding: 0;\\n    width: 100%;\\n    font-size: 14px;\\n    color: var(--secondary-one-light);\\n    text-align: center;\\n}\\n\\n._1y_ILF8baWrm68ilPYBPFb {\\n    color: var(--secondary-one);\\n}\\n._1y_ILF8baWrm68ilPYBPFb div {\\n    border-bottom: 1px solid var(--secondary-one-light);\\n}\\n\\n.hKXwk7ccbH_w9igmaGPEc {\\n    display: table-row;\\n}\\n\\n._1ibIPKVilJz-nmGV1gAkTi {\\n    color: var(--secondary-one);\\n}\\n\\n.hKXwk7ccbH_w9igmaGPEc div {\\n    display: table-cell;\\n    padding: .2em 0;\\n}\\n\\n._2QxqScDSDuK4P0ny7KZKNr {\\n    text-align: center;\\n    font-size: 9pt;\\n}\\n\\n._2QxqScDSDuK4P0ny7KZKNr a {\\n    color: var(--primary-one);\\n    text-decoration: none;\\n}", ""]);\n\n// exports\nexports.locals = {\n\t"container": "_2rRxbhZfd2m69aGyclMHup",\n\t"inputWrapper": "FhD6sRmOe8tMY0xW6D0KO",\n\t"inputIcon": "_3UZinu8u1JJRVIMHioZRr5",\n\t"inputSection": "_3N7LQgadYQG6Efvq5phiUY",\n\t"results": "_37q431tzwiJw837-Dlr_8F",\n\t"resultRow": "_3gGF3MGRKxzQZh6RczOEoz",\n\t"resultLabel": "_1b3zzIo85pUJ3f_AHItArg",\n\t"resultValue": "jAN-uedtUK0ALBwN8-1Q0",\n\t"totalPayment": "ggtReN8zzGuVkr5-qrqOl",\n\t"advanced": "_1Q5hFe2AK7t_TU9za5kvCy",\n\t"advancedButton": "_39yvVzrxrpb0jfSJ06VKQG",\n\t"schedule": "_26dq5g2bVLIO2cIh28C30n",\n\t"paymentList": "_1tsxtEnK38HdtdMO1YnSI6",\n\t"paymentHeader": "_1y_ILF8baWrm68ilPYBPFb",\n\t"paymentRow": "hKXwk7ccbH_w9igmaGPEc",\n\t"paymentRowYear": "_1ibIPKVilJz-nmGV1gAkTi",\n\t"versionInfo": "_2QxqScDSDuK4P0ny7KZKNr"\n};\n\n//# sourceURL=webpack://mortgage-calculator-react/./src/DefaultStyle.css?./node_modules/css-loader'
                  );
                },
              "./node_modules/css-loader/index.js!./src/Switch.css": function (
                module,
                exports,
                __webpack_require__
              ) {
                eval(
                  'exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);\n// imports\n\n\n// module\nexports.push([module.i, "._244_WpsbxCKE_aQPsrcpn3 {\\n    display: inline-block;\\n    width: 3.5em;\\n    background: slategray;\\n    padding: 0.3em;\\n    border-radius: 3em;\\n}\\n\\n._17s9sfRz_OhvsAxlINu-ba {\\n    background: #69E062;\\n}\\n\\n._2eV9Fey7OO0QPs5uoY3ELN {\\n    float: left;\\n    width: 1.5em;\\n    height: 1.5em;\\n    background: white;\\n    border-radius: 3em;\\n}\\n\\n._17s9sfRz_OhvsAxlINu-ba ._2eV9Fey7OO0QPs5uoY3ELN {\\n    float: right;\\n}", ""]);\n\n// exports\nexports.locals = {\n\t"switchWrapper": "_244_WpsbxCKE_aQPsrcpn3",\n\t"switchWrapperActive": "_17s9sfRz_OhvsAxlINu-ba",\n\t"switchBubble": "_2eV9Fey7OO0QPs5uoY3ELN"\n};\n\n//# sourceURL=webpack://mortgage-calculator-react/./src/Switch.css?./node_modules/css-loader'
                );
              },
              "./node_modules/css-loader/lib/css-base.js": function (
                module,
                exports
              ) {
                eval(
                  '/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\nmodule.exports = function(useSourceMap) {\n\tvar list = [];\n\n\t// return the list of modules as css string\n\tlist.toString = function toString() {\n\t\treturn this.map(function (item) {\n\t\t\tvar content = cssWithMappingToString(item, useSourceMap);\n\t\t\tif(item[2]) {\n\t\t\t\treturn "@media " + item[2] + "{" + content + "}";\n\t\t\t} else {\n\t\t\t\treturn content;\n\t\t\t}\n\t\t}).join("");\n\t};\n\n\t// import a list of modules into the list\n\tlist.i = function(modules, mediaQuery) {\n\t\tif(typeof modules === "string")\n\t\t\tmodules = [[null, modules, ""]];\n\t\tvar alreadyImportedModules = {};\n\t\tfor(var i = 0; i < this.length; i++) {\n\t\t\tvar id = this[i][0];\n\t\t\tif(typeof id === "number")\n\t\t\t\talreadyImportedModules[id] = true;\n\t\t}\n\t\tfor(i = 0; i < modules.length; i++) {\n\t\t\tvar item = modules[i];\n\t\t\t// skip already imported module\n\t\t\t// this implementation is not 100% perfect for weird media query combinations\n\t\t\t//  when a module is imported multiple times with different media queries.\n\t\t\t//  I hope this will never occur (Hey this way we have smaller bundles)\n\t\t\tif(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {\n\t\t\t\tif(mediaQuery && !item[2]) {\n\t\t\t\t\titem[2] = mediaQuery;\n\t\t\t\t} else if(mediaQuery) {\n\t\t\t\t\titem[2] = "(" + item[2] + ") and (" + mediaQuery + ")";\n\t\t\t\t}\n\t\t\t\tlist.push(item);\n\t\t\t}\n\t\t}\n\t};\n\treturn list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n\tvar content = item[1] || \'\';\n\tvar cssMapping = item[3];\n\tif (!cssMapping) {\n\t\treturn content;\n\t}\n\n\tif (useSourceMap && typeof btoa === \'function\') {\n\t\tvar sourceMapping = toComment(cssMapping);\n\t\tvar sourceURLs = cssMapping.sources.map(function (source) {\n\t\t\treturn \'/*# sourceURL=\' + cssMapping.sourceRoot + source + \' */\'\n\t\t});\n\n\t\treturn [content].concat(sourceURLs).concat([sourceMapping]).join(\'\\n\');\n\t}\n\n\treturn [content].join(\'\\n\');\n}\n\n// Adapted from convert-source-map (MIT)\nfunction toComment(sourceMap) {\n\t// eslint-disable-next-line no-undef\n\tvar base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n\tvar data = \'sourceMappingURL=data:application/json;charset=utf-8;base64,\' + base64;\n\n\treturn \'/*# \' + data + \' */\';\n}\n\n\n//# sourceURL=webpack://mortgage-calculator-react/./node_modules/css-loader/lib/css-base.js?'
                );
              },
              "./node_modules/mortgage-js/index.js": function (
                module,
                exports
              ) {
                eval(
                  "const defaultPrice = 500000;\nconst defaultDownPayment = 100000;\nconst defaultInterestRate = 0.05;\nconst defaultMonths = 360;\nconst defaultTaxRate = 0.0126;\nconst defaultInsuranceRate = 0.0014;\nconst defaultMortgageInsuranceRate = 0.011;\nconst defaultMortgageInsuranceEnabled = true;\nconst defaultMortgageInsuranceThreshold = 0.2;\nconst defaultAdditionalPrincipalPayment = 0;\n\nclass MortgageCalculator {\n\n    constructor() {\n        this.totalPrice = defaultPrice;\n        this.downPayment = defaultDownPayment;\n        this.interestRate = defaultInterestRate;\n        this.months = defaultMonths;\n        this.taxRate = defaultTaxRate;\n        this.insuranceRate = defaultInsuranceRate;\n        this.mortgageInsuranceRate = defaultMortgageInsuranceRate;\n        this.mortgageInsuranceEnabled = defaultMortgageInsuranceEnabled;\n        this.mortgageInsuranceThreshold = defaultMortgageInsuranceThreshold;\n        this.additionalPrincipalPayment = defaultAdditionalPrincipalPayment;\n    }\n\n    calculatePayment() {\n        let loanAmount = this.totalPrice - this.downPayment;\n        let paymentSchedule = MortgageCalculator.calculatePaymentSchedule(loanAmount, this.interestRate, this.months, this.additionalPrincipalPayment);\n        let piPayment = paymentSchedule.length ? paymentSchedule[0].totalPayment : 0;\n        let downPaymentPercentage = this.downPayment / this.totalPrice;\n        let mortgageInsurance = 0;\n        if (this.mortgageInsuranceEnabled && downPaymentPercentage < this.mortgageInsuranceThreshold) {\n            mortgageInsurance = (loanAmount * this.mortgageInsuranceRate) / 12;\n        }\n\n        let propertyTax = (this.totalPrice * this.taxRate) / 12;\n        let homeOwnerInsurance = MortgageCalculator.roundPenny((this.totalPrice * this.insuranceRate) / 12);\n        return {\n            loanAmount: loanAmount,\n            principalAndInterest: piPayment,\n            tax: propertyTax,\n            insurance: homeOwnerInsurance,\n            total: piPayment + propertyTax + homeOwnerInsurance + mortgageInsurance,\n            termMonths: this.months,\n            paymentSchedule: paymentSchedule,\n            mortgageInsurance: mortgageInsurance\n        };\n    }\n\n    static calculatePaymentSchedule(loanAmount, annualRate, termMonths, additionalPrincipalPayments = 0) {\n        const monthlyRate = annualRate / 12;\n        const monthlyPayment = MortgageCalculator.calculateMonthlyPIPayment(loanAmount, annualRate, termMonths);\n        let principal = MortgageCalculator.roundPenny(loanAmount);\n        let payments = [];\n        let totalInterest = 0;\n        let totalPayments = 0;\n        let i = 0;\n        while (principal > 0 && i < termMonths) {\n            let interestPayment = MortgageCalculator.roundPenny(principal * monthlyRate);\n            let principalPayment = MortgageCalculator.roundPenny(monthlyPayment - interestPayment + additionalPrincipalPayments);\n            if (principal > principalPayment) {\n                principal = MortgageCalculator.roundPenny(principal - principalPayment);\n            }\n            else {\n                principalPayment = principal;\n                principal = 0;\n            }\n            let totalPayment = interestPayment + principalPayment;\n            totalInterest += interestPayment;\n            totalPayments += totalPayment;\n            payments[i] = {\n                count: i+1,\n                interestPayment: interestPayment,\n                totalInterest: totalInterest,\n                principalPayment: principalPayment,\n                totalPayment: totalPayment,\n                totalPayments: totalPayments,\n                balance: principal\n            };\n            i++;\n        }\n\n        return payments;\n    }\n\n    static calculateMonthlyPIPayment(loanAmount, annualRate, termMonths) {\n        let monthlyRate = annualRate / 12;\n        let payment = (monthlyRate * loanAmount * Math.pow(1 + monthlyRate, termMonths)) / (Math.pow(1 + monthlyRate, termMonths) - 1);\n        return this.nextPenny(payment);\n    }\n\n    static roundPenny(value) {\n        return Math.round(value * 100)/100;\n    }\n\n    static nextPenny(value) {\n        return Math.ceil(value * 100)/100;\n    }\n}\n\nconst _calc = new MortgageCalculator();\n\nmodule.exports = {\n    createMortgageCalculator: function(){\n        return new MortgageCalculator();\n    },\n    calculatePayment: function(totalPrice = defaultPrice,\n                               downPayment = defaultDownPayment,\n                               interestRate = defaultInterestRate,\n                               months = defaultMonths,\n                               taxRate = defaultTaxRate,\n                               insuranceRate = defaultInsuranceRate,\n                               mortgageInsuranceRate = defaultMortgageInsuranceRate,\n                               mortgageInsuranceEnabled = defaultMortgageInsuranceEnabled,\n                               mortgageInsuranceThreshold = defaultMortgageInsuranceThreshold,\n                               additionalPrincipalPayment = defaultAdditionalPrincipalPayment) {\n        _calc.totalPrice = totalPrice;\n        _calc.downPayment = downPayment;\n        _calc.interestRate = interestRate;\n        _calc.months = months;\n        _calc.taxRate = taxRate;\n        _calc.insuranceRate = insuranceRate;\n        _calc.mortgageInsuranceRate = mortgageInsuranceRate;\n        _calc.mortgageInsuranceEnabled = mortgageInsuranceEnabled;\n        _calc.mortgageInsuranceThreshold = mortgageInsuranceThreshold;\n        _calc.additionalPrincipalPayment = additionalPrincipalPayment;\n        return _calc.calculatePayment();\n    },\n    nextPenny: MortgageCalculator.nextPenny\n};\n\n\n\n//# sourceURL=webpack://mortgage-calculator-react/./node_modules/mortgage-js/index.js?"
                );
              },
              "./node_modules/object-assign/index.js": function (
                module,
                exports,
                __webpack_require__
              ) {
                "use strict";
                eval(
                  "/*\nobject-assign\n(c) Sindre Sorhus\n@license MIT\n*/\n\n\n/* eslint-disable no-unused-vars */\nvar getOwnPropertySymbols = Object.getOwnPropertySymbols;\nvar hasOwnProperty = Object.prototype.hasOwnProperty;\nvar propIsEnumerable = Object.prototype.propertyIsEnumerable;\n\nfunction toObject(val) {\n\tif (val === null || val === undefined) {\n\t\tthrow new TypeError('Object.assign cannot be called with null or undefined');\n\t}\n\n\treturn Object(val);\n}\n\nfunction shouldUseNative() {\n\ttry {\n\t\tif (!Object.assign) {\n\t\t\treturn false;\n\t\t}\n\n\t\t// Detect buggy property enumeration order in older V8 versions.\n\n\t\t// https://bugs.chromium.org/p/v8/issues/detail?id=4118\n\t\tvar test1 = new String('abc');  // eslint-disable-line no-new-wrappers\n\t\ttest1[5] = 'de';\n\t\tif (Object.getOwnPropertyNames(test1)[0] === '5') {\n\t\t\treturn false;\n\t\t}\n\n\t\t// https://bugs.chromium.org/p/v8/issues/detail?id=3056\n\t\tvar test2 = {};\n\t\tfor (var i = 0; i < 10; i++) {\n\t\t\ttest2['_' + String.fromCharCode(i)] = i;\n\t\t}\n\t\tvar order2 = Object.getOwnPropertyNames(test2).map(function (n) {\n\t\t\treturn test2[n];\n\t\t});\n\t\tif (order2.join('') !== '0123456789') {\n\t\t\treturn false;\n\t\t}\n\n\t\t// https://bugs.chromium.org/p/v8/issues/detail?id=3056\n\t\tvar test3 = {};\n\t\t'abcdefghijklmnopqrst'.split('').forEach(function (letter) {\n\t\t\ttest3[letter] = letter;\n\t\t});\n\t\tif (Object.keys(Object.assign({}, test3)).join('') !==\n\t\t\t\t'abcdefghijklmnopqrst') {\n\t\t\treturn false;\n\t\t}\n\n\t\treturn true;\n\t} catch (err) {\n\t\t// We don't expect any of the above to throw, but better to be safe.\n\t\treturn false;\n\t}\n}\n\nmodule.exports = shouldUseNative() ? Object.assign : function (target, source) {\n\tvar from;\n\tvar to = toObject(target);\n\tvar symbols;\n\n\tfor (var s = 1; s < arguments.length; s++) {\n\t\tfrom = Object(arguments[s]);\n\n\t\tfor (var key in from) {\n\t\t\tif (hasOwnProperty.call(from, key)) {\n\t\t\t\tto[key] = from[key];\n\t\t\t}\n\t\t}\n\n\t\tif (getOwnPropertySymbols) {\n\t\t\tsymbols = getOwnPropertySymbols(from);\n\t\t\tfor (var i = 0; i < symbols.length; i++) {\n\t\t\t\tif (propIsEnumerable.call(from, symbols[i])) {\n\t\t\t\t\tto[symbols[i]] = from[symbols[i]];\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n\treturn to;\n};\n\n\n//# sourceURL=webpack://mortgage-calculator-react/./node_modules/object-assign/index.js?"
                );
              },
              "./node_modules/prop-types/checkPropTypes.js": function (
                module,
                exports,
                __webpack_require__
              ) {
                "use strict";
                eval(
                  "/**\n * Copyright (c) 2013-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\n\n\nvar printWarning = function() {};\n\nif (true) {\n  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ \"./node_modules/prop-types/lib/ReactPropTypesSecret.js\");\n  var loggedTypeFailures = {};\n\n  printWarning = function(text) {\n    var message = 'Warning: ' + text;\n    if (typeof console !== 'undefined') {\n      console.error(message);\n    }\n    try {\n      // --- Welcome to debugging React ---\n      // This error was thrown as a convenience so that you can use this stack\n      // to find the callsite that caused this warning to fire.\n      throw new Error(message);\n    } catch (x) {}\n  };\n}\n\n/**\n * Assert that the values match with the type specs.\n * Error messages are memorized and will only be shown once.\n *\n * @param {object} typeSpecs Map of name to a ReactPropType\n * @param {object} values Runtime values that need to be type-checked\n * @param {string} location e.g. \"prop\", \"context\", \"child context\"\n * @param {string} componentName Name of the component for error messages.\n * @param {?Function} getStack Returns the component stack.\n * @private\n */\nfunction checkPropTypes(typeSpecs, values, location, componentName, getStack) {\n  if (true) {\n    for (var typeSpecName in typeSpecs) {\n      if (typeSpecs.hasOwnProperty(typeSpecName)) {\n        var error;\n        // Prop type validation may throw. In case they do, we don't want to\n        // fail the render phase where it didn't fail before. So we log it.\n        // After these have been cleaned up, we'll let them throw.\n        try {\n          // This is intentionally an invariant that gets caught. It's the same\n          // behavior as without this statement except with a better message.\n          if (typeof typeSpecs[typeSpecName] !== 'function') {\n            var err = Error(\n              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +\n              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'\n            );\n            err.name = 'Invariant Violation';\n            throw err;\n          }\n          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);\n        } catch (ex) {\n          error = ex;\n        }\n        if (error && !(error instanceof Error)) {\n          printWarning(\n            (componentName || 'React class') + ': type specification of ' +\n            location + ' `' + typeSpecName + '` is invalid; the type checker ' +\n            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +\n            'You may have forgotten to pass an argument to the type checker ' +\n            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +\n            'shape all require an argument).'\n          )\n\n        }\n        if (error instanceof Error && !(error.message in loggedTypeFailures)) {\n          // Only monitor this failure once because there tends to be a lot of the\n          // same error.\n          loggedTypeFailures[error.message] = true;\n\n          var stack = getStack ? getStack() : '';\n\n          printWarning(\n            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')\n          );\n        }\n      }\n    }\n  }\n}\n\nmodule.exports = checkPropTypes;\n\n\n//# sourceURL=webpack://mortgage-calculator-react/./node_modules/prop-types/checkPropTypes.js?"
                );
              },
              "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
                function (module, exports, __webpack_require__) {
                  "use strict";
                  eval(
                    "/**\n * Copyright (c) 2013-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\n\n\nvar ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';\n\nmodule.exports = ReactPropTypesSecret;\n\n\n//# sourceURL=webpack://mortgage-calculator-react/./node_modules/prop-types/lib/ReactPropTypesSecret.js?"
                  );
                },
              "./node_modules/react/cjs/react.development.js": function (
                module,
                exports,
                __webpack_require__
              ) {
                "use strict";
                eval(
                  "/** @license React v16.6.1\n * react.development.js\n *\n * Copyright (c) Facebook, Inc. and its affiliates.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\n\n\n\n\nif (true) {\n  (function() {\n'use strict';\n\nvar _assign = __webpack_require__(/*! object-assign */ \"./node_modules/object-assign/index.js\");\nvar checkPropTypes = __webpack_require__(/*! prop-types/checkPropTypes */ \"./node_modules/prop-types/checkPropTypes.js\");\n\n// TODO: this is special because it gets imported during build.\n\nvar ReactVersion = '16.6.3';\n\n// The Symbol used to tag the ReactElement-like types. If there is no native Symbol\n// nor polyfill, then a plain number is used for performance.\nvar hasSymbol = typeof Symbol === 'function' && Symbol.for;\n\nvar REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;\nvar REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;\nvar REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;\nvar REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;\nvar REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;\nvar REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;\nvar REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;\n\nvar REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;\nvar REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;\nvar REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;\nvar REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;\nvar REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;\n\nvar MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;\nvar FAUX_ITERATOR_SYMBOL = '@@iterator';\n\nfunction getIteratorFn(maybeIterable) {\n  if (maybeIterable === null || typeof maybeIterable !== 'object') {\n    return null;\n  }\n  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];\n  if (typeof maybeIterator === 'function') {\n    return maybeIterator;\n  }\n  return null;\n}\n\nvar enableHooks = false;\n// Helps identify side effects in begin-phase lifecycle hooks and setState reducers:\n\n\n// In some cases, StrictMode should also double-render lifecycles.\n// This can be confusing for tests though,\n// And it can be bad for performance in production.\n// This feature flag can be used to control the behavior:\n\n\n// To preserve the \"Pause on caught exceptions\" behavior of the debugger, we\n// replay the begin phase of a failed component inside invokeGuardedCallback.\n\n\n// Warn about deprecated, async-unsafe lifecycles; relates to RFC #6:\n\n\n// Gather advanced timing metrics for Profiler subtrees.\n\n\n// Trace which interactions trigger each commit.\n\n\n// Only used in www builds.\n\n\n// Only used in www builds.\n\n\n// React Fire: prevent the value and checked attributes from syncing\n// with their related DOM properties\n\n\n// These APIs will no longer be \"unstable\" in the upcoming 16.7 release,\n// Control this behavior with a flag to support 16.6 minor releases in the meanwhile.\nvar enableStableConcurrentModeAPIs = false;\n\n/**\n * Use invariant() to assert state which your program assumes to be true.\n *\n * Provide sprintf-style format (only %s is supported) and arguments\n * to provide information about what broke and what you were\n * expecting.\n *\n * The invariant message will be stripped in production, but the invariant\n * will remain to ensure logic does not differ in production.\n */\n\nvar validateFormat = function () {};\n\n{\n  validateFormat = function (format) {\n    if (format === undefined) {\n      throw new Error('invariant requires an error message argument');\n    }\n  };\n}\n\nfunction invariant(condition, format, a, b, c, d, e, f) {\n  validateFormat(format);\n\n  if (!condition) {\n    var error = void 0;\n    if (format === undefined) {\n      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');\n    } else {\n      var args = [a, b, c, d, e, f];\n      var argIndex = 0;\n      error = new Error(format.replace(/%s/g, function () {\n        return args[argIndex++];\n      }));\n      error.name = 'Invariant Violation';\n    }\n\n    error.framesToPop = 1; // we don't care about invariant's own frame\n    throw error;\n  }\n}\n\n// Relying on the `invariant()` implementation lets us\n// preserve the format and params in the www builds.\n\n/**\n * Forked from fbjs/warning:\n * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js\n *\n * Only change is we use console.warn instead of console.error,\n * and do nothing when 'console' is not supported.\n * This really simplifies the code.\n * ---\n * Similar to invariant but only logs a warning if the condition is not met.\n * This can be used to log issues in development environments in critical\n * paths. Removing the logging code for production environments will keep the\n * same logic and follow the same code paths.\n */\n\nvar lowPriorityWarning = function () {};\n\n{\n  var printWarning = function (format) {\n    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {\n      args[_key - 1] = arguments[_key];\n    }\n\n    var argIndex = 0;\n    var message = 'Warning: ' + format.replace(/%s/g, function () {\n      return args[argIndex++];\n    });\n    if (typeof console !== 'undefined') {\n      console.warn(message);\n    }\n    try {\n      // --- Welcome to debugging React ---\n      // This error was thrown as a convenience so that you can use this stack\n      // to find the callsite that caused this warning to fire.\n      throw new Error(message);\n    } catch (x) {}\n  };\n\n  lowPriorityWarning = function (condition, format) {\n    if (format === undefined) {\n      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');\n    }\n    if (!condition) {\n      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {\n        args[_key2 - 2] = arguments[_key2];\n      }\n\n      printWarning.apply(undefined, [format].concat(args));\n    }\n  };\n}\n\nvar lowPriorityWarning$1 = lowPriorityWarning;\n\n/**\n * Similar to invariant but only logs a warning if the condition is not met.\n * This can be used to log issues in development environments in critical\n * paths. Removing the logging code for production environments will keep the\n * same logic and follow the same code paths.\n */\n\nvar warningWithoutStack = function () {};\n\n{\n  warningWithoutStack = function (condition, format) {\n    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {\n      args[_key - 2] = arguments[_key];\n    }\n\n    if (format === undefined) {\n      throw new Error('`warningWithoutStack(condition, format, ...args)` requires a warning ' + 'message argument');\n    }\n    if (args.length > 8) {\n      // Check before the condition to catch violations early.\n      throw new Error('warningWithoutStack() currently supports at most 8 arguments.');\n    }\n    if (condition) {\n      return;\n    }\n    if (typeof console !== 'undefined') {\n      var argsWithFormat = args.map(function (item) {\n        return '' + item;\n      });\n      argsWithFormat.unshift('Warning: ' + format);\n\n      // We intentionally don't use spread (or .apply) directly because it\n      // breaks IE9: https://github.com/facebook/react/issues/13610\n      Function.prototype.apply.call(console.error, console, argsWithFormat);\n    }\n    try {\n      // --- Welcome to debugging React ---\n      // This error was thrown as a convenience so that you can use this stack\n      // to find the callsite that caused this warning to fire.\n      var argIndex = 0;\n      var message = 'Warning: ' + format.replace(/%s/g, function () {\n        return args[argIndex++];\n      });\n      throw new Error(message);\n    } catch (x) {}\n  };\n}\n\nvar warningWithoutStack$1 = warningWithoutStack;\n\nvar didWarnStateUpdateForUnmountedComponent = {};\n\nfunction warnNoop(publicInstance, callerName) {\n  {\n    var _constructor = publicInstance.constructor;\n    var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';\n    var warningKey = componentName + '.' + callerName;\n    if (didWarnStateUpdateForUnmountedComponent[warningKey]) {\n      return;\n    }\n    warningWithoutStack$1(false, \"Can't call %s on a component that is not yet mounted. \" + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);\n    didWarnStateUpdateForUnmountedComponent[warningKey] = true;\n  }\n}\n\n/**\n * This is the abstract API for an update queue.\n */\nvar ReactNoopUpdateQueue = {\n  /**\n   * Checks whether or not this composite component is mounted.\n   * @param {ReactClass} publicInstance The instance we want to test.\n   * @return {boolean} True if mounted, false otherwise.\n   * @protected\n   * @final\n   */\n  isMounted: function (publicInstance) {\n    return false;\n  },\n\n  /**\n   * Forces an update. This should only be invoked when it is known with\n   * certainty that we are **not** in a DOM transaction.\n   *\n   * You may want to call this when you know that some deeper aspect of the\n   * component's state has changed but `setState` was not called.\n   *\n   * This will not invoke `shouldComponentUpdate`, but it will invoke\n   * `componentWillUpdate` and `componentDidUpdate`.\n   *\n   * @param {ReactClass} publicInstance The instance that should rerender.\n   * @param {?function} callback Called after component is updated.\n   * @param {?string} callerName name of the calling function in the public API.\n   * @internal\n   */\n  enqueueForceUpdate: function (publicInstance, callback, callerName) {\n    warnNoop(publicInstance, 'forceUpdate');\n  },\n\n  /**\n   * Replaces all of the state. Always use this or `setState` to mutate state.\n   * You should treat `this.state` as immutable.\n   *\n   * There is no guarantee that `this.state` will be immediately updated, so\n   * accessing `this.state` after calling this method may return the old value.\n   *\n   * @param {ReactClass} publicInstance The instance that should rerender.\n   * @param {object} completeState Next state.\n   * @param {?function} callback Called after component is updated.\n   * @param {?string} callerName name of the calling function in the public API.\n   * @internal\n   */\n  enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {\n    warnNoop(publicInstance, 'replaceState');\n  },\n\n  /**\n   * Sets a subset of the state. This only exists because _pendingState is\n   * internal. This provides a merging strategy that is not available to deep\n   * properties which is confusing. TODO: Expose pendingState or don't use it\n   * during the merge.\n   *\n   * @param {ReactClass} publicInstance The instance that should rerender.\n   * @param {object} partialState Next partial state to be merged with state.\n   * @param {?function} callback Called after component is updated.\n   * @param {?string} Name of the calling function in the public API.\n   * @internal\n   */\n  enqueueSetState: function (publicInstance, partialState, callback, callerName) {\n    warnNoop(publicInstance, 'setState');\n  }\n};\n\nvar emptyObject = {};\n{\n  Object.freeze(emptyObject);\n}\n\n/**\n * Base class helpers for the updating state of a component.\n */\nfunction Component(props, context, updater) {\n  this.props = props;\n  this.context = context;\n  // If a component has string refs, we will assign a different object later.\n  this.refs = emptyObject;\n  // We initialize the default updater but the real one gets injected by the\n  // renderer.\n  this.updater = updater || ReactNoopUpdateQueue;\n}\n\nComponent.prototype.isReactComponent = {};\n\n/**\n * Sets a subset of the state. Always use this to mutate\n * state. You should treat `this.state` as immutable.\n *\n * There is no guarantee that `this.state` will be immediately updated, so\n * accessing `this.state` after calling this method may return the old value.\n *\n * There is no guarantee that calls to `setState` will run synchronously,\n * as they may eventually be batched together.  You can provide an optional\n * callback that will be executed when the call to setState is actually\n * completed.\n *\n * When a function is provided to setState, it will be called at some point in\n * the future (not synchronously). It will be called with the up to date\n * component arguments (state, props, context). These values can be different\n * from this.* because your function may be called after receiveProps but before\n * shouldComponentUpdate, and this new state, props, and context will not yet be\n * assigned to this.\n *\n * @param {object|function} partialState Next partial state or function to\n *        produce next partial state to be merged with current state.\n * @param {?function} callback Called after state is updated.\n * @final\n * @protected\n */\nComponent.prototype.setState = function (partialState, callback) {\n  !(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null) ? invariant(false, 'setState(...): takes an object of state variables to update or a function which returns an object of state variables.') : void 0;\n  this.updater.enqueueSetState(this, partialState, callback, 'setState');\n};\n\n/**\n * Forces an update. This should only be invoked when it is known with\n * certainty that we are **not** in a DOM transaction.\n *\n * You may want to call this when you know that some deeper aspect of the\n * component's state has changed but `setState` was not called.\n *\n * This will not invoke `shouldComponentUpdate`, but it will invoke\n * `componentWillUpdate` and `componentDidUpdate`.\n *\n * @param {?function} callback Called after update is complete.\n * @final\n * @protected\n */\nComponent.prototype.forceUpdate = function (callback) {\n  this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');\n};\n\n/**\n * Deprecated APIs. These APIs used to exist on classic React classes but since\n * we would like to deprecate them, we're not going to move them over to this\n * modern base class. Instead, we define a getter that warns if it's accessed.\n */\n{\n  var deprecatedAPIs = {\n    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],\n    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']\n  };\n  var defineDeprecationWarning = function (methodName, info) {\n    Object.defineProperty(Component.prototype, methodName, {\n      get: function () {\n        lowPriorityWarning$1(false, '%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);\n        return undefined;\n      }\n    });\n  };\n  for (var fnName in deprecatedAPIs) {\n    if (deprecatedAPIs.hasOwnProperty(fnName)) {\n      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);\n    }\n  }\n}\n\nfunction ComponentDummy() {}\nComponentDummy.prototype = Component.prototype;\n\n/**\n * Convenience component with default shallow equality check for sCU.\n */\nfunction PureComponent(props, context, updater) {\n  this.props = props;\n  this.context = context;\n  // If a component has string refs, we will assign a different object later.\n  this.refs = emptyObject;\n  this.updater = updater || ReactNoopUpdateQueue;\n}\n\nvar pureComponentPrototype = PureComponent.prototype = new ComponentDummy();\npureComponentPrototype.constructor = PureComponent;\n// Avoid an extra prototype jump for these methods.\n_assign(pureComponentPrototype, Component.prototype);\npureComponentPrototype.isPureReactComponent = true;\n\n// an immutable object with a single mutable value\nfunction createRef() {\n  var refObject = {\n    current: null\n  };\n  {\n    Object.seal(refObject);\n  }\n  return refObject;\n}\n\n/**\n * Keeps track of the current owner.\n *\n * The current owner is the component who should own any components that are\n * currently being constructed.\n */\nvar ReactCurrentOwner = {\n  /**\n   * @internal\n   * @type {ReactComponent}\n   */\n  current: null,\n  currentDispatcher: null\n};\n\nvar BEFORE_SLASH_RE = /^(.*)[\\\\\\/]/;\n\nvar describeComponentFrame = function (name, source, ownerName) {\n  var sourceInfo = '';\n  if (source) {\n    var path = source.fileName;\n    var fileName = path.replace(BEFORE_SLASH_RE, '');\n    {\n      // In DEV, include code for a common special case:\n      // prefer \"folder/index.js\" instead of just \"index.js\".\n      if (/^index\\./.test(fileName)) {\n        var match = path.match(BEFORE_SLASH_RE);\n        if (match) {\n          var pathBeforeSlash = match[1];\n          if (pathBeforeSlash) {\n            var folderName = pathBeforeSlash.replace(BEFORE_SLASH_RE, '');\n            fileName = folderName + '/' + fileName;\n          }\n        }\n      }\n    }\n    sourceInfo = ' (at ' + fileName + ':' + source.lineNumber + ')';\n  } else if (ownerName) {\n    sourceInfo = ' (created by ' + ownerName + ')';\n  }\n  return '\\n    in ' + (name || 'Unknown') + sourceInfo;\n};\n\nvar Resolved = 1;\n\n\nfunction refineResolvedLazyComponent(lazyComponent) {\n  return lazyComponent._status === Resolved ? lazyComponent._result : null;\n}\n\nfunction getWrappedName(outerType, innerType, wrapperName) {\n  var functionName = innerType.displayName || innerType.name || '';\n  return outerType.displayName || (functionName !== '' ? wrapperName + '(' + functionName + ')' : wrapperName);\n}\n\nfunction getComponentName(type) {\n  if (type == null) {\n    // Host root, text node or just invalid type.\n    return null;\n  }\n  {\n    if (typeof type.tag === 'number') {\n      warningWithoutStack$1(false, 'Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');\n    }\n  }\n  if (typeof type === 'function') {\n    return type.displayName || type.name || null;\n  }\n  if (typeof type === 'string') {\n    return type;\n  }\n  switch (type) {\n    case REACT_CONCURRENT_MODE_TYPE:\n      return 'ConcurrentMode';\n    case REACT_FRAGMENT_TYPE:\n      return 'Fragment';\n    case REACT_PORTAL_TYPE:\n      return 'Portal';\n    case REACT_PROFILER_TYPE:\n      return 'Profiler';\n    case REACT_STRICT_MODE_TYPE:\n      return 'StrictMode';\n    case REACT_SUSPENSE_TYPE:\n      return 'Suspense';\n  }\n  if (typeof type === 'object') {\n    switch (type.$$typeof) {\n      case REACT_CONTEXT_TYPE:\n        return 'Context.Consumer';\n      case REACT_PROVIDER_TYPE:\n        return 'Context.Provider';\n      case REACT_FORWARD_REF_TYPE:\n        return getWrappedName(type, type.render, 'ForwardRef');\n      case REACT_MEMO_TYPE:\n        return getComponentName(type.type);\n      case REACT_LAZY_TYPE:\n        {\n          var thenable = type;\n          var resolvedThenable = refineResolvedLazyComponent(thenable);\n          if (resolvedThenable) {\n            return getComponentName(resolvedThenable);\n          }\n        }\n    }\n  }\n  return null;\n}\n\nvar ReactDebugCurrentFrame = {};\n\nvar currentlyValidatingElement = null;\n\nfunction setCurrentlyValidatingElement(element) {\n  {\n    currentlyValidatingElement = element;\n  }\n}\n\n{\n  // Stack implementation injected by the current renderer.\n  ReactDebugCurrentFrame.getCurrentStack = null;\n\n  ReactDebugCurrentFrame.getStackAddendum = function () {\n    var stack = '';\n\n    // Add an extra top frame while an element is being validated\n    if (currentlyValidatingElement) {\n      var name = getComponentName(currentlyValidatingElement.type);\n      var owner = currentlyValidatingElement._owner;\n      stack += describeComponentFrame(name, currentlyValidatingElement._source, owner && getComponentName(owner.type));\n    }\n\n    // Delegate to the injected renderer-specific implementation\n    var impl = ReactDebugCurrentFrame.getCurrentStack;\n    if (impl) {\n      stack += impl() || '';\n    }\n\n    return stack;\n  };\n}\n\nvar ReactSharedInternals = {\n  ReactCurrentOwner: ReactCurrentOwner,\n  // Used by renderers to avoid bundling object-assign twice in UMD bundles:\n  assign: _assign\n};\n\n{\n  _assign(ReactSharedInternals, {\n    // These should not be included in production.\n    ReactDebugCurrentFrame: ReactDebugCurrentFrame,\n    // Shim for React DOM 16.0.0 which still destructured (but not used) this.\n    // TODO: remove in React 17.0.\n    ReactComponentTreeHook: {}\n  });\n}\n\n/**\n * Similar to invariant but only logs a warning if the condition is not met.\n * This can be used to log issues in development environments in critical\n * paths. Removing the logging code for production environments will keep the\n * same logic and follow the same code paths.\n */\n\nvar warning = warningWithoutStack$1;\n\n{\n  warning = function (condition, format) {\n    if (condition) {\n      return;\n    }\n    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;\n    var stack = ReactDebugCurrentFrame.getStackAddendum();\n    // eslint-disable-next-line react-internal/warning-and-invariant-args\n\n    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {\n      args[_key - 2] = arguments[_key];\n    }\n\n    warningWithoutStack$1.apply(undefined, [false, format + '%s'].concat(args, [stack]));\n  };\n}\n\nvar warning$1 = warning;\n\nvar hasOwnProperty = Object.prototype.hasOwnProperty;\n\nvar RESERVED_PROPS = {\n  key: true,\n  ref: true,\n  __self: true,\n  __source: true\n};\n\nvar specialPropKeyWarningShown = void 0;\nvar specialPropRefWarningShown = void 0;\n\nfunction hasValidRef(config) {\n  {\n    if (hasOwnProperty.call(config, 'ref')) {\n      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;\n      if (getter && getter.isReactWarning) {\n        return false;\n      }\n    }\n  }\n  return config.ref !== undefined;\n}\n\nfunction hasValidKey(config) {\n  {\n    if (hasOwnProperty.call(config, 'key')) {\n      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;\n      if (getter && getter.isReactWarning) {\n        return false;\n      }\n    }\n  }\n  return config.key !== undefined;\n}\n\nfunction defineKeyPropWarningGetter(props, displayName) {\n  var warnAboutAccessingKey = function () {\n    if (!specialPropKeyWarningShown) {\n      specialPropKeyWarningShown = true;\n      warningWithoutStack$1(false, '%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);\n    }\n  };\n  warnAboutAccessingKey.isReactWarning = true;\n  Object.defineProperty(props, 'key', {\n    get: warnAboutAccessingKey,\n    configurable: true\n  });\n}\n\nfunction defineRefPropWarningGetter(props, displayName) {\n  var warnAboutAccessingRef = function () {\n    if (!specialPropRefWarningShown) {\n      specialPropRefWarningShown = true;\n      warningWithoutStack$1(false, '%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);\n    }\n  };\n  warnAboutAccessingRef.isReactWarning = true;\n  Object.defineProperty(props, 'ref', {\n    get: warnAboutAccessingRef,\n    configurable: true\n  });\n}\n\n/**\n * Factory method to create a new React element. This no longer adheres to\n * the class pattern, so do not use new to call it. Also, no instanceof check\n * will work. Instead test $$typeof field against Symbol.for('react.element') to check\n * if something is a React Element.\n *\n * @param {*} type\n * @param {*} key\n * @param {string|object} ref\n * @param {*} self A *temporary* helper to detect places where `this` is\n * different from the `owner` when React.createElement is called, so that we\n * can warn. We want to get rid of owner and replace string `ref`s with arrow\n * functions, and as long as `this` and owner are the same, there will be no\n * change in behavior.\n * @param {*} source An annotation object (added by a transpiler or otherwise)\n * indicating filename, line number, and/or other information.\n * @param {*} owner\n * @param {*} props\n * @internal\n */\nvar ReactElement = function (type, key, ref, self, source, owner, props) {\n  var element = {\n    // This tag allows us to uniquely identify this as a React Element\n    $$typeof: REACT_ELEMENT_TYPE,\n\n    // Built-in properties that belong on the element\n    type: type,\n    key: key,\n    ref: ref,\n    props: props,\n\n    // Record the component responsible for creating this element.\n    _owner: owner\n  };\n\n  {\n    // The validation flag is currently mutative. We put it on\n    // an external backing store so that we can freeze the whole object.\n    // This can be replaced with a WeakMap once they are implemented in\n    // commonly used development environments.\n    element._store = {};\n\n    // To make comparing ReactElements easier for testing purposes, we make\n    // the validation flag non-enumerable (where possible, which should\n    // include every environment we run tests in), so the test framework\n    // ignores it.\n    Object.defineProperty(element._store, 'validated', {\n      configurable: false,\n      enumerable: false,\n      writable: true,\n      value: false\n    });\n    // self and source are DEV only properties.\n    Object.defineProperty(element, '_self', {\n      configurable: false,\n      enumerable: false,\n      writable: false,\n      value: self\n    });\n    // Two elements created in two different places should be considered\n    // equal for testing purposes and therefore we hide it from enumeration.\n    Object.defineProperty(element, '_source', {\n      configurable: false,\n      enumerable: false,\n      writable: false,\n      value: source\n    });\n    if (Object.freeze) {\n      Object.freeze(element.props);\n      Object.freeze(element);\n    }\n  }\n\n  return element;\n};\n\n/**\n * Create and return a new ReactElement of the given type.\n * See https://reactjs.org/docs/react-api.html#createelement\n */\nfunction createElement(type, config, children) {\n  var propName = void 0;\n\n  // Reserved names are extracted\n  var props = {};\n\n  var key = null;\n  var ref = null;\n  var self = null;\n  var source = null;\n\n  if (config != null) {\n    if (hasValidRef(config)) {\n      ref = config.ref;\n    }\n    if (hasValidKey(config)) {\n      key = '' + config.key;\n    }\n\n    self = config.__self === undefined ? null : config.__self;\n    source = config.__source === undefined ? null : config.__source;\n    // Remaining properties are added to a new props object\n    for (propName in config) {\n      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {\n        props[propName] = config[propName];\n      }\n    }\n  }\n\n  // Children can be more than one argument, and those are transferred onto\n  // the newly allocated props object.\n  var childrenLength = arguments.length - 2;\n  if (childrenLength === 1) {\n    props.children = children;\n  } else if (childrenLength > 1) {\n    var childArray = Array(childrenLength);\n    for (var i = 0; i < childrenLength; i++) {\n      childArray[i] = arguments[i + 2];\n    }\n    {\n      if (Object.freeze) {\n        Object.freeze(childArray);\n      }\n    }\n    props.children = childArray;\n  }\n\n  // Resolve default props\n  if (type && type.defaultProps) {\n    var defaultProps = type.defaultProps;\n    for (propName in defaultProps) {\n      if (props[propName] === undefined) {\n        props[propName] = defaultProps[propName];\n      }\n    }\n  }\n  {\n    if (key || ref) {\n      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;\n      if (key) {\n        defineKeyPropWarningGetter(props, displayName);\n      }\n      if (ref) {\n        defineRefPropWarningGetter(props, displayName);\n      }\n    }\n  }\n  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);\n}\n\n/**\n * Return a function that produces ReactElements of a given type.\n * See https://reactjs.org/docs/react-api.html#createfactory\n */\n\n\nfunction cloneAndReplaceKey(oldElement, newKey) {\n  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);\n\n  return newElement;\n}\n\n/**\n * Clone and return a new ReactElement using element as the starting point.\n * See https://reactjs.org/docs/react-api.html#cloneelement\n */\nfunction cloneElement(element, config, children) {\n  !!(element === null || element === undefined) ? invariant(false, 'React.cloneElement(...): The argument must be a React element, but you passed %s.', element) : void 0;\n\n  var propName = void 0;\n\n  // Original props are copied\n  var props = _assign({}, element.props);\n\n  // Reserved names are extracted\n  var key = element.key;\n  var ref = element.ref;\n  // Self is preserved since the owner is preserved.\n  var self = element._self;\n  // Source is preserved since cloneElement is unlikely to be targeted by a\n  // transpiler, and the original source is probably a better indicator of the\n  // true owner.\n  var source = element._source;\n\n  // Owner will be preserved, unless ref is overridden\n  var owner = element._owner;\n\n  if (config != null) {\n    if (hasValidRef(config)) {\n      // Silently steal the ref from the parent.\n      ref = config.ref;\n      owner = ReactCurrentOwner.current;\n    }\n    if (hasValidKey(config)) {\n      key = '' + config.key;\n    }\n\n    // Remaining properties override existing props\n    var defaultProps = void 0;\n    if (element.type && element.type.defaultProps) {\n      defaultProps = element.type.defaultProps;\n    }\n    for (propName in config) {\n      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {\n        if (config[propName] === undefined && defaultProps !== undefined) {\n          // Resolve default props\n          props[propName] = defaultProps[propName];\n        } else {\n          props[propName] = config[propName];\n        }\n      }\n    }\n  }\n\n  // Children can be more than one argument, and those are transferred onto\n  // the newly allocated props object.\n  var childrenLength = arguments.length - 2;\n  if (childrenLength === 1) {\n    props.children = children;\n  } else if (childrenLength > 1) {\n    var childArray = Array(childrenLength);\n    for (var i = 0; i < childrenLength; i++) {\n      childArray[i] = arguments[i + 2];\n    }\n    props.children = childArray;\n  }\n\n  return ReactElement(element.type, key, ref, self, source, owner, props);\n}\n\n/**\n * Verifies the object is a ReactElement.\n * See https://reactjs.org/docs/react-api.html#isvalidelement\n * @param {?object} object\n * @return {boolean} True if `object` is a ReactElement.\n * @final\n */\nfunction isValidElement(object) {\n  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;\n}\n\nvar SEPARATOR = '.';\nvar SUBSEPARATOR = ':';\n\n/**\n * Escape and wrap key so it is safe to use as a reactid\n *\n * @param {string} key to be escaped.\n * @return {string} the escaped key.\n */\nfunction escape(key) {\n  var escapeRegex = /[=:]/g;\n  var escaperLookup = {\n    '=': '=0',\n    ':': '=2'\n  };\n  var escapedString = ('' + key).replace(escapeRegex, function (match) {\n    return escaperLookup[match];\n  });\n\n  return '$' + escapedString;\n}\n\n/**\n * TODO: Test that a single child and an array with one item have the same key\n * pattern.\n */\n\nvar didWarnAboutMaps = false;\n\nvar userProvidedKeyEscapeRegex = /\\/+/g;\nfunction escapeUserProvidedKey(text) {\n  return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');\n}\n\nvar POOL_SIZE = 10;\nvar traverseContextPool = [];\nfunction getPooledTraverseContext(mapResult, keyPrefix, mapFunction, mapContext) {\n  if (traverseContextPool.length) {\n    var traverseContext = traverseContextPool.pop();\n    traverseContext.result = mapResult;\n    traverseContext.keyPrefix = keyPrefix;\n    traverseContext.func = mapFunction;\n    traverseContext.context = mapContext;\n    traverseContext.count = 0;\n    return traverseContext;\n  } else {\n    return {\n      result: mapResult,\n      keyPrefix: keyPrefix,\n      func: mapFunction,\n      context: mapContext,\n      count: 0\n    };\n  }\n}\n\nfunction releaseTraverseContext(traverseContext) {\n  traverseContext.result = null;\n  traverseContext.keyPrefix = null;\n  traverseContext.func = null;\n  traverseContext.context = null;\n  traverseContext.count = 0;\n  if (traverseContextPool.length < POOL_SIZE) {\n    traverseContextPool.push(traverseContext);\n  }\n}\n\n/**\n * @param {?*} children Children tree container.\n * @param {!string} nameSoFar Name of the key path so far.\n * @param {!function} callback Callback to invoke with each child found.\n * @param {?*} traverseContext Used to pass information throughout the traversal\n * process.\n * @return {!number} The number of children in this subtree.\n */\nfunction traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {\n  var type = typeof children;\n\n  if (type === 'undefined' || type === 'boolean') {\n    // All of the above are perceived as null.\n    children = null;\n  }\n\n  var invokeCallback = false;\n\n  if (children === null) {\n    invokeCallback = true;\n  } else {\n    switch (type) {\n      case 'string':\n      case 'number':\n        invokeCallback = true;\n        break;\n      case 'object':\n        switch (children.$$typeof) {\n          case REACT_ELEMENT_TYPE:\n          case REACT_PORTAL_TYPE:\n            invokeCallback = true;\n        }\n    }\n  }\n\n  if (invokeCallback) {\n    callback(traverseContext, children,\n    // If it's the only child, treat the name as if it was wrapped in an array\n    // so that it's consistent if the number of children grows.\n    nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);\n    return 1;\n  }\n\n  var child = void 0;\n  var nextName = void 0;\n  var subtreeCount = 0; // Count of children found in the current subtree.\n  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;\n\n  if (Array.isArray(children)) {\n    for (var i = 0; i < children.length; i++) {\n      child = children[i];\n      nextName = nextNamePrefix + getComponentKey(child, i);\n      subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);\n    }\n  } else {\n    var iteratorFn = getIteratorFn(children);\n    if (typeof iteratorFn === 'function') {\n      {\n        // Warn about using Maps as children\n        if (iteratorFn === children.entries) {\n          !didWarnAboutMaps ? warning$1(false, 'Using Maps as children is unsupported and will likely yield ' + 'unexpected results. Convert it to a sequence/iterable of keyed ' + 'ReactElements instead.') : void 0;\n          didWarnAboutMaps = true;\n        }\n      }\n\n      var iterator = iteratorFn.call(children);\n      var step = void 0;\n      var ii = 0;\n      while (!(step = iterator.next()).done) {\n        child = step.value;\n        nextName = nextNamePrefix + getComponentKey(child, ii++);\n        subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);\n      }\n    } else if (type === 'object') {\n      var addendum = '';\n      {\n        addendum = ' If you meant to render a collection of children, use an array ' + 'instead.' + ReactDebugCurrentFrame.getStackAddendum();\n      }\n      var childrenString = '' + children;\n      invariant(false, 'Objects are not valid as a React child (found: %s).%s', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum);\n    }\n  }\n\n  return subtreeCount;\n}\n\n/**\n * Traverses children that are typically specified as `props.children`, but\n * might also be specified through attributes:\n *\n * - `traverseAllChildren(this.props.children, ...)`\n * - `traverseAllChildren(this.props.leftPanelChildren, ...)`\n *\n * The `traverseContext` is an optional argument that is passed through the\n * entire traversal. It can be used to store accumulations or anything else that\n * the callback might find relevant.\n *\n * @param {?*} children Children tree object.\n * @param {!function} callback To invoke upon traversing each child.\n * @param {?*} traverseContext Context for traversal.\n * @return {!number} The number of children in this subtree.\n */\nfunction traverseAllChildren(children, callback, traverseContext) {\n  if (children == null) {\n    return 0;\n  }\n\n  return traverseAllChildrenImpl(children, '', callback, traverseContext);\n}\n\n/**\n * Generate a key string that identifies a component within a set.\n *\n * @param {*} component A component that could contain a manual key.\n * @param {number} index Index that is used if a manual key is not provided.\n * @return {string}\n */\nfunction getComponentKey(component, index) {\n  // Do some typechecking here since we call this blindly. We want to ensure\n  // that we don't block potential future ES APIs.\n  if (typeof component === 'object' && component !== null && component.key != null) {\n    // Explicit key\n    return escape(component.key);\n  }\n  // Implicit key determined by the index in the set\n  return index.toString(36);\n}\n\nfunction forEachSingleChild(bookKeeping, child, name) {\n  var func = bookKeeping.func,\n      context = bookKeeping.context;\n\n  func.call(context, child, bookKeeping.count++);\n}\n\n/**\n * Iterates through children that are typically specified as `props.children`.\n *\n * See https://reactjs.org/docs/react-api.html#reactchildrenforeach\n *\n * The provided forEachFunc(child, index) will be called for each\n * leaf child.\n *\n * @param {?*} children Children tree container.\n * @param {function(*, int)} forEachFunc\n * @param {*} forEachContext Context for forEachContext.\n */\nfunction forEachChildren(children, forEachFunc, forEachContext) {\n  if (children == null) {\n    return children;\n  }\n  var traverseContext = getPooledTraverseContext(null, null, forEachFunc, forEachContext);\n  traverseAllChildren(children, forEachSingleChild, traverseContext);\n  releaseTraverseContext(traverseContext);\n}\n\nfunction mapSingleChildIntoContext(bookKeeping, child, childKey) {\n  var result = bookKeeping.result,\n      keyPrefix = bookKeeping.keyPrefix,\n      func = bookKeeping.func,\n      context = bookKeeping.context;\n\n\n  var mappedChild = func.call(context, child, bookKeeping.count++);\n  if (Array.isArray(mappedChild)) {\n    mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, function (c) {\n      return c;\n    });\n  } else if (mappedChild != null) {\n    if (isValidElement(mappedChild)) {\n      mappedChild = cloneAndReplaceKey(mappedChild,\n      // Keep both the (mapped) and old keys if they differ, just as\n      // traverseAllChildren used to do for objects as children\n      keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + '/' : '') + childKey);\n    }\n    result.push(mappedChild);\n  }\n}\n\nfunction mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {\n  var escapedPrefix = '';\n  if (prefix != null) {\n    escapedPrefix = escapeUserProvidedKey(prefix) + '/';\n  }\n  var traverseContext = getPooledTraverseContext(array, escapedPrefix, func, context);\n  traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);\n  releaseTraverseContext(traverseContext);\n}\n\n/**\n * Maps children that are typically specified as `props.children`.\n *\n * See https://reactjs.org/docs/react-api.html#reactchildrenmap\n *\n * The provided mapFunction(child, key, index) will be called for each\n * leaf child.\n *\n * @param {?*} children Children tree container.\n * @param {function(*, int)} func The map function.\n * @param {*} context Context for mapFunction.\n * @return {object} Object containing the ordered map of results.\n */\nfunction mapChildren(children, func, context) {\n  if (children == null) {\n    return children;\n  }\n  var result = [];\n  mapIntoWithKeyPrefixInternal(children, result, null, func, context);\n  return result;\n}\n\n/**\n * Count the number of children that are typically specified as\n * `props.children`.\n *\n * See https://reactjs.org/docs/react-api.html#reactchildrencount\n *\n * @param {?*} children Children tree container.\n * @return {number} The number of children.\n */\nfunction countChildren(children) {\n  return traverseAllChildren(children, function () {\n    return null;\n  }, null);\n}\n\n/**\n * Flatten a children object (typically specified as `props.children`) and\n * return an array with appropriately re-keyed children.\n *\n * See https://reactjs.org/docs/react-api.html#reactchildrentoarray\n */\nfunction toArray(children) {\n  var result = [];\n  mapIntoWithKeyPrefixInternal(children, result, null, function (child) {\n    return child;\n  });\n  return result;\n}\n\n/**\n * Returns the first child in a collection of children and verifies that there\n * is only one child in the collection.\n *\n * See https://reactjs.org/docs/react-api.html#reactchildrenonly\n *\n * The current implementation of this function assumes that a single child gets\n * passed without a wrapper, but the purpose of this helper function is to\n * abstract away the particular structure of children.\n *\n * @param {?object} children Child collection structure.\n * @return {ReactElement} The first and only `ReactElement` contained in the\n * structure.\n */\nfunction onlyChild(children) {\n  !isValidElement(children) ? invariant(false, 'React.Children.only expected to receive a single React element child.') : void 0;\n  return children;\n}\n\nfunction createContext(defaultValue, calculateChangedBits) {\n  if (calculateChangedBits === undefined) {\n    calculateChangedBits = null;\n  } else {\n    {\n      !(calculateChangedBits === null || typeof calculateChangedBits === 'function') ? warningWithoutStack$1(false, 'createContext: Expected the optional second argument to be a ' + 'function. Instead received: %s', calculateChangedBits) : void 0;\n    }\n  }\n\n  var context = {\n    $$typeof: REACT_CONTEXT_TYPE,\n    _calculateChangedBits: calculateChangedBits,\n    // As a workaround to support multiple concurrent renderers, we categorize\n    // some renderers as primary and others as secondary. We only expect\n    // there to be two concurrent renderers at most: React Native (primary) and\n    // Fabric (secondary); React DOM (primary) and React ART (secondary).\n    // Secondary renderers store their context values on separate fields.\n    _currentValue: defaultValue,\n    _currentValue2: defaultValue,\n    // Used to track how many concurrent renderers this context currently\n    // supports within in a single renderer. Such as parallel server rendering.\n    _threadCount: 0,\n    // These are circular\n    Provider: null,\n    Consumer: null\n  };\n\n  context.Provider = {\n    $$typeof: REACT_PROVIDER_TYPE,\n    _context: context\n  };\n\n  var hasWarnedAboutUsingNestedContextConsumers = false;\n  var hasWarnedAboutUsingConsumerProvider = false;\n\n  {\n    // A separate object, but proxies back to the original context object for\n    // backwards compatibility. It has a different $$typeof, so we can properly\n    // warn for the incorrect usage of Context as a Consumer.\n    var Consumer = {\n      $$typeof: REACT_CONTEXT_TYPE,\n      _context: context,\n      _calculateChangedBits: context._calculateChangedBits\n    };\n    // $FlowFixMe: Flow complains about not setting a value, which is intentional here\n    Object.defineProperties(Consumer, {\n      Provider: {\n        get: function () {\n          if (!hasWarnedAboutUsingConsumerProvider) {\n            hasWarnedAboutUsingConsumerProvider = true;\n            warning$1(false, 'Rendering <Context.Consumer.Provider> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Provider> instead?');\n          }\n          return context.Provider;\n        },\n        set: function (_Provider) {\n          context.Provider = _Provider;\n        }\n      },\n      _currentValue: {\n        get: function () {\n          return context._currentValue;\n        },\n        set: function (_currentValue) {\n          context._currentValue = _currentValue;\n        }\n      },\n      _currentValue2: {\n        get: function () {\n          return context._currentValue2;\n        },\n        set: function (_currentValue2) {\n          context._currentValue2 = _currentValue2;\n        }\n      },\n      _threadCount: {\n        get: function () {\n          return context._threadCount;\n        },\n        set: function (_threadCount) {\n          context._threadCount = _threadCount;\n        }\n      },\n      Consumer: {\n        get: function () {\n          if (!hasWarnedAboutUsingNestedContextConsumers) {\n            hasWarnedAboutUsingNestedContextConsumers = true;\n            warning$1(false, 'Rendering <Context.Consumer.Consumer> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');\n          }\n          return context.Consumer;\n        }\n      }\n    });\n    // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty\n    context.Consumer = Consumer;\n  }\n\n  {\n    context._currentRenderer = null;\n    context._currentRenderer2 = null;\n  }\n\n  return context;\n}\n\nfunction lazy(ctor) {\n  return {\n    $$typeof: REACT_LAZY_TYPE,\n    _ctor: ctor,\n    // React uses these fields to store the result.\n    _status: -1,\n    _result: null\n  };\n}\n\nfunction forwardRef(render) {\n  {\n    if (render != null && render.$$typeof === REACT_MEMO_TYPE) {\n      warningWithoutStack$1(false, 'forwardRef requires a render function but received a `memo` ' + 'component. Instead of forwardRef(memo(...)), use ' + 'memo(forwardRef(...)).');\n    } else if (typeof render !== 'function') {\n      warningWithoutStack$1(false, 'forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render);\n    } else {\n      !(\n      // Do not warn for 0 arguments because it could be due to usage of the 'arguments' object\n      render.length === 0 || render.length === 2) ? warningWithoutStack$1(false, 'forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.') : void 0;\n    }\n\n    if (render != null) {\n      !(render.defaultProps == null && render.propTypes == null) ? warningWithoutStack$1(false, 'forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?') : void 0;\n    }\n  }\n\n  return {\n    $$typeof: REACT_FORWARD_REF_TYPE,\n    render: render\n  };\n}\n\nfunction isValidElementType(type) {\n  return typeof type === 'string' || typeof type === 'function' ||\n  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.\n  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);\n}\n\nfunction memo(type, compare) {\n  {\n    if (!isValidElementType(type)) {\n      warningWithoutStack$1(false, 'memo: The first argument must be a component. Instead ' + 'received: %s', type === null ? 'null' : typeof type);\n    }\n  }\n  return {\n    $$typeof: REACT_MEMO_TYPE,\n    type: type,\n    compare: compare === undefined ? null : compare\n  };\n}\n\nfunction resolveDispatcher() {\n  var dispatcher = ReactCurrentOwner.currentDispatcher;\n  !(dispatcher !== null) ? invariant(false, 'Hooks can only be called inside the body of a function component.') : void 0;\n  return dispatcher;\n}\n\nfunction useContext(Context, observedBits) {\n  var dispatcher = resolveDispatcher();\n  {\n    // TODO: add a more generic warning for invalid values.\n    if (Context._context !== undefined) {\n      var realContext = Context._context;\n      // Don't deduplicate because this legitimately causes bugs\n      // and nobody should be using this in existing code.\n      if (realContext.Consumer === Context) {\n        warning$1(false, 'Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be ' + 'removed in a future major release. Did you mean to call useContext(Context) instead?');\n      } else if (realContext.Provider === Context) {\n        warning$1(false, 'Calling useContext(Context.Provider) is not supported. ' + 'Did you mean to call useContext(Context) instead?');\n      }\n    }\n  }\n  return dispatcher.useContext(Context, observedBits);\n}\n\nfunction useState(initialState) {\n  var dispatcher = resolveDispatcher();\n  return dispatcher.useState(initialState);\n}\n\nfunction useReducer(reducer, initialState, initialAction) {\n  var dispatcher = resolveDispatcher();\n  return dispatcher.useReducer(reducer, initialState, initialAction);\n}\n\nfunction useRef(initialValue) {\n  var dispatcher = resolveDispatcher();\n  return dispatcher.useRef(initialValue);\n}\n\nfunction useEffect(create, inputs) {\n  var dispatcher = resolveDispatcher();\n  return dispatcher.useEffect(create, inputs);\n}\n\nfunction useMutationEffect(create, inputs) {\n  var dispatcher = resolveDispatcher();\n  return dispatcher.useMutationEffect(create, inputs);\n}\n\nfunction useLayoutEffect(create, inputs) {\n  var dispatcher = resolveDispatcher();\n  return dispatcher.useLayoutEffect(create, inputs);\n}\n\nfunction useCallback(callback, inputs) {\n  var dispatcher = resolveDispatcher();\n  return dispatcher.useCallback(callback, inputs);\n}\n\nfunction useMemo(create, inputs) {\n  var dispatcher = resolveDispatcher();\n  return dispatcher.useMemo(create, inputs);\n}\n\nfunction useImperativeMethods(ref, create, inputs) {\n  var dispatcher = resolveDispatcher();\n  return dispatcher.useImperativeMethods(ref, create, inputs);\n}\n\n/**\n * ReactElementValidator provides a wrapper around a element factory\n * which validates the props passed to the element. This is intended to be\n * used only in DEV and could be replaced by a static type checker for languages\n * that support it.\n */\n\nvar propTypesMisspellWarningShown = void 0;\n\n{\n  propTypesMisspellWarningShown = false;\n}\n\nfunction getDeclarationErrorAddendum() {\n  if (ReactCurrentOwner.current) {\n    var name = getComponentName(ReactCurrentOwner.current.type);\n    if (name) {\n      return '\\n\\nCheck the render method of `' + name + '`.';\n    }\n  }\n  return '';\n}\n\nfunction getSourceInfoErrorAddendum(elementProps) {\n  if (elementProps !== null && elementProps !== undefined && elementProps.__source !== undefined) {\n    var source = elementProps.__source;\n    var fileName = source.fileName.replace(/^.*[\\\\\\/]/, '');\n    var lineNumber = source.lineNumber;\n    return '\\n\\nCheck your code at ' + fileName + ':' + lineNumber + '.';\n  }\n  return '';\n}\n\n/**\n * Warn if there's no key explicitly set on dynamic arrays of children or\n * object keys are not valid. This allows us to keep track of children between\n * updates.\n */\nvar ownerHasKeyUseWarning = {};\n\nfunction getCurrentComponentErrorInfo(parentType) {\n  var info = getDeclarationErrorAddendum();\n\n  if (!info) {\n    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;\n    if (parentName) {\n      info = '\\n\\nCheck the top-level render call using <' + parentName + '>.';\n    }\n  }\n  return info;\n}\n\n/**\n * Warn if the element doesn't have an explicit key assigned to it.\n * This element is in an array. The array could grow and shrink or be\n * reordered. All children that haven't already been validated are required to\n * have a \"key\" property assigned to it. Error statuses are cached so a warning\n * will only be shown once.\n *\n * @internal\n * @param {ReactElement} element Element that requires a key.\n * @param {*} parentType element's parent's type.\n */\nfunction validateExplicitKey(element, parentType) {\n  if (!element._store || element._store.validated || element.key != null) {\n    return;\n  }\n  element._store.validated = true;\n\n  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);\n  if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {\n    return;\n  }\n  ownerHasKeyUseWarning[currentComponentErrorInfo] = true;\n\n  // Usually the current owner is the offender, but if it accepts children as a\n  // property, it may be the creator of the child that's responsible for\n  // assigning it a key.\n  var childOwner = '';\n  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {\n    // Give the component that originally created this child.\n    childOwner = ' It was passed a child from ' + getComponentName(element._owner.type) + '.';\n  }\n\n  setCurrentlyValidatingElement(element);\n  {\n    warning$1(false, 'Each child in an array or iterator should have a unique \"key\" prop.' + '%s%s See https://fb.me/react-warning-keys for more information.', currentComponentErrorInfo, childOwner);\n  }\n  setCurrentlyValidatingElement(null);\n}\n\n/**\n * Ensure that every element either is passed in a static location, in an\n * array with an explicit keys property defined, or in an object literal\n * with valid key property.\n *\n * @internal\n * @param {ReactNode} node Statically passed child of any type.\n * @param {*} parentType node's parent's type.\n */\nfunction validateChildKeys(node, parentType) {\n  if (typeof node !== 'object') {\n    return;\n  }\n  if (Array.isArray(node)) {\n    for (var i = 0; i < node.length; i++) {\n      var child = node[i];\n      if (isValidElement(child)) {\n        validateExplicitKey(child, parentType);\n      }\n    }\n  } else if (isValidElement(node)) {\n    // This element was passed in a valid location.\n    if (node._store) {\n      node._store.validated = true;\n    }\n  } else if (node) {\n    var iteratorFn = getIteratorFn(node);\n    if (typeof iteratorFn === 'function') {\n      // Entry iterators used to provide implicit keys,\n      // but now we print a separate warning for them later.\n      if (iteratorFn !== node.entries) {\n        var iterator = iteratorFn.call(node);\n        var step = void 0;\n        while (!(step = iterator.next()).done) {\n          if (isValidElement(step.value)) {\n            validateExplicitKey(step.value, parentType);\n          }\n        }\n      }\n    }\n  }\n}\n\n/**\n * Given an element, validate that its props follow the propTypes definition,\n * provided by the type.\n *\n * @param {ReactElement} element\n */\nfunction validatePropTypes(element) {\n  var type = element.type;\n  var name = void 0,\n      propTypes = void 0;\n  if (typeof type === 'function') {\n    // Class or function component\n    name = type.displayName || type.name;\n    propTypes = type.propTypes;\n  } else if (typeof type === 'object' && type !== null && type.$$typeof === REACT_FORWARD_REF_TYPE) {\n    // ForwardRef\n    var functionName = type.render.displayName || type.render.name || '';\n    name = type.displayName || (functionName !== '' ? 'ForwardRef(' + functionName + ')' : 'ForwardRef');\n    propTypes = type.propTypes;\n  } else {\n    return;\n  }\n  if (propTypes) {\n    setCurrentlyValidatingElement(element);\n    checkPropTypes(propTypes, element.props, 'prop', name, ReactDebugCurrentFrame.getStackAddendum);\n    setCurrentlyValidatingElement(null);\n  } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {\n    propTypesMisspellWarningShown = true;\n    warningWithoutStack$1(false, 'Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', name || 'Unknown');\n  }\n  if (typeof type.getDefaultProps === 'function') {\n    !type.getDefaultProps.isReactClassApproved ? warningWithoutStack$1(false, 'getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.') : void 0;\n  }\n}\n\n/**\n * Given a fragment, validate that it can only be provided with fragment props\n * @param {ReactElement} fragment\n */\nfunction validateFragmentProps(fragment) {\n  setCurrentlyValidatingElement(fragment);\n\n  var keys = Object.keys(fragment.props);\n  for (var i = 0; i < keys.length; i++) {\n    var key = keys[i];\n    if (key !== 'children' && key !== 'key') {\n      warning$1(false, 'Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);\n      break;\n    }\n  }\n\n  if (fragment.ref !== null) {\n    warning$1(false, 'Invalid attribute `ref` supplied to `React.Fragment`.');\n  }\n\n  setCurrentlyValidatingElement(null);\n}\n\nfunction createElementWithValidation(type, props, children) {\n  var validType = isValidElementType(type);\n\n  // We warn in this case but don't throw. We expect the element creation to\n  // succeed and there will likely be errors in render.\n  if (!validType) {\n    var info = '';\n    if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {\n      info += ' You likely forgot to export your component from the file ' + \"it's defined in, or you might have mixed up default and named imports.\";\n    }\n\n    var sourceInfo = getSourceInfoErrorAddendum(props);\n    if (sourceInfo) {\n      info += sourceInfo;\n    } else {\n      info += getDeclarationErrorAddendum();\n    }\n\n    var typeString = void 0;\n    if (type === null) {\n      typeString = 'null';\n    } else if (Array.isArray(type)) {\n      typeString = 'array';\n    } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {\n      typeString = '<' + (getComponentName(type.type) || 'Unknown') + ' />';\n      info = ' Did you accidentally export a JSX literal instead of a component?';\n    } else {\n      typeString = typeof type;\n    }\n\n    warning$1(false, 'React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);\n  }\n\n  var element = createElement.apply(this, arguments);\n\n  // The result can be nullish if a mock or a custom function is used.\n  // TODO: Drop this when these are no longer allowed as the type argument.\n  if (element == null) {\n    return element;\n  }\n\n  // Skip key warning if the type isn't valid since our key validation logic\n  // doesn't expect a non-string/function type and can throw confusing errors.\n  // We don't want exception behavior to differ between dev and prod.\n  // (Rendering will throw with a helpful message and as soon as the type is\n  // fixed, the key warnings will appear.)\n  if (validType) {\n    for (var i = 2; i < arguments.length; i++) {\n      validateChildKeys(arguments[i], type);\n    }\n  }\n\n  if (type === REACT_FRAGMENT_TYPE) {\n    validateFragmentProps(element);\n  } else {\n    validatePropTypes(element);\n  }\n\n  return element;\n}\n\nfunction createFactoryWithValidation(type) {\n  var validatedFactory = createElementWithValidation.bind(null, type);\n  validatedFactory.type = type;\n  // Legacy hook: remove it\n  {\n    Object.defineProperty(validatedFactory, 'type', {\n      enumerable: false,\n      get: function () {\n        lowPriorityWarning$1(false, 'Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');\n        Object.defineProperty(this, 'type', {\n          value: type\n        });\n        return type;\n      }\n    });\n  }\n\n  return validatedFactory;\n}\n\nfunction cloneElementWithValidation(element, props, children) {\n  var newElement = cloneElement.apply(this, arguments);\n  for (var i = 2; i < arguments.length; i++) {\n    validateChildKeys(arguments[i], newElement.type);\n  }\n  validatePropTypes(newElement);\n  return newElement;\n}\n\nvar React = {\n  Children: {\n    map: mapChildren,\n    forEach: forEachChildren,\n    count: countChildren,\n    toArray: toArray,\n    only: onlyChild\n  },\n\n  createRef: createRef,\n  Component: Component,\n  PureComponent: PureComponent,\n\n  createContext: createContext,\n  forwardRef: forwardRef,\n  lazy: lazy,\n  memo: memo,\n\n  Fragment: REACT_FRAGMENT_TYPE,\n  StrictMode: REACT_STRICT_MODE_TYPE,\n  Suspense: REACT_SUSPENSE_TYPE,\n\n  createElement: createElementWithValidation,\n  cloneElement: cloneElementWithValidation,\n  createFactory: createFactoryWithValidation,\n  isValidElement: isValidElement,\n\n  version: ReactVersion,\n\n  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: ReactSharedInternals\n};\n\nif (enableStableConcurrentModeAPIs) {\n  React.ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;\n  React.Profiler = REACT_PROFILER_TYPE;\n} else {\n  React.unstable_ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;\n  React.unstable_Profiler = REACT_PROFILER_TYPE;\n}\n\nif (enableHooks) {\n  React.useCallback = useCallback;\n  React.useContext = useContext;\n  React.useEffect = useEffect;\n  React.useImperativeMethods = useImperativeMethods;\n  React.useLayoutEffect = useLayoutEffect;\n  React.useMemo = useMemo;\n  React.useMutationEffect = useMutationEffect;\n  React.useReducer = useReducer;\n  React.useRef = useRef;\n  React.useState = useState;\n}\n\n\n\nvar React$2 = Object.freeze({\n\tdefault: React\n});\n\nvar React$3 = ( React$2 && React ) || React$2;\n\n// TODO: decide on the top-level export form.\n// This is hacky but makes it work with both Rollup and Jest.\nvar react = React$3.default || React$3;\n\nmodule.exports = react;\n  })();\n}\n\n\n//# sourceURL=webpack://mortgage-calculator-react/./node_modules/react/cjs/react.development.js?"
                );
              },
              "./node_modules/react/index.js": function (
                module,
                exports,
                __webpack_require__
              ) {
                "use strict";
                eval(
                  '\n\nif (false) {} else {\n  module.exports = __webpack_require__(/*! ./cjs/react.development.js */ "./node_modules/react/cjs/react.development.js");\n}\n\n\n//# sourceURL=webpack://mortgage-calculator-react/./node_modules/react/index.js?'
                );
              },
              "./node_modules/style-loader/lib/addStyles.js": function (
                module,
                exports,
                __webpack_require__
              ) {
                eval(
                  '/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n\nvar stylesInDom = {};\n\nvar\tmemoize = function (fn) {\n\tvar memo;\n\n\treturn function () {\n\t\tif (typeof memo === "undefined") memo = fn.apply(this, arguments);\n\t\treturn memo;\n\t};\n};\n\nvar isOldIE = memoize(function () {\n\t// Test for IE <= 9 as proposed by Browserhacks\n\t// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n\t// Tests for existence of standard globals is to allow style-loader\n\t// to operate correctly into non-standard environments\n\t// @see https://github.com/webpack-contrib/style-loader/issues/177\n\treturn window && document && document.all && !window.atob;\n});\n\nvar getTarget = function (target) {\n  return document.querySelector(target);\n};\n\nvar getElement = (function (fn) {\n\tvar memo = {};\n\n\treturn function(target) {\n                // If passing function in options, then use it for resolve "head" element.\n                // Useful for Shadow Root style i.e\n                // {\n                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }\n                // }\n                if (typeof target === \'function\') {\n                        return target();\n                }\n                if (typeof memo[target] === "undefined") {\n\t\t\tvar styleTarget = getTarget.call(this, target);\n\t\t\t// Special case to return head of iframe instead of iframe itself\n\t\t\tif (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n\t\t\t\ttry {\n\t\t\t\t\t// This will throw an exception if access to iframe is blocked\n\t\t\t\t\t// due to cross-origin restrictions\n\t\t\t\t\tstyleTarget = styleTarget.contentDocument.head;\n\t\t\t\t} catch(e) {\n\t\t\t\t\tstyleTarget = null;\n\t\t\t\t}\n\t\t\t}\n\t\t\tmemo[target] = styleTarget;\n\t\t}\n\t\treturn memo[target]\n\t};\n})();\n\nvar singleton = null;\nvar\tsingletonCounter = 0;\nvar\tstylesInsertedAtTop = [];\n\nvar\tfixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");\n\nmodule.exports = function(list, options) {\n\tif (typeof DEBUG !== "undefined" && DEBUG) {\n\t\tif (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");\n\t}\n\n\toptions = options || {};\n\n\toptions.attrs = typeof options.attrs === "object" ? options.attrs : {};\n\n\t// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n\t// tags it will allow on a page\n\tif (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();\n\n\t// By default, add <style> tags to the <head> element\n        if (!options.insertInto) options.insertInto = "head";\n\n\t// By default, add <style> tags to the bottom of the target\n\tif (!options.insertAt) options.insertAt = "bottom";\n\n\tvar styles = listToStyles(list, options);\n\n\taddStylesToDom(styles, options);\n\n\treturn function update (newList) {\n\t\tvar mayRemove = [];\n\n\t\tfor (var i = 0; i < styles.length; i++) {\n\t\t\tvar item = styles[i];\n\t\t\tvar domStyle = stylesInDom[item.id];\n\n\t\t\tdomStyle.refs--;\n\t\t\tmayRemove.push(domStyle);\n\t\t}\n\n\t\tif(newList) {\n\t\t\tvar newStyles = listToStyles(newList, options);\n\t\t\taddStylesToDom(newStyles, options);\n\t\t}\n\n\t\tfor (var i = 0; i < mayRemove.length; i++) {\n\t\t\tvar domStyle = mayRemove[i];\n\n\t\t\tif(domStyle.refs === 0) {\n\t\t\t\tfor (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();\n\n\t\t\t\tdelete stylesInDom[domStyle.id];\n\t\t\t}\n\t\t}\n\t};\n};\n\nfunction addStylesToDom (styles, options) {\n\tfor (var i = 0; i < styles.length; i++) {\n\t\tvar item = styles[i];\n\t\tvar domStyle = stylesInDom[item.id];\n\n\t\tif(domStyle) {\n\t\t\tdomStyle.refs++;\n\n\t\t\tfor(var j = 0; j < domStyle.parts.length; j++) {\n\t\t\t\tdomStyle.parts[j](item.parts[j]);\n\t\t\t}\n\n\t\t\tfor(; j < item.parts.length; j++) {\n\t\t\t\tdomStyle.parts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\t\t} else {\n\t\t\tvar parts = [];\n\n\t\t\tfor(var j = 0; j < item.parts.length; j++) {\n\t\t\t\tparts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\n\t\t\tstylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};\n\t\t}\n\t}\n}\n\nfunction listToStyles (list, options) {\n\tvar styles = [];\n\tvar newStyles = {};\n\n\tfor (var i = 0; i < list.length; i++) {\n\t\tvar item = list[i];\n\t\tvar id = options.base ? item[0] + options.base : item[0];\n\t\tvar css = item[1];\n\t\tvar media = item[2];\n\t\tvar sourceMap = item[3];\n\t\tvar part = {css: css, media: media, sourceMap: sourceMap};\n\n\t\tif(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});\n\t\telse newStyles[id].parts.push(part);\n\t}\n\n\treturn styles;\n}\n\nfunction insertStyleElement (options, style) {\n\tvar target = getElement(options.insertInto)\n\n\tif (!target) {\n\t\tthrow new Error("Couldn\'t find a style target. This probably means that the value for the \'insertInto\' parameter is invalid.");\n\t}\n\n\tvar lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];\n\n\tif (options.insertAt === "top") {\n\t\tif (!lastStyleElementInsertedAtTop) {\n\t\t\ttarget.insertBefore(style, target.firstChild);\n\t\t} else if (lastStyleElementInsertedAtTop.nextSibling) {\n\t\t\ttarget.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);\n\t\t} else {\n\t\t\ttarget.appendChild(style);\n\t\t}\n\t\tstylesInsertedAtTop.push(style);\n\t} else if (options.insertAt === "bottom") {\n\t\ttarget.appendChild(style);\n\t} else if (typeof options.insertAt === "object" && options.insertAt.before) {\n\t\tvar nextSibling = getElement(options.insertInto + " " + options.insertAt.before);\n\t\ttarget.insertBefore(style, nextSibling);\n\t} else {\n\t\tthrow new Error("[Style Loader]\\n\\n Invalid value for parameter \'insertAt\' (\'options.insertAt\') found.\\n Must be \'top\', \'bottom\', or Object.\\n (https://github.com/webpack-contrib/style-loader#insertat)\\n");\n\t}\n}\n\nfunction removeStyleElement (style) {\n\tif (style.parentNode === null) return false;\n\tstyle.parentNode.removeChild(style);\n\n\tvar idx = stylesInsertedAtTop.indexOf(style);\n\tif(idx >= 0) {\n\t\tstylesInsertedAtTop.splice(idx, 1);\n\t}\n}\n\nfunction createStyleElement (options) {\n\tvar style = document.createElement("style");\n\n\toptions.attrs.type = "text/css";\n\n\taddAttrs(style, options.attrs);\n\tinsertStyleElement(options, style);\n\n\treturn style;\n}\n\nfunction createLinkElement (options) {\n\tvar link = document.createElement("link");\n\n\toptions.attrs.type = "text/css";\n\toptions.attrs.rel = "stylesheet";\n\n\taddAttrs(link, options.attrs);\n\tinsertStyleElement(options, link);\n\n\treturn link;\n}\n\nfunction addAttrs (el, attrs) {\n\tObject.keys(attrs).forEach(function (key) {\n\t\tel.setAttribute(key, attrs[key]);\n\t});\n}\n\nfunction addStyle (obj, options) {\n\tvar style, update, remove, result;\n\n\t// If a transform function was defined, run it on the css\n\tif (options.transform && obj.css) {\n\t    result = options.transform(obj.css);\n\n\t    if (result) {\n\t    \t// If transform returns a value, use that instead of the original css.\n\t    \t// This allows running runtime transformations on the css.\n\t    \tobj.css = result;\n\t    } else {\n\t    \t// If the transform function returns a falsy value, don\'t add this css.\n\t    \t// This allows conditional loading of css\n\t    \treturn function() {\n\t    \t\t// noop\n\t    \t};\n\t    }\n\t}\n\n\tif (options.singleton) {\n\t\tvar styleIndex = singletonCounter++;\n\n\t\tstyle = singleton || (singleton = createStyleElement(options));\n\n\t\tupdate = applyToSingletonTag.bind(null, style, styleIndex, false);\n\t\tremove = applyToSingletonTag.bind(null, style, styleIndex, true);\n\n\t} else if (\n\t\tobj.sourceMap &&\n\t\ttypeof URL === "function" &&\n\t\ttypeof URL.createObjectURL === "function" &&\n\t\ttypeof URL.revokeObjectURL === "function" &&\n\t\ttypeof Blob === "function" &&\n\t\ttypeof btoa === "function"\n\t) {\n\t\tstyle = createLinkElement(options);\n\t\tupdate = updateLink.bind(null, style, options);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\n\t\t\tif(style.href) URL.revokeObjectURL(style.href);\n\t\t};\n\t} else {\n\t\tstyle = createStyleElement(options);\n\t\tupdate = applyToTag.bind(null, style);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\t\t};\n\t}\n\n\tupdate(obj);\n\n\treturn function updateStyle (newObj) {\n\t\tif (newObj) {\n\t\t\tif (\n\t\t\t\tnewObj.css === obj.css &&\n\t\t\t\tnewObj.media === obj.media &&\n\t\t\t\tnewObj.sourceMap === obj.sourceMap\n\t\t\t) {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tupdate(obj = newObj);\n\t\t} else {\n\t\t\tremove();\n\t\t}\n\t};\n}\n\nvar replaceText = (function () {\n\tvar textStore = [];\n\n\treturn function (index, replacement) {\n\t\ttextStore[index] = replacement;\n\n\t\treturn textStore.filter(Boolean).join(\'\\n\');\n\t};\n})();\n\nfunction applyToSingletonTag (style, index, remove, obj) {\n\tvar css = remove ? "" : obj.css;\n\n\tif (style.styleSheet) {\n\t\tstyle.styleSheet.cssText = replaceText(index, css);\n\t} else {\n\t\tvar cssNode = document.createTextNode(css);\n\t\tvar childNodes = style.childNodes;\n\n\t\tif (childNodes[index]) style.removeChild(childNodes[index]);\n\n\t\tif (childNodes.length) {\n\t\t\tstyle.insertBefore(cssNode, childNodes[index]);\n\t\t} else {\n\t\t\tstyle.appendChild(cssNode);\n\t\t}\n\t}\n}\n\nfunction applyToTag (style, obj) {\n\tvar css = obj.css;\n\tvar media = obj.media;\n\n\tif(media) {\n\t\tstyle.setAttribute("media", media)\n\t}\n\n\tif(style.styleSheet) {\n\t\tstyle.styleSheet.cssText = css;\n\t} else {\n\t\twhile(style.firstChild) {\n\t\t\tstyle.removeChild(style.firstChild);\n\t\t}\n\n\t\tstyle.appendChild(document.createTextNode(css));\n\t}\n}\n\nfunction updateLink (link, options, obj) {\n\tvar css = obj.css;\n\tvar sourceMap = obj.sourceMap;\n\n\t/*\n\t\tIf convertToAbsoluteUrls isn\'t defined, but sourcemaps are enabled\n\t\tand there is no publicPath defined then lets turn convertToAbsoluteUrls\n\t\ton by default.  Otherwise default to the convertToAbsoluteUrls option\n\t\tdirectly\n\t*/\n\tvar autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;\n\n\tif (options.convertToAbsoluteUrls || autoFixUrls) {\n\t\tcss = fixUrls(css);\n\t}\n\n\tif (sourceMap) {\n\t\t// http://stackoverflow.com/a/26603875\n\t\tcss += "\\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";\n\t}\n\n\tvar blob = new Blob([css], { type: "text/css" });\n\n\tvar oldSrc = link.href;\n\n\tlink.href = URL.createObjectURL(blob);\n\n\tif(oldSrc) URL.revokeObjectURL(oldSrc);\n}\n\n\n//# sourceURL=webpack://mortgage-calculator-react/./node_modules/style-loader/lib/addStyles.js?'
                );
              },
              "./node_modules/style-loader/lib/urls.js": function (
                module,
                exports
              ) {
                eval(
                  '\n/**\n * When source maps are enabled, `style-loader` uses a link element with a data-uri to\n * embed the css on the page. This breaks all relative urls because now they are relative to a\n * bundle instead of the current page.\n *\n * One solution is to only use full urls, but that may be impossible.\n *\n * Instead, this function "fixes" the relative urls to be absolute according to the current page location.\n *\n * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.\n *\n */\n\nmodule.exports = function (css) {\n  // get current location\n  var location = typeof window !== "undefined" && window.location;\n\n  if (!location) {\n    throw new Error("fixUrls requires window.location");\n  }\n\n\t// blank or null?\n\tif (!css || typeof css !== "string") {\n\t  return css;\n  }\n\n  var baseUrl = location.protocol + "//" + location.host;\n  var currentDir = baseUrl + location.pathname.replace(/\\/[^\\/]*$/, "/");\n\n\t// convert each url(...)\n\t/*\n\tThis regular expression is just a way to recursively match brackets within\n\ta string.\n\n\t /url\\s*\\(  = Match on the word "url" with any whitespace after it and then a parens\n\t   (  = Start a capturing group\n\t     (?:  = Start a non-capturing group\n\t         [^)(]  = Match anything that isn\'t a parentheses\n\t         |  = OR\n\t         \\(  = Match a start parentheses\n\t             (?:  = Start another non-capturing groups\n\t                 [^)(]+  = Match anything that isn\'t a parentheses\n\t                 |  = OR\n\t                 \\(  = Match a start parentheses\n\t                     [^)(]*  = Match anything that isn\'t a parentheses\n\t                 \\)  = Match a end parentheses\n\t             )  = End Group\n              *\\) = Match anything and then a close parens\n          )  = Close non-capturing group\n          *  = Match anything\n       )  = Close capturing group\n\t \\)  = Match a close parens\n\n\t /gi  = Get all matches, not the first.  Be case insensitive.\n\t */\n\tvar fixedCss = css.replace(/url\\s*\\(((?:[^)(]|\\((?:[^)(]+|\\([^)(]*\\))*\\))*)\\)/gi, function(fullMatch, origUrl) {\n\t\t// strip quotes (if they exist)\n\t\tvar unquotedOrigUrl = origUrl\n\t\t\t.trim()\n\t\t\t.replace(/^"(.*)"$/, function(o, $1){ return $1; })\n\t\t\t.replace(/^\'(.*)\'$/, function(o, $1){ return $1; });\n\n\t\t// already a full url? no change\n\t\tif (/^(#|data:|http:\\/\\/|https:\\/\\/|file:\\/\\/\\/|\\s*$)/i.test(unquotedOrigUrl)) {\n\t\t  return fullMatch;\n\t\t}\n\n\t\t// convert the url to a full url\n\t\tvar newUrl;\n\n\t\tif (unquotedOrigUrl.indexOf("//") === 0) {\n\t\t  \t//TODO: should we add protocol?\n\t\t\tnewUrl = unquotedOrigUrl;\n\t\t} else if (unquotedOrigUrl.indexOf("/") === 0) {\n\t\t\t// path should be relative to the base url\n\t\t\tnewUrl = baseUrl + unquotedOrigUrl; // already starts with \'/\'\n\t\t} else {\n\t\t\t// path should be relative to current directory\n\t\t\tnewUrl = currentDir + unquotedOrigUrl.replace(/^\\.\\//, ""); // Strip leading \'./\'\n\t\t}\n\n\t\t// send back the fixed url(...)\n\t\treturn "url(" + JSON.stringify(newUrl) + ")";\n\t});\n\n\t// send back the fixed css\n\treturn fixedCss;\n};\n\n\n//# sourceURL=webpack://mortgage-calculator-react/./node_modules/style-loader/lib/urls.js?'
                );
              },
              "./package.json": function (module) {
                eval(
                  'module.exports = {"name":"mortgage-calculator-react","version":"0.1.3","description":"Simple mortgage calculator as a React Component.","repository":{"type":"git","url":"https://github.com/tommymcglynn/mortgage-calculator-react.git"},"main":"dist/MortgageCalculator.js","scripts":{"test":"jest","prepare":"webpack --config ./webpack.config.js --mode development","buildembed":"webpack --config ./embed-webpack.config.js --mode production","start":"webpack-dev-server --config ./sample-webpack.config.js --mode development"},"files":["dist"],"author":"Tommy McGlynn","license":"MIT","devDependencies":{"babel-cli":"^6.26.0","babel-core":"^6.26.3","babel-loader":"^7.1.5","babel-preset-env":"^1.7.0","babel-preset-react":"^6.24.1","babel-preset-stage-2":"^6.24.1","css-loader":"^0.28.11","jest":"^23.6.0","macaddress":"^0.2.9","style-loader":"^0.20.3","webpack":"^4.27.1","webpack-cli":"^3.1.2","webpack-dev-server":"^3.1.10"},"dependencies":{"mortgage-js":"^0.1.2","react":"^16.6.3","react-dom":"^16.6.3"}};\n\n//# sourceURL=webpack://mortgage-calculator-react/./package.json?'
                );
              },
              "./src/DefaultStyle.css": function (
                module,
                exports,
                __webpack_require__
              ) {
                eval(
                  '\nvar content = __webpack_require__(/*! !../node_modules/css-loader!./DefaultStyle.css */ "./node_modules/css-loader/index.js!./src/DefaultStyle.css");\n\nif(typeof content === \'string\') content = [[module.i, content, \'\']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {"hmr":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack://mortgage-calculator-react/./src/DefaultStyle.css?'
                );
              },
              "./src/IconInput.js": function (
                module,
                exports,
                __webpack_require__
              ) {
                "use strict";
                eval(
                  '\n\nObject.defineProperty(exports, "__esModule", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar IconInput = function (_React$Component) {\n    _inherits(IconInput, _React$Component);\n\n    function IconInput() {\n        _classCallCheck(this, IconInput);\n\n        return _possibleConstructorReturn(this, (IconInput.__proto__ || Object.getPrototypeOf(IconInput)).apply(this, arguments));\n    }\n\n    _createClass(IconInput, [{\n        key: "render",\n        value: function render() {\n            var _props = this.props,\n                styles = _props.styles,\n                icon = _props.icon;\n\n            return _react2.default.createElement(\n                "div",\n                { className: styles.inputField },\n                _react2.default.createElement(\n                    "div",\n                    { className: styles.inputIcon },\n                    icon\n                ),\n                _react2.default.createElement("input", this.props)\n            );\n        }\n    }]);\n\n    return IconInput;\n}(_react2.default.Component);\n\nexports.default = IconInput;\n\n//# sourceURL=webpack://mortgage-calculator-react/./src/IconInput.js?'
                );
              },
              "./src/InputWrapper.js": function (
                module,
                exports,
                __webpack_require__
              ) {
                "use strict";
                eval(
                  '\n\nObject.defineProperty(exports, "__esModule", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar InputWrapper = function (_React$Component) {\n    _inherits(InputWrapper, _React$Component);\n\n    function InputWrapper() {\n        _classCallCheck(this, InputWrapper);\n\n        return _possibleConstructorReturn(this, (InputWrapper.__proto__ || Object.getPrototypeOf(InputWrapper)).apply(this, arguments));\n    }\n\n    _createClass(InputWrapper, [{\n        key: "render",\n        value: function render() {\n            var _props = this.props,\n                label = _props.label,\n                styles = _props.styles,\n                children = _props.children,\n                subtext = _props.subtext;\n\n            var i = 0;\n            var inputs = _react2.default.Children.toArray(children).map(function (child) {\n                return _react2.default.createElement(\n                    "div",\n                    { className: styles.inputSection, key: i++ },\n                    child\n                );\n            });\n            return _react2.default.createElement(\n                "div",\n                { className: styles.inputWrapper },\n                _react2.default.createElement(\n                    "label",\n                    null,\n                    label\n                ),\n                inputs,\n                subtext\n            );\n        }\n    }]);\n\n    return InputWrapper;\n}(_react2.default.Component);\n\nexports.default = InputWrapper;\n\n//# sourceURL=webpack://mortgage-calculator-react/./src/InputWrapper.js?'
                );
              },
              "./src/MortgageCalculator.js": function (
                module,
                exports,
                __webpack_require__
              ) {
                "use strict";
                eval(
                  '\n\nObject.defineProperty(exports, "__esModule", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _Switch = __webpack_require__(/*! ./Switch */ "./src/Switch.js");\n\nvar _Switch2 = _interopRequireDefault(_Switch);\n\nvar _Util = __webpack_require__(/*! ./Util */ "./src/Util.js");\n\nvar _Util2 = _interopRequireDefault(_Util);\n\nvar _DefaultStyle = __webpack_require__(/*! ./DefaultStyle.css */ "./src/DefaultStyle.css");\n\nvar _DefaultStyle2 = _interopRequireDefault(_DefaultStyle);\n\nvar _PaymentSchedule = __webpack_require__(/*! ./PaymentSchedule */ "./src/PaymentSchedule.js");\n\nvar _PaymentSchedule2 = _interopRequireDefault(_PaymentSchedule);\n\nvar _InputWrapper = __webpack_require__(/*! ./InputWrapper */ "./src/InputWrapper.js");\n\nvar _InputWrapper2 = _interopRequireDefault(_InputWrapper);\n\nvar _IconInput = __webpack_require__(/*! ./IconInput */ "./src/IconInput.js");\n\nvar _IconInput2 = _interopRequireDefault(_IconInput);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar React = __webpack_require__(/*! react */ "./node_modules/react/index.js");\nvar mortgageJs = __webpack_require__(/*! mortgage-js */ "./node_modules/mortgage-js/index.js");\nvar pjson = __webpack_require__(/*! ../package.json */ "./package.json");\n\n\nvar DefaultPrice = 500000;\nvar DefaultDownPayment = 100000;\nvar DefaultInterestRate = 0.045;\nvar DefaultTermMonths = 360;\nvar DefaultTaxRate = 0.0125;\nvar DefaultInsuranceRate = 0.0014;\nvar DefaultMortgageInsuranceRate = 0.011;\nvar DefaultDownPaymentPercent = 0.2;\nvar DefaultAdditionalPrincipalPayment = 0;\n\nvar ValidTermMonths = [60, 120, 180, 240, 360];\n\nvar MortgageCalculator = function (_React$Component) {\n    _inherits(MortgageCalculator, _React$Component);\n\n    function MortgageCalculator(props) {\n        _classCallCheck(this, MortgageCalculator);\n\n        var _this = _possibleConstructorReturn(this, (MortgageCalculator.__proto__ || Object.getPrototypeOf(MortgageCalculator)).call(this, props));\n\n        _this.mortgageCalculator = mortgageJs.createMortgageCalculator();\n\n\n        _this.mortgageCalculator.totalPrice = _Util2.default.numberValueOrDefault(props.price, 0, DefaultPrice);\n        _this.mortgageCalculator.downPayment = _Util2.default.numberValueOrDefault(props.downPayment, 0, DefaultDownPayment);\n        _this.mortgageCalculator.interestRate = _Util2.default.numberValueOrDefault(props.interestRate, 0, DefaultInterestRate);\n        _this.mortgageCalculator.months = _Util2.default.numberValueInSetOrDefault(props.months, ValidTermMonths, DefaultTermMonths);\n        _this.mortgageCalculator.taxRate = _Util2.default.numberValueOrDefault(props.taxRate, 0, DefaultTaxRate);\n        _this.mortgageCalculator.insuranceRate = _Util2.default.numberValueOrDefault(props.insuranceRate, 0, DefaultInsuranceRate);\n        _this.mortgageCalculator.mortgageInsuranceRate = _Util2.default.numberValueOrDefault(props.mortgageInsuranceRate, 0, DefaultMortgageInsuranceRate);\n        _this.mortgageCalculator.mortgageInsuranceEnabled = props.mortgageInsuranceEnabled !== false;\n        _this.mortgageCalculator.additionalPrincipal = _Util2.default.numberValueOrDefault(props.additionalPrincipalPayment, 0, DefaultAdditionalPrincipalPayment);\n\n        _this.state = {\n            totalPrice: _this.mortgageCalculator.totalPrice,\n            downPayment: _this.mortgageCalculator.downPayment,\n            mortgageInsuranceEnabled: _this.mortgageCalculator.mortgageInsuranceEnabled,\n            additionalPrincipal: 0,\n            mortgage: _this.mortgageCalculator.calculatePayment()\n        };\n\n        _this.onPriceChange = _this.onPriceChange.bind(_this);\n        _this.onDownPaymentChange = _this.onDownPaymentChange.bind(_this);\n        _this.onDownPaymentPercentChange = _this.onDownPaymentPercentChange.bind(_this);\n        _this.onInterestRateChange = _this.onInterestRateChange.bind(_this);\n        _this.onTermMonthsChange = _this.onTermMonthsChange.bind(_this);\n        _this.onAdditionalPrincipalChange = _this.onAdditionalPrincipalChange.bind(_this);\n        _this.onTaxRateChange = _this.onTaxRateChange.bind(_this);\n        _this.onInsuranceRateChange = _this.onInsuranceRateChange.bind(_this);\n        _this.onMortgageInsuranceRateChange = _this.onMortgageInsuranceRateChange.bind(_this);\n        _this.onMortgageInsuranceEnabledChange = _this.onMortgageInsuranceEnabledChange.bind(_this);\n        return _this;\n    }\n\n    _createClass(MortgageCalculator, [{\n        key: "onMortgageChange",\n        value: function onMortgageChange(mortgage) {}\n    }, {\n        key: "onPriceChange",\n        value: function onPriceChange(e) {\n            var value = e.target.value;\n            if (value.length === 0) {\n                this.setState({\n                    totalPrice: value\n                });\n                return;\n            }\n            value = _Util2.default.moneyToValue(value);\n            if (isNaN(value)) return;\n            this.mortgageCalculator.totalPrice = value;\n            var downPaymentPercent = this.state.totalPrice > 0 ? this.state.downPayment / this.state.totalPrice : DefaultDownPaymentPercent;\n            var downPayment = downPaymentPercent * value;\n            this.mortgageCalculator.downPayment = downPayment;\n            var mortgage = this.mortgageCalculator.calculatePayment();\n            this.setState({\n                totalPrice: value,\n                downPayment: downPayment,\n                mortgage: mortgage\n            });\n            this.onMortgageChange(mortgage);\n        }\n    }, {\n        key: "onDownPaymentChange",\n        value: function onDownPaymentChange(e) {\n            var value = e.target.value;\n            if (value.length === 0) {\n                this.setState({\n                    downPayment: value\n                });\n                return;\n            }\n            value = _Util2.default.moneyToValue(value);\n            if (isNaN(value)) return;\n            this.mortgageCalculator.downPayment = value;\n            var mortgage = this.mortgageCalculator.calculatePayment();\n            this.setState({\n                downPayment: value,\n                mortgage: mortgage\n            });\n            this.onMortgageChange(mortgage);\n        }\n    }, {\n        key: "onDownPaymentPercentChange",\n        value: function onDownPaymentPercentChange(e) {\n            var value = e.target.value;\n            if (value.length === 0) {\n                this.setState({\n                    downPayment: value\n                });\n                return;\n            }\n            if (isNaN(value)) return;\n            var downPayment = Math.round(value / 100 * this.state.totalPrice);\n            this.mortgageCalculator.downPayment = downPayment;\n            var mortgage = this.mortgageCalculator.calculatePayment();\n            this.setState({\n                downPayment: downPayment,\n                mortgage: mortgage\n            });\n            this.onMortgageChange(mortgage);\n        }\n    }, {\n        key: "onInterestRateChange",\n        value: function onInterestRateChange(e) {\n            var value = _Util2.default.percentToValue(e.target.value);\n            if (isNaN(value)) return;\n            this.mortgageCalculator.interestRate = value;\n            var mortgage = this.mortgageCalculator.calculatePayment();\n            this.setState({\n                mortgage: mortgage\n            });\n            this.onMortgageChange(mortgage);\n        }\n    }, {\n        key: "onTermMonthsChange",\n        value: function onTermMonthsChange(e) {\n            var value = e.target.value;\n            if (isNaN(value)) return;\n            this.mortgageCalculator.months = value;\n            var mortgage = this.mortgageCalculator.calculatePayment();\n            this.setState({\n                mortgage: mortgage\n            });\n            this.onMortgageChange(mortgage);\n        }\n    }, {\n        key: "onAdditionalPrincipalChange",\n        value: function onAdditionalPrincipalChange(e) {\n            var value = _Util2.default.moneyToValue(e.target.value);\n            this.mortgageCalculator.additionalPrincipalPayment = !isNaN(value) ? value : 0;\n            var mortgage = this.mortgageCalculator.calculatePayment();\n            this.setState({\n                additionalPrincipal: value,\n                mortgage: mortgage\n            });\n            this.onMortgageChange(mortgage);\n        }\n    }, {\n        key: "onTaxRateChange",\n        value: function onTaxRateChange(e) {\n            var value = _Util2.default.percentToValue(e.target.value);\n            if (isNaN(value)) return;\n            this.mortgageCalculator.taxRate = value;\n            var mortgage = this.mortgageCalculator.calculatePayment();\n            this.setState({\n                mortgage: mortgage\n            });\n            this.onMortgageChange(mortgage);\n        }\n    }, {\n        key: "onInsuranceRateChange",\n        value: function onInsuranceRateChange(e) {\n            var value = _Util2.default.percentToValue(e.target.value);\n            if (isNaN(value)) return;\n            this.mortgageCalculator.insuranceRate = value;\n            var mortgage = this.mortgageCalculator.calculatePayment();\n            this.setState({\n                mortgage: mortgage\n            });\n            this.onMortgageChange(mortgage);\n        }\n    }, {\n        key: "onMortgageInsuranceRateChange",\n        value: function onMortgageInsuranceRateChange(e) {\n            var value = _Util2.default.percentToValue(e.target.value);\n            if (isNaN(value)) return;\n            this.mortgageCalculator.mortgageInsuranceRate = value;\n            var mortgage = this.mortgageCalculator.calculatePayment();\n            this.setState({\n                mortgage: mortgage\n            });\n            this.onMortgageChange(mortgage);\n        }\n    }, {\n        key: "onMortgageInsuranceEnabledChange",\n        value: function onMortgageInsuranceEnabledChange(e) {\n            this.mortgageCalculator.mortgageInsuranceEnabled = e;\n            var mortgage = this.mortgageCalculator.calculatePayment();\n            this.setState({\n                mortgageInsuranceEnabled: this.mortgageCalculator.mortgageInsuranceEnabled,\n                mortgage: mortgage\n            });\n            this.onMortgageChange(mortgage);\n        }\n    }, {\n        key: "render",\n        value: function render() {\n            var _this2 = this;\n\n            var _state = this.state,\n                totalPrice = _state.totalPrice,\n                downPayment = _state.downPayment,\n                showAdvanced = _state.showAdvanced,\n                additionalPrincipal = _state.additionalPrincipal;\n            var _state$mortgage = this.state.mortgage,\n                loanAmount = _state$mortgage.loanAmount,\n                principalAndInterest = _state$mortgage.principalAndInterest,\n                tax = _state$mortgage.tax,\n                insurance = _state$mortgage.insurance,\n                mortgageInsurance = _state$mortgage.mortgageInsurance,\n                total = _state$mortgage.total;\n            var _mortgageCalculator = this.mortgageCalculator,\n                interestRate = _mortgageCalculator.interestRate,\n                taxRate = _mortgageCalculator.taxRate,\n                insuranceRate = _mortgageCalculator.insuranceRate,\n                mortgageInsuranceRate = _mortgageCalculator.mortgageInsuranceRate,\n                mortgageInsuranceEnabled = _mortgageCalculator.mortgageInsuranceEnabled,\n                months = _mortgageCalculator.months;\n\n            var styles = this.props.styles || _DefaultStyle2.default;\n            var paymentCount = this.state.mortgage.paymentSchedule.length;\n            var years = Math.floor(paymentCount / 12);\n            var remainingMonths = paymentCount % 12;\n            var yearsLabel = years === 1 ? \'year\' : \'years\';\n            var monthsLabel = remainingMonths === 1 ? \'month\' : \'months\';\n            var separatorLabel = years > 0 && remainingMonths > 0 ? \' and \' : \'\';\n            var payoffMessage = \'\';\n            if (years > 0) payoffMessage += years + " " + yearsLabel;\n            payoffMessage += separatorLabel;\n            if (remainingMonths > 0) payoffMessage += remainingMonths + " " + monthsLabel;\n            if (payoffMessage.length > 0) payoffMessage = "Fully paid in " + payoffMessage;\n\n            var downPaymentPercent = downPayment.length === 0 ? \'\' : totalPrice > 0 && downPayment > 0 ? downPayment / totalPrice : DefaultDownPaymentPercent;\n\n            return React.createElement(\n                "div",\n                { className: styles.container },\n                React.createElement(\n                    "form",\n                    { className: styles.inputForm },\n                    React.createElement(\n                        _InputWrapper2.default,\n                        { styles: styles, label: "Home Price" },\n                        React.createElement(_IconInput2.default, { styles: styles, icon: "$", type: "text", name: "price", value: _Util2.default.moneyValue(totalPrice, false, false), onChange: this.onPriceChange })\n                    ),\n                    React.createElement(\n                        _InputWrapper2.default,\n                        { styles: styles, label: "Down Payment" },\n                        React.createElement(_IconInput2.default, { styles: styles, icon: "$", type: "text", name: "downPayment", value: _Util2.default.moneyValue(downPayment, false, false), onChange: this.onDownPaymentChange }),\n                        React.createElement(_IconInput2.default, { styles: styles, icon: "%", type: "number", name: "downPaymentPercent", value: _Util2.default.percentValue(downPaymentPercent, false), onChange: this.onDownPaymentPercentChange })\n                    ),\n                    React.createElement(\n                        _InputWrapper2.default,\n                        { styles: styles, label: "Interest Rate" },\n                        React.createElement(_IconInput2.default, { styles: styles, icon: "%", type: "number", name: "interestRate", defaultValue: _Util2.default.percentValue(interestRate, false), step: "0.01", onInput: this.onInterestRateChange })\n                    ),\n                    React.createElement(\n                        _InputWrapper2.default,\n                        { styles: styles, label: "Loan Term" },\n                        React.createElement(\n                            "select",\n                            { className: "custom-select", name: "termMonths", onInput: this.onTermMonthsChange, defaultValue: months },\n                            React.createElement(\n                                "option",\n                                { value: "360" },\n                                "30 years"\n                            ),\n                            React.createElement(\n                                "option",\n                                { value: "240" },\n                                "20 years"\n                            ),\n                            React.createElement(\n                                "option",\n                                { value: "180" },\n                                "15 years"\n                            ),\n                            React.createElement(\n                                "option",\n                                { value: "120" },\n                                "10 years"\n                            ),\n                            React.createElement(\n                                "option",\n                                { value: "60" },\n                                "5 years"\n                            )\n                        )\n                    ),\n                    React.createElement(\n                        _InputWrapper2.default,\n                        { styles: styles, label: "Additional Principal Payment", subtext: React.createElement(\n                                "div",\n                                null,\n                                payoffMessage\n                            ) },\n                        React.createElement(_IconInput2.default, { styles: styles, icon: "$", type: "text", name: "additionalPrincipal", value: _Util2.default.moneyValue(additionalPrincipal, false, false), onChange: this.onAdditionalPrincipalChange })\n                    ),\n                    React.createElement(\n                        "div",\n                        { className: styles.advancedButton },\n                        React.createElement(\n                            "button",\n                            { type: "button", onClick: function onClick() {\n                                    return _this2.setState({ showAdvanced: !showAdvanced });\n                                } },\n                            showAdvanced ? "Hide" : "Show",\n                            " Advanced"\n                        )\n                    ),\n                    showAdvanced ? React.createElement(\n                        "div",\n                        { className: styles.advanced },\n                        React.createElement(\n                            _InputWrapper2.default,\n                            { styles: styles, label: "Tax Rate" },\n                            React.createElement(_IconInput2.default, { styles: styles, icon: "%", type: "number", name: "taxRate", defaultValue: _Util2.default.percentValue(taxRate, false), step: "0.01", onInput: this.onTaxRateChange })\n                        ),\n                        React.createElement(\n                            _InputWrapper2.default,\n                            { styles: styles, label: "Insurance Rate" },\n                            React.createElement(_IconInput2.default, { styles: styles, icon: "%", type: "number", name: "insuranceRate", defaultValue: _Util2.default.percentValue(insuranceRate, false), step: "0.01", onInput: this.onInsuranceRateChange })\n                        ),\n                        React.createElement(\n                            _InputWrapper2.default,\n                            { styles: styles, label: "Mortgage Insurance Rate" },\n                            React.createElement(_IconInput2.default, { styles: styles, icon: "%", type: "number", name: "mortgageInsuranceRate", defaultValue: _Util2.default.percentValue(mortgageInsuranceRate, false), step: "0.01", onInput: this.onMortgageInsuranceRateChange })\n                        ),\n                        React.createElement(\n                            _InputWrapper2.default,\n                            { styles: styles, label: "Mortgage Insurance" },\n                            React.createElement(_Switch2.default, { active: mortgageInsuranceEnabled, onChange: this.onMortgageInsuranceEnabledChange })\n                        )\n                    ) : null\n                ),\n                React.createElement(\n                    "div",\n                    { className: styles.results },\n                    React.createElement(\n                        "div",\n                        { className: styles.resultRow },\n                        React.createElement(\n                            "div",\n                            { className: styles.resultLabel },\n                            "Loan Amount:"\n                        ),\n                        React.createElement(\n                            "div",\n                            { className: styles.resultValue },\n                            _Util2.default.moneyValue(loanAmount)\n                        )\n                    ),\n                    React.createElement(\n                        "div",\n                        { className: styles.resultRow },\n                        React.createElement(\n                            "div",\n                            { className: styles.resultLabel },\n                            "Principal & Interest:"\n                        ),\n                        React.createElement(\n                            "div",\n                            { className: styles.resultValue },\n                            _Util2.default.moneyValue(principalAndInterest)\n                        )\n                    ),\n                    React.createElement(\n                        "div",\n                        { className: styles.resultRow },\n                        React.createElement(\n                            "div",\n                            { className: styles.resultLabel },\n                            "Monthly Tax:"\n                        ),\n                        React.createElement(\n                            "div",\n                            { className: styles.resultValue },\n                            _Util2.default.moneyValue(tax)\n                        )\n                    ),\n                    React.createElement(\n                        "div",\n                        { className: styles.resultRow },\n                        React.createElement(\n                            "div",\n                            { className: styles.resultLabel },\n                            "Monthly Insurance:"\n                        ),\n                        React.createElement(\n                            "div",\n                            { className: styles.resultValue },\n                            _Util2.default.moneyValue(insurance)\n                        )\n                    ),\n                    mortgageInsurance > 0 ? React.createElement(\n                        "div",\n                        { className: styles.resultRow },\n                        React.createElement(\n                            "div",\n                            { className: styles.resultLabel },\n                            "Monthly PMI:"\n                        ),\n                        React.createElement(\n                            "div",\n                            { className: styles.resultValue },\n                            _Util2.default.moneyValue(mortgageInsurance)\n                        )\n                    ) : null,\n                    React.createElement(\n                        "div",\n                        { className: styles.resultRow + " " + styles.totalPayment },\n                        React.createElement(\n                            "div",\n                            { className: styles.resultLabel },\n                            "Total Payment:"\n                        ),\n                        React.createElement(\n                            "div",\n                            { className: styles.resultValue },\n                            _Util2.default.moneyValue(total)\n                        )\n                    )\n                ),\n                this.props.showPaymentSchedule ? React.createElement(\n                    "div",\n                    { className: styles.schedule },\n                    React.createElement(\n                        "h3",\n                        null,\n                        "Payment Schedule"\n                    ),\n                    React.createElement(_PaymentSchedule2.default, { mortgage: this.state.mortgage })\n                ) : null,\n                React.createElement(\n                    "div",\n                    { className: styles.versionInfo },\n                    React.createElement(\n                        "a",\n                        { href: "https://github.com/tommymcglynn/mortgage-calculator-react" },\n                        "mortgage-calculator-react ",\n                        pjson.version\n                    )\n                )\n            );\n        }\n    }]);\n\n    return MortgageCalculator;\n}(React.Component);\n\nexports.default = MortgageCalculator;\n\n//# sourceURL=webpack://mortgage-calculator-react/./src/MortgageCalculator.js?'
                );
              },
              "./src/PaymentSchedule.js": function (
                module,
                exports,
                __webpack_require__
              ) {
                "use strict";
                eval(
                  "\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _Util = __webpack_require__(/*! ./Util */ \"./src/Util.js\");\n\nvar _Util2 = _interopRequireDefault(_Util);\n\nvar _DefaultStyle = __webpack_require__(/*! ./DefaultStyle.css */ \"./src/DefaultStyle.css\");\n\nvar _DefaultStyle2 = _interopRequireDefault(_DefaultStyle);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar React = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar PaymentSchedule = function (_React$Component) {\n    _inherits(PaymentSchedule, _React$Component);\n\n    function PaymentSchedule() {\n        _classCallCheck(this, PaymentSchedule);\n\n        return _possibleConstructorReturn(this, (PaymentSchedule.__proto__ || Object.getPrototypeOf(PaymentSchedule)).apply(this, arguments));\n    }\n\n    _createClass(PaymentSchedule, [{\n        key: 'render',\n        value: function render() {\n            var mortgage = this.props.mortgage;\n            var paymentSchedule = mortgage.paymentSchedule;\n\n            var styles = this.props.styles || _DefaultStyle2.default;\n            var showPennies = false;\n            var paymentRows = paymentSchedule.map(function (payment) {\n                var rowClass = styles.paymentRow;\n                var isYearlyPayment = payment.count % 12 === 0;\n                if (isYearlyPayment) {\n                    rowClass += \" \" + styles.paymentRowYear;\n                }\n                return React.createElement(\n                    'li',\n                    { key: payment.count, className: rowClass },\n                    React.createElement(\n                        'div',\n                        null,\n                        !isYearlyPayment ? payment.count : \"Year \" + payment.count / 12\n                    ),\n                    React.createElement(\n                        'div',\n                        null,\n                        _Util2.default.moneyValue(payment.principalPayment, showPennies)\n                    ),\n                    React.createElement(\n                        'div',\n                        null,\n                        _Util2.default.moneyValue(payment.interestPayment, showPennies)\n                    ),\n                    React.createElement(\n                        'div',\n                        null,\n                        _Util2.default.moneyValue(payment.totalInterest, showPennies)\n                    ),\n                    React.createElement(\n                        'div',\n                        null,\n                        _Util2.default.moneyValue(payment.balance, showPennies)\n                    )\n                );\n            });\n            return React.createElement(\n                'ul',\n                { className: styles.paymentList },\n                React.createElement(\n                    'li',\n                    { className: styles.paymentRow + \" \" + styles.paymentHeader },\n                    React.createElement(\n                        'div',\n                        null,\n                        '#'\n                    ),\n                    React.createElement(\n                        'div',\n                        null,\n                        'Principal'\n                    ),\n                    React.createElement(\n                        'div',\n                        null,\n                        'Interest'\n                    ),\n                    React.createElement(\n                        'div',\n                        null,\n                        'Total Interest'\n                    ),\n                    React.createElement(\n                        'div',\n                        null,\n                        'Balance'\n                    )\n                ),\n                paymentRows\n            );\n        }\n    }]);\n\n    return PaymentSchedule;\n}(React.Component);\n\nexports.default = PaymentSchedule;\n\n//# sourceURL=webpack://mortgage-calculator-react/./src/PaymentSchedule.js?"
                );
              },
              "./src/Switch.css": function (
                module,
                exports,
                __webpack_require__
              ) {
                eval(
                  '\nvar content = __webpack_require__(/*! !../node_modules/css-loader!./Switch.css */ "./node_modules/css-loader/index.js!./src/Switch.css");\n\nif(typeof content === \'string\') content = [[module.i, content, \'\']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {"hmr":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack://mortgage-calculator-react/./src/Switch.css?'
                );
              },
              "./src/Switch.js": function (
                module,
                exports,
                __webpack_require__
              ) {
                "use strict";
                eval(
                  '\n\nObject.defineProperty(exports, "__esModule", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _Switch = __webpack_require__(/*! ./Switch.css */ "./src/Switch.css");\n\nvar _Switch2 = _interopRequireDefault(_Switch);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar React = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n\nvar Switch = function (_React$Component) {\n    _inherits(Switch, _React$Component);\n\n    function Switch() {\n        _classCallCheck(this, Switch);\n\n        return _possibleConstructorReturn(this, (Switch.__proto__ || Object.getPrototypeOf(Switch)).apply(this, arguments));\n    }\n\n    _createClass(Switch, [{\n        key: \'render\',\n        value: function render() {\n            var _this2 = this;\n\n            var styles = _Switch2.default;\n            var active = this.props.active;\n\n            var wrapperClass = styles.switchWrapper;\n            if (active) {\n                wrapperClass += " " + styles.switchWrapperActive;\n            }\n            return React.createElement(\n                \'div\',\n                { className: wrapperClass, onClick: function onClick() {\n                        return _this2.props.onChange(!active);\n                    } },\n                React.createElement(\'div\', { className: styles.switchBubble })\n            );\n        }\n    }]);\n\n    return Switch;\n}(React.Component);\n\nexports.default = Switch;\n\n//# sourceURL=webpack://mortgage-calculator-react/./src/Switch.js?'
                );
              },
              "./src/Util.js": function (module, exports, __webpack_require__) {
                "use strict";
                eval(
                  "\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar moneyFormatter = new Intl.NumberFormat('en-US', {\n    style: 'currency',\n    currency: 'USD',\n    minimumFractionDigits: 0,\n    maximumFractionDigits: 0\n});\n\nvar penniesFormatter = new Intl.NumberFormat('en-US', {\n    style: 'currency',\n    currency: 'USD',\n    minimumFractionDigits: 2,\n    maximumFractionDigits: 2\n});\n\nvar percentFormatter = new Intl.NumberFormat('en-US', {\n    style: 'percent',\n    minimumFractionDigits: 0,\n    maximumFractionDigits: 2\n});\n\nvar Util = function () {\n    function Util() {\n        _classCallCheck(this, Util);\n    }\n\n    _createClass(Util, null, [{\n        key: 'percentToValue',\n        value: function percentToValue(percent) {\n            var value = parseFloat(percent);\n            if (isNaN(value)) {\n                return NaN;\n            }\n            if (value < 0) {\n                return 0;\n            }\n            return value / 100;\n        }\n    }, {\n        key: 'moneyToValue',\n        value: function moneyToValue(money) {\n            if (money === undefined) return '';\n            var value = parseInt(money.replace(/\\D/g, \"\"));\n            return !isNaN(value) ? value : '';\n        }\n    }, {\n        key: 'moneyValue',\n        value: function moneyValue(amount) {\n            var showPennies = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;\n            var withSymbol = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;\n\n            if (amount === null || amount === '') return '';\n            var value = showPennies ? penniesFormatter.format(amount) : moneyFormatter.format(amount);\n            if (withSymbol === false) {\n                return value.substring(1);\n            }\n            return value;\n        }\n    }, {\n        key: 'percentValue',\n        value: function percentValue(amount, withSymbol) {\n            if (amount === null || amount === '') return '';\n            var value = percentFormatter.format(amount);\n            if (withSymbol === false) {\n                return value.substring(0, value.length - 1);\n            }\n            return value;\n        }\n    }, {\n        key: 'numberValueOrDefault',\n        value: function numberValueOrDefault(value, minValue, defaultValue) {\n            if (value == null || isNaN(value) || value < minValue) return defaultValue;\n            return value;\n        }\n    }, {\n        key: 'numberValueInSetOrDefault',\n        value: function numberValueInSetOrDefault(value, possibleValues, defaultValue) {\n            if (!Array.isArray(possibleValues)) throw \"possibleValues must be an array.\";\n            if (value == null || isNaN(value) || !possibleValues.includes(value)) return defaultValue;\n            return value;\n        }\n    }]);\n\n    return Util;\n}();\n\nexports.default = Util;\n\n//# sourceURL=webpack://mortgage-calculator-react/./src/Util.js?"
                );
              },
              0: function (module, exports, __webpack_require__) {
                eval(
                  'module.exports = __webpack_require__(/*! ./src/MortgageCalculator.js */"./src/MortgageCalculator.js");\n\n\n//# sourceURL=webpack://mortgage-calculator-react/multi_./src/MortgageCalculator.js?'
                );
              },
            });
          }),
          (module.exports = factory());
      },
      528: (e) => {
        "use strict";
        var t = Object.getOwnPropertySymbols,
          n = Object.prototype.hasOwnProperty,
          r = Object.prototype.propertyIsEnumerable;
        e.exports = (function () {
          try {
            if (!Object.assign) return !1;
            var e = new String("abc");
            if (((e[5] = "de"), "5" === Object.getOwnPropertyNames(e)[0]))
              return !1;
            for (var t = {}, n = 0; n < 10; n++)
              t["_" + String.fromCharCode(n)] = n;
            if (
              "0123456789" !==
              Object.getOwnPropertyNames(t)
                .map(function (e) {
                  return t[e];
                })
                .join("")
            )
              return !1;
            var r = {};
            return (
              "abcdefghijklmnopqrst".split("").forEach(function (e) {
                r[e] = e;
              }),
              "abcdefghijklmnopqrst" ===
                Object.keys(Object.assign({}, r)).join("")
            );
          } catch (a) {
            return !1;
          }
        })()
          ? Object.assign
          : function (e, a) {
              for (
                var o,
                  i,
                  l = (function (e) {
                    if (null === e || void 0 === e)
                      throw new TypeError(
                        "Object.assign cannot be called with null or undefined"
                      );
                    return Object(e);
                  })(e),
                  s = 1;
                s < arguments.length;
                s++
              ) {
                for (var u in (o = Object(arguments[s])))
                  n.call(o, u) && (l[u] = o[u]);
                if (t) {
                  i = t(o);
                  for (var c = 0; c < i.length; c++)
                    r.call(o, i[c]) && (l[i[c]] = o[i[c]]);
                }
              }
              return l;
            };
      },
      920: function (e) {
        e.exports = (function () {
          "use strict";
          var e = 3.1415926,
            t = {
              PI: e,
              PIx2: 2 * e,
              PI_2: e / 2,
              PI_180: e / 180,
              N180_PI: 180 / e,
              Infinity: -999,
              isInfinity: function (e) {
                return e === this.Infinity || e === 1 / 0;
              },
              randomAToB: function (e, t, n) {
                return 2 < arguments.length && void 0 !== n && n
                  ? Math.floor(Math.random() * (t - e)) + e
                  : e + Math.random() * (t - e);
              },
              randomFloating: function (e, t, n) {
                return this.randomAToB(e - t, e + t, n);
              },
              randomColor: function () {
                return (
                  "#" +
                  (
                    "00000" + ((16777216 * Math.random()) << 0).toString(16)
                  ).slice(-6)
                );
              },
              randomZone: function () {},
              floor: function (e, t) {
                return (
                  (t = 1 < arguments.length && void 0 !== t ? t : 4),
                  (t = Math.pow(10, t)),
                  Math.floor(e * t) / t
                );
              },
              degreeTransform: function (t) {
                return (t * e) / 180;
              },
              toColor16: function (e) {
                return "#" + e.toString(16);
              },
            },
            n =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  },
            r = function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            },
            a = function (e, t, n) {
              return t && o(e.prototype, t), n && o(e, n), e;
            };
          function o(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          function i(e, t, n) {
            null === e && (e = Function.prototype);
            var r = Object.getOwnPropertyDescriptor(e, t);
            return void 0 !== r
              ? "value" in r
                ? r.value
                : void 0 !== (r = r.get)
                ? r.call(n)
                : void 0
              : null !== (e = Object.getPrototypeOf(e))
              ? i(e, t, n)
              : void 0;
          }
          var l = function (e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function, not " +
                    typeof t
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
                t &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(e, t)
                    : (e.__proto__ = t));
            },
            s = function (e, t) {
              if (!e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return !t || ("object" != typeof t && "function" != typeof t)
                ? e
                : t;
            },
            u =
              (a(
                c,
                [
                  {
                    key: "getValue",
                    value: function (e) {
                      return (
                        (e = 0 < arguments.length && void 0 !== e && e),
                        this.isArray
                          ? C.getRandFromArray(this.a)
                          : this.center
                          ? t.randomFloating(this.a, this.b, e)
                          : t.randomAToB(this.a, this.b, e)
                      );
                    },
                  },
                ],
                [
                  {
                    key: "setSpanValue",
                    value: function (e, t, n) {
                      return e instanceof c
                        ? e
                        : void 0 === t
                        ? new c(e)
                        : void 0 === n
                        ? new c(e, t)
                        : new c(e, t, n);
                    },
                  },
                  {
                    key: "getSpanValue",
                    value: function (e) {
                      return e instanceof c ? e.getValue() : e;
                    },
                  },
                ]
              ),
              c);
          function c(e, t, n) {
            r(this, c),
              C.isArray(e)
                ? ((this.isArray = !0), (this.a = e))
                : ((this.isArray = !1),
                  (this.a = C.initValue(e, 1)),
                  (this.b = C.initValue(t, this.a)),
                  (this.center = C.initValue(n, !1)));
          }
          var d = function (e) {
              --e;
              for (var t = 1; t < 32; t <<= 1) e |= e >> t;
              return e + 1;
            },
            p = function (e, t) {
              return [1, 0, 0, 0, 1, 0, e, t, 1];
            },
            f = function (e) {
              var t = Math.cos(e);
              return [t, -(e = Math.sin(e)), 0, e, t, 0, 0, 0, 1];
            },
            h = function (e, t) {
              return [e, 0, 0, 0, t, 0, 0, 0, 1];
            },
            m = function (e, t) {
              var n = e[0],
                r = e[1],
                a = e[2],
                o = e[3],
                i = e[4],
                l = e[5],
                s = e[6],
                u = e[7],
                c = e[8],
                d = t[0],
                p = t[1],
                f = t[2],
                h = t[3],
                m = t[4],
                y = t[5],
                g = t[6];
              return [
                n * d + r * h + a * g,
                n * p + r * m + a * (e = t[7]),
                n * f + r * y + a * (t = t[8]),
                o * d + i * h + l * g,
                o * p + i * m + l * e,
                o * f + i * y + l * t,
                s * d + u * h + c * g,
                s * p + u * m + c * e,
                s * f + u * y + c * t,
              ];
            },
            y = {
              createCanvas: function (e, t, n, r) {
                var a = 3 < arguments.length && void 0 !== r ? r : "absolute";
                return (
                  ((r = document.createElement("canvas")).id = e),
                  (r.width = t),
                  (r.height = n),
                  (r.style.opacity = 0),
                  (r.style.position = a),
                  this.transform(r, -500, -500, 0, 0),
                  r
                );
              },
              createDiv: function (e, t, n) {
                var r = document.createElement("div");
                return (
                  (r.id = e),
                  (r.style.position = "absolute"),
                  this.resize(r, t, n),
                  r
                );
              },
              resize: function (e, t, n) {
                (e.style.width = t + "px"),
                  (e.style.height = n + "px"),
                  (e.style.marginLeft = -t / 2 + "px"),
                  (e.style.marginTop = -n / 2 + "px");
              },
              transform: function (e, t, n, r, a) {
                e.style.willChange = "transform";
                var o =
                  "translate(" +
                  t +
                  "px, " +
                  n +
                  "px) scale(" +
                  r +
                  ") rotate(" +
                  a +
                  "deg)";
                this.css3(e, "transform", o);
              },
              transform3d: function (e, t, n, r, a) {
                (e.style.willChange = "transform"),
                  (a =
                    "translate3d(" +
                    t +
                    "px, " +
                    n +
                    "px, 0) scale(" +
                    r +
                    ") rotate(" +
                    a +
                    "deg)"),
                  this.css3(e, "backfaceVisibility", "hidden"),
                  this.css3(e, "transform", a);
              },
              css3: function (e, t, n) {
                var r = t.charAt(0).toUpperCase() + t.substr(1);
                (e.style["Webkit" + r] = n),
                  (e.style["Moz" + r] = n),
                  (e.style["O" + r] = n),
                  (e.style["ms" + r] = n),
                  (e.style["" + t] = n);
              },
            },
            g = {},
            v = {},
            b = 0,
            _ = function (e, t, n) {
              return (
                e.drawImage(t, n.x, n.y),
                (t = e.getImageData(n.x, n.y, n.width, n.height)),
                e.clearRect(n.x, n.y, n.width, n.height),
                t
              );
            },
            w = function (e, t, n) {
              var r = "string" == typeof e ? e : e.src;
              g[r]
                ? t(g[r], n)
                : (((e = new Image()).onload = function (e) {
                    (g[r] = e.target), t(g[r], n);
                  }),
                  (e.src = r));
            },
            k = function (e, t, n) {
              var r,
                a,
                o = e.src;
              return (
                v[o] ||
                  ((r = d(e.width)),
                  (a = d(e.height)),
                  (a = y.createCanvas("proton_canvas_cache_" + ++b, r, a))
                    .getContext("2d")
                    .drawImage(e, 0, 0, e.width, e.height),
                  (v[o] = a)),
                t && t(v[o], n),
                v[o]
              );
            },
            C = {
              initValue: function (e, t) {
                return null != e ? e : t;
              },
              isArray: function (e) {
                return "[object Array]" === Object.prototype.toString.call(e);
              },
              emptyArray: function (e) {
                e && (e.length = 0);
              },
              toArray: function (e) {
                return this.isArray(e) ? e : [e];
              },
              getRandFromArray: function (e) {
                return e ? e[Math.floor(e.length * Math.random())] : null;
              },
              emptyObject: function (e, t) {
                var n,
                  r = 1 < arguments.length && void 0 !== t ? t : null;
                for (n in e) (r && -1 < r.indexOf(n)) || delete e[n];
              },
              classApply: function (e, t) {
                return new (
                  (t = 1 < arguments.length && void 0 !== t ? t : null)
                    ? e.bind.apply(e, [null].concat(t))
                    : e
                )();
              },
              setVectorVal: function (e, t) {
                (t = 1 < arguments.length && void 0 !== t ? t : null) &&
                  (this.hasProp(t, "x") && (e.p.x = t.x),
                  this.hasProp(t, "y") && (e.p.y = t.y),
                  this.hasProp(t, "vx") && (e.v.x = t.vx),
                  this.hasProp(t, "vy") && (e.v.y = t.vy),
                  this.hasProp(t, "ax") && (e.a.x = t.ax),
                  this.hasProp(t, "ay") && (e.a.y = t.ay),
                  this.hasProp(t, "p") && e.p.copy(t.p),
                  this.hasProp(t, "v") && e.v.copy(t.v),
                  this.hasProp(t, "a") && e.a.copy(t.a),
                  this.hasProp(t, "position") && e.p.copy(t.position),
                  this.hasProp(t, "velocity") && e.v.copy(t.velocity),
                  this.hasProp(t, "accelerate") && e.a.copy(t.accelerate));
              },
              hasProp: function (e, t) {
                return !!e && void 0 !== e[t];
              },
              setProp: function (e, t) {
                for (var n in t)
                  e.hasOwnProperty(n) && (e[n] = u.getSpanValue(t[n]));
                return e;
              },
              getImageData: function (e, t, n) {
                return _(e, t, n);
              },
              destroyAll: function (e, t) {
                for (
                  var n = 1 < arguments.length && void 0 !== t ? t : null,
                    r = e.length;
                  r--;

                ) {
                  try {
                    e[r].destroy(n);
                  } catch (e) {}
                  delete e[r];
                }
                e.length = 0;
              },
              assign: function (e, t) {
                if ("function" == typeof Object.assign)
                  return Object.assign(e, t);
                for (var n in t)
                  Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                return e;
              },
            },
            P = {},
            E = {
              _index: 0,
              _cache: {},
              id: function (e) {
                return (
                  (void 0 !== P[e] && null !== P[e]) || (P[e] = 0),
                  e + "_" + P[e]++
                );
              },
              getId: function (e) {
                var t = this.getIdFromCache(e);
                return (
                  t || ((t = "PUID_" + this._index++), (this._cache[t] = e), t)
                );
              },
              getIdFromCache: function (e) {
                var t,
                  n = void 0;
                for (n in this._cache) {
                  if ((t = this._cache[n]) === e) return n;
                  if (this.isBody(t, e) && t.src === e.src) return n;
                }
                return null;
              },
              isBody: function (e, t) {
                return (
                  "object" === (void 0 === e ? "undefined" : n(e)) &&
                  "object" === (void 0 === t ? "undefined" : n(t)) &&
                  e.isInner &&
                  t.isInner
                );
              },
              getTarget: function (e) {
                return this._cache[e];
              },
            },
            x =
              (a(R, [
                {
                  key: "get",
                  value: function (e, t, n) {
                    var r = void 0;
                    return (
                      (n = n || e.__puid || E.getId(e)),
                      ((r =
                        this.cache[n] && 0 < this.cache[n].length
                          ? this.cache[n].pop()
                          : this.createOrClone(e, t)).__puid = e.__puid || n),
                      r
                    );
                  },
                },
                {
                  key: "expire",
                  value: function (e) {
                    return this.getCache(e.__puid).push(e);
                  },
                },
                {
                  key: "createOrClone",
                  value: function (e, t) {
                    return (
                      this.total++,
                      this.create
                        ? this.create(e, t)
                        : "function" == typeof e
                        ? C.classApply(e, t)
                        : e.clone()
                    );
                  },
                },
                {
                  key: "getCount",
                  value: function () {
                    var e,
                      t = 0;
                    for (e in this.cache) t += this.cache[e].length;
                    return t++;
                  },
                },
                {
                  key: "destroy",
                  value: function () {
                    for (var e in this.cache)
                      (this.cache[e].length = 0), delete this.cache[e];
                  },
                },
                {
                  key: "getCache",
                  value: function (e) {
                    return (
                      (e =
                        0 < arguments.length && void 0 !== e ? e : "default"),
                      this.cache[e] || (this.cache[e] = []),
                      this.cache[e]
                    );
                  },
                },
              ]),
              R);
          function R(e) {
            r(this, R), (this.total = 0), (this.cache = {});
          }
          var S =
            (a(T, [
              {
                key: "update",
                value: function (e, t) {
                  this.add(e, t);
                  var n = this.getEmitter();
                  switch (((e = this.getRenderer()), (t = ""), this.type)) {
                    case 2:
                      (t += "emitter:" + this.proton.emitters.length + "<br>"),
                        n && (t += "em speed:" + n.emitSpeed + "<br>"),
                        n && (t += "pos:" + this.getEmitterPos(n));
                      break;
                    case 3:
                      n &&
                        (t += "initializes:" + n.initializes.length + "<br>"),
                        n &&
                          (t +=
                            '<span style="display:inline-block;">' +
                            this.concatArr(n.initializes) +
                            "</span><br>"),
                        n &&
                          (t += "behaviours:" + n.behaviours.length + "<br>"),
                        n &&
                          (t +=
                            '<span style="display:inline-block;">' +
                            this.concatArr(n.behaviours) +
                            "</span><br>");
                      break;
                    case 4:
                      e && (t += e.name + "<br>"),
                        e && (t += "body:" + this.getCreatedNumber(e) + "<br>");
                      break;
                    default:
                      (t += "particles:" + this.proton.getCount() + "<br>"),
                        (t += "pool:" + this.proton.pool.getCount() + "<br>"),
                        (t += "total:" + this.proton.pool.total);
                  }
                  this.container.innerHTML = t;
                },
              },
              {
                key: "add",
                value: function (e, t) {
                  var n = this;
                  if (!this.container) {
                    (this.type = 1),
                      (this.container = document.createElement("div")),
                      (this.container.style.cssText = [
                        "position:absolute;bottom:0px;left:0;cursor:pointer;",
                        "opacity:0.9;z-index:10000;padding:10px;font-size:12px;font-family:Helvetica,Arial,sans-serif;",
                        "width:120px;height:50px;background-color:#002;color:#0ff;",
                      ].join("")),
                      this.container.addEventListener(
                        "click",
                        function (e) {
                          n.type++, 4 < n.type && (n.type = 1);
                        },
                        !1
                      );
                    var r = void 0,
                      a = void 0;
                    switch (e) {
                      case 2:
                        (r = "#201"), (a = "#f08");
                        break;
                      case 3:
                        (r = "#020"), (a = "#0f0");
                        break;
                      default:
                        (r = "#002"), (a = "#0ff");
                    }
                    (this.container.style["background-color"] = r),
                      (this.container.style.color = a);
                  }
                  this.container.parentNode ||
                    (t = t || this.body || document.body).appendChild(
                      this.container
                    );
                },
              },
              {
                key: "getEmitter",
                value: function () {
                  return this.proton.emitters[this.emitterIndex];
                },
              },
              {
                key: "getRenderer",
                value: function () {
                  return this.proton.renderers[this.rendererIndex];
                },
              },
              {
                key: "concatArr",
                value: function (e) {
                  var t = "";
                  if (!e || !e.length) return t;
                  for (var n = 0; n < e.length; n++)
                    t += (e[n].name || "").substr(0, 1) + ".";
                  return t;
                },
              },
              {
                key: "getCreatedNumber",
                value: function (e) {
                  return e.pool.total || (e.cpool && e.cpool.total) || 0;
                },
              },
              {
                key: "getEmitterPos",
                value: function (e) {
                  return Math.round(e.p.x) + "," + Math.round(e.p.y);
                },
              },
            ]),
            T);
          function T(e) {
            r(this, T),
              (this.proton = e),
              (this.container = null),
              (this.type = 1),
              (this.emitterIndex = 0),
              (this.rendererIndex = 0);
          }
          var I =
            (a(
              O,
              [
                {
                  key: "addEventListener",
                  value: function (e, t) {
                    return (
                      this._listeners
                        ? this.removeEventListener(e, t)
                        : (this._listeners = {}),
                      this._listeners[e] || (this._listeners[e] = []),
                      this._listeners[e].push(t),
                      t
                    );
                  },
                },
                {
                  key: "removeEventListener",
                  value: function (e, t) {
                    if (this._listeners && this._listeners[e])
                      for (
                        var n = this._listeners[e], r = n.length, a = 0;
                        a < r;
                        a++
                      )
                        if (n[a] === t) {
                          1 === r ? delete this._listeners[e] : n.splice(a, 1);
                          break;
                        }
                  },
                },
                {
                  key: "removeAllEventListeners",
                  value: function (e) {
                    e
                      ? this._listeners && delete this._listeners[e]
                      : (this._listeners = null);
                  },
                },
                {
                  key: "dispatchEvent",
                  value: function (e, t) {
                    var n = !1,
                      r = this._listeners;
                    if (e && r) {
                      var a = r[e];
                      if (!a) return n;
                      for (var o = void 0, i = a.length; i--; )
                        (o = a[i]), (n = n || o(t));
                    }
                    return !!n;
                  },
                },
                {
                  key: "hasEventListener",
                  value: function (e) {
                    var t = this._listeners;
                    return !(!t || !t[e]);
                  },
                },
              ],
              [
                {
                  key: "bind",
                  value: function (e) {
                    (e.prototype.dispatchEvent = O.prototype.dispatchEvent),
                      (e.prototype.hasEventListener =
                        O.prototype.hasEventListener),
                      (e.prototype.addEventListener =
                        O.prototype.addEventListener),
                      (e.prototype.removeEventListener =
                        O.prototype.removeEventListener),
                      (e.prototype.removeAllEventListeners =
                        O.prototype.removeAllEventListeners);
                  },
                },
              ]
            ),
            O);
          function O() {
            r(this, O), (this._listeners = null);
          }
          var A =
            (a(M, [
              {
                key: "calculate",
                value: function (e, t, n) {
                  this.eulerIntegrate(e, t, n);
                },
              },
              {
                key: "eulerIntegrate",
                value: function (e, t, n) {
                  e.sleep ||
                    (e.old.p.copy(e.p),
                    e.old.v.copy(e.v),
                    e.a.multiplyScalar(1 / e.mass),
                    e.v.add(e.a.multiplyScalar(t)),
                    e.p.add(e.old.v.multiplyScalar(t)),
                    n && e.v.multiplyScalar(n),
                    e.a.clear());
                },
              },
            ]),
            M);
          function M(e) {
            r(this, M), (this.type = e);
          }
          var j =
            (a(N, [
              {
                key: "addRenderer",
                value: function (e) {
                  e.init(this), this.renderers.push(e);
                },
              },
              {
                key: "removeRenderer",
                value: function (e) {
                  var t = this.renderers.indexOf(e);
                  this.renderers.splice(t, 1), e.remove(this);
                },
              },
              {
                key: "addEmitter",
                value: function (e) {
                  this.emitters.push(e),
                    (e.parent = this).dispatchEvent(N.EMITTER_ADDED, e);
                },
              },
              {
                key: "removeEmitter",
                value: function (e) {
                  var t = this.emitters.indexOf(e);
                  this.emitters.splice(t, 1),
                    (e.parent = null),
                    this.dispatchEvent(N.EMITTER_REMOVED, e);
                },
              },
              {
                key: "update",
                value: function () {
                  "auto" === this._fps
                    ? (this.dispatchEvent(N.PROTON_UPDATE),
                      N.USE_CLOCK
                        ? (this.then || (this.then = new Date().getTime()),
                          (this.now = new Date().getTime()),
                          (this.elapsed = 0.001 * (this.now - this.then)),
                          this.amendChangeTabsBug(),
                          0 < this.elapsed && this.emittersUpdate(this.elapsed),
                          (this.then = this.now))
                        : this.emittersUpdate(N.DEFAULT_INTERVAL),
                      this.dispatchEvent(N.PROTON_UPDATE_AFTER))
                    : (this.then || (this.then = new Date().getTime()),
                      (this.now = new Date().getTime()),
                      (this.elapsed = 0.001 * (this.now - this.then)),
                      this.elapsed > this._interval &&
                        (this.dispatchEvent(N.PROTON_UPDATE),
                        this.emittersUpdate(this._interval),
                        (this.then =
                          this.now - (this.elapsed % this._interval) * 1e3),
                        this.dispatchEvent(N.PROTON_UPDATE_AFTER)));
                },
              },
              {
                key: "emittersUpdate",
                value: function (e) {
                  for (var t = this.emitters.length; t--; )
                    this.emitters[t].update(e);
                },
              },
              {
                key: "amendChangeTabsBug",
                value: function () {
                  N.amendChangeTabsBug &&
                    0.5 < this.elapsed &&
                    ((this.then = new Date().getTime()), (this.elapsed = 0));
                },
              },
              {
                key: "getCount",
                value: function () {
                  for (var e = 0, t = this.emitters.length; t--; )
                    e += this.emitters[t].particles.length;
                  return e;
                },
              },
              {
                key: "getAllParticles",
                value: function () {
                  for (var e = [], t = this.emitters.length; t--; )
                    e = e.concat(this.emitters[t].particles);
                  return e;
                },
              },
              {
                key: "destroyAllEmitters",
                value: function () {
                  C.destroyAll(this.emitters);
                },
              },
              {
                key: "destroy",
                value: function (e) {
                  function t() {
                    (n.time = 0),
                      (n.then = 0),
                      n.pool.destroy(),
                      C.destroyAll(n.emitters),
                      C.destroyAll(n.renderers, n.getAllParticles());
                  }
                  var n = this;
                  0 < arguments.length && void 0 !== e && e
                    ? setTimeout(t, 200)
                    : t();
                },
              },
              {
                key: "fps",
                set: function (e) {
                  (this._fps = e),
                    (this._interval =
                      "auto" === e ? N.DEFAULT_INTERVAL : t.floor(1 / e, 7));
                },
                get: function () {
                  return this._fps;
                },
              },
            ]),
            N);
          function N(e) {
            r(this, N),
              (this.emitters = []),
              (this.renderers = []),
              (this.time = 0),
              (this.now = 0),
              (this.then = 0),
              (this.elapsed = 0),
              (this.stats = new S(this)),
              (this.pool = new x(80)),
              (this.integrationType = C.initValue(e, N.EULER)),
              (this.integrator = new A(this.integrationType)),
              (this._fps = "auto"),
              (this._interval = N.DEFAULT_INTERVAL);
          }
          (j.USE_CLOCK = !1),
            (j.MEASURE = 100),
            (j.EULER = "euler"),
            (j.RK2 = "runge-kutta2"),
            (j.PARTICLE_CREATED = "PARTICLE_CREATED"),
            (j.PARTICLE_UPDATE = "PARTICLE_UPDATE"),
            (j.PARTICLE_SLEEP = "PARTICLE_SLEEP"),
            (j.PARTICLE_DEAD = "PARTICLE_DEAD"),
            (j.EMITTER_ADDED = "EMITTER_ADDED"),
            (j.EMITTER_REMOVED = "EMITTER_REMOVED"),
            (j.PROTON_UPDATE = "PROTON_UPDATE"),
            (j.PROTON_UPDATE_AFTER = "PROTON_UPDATE_AFTER"),
            (j.DEFAULT_INTERVAL = 0.0167),
            (j.amendChangeTabsBug = !0),
            I.bind(j);
          var D =
            (a(L, [
              {
                key: "reset",
                value: function () {
                  (this.r = 255), (this.g = 255), (this.b = 255);
                },
              },
            ]),
            L);
          function L() {
            var e =
                0 < arguments.length && void 0 !== arguments[0]
                  ? arguments[0]
                  : 255,
              t =
                1 < arguments.length && void 0 !== arguments[1]
                  ? arguments[1]
                  : 255,
              n =
                2 < arguments.length && void 0 !== arguments[2]
                  ? arguments[2]
                  : 255;
            r(this, L), (this.r = e), (this.g = t), (this.b = n);
          }
          var z = {
              easeLinear: function (e) {
                return e;
              },
              easeInQuad: function (e) {
                return Math.pow(e, 2);
              },
              easeOutQuad: function (e) {
                return -(Math.pow(e - 1, 2) - 1);
              },
              easeInOutQuad: function (e) {
                return (e /= 0.5) < 1
                  ? 0.5 * Math.pow(e, 2)
                  : -0.5 * ((e -= 2) * e - 2);
              },
              easeInCubic: function (e) {
                return Math.pow(e, 3);
              },
              easeOutCubic: function (e) {
                return Math.pow(e - 1, 3) + 1;
              },
              easeInOutCubic: function (e) {
                return (e /= 0.5) < 1
                  ? 0.5 * Math.pow(e, 3)
                  : 0.5 * (Math.pow(e - 2, 3) + 2);
              },
              easeInQuart: function (e) {
                return Math.pow(e, 4);
              },
              easeOutQuart: function (e) {
                return -(Math.pow(e - 1, 4) - 1);
              },
              easeInOutQuart: function (e) {
                return (e /= 0.5) < 1
                  ? 0.5 * Math.pow(e, 4)
                  : -0.5 * ((e -= 2) * Math.pow(e, 3) - 2);
              },
              easeInSine: function (e) {
                return 1 - Math.cos(e * t.PI_2);
              },
              easeOutSine: function (e) {
                return Math.sin(e * t.PI_2);
              },
              easeInOutSine: function (e) {
                return -0.5 * (Math.cos(Math.PI * e) - 1);
              },
              easeInExpo: function (e) {
                return 0 === e ? 0 : Math.pow(2, 10 * (e - 1));
              },
              easeOutExpo: function (e) {
                return 1 === e ? 1 : 1 - Math.pow(2, -10 * e);
              },
              easeInOutExpo: function (e) {
                return 0 === e
                  ? 0
                  : 1 === e
                  ? 1
                  : (e /= 0.5) < 1
                  ? 0.5 * Math.pow(2, 10 * (e - 1))
                  : 0.5 * (2 - Math.pow(2, -10 * --e));
              },
              easeInCirc: function (e) {
                return -(Math.sqrt(1 - e * e) - 1);
              },
              easeOutCirc: function (e) {
                return Math.sqrt(1 - Math.pow(e - 1, 2));
              },
              easeInOutCirc: function (e) {
                return (e /= 0.5) < 1
                  ? -0.5 * (Math.sqrt(1 - e * e) - 1)
                  : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
              },
              easeInBack: function (e) {
                return e * e * (2.70158 * e - 1.70158);
              },
              easeOutBack: function (e) {
                return --e * e * (2.70158 * e + 1.70158) + 1;
              },
              easeInOutBack: function (e) {
                var t = 1.70158;
                return (e /= 0.5) < 1
                  ? e * e * ((1 + (t *= 1.525)) * e - t) * 0.5
                  : 0.5 * ((e -= 2) * e * ((1 + (t *= 1.525)) * e + t) + 2);
              },
              getEasing: function (e) {
                return "function" == typeof e ? e : this[e] || this.easeLinear;
              },
            },
            U =
              (a(F, [
                {
                  key: "set",
                  value: function (e, t) {
                    return (this.x = e), (this.y = t), this;
                  },
                },
                {
                  key: "setX",
                  value: function (e) {
                    return (this.x = e), this;
                  },
                },
                {
                  key: "setY",
                  value: function (e) {
                    return (this.y = e), this;
                  },
                },
                {
                  key: "getGradient",
                  value: function () {
                    return 0 !== this.x
                      ? Math.atan2(this.y, this.x)
                      : 0 < this.y
                      ? t.PI_2
                      : this.y < 0
                      ? -t.PI_2
                      : void 0;
                  },
                },
                {
                  key: "copy",
                  value: function (e) {
                    return (this.x = e.x), (this.y = e.y), this;
                  },
                },
                {
                  key: "add",
                  value: function (e, t) {
                    return void 0 !== t
                      ? this.addVectors(e, t)
                      : ((this.x += e.x), (this.y += e.y), this);
                  },
                },
                {
                  key: "addXY",
                  value: function (e, t) {
                    return (this.x += e), (this.y += t), this;
                  },
                },
                {
                  key: "addVectors",
                  value: function (e, t) {
                    return (this.x = e.x + t.x), (this.y = e.y + t.y), this;
                  },
                },
                {
                  key: "sub",
                  value: function (e, t) {
                    return void 0 !== t
                      ? this.subVectors(e, t)
                      : ((this.x -= e.x), (this.y -= e.y), this);
                  },
                },
                {
                  key: "subVectors",
                  value: function (e, t) {
                    return (this.x = e.x - t.x), (this.y = e.y - t.y), this;
                  },
                },
                {
                  key: "divideScalar",
                  value: function (e) {
                    return (
                      0 !== e ? ((this.x /= e), (this.y /= e)) : this.set(0, 0),
                      this
                    );
                  },
                },
                {
                  key: "multiplyScalar",
                  value: function (e) {
                    return (this.x *= e), (this.y *= e), this;
                  },
                },
                {
                  key: "negate",
                  value: function () {
                    return this.multiplyScalar(-1);
                  },
                },
                {
                  key: "dot",
                  value: function (e) {
                    return this.x * e.x + this.y * e.y;
                  },
                },
                {
                  key: "lengthSq",
                  value: function () {
                    return this.x * this.x + this.y * this.y;
                  },
                },
                {
                  key: "length",
                  value: function () {
                    return Math.sqrt(this.x * this.x + this.y * this.y);
                  },
                },
                {
                  key: "normalize",
                  value: function () {
                    return this.divideScalar(this.length());
                  },
                },
                {
                  key: "distanceTo",
                  value: function (e) {
                    return Math.sqrt(this.distanceToSquared(e));
                  },
                },
                {
                  key: "rotate",
                  value: function (e) {
                    var t = this.x,
                      n = this.y;
                    return (
                      (this.x = t * Math.cos(e) + n * Math.sin(e)),
                      (this.y = -t * Math.sin(e) + n * Math.cos(e)),
                      this
                    );
                  },
                },
                {
                  key: "distanceToSquared",
                  value: function (e) {
                    var t = this.x - e.x;
                    return t * t + (e = this.y - e.y) * e;
                  },
                },
                {
                  key: "lerp",
                  value: function (e, t) {
                    return (
                      (this.x += (e.x - this.x) * t),
                      (this.y += (e.y - this.y) * t),
                      this
                    );
                  },
                },
                {
                  key: "equals",
                  value: function (e) {
                    return e.x === this.x && e.y === this.y;
                  },
                },
                {
                  key: "clear",
                  value: function () {
                    return (this.x = 0), (this.y = 0), this;
                  },
                },
                {
                  key: "clone",
                  value: function () {
                    return new F(this.x, this.y);
                  },
                },
              ]),
              F);
          function F(e, t) {
            r(this, F), (this.x = e || 0), (this.y = t || 0);
          }
          var V =
            (a(B, [
              {
                key: "getDirection",
                value: function () {
                  return Math.atan2(this.v.x, -this.v.y) * t.N180_PI;
                },
              },
              {
                key: "reset",
                value: function () {
                  return (
                    (this.life = 1 / 0),
                    (this.age = 0),
                    (this.dead = !1),
                    (this.sleep = !1),
                    (this.body = null),
                    (this.sprite = null),
                    (this.parent = null),
                    (this.energy = 1),
                    (this.mass = 1),
                    (this.radius = 10),
                    (this.alpha = 1),
                    (this.scale = 1),
                    (this.rotation = 0),
                    (this.color = null),
                    this.p.set(0, 0),
                    this.v.set(0, 0),
                    this.a.set(0, 0),
                    this.old.p.set(0, 0),
                    this.old.v.set(0, 0),
                    this.old.a.set(0, 0),
                    (this.easing = z.easeLinear),
                    this.rgb.reset(),
                    C.emptyObject(this.data),
                    this.removeAllBehaviours(),
                    this
                  );
                },
              },
              {
                key: "update",
                value: function (e, t) {
                  this.sleep || ((this.age += e), this.applyBehaviours(e, t)),
                    this.age < this.life
                      ? ((t = this.easing(this.age / this.life)),
                        (this.energy = Math.max(1 - t, 0)))
                      : this.destroy();
                },
              },
              {
                key: "applyBehaviours",
                value: function (e, t) {
                  var n = this.behaviours.length,
                    r = void 0;
                  for (r = 0; r < n; r++)
                    this.behaviours[r] &&
                      this.behaviours[r].applyBehaviour(this, e, t);
                },
              },
              {
                key: "addBehaviour",
                value: function (e) {
                  this.behaviours.push(e),
                    e.hasOwnProperty("parents") && e.parents.push(this),
                    e.initialize(this);
                },
              },
              {
                key: "addBehaviours",
                value: function (e) {
                  var t = e.length,
                    n = void 0;
                  for (n = 0; n < t; n++) this.addBehaviour(e[n]);
                },
              },
              {
                key: "removeBehaviour",
                value: function (e) {
                  -1 < (e = this.behaviours.indexOf(e)) &&
                    (this.behaviours.splice(e, 1).parents = null);
                },
              },
              {
                key: "removeAllBehaviours",
                value: function () {
                  C.emptyArray(this.behaviours);
                },
              },
              {
                key: "destroy",
                value: function () {
                  this.removeAllBehaviours(),
                    (this.energy = 0),
                    (this.dead = !0),
                    (this.parent = null);
                },
              },
            ]),
            B);
          function B(e) {
            r(this, B),
              (this.id = ""),
              (this.old = {}),
              (this.data = {}),
              (this.behaviours = []),
              (this.p = []),
              (this.v = []),
              (this.a = []),
              (this.rgb = {}),
              (this.name = "Particle"),
              (this.id = E.id(this.name)),
              (this.old = {}),
              (this.data = {}),
              (this.behaviours = []),
              (this.p = new U()),
              (this.v = new U()),
              (this.a = new U()),
              (this.old.p = new U()),
              (this.old.v = new U()),
              (this.old.a = new U()),
              (this.rgb = new D()),
              this.reset(),
              e && C.setProp(this, e);
          }
          var W = {
              hexToRgb: function (e) {
                return (
                  (e = "#" === e.charAt(0) ? e.substring(1, 7) : e),
                  {
                    r: parseInt(e.substring(0, 2), 16),
                    g: parseInt(e.substring(2, 4), 16),
                    b: parseInt(e.substring(4, 6), 16),
                  }
                );
              },
              rgbToHex: function (e) {
                return "rgb(" + e.r + ", " + e.g + ", " + e.b + ")";
              },
              getHex16FromParticle: function (e) {
                return (
                  65536 * Number(e.rgb.r) +
                  256 * Number(e.rgb.g) +
                  Number(e.rgb.b)
                );
              },
            },
            q =
              (a($, [
                {
                  key: "set",
                  value: function (e, t) {
                    return (this.r = e), (this.tha = t), this;
                  },
                },
                {
                  key: "setR",
                  value: function (e) {
                    return (this.r = e), this;
                  },
                },
                {
                  key: "setTha",
                  value: function (e) {
                    return (this.tha = e), this;
                  },
                },
                {
                  key: "copy",
                  value: function (e) {
                    return (this.r = e.r), (this.tha = e.tha), this;
                  },
                },
                {
                  key: "toVector",
                  value: function () {
                    return new U(this.getX(), this.getY());
                  },
                },
                {
                  key: "getX",
                  value: function () {
                    return this.r * Math.sin(this.tha);
                  },
                },
                {
                  key: "getY",
                  value: function () {
                    return -this.r * Math.cos(this.tha);
                  },
                },
                {
                  key: "normalize",
                  value: function () {
                    return (this.r = 1), this;
                  },
                },
                {
                  key: "equals",
                  value: function (e) {
                    return e.r === this.r && e.tha === this.tha;
                  },
                },
                {
                  key: "clear",
                  value: function () {
                    return (this.r = 0), (this.tha = 0), this;
                  },
                },
                {
                  key: "clone",
                  value: function () {
                    return new $(this.r, this.tha);
                  },
                },
              ]),
              $);
          function $(e, t) {
            r(this, $), (this.r = Math.abs(e) || 0), (this.tha = t || 0);
          }
          var H = {
              create: function (e) {
                var t = new Float32Array(9);
                return e && this.set(e, t), t;
              },
              set: function (e, t) {
                for (var n = 0; n < 9; n++) t[n] = e[n];
                return t;
              },
              multiply: function (e, t, n) {
                var r = e[0],
                  a = e[1],
                  o = e[2],
                  i = e[3],
                  l = e[4],
                  s = e[6],
                  u = e[7],
                  c = t[0],
                  d = t[1],
                  p = t[2],
                  f = t[3],
                  h = t[4];
                return (
                  (e = t[6]),
                  (t = t[7]),
                  (n[0] = c * r + d * i),
                  (n[1] = c * a + d * l),
                  (n[2] = o * p),
                  (n[3] = f * r + h * i),
                  (n[4] = f * a + h * l),
                  (n[6] = e * r + t * i + s),
                  (n[7] = e * a + t * l + u),
                  n
                );
              },
              inverse: function (e, t) {
                var n = e[0],
                  r = e[1],
                  a = e[3],
                  o = e[4],
                  i = e[6],
                  l = e[7],
                  s = -a;
                return (
                  (e = l * a - o * i),
                  (a = 1 / (n * o + r * s)),
                  (t[0] = o * a),
                  (t[1] = -r * a),
                  (t[3] = s * a),
                  (t[4] = n * a),
                  (t[6] = e * a),
                  (t[7] = (-l * n + r * i) * a),
                  t
                );
              },
              multiplyVec2: function (e, t, n) {
                var r = t[0];
                return (
                  (t = t[1]),
                  (n[0] = r * e[0] + t * e[3] + e[6]),
                  (n[1] = r * e[1] + t * e[4] + e[7]),
                  n
                );
              },
            },
            Y =
              (l(K, u),
              a(
                K,
                [
                  {
                    key: "getValue",
                    value: function () {
                      var e = C.getRandFromArray(this._arr);
                      return "random" === e || "Random" === e
                        ? t.randomColor()
                        : e;
                    },
                  },
                ],
                [
                  {
                    key: "createArraySpan",
                    value: function (e) {
                      return e ? (e instanceof K ? e : new K(e)) : null;
                    },
                  },
                ]
              ),
              K);
          function K(e) {
            r(this, K);
            var t = s(
              this,
              (K.__proto__ || Object.getPrototypeOf(K)).call(this)
            );
            return (t._arr = C.toArray(e)), t;
          }
          var Q =
            (a(G, [
              {
                key: "contains",
                value: function (e, t) {
                  return (
                    e <= this.right &&
                    e >= this.x &&
                    t <= this.bottom &&
                    t >= this.y
                  );
                },
              },
            ]),
            G);
          function G(e, t, n, a) {
            r(this, G),
              (this.x = e),
              (this.y = t),
              (this.width = n),
              (this.height = a),
              (this.bottom = this.y + this.height),
              (this.right = this.x + this.width);
          }
          var Z =
            (a(X, [
              {
                key: "init",
                value: function () {
                  (this.startTime = 0),
                    (this.nextTime = this.timePan.getValue());
                },
              },
              {
                key: "getValue",
                value: function (e) {
                  return (
                    (this.startTime += e),
                    this.startTime >= this.nextTime
                      ? ((this.startTime = 0),
                        (this.nextTime = this.timePan.getValue()),
                        1 === this.numPan.b
                          ? 0.5 < this.numPan.getValue(!1)
                            ? 1
                            : 0
                          : this.numPan.getValue(!0))
                      : 0
                  );
                },
              },
            ]),
            X);
          function X(e, t) {
            r(this, X),
              (this.numPan = u.setSpanValue(C.initValue(e, 1))),
              (this.timePan = u.setSpanValue(C.initValue(t, 1))),
              (this.startTime = 0),
              (this.nextTime = 0),
              this.init();
          }
          var J =
            (a(ee, [
              { key: "reset", value: function () {} },
              {
                key: "init",
                value: function (e, t) {
                  t ? this.initialize(t) : this.initialize(e);
                },
              },
              { key: "initialize", value: function () {} },
            ]),
            ee);
          function ee() {
            r(this, ee);
          }
          var te =
            (l(ne, J),
            a(ne, [
              {
                key: "initialize",
                value: function (e) {
                  this.lifePan.a === 1 / 0
                    ? (e.life = 1 / 0)
                    : (e.life = this.lifePan.getValue());
                },
              },
            ]),
            ne);
          function ne(e, t, n) {
            r(this, ne);
            var a = s(
              this,
              (ne.__proto__ || Object.getPrototypeOf(ne)).call(this)
            );
            return (a.lifePan = u.setSpanValue(e, t, n)), (a.name = "Life"), a;
          }
          var re =
            (a(ae, [
              { key: "getPosition", value: function () {} },
              { key: "crossing", value: function () {} },
            ]),
            ae);
          function ae() {
            r(this, ae),
              (this.vector = new U(0, 0)),
              (this.random = 0),
              (this.crossType = "dead"),
              (this.alert = !0);
          }
          var oe =
            (l(ie, re),
            a(ie, [
              {
                key: "getPosition",
                value: function () {
                  return (
                    (this.vector.x = this.x),
                    (this.vector.y = this.y),
                    this.vector
                  );
                },
              },
              {
                key: "crossing",
                value: function () {
                  this.alert &&
                    (console.error(
                      "Sorry, PointZone does not support crossing method!"
                    ),
                    (this.alert = !1));
                },
              },
            ]),
            ie);
          function ie(e, t) {
            r(this, ie);
            var n = s(
              this,
              (ie.__proto__ || Object.getPrototypeOf(ie)).call(this)
            );
            return (n.x = e), (n.y = t), n;
          }
          var le =
            (l(se, J),
            a(se, [
              {
                key: "reset",
                value: function (e) {
                  this.zone = C.initValue(e, new oe());
                },
              },
              {
                key: "initialize",
                value: function (e) {
                  this.zone.getPosition(),
                    (e.p.x = this.zone.vector.x),
                    (e.p.y = this.zone.vector.y);
                },
              },
            ]),
            se);
          function se(e) {
            r(this, se);
            var t = s(
              this,
              (se.__proto__ || Object.getPrototypeOf(se)).call(this)
            );
            return (
              (t.zone = C.initValue(e, new oe())), (t.name = "Position"), t
            );
          }
          var ue =
            (l(ce, J),
            a(ce, [
              {
                key: "reset",
                value: function (e, t, n) {
                  (this.rPan = u.setSpanValue(e)),
                    (this.thaPan = u.setSpanValue(t)),
                    (this.type = C.initValue(n, "vector"));
                },
              },
              {
                key: "normalizeVelocity",
                value: function (e) {
                  return e * j.MEASURE;
                },
              },
              {
                key: "initialize",
                value: function (e) {
                  var n;
                  "p" === this.type ||
                  "P" === this.type ||
                  "polar" === this.type
                    ? ((n = new q(
                        this.normalizeVelocity(this.rPan.getValue()),
                        this.thaPan.getValue() * t.PI_180
                      )),
                      (e.v.x = n.getX()),
                      (e.v.y = n.getY()))
                    : ((e.v.x = this.normalizeVelocity(this.rPan.getValue())),
                      (e.v.y = this.normalizeVelocity(this.thaPan.getValue())));
                },
              },
            ]),
            ce);
          function ce(e, t, n) {
            r(this, ce);
            var a = s(
              this,
              (ce.__proto__ || Object.getPrototypeOf(ce)).call(this)
            );
            return (
              (a.rPan = u.setSpanValue(e)),
              (a.thaPan = u.setSpanValue(t)),
              (a.type = C.initValue(n, "vector")),
              (a.name = "Velocity"),
              a
            );
          }
          var de =
            (l(pe, J),
            a(pe, [
              {
                key: "initialize",
                value: function (e) {
                  e.mass = this.massPan.getValue();
                },
              },
            ]),
            pe);
          function pe(e, t, n) {
            r(this, pe);
            var a = s(
              this,
              (pe.__proto__ || Object.getPrototypeOf(pe)).call(this)
            );
            return (a.massPan = u.setSpanValue(e, t, n)), (a.name = "Mass"), a;
          }
          var fe =
            (l(he, J),
            a(he, [
              {
                key: "reset",
                value: function (e, t, n) {
                  this.radius = u.setSpanValue(e, t, n);
                },
              },
              {
                key: "initialize",
                value: function (e) {
                  (e.radius = this.radius.getValue()),
                    (e.data.oldRadius = e.radius);
                },
              },
            ]),
            he);
          function he(e, t, n) {
            r(this, he);
            var a = s(
              this,
              (he.__proto__ || Object.getPrototypeOf(he)).call(this)
            );
            return (a.radius = u.setSpanValue(e, t, n)), (a.name = "Radius"), a;
          }
          var me =
            (l(ye, J),
            a(ye, [
              {
                key: "initialize",
                value: function (e) {
                  var t = this.image.getValue();
                  e.body =
                    "string" == typeof t
                      ? {
                          width: this.w,
                          height: this.h,
                          src: t,
                          isInner: !0,
                          inner: !0,
                        }
                      : t;
                },
              },
              {
                key: "setSpanValue",
                value: function (e) {
                  return e instanceof Y ? e : new Y(e);
                },
              },
            ]),
            ye);
          function ye(e, t, n) {
            r(this, ye);
            var a = s(
              this,
              (ye.__proto__ || Object.getPrototypeOf(ye)).call(this)
            );
            return (
              (a.image = a.setSpanValue(e)),
              (a.w = C.initValue(t, 20)),
              (a.h = C.initValue(n, a.w)),
              (a.name = "Body"),
              a
            );
          }
          var ge =
            (a(ve, [
              {
                key: "reset",
                value: function (e, t) {
                  (this.life = C.initValue(e, 1 / 0)),
                    (this.easing = z.getEasing(t));
                },
              },
              {
                key: "normalizeForce",
                value: function (e) {
                  return e.multiplyScalar(j.MEASURE);
                },
              },
              {
                key: "normalizeValue",
                value: function (e) {
                  return e * j.MEASURE;
                },
              },
              { key: "initialize", value: function () {} },
              {
                key: "calculate",
                value: function (e, t) {
                  (this.age += t),
                    this.age >= this.life || this.dead
                      ? ((this.energy = 0), (this.dead = !0), this.destroy())
                      : ((e = this.easing(e.age / e.life)),
                        (this.energy = Math.max(1 - e, 0)));
                },
              },
              {
                key: "destroy",
                value: function () {
                  for (var e = this.parents.length; e--; )
                    this.parents[e].removeBehaviour(this);
                  this.parents.length = 0;
                },
              },
            ]),
            ve);
          function ve(e, t) {
            r(this, ve),
              (this.life = C.initValue(e, 1 / 0)),
              (this.easing = z.getEasing(t)),
              (this.age = 0),
              (this.energy = 1),
              (this.dead = !1),
              (this.parents = []),
              (this.id = "Behaviour_" + ve.id++),
              (this.name = "Behaviour");
          }
          ge.id = 0;
          var be =
            (l(_e, ge),
            a(_e, [
              {
                key: "reset",
                value: function (e, t, n, r) {
                  (this.force = this.normalizeForce(new U(e, t))),
                    n &&
                      i(
                        _e.prototype.__proto__ ||
                          Object.getPrototypeOf(_e.prototype),
                        "reset",
                        this
                      ).call(this, n, r);
                },
              },
              {
                key: "applyBehaviour",
                value: function (e, t, n) {
                  this.calculate(e, t, n), e.a.add(this.force);
                },
              },
            ]),
            _e);
          function _e(e, t, n, a) {
            return (
              r(this, _e),
              ((a = s(
                this,
                (_e.__proto__ || Object.getPrototypeOf(_e)).call(this, n, a)
              )).force = a.normalizeForce(new U(e, t))),
              (a.name = "Force"),
              a
            );
          }
          var we =
            (l(ke, ge),
            a(ke, [
              {
                key: "reset",
                value: function (e, t, n, r, a) {
                  (this.targetPosition = C.initValue(e, new U())),
                    (this.radius = C.initValue(n, 1e3)),
                    (this.force = C.initValue(this.normalizeValue(t), 100)),
                    (this.radiusSq = this.radius * this.radius),
                    (this.attractionForce = new U()),
                    (this.lengthSq = 0),
                    r &&
                      i(
                        ke.prototype.__proto__ ||
                          Object.getPrototypeOf(ke.prototype),
                        "reset",
                        this
                      ).call(this, r, a);
                },
              },
              {
                key: "applyBehaviour",
                value: function (e, t, n) {
                  this.calculate(e, t, n),
                    this.attractionForce.copy(this.targetPosition),
                    this.attractionForce.sub(e.p),
                    (this.lengthSq = this.attractionForce.lengthSq()),
                    4e-5 < this.lengthSq &&
                      this.lengthSq < this.radiusSq &&
                      (this.attractionForce.normalize(),
                      this.attractionForce.multiplyScalar(
                        1 - this.lengthSq / this.radiusSq
                      ),
                      this.attractionForce.multiplyScalar(this.force),
                      e.a.add(this.attractionForce));
                },
              },
            ]),
            ke);
          function ke(e, t, n, a, o) {
            return (
              r(this, ke),
              ((o = s(
                this,
                (ke.__proto__ || Object.getPrototypeOf(ke)).call(this, a, o)
              )).targetPosition = C.initValue(e, new U())),
              (o.radius = C.initValue(n, 1e3)),
              (o.force = C.initValue(o.normalizeValue(t), 100)),
              (o.radiusSq = o.radius * o.radius),
              (o.attractionForce = new U()),
              (o.lengthSq = 0),
              (o.name = "Attraction"),
              o
            );
          }
          var Ce =
            (l(Pe, ge),
            a(Pe, [
              {
                key: "reset",
                value: function (e, t, n, r, a) {
                  (this.panFoce = new U(e, t)),
                    (this.panFoce = this.normalizeForce(this.panFoce)),
                    (this.delay = n),
                    r &&
                      i(
                        Pe.prototype.__proto__ ||
                          Object.getPrototypeOf(Pe.prototype),
                        "reset",
                        this
                      ).call(this, r, a);
                },
              },
              {
                key: "initialize",
                value: function (e) {
                  e.data.time = 0;
                },
              },
              {
                key: "applyBehaviour",
                value: function (e, n, r) {
                  this.calculate(e, n, r),
                    (e.data.time += n),
                    e.data.time >= this.delay &&
                      (e.a.addXY(
                        t.randomAToB(-this.panFoce.x, this.panFoce.x),
                        t.randomAToB(-this.panFoce.y, this.panFoce.y)
                      ),
                      (e.data.time = 0));
                },
              },
            ]),
            Pe);
          function Pe(e, t, n, a, o) {
            return (
              r(this, Pe),
              (o = s(
                this,
                (Pe.__proto__ || Object.getPrototypeOf(Pe)).call(this, a, o)
              )).reset(e, t, n),
              (o.time = 0),
              (o.name = "RandomDrift"),
              o
            );
          }
          var Ee =
            (l(xe, be),
            a(xe, [
              {
                key: "reset",
                value: function (e, t, n) {
                  i(
                    xe.prototype.__proto__ ||
                      Object.getPrototypeOf(xe.prototype),
                    "reset",
                    this
                  ).call(this, 0, e, t, n);
                },
              },
            ]),
            xe);
          function xe(e, t, n) {
            return (
              r(this, xe),
              ((n = s(
                this,
                (xe.__proto__ || Object.getPrototypeOf(xe)).call(
                  this,
                  0,
                  e,
                  t,
                  n
                )
              )).name = "Gravity"),
              n
            );
          }
          var Re =
            (l(Se, ge),
            a(Se, [
              {
                key: "reset",
                value: function (e, t, n, r, a) {
                  (this.emitter = C.initValue(e, null)),
                    (this.mass = C.initValue(t, !0)),
                    (this.callback = C.initValue(n, null)),
                    (this.collisionPool = []),
                    (this.delta = new U()),
                    r &&
                      i(
                        Se.prototype.__proto__ ||
                          Object.getPrototypeOf(Se.prototype),
                        "reset",
                        this
                      ).call(this, r, a);
                },
              },
              {
                key: "applyBehaviour",
                value: function (e, t, n) {
                  var r,
                    a,
                    o,
                    i,
                    l,
                    s,
                    u = (
                      this.emitter ? this.emitter.particles : this.pool
                    ).slice(n),
                    c = u.length,
                    d = void 0,
                    p = void 0;
                  for (p = 0; p < c; p++)
                    (d = u[p]) !== e &&
                      (this.delta.copy(d.p),
                      this.delta.sub(e.p),
                      (r = this.delta.lengthSq()) <=
                        (s = e.radius + d.radius) * s &&
                        ((a = s - Math.sqrt(r)),
                        (a += 0.5),
                        (o = e.mass + d.mass),
                        (i = this.mass ? d.mass / o : 0.5),
                        (l = this.mass ? e.mass / o : 0.5),
                        e.p.add(
                          this.delta
                            .clone()
                            .normalize()
                            .multiplyScalar(a * -i)
                        ),
                        d.p.add(this.delta.normalize().multiplyScalar(a * l)),
                        this.callback && this.callback(e, d)));
                },
              },
            ]),
            Se);
          function Se(e, t, n, a, o) {
            return (
              r(this, Se),
              (o = s(
                this,
                (Se.__proto__ || Object.getPrototypeOf(Se)).call(this, a, o)
              )).reset(e, t, n),
              (o.name = "Collision"),
              o
            );
          }
          var Te =
            (l(Ie, ge),
            a(Ie, [
              {
                key: "reset",
                value: function (e, t, n, r) {
                  (this.zone = e),
                    (this.zone.crossType = C.initValue(t, "dead")),
                    n &&
                      i(
                        Ie.prototype.__proto__ ||
                          Object.getPrototypeOf(Ie.prototype),
                        "reset",
                        this
                      ).call(this, n, r);
                },
              },
              {
                key: "applyBehaviour",
                value: function (e, t, n) {
                  this.calculate(e, t, n), this.zone.crossing(e);
                },
              },
            ]),
            Ie);
          function Ie(e, t, n, a) {
            return (
              r(this, Ie),
              (a = s(
                this,
                (Ie.__proto__ || Object.getPrototypeOf(Ie)).call(this, n, a)
              )).reset(e, t),
              (a.name = "CrossZone"),
              a
            );
          }
          var Oe =
            (l(Ae, ge),
            a(Ae, [
              {
                key: "reset",
                value: function (e, t, n, r) {
                  (this.same = null == t),
                    (this.a = u.setSpanValue(C.initValue(e, 1))),
                    (this.b = u.setSpanValue(t)),
                    n &&
                      i(
                        Ae.prototype.__proto__ ||
                          Object.getPrototypeOf(Ae.prototype),
                        "reset",
                        this
                      ).call(this, n, r);
                },
              },
              {
                key: "initialize",
                value: function (e) {
                  (e.data.alphaA = this.a.getValue()),
                    this.same
                      ? (e.data.alphaB = e.data.alphaA)
                      : (e.data.alphaB = this.b.getValue());
                },
              },
              {
                key: "applyBehaviour",
                value: function (e, t, n) {
                  this.calculate(e, t, n),
                    (e.alpha =
                      e.data.alphaB +
                      (e.data.alphaA - e.data.alphaB) * this.energy),
                    e.alpha < 0.001 && (e.alpha = 0);
                },
              },
            ]),
            Ae);
          function Ae(e, t, n, a) {
            return (
              r(this, Ae),
              (a = s(
                this,
                (Ae.__proto__ || Object.getPrototypeOf(Ae)).call(this, n, a)
              )).reset(e, t),
              (a.name = "Alpha"),
              a
            );
          }
          var Me =
            (l(je, ge),
            a(je, [
              {
                key: "reset",
                value: function (e, t, n, r) {
                  (this.same = null == t),
                    (this.a = u.setSpanValue(C.initValue(e, 1))),
                    (this.b = u.setSpanValue(t)),
                    n &&
                      i(
                        je.prototype.__proto__ ||
                          Object.getPrototypeOf(je.prototype),
                        "reset",
                        this
                      ).call(this, n, r);
                },
              },
              {
                key: "initialize",
                value: function (e) {
                  (e.data.scaleA = this.a.getValue()),
                    (e.data.oldRadius = e.radius),
                    (e.data.scaleB = this.same
                      ? e.data.scaleA
                      : this.b.getValue());
                },
              },
              {
                key: "applyBehaviour",
                value: function (e, t, n) {
                  this.calculate(e, t, n),
                    (e.scale =
                      e.data.scaleB +
                      (e.data.scaleA - e.data.scaleB) * this.energy),
                    e.scale < 1e-4 && (e.scale = 0),
                    (e.radius = e.data.oldRadius * e.scale);
                },
              },
            ]),
            je);
          function je(e, t, n, a) {
            return (
              r(this, je),
              (a = s(
                this,
                (je.__proto__ || Object.getPrototypeOf(je)).call(this, n, a)
              )).reset(e, t),
              (a.name = "Scale"),
              a
            );
          }
          var Ne =
            (l(De, ge),
            a(De, [
              {
                key: "reset",
                value: function (e, t, n, r, a) {
                  (this.same = null == t),
                    (this.a = u.setSpanValue(C.initValue(e, "Velocity"))),
                    (this.b = u.setSpanValue(C.initValue(t, 0))),
                    (this.style = C.initValue(n, "to")),
                    r &&
                      i(
                        De.prototype.__proto__ ||
                          Object.getPrototypeOf(De.prototype),
                        "reset",
                        this
                      ).call(this, r, a);
                },
              },
              {
                key: "initialize",
                value: function (e) {
                  (e.rotation = this.a.getValue()),
                    (e.data.rotationA = this.a.getValue()),
                    this.same || (e.data.rotationB = this.b.getValue());
                },
              },
              {
                key: "applyBehaviour",
                value: function (e, t, n) {
                  this.calculate(e, t, n),
                    this.same
                      ? ("V" !== this.a.a &&
                          "Velocity" !== this.a.a &&
                          "v" !== this.a.a) ||
                        (e.rotation = e.getDirection())
                      : "to" === this.style ||
                        "TO" === this.style ||
                        "_" === this.style
                      ? (e.rotation +=
                          e.data.rotationB +
                          (e.data.rotationA - e.data.rotationB) * this.energy)
                      : (e.rotation += e.data.rotationB);
                },
              },
            ]),
            De);
          function De(e, t, n, a, o) {
            return (
              r(this, De),
              (o = s(
                this,
                (De.__proto__ || Object.getPrototypeOf(De)).call(this, a, o)
              )).reset(e, t, n),
              (o.name = "Rotate"),
              o
            );
          }
          var Le =
            (l(ze, ge),
            a(ze, [
              {
                key: "reset",
                value: function (e, t, n, r) {
                  (this.a = Y.createArraySpan(e)),
                    (this.b = Y.createArraySpan(t)),
                    n &&
                      i(
                        ze.prototype.__proto__ ||
                          Object.getPrototypeOf(ze.prototype),
                        "reset",
                        this
                      ).call(this, n, r);
                },
              },
              {
                key: "initialize",
                value: function (e) {
                  (e.color = this.a.getValue()),
                    (e.data.colorA = W.hexToRgb(e.color)),
                    this.b && (e.data.colorB = W.hexToRgb(this.b.getValue()));
                },
              },
              {
                key: "applyBehaviour",
                value: function (e, t, n) {
                  this.b
                    ? (this.calculate(e, t, n),
                      (e.rgb.r =
                        e.data.colorB.r +
                        (e.data.colorA.r - e.data.colorB.r) * this.energy),
                      (e.rgb.g =
                        e.data.colorB.g +
                        (e.data.colorA.g - e.data.colorB.g) * this.energy),
                      (e.rgb.b =
                        e.data.colorB.b +
                        (e.data.colorA.b - e.data.colorB.b) * this.energy),
                      (e.rgb.r = Math.floor(e.rgb.r)),
                      (e.rgb.g = Math.floor(e.rgb.g)),
                      (e.rgb.b = Math.floor(e.rgb.b)))
                    : ((e.rgb.r = e.data.colorA.r),
                      (e.rgb.g = e.data.colorA.g),
                      (e.rgb.b = e.data.colorA.b));
                },
              },
            ]),
            ze);
          function ze(e, t, n, a) {
            return (
              r(this, ze),
              (a = s(
                this,
                (ze.__proto__ || Object.getPrototypeOf(ze)).call(this, n, a)
              )).reset(e, t),
              (a.name = "Color"),
              a
            );
          }
          var Ue = "changing",
            Fe =
              (l(Ve, ge),
              a(Ve, [
                {
                  key: "setAngleAndForce",
                  value: function (e, n) {
                    (this.force = Ue),
                      (this.angle = t.PI / 2),
                      "right" === e
                        ? (this.angle = t.PI / 2)
                        : "left" === e
                        ? (this.angle = -t.PI / 2)
                        : "random" === e
                        ? (this.angle = "random")
                        : e instanceof u
                        ? ((this.angle = "span"), (this.span = e))
                        : e && (this.angle = e),
                      "changing" === String(n).toLowerCase() ||
                      "chang" === String(n).toLowerCase() ||
                      "auto" === String(n).toLowerCase()
                        ? (this.force = Ue)
                        : n && (this.force = n);
                  },
                },
                {
                  key: "reset",
                  value: function (e, n, r, a) {
                    (this.angle = t.PI / 2),
                      this.setAngleAndForce(e, n),
                      r &&
                        i(
                          Ve.prototype.__proto__ ||
                            Object.getPrototypeOf(Ve.prototype),
                          "reset",
                          this
                        ).call(this, r, a);
                  },
                },
                {
                  key: "initialize",
                  value: function (e) {
                    "random" === this.angle
                      ? (e.data.cangle = t.randomAToB(-t.PI, t.PI))
                      : "span" === this.angle &&
                        (e.data.cangle = this.span.getValue()),
                      (e.data.cyclone = new U(0, 0));
                  },
                },
                {
                  key: "applyBehaviour",
                  value: function (e, t, n) {
                    this.calculate(e, t, n),
                      (t = void 0),
                      (n = e.v.getGradient()),
                      "random" === this.angle || "span" === this.angle
                        ? (n += e.data.cangle)
                        : (n += this.angle),
                      (t = this.force === Ue ? e.v.length() / 100 : this.force),
                      (e.data.cyclone.x = t * Math.cos(n)),
                      (e.data.cyclone.y = t * Math.sin(n)),
                      (e.data.cyclone = this.normalizeForce(e.data.cyclone)),
                      e.a.add(e.data.cyclone);
                  },
                },
              ]),
              Ve);
          function Ve(e, t, n, a) {
            return (
              r(this, Ve),
              (a = s(
                this,
                (Ve.__proto__ || Object.getPrototypeOf(Ve)).call(this, n, a)
              )).setAngleAndForce(e, t),
              (a.name = "Cyclone"),
              a
            );
          }
          var Be =
            (l(We, we),
            a(We, [
              {
                key: "reset",
                value: function (e, t, n, r, a) {
                  i(
                    We.prototype.__proto__ ||
                      Object.getPrototypeOf(We.prototype),
                    "reset",
                    this
                  ).call(this, e, t, n, r, a),
                    (this.force *= -1);
                },
              },
            ]),
            We);
          function We(e, t, n, a, o) {
            return (
              r(this, We),
              ((o = s(
                this,
                (We.__proto__ || Object.getPrototypeOf(We)).call(
                  this,
                  e,
                  t,
                  n,
                  a,
                  o
                )
              )).force *= -1),
              (o.name = "Repulsion"),
              o
            );
          }
          var qe =
            (l($e, ge),
            a($e, [
              {
                key: "reset",
                value: function (e, t, n, r) {
                  (this.distanceVec = new U()),
                    (this.centerPoint = C.initValue(e, new U())),
                    (this.force = C.initValue(this.normalizeValue(t), 100)),
                    n &&
                      i(
                        $e.prototype.__proto__ ||
                          Object.getPrototypeOf($e.prototype),
                        "reset",
                        this
                      ).call(this, n, r);
                },
              },
              { key: "initialize", value: function () {} },
              {
                key: "applyBehaviour",
                value: function (e, t) {
                  this.distanceVec.set(
                    this.centerPoint.x - e.p.x,
                    this.centerPoint.y - e.p.y
                  );
                  var n,
                    r = this.distanceVec.lengthSq();
                  0 !== r &&
                    ((n = this.distanceVec.length()),
                    (n = (this.force * t) / (r * n)),
                    (e.v.x += n * this.distanceVec.x),
                    (e.v.y += n * this.distanceVec.y));
                },
              },
            ]),
            $e);
          function $e(e, t, n, a) {
            return (
              r(this, $e),
              ((a = s(
                this,
                ($e.__proto__ || Object.getPrototypeOf($e)).call(this, n, a)
              )).distanceVec = new U()),
              (a.centerPoint = C.initValue(e, new U())),
              (a.force = C.initValue(a.normalizeValue(t), 100)),
              (a.name = "GravityWell"),
              a
            );
          }
          var He = {
              initialize: function (e, t, n) {
                var r = n.length,
                  a = void 0;
                for (a = 0; a < r; a++)
                  n[a] instanceof J ? n[a].init(e, t) : this.init(e, t, n[a]);
                this.bindEmitter(e, t);
              },
              init: function (e, t, n) {
                C.setProp(t, n), C.setVectorVal(t, n);
              },
              bindEmitter: function (e, n) {
                e.bindEmitter &&
                  (n.p.add(e.p),
                  n.v.add(e.v),
                  n.a.add(e.a),
                  n.v.rotate(t.degreeTransform(e.rotation)));
              },
            },
            Ye =
              (l(Ke, V),
              a(Ke, [
                {
                  key: "emit",
                  value: function (e, t) {
                    (this.stoped = !1),
                      (this.emitTime = 0),
                      (this.totalTime = C.initValue(e, 1 / 0)),
                      !0 === t || "life" === t || "destroy" === t
                        ? (this.life = "once" === e ? 1 : this.totalTime)
                        : isNaN(t) || (this.life = t),
                      this.rate.init();
                  },
                },
                {
                  key: "stop",
                  value: function () {
                    (this.totalTime = -1),
                      (this.emitTime = 0),
                      (this.stoped = !0);
                  },
                },
                {
                  key: "preEmit",
                  value: function (e) {
                    var t = this.stoped,
                      n = this.emitTime,
                      r = this.totalTime;
                    for (
                      this.stoped = !1,
                        this.emitTime = 0,
                        this.totalTime = e,
                        this.rate.init();
                      0.0167 < e;

                    )
                      (e -= 0.0167), this.update(0.0167);
                    (this.stoped = t),
                      (this.emitTime = n + Math.max(e, 0)),
                      (this.totalTime = r);
                  },
                },
                {
                  key: "removeAllParticles",
                  value: function () {
                    for (var e = this.particles.length; e--; )
                      this.particles[e].dead = !0;
                  },
                },
                {
                  key: "addSelfInitialize",
                  value: function (e) {
                    e.init ? e.init(this) : this.initAll();
                  },
                },
                {
                  key: "addInitialize",
                  value: function () {
                    for (
                      var e = arguments.length, t = Array(e), n = 0;
                      n < e;
                      n++
                    )
                      t[n] = arguments[n];
                    for (var r = t.length; r--; ) this.initializes.push(t[r]);
                  },
                },
                {
                  key: "removeInitialize",
                  value: function (e) {
                    -1 < (e = this.initializes.indexOf(e)) &&
                      this.initializes.splice(e, 1);
                  },
                },
                {
                  key: "removeAllInitializers",
                  value: function () {
                    C.emptyArray(this.initializes);
                  },
                },
                {
                  key: "addBehaviour",
                  value: function () {
                    for (
                      var e = arguments.length, t = Array(e), n = 0;
                      n < e;
                      n++
                    )
                      t[n] = arguments[n];
                    for (var r = arguments.length; r--; ) {
                      var a = t[r];
                      this.behaviours.push(a),
                        a.parents && a.parents.push(this);
                    }
                  },
                },
                {
                  key: "removeBehaviour",
                  value: function (e) {
                    var t = this.behaviours.indexOf(e);
                    return (
                      this.behaviours.splice(t, 1),
                      e.parents &&
                        ((t = e.parents.indexOf(e)), e.parents.splice(t, 1)),
                      t
                    );
                  },
                },
                {
                  key: "removeAllBehaviours",
                  value: function () {
                    C.emptyArray(this.behaviours);
                  },
                },
                {
                  key: "update",
                  value: function (e) {
                    (this.age += e),
                      (this.age >= this.life || this.dead) && this.destroy(),
                      this.emitting(e),
                      this.integrate(e);
                  },
                },
                {
                  key: "integrate",
                  value: function (e) {
                    if (this.parent) {
                      var t = 1 - this.damping;
                      this.parent.integrator.calculate(this, e, t);
                      var n = void 0,
                        r = void 0;
                      for (n = this.particles.length - 1; 0 <= n; n--)
                        (r = this.particles[n]).update(e, n),
                          this.parent.integrator.calculate(r, e, t),
                          this.dispatch("PARTICLE_UPDATE", r),
                          r.dead &&
                            (this.dispatch("PARTICLE_DEAD", r),
                            this.parent.pool.expire(r),
                            this.particles.splice(n, 1));
                    }
                  },
                },
                {
                  key: "dispatch",
                  value: function (e, t) {
                    this.parent && this.parent.dispatchEvent(e, t),
                      this.bindEvent && this.dispatchEvent(e, t);
                  },
                },
                {
                  key: "emitting",
                  value: function (e) {
                    if ("once" === this.totalTime) {
                      var t = void 0,
                        n = this.rate.getValue(99999);
                      for (0 < n && (this.emitSpeed = n), t = 0; t < n; t++)
                        this.createParticle();
                      this.totalTime = "none";
                    } else if (
                      ((this.emitTime += e), this.emitTime < this.totalTime)
                    ) {
                      var r = this.rate.getValue(e),
                        a = void 0;
                      for (0 < r && (this.emitSpeed = r), a = 0; a < r; a++)
                        this.createParticle();
                    }
                  },
                },
                {
                  key: "createParticle",
                  value: function (e, t) {
                    var n = this.parent.pool.get(V);
                    return (
                      this.setupParticle(n, e, t),
                      this.dispatch("PARTICLE_CREATED", n),
                      n
                    );
                  },
                },
                {
                  key: "setupParticle",
                  value: function (e, t, n) {
                    var r = this.initializes,
                      a = this.behaviours;
                    t && (r = C.toArray(t)),
                      n && (a = C.toArray(n)),
                      e.reset(),
                      He.initialize(this, e, r),
                      e.addBehaviours(a),
                      (e.parent = this).particles.push(e);
                  },
                },
                {
                  key: "remove",
                  value: function () {
                    this.stop(), C.destroyAll(this.particles);
                  },
                },
                {
                  key: "destroy",
                  value: function () {
                    (this.dead = !0),
                      this.remove(),
                      this.removeAllInitializers(),
                      this.removeAllBehaviours(),
                      this.parent && this.parent.removeEmitter(this);
                  },
                },
              ]),
              Ke);
          function Ke() {
            var e =
              0 < arguments.length && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            return (
              r(this, Ke),
              ((e = s(
                this,
                (Ke.__proto__ || Object.getPrototypeOf(Ke)).call(this, e)
              )).particles = []),
              (e.behaviours = []),
              (e.initializes = []),
              (e.emitTime = 0),
              (e.emitSpeed = 0),
              (e.totalTime = -1),
              (e.damping = 0.006),
              (e.bindEmitter = !0),
              (e.rate = new Z(1, 0.1)),
              (e.name = "Emitter"),
              (e.id = E.id(e.name)),
              e
            );
          }
          I.bind(Ye);
          var Qe =
            (l(Ge, Ye),
            a(Ge, [
              {
                key: "addSelfBehaviour",
                value: function () {
                  for (
                    var e = arguments.length, t = Array(e), n = 0;
                    n < e;
                    n++
                  )
                    t[n] = arguments[n];
                  var r = void 0,
                    a = t.length;
                  for (r = 0; r < a; r++) {
                    var o = t[r];
                    this.selfBehaviours.push(o), o.initialize(this);
                  }
                },
              },
              {
                key: "removeSelfBehaviour",
                value: function (e) {
                  -1 < (e = this.selfBehaviours.indexOf(e)) &&
                    this.selfBehaviours.splice(e, 1);
                },
              },
              {
                key: "update",
                value: function (e) {
                  if (
                    (i(
                      Ge.prototype.__proto__ ||
                        Object.getPrototypeOf(Ge.prototype),
                      "update",
                      this
                    ).call(this, e),
                    !this.sleep)
                  ) {
                    var t = this.selfBehaviours.length,
                      n = void 0;
                    for (n = 0; n < t; n++)
                      this.selfBehaviours[n].applyBehaviour(this, e, n);
                  }
                },
              },
            ]),
            Ge);
          function Ge(e) {
            return (
              r(this, Ge),
              ((e = s(
                this,
                (Ge.__proto__ || Object.getPrototypeOf(Ge)).call(this, e)
              )).selfBehaviours = []),
              e
            );
          }
          var Ze =
            (l(Xe, Ye),
            a(Xe, [
              {
                key: "initEventHandler",
                value: function () {
                  var e = this;
                  (this.mousemoveHandler = function (t) {
                    return e.mousemove.call(e, t);
                  }),
                    (this.mousedownHandler = function (t) {
                      return e.mousedown.call(e, t);
                    }),
                    (this.mouseupHandler = function (t) {
                      return e.mouseup.call(e, t);
                    }),
                    this.mouseTarget.addEventListener(
                      "mousemove",
                      this.mousemoveHandler,
                      !1
                    );
                },
              },
              {
                key: "emit",
                value: function () {
                  this._allowEmitting = !0;
                },
              },
              {
                key: "stop",
                value: function () {
                  this._allowEmitting = !1;
                },
              },
              {
                key: "mousemove",
                value: function (e) {
                  e.layerX || 0 === e.layerX
                    ? ((this.p.x += (e.layerX - this.p.x) * this.ease),
                      (this.p.y += (e.layerY - this.p.y) * this.ease))
                    : (!e.offsetX && 0 !== e.offsetX) ||
                      ((this.p.x += (e.offsetX - this.p.x) * this.ease),
                      (this.p.y += (e.offsetY - this.p.y) * this.ease)),
                    this._allowEmitting &&
                      i(
                        Xe.prototype.__proto__ ||
                          Object.getPrototypeOf(Xe.prototype),
                        "emit",
                        this
                      ).call(this, "once");
                },
              },
              {
                key: "destroy",
                value: function () {
                  i(
                    Xe.prototype.__proto__ ||
                      Object.getPrototypeOf(Xe.prototype),
                    "destroy",
                    this
                  ).call(this),
                    this.mouseTarget.removeEventListener(
                      "mousemove",
                      this.mousemoveHandler,
                      !1
                    );
                },
              },
            ]),
            Xe);
          function Xe(e, t, n) {
            return (
              r(this, Xe),
              ((n = s(
                this,
                (Xe.__proto__ || Object.getPrototypeOf(Xe)).call(this, n)
              )).mouseTarget = C.initValue(e, window)),
              (n.ease = C.initValue(t, 0.7)),
              (n._allowEmitting = !1),
              n.initEventHandler(),
              n
            );
          }
          var Je =
            (a(et, [
              {
                key: "setStroke",
                value: function (e, t) {
                  (e = 0 < arguments.length && void 0 !== e ? e : "#000000"),
                    (t = 1 < arguments.length && void 0 !== t ? t : 1),
                    (this.stroke = { color: e, thinkness: t });
                },
              },
              {
                key: "initHandler",
                value: function () {
                  var e = this;
                  (this._protonUpdateHandler = function () {
                    e.onProtonUpdate.call(e);
                  }),
                    (this._protonUpdateAfterHandler = function () {
                      e.onProtonUpdateAfter.call(e);
                    }),
                    (this._emitterAddedHandler = function (t) {
                      e.onEmitterAdded.call(e, t);
                    }),
                    (this._emitterRemovedHandler = function (t) {
                      e.onEmitterRemoved.call(e, t);
                    }),
                    (this._particleCreatedHandler = function (t) {
                      e.onParticleCreated.call(e, t);
                    }),
                    (this._particleUpdateHandler = function (t) {
                      e.onParticleUpdate.call(e, t);
                    }),
                    (this._particleDeadHandler = function (t) {
                      e.onParticleDead.call(e, t);
                    });
                },
              },
              {
                key: "init",
                value: function (e) {
                  (this.parent = e).addEventListener(
                    "PROTON_UPDATE",
                    this._protonUpdateHandler
                  ),
                    e.addEventListener(
                      "PROTON_UPDATE_AFTER",
                      this._protonUpdateAfterHandler
                    ),
                    e.addEventListener(
                      "EMITTER_ADDED",
                      this._emitterAddedHandler
                    ),
                    e.addEventListener(
                      "EMITTER_REMOVED",
                      this._emitterRemovedHandler
                    ),
                    e.addEventListener(
                      "PARTICLE_CREATED",
                      this._particleCreatedHandler
                    ),
                    e.addEventListener(
                      "PARTICLE_UPDATE",
                      this._particleUpdateHandler
                    ),
                    e.addEventListener(
                      "PARTICLE_DEAD",
                      this._particleDeadHandler
                    );
                },
              },
              { key: "resize", value: function () {} },
              {
                key: "destroy",
                value: function () {
                  this.remove();
                },
              },
              {
                key: "remove",
                value: function () {
                  this.parent.removeEventListener(
                    "PROTON_UPDATE",
                    this._protonUpdateHandler
                  ),
                    this.parent.removeEventListener(
                      "PROTON_UPDATE_AFTER",
                      this._protonUpdateAfterHandler
                    ),
                    this.parent.removeEventListener(
                      "EMITTER_ADDED",
                      this._emitterAddedHandler
                    ),
                    this.parent.removeEventListener(
                      "EMITTER_REMOVED",
                      this._emitterRemovedHandler
                    ),
                    this.parent.removeEventListener(
                      "PARTICLE_CREATED",
                      this._particleCreatedHandler
                    ),
                    this.parent.removeEventListener(
                      "PARTICLE_UPDATE",
                      this._particleUpdateHandler
                    ),
                    this.parent.removeEventListener(
                      "PARTICLE_DEAD",
                      this._particleDeadHandler
                    ),
                    (this.parent = null);
                },
              },
              { key: "onProtonUpdate", value: function () {} },
              { key: "onProtonUpdateAfter", value: function () {} },
              { key: "onEmitterAdded", value: function () {} },
              { key: "onEmitterRemoved", value: function () {} },
              { key: "onParticleCreated", value: function () {} },
              { key: "onParticleUpdate", value: function () {} },
              { key: "onParticleDead", value: function () {} },
            ]),
            et);
          function et(e, t) {
            r(this, et),
              (this.pool = new x()),
              (this.element = e),
              (this.stroke = t),
              (this.circleConf = { isCircle: !0 }),
              this.initHandler(),
              (this.name = "BaseRenderer");
          }
          var tt =
            (l(nt, Je),
            a(nt, [
              {
                key: "resize",
                value: function (e, t) {
                  (this.element.width = e), (this.element.height = t);
                },
              },
              {
                key: "onProtonUpdate",
                value: function () {
                  this.context.clearRect(
                    0,
                    0,
                    this.element.width,
                    this.element.height
                  );
                },
              },
              {
                key: "onParticleCreated",
                value: function (e) {
                  e.body
                    ? w(e.body, this.addImg2Body, e)
                    : (e.color = e.color || "#ff0000");
                },
              },
              {
                key: "onParticleUpdate",
                value: function (e) {
                  e.body
                    ? e.body instanceof Image && this.drawImage(e)
                    : this.drawCircle(e);
                },
              },
              {
                key: "onParticleDead",
                value: function (e) {
                  e.body = null;
                },
              },
              {
                key: "addImg2Body",
                value: function (e, t) {
                  t.body = e;
                },
              },
              {
                key: "drawImage",
                value: function (e) {
                  var n,
                    r = (e.body.width * e.scale) | 0,
                    a = (e.body.height * e.scale) | 0,
                    o = e.p.x - r / 2,
                    i = e.p.y - a / 2;
                  e.color
                    ? (e.data.buffer ||
                        (e.data.buffer = this.createBuffer(e.body)),
                      (n = e.data.buffer.getContext("2d")).clearRect(
                        0,
                        0,
                        e.data.buffer.width,
                        e.data.buffer.height
                      ),
                      (n.globalAlpha = e.alpha),
                      n.drawImage(e.body, 0, 0),
                      (n.globalCompositeOperation = "source-atop"),
                      (n.fillStyle = W.rgbToHex(e.rgb)),
                      n.fillRect(
                        0,
                        0,
                        e.data.buffer.width,
                        e.data.buffer.height
                      ),
                      (n.globalCompositeOperation = "source-over"),
                      (n.globalAlpha = 1),
                      this.context.drawImage(
                        e.data.buffer,
                        0,
                        0,
                        e.data.buffer.width,
                        e.data.buffer.height,
                        o,
                        i,
                        r,
                        a
                      ))
                    : (this.context.save(),
                      (this.context.globalAlpha = e.alpha),
                      this.context.translate(e.p.x, e.p.y),
                      this.context.rotate(t.degreeTransform(e.rotation)),
                      this.context.translate(-e.p.x, -e.p.y),
                      this.context.drawImage(
                        e.body,
                        0,
                        0,
                        e.body.width,
                        e.body.height,
                        o,
                        i,
                        r,
                        a
                      ),
                      (this.context.globalAlpha = 1),
                      this.context.restore());
                },
              },
              {
                key: "drawCircle",
                value: function (e) {
                  e.rgb
                    ? (this.context.fillStyle =
                        "rgba(" +
                        e.rgb.r +
                        "," +
                        e.rgb.g +
                        "," +
                        e.rgb.b +
                        "," +
                        e.alpha +
                        ")")
                    : (this.context.fillStyle = e.color),
                    this.context.beginPath(),
                    this.context.arc(
                      e.p.x,
                      e.p.y,
                      e.radius,
                      0,
                      2 * Math.PI,
                      !0
                    ),
                    this.stroke &&
                      ((this.context.strokeStyle = this.stroke.color),
                      (this.context.lineWidth = this.stroke.thinkness),
                      this.context.stroke()),
                    this.context.closePath(),
                    this.context.fill();
                },
              },
              {
                key: "createBuffer",
                value: function (e) {
                  if (e instanceof Image) {
                    var t = e.width + "_" + e.height,
                      n = this.bufferCache[t];
                    return (
                      n ||
                        (((n = document.createElement("canvas")).width =
                          e.width),
                        (n.height = e.height),
                        (this.bufferCache[t] = n)),
                      n
                    );
                  }
                },
              },
            ]),
            nt);
          function nt(e) {
            return (
              r(this, nt),
              ((e = s(
                this,
                (nt.__proto__ || Object.getPrototypeOf(nt)).call(this, e)
              )).stroke = null),
              (e.context = e.element.getContext("2d")),
              (e.bufferCache = {}),
              (e.name = "CanvasRenderer"),
              e
            );
          }
          var rt =
            (l(at, Je),
            a(at, [
              {
                key: "onParticleCreated",
                value: function (e) {
                  e.body
                    ? w(e.body, this.addImg2Body, e)
                    : ((e.body = this.pool.get(this.circleConf, e)),
                      this.element.appendChild(e.body));
                },
              },
              {
                key: "onParticleUpdate",
                value: function (e) {
                  this.bodyReady(e) &&
                    (this.transform3d
                      ? y.transform3d(e.body, e.p.x, e.p.y, e.scale, e.rotation)
                      : y.transform(e.body, e.p.x, e.p.y, e.scale, e.rotation),
                    (e.body.style.opacity = e.alpha),
                    e.body.isCircle &&
                      (e.body.style.backgroundColor = e.color || "#ff0000"));
                },
              },
              {
                key: "onParticleDead",
                value: function (e) {
                  this.bodyReady(e) &&
                    (this.element.removeChild(e.body),
                    this.pool.expire(e.body),
                    (e.body = null));
                },
              },
              {
                key: "bodyReady",
                value: function (e) {
                  return "object" === n(e.body) && e.body && !e.body.isInner;
                },
              },
              {
                key: "addImg2Body",
                value: function (e, t) {
                  t.dead ||
                    ((t.body = this.pool.get(e, t)),
                    y.resize(t.body, e.width, e.height),
                    this.element.appendChild(t.body));
                },
              },
              {
                key: "createBody",
                value: function (e, t) {
                  return e.isCircle
                    ? this.createCircle(t)
                    : this.createSprite(e, t);
                },
              },
              {
                key: "createCircle",
                value: function (e) {
                  var t = y.createDiv(
                    e.id + "_dom",
                    2 * e.radius,
                    2 * e.radius
                  );
                  return (
                    (t.style.borderRadius = e.radius + "px"),
                    this.stroke &&
                      ((t.style.borderColor = this.stroke.color),
                      (t.style.borderWidth = this.stroke.thinkness + "px")),
                    (t.isCircle = !0),
                    t
                  );
                },
              },
              {
                key: "createSprite",
                value: function (e, t) {
                  var n = "string" == typeof e ? e : e.src;
                  return (
                    ((e = y.createDiv(
                      t.id + "_dom",
                      e.width,
                      e.height
                    )).style.backgroundImage = "url(" + n + ")"),
                    e
                  );
                },
              },
            ]),
            at);
          function at(e) {
            r(this, at);
            var t = s(
              this,
              (at.__proto__ || Object.getPrototypeOf(at)).call(this, e)
            );
            return (
              (t.stroke = null),
              (t.pool.create = function (e, n) {
                return t.createBody(e, n);
              }),
              (t.addImg2Body = t.addImg2Body.bind(t)),
              (t.transform3d = !1),
              (t.name = "DomRenderer"),
              t
            );
          }
          var ot =
            (l(it, Je),
            a(it, [
              {
                key: "onParticleCreated",
                value: function (e) {
                  e.body ? this.createSprite(e) : this.createCircle(e),
                    this.element.addChild(e.body);
                },
              },
              {
                key: "onParticleUpdate",
                value: function (e) {
                  e.body &&
                    ((e.body.x = e.p.x),
                    (e.body.y = e.p.y),
                    (e.body.alpha = e.alpha),
                    (e.body.scaleX = e.body.scaleY = e.scale),
                    (e.body.rotation = e.rotation));
                },
              },
              {
                key: "onParticleDead",
                value: function (e) {
                  e.body &&
                    (e.body.parent && e.body.parent.removeChild(e.body),
                    this.pool.expire(e.body),
                    (e.body = null)),
                    e.graphics && this.pool.expire(e.graphics);
                },
              },
              {
                key: "createSprite",
                value: function (e) {
                  (e.body = this.pool.get(e.body)),
                    e.body.parent ||
                      (e.body.image &&
                        ((e.body.regX = e.body.image.width / 2),
                        (e.body.regY = e.body.image.height / 2)));
                },
              },
              {
                key: "createCircle",
                value: function (e) {
                  var t = this.pool.get(createjs.Graphics);
                  this.stroke &&
                    (this.stroke instanceof String
                      ? t.beginStroke(this.stroke)
                      : t.beginStroke("#000000")),
                    t
                      .beginFill(e.color || "#ff0000")
                      .drawCircle(0, 0, e.radius);
                  var n = this.pool.get(createjs.Shape, [t]);
                  (e.body = n), (e.graphics = t);
                },
              },
            ]),
            it);
          function it(e, t) {
            return (
              r(this, it),
              ((e = s(
                this,
                (it.__proto__ || Object.getPrototypeOf(it)).call(this, e)
              )).stroke = t),
              (e.name = "EaselRenderer"),
              e
            );
          }
          var lt =
            (l(st, Je),
            a(st, [
              {
                key: "resize",
                value: function (e, t) {
                  (this.element.width = e), (this.element.height = t);
                },
              },
              {
                key: "createImageData",
                value: function (e) {
                  (this.rectangle =
                    e || new Q(0, 0, this.element.width, this.element.height)),
                    (this.imageData = this.context.createImageData(
                      this.rectangle.width,
                      this.rectangle.height
                    )),
                    this.context.putImageData(
                      this.imageData,
                      this.rectangle.x,
                      this.rectangle.y
                    );
                },
              },
              {
                key: "onProtonUpdate",
                value: function () {
                  this.context.clearRect(
                    this.rectangle.x,
                    this.rectangle.y,
                    this.rectangle.width,
                    this.rectangle.height
                  ),
                    (this.imageData = this.context.getImageData(
                      this.rectangle.x,
                      this.rectangle.y,
                      this.rectangle.width,
                      this.rectangle.height
                    ));
                },
              },
              {
                key: "onProtonUpdateAfter",
                value: function () {
                  this.context.putImageData(
                    this.imageData,
                    this.rectangle.x,
                    this.rectangle.y
                  );
                },
              },
              { key: "onParticleCreated", value: function () {} },
              {
                key: "onParticleUpdate",
                value: function (e) {
                  this.imageData &&
                    this.setPixel(
                      this.imageData,
                      Math.floor(e.p.x - this.rectangle.x),
                      Math.floor(e.p.y - this.rectangle.y),
                      e
                    );
                },
              },
              {
                key: "setPixel",
                value: function (e, t, n, r) {
                  var a = r.rgb;
                  t < 0 ||
                    t > this.element.width ||
                    n < 0 ||
                    n > this.elementwidth ||
                    ((t = 4 * ((n >> 0) * e.width + (t >> 0))),
                    (e.data[t] = a.r),
                    (e.data[1 + t] = a.g),
                    (e.data[2 + t] = a.b),
                    (e.data[3 + t] = 255 * r.alpha));
                },
              },
              { key: "onParticleDead", value: function () {} },
            ]),
            st);
          function st(e, t) {
            return (
              r(this, st),
              ((e = s(
                this,
                (st.__proto__ || Object.getPrototypeOf(st)).call(this, e)
              )).context = e.element.getContext("2d")),
              (e.imageData = null),
              (e.rectangle = null),
              (e.rectangle = t),
              e.createImageData(t),
              (e.name = "PixelRenderer"),
              e
            );
          }
          var ut = void 0,
            ct =
              (l(dt, Je),
              a(dt, [
                {
                  key: "setPIXI",
                  value: function (e) {
                    try {
                      (ut = e || { Sprite: {} }),
                        (this.createFromImage =
                          ut.Sprite.from || ut.Sprite.fromImage);
                    } catch (e) {}
                  },
                },
                { key: "onProtonUpdate", value: function () {} },
                {
                  key: "onParticleCreated",
                  value: function (e) {
                    e.body
                      ? (e.body = this.pool.get(e.body, e))
                      : (e.body = this.pool.get(this.circleConf, e)),
                      this.blendMode && (e.body.blendMode = this.blendMode),
                      this.element.addChild(e.body);
                  },
                },
                {
                  key: "onParticleUpdate",
                  value: function (e) {
                    this.transform(e, e.body),
                      (!0 !== this.setColor && !0 !== this.color) ||
                        (e.body.tint = W.getHex16FromParticle(e));
                  },
                },
                {
                  key: "onParticleDead",
                  value: function (e) {
                    this.element.removeChild(e.body),
                      this.pool.expire(e.body),
                      (e.body = null);
                  },
                },
                {
                  key: "destroy",
                  value: function (e) {
                    i(
                      dt.prototype.__proto__ ||
                        Object.getPrototypeOf(dt.prototype),
                      "destroy",
                      this
                    ).call(this),
                      this.pool.destroy();
                    for (var t = e.length; t--; ) {
                      var n = e[t];
                      n.body && this.element.removeChild(n.body);
                    }
                  },
                },
                {
                  key: "transform",
                  value: function (e, n) {
                    (n.x = e.p.x),
                      (n.y = e.p.y),
                      (n.alpha = e.alpha),
                      (n.scale.x = e.scale),
                      (n.scale.y = e.scale),
                      (n.rotation = e.rotation * t.PI_180);
                  },
                },
                {
                  key: "createBody",
                  value: function (e, t) {
                    return e.isCircle
                      ? this.createCircle(t)
                      : this.createSprite(e);
                  },
                },
                {
                  key: "createSprite",
                  value: function (e) {
                    return (
                      ((e = e.isInner
                        ? this.createFromImage(e.src)
                        : new ut.Sprite(e)).anchor.x = 0.5),
                      (e.anchor.y = 0.5),
                      e
                    );
                  },
                },
                {
                  key: "createCircle",
                  value: function (e) {
                    var t,
                      n = new ut.Graphics();
                    return (
                      this.stroke &&
                        ((t = this.stroke instanceof String ? this.stroke : 0),
                        n.beginStroke(t)),
                      n.beginFill(e.color || 36077),
                      n.drawCircle(0, 0, e.radius),
                      n.endFill(),
                      n
                    );
                  },
                },
              ]),
              dt);
          function dt(e, t) {
            r(this, dt);
            var n = s(
              this,
              (dt.__proto__ || Object.getPrototypeOf(dt)).call(this, e)
            );
            return (
              (n.stroke = t),
              (n.color = !1),
              (n.setColor = !1),
              (n.blendMode = null),
              (n.pool.create = function (e, t) {
                return n.createBody(e, t);
              }),
              n.setPIXI(window.PIXI),
              (n.name = "PixiRenderer"),
              n
            );
          }
          var pt =
            (a(ft, [
              {
                key: "set",
                value: function (e, t) {
                  0 === t
                    ? H.set(e, this.mats[0])
                    : H.multiply(this.mats[t - 1], e, this.mats[t]),
                    (this.size = Math.max(this.size, t + 1));
                },
              },
              {
                key: "push",
                value: function (e) {
                  0 === this.size
                    ? H.set(e, this.mats[0])
                    : H.multiply(
                        this.mats[this.size - 1],
                        e,
                        this.mats[this.size]
                      ),
                    this.size++;
                },
              },
              {
                key: "pop",
                value: function () {
                  0 < this.size && this.size--;
                },
              },
              {
                key: "top",
                value: function () {
                  return this.mats[this.size - 1];
                },
              },
            ]),
            ft);
          function ft() {
            r(this, ft), (this.mats = []);
            for (var e = (this.size = 0); e < 20; e++)
              this.mats.push(H.create([0, 0, 0, 0, 0, 0, 0, 0, 0]));
          }
          function ht(e) {
            return (
              r(this, ht),
              ((e = s(
                this,
                (ht.__proto__ || Object.getPrototypeOf(ht)).call(this, e)
              )).gl = e.element.getContext("experimental-webgl", {
                antialias: !0,
                stencil: !1,
                depth: !1,
              })),
              e.gl || alert("Sorry your browser do not suppest WebGL!"),
              e.initVar(),
              e.setMaxRadius(),
              e.initShaders(),
              e.initBuffers(),
              e.gl.blendEquation(e.gl.FUNC_ADD),
              e.gl.blendFunc(e.gl.SRC_ALPHA, e.gl.ONE_MINUS_SRC_ALPHA),
              e.gl.enable(e.gl.BLEND),
              (e.addImg2Body = e.addImg2Body.bind(e)),
              (e.name = "WebGLRenderer"),
              e
            );
          }
          function mt(e) {
            return (
              r(this, mt),
              ((e = s(
                this,
                (mt.__proto__ || Object.getPrototypeOf(mt)).call(this, e)
              )).name = "CustomRenderer"),
              e
            );
          }
          l(ht, Je),
            a(ht, [
              {
                key: "init",
                value: function (e) {
                  i(
                    ht.prototype.__proto__ ||
                      Object.getPrototypeOf(ht.prototype),
                    "init",
                    this
                  ).call(this, e),
                    this.resize(this.element.width, this.element.height);
                },
              },
              {
                key: "resize",
                value: function (e, t) {
                  (this.umat[4] = -2),
                    (this.umat[7] = 1),
                    (this.smat[0] = 1 / e),
                    (this.smat[4] = 1 / t),
                    this.mstack.set(this.umat, 0),
                    this.mstack.set(this.smat, 1),
                    this.gl.viewport(0, 0, e, t),
                    (this.element.width = e),
                    (this.element.height = t);
                },
              },
              {
                key: "setMaxRadius",
                value: function (e) {
                  this.circleCanvasURL = this.createCircle(e);
                },
              },
              {
                key: "getVertexShader",
                value: function () {
                  return [
                    "uniform vec2 viewport;",
                    "attribute vec2 aVertexPosition;",
                    "attribute vec2 aTextureCoord;",
                    "uniform mat3 tMat;",
                    "varying vec2 vTextureCoord;",
                    "varying float alpha;",
                    "void main() {",
                    "vec3 v = tMat * vec3(aVertexPosition, 1.0);",
                    "gl_Position = vec4(v.x, v.y, 0, 1);",
                    "vTextureCoord = aTextureCoord;",
                    "alpha = tMat[0][2];",
                    "}",
                  ].join("\n");
                },
              },
              {
                key: "getFragmentShader",
                value: function () {
                  return [
                    "precision mediump float;",
                    "varying vec2 vTextureCoord;",
                    "varying float alpha;",
                    "uniform sampler2D uSampler;",
                    "uniform vec4 color;",
                    "uniform bool useTexture;",
                    "uniform vec3 uColor;",
                    "void main() {",
                    "vec4 textureColor = texture2D(uSampler, vTextureCoord);",
                    "gl_FragColor = textureColor * vec4(uColor, 1.0);",
                    "gl_FragColor.w *= alpha;",
                    "}",
                  ].join("\n");
                },
              },
              {
                key: "initVar",
                value: function () {
                  (this.mstack = new pt()),
                    (this.umat = H.create([2, 0, 1, 0, -2, 0, -1, 1, 1])),
                    (this.smat = H.create([0.01, 0, 1, 0, 0.01, 0, 0, 0, 1])),
                    (this.texturebuffers = {});
                },
              },
              {
                key: "blendEquation",
                value: function (e) {
                  this.gl.blendEquation(this.gl[e]);
                },
              },
              {
                key: "blendFunc",
                value: function (e, t) {
                  this.gl.blendFunc(this.gl[e], this.gl[t]);
                },
              },
              {
                key: "getShader",
                value: function (e, t, n) {
                  return (
                    (n = n
                      ? e.createShader(e.FRAGMENT_SHADER)
                      : e.createShader(e.VERTEX_SHADER)),
                    e.shaderSource(n, t),
                    e.compileShader(n),
                    e.getShaderParameter(n, e.COMPILE_STATUS)
                      ? n
                      : (alert(e.getShaderInfoLog(n)), null)
                  );
                },
              },
              {
                key: "initShaders",
                value: function () {
                  var e = this.getShader(this.gl, this.getFragmentShader(), !0),
                    t = this.getShader(this.gl, this.getVertexShader(), !1);
                  (this.sprogram = this.gl.createProgram()),
                    this.gl.attachShader(this.sprogram, t),
                    this.gl.attachShader(this.sprogram, e),
                    this.gl.linkProgram(this.sprogram),
                    this.gl.getProgramParameter(
                      this.sprogram,
                      this.gl.LINK_STATUS
                    ) || alert("Could not initialise shaders"),
                    this.gl.useProgram(this.sprogram),
                    (this.sprogram.vpa = this.gl.getAttribLocation(
                      this.sprogram,
                      "aVertexPosition"
                    )),
                    (this.sprogram.tca = this.gl.getAttribLocation(
                      this.sprogram,
                      "aTextureCoord"
                    )),
                    this.gl.enableVertexAttribArray(this.sprogram.tca),
                    this.gl.enableVertexAttribArray(this.sprogram.vpa),
                    (this.sprogram.tMatUniform = this.gl.getUniformLocation(
                      this.sprogram,
                      "tMat"
                    )),
                    (this.sprogram.samplerUniform = this.gl.getUniformLocation(
                      this.sprogram,
                      "uSampler"
                    )),
                    (this.sprogram.useTex = this.gl.getUniformLocation(
                      this.sprogram,
                      "useTexture"
                    )),
                    (this.sprogram.color = this.gl.getUniformLocation(
                      this.sprogram,
                      "uColor"
                    )),
                    this.gl.uniform1i(this.sprogram.useTex, 1);
                },
              },
              {
                key: "initBuffers",
                value: function () {
                  var e;
                  (this.unitIBuffer = this.gl.createBuffer()),
                    this.gl.bindBuffer(
                      this.gl.ELEMENT_ARRAY_BUFFER,
                      this.unitIBuffer
                    ),
                    this.gl.bufferData(
                      this.gl.ELEMENT_ARRAY_BUFFER,
                      new Uint16Array([0, 3, 1, 0, 2, 3]),
                      this.gl.STATIC_DRAW
                    );
                  var t = void 0,
                    n = [];
                  for (t = 0; t < 100; t++) n.push(t);
                  for (
                    e = new Uint16Array(n),
                      this.unitI33 = this.gl.createBuffer(),
                      this.gl.bindBuffer(
                        this.gl.ELEMENT_ARRAY_BUFFER,
                        this.unitI33
                      ),
                      this.gl.bufferData(
                        this.gl.ELEMENT_ARRAY_BUFFER,
                        e,
                        this.gl.STATIC_DRAW
                      ),
                      n = [],
                      t = 0;
                    t < 100;
                    t++
                  )
                    n.push(t, t + 1, t + 2);
                  (e = new Uint16Array(n)),
                    (this.stripBuffer = this.gl.createBuffer()),
                    this.gl.bindBuffer(
                      this.gl.ELEMENT_ARRAY_BUFFER,
                      this.stripBuffer
                    ),
                    this.gl.bufferData(
                      this.gl.ELEMENT_ARRAY_BUFFER,
                      e,
                      this.gl.STATIC_DRAW
                    );
                },
              },
              {
                key: "createCircle",
                value: function (e) {
                  this.circleCanvasRadius = d(C.initValue(e, 32));
                  var t = y.createCanvas(
                    "circle_canvas",
                    2 * this.circleCanvasRadius,
                    2 * this.circleCanvasRadius
                  );
                  return (
                    (e = t.getContext("2d")).beginPath(),
                    e.arc(
                      this.circleCanvasRadius,
                      this.circleCanvasRadius,
                      this.circleCanvasRadius,
                      0,
                      2 * Math.PI,
                      !0
                    ),
                    e.closePath(),
                    (e.fillStyle = "#FFF"),
                    e.fill(),
                    t.toDataURL()
                  );
                },
              },
              {
                key: "drawImg2Canvas",
                value: function (e) {
                  var t = e.body.width,
                    n = e.body.height,
                    r = d(e.body.width),
                    a = d(e.body.height),
                    o = e.body.width / r,
                    i = e.body.height / a;
                  this.texturebuffers[e.data.src] ||
                    (this.texturebuffers[e.data.src] = [
                      this.gl.createTexture(),
                      this.gl.createBuffer(),
                      this.gl.createBuffer(),
                    ]),
                    (e.data.texture = this.texturebuffers[e.data.src][0]),
                    (e.data.vcBuffer = this.texturebuffers[e.data.src][1]),
                    (e.data.tcBuffer = this.texturebuffers[e.data.src][2]),
                    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, e.data.tcBuffer),
                    this.gl.bufferData(
                      this.gl.ARRAY_BUFFER,
                      new Float32Array([0, 0, o, 0, 0, i, i, i]),
                      this.gl.STATIC_DRAW
                    ),
                    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, e.data.vcBuffer),
                    this.gl.bufferData(
                      this.gl.ARRAY_BUFFER,
                      new Float32Array([0, 0, t, 0, 0, n, t, n]),
                      this.gl.STATIC_DRAW
                    ),
                    (a = e.data.canvas
                      .getContext("2d")
                      .getImageData(0, 0, r, a)),
                    this.gl.bindTexture(this.gl.TEXTURE_2D, e.data.texture),
                    this.gl.texImage2D(
                      this.gl.TEXTURE_2D,
                      0,
                      this.gl.RGBA,
                      this.gl.RGBA,
                      this.gl.UNSIGNED_BYTE,
                      a
                    ),
                    this.gl.texParameteri(
                      this.gl.TEXTURE_2D,
                      this.gl.TEXTURE_MAG_FILTER,
                      this.gl.LINEAR
                    ),
                    this.gl.texParameteri(
                      this.gl.TEXTURE_2D,
                      this.gl.TEXTURE_MIN_FILTER,
                      this.gl.LINEAR_MIPMAP_NEAREST
                    ),
                    this.gl.generateMipmap(this.gl.TEXTURE_2D),
                    (e.data.textureLoaded = !0),
                    (e.data.textureWidth = t),
                    (e.data.textureHeight = n);
                },
              },
              { key: "onProtonUpdate", value: function () {} },
              {
                key: "onParticleCreated",
                value: function (e) {
                  (e.data.textureLoaded = !1),
                    (e.data.tmat = H.create()),
                    (e.data.tmat[8] = 1),
                    (e.data.imat = H.create()),
                    (e.data.imat[8] = 1),
                    e.body
                      ? w(e.body, this.addImg2Body, e)
                      : (w(this.circleCanvasURL, this.addImg2Body, e),
                        (e.data.oldScale = e.radius / this.circleCanvasRadius));
                },
              },
              {
                key: "addImg2Body",
                value: function (e, t) {
                  t.dead ||
                    ((t.body = e),
                    (t.data.src = e.src),
                    (t.data.canvas = k(e)),
                    (t.data.oldScale = 1),
                    this.drawImg2Canvas(t));
                },
              },
              {
                key: "onParticleUpdate",
                value: function (e) {
                  e.data.textureLoaded &&
                    (this.updateMatrix(e),
                    this.gl.uniform3f(
                      this.sprogram.color,
                      e.rgb.r / 255,
                      e.rgb.g / 255,
                      e.rgb.b / 255
                    ),
                    this.gl.uniformMatrix3fv(
                      this.sprogram.tMatUniform,
                      !1,
                      this.mstack.top()
                    ),
                    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, e.data.vcBuffer),
                    this.gl.vertexAttribPointer(
                      this.sprogram.vpa,
                      2,
                      this.gl.FLOAT,
                      !1,
                      0,
                      0
                    ),
                    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, e.data.tcBuffer),
                    this.gl.vertexAttribPointer(
                      this.sprogram.tca,
                      2,
                      this.gl.FLOAT,
                      !1,
                      0,
                      0
                    ),
                    this.gl.bindTexture(this.gl.TEXTURE_2D, e.data.texture),
                    this.gl.uniform1i(this.sprogram.samplerUniform, 0),
                    this.gl.bindBuffer(
                      this.gl.ELEMENT_ARRAY_BUFFER,
                      this.unitIBuffer
                    ),
                    this.gl.drawElements(
                      this.gl.TRIANGLES,
                      6,
                      this.gl.UNSIGNED_SHORT,
                      0
                    ),
                    this.mstack.pop());
                },
              },
              { key: "onParticleDead", value: function () {} },
              {
                key: "updateMatrix",
                value: function (e) {
                  var n = p(
                      -e.data.textureWidth / 2,
                      -e.data.textureHeight / 2
                    ),
                    r = p(e.p.x, e.p.y),
                    a = e.rotation * t.PI_180,
                    o = f(a);
                  (a = e.scale * e.data.oldScale),
                    (a = h(a, a)),
                    (a = m(n, a)),
                    (a = m(a, o)),
                    (a = m(a, r)),
                    H.inverse(a, e.data.imat),
                    (a[2] = e.alpha),
                    this.mstack.push(a);
                },
              },
            ]),
            (I = ht),
            l(mt, Je),
            (Je = mt);
          var yt =
            (l(gt, re),
            a(gt, [
              {
                key: "getPosition",
                value: function () {
                  return (
                    (this.random = Math.random()),
                    (this.vector.x =
                      this.x1 +
                      this.random * this.length * Math.cos(this.gradient)),
                    (this.vector.y =
                      this.y1 +
                      this.random * this.length * Math.sin(this.gradient)),
                    this.vector
                  );
                },
              },
              {
                key: "getDirection",
                value: function (e, t) {
                  var n = this.dy,
                    r = -this.dx;
                  return 0 < (n * e + r * t + this.dot) * (0 == r ? 1 : r);
                },
              },
              {
                key: "getDistance",
                value: function (e, t) {
                  return (
                    (this.dy * e + -this.dx * t + this.dot) /
                    Math.sqrt(this.xxyy)
                  );
                },
              },
              {
                key: "getSymmetric",
                value: function (e) {
                  var t = e.getGradient(),
                    n = 2 * (this.getGradient() - t),
                    r = e.x;
                  return (
                    (t = e.y),
                    (e.x = r * Math.cos(n) - t * Math.sin(n)),
                    (e.y = r * Math.sin(n) + t * Math.cos(n)),
                    e
                  );
                },
              },
              {
                key: "getGradient",
                value: function () {
                  return Math.atan2(this.dy, this.dx);
                },
              },
              {
                key: "rangeOut",
                value: function (e) {
                  if (Math.abs(this.getGradient()) <= t.PI / 4) {
                    if (e.p.x <= this.maxx && e.p.x >= this.minx) return !0;
                  } else if (e.p.y <= this.maxy && e.p.y >= this.miny)
                    return !0;
                  return !1;
                },
              },
              {
                key: "getLength",
                value: function () {
                  return Math.sqrt(this.dx * this.dx + this.dy * this.dy);
                },
              },
              {
                key: "crossing",
                value: function (e) {
                  "dead" === this.crossType
                    ? ">" === this.direction ||
                      "R" === this.direction ||
                      "right" === this.direction ||
                      "down" === this.direction
                      ? this.rangeOut(e) &&
                        this.getDirection(e.p.x, e.p.y) &&
                        (e.dead = !0)
                      : this.rangeOut(e) &&
                        (this.getDirection(e.p.x, e.p.y) || (e.dead = !0))
                    : "bound" === this.crossType
                    ? this.rangeOut(e) &&
                      this.getDistance(e.p.x, e.p.y) <= e.radius &&
                      (0 === this.dx
                        ? (e.v.x *= -1)
                        : 0 === this.dy
                        ? (e.v.y *= -1)
                        : this.getSymmetric(e.v))
                    : "cross" === this.crossType &&
                      this.alert &&
                      (console.error(
                        "Sorry, LineZone does not support cross method!"
                      ),
                      (this.alert = !1));
                },
              },
            ]),
            gt);
          function gt(e, t, n, a, o) {
            r(this, gt);
            var i = s(
              this,
              (gt.__proto__ || Object.getPrototypeOf(gt)).call(this)
            );
            return (
              0 <= n - e
                ? ((i.x1 = e), (i.y1 = t), (i.x2 = n), (i.y2 = a))
                : ((i.x1 = n), (i.y1 = a), (i.x2 = e), (i.y2 = t)),
              (i.dx = i.x2 - i.x1),
              (i.dy = i.y2 - i.y1),
              (i.minx = Math.min(i.x1, i.x2)),
              (i.miny = Math.min(i.y1, i.y2)),
              (i.maxx = Math.max(i.x1, i.x2)),
              (i.maxy = Math.max(i.y1, i.y2)),
              (i.dot = i.x2 * i.y1 - i.x1 * i.y2),
              (i.xxyy = i.dx * i.dx + i.dy * i.dy),
              (i.gradient = i.getGradient()),
              (i.length = i.getLength()),
              (i.direction = C.initValue(o, ">")),
              i
            );
          }
          var vt =
            (l(bt, re),
            a(bt, [
              {
                key: "getPosition",
                value: function () {
                  return (
                    (this.angle = t.PIx2 * Math.random()),
                    (this.randomRadius = Math.random() * this.radius),
                    (this.vector.x =
                      this.x + this.randomRadius * Math.cos(this.angle)),
                    (this.vector.y =
                      this.y + this.randomRadius * Math.sin(this.angle)),
                    this.vector
                  );
                },
              },
              {
                key: "setCenter",
                value: function (e, t) {
                  (this.center.x = e), (this.center.y = t);
                },
              },
              {
                key: "crossing",
                value: function (e) {
                  var t = e.p.distanceTo(this.center);
                  "dead" === this.crossType
                    ? t - e.radius > this.radius && (e.dead = !0)
                    : "bound" === this.crossType
                    ? t + e.radius >= this.radius && this.getSymmetric(e)
                    : "cross" === this.crossType &&
                      this.alert &&
                      (console.error(
                        "Sorry, CircleZone does not support cross method!"
                      ),
                      (this.alert = !1));
                },
              },
              {
                key: "getSymmetric",
                value: function (e) {
                  var t = e.v.getGradient(),
                    n = 2 * (this.getGradient(e) - t),
                    r = e.v.x;
                  (t = e.v.y),
                    (e.v.x = r * Math.cos(n) - t * Math.sin(n)),
                    (e.v.y = r * Math.sin(n) + t * Math.cos(n));
                },
              },
              {
                key: "getGradient",
                value: function (e) {
                  return (
                    -t.PI_2 +
                    Math.atan2(e.p.y - this.center.y, e.p.x - this.center.x)
                  );
                },
              },
            ]),
            bt);
          function bt(e, t, n) {
            r(this, bt);
            var a = s(
              this,
              (bt.__proto__ || Object.getPrototypeOf(bt)).call(this)
            );
            return (
              (a.x = e),
              (a.y = t),
              (a.radius = n),
              (a.angle = 0),
              (a.center = { x: e, y: t }),
              a
            );
          }
          var _t =
            (l(wt, re),
            a(wt, [
              {
                key: "getPosition",
                value: function () {
                  return (
                    (this.vector.x = this.x + Math.random() * this.width),
                    (this.vector.y = this.y + Math.random() * this.height),
                    this.vector
                  );
                },
              },
              {
                key: "crossing",
                value: function (e) {
                  "dead" === this.crossType
                    ? ((e.p.x + e.radius < this.x ||
                        e.p.x - e.radius > this.x + this.width) &&
                        (e.dead = !0),
                      (e.p.y + e.radius < this.y ||
                        e.p.y - e.radius > this.y + this.height) &&
                        (e.dead = !0))
                    : "bound" === this.crossType
                    ? (e.p.x - e.radius < this.x
                        ? ((e.p.x = this.x + e.radius), (e.v.x *= -1))
                        : e.p.x + e.radius > this.x + this.width &&
                          ((e.p.x = this.x + this.width - e.radius),
                          (e.v.x *= -1)),
                      e.p.y - e.radius < this.y
                        ? ((e.p.y = this.y + e.radius), (e.v.y *= -1))
                        : e.p.y + e.radius > this.y + this.height &&
                          ((e.p.y = this.y + this.height - e.radius),
                          (e.v.y *= -1)))
                    : "cross" === this.crossType &&
                      (e.p.x + e.radius < this.x && e.v.x <= 0
                        ? (e.p.x = this.x + this.width + e.radius)
                        : e.p.x - e.radius > this.x + this.width &&
                          0 <= e.v.x &&
                          (e.p.x = this.x - e.radius),
                      e.p.y + e.radius < this.y && e.v.y <= 0
                        ? (e.p.y = this.y + this.height + e.radius)
                        : e.p.y - e.radius > this.y + this.height &&
                          0 <= e.v.y &&
                          (e.p.y = this.y - e.radius));
                },
              },
            ]),
            wt);
          function wt(e, t, n, a) {
            r(this, wt);
            var o = s(
              this,
              (wt.__proto__ || Object.getPrototypeOf(wt)).call(this)
            );
            return (o.x = e), (o.y = t), (o.width = n), (o.height = a), o;
          }
          function kt(e, t, n, a) {
            r(this, kt);
            var o = s(
              this,
              (kt.__proto__ || Object.getPrototypeOf(kt)).call(this)
            );
            return o.reset(e, t, n, a), o;
          }
          return (
            l(kt, re),
            a(kt, [
              {
                key: "reset",
                value: function (e, t, n, r) {
                  (this.imageData = e),
                    (this.x = C.initValue(t, 0)),
                    (this.y = C.initValue(n, 0)),
                    (this.d = C.initValue(r, 2)),
                    (this.vectors = []),
                    this.setVectors();
                },
              },
              {
                key: "setVectors",
                value: function () {
                  var e = void 0,
                    t = void 0,
                    n = this.imageData.width,
                    r = this.imageData.height;
                  for (e = 0; e < n; e += this.d)
                    for (t = 0; t < r; t += this.d) {
                      var a = 4 * ((t >> 0) * n + (e >> 0));
                      0 < this.imageData.data[3 + a] &&
                        this.vectors.push({ x: e + this.x, y: t + this.y });
                    }
                  return this.vector;
                },
              },
              {
                key: "getBound",
                value: function (e, t) {
                  return (
                    (e = 4 * ((t >> 0) * this.imageData.width + (e >> 0))),
                    0 < this.imageData.data[3 + e]
                  );
                },
              },
              {
                key: "getPosition",
                value: function () {
                  var e = C.getRandFromArray(this.vectors);
                  return this.vector.copy(e);
                },
              },
              {
                key: "getColor",
                value: function (e, t) {
                  return (
                    (e -= this.x),
                    (e =
                      4 *
                      (((t -= this.y) >> 0) * this.imageData.width + (e >> 0))),
                    {
                      r: this.imageData.data[e],
                      g: this.imageData.data[1 + e],
                      b: this.imageData.data[2 + e],
                      a: this.imageData.data[3 + e],
                    }
                  );
                },
              },
              {
                key: "crossing",
                value: function (e) {
                  "dead" === this.crossType
                    ? this.getBound(e.p.x - this.x, e.p.y - this.y)
                      ? (e.dead = !0)
                      : (e.dead = !1)
                    : "bound" === this.crossType &&
                      (this.getBound(e.p.x - this.x, e.p.y - this.y) ||
                        e.v.negate());
                },
              },
            ]),
            (l = kt),
            (a = {
              addEventListener: function (e, t) {
                e.addEventListener("PROTON_UPDATE_AFTER", function () {
                  return t();
                });
              },
              getStyle: function (e) {
                return (
                  "rgba(" +
                  (e = W.hexToRgb(
                    0 < arguments.length && void 0 !== e ? e : "#ff0000"
                  )).r +
                  ", " +
                  e.g +
                  ", " +
                  e.b +
                  ", 0.5)"
                );
              },
              drawZone: function (e, t, n, r) {
                var a = t.getContext("2d"),
                  o = this.getStyle();
                this.addEventListener(e, function () {
                  r && a.clearRect(0, 0, t.width, t.height),
                    n instanceof oe
                      ? (a.beginPath(),
                        (a.fillStyle = o),
                        a.arc(n.x, n.y, 10, 0, 2 * Math.PI, !0),
                        a.fill(),
                        a.closePath())
                      : n instanceof yt
                      ? (a.beginPath(),
                        (a.strokeStyle = o),
                        a.moveTo(n.x1, n.y1),
                        a.lineTo(n.x2, n.y2),
                        a.stroke(),
                        a.closePath())
                      : n instanceof _t
                      ? (a.beginPath(),
                        (a.strokeStyle = o),
                        a.drawRect(n.x, n.y, n.width, n.height),
                        a.stroke(),
                        a.closePath())
                      : n instanceof vt &&
                        (a.beginPath(),
                        (a.strokeStyle = o),
                        a.arc(n.x, n.y, n.radius, 0, 2 * Math.PI, !0),
                        a.stroke(),
                        a.closePath());
                });
              },
              drawEmitter: function (e, t, n, r) {
                var a = t.getContext("2d"),
                  o = this.getStyle();
                this.addEventListener(e, function () {
                  r && a.clearRect(0, 0, t.width, t.height),
                    a.beginPath(),
                    (a.fillStyle = o),
                    a.arc(n.p.x, n.p.y, 10, 0, 2 * Math.PI, !0),
                    a.fill(),
                    a.closePath();
                });
              },
            }),
            (j.Particle = V),
            (j.Pool = x),
            (j.Util = C),
            (j.ColorUtil = W),
            (j.MathUtil = t),
            (j.Vector2D = j.Vector = U),
            (j.Polar2D = j.Polar = q),
            (j.ArraySpan = Y),
            (j.Rectangle = Q),
            (j.Rate = Z),
            (j.ease = z),
            (j.Span = u),
            (j.Mat3 = H),
            (j.getSpan = function (e, t, n) {
              return new u(e, t, n);
            }),
            (j.createArraySpan = Y.createArraySpan),
            (j.Initialize = j.Init = J),
            (j.Life = j.L = te),
            (j.Position = j.P = le),
            (j.Velocity = j.V = ue),
            (j.Mass = j.M = de),
            (j.Radius = j.R = fe),
            (j.Body = j.B = me),
            (j.Behaviour = ge),
            (j.Force = j.F = be),
            (j.Attraction = j.A = we),
            (j.RandomDrift = j.RD = Ce),
            (j.Gravity = j.G = Ee),
            (j.Collision = Re),
            (j.CrossZone = Te),
            (j.Alpha = Oe),
            (j.Scale = j.S = Me),
            (j.Rotate = Ne),
            (j.Color = Le),
            (j.Repulsion = Be),
            (j.Cyclone = Fe),
            (j.GravityWell = qe),
            (j.Emitter = Ye),
            (j.BehaviourEmitter = Qe),
            (j.FollowEmitter = Ze),
            (j.Zone = re),
            (j.LineZone = yt),
            (j.CircleZone = vt),
            (j.PointZone = oe),
            (j.RectZone = _t),
            (j.ImageZone = l),
            (j.CanvasRenderer = tt),
            (j.DomRenderer = rt),
            (j.EaselRenderer = ot),
            (j.PixiRenderer = ct),
            (j.PixelRenderer = lt),
            (j.WebGLRenderer = j.WebGlRenderer = I),
            (j.CustomRenderer = Je),
            (j.Debug = a),
            C.assign(j, z),
            j
          );
        })();
      },
      275: function (e) {
        e.exports = (function () {
          "use strict";
          return (
            (function () {
              for (
                var e = ["ms", "moz", "webkit", "o"], t = 0;
                t < e.length && !window.requestAnimationFrame;
                ++t
              )
                (window.requestAnimationFrame =
                  window[e[t] + "RequestAnimationFrame"]),
                  (window.cancelAnimationFrame =
                    window[e[t] + "CancelAnimationFrame"] ||
                    window[e[t] + "CancelRequestAnimationFrame"]);
            })(),
            {
              timer: 0,
              state: "stop",
              animations: [],
              add: function (e) {
                var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : 60,
                  n = {
                    callback: e,
                    fps: t,
                    n: 60 / t,
                    param:
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : null,
                    i: 0,
                  };
                return (
                  this.animations.push(n),
                  this.animations.length >= 1 && this.start(),
                  this
                );
              },
              getIndex: function (e) {
                for (var t = 0; t < this.animations.length; t++)
                  if (this.animations[t].callback === e) return t;
                return -1;
              },
              remove: function (e) {
                if (!(this.getIndex(e) < 0))
                  return (
                    this.deleteMap(e),
                    0 === this.animations.length && this.stop(),
                    this
                  );
              },
              deleteMap: function (e) {
                var t = this.getIndex(e),
                  n = this.animations[t];
                for (var r in n) delete n[r];
                this.animations.splice(t, 1);
              },
              start: function () {
                if ("start" !== this.state)
                  return (this.state = "start"), this.tick(), this;
              },
              stop: function () {
                if ("stop" !== this.state)
                  return (
                    (this.state = "stop"),
                    cancelAnimationFrame(this.timer),
                    this
                  );
              },
              tick: function () {
                var e = this;
                this.timer = requestAnimationFrame(function () {
                  e.tick();
                });
                for (var t = 0; t < this.animations.length; t++) {
                  var n = this.animations[t],
                    r = n.callback,
                    a = n.param;
                  n.i++, n.i >= n.n && (r(a), (n.i = 0));
                }
              },
            }
          );
        })();
      },
      144: (e, t, n) => {
        "use strict";
        var r = n(60),
          a = n(528),
          o = n(724);
        function i(e) {
          for (
            var t =
                "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
              n = 1;
            n < arguments.length;
            n++
          )
            t += "&args[]=" + encodeURIComponent(arguments[n]);
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        if (!r) throw Error(i(227));
        var l = new Set(),
          s = {};
        function u(e, t) {
          c(e, t), c(e + "Capture", t);
        }
        function c(e, t) {
          for (s[e] = t, e = 0; e < t.length; e++) l.add(t[e]);
        }
        var d = !(
            "undefined" === typeof window ||
            "undefined" === typeof window.document ||
            "undefined" === typeof window.document.createElement
          ),
          p =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          f = Object.prototype.hasOwnProperty,
          h = {},
          m = {};
        function y(e, t, n, r, a, o, i) {
          (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
            (this.attributeName = r),
            (this.attributeNamespace = a),
            (this.mustUseProperty = n),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = o),
            (this.removeEmptyString = i);
        }
        var g = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
          .split(" ")
          .forEach(function (e) {
            g[e] = new y(e, 0, !1, e, null, !1, !1);
          }),
          [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
          ].forEach(function (e) {
            var t = e[0];
            g[t] = new y(t, 1, !1, e[1], null, !1, !1);
          }),
          ["contentEditable", "draggable", "spellCheck", "value"].forEach(
            function (e) {
              g[e] = new y(e, 2, !1, e.toLowerCase(), null, !1, !1);
            }
          ),
          [
            "autoReverse",
            "externalResourcesRequired",
            "focusable",
            "preserveAlpha",
          ].forEach(function (e) {
            g[e] = new y(e, 2, !1, e, null, !1, !1);
          }),
          "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
            .split(" ")
            .forEach(function (e) {
              g[e] = new y(e, 3, !1, e.toLowerCase(), null, !1, !1);
            }),
          ["checked", "multiple", "muted", "selected"].forEach(function (e) {
            g[e] = new y(e, 3, !0, e, null, !1, !1);
          }),
          ["capture", "download"].forEach(function (e) {
            g[e] = new y(e, 4, !1, e, null, !1, !1);
          }),
          ["cols", "rows", "size", "span"].forEach(function (e) {
            g[e] = new y(e, 6, !1, e, null, !1, !1);
          }),
          ["rowSpan", "start"].forEach(function (e) {
            g[e] = new y(e, 5, !1, e.toLowerCase(), null, !1, !1);
          });
        var v = /[\-:]([a-z])/g;
        function b(e) {
          return e[1].toUpperCase();
        }
        function _(e, t, n, r) {
          var a = g.hasOwnProperty(t) ? g[t] : null;
          (null !== a
            ? 0 === a.type
            : !r &&
              2 < t.length &&
              ("o" === t[0] || "O" === t[0]) &&
              ("n" === t[1] || "N" === t[1])) ||
            ((function (e, t, n, r) {
              if (
                null === t ||
                "undefined" === typeof t ||
                (function (e, t, n, r) {
                  if (null !== n && 0 === n.type) return !1;
                  switch (typeof t) {
                    case "function":
                    case "symbol":
                      return !0;
                    case "boolean":
                      return (
                        !r &&
                        (null !== n
                          ? !n.acceptsBooleans
                          : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                            "aria-" !== e)
                      );
                    default:
                      return !1;
                  }
                })(e, t, n, r)
              )
                return !0;
              if (r) return !1;
              if (null !== n)
                switch (n.type) {
                  case 3:
                    return !t;
                  case 4:
                    return !1 === t;
                  case 5:
                    return isNaN(t);
                  case 6:
                    return isNaN(t) || 1 > t;
                }
              return !1;
            })(t, n, a, r) && (n = null),
            r || null === a
              ? (function (e) {
                  return (
                    !!f.call(m, e) ||
                    (!f.call(h, e) &&
                      (p.test(e) ? (m[e] = !0) : ((h[e] = !0), !1)))
                  );
                })(t) &&
                (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
              : a.mustUseProperty
              ? (e[a.propertyName] = null === n ? 3 !== a.type && "" : n)
              : ((t = a.attributeName),
                (r = a.attributeNamespace),
                null === n
                  ? e.removeAttribute(t)
                  : ((n =
                      3 === (a = a.type) || (4 === a && !0 === n)
                        ? ""
                        : "" + n),
                    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
        }
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
          .split(" ")
          .forEach(function (e) {
            var t = e.replace(v, b);
            g[t] = new y(t, 1, !1, e, null, !1, !1);
          }),
          "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
            .split(" ")
            .forEach(function (e) {
              var t = e.replace(v, b);
              g[t] = new y(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
            }),
          ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
            var t = e.replace(v, b);
            g[t] = new y(
              t,
              1,
              !1,
              e,
              "http://www.w3.org/XML/1998/namespace",
              !1,
              !1
            );
          }),
          ["tabIndex", "crossOrigin"].forEach(function (e) {
            g[e] = new y(e, 1, !1, e.toLowerCase(), null, !1, !1);
          }),
          (g.xlinkHref = new y(
            "xlinkHref",
            1,
            !1,
            "xlink:href",
            "http://www.w3.org/1999/xlink",
            !0,
            !1
          )),
          ["src", "href", "action", "formAction"].forEach(function (e) {
            g[e] = new y(e, 1, !1, e.toLowerCase(), null, !0, !0);
          });
        var w = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          k = 60103,
          C = 60106,
          P = 60107,
          E = 60108,
          x = 60114,
          R = 60109,
          S = 60110,
          T = 60112,
          I = 60113,
          O = 60120,
          A = 60115,
          M = 60116,
          j = 60121,
          N = 60128,
          D = 60129,
          L = 60130,
          z = 60131;
        if ("function" === typeof Symbol && Symbol.for) {
          var U = Symbol.for;
          (k = U("react.element")),
            (C = U("react.portal")),
            (P = U("react.fragment")),
            (E = U("react.strict_mode")),
            (x = U("react.profiler")),
            (R = U("react.provider")),
            (S = U("react.context")),
            (T = U("react.forward_ref")),
            (I = U("react.suspense")),
            (O = U("react.suspense_list")),
            (A = U("react.memo")),
            (M = U("react.lazy")),
            (j = U("react.block")),
            U("react.scope"),
            (N = U("react.opaque.id")),
            (D = U("react.debug_trace_mode")),
            (L = U("react.offscreen")),
            (z = U("react.legacy_hidden"));
        }
        var F,
          V = "function" === typeof Symbol && Symbol.iterator;
        function B(e) {
          return null === e || "object" !== typeof e
            ? null
            : "function" === typeof (e = (V && e[V]) || e["@@iterator"])
            ? e
            : null;
        }
        function W(e) {
          if (void 0 === F)
            try {
              throw Error();
            } catch (n) {
              var t = n.stack.trim().match(/\n( *(at )?)/);
              F = (t && t[1]) || "";
            }
          return "\n" + F + e;
        }
        var q = !1;
        function $(e, t) {
          if (!e || q) return "";
          q = !0;
          var n = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            if (t)
              if (
                ((t = function () {
                  throw Error();
                }),
                Object.defineProperty(t.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                "object" === typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(t, []);
                } catch (s) {
                  var r = s;
                }
                Reflect.construct(e, [], t);
              } else {
                try {
                  t.call();
                } catch (s) {
                  r = s;
                }
                e.call(t.prototype);
              }
            else {
              try {
                throw Error();
              } catch (s) {
                r = s;
              }
              e();
            }
          } catch (s) {
            if (s && r && "string" === typeof s.stack) {
              for (
                var a = s.stack.split("\n"),
                  o = r.stack.split("\n"),
                  i = a.length - 1,
                  l = o.length - 1;
                1 <= i && 0 <= l && a[i] !== o[l];

              )
                l--;
              for (; 1 <= i && 0 <= l; i--, l--)
                if (a[i] !== o[l]) {
                  if (1 !== i || 1 !== l)
                    do {
                      if ((i--, 0 > --l || a[i] !== o[l]))
                        return "\n" + a[i].replace(" at new ", " at ");
                    } while (1 <= i && 0 <= l);
                  break;
                }
            }
          } finally {
            (q = !1), (Error.prepareStackTrace = n);
          }
          return (e = e ? e.displayName || e.name : "") ? W(e) : "";
        }
        function H(e) {
          switch (e.tag) {
            case 5:
              return W(e.type);
            case 16:
              return W("Lazy");
            case 13:
              return W("Suspense");
            case 19:
              return W("SuspenseList");
            case 0:
            case 2:
            case 15:
              return (e = $(e.type, !1));
            case 11:
              return (e = $(e.type.render, !1));
            case 22:
              return (e = $(e.type._render, !1));
            case 1:
              return (e = $(e.type, !0));
            default:
              return "";
          }
        }
        function Y(e) {
          if (null == e) return null;
          if ("function" === typeof e) return e.displayName || e.name || null;
          if ("string" === typeof e) return e;
          switch (e) {
            case P:
              return "Fragment";
            case C:
              return "Portal";
            case x:
              return "Profiler";
            case E:
              return "StrictMode";
            case I:
              return "Suspense";
            case O:
              return "SuspenseList";
          }
          if ("object" === typeof e)
            switch (e.$$typeof) {
              case S:
                return (e.displayName || "Context") + ".Consumer";
              case R:
                return (e._context.displayName || "Context") + ".Provider";
              case T:
                var t = e.render;
                return (
                  (t = t.displayName || t.name || ""),
                  e.displayName ||
                    ("" !== t ? "ForwardRef(" + t + ")" : "ForwardRef")
                );
              case A:
                return Y(e.type);
              case j:
                return Y(e._render);
              case M:
                (t = e._payload), (e = e._init);
                try {
                  return Y(e(t));
                } catch (n) {}
            }
          return null;
        }
        function K(e) {
          switch (typeof e) {
            case "boolean":
            case "number":
            case "object":
            case "string":
            case "undefined":
              return e;
            default:
              return "";
          }
        }
        function Q(e) {
          var t = e.type;
          return (
            (e = e.nodeName) &&
            "input" === e.toLowerCase() &&
            ("checkbox" === t || "radio" === t)
          );
        }
        function G(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = Q(e) ? "checked" : "value",
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = "" + e[t];
              if (
                !e.hasOwnProperty(t) &&
                "undefined" !== typeof n &&
                "function" === typeof n.get &&
                "function" === typeof n.set
              ) {
                var a = n.get,
                  o = n.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return a.call(this);
                    },
                    set: function (e) {
                      (r = "" + e), o.call(this, e);
                    },
                  }),
                  Object.defineProperty(e, t, { enumerable: n.enumerable }),
                  {
                    getValue: function () {
                      return r;
                    },
                    setValue: function (e) {
                      r = "" + e;
                    },
                    stopTracking: function () {
                      (e._valueTracker = null), delete e[t];
                    },
                  }
                );
              }
            })(e));
        }
        function Z(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var n = t.getValue(),
            r = "";
          return (
            e && (r = Q(e) ? (e.checked ? "true" : "false") : e.value),
            (e = r) !== n && (t.setValue(e), !0)
          );
        }
        function X(e) {
          if (
            "undefined" ===
            typeof (e =
              e || ("undefined" !== typeof document ? document : void 0))
          )
            return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        function J(e, t) {
          var n = t.checked;
          return a({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : e._wrapperState.initialChecked,
          });
        }
        function ee(e, t) {
          var n = null == t.defaultValue ? "" : t.defaultValue,
            r = null != t.checked ? t.checked : t.defaultChecked;
          (n = K(null != t.value ? t.value : n)),
            (e._wrapperState = {
              initialChecked: r,
              initialValue: n,
              controlled:
                "checkbox" === t.type || "radio" === t.type
                  ? null != t.checked
                  : null != t.value,
            });
        }
        function te(e, t) {
          null != (t = t.checked) && _(e, "checked", t, !1);
        }
        function ne(e, t) {
          te(e, t);
          var n = K(t.value),
            r = t.type;
          if (null != n)
            "number" === r
              ? ((0 === n && "" === e.value) || e.value != n) &&
                (e.value = "" + n)
              : e.value !== "" + n && (e.value = "" + n);
          else if ("submit" === r || "reset" === r)
            return void e.removeAttribute("value");
          t.hasOwnProperty("value")
            ? ae(e, t.type, n)
            : t.hasOwnProperty("defaultValue") &&
              ae(e, t.type, K(t.defaultValue)),
            null == t.checked &&
              null != t.defaultChecked &&
              (e.defaultChecked = !!t.defaultChecked);
        }
        function re(e, t, n) {
          if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (
              !(
                ("submit" !== r && "reset" !== r) ||
                (void 0 !== t.value && null !== t.value)
              )
            )
              return;
            (t = "" + e._wrapperState.initialValue),
              n || t === e.value || (e.value = t),
              (e.defaultValue = t);
          }
          "" !== (n = e.name) && (e.name = ""),
            (e.defaultChecked = !!e._wrapperState.initialChecked),
            "" !== n && (e.name = n);
        }
        function ae(e, t, n) {
          ("number" === t && X(e.ownerDocument) === e) ||
            (null == n
              ? (e.defaultValue = "" + e._wrapperState.initialValue)
              : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
        }
        function oe(e, t) {
          return (
            (e = a({ children: void 0 }, t)),
            (t = (function (e) {
              var t = "";
              return (
                r.Children.forEach(e, function (e) {
                  null != e && (t += e);
                }),
                t
              );
            })(t.children)) && (e.children = t),
            e
          );
        }
        function ie(e, t, n, r) {
          if (((e = e.options), t)) {
            t = {};
            for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
            for (n = 0; n < e.length; n++)
              (a = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== a && (e[n].selected = a),
                a && r && (e[n].defaultSelected = !0);
          } else {
            for (n = "" + K(n), t = null, a = 0; a < e.length; a++) {
              if (e[a].value === n)
                return (
                  (e[a].selected = !0), void (r && (e[a].defaultSelected = !0))
                );
              null !== t || e[a].disabled || (t = e[a]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function le(e, t) {
          if (null != t.dangerouslySetInnerHTML) throw Error(i(91));
          return a({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue,
          });
        }
        function se(e, t) {
          var n = t.value;
          if (null == n) {
            if (((n = t.children), (t = t.defaultValue), null != n)) {
              if (null != t) throw Error(i(92));
              if (Array.isArray(n)) {
                if (!(1 >= n.length)) throw Error(i(93));
                n = n[0];
              }
              t = n;
            }
            null == t && (t = ""), (n = t);
          }
          e._wrapperState = { initialValue: K(n) };
        }
        function ue(e, t) {
          var n = K(t.value),
            r = K(t.defaultValue);
          null != n &&
            ((n = "" + n) !== e.value && (e.value = n),
            null == t.defaultValue &&
              e.defaultValue !== n &&
              (e.defaultValue = n)),
            null != r && (e.defaultValue = "" + r);
        }
        function ce(e) {
          var t = e.textContent;
          t === e._wrapperState.initialValue &&
            "" !== t &&
            null !== t &&
            (e.value = t);
        }
        var de = {
          html: "http://www.w3.org/1999/xhtml",
          mathml: "http://www.w3.org/1998/Math/MathML",
          svg: "http://www.w3.org/2000/svg",
        };
        function pe(e) {
          switch (e) {
            case "svg":
              return "http://www.w3.org/2000/svg";
            case "math":
              return "http://www.w3.org/1998/Math/MathML";
            default:
              return "http://www.w3.org/1999/xhtml";
          }
        }
        function fe(e, t) {
          return null == e || "http://www.w3.org/1999/xhtml" === e
            ? pe(t)
            : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
            ? "http://www.w3.org/1999/xhtml"
            : e;
        }
        var he,
          me,
          ye =
            ((me = function (e, t) {
              if (e.namespaceURI !== de.svg || "innerHTML" in e)
                e.innerHTML = t;
              else {
                for (
                  (he = he || document.createElement("div")).innerHTML =
                    "<svg>" + t.valueOf().toString() + "</svg>",
                    t = he.firstChild;
                  e.firstChild;

                )
                  e.removeChild(e.firstChild);
                for (; t.firstChild; ) e.appendChild(t.firstChild);
              }
            }),
            "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (e, t, n, r) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return me(e, t);
                  });
                }
              : me);
        function ge(e, t) {
          if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType)
              return void (n.nodeValue = t);
          }
          e.textContent = t;
        }
        var ve = {
            animationIterationCount: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0,
          },
          be = ["Webkit", "ms", "Moz", "O"];
        function _e(e, t, n) {
          return null == t || "boolean" === typeof t || "" === t
            ? ""
            : n ||
              "number" !== typeof t ||
              0 === t ||
              (ve.hasOwnProperty(e) && ve[e])
            ? ("" + t).trim()
            : t + "px";
        }
        function we(e, t) {
          for (var n in ((e = e.style), t))
            if (t.hasOwnProperty(n)) {
              var r = 0 === n.indexOf("--"),
                a = _e(n, t[n], r);
              "float" === n && (n = "cssFloat"),
                r ? e.setProperty(n, a) : (e[n] = a);
            }
        }
        Object.keys(ve).forEach(function (e) {
          be.forEach(function (t) {
            (t = t + e.charAt(0).toUpperCase() + e.substring(1)),
              (ve[t] = ve[e]);
          });
        });
        var ke = a(
          { menuitem: !0 },
          {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0,
          }
        );
        function Ce(e, t) {
          if (t) {
            if (
              ke[e] &&
              (null != t.children || null != t.dangerouslySetInnerHTML)
            )
              throw Error(i(137, e));
            if (null != t.dangerouslySetInnerHTML) {
              if (null != t.children) throw Error(i(60));
              if (
                "object" !== typeof t.dangerouslySetInnerHTML ||
                !("__html" in t.dangerouslySetInnerHTML)
              )
                throw Error(i(61));
            }
            if (null != t.style && "object" !== typeof t.style)
              throw Error(i(62));
          }
        }
        function Pe(e, t) {
          if (-1 === e.indexOf("-")) return "string" === typeof t.is;
          switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
              return !1;
            default:
              return !0;
          }
        }
        function Ee(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var xe = null,
          Re = null,
          Se = null;
        function Te(e) {
          if ((e = na(e))) {
            if ("function" !== typeof xe) throw Error(i(280));
            var t = e.stateNode;
            t && ((t = aa(t)), xe(e.stateNode, e.type, t));
          }
        }
        function Ie(e) {
          Re ? (Se ? Se.push(e) : (Se = [e])) : (Re = e);
        }
        function Oe() {
          if (Re) {
            var e = Re,
              t = Se;
            if (((Se = Re = null), Te(e), t))
              for (e = 0; e < t.length; e++) Te(t[e]);
          }
        }
        function Ae(e, t) {
          return e(t);
        }
        function Me(e, t, n, r, a) {
          return e(t, n, r, a);
        }
        function je() {}
        var Ne = Ae,
          De = !1,
          Le = !1;
        function ze() {
          (null === Re && null === Se) || (je(), Oe());
        }
        function Ue(e, t) {
          var n = e.stateNode;
          if (null === n) return null;
          var r = aa(n);
          if (null === r) return null;
          n = r[t];
          e: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
              (r = !r.disabled) ||
                (r = !(
                  "button" === (e = e.type) ||
                  "input" === e ||
                  "select" === e ||
                  "textarea" === e
                )),
                (e = !r);
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (n && "function" !== typeof n) throw Error(i(231, t, typeof n));
          return n;
        }
        var Fe = !1;
        if (d)
          try {
            var Ve = {};
            Object.defineProperty(Ve, "passive", {
              get: function () {
                Fe = !0;
              },
            }),
              window.addEventListener("test", Ve, Ve),
              window.removeEventListener("test", Ve, Ve);
          } catch (me) {
            Fe = !1;
          }
        function Be(e, t, n, r, a, o, i, l, s) {
          var u = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(n, u);
          } catch (c) {
            this.onError(c);
          }
        }
        var We = !1,
          qe = null,
          $e = !1,
          He = null,
          Ye = {
            onError: function (e) {
              (We = !0), (qe = e);
            },
          };
        function Ke(e, t, n, r, a, o, i, l, s) {
          (We = !1), (qe = null), Be.apply(Ye, arguments);
        }
        function Qe(e) {
          var t = e,
            n = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do {
              0 !== (1026 & (t = e).flags) && (n = t.return), (e = t.return);
            } while (e);
          }
          return 3 === t.tag ? n : null;
        }
        function Ge(e) {
          if (13 === e.tag) {
            var t = e.memoizedState;
            if (
              (null === t &&
                null !== (e = e.alternate) &&
                (t = e.memoizedState),
              null !== t)
            )
              return t.dehydrated;
          }
          return null;
        }
        function Ze(e) {
          if (Qe(e) !== e) throw Error(i(188));
        }
        function Xe(e) {
          if (
            ((e = (function (e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = Qe(e))) throw Error(i(188));
                return t !== e ? null : e;
              }
              for (var n = e, r = t; ; ) {
                var a = n.return;
                if (null === a) break;
                var o = a.alternate;
                if (null === o) {
                  if (null !== (r = a.return)) {
                    n = r;
                    continue;
                  }
                  break;
                }
                if (a.child === o.child) {
                  for (o = a.child; o; ) {
                    if (o === n) return Ze(a), e;
                    if (o === r) return Ze(a), t;
                    o = o.sibling;
                  }
                  throw Error(i(188));
                }
                if (n.return !== r.return) (n = a), (r = o);
                else {
                  for (var l = !1, s = a.child; s; ) {
                    if (s === n) {
                      (l = !0), (n = a), (r = o);
                      break;
                    }
                    if (s === r) {
                      (l = !0), (r = a), (n = o);
                      break;
                    }
                    s = s.sibling;
                  }
                  if (!l) {
                    for (s = o.child; s; ) {
                      if (s === n) {
                        (l = !0), (n = o), (r = a);
                        break;
                      }
                      if (s === r) {
                        (l = !0), (r = o), (n = a);
                        break;
                      }
                      s = s.sibling;
                    }
                    if (!l) throw Error(i(189));
                  }
                }
                if (n.alternate !== r) throw Error(i(190));
              }
              if (3 !== n.tag) throw Error(i(188));
              return n.stateNode.current === n ? e : t;
            })(e)),
            !e)
          )
            return null;
          for (var t = e; ; ) {
            if (5 === t.tag || 6 === t.tag) return t;
            if (t.child) (t.child.return = t), (t = t.child);
            else {
              if (t === e) break;
              for (; !t.sibling; ) {
                if (!t.return || t.return === e) return null;
                t = t.return;
              }
              (t.sibling.return = t.return), (t = t.sibling);
            }
          }
          return null;
        }
        function Je(e, t) {
          for (var n = e.alternate; null !== t; ) {
            if (t === e || t === n) return !0;
            t = t.return;
          }
          return !1;
        }
        var et,
          tt,
          nt,
          rt,
          at = !1,
          ot = [],
          it = null,
          lt = null,
          st = null,
          ut = new Map(),
          ct = new Map(),
          dt = [],
          pt =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
              " "
            );
        function ft(e, t, n, r, a) {
          return {
            blockedOn: e,
            domEventName: t,
            eventSystemFlags: 16 | n,
            nativeEvent: a,
            targetContainers: [r],
          };
        }
        function ht(e, t) {
          switch (e) {
            case "focusin":
            case "focusout":
              it = null;
              break;
            case "dragenter":
            case "dragleave":
              lt = null;
              break;
            case "mouseover":
            case "mouseout":
              st = null;
              break;
            case "pointerover":
            case "pointerout":
              ut.delete(t.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              ct.delete(t.pointerId);
          }
        }
        function mt(e, t, n, r, a, o) {
          return null === e || e.nativeEvent !== o
            ? ((e = ft(t, n, r, a, o)),
              null !== t && null !== (t = na(t)) && tt(t),
              e)
            : ((e.eventSystemFlags |= r),
              (t = e.targetContainers),
              null !== a && -1 === t.indexOf(a) && t.push(a),
              e);
        }
        function yt(e) {
          var t = ta(e.target);
          if (null !== t) {
            var n = Qe(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = Ge(n)))
                  return (
                    (e.blockedOn = t),
                    void rt(e.lanePriority, function () {
                      o.unstable_runWithPriority(e.priority, function () {
                        nt(n);
                      });
                    })
                  );
              } else if (3 === t && n.stateNode.hydrate)
                return void (e.blockedOn =
                  3 === n.tag ? n.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function gt(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Xt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n)
              return null !== (t = na(n)) && tt(t), (e.blockedOn = n), !1;
            t.shift();
          }
          return !0;
        }
        function vt(e, t, n) {
          gt(e) && n.delete(t);
        }
        function bt() {
          for (at = !1; 0 < ot.length; ) {
            var e = ot[0];
            if (null !== e.blockedOn) {
              null !== (e = na(e.blockedOn)) && et(e);
              break;
            }
            for (var t = e.targetContainers; 0 < t.length; ) {
              var n = Xt(
                e.domEventName,
                e.eventSystemFlags,
                t[0],
                e.nativeEvent
              );
              if (null !== n) {
                e.blockedOn = n;
                break;
              }
              t.shift();
            }
            null === e.blockedOn && ot.shift();
          }
          null !== it && gt(it) && (it = null),
            null !== lt && gt(lt) && (lt = null),
            null !== st && gt(st) && (st = null),
            ut.forEach(vt),
            ct.forEach(vt);
        }
        function _t(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            at ||
              ((at = !0),
              o.unstable_scheduleCallback(o.unstable_NormalPriority, bt)));
        }
        function wt(e) {
          function t(t) {
            return _t(t, e);
          }
          if (0 < ot.length) {
            _t(ot[0], e);
            for (var n = 1; n < ot.length; n++) {
              var r = ot[n];
              r.blockedOn === e && (r.blockedOn = null);
            }
          }
          for (
            null !== it && _t(it, e),
              null !== lt && _t(lt, e),
              null !== st && _t(st, e),
              ut.forEach(t),
              ct.forEach(t),
              n = 0;
            n < dt.length;
            n++
          )
            (r = dt[n]).blockedOn === e && (r.blockedOn = null);
          for (; 0 < dt.length && null === (n = dt[0]).blockedOn; )
            yt(n), null === n.blockedOn && dt.shift();
        }
        function kt(e, t) {
          var n = {};
          return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n["Webkit" + e] = "webkit" + t),
            (n["Moz" + e] = "moz" + t),
            n
          );
        }
        var Ct = {
            animationend: kt("Animation", "AnimationEnd"),
            animationiteration: kt("Animation", "AnimationIteration"),
            animationstart: kt("Animation", "AnimationStart"),
            transitionend: kt("Transition", "TransitionEnd"),
          },
          Pt = {},
          Et = {};
        function xt(e) {
          if (Pt[e]) return Pt[e];
          if (!Ct[e]) return e;
          var t,
            n = Ct[e];
          for (t in n)
            if (n.hasOwnProperty(t) && t in Et) return (Pt[e] = n[t]);
          return e;
        }
        d &&
          ((Et = document.createElement("div").style),
          "AnimationEvent" in window ||
            (delete Ct.animationend.animation,
            delete Ct.animationiteration.animation,
            delete Ct.animationstart.animation),
          "TransitionEvent" in window || delete Ct.transitionend.transition);
        var Rt = xt("animationend"),
          St = xt("animationiteration"),
          Tt = xt("animationstart"),
          It = xt("transitionend"),
          Ot = new Map(),
          At = new Map(),
          Mt = [
            "abort",
            "abort",
            Rt,
            "animationEnd",
            St,
            "animationIteration",
            Tt,
            "animationStart",
            "canplay",
            "canPlay",
            "canplaythrough",
            "canPlayThrough",
            "durationchange",
            "durationChange",
            "emptied",
            "emptied",
            "encrypted",
            "encrypted",
            "ended",
            "ended",
            "error",
            "error",
            "gotpointercapture",
            "gotPointerCapture",
            "load",
            "load",
            "loadeddata",
            "loadedData",
            "loadedmetadata",
            "loadedMetadata",
            "loadstart",
            "loadStart",
            "lostpointercapture",
            "lostPointerCapture",
            "playing",
            "playing",
            "progress",
            "progress",
            "seeking",
            "seeking",
            "stalled",
            "stalled",
            "suspend",
            "suspend",
            "timeupdate",
            "timeUpdate",
            It,
            "transitionEnd",
            "waiting",
            "waiting",
          ];
        function jt(e, t) {
          for (var n = 0; n < e.length; n += 2) {
            var r = e[n],
              a = e[n + 1];
            (a = "on" + (a[0].toUpperCase() + a.slice(1))),
              At.set(r, t),
              Ot.set(r, a),
              u(a, [r]);
          }
        }
        (0, o.unstable_now)();
        var Nt = 8;
        function Dt(e) {
          if (0 !== (1 & e)) return (Nt = 15), 1;
          if (0 !== (2 & e)) return (Nt = 14), 2;
          if (0 !== (4 & e)) return (Nt = 13), 4;
          var t = 24 & e;
          return 0 !== t
            ? ((Nt = 12), t)
            : 0 !== (32 & e)
            ? ((Nt = 11), 32)
            : 0 !== (t = 192 & e)
            ? ((Nt = 10), t)
            : 0 !== (256 & e)
            ? ((Nt = 9), 256)
            : 0 !== (t = 3584 & e)
            ? ((Nt = 8), t)
            : 0 !== (4096 & e)
            ? ((Nt = 7), 4096)
            : 0 !== (t = 4186112 & e)
            ? ((Nt = 6), t)
            : 0 !== (t = 62914560 & e)
            ? ((Nt = 5), t)
            : 67108864 & e
            ? ((Nt = 4), 67108864)
            : 0 !== (134217728 & e)
            ? ((Nt = 3), 134217728)
            : 0 !== (t = 805306368 & e)
            ? ((Nt = 2), t)
            : 0 !== (1073741824 & e)
            ? ((Nt = 1), 1073741824)
            : ((Nt = 8), e);
        }
        function Lt(e, t) {
          var n = e.pendingLanes;
          if (0 === n) return (Nt = 0);
          var r = 0,
            a = 0,
            o = e.expiredLanes,
            i = e.suspendedLanes,
            l = e.pingedLanes;
          if (0 !== o) (r = o), (a = Nt = 15);
          else if (0 !== (o = 134217727 & n)) {
            var s = o & ~i;
            0 !== s
              ? ((r = Dt(s)), (a = Nt))
              : 0 !== (l &= o) && ((r = Dt(l)), (a = Nt));
          } else
            0 !== (o = n & ~i)
              ? ((r = Dt(o)), (a = Nt))
              : 0 !== l && ((r = Dt(l)), (a = Nt));
          if (0 === r) return 0;
          if (
            ((r = n & (((0 > (r = 31 - Wt(r)) ? 0 : 1 << r) << 1) - 1)),
            0 !== t && t !== r && 0 === (t & i))
          ) {
            if ((Dt(t), a <= Nt)) return t;
            Nt = a;
          }
          if (0 !== (t = e.entangledLanes))
            for (e = e.entanglements, t &= r; 0 < t; )
              (a = 1 << (n = 31 - Wt(t))), (r |= e[n]), (t &= ~a);
          return r;
        }
        function zt(e) {
          return 0 !== (e = -1073741825 & e.pendingLanes)
            ? e
            : 1073741824 & e
            ? 1073741824
            : 0;
        }
        function Ut(e, t) {
          switch (e) {
            case 15:
              return 1;
            case 14:
              return 2;
            case 12:
              return 0 === (e = Ft(24 & ~t)) ? Ut(10, t) : e;
            case 10:
              return 0 === (e = Ft(192 & ~t)) ? Ut(8, t) : e;
            case 8:
              return (
                0 === (e = Ft(3584 & ~t)) &&
                  0 === (e = Ft(4186112 & ~t)) &&
                  (e = 512),
                e
              );
            case 2:
              return 0 === (t = Ft(805306368 & ~t)) && (t = 268435456), t;
          }
          throw Error(i(358, e));
        }
        function Ft(e) {
          return e & -e;
        }
        function Vt(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e);
          return t;
        }
        function Bt(e, t, n) {
          e.pendingLanes |= t;
          var r = t - 1;
          (e.suspendedLanes &= r),
            (e.pingedLanes &= r),
            ((e = e.eventTimes)[(t = 31 - Wt(t))] = n);
        }
        var Wt = Math.clz32
            ? Math.clz32
            : function (e) {
                return 0 === e ? 32 : (31 - ((qt(e) / $t) | 0)) | 0;
              },
          qt = Math.log,
          $t = Math.LN2;
        var Ht = o.unstable_UserBlockingPriority,
          Yt = o.unstable_runWithPriority,
          Kt = !0;
        function Qt(e, t, n, r) {
          De || je();
          var a = Zt,
            o = De;
          De = !0;
          try {
            Me(a, e, t, n, r);
          } finally {
            (De = o) || ze();
          }
        }
        function Gt(e, t, n, r) {
          Yt(Ht, Zt.bind(null, e, t, n, r));
        }
        function Zt(e, t, n, r) {
          var a;
          if (Kt)
            if ((a = 0 === (4 & t)) && 0 < ot.length && -1 < pt.indexOf(e))
              (e = ft(null, e, t, n, r)), ot.push(e);
            else {
              var o = Xt(e, t, n, r);
              if (null === o) a && ht(e, r);
              else {
                if (a) {
                  if (-1 < pt.indexOf(e))
                    return (e = ft(o, e, t, n, r)), void ot.push(e);
                  if (
                    (function (e, t, n, r, a) {
                      switch (t) {
                        case "focusin":
                          return (it = mt(it, e, t, n, r, a)), !0;
                        case "dragenter":
                          return (lt = mt(lt, e, t, n, r, a)), !0;
                        case "mouseover":
                          return (st = mt(st, e, t, n, r, a)), !0;
                        case "pointerover":
                          var o = a.pointerId;
                          return (
                            ut.set(o, mt(ut.get(o) || null, e, t, n, r, a)), !0
                          );
                        case "gotpointercapture":
                          return (
                            (o = a.pointerId),
                            ct.set(o, mt(ct.get(o) || null, e, t, n, r, a)),
                            !0
                          );
                      }
                      return !1;
                    })(o, e, t, n, r)
                  )
                    return;
                  ht(e, r);
                }
                jr(e, t, r, null, n);
              }
            }
        }
        function Xt(e, t, n, r) {
          var a = Ee(r);
          if (null !== (a = ta(a))) {
            var o = Qe(a);
            if (null === o) a = null;
            else {
              var i = o.tag;
              if (13 === i) {
                if (null !== (a = Ge(o))) return a;
                a = null;
              } else if (3 === i) {
                if (o.stateNode.hydrate)
                  return 3 === o.tag ? o.stateNode.containerInfo : null;
                a = null;
              } else o !== a && (a = null);
            }
          }
          return jr(e, t, r, a, n), null;
        }
        var Jt = null,
          en = null,
          tn = null;
        function nn() {
          if (tn) return tn;
          var e,
            t,
            n = en,
            r = n.length,
            a = "value" in Jt ? Jt.value : Jt.textContent,
            o = a.length;
          for (e = 0; e < r && n[e] === a[e]; e++);
          var i = r - e;
          for (t = 1; t <= i && n[r - t] === a[o - t]; t++);
          return (tn = a.slice(e, 1 < t ? 1 - t : void 0));
        }
        function rn(e) {
          var t = e.keyCode;
          return (
            "charCode" in e
              ? 0 === (e = e.charCode) && 13 === t && (e = 13)
              : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function an() {
          return !0;
        }
        function on() {
          return !1;
        }
        function ln(e) {
          function t(t, n, r, a, o) {
            for (var i in ((this._reactName = t),
            (this._targetInst = r),
            (this.type = n),
            (this.nativeEvent = a),
            (this.target = o),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(i) && ((t = e[i]), (this[i] = t ? t(a) : a[i]));
            return (
              (this.isDefaultPrevented = (
                null != a.defaultPrevented
                  ? a.defaultPrevented
                  : !1 === a.returnValue
              )
                ? an
                : on),
              (this.isPropagationStopped = on),
              this
            );
          }
          return (
            a(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : "unknown" !== typeof e.returnValue &&
                      (e.returnValue = !1),
                  (this.isDefaultPrevented = an));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : "unknown" !== typeof e.cancelBubble &&
                      (e.cancelBubble = !0),
                  (this.isPropagationStopped = an));
              },
              persist: function () {},
              isPersistent: an,
            }),
            t
          );
        }
        var sn,
          un,
          cn,
          dn = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          pn = ln(dn),
          fn = a({}, dn, { view: 0, detail: 0 }),
          hn = ln(fn),
          mn = a({}, fn, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: Rn,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget;
            },
            movementX: function (e) {
              return "movementX" in e
                ? e.movementX
                : (e !== cn &&
                    (cn && "mousemove" === e.type
                      ? ((sn = e.screenX - cn.screenX),
                        (un = e.screenY - cn.screenY))
                      : (un = sn = 0),
                    (cn = e)),
                  sn);
            },
            movementY: function (e) {
              return "movementY" in e ? e.movementY : un;
            },
          }),
          yn = ln(mn),
          gn = ln(a({}, mn, { dataTransfer: 0 })),
          vn = ln(a({}, fn, { relatedTarget: 0 })),
          bn = ln(
            a({}, dn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          _n = a({}, dn, {
            clipboardData: function (e) {
              return "clipboardData" in e
                ? e.clipboardData
                : window.clipboardData;
            },
          }),
          wn = ln(_n),
          kn = ln(a({}, dn, { data: 0 })),
          Cn = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified",
          },
          Pn = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta",
          },
          En = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey",
          };
        function xn(e) {
          var t = this.nativeEvent;
          return t.getModifierState
            ? t.getModifierState(e)
            : !!(e = En[e]) && !!t[e];
        }
        function Rn() {
          return xn;
        }
        var Sn = a({}, fn, {
            key: function (e) {
              if (e.key) {
                var t = Cn[e.key] || e.key;
                if ("Unidentified" !== t) return t;
              }
              return "keypress" === e.type
                ? 13 === (e = rn(e))
                  ? "Enter"
                  : String.fromCharCode(e)
                : "keydown" === e.type || "keyup" === e.type
                ? Pn[e.keyCode] || "Unidentified"
                : "";
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: Rn,
            charCode: function (e) {
              return "keypress" === e.type ? rn(e) : 0;
            },
            keyCode: function (e) {
              return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
            },
            which: function (e) {
              return "keypress" === e.type
                ? rn(e)
                : "keydown" === e.type || "keyup" === e.type
                ? e.keyCode
                : 0;
            },
          }),
          Tn = ln(Sn),
          In = ln(
            a({}, mn, {
              pointerId: 0,
              width: 0,
              height: 0,
              pressure: 0,
              tangentialPressure: 0,
              tiltX: 0,
              tiltY: 0,
              twist: 0,
              pointerType: 0,
              isPrimary: 0,
            })
          ),
          On = ln(
            a({}, fn, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: Rn,
            })
          ),
          An = ln(
            a({}, dn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          Mn = a({}, mn, {
            deltaX: function (e) {
              return "deltaX" in e
                ? e.deltaX
                : "wheelDeltaX" in e
                ? -e.wheelDeltaX
                : 0;
            },
            deltaY: function (e) {
              return "deltaY" in e
                ? e.deltaY
                : "wheelDeltaY" in e
                ? -e.wheelDeltaY
                : "wheelDelta" in e
                ? -e.wheelDelta
                : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
          }),
          jn = ln(Mn),
          Nn = [9, 13, 27, 32],
          Dn = d && "CompositionEvent" in window,
          Ln = null;
        d && "documentMode" in document && (Ln = document.documentMode);
        var zn = d && "TextEvent" in window && !Ln,
          Un = d && (!Dn || (Ln && 8 < Ln && 11 >= Ln)),
          Fn = String.fromCharCode(32),
          Vn = !1;
        function Bn(e, t) {
          switch (e) {
            case "keyup":
              return -1 !== Nn.indexOf(t.keyCode);
            case "keydown":
              return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout":
              return !0;
            default:
              return !1;
          }
        }
        function Wn(e) {
          return "object" === typeof (e = e.detail) && "data" in e
            ? e.data
            : null;
        }
        var qn = !1;
        var $n = {
          color: !0,
          date: !0,
          datetime: !0,
          "datetime-local": !0,
          email: !0,
          month: !0,
          number: !0,
          password: !0,
          range: !0,
          search: !0,
          tel: !0,
          text: !0,
          time: !0,
          url: !0,
          week: !0,
        };
        function Hn(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return "input" === t ? !!$n[e.type] : "textarea" === t;
        }
        function Yn(e, t, n, r) {
          Ie(r),
            0 < (t = Dr(t, "onChange")).length &&
              ((n = new pn("onChange", "change", null, n, r)),
              e.push({ event: n, listeners: t }));
        }
        var Kn = null,
          Qn = null;
        function Gn(e) {
          Sr(e, 0);
        }
        function Zn(e) {
          if (Z(ra(e))) return e;
        }
        function Xn(e, t) {
          if ("change" === e) return t;
        }
        var Jn = !1;
        if (d) {
          var er;
          if (d) {
            var tr = "oninput" in document;
            if (!tr) {
              var nr = document.createElement("div");
              nr.setAttribute("oninput", "return;"),
                (tr = "function" === typeof nr.oninput);
            }
            er = tr;
          } else er = !1;
          Jn = er && (!document.documentMode || 9 < document.documentMode);
        }
        function rr() {
          Kn && (Kn.detachEvent("onpropertychange", ar), (Qn = Kn = null));
        }
        function ar(e) {
          if ("value" === e.propertyName && Zn(Qn)) {
            var t = [];
            if ((Yn(t, Qn, e, Ee(e)), (e = Gn), De)) e(t);
            else {
              De = !0;
              try {
                Ae(e, t);
              } finally {
                (De = !1), ze();
              }
            }
          }
        }
        function or(e, t, n) {
          "focusin" === e
            ? (rr(), (Qn = n), (Kn = t).attachEvent("onpropertychange", ar))
            : "focusout" === e && rr();
        }
        function ir(e) {
          if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return Zn(Qn);
        }
        function lr(e, t) {
          if ("click" === e) return Zn(t);
        }
        function sr(e, t) {
          if ("input" === e || "change" === e) return Zn(t);
        }
        var ur =
            "function" === typeof Object.is
              ? Object.is
              : function (e, t) {
                  return (
                    (e === t && (0 !== e || 1 / e === 1 / t)) ||
                    (e !== e && t !== t)
                  );
                },
          cr = Object.prototype.hasOwnProperty;
        function dr(e, t) {
          if (ur(e, t)) return !0;
          if (
            "object" !== typeof e ||
            null === e ||
            "object" !== typeof t ||
            null === t
          )
            return !1;
          var n = Object.keys(e),
            r = Object.keys(t);
          if (n.length !== r.length) return !1;
          for (r = 0; r < n.length; r++)
            if (!cr.call(t, n[r]) || !ur(e[n[r]], t[n[r]])) return !1;
          return !0;
        }
        function pr(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function fr(e, t) {
          var n,
            r = pr(e);
          for (e = 0; r; ) {
            if (3 === r.nodeType) {
              if (((n = e + r.textContent.length), e <= t && n >= t))
                return { node: r, offset: t - e };
              e = n;
            }
            e: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling;
                  break e;
                }
                r = r.parentNode;
              }
              r = void 0;
            }
            r = pr(r);
          }
        }
        function hr(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? hr(e, t.parentNode)
                  : "contains" in e
                  ? e.contains(t)
                  : !!e.compareDocumentPosition &&
                    !!(16 & e.compareDocumentPosition(t)))))
          );
        }
        function mr() {
          for (var e = window, t = X(); t instanceof e.HTMLIFrameElement; ) {
            try {
              var n = "string" === typeof t.contentWindow.location.href;
            } catch (r) {
              n = !1;
            }
            if (!n) break;
            t = X((e = t.contentWindow).document);
          }
          return t;
        }
        function yr(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            t &&
            (("input" === t &&
              ("text" === e.type ||
                "search" === e.type ||
                "tel" === e.type ||
                "url" === e.type ||
                "password" === e.type)) ||
              "textarea" === t ||
              "true" === e.contentEditable)
          );
        }
        var gr = d && "documentMode" in document && 11 >= document.documentMode,
          vr = null,
          br = null,
          _r = null,
          wr = !1;
        function kr(e, t, n) {
          var r =
            n.window === n
              ? n.document
              : 9 === n.nodeType
              ? n
              : n.ownerDocument;
          wr ||
            null == vr ||
            vr !== X(r) ||
            ("selectionStart" in (r = vr) && yr(r)
              ? (r = { start: r.selectionStart, end: r.selectionEnd })
              : (r = {
                  anchorNode: (r = (
                    (r.ownerDocument && r.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
                }),
            (_r && dr(_r, r)) ||
              ((_r = r),
              0 < (r = Dr(br, "onSelect")).length &&
                ((t = new pn("onSelect", "select", null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = vr))));
        }
        jt(
          "cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(
            " "
          ),
          0
        ),
          jt(
            "drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(
              " "
            ),
            1
          ),
          jt(Mt, 2);
        for (
          var Cr =
              "change selectionchange textInput compositionstart compositionend compositionupdate".split(
                " "
              ),
            Pr = 0;
          Pr < Cr.length;
          Pr++
        )
          At.set(Cr[Pr], 0);
        c("onMouseEnter", ["mouseout", "mouseover"]),
          c("onMouseLeave", ["mouseout", "mouseover"]),
          c("onPointerEnter", ["pointerout", "pointerover"]),
          c("onPointerLeave", ["pointerout", "pointerover"]),
          u(
            "onChange",
            "change click focusin focusout input keydown keyup selectionchange".split(
              " "
            )
          ),
          u(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
              " "
            )
          ),
          u("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste",
          ]),
          u(
            "onCompositionEnd",
            "compositionend focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          u(
            "onCompositionStart",
            "compositionstart focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          u(
            "onCompositionUpdate",
            "compositionupdate focusout keydown keypress keyup mousedown".split(
              " "
            )
          );
        var Er =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(
              " "
            ),
          xr = new Set(
            "cancel close invalid load scroll toggle".split(" ").concat(Er)
          );
        function Rr(e, t, n) {
          var r = e.type || "unknown-event";
          (e.currentTarget = n),
            (function (e, t, n, r, a, o, l, s, u) {
              if ((Ke.apply(this, arguments), We)) {
                if (!We) throw Error(i(198));
                var c = qe;
                (We = !1), (qe = null), $e || (($e = !0), (He = c));
              }
            })(r, t, void 0, e),
            (e.currentTarget = null);
        }
        function Sr(e, t) {
          t = 0 !== (4 & t);
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              a = r.event;
            r = r.listeners;
            e: {
              var o = void 0;
              if (t)
                for (var i = r.length - 1; 0 <= i; i--) {
                  var l = r[i],
                    s = l.instance,
                    u = l.currentTarget;
                  if (((l = l.listener), s !== o && a.isPropagationStopped()))
                    break e;
                  Rr(a, l, u), (o = s);
                }
              else
                for (i = 0; i < r.length; i++) {
                  if (
                    ((s = (l = r[i]).instance),
                    (u = l.currentTarget),
                    (l = l.listener),
                    s !== o && a.isPropagationStopped())
                  )
                    break e;
                  Rr(a, l, u), (o = s);
                }
            }
          }
          if ($e) throw ((e = He), ($e = !1), (He = null), e);
        }
        function Tr(e, t) {
          var n = oa(t),
            r = e + "__bubble";
          n.has(r) || (Mr(t, e, 2, !1), n.add(r));
        }
        var Ir = "_reactListening" + Math.random().toString(36).slice(2);
        function Or(e) {
          e[Ir] ||
            ((e[Ir] = !0),
            l.forEach(function (t) {
              xr.has(t) || Ar(t, !1, e, null), Ar(t, !0, e, null);
            }));
        }
        function Ar(e, t, n, r) {
          var a =
              4 < arguments.length && void 0 !== arguments[4]
                ? arguments[4]
                : 0,
            o = n;
          if (
            ("selectionchange" === e &&
              9 !== n.nodeType &&
              (o = n.ownerDocument),
            null !== r && !t && xr.has(e))
          ) {
            if ("scroll" !== e) return;
            (a |= 2), (o = r);
          }
          var i = oa(o),
            l = e + "__" + (t ? "capture" : "bubble");
          i.has(l) || (t && (a |= 4), Mr(o, e, a, t), i.add(l));
        }
        function Mr(e, t, n, r) {
          var a = At.get(t);
          switch (void 0 === a ? 2 : a) {
            case 0:
              a = Qt;
              break;
            case 1:
              a = Gt;
              break;
            default:
              a = Zt;
          }
          (n = a.bind(null, t, n, e)),
            (a = void 0),
            !Fe ||
              ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
              (a = !0),
            r
              ? void 0 !== a
                ? e.addEventListener(t, n, { capture: !0, passive: a })
                : e.addEventListener(t, n, !0)
              : void 0 !== a
              ? e.addEventListener(t, n, { passive: a })
              : e.addEventListener(t, n, !1);
        }
        function jr(e, t, n, r, a) {
          var o = r;
          if (0 === (1 & t) && 0 === (2 & t) && null !== r)
            e: for (;;) {
              if (null === r) return;
              var i = r.tag;
              if (3 === i || 4 === i) {
                var l = r.stateNode.containerInfo;
                if (l === a || (8 === l.nodeType && l.parentNode === a)) break;
                if (4 === i)
                  for (i = r.return; null !== i; ) {
                    var s = i.tag;
                    if (
                      (3 === s || 4 === s) &&
                      ((s = i.stateNode.containerInfo) === a ||
                        (8 === s.nodeType && s.parentNode === a))
                    )
                      return;
                    i = i.return;
                  }
                for (; null !== l; ) {
                  if (null === (i = ta(l))) return;
                  if (5 === (s = i.tag) || 6 === s) {
                    r = o = i;
                    continue e;
                  }
                  l = l.parentNode;
                }
              }
              r = r.return;
            }
          !(function (e, t, n) {
            if (Le) return e(t, n);
            Le = !0;
            try {
              return Ne(e, t, n);
            } finally {
              (Le = !1), ze();
            }
          })(function () {
            var r = o,
              a = Ee(n),
              i = [];
            e: {
              var l = Ot.get(e);
              if (void 0 !== l) {
                var s = pn,
                  u = e;
                switch (e) {
                  case "keypress":
                    if (0 === rn(n)) break e;
                  case "keydown":
                  case "keyup":
                    s = Tn;
                    break;
                  case "focusin":
                    (u = "focus"), (s = vn);
                    break;
                  case "focusout":
                    (u = "blur"), (s = vn);
                    break;
                  case "beforeblur":
                  case "afterblur":
                    s = vn;
                    break;
                  case "click":
                    if (2 === n.button) break e;
                  case "auxclick":
                  case "dblclick":
                  case "mousedown":
                  case "mousemove":
                  case "mouseup":
                  case "mouseout":
                  case "mouseover":
                  case "contextmenu":
                    s = yn;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    s = gn;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    s = On;
                    break;
                  case Rt:
                  case St:
                  case Tt:
                    s = bn;
                    break;
                  case It:
                    s = An;
                    break;
                  case "scroll":
                    s = hn;
                    break;
                  case "wheel":
                    s = jn;
                    break;
                  case "copy":
                  case "cut":
                  case "paste":
                    s = wn;
                    break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    s = In;
                }
                var c = 0 !== (4 & t),
                  d = !c && "scroll" === e,
                  p = c ? (null !== l ? l + "Capture" : null) : l;
                c = [];
                for (var f, h = r; null !== h; ) {
                  var m = (f = h).stateNode;
                  if (
                    (5 === f.tag &&
                      null !== m &&
                      ((f = m),
                      null !== p &&
                        null != (m = Ue(h, p)) &&
                        c.push(Nr(h, m, f))),
                    d)
                  )
                    break;
                  h = h.return;
                }
                0 < c.length &&
                  ((l = new s(l, u, null, n, a)),
                  i.push({ event: l, listeners: c }));
              }
            }
            if (0 === (7 & t)) {
              if (
                ((s = "mouseout" === e || "pointerout" === e),
                (!(l = "mouseover" === e || "pointerover" === e) ||
                  0 !== (16 & t) ||
                  !(u = n.relatedTarget || n.fromElement) ||
                  (!ta(u) && !u[Jr])) &&
                  (s || l) &&
                  ((l =
                    a.window === a
                      ? a
                      : (l = a.ownerDocument)
                      ? l.defaultView || l.parentWindow
                      : window),
                  s
                    ? ((s = r),
                      null !==
                        (u = (u = n.relatedTarget || n.toElement)
                          ? ta(u)
                          : null) &&
                        (u !== (d = Qe(u)) || (5 !== u.tag && 6 !== u.tag)) &&
                        (u = null))
                    : ((s = null), (u = r)),
                  s !== u))
              ) {
                if (
                  ((c = yn),
                  (m = "onMouseLeave"),
                  (p = "onMouseEnter"),
                  (h = "mouse"),
                  ("pointerout" !== e && "pointerover" !== e) ||
                    ((c = In),
                    (m = "onPointerLeave"),
                    (p = "onPointerEnter"),
                    (h = "pointer")),
                  (d = null == s ? l : ra(s)),
                  (f = null == u ? l : ra(u)),
                  ((l = new c(m, h + "leave", s, n, a)).target = d),
                  (l.relatedTarget = f),
                  (m = null),
                  ta(a) === r &&
                    (((c = new c(p, h + "enter", u, n, a)).target = f),
                    (c.relatedTarget = d),
                    (m = c)),
                  (d = m),
                  s && u)
                )
                  e: {
                    for (p = u, h = 0, f = c = s; f; f = Lr(f)) h++;
                    for (f = 0, m = p; m; m = Lr(m)) f++;
                    for (; 0 < h - f; ) (c = Lr(c)), h--;
                    for (; 0 < f - h; ) (p = Lr(p)), f--;
                    for (; h--; ) {
                      if (c === p || (null !== p && c === p.alternate)) break e;
                      (c = Lr(c)), (p = Lr(p));
                    }
                    c = null;
                  }
                else c = null;
                null !== s && zr(i, l, s, c, !1),
                  null !== u && null !== d && zr(i, d, u, c, !0);
              }
              if (
                "select" ===
                  (s =
                    (l = r ? ra(r) : window).nodeName &&
                    l.nodeName.toLowerCase()) ||
                ("input" === s && "file" === l.type)
              )
                var y = Xn;
              else if (Hn(l))
                if (Jn) y = sr;
                else {
                  y = ir;
                  var g = or;
                }
              else
                (s = l.nodeName) &&
                  "input" === s.toLowerCase() &&
                  ("checkbox" === l.type || "radio" === l.type) &&
                  (y = lr);
              switch (
                (y && (y = y(e, r))
                  ? Yn(i, y, n, a)
                  : (g && g(e, l, r),
                    "focusout" === e &&
                      (g = l._wrapperState) &&
                      g.controlled &&
                      "number" === l.type &&
                      ae(l, "number", l.value)),
                (g = r ? ra(r) : window),
                e)
              ) {
                case "focusin":
                  (Hn(g) || "true" === g.contentEditable) &&
                    ((vr = g), (br = r), (_r = null));
                  break;
                case "focusout":
                  _r = br = vr = null;
                  break;
                case "mousedown":
                  wr = !0;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  (wr = !1), kr(i, n, a);
                  break;
                case "selectionchange":
                  if (gr) break;
                case "keydown":
                case "keyup":
                  kr(i, n, a);
              }
              var v;
              if (Dn)
                e: {
                  switch (e) {
                    case "compositionstart":
                      var b = "onCompositionStart";
                      break e;
                    case "compositionend":
                      b = "onCompositionEnd";
                      break e;
                    case "compositionupdate":
                      b = "onCompositionUpdate";
                      break e;
                  }
                  b = void 0;
                }
              else
                qn
                  ? Bn(e, n) && (b = "onCompositionEnd")
                  : "keydown" === e &&
                    229 === n.keyCode &&
                    (b = "onCompositionStart");
              b &&
                (Un &&
                  "ko" !== n.locale &&
                  (qn || "onCompositionStart" !== b
                    ? "onCompositionEnd" === b && qn && (v = nn())
                    : ((en = "value" in (Jt = a) ? Jt.value : Jt.textContent),
                      (qn = !0))),
                0 < (g = Dr(r, b)).length &&
                  ((b = new kn(b, e, null, n, a)),
                  i.push({ event: b, listeners: g }),
                  v ? (b.data = v) : null !== (v = Wn(n)) && (b.data = v))),
                (v = zn
                  ? (function (e, t) {
                      switch (e) {
                        case "compositionend":
                          return Wn(t);
                        case "keypress":
                          return 32 !== t.which ? null : ((Vn = !0), Fn);
                        case "textInput":
                          return (e = t.data) === Fn && Vn ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function (e, t) {
                      if (qn)
                        return "compositionend" === e || (!Dn && Bn(e, t))
                          ? ((e = nn()), (tn = en = Jt = null), (qn = !1), e)
                          : null;
                      switch (e) {
                        case "paste":
                        default:
                          return null;
                        case "keypress":
                          if (
                            !(t.ctrlKey || t.altKey || t.metaKey) ||
                            (t.ctrlKey && t.altKey)
                          ) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which);
                          }
                          return null;
                        case "compositionend":
                          return Un && "ko" !== t.locale ? null : t.data;
                      }
                    })(e, n)) &&
                  0 < (r = Dr(r, "onBeforeInput")).length &&
                  ((a = new kn("onBeforeInput", "beforeinput", null, n, a)),
                  i.push({ event: a, listeners: r }),
                  (a.data = v));
            }
            Sr(i, t);
          });
        }
        function Nr(e, t, n) {
          return { instance: e, listener: t, currentTarget: n };
        }
        function Dr(e, t) {
          for (var n = t + "Capture", r = []; null !== e; ) {
            var a = e,
              o = a.stateNode;
            5 === a.tag &&
              null !== o &&
              ((a = o),
              null != (o = Ue(e, n)) && r.unshift(Nr(e, o, a)),
              null != (o = Ue(e, t)) && r.push(Nr(e, o, a))),
              (e = e.return);
          }
          return r;
        }
        function Lr(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag);
          return e || null;
        }
        function zr(e, t, n, r, a) {
          for (var o = t._reactName, i = []; null !== n && n !== r; ) {
            var l = n,
              s = l.alternate,
              u = l.stateNode;
            if (null !== s && s === r) break;
            5 === l.tag &&
              null !== u &&
              ((l = u),
              a
                ? null != (s = Ue(n, o)) && i.unshift(Nr(n, s, l))
                : a || (null != (s = Ue(n, o)) && i.push(Nr(n, s, l)))),
              (n = n.return);
          }
          0 !== i.length && e.push({ event: t, listeners: i });
        }
        function Ur() {}
        var Fr = null,
          Vr = null;
        function Br(e, t) {
          switch (e) {
            case "button":
            case "input":
            case "select":
            case "textarea":
              return !!t.autoFocus;
          }
          return !1;
        }
        function Wr(e, t) {
          return (
            "textarea" === e ||
            "option" === e ||
            "noscript" === e ||
            "string" === typeof t.children ||
            "number" === typeof t.children ||
            ("object" === typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          );
        }
        var qr = "function" === typeof setTimeout ? setTimeout : void 0,
          $r = "function" === typeof clearTimeout ? clearTimeout : void 0;
        function Hr(e) {
          1 === e.nodeType
            ? (e.textContent = "")
            : 9 === e.nodeType && null != (e = e.body) && (e.textContent = "");
        }
        function Yr(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
          }
          return e;
        }
        function Kr(e) {
          e = e.previousSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if ("$" === n || "$!" === n || "$?" === n) {
                if (0 === t) return e;
                t--;
              } else "/$" === n && t++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        var Qr = 0;
        var Gr = Math.random().toString(36).slice(2),
          Zr = "__reactFiber$" + Gr,
          Xr = "__reactProps$" + Gr,
          Jr = "__reactContainer$" + Gr,
          ea = "__reactEvents$" + Gr;
        function ta(e) {
          var t = e[Zr];
          if (t) return t;
          for (var n = e.parentNode; n; ) {
            if ((t = n[Jr] || n[Zr])) {
              if (
                ((n = t.alternate),
                null !== t.child || (null !== n && null !== n.child))
              )
                for (e = Kr(e); null !== e; ) {
                  if ((n = e[Zr])) return n;
                  e = Kr(e);
                }
              return t;
            }
            n = (e = n).parentNode;
          }
          return null;
        }
        function na(e) {
          return !(e = e[Zr] || e[Jr]) ||
            (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
            ? null
            : e;
        }
        function ra(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode;
          throw Error(i(33));
        }
        function aa(e) {
          return e[Xr] || null;
        }
        function oa(e) {
          var t = e[ea];
          return void 0 === t && (t = e[ea] = new Set()), t;
        }
        var ia = [],
          la = -1;
        function sa(e) {
          return { current: e };
        }
        function ua(e) {
          0 > la || ((e.current = ia[la]), (ia[la] = null), la--);
        }
        function ca(e, t) {
          la++, (ia[la] = e.current), (e.current = t);
        }
        var da = {},
          pa = sa(da),
          fa = sa(!1),
          ha = da;
        function ma(e, t) {
          var n = e.type.contextTypes;
          if (!n) return da;
          var r = e.stateNode;
          if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext;
          var a,
            o = {};
          for (a in n) o[a] = t[a];
          return (
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                t),
              (e.__reactInternalMemoizedMaskedChildContext = o)),
            o
          );
        }
        function ya(e) {
          return null !== (e = e.childContextTypes) && void 0 !== e;
        }
        function ga() {
          ua(fa), ua(pa);
        }
        function va(e, t, n) {
          if (pa.current !== da) throw Error(i(168));
          ca(pa, t), ca(fa, n);
        }
        function ba(e, t, n) {
          var r = e.stateNode;
          if (
            ((e = t.childContextTypes), "function" !== typeof r.getChildContext)
          )
            return n;
          for (var o in (r = r.getChildContext()))
            if (!(o in e)) throw Error(i(108, Y(t) || "Unknown", o));
          return a({}, n, r);
        }
        function _a(e) {
          return (
            (e =
              ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
              da),
            (ha = pa.current),
            ca(pa, e),
            ca(fa, fa.current),
            !0
          );
        }
        function wa(e, t, n) {
          var r = e.stateNode;
          if (!r) throw Error(i(169));
          n
            ? ((e = ba(e, t, ha)),
              (r.__reactInternalMemoizedMergedChildContext = e),
              ua(fa),
              ua(pa),
              ca(pa, e))
            : ua(fa),
            ca(fa, n);
        }
        var ka = null,
          Ca = null,
          Pa = o.unstable_runWithPriority,
          Ea = o.unstable_scheduleCallback,
          xa = o.unstable_cancelCallback,
          Ra = o.unstable_shouldYield,
          Sa = o.unstable_requestPaint,
          Ta = o.unstable_now,
          Ia = o.unstable_getCurrentPriorityLevel,
          Oa = o.unstable_ImmediatePriority,
          Aa = o.unstable_UserBlockingPriority,
          Ma = o.unstable_NormalPriority,
          ja = o.unstable_LowPriority,
          Na = o.unstable_IdlePriority,
          Da = {},
          La = void 0 !== Sa ? Sa : function () {},
          za = null,
          Ua = null,
          Fa = !1,
          Va = Ta(),
          Ba =
            1e4 > Va
              ? Ta
              : function () {
                  return Ta() - Va;
                };
        function Wa() {
          switch (Ia()) {
            case Oa:
              return 99;
            case Aa:
              return 98;
            case Ma:
              return 97;
            case ja:
              return 96;
            case Na:
              return 95;
            default:
              throw Error(i(332));
          }
        }
        function qa(e) {
          switch (e) {
            case 99:
              return Oa;
            case 98:
              return Aa;
            case 97:
              return Ma;
            case 96:
              return ja;
            case 95:
              return Na;
            default:
              throw Error(i(332));
          }
        }
        function $a(e, t) {
          return (e = qa(e)), Pa(e, t);
        }
        function Ha(e, t, n) {
          return (e = qa(e)), Ea(e, t, n);
        }
        function Ya() {
          if (null !== Ua) {
            var e = Ua;
            (Ua = null), xa(e);
          }
          Ka();
        }
        function Ka() {
          if (!Fa && null !== za) {
            Fa = !0;
            var e = 0;
            try {
              var t = za;
              $a(99, function () {
                for (; e < t.length; e++) {
                  var n = t[e];
                  do {
                    n = n(!0);
                  } while (null !== n);
                }
              }),
                (za = null);
            } catch (n) {
              throw (null !== za && (za = za.slice(e + 1)), Ea(Oa, Ya), n);
            } finally {
              Fa = !1;
            }
          }
        }
        var Qa = w.ReactCurrentBatchConfig;
        function Ga(e, t) {
          if (e && e.defaultProps) {
            for (var n in ((t = a({}, t)), (e = e.defaultProps)))
              void 0 === t[n] && (t[n] = e[n]);
            return t;
          }
          return t;
        }
        var Za = sa(null),
          Xa = null,
          Ja = null,
          eo = null;
        function to() {
          eo = Ja = Xa = null;
        }
        function no(e) {
          var t = Za.current;
          ua(Za), (e.type._context._currentValue = t);
        }
        function ro(e, t) {
          for (; null !== e; ) {
            var n = e.alternate;
            if ((e.childLanes & t) === t) {
              if (null === n || (n.childLanes & t) === t) break;
              n.childLanes |= t;
            } else (e.childLanes |= t), null !== n && (n.childLanes |= t);
            e = e.return;
          }
        }
        function ao(e, t) {
          (Xa = e),
            (eo = Ja = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (0 !== (e.lanes & t) && (Di = !0), (e.firstContext = null));
        }
        function oo(e, t) {
          if (eo !== e && !1 !== t && 0 !== t)
            if (
              (("number" === typeof t && 1073741823 !== t) ||
                ((eo = e), (t = 1073741823)),
              (t = { context: e, observedBits: t, next: null }),
              null === Ja)
            ) {
              if (null === Xa) throw Error(i(308));
              (Ja = t),
                (Xa.dependencies = {
                  lanes: 0,
                  firstContext: t,
                  responders: null,
                });
            } else Ja = Ja.next = t;
          return e._currentValue;
        }
        var io = !1;
        function lo(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null },
            effects: null,
          };
        }
        function so(e, t) {
          (e = e.updateQueue),
            t.updateQueue === e &&
              (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
              });
        }
        function uo(e, t) {
          return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
          };
        }
        function co(e, t) {
          if (null !== (e = e.updateQueue)) {
            var n = (e = e.shared).pending;
            null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
              (e.pending = t);
          }
        }
        function po(e, t) {
          var n = e.updateQueue,
            r = e.alternate;
          if (null !== r && n === (r = r.updateQueue)) {
            var a = null,
              o = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var i = {
                  eventTime: n.eventTime,
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: n.callback,
                  next: null,
                };
                null === o ? (a = o = i) : (o = o.next = i), (n = n.next);
              } while (null !== n);
              null === o ? (a = o = t) : (o = o.next = t);
            } else a = o = t;
            return (
              (n = {
                baseState: r.baseState,
                firstBaseUpdate: a,
                lastBaseUpdate: o,
                shared: r.shared,
                effects: r.effects,
              }),
              void (e.updateQueue = n)
            );
          }
          null === (e = n.lastBaseUpdate)
            ? (n.firstBaseUpdate = t)
            : (e.next = t),
            (n.lastBaseUpdate = t);
        }
        function fo(e, t, n, r) {
          var o = e.updateQueue;
          io = !1;
          var i = o.firstBaseUpdate,
            l = o.lastBaseUpdate,
            s = o.shared.pending;
          if (null !== s) {
            o.shared.pending = null;
            var u = s,
              c = u.next;
            (u.next = null), null === l ? (i = c) : (l.next = c), (l = u);
            var d = e.alternate;
            if (null !== d) {
              var p = (d = d.updateQueue).lastBaseUpdate;
              p !== l &&
                (null === p ? (d.firstBaseUpdate = c) : (p.next = c),
                (d.lastBaseUpdate = u));
            }
          }
          if (null !== i) {
            for (p = o.baseState, l = 0, d = c = u = null; ; ) {
              s = i.lane;
              var f = i.eventTime;
              if ((r & s) === s) {
                null !== d &&
                  (d = d.next =
                    {
                      eventTime: f,
                      lane: 0,
                      tag: i.tag,
                      payload: i.payload,
                      callback: i.callback,
                      next: null,
                    });
                e: {
                  var h = e,
                    m = i;
                  switch (((s = t), (f = n), m.tag)) {
                    case 1:
                      if ("function" === typeof (h = m.payload)) {
                        p = h.call(f, p, s);
                        break e;
                      }
                      p = h;
                      break e;
                    case 3:
                      h.flags = (-4097 & h.flags) | 64;
                    case 0:
                      if (
                        null ===
                          (s =
                            "function" === typeof (h = m.payload)
                              ? h.call(f, p, s)
                              : h) ||
                        void 0 === s
                      )
                        break e;
                      p = a({}, p, s);
                      break e;
                    case 2:
                      io = !0;
                  }
                }
                null !== i.callback &&
                  ((e.flags |= 32),
                  null === (s = o.effects) ? (o.effects = [i]) : s.push(i));
              } else
                (f = {
                  eventTime: f,
                  lane: s,
                  tag: i.tag,
                  payload: i.payload,
                  callback: i.callback,
                  next: null,
                }),
                  null === d ? ((c = d = f), (u = p)) : (d = d.next = f),
                  (l |= s);
              if (null === (i = i.next)) {
                if (null === (s = o.shared.pending)) break;
                (i = s.next),
                  (s.next = null),
                  (o.lastBaseUpdate = s),
                  (o.shared.pending = null);
              }
            }
            null === d && (u = p),
              (o.baseState = u),
              (o.firstBaseUpdate = c),
              (o.lastBaseUpdate = d),
              (Vl |= l),
              (e.lanes = l),
              (e.memoizedState = p);
          }
        }
        function ho(e, t, n) {
          if (((e = t.effects), (t.effects = null), null !== e))
            for (t = 0; t < e.length; t++) {
              var r = e[t],
                a = r.callback;
              if (null !== a) {
                if (((r.callback = null), (r = n), "function" !== typeof a))
                  throw Error(i(191, a));
                a.call(r);
              }
            }
        }
        var mo = new r.Component().refs;
        function yo(e, t, n, r) {
          (n =
            null === (n = n(r, (t = e.memoizedState))) || void 0 === n
              ? t
              : a({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n);
        }
        var go = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && Qe(e) === e;
          },
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = ps(),
              a = fs(e),
              o = uo(r, a);
            (o.payload = t),
              void 0 !== n && null !== n && (o.callback = n),
              co(e, o),
              hs(e, a, r);
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = ps(),
              a = fs(e),
              o = uo(r, a);
            (o.tag = 1),
              (o.payload = t),
              void 0 !== n && null !== n && (o.callback = n),
              co(e, o),
              hs(e, a, r);
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = ps(),
              r = fs(e),
              a = uo(n, r);
            (a.tag = 2),
              void 0 !== t && null !== t && (a.callback = t),
              co(e, a),
              hs(e, r, n);
          },
        };
        function vo(e, t, n, r, a, o, i) {
          return "function" === typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, o, i)
            : !t.prototype ||
                !t.prototype.isPureReactComponent ||
                !dr(n, r) ||
                !dr(a, o);
        }
        function bo(e, t, n) {
          var r = !1,
            a = da,
            o = t.contextType;
          return (
            "object" === typeof o && null !== o
              ? (o = oo(o))
              : ((a = ya(t) ? ha : pa.current),
                (o = (r = null !== (r = t.contextTypes) && void 0 !== r)
                  ? ma(e, a)
                  : da)),
            (t = new t(n, o)),
            (e.memoizedState =
              null !== t.state && void 0 !== t.state ? t.state : null),
            (t.updater = go),
            (e.stateNode = t),
            (t._reactInternals = e),
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                a),
              (e.__reactInternalMemoizedMaskedChildContext = o)),
            t
          );
        }
        function _o(e, t, n, r) {
          (e = t.state),
            "function" === typeof t.componentWillReceiveProps &&
              t.componentWillReceiveProps(n, r),
            "function" === typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && go.enqueueReplaceState(t, t.state, null);
        }
        function wo(e, t, n, r) {
          var a = e.stateNode;
          (a.props = n), (a.state = e.memoizedState), (a.refs = mo), lo(e);
          var o = t.contextType;
          "object" === typeof o && null !== o
            ? (a.context = oo(o))
            : ((o = ya(t) ? ha : pa.current), (a.context = ma(e, o))),
            fo(e, n, a, r),
            (a.state = e.memoizedState),
            "function" === typeof (o = t.getDerivedStateFromProps) &&
              (yo(e, t, o, n), (a.state = e.memoizedState)),
            "function" === typeof t.getDerivedStateFromProps ||
              "function" === typeof a.getSnapshotBeforeUpdate ||
              ("function" !== typeof a.UNSAFE_componentWillMount &&
                "function" !== typeof a.componentWillMount) ||
              ((t = a.state),
              "function" === typeof a.componentWillMount &&
                a.componentWillMount(),
              "function" === typeof a.UNSAFE_componentWillMount &&
                a.UNSAFE_componentWillMount(),
              t !== a.state && go.enqueueReplaceState(a, a.state, null),
              fo(e, n, a, r),
              (a.state = e.memoizedState)),
            "function" === typeof a.componentDidMount && (e.flags |= 4);
        }
        var ko = Array.isArray;
        function Co(e, t, n) {
          if (
            null !== (e = n.ref) &&
            "function" !== typeof e &&
            "object" !== typeof e
          ) {
            if (n._owner) {
              if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(i(309));
                var r = n.stateNode;
              }
              if (!r) throw Error(i(147, e));
              var a = "" + e;
              return null !== t &&
                null !== t.ref &&
                "function" === typeof t.ref &&
                t.ref._stringRef === a
                ? t.ref
                : ((t = function (e) {
                    var t = r.refs;
                    t === mo && (t = r.refs = {}),
                      null === e ? delete t[a] : (t[a] = e);
                  }),
                  (t._stringRef = a),
                  t);
            }
            if ("string" !== typeof e) throw Error(i(284));
            if (!n._owner) throw Error(i(290, e));
          }
          return e;
        }
        function Po(e, t) {
          if ("textarea" !== e.type)
            throw Error(
              i(
                31,
                "[object Object]" === Object.prototype.toString.call(t)
                  ? "object with keys {" + Object.keys(t).join(", ") + "}"
                  : t
              )
            );
        }
        function Eo(e) {
          function t(t, n) {
            if (e) {
              var r = t.lastEffect;
              null !== r
                ? ((r.nextEffect = n), (t.lastEffect = n))
                : (t.firstEffect = t.lastEffect = n),
                (n.nextEffect = null),
                (n.flags = 8);
            }
          }
          function n(n, r) {
            if (!e) return null;
            for (; null !== r; ) t(n, r), (r = r.sibling);
            return null;
          }
          function r(e, t) {
            for (e = new Map(); null !== t; )
              null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
                (t = t.sibling);
            return e;
          }
          function a(e, t) {
            return ((e = Hs(e, t)).index = 0), (e.sibling = null), e;
          }
          function o(t, n, r) {
            return (
              (t.index = r),
              e
                ? null !== (r = t.alternate)
                  ? (r = r.index) < n
                    ? ((t.flags = 2), n)
                    : r
                  : ((t.flags = 2), n)
                : n
            );
          }
          function l(t) {
            return e && null === t.alternate && (t.flags = 2), t;
          }
          function s(e, t, n, r) {
            return null === t || 6 !== t.tag
              ? (((t = Gs(n, e.mode, r)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function u(e, t, n, r) {
            return null !== t && t.elementType === n.type
              ? (((r = a(t, n.props)).ref = Co(e, t, n)), (r.return = e), r)
              : (((r = Ys(n.type, n.key, n.props, null, e.mode, r)).ref = Co(
                  e,
                  t,
                  n
                )),
                (r.return = e),
                r);
          }
          function c(e, t, n, r) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = Zs(n, e.mode, r)).return = e), t)
              : (((t = a(t, n.children || [])).return = e), t);
          }
          function d(e, t, n, r, o) {
            return null === t || 7 !== t.tag
              ? (((t = Ks(n, e.mode, r, o)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function p(e, t, n) {
            if ("string" === typeof t || "number" === typeof t)
              return ((t = Gs("" + t, e.mode, n)).return = e), t;
            if ("object" === typeof t && null !== t) {
              switch (t.$$typeof) {
                case k:
                  return (
                    ((n = Ys(t.type, t.key, t.props, null, e.mode, n)).ref = Co(
                      e,
                      null,
                      t
                    )),
                    (n.return = e),
                    n
                  );
                case C:
                  return ((t = Zs(t, e.mode, n)).return = e), t;
              }
              if (ko(t) || B(t))
                return ((t = Ks(t, e.mode, n, null)).return = e), t;
              Po(e, t);
            }
            return null;
          }
          function f(e, t, n, r) {
            var a = null !== t ? t.key : null;
            if ("string" === typeof n || "number" === typeof n)
              return null !== a ? null : s(e, t, "" + n, r);
            if ("object" === typeof n && null !== n) {
              switch (n.$$typeof) {
                case k:
                  return n.key === a
                    ? n.type === P
                      ? d(e, t, n.props.children, r, a)
                      : u(e, t, n, r)
                    : null;
                case C:
                  return n.key === a ? c(e, t, n, r) : null;
              }
              if (ko(n) || B(n)) return null !== a ? null : d(e, t, n, r, null);
              Po(e, n);
            }
            return null;
          }
          function h(e, t, n, r, a) {
            if ("string" === typeof r || "number" === typeof r)
              return s(t, (e = e.get(n) || null), "" + r, a);
            if ("object" === typeof r && null !== r) {
              switch (r.$$typeof) {
                case k:
                  return (
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r.type === P
                      ? d(t, e, r.props.children, a, r.key)
                      : u(t, e, r, a)
                  );
                case C:
                  return c(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a
                  );
              }
              if (ko(r) || B(r))
                return d(t, (e = e.get(n) || null), r, a, null);
              Po(t, r);
            }
            return null;
          }
          function m(a, i, l, s) {
            for (
              var u = null, c = null, d = i, m = (i = 0), y = null;
              null !== d && m < l.length;
              m++
            ) {
              d.index > m ? ((y = d), (d = null)) : (y = d.sibling);
              var g = f(a, d, l[m], s);
              if (null === g) {
                null === d && (d = y);
                break;
              }
              e && d && null === g.alternate && t(a, d),
                (i = o(g, i, m)),
                null === c ? (u = g) : (c.sibling = g),
                (c = g),
                (d = y);
            }
            if (m === l.length) return n(a, d), u;
            if (null === d) {
              for (; m < l.length; m++)
                null !== (d = p(a, l[m], s)) &&
                  ((i = o(d, i, m)),
                  null === c ? (u = d) : (c.sibling = d),
                  (c = d));
              return u;
            }
            for (d = r(a, d); m < l.length; m++)
              null !== (y = h(d, a, m, l[m], s)) &&
                (e &&
                  null !== y.alternate &&
                  d.delete(null === y.key ? m : y.key),
                (i = o(y, i, m)),
                null === c ? (u = y) : (c.sibling = y),
                (c = y));
            return (
              e &&
                d.forEach(function (e) {
                  return t(a, e);
                }),
              u
            );
          }
          function y(a, l, s, u) {
            var c = B(s);
            if ("function" !== typeof c) throw Error(i(150));
            if (null == (s = c.call(s))) throw Error(i(151));
            for (
              var d = (c = null), m = l, y = (l = 0), g = null, v = s.next();
              null !== m && !v.done;
              y++, v = s.next()
            ) {
              m.index > y ? ((g = m), (m = null)) : (g = m.sibling);
              var b = f(a, m, v.value, u);
              if (null === b) {
                null === m && (m = g);
                break;
              }
              e && m && null === b.alternate && t(a, m),
                (l = o(b, l, y)),
                null === d ? (c = b) : (d.sibling = b),
                (d = b),
                (m = g);
            }
            if (v.done) return n(a, m), c;
            if (null === m) {
              for (; !v.done; y++, v = s.next())
                null !== (v = p(a, v.value, u)) &&
                  ((l = o(v, l, y)),
                  null === d ? (c = v) : (d.sibling = v),
                  (d = v));
              return c;
            }
            for (m = r(a, m); !v.done; y++, v = s.next())
              null !== (v = h(m, a, y, v.value, u)) &&
                (e &&
                  null !== v.alternate &&
                  m.delete(null === v.key ? y : v.key),
                (l = o(v, l, y)),
                null === d ? (c = v) : (d.sibling = v),
                (d = v));
            return (
              e &&
                m.forEach(function (e) {
                  return t(a, e);
                }),
              c
            );
          }
          return function (e, r, o, s) {
            var u =
              "object" === typeof o &&
              null !== o &&
              o.type === P &&
              null === o.key;
            u && (o = o.props.children);
            var c = "object" === typeof o && null !== o;
            if (c)
              switch (o.$$typeof) {
                case k:
                  e: {
                    for (c = o.key, u = r; null !== u; ) {
                      if (u.key === c) {
                        if (7 === u.tag) {
                          if (o.type === P) {
                            n(e, u.sibling),
                              ((r = a(u, o.props.children)).return = e),
                              (e = r);
                            break e;
                          }
                        } else if (u.elementType === o.type) {
                          n(e, u.sibling),
                            ((r = a(u, o.props)).ref = Co(e, u, o)),
                            (r.return = e),
                            (e = r);
                          break e;
                        }
                        n(e, u);
                        break;
                      }
                      t(e, u), (u = u.sibling);
                    }
                    o.type === P
                      ? (((r = Ks(o.props.children, e.mode, s, o.key)).return =
                          e),
                        (e = r))
                      : (((s = Ys(
                          o.type,
                          o.key,
                          o.props,
                          null,
                          e.mode,
                          s
                        )).ref = Co(e, r, o)),
                        (s.return = e),
                        (e = s));
                  }
                  return l(e);
                case C:
                  e: {
                    for (u = o.key; null !== r; ) {
                      if (r.key === u) {
                        if (
                          4 === r.tag &&
                          r.stateNode.containerInfo === o.containerInfo &&
                          r.stateNode.implementation === o.implementation
                        ) {
                          n(e, r.sibling),
                            ((r = a(r, o.children || [])).return = e),
                            (e = r);
                          break e;
                        }
                        n(e, r);
                        break;
                      }
                      t(e, r), (r = r.sibling);
                    }
                    ((r = Zs(o, e.mode, s)).return = e), (e = r);
                  }
                  return l(e);
              }
            if ("string" === typeof o || "number" === typeof o)
              return (
                (o = "" + o),
                null !== r && 6 === r.tag
                  ? (n(e, r.sibling), ((r = a(r, o)).return = e), (e = r))
                  : (n(e, r), ((r = Gs(o, e.mode, s)).return = e), (e = r)),
                l(e)
              );
            if (ko(o)) return m(e, r, o, s);
            if (B(o)) return y(e, r, o, s);
            if ((c && Po(e, o), "undefined" === typeof o && !u))
              switch (e.tag) {
                case 1:
                case 22:
                case 0:
                case 11:
                case 15:
                  throw Error(i(152, Y(e.type) || "Component"));
              }
            return n(e, r);
          };
        }
        var xo = Eo(!0),
          Ro = Eo(!1),
          So = {},
          To = sa(So),
          Io = sa(So),
          Oo = sa(So);
        function Ao(e) {
          if (e === So) throw Error(i(174));
          return e;
        }
        function Mo(e, t) {
          switch ((ca(Oo, t), ca(Io, e), ca(To, So), (e = t.nodeType))) {
            case 9:
            case 11:
              t = (t = t.documentElement) ? t.namespaceURI : fe(null, "");
              break;
            default:
              t = fe(
                (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
                (e = e.tagName)
              );
          }
          ua(To), ca(To, t);
        }
        function jo() {
          ua(To), ua(Io), ua(Oo);
        }
        function No(e) {
          Ao(Oo.current);
          var t = Ao(To.current),
            n = fe(t, e.type);
          t !== n && (ca(Io, e), ca(To, n));
        }
        function Do(e) {
          Io.current === e && (ua(To), ua(Io));
        }
        var Lo = sa(0);
        function zo(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState;
              if (
                null !== n &&
                (null === (n = n.dehydrated) ||
                  "$?" === n.data ||
                  "$!" === n.data)
              )
                return t;
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (0 !== (64 & t.flags)) return t;
            } else if (null !== t.child) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
          return null;
        }
        var Uo = null,
          Fo = null,
          Vo = !1;
        function Bo(e, t) {
          var n = qs(5, null, null, 0);
          (n.elementType = "DELETED"),
            (n.type = "DELETED"),
            (n.stateNode = t),
            (n.return = e),
            (n.flags = 8),
            null !== e.lastEffect
              ? ((e.lastEffect.nextEffect = n), (e.lastEffect = n))
              : (e.firstEffect = e.lastEffect = n);
        }
        function Wo(e, t) {
          switch (e.tag) {
            case 5:
              var n = e.type;
              return (
                null !==
                  (t =
                    1 !== t.nodeType ||
                    n.toLowerCase() !== t.nodeName.toLowerCase()
                      ? null
                      : t) && ((e.stateNode = t), !0)
              );
            case 6:
              return (
                null !==
                  (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), !0)
              );
            default:
              return !1;
          }
        }
        function qo(e) {
          if (Vo) {
            var t = Fo;
            if (t) {
              var n = t;
              if (!Wo(e, t)) {
                if (!(t = Yr(n.nextSibling)) || !Wo(e, t))
                  return (
                    (e.flags = (-1025 & e.flags) | 2), (Vo = !1), void (Uo = e)
                  );
                Bo(Uo, n);
              }
              (Uo = e), (Fo = Yr(t.firstChild));
            } else (e.flags = (-1025 & e.flags) | 2), (Vo = !1), (Uo = e);
          }
        }
        function $o(e) {
          for (
            e = e.return;
            null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

          )
            e = e.return;
          Uo = e;
        }
        function Ho(e) {
          if (e !== Uo) return !1;
          if (!Vo) return $o(e), (Vo = !0), !1;
          var t = e.type;
          if (
            5 !== e.tag ||
            ("head" !== t && "body" !== t && !Wr(t, e.memoizedProps))
          )
            for (t = Fo; t; ) Bo(e, t), (t = Yr(t.nextSibling));
          if (($o(e), 13 === e.tag)) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(i(317));
            e: {
              for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                  var n = e.data;
                  if ("/$" === n) {
                    if (0 === t) {
                      Fo = Yr(e.nextSibling);
                      break e;
                    }
                    t--;
                  } else ("$" !== n && "$!" !== n && "$?" !== n) || t++;
                }
                e = e.nextSibling;
              }
              Fo = null;
            }
          } else Fo = Uo ? Yr(e.stateNode.nextSibling) : null;
          return !0;
        }
        function Yo() {
          (Fo = Uo = null), (Vo = !1);
        }
        var Ko = [];
        function Qo() {
          for (var e = 0; e < Ko.length; e++)
            Ko[e]._workInProgressVersionPrimary = null;
          Ko.length = 0;
        }
        var Go = w.ReactCurrentDispatcher,
          Zo = w.ReactCurrentBatchConfig,
          Xo = 0,
          Jo = null,
          ei = null,
          ti = null,
          ni = !1,
          ri = !1;
        function ai() {
          throw Error(i(321));
        }
        function oi(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++)
            if (!ur(e[n], t[n])) return !1;
          return !0;
        }
        function ii(e, t, n, r, a, o) {
          if (
            ((Xo = o),
            (Jo = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (Go.current = null === e || null === e.memoizedState ? Ai : Mi),
            (e = n(r, a)),
            ri)
          ) {
            o = 0;
            do {
              if (((ri = !1), !(25 > o))) throw Error(i(301));
              (o += 1),
                (ti = ei = null),
                (t.updateQueue = null),
                (Go.current = ji),
                (e = n(r, a));
            } while (ri);
          }
          if (
            ((Go.current = Oi),
            (t = null !== ei && null !== ei.next),
            (Xo = 0),
            (ti = ei = Jo = null),
            (ni = !1),
            t)
          )
            throw Error(i(300));
          return e;
        }
        function li() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === ti ? (Jo.memoizedState = ti = e) : (ti = ti.next = e), ti
          );
        }
        function si() {
          if (null === ei) {
            var e = Jo.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = ei.next;
          var t = null === ti ? Jo.memoizedState : ti.next;
          if (null !== t) (ti = t), (ei = e);
          else {
            if (null === e) throw Error(i(310));
            (e = {
              memoizedState: (ei = e).memoizedState,
              baseState: ei.baseState,
              baseQueue: ei.baseQueue,
              queue: ei.queue,
              next: null,
            }),
              null === ti ? (Jo.memoizedState = ti = e) : (ti = ti.next = e);
          }
          return ti;
        }
        function ui(e, t) {
          return "function" === typeof t ? t(e) : t;
        }
        function ci(e) {
          var t = si(),
            n = t.queue;
          if (null === n) throw Error(i(311));
          n.lastRenderedReducer = e;
          var r = ei,
            a = r.baseQueue,
            o = n.pending;
          if (null !== o) {
            if (null !== a) {
              var l = a.next;
              (a.next = o.next), (o.next = l);
            }
            (r.baseQueue = a = o), (n.pending = null);
          }
          if (null !== a) {
            (a = a.next), (r = r.baseState);
            var s = (l = o = null),
              u = a;
            do {
              var c = u.lane;
              if ((Xo & c) === c)
                null !== s &&
                  (s = s.next =
                    {
                      lane: 0,
                      action: u.action,
                      eagerReducer: u.eagerReducer,
                      eagerState: u.eagerState,
                      next: null,
                    }),
                  (r = u.eagerReducer === e ? u.eagerState : e(r, u.action));
              else {
                var d = {
                  lane: c,
                  action: u.action,
                  eagerReducer: u.eagerReducer,
                  eagerState: u.eagerState,
                  next: null,
                };
                null === s ? ((l = s = d), (o = r)) : (s = s.next = d),
                  (Jo.lanes |= c),
                  (Vl |= c);
              }
              u = u.next;
            } while (null !== u && u !== a);
            null === s ? (o = r) : (s.next = l),
              ur(r, t.memoizedState) || (Di = !0),
              (t.memoizedState = r),
              (t.baseState = o),
              (t.baseQueue = s),
              (n.lastRenderedState = r);
          }
          return [t.memoizedState, n.dispatch];
        }
        function di(e) {
          var t = si(),
            n = t.queue;
          if (null === n) throw Error(i(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
            a = n.pending,
            o = t.memoizedState;
          if (null !== a) {
            n.pending = null;
            var l = (a = a.next);
            do {
              (o = e(o, l.action)), (l = l.next);
            } while (l !== a);
            ur(o, t.memoizedState) || (Di = !0),
              (t.memoizedState = o),
              null === t.baseQueue && (t.baseState = o),
              (n.lastRenderedState = o);
          }
          return [o, r];
        }
        function pi(e, t, n) {
          var r = t._getVersion;
          r = r(t._source);
          var a = t._workInProgressVersionPrimary;
          if (
            (null !== a
              ? (e = a === r)
              : ((e = e.mutableReadLanes),
                (e = (Xo & e) === e) &&
                  ((t._workInProgressVersionPrimary = r), Ko.push(t))),
            e)
          )
            return n(t._source);
          throw (Ko.push(t), Error(i(350)));
        }
        function fi(e, t, n, r) {
          var a = Ml;
          if (null === a) throw Error(i(349));
          var o = t._getVersion,
            l = o(t._source),
            s = Go.current,
            u = s.useState(function () {
              return pi(a, t, n);
            }),
            c = u[1],
            d = u[0];
          u = ti;
          var p = e.memoizedState,
            f = p.refs,
            h = f.getSnapshot,
            m = p.source;
          p = p.subscribe;
          var y = Jo;
          return (
            (e.memoizedState = { refs: f, source: t, subscribe: r }),
            s.useEffect(
              function () {
                (f.getSnapshot = n), (f.setSnapshot = c);
                var e = o(t._source);
                if (!ur(l, e)) {
                  (e = n(t._source)),
                    ur(d, e) ||
                      (c(e),
                      (e = fs(y)),
                      (a.mutableReadLanes |= e & a.pendingLanes)),
                    (e = a.mutableReadLanes),
                    (a.entangledLanes |= e);
                  for (var r = a.entanglements, i = e; 0 < i; ) {
                    var s = 31 - Wt(i),
                      u = 1 << s;
                    (r[s] |= e), (i &= ~u);
                  }
                }
              },
              [n, t, r]
            ),
            s.useEffect(
              function () {
                return r(t._source, function () {
                  var e = f.getSnapshot,
                    n = f.setSnapshot;
                  try {
                    n(e(t._source));
                    var r = fs(y);
                    a.mutableReadLanes |= r & a.pendingLanes;
                  } catch (o) {
                    n(function () {
                      throw o;
                    });
                  }
                });
              },
              [t, r]
            ),
            (ur(h, n) && ur(m, t) && ur(p, r)) ||
              (((e = {
                pending: null,
                dispatch: null,
                lastRenderedReducer: ui,
                lastRenderedState: d,
              }).dispatch = c =
                Ii.bind(null, Jo, e)),
              (u.queue = e),
              (u.baseQueue = null),
              (d = pi(a, t, n)),
              (u.memoizedState = u.baseState = d)),
            d
          );
        }
        function hi(e, t, n) {
          return fi(si(), e, t, n);
        }
        function mi(e) {
          var t = li();
          return (
            "function" === typeof e && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = (e = t.queue =
              {
                pending: null,
                dispatch: null,
                lastRenderedReducer: ui,
                lastRenderedState: e,
              }).dispatch =
              Ii.bind(null, Jo, e)),
            [t.memoizedState, e]
          );
        }
        function yi(e, t, n, r) {
          return (
            (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
            null === (t = Jo.updateQueue)
              ? ((t = { lastEffect: null }),
                (Jo.updateQueue = t),
                (t.lastEffect = e.next = e))
              : null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
            e
          );
        }
        function gi(e) {
          return (e = { current: e }), (li().memoizedState = e);
        }
        function vi() {
          return si().memoizedState;
        }
        function bi(e, t, n, r) {
          var a = li();
          (Jo.flags |= e),
            (a.memoizedState = yi(1 | t, n, void 0, void 0 === r ? null : r));
        }
        function _i(e, t, n, r) {
          var a = si();
          r = void 0 === r ? null : r;
          var o = void 0;
          if (null !== ei) {
            var i = ei.memoizedState;
            if (((o = i.destroy), null !== r && oi(r, i.deps)))
              return void yi(t, n, o, r);
          }
          (Jo.flags |= e), (a.memoizedState = yi(1 | t, n, o, r));
        }
        function wi(e, t) {
          return bi(516, 4, e, t);
        }
        function ki(e, t) {
          return _i(516, 4, e, t);
        }
        function Ci(e, t) {
          return _i(4, 2, e, t);
        }
        function Pi(e, t) {
          return "function" === typeof t
            ? ((e = e()),
              t(e),
              function () {
                t(null);
              })
            : null !== t && void 0 !== t
            ? ((e = e()),
              (t.current = e),
              function () {
                t.current = null;
              })
            : void 0;
        }
        function Ei(e, t, n) {
          return (
            (n = null !== n && void 0 !== n ? n.concat([e]) : null),
            _i(4, 2, Pi.bind(null, t, e), n)
          );
        }
        function xi() {}
        function Ri(e, t) {
          var n = si();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && oi(t, r[1])
            ? r[0]
            : ((n.memoizedState = [e, t]), e);
        }
        function Si(e, t) {
          var n = si();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && oi(t, r[1])
            ? r[0]
            : ((e = e()), (n.memoizedState = [e, t]), e);
        }
        function Ti(e, t) {
          var n = Wa();
          $a(98 > n ? 98 : n, function () {
            e(!0);
          }),
            $a(97 < n ? 97 : n, function () {
              var n = Zo.transition;
              Zo.transition = 1;
              try {
                e(!1), t();
              } finally {
                Zo.transition = n;
              }
            });
        }
        function Ii(e, t, n) {
          var r = ps(),
            a = fs(e),
            o = {
              lane: a,
              action: n,
              eagerReducer: null,
              eagerState: null,
              next: null,
            },
            i = t.pending;
          if (
            (null === i ? (o.next = o) : ((o.next = i.next), (i.next = o)),
            (t.pending = o),
            (i = e.alternate),
            e === Jo || (null !== i && i === Jo))
          )
            ri = ni = !0;
          else {
            if (
              0 === e.lanes &&
              (null === i || 0 === i.lanes) &&
              null !== (i = t.lastRenderedReducer)
            )
              try {
                var l = t.lastRenderedState,
                  s = i(l, n);
                if (((o.eagerReducer = i), (o.eagerState = s), ur(s, l)))
                  return;
              } catch (u) {}
            hs(e, a, r);
          }
        }
        var Oi = {
            readContext: oo,
            useCallback: ai,
            useContext: ai,
            useEffect: ai,
            useImperativeHandle: ai,
            useLayoutEffect: ai,
            useMemo: ai,
            useReducer: ai,
            useRef: ai,
            useState: ai,
            useDebugValue: ai,
            useDeferredValue: ai,
            useTransition: ai,
            useMutableSource: ai,
            useOpaqueIdentifier: ai,
            unstable_isNewReconciler: !1,
          },
          Ai = {
            readContext: oo,
            useCallback: function (e, t) {
              return (li().memoizedState = [e, void 0 === t ? null : t]), e;
            },
            useContext: oo,
            useEffect: wi,
            useImperativeHandle: function (e, t, n) {
              return (
                (n = null !== n && void 0 !== n ? n.concat([e]) : null),
                bi(4, 2, Pi.bind(null, t, e), n)
              );
            },
            useLayoutEffect: function (e, t) {
              return bi(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var n = li();
              return (
                (t = void 0 === t ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
              );
            },
            useReducer: function (e, t, n) {
              var r = li();
              return (
                (t = void 0 !== n ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = (e = r.queue =
                  {
                    pending: null,
                    dispatch: null,
                    lastRenderedReducer: e,
                    lastRenderedState: t,
                  }).dispatch =
                  Ii.bind(null, Jo, e)),
                [r.memoizedState, e]
              );
            },
            useRef: gi,
            useState: mi,
            useDebugValue: xi,
            useDeferredValue: function (e) {
              var t = mi(e),
                n = t[0],
                r = t[1];
              return (
                wi(
                  function () {
                    var t = Zo.transition;
                    Zo.transition = 1;
                    try {
                      r(e);
                    } finally {
                      Zo.transition = t;
                    }
                  },
                  [e]
                ),
                n
              );
            },
            useTransition: function () {
              var e = mi(!1),
                t = e[0];
              return gi((e = Ti.bind(null, e[1]))), [e, t];
            },
            useMutableSource: function (e, t, n) {
              var r = li();
              return (
                (r.memoizedState = {
                  refs: { getSnapshot: t, setSnapshot: null },
                  source: e,
                  subscribe: n,
                }),
                fi(r, e, t, n)
              );
            },
            useOpaqueIdentifier: function () {
              if (Vo) {
                var e = !1,
                  t = (function (e) {
                    return { $$typeof: N, toString: e, valueOf: e };
                  })(function () {
                    throw (
                      (e || ((e = !0), n("r:" + (Qr++).toString(36))),
                      Error(i(355)))
                    );
                  }),
                  n = mi(t)[1];
                return (
                  0 === (2 & Jo.mode) &&
                    ((Jo.flags |= 516),
                    yi(
                      5,
                      function () {
                        n("r:" + (Qr++).toString(36));
                      },
                      void 0,
                      null
                    )),
                  t
                );
              }
              return mi((t = "r:" + (Qr++).toString(36))), t;
            },
            unstable_isNewReconciler: !1,
          },
          Mi = {
            readContext: oo,
            useCallback: Ri,
            useContext: oo,
            useEffect: ki,
            useImperativeHandle: Ei,
            useLayoutEffect: Ci,
            useMemo: Si,
            useReducer: ci,
            useRef: vi,
            useState: function () {
              return ci(ui);
            },
            useDebugValue: xi,
            useDeferredValue: function (e) {
              var t = ci(ui),
                n = t[0],
                r = t[1];
              return (
                ki(
                  function () {
                    var t = Zo.transition;
                    Zo.transition = 1;
                    try {
                      r(e);
                    } finally {
                      Zo.transition = t;
                    }
                  },
                  [e]
                ),
                n
              );
            },
            useTransition: function () {
              var e = ci(ui)[0];
              return [vi().current, e];
            },
            useMutableSource: hi,
            useOpaqueIdentifier: function () {
              return ci(ui)[0];
            },
            unstable_isNewReconciler: !1,
          },
          ji = {
            readContext: oo,
            useCallback: Ri,
            useContext: oo,
            useEffect: ki,
            useImperativeHandle: Ei,
            useLayoutEffect: Ci,
            useMemo: Si,
            useReducer: di,
            useRef: vi,
            useState: function () {
              return di(ui);
            },
            useDebugValue: xi,
            useDeferredValue: function (e) {
              var t = di(ui),
                n = t[0],
                r = t[1];
              return (
                ki(
                  function () {
                    var t = Zo.transition;
                    Zo.transition = 1;
                    try {
                      r(e);
                    } finally {
                      Zo.transition = t;
                    }
                  },
                  [e]
                ),
                n
              );
            },
            useTransition: function () {
              var e = di(ui)[0];
              return [vi().current, e];
            },
            useMutableSource: hi,
            useOpaqueIdentifier: function () {
              return di(ui)[0];
            },
            unstable_isNewReconciler: !1,
          },
          Ni = w.ReactCurrentOwner,
          Di = !1;
        function Li(e, t, n, r) {
          t.child = null === e ? Ro(t, null, n, r) : xo(t, e.child, n, r);
        }
        function zi(e, t, n, r, a) {
          n = n.render;
          var o = t.ref;
          return (
            ao(t, a),
            (r = ii(e, t, n, r, o, a)),
            null === e || Di
              ? ((t.flags |= 1), Li(e, t, r, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -517),
                (e.lanes &= ~a),
                ol(e, t, a))
          );
        }
        function Ui(e, t, n, r, a, o) {
          if (null === e) {
            var i = n.type;
            return "function" !== typeof i ||
              $s(i) ||
              void 0 !== i.defaultProps ||
              null !== n.compare ||
              void 0 !== n.defaultProps
              ? (((e = Ys(n.type, null, r, t, t.mode, o)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = i), Fi(e, t, i, r, a, o));
          }
          return (
            (i = e.child),
            0 === (a & o) &&
            ((a = i.memoizedProps),
            (n = null !== (n = n.compare) ? n : dr)(a, r) && e.ref === t.ref)
              ? ol(e, t, o)
              : ((t.flags |= 1),
                ((e = Hs(i, r)).ref = t.ref),
                (e.return = t),
                (t.child = e))
          );
        }
        function Fi(e, t, n, r, a, o) {
          if (null !== e && dr(e.memoizedProps, r) && e.ref === t.ref) {
            if (((Di = !1), 0 === (o & a)))
              return (t.lanes = e.lanes), ol(e, t, o);
            0 !== (16384 & e.flags) && (Di = !0);
          }
          return Wi(e, t, n, r, o);
        }
        function Vi(e, t, n) {
          var r = t.pendingProps,
            a = r.children,
            o = null !== e ? e.memoizedState : null;
          if ("hidden" === r.mode || "unstable-defer-without-hiding" === r.mode)
            if (0 === (4 & t.mode))
              (t.memoizedState = { baseLanes: 0 }), ks(t, n);
            else {
              if (0 === (1073741824 & n))
                return (
                  (e = null !== o ? o.baseLanes | n : n),
                  (t.lanes = t.childLanes = 1073741824),
                  (t.memoizedState = { baseLanes: e }),
                  ks(t, e),
                  null
                );
              (t.memoizedState = { baseLanes: 0 }),
                ks(t, null !== o ? o.baseLanes : n);
            }
          else
            null !== o
              ? ((r = o.baseLanes | n), (t.memoizedState = null))
              : (r = n),
              ks(t, r);
          return Li(e, t, a, n), t.child;
        }
        function Bi(e, t) {
          var n = t.ref;
          ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
            (t.flags |= 128);
        }
        function Wi(e, t, n, r, a) {
          var o = ya(n) ? ha : pa.current;
          return (
            (o = ma(t, o)),
            ao(t, a),
            (n = ii(e, t, n, r, o, a)),
            null === e || Di
              ? ((t.flags |= 1), Li(e, t, n, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -517),
                (e.lanes &= ~a),
                ol(e, t, a))
          );
        }
        function qi(e, t, n, r, a) {
          if (ya(n)) {
            var o = !0;
            _a(t);
          } else o = !1;
          if ((ao(t, a), null === t.stateNode))
            null !== e &&
              ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
              bo(t, n, r),
              wo(t, n, r, a),
              (r = !0);
          else if (null === e) {
            var i = t.stateNode,
              l = t.memoizedProps;
            i.props = l;
            var s = i.context,
              u = n.contextType;
            "object" === typeof u && null !== u
              ? (u = oo(u))
              : (u = ma(t, (u = ya(n) ? ha : pa.current)));
            var c = n.getDerivedStateFromProps,
              d =
                "function" === typeof c ||
                "function" === typeof i.getSnapshotBeforeUpdate;
            d ||
              ("function" !== typeof i.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof i.componentWillReceiveProps) ||
              ((l !== r || s !== u) && _o(t, i, r, u)),
              (io = !1);
            var p = t.memoizedState;
            (i.state = p),
              fo(t, r, i, a),
              (s = t.memoizedState),
              l !== r || p !== s || fa.current || io
                ? ("function" === typeof c &&
                    (yo(t, n, c, r), (s = t.memoizedState)),
                  (l = io || vo(t, n, l, r, p, s, u))
                    ? (d ||
                        ("function" !== typeof i.UNSAFE_componentWillMount &&
                          "function" !== typeof i.componentWillMount) ||
                        ("function" === typeof i.componentWillMount &&
                          i.componentWillMount(),
                        "function" === typeof i.UNSAFE_componentWillMount &&
                          i.UNSAFE_componentWillMount()),
                      "function" === typeof i.componentDidMount &&
                        (t.flags |= 4))
                    : ("function" === typeof i.componentDidMount &&
                        (t.flags |= 4),
                      (t.memoizedProps = r),
                      (t.memoizedState = s)),
                  (i.props = r),
                  (i.state = s),
                  (i.context = u),
                  (r = l))
                : ("function" === typeof i.componentDidMount && (t.flags |= 4),
                  (r = !1));
          } else {
            (i = t.stateNode),
              so(e, t),
              (l = t.memoizedProps),
              (u = t.type === t.elementType ? l : Ga(t.type, l)),
              (i.props = u),
              (d = t.pendingProps),
              (p = i.context),
              "object" === typeof (s = n.contextType) && null !== s
                ? (s = oo(s))
                : (s = ma(t, (s = ya(n) ? ha : pa.current)));
            var f = n.getDerivedStateFromProps;
            (c =
              "function" === typeof f ||
              "function" === typeof i.getSnapshotBeforeUpdate) ||
              ("function" !== typeof i.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof i.componentWillReceiveProps) ||
              ((l !== d || p !== s) && _o(t, i, r, s)),
              (io = !1),
              (p = t.memoizedState),
              (i.state = p),
              fo(t, r, i, a);
            var h = t.memoizedState;
            l !== d || p !== h || fa.current || io
              ? ("function" === typeof f &&
                  (yo(t, n, f, r), (h = t.memoizedState)),
                (u = io || vo(t, n, u, r, p, h, s))
                  ? (c ||
                      ("function" !== typeof i.UNSAFE_componentWillUpdate &&
                        "function" !== typeof i.componentWillUpdate) ||
                      ("function" === typeof i.componentWillUpdate &&
                        i.componentWillUpdate(r, h, s),
                      "function" === typeof i.UNSAFE_componentWillUpdate &&
                        i.UNSAFE_componentWillUpdate(r, h, s)),
                    "function" === typeof i.componentDidUpdate &&
                      (t.flags |= 4),
                    "function" === typeof i.getSnapshotBeforeUpdate &&
                      (t.flags |= 256))
                  : ("function" !== typeof i.componentDidUpdate ||
                      (l === e.memoizedProps && p === e.memoizedState) ||
                      (t.flags |= 4),
                    "function" !== typeof i.getSnapshotBeforeUpdate ||
                      (l === e.memoizedProps && p === e.memoizedState) ||
                      (t.flags |= 256),
                    (t.memoizedProps = r),
                    (t.memoizedState = h)),
                (i.props = r),
                (i.state = h),
                (i.context = s),
                (r = u))
              : ("function" !== typeof i.componentDidUpdate ||
                  (l === e.memoizedProps && p === e.memoizedState) ||
                  (t.flags |= 4),
                "function" !== typeof i.getSnapshotBeforeUpdate ||
                  (l === e.memoizedProps && p === e.memoizedState) ||
                  (t.flags |= 256),
                (r = !1));
          }
          return $i(e, t, n, r, o, a);
        }
        function $i(e, t, n, r, a, o) {
          Bi(e, t);
          var i = 0 !== (64 & t.flags);
          if (!r && !i) return a && wa(t, n, !1), ol(e, t, o);
          (r = t.stateNode), (Ni.current = t);
          var l =
            i && "function" !== typeof n.getDerivedStateFromError
              ? null
              : r.render();
          return (
            (t.flags |= 1),
            null !== e && i
              ? ((t.child = xo(t, e.child, null, o)),
                (t.child = xo(t, null, l, o)))
              : Li(e, t, l, o),
            (t.memoizedState = r.state),
            a && wa(t, n, !0),
            t.child
          );
        }
        function Hi(e) {
          var t = e.stateNode;
          t.pendingContext
            ? va(0, t.pendingContext, t.pendingContext !== t.context)
            : t.context && va(0, t.context, !1),
            Mo(e, t.containerInfo);
        }
        var Yi,
          Ki,
          Qi,
          Gi,
          Zi = { dehydrated: null, retryLane: 0 };
        function Xi(e, t, n) {
          var r,
            a = t.pendingProps,
            o = Lo.current,
            i = !1;
          return (
            (r = 0 !== (64 & t.flags)) ||
              (r = (null === e || null !== e.memoizedState) && 0 !== (2 & o)),
            r
              ? ((i = !0), (t.flags &= -65))
              : (null !== e && null === e.memoizedState) ||
                void 0 === a.fallback ||
                !0 === a.unstable_avoidThisFallback ||
                (o |= 1),
            ca(Lo, 1 & o),
            null === e
              ? (void 0 !== a.fallback && qo(t),
                (e = a.children),
                (o = a.fallback),
                i
                  ? ((e = Ji(t, e, o, n)),
                    (t.child.memoizedState = { baseLanes: n }),
                    (t.memoizedState = Zi),
                    e)
                  : "number" === typeof a.unstable_expectedLoadTime
                  ? ((e = Ji(t, e, o, n)),
                    (t.child.memoizedState = { baseLanes: n }),
                    (t.memoizedState = Zi),
                    (t.lanes = 33554432),
                    e)
                  : (((n = Qs(
                      { mode: "visible", children: e },
                      t.mode,
                      n,
                      null
                    )).return = t),
                    (t.child = n)))
              : (e.memoizedState,
                i
                  ? ((a = tl(e, t, a.children, a.fallback, n)),
                    (i = t.child),
                    (o = e.child.memoizedState),
                    (i.memoizedState =
                      null === o
                        ? { baseLanes: n }
                        : { baseLanes: o.baseLanes | n }),
                    (i.childLanes = e.childLanes & ~n),
                    (t.memoizedState = Zi),
                    a)
                  : ((n = el(e, t, a.children, n)),
                    (t.memoizedState = null),
                    n))
          );
        }
        function Ji(e, t, n, r) {
          var a = e.mode,
            o = e.child;
          return (
            (t = { mode: "hidden", children: t }),
            0 === (2 & a) && null !== o
              ? ((o.childLanes = 0), (o.pendingProps = t))
              : (o = Qs(t, a, 0, null)),
            (n = Ks(n, a, r, null)),
            (o.return = e),
            (n.return = e),
            (o.sibling = n),
            (e.child = o),
            n
          );
        }
        function el(e, t, n, r) {
          var a = e.child;
          return (
            (e = a.sibling),
            (n = Hs(a, { mode: "visible", children: n })),
            0 === (2 & t.mode) && (n.lanes = r),
            (n.return = t),
            (n.sibling = null),
            null !== e &&
              ((e.nextEffect = null),
              (e.flags = 8),
              (t.firstEffect = t.lastEffect = e)),
            (t.child = n)
          );
        }
        function tl(e, t, n, r, a) {
          var o = t.mode,
            i = e.child;
          e = i.sibling;
          var l = { mode: "hidden", children: n };
          return (
            0 === (2 & o) && t.child !== i
              ? (((n = t.child).childLanes = 0),
                (n.pendingProps = l),
                null !== (i = n.lastEffect)
                  ? ((t.firstEffect = n.firstEffect),
                    (t.lastEffect = i),
                    (i.nextEffect = null))
                  : (t.firstEffect = t.lastEffect = null))
              : (n = Hs(i, l)),
            null !== e ? (r = Hs(e, r)) : ((r = Ks(r, o, a, null)).flags |= 2),
            (r.return = t),
            (n.return = t),
            (n.sibling = r),
            (t.child = n),
            r
          );
        }
        function nl(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          null !== n && (n.lanes |= t), ro(e.return, t);
        }
        function rl(e, t, n, r, a, o) {
          var i = e.memoizedState;
          null === i
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: a,
                lastEffect: o,
              })
            : ((i.isBackwards = t),
              (i.rendering = null),
              (i.renderingStartTime = 0),
              (i.last = r),
              (i.tail = n),
              (i.tailMode = a),
              (i.lastEffect = o));
        }
        function al(e, t, n) {
          var r = t.pendingProps,
            a = r.revealOrder,
            o = r.tail;
          if ((Li(e, t, r.children, n), 0 !== (2 & (r = Lo.current))))
            (r = (1 & r) | 2), (t.flags |= 64);
          else {
            if (null !== e && 0 !== (64 & e.flags))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && nl(e, n);
                else if (19 === e.tag) nl(e, n);
                else if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
                if (e === t) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            r &= 1;
          }
          if ((ca(Lo, r), 0 === (2 & t.mode))) t.memoizedState = null;
          else
            switch (a) {
              case "forwards":
                for (n = t.child, a = null; null !== n; )
                  null !== (e = n.alternate) && null === zo(e) && (a = n),
                    (n = n.sibling);
                null === (n = a)
                  ? ((a = t.child), (t.child = null))
                  : ((a = n.sibling), (n.sibling = null)),
                  rl(t, !1, a, n, o, t.lastEffect);
                break;
              case "backwards":
                for (n = null, a = t.child, t.child = null; null !== a; ) {
                  if (null !== (e = a.alternate) && null === zo(e)) {
                    t.child = a;
                    break;
                  }
                  (e = a.sibling), (a.sibling = n), (n = a), (a = e);
                }
                rl(t, !0, n, null, o, t.lastEffect);
                break;
              case "together":
                rl(t, !1, null, null, void 0, t.lastEffect);
                break;
              default:
                t.memoizedState = null;
            }
          return t.child;
        }
        function ol(e, t, n) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (Vl |= t.lanes),
            0 !== (n & t.childLanes))
          ) {
            if (null !== e && t.child !== e.child) throw Error(i(153));
            if (null !== t.child) {
              for (
                n = Hs((e = t.child), e.pendingProps),
                  t.child = n,
                  n.return = t;
                null !== e.sibling;

              )
                (e = e.sibling),
                  ((n = n.sibling = Hs(e, e.pendingProps)).return = t);
              n.sibling = null;
            }
            return t.child;
          }
          return null;
        }
        function il(e, t) {
          if (!Vo)
            switch (e.tailMode) {
              case "hidden":
                t = e.tail;
                for (var n = null; null !== t; )
                  null !== t.alternate && (n = t), (t = t.sibling);
                null === n ? (e.tail = null) : (n.sibling = null);
                break;
              case "collapsed":
                n = e.tail;
                for (var r = null; null !== n; )
                  null !== n.alternate && (r = n), (n = n.sibling);
                null === r
                  ? t || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (r.sibling = null);
            }
        }
        function ll(e, t, n) {
          var r = t.pendingProps;
          switch (t.tag) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
              return null;
            case 1:
            case 17:
              return ya(t.type) && ga(), null;
            case 3:
              return (
                jo(),
                ua(fa),
                ua(pa),
                Qo(),
                (r = t.stateNode).pendingContext &&
                  ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (Ho(t) ? (t.flags |= 4) : r.hydrate || (t.flags |= 256)),
                Ki(t),
                null
              );
            case 5:
              Do(t);
              var o = Ao(Oo.current);
              if (((n = t.type), null !== e && null != t.stateNode))
                Qi(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 128);
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(i(166));
                  return null;
                }
                if (((e = Ao(To.current)), Ho(t))) {
                  (r = t.stateNode), (n = t.type);
                  var l = t.memoizedProps;
                  switch (((r[Zr] = t), (r[Xr] = l), n)) {
                    case "dialog":
                      Tr("cancel", r), Tr("close", r);
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      Tr("load", r);
                      break;
                    case "video":
                    case "audio":
                      for (e = 0; e < Er.length; e++) Tr(Er[e], r);
                      break;
                    case "source":
                      Tr("error", r);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      Tr("error", r), Tr("load", r);
                      break;
                    case "details":
                      Tr("toggle", r);
                      break;
                    case "input":
                      ee(r, l), Tr("invalid", r);
                      break;
                    case "select":
                      (r._wrapperState = { wasMultiple: !!l.multiple }),
                        Tr("invalid", r);
                      break;
                    case "textarea":
                      se(r, l), Tr("invalid", r);
                  }
                  for (var u in (Ce(n, l), (e = null), l))
                    l.hasOwnProperty(u) &&
                      ((o = l[u]),
                      "children" === u
                        ? "string" === typeof o
                          ? r.textContent !== o && (e = ["children", o])
                          : "number" === typeof o &&
                            r.textContent !== "" + o &&
                            (e = ["children", "" + o])
                        : s.hasOwnProperty(u) &&
                          null != o &&
                          "onScroll" === u &&
                          Tr("scroll", r));
                  switch (n) {
                    case "input":
                      G(r), re(r, l, !0);
                      break;
                    case "textarea":
                      G(r), ce(r);
                      break;
                    case "select":
                    case "option":
                      break;
                    default:
                      "function" === typeof l.onClick && (r.onclick = Ur);
                  }
                  (r = e), (t.updateQueue = r), null !== r && (t.flags |= 4);
                } else {
                  switch (
                    ((u = 9 === o.nodeType ? o : o.ownerDocument),
                    e === de.html && (e = pe(n)),
                    e === de.html
                      ? "script" === n
                        ? (((e = u.createElement("div")).innerHTML =
                            "<script></script>"),
                          (e = e.removeChild(e.firstChild)))
                        : "string" === typeof r.is
                        ? (e = u.createElement(n, { is: r.is }))
                        : ((e = u.createElement(n)),
                          "select" === n &&
                            ((u = e),
                            r.multiple
                              ? (u.multiple = !0)
                              : r.size && (u.size = r.size)))
                      : (e = u.createElementNS(e, n)),
                    (e[Zr] = t),
                    (e[Xr] = r),
                    Yi(e, t, !1, !1),
                    (t.stateNode = e),
                    (u = Pe(n, r)),
                    n)
                  ) {
                    case "dialog":
                      Tr("cancel", e), Tr("close", e), (o = r);
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      Tr("load", e), (o = r);
                      break;
                    case "video":
                    case "audio":
                      for (o = 0; o < Er.length; o++) Tr(Er[o], e);
                      o = r;
                      break;
                    case "source":
                      Tr("error", e), (o = r);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      Tr("error", e), Tr("load", e), (o = r);
                      break;
                    case "details":
                      Tr("toggle", e), (o = r);
                      break;
                    case "input":
                      ee(e, r), (o = J(e, r)), Tr("invalid", e);
                      break;
                    case "option":
                      o = oe(e, r);
                      break;
                    case "select":
                      (e._wrapperState = { wasMultiple: !!r.multiple }),
                        (o = a({}, r, { value: void 0 })),
                        Tr("invalid", e);
                      break;
                    case "textarea":
                      se(e, r), (o = le(e, r)), Tr("invalid", e);
                      break;
                    default:
                      o = r;
                  }
                  Ce(n, o);
                  var c = o;
                  for (l in c)
                    if (c.hasOwnProperty(l)) {
                      var d = c[l];
                      "style" === l
                        ? we(e, d)
                        : "dangerouslySetInnerHTML" === l
                        ? null != (d = d ? d.__html : void 0) && ye(e, d)
                        : "children" === l
                        ? "string" === typeof d
                          ? ("textarea" !== n || "" !== d) && ge(e, d)
                          : "number" === typeof d && ge(e, "" + d)
                        : "suppressContentEditableWarning" !== l &&
                          "suppressHydrationWarning" !== l &&
                          "autoFocus" !== l &&
                          (s.hasOwnProperty(l)
                            ? null != d && "onScroll" === l && Tr("scroll", e)
                            : null != d && _(e, l, d, u));
                    }
                  switch (n) {
                    case "input":
                      G(e), re(e, r, !1);
                      break;
                    case "textarea":
                      G(e), ce(e);
                      break;
                    case "option":
                      null != r.value &&
                        e.setAttribute("value", "" + K(r.value));
                      break;
                    case "select":
                      (e.multiple = !!r.multiple),
                        null != (l = r.value)
                          ? ie(e, !!r.multiple, l, !1)
                          : null != r.defaultValue &&
                            ie(e, !!r.multiple, r.defaultValue, !0);
                      break;
                    default:
                      "function" === typeof o.onClick && (e.onclick = Ur);
                  }
                  Br(n, r) && (t.flags |= 4);
                }
                null !== t.ref && (t.flags |= 128);
              }
              return null;
            case 6:
              if (e && null != t.stateNode) Gi(e, t, e.memoizedProps, r);
              else {
                if ("string" !== typeof r && null === t.stateNode)
                  throw Error(i(166));
                (n = Ao(Oo.current)),
                  Ao(To.current),
                  Ho(t)
                    ? ((r = t.stateNode),
                      (n = t.memoizedProps),
                      (r[Zr] = t),
                      r.nodeValue !== n && (t.flags |= 4))
                    : (((r = (
                        9 === n.nodeType ? n : n.ownerDocument
                      ).createTextNode(r))[Zr] = t),
                      (t.stateNode = r));
              }
              return null;
            case 13:
              return (
                ua(Lo),
                (r = t.memoizedState),
                0 !== (64 & t.flags)
                  ? ((t.lanes = n), t)
                  : ((r = null !== r),
                    (n = !1),
                    null === e
                      ? void 0 !== t.memoizedProps.fallback && Ho(t)
                      : (n = null !== e.memoizedState),
                    r &&
                      !n &&
                      0 !== (2 & t.mode) &&
                      ((null === e &&
                        !0 !== t.memoizedProps.unstable_avoidThisFallback) ||
                      0 !== (1 & Lo.current)
                        ? 0 === zl && (zl = 3)
                        : ((0 !== zl && 3 !== zl) || (zl = 4),
                          null === Ml ||
                            (0 === (134217727 & Vl) &&
                              0 === (134217727 & Bl)) ||
                            vs(Ml, Nl))),
                    (r || n) && (t.flags |= 4),
                    null)
              );
            case 4:
              return (
                jo(), Ki(t), null === e && Or(t.stateNode.containerInfo), null
              );
            case 10:
              return no(t), null;
            case 19:
              if ((ua(Lo), null === (r = t.memoizedState))) return null;
              if (((l = 0 !== (64 & t.flags)), null === (u = r.rendering)))
                if (l) il(r, !1);
                else {
                  if (0 !== zl || (null !== e && 0 !== (64 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (u = zo(e))) {
                        for (
                          t.flags |= 64,
                            il(r, !1),
                            null !== (l = u.updateQueue) &&
                              ((t.updateQueue = l), (t.flags |= 4)),
                            null === r.lastEffect && (t.firstEffect = null),
                            t.lastEffect = r.lastEffect,
                            r = n,
                            n = t.child;
                          null !== n;

                        )
                          (e = r),
                            ((l = n).flags &= 2),
                            (l.nextEffect = null),
                            (l.firstEffect = null),
                            (l.lastEffect = null),
                            null === (u = l.alternate)
                              ? ((l.childLanes = 0),
                                (l.lanes = e),
                                (l.child = null),
                                (l.memoizedProps = null),
                                (l.memoizedState = null),
                                (l.updateQueue = null),
                                (l.dependencies = null),
                                (l.stateNode = null))
                              : ((l.childLanes = u.childLanes),
                                (l.lanes = u.lanes),
                                (l.child = u.child),
                                (l.memoizedProps = u.memoizedProps),
                                (l.memoizedState = u.memoizedState),
                                (l.updateQueue = u.updateQueue),
                                (l.type = u.type),
                                (e = u.dependencies),
                                (l.dependencies =
                                  null === e
                                    ? null
                                    : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext,
                                      })),
                            (n = n.sibling);
                        return ca(Lo, (1 & Lo.current) | 2), t.child;
                      }
                      e = e.sibling;
                    }
                  null !== r.tail &&
                    Ba() > Hl &&
                    ((t.flags |= 64),
                    (l = !0),
                    il(r, !1),
                    (t.lanes = 33554432));
                }
              else {
                if (!l)
                  if (null !== (e = zo(u))) {
                    if (
                      ((t.flags |= 64),
                      (l = !0),
                      null !== (n = e.updateQueue) &&
                        ((t.updateQueue = n), (t.flags |= 4)),
                      il(r, !0),
                      null === r.tail &&
                        "hidden" === r.tailMode &&
                        !u.alternate &&
                        !Vo)
                    )
                      return (
                        null !== (t = t.lastEffect = r.lastEffect) &&
                          (t.nextEffect = null),
                        null
                      );
                  } else
                    2 * Ba() - r.renderingStartTime > Hl &&
                      1073741824 !== n &&
                      ((t.flags |= 64),
                      (l = !0),
                      il(r, !1),
                      (t.lanes = 33554432));
                r.isBackwards
                  ? ((u.sibling = t.child), (t.child = u))
                  : (null !== (n = r.last) ? (n.sibling = u) : (t.child = u),
                    (r.last = u));
              }
              return null !== r.tail
                ? ((n = r.tail),
                  (r.rendering = n),
                  (r.tail = n.sibling),
                  (r.lastEffect = t.lastEffect),
                  (r.renderingStartTime = Ba()),
                  (n.sibling = null),
                  (t = Lo.current),
                  ca(Lo, l ? (1 & t) | 2 : 1 & t),
                  n)
                : null;
            case 23:
            case 24:
              return (
                Cs(),
                null !== e &&
                  (null !== e.memoizedState) !== (null !== t.memoizedState) &&
                  "unstable-defer-without-hiding" !== r.mode &&
                  (t.flags |= 4),
                null
              );
          }
          throw Error(i(156, t.tag));
        }
        function sl(e) {
          switch (e.tag) {
            case 1:
              ya(e.type) && ga();
              var t = e.flags;
              return 4096 & t ? ((e.flags = (-4097 & t) | 64), e) : null;
            case 3:
              if ((jo(), ua(fa), ua(pa), Qo(), 0 !== (64 & (t = e.flags))))
                throw Error(i(285));
              return (e.flags = (-4097 & t) | 64), e;
            case 5:
              return Do(e), null;
            case 13:
              return (
                ua(Lo),
                4096 & (t = e.flags) ? ((e.flags = (-4097 & t) | 64), e) : null
              );
            case 19:
              return ua(Lo), null;
            case 4:
              return jo(), null;
            case 10:
              return no(e), null;
            case 23:
            case 24:
              return Cs(), null;
            default:
              return null;
          }
        }
        function ul(e, t) {
          try {
            var n = "",
              r = t;
            do {
              (n += H(r)), (r = r.return);
            } while (r);
            var a = n;
          } catch (o) {
            a = "\nError generating stack: " + o.message + "\n" + o.stack;
          }
          return { value: e, source: t, stack: a };
        }
        function cl(e, t) {
          try {
            console.error(t.value);
          } catch (n) {
            setTimeout(function () {
              throw n;
            });
          }
        }
        (Yi = function (e, t) {
          for (var n = t.child; null !== n; ) {
            if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
            else if (4 !== n.tag && null !== n.child) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === t) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === t) return;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
        }),
          (Ki = function () {}),
          (Qi = function (e, t, n, r) {
            var o = e.memoizedProps;
            if (o !== r) {
              (e = t.stateNode), Ao(To.current);
              var i,
                l = null;
              switch (n) {
                case "input":
                  (o = J(e, o)), (r = J(e, r)), (l = []);
                  break;
                case "option":
                  (o = oe(e, o)), (r = oe(e, r)), (l = []);
                  break;
                case "select":
                  (o = a({}, o, { value: void 0 })),
                    (r = a({}, r, { value: void 0 })),
                    (l = []);
                  break;
                case "textarea":
                  (o = le(e, o)), (r = le(e, r)), (l = []);
                  break;
                default:
                  "function" !== typeof o.onClick &&
                    "function" === typeof r.onClick &&
                    (e.onclick = Ur);
              }
              for (d in (Ce(n, r), (n = null), o))
                if (!r.hasOwnProperty(d) && o.hasOwnProperty(d) && null != o[d])
                  if ("style" === d) {
                    var u = o[d];
                    for (i in u)
                      u.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
                  } else
                    "dangerouslySetInnerHTML" !== d &&
                      "children" !== d &&
                      "suppressContentEditableWarning" !== d &&
                      "suppressHydrationWarning" !== d &&
                      "autoFocus" !== d &&
                      (s.hasOwnProperty(d)
                        ? l || (l = [])
                        : (l = l || []).push(d, null));
              for (d in r) {
                var c = r[d];
                if (
                  ((u = null != o ? o[d] : void 0),
                  r.hasOwnProperty(d) && c !== u && (null != c || null != u))
                )
                  if ("style" === d)
                    if (u) {
                      for (i in u)
                        !u.hasOwnProperty(i) ||
                          (c && c.hasOwnProperty(i)) ||
                          (n || (n = {}), (n[i] = ""));
                      for (i in c)
                        c.hasOwnProperty(i) &&
                          u[i] !== c[i] &&
                          (n || (n = {}), (n[i] = c[i]));
                    } else n || (l || (l = []), l.push(d, n)), (n = c);
                  else
                    "dangerouslySetInnerHTML" === d
                      ? ((c = c ? c.__html : void 0),
                        (u = u ? u.__html : void 0),
                        null != c && u !== c && (l = l || []).push(d, c))
                      : "children" === d
                      ? ("string" !== typeof c && "number" !== typeof c) ||
                        (l = l || []).push(d, "" + c)
                      : "suppressContentEditableWarning" !== d &&
                        "suppressHydrationWarning" !== d &&
                        (s.hasOwnProperty(d)
                          ? (null != c && "onScroll" === d && Tr("scroll", e),
                            l || u === c || (l = []))
                          : "object" === typeof c &&
                            null !== c &&
                            c.$$typeof === N
                          ? c.toString()
                          : (l = l || []).push(d, c));
              }
              n && (l = l || []).push("style", n);
              var d = l;
              (t.updateQueue = d) && (t.flags |= 4);
            }
          }),
          (Gi = function (e, t, n, r) {
            n !== r && (t.flags |= 4);
          });
        var dl = "function" === typeof WeakMap ? WeakMap : Map;
        function pl(e, t, n) {
          ((n = uo(-1, n)).tag = 3), (n.payload = { element: null });
          var r = t.value;
          return (
            (n.callback = function () {
              Gl || ((Gl = !0), (Zl = r)), cl(0, t);
            }),
            n
          );
        }
        function fl(e, t, n) {
          (n = uo(-1, n)).tag = 3;
          var r = e.type.getDerivedStateFromError;
          if ("function" === typeof r) {
            var a = t.value;
            n.payload = function () {
              return cl(0, t), r(a);
            };
          }
          var o = e.stateNode;
          return (
            null !== o &&
              "function" === typeof o.componentDidCatch &&
              (n.callback = function () {
                "function" !== typeof r &&
                  (null === Xl ? (Xl = new Set([this])) : Xl.add(this),
                  cl(0, t));
                var e = t.stack;
                this.componentDidCatch(t.value, {
                  componentStack: null !== e ? e : "",
                });
              }),
            n
          );
        }
        var hl = "function" === typeof WeakSet ? WeakSet : Set;
        function ml(e) {
          var t = e.ref;
          if (null !== t)
            if ("function" === typeof t)
              try {
                t(null);
              } catch (n) {
                Fs(e, n);
              }
            else t.current = null;
        }
        function yl(e, t) {
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
            case 22:
            case 5:
            case 6:
            case 4:
            case 17:
              return;
            case 1:
              if (256 & t.flags && null !== e) {
                var n = e.memoizedProps,
                  r = e.memoizedState;
                (t = (e = t.stateNode).getSnapshotBeforeUpdate(
                  t.elementType === t.type ? n : Ga(t.type, n),
                  r
                )),
                  (e.__reactInternalSnapshotBeforeUpdate = t);
              }
              return;
            case 3:
              return void (256 & t.flags && Hr(t.stateNode.containerInfo));
          }
          throw Error(i(163));
        }
        function gl(e, t, n) {
          switch (n.tag) {
            case 0:
            case 11:
            case 15:
            case 22:
              if (
                null !==
                (t = null !== (t = n.updateQueue) ? t.lastEffect : null)
              ) {
                e = t = t.next;
                do {
                  if (3 === (3 & e.tag)) {
                    var r = e.create;
                    e.destroy = r();
                  }
                  e = e.next;
                } while (e !== t);
              }
              if (
                null !==
                (t = null !== (t = n.updateQueue) ? t.lastEffect : null)
              ) {
                e = t = t.next;
                do {
                  var a = e;
                  (r = a.next),
                    0 !== (4 & (a = a.tag)) &&
                      0 !== (1 & a) &&
                      (Ls(n, e), Ds(n, e)),
                    (e = r);
                } while (e !== t);
              }
              return;
            case 1:
              return (
                (e = n.stateNode),
                4 & n.flags &&
                  (null === t
                    ? e.componentDidMount()
                    : ((r =
                        n.elementType === n.type
                          ? t.memoizedProps
                          : Ga(n.type, t.memoizedProps)),
                      e.componentDidUpdate(
                        r,
                        t.memoizedState,
                        e.__reactInternalSnapshotBeforeUpdate
                      ))),
                void (null !== (t = n.updateQueue) && ho(n, t, e))
              );
            case 3:
              if (null !== (t = n.updateQueue)) {
                if (((e = null), null !== n.child))
                  switch (n.child.tag) {
                    case 5:
                    case 1:
                      e = n.child.stateNode;
                  }
                ho(n, t, e);
              }
              return;
            case 5:
              return (
                (e = n.stateNode),
                void (
                  null === t &&
                  4 & n.flags &&
                  Br(n.type, n.memoizedProps) &&
                  e.focus()
                )
              );
            case 6:
            case 4:
            case 12:
            case 19:
            case 17:
            case 20:
            case 21:
            case 23:
            case 24:
              return;
            case 13:
              return void (
                null === n.memoizedState &&
                ((n = n.alternate),
                null !== n &&
                  ((n = n.memoizedState),
                  null !== n && ((n = n.dehydrated), null !== n && wt(n))))
              );
          }
          throw Error(i(163));
        }
        function vl(e, t) {
          for (var n = e; ; ) {
            if (5 === n.tag) {
              var r = n.stateNode;
              if (t)
                "function" === typeof (r = r.style).setProperty
                  ? r.setProperty("display", "none", "important")
                  : (r.display = "none");
              else {
                r = n.stateNode;
                var a = n.memoizedProps.style;
                (a =
                  void 0 !== a && null !== a && a.hasOwnProperty("display")
                    ? a.display
                    : null),
                  (r.style.display = _e("display", a));
              }
            } else if (6 === n.tag)
              n.stateNode.nodeValue = t ? "" : n.memoizedProps;
            else if (
              ((23 !== n.tag && 24 !== n.tag) ||
                null === n.memoizedState ||
                n === e) &&
              null !== n.child
            ) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === e) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === e) return;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
        }
        function bl(e, t) {
          if (Ca && "function" === typeof Ca.onCommitFiberUnmount)
            try {
              Ca.onCommitFiberUnmount(ka, t);
            } catch (o) {}
          switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
            case 22:
              if (null !== (e = t.updateQueue) && null !== (e = e.lastEffect)) {
                var n = (e = e.next);
                do {
                  var r = n,
                    a = r.destroy;
                  if (((r = r.tag), void 0 !== a))
                    if (0 !== (4 & r)) Ls(t, n);
                    else {
                      r = t;
                      try {
                        a();
                      } catch (o) {
                        Fs(r, o);
                      }
                    }
                  n = n.next;
                } while (n !== e);
              }
              break;
            case 1:
              if (
                (ml(t),
                "function" === typeof (e = t.stateNode).componentWillUnmount)
              )
                try {
                  (e.props = t.memoizedProps),
                    (e.state = t.memoizedState),
                    e.componentWillUnmount();
                } catch (o) {
                  Fs(t, o);
                }
              break;
            case 5:
              ml(t);
              break;
            case 4:
              El(e, t);
          }
        }
        function _l(e) {
          (e.alternate = null),
            (e.child = null),
            (e.dependencies = null),
            (e.firstEffect = null),
            (e.lastEffect = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.return = null),
            (e.updateQueue = null);
        }
        function wl(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function kl(e) {
          e: {
            for (var t = e.return; null !== t; ) {
              if (wl(t)) break e;
              t = t.return;
            }
            throw Error(i(160));
          }
          var n = t;
          switch (((t = n.stateNode), n.tag)) {
            case 5:
              var r = !1;
              break;
            case 3:
            case 4:
              (t = t.containerInfo), (r = !0);
              break;
            default:
              throw Error(i(161));
          }
          16 & n.flags && (ge(t, ""), (n.flags &= -17));
          e: t: for (n = e; ; ) {
            for (; null === n.sibling; ) {
              if (null === n.return || wl(n.return)) {
                n = null;
                break e;
              }
              n = n.return;
            }
            for (
              n.sibling.return = n.return, n = n.sibling;
              5 !== n.tag && 6 !== n.tag && 18 !== n.tag;

            ) {
              if (2 & n.flags) continue t;
              if (null === n.child || 4 === n.tag) continue t;
              (n.child.return = n), (n = n.child);
            }
            if (!(2 & n.flags)) {
              n = n.stateNode;
              break e;
            }
          }
          r ? Cl(e, n, t) : Pl(e, n, t);
        }
        function Cl(e, t, n) {
          var r = e.tag,
            a = 5 === r || 6 === r;
          if (a)
            (e = a ? e.stateNode : e.stateNode.instance),
              t
                ? 8 === n.nodeType
                  ? n.parentNode.insertBefore(e, t)
                  : n.insertBefore(e, t)
                : (8 === n.nodeType
                    ? (t = n.parentNode).insertBefore(e, n)
                    : (t = n).appendChild(e),
                  (null !== (n = n._reactRootContainer) && void 0 !== n) ||
                    null !== t.onclick ||
                    (t.onclick = Ur));
          else if (4 !== r && null !== (e = e.child))
            for (Cl(e, t, n), e = e.sibling; null !== e; )
              Cl(e, t, n), (e = e.sibling);
        }
        function Pl(e, t, n) {
          var r = e.tag,
            a = 5 === r || 6 === r;
          if (a)
            (e = a ? e.stateNode : e.stateNode.instance),
              t ? n.insertBefore(e, t) : n.appendChild(e);
          else if (4 !== r && null !== (e = e.child))
            for (Pl(e, t, n), e = e.sibling; null !== e; )
              Pl(e, t, n), (e = e.sibling);
        }
        function El(e, t) {
          for (var n, r, a = t, o = !1; ; ) {
            if (!o) {
              o = a.return;
              e: for (;;) {
                if (null === o) throw Error(i(160));
                switch (((n = o.stateNode), o.tag)) {
                  case 5:
                    r = !1;
                    break e;
                  case 3:
                  case 4:
                    (n = n.containerInfo), (r = !0);
                    break e;
                }
                o = o.return;
              }
              o = !0;
            }
            if (5 === a.tag || 6 === a.tag) {
              e: for (var l = e, s = a, u = s; ; )
                if ((bl(l, u), null !== u.child && 4 !== u.tag))
                  (u.child.return = u), (u = u.child);
                else {
                  if (u === s) break e;
                  for (; null === u.sibling; ) {
                    if (null === u.return || u.return === s) break e;
                    u = u.return;
                  }
                  (u.sibling.return = u.return), (u = u.sibling);
                }
              r
                ? ((l = n),
                  (s = a.stateNode),
                  8 === l.nodeType
                    ? l.parentNode.removeChild(s)
                    : l.removeChild(s))
                : n.removeChild(a.stateNode);
            } else if (4 === a.tag) {
              if (null !== a.child) {
                (n = a.stateNode.containerInfo),
                  (r = !0),
                  (a.child.return = a),
                  (a = a.child);
                continue;
              }
            } else if ((bl(e, a), null !== a.child)) {
              (a.child.return = a), (a = a.child);
              continue;
            }
            if (a === t) break;
            for (; null === a.sibling; ) {
              if (null === a.return || a.return === t) return;
              4 === (a = a.return).tag && (o = !1);
            }
            (a.sibling.return = a.return), (a = a.sibling);
          }
        }
        function xl(e, t) {
          switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
            case 22:
              var n = t.updateQueue;
              if (null !== (n = null !== n ? n.lastEffect : null)) {
                var r = (n = n.next);
                do {
                  3 === (3 & r.tag) &&
                    ((e = r.destroy),
                    (r.destroy = void 0),
                    void 0 !== e && e()),
                    (r = r.next);
                } while (r !== n);
              }
              return;
            case 1:
            case 12:
            case 17:
              return;
            case 5:
              if (null != (n = t.stateNode)) {
                r = t.memoizedProps;
                var a = null !== e ? e.memoizedProps : r;
                e = t.type;
                var o = t.updateQueue;
                if (((t.updateQueue = null), null !== o)) {
                  for (
                    n[Xr] = r,
                      "input" === e &&
                        "radio" === r.type &&
                        null != r.name &&
                        te(n, r),
                      Pe(e, a),
                      t = Pe(e, r),
                      a = 0;
                    a < o.length;
                    a += 2
                  ) {
                    var l = o[a],
                      s = o[a + 1];
                    "style" === l
                      ? we(n, s)
                      : "dangerouslySetInnerHTML" === l
                      ? ye(n, s)
                      : "children" === l
                      ? ge(n, s)
                      : _(n, l, s, t);
                  }
                  switch (e) {
                    case "input":
                      ne(n, r);
                      break;
                    case "textarea":
                      ue(n, r);
                      break;
                    case "select":
                      (e = n._wrapperState.wasMultiple),
                        (n._wrapperState.wasMultiple = !!r.multiple),
                        null != (o = r.value)
                          ? ie(n, !!r.multiple, o, !1)
                          : e !== !!r.multiple &&
                            (null != r.defaultValue
                              ? ie(n, !!r.multiple, r.defaultValue, !0)
                              : ie(n, !!r.multiple, r.multiple ? [] : "", !1));
                  }
                }
              }
              return;
            case 6:
              if (null === t.stateNode) throw Error(i(162));
              return void (t.stateNode.nodeValue = t.memoizedProps);
            case 3:
              return void (
                (n = t.stateNode).hydrate &&
                ((n.hydrate = !1), wt(n.containerInfo))
              );
            case 13:
              return (
                null !== t.memoizedState && (($l = Ba()), vl(t.child, !0)),
                void Rl(t)
              );
            case 19:
              return void Rl(t);
            case 23:
            case 24:
              return void vl(t, null !== t.memoizedState);
          }
          throw Error(i(163));
        }
        function Rl(e) {
          var t = e.updateQueue;
          if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new hl()),
              t.forEach(function (t) {
                var r = Bs.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r));
              });
          }
        }
        function Sl(e, t) {
          return (
            null !== e &&
            (null === (e = e.memoizedState) || null !== e.dehydrated) &&
            null !== (t = t.memoizedState) &&
            null === t.dehydrated
          );
        }
        var Tl = Math.ceil,
          Il = w.ReactCurrentDispatcher,
          Ol = w.ReactCurrentOwner,
          Al = 0,
          Ml = null,
          jl = null,
          Nl = 0,
          Dl = 0,
          Ll = sa(0),
          zl = 0,
          Ul = null,
          Fl = 0,
          Vl = 0,
          Bl = 0,
          Wl = 0,
          ql = null,
          $l = 0,
          Hl = 1 / 0;
        function Yl() {
          Hl = Ba() + 500;
        }
        var Kl,
          Ql = null,
          Gl = !1,
          Zl = null,
          Xl = null,
          Jl = !1,
          es = null,
          ts = 90,
          ns = [],
          rs = [],
          as = null,
          os = 0,
          is = null,
          ls = -1,
          ss = 0,
          us = 0,
          cs = null,
          ds = !1;
        function ps() {
          return 0 !== (48 & Al) ? Ba() : -1 !== ls ? ls : (ls = Ba());
        }
        function fs(e) {
          if (0 === (2 & (e = e.mode))) return 1;
          if (0 === (4 & e)) return 99 === Wa() ? 1 : 2;
          if ((0 === ss && (ss = Fl), 0 !== Qa.transition)) {
            0 !== us && (us = null !== ql ? ql.pendingLanes : 0), (e = ss);
            var t = 4186112 & ~us;
            return (
              0 === (t &= -t) &&
                0 === (t = (e = 4186112 & ~e) & -e) &&
                (t = 8192),
              t
            );
          }
          return (
            (e = Wa()),
            0 !== (4 & Al) && 98 === e
              ? (e = Ut(12, ss))
              : (e = Ut(
                  (e = (function (e) {
                    switch (e) {
                      case 99:
                        return 15;
                      case 98:
                        return 10;
                      case 97:
                      case 96:
                        return 8;
                      case 95:
                        return 2;
                      default:
                        return 0;
                    }
                  })(e)),
                  ss
                )),
            e
          );
        }
        function hs(e, t, n) {
          if (50 < os) throw ((os = 0), (is = null), Error(i(185)));
          if (null === (e = ms(e, t))) return null;
          Bt(e, t, n), e === Ml && ((Bl |= t), 4 === zl && vs(e, Nl));
          var r = Wa();
          1 === t
            ? 0 !== (8 & Al) && 0 === (48 & Al)
              ? bs(e)
              : (ys(e, n), 0 === Al && (Yl(), Ya()))
            : (0 === (4 & Al) ||
                (98 !== r && 99 !== r) ||
                (null === as ? (as = new Set([e])) : as.add(e)),
              ys(e, n)),
            (ql = e);
        }
        function ms(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
            (e.childLanes |= t),
              null !== (n = e.alternate) && (n.childLanes |= t),
              (n = e),
              (e = e.return);
          return 3 === n.tag ? n.stateNode : null;
        }
        function ys(e, t) {
          for (
            var n = e.callbackNode,
              r = e.suspendedLanes,
              a = e.pingedLanes,
              o = e.expirationTimes,
              l = e.pendingLanes;
            0 < l;

          ) {
            var s = 31 - Wt(l),
              u = 1 << s,
              c = o[s];
            if (-1 === c) {
              if (0 === (u & r) || 0 !== (u & a)) {
                (c = t), Dt(u);
                var d = Nt;
                o[s] = 10 <= d ? c + 250 : 6 <= d ? c + 5e3 : -1;
              }
            } else c <= t && (e.expiredLanes |= u);
            l &= ~u;
          }
          if (((r = Lt(e, e === Ml ? Nl : 0)), (t = Nt), 0 === r))
            null !== n &&
              (n !== Da && xa(n),
              (e.callbackNode = null),
              (e.callbackPriority = 0));
          else {
            if (null !== n) {
              if (e.callbackPriority === t) return;
              n !== Da && xa(n);
            }
            15 === t
              ? ((n = bs.bind(null, e)),
                null === za ? ((za = [n]), (Ua = Ea(Oa, Ka))) : za.push(n),
                (n = Da))
              : 14 === t
              ? (n = Ha(99, bs.bind(null, e)))
              : ((n = (function (e) {
                  switch (e) {
                    case 15:
                    case 14:
                      return 99;
                    case 13:
                    case 12:
                    case 11:
                    case 10:
                      return 98;
                    case 9:
                    case 8:
                    case 7:
                    case 6:
                    case 4:
                    case 5:
                      return 97;
                    case 3:
                    case 2:
                    case 1:
                      return 95;
                    case 0:
                      return 90;
                    default:
                      throw Error(i(358, e));
                  }
                })(t)),
                (n = Ha(n, gs.bind(null, e)))),
              (e.callbackPriority = t),
              (e.callbackNode = n);
          }
        }
        function gs(e) {
          if (((ls = -1), (us = ss = 0), 0 !== (48 & Al))) throw Error(i(327));
          var t = e.callbackNode;
          if (Ns() && e.callbackNode !== t) return null;
          var n = Lt(e, e === Ml ? Nl : 0);
          if (0 === n) return null;
          var r = n,
            a = Al;
          Al |= 16;
          var o = xs();
          for ((Ml === e && Nl === r) || (Yl(), Ps(e, r)); ; )
            try {
              Ts();
              break;
            } catch (s) {
              Es(e, s);
            }
          if (
            (to(),
            (Il.current = o),
            (Al = a),
            null !== jl ? (r = 0) : ((Ml = null), (Nl = 0), (r = zl)),
            0 !== (Fl & Bl))
          )
            Ps(e, 0);
          else if (0 !== r) {
            if (
              (2 === r &&
                ((Al |= 64),
                e.hydrate && ((e.hydrate = !1), Hr(e.containerInfo)),
                0 !== (n = zt(e)) && (r = Rs(e, n))),
              1 === r)
            )
              throw ((t = Ul), Ps(e, 0), vs(e, n), ys(e, Ba()), t);
            switch (
              ((e.finishedWork = e.current.alternate), (e.finishedLanes = n), r)
            ) {
              case 0:
              case 1:
                throw Error(i(345));
              case 2:
              case 5:
                As(e);
                break;
              case 3:
                if (
                  (vs(e, n), (62914560 & n) === n && 10 < (r = $l + 500 - Ba()))
                ) {
                  if (0 !== Lt(e, 0)) break;
                  if (((a = e.suspendedLanes) & n) !== n) {
                    ps(), (e.pingedLanes |= e.suspendedLanes & a);
                    break;
                  }
                  e.timeoutHandle = qr(As.bind(null, e), r);
                  break;
                }
                As(e);
                break;
              case 4:
                if ((vs(e, n), (4186112 & n) === n)) break;
                for (r = e.eventTimes, a = -1; 0 < n; ) {
                  var l = 31 - Wt(n);
                  (o = 1 << l), (l = r[l]) > a && (a = l), (n &= ~o);
                }
                if (
                  ((n = a),
                  10 <
                    (n =
                      (120 > (n = Ba() - n)
                        ? 120
                        : 480 > n
                        ? 480
                        : 1080 > n
                        ? 1080
                        : 1920 > n
                        ? 1920
                        : 3e3 > n
                        ? 3e3
                        : 4320 > n
                        ? 4320
                        : 1960 * Tl(n / 1960)) - n))
                ) {
                  e.timeoutHandle = qr(As.bind(null, e), n);
                  break;
                }
                As(e);
                break;
              default:
                throw Error(i(329));
            }
          }
          return ys(e, Ba()), e.callbackNode === t ? gs.bind(null, e) : null;
        }
        function vs(e, t) {
          for (
            t &= ~Wl,
              t &= ~Bl,
              e.suspendedLanes |= t,
              e.pingedLanes &= ~t,
              e = e.expirationTimes;
            0 < t;

          ) {
            var n = 31 - Wt(t),
              r = 1 << n;
            (e[n] = -1), (t &= ~r);
          }
        }
        function bs(e) {
          if (0 !== (48 & Al)) throw Error(i(327));
          if ((Ns(), e === Ml && 0 !== (e.expiredLanes & Nl))) {
            var t = Nl,
              n = Rs(e, t);
            0 !== (Fl & Bl) && (n = Rs(e, (t = Lt(e, t))));
          } else n = Rs(e, (t = Lt(e, 0)));
          if (
            (0 !== e.tag &&
              2 === n &&
              ((Al |= 64),
              e.hydrate && ((e.hydrate = !1), Hr(e.containerInfo)),
              0 !== (t = zt(e)) && (n = Rs(e, t))),
            1 === n)
          )
            throw ((n = Ul), Ps(e, 0), vs(e, t), ys(e, Ba()), n);
          return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = t),
            As(e),
            ys(e, Ba()),
            null
          );
        }
        function _s(e, t) {
          var n = Al;
          Al |= 1;
          try {
            return e(t);
          } finally {
            0 === (Al = n) && (Yl(), Ya());
          }
        }
        function ws(e, t) {
          var n = Al;
          (Al &= -2), (Al |= 8);
          try {
            return e(t);
          } finally {
            0 === (Al = n) && (Yl(), Ya());
          }
        }
        function ks(e, t) {
          ca(Ll, Dl), (Dl |= t), (Fl |= t);
        }
        function Cs() {
          (Dl = Ll.current), ua(Ll);
        }
        function Ps(e, t) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var n = e.timeoutHandle;
          if ((-1 !== n && ((e.timeoutHandle = -1), $r(n)), null !== jl))
            for (n = jl.return; null !== n; ) {
              var r = n;
              switch (r.tag) {
                case 1:
                  null !== (r = r.type.childContextTypes) &&
                    void 0 !== r &&
                    ga();
                  break;
                case 3:
                  jo(), ua(fa), ua(pa), Qo();
                  break;
                case 5:
                  Do(r);
                  break;
                case 4:
                  jo();
                  break;
                case 13:
                case 19:
                  ua(Lo);
                  break;
                case 10:
                  no(r);
                  break;
                case 23:
                case 24:
                  Cs();
              }
              n = n.return;
            }
          (Ml = e),
            (jl = Hs(e.current, null)),
            (Nl = Dl = Fl = t),
            (zl = 0),
            (Ul = null),
            (Wl = Bl = Vl = 0);
        }
        function Es(e, t) {
          for (;;) {
            var n = jl;
            try {
              if ((to(), (Go.current = Oi), ni)) {
                for (var r = Jo.memoizedState; null !== r; ) {
                  var a = r.queue;
                  null !== a && (a.pending = null), (r = r.next);
                }
                ni = !1;
              }
              if (
                ((Xo = 0),
                (ti = ei = Jo = null),
                (ri = !1),
                (Ol.current = null),
                null === n || null === n.return)
              ) {
                (zl = 1), (Ul = t), (jl = null);
                break;
              }
              e: {
                var o = e,
                  i = n.return,
                  l = n,
                  s = t;
                if (
                  ((t = Nl),
                  (l.flags |= 2048),
                  (l.firstEffect = l.lastEffect = null),
                  null !== s &&
                    "object" === typeof s &&
                    "function" === typeof s.then)
                ) {
                  var u = s;
                  if (0 === (2 & l.mode)) {
                    var c = l.alternate;
                    c
                      ? ((l.updateQueue = c.updateQueue),
                        (l.memoizedState = c.memoizedState),
                        (l.lanes = c.lanes))
                      : ((l.updateQueue = null), (l.memoizedState = null));
                  }
                  var d = 0 !== (1 & Lo.current),
                    p = i;
                  do {
                    var f;
                    if ((f = 13 === p.tag)) {
                      var h = p.memoizedState;
                      if (null !== h) f = null !== h.dehydrated;
                      else {
                        var m = p.memoizedProps;
                        f =
                          void 0 !== m.fallback &&
                          (!0 !== m.unstable_avoidThisFallback || !d);
                      }
                    }
                    if (f) {
                      var y = p.updateQueue;
                      if (null === y) {
                        var g = new Set();
                        g.add(u), (p.updateQueue = g);
                      } else y.add(u);
                      if (0 === (2 & p.mode)) {
                        if (
                          ((p.flags |= 64),
                          (l.flags |= 16384),
                          (l.flags &= -2981),
                          1 === l.tag)
                        )
                          if (null === l.alternate) l.tag = 17;
                          else {
                            var v = uo(-1, 1);
                            (v.tag = 2), co(l, v);
                          }
                        l.lanes |= 1;
                        break e;
                      }
                      (s = void 0), (l = t);
                      var b = o.pingCache;
                      if (
                        (null === b
                          ? ((b = o.pingCache = new dl()),
                            (s = new Set()),
                            b.set(u, s))
                          : void 0 === (s = b.get(u)) &&
                            ((s = new Set()), b.set(u, s)),
                        !s.has(l))
                      ) {
                        s.add(l);
                        var _ = Vs.bind(null, o, u, l);
                        u.then(_, _);
                      }
                      (p.flags |= 4096), (p.lanes = t);
                      break e;
                    }
                    p = p.return;
                  } while (null !== p);
                  s = Error(
                    (Y(l.type) || "A React component") +
                      " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display."
                  );
                }
                5 !== zl && (zl = 2), (s = ul(s, l)), (p = i);
                do {
                  switch (p.tag) {
                    case 3:
                      (o = s),
                        (p.flags |= 4096),
                        (t &= -t),
                        (p.lanes |= t),
                        po(p, pl(0, o, t));
                      break e;
                    case 1:
                      o = s;
                      var w = p.type,
                        k = p.stateNode;
                      if (
                        0 === (64 & p.flags) &&
                        ("function" === typeof w.getDerivedStateFromError ||
                          (null !== k &&
                            "function" === typeof k.componentDidCatch &&
                            (null === Xl || !Xl.has(k))))
                      ) {
                        (p.flags |= 4096),
                          (t &= -t),
                          (p.lanes |= t),
                          po(p, fl(p, o, t));
                        break e;
                      }
                  }
                  p = p.return;
                } while (null !== p);
              }
              Os(n);
            } catch (C) {
              (t = C), jl === n && null !== n && (jl = n = n.return);
              continue;
            }
            break;
          }
        }
        function xs() {
          var e = Il.current;
          return (Il.current = Oi), null === e ? Oi : e;
        }
        function Rs(e, t) {
          var n = Al;
          Al |= 16;
          var r = xs();
          for ((Ml === e && Nl === t) || Ps(e, t); ; )
            try {
              Ss();
              break;
            } catch (a) {
              Es(e, a);
            }
          if ((to(), (Al = n), (Il.current = r), null !== jl))
            throw Error(i(261));
          return (Ml = null), (Nl = 0), zl;
        }
        function Ss() {
          for (; null !== jl; ) Is(jl);
        }
        function Ts() {
          for (; null !== jl && !Ra(); ) Is(jl);
        }
        function Is(e) {
          var t = Kl(e.alternate, e, Dl);
          (e.memoizedProps = e.pendingProps),
            null === t ? Os(e) : (jl = t),
            (Ol.current = null);
        }
        function Os(e) {
          var t = e;
          do {
            var n = t.alternate;
            if (((e = t.return), 0 === (2048 & t.flags))) {
              if (null !== (n = ll(n, t, Dl))) return void (jl = n);
              if (
                (24 !== (n = t).tag && 23 !== n.tag) ||
                null === n.memoizedState ||
                0 !== (1073741824 & Dl) ||
                0 === (4 & n.mode)
              ) {
                for (var r = 0, a = n.child; null !== a; )
                  (r |= a.lanes | a.childLanes), (a = a.sibling);
                n.childLanes = r;
              }
              null !== e &&
                0 === (2048 & e.flags) &&
                (null === e.firstEffect && (e.firstEffect = t.firstEffect),
                null !== t.lastEffect &&
                  (null !== e.lastEffect &&
                    (e.lastEffect.nextEffect = t.firstEffect),
                  (e.lastEffect = t.lastEffect)),
                1 < t.flags &&
                  (null !== e.lastEffect
                    ? (e.lastEffect.nextEffect = t)
                    : (e.firstEffect = t),
                  (e.lastEffect = t)));
            } else {
              if (null !== (n = sl(t))) return (n.flags &= 2047), void (jl = n);
              null !== e &&
                ((e.firstEffect = e.lastEffect = null), (e.flags |= 2048));
            }
            if (null !== (t = t.sibling)) return void (jl = t);
            jl = t = e;
          } while (null !== t);
          0 === zl && (zl = 5);
        }
        function As(e) {
          var t = Wa();
          return $a(99, Ms.bind(null, e, t)), null;
        }
        function Ms(e, t) {
          do {
            Ns();
          } while (null !== es);
          if (0 !== (48 & Al)) throw Error(i(327));
          var n = e.finishedWork;
          if (null === n) return null;
          if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
            throw Error(i(177));
          e.callbackNode = null;
          var r = n.lanes | n.childLanes,
            a = r,
            o = e.pendingLanes & ~a;
          (e.pendingLanes = a),
            (e.suspendedLanes = 0),
            (e.pingedLanes = 0),
            (e.expiredLanes &= a),
            (e.mutableReadLanes &= a),
            (e.entangledLanes &= a),
            (a = e.entanglements);
          for (var l = e.eventTimes, s = e.expirationTimes; 0 < o; ) {
            var u = 31 - Wt(o),
              c = 1 << u;
            (a[u] = 0), (l[u] = -1), (s[u] = -1), (o &= ~c);
          }
          if (
            (null !== as && 0 === (24 & r) && as.has(e) && as.delete(e),
            e === Ml && ((jl = Ml = null), (Nl = 0)),
            1 < n.flags
              ? null !== n.lastEffect
                ? ((n.lastEffect.nextEffect = n), (r = n.firstEffect))
                : (r = n)
              : (r = n.firstEffect),
            null !== r)
          ) {
            if (
              ((a = Al),
              (Al |= 32),
              (Ol.current = null),
              (Fr = Kt),
              yr((l = mr())))
            ) {
              if ("selectionStart" in l)
                s = { start: l.selectionStart, end: l.selectionEnd };
              else
                e: if (
                  ((s = ((s = l.ownerDocument) && s.defaultView) || window),
                  (c = s.getSelection && s.getSelection()) &&
                    0 !== c.rangeCount)
                ) {
                  (s = c.anchorNode),
                    (o = c.anchorOffset),
                    (u = c.focusNode),
                    (c = c.focusOffset);
                  try {
                    s.nodeType, u.nodeType;
                  } catch (x) {
                    s = null;
                    break e;
                  }
                  var d = 0,
                    p = -1,
                    f = -1,
                    h = 0,
                    m = 0,
                    y = l,
                    g = null;
                  t: for (;;) {
                    for (
                      var v;
                      y !== s || (0 !== o && 3 !== y.nodeType) || (p = d + o),
                        y !== u || (0 !== c && 3 !== y.nodeType) || (f = d + c),
                        3 === y.nodeType && (d += y.nodeValue.length),
                        null !== (v = y.firstChild);

                    )
                      (g = y), (y = v);
                    for (;;) {
                      if (y === l) break t;
                      if (
                        (g === s && ++h === o && (p = d),
                        g === u && ++m === c && (f = d),
                        null !== (v = y.nextSibling))
                      )
                        break;
                      g = (y = g).parentNode;
                    }
                    y = v;
                  }
                  s = -1 === p || -1 === f ? null : { start: p, end: f };
                } else s = null;
              s = s || { start: 0, end: 0 };
            } else s = null;
            (Vr = { focusedElem: l, selectionRange: s }),
              (Kt = !1),
              (cs = null),
              (ds = !1),
              (Ql = r);
            do {
              try {
                js();
              } catch (x) {
                if (null === Ql) throw Error(i(330));
                Fs(Ql, x), (Ql = Ql.nextEffect);
              }
            } while (null !== Ql);
            (cs = null), (Ql = r);
            do {
              try {
                for (l = e; null !== Ql; ) {
                  var b = Ql.flags;
                  if ((16 & b && ge(Ql.stateNode, ""), 128 & b)) {
                    var _ = Ql.alternate;
                    if (null !== _) {
                      var w = _.ref;
                      null !== w &&
                        ("function" === typeof w
                          ? w(null)
                          : (w.current = null));
                    }
                  }
                  switch (1038 & b) {
                    case 2:
                      kl(Ql), (Ql.flags &= -3);
                      break;
                    case 6:
                      kl(Ql), (Ql.flags &= -3), xl(Ql.alternate, Ql);
                      break;
                    case 1024:
                      Ql.flags &= -1025;
                      break;
                    case 1028:
                      (Ql.flags &= -1025), xl(Ql.alternate, Ql);
                      break;
                    case 4:
                      xl(Ql.alternate, Ql);
                      break;
                    case 8:
                      El(l, (s = Ql));
                      var k = s.alternate;
                      _l(s), null !== k && _l(k);
                  }
                  Ql = Ql.nextEffect;
                }
              } catch (x) {
                if (null === Ql) throw Error(i(330));
                Fs(Ql, x), (Ql = Ql.nextEffect);
              }
            } while (null !== Ql);
            if (
              ((w = Vr),
              (_ = mr()),
              (b = w.focusedElem),
              (l = w.selectionRange),
              _ !== b &&
                b &&
                b.ownerDocument &&
                hr(b.ownerDocument.documentElement, b))
            ) {
              null !== l &&
                yr(b) &&
                ((_ = l.start),
                void 0 === (w = l.end) && (w = _),
                "selectionStart" in b
                  ? ((b.selectionStart = _),
                    (b.selectionEnd = Math.min(w, b.value.length)))
                  : (w =
                      ((_ = b.ownerDocument || document) && _.defaultView) ||
                      window).getSelection &&
                    ((w = w.getSelection()),
                    (s = b.textContent.length),
                    (k = Math.min(l.start, s)),
                    (l = void 0 === l.end ? k : Math.min(l.end, s)),
                    !w.extend && k > l && ((s = l), (l = k), (k = s)),
                    (s = fr(b, k)),
                    (o = fr(b, l)),
                    s &&
                      o &&
                      (1 !== w.rangeCount ||
                        w.anchorNode !== s.node ||
                        w.anchorOffset !== s.offset ||
                        w.focusNode !== o.node ||
                        w.focusOffset !== o.offset) &&
                      ((_ = _.createRange()).setStart(s.node, s.offset),
                      w.removeAllRanges(),
                      k > l
                        ? (w.addRange(_), w.extend(o.node, o.offset))
                        : (_.setEnd(o.node, o.offset), w.addRange(_))))),
                (_ = []);
              for (w = b; (w = w.parentNode); )
                1 === w.nodeType &&
                  _.push({ element: w, left: w.scrollLeft, top: w.scrollTop });
              for (
                "function" === typeof b.focus && b.focus(), b = 0;
                b < _.length;
                b++
              )
                ((w = _[b]).element.scrollLeft = w.left),
                  (w.element.scrollTop = w.top);
            }
            (Kt = !!Fr), (Vr = Fr = null), (e.current = n), (Ql = r);
            do {
              try {
                for (b = e; null !== Ql; ) {
                  var C = Ql.flags;
                  if ((36 & C && gl(b, Ql.alternate, Ql), 128 & C)) {
                    _ = void 0;
                    var P = Ql.ref;
                    if (null !== P) {
                      var E = Ql.stateNode;
                      Ql.tag,
                        (_ = E),
                        "function" === typeof P ? P(_) : (P.current = _);
                    }
                  }
                  Ql = Ql.nextEffect;
                }
              } catch (x) {
                if (null === Ql) throw Error(i(330));
                Fs(Ql, x), (Ql = Ql.nextEffect);
              }
            } while (null !== Ql);
            (Ql = null), La(), (Al = a);
          } else e.current = n;
          if (Jl) (Jl = !1), (es = e), (ts = t);
          else
            for (Ql = r; null !== Ql; )
              (t = Ql.nextEffect),
                (Ql.nextEffect = null),
                8 & Ql.flags &&
                  (((C = Ql).sibling = null), (C.stateNode = null)),
                (Ql = t);
          if (
            (0 === (r = e.pendingLanes) && (Xl = null),
            1 === r ? (e === is ? os++ : ((os = 0), (is = e))) : (os = 0),
            (n = n.stateNode),
            Ca && "function" === typeof Ca.onCommitFiberRoot)
          )
            try {
              Ca.onCommitFiberRoot(
                ka,
                n,
                void 0,
                64 === (64 & n.current.flags)
              );
            } catch (x) {}
          if ((ys(e, Ba()), Gl)) throw ((Gl = !1), (e = Zl), (Zl = null), e);
          return 0 !== (8 & Al) || Ya(), null;
        }
        function js() {
          for (; null !== Ql; ) {
            var e = Ql.alternate;
            ds ||
              null === cs ||
              (0 !== (8 & Ql.flags)
                ? Je(Ql, cs) && (ds = !0)
                : 13 === Ql.tag && Sl(e, Ql) && Je(Ql, cs) && (ds = !0));
            var t = Ql.flags;
            0 !== (256 & t) && yl(e, Ql),
              0 === (512 & t) ||
                Jl ||
                ((Jl = !0),
                Ha(97, function () {
                  return Ns(), null;
                })),
              (Ql = Ql.nextEffect);
          }
        }
        function Ns() {
          if (90 !== ts) {
            var e = 97 < ts ? 97 : ts;
            return (ts = 90), $a(e, zs);
          }
          return !1;
        }
        function Ds(e, t) {
          ns.push(t, e),
            Jl ||
              ((Jl = !0),
              Ha(97, function () {
                return Ns(), null;
              }));
        }
        function Ls(e, t) {
          rs.push(t, e),
            Jl ||
              ((Jl = !0),
              Ha(97, function () {
                return Ns(), null;
              }));
        }
        function zs() {
          if (null === es) return !1;
          var e = es;
          if (((es = null), 0 !== (48 & Al))) throw Error(i(331));
          var t = Al;
          Al |= 32;
          var n = rs;
          rs = [];
          for (var r = 0; r < n.length; r += 2) {
            var a = n[r],
              o = n[r + 1],
              l = a.destroy;
            if (((a.destroy = void 0), "function" === typeof l))
              try {
                l();
              } catch (u) {
                if (null === o) throw Error(i(330));
                Fs(o, u);
              }
          }
          for (n = ns, ns = [], r = 0; r < n.length; r += 2) {
            (a = n[r]), (o = n[r + 1]);
            try {
              var s = a.create;
              a.destroy = s();
            } catch (u) {
              if (null === o) throw Error(i(330));
              Fs(o, u);
            }
          }
          for (s = e.current.firstEffect; null !== s; )
            (e = s.nextEffect),
              (s.nextEffect = null),
              8 & s.flags && ((s.sibling = null), (s.stateNode = null)),
              (s = e);
          return (Al = t), Ya(), !0;
        }
        function Us(e, t, n) {
          co(e, (t = pl(0, (t = ul(n, t)), 1))),
            (t = ps()),
            null !== (e = ms(e, 1)) && (Bt(e, 1, t), ys(e, t));
        }
        function Fs(e, t) {
          if (3 === e.tag) Us(e, e, t);
          else
            for (var n = e.return; null !== n; ) {
              if (3 === n.tag) {
                Us(n, e, t);
                break;
              }
              if (1 === n.tag) {
                var r = n.stateNode;
                if (
                  "function" === typeof n.type.getDerivedStateFromError ||
                  ("function" === typeof r.componentDidCatch &&
                    (null === Xl || !Xl.has(r)))
                ) {
                  var a = fl(n, (e = ul(t, e)), 1);
                  if ((co(n, a), (a = ps()), null !== (n = ms(n, 1))))
                    Bt(n, 1, a), ys(n, a);
                  else if (
                    "function" === typeof r.componentDidCatch &&
                    (null === Xl || !Xl.has(r))
                  )
                    try {
                      r.componentDidCatch(t, e);
                    } catch (o) {}
                  break;
                }
              }
              n = n.return;
            }
        }
        function Vs(e, t, n) {
          var r = e.pingCache;
          null !== r && r.delete(t),
            (t = ps()),
            (e.pingedLanes |= e.suspendedLanes & n),
            Ml === e &&
              (Nl & n) === n &&
              (4 === zl ||
              (3 === zl && (62914560 & Nl) === Nl && 500 > Ba() - $l)
                ? Ps(e, 0)
                : (Wl |= n)),
            ys(e, t);
        }
        function Bs(e, t) {
          var n = e.stateNode;
          null !== n && n.delete(t),
            0 === (t = 0) &&
              (0 === (2 & (t = e.mode))
                ? (t = 1)
                : 0 === (4 & t)
                ? (t = 99 === Wa() ? 1 : 2)
                : (0 === ss && (ss = Fl),
                  0 === (t = Ft(62914560 & ~ss)) && (t = 4194304))),
            (n = ps()),
            null !== (e = ms(e, t)) && (Bt(e, t, n), ys(e, n));
        }
        function Ws(e, t, n, r) {
          (this.tag = e),
            (this.key = n),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = t),
            (this.dependencies =
              this.memoizedState =
              this.updateQueue =
              this.memoizedProps =
                null),
            (this.mode = r),
            (this.flags = 0),
            (this.lastEffect = this.firstEffect = this.nextEffect = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
        }
        function qs(e, t, n, r) {
          return new Ws(e, t, n, r);
        }
        function $s(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function Hs(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = qs(e.tag, t, e.key, e.mode)).elementType =
                  e.elementType),
                (n.type = e.type),
                (n.stateNode = e.stateNode),
                (n.alternate = e),
                (e.alternate = n))
              : ((n.pendingProps = t),
                (n.type = e.type),
                (n.flags = 0),
                (n.nextEffect = null),
                (n.firstEffect = null),
                (n.lastEffect = null)),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies =
              null === t
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            n
          );
        }
        function Ys(e, t, n, r, a, o) {
          var l = 2;
          if (((r = e), "function" === typeof e)) $s(e) && (l = 1);
          else if ("string" === typeof e) l = 5;
          else
            e: switch (e) {
              case P:
                return Ks(n.children, a, o, t);
              case D:
                (l = 8), (a |= 16);
                break;
              case E:
                (l = 8), (a |= 1);
                break;
              case x:
                return (
                  ((e = qs(12, n, t, 8 | a)).elementType = x),
                  (e.type = x),
                  (e.lanes = o),
                  e
                );
              case I:
                return (
                  ((e = qs(13, n, t, a)).type = I),
                  (e.elementType = I),
                  (e.lanes = o),
                  e
                );
              case O:
                return (
                  ((e = qs(19, n, t, a)).elementType = O), (e.lanes = o), e
                );
              case L:
                return Qs(n, a, o, t);
              case z:
                return (
                  ((e = qs(24, n, t, a)).elementType = z), (e.lanes = o), e
                );
              default:
                if ("object" === typeof e && null !== e)
                  switch (e.$$typeof) {
                    case R:
                      l = 10;
                      break e;
                    case S:
                      l = 9;
                      break e;
                    case T:
                      l = 11;
                      break e;
                    case A:
                      l = 14;
                      break e;
                    case M:
                      (l = 16), (r = null);
                      break e;
                    case j:
                      l = 22;
                      break e;
                  }
                throw Error(i(130, null == e ? e : typeof e, ""));
            }
          return (
            ((t = qs(l, n, t, a)).elementType = e),
            (t.type = r),
            (t.lanes = o),
            t
          );
        }
        function Ks(e, t, n, r) {
          return ((e = qs(7, e, r, t)).lanes = n), e;
        }
        function Qs(e, t, n, r) {
          return ((e = qs(23, e, r, t)).elementType = L), (e.lanes = n), e;
        }
        function Gs(e, t, n) {
          return ((e = qs(6, e, null, t)).lanes = n), e;
        }
        function Zs(e, t, n) {
          return (
            ((t = qs(
              4,
              null !== e.children ? e.children : [],
              e.key,
              t
            )).lanes = n),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            t
          );
        }
        function Xs(e, t, n) {
          (this.tag = t),
            (this.containerInfo = e),
            (this.finishedWork =
              this.pingCache =
              this.current =
              this.pendingChildren =
                null),
            (this.timeoutHandle = -1),
            (this.pendingContext = this.context = null),
            (this.hydrate = n),
            (this.callbackNode = null),
            (this.callbackPriority = 0),
            (this.eventTimes = Vt(0)),
            (this.expirationTimes = Vt(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = Vt(0)),
            (this.mutableSourceEagerHydrationData = null);
        }
        function Js(e, t, n, r) {
          var a = t.current,
            o = ps(),
            l = fs(a);
          e: if (n) {
            t: {
              if (Qe((n = n._reactInternals)) !== n || 1 !== n.tag)
                throw Error(i(170));
              var s = n;
              do {
                switch (s.tag) {
                  case 3:
                    s = s.stateNode.context;
                    break t;
                  case 1:
                    if (ya(s.type)) {
                      s = s.stateNode.__reactInternalMemoizedMergedChildContext;
                      break t;
                    }
                }
                s = s.return;
              } while (null !== s);
              throw Error(i(171));
            }
            if (1 === n.tag) {
              var u = n.type;
              if (ya(u)) {
                n = ba(n, u, s);
                break e;
              }
            }
            n = s;
          } else n = da;
          return (
            null === t.context ? (t.context = n) : (t.pendingContext = n),
            ((t = uo(o, l)).payload = { element: e }),
            null !== (r = void 0 === r ? null : r) && (t.callback = r),
            co(a, t),
            hs(a, l, o),
            l
          );
        }
        function eu(e) {
          return (e = e.current).child
            ? (e.child.tag, e.child.stateNode)
            : null;
        }
        function tu(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
          }
        }
        function nu(e, t) {
          tu(e, t), (e = e.alternate) && tu(e, t);
        }
        function ru(e, t, n) {
          var r =
            (null != n &&
              null != n.hydrationOptions &&
              n.hydrationOptions.mutableSources) ||
            null;
          if (
            ((n = new Xs(e, t, null != n && !0 === n.hydrate)),
            (t = qs(3, null, null, 2 === t ? 7 : 1 === t ? 3 : 0)),
            (n.current = t),
            (t.stateNode = n),
            lo(t),
            (e[Jr] = n.current),
            Or(8 === e.nodeType ? e.parentNode : e),
            r)
          )
            for (e = 0; e < r.length; e++) {
              var a = (t = r[e])._getVersion;
              (a = a(t._source)),
                null == n.mutableSourceEagerHydrationData
                  ? (n.mutableSourceEagerHydrationData = [t, a])
                  : n.mutableSourceEagerHydrationData.push(t, a);
            }
          this._internalRoot = n;
        }
        function au(e) {
          return !(
            !e ||
            (1 !== e.nodeType &&
              9 !== e.nodeType &&
              11 !== e.nodeType &&
              (8 !== e.nodeType ||
                " react-mount-point-unstable " !== e.nodeValue))
          );
        }
        function ou(e, t, n, r, a) {
          var o = n._reactRootContainer;
          if (o) {
            var i = o._internalRoot;
            if ("function" === typeof a) {
              var l = a;
              a = function () {
                var e = eu(i);
                l.call(e);
              };
            }
            Js(t, i, e, a);
          } else {
            if (
              ((o = n._reactRootContainer =
                (function (e, t) {
                  if (
                    (t ||
                      (t = !(
                        !(t = e
                          ? 9 === e.nodeType
                            ? e.documentElement
                            : e.firstChild
                          : null) ||
                        1 !== t.nodeType ||
                        !t.hasAttribute("data-reactroot")
                      )),
                    !t)
                  )
                    for (var n; (n = e.lastChild); ) e.removeChild(n);
                  return new ru(e, 0, t ? { hydrate: !0 } : void 0);
                })(n, r)),
              (i = o._internalRoot),
              "function" === typeof a)
            ) {
              var s = a;
              a = function () {
                var e = eu(i);
                s.call(e);
              };
            }
            ws(function () {
              Js(t, i, e, a);
            });
          }
          return eu(i);
        }
        function iu(e, t) {
          var n =
            2 < arguments.length && void 0 !== arguments[2]
              ? arguments[2]
              : null;
          if (!au(t)) throw Error(i(200));
          return (function (e, t, n) {
            var r =
              3 < arguments.length && void 0 !== arguments[3]
                ? arguments[3]
                : null;
            return {
              $$typeof: C,
              key: null == r ? null : "" + r,
              children: e,
              containerInfo: t,
              implementation: n,
            };
          })(e, t, null, n);
        }
        (Kl = function (e, t, n) {
          var r = t.lanes;
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps || fa.current) Di = !0;
            else {
              if (0 === (n & r)) {
                switch (((Di = !1), t.tag)) {
                  case 3:
                    Hi(t), Yo();
                    break;
                  case 5:
                    No(t);
                    break;
                  case 1:
                    ya(t.type) && _a(t);
                    break;
                  case 4:
                    Mo(t, t.stateNode.containerInfo);
                    break;
                  case 10:
                    r = t.memoizedProps.value;
                    var a = t.type._context;
                    ca(Za, a._currentValue), (a._currentValue = r);
                    break;
                  case 13:
                    if (null !== t.memoizedState)
                      return 0 !== (n & t.child.childLanes)
                        ? Xi(e, t, n)
                        : (ca(Lo, 1 & Lo.current),
                          null !== (t = ol(e, t, n)) ? t.sibling : null);
                    ca(Lo, 1 & Lo.current);
                    break;
                  case 19:
                    if (
                      ((r = 0 !== (n & t.childLanes)), 0 !== (64 & e.flags))
                    ) {
                      if (r) return al(e, t, n);
                      t.flags |= 64;
                    }
                    if (
                      (null !== (a = t.memoizedState) &&
                        ((a.rendering = null),
                        (a.tail = null),
                        (a.lastEffect = null)),
                      ca(Lo, Lo.current),
                      r)
                    )
                      break;
                    return null;
                  case 23:
                  case 24:
                    return (t.lanes = 0), Vi(e, t, n);
                }
                return ol(e, t, n);
              }
              Di = 0 !== (16384 & e.flags);
            }
          else Di = !1;
          switch (((t.lanes = 0), t.tag)) {
            case 2:
              if (
                ((r = t.type),
                null !== e &&
                  ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
                (e = t.pendingProps),
                (a = ma(t, pa.current)),
                ao(t, n),
                (a = ii(null, t, r, e, a, n)),
                (t.flags |= 1),
                "object" === typeof a &&
                  null !== a &&
                  "function" === typeof a.render &&
                  void 0 === a.$$typeof)
              ) {
                if (
                  ((t.tag = 1),
                  (t.memoizedState = null),
                  (t.updateQueue = null),
                  ya(r))
                ) {
                  var o = !0;
                  _a(t);
                } else o = !1;
                (t.memoizedState =
                  null !== a.state && void 0 !== a.state ? a.state : null),
                  lo(t);
                var l = r.getDerivedStateFromProps;
                "function" === typeof l && yo(t, r, l, e),
                  (a.updater = go),
                  (t.stateNode = a),
                  (a._reactInternals = t),
                  wo(t, r, e, n),
                  (t = $i(null, t, r, !0, o, n));
              } else (t.tag = 0), Li(null, t, a, n), (t = t.child);
              return t;
            case 16:
              a = t.elementType;
              e: {
                switch (
                  (null !== e &&
                    ((e.alternate = null),
                    (t.alternate = null),
                    (t.flags |= 2)),
                  (e = t.pendingProps),
                  (a = (o = a._init)(a._payload)),
                  (t.type = a),
                  (o = t.tag =
                    (function (e) {
                      if ("function" === typeof e) return $s(e) ? 1 : 0;
                      if (void 0 !== e && null !== e) {
                        if ((e = e.$$typeof) === T) return 11;
                        if (e === A) return 14;
                      }
                      return 2;
                    })(a)),
                  (e = Ga(a, e)),
                  o)
                ) {
                  case 0:
                    t = Wi(null, t, a, e, n);
                    break e;
                  case 1:
                    t = qi(null, t, a, e, n);
                    break e;
                  case 11:
                    t = zi(null, t, a, e, n);
                    break e;
                  case 14:
                    t = Ui(null, t, a, Ga(a.type, e), r, n);
                    break e;
                }
                throw Error(i(306, a, ""));
              }
              return t;
            case 0:
              return (
                (r = t.type),
                (a = t.pendingProps),
                Wi(e, t, r, (a = t.elementType === r ? a : Ga(r, a)), n)
              );
            case 1:
              return (
                (r = t.type),
                (a = t.pendingProps),
                qi(e, t, r, (a = t.elementType === r ? a : Ga(r, a)), n)
              );
            case 3:
              if ((Hi(t), (r = t.updateQueue), null === e || null === r))
                throw Error(i(282));
              if (
                ((r = t.pendingProps),
                (a = null !== (a = t.memoizedState) ? a.element : null),
                so(e, t),
                fo(t, r, null, n),
                (r = t.memoizedState.element) === a)
              )
                Yo(), (t = ol(e, t, n));
              else {
                if (
                  ((o = (a = t.stateNode).hydrate) &&
                    ((Fo = Yr(t.stateNode.containerInfo.firstChild)),
                    (Uo = t),
                    (o = Vo = !0)),
                  o)
                ) {
                  if (null != (e = a.mutableSourceEagerHydrationData))
                    for (a = 0; a < e.length; a += 2)
                      ((o = e[a])._workInProgressVersionPrimary = e[a + 1]),
                        Ko.push(o);
                  for (n = Ro(t, null, r, n), t.child = n; n; )
                    (n.flags = (-3 & n.flags) | 1024), (n = n.sibling);
                } else Li(e, t, r, n), Yo();
                t = t.child;
              }
              return t;
            case 5:
              return (
                No(t),
                null === e && qo(t),
                (r = t.type),
                (a = t.pendingProps),
                (o = null !== e ? e.memoizedProps : null),
                (l = a.children),
                Wr(r, a)
                  ? (l = null)
                  : null !== o && Wr(r, o) && (t.flags |= 16),
                Bi(e, t),
                Li(e, t, l, n),
                t.child
              );
            case 6:
              return null === e && qo(t), null;
            case 13:
              return Xi(e, t, n);
            case 4:
              return (
                Mo(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = xo(t, null, r, n)) : Li(e, t, r, n),
                t.child
              );
            case 11:
              return (
                (r = t.type),
                (a = t.pendingProps),
                zi(e, t, r, (a = t.elementType === r ? a : Ga(r, a)), n)
              );
            case 7:
              return Li(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
              return Li(e, t, t.pendingProps.children, n), t.child;
            case 10:
              e: {
                (r = t.type._context),
                  (a = t.pendingProps),
                  (l = t.memoizedProps),
                  (o = a.value);
                var s = t.type._context;
                if (
                  (ca(Za, s._currentValue), (s._currentValue = o), null !== l)
                )
                  if (
                    ((s = l.value),
                    0 ===
                      (o = ur(s, o)
                        ? 0
                        : 0 |
                          ("function" === typeof r._calculateChangedBits
                            ? r._calculateChangedBits(s, o)
                            : 1073741823)))
                  ) {
                    if (l.children === a.children && !fa.current) {
                      t = ol(e, t, n);
                      break e;
                    }
                  } else
                    for (
                      null !== (s = t.child) && (s.return = t);
                      null !== s;

                    ) {
                      var u = s.dependencies;
                      if (null !== u) {
                        l = s.child;
                        for (var c = u.firstContext; null !== c; ) {
                          if (c.context === r && 0 !== (c.observedBits & o)) {
                            1 === s.tag &&
                              (((c = uo(-1, n & -n)).tag = 2), co(s, c)),
                              (s.lanes |= n),
                              null !== (c = s.alternate) && (c.lanes |= n),
                              ro(s.return, n),
                              (u.lanes |= n);
                            break;
                          }
                          c = c.next;
                        }
                      } else
                        l = 10 === s.tag && s.type === t.type ? null : s.child;
                      if (null !== l) l.return = s;
                      else
                        for (l = s; null !== l; ) {
                          if (l === t) {
                            l = null;
                            break;
                          }
                          if (null !== (s = l.sibling)) {
                            (s.return = l.return), (l = s);
                            break;
                          }
                          l = l.return;
                        }
                      s = l;
                    }
                Li(e, t, a.children, n), (t = t.child);
              }
              return t;
            case 9:
              return (
                (a = t.type),
                (r = (o = t.pendingProps).children),
                ao(t, n),
                (r = r((a = oo(a, o.unstable_observedBits)))),
                (t.flags |= 1),
                Li(e, t, r, n),
                t.child
              );
            case 14:
              return (
                (o = Ga((a = t.type), t.pendingProps)),
                Ui(e, t, a, (o = Ga(a.type, o)), r, n)
              );
            case 15:
              return Fi(e, t, t.type, t.pendingProps, r, n);
            case 17:
              return (
                (r = t.type),
                (a = t.pendingProps),
                (a = t.elementType === r ? a : Ga(r, a)),
                null !== e &&
                  ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
                (t.tag = 1),
                ya(r) ? ((e = !0), _a(t)) : (e = !1),
                ao(t, n),
                bo(t, r, a),
                wo(t, r, a, n),
                $i(null, t, r, !0, e, n)
              );
            case 19:
              return al(e, t, n);
            case 23:
            case 24:
              return Vi(e, t, n);
          }
          throw Error(i(156, t.tag));
        }),
          (ru.prototype.render = function (e) {
            Js(e, this._internalRoot, null, null);
          }),
          (ru.prototype.unmount = function () {
            var e = this._internalRoot,
              t = e.containerInfo;
            Js(null, e, null, function () {
              t[Jr] = null;
            });
          }),
          (et = function (e) {
            13 === e.tag && (hs(e, 4, ps()), nu(e, 4));
          }),
          (tt = function (e) {
            13 === e.tag && (hs(e, 67108864, ps()), nu(e, 67108864));
          }),
          (nt = function (e) {
            if (13 === e.tag) {
              var t = ps(),
                n = fs(e);
              hs(e, n, t), nu(e, n);
            }
          }),
          (rt = function (e, t) {
            return t();
          }),
          (xe = function (e, t, n) {
            switch (t) {
              case "input":
                if ((ne(e, n), (t = n.name), "radio" === n.type && null != t)) {
                  for (n = e; n.parentNode; ) n = n.parentNode;
                  for (
                    n = n.querySelectorAll(
                      "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
                    ),
                      t = 0;
                    t < n.length;
                    t++
                  ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                      var a = aa(r);
                      if (!a) throw Error(i(90));
                      Z(r), ne(r, a);
                    }
                  }
                }
                break;
              case "textarea":
                ue(e, n);
                break;
              case "select":
                null != (t = n.value) && ie(e, !!n.multiple, t, !1);
            }
          }),
          (Ae = _s),
          (Me = function (e, t, n, r, a) {
            var o = Al;
            Al |= 4;
            try {
              return $a(98, e.bind(null, t, n, r, a));
            } finally {
              0 === (Al = o) && (Yl(), Ya());
            }
          }),
          (je = function () {
            0 === (49 & Al) &&
              ((function () {
                if (null !== as) {
                  var e = as;
                  (as = null),
                    e.forEach(function (e) {
                      (e.expiredLanes |= 24 & e.pendingLanes), ys(e, Ba());
                    });
                }
                Ya();
              })(),
              Ns());
          }),
          (Ne = function (e, t) {
            var n = Al;
            Al |= 2;
            try {
              return e(t);
            } finally {
              0 === (Al = n) && (Yl(), Ya());
            }
          });
        var lu = { Events: [na, ra, aa, Ie, Oe, Ns, { current: !1 }] },
          su = {
            findFiberByHostInstance: ta,
            bundleType: 0,
            version: "17.0.2",
            rendererPackageName: "react-dom",
          },
          uu = {
            bundleType: su.bundleType,
            version: su.version,
            rendererPackageName: su.rendererPackageName,
            rendererConfig: su.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: w.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
              return null === (e = Xe(e)) ? null : e.stateNode;
            },
            findFiberByHostInstance:
              su.findFiberByHostInstance ||
              function () {
                return null;
              },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
          };
        if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var cu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!cu.isDisabled && cu.supportsFiber)
            try {
              (ka = cu.inject(uu)), (Ca = cu);
            } catch (me) {}
        }
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = lu),
          (t.createPortal = iu),
          (t.findDOMNode = function (e) {
            if (null == e) return null;
            if (1 === e.nodeType) return e;
            var t = e._reactInternals;
            if (void 0 === t) {
              if ("function" === typeof e.render) throw Error(i(188));
              throw Error(i(268, Object.keys(e)));
            }
            return (e = null === (e = Xe(t)) ? null : e.stateNode);
          }),
          (t.flushSync = function (e, t) {
            var n = Al;
            if (0 !== (48 & n)) return e(t);
            Al |= 1;
            try {
              if (e) return $a(99, e.bind(null, t));
            } finally {
              (Al = n), Ya();
            }
          }),
          (t.hydrate = function (e, t, n) {
            if (!au(t)) throw Error(i(200));
            return ou(null, e, t, !0, n);
          }),
          (t.render = function (e, t, n) {
            if (!au(t)) throw Error(i(200));
            return ou(null, e, t, !1, n);
          }),
          (t.unmountComponentAtNode = function (e) {
            if (!au(e)) throw Error(i(40));
            return (
              !!e._reactRootContainer &&
              (ws(function () {
                ou(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[Jr] = null);
                });
              }),
              !0)
            );
          }),
          (t.unstable_batchedUpdates = _s),
          (t.unstable_createPortal = function (e, t) {
            return iu(
              e,
              t,
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : null
            );
          }),
          (t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
            if (!au(n)) throw Error(i(200));
            if (null == e || void 0 === e._reactInternals) throw Error(i(38));
            return ou(e, t, n, !1, r);
          }),
          (t.version = "17.0.2");
      },
      292: (e, t, n) => {
        "use strict";
        !(function e() {
          if (
            "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (t) {
              console.error(t);
            }
        })(),
          (e.exports = n(144));
      },
      36: (e, t, n) => {
        "use strict";
        n(528);
        var r = n(60),
          a = 60103;
        if ((60107, "function" === typeof Symbol && Symbol.for)) {
          var o = Symbol.for;
          (a = o("react.element")), o("react.fragment");
        }
        var i =
            r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          l = Object.prototype.hasOwnProperty,
          s = { key: !0, ref: !0, __self: !0, __source: !0 };
        function u(e, t, n) {
          var r,
            o = {},
            u = null,
            c = null;
          for (r in (void 0 !== n && (u = "" + n),
          void 0 !== t.key && (u = "" + t.key),
          void 0 !== t.ref && (c = t.ref),
          t))
            l.call(t, r) && !s.hasOwnProperty(r) && (o[r] = t[r]);
          if (e && e.defaultProps)
            for (r in (t = e.defaultProps)) void 0 === o[r] && (o[r] = t[r]);
          return {
            $$typeof: a,
            type: e,
            key: u,
            ref: c,
            props: o,
            _owner: i.current,
          };
        }
        (t.jsx = u), (t.jsxs = u);
      },
      564: (e, t, n) => {
        "use strict";
        var r = n(528),
          a = 60103,
          o = 60106;
        (t.Fragment = 60107), (t.StrictMode = 60108), (t.Profiler = 60114);
        var i = 60109,
          l = 60110,
          s = 60112;
        t.Suspense = 60113;
        var u = 60115,
          c = 60116;
        if ("function" === typeof Symbol && Symbol.for) {
          var d = Symbol.for;
          (a = d("react.element")),
            (o = d("react.portal")),
            (t.Fragment = d("react.fragment")),
            (t.StrictMode = d("react.strict_mode")),
            (t.Profiler = d("react.profiler")),
            (i = d("react.provider")),
            (l = d("react.context")),
            (s = d("react.forward_ref")),
            (t.Suspense = d("react.suspense")),
            (u = d("react.memo")),
            (c = d("react.lazy"));
        }
        var p = "function" === typeof Symbol && Symbol.iterator;
        function f(e) {
          for (
            var t =
                "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
              n = 1;
            n < arguments.length;
            n++
          )
            t += "&args[]=" + encodeURIComponent(arguments[n]);
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        var h = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          m = {};
        function y(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = m),
            (this.updater = n || h);
        }
        function g() {}
        function v(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = m),
            (this.updater = n || h);
        }
        (y.prototype.isReactComponent = {}),
          (y.prototype.setState = function (e, t) {
            if ("object" !== typeof e && "function" !== typeof e && null != e)
              throw Error(f(85));
            this.updater.enqueueSetState(this, e, t, "setState");
          }),
          (y.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (g.prototype = y.prototype);
        var b = (v.prototype = new g());
        (b.constructor = v), r(b, y.prototype), (b.isPureReactComponent = !0);
        var _ = { current: null },
          w = Object.prototype.hasOwnProperty,
          k = { key: !0, ref: !0, __self: !0, __source: !0 };
        function C(e, t, n) {
          var r,
            o = {},
            i = null,
            l = null;
          if (null != t)
            for (r in (void 0 !== t.ref && (l = t.ref),
            void 0 !== t.key && (i = "" + t.key),
            t))
              w.call(t, r) && !k.hasOwnProperty(r) && (o[r] = t[r]);
          var s = arguments.length - 2;
          if (1 === s) o.children = n;
          else if (1 < s) {
            for (var u = Array(s), c = 0; c < s; c++) u[c] = arguments[c + 2];
            o.children = u;
          }
          if (e && e.defaultProps)
            for (r in (s = e.defaultProps)) void 0 === o[r] && (o[r] = s[r]);
          return {
            $$typeof: a,
            type: e,
            key: i,
            ref: l,
            props: o,
            _owner: _.current,
          };
        }
        function P(e) {
          return "object" === typeof e && null !== e && e.$$typeof === a;
        }
        var E = /\/+/g;
        function x(e, t) {
          return "object" === typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { "=": "=0", ":": "=2" };
                return (
                  "$" +
                  e.replace(/[=:]/g, function (e) {
                    return t[e];
                  })
                );
              })("" + e.key)
            : t.toString(36);
        }
        function R(e, t, n, r, i) {
          var l = typeof e;
          ("undefined" !== l && "boolean" !== l) || (e = null);
          var s = !1;
          if (null === e) s = !0;
          else
            switch (l) {
              case "string":
              case "number":
                s = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case a:
                  case o:
                    s = !0;
                }
            }
          if (s)
            return (
              (i = i((s = e))),
              (e = "" === r ? "." + x(s, 0) : r),
              Array.isArray(i)
                ? ((n = ""),
                  null != e && (n = e.replace(E, "$&/") + "/"),
                  R(i, t, n, "", function (e) {
                    return e;
                  }))
                : null != i &&
                  (P(i) &&
                    (i = (function (e, t) {
                      return {
                        $$typeof: a,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner,
                      };
                    })(
                      i,
                      n +
                        (!i.key || (s && s.key === i.key)
                          ? ""
                          : ("" + i.key).replace(E, "$&/") + "/") +
                        e
                    )),
                  t.push(i)),
              1
            );
          if (((s = 0), (r = "" === r ? "." : r + ":"), Array.isArray(e)))
            for (var u = 0; u < e.length; u++) {
              var c = r + x((l = e[u]), u);
              s += R(l, t, n, c, i);
            }
          else if (
            ((c = (function (e) {
              return null === e || "object" !== typeof e
                ? null
                : "function" === typeof (e = (p && e[p]) || e["@@iterator"])
                ? e
                : null;
            })(e)),
            "function" === typeof c)
          )
            for (e = c.call(e), u = 0; !(l = e.next()).done; )
              s += R((l = l.value), t, n, (c = r + x(l, u++)), i);
          else if ("object" === l)
            throw (
              ((t = "" + e),
              Error(
                f(
                  31,
                  "[object Object]" === t
                    ? "object with keys {" + Object.keys(e).join(", ") + "}"
                    : t
                )
              ))
            );
          return s;
        }
        function S(e, t, n) {
          if (null == e) return e;
          var r = [],
            a = 0;
          return (
            R(e, r, "", "", function (e) {
              return t.call(n, e, a++);
            }),
            r
          );
        }
        function T(e) {
          if (-1 === e._status) {
            var t = e._result;
            (t = t()),
              (e._status = 0),
              (e._result = t),
              t.then(
                function (t) {
                  0 === e._status &&
                    ((t = t.default), (e._status = 1), (e._result = t));
                },
                function (t) {
                  0 === e._status && ((e._status = 2), (e._result = t));
                }
              );
          }
          if (1 === e._status) return e._result;
          throw e._result;
        }
        var I = { current: null };
        function O() {
          var e = I.current;
          if (null === e) throw Error(f(321));
          return e;
        }
        var A = {
          ReactCurrentDispatcher: I,
          ReactCurrentBatchConfig: { transition: 0 },
          ReactCurrentOwner: _,
          IsSomeRendererActing: { current: !1 },
          assign: r,
        };
        (t.Children = {
          map: S,
          forEach: function (e, t, n) {
            S(
              e,
              function () {
                t.apply(this, arguments);
              },
              n
            );
          },
          count: function (e) {
            var t = 0;
            return (
              S(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              S(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!P(e)) throw Error(f(143));
            return e;
          },
        }),
          (t.Component = y),
          (t.PureComponent = v),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = A),
          (t.cloneElement = function (e, t, n) {
            if (null === e || void 0 === e) throw Error(f(267, e));
            var o = r({}, e.props),
              i = e.key,
              l = e.ref,
              s = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((l = t.ref), (s = _.current)),
                void 0 !== t.key && (i = "" + t.key),
                e.type && e.type.defaultProps)
              )
                var u = e.type.defaultProps;
              for (c in t)
                w.call(t, c) &&
                  !k.hasOwnProperty(c) &&
                  (o[c] = void 0 === t[c] && void 0 !== u ? u[c] : t[c]);
            }
            var c = arguments.length - 2;
            if (1 === c) o.children = n;
            else if (1 < c) {
              u = Array(c);
              for (var d = 0; d < c; d++) u[d] = arguments[d + 2];
              o.children = u;
            }
            return {
              $$typeof: a,
              type: e.type,
              key: i,
              ref: l,
              props: o,
              _owner: s,
            };
          }),
          (t.createContext = function (e, t) {
            return (
              void 0 === t && (t = null),
              ((e = {
                $$typeof: l,
                _calculateChangedBits: t,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
              }).Provider = { $$typeof: i, _context: e }),
              (e.Consumer = e)
            );
          }),
          (t.createElement = C),
          (t.createFactory = function (e) {
            var t = C.bind(null, e);
            return (t.type = e), t;
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: s, render: e };
          }),
          (t.isValidElement = P),
          (t.lazy = function (e) {
            return {
              $$typeof: c,
              _payload: { _status: -1, _result: e },
              _init: T,
            };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: u, type: e, compare: void 0 === t ? null : t };
          }),
          (t.useCallback = function (e, t) {
            return O().useCallback(e, t);
          }),
          (t.useContext = function (e, t) {
            return O().useContext(e, t);
          }),
          (t.useDebugValue = function () {}),
          (t.useEffect = function (e, t) {
            return O().useEffect(e, t);
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return O().useImperativeHandle(e, t, n);
          }),
          (t.useLayoutEffect = function (e, t) {
            return O().useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return O().useMemo(e, t);
          }),
          (t.useReducer = function (e, t, n) {
            return O().useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return O().useRef(e);
          }),
          (t.useState = function (e) {
            return O().useState(e);
          }),
          (t.version = "17.0.2");
      },
      60: (e, t, n) => {
        "use strict";
        e.exports = n(564);
      },
      496: (e, t, n) => {
        "use strict";
        e.exports = n(36);
      },
      692: (e, t) => {
        "use strict";
        var n, r, a, o;
        if (
          "object" === typeof performance &&
          "function" === typeof performance.now
        ) {
          var i = performance;
          t.unstable_now = function () {
            return i.now();
          };
        } else {
          var l = Date,
            s = l.now();
          t.unstable_now = function () {
            return l.now() - s;
          };
        }
        if (
          "undefined" === typeof window ||
          "function" !== typeof MessageChannel
        ) {
          var u = null,
            c = null,
            d = function () {
              if (null !== u)
                try {
                  var e = t.unstable_now();
                  u(!0, e), (u = null);
                } catch (n) {
                  throw (setTimeout(d, 0), n);
                }
            };
          (n = function (e) {
            null !== u ? setTimeout(n, 0, e) : ((u = e), setTimeout(d, 0));
          }),
            (r = function (e, t) {
              c = setTimeout(e, t);
            }),
            (a = function () {
              clearTimeout(c);
            }),
            (t.unstable_shouldYield = function () {
              return !1;
            }),
            (o = t.unstable_forceFrameRate = function () {});
        } else {
          var p = window.setTimeout,
            f = window.clearTimeout;
          if ("undefined" !== typeof console) {
            var h = window.cancelAnimationFrame;
            "function" !== typeof window.requestAnimationFrame &&
              console.error(
                "This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
              ),
              "function" !== typeof h &&
                console.error(
                  "This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
                );
          }
          var m = !1,
            y = null,
            g = -1,
            v = 5,
            b = 0;
          (t.unstable_shouldYield = function () {
            return t.unstable_now() >= b;
          }),
            (o = function () {}),
            (t.unstable_forceFrameRate = function (e) {
              0 > e || 125 < e
                ? console.error(
                    "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                  )
                : (v = 0 < e ? Math.floor(1e3 / e) : 5);
            });
          var _ = new MessageChannel(),
            w = _.port2;
          (_.port1.onmessage = function () {
            if (null !== y) {
              var e = t.unstable_now();
              b = e + v;
              try {
                y(!0, e) ? w.postMessage(null) : ((m = !1), (y = null));
              } catch (n) {
                throw (w.postMessage(null), n);
              }
            } else m = !1;
          }),
            (n = function (e) {
              (y = e), m || ((m = !0), w.postMessage(null));
            }),
            (r = function (e, n) {
              g = p(function () {
                e(t.unstable_now());
              }, n);
            }),
            (a = function () {
              f(g), (g = -1);
            });
        }
        function k(e, t) {
          var n = e.length;
          e.push(t);
          e: for (;;) {
            var r = (n - 1) >>> 1,
              a = e[r];
            if (!(void 0 !== a && 0 < E(a, t))) break e;
            (e[r] = t), (e[n] = a), (n = r);
          }
        }
        function C(e) {
          return void 0 === (e = e[0]) ? null : e;
        }
        function P(e) {
          var t = e[0];
          if (void 0 !== t) {
            var n = e.pop();
            if (n !== t) {
              e[0] = n;
              e: for (var r = 0, a = e.length; r < a; ) {
                var o = 2 * (r + 1) - 1,
                  i = e[o],
                  l = o + 1,
                  s = e[l];
                if (void 0 !== i && 0 > E(i, n))
                  void 0 !== s && 0 > E(s, i)
                    ? ((e[r] = s), (e[l] = n), (r = l))
                    : ((e[r] = i), (e[o] = n), (r = o));
                else {
                  if (!(void 0 !== s && 0 > E(s, n))) break e;
                  (e[r] = s), (e[l] = n), (r = l);
                }
              }
            }
            return t;
          }
          return null;
        }
        function E(e, t) {
          var n = e.sortIndex - t.sortIndex;
          return 0 !== n ? n : e.id - t.id;
        }
        var x = [],
          R = [],
          S = 1,
          T = null,
          I = 3,
          O = !1,
          A = !1,
          M = !1;
        function j(e) {
          for (var t = C(R); null !== t; ) {
            if (null === t.callback) P(R);
            else {
              if (!(t.startTime <= e)) break;
              P(R), (t.sortIndex = t.expirationTime), k(x, t);
            }
            t = C(R);
          }
        }
        function N(e) {
          if (((M = !1), j(e), !A))
            if (null !== C(x)) (A = !0), n(D);
            else {
              var t = C(R);
              null !== t && r(N, t.startTime - e);
            }
        }
        function D(e, n) {
          (A = !1), M && ((M = !1), a()), (O = !0);
          var o = I;
          try {
            for (
              j(n), T = C(x);
              null !== T &&
              (!(T.expirationTime > n) || (e && !t.unstable_shouldYield()));

            ) {
              var i = T.callback;
              if ("function" === typeof i) {
                (T.callback = null), (I = T.priorityLevel);
                var l = i(T.expirationTime <= n);
                (n = t.unstable_now()),
                  "function" === typeof l
                    ? (T.callback = l)
                    : T === C(x) && P(x),
                  j(n);
              } else P(x);
              T = C(x);
            }
            if (null !== T) var s = !0;
            else {
              var u = C(R);
              null !== u && r(N, u.startTime - n), (s = !1);
            }
            return s;
          } finally {
            (T = null), (I = o), (O = !1);
          }
        }
        var L = o;
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (t.unstable_continueExecution = function () {
            A || O || ((A = !0), n(D));
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return I;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return C(x);
          }),
          (t.unstable_next = function (e) {
            switch (I) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = I;
            }
            var n = I;
            I = t;
            try {
              return e();
            } finally {
              I = n;
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = L),
          (t.unstable_runWithPriority = function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var n = I;
            I = e;
            try {
              return t();
            } finally {
              I = n;
            }
          }),
          (t.unstable_scheduleCallback = function (e, o, i) {
            var l = t.unstable_now();
            switch (
              ("object" === typeof i && null !== i
                ? (i = "number" === typeof (i = i.delay) && 0 < i ? l + i : l)
                : (i = l),
              e)
            ) {
              case 1:
                var s = -1;
                break;
              case 2:
                s = 250;
                break;
              case 5:
                s = 1073741823;
                break;
              case 4:
                s = 1e4;
                break;
              default:
                s = 5e3;
            }
            return (
              (e = {
                id: S++,
                callback: o,
                priorityLevel: e,
                startTime: i,
                expirationTime: (s = i + s),
                sortIndex: -1,
              }),
              i > l
                ? ((e.sortIndex = i),
                  k(R, e),
                  null === C(x) &&
                    e === C(R) &&
                    (M ? a() : (M = !0), r(N, i - l)))
                : ((e.sortIndex = s), k(x, e), A || O || ((A = !0), n(D))),
              e
            );
          }),
          (t.unstable_wrapCallback = function (e) {
            var t = I;
            return function () {
              var n = I;
              I = t;
              try {
                return e.apply(this, arguments);
              } finally {
                I = n;
              }
            };
          });
      },
      724: (e, t, n) => {
        "use strict";
        e.exports = n(692);
      },
    },
    __webpack_module_cache__ = {};
  function __webpack_require__(e) {
    var t = __webpack_module_cache__[e];
    if (void 0 !== t) return t.exports;
    var n = (__webpack_module_cache__[e] = { exports: {} });
    return (
      __webpack_modules__[e].call(n.exports, n, n.exports, __webpack_require__),
      n.exports
    );
  }
  (__webpack_require__.m = __webpack_modules__),
    (__webpack_require__.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return __webpack_require__.d(t, { a: t }), t;
    }),
    (__webpack_require__.d = (e, t) => {
      for (var n in t)
        __webpack_require__.o(t, n) &&
          !__webpack_require__.o(e, n) &&
          Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }),
    (__webpack_require__.f = {}),
    (__webpack_require__.e = (e) =>
      Promise.all(
        Object.keys(__webpack_require__.f).reduce(
          (t, n) => (__webpack_require__.f[n](e, t), t),
          []
        )
      )),
    (__webpack_require__.u = (e) => "static/js/" + e + ".1accde44.chunk.js"),
    (__webpack_require__.miniCssF = (e) => {}),
    (__webpack_require__.o = (e, t) =>
      Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      var e = {},
        t = "troywarner:";
      __webpack_require__.l = (n, r, a, o) => {
        if (e[n]) e[n].push(r);
        else {
          var i, l;
          if (void 0 !== a)
            for (
              var s = document.getElementsByTagName("script"), u = 0;
              u < s.length;
              u++
            ) {
              var c = s[u];
              if (
                c.getAttribute("src") == n ||
                c.getAttribute("data-webpack") == t + a
              ) {
                i = c;
                break;
              }
            }
          i ||
            ((l = !0),
            ((i = document.createElement("script")).charset = "utf-8"),
            (i.timeout = 120),
            __webpack_require__.nc &&
              i.setAttribute("nonce", __webpack_require__.nc),
            i.setAttribute("data-webpack", t + a),
            (i.src = n)),
            (e[n] = [r]);
          var d = (t, r) => {
              (i.onerror = i.onload = null), clearTimeout(p);
              var a = e[n];
              if (
                (delete e[n],
                i.parentNode && i.parentNode.removeChild(i),
                a && a.forEach((e) => e(r)),
                t)
              )
                return t(r);
            },
            p = setTimeout(
              d.bind(null, void 0, { type: "timeout", target: i }),
              12e4
            );
          (i.onerror = d.bind(null, i.onerror)),
            (i.onload = d.bind(null, i.onload)),
            l && document.head.appendChild(i);
        }
      };
    })(),
    (__webpack_require__.r = (e) => {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (__webpack_require__.p = "/"),
    (() => {
      var e = { 590: 0 };
      __webpack_require__.f.j = (t, n) => {
        var r = __webpack_require__.o(e, t) ? e[t] : void 0;
        if (0 !== r)
          if (r) n.push(r[2]);
          else {
            var a = new Promise((n, a) => (r = e[t] = [n, a]));
            n.push((r[2] = a));
            var o = __webpack_require__.p + __webpack_require__.u(t),
              i = new Error();
            __webpack_require__.l(
              o,
              (n) => {
                if (
                  __webpack_require__.o(e, t) &&
                  (0 !== (r = e[t]) && (e[t] = void 0), r)
                ) {
                  var a = n && ("load" === n.type ? "missing" : n.type),
                    o = n && n.target && n.target.src;
                  (i.message =
                    "Loading chunk " + t + " failed.\n(" + a + ": " + o + ")"),
                    (i.name = "ChunkLoadError"),
                    (i.type = a),
                    (i.request = o),
                    r[1](i);
                }
              },
              "chunk-" + t,
              t
            );
          }
      };
      var t = (t, n) => {
          var r,
            a,
            o = n[0],
            i = n[1],
            l = n[2],
            s = 0;
          if (o.some((t) => 0 !== e[t])) {
            for (r in i)
              __webpack_require__.o(i, r) && (__webpack_require__.m[r] = i[r]);
            if (l) l(__webpack_require__);
          }
          for (t && t(n); s < o.length; s++)
            (a = o[s]),
              __webpack_require__.o(e, a) && e[a] && e[a][0](),
              (e[a] = 0);
        },
        n = (self.webpackChunktroywarner = self.webpackChunktroywarner || []);
      n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
    })();
  var __webpack_exports__ = {};
  (() => {
    "use strict";
    var e = __webpack_require__(60),
      t = __webpack_require__(292),
      n = __webpack_require__(496);
    const r = function () {
      return (0, n.jsx)("header", {
        className: "App-header",
        children: (0, n.jsx)("img", {
          src: "../images/fcLogo.png",
          alt: "First Class Home Mortgage Logo",
          className: "topLogo",
        }),
      });
    };
    var a = __webpack_require__(275),
      o = __webpack_require__.n(a),
      i = __webpack_require__(920),
      l = __webpack_require__.n(i),
      s =
        "function" === typeof Symbol && "symbol" === typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" === typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            },
      u = function (e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      },
      c = (function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t;
        };
      })(),
      d = function (e, t) {
        if ("function" !== typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof t
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
          t &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(e, t)
              : (e.__proto__ = t));
      },
      p = function (e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ("object" !== typeof t && "function" !== typeof t) ? e : t;
      },
      f = (function () {
        function e() {
          u(this, e), (this.list = []);
        }
        return (
          c(e, [
            {
              key: "set",
              value: function (e, t) {
                this.list.push({ probability: e, target: t, a: 0, b: 1 }),
                  this.calculation();
              },
            },
            {
              key: "calculation",
              value: function () {
                for (var e = 0, t = 0; t < this.list.length; t++)
                  e += this.list[t].probability;
                for (var n = 0; n < this.list.length; n++) {
                  var r = this.list[n],
                    a = r.probability / e;
                  (r.a = 0 === n ? 0 : this.list[n - 1].b), (r.b = r.a + a);
                }
              },
            },
            {
              key: "getResult",
              value: function () {
                for (var e = Math.random(), t = 0; t < this.list.length; t++) {
                  var n = this.list[t];
                  if (e <= n.b && e > n.a) return n.target;
                }
                return this.list[0].target;
              },
            },
          ]),
          e
        );
      })(),
      h = (function (t) {
        function n(t) {
          u(this, n);
          var r = p(
            this,
            (n.__proto__ || Object.getPrototypeOf(n)).call(this, t)
          );
          return (
            (r._iid = 0),
            (r._oid = 0),
            (r.size = { width: 0, height: 0 }),
            (r.canvasRef = e.createRef()),
            r
          );
        }
        return (
          d(n, t),
          c(n, [
            {
              key: "componentDidMount",
              value: function () {
                var e = this;
                this._oid = setTimeout(function () {
                  e.initCanvas(),
                    (e.resize = e.resize.bind(e)),
                    window.addEventListener("resize", e.resize);
                }, 100);
                var t = this.getCanvas();
                this.props.onCanvasDidMount && this.props.onCanvasDidMount(t);
              },
            },
            {
              key: "initCanvas",
              value: function () {
                var e = this.getCanvas();
                this.props.globalCompositeOperation &&
                  (e.getContext("2d").globalCompositeOperation =
                    this.props.globalCompositeOperation);
                var t = this.setCanvasSize(e),
                  n = t.width,
                  r = t.height;
                this.heartbeatDetectionCanvasSize(e),
                  this.props.onCanvasInited(e, n, r);
              },
            },
            {
              key: "getCanvas",
              value: function () {
                return this.canvasRef.current;
              },
            },
            {
              key: "heartbeatDetectionCanvasSize",
              value: function (e) {
                var t = this;
                this._iid = setInterval(function () {
                  if (
                    t.canvasRef.current &&
                    t.canvasRef.current.clientHeight !== t.size.height
                  ) {
                    var n = t.setCanvasSize(e),
                      r = n.width,
                      a = n.height;
                    t.props.onResize && t.props.onResize(r, a);
                  }
                }, 100);
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                try {
                  window.removeEventListener("resize", this.resize),
                    clearInterval(this._iid),
                    clearTimeout(this._oid);
                } catch (e) {}
              },
            },
            {
              key: "resize",
              value: function () {
                var e = this.getCanvas(),
                  t = this.setCanvasSize(e),
                  n = t.width,
                  r = t.height;
                this.props.onResize && this.props.onResize(n, r);
              },
            },
            {
              key: "setCanvasSize",
              value: function (e) {
                var t = this.canvasRef.current.clientWidth,
                  n = this.canvasRef.current.clientHeight;
                return (
                  (this.size.width = t),
                  (this.size.height = n),
                  (e.width = t),
                  (e.height = n),
                  { width: t, height: n }
                );
              },
            },
            {
              key: "handleWaypointEnter",
              value: function () {
                o().start();
              },
            },
            {
              key: "handleWaypointLeave",
              value: function () {
                o().stop();
              },
            },
            {
              key: "getStyle",
              value: function () {
                var e = this.props.bg,
                  t = { width: "100%", height: "100%" };
                return (
                  !0 === e
                    ? (t = Object.assign(t, {
                        position: "absolute",
                        zIndex: -1,
                        top: 0,
                        left: 0,
                      }))
                    : e &&
                      "object" ===
                        ("undefined" === typeof e ? "undefined" : s(e)) &&
                      (t = Object.assign(t, e)),
                  t
                );
              },
            },
            {
              key: "handleMouseDown",
              value: function (e) {
                this.props.onMouseDown && this.props.onMouseDown(e);
              },
            },
            {
              key: "render",
              value: function () {
                return e.createElement("canvas", {
                  className: "particles-bg-canvas-self",
                  ref: this.canvasRef,
                  onMouseDown: this.handleMouseDown.bind(this),
                  style: this.getStyle(),
                });
              },
            },
          ]),
          n
        );
      })(e.Component);
    function m(e, t) {
      var n = void 0;
      return e
        ? "rgba(" +
            (n = (function (e) {
              var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
              return t
                ? {
                    r: parseInt(t[1], 16),
                    g: parseInt(t[2], 16),
                    b: parseInt(t[3], 16),
                  }
                : {};
            })(e)).r +
            "," +
            n.g +
            "," +
            n.b +
            ", " +
            t +
            ")"
        : null;
    }
    var y = (function (t) {
        function n(e) {
          u(this, n);
          var t = p(
            this,
            (n.__proto__ || Object.getPrototypeOf(n)).call(this, e)
          );
          return (t.renderProton = t.renderProton.bind(t)), t;
        }
        return (
          d(n, t),
          c(n, [
            {
              key: "onCanvasInited",
              value: function (e, t, n) {
                this.createProton(e, t, n),
                  this.createMiniEmitter(e),
                  o().add(this.renderProton);
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                try {
                  o().remove(this.renderProton), this.proton.destroy();
                } catch (e) {}
              },
            },
            { key: "onResize", value: function () {} },
            {
              key: "createProton",
              value: function (e, t, n) {
                var r = this,
                  a = e.getContext("2d");
                this.proton = new (l())();
                var o = new (l().Emitter)();
                (o.rate = new (l().Rate)(
                  this.props.num
                    ? new (l().Span)(this.props.num)
                    : new (l().Span)(4, 9),
                  new (l().Span)(0.8, 1.3)
                )),
                  o.addInitialize(new (l().Mass)(1)),
                  o.addInitialize(new (l().Radius)(1, 50)),
                  o.addInitialize(new (l().Life)(5, 6)),
                  o.addInitialize(
                    new (l().Velocity)(
                      new (l().Span)(5, 8),
                      new (l().Span)(30, 70),
                      "polar"
                    )
                  ),
                  o.addBehaviour(new (l().Alpha)(1, 0)),
                  o.addBehaviour(
                    new (l().Color)([
                      "#36aaf3",
                      "#fd769c",
                      "#94ff22",
                      "#ffa545",
                      "#ffffff",
                    ])
                  ),
                  o.addBehaviour(new (l().Scale)(0.7, 1)),
                  o.addBehaviour(new (l().Gravity)(3)),
                  o.addBehaviour(new (l().Collision)(o)),
                  o.addBehaviour(this.customDeadBehaviour(e)),
                  o.addBehaviour(
                    new (l().CrossZone)(
                      new (l().RectZone)(0, 0, e.width, e.height),
                      "bound"
                    )
                  ),
                  (o.p.x = Math.min(500, Math.max(e.width / 2 - 400, 50))),
                  (o.p.y = e.height / 2 + 50),
                  o.emit(),
                  this.proton.addEmitter(o);
                var i = new (l().CanvasRenderer)(e);
                (i.onProtonUpdate = function () {
                  (a.fillStyle =
                    m(r.props.color, 0.2) || "rgba(255, 255, 255, 0.2)"),
                    a.fillRect(0, 0, e.width, e.height);
                }),
                  this.proton.addRenderer(i);
              },
            },
            {
              key: "customDeadBehaviour",
              value: function (e) {
                var t = this;
                return {
                  initialize: function (e) {},
                  applyBehaviour: function (n) {
                    n.p.y + n.radius >= e.height &&
                      n.radius > 9 &&
                      (t.miniEmitteing(n), (n.dead = !0));
                  },
                };
              },
            },
            {
              key: "createMiniEmitter",
              value: function (e) {
                var t = new (l().Emitter)();
                (t.rate = new (l().Rate)(
                  new (l().Span)(3, 6),
                  new (l().Span)(1, 2)
                )),
                  t.addInitialize(new (l().Mass)(1)),
                  (t.radiusInitialize = new (l().Radius)()),
                  t.addInitialize(t.radiusInitialize),
                  t.addInitialize(new (l().Life)(0.5, 1)),
                  t.addInitialize(
                    new (l().V)(
                      new (l().Span)(1.5, 3),
                      new (l().Span)(0, 70, !0),
                      "polar"
                    )
                  ),
                  (t.colorBehaviour = new (l().Color)("#ffffff")),
                  t.addBehaviour(new (l().Alpha)(1, 0)),
                  t.addBehaviour(t.colorBehaviour),
                  t.addBehaviour(new (l().Gravity)(4)),
                  t.addBehaviour(new (l().Collision)(t)),
                  t.addBehaviour(
                    new (l().CrossZone)(
                      new (l().RectZone)(0, 0, e.width, e.height),
                      "bound"
                    )
                  ),
                  this.proton.addEmitter(t),
                  (this.miniEmitter = t);
              },
            },
            {
              key: "miniEmitteing",
              value: function (e) {
                var t = this.miniEmitter;
                t.radiusInitialize.reset(0.05 * e.radius, 0.2 * e.radius),
                  t.colorBehaviour.reset(e.color),
                  (t.p.x = e.p.x),
                  (t.p.y = e.p.y),
                  t.emit("once");
              },
            },
            {
              key: "renderProton",
              value: function () {
                this.proton && this.proton.update();
              },
            },
            {
              key: "render",
              value: function () {
                return e.createElement(h, {
                  bg: this.props.bg,
                  globalCompositeOperation: "darker",
                  onCanvasInited: this.onCanvasInited.bind(this),
                  onResize: this.onResize.bind(this),
                });
              },
            },
          ]),
          n
        );
      })(e.Component),
      g = (function (t) {
        function n(e) {
          u(this, n);
          var t = p(
            this,
            (n.__proto__ || Object.getPrototypeOf(n)).call(this, e)
          );
          return (
            (t.colors = [
              "#529B88",
              "#CDD180",
              "#FFFA32",
              "#FB6255",
              "#FB4A53",
              "#FF4E50",
              "#F9D423",
            ]),
            (t.renderProton = t.renderProton.bind(t)),
            t
          );
        }
        return (
          d(n, t),
          c(n, [
            {
              key: "componentWillUnmount",
              value: function () {
                try {
                  o().remove(this.renderProton), this.proton.destroy();
                } catch (e) {}
              },
            },
            {
              key: "onCanvasInited",
              value: function (e, t, n) {
                this.createProton(e, t, n), o().add(this.renderProton);
              },
            },
            { key: "onResize", value: function () {} },
            {
              key: "createProton",
              value: function (e, t, n) {
                this.proton = new (l())();
                var r = new (l().Emitter)();
                (r.rate = new (l().Rate)(
                  this.props.num
                    ? new (l().Span)(this.props.num)
                    : new (l().Span)(5, 8),
                  new (l().Span)(0.1, 0.25)
                )),
                  r.addInitialize(new (l().Mass)(1)),
                  r.addInitialize(new (l().Radius)(20, 200)),
                  r.addInitialize(new (l().Life)(2, 4)),
                  r.addInitialize(
                    new (l().Position)(new (l().RectZone)(0, 0, t, n))
                  ),
                  r.addBehaviour(
                    new (l().Alpha)(0, 1, 1 / 0, l().easeOutCubic)
                  ),
                  r.addBehaviour(
                    new (l().Scale)(1, 0, 1 / 0, l().easeOutCubic)
                  ),
                  r.addBehaviour(new (l().Color)(this.colors, "random")),
                  r.emit(),
                  this.proton.addEmitter(r);
                var a = new (l().CanvasRenderer)(e);
                this.proton.addRenderer(a);
              },
            },
            {
              key: "renderProton",
              value: function () {
                this.proton && this.proton.update();
              },
            },
            {
              key: "render",
              value: function () {
                return e.createElement(h, {
                  bg: this.props.bg,
                  globalCompositeOperation: "darker",
                  onCanvasInited: this.onCanvasInited.bind(this),
                  onResize: this.onResize.bind(this),
                });
              },
            },
          ]),
          n
        );
      })(e.Component),
      v = (function (t) {
        function n(e) {
          u(this, n);
          var t = p(
            this,
            (n.__proto__ || Object.getPrototypeOf(n)).call(this, e)
          );
          return (
            (t.colors = [
              "#529B88",
              "#CDD180",
              "#FFFA32",
              "#FB6255",
              "#FB4A53",
              "#FF4E50",
              "#F9D423",
            ]),
            (t.renderProton = t.renderProton.bind(t)),
            t
          );
        }
        return (
          d(n, t),
          c(n, [
            {
              key: "componentWillUnmount",
              value: function () {
                try {
                  o().remove(this.renderProton), this.proton.destroy();
                } catch (e) {}
              },
            },
            {
              key: "onCanvasInited",
              value: function (e, t, n) {
                this.createProton(e, t, n), o().add(this.renderProton);
              },
            },
            {
              key: "onResize",
              value: function (e, t) {
                (this.crossZoneBehaviour.zone.width = e),
                  (this.crossZoneBehaviour.zone.height = t),
                  this.proton.renderers[0].resize(e, t);
              },
            },
            {
              key: "getProp",
              value: function (e, t) {
                var n = (this.props.config || {})[e] || t;
                return Array.isArray(n) ? new (l().Span)(n[0], n[1]) : n;
              },
            },
            {
              key: "getArrProp",
              value: function (e, t) {
                var n = (this.props.config || {})[e] || t;
                return n ? (Array.isArray(n) ? n : [n, n]) : null;
              },
            },
            {
              key: "createProton",
              value: function (e, t, n) {
                var r = this.getProp("num", [5, 8]),
                  a = this.getProp("rps", [0.1, 0.2]),
                  o = this.getProp("mass", 1),
                  i = this.getProp("radius", [10, 30]),
                  u = this.getProp("life", [2, 3]),
                  c = this.getProp("body"),
                  d = this.getProp("position"),
                  p = this.getProp("v", [2, 3]),
                  f = this.getProp("tha", [-15, 15]),
                  h = this.getArrProp("alpha"),
                  m = this.getArrProp("scale"),
                  y = this.getArrProp("color"),
                  g = this.getProp("cross", "dead"),
                  v = this.getProp("random"),
                  b = this.getArrProp("rotate"),
                  _ = this.getProp("g"),
                  w = this.getArrProp("f"),
                  k = this.getProp("emitter");
                this.proton = new (l())();
                var C = void 0;
                ((C =
                  "follow" === k
                    ? new (l().FollowEmitter)()
                    : new (l().Emitter)()).rate = new (l().Rate)(r, a)),
                  C.addInitialize(new (l().Mass)(o)),
                  C.addInitialize(new (l().Radius)(i)),
                  C.addInitialize(new (l().Life)(u)),
                  C.addInitialize(new (l().Velocity)(p, f, "polar")),
                  c && C.addInitialize(new (l().Body)(c));
                var P = void 0;
                "all" === d || "screen" === d
                  ? (P = new (l().Position)(
                      new (l().RectZone)(0, 0, e.width, e.height)
                    ))
                  : "object" === ("undefined" === typeof d ? "undefined" : s(d))
                  ? (P = new (l().Position)(
                      new (l().RectZone)(d.x, d.y, d.width, d.height)
                    ))
                  : ((C.p.x = e.width / 2), (C.p.y = e.height / 2)),
                  C.addInitialize(P);
                var E = h ? new (l().Alpha)(h[0], h[1]) : new (l().Alpha)(0, 1),
                  x = m ? new (l().Scale)(m[0], m[1]) : new (l().Scale)(1, 0.2),
                  R = y
                    ? new (l().Color)(y[0], y[1])
                    : new (l().Color)(this.colors);
                C.addBehaviour(E),
                  C.addBehaviour(x),
                  c || C.addBehaviour(R),
                  b &&
                    (!0 === b[0] || "rotate" === b[0]
                      ? C.addBehaviour(new (l().Rotate)())
                      : C.addBehaviour(new (l().Rotate)(b[0], b[1])));
                var S = new (l().RectZone)(0, 0, e.width, e.height),
                  T = new (l().CrossZone)(S, g);
                C.addBehaviour(T),
                  v && C.addBehaviour(new (l().RandomDrift)(v, v, 0.05)),
                  _ && C.addBehaviour(new (l().G)(_)),
                  w && C.addBehaviour(new (l().F)(w[0], w[1])),
                  C.emit(),
                  this.proton.addEmitter(C);
                var I = this.createRenderer(e);
                this.proton.addRenderer(I),
                  (this.emitter = C),
                  (this.crossZoneBehaviour = T);
              },
            },
            {
              key: "createRenderer",
              value: function (e) {
                var t = e.width,
                  n = e.height,
                  r = e.getContext("2d"),
                  a = new (l().CanvasRenderer)(e),
                  o = this.getProp("onUpdate");
                o &&
                  (a.onProtonUpdate = function () {
                    o(r, t, n);
                  });
                var i = this.getProp("onParticleCreated");
                i &&
                  (a.onParticleCreated = function (e) {
                    i(r, e);
                  });
                var s = this.getProp("onParticleUpdate");
                return (
                  s &&
                    (a.onParticleUpdate = function (e) {
                      s(r, e);
                    }),
                  a
                );
              },
            },
            {
              key: "renderProton",
              value: function () {
                this.proton && this.proton.update();
              },
            },
            {
              key: "handleMouseDown",
              value: function (e) {
                var t = this.getProp("onMouseDown");
                t && t(e);
              },
            },
            {
              key: "render",
              value: function () {
                var t =
                  this.props.globalCompositeOperation ||
                  this.props.operation ||
                  "source-over";
                return e.createElement(h, {
                  bg: this.props.bg,
                  onMouseDown: this.handleMouseDown.bind(this),
                  globalCompositeOperation: t,
                  onCanvasInited: this.onCanvasInited.bind(this),
                  onResize: this.onResize.bind(this),
                });
              },
            },
          ]),
          n
        );
      })(e.Component),
      b = (function (t) {
        function n(e) {
          u(this, n);
          var t = p(
            this,
            (n.__proto__ || Object.getPrototypeOf(n)).call(this, e)
          );
          return (t.renderProton = t.renderProton.bind(t)), t;
        }
        return (
          d(n, t),
          c(n, [
            {
              key: "onCanvasDidMount",
              value: function (e) {
                this.props.color &&
                  (e.style.backgroundColor = this.props.color);
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                try {
                  o().remove(this.renderProton), this.proton.destroy();
                } catch (e) {}
              },
            },
            {
              key: "onCanvasInited",
              value: function (e, t, n) {
                this.createProton(e, t, n), o().add(this.renderProton);
              },
            },
            {
              key: "onResize",
              value: function (e, t) {
                (this.crossZoneBehaviour.zone.width = e),
                  (this.crossZoneBehaviour.zone.height = t),
                  this.proton.renderers[0].resize(e, t);
              },
            },
            {
              key: "createProton",
              value: function (e, t, n) {
                this.proton = new (l())();
                var r = new (l().Emitter)();
                (r.damping = 0.008),
                  (r.rate = new (l().Rate)(
                    this.props.num ? this.props.num : 250
                  )),
                  r.addInitialize(new (l().Mass)(1)),
                  r.addInitialize(new (l().Radius)(4)),
                  r.addInitialize(
                    new (l().Velocity)(
                      new (l().Span)(1.5),
                      new (l().Span)(0, 360),
                      "polar"
                    )
                  );
                var a = { x: t / 2, y: n / 2 },
                  o = new (l().Attraction)(a, 0, 0),
                  i = new (l().CrossZone)(
                    new (l().RectZone)(0, 0, e.width, e.height),
                    "cross"
                  );
                r.addBehaviour(new (l().Color)("random")),
                  r.addBehaviour(o, i),
                  r.addBehaviour(new (l().RandomDrift)(10, 10, 0.05)),
                  (r.p.x = e.width / 2),
                  (r.p.y = e.height / 2),
                  r.emit("once"),
                  this.proton.addEmitter(r),
                  this.proton.addRenderer(this.createRenderer(e)),
                  (this.crossZoneBehaviour = i);
              },
            },
            {
              key: "createRenderer",
              value: function (e) {
                var t = this,
                  n = e.getContext("2d"),
                  r = new (l().CanvasRenderer)(e);
                return (
                  (r.onProtonUpdate = function () {
                    (n.fillStyle =
                      m(t.props.color, 0.02) || "rgba(0, 0, 0, 0.02)"),
                      n.fillRect(0, 0, e.width, e.height);
                  }),
                  (r.onParticleUpdate = function (e) {
                    n.beginPath(),
                      (n.strokeStyle = e.color),
                      (n.lineWidth = 1),
                      n.moveTo(e.old.p.x, e.old.p.y),
                      n.lineTo(e.p.x, e.p.y),
                      n.closePath(),
                      n.stroke();
                  }),
                  r
                );
              },
            },
            {
              key: "renderProton",
              value: function () {
                this.proton && this.proton.update();
              },
            },
            {
              key: "render",
              value: function () {
                return e.createElement(h, {
                  bg: this.props.bg,
                  globalCompositeOperation: "darker",
                  onCanvasDidMount: this.onCanvasDidMount.bind(this),
                  onCanvasInited: this.onCanvasInited.bind(this),
                  onResize: this.onResize.bind(this),
                });
              },
            },
          ]),
          n
        );
      })(e.Component),
      _ = (function (t) {
        function n(e) {
          u(this, n);
          var t = p(
            this,
            (n.__proto__ || Object.getPrototypeOf(n)).call(this, e)
          );
          return (
            (t.hue = 0),
            (t.index = 0),
            (t.colorTemplate = "hsla(hue,80%,50%, 0.75)"),
            (t.renderProton = t.renderProton.bind(t)),
            t
          );
        }
        return (
          d(n, t),
          c(n, [
            {
              key: "onCanvasDidMount",
              value: function (e) {
                this.props.color &&
                  (e.style.backgroundColor = this.props.color);
              },
            },
            {
              key: "onCanvasInited",
              value: function (e, t, n) {
                (this.canvas = e),
                  this.createProton(e, t, n),
                  o().add(this.renderProton);
              },
            },
            {
              key: "onResize",
              value: function (e, t) {
                (this.crossZoneBehaviour.zone.width = e),
                  (this.crossZoneBehaviour.zone.height = t),
                  this.proton.renderers[0].resize(e, t);
              },
            },
            {
              key: "createProton",
              value: function (e, t, n) {
                this.proton = new (l())();
                var r = new (l().Emitter)();
                (r.damping = 0.008),
                  (r.rate = new (l().Rate)(
                    this.props.num ? this.props.num : 150
                  )),
                  r.addInitialize(new (l().Mass)(1)),
                  r.addInitialize(new (l().Radius)(8)),
                  r.addInitialize(
                    new (l().V)(
                      new (l().Span)(0.1, 0.5),
                      new (l().Span)(0, 360),
                      "polar"
                    )
                  ),
                  r.addInitialize(
                    new (l().Position)(
                      new (l().CircleZone)(e.width / 2, e.height / 2, 100)
                    )
                  );
                var a = new (l().CrossZone)(
                  new (l().RectZone)(0, 0, e.width, e.height),
                  "cross"
                );
                r.addBehaviour(a),
                  (this.repulsion = new (l().Repulsion)(
                    { x: e.width / 2, y: e.height / 2 - 100 },
                    3,
                    300
                  )),
                  (this.attraction = new (l().Attraction)(
                    { x: e.width / 2, y: e.height / 2 },
                    3,
                    200
                  )),
                  r.addBehaviour(this.attraction, this.repulsion),
                  r.addBehaviour(new (l().Color)("random")),
                  r.addBehaviour(new (l().RandomDrift)(20, 15, 0.15)),
                  r.emit("once"),
                  this.proton.addEmitter(r),
                  this.proton.addRenderer(this.createRenderer(e)),
                  (this.crossZoneBehaviour = a);
              },
            },
            {
              key: "createRenderer",
              value: function (e) {
                var t = this,
                  n = e.getContext("2d"),
                  r = new (l().CanvasRenderer)(e);
                return (
                  (r.onProtonUpdate = function () {
                    (t.hue += 1),
                      (n.fillStyle =
                        m(t.props.color, 0.02) || "rgba(0, 0, 0, 0.02)"),
                      n.fillRect(0, 0, e.width, e.height);
                  }),
                  (r.onParticleCreated = function (e) {
                    (e.data.begin = l().MathUtil.randomAToB(1, 120)),
                      (e.data.tha = l().MathUtil.randomAToB(0, 2 * Math.PI));
                  }),
                  (r.onParticleUpdate = function (e) {
                    var r = e.data.begin + t.hue;
                    e.color = t.colorTemplate.replace("hue", r % 360);
                    var a =
                      0.25 * e.radius * Math.cos((e.data.tha += 0.01)) +
                      0.75 * e.radius;
                    n.beginPath(),
                      (n.fillStyle = e.color),
                      n.arc(e.p.x, e.p.y, a, 0, 2 * Math.PI, !0),
                      n.closePath(),
                      n.fill();
                  }),
                  r
                );
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                try {
                  o().remove(this.renderProton), this.proton.destroy();
                } catch (e) {}
              },
            },
            {
              key: "renderProton",
              value: function () {
                var e = this.canvas;
                this.proton.update(),
                  this.index % 200 === 0 &&
                    ((this.attraction.targetPosition.x =
                      Math.random() * e.width),
                    (this.attraction.targetPosition.y =
                      Math.random() * e.height),
                    (this.repulsion.targetPosition.x = Math.random() * e.width),
                    (this.repulsion.targetPosition.y =
                      Math.random() * e.height)),
                  this.index++;
              },
            },
            {
              key: "render",
              value: function () {
                return e.createElement(h, {
                  bg: this.props.bg,
                  onCanvasDidMount: this.onCanvasDidMount.bind(this),
                  onCanvasInited: this.onCanvasInited.bind(this),
                  onResize: this.onResize.bind(this),
                });
              },
            },
          ]),
          n
        );
      })(e.Component),
      w = (function (t) {
        function n(e) {
          u(this, n);
          var t = p(
            this,
            (n.__proto__ || Object.getPrototypeOf(n)).call(this, e)
          );
          return (
            (t.colors = [
              "#fad390",
              "#81ecec",
              "#ffffff",
              "#badc58",
              "#f9ca24",
              "#FEA47F",
            ]),
            (t.renderProton = t.renderProton.bind(t)),
            t
          );
        }
        return (
          d(n, t),
          c(n, [
            {
              key: "componentWillUnmount",
              value: function () {
                try {
                  o().remove(this.renderProton), this.proton.destroy();
                } catch (e) {}
              },
            },
            { key: "onCanvasDidMount", value: function (e) {} },
            {
              key: "onCanvasInited",
              value: function (e, t, n) {
                this.createProton(e, t, n), o().add(this.renderProton);
              },
            },
            {
              key: "onResize",
              value: function (e, t) {
                (this.crossZoneBehaviour.zone.width = e + 300),
                  (this.crossZoneBehaviour.zone.height = t + 300),
                  this.proton.renderers[0].resize(e, t);
              },
            },
            {
              key: "createProton",
              value: function (e, t, n) {
                this.proton = new (l())();
                var r = new (l().Emitter)();
                (r.rate = new (l().Rate)(this.props.num ? this.props.num : 50)),
                  (r.damping = 0),
                  r.addInitialize(new (l().Mass)(1)),
                  r.addInitialize(new (l().Radius)(4, 70)),
                  r.addInitialize(
                    new (l().Velocity)(
                      new (l().Span)(2, 10),
                      new (l().Span)(0),
                      "polar"
                    )
                  ),
                  r.addInitialize(
                    new (l().Position)(
                      new (l().LineZone)(0, e.height, e.width, e.height)
                    )
                  );
                var a = new (l().CrossZone)(
                  new (l().RectZone)(-150, -150, e.width + 300, e.height + 300),
                  "cross"
                );
                r.addBehaviour(a),
                  r.addBehaviour(new (l().Alpha)(l().getSpan(0.1, 0.55))),
                  r.addBehaviour(new (l().Color)(this.colors)),
                  r.emit("once"),
                  this.proton.addEmitter(r);
                var o = this.createRenderer(e);
                this.proton.addRenderer(o),
                  (this.crossZoneBehaviour = a),
                  r.preEmit(2);
              },
            },
            {
              key: "createRenderer",
              value: function (e) {
                var t = e.getContext("2d"),
                  n = new (l().CustomRenderer)();
                return (
                  (n.onProtonUpdate = function () {
                    t.clearRect(0, 0, e.width, e.height);
                  }),
                  (n.onParticleCreated = function (e) {
                    var t = e.radius || 60,
                      n = l().MathUtil.randomAToB(100, 200, "int");
                    (e.data.w = t), (e.data.h = n);
                  }),
                  (n.onParticleUpdate = function (e) {
                    var n = e.data.w,
                      r = e.data.h;
                    t.save(),
                      (t.globalAlpha = e.alpha),
                      (t.fillStyle = e.color),
                      t.translate(e.p.x, e.p.y),
                      t.rotate(l().MathUtil.degreeTransform(e.rotation)),
                      t.translate(-e.p.x, -e.p.y),
                      t.beginPath(),
                      t.rect(e.p.x - n / 2, e.p.y - r / 2, n, r),
                      t.closePath(),
                      t.fill(),
                      (t.globalAlpha = 1),
                      t.restore();
                  }),
                  n
                );
              },
            },
            {
              key: "renderProton",
              value: function () {
                this.proton && this.proton.update();
              },
            },
            {
              key: "render",
              value: function () {
                return e.createElement(h, {
                  bg: this.props.bg,
                  globalCompositeOperation: "lighter",
                  onCanvasDidMount: this.onCanvasDidMount.bind(this),
                  onCanvasInited: this.onCanvasInited.bind(this),
                  onResize: this.onResize.bind(this),
                });
              },
            },
          ]),
          n
        );
      })(e.Component),
      k = (function (t) {
        function n(e) {
          u(this, n);
          var t = p(
            this,
            (n.__proto__ || Object.getPrototypeOf(n)).call(this, e)
          );
          return (t.renderProton = t.renderProton.bind(t)), t;
        }
        return (
          d(n, t),
          c(n, [
            {
              key: "onCanvasInited",
              value: function (e, t, n) {
                this.createProton(e, t, n), o().add(this.renderProton);
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                try {
                  o().remove(this.renderProton), this.proton.destroy();
                } catch (e) {}
              },
            },
            {
              key: "onResize",
              value: function (e, t) {
                (this.crossZoneBehaviour.zone.width = e),
                  (this.crossZoneBehaviour.zone.height = t),
                  this.proton.renderers[0].resize(e, t);
              },
            },
            {
              key: "createProton",
              value: function (e, t, n) {
                this.proton = new (l())();
                var r = new (l().Emitter)();
                (r.rate = new (l().Rate)(
                  this.props.num
                    ? new (l().Span)(this.props.num)
                    : new (l().Span)(100),
                  new (l().Span)(0.05, 0.2)
                )),
                  r.addInitialize(new (l().Mass)(1)),
                  r.addInitialize(new (l().Radius)(1, 4)),
                  r.addInitialize(new (l().Life)(1 / 0));
                var a = new (l().Position)(new (l().RectZone)(0, 0, t, n));
                r.addInitialize(a),
                  r.addInitialize(
                    new (l().Velocity)(
                      new (l().Span)(0.3, 0.6),
                      new (l().Span)(0, 360),
                      "polar"
                    )
                  ),
                  r.addBehaviour(new (l().Alpha)(l().getSpan(0.2, 0.9))),
                  r.addBehaviour(new (l().Color)(this.props.color || "#333")),
                  (this.crossZoneBehaviour = new (l().CrossZone)(
                    new (l().RectZone)(0, 0, t, n),
                    "cross"
                  )),
                  r.addBehaviour(this.crossZoneBehaviour),
                  r.emit("once"),
                  (r.damping = 0),
                  this.proton.addEmitter(r),
                  this.proton.addRenderer(this.createRenderer(e, r));
              },
            },
            {
              key: "createRenderer",
              value: function (e, t) {
                var n = this,
                  r = e.getContext("2d"),
                  a = new (l().CanvasRenderer)(e);
                return (
                  (a.onProtonUpdateAfter = function () {
                    for (var e = t.particles, a = 0; a < e.length; a++)
                      for (var o = a + 1; o < e.length; o++) {
                        var i = e[a],
                          l = e[o],
                          s = i.p.distanceTo(l.p);
                        if (s < 140) {
                          var u = 0.5 * (1 - s / 140);
                          (r.strokeStyle =
                            m(n.props.color, u) || "rgba(3, 3, 3, " + u + ")"),
                            r.beginPath(),
                            r.moveTo(i.p.x, i.p.y),
                            r.lineTo(l.p.x, l.p.y),
                            r.closePath(),
                            r.stroke();
                        }
                      }
                  }),
                  a
                );
              },
            },
            {
              key: "renderProton",
              value: function () {
                this.proton && this.proton.update();
              },
            },
            {
              key: "render",
              value: function () {
                return e.createElement(h, {
                  bg: this.props.bg,
                  globalCompositeOperation: "darker",
                  onCanvasInited: this.onCanvasInited.bind(this),
                  onResize: this.onResize.bind(this),
                });
              },
            },
          ]),
          n
        );
      })(e.Component),
      C = (function (t) {
        function n(e) {
          u(this, n);
          var t = p(
            this,
            (n.__proto__ || Object.getPrototypeOf(n)).call(this, e)
          );
          return (
            (t.colors = [
              "#74b9ff",
              "#e84393",
              "#6c5ce7",
              "#00b894",
              "#fdcb6e",
              "#006266",
              "#1B1464",
            ]),
            (t.renderProton = t.renderProton.bind(t)),
            t
          );
        }
        return (
          d(n, t),
          c(n, [
            {
              key: "componentWillUnmount",
              value: function () {
                try {
                  o().remove(this.renderProton), this.proton.destroy();
                } catch (e) {}
              },
            },
            {
              key: "onCanvasInited",
              value: function (e, t, n) {
                this.createProton(e, t, n), o().add(this.renderProton);
              },
            },
            {
              key: "onResize",
              value: function (e, t) {
                (this.crossZoneBehaviour.zone.width = e),
                  (this.crossZoneBehaviour.zone.height = t),
                  this.proton.renderers[0].resize(e, t);
              },
            },
            {
              key: "createProton",
              value: function (e, t, n) {
                this.proton = new (l())();
                var r = new (l().Emitter)();
                (r.rate = new (l().Rate)(this.props.num || 20)),
                  (r.damping = 0.008),
                  r.addInitialize(new (l().Mass)(1)),
                  r.addInitialize(new (l().Radius)(30, 600)),
                  r.addInitialize(
                    new (l().Velocity)(
                      new (l().Span)(0.5),
                      new (l().Span)(0, 360),
                      "polar"
                    )
                  ),
                  r.addInitialize(
                    new (l().Position)(
                      new (l().RectZone)(0, 0, e.width, e.height)
                    )
                  );
                var a = new (l().CrossZone)(
                  new (l().RectZone)(0, 0, e.width, e.height),
                  "cross"
                );
                r.addBehaviour(a),
                  r.addBehaviour(new (l().Alpha)(l().getSpan(0.35, 0.55))),
                  r.addBehaviour(new (l().Color)(this.getColor())),
                  r.addBehaviour(new (l().RandomDrift)(50, 50, 0.5)),
                  r.emit("once"),
                  this.proton.addEmitter(r);
                var o = new (l().CanvasRenderer)(e);
                this.proton.addRenderer(o), (this.crossZoneBehaviour = a);
              },
            },
            {
              key: "getColor",
              value: function () {
                var e = this.colors;
                return (
                  this.props.color &&
                    (e = Array.isArray(this.props.color)
                      ? this.props.color
                      : [this.props.color]),
                  e
                );
              },
            },
            {
              key: "renderProton",
              value: function () {
                this.proton && this.proton.update();
              },
            },
            {
              key: "render",
              value: function () {
                return e.createElement(h, {
                  bg: this.props.bg,
                  globalCompositeOperation: "darken",
                  onCanvasInited: this.onCanvasInited.bind(this),
                  onResize: this.onResize.bind(this),
                });
              },
            },
          ]),
          n
        );
      })(e.Component),
      P = (function (t) {
        function n(e) {
          u(this, n);
          var t = p(
            this,
            (n.__proto__ || Object.getPrototypeOf(n)).call(this, e)
          );
          return (t.renderProton = t.renderProton.bind(t)), t;
        }
        return (
          d(n, t),
          c(n, [
            { key: "onCanvasDidMount", value: function (e) {} },
            {
              key: "onCanvasInited",
              value: function (e, t, n) {
                this.createProton(e, t, n), this.renderProton();
              },
            },
            {
              key: "onResize",
              value: function (e, t) {
                (this.crossZoneBehaviour.zone.width = e),
                  (this.crossZoneBehaviour.zone.height = t),
                  this.proton.renderers[0].resize(e, t);
              },
            },
            {
              key: "createProton",
              value: function (e, t, n) {
                this.proton = new (l())();
                var r = new (l().Emitter)();
                (r.damping = 0.008),
                  (r.rate = new (l().Rate)(
                    this.props.num ? this.props.num : 50
                  )),
                  r.addInitialize(new (l().Mass)(1)),
                  r.addInitialize(new (l().Radius)(5, 9)),
                  r.addInitialize(
                    new (l().Velocity)(
                      new (l().Span)(1.5),
                      new (l().Span)(0, 360),
                      "polar"
                    )
                  ),
                  r.addInitialize(
                    new (l().Position)(new (l().RectZone)(0, 0, t, n))
                  );
                var a = { x: t / 2, y: n / 2 },
                  o = new (l().Attraction)(a, 0, 0),
                  i = new (l().CrossZone)(
                    new (l().RectZone)(0, 0, e.width, e.height),
                    "bound"
                  );
                r.addBehaviour(new (l().Color)(this.props.color || "#bbb")),
                  r.addBehaviour(o, i),
                  r.addBehaviour(new (l().RandomDrift)(15, 15, 0.05)),
                  r.emit("once"),
                  this.proton.addEmitter(r),
                  this.proton.addRenderer(this.createRenderer(e)),
                  (this.crossZoneBehaviour = i);
              },
            },
            {
              key: "createRenderer",
              value: function (e) {
                var t = e.getContext("2d"),
                  n = new (l().CanvasRenderer)(e);
                (n.onProtonUpdate = function () {
                  t.clearRect(0, 0, e.width, e.height);
                }),
                  (n.onParticleCreated = function (e) {
                    (e.data.points = []), (e.data.index = 0);
                  }),
                  (n.onParticleUpdate = function (e) {
                    o(e), e.data.index % 8 === 0 && r(e), a(e), e.data.index++;
                  });
                var r = function (e) {
                    e.data.points.unshift(e.p.y),
                      e.data.points.unshift(e.p.x),
                      e.data.points.length > 10 &&
                        (e.data.points.pop(), e.data.points.pop());
                  },
                  a = function (e) {
                    (t.fillStyle = e.color),
                      t.beginPath(),
                      t.arc(e.p.x, e.p.y, e.radius, 0, 2 * Math.PI, !0),
                      t.closePath(),
                      t.fill();
                  },
                  o = function (e) {
                    t.beginPath(),
                      (t.strokeStyle = e.color),
                      t.moveTo(e.p.x, e.p.y);
                    for (var n = e.data.points.length, r = 0; r < n; r += 2) {
                      var a = e.data.points[r],
                        o = e.data.points[r + 1];
                      (t.lineWidth = i(r, n)), t.lineTo(a, o), t.stroke();
                    }
                  },
                  i = function (e, t) {
                    if (t <= 2) return 1;
                    var n = 5 / (2 / t - 1),
                      r = n * ((e + 2) / t) + (1 - n);
                    return (r >>= 0);
                  };
                return n;
              },
            },
            {
              key: "renderProton",
              value: function () {
                var e = this;
                o().add(function () {
                  e.proton.update();
                });
              },
            },
            {
              key: "render",
              value: function () {
                return e.createElement(h, {
                  bg: this.props.bg,
                  globalCompositeOperation: "darker",
                  onCanvasDidMount: this.onCanvasDidMount.bind(this),
                  onCanvasInited: this.onCanvasInited.bind(this),
                  onResize: this.onResize.bind(this),
                });
              },
            },
          ]),
          n
        );
      })(e.Component),
      E = [
        "#f6b93b",
        "#18dcff",
        "#cd84f1",
        "#ED4C67",
        "#ffffff",
        "#b71540",
        "#32ff7e",
        "#ff3838",
      ],
      x = (function (t) {
        function n(e) {
          u(this, n);
          var t = p(
            this,
            (n.__proto__ || Object.getPrototypeOf(n)).call(this, e)
          );
          return (t.renderProton = t.renderProton.bind(t)), t;
        }
        return (
          d(n, t),
          c(n, [
            {
              key: "onCanvasInited",
              value: function (e, t, n) {
                this.createProton(e),
                  this.createEmitter({
                    canvas: e,
                    x: t / 2,
                    y: n / 2,
                    mainEmitter: !0,
                    zone: "bound",
                  }),
                  o().add(this.renderProton);
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                try {
                  o().remove(this.renderProton), this.proton.destroy();
                } catch (e) {}
              },
            },
            { key: "onResize", value: function () {} },
            {
              key: "createProton",
              value: function (e) {
                this.proton = new (l())();
                var t = this.createRenderer(e);
                this.proton.addRenderer(t);
              },
            },
            {
              key: "createRenderer",
              value: function (e) {
                var t = e.getContext("2d"),
                  n = new (l().CustomRenderer)();
                (n.onProtonUpdate = function () {
                  t.clearRect(0, 0, e.width, e.height);
                }),
                  (n.onParticleCreated = function (e) {
                    e.data.count = l().MathUtil.randomAToB(3, 10, !0);
                  }),
                  (n.onParticleUpdate = function (e) {
                    t.save(),
                      (t.globalAlpha = e.alpha),
                      (t.fillStyle = e.color),
                      t.translate(e.p.x, e.p.y),
                      t.rotate(l().MathUtil.degreeTransform(e.rotation)),
                      t.translate(-e.p.x, -e.p.y),
                      t.beginPath(),
                      r(e, e.data.count),
                      t.closePath(),
                      t.fill(),
                      (t.globalAlpha = 1),
                      t.restore();
                  }),
                  (n.onParticleDead = function (e) {});
                var r = function (e, n) {
                  if (n >= 7) t.arc(e.p.x, e.p.y, e.radius, 0, 2 * Math.PI, !0);
                  else
                    for (var r = e.radius, a = 0; a <= n; a++) {
                      var o =
                          e.p.x +
                          r * Math.cos((((Math.PI / 180) * 360) / n) * a),
                        i =
                          e.p.y +
                          r * Math.sin((((Math.PI / 180) * 360) / n) * a);
                      0 === a ? t.moveTo(o, i) : t.lineTo(o, i);
                    }
                };
                return n;
              },
            },
            {
              key: "createEmitter",
              value: function (e) {
                var t = e.mainEmitter,
                  n = e.canvas,
                  r = e.x,
                  a = e.y,
                  o = e.radius,
                  i = e.color,
                  s = void 0 === i ? E : i,
                  u = e.zone,
                  c = void 0 === u ? "dead" : u,
                  d = e.once,
                  p = void 0 === d ? "all" : d,
                  f = e.alpha,
                  h = void 0 === f ? 0.85 : f,
                  m = e.gravity,
                  y = void 0 === m ? 3.5 : m,
                  g = this.proton.pool.get(l().Emitter);
                if (!g.completed) {
                  g.rate = new (l().Rate)(
                    this.props.num
                      ? new (l().Span)(this.props.num)
                      : new (l().Span)(4, 9),
                    new (l().Span)(1.6, 2.2)
                  );
                  var v = t
                    ? new (l().Radius)(10, 110)
                    : new (l().Radius)(3, o);
                  g.addInitialize(new (l().Mass)(1)),
                    g.addInitialize(v),
                    g.addInitialize(new (l().Life)(3, 6)),
                    g.addInitialize(
                      new (l().Velocity)(
                        new (l().Span)(4, 6),
                        new (l().Span)(-90, 90),
                        "polar"
                      )
                    ),
                    g.addBehaviour(new (l().Alpha)(h, 0.2)),
                    g.addBehaviour(new (l().Color)(s)),
                    g.addBehaviour(new (l().Scale)(1, 0.3)),
                    g.addBehaviour(new (l().Rotate)()),
                    g.addBehaviour(new (l().Gravity)(y)),
                    g.addBehaviour(this.customDeadBehaviour(n)),
                    g.addBehaviour(
                      new (l().CrossZone)(
                        new (l().RectZone)(0, 0, n.width, n.height),
                        c
                      )
                    );
                }
                (g.p.x = r),
                  (g.p.y = a),
                  "once" === p ? g.emit("once") : g.emit(),
                  this.proton.addEmitter(g);
              },
            },
            {
              key: "expireEmitter",
              value: function (e) {
                var t = this;
                setTimeout(function () {
                  (e.completed = !0),
                    t.proton.pool.expire(e),
                    t.proton.removeEmitter(e);
                }, 500);
              },
            },
            {
              key: "customDeadBehaviour",
              value: function (e) {
                var t = this;
                return {
                  initialize: function (e) {
                    (e.data = e.data || {}),
                      (e.data.oldRadius = e.radius),
                      (e.data.emitterCount = 0);
                  },
                  applyBehaviour: function (n) {
                    n.radius < 5 ||
                      n.data.emitterCount >= 2 ||
                      (n.radius <= (1 / 3) * n.data.oldRadius &&
                        (n.data.emitterCount++,
                        t.createEmitter({
                          canvas: e,
                          x: n.p.x,
                          y: n.p.y,
                          radius: 0.5 * n.radius,
                          alpha: 0.5,
                          gravity: 5,
                          color: n.color,
                          once: "once",
                        })));
                  },
                };
              },
            },
            {
              key: "renderProton",
              value: function () {
                this.proton && this.proton.update();
              },
            },
            {
              key: "render",
              value: function () {
                return e.createElement(h, {
                  bg: this.props.bg,
                  globalCompositeOperation: "darker",
                  onCanvasInited: this.onCanvasInited.bind(this),
                  onResize: this.onResize.bind(this),
                });
              },
            },
          ]),
          n
        );
      })(e.Component),
      R = (function (t) {
        function n(e) {
          u(this, n);
          var t = p(
            this,
            (n.__proto__ || Object.getPrototypeOf(n)).call(this, e)
          );
          return (
            (t.colors = [
              "#529B88",
              "#CDD180",
              "#FFFA32",
              "#FB6255",
              "#FB4A53",
              "#FF4E50",
              "#F9D423",
            ]),
            (t.renderProton = t.renderProton.bind(t)),
            t
          );
        }
        return (
          d(n, t),
          c(n, [
            {
              key: "componentWillUnmount",
              value: function () {
                try {
                  o().remove(this.renderProton), this.proton.destroy();
                } catch (e) {}
              },
            },
            {
              key: "onCanvasInited",
              value: function (e, t, n) {
                this.createProton(e, t, n), o().add(this.renderProton);
              },
            },
            { key: "onResize", value: function () {} },
            {
              key: "createProton",
              value: function (e, t, n) {
                this.proton = new (l())();
                var r = new (l().Emitter)();
                (r.rate = new (l().Rate)(
                  this.props.num
                    ? new (l().Span)(this.props.num)
                    : new (l().Span)(4, 8),
                  new (l().Span)(0.1, 0.25)
                )),
                  r.addInitialize(new (l().Mass)(1)),
                  r.addInitialize(new (l().Radius)(20, 200)),
                  r.addInitialize(new (l().Life)(2, 4)),
                  r.addInitialize(
                    new (l().Velocity)(
                      new (l().Span)(4, 7),
                      new (l().Span)(0, 360),
                      "polar"
                    )
                  ),
                  r.addInitialize(
                    new (l().Position)(new (l().CircleZone)(t / 2, n / 2, 100))
                  ),
                  r.addBehaviour(new (l().Alpha)(1, 0)),
                  r.addBehaviour(new (l().Scale)(0.2, 1)),
                  r.addBehaviour(this.createCustomBehaviour()),
                  r.addBehaviour(new (l().Color)(this.colors, "random")),
                  r.emit(),
                  this.proton.addEmitter(r);
                var a = new (l().CanvasRenderer)(e);
                this.proton.addRenderer(a);
              },
            },
            {
              key: "createCustomBehaviour",
              value: function () {
                return {
                  initialize: function (e) {
                    e.f = new (l().Vector2D)(0, 0);
                  },
                  applyBehaviour: function (e) {
                    var t = e.v.length() / 1e3,
                      n = e.v.getGradient();
                    (n += 1.57),
                      (e.f.x = 1e3 * t * Math.cos(n)),
                      (e.f.y = 1e3 * t * Math.sin(n)),
                      e.a.add(e.f);
                  },
                };
              },
            },
            {
              key: "renderProton",
              value: function () {
                this.proton && this.proton.update();
              },
            },
            {
              key: "render",
              value: function () {
                return e.createElement(h, {
                  bg: this.props.bg,
                  globalCompositeOperation: "xor",
                  onCanvasInited: this.onCanvasInited.bind(this),
                  onResize: this.onResize.bind(this),
                });
              },
            },
          ]),
          n
        );
      })(e.Component);
    const S = (function (t) {
      function n(e) {
        return (
          u(this, n),
          p(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, e))
        );
      }
      return (
        d(n, t),
        c(n, [
          {
            key: "getRandom",
            value: function () {
              var t = this.props,
                n = t.num,
                r = t.bg,
                a = t.color;
              return (
                this.random ||
                  ((this.random = new f()),
                  this.random.set(
                    0.25,
                    e.createElement(g, { num: n, bg: r, color: a })
                  ),
                  this.random.set(
                    0.2,
                    e.createElement(y, { num: n, bg: r, color: a })
                  ),
                  this.random.set(
                    0.2,
                    e.createElement(b, { num: n, bg: r, color: a })
                  ),
                  this.random.set(
                    0.16,
                    e.createElement(_, { num: n, bg: r, color: a })
                  ),
                  this.random.set(
                    0.18,
                    e.createElement(C, { num: n, bg: r, color: a })
                  ),
                  this.random.set(
                    0.04,
                    e.createElement(k, { num: n, bg: r, color: a })
                  ),
                  this.random.set(
                    0.1,
                    e.createElement(x, { num: n, bg: r, color: a })
                  ),
                  this.random.set(
                    0.08,
                    e.createElement(w, { num: n, bg: r, color: a })
                  ),
                  this.random.set(
                    0.18,
                    e.createElement(P, { num: n, bg: r, color: a })
                  ),
                  this.random.set(
                    0.15,
                    e.createElement(R, { num: n, bg: r, color: a })
                  )),
                this.random.getResult()
              );
            },
          },
          {
            key: "getBgParticles",
            value: function () {
              var t = this.props,
                n = t.type,
                r = t.num,
                a = t.bg,
                o = t.color,
                i = t.config,
                l = void 0;
              switch (String(n).toLowerCase()) {
                case "color":
                default:
                  l = e.createElement(g, { num: r, bg: a, color: o });
                  break;
                case "ball":
                  l = e.createElement(y, { num: r, bg: a, color: o });
                  break;
                case "lines":
                  l = e.createElement(b, { num: r, bg: a, color: o });
                  break;
                case "thick":
                  l = e.createElement(_, { num: r, bg: a, color: o });
                  break;
                case "circle":
                  l = e.createElement(C, { num: r, bg: a, color: o });
                  break;
                case "cobweb":
                  l = e.createElement(k, { num: r, bg: a, color: o });
                  break;
                case "polygon":
                  l = e.createElement(x, { num: r, bg: a, color: o });
                  break;
                case "square":
                  l = e.createElement(w, { num: r, bg: a, color: o });
                  break;
                case "tadpole":
                  l = e.createElement(P, { num: r, bg: a, color: o });
                  break;
                case "fountain":
                  l = e.createElement(R, { num: r, bg: a, color: o });
                  break;
                case "custom":
                  l = e.createElement(v, { bg: a, config: i });
                  break;
                case "random":
                  l = this.getRandom(r);
              }
              return l;
            },
          },
          {
            key: "render",
            value: function () {
              var t = this.getBgParticles();
              return e.createElement(e.Fragment, null, t);
            },
          },
        ]),
        n
      );
    })(e.Component);
    const T = function () {
      return (0, n.jsxs)("div", {
        className: "profile-div",
        children: [
          (0, n.jsx)("div", {
            className: "particle-bg",
            children: (0, n.jsx)(S, {
              color: "#2ca4f2",
              num: 75,
              type: "cobweb",
              bg: !0,
              config: { rps: 1e-5 },
            }),
          }),
          (0, n.jsxs)("div", {
            className: "profile-grid",
            children: [
              (0, n.jsx)("div", {
                className: "columnPic",
                children: (0, n.jsx)("img", {
                  className: "troyProfilePic",
                  src: "../images/headshot.jpg",
                  alt: "Jennifer Moore",
                }),
              }),
              (0, n.jsxs)("div", {
                children: [
                  (0, n.jsx)("h1", {
                    className: "profileName",
                    children: "Jennifer Moore",
                  }),
                  (0, n.jsx)("h2", {
                    className: "NMLS",
                    children: "Loan Originator (NMLS #2104281)",
                  }),
                  (0, n.jsx)("p", {
                    className: "profileP",
                    children:
                      "I'm Jennifer, a leading loan originator specializing in all things home finance. My top priority is ensuring that my clients have the best experience and a solid financial plan tailored to their needs. I will provide my honest professional opinions about the most suitable financing options for your home loan. With a passion for making deals happen where others might falter, I'm here to guide you every step of the way. Ready to take the first step toward your dream home? Click below to get started on your online application!",
                  }),
                  (0, n.jsx)("div", {
                    className: "buttonBlueDiv",
                    children: (0, n.jsx)("a", {
                      href: "#getStarted",
                      className: "buttonBlue",
                      children: "Get Started",
                    }),
                  }),
                ],
              }),
            ],
          }),
        ],
      });
    };
    const I =
      __webpack_require__.p +
      "static/media/application.d99af350757fffc7d5c3a96a6ffd9b9d.svg";
    const O =
      __webpack_require__.p +
      "static/media/loan-education.fff298a4586c266bcd77edfa0e686aa0.svg";
    const A =
      __webpack_require__.p +
      "static/media/upload-documents.5c29d77bfcd797c7b27b843172912094.svg";
    const M =
      __webpack_require__.p +
      "static/media/arrow-right.69ffdcb6aa8f39a5c4c4431ab49def8c.svg";
    const j =
      __webpack_require__.p +
      "static/media/review.80f541df291f7b6a622e4b2e455fc981.svg";
    const N = function (e) {
      return (0, n.jsxs)("div", {
        className: "grid-item",
        children: [
          (0, n.jsxs)("div", {
            children: [
              (0, n.jsx)("div", {
                className: "getStartedIcon",
                children: (0, n.jsx)("img", {
                  src: (() => {
                    switch (e.iconName) {
                      case "applicationIcon":
                      default:
                        return I;
                      case "loanEducationIcon":
                        return O;
                      case "uploadDocumentIcon":
                        return A;
                      case "reviewIcon":
                        return j;
                    }
                  })(),
                  alt: "get started item icon",
                }),
              }),
              (0, n.jsx)("h3", {
                className: "getStartedCard",
                children: e.title,
              }),
              (0, n.jsx)("p", {
                className: "getStartedCardP",
                children: e.description,
              }),
            ],
          }),
          (0, n.jsxs)("a", {
            href: e.url,
            target: "_blank",
            rel: "noreferrer",
            className: "cardLink",
            children: [
              e.btnText,
              (0, n.jsx)("img", { src: M, alt: "Arrow right icon" }),
            ],
          }),
        ],
      });
    };
    const D = function () {
      return (0, n.jsxs)("div", {
        className: "getStarted-div",
        id: "getStarted",
        children: [
          (0, n.jsxs)("div", {
            className: "getStartedBackground",
            children: [
              (0, n.jsx)("h2", {
                className: "getStartedH2",
                children: "Resources",
              }),
              (0, n.jsx)("p", {
                className: "getStartedP",
                children:
                  "Here are some helpful links to get you started with the purchase of your next home.",
              }),
            ],
          }),
          (0, n.jsxs)("div", {
            className: "grid-container",
            children: [
              (0, n.jsx)(N, {
                title: "Loan Application",
                description:
                  "Create your account to apply with First Class Home Mortgage.",
                url: "https://firstclasshomemortgage.my1003app.com/2104281/register",
                iconName: "applicationIcon",
                btnText: "Start Application",
              }),
              (0, n.jsx)(N, {
                title: "CreditSmart Loan Education",
                description:
                  "Be confident about your finances. Our lessons will empower you to make educated decisions throughout the homebuying process.",
                url: "https://creditsmart.freddiemac.com/paths/homebuyer-u/",
                iconName: "loanEducationIcon",
                btnText: "Start Learning",
              }),
              (0, n.jsx)(N, {
                title: "Leave a Review",
                description:
                  "Thank you for choosing First Class Home Mortgage. It's my priority to continue providing quality service to my customers. Tell me about your experience.",
                url: "https://g.page/r/CStPPIWpW1rHEAg/review",
                iconName: "reviewIcon",
                btnText: "Write Review",
              }),
            ],
          }),
        ],
      });
    };
    var L = __webpack_require__(540),
      z = __webpack_require__.n(L);
    const U = function () {
      return (0, n.jsxs)("div", {
        className: "loanCalculator-div",
        children: [
          (0, n.jsxs)("div", {
            className: "loanCalcText",
            children: [
              (0, n.jsx)("h2", { children: "Loan Calculator" }),
              (0, n.jsx)("p", {
                children: "Get an estimate of your monthly mortgage payments.",
              }),
              (0, n.jsx)("p", {
                className: "small",
                children:
                  "* For a more accurate estimate, get in touch with me and I will help you find the best solution for your needs.",
              }),
            ],
          }),
          (0, n.jsx)("div", {
            className: "mortgageCalculator",
            children: (0, n.jsx)(z(), {
              price: 5e5,
              downPayment: 1e5,
              interestRate: 0.035,
              months: 360,
              additionalPrincipalPayment: 0,
              insuranceRate: 0,
              taxRate: 0,
              mortgageInsuranceEnabled: !1,
            }),
          }),
        ],
      });
    };
    const F = function () {
      return (0, n.jsx)("footer", {
        children: (0, n.jsxs)("div", {
          className: "footer-div",
          children: [
            (0, n.jsxs)("div", {
              className: "footerGridItem",
              children: [
                (0, n.jsx)("h3", {
                  className: "footerH3",
                  children: "Contact",
                }),
                (0, n.jsxs)("p", {
                  className: "footerP",
                  children: [
                    "Phone: ",
                    (0, n.jsx)("a", {
                      href: "tel:801-380-2857",
                      children: "(801)-380-2857",
                    }),
                  ],
                }),
                (0, n.jsx)("p", {
                  className: "footerP",
                  children: "Fax: (801)-303-7083",
                }),
                (0, n.jsxs)("p", {
                  className: "footerP",
                  children: [
                    "Email:",
                    " ",
                    (0, n.jsx)("a", {
                      href: "mailto:jennifer@firstclasshomemortgage.com",
                      children: "jennifer@firstclasshomemortgage.com",
                    }),
                  ],
                }),
              ],
            }),
            (0, n.jsxs)("div", {
              className: "footerGridItem",
              children: [
                (0, n.jsx)("h3", {
                  className: "footerH3",
                  children: "License Info",
                }),
                (0, n.jsx)("p", {
                  className: "footerP",
                  children: "Jennifer Moore (NMLS #2104281)",
                }),
                (0, n.jsx)("p", {
                  className: "footerP",
                  children:
                    "Regulated by State of Utah Division of Real Estate NMLS #1843",
                }),
              ],
            }),
            (0, n.jsxs)("div", {
              className: "footerGridItem",
              children: [
                (0, n.jsx)("h3", {
                  className: "footerH3",
                  children: "Address",
                }),
                (0, n.jsx)("p", {
                  className: "footerP",
                  children: "First Class Home Mortgage",
                }),
                (0, n.jsx)("p", {
                  className: "footerP",
                  children: (0, n.jsxs)("a", {
                    href: "https://goo.gl/maps/o97dcDxGxFcAcRheA",
                    target: "_blank",
                    rel: "noreferrer",
                    children: [
                      "10808 River Front Parkway, Suite #3035,",
                      (0, n.jsx)("br", {}),
                      " South Jordan, UT 84095",
                    ],
                  }),
                }),
              ],
            }),
          ],
        }),
      });
    };
    const V = function () {
        return (0, n.jsxs)("div", {
          className: "App",
          children: [
            (0, n.jsx)(r, {}),
            (0, n.jsx)(T, {}),
            (0, n.jsx)(D, {}),
            (0, n.jsx)(U, {}),
            (0, n.jsx)(F, {}),
          ],
        });
      },
      B = (e) => {
        e &&
          e instanceof Function &&
          __webpack_require__
            .e(592)
            .then(__webpack_require__.bind(__webpack_require__, 592))
            .then((t) => {
              let {
                getCLS: n,
                getFID: r,
                getFCP: a,
                getLCP: o,
                getTTFB: i,
              } = t;
              n(e), r(e), a(e), o(e), i(e);
            });
      };
    t.render(
      (0, n.jsx)(e.StrictMode, { children: (0, n.jsx)(V, {}) }),
      document.getElementById("root")
    ),
      B();
  })();
})();
//# sourceMappingURL=main.fb1a9a57.js.map
