/*!
 * @license Firebase v4.6.2
 * Build: rev-7db74e6
 * Terms: https://firebase.google.com/terms/
 */
try {
  webpackJsonpFirebase([4], {

    /***/ 76:
    /***/ (function (module, exports, __webpack_require__) {

      /**
       * Copyright 2017 Google Inc.
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      __webpack_require__(77);


      /***/
    }),

    /***/ 77:
    /***/ (function (module, exports, __webpack_require__) {

      /* WEBPACK VAR INJECTION */
      (function (global) {
        var require;
        (function () {
          var firebase = __webpack_require__(6).default;
          var COMPILED = false;
          var goog = goog || {};
          goog.global = this;
          goog.global.CLOSURE_UNCOMPILED_DEFINES;
          goog.global.CLOSURE_DEFINES;
          goog.isDef = function (val) {
            return val !== void 0
          };
          goog.isString = function (val) {
            return typeof val == "string"
          };
          goog.isBoolean = function (val) {
            return typeof val == "boolean"
          };
          goog.isNumber = function (val) {
            return typeof val == "number"
          };
          goog.exportPath_ = function (name, opt_object, opt_objectToExportTo) {
            var parts = name.split(".");
            var cur = opt_objectToExportTo || goog.global;
            if (!(parts[0] in cur) && cur.execScript) cur.execScript("var " + parts[0]);
            for (var part; parts.length && (part = parts.shift());) if (!parts.length && goog.isDef(opt_object)) cur[part] = opt_object; else if (cur[part] && cur[part] !== Object.prototype[part]) cur = cur[part]; else cur = cur[part] = {}
          };
          goog.define = function (name, defaultValue) {
            var value = defaultValue;
            if (!COMPILED) if (goog.global.CLOSURE_UNCOMPILED_DEFINES && goog.global.CLOSURE_UNCOMPILED_DEFINES.nodeType === undefined && Object.prototype.hasOwnProperty.call(goog.global.CLOSURE_UNCOMPILED_DEFINES, name)) value = goog.global.CLOSURE_UNCOMPILED_DEFINES[name]; else if (goog.global.CLOSURE_DEFINES && goog.global.CLOSURE_DEFINES.nodeType === undefined && Object.prototype.hasOwnProperty.call(goog.global.CLOSURE_DEFINES, name)) value = goog.global.CLOSURE_DEFINES[name];
            goog.exportPath_(name, value)
          };
          goog.define("goog.DEBUG", true);
          goog.define("goog.LOCALE", "en");
          goog.define("goog.TRUSTED_SITE", true);
          goog.define("goog.STRICT_MODE_COMPATIBLE", false);
          goog.define("goog.DISALLOW_TEST_ONLY_CODE", COMPILED && !goog.DEBUG);
          goog.define("goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING", false);
          goog.provide = function (name) {
            if (goog.isInModuleLoader_()) throw new Error("goog.provide can not be used within a goog.module.");
            if (!COMPILED) if (goog.isProvided_(name)) throw new Error('Namespace "' + name + '" already declared.');
            goog.constructNamespace_(name)
          };
          goog.constructNamespace_ = function (name, opt_obj) {
            if (!COMPILED) {
              delete goog.implicitNamespaces_[name];
              var namespace = name;
              while (namespace = namespace.substring(0, namespace.lastIndexOf("."))) {
                if (goog.getObjectByName(namespace)) break;
                goog.implicitNamespaces_[namespace] = true
              }
            }
            goog.exportPath_(name, opt_obj)
          };
          goog.VALID_MODULE_RE_ = /^[a-zA-Z_$][a-zA-Z0-9._$]*$/;
          goog.module = function (name) {
            if (!goog.isString(name) || !name || name.search(goog.VALID_MODULE_RE_) == -1) throw new Error("Invalid module identifier");
            if (!goog.isInModuleLoader_()) throw new Error("Module " + name + " has been loaded incorrectly. Note, " + "modules cannot be loaded as normal scripts. They require some kind of " + "pre-processing step. You're likely trying to load a module via a " + "script tag or as a part of a concatenated bundle without rewriting the " + "module. For more info see: " + "https://github.com/google/closure-library/wiki/goog.module:-an-ES6-module-like-alternative-to-goog.provide.");
            if (goog.moduleLoaderState_.moduleName) throw new Error("goog.module may only be called once per module.");
            goog.moduleLoaderState_.moduleName = name;
            if (!COMPILED) {
              if (goog.isProvided_(name)) throw new Error('Namespace "' + name + '" already declared.');
              delete goog.implicitNamespaces_[name]
            }
          };
          goog.module.get = function (name) {
            return goog.module.getInternal_(name)
          };
          goog.module.getInternal_ = function (name) {
            if (!COMPILED) if (name in goog.loadedModules_) return goog.loadedModules_[name]; else if (!goog.implicitNamespaces_[name]) {
              var ns = goog.getObjectByName(name);
              return ns != null ? ns : null
            }
            return null
          };
          goog.moduleLoaderState_ = null;
          goog.isInModuleLoader_ = function () {
            return goog.moduleLoaderState_ != null
          };
          goog.module.declareLegacyNamespace = function () {
            if (!COMPILED && !goog.isInModuleLoader_()) throw new Error("goog.module.declareLegacyNamespace must be called from " + "within a goog.module");
            if (!COMPILED && !goog.moduleLoaderState_.moduleName) throw new Error("goog.module must be called prior to " + "goog.module.declareLegacyNamespace.");
            goog.moduleLoaderState_.declareLegacyNamespace = true
          };
          goog.setTestOnly = function (opt_message) {
            if (goog.DISALLOW_TEST_ONLY_CODE) {
              opt_message = opt_message || "";
              throw new Error("Importing test-only code into non-debug environment" + (opt_message ? ": " + opt_message : "."));
            }
          };
          goog.forwardDeclare = function (name) {
          };
          goog.forwardDeclare("Document");
          goog.forwardDeclare("HTMLScriptElement");
          goog.forwardDeclare("XMLHttpRequest");
          if (!COMPILED) {
            goog.isProvided_ = function (name) {
              return name in goog.loadedModules_ || !goog.implicitNamespaces_[name] && goog.isDefAndNotNull(goog.getObjectByName(name))
            };
            goog.implicitNamespaces_ = {"goog.module": true}
          }
          goog.getObjectByName = function (name, opt_obj) {
            var parts = name.split(".");
            var cur = opt_obj || goog.global;
            for (var i = 0; i < parts.length; i++) {
              cur = cur[parts[i]];
              if (!goog.isDefAndNotNull(cur)) return null
            }
            return cur
          };
          goog.globalize = function (obj, opt_global) {
            var global = opt_global || goog.global;
            for (var x in obj) global[x] = obj[x]
          };
          goog.addDependency = function (relPath, provides, requires, opt_loadFlags) {
            if (goog.DEPENDENCIES_ENABLED) {
              var provide, require;
              var path = relPath.replace(/\\/g, "/");
              var deps = goog.dependencies_;
              if (!opt_loadFlags || typeof opt_loadFlags === "boolean") opt_loadFlags = opt_loadFlags ? {"module": "goog"} : {};
              for (var i = 0; provide = provides[i]; i++) {
                deps.nameToPath[provide] = path;
                deps.loadFlags[path] = opt_loadFlags
              }
              for (var j = 0; require = requires[j]; j++) {
                if (!(path in deps.requires)) deps.requires[path] = {};
                deps.requires[path][require] =
                  true
              }
            }
          };
          goog.define("goog.ENABLE_DEBUG_LOADER", true);
          goog.logToConsole_ = function (msg) {
            if (goog.global.console) goog.global.console["error"](msg)
          };
          goog.require = function (name) {
            if (!COMPILED) {
              if (goog.ENABLE_DEBUG_LOADER && goog.IS_OLD_IE_) goog.maybeProcessDeferredDep_(name);
              if (goog.isProvided_(name)) {
                if (goog.isInModuleLoader_()) return goog.module.getInternal_(name)
              } else if (goog.ENABLE_DEBUG_LOADER) {
                var path = goog.getPathFromDeps_(name);
                if (path) goog.writeScripts_(path); else {
                  var errorMessage = "goog.require could not find: " + name;
                  goog.logToConsole_(errorMessage);
                  throw new Error(errorMessage);
                }
              }
              return null
            }
          };
          goog.basePath = "";
          goog.global.CLOSURE_BASE_PATH;
          goog.global.CLOSURE_NO_DEPS;
          goog.global.CLOSURE_IMPORT_SCRIPT;
          goog.nullFunction = function () {
          };
          goog.abstractMethod = function () {
            throw new Error("unimplemented abstract method");
          };
          goog.addSingletonGetter = function (ctor) {
            ctor.instance_ = undefined;
            ctor.getInstance = function () {
              if (ctor.instance_) return ctor.instance_;
              if (goog.DEBUG) goog.instantiatedSingletons_[goog.instantiatedSingletons_.length] = ctor;
              return ctor.instance_ = new ctor
            }
          };
          goog.instantiatedSingletons_ = [];
          goog.define("goog.LOAD_MODULE_USING_EVAL", true);
          goog.define("goog.SEAL_MODULE_EXPORTS", goog.DEBUG);
          goog.loadedModules_ = {};
          goog.DEPENDENCIES_ENABLED = !COMPILED && goog.ENABLE_DEBUG_LOADER;
          goog.define("goog.TRANSPILE", "detect");
          goog.define("goog.TRANSPILER", "transpile.js");
          if (goog.DEPENDENCIES_ENABLED) {
            goog.dependencies_ = {loadFlags: {}, nameToPath: {}, requires: {}, visited: {}, written: {}, deferred: {}};
            goog.inHtmlDocument_ = function () {
              var doc = goog.global.document;
              return doc != null && "write" in doc
            };
            goog.findBasePath_ = function () {
              if (goog.isDef(goog.global.CLOSURE_BASE_PATH) && goog.isString(goog.global.CLOSURE_BASE_PATH)) {
                goog.basePath = goog.global.CLOSURE_BASE_PATH;
                return
              } else if (!goog.inHtmlDocument_()) return;
              var doc = goog.global.document;
              var currentScript = doc.currentScript;
              if (currentScript) var scripts =
                [currentScript]; else var scripts = doc.getElementsByTagName("SCRIPT");
              for (var i = scripts.length - 1; i >= 0; --i) {
                var script = scripts[i];
                var src = script.src;
                var qmark = src.lastIndexOf("?");
                var l = qmark == -1 ? src.length : qmark;
                if (src.substr(l - 7, 7) == "base.js") {
                  goog.basePath = src.substr(0, l - 7);
                  return
                }
              }
            };
            goog.importScript_ = function (src, opt_sourceText) {
              var importScript = goog.global.CLOSURE_IMPORT_SCRIPT || goog.writeScriptTag_;
              if (importScript(src, opt_sourceText)) goog.dependencies_.written[src] = true
            };
            goog.IS_OLD_IE_ = !!(!goog.global.atob &&
              goog.global.document && goog.global.document.all);
            goog.oldIeWaiting_ = false;
            goog.importProcessedScript_ = function (src, isModule, needsTranspile) {
              var bootstrap = 'goog.retrieveAndExec_("' + src + '", ' + isModule + ", " + needsTranspile + ");";
              goog.importScript_("", bootstrap)
            };
            goog.queuedModules_ = [];
            goog.wrapModule_ = function (srcUrl, scriptText) {
              if (!goog.LOAD_MODULE_USING_EVAL || !goog.isDef(goog.global.JSON)) return "" + "goog.loadModule(function(exports) {" + '"use strict";' + scriptText + "\n" + ";return exports" + "});" + "\n//# sourceURL=" +
                srcUrl + "\n"; else return "" + "goog.loadModule(" + goog.global.JSON.stringify(scriptText + "\n//# sourceURL=" + srcUrl + "\n") + ");"
            };
            goog.loadQueuedModules_ = function () {
              var count = goog.queuedModules_.length;
              if (count > 0) {
                var queue = goog.queuedModules_;
                goog.queuedModules_ = [];
                for (var i = 0; i < count; i++) {
                  var path = queue[i];
                  goog.maybeProcessDeferredPath_(path)
                }
              }
              goog.oldIeWaiting_ = false
            };
            goog.maybeProcessDeferredDep_ = function (name) {
              if (goog.isDeferredModule_(name) && goog.allDepsAreAvailable_(name)) {
                var path = goog.getPathFromDeps_(name);
                goog.maybeProcessDeferredPath_(goog.basePath + path)
              }
            };
            goog.isDeferredModule_ = function (name) {
              var path = goog.getPathFromDeps_(name);
              var loadFlags = path && goog.dependencies_.loadFlags[path] || {};
              var languageLevel = loadFlags["lang"] || "es3";
              if (path && (loadFlags["module"] == "goog" || goog.needsTranspile_(languageLevel))) {
                var abspath = goog.basePath + path;
                return abspath in goog.dependencies_.deferred
              }
              return false
            };
            goog.allDepsAreAvailable_ = function (name) {
              var path = goog.getPathFromDeps_(name);
              if (path && path in goog.dependencies_.requires) for (var requireName in goog.dependencies_.requires[path]) if (!goog.isProvided_(requireName) &&
                !goog.isDeferredModule_(requireName)) return false;
              return true
            };
            goog.maybeProcessDeferredPath_ = function (abspath) {
              if (abspath in goog.dependencies_.deferred) {
                var src = goog.dependencies_.deferred[abspath];
                delete goog.dependencies_.deferred[abspath];
                goog.globalEval(src)
              }
            };
            goog.loadModuleFromUrl = function (url) {
              goog.retrieveAndExec_(url, true, false)
            };
            goog.writeScriptSrcNode_ = function (src) {
              goog.global.document.write('<script type="text/javascript" src="' + src + '"></' + "script>")
            };
            goog.appendScriptSrcNode_ = function (src) {
              var doc =
                goog.global.document;
              var scriptEl = doc.createElement("script");
              scriptEl.type = "text/javascript";
              scriptEl.src = src;
              scriptEl.defer = false;
              scriptEl.async = false;
              doc.head.appendChild(scriptEl)
            };
            goog.writeScriptTag_ = function (src, opt_sourceText) {
              if (goog.inHtmlDocument_()) {
                var doc = goog.global.document;
                if (!goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING && doc.readyState == "complete") {
                  var isDeps = /\bdeps.js$/.test(src);
                  if (isDeps) return false; else throw new Error('Cannot write "' + src + '" after document load');
                }
                if (opt_sourceText ===
                  undefined) if (!goog.IS_OLD_IE_) if (goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING) goog.appendScriptSrcNode_(src); else goog.writeScriptSrcNode_(src); else {
                  goog.oldIeWaiting_ = true;
                  var state = " onreadystatechange='goog.onScriptLoad_(this, " + ++goog.lastNonModuleScriptIndex_ + ")' ";
                  doc.write('<script type="text/javascript" src="' + src + '"' + state + "></" + "script>")
                } else doc.write('<script type="text/javascript">' + goog.protectScriptTag_(opt_sourceText) + "</" + "script>");
                return true
              } else return false
            };
            goog.protectScriptTag_ =
              function (str) {
                return str.replace(/<\/(SCRIPT)/ig, "\\x3c/$1")
              };
            goog.needsTranspile_ = function (lang) {
              if (goog.TRANSPILE == "always") return true; else if (goog.TRANSPILE == "never") return false; else if (!goog.requiresTranspilation_) goog.requiresTranspilation_ = goog.createRequiresTranspilation_();
              if (lang in goog.requiresTranspilation_) return goog.requiresTranspilation_[lang]; else throw new Error("Unknown language mode: " + lang);
            };
            goog.requiresTranspilation_ = null;
            goog.lastNonModuleScriptIndex_ = 0;
            goog.onScriptLoad_ =
              function (script, scriptIndex) {
                if (script.readyState == "complete" && goog.lastNonModuleScriptIndex_ == scriptIndex) goog.loadQueuedModules_();
                return true
              };
            goog.writeScripts_ = function (pathToLoad) {
              var scripts = [];
              var seenScript = {};
              var deps = goog.dependencies_;

              function visitNode(path) {
                if (path in deps.written) return;
                if (path in deps.visited) return;
                deps.visited[path] = true;
                if (path in deps.requires) for (var requireName in deps.requires[path]) if (!goog.isProvided_(requireName)) if (requireName in deps.nameToPath) visitNode(deps.nameToPath[requireName]);
                else throw new Error("Undefined nameToPath for " + requireName);
                if (!(path in seenScript)) {
                  seenScript[path] = true;
                  scripts.push(path)
                }
              }

              visitNode(pathToLoad);
              for (var i = 0; i < scripts.length; i++) {
                var path = scripts[i];
                goog.dependencies_.written[path] = true
              }
              var moduleState = goog.moduleLoaderState_;
              goog.moduleLoaderState_ = null;
              for (var i = 0; i < scripts.length; i++) {
                var path = scripts[i];
                if (path) {
                  var loadFlags = deps.loadFlags[path] || {};
                  var languageLevel = loadFlags["lang"] || "es3";
                  var needsTranspile = goog.needsTranspile_(languageLevel);
                  if (loadFlags["module"] == "goog" || needsTranspile) goog.importProcessedScript_(goog.basePath + path, loadFlags["module"] == "goog", needsTranspile); else goog.importScript_(goog.basePath + path)
                } else {
                  goog.moduleLoaderState_ = moduleState;
                  throw new Error("Undefined script input");
                }
              }
              goog.moduleLoaderState_ = moduleState
            };
            goog.getPathFromDeps_ = function (rule) {
              if (rule in goog.dependencies_.nameToPath) return goog.dependencies_.nameToPath[rule]; else return null
            };
            goog.findBasePath_();
            if (!goog.global.CLOSURE_NO_DEPS) goog.importScript_(goog.basePath +
              "deps.js")
          }
          goog.hasBadLetScoping = null;
          goog.useSafari10Workaround = function () {
            if (goog.hasBadLetScoping == null) {
              var hasBadLetScoping;
              try {
                hasBadLetScoping = !eval('"use strict";' + "let x = 1; function f() { return typeof x; };" + 'f() == "number";')
              } catch (e) {
                hasBadLetScoping = false
              }
              goog.hasBadLetScoping = hasBadLetScoping
            }
            return goog.hasBadLetScoping
          };
          goog.workaroundSafari10EvalBug = function (moduleDef) {
            return "(function(){" + moduleDef + "\n" + ";" + "})();\n"
          };
          goog.loadModule = function (moduleDef) {
            var previousState = goog.moduleLoaderState_;
            try {
              goog.moduleLoaderState_ = {moduleName: undefined, declareLegacyNamespace: false};
              var exports;
              if (goog.isFunction(moduleDef)) exports = moduleDef.call(undefined, {}); else if (goog.isString(moduleDef)) {
                if (goog.useSafari10Workaround()) moduleDef = goog.workaroundSafari10EvalBug(moduleDef);
                exports = goog.loadModuleFromSource_.call(undefined, moduleDef)
              } else throw new Error("Invalid module definition");
              var moduleName = goog.moduleLoaderState_.moduleName;
              if (!goog.isString(moduleName) || !moduleName) throw new Error('Invalid module name "' + moduleName + '"');
              if (goog.moduleLoaderState_.declareLegacyNamespace) goog.constructNamespace_(moduleName, exports); else if (goog.SEAL_MODULE_EXPORTS && Object.seal && typeof exports == "object" && exports != null) Object.seal(exports);
              goog.loadedModules_[moduleName] = exports
            } finally {
              goog.moduleLoaderState_ = previousState
            }
          };
          goog.loadModuleFromSource_ = function () {
            var exports = {};
            eval(arguments[0]);
            return exports
          };
          goog.normalizePath_ = function (path) {
            var components = path.split("/");
            var i = 0;
            while (i < components.length) if (components[i] == ".") components.splice(i, 1); else if (i && components[i] == ".." && components[i - 1] && components[i - 1] != "..") components.splice(--i, 2); else i++;
            return components.join("/")
          };
          goog.global.CLOSURE_LOAD_FILE_SYNC;
          goog.loadFileSync_ = function (src) {
            if (goog.global.CLOSURE_LOAD_FILE_SYNC) return goog.global.CLOSURE_LOAD_FILE_SYNC(src); else try {
              var xhr = new goog.global["XMLHttpRequest"];
              xhr.open("get", src, false);
              xhr.send();
              return xhr.status == 0 || xhr.status == 200 ? xhr.responseText : null
            } catch (err) {
              return null
            }
          };
          goog.retrieveAndExec_ = function (src, isModule, needsTranspile) {
            if (!COMPILED) {
              var originalPath = src;
              src = goog.normalizePath_(src);
              var importScript = goog.global.CLOSURE_IMPORT_SCRIPT || goog.writeScriptTag_;
              var scriptText = goog.loadFileSync_(src);
              if (scriptText == null) throw new Error('Load of "' + src + '" failed');
              if (needsTranspile) scriptText = goog.transpile_.call(goog.global, scriptText, src);
              if (isModule) scriptText = goog.wrapModule_(src, scriptText); else scriptText += "\n//# sourceURL=" + src;
              var isOldIE = goog.IS_OLD_IE_;
              if (isOldIE && goog.oldIeWaiting_) {
                goog.dependencies_.deferred[originalPath] = scriptText;
                goog.queuedModules_.push(originalPath)
              } else importScript(src, scriptText)
            }
          };
          goog.transpile_ = function (code, path) {
            var jscomp = goog.global["$jscomp"];
            if (!jscomp) goog.global["$jscomp"] = jscomp = {};
            var transpile = jscomp.transpile;
            if (!transpile) {
              var transpilerPath = goog.basePath + goog.TRANSPILER;
              var transpilerCode = goog.loadFileSync_(transpilerPath);
              if (transpilerCode) {
                eval(transpilerCode + "\n//# sourceURL=" + transpilerPath);
                if (goog.global["$gwtExport"] && goog.global["$gwtExport"]["$jscomp"] && !goog.global["$gwtExport"]["$jscomp"]["transpile"]) throw new Error('The transpiler did not properly export the "transpile" ' +
                  "method. $gwtExport: " + JSON.stringify(goog.global["$gwtExport"]));
                goog.global["$jscomp"].transpile = goog.global["$gwtExport"]["$jscomp"]["transpile"];
                jscomp = goog.global["$jscomp"];
                transpile = jscomp.transpile
              }
            }
            if (!transpile) {
              var suffix = " requires transpilation but no transpiler was found.";
              transpile = jscomp.transpile = function (code, path) {
                goog.logToConsole_(path + suffix);
                return code
              }
            }
            return transpile(code, path)
          };
          goog.typeOf = function (value) {
            var s = typeof value;
            if (s == "object") if (value) {
              if (value instanceof Array) return "array"; else if (value instanceof Object) return s;
              var className = Object.prototype.toString.call(value);
              if (className == "[object Window]") return "object";
              if (className == "[object Array]" || typeof value.length == "number" && typeof value.splice != "undefined" && typeof value.propertyIsEnumerable != "undefined" && !value.propertyIsEnumerable("splice")) return "array";
              if (className == "[object Function]" || typeof value.call !=
                "undefined" && typeof value.propertyIsEnumerable != "undefined" && !value.propertyIsEnumerable("call")) return "function"
            } else return "null"; else if (s == "function" && typeof value.call == "undefined") return "object";
            return s
          };
          goog.isNull = function (val) {
            return val === null
          };
          goog.isDefAndNotNull = function (val) {
            return val != null
          };
          goog.isArray = function (val) {
            return goog.typeOf(val) == "array"
          };
          goog.isArrayLike = function (val) {
            var type = goog.typeOf(val);
            return type == "array" || type == "object" && typeof val.length == "number"
          };
          goog.isDateLike = function (val) {
            return goog.isObject(val) && typeof val.getFullYear == "function"
          };
          goog.isFunction = function (val) {
            return goog.typeOf(val) == "function"
          };
          goog.isObject = function (val) {
            var type = typeof val;
            return type == "object" && val != null || type == "function"
          };
          goog.getUid = function (obj) {
            return obj[goog.UID_PROPERTY_] || (obj[goog.UID_PROPERTY_] = ++goog.uidCounter_)
          };
          goog.hasUid = function (obj) {
            return !!obj[goog.UID_PROPERTY_]
          };
          goog.removeUid = function (obj) {
            if (obj !== null && "removeAttribute" in obj) obj.removeAttribute(goog.UID_PROPERTY_);
            try {
              delete obj[goog.UID_PROPERTY_]
            } catch (ex) {
            }
          };
          goog.UID_PROPERTY_ = "closure_uid_" + (Math.random() * 1E9 >>> 0);
          goog.uidCounter_ = 0;
          goog.getHashCode = goog.getUid;
          goog.removeHashCode = goog.removeUid;
          goog.cloneObject = function (obj) {
            var type = goog.typeOf(obj);
            if (type == "object" || type == "array") {
              if (obj.clone) return obj.clone();
              var clone = type == "array" ? [] : {};
              for (var key in obj) clone[key] = goog.cloneObject(obj[key]);
              return clone
            }
            return obj
          };
          goog.bindNative_ = function (fn, selfObj, var_args) {
            return fn.call.apply(fn.bind, arguments)
          };
          goog.bindJs_ = function (fn, selfObj, var_args) {
            if (!fn) throw new Error;
            if (arguments.length > 2) {
              var boundArgs = Array.prototype.slice.call(arguments, 2);
              return function () {
                var newArgs = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(newArgs, boundArgs);
                return fn.apply(selfObj, newArgs)
              }
            } else return function () {
              return fn.apply(selfObj, arguments)
            }
          };
          goog.bind = function (fn, selfObj, var_args) {
            if (Function.prototype.bind && Function.prototype.bind.toString().indexOf("native code") != -1) goog.bind = goog.bindNative_; else goog.bind = goog.bindJs_;
            return goog.bind.apply(null, arguments)
          };
          goog.partial = function (fn, var_args) {
            var args = Array.prototype.slice.call(arguments, 1);
            return function () {
              var newArgs = args.slice();
              newArgs.push.apply(newArgs, arguments);
              return fn.apply(this, newArgs)
            }
          };
          goog.mixin = function (target, source) {
            for (var x in source) target[x] = source[x]
          };
          goog.now = goog.TRUSTED_SITE && Date.now || function () {
            return +new Date
          };
          goog.globalEval = function (script) {
            if (goog.global.execScript) goog.global.execScript(script, "JavaScript"); else if (goog.global.eval) {
              if (goog.evalWorksForGlobals_ == null) {
                goog.global.eval("var _evalTest_ = 1;");
                if (typeof goog.global["_evalTest_"] != "undefined") {
                  try {
                    delete goog.global["_evalTest_"]
                  } catch (ignore) {
                  }
                  goog.evalWorksForGlobals_ = true
                } else goog.evalWorksForGlobals_ = false
              }
              if (goog.evalWorksForGlobals_) goog.global.eval(script); else {
                var doc = goog.global.document;
                var scriptElt = doc.createElement("SCRIPT");
                scriptElt.type = "text/javascript";
                scriptElt.defer = false;
                scriptElt.appendChild(doc.createTextNode(script));
                doc.body.appendChild(scriptElt);
                doc.body.removeChild(scriptElt)
              }
            } else throw new Error("goog.globalEval not available");
          };
          goog.evalWorksForGlobals_ = null;
          goog.cssNameMapping_;
          goog.cssNameMappingStyle_;
          goog.global.CLOSURE_CSS_NAME_MAP_FN;
          goog.getCssName = function (className, opt_modifier) {
            if (String(className).charAt(0) == ".") throw new Error('className passed in goog.getCssName must not start with ".".' + " You passed: " + className);
            var getMapping = function (cssName) {
              return goog.cssNameMapping_[cssName] || cssName
            };
            var renameByParts = function (cssName) {
              var parts = cssName.split("-");
              var mapped = [];
              for (var i = 0; i < parts.length; i++) mapped.push(getMapping(parts[i]));
              return mapped.join("-")
            };
            var rename;
            if (goog.cssNameMapping_) rename = goog.cssNameMappingStyle_ ==
            "BY_WHOLE" ? getMapping : renameByParts; else rename = function (a) {
              return a
            };
            var result = opt_modifier ? className + "-" + rename(opt_modifier) : rename(className);
            if (goog.global.CLOSURE_CSS_NAME_MAP_FN) return goog.global.CLOSURE_CSS_NAME_MAP_FN(result);
            return result
          };
          goog.setCssNameMapping = function (mapping, opt_style) {
            goog.cssNameMapping_ = mapping;
            goog.cssNameMappingStyle_ = opt_style
          };
          goog.global.CLOSURE_CSS_NAME_MAPPING;
          if (!COMPILED && goog.global.CLOSURE_CSS_NAME_MAPPING) goog.cssNameMapping_ = goog.global.CLOSURE_CSS_NAME_MAPPING;
          goog.getMsg = function (str, opt_values) {
            if (opt_values) str = str.replace(/\{\$([^}]+)}/g, function (match, key) {
              return opt_values != null && key in opt_values ? opt_values[key] : match
            });
            return str
          };
          goog.getMsgWithFallback = function (a, b) {
            return a
          };
          goog.exportSymbol = function (publicPath, object, opt_objectToExportTo) {
            goog.exportPath_(publicPath, object, opt_objectToExportTo)
          };
          goog.exportProperty = function (object, publicName, symbol) {
            object[publicName] = symbol
          };
          goog.inherits = function (childCtor, parentCtor) {
            function tempCtor() {
            }

            tempCtor.prototype = parentCtor.prototype;
            childCtor.superClass_ = parentCtor.prototype;
            childCtor.prototype = new tempCtor;
            childCtor.prototype.constructor = childCtor;
            childCtor.base = function (me, methodName, var_args) {
              var args = new Array(arguments.length - 2);
              for (var i = 2; i < arguments.length; i++) args[i - 2] = arguments[i];
              return parentCtor.prototype[methodName].apply(me, args)
            }
          };
          goog.base = function (me, opt_methodName, var_args) {
            var caller = arguments.callee.caller;
            if (goog.STRICT_MODE_COMPATIBLE || goog.DEBUG && !caller) throw new Error("arguments.caller not defined.  goog.base() cannot be used " + "with strict mode code. See " + "http://www.ecma-international.org/ecma-262/5.1/#sec-C");
            if (caller.superClass_) {
              var ctorArgs = new Array(arguments.length - 1);
              for (var i = 1; i < arguments.length; i++) ctorArgs[i - 1] = arguments[i];
              return caller.superClass_.constructor.apply(me, ctorArgs)
            }
            var args = new Array(arguments.length -
              2);
            for (var i = 2; i < arguments.length; i++) args[i - 2] = arguments[i];
            var foundCaller = false;
            for (var ctor = me.constructor; ctor; ctor = ctor.superClass_ && ctor.superClass_.constructor) if (ctor.prototype[opt_methodName] === caller) foundCaller = true; else if (foundCaller) return ctor.prototype[opt_methodName].apply(me, args);
            if (me[opt_methodName] === caller) return me.constructor.prototype[opt_methodName].apply(me, args); else throw new Error("goog.base called from a method of one name " + "to a method of a different name");
          };
          goog.scope = function (fn) {
            if (goog.isInModuleLoader_()) throw new Error("goog.scope is not supported within a goog.module.");
            fn.call(goog.global)
          };
          if (!COMPILED) goog.global["COMPILED"] = COMPILED;
          goog.defineClass = function (superClass, def) {
            var constructor = def.constructor;
            var statics = def.statics;
            if (!constructor || constructor == Object.prototype.constructor) constructor = function () {
              throw new Error("cannot instantiate an interface (no constructor defined).");
            };
            var cls = goog.defineClass.createSealingConstructor_(constructor, superClass);
            if (superClass) goog.inherits(cls, superClass);
            delete def.constructor;
            delete def.statics;
            goog.defineClass.applyProperties_(cls.prototype, def);
            if (statics != null) if (statics instanceof
              Function) statics(cls); else goog.defineClass.applyProperties_(cls, statics);
            return cls
          };
          goog.defineClass.ClassDescriptor;
          goog.define("goog.defineClass.SEAL_CLASS_INSTANCES", goog.DEBUG);
          goog.defineClass.createSealingConstructor_ = function (ctr, superClass) {
            if (!goog.defineClass.SEAL_CLASS_INSTANCES) return ctr;
            var superclassSealable = !goog.defineClass.isUnsealable_(superClass);
            var wrappedCtr = function () {
              var instance = ctr.apply(this, arguments) || this;
              instance[goog.UID_PROPERTY_] = instance[goog.UID_PROPERTY_];
              if (this.constructor === wrappedCtr && superclassSealable && Object.seal instanceof Function) Object.seal(instance);
              return instance
            };
            return wrappedCtr
          };
          goog.defineClass.isUnsealable_ = function (ctr) {
            return ctr && ctr.prototype && ctr.prototype[goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_]
          };
          goog.defineClass.OBJECT_PROTOTYPE_FIELDS_ = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
          goog.defineClass.applyProperties_ = function (target, source) {
            var key;
            for (key in source) if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
            for (var i = 0; i < goog.defineClass.OBJECT_PROTOTYPE_FIELDS_.length; i++) {
              key = goog.defineClass.OBJECT_PROTOTYPE_FIELDS_[i];
              if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key]
            }
          };
          goog.tagUnsealableClass = function (ctr) {
            if (!COMPILED && goog.defineClass.SEAL_CLASS_INSTANCES) ctr.prototype[goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_] = true
          };
          goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_ = "goog_defineClass_legacy_unsealable";
          goog.createRequiresTranspilation_ = function () {
            var requiresTranspilation = {"es3": false};
            var transpilationRequiredForAllLaterModes = false;

            function addNewerLanguageTranspilationCheck(modeName, isSupported) {
              if (transpilationRequiredForAllLaterModes) requiresTranspilation[modeName] = true; else if (isSupported()) requiresTranspilation[modeName] = false; else {
                requiresTranspilation[modeName] = true;
                transpilationRequiredForAllLaterModes = true
              }
            }

            function evalCheck(code) {
              try {
                return !!eval(code)
              } catch (ignored) {
                return false
              }
            }

            var userAgent =
              goog.global.navigator && goog.global.navigator.userAgent ? goog.global.navigator.userAgent : "";
            addNewerLanguageTranspilationCheck("es5", function () {
              return evalCheck("[1,].length==1")
            });
            addNewerLanguageTranspilationCheck("es6", function () {
              var re = /Edge\/(\d+)(\.\d)*/i;
              var edgeUserAgent = userAgent.match(re);
              if (edgeUserAgent && Number(edgeUserAgent[1]) < 15) return false;
              var es6fullTest = "class X{constructor(){if(new.target!=String)throw 1;this.x=42}}" + "let q=Reflect.construct(X,[],String);if(q.x!=42||!(q instanceof " +
                "String))throw 1;for(const a of[2,3]){if(a==2)continue;function " + "f(z={a}){let a=0;return z.a}{function f(){return 0;}}return f()" + "==3}";
              return evalCheck('(()=>{"use strict";' + es6fullTest + "})()")
            });
            addNewerLanguageTranspilationCheck("es6-impl", function () {
              return true
            });
            addNewerLanguageTranspilationCheck("es7", function () {
              return evalCheck("2 ** 2 == 4")
            });
            addNewerLanguageTranspilationCheck("es8", function () {
              return evalCheck("async () => 1, true")
            });
            return requiresTranspilation
          };
          goog.provide("goog.functions");
          goog.functions.constant = function (retValue) {
            return function () {
              return retValue
            }
          };
          goog.functions.FALSE = goog.functions.constant(false);
          goog.functions.TRUE = goog.functions.constant(true);
          goog.functions.NULL = goog.functions.constant(null);
          goog.functions.identity = function (opt_returnValue, var_args) {
            return opt_returnValue
          };
          goog.functions.error = function (message) {
            return function () {
              throw new Error(message);
            }
          };
          goog.functions.fail = function (err) {
            return function () {
              throw err;
            }
          };
          goog.functions.lock = function (f, opt_numArgs) {
            opt_numArgs = opt_numArgs || 0;
            return function () {
              return f.apply(this, Array.prototype.slice.call(arguments, 0, opt_numArgs))
            }
          };
          goog.functions.nth = function (n) {
            return function () {
              return arguments[n]
            }
          };
          goog.functions.partialRight = function (fn, var_args) {
            var rightArgs = Array.prototype.slice.call(arguments, 1);
            return function () {
              var newArgs = Array.prototype.slice.call(arguments);
              newArgs.push.apply(newArgs, rightArgs);
              return fn.apply(this, newArgs)
            }
          };
          goog.functions.withReturnValue = function (f, retValue) {
            return goog.functions.sequence(f, goog.functions.constant(retValue))
          };
          goog.functions.equalTo = function (value, opt_useLooseComparison) {
            return function (other) {
              return opt_useLooseComparison ? value == other : value === other
            }
          };
          goog.functions.compose = function (fn, var_args) {
            var functions = arguments;
            var length = functions.length;
            return function () {
              var result;
              if (length) result = functions[length - 1].apply(this, arguments);
              for (var i = length - 2; i >= 0; i--) result = functions[i].call(this, result);
              return result
            }
          };
          goog.functions.sequence = function (var_args) {
            var functions = arguments;
            var length = functions.length;
            return function () {
              var result;
              for (var i = 0; i < length; i++) result = functions[i].apply(this, arguments);
              return result
            }
          };
          goog.functions.and = function (var_args) {
            var functions = arguments;
            var length = functions.length;
            return function () {
              for (var i = 0; i < length; i++) if (!functions[i].apply(this, arguments)) return false;
              return true
            }
          };
          goog.functions.or = function (var_args) {
            var functions = arguments;
            var length = functions.length;
            return function () {
              for (var i = 0; i < length; i++) if (functions[i].apply(this, arguments)) return true;
              return false
            }
          };
          goog.functions.not = function (f) {
            return function () {
              return !f.apply(this, arguments)
            }
          };
          goog.functions.create = function (constructor, var_args) {
            var temp = function () {
            };
            temp.prototype = constructor.prototype;
            var obj = new temp;
            constructor.apply(obj, Array.prototype.slice.call(arguments, 1));
            return obj
          };
          goog.define("goog.functions.CACHE_RETURN_VALUE", true);
          goog.functions.cacheReturnValue = function (fn) {
            var called = false;
            var value;
            return function () {
              if (!goog.functions.CACHE_RETURN_VALUE) return fn();
              if (!called) {
                value = fn();
                called = true
              }
              return value
            }
          };
          goog.functions.once = function (f) {
            var inner = f;
            return function () {
              if (inner) {
                var tmp = inner;
                inner = null;
                tmp()
              }
            }
          };
          goog.functions.debounce = function (f, interval, opt_scope) {
            var timeout = 0;
            return function (var_args) {
              goog.global.clearTimeout(timeout);
              var args = arguments;
              timeout = goog.global.setTimeout(function () {
                f.apply(opt_scope, args)
              }, interval)
            }
          };
          goog.functions.throttle = function (f, interval, opt_scope) {
            var timeout = 0;
            var shouldFire = false;
            var args = [];
            var handleTimeout = function () {
              timeout = 0;
              if (shouldFire) {
                shouldFire = false;
                fire()
              }
            };
            var fire = function () {
              timeout = goog.global.setTimeout(handleTimeout, interval);
              f.apply(opt_scope, args)
            };
            return function (var_args) {
              args = arguments;
              if (!timeout) fire(); else shouldFire = true
            }
          };
          goog.functions.rateLimit = function (f, interval, opt_scope) {
            var timeout = 0;
            var handleTimeout = function () {
              timeout = 0
            };
            return function (var_args) {
              if (!timeout) {
                timeout = goog.global.setTimeout(handleTimeout, interval);
                f.apply(opt_scope, arguments)
              }
            }
          };
          goog.provide("goog.debug.Error");
          goog.debug.Error = function (opt_msg) {
            if (Error.captureStackTrace) Error.captureStackTrace(this, goog.debug.Error); else {
              var stack = (new Error).stack;
              if (stack) this.stack = stack
            }
            if (opt_msg) this.message = String(opt_msg);
            this.reportErrorToServer = true
          };
          goog.inherits(goog.debug.Error, Error);
          goog.debug.Error.prototype.name = "CustomError";
          goog.provide("goog.dom.NodeType");
          goog.dom.NodeType = {
            ELEMENT: 1,
            ATTRIBUTE: 2,
            TEXT: 3,
            CDATA_SECTION: 4,
            ENTITY_REFERENCE: 5,
            ENTITY: 6,
            PROCESSING_INSTRUCTION: 7,
            COMMENT: 8,
            DOCUMENT: 9,
            DOCUMENT_TYPE: 10,
            DOCUMENT_FRAGMENT: 11,
            NOTATION: 12
          };
          goog.provide("goog.string");
          goog.provide("goog.string.Unicode");
          goog.define("goog.string.DETECT_DOUBLE_ESCAPING", false);
          goog.define("goog.string.FORCE_NON_DOM_HTML_UNESCAPING", false);
          goog.string.Unicode = {NBSP: "\u00a0"};
          goog.string.startsWith = function (str, prefix) {
            return str.lastIndexOf(prefix, 0) == 0
          };
          goog.string.endsWith = function (str, suffix) {
            var l = str.length - suffix.length;
            return l >= 0 && str.indexOf(suffix, l) == l
          };
          goog.string.caseInsensitiveStartsWith = function (str, prefix) {
            return goog.string.caseInsensitiveCompare(prefix, str.substr(0, prefix.length)) == 0
          };
          goog.string.caseInsensitiveEndsWith = function (str, suffix) {
            return goog.string.caseInsensitiveCompare(suffix, str.substr(str.length - suffix.length, suffix.length)) == 0
          };
          goog.string.caseInsensitiveEquals = function (str1, str2) {
            return str1.toLowerCase() == str2.toLowerCase()
          };
          goog.string.subs = function (str, var_args) {
            var splitParts = str.split("%s");
            var returnString = "";
            var subsArguments = Array.prototype.slice.call(arguments, 1);
            while (subsArguments.length && splitParts.length > 1) returnString += splitParts.shift() + subsArguments.shift();
            return returnString + splitParts.join("%s")
          };
          goog.string.collapseWhitespace = function (str) {
            return str.replace(/[\s\xa0]+/g, " ").replace(/^\s+|\s+$/g, "")
          };
          goog.string.isEmptyOrWhitespace = function (str) {
            return /^[\s\xa0]*$/.test(str)
          };
          goog.string.isEmptyString = function (str) {
            return str.length == 0
          };
          goog.string.isEmpty = goog.string.isEmptyOrWhitespace;
          goog.string.isEmptyOrWhitespaceSafe = function (str) {
            return goog.string.isEmptyOrWhitespace(goog.string.makeSafe(str))
          };
          goog.string.isEmptySafe = goog.string.isEmptyOrWhitespaceSafe;
          goog.string.isBreakingWhitespace = function (str) {
            return !/[^\t\n\r ]/.test(str)
          };
          goog.string.isAlpha = function (str) {
            return !/[^a-zA-Z]/.test(str)
          };
          goog.string.isNumeric = function (str) {
            return !/[^0-9]/.test(str)
          };
          goog.string.isAlphaNumeric = function (str) {
            return !/[^a-zA-Z0-9]/.test(str)
          };
          goog.string.isSpace = function (ch) {
            return ch == " "
          };
          goog.string.isUnicodeChar = function (ch) {
            return ch.length == 1 && ch >= " " && ch <= "~" || ch >= "\u0080" && ch <= "\ufffd"
          };
          goog.string.stripNewlines = function (str) {
            return str.replace(/(\r\n|\r|\n)+/g, " ")
          };
          goog.string.canonicalizeNewlines = function (str) {
            return str.replace(/(\r\n|\r|\n)/g, "\n")
          };
          goog.string.normalizeWhitespace = function (str) {
            return str.replace(/\xa0|\s/g, " ")
          };
          goog.string.normalizeSpaces = function (str) {
            return str.replace(/\xa0|[ \t]+/g, " ")
          };
          goog.string.collapseBreakingSpaces = function (str) {
            return str.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "")
          };
          goog.string.trim = goog.TRUSTED_SITE && String.prototype.trim ? function (str) {
            return str.trim()
          } : function (str) {
            return str.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
          };
          goog.string.trimLeft = function (str) {
            return str.replace(/^[\s\xa0]+/, "")
          };
          goog.string.trimRight = function (str) {
            return str.replace(/[\s\xa0]+$/, "")
          };
          goog.string.caseInsensitiveCompare = function (str1, str2) {
            var test1 = String(str1).toLowerCase();
            var test2 = String(str2).toLowerCase();
            if (test1 < test2) return -1; else if (test1 == test2) return 0; else return 1
          };
          goog.string.numberAwareCompare_ = function (str1, str2, tokenizerRegExp) {
            if (str1 == str2) return 0;
            if (!str1) return -1;
            if (!str2) return 1;
            var tokens1 = str1.toLowerCase().match(tokenizerRegExp);
            var tokens2 = str2.toLowerCase().match(tokenizerRegExp);
            var count = Math.min(tokens1.length, tokens2.length);
            for (var i = 0; i < count; i++) {
              var a = tokens1[i];
              var b = tokens2[i];
              if (a != b) {
                var num1 = parseInt(a, 10);
                if (!isNaN(num1)) {
                  var num2 = parseInt(b, 10);
                  if (!isNaN(num2) && num1 - num2) return num1 - num2
                }
                return a < b ? -1 : 1
              }
            }
            if (tokens1.length != tokens2.length) return tokens1.length -
              tokens2.length;
            return str1 < str2 ? -1 : 1
          };
          goog.string.intAwareCompare = function (str1, str2) {
            return goog.string.numberAwareCompare_(str1, str2, /\d+|\D+/g)
          };
          goog.string.floatAwareCompare = function (str1, str2) {
            return goog.string.numberAwareCompare_(str1, str2, /\d+|\.\d+|\D+/g)
          };
          goog.string.numerateCompare = goog.string.floatAwareCompare;
          goog.string.urlEncode = function (str) {
            return encodeURIComponent(String(str))
          };
          goog.string.urlDecode = function (str) {
            return decodeURIComponent(str.replace(/\+/g, " "))
          };
          goog.string.newLineToBr = function (str, opt_xml) {
            return str.replace(/(\r\n|\r|\n)/g, opt_xml ? "<br />" : "<br>")
          };
          goog.string.htmlEscape = function (str, opt_isLikelyToContainHtmlChars) {
            if (opt_isLikelyToContainHtmlChars) {
              str = str.replace(goog.string.AMP_RE_, "&amp;").replace(goog.string.LT_RE_, "&lt;").replace(goog.string.GT_RE_, "&gt;").replace(goog.string.QUOT_RE_, "&quot;").replace(goog.string.SINGLE_QUOTE_RE_, "&#39;").replace(goog.string.NULL_RE_, "&#0;");
              if (goog.string.DETECT_DOUBLE_ESCAPING) str = str.replace(goog.string.E_RE_, "&#101;");
              return str
            } else {
              if (!goog.string.ALL_RE_.test(str)) return str;
              if (str.indexOf("&") !=
                -1) str = str.replace(goog.string.AMP_RE_, "&amp;");
              if (str.indexOf("<") != -1) str = str.replace(goog.string.LT_RE_, "&lt;");
              if (str.indexOf(">") != -1) str = str.replace(goog.string.GT_RE_, "&gt;");
              if (str.indexOf('"') != -1) str = str.replace(goog.string.QUOT_RE_, "&quot;");
              if (str.indexOf("'") != -1) str = str.replace(goog.string.SINGLE_QUOTE_RE_, "&#39;");
              if (str.indexOf("\x00") != -1) str = str.replace(goog.string.NULL_RE_, "&#0;");
              if (goog.string.DETECT_DOUBLE_ESCAPING && str.indexOf("e") != -1) str = str.replace(goog.string.E_RE_, "&#101;");
              return str
            }
          };
          goog.string.AMP_RE_ = /&/g;
          goog.string.LT_RE_ = /</g;
          goog.string.GT_RE_ = />/g;
          goog.string.QUOT_RE_ = /"/g;
          goog.string.SINGLE_QUOTE_RE_ = /'/g;
          goog.string.NULL_RE_ = /\x00/g;
          goog.string.E_RE_ = /e/g;
          goog.string.ALL_RE_ = goog.string.DETECT_DOUBLE_ESCAPING ? /[\x00&<>"'e]/ : /[\x00&<>"']/;
          goog.string.unescapeEntities = function (str) {
            if (goog.string.contains(str, "&")) if (!goog.string.FORCE_NON_DOM_HTML_UNESCAPING && "document" in goog.global) return goog.string.unescapeEntitiesUsingDom_(str); else return goog.string.unescapePureXmlEntities_(str);
            return str
          };
          goog.string.unescapeEntitiesWithDocument = function (str, document) {
            if (goog.string.contains(str, "&")) return goog.string.unescapeEntitiesUsingDom_(str, document);
            return str
          };
          goog.string.unescapeEntitiesUsingDom_ = function (str, opt_document) {
            var seen = {"&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"'};
            var div;
            if (opt_document) div = opt_document.createElement("div"); else div = goog.global.document.createElement("div");
            return str.replace(goog.string.HTML_ENTITY_PATTERN_, function (s, entity) {
              var value = seen[s];
              if (value) return value;
              if (entity.charAt(0) == "#") {
                var n = Number("0" + entity.substr(1));
                if (!isNaN(n)) value = String.fromCharCode(n)
              }
              if (!value) {
                div.innerHTML = s + " ";
                value = div.firstChild.nodeValue.slice(0,
                  -1)
              }
              return seen[s] = value
            })
          };
          goog.string.unescapePureXmlEntities_ = function (str) {
            return str.replace(/&([^;]+);/g, function (s, entity) {
              switch (entity) {
                case "amp":
                  return "&";
                case "lt":
                  return "<";
                case "gt":
                  return ">";
                case "quot":
                  return '"';
                default:
                  if (entity.charAt(0) == "#") {
                    var n = Number("0" + entity.substr(1));
                    if (!isNaN(n)) return String.fromCharCode(n)
                  }
                  return s
              }
            })
          };
          goog.string.HTML_ENTITY_PATTERN_ = /&([^;\s<&]+);?/g;
          goog.string.whitespaceEscape = function (str, opt_xml) {
            return goog.string.newLineToBr(str.replace(/  /g, " &#160;"), opt_xml)
          };
          goog.string.preserveSpaces = function (str) {
            return str.replace(/(^|[\n ]) /g, "$1" + goog.string.Unicode.NBSP)
          };
          goog.string.stripQuotes = function (str, quoteChars) {
            var length = quoteChars.length;
            for (var i = 0; i < length; i++) {
              var quoteChar = length == 1 ? quoteChars : quoteChars.charAt(i);
              if (str.charAt(0) == quoteChar && str.charAt(str.length - 1) == quoteChar) return str.substring(1, str.length - 1)
            }
            return str
          };
          goog.string.truncate = function (str, chars, opt_protectEscapedCharacters) {
            if (opt_protectEscapedCharacters) str = goog.string.unescapeEntities(str);
            if (str.length > chars) str = str.substring(0, chars - 3) + "...";
            if (opt_protectEscapedCharacters) str = goog.string.htmlEscape(str);
            return str
          };
          goog.string.truncateMiddle = function (str, chars, opt_protectEscapedCharacters, opt_trailingChars) {
            if (opt_protectEscapedCharacters) str = goog.string.unescapeEntities(str);
            if (opt_trailingChars && str.length > chars) {
              if (opt_trailingChars > chars) opt_trailingChars = chars;
              var endPoint = str.length - opt_trailingChars;
              var startPoint = chars - opt_trailingChars;
              str = str.substring(0, startPoint) + "..." + str.substring(endPoint)
            } else if (str.length > chars) {
              var half = Math.floor(chars / 2);
              var endPos = str.length - half;
              half += chars % 2;
              str = str.substring(0,
                half) + "..." + str.substring(endPos)
            }
            if (opt_protectEscapedCharacters) str = goog.string.htmlEscape(str);
            return str
          };
          goog.string.specialEscapeChars_ = {
            "\x00": "\\0",
            "\b": "\\b",
            "\f": "\\f",
            "\n": "\\n",
            "\r": "\\r",
            "\t": "\\t",
            "\x0B": "\\x0B",
            '"': '\\"',
            "\\": "\\\\",
            "<": "<"
          };
          goog.string.jsEscapeCache_ = {"'": "\\'"};
          goog.string.quote = function (s) {
            s = String(s);
            var sb = ['"'];
            for (var i = 0; i < s.length; i++) {
              var ch = s.charAt(i);
              var cc = ch.charCodeAt(0);
              sb[i + 1] = goog.string.specialEscapeChars_[ch] || (cc > 31 && cc < 127 ? ch : goog.string.escapeChar(ch))
            }
            sb.push('"');
            return sb.join("")
          };
          goog.string.escapeString = function (str) {
            var sb = [];
            for (var i = 0; i < str.length; i++) sb[i] = goog.string.escapeChar(str.charAt(i));
            return sb.join("")
          };
          goog.string.escapeChar = function (c) {
            if (c in goog.string.jsEscapeCache_) return goog.string.jsEscapeCache_[c];
            if (c in goog.string.specialEscapeChars_) return goog.string.jsEscapeCache_[c] = goog.string.specialEscapeChars_[c];
            var rv = c;
            var cc = c.charCodeAt(0);
            if (cc > 31 && cc < 127) rv = c; else {
              if (cc < 256) {
                rv = "\\x";
                if (cc < 16 || cc > 256) rv += "0"
              } else {
                rv = "\\u";
                if (cc < 4096) rv += "0"
              }
              rv += cc.toString(16).toUpperCase()
            }
            return goog.string.jsEscapeCache_[c] = rv
          };
          goog.string.contains = function (str, subString) {
            return str.indexOf(subString) != -1
          };
          goog.string.caseInsensitiveContains = function (str, subString) {
            return goog.string.contains(str.toLowerCase(), subString.toLowerCase())
          };
          goog.string.countOf = function (s, ss) {
            return s && ss ? s.split(ss).length - 1 : 0
          };
          goog.string.removeAt = function (s, index, stringLength) {
            var resultStr = s;
            if (index >= 0 && index < s.length && stringLength > 0) resultStr = s.substr(0, index) + s.substr(index + stringLength, s.length - index - stringLength);
            return resultStr
          };
          goog.string.remove = function (str, substr) {
            return str.replace(substr, "")
          };
          goog.string.removeAll = function (s, ss) {
            var re = new RegExp(goog.string.regExpEscape(ss), "g");
            return s.replace(re, "")
          };
          goog.string.replaceAll = function (s, ss, replacement) {
            var re = new RegExp(goog.string.regExpEscape(ss), "g");
            return s.replace(re, replacement.replace(/\$/g, "$$$$"))
          };
          goog.string.regExpEscape = function (s) {
            return String(s).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
          };
          goog.string.repeat = String.prototype.repeat ? function (string, length) {
            return string.repeat(length)
          } : function (string, length) {
            return (new Array(length + 1)).join(string)
          };
          goog.string.padNumber = function (num, length, opt_precision) {
            var s = goog.isDef(opt_precision) ? num.toFixed(opt_precision) : String(num);
            var index = s.indexOf(".");
            if (index == -1) index = s.length;
            return goog.string.repeat("0", Math.max(0, length - index)) + s
          };
          goog.string.makeSafe = function (obj) {
            return obj == null ? "" : String(obj)
          };
          goog.string.buildString = function (var_args) {
            return Array.prototype.join.call(arguments, "")
          };
          goog.string.getRandomString = function () {
            var x = 2147483648;
            return Math.floor(Math.random() * x).toString(36) + Math.abs(Math.floor(Math.random() * x) ^ goog.now()).toString(36)
          };
          goog.string.compareVersions = function (version1, version2) {
            var order = 0;
            var v1Subs = goog.string.trim(String(version1)).split(".");
            var v2Subs = goog.string.trim(String(version2)).split(".");
            var subCount = Math.max(v1Subs.length, v2Subs.length);
            for (var subIdx = 0; order == 0 && subIdx < subCount; subIdx++) {
              var v1Sub = v1Subs[subIdx] || "";
              var v2Sub = v2Subs[subIdx] || "";
              do {
                var v1Comp = /(\d*)(\D*)(.*)/.exec(v1Sub) || ["", "", "", ""];
                var v2Comp = /(\d*)(\D*)(.*)/.exec(v2Sub) || ["", "", "", ""];
                if (v1Comp[0].length == 0 && v2Comp[0].length == 0) break;
                var v1CompNum = v1Comp[1].length == 0 ? 0 : parseInt(v1Comp[1], 10);
                var v2CompNum = v2Comp[1].length == 0 ? 0 : parseInt(v2Comp[1], 10);
                order = goog.string.compareElements_(v1CompNum, v2CompNum) || goog.string.compareElements_(v1Comp[2].length == 0, v2Comp[2].length == 0) || goog.string.compareElements_(v1Comp[2], v2Comp[2]);
                v1Sub = v1Comp[3];
                v2Sub = v2Comp[3]
              } while (order == 0)
            }
            return order
          };
          goog.string.compareElements_ = function (left, right) {
            if (left < right) return -1; else if (left > right) return 1;
            return 0
          };
          goog.string.hashCode = function (str) {
            var result = 0;
            for (var i = 0; i < str.length; ++i) result = 31 * result + str.charCodeAt(i) >>> 0;
            return result
          };
          goog.string.uniqueStringCounter_ = Math.random() * 2147483648 | 0;
          goog.string.createUniqueString = function () {
            return "goog_" + goog.string.uniqueStringCounter_++
          };
          goog.string.toNumber = function (str) {
            var num = Number(str);
            if (num == 0 && goog.string.isEmptyOrWhitespace(str)) return NaN;
            return num
          };
          goog.string.isLowerCamelCase = function (str) {
            return /^[a-z]+([A-Z][a-z]*)*$/.test(str)
          };
          goog.string.isUpperCamelCase = function (str) {
            return /^([A-Z][a-z]*)+$/.test(str)
          };
          goog.string.toCamelCase = function (str) {
            return String(str).replace(/\-([a-z])/g, function (all, match) {
              return match.toUpperCase()
            })
          };
          goog.string.toSelectorCase = function (str) {
            return String(str).replace(/([A-Z])/g, "-$1").toLowerCase()
          };
          goog.string.toTitleCase = function (str, opt_delimiters) {
            var delimiters = goog.isString(opt_delimiters) ? goog.string.regExpEscape(opt_delimiters) : "\\s";
            delimiters = delimiters ? "|[" + delimiters + "]+" : "";
            var regexp = new RegExp("(^" + delimiters + ")([a-z])", "g");
            return str.replace(regexp, function (all, p1, p2) {
              return p1 + p2.toUpperCase()
            })
          };
          goog.string.capitalize = function (str) {
            return String(str.charAt(0)).toUpperCase() + String(str.substr(1)).toLowerCase()
          };
          goog.string.parseInt = function (value) {
            if (isFinite(value)) value = String(value);
            if (goog.isString(value)) return /^\s*-?0x/i.test(value) ? parseInt(value, 16) : parseInt(value, 10);
            return NaN
          };
          goog.string.splitLimit = function (str, separator, limit) {
            var parts = str.split(separator);
            var returnVal = [];
            while (limit > 0 && parts.length) {
              returnVal.push(parts.shift());
              limit--
            }
            if (parts.length) returnVal.push(parts.join(separator));
            return returnVal
          };
          goog.string.lastComponent = function (str, separators) {
            if (!separators) return str; else if (typeof separators == "string") separators = [separators];
            var lastSeparatorIndex = -1;
            for (var i = 0; i < separators.length; i++) {
              if (separators[i] == "") continue;
              var currentSeparatorIndex = str.lastIndexOf(separators[i]);
              if (currentSeparatorIndex > lastSeparatorIndex) lastSeparatorIndex = currentSeparatorIndex
            }
            if (lastSeparatorIndex == -1) return str;
            return str.slice(lastSeparatorIndex + 1)
          };
          goog.string.editDistance = function (a, b) {
            var v0 = [];
            var v1 = [];
            if (a == b) return 0;
            if (!a.length || !b.length) return Math.max(a.length, b.length);
            for (var i = 0; i < b.length + 1; i++) v0[i] = i;
            for (var i = 0; i < a.length; i++) {
              v1[0] = i + 1;
              for (var j = 0; j < b.length; j++) {
                var cost = Number(a[i] != b[j]);
                v1[j + 1] = Math.min(v1[j] + 1, v0[j + 1] + 1, v0[j] + cost)
              }
              for (var j = 0; j < v0.length; j++) v0[j] = v1[j]
            }
            return v1[b.length]
          };
          goog.provide("goog.asserts");
          goog.provide("goog.asserts.AssertionError");
          goog.require("goog.debug.Error");
          goog.require("goog.dom.NodeType");
          goog.require("goog.string");
          goog.define("goog.asserts.ENABLE_ASSERTS", goog.DEBUG);
          goog.asserts.AssertionError = function (messagePattern, messageArgs) {
            messageArgs.unshift(messagePattern);
            goog.debug.Error.call(this, goog.string.subs.apply(null, messageArgs));
            messageArgs.shift();
            this.messagePattern = messagePattern
          };
          goog.inherits(goog.asserts.AssertionError, goog.debug.Error);
          goog.asserts.AssertionError.prototype.name = "AssertionError";
          goog.asserts.DEFAULT_ERROR_HANDLER = function (e) {
            throw e;
          };
          goog.asserts.errorHandler_ = goog.asserts.DEFAULT_ERROR_HANDLER;
          goog.asserts.doAssertFailure_ = function (defaultMessage, defaultArgs, givenMessage, givenArgs) {
            var message = "Assertion failed";
            if (givenMessage) {
              message += ": " + givenMessage;
              var args = givenArgs
            } else if (defaultMessage) {
              message += ": " + defaultMessage;
              args = defaultArgs
            }
            var e = new goog.asserts.AssertionError("" + message, args || []);
            goog.asserts.errorHandler_(e)
          };
          goog.asserts.setErrorHandler = function (errorHandler) {
            if (goog.asserts.ENABLE_ASSERTS) goog.asserts.errorHandler_ = errorHandler
          };
          goog.asserts.assert = function (condition, opt_message, var_args) {
            if (goog.asserts.ENABLE_ASSERTS && !condition) goog.asserts.doAssertFailure_("", null, opt_message, Array.prototype.slice.call(arguments, 2));
            return condition
          };
          goog.asserts.fail = function (opt_message, var_args) {
            if (goog.asserts.ENABLE_ASSERTS) goog.asserts.errorHandler_(new goog.asserts.AssertionError("Failure" + (opt_message ? ": " + opt_message : ""), Array.prototype.slice.call(arguments, 1)))
          };
          goog.asserts.assertNumber = function (value, opt_message, var_args) {
            if (goog.asserts.ENABLE_ASSERTS && !goog.isNumber(value)) goog.asserts.doAssertFailure_("Expected number but got %s: %s.", [goog.typeOf(value), value], opt_message, Array.prototype.slice.call(arguments, 2));
            return value
          };
          goog.asserts.assertString = function (value, opt_message, var_args) {
            if (goog.asserts.ENABLE_ASSERTS && !goog.isString(value)) goog.asserts.doAssertFailure_("Expected string but got %s: %s.", [goog.typeOf(value), value], opt_message, Array.prototype.slice.call(arguments, 2));
            return value
          };
          goog.asserts.assertFunction = function (value, opt_message, var_args) {
            if (goog.asserts.ENABLE_ASSERTS && !goog.isFunction(value)) goog.asserts.doAssertFailure_("Expected function but got %s: %s.", [goog.typeOf(value), value], opt_message, Array.prototype.slice.call(arguments, 2));
            return value
          };
          goog.asserts.assertObject = function (value, opt_message, var_args) {
            if (goog.asserts.ENABLE_ASSERTS && !goog.isObject(value)) goog.asserts.doAssertFailure_("Expected object but got %s: %s.", [goog.typeOf(value), value], opt_message, Array.prototype.slice.call(arguments, 2));
            return value
          };
          goog.asserts.assertArray = function (value, opt_message, var_args) {
            if (goog.asserts.ENABLE_ASSERTS && !goog.isArray(value)) goog.asserts.doAssertFailure_("Expected array but got %s: %s.", [goog.typeOf(value), value], opt_message, Array.prototype.slice.call(arguments, 2));
            return value
          };
          goog.asserts.assertBoolean = function (value, opt_message, var_args) {
            if (goog.asserts.ENABLE_ASSERTS && !goog.isBoolean(value)) goog.asserts.doAssertFailure_("Expected boolean but got %s: %s.", [goog.typeOf(value), value], opt_message, Array.prototype.slice.call(arguments, 2));
            return value
          };
          goog.asserts.assertElement = function (value, opt_message, var_args) {
            if (goog.asserts.ENABLE_ASSERTS && (!goog.isObject(value) || value.nodeType != goog.dom.NodeType.ELEMENT)) goog.asserts.doAssertFailure_("Expected Element but got %s: %s.", [goog.typeOf(value), value], opt_message, Array.prototype.slice.call(arguments, 2));
            return value
          };
          goog.asserts.assertInstanceof = function (value, type, opt_message, var_args) {
            if (goog.asserts.ENABLE_ASSERTS && !(value instanceof type)) goog.asserts.doAssertFailure_("Expected instanceof %s but got %s.", [goog.asserts.getType_(type), goog.asserts.getType_(value)], opt_message, Array.prototype.slice.call(arguments, 3));
            return value
          };
          goog.asserts.assertObjectPrototypeIsIntact = function () {
            for (var key in Object.prototype) goog.asserts.fail(key + " should not be enumerable in Object.prototype.")
          };
          goog.asserts.getType_ = function (value) {
            if (value instanceof Function) return value.displayName || value.name || "unknown type name"; else if (value instanceof Object) return value.constructor.displayName || value.constructor.name || Object.prototype.toString.call(value); else return value === null ? "null" : typeof value
          };
          goog.provide("goog.array");
          goog.require("goog.asserts");
          goog.define("goog.NATIVE_ARRAY_PROTOTYPES", goog.TRUSTED_SITE);
          goog.define("goog.array.ASSUME_NATIVE_FUNCTIONS", false);
          goog.array.peek = function (array) {
            return array[array.length - 1]
          };
          goog.array.last = goog.array.peek;
          goog.array.indexOf = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.indexOf) ? function (arr, obj, opt_fromIndex) {
            goog.asserts.assert(arr.length != null);
            return Array.prototype.indexOf.call(arr, obj, opt_fromIndex)
          } : function (arr, obj, opt_fromIndex) {
            var fromIndex = opt_fromIndex == null ? 0 : opt_fromIndex < 0 ? Math.max(0, arr.length + opt_fromIndex) : opt_fromIndex;
            if (goog.isString(arr)) {
              if (!goog.isString(obj) || obj.length != 1) return -1;
              return arr.indexOf(obj, fromIndex)
            }
            for (var i = fromIndex; i <
            arr.length; i++) if (i in arr && arr[i] === obj) return i;
            return -1
          };
          goog.array.lastIndexOf = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.lastIndexOf) ? function (arr, obj, opt_fromIndex) {
            goog.asserts.assert(arr.length != null);
            var fromIndex = opt_fromIndex == null ? arr.length - 1 : opt_fromIndex;
            return Array.prototype.lastIndexOf.call(arr, obj, fromIndex)
          } : function (arr, obj, opt_fromIndex) {
            var fromIndex = opt_fromIndex == null ? arr.length - 1 : opt_fromIndex;
            if (fromIndex < 0) fromIndex = Math.max(0, arr.length + fromIndex);
            if (goog.isString(arr)) {
              if (!goog.isString(obj) ||
                obj.length != 1) return -1;
              return arr.lastIndexOf(obj, fromIndex)
            }
            for (var i = fromIndex; i >= 0; i--) if (i in arr && arr[i] === obj) return i;
            return -1
          };
          goog.array.forEach = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.forEach) ? function (arr, f, opt_obj) {
            goog.asserts.assert(arr.length != null);
            Array.prototype.forEach.call(arr, f, opt_obj)
          } : function (arr, f, opt_obj) {
            var l = arr.length;
            var arr2 = goog.isString(arr) ? arr.split("") : arr;
            for (var i = 0; i < l; i++) if (i in arr2) f.call(opt_obj, arr2[i], i, arr)
          };
          goog.array.forEachRight = function (arr, f, opt_obj) {
            var l = arr.length;
            var arr2 = goog.isString(arr) ? arr.split("") : arr;
            for (var i = l - 1; i >= 0; --i) if (i in arr2) f.call(opt_obj, arr2[i], i, arr)
          };
          goog.array.filter = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.filter) ? function (arr, f, opt_obj) {
            goog.asserts.assert(arr.length != null);
            return Array.prototype.filter.call(arr, f, opt_obj)
          } : function (arr, f, opt_obj) {
            var l = arr.length;
            var res = [];
            var resLength = 0;
            var arr2 = goog.isString(arr) ? arr.split("") : arr;
            for (var i = 0; i < l; i++) if (i in arr2) {
              var val = arr2[i];
              if (f.call(opt_obj, val, i, arr)) res[resLength++] = val
            }
            return res
          };
          goog.array.map = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.map) ? function (arr, f, opt_obj) {
            goog.asserts.assert(arr.length != null);
            return Array.prototype.map.call(arr, f, opt_obj)
          } : function (arr, f, opt_obj) {
            var l = arr.length;
            var res = new Array(l);
            var arr2 = goog.isString(arr) ? arr.split("") : arr;
            for (var i = 0; i < l; i++) if (i in arr2) res[i] = f.call(opt_obj, arr2[i], i, arr);
            return res
          };
          goog.array.reduce = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.reduce) ? function (arr, f, val, opt_obj) {
            goog.asserts.assert(arr.length != null);
            if (opt_obj) f = goog.bind(f, opt_obj);
            return Array.prototype.reduce.call(arr, f, val)
          } : function (arr, f, val, opt_obj) {
            var rval = val;
            goog.array.forEach(arr, function (val, index) {
              rval = f.call(opt_obj, rval, val, index, arr)
            });
            return rval
          };
          goog.array.reduceRight = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.reduceRight) ? function (arr, f, val, opt_obj) {
            goog.asserts.assert(arr.length != null);
            goog.asserts.assert(f != null);
            if (opt_obj) f = goog.bind(f, opt_obj);
            return Array.prototype.reduceRight.call(arr, f, val)
          } : function (arr, f, val, opt_obj) {
            var rval = val;
            goog.array.forEachRight(arr, function (val, index) {
              rval = f.call(opt_obj, rval, val, index, arr)
            });
            return rval
          };
          goog.array.some = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.some) ? function (arr, f, opt_obj) {
            goog.asserts.assert(arr.length != null);
            return Array.prototype.some.call(arr, f, opt_obj)
          } : function (arr, f, opt_obj) {
            var l = arr.length;
            var arr2 = goog.isString(arr) ? arr.split("") : arr;
            for (var i = 0; i < l; i++) if (i in arr2 && f.call(opt_obj, arr2[i], i, arr)) return true;
            return false
          };
          goog.array.every = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.every) ? function (arr, f, opt_obj) {
            goog.asserts.assert(arr.length != null);
            return Array.prototype.every.call(arr, f, opt_obj)
          } : function (arr, f, opt_obj) {
            var l = arr.length;
            var arr2 = goog.isString(arr) ? arr.split("") : arr;
            for (var i = 0; i < l; i++) if (i in arr2 && !f.call(opt_obj, arr2[i], i, arr)) return false;
            return true
          };
          goog.array.count = function (arr, f, opt_obj) {
            var count = 0;
            goog.array.forEach(arr, function (element, index, arr) {
              if (f.call(opt_obj, element, index, arr)) ++count
            }, opt_obj);
            return count
          };
          goog.array.find = function (arr, f, opt_obj) {
            var i = goog.array.findIndex(arr, f, opt_obj);
            return i < 0 ? null : goog.isString(arr) ? arr.charAt(i) : arr[i]
          };
          goog.array.findIndex = function (arr, f, opt_obj) {
            var l = arr.length;
            var arr2 = goog.isString(arr) ? arr.split("") : arr;
            for (var i = 0; i < l; i++) if (i in arr2 && f.call(opt_obj, arr2[i], i, arr)) return i;
            return -1
          };
          goog.array.findRight = function (arr, f, opt_obj) {
            var i = goog.array.findIndexRight(arr, f, opt_obj);
            return i < 0 ? null : goog.isString(arr) ? arr.charAt(i) : arr[i]
          };
          goog.array.findIndexRight = function (arr, f, opt_obj) {
            var l = arr.length;
            var arr2 = goog.isString(arr) ? arr.split("") : arr;
            for (var i = l - 1; i >= 0; i--) if (i in arr2 && f.call(opt_obj, arr2[i], i, arr)) return i;
            return -1
          };
          goog.array.contains = function (arr, obj) {
            return goog.array.indexOf(arr, obj) >= 0
          };
          goog.array.isEmpty = function (arr) {
            return arr.length == 0
          };
          goog.array.clear = function (arr) {
            if (!goog.isArray(arr)) for (var i = arr.length - 1; i >= 0; i--) delete arr[i];
            arr.length = 0
          };
          goog.array.insert = function (arr, obj) {
            if (!goog.array.contains(arr, obj)) arr.push(obj)
          };
          goog.array.insertAt = function (arr, obj, opt_i) {
            goog.array.splice(arr, opt_i, 0, obj)
          };
          goog.array.insertArrayAt = function (arr, elementsToAdd, opt_i) {
            goog.partial(goog.array.splice, arr, opt_i, 0).apply(null, elementsToAdd)
          };
          goog.array.insertBefore = function (arr, obj, opt_obj2) {
            var i;
            if (arguments.length == 2 || (i = goog.array.indexOf(arr, opt_obj2)) < 0) arr.push(obj); else goog.array.insertAt(arr, obj, i)
          };
          goog.array.remove = function (arr, obj) {
            var i = goog.array.indexOf(arr, obj);
            var rv;
            if (rv = i >= 0) goog.array.removeAt(arr, i);
            return rv
          };
          goog.array.removeLast = function (arr, obj) {
            var i = goog.array.lastIndexOf(arr, obj);
            if (i >= 0) {
              goog.array.removeAt(arr, i);
              return true
            }
            return false
          };
          goog.array.removeAt = function (arr, i) {
            goog.asserts.assert(arr.length != null);
            return Array.prototype.splice.call(arr, i, 1).length == 1
          };
          goog.array.removeIf = function (arr, f, opt_obj) {
            var i = goog.array.findIndex(arr, f, opt_obj);
            if (i >= 0) {
              goog.array.removeAt(arr, i);
              return true
            }
            return false
          };
          goog.array.removeAllIf = function (arr, f, opt_obj) {
            var removedCount = 0;
            goog.array.forEachRight(arr, function (val, index) {
              if (f.call(opt_obj, val, index, arr)) if (goog.array.removeAt(arr, index)) removedCount++
            });
            return removedCount
          };
          goog.array.concat = function (var_args) {
            return Array.prototype.concat.apply([], arguments)
          };
          goog.array.join = function (var_args) {
            return Array.prototype.concat.apply([], arguments)
          };
          goog.array.toArray = function (object) {
            var length = object.length;
            if (length > 0) {
              var rv = new Array(length);
              for (var i = 0; i < length; i++) rv[i] = object[i];
              return rv
            }
            return []
          };
          goog.array.clone = goog.array.toArray;
          goog.array.extend = function (arr1, var_args) {
            for (var i = 1; i < arguments.length; i++) {
              var arr2 = arguments[i];
              if (goog.isArrayLike(arr2)) {
                var len1 = arr1.length || 0;
                var len2 = arr2.length || 0;
                arr1.length = len1 + len2;
                for (var j = 0; j < len2; j++) arr1[len1 + j] = arr2[j]
              } else arr1.push(arr2)
            }
          };
          goog.array.splice = function (arr, index, howMany, var_args) {
            goog.asserts.assert(arr.length != null);
            return Array.prototype.splice.apply(arr, goog.array.slice(arguments, 1))
          };
          goog.array.slice = function (arr, start, opt_end) {
            goog.asserts.assert(arr.length != null);
            if (arguments.length <= 2) return Array.prototype.slice.call(arr, start); else return Array.prototype.slice.call(arr, start, opt_end)
          };
          goog.array.removeDuplicates = function (arr, opt_rv, opt_hashFn) {
            var returnArray = opt_rv || arr;
            var defaultHashFn = function (item) {
              return goog.isObject(item) ? "o" + goog.getUid(item) : (typeof item).charAt(0) + item
            };
            var hashFn = opt_hashFn || defaultHashFn;
            var seen = {}, cursorInsert = 0, cursorRead = 0;
            while (cursorRead < arr.length) {
              var current = arr[cursorRead++];
              var key = hashFn(current);
              if (!Object.prototype.hasOwnProperty.call(seen, key)) {
                seen[key] = true;
                returnArray[cursorInsert++] = current
              }
            }
            returnArray.length = cursorInsert
          };
          goog.array.binarySearch = function (arr, target, opt_compareFn) {
            return goog.array.binarySearch_(arr, opt_compareFn || goog.array.defaultCompare, false, target)
          };
          goog.array.binarySelect = function (arr, evaluator, opt_obj) {
            return goog.array.binarySearch_(arr, evaluator, true, undefined, opt_obj)
          };
          goog.array.binarySearch_ = function (arr, compareFn, isEvaluator, opt_target, opt_selfObj) {
            var left = 0;
            var right = arr.length;
            var found;
            while (left < right) {
              var middle = left + right >> 1;
              var compareResult;
              if (isEvaluator) compareResult = compareFn.call(opt_selfObj, arr[middle], middle, arr); else compareResult = compareFn(opt_target, arr[middle]);
              if (compareResult > 0) left = middle + 1; else {
                right = middle;
                found = !compareResult
              }
            }
            return found ? left : ~left
          };
          goog.array.sort = function (arr, opt_compareFn) {
            arr.sort(opt_compareFn || goog.array.defaultCompare)
          };
          goog.array.stableSort = function (arr, opt_compareFn) {
            var compArr = new Array(arr.length);
            for (var i = 0; i < arr.length; i++) compArr[i] = {index: i, value: arr[i]};
            var valueCompareFn = opt_compareFn || goog.array.defaultCompare;

            function stableCompareFn(obj1, obj2) {
              return valueCompareFn(obj1.value, obj2.value) || obj1.index - obj2.index
            }

            goog.array.sort(compArr, stableCompareFn);
            for (var i = 0; i < arr.length; i++) arr[i] = compArr[i].value
          };
          goog.array.sortByKey = function (arr, keyFn, opt_compareFn) {
            var keyCompareFn = opt_compareFn || goog.array.defaultCompare;
            goog.array.sort(arr, function (a, b) {
              return keyCompareFn(keyFn(a), keyFn(b))
            })
          };
          goog.array.sortObjectsByKey = function (arr, key, opt_compareFn) {
            goog.array.sortByKey(arr, function (obj) {
              return obj[key]
            }, opt_compareFn)
          };
          goog.array.isSorted = function (arr, opt_compareFn, opt_strict) {
            var compare = opt_compareFn || goog.array.defaultCompare;
            for (var i = 1; i < arr.length; i++) {
              var compareResult = compare(arr[i - 1], arr[i]);
              if (compareResult > 0 || compareResult == 0 && opt_strict) return false
            }
            return true
          };
          goog.array.equals = function (arr1, arr2, opt_equalsFn) {
            if (!goog.isArrayLike(arr1) || !goog.isArrayLike(arr2) || arr1.length != arr2.length) return false;
            var l = arr1.length;
            var equalsFn = opt_equalsFn || goog.array.defaultCompareEquality;
            for (var i = 0; i < l; i++) if (!equalsFn(arr1[i], arr2[i])) return false;
            return true
          };
          goog.array.compare3 = function (arr1, arr2, opt_compareFn) {
            var compare = opt_compareFn || goog.array.defaultCompare;
            var l = Math.min(arr1.length, arr2.length);
            for (var i = 0; i < l; i++) {
              var result = compare(arr1[i], arr2[i]);
              if (result != 0) return result
            }
            return goog.array.defaultCompare(arr1.length, arr2.length)
          };
          goog.array.defaultCompare = function (a, b) {
            return a > b ? 1 : a < b ? -1 : 0
          };
          goog.array.inverseDefaultCompare = function (a, b) {
            return -goog.array.defaultCompare(a, b)
          };
          goog.array.defaultCompareEquality = function (a, b) {
            return a === b
          };
          goog.array.binaryInsert = function (array, value, opt_compareFn) {
            var index = goog.array.binarySearch(array, value, opt_compareFn);
            if (index < 0) {
              goog.array.insertAt(array, value, -(index + 1));
              return true
            }
            return false
          };
          goog.array.binaryRemove = function (array, value, opt_compareFn) {
            var index = goog.array.binarySearch(array, value, opt_compareFn);
            return index >= 0 ? goog.array.removeAt(array, index) : false
          };
          goog.array.bucket = function (array, sorter, opt_obj) {
            var buckets = {};
            for (var i = 0; i < array.length; i++) {
              var value = array[i];
              var key = sorter.call(opt_obj, value, i, array);
              if (goog.isDef(key)) {
                var bucket = buckets[key] || (buckets[key] = []);
                bucket.push(value)
              }
            }
            return buckets
          };
          goog.array.toObject = function (arr, keyFunc, opt_obj) {
            var ret = {};
            goog.array.forEach(arr, function (element, index) {
              ret[keyFunc.call(opt_obj, element, index, arr)] = element
            });
            return ret
          };
          goog.array.range = function (startOrEnd, opt_end, opt_step) {
            var array = [];
            var start = 0;
            var end = startOrEnd;
            var step = opt_step || 1;
            if (opt_end !== undefined) {
              start = startOrEnd;
              end = opt_end
            }
            if (step * (end - start) < 0) return [];
            if (step > 0) for (var i = start; i < end; i += step) array.push(i); else for (var i = start; i > end; i += step) array.push(i);
            return array
          };
          goog.array.repeat = function (value, n) {
            var array = [];
            for (var i = 0; i < n; i++) array[i] = value;
            return array
          };
          goog.array.flatten = function (var_args) {
            var CHUNK_SIZE = 8192;
            var result = [];
            for (var i = 0; i < arguments.length; i++) {
              var element = arguments[i];
              if (goog.isArray(element)) for (var c = 0; c < element.length; c += CHUNK_SIZE) {
                var chunk = goog.array.slice(element, c, c + CHUNK_SIZE);
                var recurseResult = goog.array.flatten.apply(null, chunk);
                for (var r = 0; r < recurseResult.length; r++) result.push(recurseResult[r])
              } else result.push(element)
            }
            return result
          };
          goog.array.rotate = function (array, n) {
            goog.asserts.assert(array.length != null);
            if (array.length) {
              n %= array.length;
              if (n > 0) Array.prototype.unshift.apply(array, array.splice(-n, n)); else if (n < 0) Array.prototype.push.apply(array, array.splice(0, -n))
            }
            return array
          };
          goog.array.moveItem = function (arr, fromIndex, toIndex) {
            goog.asserts.assert(fromIndex >= 0 && fromIndex < arr.length);
            goog.asserts.assert(toIndex >= 0 && toIndex < arr.length);
            var removedItems = Array.prototype.splice.call(arr, fromIndex, 1);
            Array.prototype.splice.call(arr, toIndex, 0, removedItems[0])
          };
          goog.array.zip = function (var_args) {
            if (!arguments.length) return [];
            var result = [];
            var minLen = arguments[0].length;
            for (var i = 1; i < arguments.length; i++) if (arguments[i].length < minLen) minLen = arguments[i].length;
            for (var i = 0; i < minLen; i++) {
              var value = [];
              for (var j = 0; j < arguments.length; j++) value.push(arguments[j][i]);
              result.push(value)
            }
            return result
          };
          goog.array.shuffle = function (arr, opt_randFn) {
            var randFn = opt_randFn || Math.random;
            for (var i = arr.length - 1; i > 0; i--) {
              var j = Math.floor(randFn() * (i + 1));
              var tmp = arr[i];
              arr[i] = arr[j];
              arr[j] = tmp
            }
          };
          goog.array.copyByIndex = function (arr, index_arr) {
            var result = [];
            goog.array.forEach(index_arr, function (index) {
              result.push(arr[index])
            });
            return result
          };
          goog.array.concatMap = function (arr, f, opt_obj) {
            return goog.array.concat.apply([], goog.array.map(arr, f, opt_obj))
          };
          goog.provide("goog.labs.userAgent.util");
          goog.require("goog.string");
          goog.labs.userAgent.util.getNativeUserAgentString_ = function () {
            var navigator = goog.labs.userAgent.util.getNavigator_();
            if (navigator) {
              var userAgent = navigator.userAgent;
              if (userAgent) return userAgent
            }
            return ""
          };
          goog.labs.userAgent.util.getNavigator_ = function () {
            return goog.global.navigator
          };
          goog.labs.userAgent.util.userAgent_ = goog.labs.userAgent.util.getNativeUserAgentString_();
          goog.labs.userAgent.util.setUserAgent = function (opt_userAgent) {
            goog.labs.userAgent.util.userAgent_ = opt_userAgent || goog.labs.userAgent.util.getNativeUserAgentString_()
          };
          goog.labs.userAgent.util.getUserAgent = function () {
            return goog.labs.userAgent.util.userAgent_
          };
          goog.labs.userAgent.util.matchUserAgent = function (str) {
            var userAgent = goog.labs.userAgent.util.getUserAgent();
            return goog.string.contains(userAgent, str)
          };
          goog.labs.userAgent.util.matchUserAgentIgnoreCase = function (str) {
            var userAgent = goog.labs.userAgent.util.getUserAgent();
            return goog.string.caseInsensitiveContains(userAgent, str)
          };
          goog.labs.userAgent.util.extractVersionTuples = function (userAgent) {
            var versionRegExp = new RegExp("(\\w[\\w ]+)" + "/" + "([^\\s]+)" + "\\s*" + "(?:\\((.*?)\\))?", "g");
            var data = [];
            var match;
            while (match = versionRegExp.exec(userAgent)) data.push([match[1], match[2], match[3] || undefined]);
            return data
          };
          goog.provide("goog.object");
          goog.object.is = function (v, v2) {
            if (v === v2) return v !== 0 || 1 / v === 1 / v2;
            return v !== v && v2 !== v2
          };
          goog.object.forEach = function (obj, f, opt_obj) {
            for (var key in obj) f.call(opt_obj, obj[key], key, obj)
          };
          goog.object.filter = function (obj, f, opt_obj) {
            var res = {};
            for (var key in obj) if (f.call(opt_obj, obj[key], key, obj)) res[key] = obj[key];
            return res
          };
          goog.object.map = function (obj, f, opt_obj) {
            var res = {};
            for (var key in obj) res[key] = f.call(opt_obj, obj[key], key, obj);
            return res
          };
          goog.object.some = function (obj, f, opt_obj) {
            for (var key in obj) if (f.call(opt_obj, obj[key], key, obj)) return true;
            return false
          };
          goog.object.every = function (obj, f, opt_obj) {
            for (var key in obj) if (!f.call(opt_obj, obj[key], key, obj)) return false;
            return true
          };
          goog.object.getCount = function (obj) {
            var rv = 0;
            for (var key in obj) rv++;
            return rv
          };
          goog.object.getAnyKey = function (obj) {
            for (var key in obj) return key
          };
          goog.object.getAnyValue = function (obj) {
            for (var key in obj) return obj[key]
          };
          goog.object.contains = function (obj, val) {
            return goog.object.containsValue(obj, val)
          };
          goog.object.getValues = function (obj) {
            var res = [];
            var i = 0;
            for (var key in obj) res[i++] = obj[key];
            return res
          };
          goog.object.getKeys = function (obj) {
            var res = [];
            var i = 0;
            for (var key in obj) res[i++] = key;
            return res
          };
          goog.object.getValueByKeys = function (obj, var_args) {
            var isArrayLike = goog.isArrayLike(var_args);
            var keys = isArrayLike ? var_args : arguments;
            for (var i = isArrayLike ? 0 : 1; i < keys.length; i++) {
              if (obj == null) return undefined;
              obj = obj[keys[i]]
            }
            return obj
          };
          goog.object.containsKey = function (obj, key) {
            return obj !== null && key in obj
          };
          goog.object.containsValue = function (obj, val) {
            for (var key in obj) if (obj[key] == val) return true;
            return false
          };
          goog.object.findKey = function (obj, f, opt_this) {
            for (var key in obj) if (f.call(opt_this, obj[key], key, obj)) return key;
            return undefined
          };
          goog.object.findValue = function (obj, f, opt_this) {
            var key = goog.object.findKey(obj, f, opt_this);
            return key && obj[key]
          };
          goog.object.isEmpty = function (obj) {
            for (var key in obj) return false;
            return true
          };
          goog.object.clear = function (obj) {
            for (var i in obj) delete obj[i]
          };
          goog.object.remove = function (obj, key) {
            var rv;
            if (rv = key in obj) delete obj[key];
            return rv
          };
          goog.object.add = function (obj, key, val) {
            if (obj !== null && key in obj) throw new Error('The object already contains the key "' + key + '"');
            goog.object.set(obj, key, val)
          };
          goog.object.get = function (obj, key, opt_val) {
            if (obj !== null && key in obj) return obj[key];
            return opt_val
          };
          goog.object.set = function (obj, key, value) {
            obj[key] = value
          };
          goog.object.setIfUndefined = function (obj, key, value) {
            return key in obj ? obj[key] : obj[key] = value
          };
          goog.object.setWithReturnValueIfNotSet = function (obj, key, f) {
            if (key in obj) return obj[key];
            var val = f();
            obj[key] = val;
            return val
          };
          goog.object.equals = function (a, b) {
            for (var k in a) if (!(k in b) || a[k] !== b[k]) return false;
            for (var k in b) if (!(k in a)) return false;
            return true
          };
          goog.object.clone = function (obj) {
            var res = {};
            for (var key in obj) res[key] = obj[key];
            return res
          };
          goog.object.unsafeClone = function (obj) {
            var type = goog.typeOf(obj);
            if (type == "object" || type == "array") {
              if (goog.isFunction(obj.clone)) return obj.clone();
              var clone = type == "array" ? [] : {};
              for (var key in obj) clone[key] = goog.object.unsafeClone(obj[key]);
              return clone
            }
            return obj
          };
          goog.object.transpose = function (obj) {
            var transposed = {};
            for (var key in obj) transposed[obj[key]] = key;
            return transposed
          };
          goog.object.PROTOTYPE_FIELDS_ = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
          goog.object.extend = function (target, var_args) {
            var key, source;
            for (var i = 1; i < arguments.length; i++) {
              source = arguments[i];
              for (key in source) target[key] = source[key];
              for (var j = 0; j < goog.object.PROTOTYPE_FIELDS_.length; j++) {
                key = goog.object.PROTOTYPE_FIELDS_[j];
                if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key]
              }
            }
          };
          goog.object.create = function (var_args) {
            var argLength = arguments.length;
            if (argLength == 1 && goog.isArray(arguments[0])) return goog.object.create.apply(null, arguments[0]);
            if (argLength % 2) throw new Error("Uneven number of arguments");
            var rv = {};
            for (var i = 0; i < argLength; i += 2) rv[arguments[i]] = arguments[i + 1];
            return rv
          };
          goog.object.createSet = function (var_args) {
            var argLength = arguments.length;
            if (argLength == 1 && goog.isArray(arguments[0])) return goog.object.createSet.apply(null, arguments[0]);
            var rv = {};
            for (var i = 0; i < argLength; i++) rv[arguments[i]] = true;
            return rv
          };
          goog.object.createImmutableView = function (obj) {
            var result = obj;
            if (Object.isFrozen && !Object.isFrozen(obj)) {
              result = Object.create(obj);
              Object.freeze(result)
            }
            return result
          };
          goog.object.isImmutableView = function (obj) {
            return !!Object.isFrozen && Object.isFrozen(obj)
          };
          goog.object.getAllPropertyNames = function (obj, opt_includeObjectPrototype, opt_includeFunctionPrototype) {
            if (!obj) return [];
            if (!Object.getOwnPropertyNames || !Object.getPrototypeOf) return goog.object.getKeys(obj);
            var visitedSet = {};
            var proto = obj;
            while (proto && (proto !== Object.prototype || !!opt_includeObjectPrototype) && (proto !== Function.prototype || !!opt_includeFunctionPrototype)) {
              var names = Object.getOwnPropertyNames(proto);
              for (var i = 0; i < names.length; i++) visitedSet[names[i]] = true;
              proto = Object.getPrototypeOf(proto)
            }
            return goog.object.getKeys(visitedSet)
          };
          goog.provide("goog.labs.userAgent.browser");
          goog.require("goog.array");
          goog.require("goog.labs.userAgent.util");
          goog.require("goog.object");
          goog.require("goog.string");
          goog.labs.userAgent.browser.matchOpera_ = function () {
            return goog.labs.userAgent.util.matchUserAgent("Opera")
          };
          goog.labs.userAgent.browser.matchIE_ = function () {
            return goog.labs.userAgent.util.matchUserAgent("Trident") || goog.labs.userAgent.util.matchUserAgent("MSIE")
          };
          goog.labs.userAgent.browser.matchEdge_ = function () {
            return goog.labs.userAgent.util.matchUserAgent("Edge")
          };
          goog.labs.userAgent.browser.matchFirefox_ = function () {
            return goog.labs.userAgent.util.matchUserAgent("Firefox")
          };
          goog.labs.userAgent.browser.matchSafari_ = function () {
            return goog.labs.userAgent.util.matchUserAgent("Safari") && !(goog.labs.userAgent.browser.matchChrome_() || goog.labs.userAgent.browser.matchCoast_() || goog.labs.userAgent.browser.matchOpera_() || goog.labs.userAgent.browser.matchEdge_() || goog.labs.userAgent.browser.isSilk() || goog.labs.userAgent.util.matchUserAgent("Android"))
          };
          goog.labs.userAgent.browser.matchCoast_ = function () {
            return goog.labs.userAgent.util.matchUserAgent("Coast")
          };
          goog.labs.userAgent.browser.matchIosWebview_ = function () {
            return (goog.labs.userAgent.util.matchUserAgent("iPad") || goog.labs.userAgent.util.matchUserAgent("iPhone")) && !goog.labs.userAgent.browser.matchSafari_() && !goog.labs.userAgent.browser.matchChrome_() && !goog.labs.userAgent.browser.matchCoast_() && goog.labs.userAgent.util.matchUserAgent("AppleWebKit")
          };
          goog.labs.userAgent.browser.matchChrome_ = function () {
            return (goog.labs.userAgent.util.matchUserAgent("Chrome") || goog.labs.userAgent.util.matchUserAgent("CriOS")) && !goog.labs.userAgent.browser.matchEdge_()
          };
          goog.labs.userAgent.browser.matchAndroidBrowser_ = function () {
            return goog.labs.userAgent.util.matchUserAgent("Android") && !(goog.labs.userAgent.browser.isChrome() || goog.labs.userAgent.browser.isFirefox() || goog.labs.userAgent.browser.isOpera() || goog.labs.userAgent.browser.isSilk())
          };
          goog.labs.userAgent.browser.isOpera = goog.labs.userAgent.browser.matchOpera_;
          goog.labs.userAgent.browser.isIE = goog.labs.userAgent.browser.matchIE_;
          goog.labs.userAgent.browser.isEdge = goog.labs.userAgent.browser.matchEdge_;
          goog.labs.userAgent.browser.isFirefox = goog.labs.userAgent.browser.matchFirefox_;
          goog.labs.userAgent.browser.isSafari = goog.labs.userAgent.browser.matchSafari_;
          goog.labs.userAgent.browser.isCoast = goog.labs.userAgent.browser.matchCoast_;
          goog.labs.userAgent.browser.isIosWebview = goog.labs.userAgent.browser.matchIosWebview_;
          goog.labs.userAgent.browser.isChrome = goog.labs.userAgent.browser.matchChrome_;
          goog.labs.userAgent.browser.isAndroidBrowser = goog.labs.userAgent.browser.matchAndroidBrowser_;
          goog.labs.userAgent.browser.isSilk = function () {
            return goog.labs.userAgent.util.matchUserAgent("Silk")
          };
          goog.labs.userAgent.browser.getVersion = function () {
            var userAgentString = goog.labs.userAgent.util.getUserAgent();
            if (goog.labs.userAgent.browser.isIE()) return goog.labs.userAgent.browser.getIEVersion_(userAgentString);
            var versionTuples = goog.labs.userAgent.util.extractVersionTuples(userAgentString);
            var versionMap = {};
            goog.array.forEach(versionTuples, function (tuple) {
              var key = tuple[0];
              var value = tuple[1];
              versionMap[key] = value
            });
            var versionMapHasKey = goog.partial(goog.object.containsKey, versionMap);

            function lookUpValueWithKeys(keys) {
              var key =
                goog.array.find(keys, versionMapHasKey);
              return versionMap[key] || ""
            }

            if (goog.labs.userAgent.browser.isOpera()) return lookUpValueWithKeys(["Version", "Opera"]);
            if (goog.labs.userAgent.browser.isEdge()) return lookUpValueWithKeys(["Edge"]);
            if (goog.labs.userAgent.browser.isChrome()) return lookUpValueWithKeys(["Chrome", "CriOS"]);
            var tuple = versionTuples[2];
            return tuple && tuple[1] || ""
          };
          goog.labs.userAgent.browser.isVersionOrHigher = function (version) {
            return goog.string.compareVersions(goog.labs.userAgent.browser.getVersion(), version) >= 0
          };
          goog.labs.userAgent.browser.getIEVersion_ = function (userAgent) {
            var rv = /rv: *([\d\.]*)/.exec(userAgent);
            if (rv && rv[1]) return rv[1];
            var version = "";
            var msie = /MSIE +([\d\.]+)/.exec(userAgent);
            if (msie && msie[1]) {
              var tridentVersion = /Trident\/(\d.\d)/.exec(userAgent);
              if (msie[1] == "7.0") if (tridentVersion && tridentVersion[1]) switch (tridentVersion[1]) {
                case "4.0":
                  version = "8.0";
                  break;
                case "5.0":
                  version = "9.0";
                  break;
                case "6.0":
                  version = "10.0";
                  break;
                case "7.0":
                  version = "11.0";
                  break
              } else version = "7.0"; else version = msie[1]
            }
            return version
          };
          goog.provide("goog.labs.userAgent.engine");
          goog.require("goog.array");
          goog.require("goog.labs.userAgent.util");
          goog.require("goog.string");
          goog.labs.userAgent.engine.isPresto = function () {
            return goog.labs.userAgent.util.matchUserAgent("Presto")
          };
          goog.labs.userAgent.engine.isTrident = function () {
            return goog.labs.userAgent.util.matchUserAgent("Trident") || goog.labs.userAgent.util.matchUserAgent("MSIE")
          };
          goog.labs.userAgent.engine.isEdge = function () {
            return goog.labs.userAgent.util.matchUserAgent("Edge")
          };
          goog.labs.userAgent.engine.isWebKit = function () {
            return goog.labs.userAgent.util.matchUserAgentIgnoreCase("WebKit") && !goog.labs.userAgent.engine.isEdge()
          };
          goog.labs.userAgent.engine.isGecko = function () {
            return goog.labs.userAgent.util.matchUserAgent("Gecko") && !goog.labs.userAgent.engine.isWebKit() && !goog.labs.userAgent.engine.isTrident() && !goog.labs.userAgent.engine.isEdge()
          };
          goog.labs.userAgent.engine.getVersion = function () {
            var userAgentString = goog.labs.userAgent.util.getUserAgent();
            if (userAgentString) {
              var tuples = goog.labs.userAgent.util.extractVersionTuples(userAgentString);
              var engineTuple = goog.labs.userAgent.engine.getEngineTuple_(tuples);
              if (engineTuple) {
                if (engineTuple[0] == "Gecko") return goog.labs.userAgent.engine.getVersionForKey_(tuples, "Firefox");
                return engineTuple[1]
              }
              var browserTuple = tuples[0];
              var info;
              if (browserTuple && (info = browserTuple[2])) {
                var match = /Trident\/([^\s;]+)/.exec(info);
                if (match) return match[1]
              }
            }
            return ""
          };
          goog.labs.userAgent.engine.getEngineTuple_ = function (tuples) {
            if (!goog.labs.userAgent.engine.isEdge()) return tuples[1];
            for (var i = 0; i < tuples.length; i++) {
              var tuple = tuples[i];
              if (tuple[0] == "Edge") return tuple
            }
          };
          goog.labs.userAgent.engine.isVersionOrHigher = function (version) {
            return goog.string.compareVersions(goog.labs.userAgent.engine.getVersion(), version) >= 0
          };
          goog.labs.userAgent.engine.getVersionForKey_ = function (tuples, key) {
            var pair = goog.array.find(tuples, function (pair) {
              return key == pair[0]
            });
            return pair && pair[1] || ""
          };
          goog.provide("goog.labs.userAgent.platform");
          goog.require("goog.labs.userAgent.util");
          goog.require("goog.string");
          goog.labs.userAgent.platform.isAndroid = function () {
            return goog.labs.userAgent.util.matchUserAgent("Android")
          };
          goog.labs.userAgent.platform.isIpod = function () {
            return goog.labs.userAgent.util.matchUserAgent("iPod")
          };
          goog.labs.userAgent.platform.isIphone = function () {
            return goog.labs.userAgent.util.matchUserAgent("iPhone") && !goog.labs.userAgent.util.matchUserAgent("iPod") && !goog.labs.userAgent.util.matchUserAgent("iPad")
          };
          goog.labs.userAgent.platform.isIpad = function () {
            return goog.labs.userAgent.util.matchUserAgent("iPad")
          };
          goog.labs.userAgent.platform.isIos = function () {
            return goog.labs.userAgent.platform.isIphone() || goog.labs.userAgent.platform.isIpad() || goog.labs.userAgent.platform.isIpod()
          };
          goog.labs.userAgent.platform.isMacintosh = function () {
            return goog.labs.userAgent.util.matchUserAgent("Macintosh")
          };
          goog.labs.userAgent.platform.isLinux = function () {
            return goog.labs.userAgent.util.matchUserAgent("Linux")
          };
          goog.labs.userAgent.platform.isWindows = function () {
            return goog.labs.userAgent.util.matchUserAgent("Windows")
          };
          goog.labs.userAgent.platform.isChromeOS = function () {
            return goog.labs.userAgent.util.matchUserAgent("CrOS")
          };
          goog.labs.userAgent.platform.getVersion = function () {
            var userAgentString = goog.labs.userAgent.util.getUserAgent();
            var version = "", re;
            if (goog.labs.userAgent.platform.isWindows()) {
              re = /Windows (?:NT|Phone) ([0-9.]+)/;
              var match = re.exec(userAgentString);
              if (match) version = match[1]; else version = "0.0"
            } else if (goog.labs.userAgent.platform.isIos()) {
              re = /(?:iPhone|iPod|iPad|CPU)\s+OS\s+(\S+)/;
              var match = re.exec(userAgentString);
              version = match && match[1].replace(/_/g, ".")
            } else if (goog.labs.userAgent.platform.isMacintosh()) {
              re =
                /Mac OS X ([0-9_.]+)/;
              var match = re.exec(userAgentString);
              version = match ? match[1].replace(/_/g, ".") : "10"
            } else if (goog.labs.userAgent.platform.isAndroid()) {
              re = /Android\s+([^\);]+)(\)|;)/;
              var match = re.exec(userAgentString);
              version = match && match[1]
            } else if (goog.labs.userAgent.platform.isChromeOS()) {
              re = /(?:CrOS\s+(?:i686|x86_64)\s+([0-9.]+))/;
              var match = re.exec(userAgentString);
              version = match && match[1]
            }
            return version || ""
          };
          goog.labs.userAgent.platform.isVersionOrHigher = function (version) {
            return goog.string.compareVersions(goog.labs.userAgent.platform.getVersion(), version) >= 0
          };
          goog.provide("goog.reflect");
          goog.reflect.object = function (type, object) {
            return object
          };
          goog.reflect.objectProperty = function (prop, object) {
            return prop
          };
          goog.reflect.sinkValue = function (x) {
            goog.reflect.sinkValue[" "](x);
            return x
          };
          goog.reflect.sinkValue[" "] = goog.nullFunction;
          goog.reflect.canAccessProperty = function (obj, prop) {
            try {
              goog.reflect.sinkValue(obj[prop]);
              return true
            } catch (e) {
            }
            return false
          };
          goog.reflect.cache = function (cacheObj, key, valueFn, opt_keyFn) {
            var storedKey = opt_keyFn ? opt_keyFn(key) : key;
            if (Object.prototype.hasOwnProperty.call(cacheObj, storedKey)) return cacheObj[storedKey];
            return cacheObj[storedKey] = valueFn(key)
          };
          goog.provide("goog.userAgent");
          goog.require("goog.labs.userAgent.browser");
          goog.require("goog.labs.userAgent.engine");
          goog.require("goog.labs.userAgent.platform");
          goog.require("goog.labs.userAgent.util");
          goog.require("goog.reflect");
          goog.require("goog.string");
          goog.define("goog.userAgent.ASSUME_IE", false);
          goog.define("goog.userAgent.ASSUME_EDGE", false);
          goog.define("goog.userAgent.ASSUME_GECKO", false);
          goog.define("goog.userAgent.ASSUME_WEBKIT", false);
          goog.define("goog.userAgent.ASSUME_MOBILE_WEBKIT", false);
          goog.define("goog.userAgent.ASSUME_OPERA", false);
          goog.define("goog.userAgent.ASSUME_ANY_VERSION", false);
          goog.userAgent.BROWSER_KNOWN_ = goog.userAgent.ASSUME_IE || goog.userAgent.ASSUME_EDGE || goog.userAgent.ASSUME_GECKO || goog.userAgent.ASSUME_MOBILE_WEBKIT || goog.userAgent.ASSUME_WEBKIT || goog.userAgent.ASSUME_OPERA;
          goog.userAgent.getUserAgentString = function () {
            return goog.labs.userAgent.util.getUserAgent()
          };
          goog.userAgent.getNavigator = function () {
            return goog.global["navigator"] || null
          };
          goog.userAgent.OPERA = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_OPERA : goog.labs.userAgent.browser.isOpera();
          goog.userAgent.IE = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_IE : goog.labs.userAgent.browser.isIE();
          goog.userAgent.EDGE = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_EDGE : goog.labs.userAgent.engine.isEdge();
          goog.userAgent.EDGE_OR_IE = goog.userAgent.EDGE || goog.userAgent.IE;
          goog.userAgent.GECKO = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_GECKO : goog.labs.userAgent.engine.isGecko();
          goog.userAgent.WEBKIT = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_WEBKIT || goog.userAgent.ASSUME_MOBILE_WEBKIT : goog.labs.userAgent.engine.isWebKit();
          goog.userAgent.isMobile_ = function () {
            return goog.userAgent.WEBKIT && goog.labs.userAgent.util.matchUserAgent("Mobile")
          };
          goog.userAgent.MOBILE = goog.userAgent.ASSUME_MOBILE_WEBKIT || goog.userAgent.isMobile_();
          goog.userAgent.SAFARI = goog.userAgent.WEBKIT;
          goog.userAgent.determinePlatform_ = function () {
            var navigator = goog.userAgent.getNavigator();
            return navigator && navigator.platform || ""
          };
          goog.userAgent.PLATFORM = goog.userAgent.determinePlatform_();
          goog.define("goog.userAgent.ASSUME_MAC", false);
          goog.define("goog.userAgent.ASSUME_WINDOWS", false);
          goog.define("goog.userAgent.ASSUME_LINUX", false);
          goog.define("goog.userAgent.ASSUME_X11", false);
          goog.define("goog.userAgent.ASSUME_ANDROID", false);
          goog.define("goog.userAgent.ASSUME_IPHONE", false);
          goog.define("goog.userAgent.ASSUME_IPAD", false);
          goog.define("goog.userAgent.ASSUME_IPOD", false);
          goog.userAgent.PLATFORM_KNOWN_ = goog.userAgent.ASSUME_MAC || goog.userAgent.ASSUME_WINDOWS || goog.userAgent.ASSUME_LINUX || goog.userAgent.ASSUME_X11 || goog.userAgent.ASSUME_ANDROID || goog.userAgent.ASSUME_IPHONE || goog.userAgent.ASSUME_IPAD || goog.userAgent.ASSUME_IPOD;
          goog.userAgent.MAC = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_MAC : goog.labs.userAgent.platform.isMacintosh();
          goog.userAgent.WINDOWS = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_WINDOWS : goog.labs.userAgent.platform.isWindows();
          goog.userAgent.isLegacyLinux_ = function () {
            return goog.labs.userAgent.platform.isLinux() || goog.labs.userAgent.platform.isChromeOS()
          };
          goog.userAgent.LINUX = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_LINUX : goog.userAgent.isLegacyLinux_();
          goog.userAgent.isX11_ = function () {
            var navigator = goog.userAgent.getNavigator();
            return !!navigator && goog.string.contains(navigator["appVersion"] || "", "X11")
          };
          goog.userAgent.X11 = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_X11 : goog.userAgent.isX11_();
          goog.userAgent.ANDROID = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_ANDROID : goog.labs.userAgent.platform.isAndroid();
          goog.userAgent.IPHONE = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_IPHONE : goog.labs.userAgent.platform.isIphone();
          goog.userAgent.IPAD = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_IPAD : goog.labs.userAgent.platform.isIpad();
          goog.userAgent.IPOD = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_IPOD : goog.labs.userAgent.platform.isIpod();
          goog.userAgent.IOS = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_IPHONE || goog.userAgent.ASSUME_IPAD || goog.userAgent.ASSUME_IPOD : goog.labs.userAgent.platform.isIos();
          goog.userAgent.determineVersion_ = function () {
            var version = "";
            var arr = goog.userAgent.getVersionRegexResult_();
            if (arr) version = arr ? arr[1] : "";
            if (goog.userAgent.IE) {
              var docMode = goog.userAgent.getDocumentMode_();
              if (docMode != null && docMode > parseFloat(version)) return String(docMode)
            }
            return version
          };
          goog.userAgent.getVersionRegexResult_ = function () {
            var userAgent = goog.userAgent.getUserAgentString();
            if (goog.userAgent.GECKO) return /rv\:([^\);]+)(\)|;)/.exec(userAgent);
            if (goog.userAgent.EDGE) return /Edge\/([\d\.]+)/.exec(userAgent);
            if (goog.userAgent.IE) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(userAgent);
            if (goog.userAgent.WEBKIT) return /WebKit\/(\S+)/.exec(userAgent);
            if (goog.userAgent.OPERA) return /(?:Version)[ \/]?(\S+)/.exec(userAgent);
            return undefined
          };
          goog.userAgent.getDocumentMode_ = function () {
            var doc = goog.global["document"];
            return doc ? doc["documentMode"] : undefined
          };
          goog.userAgent.VERSION = goog.userAgent.determineVersion_();
          goog.userAgent.compare = function (v1, v2) {
            return goog.string.compareVersions(v1, v2)
          };
          goog.userAgent.isVersionOrHigherCache_ = {};
          goog.userAgent.isVersionOrHigher = function (version) {
            return goog.userAgent.ASSUME_ANY_VERSION || goog.reflect.cache(goog.userAgent.isVersionOrHigherCache_, version, function () {
              return goog.string.compareVersions(goog.userAgent.VERSION, version) >= 0
            })
          };
          goog.userAgent.isVersion = goog.userAgent.isVersionOrHigher;
          goog.userAgent.isDocumentModeOrHigher = function (documentMode) {
            return Number(goog.userAgent.DOCUMENT_MODE) >= documentMode
          };
          goog.userAgent.isDocumentMode = goog.userAgent.isDocumentModeOrHigher;
          goog.userAgent.DOCUMENT_MODE = function () {
            var doc = goog.global["document"];
            var mode = goog.userAgent.getDocumentMode_();
            if (!doc || !goog.userAgent.IE) return undefined;
            return mode || (doc["compatMode"] == "CSS1Compat" ? parseInt(goog.userAgent.VERSION, 10) : 5)
          }();
          goog.provide("goog.dom.HtmlElement");
          goog.dom.HtmlElement = function () {
          };
          goog.provide("goog.dom.TagName");
          goog.require("goog.dom.HtmlElement");
          goog.dom.TagName = function (tagName) {
            this.tagName_ = tagName
          };
          goog.dom.TagName.prototype.toString = function () {
            return this.tagName_
          };
          goog.dom.TagName.A = new goog.dom.TagName("A");
          goog.dom.TagName.ABBR = new goog.dom.TagName("ABBR");
          goog.dom.TagName.ACRONYM = new goog.dom.TagName("ACRONYM");
          goog.dom.TagName.ADDRESS = new goog.dom.TagName("ADDRESS");
          goog.dom.TagName.APPLET = new goog.dom.TagName("APPLET");
          goog.dom.TagName.AREA = new goog.dom.TagName("AREA");
          goog.dom.TagName.ARTICLE = new goog.dom.TagName("ARTICLE");
          goog.dom.TagName.ASIDE = new goog.dom.TagName("ASIDE");
          goog.dom.TagName.AUDIO = new goog.dom.TagName("AUDIO");
          goog.dom.TagName.B = new goog.dom.TagName("B");
          goog.dom.TagName.BASE = new goog.dom.TagName("BASE");
          goog.dom.TagName.BASEFONT = new goog.dom.TagName("BASEFONT");
          goog.dom.TagName.BDI = new goog.dom.TagName("BDI");
          goog.dom.TagName.BDO = new goog.dom.TagName("BDO");
          goog.dom.TagName.BIG = new goog.dom.TagName("BIG");
          goog.dom.TagName.BLOCKQUOTE = new goog.dom.TagName("BLOCKQUOTE");
          goog.dom.TagName.BODY = new goog.dom.TagName("BODY");
          goog.dom.TagName.BR = new goog.dom.TagName("BR");
          goog.dom.TagName.BUTTON = new goog.dom.TagName("BUTTON");
          goog.dom.TagName.CANVAS = new goog.dom.TagName("CANVAS");
          goog.dom.TagName.CAPTION = new goog.dom.TagName("CAPTION");
          goog.dom.TagName.CENTER = new goog.dom.TagName("CENTER");
          goog.dom.TagName.CITE = new goog.dom.TagName("CITE");
          goog.dom.TagName.CODE = new goog.dom.TagName("CODE");
          goog.dom.TagName.COL = new goog.dom.TagName("COL");
          goog.dom.TagName.COLGROUP = new goog.dom.TagName("COLGROUP");
          goog.dom.TagName.COMMAND = new goog.dom.TagName("COMMAND");
          goog.dom.TagName.DATA = new goog.dom.TagName("DATA");
          goog.dom.TagName.DATALIST = new goog.dom.TagName("DATALIST");
          goog.dom.TagName.DD = new goog.dom.TagName("DD");
          goog.dom.TagName.DEL = new goog.dom.TagName("DEL");
          goog.dom.TagName.DETAILS = new goog.dom.TagName("DETAILS");
          goog.dom.TagName.DFN = new goog.dom.TagName("DFN");
          goog.dom.TagName.DIALOG = new goog.dom.TagName("DIALOG");
          goog.dom.TagName.DIR = new goog.dom.TagName("DIR");
          goog.dom.TagName.DIV = new goog.dom.TagName("DIV");
          goog.dom.TagName.DL = new goog.dom.TagName("DL");
          goog.dom.TagName.DT = new goog.dom.TagName("DT");
          goog.dom.TagName.EM = new goog.dom.TagName("EM");
          goog.dom.TagName.EMBED = new goog.dom.TagName("EMBED");
          goog.dom.TagName.FIELDSET = new goog.dom.TagName("FIELDSET");
          goog.dom.TagName.FIGCAPTION = new goog.dom.TagName("FIGCAPTION");
          goog.dom.TagName.FIGURE = new goog.dom.TagName("FIGURE");
          goog.dom.TagName.FONT = new goog.dom.TagName("FONT");
          goog.dom.TagName.FOOTER = new goog.dom.TagName("FOOTER");
          goog.dom.TagName.FORM = new goog.dom.TagName("FORM");
          goog.dom.TagName.FRAME = new goog.dom.TagName("FRAME");
          goog.dom.TagName.FRAMESET = new goog.dom.TagName("FRAMESET");
          goog.dom.TagName.H1 = new goog.dom.TagName("H1");
          goog.dom.TagName.H2 = new goog.dom.TagName("H2");
          goog.dom.TagName.H3 = new goog.dom.TagName("H3");
          goog.dom.TagName.H4 = new goog.dom.TagName("H4");
          goog.dom.TagName.H5 = new goog.dom.TagName("H5");
          goog.dom.TagName.H6 = new goog.dom.TagName("H6");
          goog.dom.TagName.HEAD = new goog.dom.TagName("HEAD");
          goog.dom.TagName.HEADER = new goog.dom.TagName("HEADER");
          goog.dom.TagName.HGROUP = new goog.dom.TagName("HGROUP");
          goog.dom.TagName.HR = new goog.dom.TagName("HR");
          goog.dom.TagName.HTML = new goog.dom.TagName("HTML");
          goog.dom.TagName.I = new goog.dom.TagName("I");
          goog.dom.TagName.IFRAME = new goog.dom.TagName("IFRAME");
          goog.dom.TagName.IMG = new goog.dom.TagName("IMG");
          goog.dom.TagName.INPUT = new goog.dom.TagName("INPUT");
          goog.dom.TagName.INS = new goog.dom.TagName("INS");
          goog.dom.TagName.ISINDEX = new goog.dom.TagName("ISINDEX");
          goog.dom.TagName.KBD = new goog.dom.TagName("KBD");
          goog.dom.TagName.KEYGEN = new goog.dom.TagName("KEYGEN");
          goog.dom.TagName.LABEL = new goog.dom.TagName("LABEL");
          goog.dom.TagName.LEGEND = new goog.dom.TagName("LEGEND");
          goog.dom.TagName.LI = new goog.dom.TagName("LI");
          goog.dom.TagName.LINK = new goog.dom.TagName("LINK");
          goog.dom.TagName.MAP = new goog.dom.TagName("MAP");
          goog.dom.TagName.MARK = new goog.dom.TagName("MARK");
          goog.dom.TagName.MATH = new goog.dom.TagName("MATH");
          goog.dom.TagName.MENU = new goog.dom.TagName("MENU");
          goog.dom.TagName.META = new goog.dom.TagName("META");
          goog.dom.TagName.METER = new goog.dom.TagName("METER");
          goog.dom.TagName.NAV = new goog.dom.TagName("NAV");
          goog.dom.TagName.NOFRAMES = new goog.dom.TagName("NOFRAMES");
          goog.dom.TagName.NOSCRIPT = new goog.dom.TagName("NOSCRIPT");
          goog.dom.TagName.OBJECT = new goog.dom.TagName("OBJECT");
          goog.dom.TagName.OL = new goog.dom.TagName("OL");
          goog.dom.TagName.OPTGROUP = new goog.dom.TagName("OPTGROUP");
          goog.dom.TagName.OPTION = new goog.dom.TagName("OPTION");
          goog.dom.TagName.OUTPUT = new goog.dom.TagName("OUTPUT");
          goog.dom.TagName.P = new goog.dom.TagName("P");
          goog.dom.TagName.PARAM = new goog.dom.TagName("PARAM");
          goog.dom.TagName.PRE = new goog.dom.TagName("PRE");
          goog.dom.TagName.PROGRESS = new goog.dom.TagName("PROGRESS");
          goog.dom.TagName.Q = new goog.dom.TagName("Q");
          goog.dom.TagName.RP = new goog.dom.TagName("RP");
          goog.dom.TagName.RT = new goog.dom.TagName("RT");
          goog.dom.TagName.RUBY = new goog.dom.TagName("RUBY");
          goog.dom.TagName.S = new goog.dom.TagName("S");
          goog.dom.TagName.SAMP = new goog.dom.TagName("SAMP");
          goog.dom.TagName.SCRIPT = new goog.dom.TagName("SCRIPT");
          goog.dom.TagName.SECTION = new goog.dom.TagName("SECTION");
          goog.dom.TagName.SELECT = new goog.dom.TagName("SELECT");
          goog.dom.TagName.SMALL = new goog.dom.TagName("SMALL");
          goog.dom.TagName.SOURCE = new goog.dom.TagName("SOURCE");
          goog.dom.TagName.SPAN = new goog.dom.TagName("SPAN");
          goog.dom.TagName.STRIKE = new goog.dom.TagName("STRIKE");
          goog.dom.TagName.STRONG = new goog.dom.TagName("STRONG");
          goog.dom.TagName.STYLE = new goog.dom.TagName("STYLE");
          goog.dom.TagName.SUB = new goog.dom.TagName("SUB");
          goog.dom.TagName.SUMMARY = new goog.dom.TagName("SUMMARY");
          goog.dom.TagName.SUP = new goog.dom.TagName("SUP");
          goog.dom.TagName.SVG = new goog.dom.TagName("SVG");
          goog.dom.TagName.TABLE = new goog.dom.TagName("TABLE");
          goog.dom.TagName.TBODY = new goog.dom.TagName("TBODY");
          goog.dom.TagName.TD = new goog.dom.TagName("TD");
          goog.dom.TagName.TEMPLATE = new goog.dom.TagName("TEMPLATE");
          goog.dom.TagName.TEXTAREA = new goog.dom.TagName("TEXTAREA");
          goog.dom.TagName.TFOOT = new goog.dom.TagName("TFOOT");
          goog.dom.TagName.TH = new goog.dom.TagName("TH");
          goog.dom.TagName.THEAD = new goog.dom.TagName("THEAD");
          goog.dom.TagName.TIME = new goog.dom.TagName("TIME");
          goog.dom.TagName.TITLE = new goog.dom.TagName("TITLE");
          goog.dom.TagName.TR = new goog.dom.TagName("TR");
          goog.dom.TagName.TRACK = new goog.dom.TagName("TRACK");
          goog.dom.TagName.TT = new goog.dom.TagName("TT");
          goog.dom.TagName.U = new goog.dom.TagName("U");
          goog.dom.TagName.UL = new goog.dom.TagName("UL");
          goog.dom.TagName.VAR = new goog.dom.TagName("VAR");
          goog.dom.TagName.VIDEO = new goog.dom.TagName("VIDEO");
          goog.dom.TagName.WBR = new goog.dom.TagName("WBR");
          goog.provide("goog.Thenable");
          goog.forwardDeclare("goog.Promise");
          goog.Thenable = function () {
          };
          goog.Thenable.prototype.then = function (opt_onFulfilled, opt_onRejected, opt_context) {
          };
          goog.Thenable.IMPLEMENTED_BY_PROP = "$goog_Thenable";
          goog.Thenable.addImplementation = function (ctor) {
            ctor.prototype["then"] = ctor.prototype.then;
            if (COMPILED) ctor.prototype[goog.Thenable.IMPLEMENTED_BY_PROP] = true; else ctor.prototype.$goog_Thenable = true
          };
          goog.Thenable.isImplementedBy = function (object) {
            if (!object) return false;
            try {
              if (COMPILED) return !!object[goog.Thenable.IMPLEMENTED_BY_PROP];
              return !!object.$goog_Thenable
            } catch (e) {
              return false
            }
          };
          goog.provide("goog.async.FreeList");
          goog.async.FreeList = goog.defineClass(null, {
            constructor: function (create, reset, limit) {
              this.limit_ = limit;
              this.create_ = create;
              this.reset_ = reset;
              this.occupants_ = 0;
              this.head_ = null
            }, get: function () {
              var item;
              if (this.occupants_ > 0) {
                this.occupants_--;
                item = this.head_;
                this.head_ = item.next;
                item.next = null
              } else item = this.create_();
              return item
            }, put: function (item) {
              this.reset_(item);
              if (this.occupants_ < this.limit_) {
                this.occupants_++;
                item.next = this.head_;
                this.head_ = item
              }
            }, occupants: function () {
              return this.occupants_
            }
          });
          goog.provide("goog.async.WorkItem");
          goog.provide("goog.async.WorkQueue");
          goog.require("goog.asserts");
          goog.require("goog.async.FreeList");
          goog.async.WorkQueue = function () {
            this.workHead_ = null;
            this.workTail_ = null
          };
          goog.define("goog.async.WorkQueue.DEFAULT_MAX_UNUSED", 100);
          goog.async.WorkQueue.freelist_ = new goog.async.FreeList(function () {
            return new goog.async.WorkItem
          }, function (item) {
            item.reset()
          }, goog.async.WorkQueue.DEFAULT_MAX_UNUSED);
          goog.async.WorkQueue.prototype.add = function (fn, scope) {
            var item = this.getUnusedItem_();
            item.set(fn, scope);
            if (this.workTail_) {
              this.workTail_.next = item;
              this.workTail_ = item
            } else {
              goog.asserts.assert(!this.workHead_);
              this.workHead_ = item;
              this.workTail_ = item
            }
          };
          goog.async.WorkQueue.prototype.remove = function () {
            var item = null;
            if (this.workHead_) {
              item = this.workHead_;
              this.workHead_ = this.workHead_.next;
              if (!this.workHead_) this.workTail_ = null;
              item.next = null
            }
            return item
          };
          goog.async.WorkQueue.prototype.returnUnused = function (item) {
            goog.async.WorkQueue.freelist_.put(item)
          };
          goog.async.WorkQueue.prototype.getUnusedItem_ = function () {
            return goog.async.WorkQueue.freelist_.get()
          };
          goog.async.WorkItem = function () {
            this.fn = null;
            this.scope = null;
            this.next = null
          };
          goog.async.WorkItem.prototype.set = function (fn, scope) {
            this.fn = fn;
            this.scope = scope;
            this.next = null
          };
          goog.async.WorkItem.prototype.reset = function () {
            this.fn = null;
            this.scope = null;
            this.next = null
          };
          goog.provide("goog.debug.EntryPointMonitor");
          goog.provide("goog.debug.entryPointRegistry");
          goog.require("goog.asserts");
          goog.debug.EntryPointMonitor = function () {
          };
          goog.debug.EntryPointMonitor.prototype.wrap;
          goog.debug.EntryPointMonitor.prototype.unwrap;
          goog.debug.entryPointRegistry.refList_ = [];
          goog.debug.entryPointRegistry.monitors_ = [];
          goog.debug.entryPointRegistry.monitorsMayExist_ = false;
          goog.debug.entryPointRegistry.register = function (callback) {
            goog.debug.entryPointRegistry.refList_[goog.debug.entryPointRegistry.refList_.length] = callback;
            if (goog.debug.entryPointRegistry.monitorsMayExist_) {
              var monitors = goog.debug.entryPointRegistry.monitors_;
              for (var i = 0; i < monitors.length; i++) callback(goog.bind(monitors[i].wrap, monitors[i]))
            }
          };
          goog.debug.entryPointRegistry.monitorAll = function (monitor) {
            goog.debug.entryPointRegistry.monitorsMayExist_ = true;
            var transformer = goog.bind(monitor.wrap, monitor);
            for (var i = 0; i < goog.debug.entryPointRegistry.refList_.length; i++) goog.debug.entryPointRegistry.refList_[i](transformer);
            goog.debug.entryPointRegistry.monitors_.push(monitor)
          };
          goog.debug.entryPointRegistry.unmonitorAllIfPossible = function (monitor) {
            var monitors = goog.debug.entryPointRegistry.monitors_;
            goog.asserts.assert(monitor == monitors[monitors.length - 1], "Only the most recent monitor can be unwrapped.");
            var transformer = goog.bind(monitor.unwrap, monitor);
            for (var i = 0; i < goog.debug.entryPointRegistry.refList_.length; i++) goog.debug.entryPointRegistry.refList_[i](transformer);
            monitors.length--
          };
          goog.provide("goog.async.nextTick");
          goog.provide("goog.async.throwException");
          goog.require("goog.debug.entryPointRegistry");
          goog.require("goog.dom.TagName");
          goog.require("goog.functions");
          goog.require("goog.labs.userAgent.browser");
          goog.require("goog.labs.userAgent.engine");
          goog.async.throwException = function (exception) {
            goog.global.setTimeout(function () {
              throw exception;
            }, 0)
          };
          goog.async.nextTick = function (callback, opt_context, opt_useSetImmediate) {
            var cb = callback;
            if (opt_context) cb = goog.bind(callback, opt_context);
            cb = goog.async.nextTick.wrapCallback_(cb);
            if (goog.isFunction(goog.global.setImmediate) && (opt_useSetImmediate || goog.async.nextTick.useSetImmediate_())) {
              goog.global.setImmediate(cb);
              return
            }
            if (!goog.async.nextTick.setImmediate_) goog.async.nextTick.setImmediate_ = goog.async.nextTick.getSetImmediateEmulator_();
            goog.async.nextTick.setImmediate_(cb)
          };
          goog.async.nextTick.useSetImmediate_ = function () {
            if (!goog.global.Window || !goog.global.Window.prototype) return true;
            if (goog.labs.userAgent.browser.isEdge() || goog.global.Window.prototype.setImmediate != goog.global.setImmediate) return true;
            return false
          };
          goog.async.nextTick.setImmediate_;
          goog.async.nextTick.getSetImmediateEmulator_ = function () {
            var Channel = goog.global["MessageChannel"];
            if (typeof Channel === "undefined" && typeof window !== "undefined" && window.postMessage && window.addEventListener && !goog.labs.userAgent.engine.isPresto()) Channel = function () {
              var iframe = document.createElement(String(goog.dom.TagName.IFRAME));
              iframe.style.display = "none";
              iframe.src = "";
              document.documentElement.appendChild(iframe);
              var win = iframe.contentWindow;
              var doc = win.document;
              doc.open();
              doc.write("");
              doc.close();
              var message = "callImmediate" + Math.random();
              var origin = win.location.protocol == "file:" ? "*" : win.location.protocol + "//" + win.location.host;
              var onmessage = goog.bind(function (e) {
                if (origin != "*" && e.origin != origin || e.data != message) return;
                this["port1"].onmessage()
              }, this);
              win.addEventListener("message", onmessage, false);
              this["port1"] = {};
              this["port2"] = {
                postMessage: function () {
                  win.postMessage(message, origin)
                }
              }
            };
            if (typeof Channel !== "undefined" && !goog.labs.userAgent.browser.isIE()) {
              var channel = new Channel;
              var head = {};
              var tail = head;
              channel["port1"].onmessage = function () {
                if (goog.isDef(head.next)) {
                  head = head.next;
                  var cb = head.cb;
                  head.cb = null;
                  cb()
                }
              };
              return function (cb) {
                tail.next = {cb: cb};
                tail = tail.next;
                channel["port2"].postMessage(0)
              }
            }
            if (typeof document !== "undefined" && "onreadystatechange" in document.createElement(String(goog.dom.TagName.SCRIPT))) return function (cb) {
              var script = document.createElement(String(goog.dom.TagName.SCRIPT));
              script.onreadystatechange = function () {
                script.onreadystatechange = null;
                script.parentNode.removeChild(script);
                script = null;
                cb();
                cb = null
              };
              document.documentElement.appendChild(script)
            };
            return function (cb) {
              goog.global.setTimeout(cb, 0)
            }
          };
          goog.async.nextTick.wrapCallback_ = goog.functions.identity;
          goog.debug.entryPointRegistry.register(function (transformer) {
            goog.async.nextTick.wrapCallback_ = transformer
          });
          goog.provide("goog.async.run");
          goog.require("goog.async.WorkQueue");
          goog.require("goog.async.nextTick");
          goog.require("goog.async.throwException");
          goog.async.run = function (callback, opt_context) {
            if (!goog.async.run.schedule_) goog.async.run.initializeRunner_();
            if (!goog.async.run.workQueueScheduled_) {
              goog.async.run.schedule_();
              goog.async.run.workQueueScheduled_ = true
            }
            goog.async.run.workQueue_.add(callback, opt_context)
          };
          goog.async.run.initializeRunner_ = function () {
            if (String(goog.global.Promise).indexOf("[native code]") != -1) {
              var promise = goog.global.Promise.resolve(undefined);
              goog.async.run.schedule_ = function () {
                promise.then(goog.async.run.processWorkQueue)
              }
            } else goog.async.run.schedule_ = function () {
              goog.async.nextTick(goog.async.run.processWorkQueue)
            }
          };
          goog.async.run.forceNextTick = function (opt_realSetTimeout) {
            goog.async.run.schedule_ = function () {
              goog.async.nextTick(goog.async.run.processWorkQueue);
              if (opt_realSetTimeout) opt_realSetTimeout(goog.async.run.processWorkQueue)
            }
          };
          goog.async.run.schedule_;
          goog.async.run.workQueueScheduled_ = false;
          goog.async.run.workQueue_ = new goog.async.WorkQueue;
          if (goog.DEBUG) goog.async.run.resetQueue = function () {
            goog.async.run.workQueueScheduled_ = false;
            goog.async.run.workQueue_ = new goog.async.WorkQueue
          };
          goog.async.run.processWorkQueue = function () {
            var item = null;
            while (item = goog.async.run.workQueue_.remove()) {
              try {
                item.fn.call(item.scope)
              } catch (e) {
                goog.async.throwException(e)
              }
              goog.async.run.workQueue_.returnUnused(item)
            }
            goog.async.run.workQueueScheduled_ = false
          };
          goog.provide("goog.promise.Resolver");
          goog.promise.Resolver = function () {
          };
          goog.promise.Resolver.prototype.promise;
          goog.promise.Resolver.prototype.resolve;
          goog.promise.Resolver.prototype.reject;
          goog.provide("goog.Promise");
          goog.require("goog.Thenable");
          goog.require("goog.asserts");
          goog.require("goog.async.FreeList");
          goog.require("goog.async.run");
          goog.require("goog.async.throwException");
          goog.require("goog.debug.Error");
          goog.require("goog.promise.Resolver");
          goog.Promise = function (resolver, opt_context) {
            this.state_ = goog.Promise.State_.PENDING;
            this.result_ = undefined;
            this.parent_ = null;
            this.callbackEntries_ = null;
            this.callbackEntriesTail_ = null;
            this.executing_ = false;
            if (goog.Promise.UNHANDLED_REJECTION_DELAY > 0) this.unhandledRejectionId_ = 0; else if (goog.Promise.UNHANDLED_REJECTION_DELAY == 0) this.hadUnhandledRejection_ = false;
            if (goog.Promise.LONG_STACK_TRACES) {
              this.stack_ = [];
              this.addStackTrace_(new Error("created"));
              this.currentStep_ = 0
            }
            if (resolver != goog.nullFunction) try {
              var self =
                this;
              resolver.call(opt_context, function (value) {
                self.resolve_(goog.Promise.State_.FULFILLED, value)
              }, function (reason) {
                if (goog.DEBUG && !(reason instanceof goog.Promise.CancellationError)) try {
                  if (reason instanceof Error) throw reason; else throw new Error("Promise rejected.");
                } catch (e) {
                }
                self.resolve_(goog.Promise.State_.REJECTED, reason)
              })
            } catch (e) {
              this.resolve_(goog.Promise.State_.REJECTED, e)
            }
          };
          goog.define("goog.Promise.LONG_STACK_TRACES", false);
          goog.define("goog.Promise.UNHANDLED_REJECTION_DELAY", 0);
          goog.Promise.State_ = {PENDING: 0, BLOCKED: 1, FULFILLED: 2, REJECTED: 3};
          goog.Promise.CallbackEntry_ = function () {
            this.child = null;
            this.onFulfilled = null;
            this.onRejected = null;
            this.context = null;
            this.next = null;
            this.always = false
          };
          goog.Promise.CallbackEntry_.prototype.reset = function () {
            this.child = null;
            this.onFulfilled = null;
            this.onRejected = null;
            this.context = null;
            this.always = false
          };
          goog.define("goog.Promise.DEFAULT_MAX_UNUSED", 100);
          goog.Promise.freelist_ = new goog.async.FreeList(function () {
            return new goog.Promise.CallbackEntry_
          }, function (item) {
            item.reset()
          }, goog.Promise.DEFAULT_MAX_UNUSED);
          goog.Promise.getCallbackEntry_ = function (onFulfilled, onRejected, context) {
            var entry = goog.Promise.freelist_.get();
            entry.onFulfilled = onFulfilled;
            entry.onRejected = onRejected;
            entry.context = context;
            return entry
          };
          goog.Promise.returnEntry_ = function (entry) {
            goog.Promise.freelist_.put(entry)
          };
          goog.Promise.resolve = function (opt_value) {
            if (opt_value instanceof goog.Promise) return opt_value;
            var promise = new goog.Promise(goog.nullFunction);
            promise.resolve_(goog.Promise.State_.FULFILLED, opt_value);
            return promise
          };
          goog.Promise.reject = function (opt_reason) {
            return new goog.Promise(function (resolve, reject) {
              reject(opt_reason)
            })
          };
          goog.Promise.resolveThen_ = function (value, onFulfilled, onRejected) {
            var isThenable = goog.Promise.maybeThen_(value, onFulfilled, onRejected, null);
            if (!isThenable) goog.async.run(goog.partial(onFulfilled, value))
          };
          goog.Promise.race = function (promises) {
            return new goog.Promise(function (resolve, reject) {
              if (!promises.length) resolve(undefined);
              for (var i = 0, promise; i < promises.length; i++) {
                promise = promises[i];
                goog.Promise.resolveThen_(promise, resolve, reject)
              }
            })
          };
          goog.Promise.all = function (promises) {
            return new goog.Promise(function (resolve, reject) {
              var toFulfill = promises.length;
              var values = [];
              if (!toFulfill) {
                resolve(values);
                return
              }
              var onFulfill = function (index, value) {
                toFulfill--;
                values[index] = value;
                if (toFulfill == 0) resolve(values)
              };
              var onReject = function (reason) {
                reject(reason)
              };
              for (var i = 0, promise; i < promises.length; i++) {
                promise = promises[i];
                goog.Promise.resolveThen_(promise, goog.partial(onFulfill, i), onReject)
              }
            })
          };
          goog.Promise.allSettled = function (promises) {
            return new goog.Promise(function (resolve, reject) {
              var toSettle = promises.length;
              var results = [];
              if (!toSettle) {
                resolve(results);
                return
              }
              var onSettled = function (index, fulfilled, result) {
                toSettle--;
                results[index] = fulfilled ? {fulfilled: true, value: result} : {fulfilled: false, reason: result};
                if (toSettle == 0) resolve(results)
              };
              for (var i = 0, promise; i < promises.length; i++) {
                promise = promises[i];
                goog.Promise.resolveThen_(promise, goog.partial(onSettled, i, true), goog.partial(onSettled,
                  i, false))
              }
            })
          };
          goog.Promise.firstFulfilled = function (promises) {
            return new goog.Promise(function (resolve, reject) {
              var toReject = promises.length;
              var reasons = [];
              if (!toReject) {
                resolve(undefined);
                return
              }
              var onFulfill = function (value) {
                resolve(value)
              };
              var onReject = function (index, reason) {
                toReject--;
                reasons[index] = reason;
                if (toReject == 0) reject(reasons)
              };
              for (var i = 0, promise; i < promises.length; i++) {
                promise = promises[i];
                goog.Promise.resolveThen_(promise, onFulfill, goog.partial(onReject, i))
              }
            })
          };
          goog.Promise.withResolver = function () {
            var resolve, reject;
            var promise = new goog.Promise(function (rs, rj) {
              resolve = rs;
              reject = rj
            });
            return new goog.Promise.Resolver_(promise, resolve, reject)
          };
          goog.Promise.prototype.then = function (opt_onFulfilled, opt_onRejected, opt_context) {
            if (opt_onFulfilled != null) goog.asserts.assertFunction(opt_onFulfilled, "opt_onFulfilled should be a function.");
            if (opt_onRejected != null) goog.asserts.assertFunction(opt_onRejected, "opt_onRejected should be a function. Did you pass opt_context " + "as the second argument instead of the third?");
            if (goog.Promise.LONG_STACK_TRACES) this.addStackTrace_(new Error("then"));
            return this.addChildPromise_(goog.isFunction(opt_onFulfilled) ?
              opt_onFulfilled : null, goog.isFunction(opt_onRejected) ? opt_onRejected : null, opt_context)
          };
          goog.Thenable.addImplementation(goog.Promise);
          goog.Promise.prototype.thenVoid = function (opt_onFulfilled, opt_onRejected, opt_context) {
            if (opt_onFulfilled != null) goog.asserts.assertFunction(opt_onFulfilled, "opt_onFulfilled should be a function.");
            if (opt_onRejected != null) goog.asserts.assertFunction(opt_onRejected, "opt_onRejected should be a function. Did you pass opt_context " + "as the second argument instead of the third?");
            if (goog.Promise.LONG_STACK_TRACES) this.addStackTrace_(new Error("then"));
            this.addCallbackEntry_(goog.Promise.getCallbackEntry_(opt_onFulfilled ||
              goog.nullFunction, opt_onRejected || null, opt_context))
          };
          goog.Promise.prototype.thenAlways = function (onSettled, opt_context) {
            if (goog.Promise.LONG_STACK_TRACES) this.addStackTrace_(new Error("thenAlways"));
            var entry = goog.Promise.getCallbackEntry_(onSettled, onSettled, opt_context);
            entry.always = true;
            this.addCallbackEntry_(entry);
            return this
          };
          goog.Promise.prototype.thenCatch = function (onRejected, opt_context) {
            if (goog.Promise.LONG_STACK_TRACES) this.addStackTrace_(new Error("thenCatch"));
            return this.addChildPromise_(null, onRejected, opt_context)
          };
          goog.Promise.prototype.cancel = function (opt_message) {
            if (this.state_ == goog.Promise.State_.PENDING) goog.async.run(function () {
              var err = new goog.Promise.CancellationError(opt_message);
              this.cancelInternal_(err)
            }, this)
          };
          goog.Promise.prototype.cancelInternal_ = function (err) {
            if (this.state_ == goog.Promise.State_.PENDING) if (this.parent_) {
              this.parent_.cancelChild_(this, err);
              this.parent_ = null
            } else this.resolve_(goog.Promise.State_.REJECTED, err)
          };
          goog.Promise.prototype.cancelChild_ = function (childPromise, err) {
            if (!this.callbackEntries_) return;
            var childCount = 0;
            var childEntry = null;
            var beforeChildEntry = null;
            for (var entry = this.callbackEntries_; entry; entry = entry.next) {
              if (!entry.always) {
                childCount++;
                if (entry.child == childPromise) childEntry = entry;
                if (childEntry && childCount > 1) break
              }
              if (!childEntry) beforeChildEntry = entry
            }
            if (childEntry) if (this.state_ == goog.Promise.State_.PENDING && childCount == 1) this.cancelInternal_(err); else {
              if (beforeChildEntry) this.removeEntryAfter_(beforeChildEntry);
              else this.popEntry_();
              this.executeCallback_(childEntry, goog.Promise.State_.REJECTED, err)
            }
          };
          goog.Promise.prototype.addCallbackEntry_ = function (callbackEntry) {
            if (!this.hasEntry_() && (this.state_ == goog.Promise.State_.FULFILLED || this.state_ == goog.Promise.State_.REJECTED)) this.scheduleCallbacks_();
            this.queueEntry_(callbackEntry)
          };
          goog.Promise.prototype.addChildPromise_ = function (onFulfilled, onRejected, opt_context) {
            var callbackEntry = goog.Promise.getCallbackEntry_(null, null, null);
            callbackEntry.child = new goog.Promise(function (resolve, reject) {
              callbackEntry.onFulfilled = onFulfilled ? function (value) {
                try {
                  var result = onFulfilled.call(opt_context, value);
                  resolve(result)
                } catch (err) {
                  reject(err)
                }
              } : resolve;
              callbackEntry.onRejected = onRejected ? function (reason) {
                try {
                  var result = onRejected.call(opt_context, reason);
                  if (!goog.isDef(result) && reason instanceof
                    goog.Promise.CancellationError) reject(reason); else resolve(result)
                } catch (err) {
                  reject(err)
                }
              } : reject
            });
            callbackEntry.child.parent_ = this;
            this.addCallbackEntry_(callbackEntry);
            return callbackEntry.child
          };
          goog.Promise.prototype.unblockAndFulfill_ = function (value) {
            goog.asserts.assert(this.state_ == goog.Promise.State_.BLOCKED);
            this.state_ = goog.Promise.State_.PENDING;
            this.resolve_(goog.Promise.State_.FULFILLED, value)
          };
          goog.Promise.prototype.unblockAndReject_ = function (reason) {
            goog.asserts.assert(this.state_ == goog.Promise.State_.BLOCKED);
            this.state_ = goog.Promise.State_.PENDING;
            this.resolve_(goog.Promise.State_.REJECTED, reason)
          };
          goog.Promise.prototype.resolve_ = function (state, x) {
            if (this.state_ != goog.Promise.State_.PENDING) return;
            if (this === x) {
              state = goog.Promise.State_.REJECTED;
              x = new TypeError("Promise cannot resolve to itself")
            }
            this.state_ = goog.Promise.State_.BLOCKED;
            var isThenable = goog.Promise.maybeThen_(x, this.unblockAndFulfill_, this.unblockAndReject_, this);
            if (isThenable) return;
            this.result_ = x;
            this.state_ = state;
            this.parent_ = null;
            this.scheduleCallbacks_();
            if (state == goog.Promise.State_.REJECTED && !(x instanceof goog.Promise.CancellationError)) goog.Promise.addUnhandledRejection_(this,
              x)
          };
          goog.Promise.maybeThen_ = function (value, onFulfilled, onRejected, context) {
            if (value instanceof goog.Promise) {
              value.thenVoid(onFulfilled, onRejected, context);
              return true
            } else if (goog.Thenable.isImplementedBy(value)) {
              value = value;
              value.then(onFulfilled, onRejected, context);
              return true
            } else if (goog.isObject(value)) try {
              var then = value["then"];
              if (goog.isFunction(then)) {
                goog.Promise.tryThen_(value, then, onFulfilled, onRejected, context);
                return true
              }
            } catch (e) {
              onRejected.call(context, e);
              return true
            }
            return false
          };
          goog.Promise.tryThen_ = function (thenable, then, onFulfilled, onRejected, context) {
            var called = false;
            var resolve = function (value) {
              if (!called) {
                called = true;
                onFulfilled.call(context, value)
              }
            };
            var reject = function (reason) {
              if (!called) {
                called = true;
                onRejected.call(context, reason)
              }
            };
            try {
              then.call(thenable, resolve, reject)
            } catch (e) {
              reject(e)
            }
          };
          goog.Promise.prototype.scheduleCallbacks_ = function () {
            if (!this.executing_) {
              this.executing_ = true;
              goog.async.run(this.executeCallbacks_, this)
            }
          };
          goog.Promise.prototype.hasEntry_ = function () {
            return !!this.callbackEntries_
          };
          goog.Promise.prototype.queueEntry_ = function (entry) {
            goog.asserts.assert(entry.onFulfilled != null);
            if (this.callbackEntriesTail_) {
              this.callbackEntriesTail_.next = entry;
              this.callbackEntriesTail_ = entry
            } else {
              this.callbackEntries_ = entry;
              this.callbackEntriesTail_ = entry
            }
          };
          goog.Promise.prototype.popEntry_ = function () {
            var entry = null;
            if (this.callbackEntries_) {
              entry = this.callbackEntries_;
              this.callbackEntries_ = entry.next;
              entry.next = null
            }
            if (!this.callbackEntries_) this.callbackEntriesTail_ = null;
            if (entry != null) goog.asserts.assert(entry.onFulfilled != null);
            return entry
          };
          goog.Promise.prototype.removeEntryAfter_ = function (previous) {
            goog.asserts.assert(this.callbackEntries_);
            goog.asserts.assert(previous != null);
            if (previous.next == this.callbackEntriesTail_) this.callbackEntriesTail_ = previous;
            previous.next = previous.next.next
          };
          goog.Promise.prototype.executeCallbacks_ = function () {
            var entry = null;
            while (entry = this.popEntry_()) {
              if (goog.Promise.LONG_STACK_TRACES) this.currentStep_++;
              this.executeCallback_(entry, this.state_, this.result_)
            }
            this.executing_ = false
          };
          goog.Promise.prototype.executeCallback_ = function (callbackEntry, state, result) {
            if (state == goog.Promise.State_.REJECTED && callbackEntry.onRejected && !callbackEntry.always) this.removeUnhandledRejection_();
            if (callbackEntry.child) {
              callbackEntry.child.parent_ = null;
              goog.Promise.invokeCallback_(callbackEntry, state, result)
            } else try {
              callbackEntry.always ? callbackEntry.onFulfilled.call(callbackEntry.context) : goog.Promise.invokeCallback_(callbackEntry, state, result)
            } catch (err) {
              goog.Promise.handleRejection_.call(null,
                err)
            }
            goog.Promise.returnEntry_(callbackEntry)
          };
          goog.Promise.invokeCallback_ = function (callbackEntry, state, result) {
            if (state == goog.Promise.State_.FULFILLED) callbackEntry.onFulfilled.call(callbackEntry.context, result); else if (callbackEntry.onRejected) callbackEntry.onRejected.call(callbackEntry.context, result)
          };
          goog.Promise.prototype.addStackTrace_ = function (err) {
            if (goog.Promise.LONG_STACK_TRACES && goog.isString(err.stack)) {
              var trace = err.stack.split("\n", 4)[3];
              var message = err.message;
              message += Array(11 - message.length).join(" ");
              this.stack_.push(message + trace)
            }
          };
          goog.Promise.prototype.appendLongStack_ = function (err) {
            if (goog.Promise.LONG_STACK_TRACES && err && goog.isString(err.stack) && this.stack_.length) {
              var longTrace = ["Promise trace:"];
              for (var promise = this; promise; promise = promise.parent_) {
                for (var i = this.currentStep_; i >= 0; i--) longTrace.push(promise.stack_[i]);
                longTrace.push("Value: " + "[" + (promise.state_ == goog.Promise.State_.REJECTED ? "REJECTED" : "FULFILLED") + "] " + "<" + String(promise.result_) + ">")
              }
              err.stack += "\n\n" + longTrace.join("\n")
            }
          };
          goog.Promise.prototype.removeUnhandledRejection_ = function () {
            if (goog.Promise.UNHANDLED_REJECTION_DELAY > 0) for (var p = this; p && p.unhandledRejectionId_; p = p.parent_) {
              goog.global.clearTimeout(p.unhandledRejectionId_);
              p.unhandledRejectionId_ = 0
            } else if (goog.Promise.UNHANDLED_REJECTION_DELAY == 0) for (var p = this; p && p.hadUnhandledRejection_; p = p.parent_) p.hadUnhandledRejection_ = false
          };
          goog.Promise.addUnhandledRejection_ = function (promise, reason) {
            if (goog.Promise.UNHANDLED_REJECTION_DELAY > 0) promise.unhandledRejectionId_ = goog.global.setTimeout(function () {
              promise.appendLongStack_(reason);
              goog.Promise.handleRejection_.call(null, reason)
            }, goog.Promise.UNHANDLED_REJECTION_DELAY); else if (goog.Promise.UNHANDLED_REJECTION_DELAY == 0) {
              promise.hadUnhandledRejection_ = true;
              goog.async.run(function () {
                if (promise.hadUnhandledRejection_) {
                  promise.appendLongStack_(reason);
                  goog.Promise.handleRejection_.call(null,
                    reason)
                }
              })
            }
          };
          goog.Promise.handleRejection_ = goog.async.throwException;
          goog.Promise.setUnhandledRejectionHandler = function (handler) {
            goog.Promise.handleRejection_ = handler
          };
          goog.Promise.CancellationError = function (opt_message) {
            goog.Promise.CancellationError.base(this, "constructor", opt_message)
          };
          goog.inherits(goog.Promise.CancellationError, goog.debug.Error);
          goog.Promise.CancellationError.prototype.name = "cancel";
          goog.Promise.Resolver_ = function (promise, resolve, reject) {
            this.promise = promise;
            this.resolve = resolve;
            this.reject = reject
          };
          goog.provide("goog.dom.BrowserFeature");
          goog.require("goog.userAgent");
          goog.dom.BrowserFeature = {
            CAN_ADD_NAME_OR_TYPE_ATTRIBUTES: !goog.userAgent.IE || goog.userAgent.isDocumentModeOrHigher(9),
            CAN_USE_CHILDREN_ATTRIBUTE: !goog.userAgent.GECKO && !goog.userAgent.IE || goog.userAgent.IE && goog.userAgent.isDocumentModeOrHigher(9) || goog.userAgent.GECKO && goog.userAgent.isVersionOrHigher("1.9.1"),
            CAN_USE_INNER_TEXT: goog.userAgent.IE && !goog.userAgent.isVersionOrHigher("9"),
            CAN_USE_PARENT_ELEMENT_PROPERTY: goog.userAgent.IE || goog.userAgent.OPERA || goog.userAgent.WEBKIT,
            INNER_HTML_NEEDS_SCOPED_ELEMENT: goog.userAgent.IE,
            LEGACY_IE_RANGES: goog.userAgent.IE && !goog.userAgent.isDocumentModeOrHigher(9)
          };
          goog.provide("goog.dom.asserts");
          goog.require("goog.asserts");
          goog.dom.asserts.assertIsLocation = function (o) {
            if (goog.asserts.ENABLE_ASSERTS) {
              var win = goog.dom.asserts.getWindow_(o);
              if (typeof win.Location != "undefined" && typeof win.Element != "undefined") goog.asserts.assert(o && (o instanceof win.Location || !(o instanceof win.Element)), "Argument is not a Location (or a non-Element mock); got: %s", goog.dom.asserts.debugStringForType_(o))
            }
            return o
          };
          goog.dom.asserts.assertIsHTMLAnchorElement = function (o) {
            if (goog.asserts.ENABLE_ASSERTS) {
              var win = goog.dom.asserts.getWindow_(o);
              if (typeof win.HTMLAnchorElement != "undefined" && typeof win.Location != "undefined" && typeof win.Element != "undefined") goog.asserts.assert(o && (o instanceof win.HTMLAnchorElement || !(o instanceof win.Location || o instanceof win.Element)), "Argument is not a HTMLAnchorElement (or a non-Element mock); " + "got: %s", goog.dom.asserts.debugStringForType_(o))
            }
            return o
          };
          goog.dom.asserts.assertIsHTMLLinkElement = function (o) {
            if (goog.asserts.ENABLE_ASSERTS) {
              var win = goog.dom.asserts.getWindow_(o);
              if (typeof win.HTMLLinkElement != "undefined" && typeof win.Location != "undefined" && typeof win.Element != "undefined") goog.asserts.assert(o && (o instanceof win.HTMLLinkElement || !(o instanceof win.Location || o instanceof win.Element)), "Argument is not a HTMLLinkElement (or a non-Element mock); got: %s", goog.dom.asserts.debugStringForType_(o))
            }
            return o
          };
          goog.dom.asserts.assertIsHTMLImageElement = function (o) {
            if (goog.asserts.ENABLE_ASSERTS) {
              var win = goog.dom.asserts.getWindow_(o);
              if (typeof win.HTMLImageElement != "undefined" && typeof win.Element != "undefined") goog.asserts.assert(o && (o instanceof win.HTMLImageElement || !(o instanceof win.Element)), "Argument is not a HTMLImageElement (or a non-Element mock); got: %s", goog.dom.asserts.debugStringForType_(o))
            }
            return o
          };
          goog.dom.asserts.assertIsHTMLEmbedElement = function (o) {
            if (goog.asserts.ENABLE_ASSERTS) {
              var win = goog.dom.asserts.getWindow_(o);
              if (typeof win.HTMLEmbedElement != "undefined" && typeof win.Element != "undefined") goog.asserts.assert(o && (o instanceof win.HTMLEmbedElement || !(o instanceof win.Element)), "Argument is not a HTMLEmbedElement (or a non-Element mock); got: %s", goog.dom.asserts.debugStringForType_(o))
            }
            return o
          };
          goog.dom.asserts.assertIsHTMLFrameElement = function (o) {
            if (goog.asserts.ENABLE_ASSERTS) {
              var win = goog.dom.asserts.getWindow_(o);
              if (typeof win.HTMLFrameElement != "undefined" && typeof win.Element != "undefined") goog.asserts.assert(o && (o instanceof win.HTMLFrameElement || !(o instanceof win.Element)), "Argument is not a HTMLFrameElement (or a non-Element mock); got: %s", goog.dom.asserts.debugStringForType_(o))
            }
            return o
          };
          goog.dom.asserts.assertIsHTMLIFrameElement = function (o) {
            if (goog.asserts.ENABLE_ASSERTS) {
              var win = goog.dom.asserts.getWindow_(o);
              if (typeof win.HTMLIFrameElement != "undefined" && typeof win.Element != "undefined") goog.asserts.assert(o && (o instanceof win.HTMLIFrameElement || !(o instanceof win.Element)), "Argument is not a HTMLIFrameElement (or a non-Element mock); " + "got: %s", goog.dom.asserts.debugStringForType_(o))
            }
            return o
          };
          goog.dom.asserts.assertIsHTMLObjectElement = function (o) {
            if (goog.asserts.ENABLE_ASSERTS) {
              var win = goog.dom.asserts.getWindow_(o);
              if (typeof win.HTMLObjectElement != "undefined" && typeof win.Element != "undefined") goog.asserts.assert(o && (o instanceof win.HTMLObjectElement || !(o instanceof win.Element)), "Argument is not a HTMLObjectElement (or a non-Element mock); " + "got: %s", goog.dom.asserts.debugStringForType_(o))
            }
            return o
          };
          goog.dom.asserts.assertIsHTMLScriptElement = function (o) {
            if (goog.asserts.ENABLE_ASSERTS) {
              var win = goog.dom.asserts.getWindow_(o);
              if (typeof win.HTMLScriptElement != "undefined" && typeof win.Element != "undefined") goog.asserts.assert(o && (o instanceof win.HTMLScriptElement || !(o instanceof win.Element)), "Argument is not a HTMLScriptElement (or a non-Element mock); " + "got: %s", goog.dom.asserts.debugStringForType_(o))
            }
            return o
          };
          goog.dom.asserts.debugStringForType_ = function (value) {
            if (goog.isObject(value)) return value.constructor.displayName || value.constructor.name || Object.prototype.toString.call(value); else return value === undefined ? "undefined" : value === null ? "null" : typeof value
          };
          goog.dom.asserts.getWindow_ = function (o) {
            var doc = o && o.ownerDocument;
            var win = doc && (doc.defaultView || doc.parentWindow);
            return win || goog.global
          };
          goog.provide("goog.dom.tags");
          goog.require("goog.object");
          goog.dom.tags.VOID_TAGS_ = goog.object.createSet("area", "base", "br", "col", "command", "embed", "hr", "img", "input", "keygen", "link", "meta", "param", "source", "track", "wbr");
          goog.dom.tags.isVoidTag = function (tagName) {
            return goog.dom.tags.VOID_TAGS_[tagName] === true
          };
          goog.provide("goog.string.TypedString");
          goog.string.TypedString = function () {
          };
          goog.string.TypedString.prototype.implementsGoogStringTypedString;
          goog.string.TypedString.prototype.getTypedStringValue;
          goog.provide("goog.string.Const");
          goog.require("goog.asserts");
          goog.require("goog.string.TypedString");
          goog.string.Const = function () {
            this.stringConstValueWithSecurityContract__googStringSecurityPrivate_ = "";
            this.STRING_CONST_TYPE_MARKER__GOOG_STRING_SECURITY_PRIVATE_ = goog.string.Const.TYPE_MARKER_
          };
          goog.string.Const.prototype.implementsGoogStringTypedString = true;
          goog.string.Const.prototype.getTypedStringValue = function () {
            return this.stringConstValueWithSecurityContract__googStringSecurityPrivate_
          };
          goog.string.Const.prototype.toString = function () {
            return "Const{" + this.stringConstValueWithSecurityContract__googStringSecurityPrivate_ + "}"
          };
          goog.string.Const.unwrap = function (stringConst) {
            if (stringConst instanceof goog.string.Const && stringConst.constructor === goog.string.Const && stringConst.STRING_CONST_TYPE_MARKER__GOOG_STRING_SECURITY_PRIVATE_ === goog.string.Const.TYPE_MARKER_) return stringConst.stringConstValueWithSecurityContract__googStringSecurityPrivate_; else {
              goog.asserts.fail("expected object of type Const, got '" + stringConst + "'");
              return "type_error:Const"
            }
          };
          goog.string.Const.from = function (s) {
            return goog.string.Const.create__googStringSecurityPrivate_(s)
          };
          goog.string.Const.TYPE_MARKER_ = {};
          goog.string.Const.create__googStringSecurityPrivate_ = function (s) {
            var stringConst = new goog.string.Const;
            stringConst.stringConstValueWithSecurityContract__googStringSecurityPrivate_ = s;
            return stringConst
          };
          goog.string.Const.EMPTY = goog.string.Const.from("");
          goog.provide("goog.html.SafeScript");
          goog.require("goog.asserts");
          goog.require("goog.string.Const");
          goog.require("goog.string.TypedString");
          goog.html.SafeScript = function () {
            this.privateDoNotAccessOrElseSafeScriptWrappedValue_ = "";
            this.SAFE_SCRIPT_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = goog.html.SafeScript.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_
          };
          goog.html.SafeScript.prototype.implementsGoogStringTypedString = true;
          goog.html.SafeScript.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {};
          goog.html.SafeScript.fromConstant = function (script) {
            var scriptString = goog.string.Const.unwrap(script);
            if (scriptString.length === 0) return goog.html.SafeScript.EMPTY;
            return goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(scriptString)
          };
          goog.html.SafeScript.prototype.getTypedStringValue = function () {
            return this.privateDoNotAccessOrElseSafeScriptWrappedValue_
          };
          if (goog.DEBUG) goog.html.SafeScript.prototype.toString = function () {
            return "SafeScript{" + this.privateDoNotAccessOrElseSafeScriptWrappedValue_ + "}"
          };
          goog.html.SafeScript.unwrap = function (safeScript) {
            if (safeScript instanceof goog.html.SafeScript && safeScript.constructor === goog.html.SafeScript && safeScript.SAFE_SCRIPT_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ === goog.html.SafeScript.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_) return safeScript.privateDoNotAccessOrElseSafeScriptWrappedValue_; else {
              goog.asserts.fail("expected object of type SafeScript, got '" + safeScript + "' of type " + goog.typeOf(safeScript));
              return "type_error:SafeScript"
            }
          };
          goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse = function (script) {
            return (new goog.html.SafeScript).initSecurityPrivateDoNotAccessOrElse_(script)
          };
          goog.html.SafeScript.prototype.initSecurityPrivateDoNotAccessOrElse_ = function (script) {
            this.privateDoNotAccessOrElseSafeScriptWrappedValue_ = script;
            return this
          };
          goog.html.SafeScript.EMPTY = goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse("");
          goog.provide("goog.fs.url");
          goog.fs.url.createObjectUrl = function (blob) {
            return goog.fs.url.getUrlObject_().createObjectURL(blob)
          };
          goog.fs.url.revokeObjectUrl = function (url) {
            goog.fs.url.getUrlObject_().revokeObjectURL(url)
          };
          goog.fs.url.UrlObject_;
          goog.fs.url.getUrlObject_ = function () {
            var urlObject = goog.fs.url.findUrlObject_();
            if (urlObject != null) return urlObject; else throw new Error("This browser doesn't seem to support blob URLs");
          };
          goog.fs.url.findUrlObject_ = function () {
            if (goog.isDef(goog.global.URL) && goog.isDef(goog.global.URL.createObjectURL)) return goog.global.URL; else if (goog.isDef(goog.global.webkitURL) && goog.isDef(goog.global.webkitURL.createObjectURL)) return goog.global.webkitURL; else if (goog.isDef(goog.global.createObjectURL)) return goog.global; else return null
          };
          goog.fs.url.browserSupportsObjectUrls = function () {
            return goog.fs.url.findUrlObject_() != null
          };
          goog.provide("goog.i18n.bidi");
          goog.provide("goog.i18n.bidi.Dir");
          goog.provide("goog.i18n.bidi.DirectionalString");
          goog.provide("goog.i18n.bidi.Format");
          goog.define("goog.i18n.bidi.FORCE_RTL", false);
          goog.i18n.bidi.IS_RTL = goog.i18n.bidi.FORCE_RTL || (goog.LOCALE.substring(0, 2).toLowerCase() == "ar" || goog.LOCALE.substring(0, 2).toLowerCase() == "fa" || goog.LOCALE.substring(0, 2).toLowerCase() == "he" || goog.LOCALE.substring(0, 2).toLowerCase() == "iw" || goog.LOCALE.substring(0, 2).toLowerCase() == "ps" || goog.LOCALE.substring(0, 2).toLowerCase() == "sd" || goog.LOCALE.substring(0, 2).toLowerCase() == "ug" || goog.LOCALE.substring(0, 2).toLowerCase() == "ur" || goog.LOCALE.substring(0, 2).toLowerCase() == "yi") && (goog.LOCALE.length ==
            2 || goog.LOCALE.substring(2, 3) == "-" || goog.LOCALE.substring(2, 3) == "_") || goog.LOCALE.length >= 3 && goog.LOCALE.substring(0, 3).toLowerCase() == "ckb" && (goog.LOCALE.length == 3 || goog.LOCALE.substring(3, 4) == "-" || goog.LOCALE.substring(3, 4) == "_");
          goog.i18n.bidi.Format = {LRE: "\u202a", RLE: "\u202b", PDF: "\u202c", LRM: "\u200e", RLM: "\u200f"};
          goog.i18n.bidi.Dir = {LTR: 1, RTL: -1, NEUTRAL: 0};
          goog.i18n.bidi.RIGHT = "right";
          goog.i18n.bidi.LEFT = "left";
          goog.i18n.bidi.I18N_RIGHT = goog.i18n.bidi.IS_RTL ? goog.i18n.bidi.LEFT : goog.i18n.bidi.RIGHT;
          goog.i18n.bidi.I18N_LEFT = goog.i18n.bidi.IS_RTL ? goog.i18n.bidi.RIGHT : goog.i18n.bidi.LEFT;
          goog.i18n.bidi.toDir = function (givenDir, opt_noNeutral) {
            if (typeof givenDir == "number") return givenDir > 0 ? goog.i18n.bidi.Dir.LTR : givenDir < 0 ? goog.i18n.bidi.Dir.RTL : opt_noNeutral ? null : goog.i18n.bidi.Dir.NEUTRAL; else if (givenDir == null) return null; else return givenDir ? goog.i18n.bidi.Dir.RTL : goog.i18n.bidi.Dir.LTR
          };
          goog.i18n.bidi.ltrChars_ = "A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff" + "\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff";
          goog.i18n.bidi.rtlChars_ = "\u0591-\u06ef\u06fa-\u07ff\u200f\ufb1d-\ufdff\ufe70-\ufefc";
          goog.i18n.bidi.htmlSkipReg_ = /<[^>]*>|&[^;]+;/g;
          goog.i18n.bidi.stripHtmlIfNeeded_ = function (str, opt_isStripNeeded) {
            return opt_isStripNeeded ? str.replace(goog.i18n.bidi.htmlSkipReg_, "") : str
          };
          goog.i18n.bidi.rtlCharReg_ = new RegExp("[" + goog.i18n.bidi.rtlChars_ + "]");
          goog.i18n.bidi.ltrCharReg_ = new RegExp("[" + goog.i18n.bidi.ltrChars_ + "]");
          goog.i18n.bidi.hasAnyRtl = function (str, opt_isHtml) {
            return goog.i18n.bidi.rtlCharReg_.test(goog.i18n.bidi.stripHtmlIfNeeded_(str, opt_isHtml))
          };
          goog.i18n.bidi.hasRtlChar = goog.i18n.bidi.hasAnyRtl;
          goog.i18n.bidi.hasAnyLtr = function (str, opt_isHtml) {
            return goog.i18n.bidi.ltrCharReg_.test(goog.i18n.bidi.stripHtmlIfNeeded_(str, opt_isHtml))
          };
          goog.i18n.bidi.ltrRe_ = new RegExp("^[" + goog.i18n.bidi.ltrChars_ + "]");
          goog.i18n.bidi.rtlRe_ = new RegExp("^[" + goog.i18n.bidi.rtlChars_ + "]");
          goog.i18n.bidi.isRtlChar = function (str) {
            return goog.i18n.bidi.rtlRe_.test(str)
          };
          goog.i18n.bidi.isLtrChar = function (str) {
            return goog.i18n.bidi.ltrRe_.test(str)
          };
          goog.i18n.bidi.isNeutralChar = function (str) {
            return !goog.i18n.bidi.isLtrChar(str) && !goog.i18n.bidi.isRtlChar(str)
          };
          goog.i18n.bidi.ltrDirCheckRe_ = new RegExp("^[^" + goog.i18n.bidi.rtlChars_ + "]*[" + goog.i18n.bidi.ltrChars_ + "]");
          goog.i18n.bidi.rtlDirCheckRe_ = new RegExp("^[^" + goog.i18n.bidi.ltrChars_ + "]*[" + goog.i18n.bidi.rtlChars_ + "]");
          goog.i18n.bidi.startsWithRtl = function (str, opt_isHtml) {
            return goog.i18n.bidi.rtlDirCheckRe_.test(goog.i18n.bidi.stripHtmlIfNeeded_(str, opt_isHtml))
          };
          goog.i18n.bidi.isRtlText = goog.i18n.bidi.startsWithRtl;
          goog.i18n.bidi.startsWithLtr = function (str, opt_isHtml) {
            return goog.i18n.bidi.ltrDirCheckRe_.test(goog.i18n.bidi.stripHtmlIfNeeded_(str, opt_isHtml))
          };
          goog.i18n.bidi.isLtrText = goog.i18n.bidi.startsWithLtr;
          goog.i18n.bidi.isRequiredLtrRe_ = /^http:\/\/.*/;
          goog.i18n.bidi.isNeutralText = function (str, opt_isHtml) {
            str = goog.i18n.bidi.stripHtmlIfNeeded_(str, opt_isHtml);
            return goog.i18n.bidi.isRequiredLtrRe_.test(str) || !goog.i18n.bidi.hasAnyLtr(str) && !goog.i18n.bidi.hasAnyRtl(str)
          };
          goog.i18n.bidi.ltrExitDirCheckRe_ = new RegExp("[" + goog.i18n.bidi.ltrChars_ + "][^" + goog.i18n.bidi.rtlChars_ + "]*$");
          goog.i18n.bidi.rtlExitDirCheckRe_ = new RegExp("[" + goog.i18n.bidi.rtlChars_ + "][^" + goog.i18n.bidi.ltrChars_ + "]*$");
          goog.i18n.bidi.endsWithLtr = function (str, opt_isHtml) {
            return goog.i18n.bidi.ltrExitDirCheckRe_.test(goog.i18n.bidi.stripHtmlIfNeeded_(str, opt_isHtml))
          };
          goog.i18n.bidi.isLtrExitText = goog.i18n.bidi.endsWithLtr;
          goog.i18n.bidi.endsWithRtl = function (str, opt_isHtml) {
            return goog.i18n.bidi.rtlExitDirCheckRe_.test(goog.i18n.bidi.stripHtmlIfNeeded_(str, opt_isHtml))
          };
          goog.i18n.bidi.isRtlExitText = goog.i18n.bidi.endsWithRtl;
          goog.i18n.bidi.rtlLocalesRe_ = new RegExp("^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|" + ".*[-_](Arab|Hebr|Thaa|Nkoo|Tfng))" + "(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)", "i");
          goog.i18n.bidi.isRtlLanguage = function (lang) {
            return goog.i18n.bidi.rtlLocalesRe_.test(lang)
          };
          goog.i18n.bidi.bracketGuardTextRe_ = /(\(.*?\)+)|(\[.*?\]+)|(\{.*?\}+)|(<.*?>+)/g;
          goog.i18n.bidi.guardBracketInText = function (s, opt_isRtlContext) {
            var useRtl = opt_isRtlContext === undefined ? goog.i18n.bidi.hasAnyRtl(s) : opt_isRtlContext;
            var mark = useRtl ? goog.i18n.bidi.Format.RLM : goog.i18n.bidi.Format.LRM;
            return s.replace(goog.i18n.bidi.bracketGuardTextRe_, mark + "$&" + mark)
          };
          goog.i18n.bidi.enforceRtlInHtml = function (html) {
            if (html.charAt(0) == "<") return html.replace(/<\w+/, "$& dir=rtl");
            return "\n<span dir=rtl>" + html + "</span>"
          };
          goog.i18n.bidi.enforceRtlInText = function (text) {
            return goog.i18n.bidi.Format.RLE + text + goog.i18n.bidi.Format.PDF
          };
          goog.i18n.bidi.enforceLtrInHtml = function (html) {
            if (html.charAt(0) == "<") return html.replace(/<\w+/, "$& dir=ltr");
            return "\n<span dir=ltr>" + html + "</span>"
          };
          goog.i18n.bidi.enforceLtrInText = function (text) {
            return goog.i18n.bidi.Format.LRE + text + goog.i18n.bidi.Format.PDF
          };
          goog.i18n.bidi.dimensionsRe_ = /:\s*([.\d][.\w]*)\s+([.\d][.\w]*)\s+([.\d][.\w]*)\s+([.\d][.\w]*)/g;
          goog.i18n.bidi.leftRe_ = /left/gi;
          goog.i18n.bidi.rightRe_ = /right/gi;
          goog.i18n.bidi.tempRe_ = /%%%%/g;
          goog.i18n.bidi.mirrorCSS = function (cssStr) {
            return cssStr.replace(goog.i18n.bidi.dimensionsRe_, ":$1 $4 $3 $2").replace(goog.i18n.bidi.leftRe_, "%%%%").replace(goog.i18n.bidi.rightRe_, goog.i18n.bidi.LEFT).replace(goog.i18n.bidi.tempRe_, goog.i18n.bidi.RIGHT)
          };
          goog.i18n.bidi.doubleQuoteSubstituteRe_ = /([\u0591-\u05f2])"/g;
          goog.i18n.bidi.singleQuoteSubstituteRe_ = /([\u0591-\u05f2])'/g;
          goog.i18n.bidi.normalizeHebrewQuote = function (str) {
            return str.replace(goog.i18n.bidi.doubleQuoteSubstituteRe_, "$1\u05f4").replace(goog.i18n.bidi.singleQuoteSubstituteRe_, "$1\u05f3")
          };
          goog.i18n.bidi.wordSeparatorRe_ = /\s+/;
          goog.i18n.bidi.hasNumeralsRe_ = /[\d\u06f0-\u06f9]/;
          goog.i18n.bidi.rtlDetectionThreshold_ = .4;
          goog.i18n.bidi.estimateDirection = function (str, opt_isHtml) {
            var rtlCount = 0;
            var totalCount = 0;
            var hasWeaklyLtr = false;
            var tokens = goog.i18n.bidi.stripHtmlIfNeeded_(str, opt_isHtml).split(goog.i18n.bidi.wordSeparatorRe_);
            for (var i = 0; i < tokens.length; i++) {
              var token = tokens[i];
              if (goog.i18n.bidi.startsWithRtl(token)) {
                rtlCount++;
                totalCount++
              } else if (goog.i18n.bidi.isRequiredLtrRe_.test(token)) hasWeaklyLtr = true; else if (goog.i18n.bidi.hasAnyLtr(token)) totalCount++; else if (goog.i18n.bidi.hasNumeralsRe_.test(token)) hasWeaklyLtr =
                true
            }
            return totalCount == 0 ? hasWeaklyLtr ? goog.i18n.bidi.Dir.LTR : goog.i18n.bidi.Dir.NEUTRAL : rtlCount / totalCount > goog.i18n.bidi.rtlDetectionThreshold_ ? goog.i18n.bidi.Dir.RTL : goog.i18n.bidi.Dir.LTR
          };
          goog.i18n.bidi.detectRtlDirectionality = function (str, opt_isHtml) {
            return goog.i18n.bidi.estimateDirection(str, opt_isHtml) == goog.i18n.bidi.Dir.RTL
          };
          goog.i18n.bidi.setElementDirAndAlign = function (element, dir) {
            if (element) {
              dir = goog.i18n.bidi.toDir(dir);
              if (dir) {
                element.style.textAlign = dir == goog.i18n.bidi.Dir.RTL ? goog.i18n.bidi.RIGHT : goog.i18n.bidi.LEFT;
                element.dir = dir == goog.i18n.bidi.Dir.RTL ? "rtl" : "ltr"
              }
            }
          };
          goog.i18n.bidi.setElementDirByTextDirectionality = function (element, text) {
            switch (goog.i18n.bidi.estimateDirection(text)) {
              case goog.i18n.bidi.Dir.LTR:
                element.dir = "ltr";
                break;
              case goog.i18n.bidi.Dir.RTL:
                element.dir = "rtl";
                break;
              default:
                element.removeAttribute("dir")
            }
          };
          goog.i18n.bidi.DirectionalString = function () {
          };
          goog.i18n.bidi.DirectionalString.prototype.implementsGoogI18nBidiDirectionalString;
          goog.i18n.bidi.DirectionalString.prototype.getDirection;
          goog.provide("goog.html.TrustedResourceUrl");
          goog.require("goog.asserts");
          goog.require("goog.i18n.bidi.Dir");
          goog.require("goog.i18n.bidi.DirectionalString");
          goog.require("goog.string.Const");
          goog.require("goog.string.TypedString");
          goog.html.TrustedResourceUrl = function () {
            this.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_ = "";
            this.TRUSTED_RESOURCE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = goog.html.TrustedResourceUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_
          };
          goog.html.TrustedResourceUrl.prototype.implementsGoogStringTypedString = true;
          goog.html.TrustedResourceUrl.prototype.getTypedStringValue = function () {
            return this.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_
          };
          goog.html.TrustedResourceUrl.prototype.implementsGoogI18nBidiDirectionalString = true;
          goog.html.TrustedResourceUrl.prototype.getDirection = function () {
            return goog.i18n.bidi.Dir.LTR
          };
          if (goog.DEBUG) goog.html.TrustedResourceUrl.prototype.toString = function () {
            return "TrustedResourceUrl{" + this.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_ + "}"
          };
          goog.html.TrustedResourceUrl.unwrap = function (trustedResourceUrl) {
            if (trustedResourceUrl instanceof goog.html.TrustedResourceUrl && trustedResourceUrl.constructor === goog.html.TrustedResourceUrl && trustedResourceUrl.TRUSTED_RESOURCE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ === goog.html.TrustedResourceUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_) return trustedResourceUrl.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_; else {
              goog.asserts.fail("expected object of type TrustedResourceUrl, got '" + trustedResourceUrl +
                "' of type " + goog.typeOf(trustedResourceUrl));
              return "type_error:TrustedResourceUrl"
            }
          };
          goog.html.TrustedResourceUrl.format = function (format, args) {
            var result = goog.html.TrustedResourceUrl.format_(format, args);
            return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(result)
          };
          goog.html.TrustedResourceUrl.format_ = function (format, args) {
            var formatStr = goog.string.Const.unwrap(format);
            if (!goog.html.TrustedResourceUrl.BASE_URL_.test(formatStr)) throw new Error("Invalid TrustedResourceUrl format: " + formatStr);
            return formatStr.replace(goog.html.TrustedResourceUrl.FORMAT_MARKER_, function (match, id) {
              if (!Object.prototype.hasOwnProperty.call(args, id)) throw new Error('Found marker, "' + id + '", in format string, "' + formatStr + '", but no valid label mapping found ' + "in args: " + JSON.stringify(args));
              var arg = args[id];
              if (arg instanceof goog.string.Const) return goog.string.Const.unwrap(arg); else return encodeURIComponent(String(arg))
            })
          };
          goog.html.TrustedResourceUrl.FORMAT_MARKER_ = /%{(\w+)}/g;
          goog.html.TrustedResourceUrl.BASE_URL_ = /^(?:https:)?\/\/[0-9a-z.:[\]-]+\/|^\/[^\/\\]|^about:blank(#|$)/i;
          goog.html.TrustedResourceUrl.formatWithParams = function (format, args, params) {
            var url = goog.html.TrustedResourceUrl.format_(format, args);
            var separator = /\?/.test(url) ? "&" : "?";
            for (var key in params) {
              var values = goog.isArray(params[key]) ? params[key] : [params[key]];
              for (var i = 0; i < values.length; i++) {
                if (values[i] == null) continue;
                url += separator + encodeURIComponent(key) + "=" + encodeURIComponent(String(values[i]));
                separator = "&"
              }
            }
            return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(url)
          };
          goog.html.TrustedResourceUrl.fromConstant = function (url) {
            return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(goog.string.Const.unwrap(url))
          };
          goog.html.TrustedResourceUrl.fromConstants = function (parts) {
            var unwrapped = "";
            for (var i = 0; i < parts.length; i++) unwrapped += goog.string.Const.unwrap(parts[i]);
            return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(unwrapped)
          };
          goog.html.TrustedResourceUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {};
          goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse = function (url) {
            var trustedResourceUrl = new goog.html.TrustedResourceUrl;
            trustedResourceUrl.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_ = url;
            return trustedResourceUrl
          };
          goog.provide("goog.html.SafeUrl");
          goog.require("goog.asserts");
          goog.require("goog.fs.url");
          goog.require("goog.html.TrustedResourceUrl");
          goog.require("goog.i18n.bidi.Dir");
          goog.require("goog.i18n.bidi.DirectionalString");
          goog.require("goog.string");
          goog.require("goog.string.Const");
          goog.require("goog.string.TypedString");
          goog.html.SafeUrl = function () {
            this.privateDoNotAccessOrElseSafeHtmlWrappedValue_ = "";
            this.SAFE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = goog.html.SafeUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_
          };
          goog.html.SafeUrl.INNOCUOUS_STRING = "about:invalid#zClosurez";
          goog.html.SafeUrl.prototype.implementsGoogStringTypedString = true;
          goog.html.SafeUrl.prototype.getTypedStringValue = function () {
            return this.privateDoNotAccessOrElseSafeHtmlWrappedValue_
          };
          goog.html.SafeUrl.prototype.implementsGoogI18nBidiDirectionalString = true;
          goog.html.SafeUrl.prototype.getDirection = function () {
            return goog.i18n.bidi.Dir.LTR
          };
          if (goog.DEBUG) goog.html.SafeUrl.prototype.toString = function () {
            return "SafeUrl{" + this.privateDoNotAccessOrElseSafeHtmlWrappedValue_ + "}"
          };
          goog.html.SafeUrl.unwrap = function (safeUrl) {
            if (safeUrl instanceof goog.html.SafeUrl && safeUrl.constructor === goog.html.SafeUrl && safeUrl.SAFE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ === goog.html.SafeUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_) return safeUrl.privateDoNotAccessOrElseSafeHtmlWrappedValue_; else {
              goog.asserts.fail("expected object of type SafeUrl, got '" + safeUrl + "' of type " + goog.typeOf(safeUrl));
              return "type_error:SafeUrl"
            }
          };
          goog.html.SafeUrl.fromConstant = function (url) {
            return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(goog.string.Const.unwrap(url))
          };
          goog.html.SAFE_MIME_TYPE_PATTERN_ = new RegExp("^(?:audio/(?:3gpp|3gpp2|aac|midi|mp4|mpeg|ogg|x-m4a|x-wav|webm)|" + "image/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|" + "text/csv|" + "video/(?:mpeg|mp4|ogg|webm))$", "i");
          goog.html.SafeUrl.fromBlob = function (blob) {
            var url = goog.html.SAFE_MIME_TYPE_PATTERN_.test(blob.type) ? goog.fs.url.createObjectUrl(blob) : goog.html.SafeUrl.INNOCUOUS_STRING;
            return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(url)
          };
          goog.html.DATA_URL_PATTERN_ = /^data:([^;,]*);base64,[a-z0-9+\/]+=*$/i;
          goog.html.SafeUrl.fromDataUrl = function (dataUrl) {
            var match = dataUrl.match(goog.html.DATA_URL_PATTERN_);
            var valid = match && goog.html.SAFE_MIME_TYPE_PATTERN_.test(match[1]);
            return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(valid ? dataUrl : goog.html.SafeUrl.INNOCUOUS_STRING)
          };
          goog.html.SafeUrl.fromTelUrl = function (telUrl) {
            if (!goog.string.caseInsensitiveStartsWith(telUrl, "tel:")) telUrl = goog.html.SafeUrl.INNOCUOUS_STRING;
            return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(telUrl)
          };
          goog.html.SafeUrl.fromTrustedResourceUrl = function (trustedResourceUrl) {
            return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(goog.html.TrustedResourceUrl.unwrap(trustedResourceUrl))
          };
          goog.html.SAFE_URL_PATTERN_ = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
          goog.html.SafeUrl.sanitize = function (url) {
            if (url instanceof goog.html.SafeUrl) return url; else if (url.implementsGoogStringTypedString) url = url.getTypedStringValue(); else url = String(url);
            if (!goog.html.SAFE_URL_PATTERN_.test(url)) url = goog.html.SafeUrl.INNOCUOUS_STRING;
            return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(url)
          };
          goog.html.SafeUrl.sanitizeAssertUnchanged = function (url) {
            if (url instanceof goog.html.SafeUrl) return url; else if (url.implementsGoogStringTypedString) url = url.getTypedStringValue(); else url = String(url);
            if (!goog.asserts.assert(goog.html.SAFE_URL_PATTERN_.test(url))) url = goog.html.SafeUrl.INNOCUOUS_STRING;
            return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(url)
          };
          goog.html.SafeUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {};
          goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse = function (url) {
            var safeUrl = new goog.html.SafeUrl;
            safeUrl.privateDoNotAccessOrElseSafeHtmlWrappedValue_ = url;
            return safeUrl
          };
          goog.html.SafeUrl.ABOUT_BLANK = goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse("about:blank");
          goog.provide("goog.html.SafeStyle");
          goog.require("goog.array");
          goog.require("goog.asserts");
          goog.require("goog.html.SafeUrl");
          goog.require("goog.string");
          goog.require("goog.string.Const");
          goog.require("goog.string.TypedString");
          goog.html.SafeStyle = function () {
            this.privateDoNotAccessOrElseSafeStyleWrappedValue_ = "";
            this.SAFE_STYLE_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = goog.html.SafeStyle.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_
          };
          goog.html.SafeStyle.prototype.implementsGoogStringTypedString = true;
          goog.html.SafeStyle.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {};
          goog.html.SafeStyle.fromConstant = function (style) {
            var styleString = goog.string.Const.unwrap(style);
            if (styleString.length === 0) return goog.html.SafeStyle.EMPTY;
            goog.html.SafeStyle.checkStyle_(styleString);
            goog.asserts.assert(goog.string.endsWith(styleString, ";"), "Last character of style string is not ';': " + styleString);
            goog.asserts.assert(goog.string.contains(styleString, ":"), "Style string must contain at least one ':', to " + 'specify a "name: value" pair: ' + styleString);
            return goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(styleString)
          };
          goog.html.SafeStyle.checkStyle_ = function (style) {
            goog.asserts.assert(!/[<>]/.test(style), "Forbidden characters in style string: " + style)
          };
          goog.html.SafeStyle.prototype.getTypedStringValue = function () {
            return this.privateDoNotAccessOrElseSafeStyleWrappedValue_
          };
          if (goog.DEBUG) goog.html.SafeStyle.prototype.toString = function () {
            return "SafeStyle{" + this.privateDoNotAccessOrElseSafeStyleWrappedValue_ + "}"
          };
          goog.html.SafeStyle.unwrap = function (safeStyle) {
            if (safeStyle instanceof goog.html.SafeStyle && safeStyle.constructor === goog.html.SafeStyle && safeStyle.SAFE_STYLE_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ === goog.html.SafeStyle.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_) return safeStyle.privateDoNotAccessOrElseSafeStyleWrappedValue_; else {
              goog.asserts.fail("expected object of type SafeStyle, got '" + safeStyle + "' of type " + goog.typeOf(safeStyle));
              return "type_error:SafeStyle"
            }
          };
          goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse = function (style) {
            return (new goog.html.SafeStyle).initSecurityPrivateDoNotAccessOrElse_(style)
          };
          goog.html.SafeStyle.prototype.initSecurityPrivateDoNotAccessOrElse_ = function (style) {
            this.privateDoNotAccessOrElseSafeStyleWrappedValue_ = style;
            return this
          };
          goog.html.SafeStyle.EMPTY = goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse("");
          goog.html.SafeStyle.INNOCUOUS_STRING = "zClosurez";
          goog.html.SafeStyle.PropertyValue;
          goog.html.SafeStyle.PropertyMap;
          goog.html.SafeStyle.create = function (map) {
            var style = "";
            for (var name in map) {
              if (!/^[-_a-zA-Z0-9]+$/.test(name)) throw new Error("Name allows only [-_a-zA-Z0-9], got: " + name);
              var value = map[name];
              if (value == null) continue;
              if (goog.isArray(value)) value = goog.array.map(value, goog.html.SafeStyle.sanitizePropertyValue_).join(" "); else value = goog.html.SafeStyle.sanitizePropertyValue_(value);
              style += name + ":" + value + ";"
            }
            if (!style) return goog.html.SafeStyle.EMPTY;
            goog.html.SafeStyle.checkStyle_(style);
            return goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(style)
          };
          goog.html.SafeStyle.sanitizePropertyValue_ = function (value) {
            if (value instanceof goog.html.SafeUrl) {
              var url = goog.html.SafeUrl.unwrap(value);
              return 'url("' + url.replace(/</g, "%3c").replace(/[\\"]/g, "\\$&") + '")'
            }
            var result = value instanceof goog.string.Const ? goog.string.Const.unwrap(value) : goog.html.SafeStyle.sanitizePropertyValueString_(String(value));
            goog.asserts.assert(!/[{;}]/.test(result), "Value does not allow [{;}].");
            return result
          };
          goog.html.SafeStyle.sanitizePropertyValueString_ = function (value) {
            var valueWithoutFunctions = value.replace(goog.html.SafeUrl.FUNCTIONS_RE_, "$1").replace(goog.html.SafeUrl.URL_RE_, "url");
            if (!goog.html.SafeStyle.VALUE_RE_.test(valueWithoutFunctions)) {
              goog.asserts.fail("String value allows only " + goog.html.SafeStyle.VALUE_ALLOWED_CHARS_ + " and simple functions, got: " + value);
              return goog.html.SafeStyle.INNOCUOUS_STRING
            } else if (!goog.html.SafeStyle.hasBalancedQuotes_(value)) {
              goog.asserts.fail("String value requires balanced quotes, got: " +
                value);
              return goog.html.SafeStyle.INNOCUOUS_STRING
            }
            return goog.html.SafeStyle.sanitizeUrl_(value)
          };
          goog.html.SafeStyle.hasBalancedQuotes_ = function (value) {
            var outsideSingle = true;
            var outsideDouble = true;
            for (var i = 0; i < value.length; i++) {
              var c = value.charAt(i);
              if (c == "'" && outsideDouble) outsideSingle = !outsideSingle; else if (c == '"' && outsideSingle) outsideDouble = !outsideDouble
            }
            return outsideSingle && outsideDouble
          };
          goog.html.SafeStyle.VALUE_ALLOWED_CHARS_ = "[-,.\"'%_!# a-zA-Z0-9]";
          goog.html.SafeStyle.VALUE_RE_ = new RegExp("^" + goog.html.SafeStyle.VALUE_ALLOWED_CHARS_ + "+$");
          goog.html.SafeUrl.URL_RE_ = new RegExp("\\b(url\\([ \t\n]*)(" + "'[ -&(-\\[\\]-~]*'" + '|"[ !#-\\[\\]-~]*"' + "|[!#-&*-\\[\\]-~]*" + ")([ \t\n]*\\))", "g");
          goog.html.SafeUrl.FUNCTIONS_RE_ = new RegExp("\\b(hsl|hsla|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?)" + "\\([-0-9a-z.%, ]+\\)", "g");
          goog.html.SafeStyle.sanitizeUrl_ = function (value) {
            return value.replace(goog.html.SafeUrl.URL_RE_, function (match, before, url, after) {
              var quote = "";
              url = url.replace(/^(['"])(.*)\1$/, function (match, start, inside) {
                quote = start;
                return inside
              });
              var sanitized = goog.html.SafeUrl.sanitize(url).getTypedStringValue();
              return before + quote + sanitized + quote + after
            })
          };
          goog.html.SafeStyle.concat = function (var_args) {
            var style = "";
            var addArgument = function (argument) {
              if (goog.isArray(argument)) goog.array.forEach(argument, addArgument); else style += goog.html.SafeStyle.unwrap(argument)
            };
            goog.array.forEach(arguments, addArgument);
            if (!style) return goog.html.SafeStyle.EMPTY;
            return goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(style)
          };
          goog.provide("goog.html.SafeStyleSheet");
          goog.require("goog.array");
          goog.require("goog.asserts");
          goog.require("goog.html.SafeStyle");
          goog.require("goog.object");
          goog.require("goog.string");
          goog.require("goog.string.Const");
          goog.require("goog.string.TypedString");
          goog.html.SafeStyleSheet = function () {
            this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_ = "";
            this.SAFE_STYLE_SHEET_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = goog.html.SafeStyleSheet.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_
          };
          goog.html.SafeStyleSheet.prototype.implementsGoogStringTypedString = true;
          goog.html.SafeStyleSheet.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {};
          goog.html.SafeStyleSheet.createRule = function (selector, style) {
            if (goog.string.contains(selector, "<")) throw new Error("Selector does not allow '<', got: " + selector);
            var selectorToCheck = selector.replace(/('|")((?!\1)[^\r\n\f\\]|\\[\s\S])*\1/g, "");
            if (!/^[-_a-zA-Z0-9#.:* ,>+~[\]()=^$|]+$/.test(selectorToCheck)) throw new Error("Selector allows only [-_a-zA-Z0-9#.:* ,>+~[\\]()=^$|] and " + "strings, got: " + selector);
            if (!goog.html.SafeStyleSheet.hasBalancedBrackets_(selectorToCheck)) throw new Error("() and [] in selector must be balanced, got: " +
              selector);
            if (!(style instanceof goog.html.SafeStyle)) style = goog.html.SafeStyle.create(style);
            var styleSheet = selector + "{" + goog.html.SafeStyle.unwrap(style) + "}";
            return goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(styleSheet)
          };
          goog.html.SafeStyleSheet.hasBalancedBrackets_ = function (s) {
            var brackets = {"(": ")", "[": "]"};
            var expectedBrackets = [];
            for (var i = 0; i < s.length; i++) {
              var ch = s[i];
              if (brackets[ch]) expectedBrackets.push(brackets[ch]); else if (goog.object.contains(brackets, ch)) if (expectedBrackets.pop() != ch) return false
            }
            return expectedBrackets.length == 0
          };
          goog.html.SafeStyleSheet.concat = function (var_args) {
            var result = "";
            var addArgument = function (argument) {
              if (goog.isArray(argument)) goog.array.forEach(argument, addArgument); else result += goog.html.SafeStyleSheet.unwrap(argument)
            };
            goog.array.forEach(arguments, addArgument);
            return goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(result)
          };
          goog.html.SafeStyleSheet.fromConstant = function (styleSheet) {
            var styleSheetString = goog.string.Const.unwrap(styleSheet);
            if (styleSheetString.length === 0) return goog.html.SafeStyleSheet.EMPTY;
            goog.asserts.assert(!goog.string.contains(styleSheetString, "<"), "Forbidden '<' character in style sheet string: " + styleSheetString);
            return goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(styleSheetString)
          };
          goog.html.SafeStyleSheet.prototype.getTypedStringValue = function () {
            return this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_
          };
          if (goog.DEBUG) goog.html.SafeStyleSheet.prototype.toString = function () {
            return "SafeStyleSheet{" + this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_ + "}"
          };
          goog.html.SafeStyleSheet.unwrap = function (safeStyleSheet) {
            if (safeStyleSheet instanceof goog.html.SafeStyleSheet && safeStyleSheet.constructor === goog.html.SafeStyleSheet && safeStyleSheet.SAFE_STYLE_SHEET_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ === goog.html.SafeStyleSheet.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_) return safeStyleSheet.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_; else {
              goog.asserts.fail("expected object of type SafeStyleSheet, got '" + safeStyleSheet + "' of type " + goog.typeOf(safeStyleSheet));
              return "type_error:SafeStyleSheet"
            }
          };
          goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse = function (styleSheet) {
            return (new goog.html.SafeStyleSheet).initSecurityPrivateDoNotAccessOrElse_(styleSheet)
          };
          goog.html.SafeStyleSheet.prototype.initSecurityPrivateDoNotAccessOrElse_ = function (styleSheet) {
            this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_ = styleSheet;
            return this
          };
          goog.html.SafeStyleSheet.EMPTY = goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse("");
          goog.provide("goog.html.SafeHtml");
          goog.require("goog.array");
          goog.require("goog.asserts");
          goog.require("goog.dom.TagName");
          goog.require("goog.dom.tags");
          goog.require("goog.html.SafeScript");
          goog.require("goog.html.SafeStyle");
          goog.require("goog.html.SafeStyleSheet");
          goog.require("goog.html.SafeUrl");
          goog.require("goog.html.TrustedResourceUrl");
          goog.require("goog.i18n.bidi.Dir");
          goog.require("goog.i18n.bidi.DirectionalString");
          goog.require("goog.labs.userAgent.browser");
          goog.require("goog.object");
          goog.require("goog.string");
          goog.require("goog.string.Const");
          goog.require("goog.string.TypedString");
          goog.html.SafeHtml = function () {
            this.privateDoNotAccessOrElseSafeHtmlWrappedValue_ = "";
            this.SAFE_HTML_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = goog.html.SafeHtml.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_;
            this.dir_ = null
          };
          goog.html.SafeHtml.prototype.implementsGoogI18nBidiDirectionalString = true;
          goog.html.SafeHtml.prototype.getDirection = function () {
            return this.dir_
          };
          goog.html.SafeHtml.prototype.implementsGoogStringTypedString = true;
          goog.html.SafeHtml.prototype.getTypedStringValue = function () {
            return this.privateDoNotAccessOrElseSafeHtmlWrappedValue_
          };
          if (goog.DEBUG) goog.html.SafeHtml.prototype.toString = function () {
            return "SafeHtml{" + this.privateDoNotAccessOrElseSafeHtmlWrappedValue_ + "}"
          };
          goog.html.SafeHtml.unwrap = function (safeHtml) {
            if (safeHtml instanceof goog.html.SafeHtml && safeHtml.constructor === goog.html.SafeHtml && safeHtml.SAFE_HTML_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ === goog.html.SafeHtml.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_) return safeHtml.privateDoNotAccessOrElseSafeHtmlWrappedValue_; else {
              goog.asserts.fail("expected object of type SafeHtml, got '" + safeHtml + "' of type " + goog.typeOf(safeHtml));
              return "type_error:SafeHtml"
            }
          };
          goog.html.SafeHtml.TextOrHtml_;
          goog.html.SafeHtml.htmlEscape = function (textOrHtml) {
            if (textOrHtml instanceof goog.html.SafeHtml) return textOrHtml;
            var dir = null;
            if (textOrHtml.implementsGoogI18nBidiDirectionalString) dir = textOrHtml.getDirection();
            var textAsString;
            if (textOrHtml.implementsGoogStringTypedString) textAsString = textOrHtml.getTypedStringValue(); else textAsString = String(textOrHtml);
            return goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(goog.string.htmlEscape(textAsString), dir)
          };
          goog.html.SafeHtml.htmlEscapePreservingNewlines = function (textOrHtml) {
            if (textOrHtml instanceof goog.html.SafeHtml) return textOrHtml;
            var html = goog.html.SafeHtml.htmlEscape(textOrHtml);
            return goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(goog.string.newLineToBr(goog.html.SafeHtml.unwrap(html)), html.getDirection())
          };
          goog.html.SafeHtml.htmlEscapePreservingNewlinesAndSpaces = function (textOrHtml) {
            if (textOrHtml instanceof goog.html.SafeHtml) return textOrHtml;
            var html = goog.html.SafeHtml.htmlEscape(textOrHtml);
            return goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(goog.string.whitespaceEscape(goog.html.SafeHtml.unwrap(html)), html.getDirection())
          };
          goog.html.SafeHtml.from = goog.html.SafeHtml.htmlEscape;
          goog.html.SafeHtml.VALID_NAMES_IN_TAG_ = /^[a-zA-Z0-9-]+$/;
          goog.html.SafeHtml.URL_ATTRIBUTES_ = goog.object.createSet("action", "cite", "data", "formaction", "href", "manifest", "poster", "src");
          goog.html.SafeHtml.NOT_ALLOWED_TAG_NAMES_ = goog.object.createSet(goog.dom.TagName.APPLET, goog.dom.TagName.BASE, goog.dom.TagName.EMBED, goog.dom.TagName.IFRAME, goog.dom.TagName.LINK, goog.dom.TagName.MATH, goog.dom.TagName.META, goog.dom.TagName.OBJECT, goog.dom.TagName.SCRIPT, goog.dom.TagName.STYLE, goog.dom.TagName.SVG, goog.dom.TagName.TEMPLATE);
          goog.html.SafeHtml.AttributeValue;
          goog.html.SafeHtml.create = function (tagName, opt_attributes, opt_content) {
            goog.html.SafeHtml.verifyTagName(String(tagName));
            return goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse(String(tagName), opt_attributes, opt_content)
          };
          goog.html.SafeHtml.verifyTagName = function (tagName) {
            if (!goog.html.SafeHtml.VALID_NAMES_IN_TAG_.test(tagName)) throw new Error("Invalid tag name <" + tagName + ">.");
            if (tagName.toUpperCase() in goog.html.SafeHtml.NOT_ALLOWED_TAG_NAMES_) throw new Error("Tag name <" + tagName + "> is not allowed for SafeHtml.");
          };
          goog.html.SafeHtml.createIframe = function (opt_src, opt_srcdoc, opt_attributes, opt_content) {
            if (opt_src) goog.html.TrustedResourceUrl.unwrap(opt_src);
            var fixedAttributes = {};
            fixedAttributes["src"] = opt_src || null;
            fixedAttributes["srcdoc"] = opt_srcdoc && goog.html.SafeHtml.unwrap(opt_srcdoc);
            var defaultAttributes = {"sandbox": ""};
            var attributes = goog.html.SafeHtml.combineAttributes(fixedAttributes, defaultAttributes, opt_attributes);
            return goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("iframe",
              attributes, opt_content)
          };
          goog.html.SafeHtml.createSandboxIframe = function (opt_src, opt_srcdoc, opt_attributes, opt_content) {
            if (!goog.html.SafeHtml.canUseSandboxIframe()) throw new Error("The browser does not support sandboxed iframes.");
            var fixedAttributes = {};
            if (opt_src) fixedAttributes["src"] = goog.html.SafeUrl.unwrap(goog.html.SafeUrl.sanitize(opt_src)); else fixedAttributes["src"] = null;
            fixedAttributes["srcdoc"] = opt_srcdoc || null;
            fixedAttributes["sandbox"] = "";
            var attributes = goog.html.SafeHtml.combineAttributes(fixedAttributes, {},
              opt_attributes);
            return goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("iframe", attributes, opt_content)
          };
          goog.html.SafeHtml.canUseSandboxIframe = function () {
            return goog.global["HTMLIFrameElement"] && "sandbox" in goog.global["HTMLIFrameElement"].prototype
          };
          goog.html.SafeHtml.createScriptSrc = function (src, opt_attributes) {
            goog.html.TrustedResourceUrl.unwrap(src);
            var fixedAttributes = {"src": src};
            var defaultAttributes = {};
            var attributes = goog.html.SafeHtml.combineAttributes(fixedAttributes, defaultAttributes, opt_attributes);
            return goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("script", attributes)
          };
          goog.html.SafeHtml.createScript = function (script, opt_attributes) {
            for (var attr in opt_attributes) {
              var attrLower = attr.toLowerCase();
              if (attrLower == "language" || attrLower == "src" || attrLower == "text" || attrLower == "type") throw new Error('Cannot set "' + attrLower + '" attribute');
            }
            var content = "";
            script = goog.array.concat(script);
            for (var i = 0; i < script.length; i++) content += goog.html.SafeScript.unwrap(script[i]);
            var htmlContent = goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(content, goog.i18n.bidi.Dir.NEUTRAL);
            return goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("script", opt_attributes, htmlContent)
          };
          goog.html.SafeHtml.createStyle = function (styleSheet, opt_attributes) {
            var fixedAttributes = {"type": "text/css"};
            var defaultAttributes = {};
            var attributes = goog.html.SafeHtml.combineAttributes(fixedAttributes, defaultAttributes, opt_attributes);
            var content = "";
            styleSheet = goog.array.concat(styleSheet);
            for (var i = 0; i < styleSheet.length; i++) content += goog.html.SafeStyleSheet.unwrap(styleSheet[i]);
            var htmlContent = goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(content, goog.i18n.bidi.Dir.NEUTRAL);
            return goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("style",
              attributes, htmlContent)
          };
          goog.html.SafeHtml.createMetaRefresh = function (url, opt_secs) {
            var unwrappedUrl = goog.html.SafeUrl.unwrap(goog.html.SafeUrl.sanitize(url));
            if (goog.labs.userAgent.browser.isIE() || goog.labs.userAgent.browser.isEdge()) if (goog.string.contains(unwrappedUrl, ";")) unwrappedUrl = "'" + unwrappedUrl.replace(/'/g, "%27") + "'";
            var attributes = {"http-equiv": "refresh", "content": (opt_secs || 0) + "; url=" + unwrappedUrl};
            return goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("meta", attributes)
          };
          goog.html.SafeHtml.getAttrNameAndValue_ = function (tagName, name, value) {
            if (value instanceof goog.string.Const) value = goog.string.Const.unwrap(value); else if (name.toLowerCase() == "style") value = goog.html.SafeHtml.getStyleValue_(value); else if (/^on/i.test(name)) throw new Error('Attribute "' + name + '" requires goog.string.Const value, "' + value + '" given.'); else if (name.toLowerCase() in goog.html.SafeHtml.URL_ATTRIBUTES_) if (value instanceof goog.html.TrustedResourceUrl) value = goog.html.TrustedResourceUrl.unwrap(value);
            else if (value instanceof goog.html.SafeUrl) value = goog.html.SafeUrl.unwrap(value); else if (goog.isString(value)) value = goog.html.SafeUrl.sanitize(value).getTypedStringValue(); else throw new Error('Attribute "' + name + '" on tag "' + tagName + '" requires goog.html.SafeUrl, goog.string.Const, or string,' + ' value "' + value + '" given.');
            if (value.implementsGoogStringTypedString) value = value.getTypedStringValue();
            goog.asserts.assert(goog.isString(value) || goog.isNumber(value), "String or number value expected, got " +
              typeof value + " with value: " + value);
            return name + '="' + goog.string.htmlEscape(String(value)) + '"'
          };
          goog.html.SafeHtml.getStyleValue_ = function (value) {
            if (!goog.isObject(value)) throw new Error('The "style" attribute requires goog.html.SafeStyle or map ' + "of style properties, " + typeof value + " given: " + value);
            if (!(value instanceof goog.html.SafeStyle)) value = goog.html.SafeStyle.create(value);
            return goog.html.SafeStyle.unwrap(value)
          };
          goog.html.SafeHtml.createWithDir = function (dir, tagName, opt_attributes, opt_content) {
            var html = goog.html.SafeHtml.create(tagName, opt_attributes, opt_content);
            html.dir_ = dir;
            return html
          };
          goog.html.SafeHtml.concat = function (var_args) {
            var dir = goog.i18n.bidi.Dir.NEUTRAL;
            var content = "";
            var addArgument = function (argument) {
              if (goog.isArray(argument)) goog.array.forEach(argument, addArgument); else {
                var html = goog.html.SafeHtml.htmlEscape(argument);
                content += goog.html.SafeHtml.unwrap(html);
                var htmlDir = html.getDirection();
                if (dir == goog.i18n.bidi.Dir.NEUTRAL) dir = htmlDir; else if (htmlDir != goog.i18n.bidi.Dir.NEUTRAL && dir != htmlDir) dir = null
              }
            };
            goog.array.forEach(arguments, addArgument);
            return goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(content,
              dir)
          };
          goog.html.SafeHtml.concatWithDir = function (dir, var_args) {
            var html = goog.html.SafeHtml.concat(goog.array.slice(arguments, 1));
            html.dir_ = dir;
            return html
          };
          goog.html.SafeHtml.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {};
          goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse = function (html, dir) {
            return (new goog.html.SafeHtml).initSecurityPrivateDoNotAccessOrElse_(html, dir)
          };
          goog.html.SafeHtml.prototype.initSecurityPrivateDoNotAccessOrElse_ = function (html, dir) {
            this.privateDoNotAccessOrElseSafeHtmlWrappedValue_ = html;
            this.dir_ = dir;
            return this
          };
          goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse = function (tagName, opt_attributes, opt_content) {
            var dir = null;
            var result = "<" + tagName;
            result += goog.html.SafeHtml.stringifyAttributes(tagName, opt_attributes);
            var content = opt_content;
            if (!goog.isDefAndNotNull(content)) content = []; else if (!goog.isArray(content)) content = [content];
            if (goog.dom.tags.isVoidTag(tagName.toLowerCase())) {
              goog.asserts.assert(!content.length, "Void tag <" + tagName + "> does not allow content.");
              result += ">"
            } else {
              var html =
                goog.html.SafeHtml.concat(content);
              result += ">" + goog.html.SafeHtml.unwrap(html) + "</" + tagName + ">";
              dir = html.getDirection()
            }
            var dirAttribute = opt_attributes && opt_attributes["dir"];
            if (dirAttribute) if (/^(ltr|rtl|auto)$/i.test(dirAttribute)) dir = goog.i18n.bidi.Dir.NEUTRAL; else dir = null;
            return goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(result, dir)
          };
          goog.html.SafeHtml.stringifyAttributes = function (tagName, opt_attributes) {
            var result = "";
            if (opt_attributes) for (var name in opt_attributes) {
              if (!goog.html.SafeHtml.VALID_NAMES_IN_TAG_.test(name)) throw new Error('Invalid attribute name "' + name + '".');
              var value = opt_attributes[name];
              if (!goog.isDefAndNotNull(value)) continue;
              result += " " + goog.html.SafeHtml.getAttrNameAndValue_(tagName, name, value)
            }
            return result
          };
          goog.html.SafeHtml.combineAttributes = function (fixedAttributes, defaultAttributes, opt_attributes) {
            var combinedAttributes = {};
            var name;
            for (name in fixedAttributes) {
              goog.asserts.assert(name.toLowerCase() == name, "Must be lower case");
              combinedAttributes[name] = fixedAttributes[name]
            }
            for (name in defaultAttributes) {
              goog.asserts.assert(name.toLowerCase() == name, "Must be lower case");
              combinedAttributes[name] = defaultAttributes[name]
            }
            for (name in opt_attributes) {
              var nameLower = name.toLowerCase();
              if (nameLower in fixedAttributes) throw new Error('Cannot override "' +
                nameLower + '" attribute, got "' + name + '" with value "' + opt_attributes[name] + '"');
              if (nameLower in defaultAttributes) delete combinedAttributes[nameLower];
              combinedAttributes[name] = opt_attributes[name]
            }
            return combinedAttributes
          };
          goog.html.SafeHtml.DOCTYPE_HTML = goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse("<!DOCTYPE html>", goog.i18n.bidi.Dir.NEUTRAL);
          goog.html.SafeHtml.EMPTY = goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse("", goog.i18n.bidi.Dir.NEUTRAL);
          goog.html.SafeHtml.BR = goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse("<br>", goog.i18n.bidi.Dir.NEUTRAL);
          goog.provide("goog.dom.safe");
          goog.provide("goog.dom.safe.InsertAdjacentHtmlPosition");
          goog.require("goog.asserts");
          goog.require("goog.dom.asserts");
          goog.require("goog.html.SafeHtml");
          goog.require("goog.html.SafeScript");
          goog.require("goog.html.SafeStyle");
          goog.require("goog.html.SafeUrl");
          goog.require("goog.html.TrustedResourceUrl");
          goog.require("goog.string");
          goog.require("goog.string.Const");
          goog.dom.safe.InsertAdjacentHtmlPosition = {
            AFTERBEGIN: "afterbegin",
            AFTEREND: "afterend",
            BEFOREBEGIN: "beforebegin",
            BEFOREEND: "beforeend"
          };
          goog.dom.safe.insertAdjacentHtml = function (node, position, html) {
            node.insertAdjacentHTML(position, goog.html.SafeHtml.unwrap(html))
          };
          goog.dom.safe.SET_INNER_HTML_DISALLOWED_TAGS_ = {
            "MATH": true,
            "SCRIPT": true,
            "STYLE": true,
            "SVG": true,
            "TEMPLATE": true
          };
          goog.dom.safe.setInnerHtml = function (elem, html) {
            if (goog.asserts.ENABLE_ASSERTS) {
              var tagName = elem.tagName.toUpperCase();
              if (goog.dom.safe.SET_INNER_HTML_DISALLOWED_TAGS_[tagName]) throw new Error("goog.dom.safe.setInnerHtml cannot be used to set content of " + elem.tagName + ".");
            }
            elem.innerHTML = goog.html.SafeHtml.unwrap(html)
          };
          goog.dom.safe.setOuterHtml = function (elem, html) {
            elem.outerHTML = goog.html.SafeHtml.unwrap(html)
          };
          goog.dom.safe.setStyle = function (elem, style) {
            elem.style.cssText = goog.html.SafeStyle.unwrap(style)
          };
          goog.dom.safe.documentWrite = function (doc, html) {
            doc.write(goog.html.SafeHtml.unwrap(html))
          };
          goog.dom.safe.setAnchorHref = function (anchor, url) {
            goog.dom.asserts.assertIsHTMLAnchorElement(anchor);
            var safeUrl;
            if (url instanceof goog.html.SafeUrl) safeUrl = url; else safeUrl = goog.html.SafeUrl.sanitizeAssertUnchanged(url);
            anchor.href = goog.html.SafeUrl.unwrap(safeUrl)
          };
          goog.dom.safe.setImageSrc = function (imageElement, url) {
            goog.dom.asserts.assertIsHTMLImageElement(imageElement);
            var safeUrl;
            if (url instanceof goog.html.SafeUrl) safeUrl = url; else safeUrl = goog.html.SafeUrl.sanitizeAssertUnchanged(url);
            imageElement.src = goog.html.SafeUrl.unwrap(safeUrl)
          };
          goog.dom.safe.setEmbedSrc = function (embed, url) {
            goog.dom.asserts.assertIsHTMLEmbedElement(embed);
            embed.src = goog.html.TrustedResourceUrl.unwrap(url)
          };
          goog.dom.safe.setFrameSrc = function (frame, url) {
            goog.dom.asserts.assertIsHTMLFrameElement(frame);
            frame.src = goog.html.TrustedResourceUrl.unwrap(url)
          };
          goog.dom.safe.setIframeSrc = function (iframe, url) {
            goog.dom.asserts.assertIsHTMLIFrameElement(iframe);
            iframe.src = goog.html.TrustedResourceUrl.unwrap(url)
          };
          goog.dom.safe.setIframeSrcdoc = function (iframe, html) {
            goog.dom.asserts.assertIsHTMLIFrameElement(iframe);
            iframe.srcdoc = goog.html.SafeHtml.unwrap(html)
          };
          goog.dom.safe.setLinkHrefAndRel = function (link, url, rel) {
            goog.dom.asserts.assertIsHTMLLinkElement(link);
            link.rel = rel;
            if (goog.string.caseInsensitiveContains(rel, "stylesheet")) {
              goog.asserts.assert(url instanceof goog.html.TrustedResourceUrl, 'URL must be TrustedResourceUrl because "rel" contains "stylesheet"');
              link.href = goog.html.TrustedResourceUrl.unwrap(url)
            } else if (url instanceof goog.html.TrustedResourceUrl) link.href = goog.html.TrustedResourceUrl.unwrap(url); else if (url instanceof goog.html.SafeUrl) link.href =
              goog.html.SafeUrl.unwrap(url); else link.href = goog.html.SafeUrl.sanitizeAssertUnchanged(url).getTypedStringValue()
          };
          goog.dom.safe.setObjectData = function (object, url) {
            goog.dom.asserts.assertIsHTMLObjectElement(object);
            object.data = goog.html.TrustedResourceUrl.unwrap(url)
          };
          goog.dom.safe.setScriptSrc = function (script, url) {
            goog.dom.asserts.assertIsHTMLScriptElement(script);
            script.src = goog.html.TrustedResourceUrl.unwrap(url)
          };
          goog.dom.safe.setScriptContent = function (script, content) {
            goog.dom.asserts.assertIsHTMLScriptElement(script);
            script.text = goog.html.SafeScript.unwrap(content)
          };
          goog.dom.safe.setLocationHref = function (loc, url) {
            goog.dom.asserts.assertIsLocation(loc);
            var safeUrl;
            if (url instanceof goog.html.SafeUrl) safeUrl = url; else safeUrl = goog.html.SafeUrl.sanitizeAssertUnchanged(url);
            loc.href = goog.html.SafeUrl.unwrap(safeUrl)
          };
          goog.dom.safe.openInWindow = function (url, opt_openerWin, opt_name, opt_specs, opt_replace) {
            var safeUrl;
            if (url instanceof goog.html.SafeUrl) safeUrl = url; else safeUrl = goog.html.SafeUrl.sanitizeAssertUnchanged(url);
            var win = opt_openerWin || window;
            return win.open(goog.html.SafeUrl.unwrap(safeUrl), opt_name ? goog.string.Const.unwrap(opt_name) : "", opt_specs, opt_replace)
          };
          goog.provide("goog.html.uncheckedconversions");
          goog.require("goog.asserts");
          goog.require("goog.html.SafeHtml");
          goog.require("goog.html.SafeScript");
          goog.require("goog.html.SafeStyle");
          goog.require("goog.html.SafeStyleSheet");
          goog.require("goog.html.SafeUrl");
          goog.require("goog.html.TrustedResourceUrl");
          goog.require("goog.string");
          goog.require("goog.string.Const");
          goog.html.uncheckedconversions.safeHtmlFromStringKnownToSatisfyTypeContract = function (justification, html, opt_dir) {
            goog.asserts.assertString(goog.string.Const.unwrap(justification), "must provide justification");
            goog.asserts.assert(!goog.string.isEmptyOrWhitespace(goog.string.Const.unwrap(justification)), "must provide non-empty justification");
            return goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(html, opt_dir || null)
          };
          goog.html.uncheckedconversions.safeScriptFromStringKnownToSatisfyTypeContract = function (justification, script) {
            goog.asserts.assertString(goog.string.Const.unwrap(justification), "must provide justification");
            goog.asserts.assert(!goog.string.isEmptyOrWhitespace(goog.string.Const.unwrap(justification)), "must provide non-empty justification");
            return goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(script)
          };
          goog.html.uncheckedconversions.safeStyleFromStringKnownToSatisfyTypeContract = function (justification, style) {
            goog.asserts.assertString(goog.string.Const.unwrap(justification), "must provide justification");
            goog.asserts.assert(!goog.string.isEmptyOrWhitespace(goog.string.Const.unwrap(justification)), "must provide non-empty justification");
            return goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(style)
          };
          goog.html.uncheckedconversions.safeStyleSheetFromStringKnownToSatisfyTypeContract = function (justification, styleSheet) {
            goog.asserts.assertString(goog.string.Const.unwrap(justification), "must provide justification");
            goog.asserts.assert(!goog.string.isEmptyOrWhitespace(goog.string.Const.unwrap(justification)), "must provide non-empty justification");
            return goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(styleSheet)
          };
          goog.html.uncheckedconversions.safeUrlFromStringKnownToSatisfyTypeContract = function (justification, url) {
            goog.asserts.assertString(goog.string.Const.unwrap(justification), "must provide justification");
            goog.asserts.assert(!goog.string.isEmptyOrWhitespace(goog.string.Const.unwrap(justification)), "must provide non-empty justification");
            return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(url)
          };
          goog.html.uncheckedconversions.trustedResourceUrlFromStringKnownToSatisfyTypeContract = function (justification, url) {
            goog.asserts.assertString(goog.string.Const.unwrap(justification), "must provide justification");
            goog.asserts.assert(!goog.string.isEmptyOrWhitespace(goog.string.Const.unwrap(justification)), "must provide non-empty justification");
            return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(url)
          };
          goog.provide("goog.math");
          goog.require("goog.array");
          goog.require("goog.asserts");
          goog.math.randomInt = function (a) {
            return Math.floor(Math.random() * a)
          };
          goog.math.uniformRandom = function (a, b) {
            return a + Math.random() * (b - a)
          };
          goog.math.clamp = function (value, min, max) {
            return Math.min(Math.max(value, min), max)
          };
          goog.math.modulo = function (a, b) {
            var r = a % b;
            return r * b < 0 ? r + b : r
          };
          goog.math.lerp = function (a, b, x) {
            return a + x * (b - a)
          };
          goog.math.nearlyEquals = function (a, b, opt_tolerance) {
            return Math.abs(a - b) <= (opt_tolerance || 1E-6)
          };
          goog.math.standardAngle = function (angle) {
            return goog.math.modulo(angle, 360)
          };
          goog.math.standardAngleInRadians = function (angle) {
            return goog.math.modulo(angle, 2 * Math.PI)
          };
          goog.math.toRadians = function (angleDegrees) {
            return angleDegrees * Math.PI / 180
          };
          goog.math.toDegrees = function (angleRadians) {
            return angleRadians * 180 / Math.PI
          };
          goog.math.angleDx = function (degrees, radius) {
            return radius * Math.cos(goog.math.toRadians(degrees))
          };
          goog.math.angleDy = function (degrees, radius) {
            return radius * Math.sin(goog.math.toRadians(degrees))
          };
          goog.math.angle = function (x1, y1, x2, y2) {
            return goog.math.standardAngle(goog.math.toDegrees(Math.atan2(y2 - y1, x2 - x1)))
          };
          goog.math.angleDifference = function (startAngle, endAngle) {
            var d = goog.math.standardAngle(endAngle) - goog.math.standardAngle(startAngle);
            if (d > 180) d = d - 360; else if (d <= -180) d = 360 + d;
            return d
          };
          goog.math.sign = function (x) {
            if (x > 0) return 1;
            if (x < 0) return -1;
            return x
          };
          goog.math.longestCommonSubsequence = function (array1, array2, opt_compareFn, opt_collectorFn) {
            var compare = opt_compareFn || function (a, b) {
              return a == b
            };
            var collect = opt_collectorFn || function (i1, i2) {
              return array1[i1]
            };
            var length1 = array1.length;
            var length2 = array2.length;
            var arr = [];
            for (var i = 0; i < length1 + 1; i++) {
              arr[i] = [];
              arr[i][0] = 0
            }
            for (var j = 0; j < length2 + 1; j++) arr[0][j] = 0;
            for (i = 1; i <= length1; i++) for (j = 1; j <= length2; j++) if (compare(array1[i - 1], array2[j - 1])) arr[i][j] = arr[i - 1][j - 1] + 1; else arr[i][j] = Math.max(arr[i - 1][j],
              arr[i][j - 1]);
            var result = [];
            var i = length1, j = length2;
            while (i > 0 && j > 0) if (compare(array1[i - 1], array2[j - 1])) {
              result.unshift(collect(i - 1, j - 1));
              i--;
              j--
            } else if (arr[i - 1][j] > arr[i][j - 1]) i--; else j--;
            return result
          };
          goog.math.sum = function (var_args) {
            return goog.array.reduce(arguments, function (sum, value) {
              return sum + value
            }, 0)
          };
          goog.math.average = function (var_args) {
            return goog.math.sum.apply(null, arguments) / arguments.length
          };
          goog.math.sampleVariance = function (var_args) {
            var sampleSize = arguments.length;
            if (sampleSize < 2) return 0;
            var mean = goog.math.average.apply(null, arguments);
            var variance = goog.math.sum.apply(null, goog.array.map(arguments, function (val) {
              return Math.pow(val - mean, 2)
            })) / (sampleSize - 1);
            return variance
          };
          goog.math.standardDeviation = function (var_args) {
            return Math.sqrt(goog.math.sampleVariance.apply(null, arguments))
          };
          goog.math.isInt = function (num) {
            return isFinite(num) && num % 1 == 0
          };
          goog.math.isFiniteNumber = function (num) {
            return isFinite(num)
          };
          goog.math.isNegativeZero = function (num) {
            return num == 0 && 1 / num < 0
          };
          goog.math.log10Floor = function (num) {
            if (num > 0) {
              var x = Math.round(Math.log(num) * Math.LOG10E);
              return x - (parseFloat("1e" + x) > num ? 1 : 0)
            }
            return num == 0 ? -Infinity : NaN
          };
          goog.math.safeFloor = function (num, opt_epsilon) {
            goog.asserts.assert(!goog.isDef(opt_epsilon) || opt_epsilon > 0);
            return Math.floor(num + (opt_epsilon || 2E-15))
          };
          goog.math.safeCeil = function (num, opt_epsilon) {
            goog.asserts.assert(!goog.isDef(opt_epsilon) || opt_epsilon > 0);
            return Math.ceil(num - (opt_epsilon || 2E-15))
          };
          goog.provide("goog.math.Coordinate");
          goog.require("goog.math");
          goog.math.Coordinate = function (opt_x, opt_y) {
            this.x = goog.isDef(opt_x) ? opt_x : 0;
            this.y = goog.isDef(opt_y) ? opt_y : 0
          };
          goog.math.Coordinate.prototype.clone = function () {
            return new goog.math.Coordinate(this.x, this.y)
          };
          if (goog.DEBUG) goog.math.Coordinate.prototype.toString = function () {
            return "(" + this.x + ", " + this.y + ")"
          };
          goog.math.Coordinate.prototype.equals = function (other) {
            return other instanceof goog.math.Coordinate && goog.math.Coordinate.equals(this, other)
          };
          goog.math.Coordinate.equals = function (a, b) {
            if (a == b) return true;
            if (!a || !b) return false;
            return a.x == b.x && a.y == b.y
          };
          goog.math.Coordinate.distance = function (a, b) {
            var dx = a.x - b.x;
            var dy = a.y - b.y;
            return Math.sqrt(dx * dx + dy * dy)
          };
          goog.math.Coordinate.magnitude = function (a) {
            return Math.sqrt(a.x * a.x + a.y * a.y)
          };
          goog.math.Coordinate.azimuth = function (a) {
            return goog.math.angle(0, 0, a.x, a.y)
          };
          goog.math.Coordinate.squaredDistance = function (a, b) {
            var dx = a.x - b.x;
            var dy = a.y - b.y;
            return dx * dx + dy * dy
          };
          goog.math.Coordinate.difference = function (a, b) {
            return new goog.math.Coordinate(a.x - b.x, a.y - b.y)
          };
          goog.math.Coordinate.sum = function (a, b) {
            return new goog.math.Coordinate(a.x + b.x, a.y + b.y)
          };
          goog.math.Coordinate.prototype.ceil = function () {
            this.x = Math.ceil(this.x);
            this.y = Math.ceil(this.y);
            return this
          };
          goog.math.Coordinate.prototype.floor = function () {
            this.x = Math.floor(this.x);
            this.y = Math.floor(this.y);
            return this
          };
          goog.math.Coordinate.prototype.round = function () {
            this.x = Math.round(this.x);
            this.y = Math.round(this.y);
            return this
          };
          goog.math.Coordinate.prototype.translate = function (tx, opt_ty) {
            if (tx instanceof goog.math.Coordinate) {
              this.x += tx.x;
              this.y += tx.y
            } else {
              this.x += Number(tx);
              if (goog.isNumber(opt_ty)) this.y += opt_ty
            }
            return this
          };
          goog.math.Coordinate.prototype.scale = function (sx, opt_sy) {
            var sy = goog.isNumber(opt_sy) ? opt_sy : sx;
            this.x *= sx;
            this.y *= sy;
            return this
          };
          goog.math.Coordinate.prototype.rotateRadians = function (radians, opt_center) {
            var center = opt_center || new goog.math.Coordinate(0, 0);
            var x = this.x;
            var y = this.y;
            var cos = Math.cos(radians);
            var sin = Math.sin(radians);
            this.x = (x - center.x) * cos - (y - center.y) * sin + center.x;
            this.y = (x - center.x) * sin + (y - center.y) * cos + center.y
          };
          goog.math.Coordinate.prototype.rotateDegrees = function (degrees, opt_center) {
            this.rotateRadians(goog.math.toRadians(degrees), opt_center)
          };
          goog.provide("goog.math.Size");
          goog.math.Size = function (width, height) {
            this.width = width;
            this.height = height
          };
          goog.math.Size.equals = function (a, b) {
            if (a == b) return true;
            if (!a || !b) return false;
            return a.width == b.width && a.height == b.height
          };
          goog.math.Size.prototype.clone = function () {
            return new goog.math.Size(this.width, this.height)
          };
          if (goog.DEBUG) goog.math.Size.prototype.toString = function () {
            return "(" + this.width + " x " + this.height + ")"
          };
          goog.math.Size.prototype.getLongest = function () {
            return Math.max(this.width, this.height)
          };
          goog.math.Size.prototype.getShortest = function () {
            return Math.min(this.width, this.height)
          };
          goog.math.Size.prototype.area = function () {
            return this.width * this.height
          };
          goog.math.Size.prototype.perimeter = function () {
            return (this.width + this.height) * 2
          };
          goog.math.Size.prototype.aspectRatio = function () {
            return this.width / this.height
          };
          goog.math.Size.prototype.isEmpty = function () {
            return !this.area()
          };
          goog.math.Size.prototype.ceil = function () {
            this.width = Math.ceil(this.width);
            this.height = Math.ceil(this.height);
            return this
          };
          goog.math.Size.prototype.fitsInside = function (target) {
            return this.width <= target.width && this.height <= target.height
          };
          goog.math.Size.prototype.floor = function () {
            this.width = Math.floor(this.width);
            this.height = Math.floor(this.height);
            return this
          };
          goog.math.Size.prototype.round = function () {
            this.width = Math.round(this.width);
            this.height = Math.round(this.height);
            return this
          };
          goog.math.Size.prototype.scale = function (sx, opt_sy) {
            var sy = goog.isNumber(opt_sy) ? opt_sy : sx;
            this.width *= sx;
            this.height *= sy;
            return this
          };
          goog.math.Size.prototype.scaleToCover = function (target) {
            var s = this.aspectRatio() <= target.aspectRatio() ? target.width / this.width : target.height / this.height;
            return this.scale(s)
          };
          goog.math.Size.prototype.scaleToFit = function (target) {
            var s = this.aspectRatio() > target.aspectRatio() ? target.width / this.width : target.height / this.height;
            return this.scale(s)
          };
          goog.provide("goog.dom");
          goog.provide("goog.dom.Appendable");
          goog.provide("goog.dom.DomHelper");
          goog.require("goog.array");
          goog.require("goog.asserts");
          goog.require("goog.dom.BrowserFeature");
          goog.require("goog.dom.NodeType");
          goog.require("goog.dom.TagName");
          goog.require("goog.dom.safe");
          goog.require("goog.html.SafeHtml");
          goog.require("goog.html.uncheckedconversions");
          goog.require("goog.math.Coordinate");
          goog.require("goog.math.Size");
          goog.require("goog.object");
          goog.require("goog.string");
          goog.require("goog.string.Unicode");
          goog.require("goog.userAgent");
          goog.define("goog.dom.ASSUME_QUIRKS_MODE", false);
          goog.define("goog.dom.ASSUME_STANDARDS_MODE", false);
          goog.dom.COMPAT_MODE_KNOWN_ = goog.dom.ASSUME_QUIRKS_MODE || goog.dom.ASSUME_STANDARDS_MODE;
          goog.dom.getDomHelper = function (opt_element) {
            return opt_element ? new goog.dom.DomHelper(goog.dom.getOwnerDocument(opt_element)) : goog.dom.defaultDomHelper_ || (goog.dom.defaultDomHelper_ = new goog.dom.DomHelper)
          };
          goog.dom.defaultDomHelper_;
          goog.dom.getDocument = function () {
            return document
          };
          goog.dom.getElement = function (element) {
            return goog.dom.getElementHelper_(document, element)
          };
          goog.dom.getElementHelper_ = function (doc, element) {
            return goog.isString(element) ? doc.getElementById(element) : element
          };
          goog.dom.getRequiredElement = function (id) {
            return goog.dom.getRequiredElementHelper_(document, id)
          };
          goog.dom.getRequiredElementHelper_ = function (doc, id) {
            goog.asserts.assertString(id);
            var element = goog.dom.getElementHelper_(doc, id);
            element = goog.asserts.assertElement(element, "No element found with id: " + id);
            return element
          };
          goog.dom.$ = goog.dom.getElement;
          goog.dom.getElementsByTagName = function (tagName, opt_parent) {
            var parent = opt_parent || document;
            return parent.getElementsByTagName(String(tagName))
          };
          goog.dom.getElementsByTagNameAndClass = function (opt_tag, opt_class, opt_el) {
            return goog.dom.getElementsByTagNameAndClass_(document, opt_tag, opt_class, opt_el)
          };
          goog.dom.getElementByTagNameAndClass = function (opt_tag, opt_class, opt_el) {
            return goog.dom.getElementByTagNameAndClass_(document, opt_tag, opt_class, opt_el)
          };
          goog.dom.getElementsByClass = function (className, opt_el) {
            var parent = opt_el || document;
            if (goog.dom.canUseQuerySelector_(parent)) return parent.querySelectorAll("." + className);
            return goog.dom.getElementsByTagNameAndClass_(document, "*", className, opt_el)
          };
          goog.dom.getElementByClass = function (className, opt_el) {
            var parent = opt_el || document;
            var retVal = null;
            if (parent.getElementsByClassName) retVal = parent.getElementsByClassName(className)[0]; else retVal = goog.dom.getElementByTagNameAndClass_(document, "*", className, opt_el);
            return retVal || null
          };
          goog.dom.getRequiredElementByClass = function (className, opt_root) {
            var retValue = goog.dom.getElementByClass(className, opt_root);
            return goog.asserts.assert(retValue, "No element found with className: " + className)
          };
          goog.dom.canUseQuerySelector_ = function (parent) {
            return !!(parent.querySelectorAll && parent.querySelector)
          };
          goog.dom.getElementsByTagNameAndClass_ = function (doc, opt_tag, opt_class, opt_el) {
            var parent = opt_el || doc;
            var tagName = opt_tag && opt_tag != "*" ? String(opt_tag).toUpperCase() : "";
            if (goog.dom.canUseQuerySelector_(parent) && (tagName || opt_class)) {
              var query = tagName + (opt_class ? "." + opt_class : "");
              return parent.querySelectorAll(query)
            }
            if (opt_class && parent.getElementsByClassName) {
              var els = parent.getElementsByClassName(opt_class);
              if (tagName) {
                var arrayLike = {};
                var len = 0;
                for (var i = 0, el; el = els[i]; i++) if (tagName == el.nodeName) arrayLike[len++] =
                  el;
                arrayLike.length = len;
                return arrayLike
              } else return els
            }
            var els = parent.getElementsByTagName(tagName || "*");
            if (opt_class) {
              var arrayLike = {};
              var len = 0;
              for (var i = 0, el; el = els[i]; i++) {
                var className = el.className;
                if (typeof className.split == "function" && goog.array.contains(className.split(/\s+/), opt_class)) arrayLike[len++] = el
              }
              arrayLike.length = len;
              return arrayLike
            } else return els
          };
          goog.dom.getElementByTagNameAndClass_ = function (doc, opt_tag, opt_class, opt_el) {
            var parent = opt_el || doc;
            var tag = opt_tag && opt_tag != "*" ? String(opt_tag).toUpperCase() : "";
            if (goog.dom.canUseQuerySelector_(parent) && (tag || opt_class)) return parent.querySelector(tag + (opt_class ? "." + opt_class : ""));
            var elements = goog.dom.getElementsByTagNameAndClass_(doc, opt_tag, opt_class, opt_el);
            return elements[0] || null
          };
          goog.dom.$$ = goog.dom.getElementsByTagNameAndClass;
          goog.dom.setProperties = function (element, properties) {
            goog.object.forEach(properties, function (val, key) {
              if (val && val.implementsGoogStringTypedString) val = val.getTypedStringValue();
              if (key == "style") element.style.cssText = val; else if (key == "class") element.className = val; else if (key == "for") element.htmlFor = val; else if (goog.dom.DIRECT_ATTRIBUTE_MAP_.hasOwnProperty(key)) element.setAttribute(goog.dom.DIRECT_ATTRIBUTE_MAP_[key], val); else if (goog.string.startsWith(key, "aria-") || goog.string.startsWith(key, "data-")) element.setAttribute(key,
                val); else element[key] = val
            })
          };
          goog.dom.DIRECT_ATTRIBUTE_MAP_ = {
            "cellpadding": "cellPadding",
            "cellspacing": "cellSpacing",
            "colspan": "colSpan",
            "frameborder": "frameBorder",
            "height": "height",
            "maxlength": "maxLength",
            "nonce": "nonce",
            "role": "role",
            "rowspan": "rowSpan",
            "type": "type",
            "usemap": "useMap",
            "valign": "vAlign",
            "width": "width"
          };
          goog.dom.getViewportSize = function (opt_window) {
            return goog.dom.getViewportSize_(opt_window || window)
          };
          goog.dom.getViewportSize_ = function (win) {
            var doc = win.document;
            var el = goog.dom.isCss1CompatMode_(doc) ? doc.documentElement : doc.body;
            return new goog.math.Size(el.clientWidth, el.clientHeight)
          };
          goog.dom.getDocumentHeight = function () {
            return goog.dom.getDocumentHeight_(window)
          };
          goog.dom.getDocumentHeightForWindow = function (win) {
            return goog.dom.getDocumentHeight_(win)
          };
          goog.dom.getDocumentHeight_ = function (win) {
            var doc = win.document;
            var height = 0;
            if (doc) {
              var body = doc.body;
              var docEl = doc.documentElement;
              if (!(docEl && body)) return 0;
              var vh = goog.dom.getViewportSize_(win).height;
              if (goog.dom.isCss1CompatMode_(doc) && docEl.scrollHeight) height = docEl.scrollHeight != vh ? docEl.scrollHeight : docEl.offsetHeight; else {
                var sh = docEl.scrollHeight;
                var oh = docEl.offsetHeight;
                if (docEl.clientHeight != oh) {
                  sh = body.scrollHeight;
                  oh = body.offsetHeight
                }
                if (sh > vh) height = sh > oh ? sh : oh; else height = sh < oh ? sh :
                  oh
              }
            }
            return height
          };
          goog.dom.getPageScroll = function (opt_window) {
            var win = opt_window || goog.global || window;
            return goog.dom.getDomHelper(win.document).getDocumentScroll()
          };
          goog.dom.getDocumentScroll = function () {
            return goog.dom.getDocumentScroll_(document)
          };
          goog.dom.getDocumentScroll_ = function (doc) {
            var el = goog.dom.getDocumentScrollElement_(doc);
            var win = goog.dom.getWindow_(doc);
            if (goog.userAgent.IE && goog.userAgent.isVersionOrHigher("10") && win.pageYOffset != el.scrollTop) return new goog.math.Coordinate(el.scrollLeft, el.scrollTop);
            return new goog.math.Coordinate(win.pageXOffset || el.scrollLeft, win.pageYOffset || el.scrollTop)
          };
          goog.dom.getDocumentScrollElement = function () {
            return goog.dom.getDocumentScrollElement_(document)
          };
          goog.dom.getDocumentScrollElement_ = function (doc) {
            if (doc.scrollingElement) return doc.scrollingElement;
            if (!goog.userAgent.WEBKIT && goog.dom.isCss1CompatMode_(doc)) return doc.documentElement;
            return doc.body || doc.documentElement
          };
          goog.dom.getWindow = function (opt_doc) {
            return opt_doc ? goog.dom.getWindow_(opt_doc) : window
          };
          goog.dom.getWindow_ = function (doc) {
            return doc.parentWindow || doc.defaultView
          };
          goog.dom.createDom = function (tagName, opt_attributes, var_args) {
            return goog.dom.createDom_(document, arguments)
          };
          goog.dom.createDom_ = function (doc, args) {
            var tagName = String(args[0]);
            var attributes = args[1];
            if (!goog.dom.BrowserFeature.CAN_ADD_NAME_OR_TYPE_ATTRIBUTES && attributes && (attributes.name || attributes.type)) {
              var tagNameArr = ["<", tagName];
              if (attributes.name) tagNameArr.push(' name="', goog.string.htmlEscape(attributes.name), '"');
              if (attributes.type) {
                tagNameArr.push(' type="', goog.string.htmlEscape(attributes.type), '"');
                var clone = {};
                goog.object.extend(clone, attributes);
                delete clone["type"];
                attributes = clone
              }
              tagNameArr.push(">");
              tagName = tagNameArr.join("")
            }
            var element = doc.createElement(tagName);
            if (attributes) if (goog.isString(attributes)) element.className = attributes; else if (goog.isArray(attributes)) element.className = attributes.join(" "); else goog.dom.setProperties(element, attributes);
            if (args.length > 2) goog.dom.append_(doc, element, args, 2);
            return element
          };
          goog.dom.append_ = function (doc, parent, args, startIndex) {
            function childHandler(child) {
              if (child) parent.appendChild(goog.isString(child) ? doc.createTextNode(child) : child)
            }

            for (var i = startIndex; i < args.length; i++) {
              var arg = args[i];
              if (goog.isArrayLike(arg) && !goog.dom.isNodeLike(arg)) goog.array.forEach(goog.dom.isNodeList(arg) ? goog.array.toArray(arg) : arg, childHandler); else childHandler(arg)
            }
          };
          goog.dom.$dom = goog.dom.createDom;
          goog.dom.createElement = function (name) {
            return goog.dom.createElement_(document, name)
          };
          goog.dom.createElement_ = function (doc, name) {
            return doc.createElement(String(name))
          };
          goog.dom.createTextNode = function (content) {
            return document.createTextNode(String(content))
          };
          goog.dom.createTable = function (rows, columns, opt_fillWithNbsp) {
            return goog.dom.createTable_(document, rows, columns, !!opt_fillWithNbsp)
          };
          goog.dom.createTable_ = function (doc, rows, columns, fillWithNbsp) {
            var table = goog.dom.createElement_(doc, goog.dom.TagName.TABLE);
            var tbody = table.appendChild(goog.dom.createElement_(doc, goog.dom.TagName.TBODY));
            for (var i = 0; i < rows; i++) {
              var tr = goog.dom.createElement_(doc, goog.dom.TagName.TR);
              for (var j = 0; j < columns; j++) {
                var td = goog.dom.createElement_(doc, goog.dom.TagName.TD);
                if (fillWithNbsp) goog.dom.setTextContent(td, goog.string.Unicode.NBSP);
                tr.appendChild(td)
              }
              tbody.appendChild(tr)
            }
            return table
          };
          goog.dom.constHtmlToNode = function (var_args) {
            var stringArray = goog.array.map(arguments, goog.string.Const.unwrap);
            var safeHtml = goog.html.uncheckedconversions.safeHtmlFromStringKnownToSatisfyTypeContract(goog.string.Const.from("Constant HTML string, that gets turned into a " + "Node later, so it will be automatically balanced."), stringArray.join(""));
            return goog.dom.safeHtmlToNode(safeHtml)
          };
          goog.dom.safeHtmlToNode = function (html) {
            return goog.dom.safeHtmlToNode_(document, html)
          };
          goog.dom.safeHtmlToNode_ = function (doc, html) {
            var tempDiv = goog.dom.createElement_(doc, goog.dom.TagName.DIV);
            if (goog.dom.BrowserFeature.INNER_HTML_NEEDS_SCOPED_ELEMENT) {
              goog.dom.safe.setInnerHtml(tempDiv, goog.html.SafeHtml.concat(goog.html.SafeHtml.BR, html));
              tempDiv.removeChild(tempDiv.firstChild)
            } else goog.dom.safe.setInnerHtml(tempDiv, html);
            return goog.dom.childrenToNode_(doc, tempDiv)
          };
          goog.dom.childrenToNode_ = function (doc, tempDiv) {
            if (tempDiv.childNodes.length == 1) return tempDiv.removeChild(tempDiv.firstChild); else {
              var fragment = doc.createDocumentFragment();
              while (tempDiv.firstChild) fragment.appendChild(tempDiv.firstChild);
              return fragment
            }
          };
          goog.dom.isCss1CompatMode = function () {
            return goog.dom.isCss1CompatMode_(document)
          };
          goog.dom.isCss1CompatMode_ = function (doc) {
            if (goog.dom.COMPAT_MODE_KNOWN_) return goog.dom.ASSUME_STANDARDS_MODE;
            return doc.compatMode == "CSS1Compat"
          };
          goog.dom.canHaveChildren = function (node) {
            if (node.nodeType != goog.dom.NodeType.ELEMENT) return false;
            switch (node.tagName) {
              case String(goog.dom.TagName.APPLET):
              case String(goog.dom.TagName.AREA):
              case String(goog.dom.TagName.BASE):
              case String(goog.dom.TagName.BR):
              case String(goog.dom.TagName.COL):
              case String(goog.dom.TagName.COMMAND):
              case String(goog.dom.TagName.EMBED):
              case String(goog.dom.TagName.FRAME):
              case String(goog.dom.TagName.HR):
              case String(goog.dom.TagName.IMG):
              case String(goog.dom.TagName.INPUT):
              case String(goog.dom.TagName.IFRAME):
              case String(goog.dom.TagName.ISINDEX):
              case String(goog.dom.TagName.KEYGEN):
              case String(goog.dom.TagName.LINK):
              case String(goog.dom.TagName.NOFRAMES):
              case String(goog.dom.TagName.NOSCRIPT):
              case String(goog.dom.TagName.META):
              case String(goog.dom.TagName.OBJECT):
              case String(goog.dom.TagName.PARAM):
              case String(goog.dom.TagName.SCRIPT):
              case String(goog.dom.TagName.SOURCE):
              case String(goog.dom.TagName.STYLE):
              case String(goog.dom.TagName.TRACK):
              case String(goog.dom.TagName.WBR):
                return false
            }
            return true
          };
          goog.dom.appendChild = function (parent, child) {
            parent.appendChild(child)
          };
          goog.dom.append = function (parent, var_args) {
            goog.dom.append_(goog.dom.getOwnerDocument(parent), parent, arguments, 1)
          };
          goog.dom.removeChildren = function (node) {
            var child;
            while (child = node.firstChild) node.removeChild(child)
          };
          goog.dom.insertSiblingBefore = function (newNode, refNode) {
            if (refNode.parentNode) refNode.parentNode.insertBefore(newNode, refNode)
          };
          goog.dom.insertSiblingAfter = function (newNode, refNode) {
            if (refNode.parentNode) refNode.parentNode.insertBefore(newNode, refNode.nextSibling)
          };
          goog.dom.insertChildAt = function (parent, child, index) {
            parent.insertBefore(child, parent.childNodes[index] || null)
          };
          goog.dom.removeNode = function (node) {
            return node && node.parentNode ? node.parentNode.removeChild(node) : null
          };
          goog.dom.replaceNode = function (newNode, oldNode) {
            var parent = oldNode.parentNode;
            if (parent) parent.replaceChild(newNode, oldNode)
          };
          goog.dom.flattenElement = function (element) {
            var child, parent = element.parentNode;
            if (parent && parent.nodeType != goog.dom.NodeType.DOCUMENT_FRAGMENT) if (element.removeNode) return element.removeNode(false); else {
              while (child = element.firstChild) parent.insertBefore(child, element);
              return goog.dom.removeNode(element)
            }
          };
          goog.dom.getChildren = function (element) {
            if (goog.dom.BrowserFeature.CAN_USE_CHILDREN_ATTRIBUTE && element.children != undefined) return element.children;
            return goog.array.filter(element.childNodes, function (node) {
              return node.nodeType == goog.dom.NodeType.ELEMENT
            })
          };
          goog.dom.getFirstElementChild = function (node) {
            if (goog.isDef(node.firstElementChild)) return node.firstElementChild;
            return goog.dom.getNextElementNode_(node.firstChild, true)
          };
          goog.dom.getLastElementChild = function (node) {
            if (goog.isDef(node.lastElementChild)) return node.lastElementChild;
            return goog.dom.getNextElementNode_(node.lastChild, false)
          };
          goog.dom.getNextElementSibling = function (node) {
            if (goog.isDef(node.nextElementSibling)) return node.nextElementSibling;
            return goog.dom.getNextElementNode_(node.nextSibling, true)
          };
          goog.dom.getPreviousElementSibling = function (node) {
            if (goog.isDef(node.previousElementSibling)) return node.previousElementSibling;
            return goog.dom.getNextElementNode_(node.previousSibling, false)
          };
          goog.dom.getNextElementNode_ = function (node, forward) {
            while (node && node.nodeType != goog.dom.NodeType.ELEMENT) node = forward ? node.nextSibling : node.previousSibling;
            return node
          };
          goog.dom.getNextNode = function (node) {
            if (!node) return null;
            if (node.firstChild) return node.firstChild;
            while (node && !node.nextSibling) node = node.parentNode;
            return node ? node.nextSibling : null
          };
          goog.dom.getPreviousNode = function (node) {
            if (!node) return null;
            if (!node.previousSibling) return node.parentNode;
            node = node.previousSibling;
            while (node && node.lastChild) node = node.lastChild;
            return node
          };
          goog.dom.isNodeLike = function (obj) {
            return goog.isObject(obj) && obj.nodeType > 0
          };
          goog.dom.isElement = function (obj) {
            return goog.isObject(obj) && obj.nodeType == goog.dom.NodeType.ELEMENT
          };
          goog.dom.isWindow = function (obj) {
            return goog.isObject(obj) && obj["window"] == obj
          };
          goog.dom.getParentElement = function (element) {
            var parent;
            if (goog.dom.BrowserFeature.CAN_USE_PARENT_ELEMENT_PROPERTY) {
              var isIe9 = goog.userAgent.IE && goog.userAgent.isVersionOrHigher("9") && !goog.userAgent.isVersionOrHigher("10");
              if (!(isIe9 && goog.global["SVGElement"] && element instanceof goog.global["SVGElement"])) {
                parent = element.parentElement;
                if (parent) return parent
              }
            }
            parent = element.parentNode;
            return goog.dom.isElement(parent) ? parent : null
          };
          goog.dom.contains = function (parent, descendant) {
            if (!parent || !descendant) return false;
            if (parent.contains && descendant.nodeType == goog.dom.NodeType.ELEMENT) return parent == descendant || parent.contains(descendant);
            if (typeof parent.compareDocumentPosition != "undefined") return parent == descendant || Boolean(parent.compareDocumentPosition(descendant) & 16);
            while (descendant && parent != descendant) descendant = descendant.parentNode;
            return descendant == parent
          };
          goog.dom.compareNodeOrder = function (node1, node2) {
            if (node1 == node2) return 0;
            if (node1.compareDocumentPosition) return node1.compareDocumentPosition(node2) & 2 ? 1 : -1;
            if (goog.userAgent.IE && !goog.userAgent.isDocumentModeOrHigher(9)) {
              if (node1.nodeType == goog.dom.NodeType.DOCUMENT) return -1;
              if (node2.nodeType == goog.dom.NodeType.DOCUMENT) return 1
            }
            if ("sourceIndex" in node1 || node1.parentNode && "sourceIndex" in node1.parentNode) {
              var isElement1 = node1.nodeType == goog.dom.NodeType.ELEMENT;
              var isElement2 = node2.nodeType == goog.dom.NodeType.ELEMENT;
              if (isElement1 && isElement2) return node1.sourceIndex - node2.sourceIndex; else {
                var parent1 = node1.parentNode;
                var parent2 = node2.parentNode;
                if (parent1 == parent2) return goog.dom.compareSiblingOrder_(node1, node2);
                if (!isElement1 && goog.dom.contains(parent1, node2)) return -1 * goog.dom.compareParentsDescendantNodeIe_(node1, node2);
                if (!isElement2 && goog.dom.contains(parent2, node1)) return goog.dom.compareParentsDescendantNodeIe_(node2, node1);
                return (isElement1 ? node1.sourceIndex : parent1.sourceIndex) - (isElement2 ? node2.sourceIndex :
                  parent2.sourceIndex)
              }
            }
            var doc = goog.dom.getOwnerDocument(node1);
            var range1, range2;
            range1 = doc.createRange();
            range1.selectNode(node1);
            range1.collapse(true);
            range2 = doc.createRange();
            range2.selectNode(node2);
            range2.collapse(true);
            return range1.compareBoundaryPoints(goog.global["Range"].START_TO_END, range2)
          };
          goog.dom.compareParentsDescendantNodeIe_ = function (textNode, node) {
            var parent = textNode.parentNode;
            if (parent == node) return -1;
            var sibling = node;
            while (sibling.parentNode != parent) sibling = sibling.parentNode;
            return goog.dom.compareSiblingOrder_(sibling, textNode)
          };
          goog.dom.compareSiblingOrder_ = function (node1, node2) {
            var s = node2;
            while (s = s.previousSibling) if (s == node1) return -1;
            return 1
          };
          goog.dom.findCommonAncestor = function (var_args) {
            var i, count = arguments.length;
            if (!count) return null; else if (count == 1) return arguments[0];
            var paths = [];
            var minLength = Infinity;
            for (i = 0; i < count; i++) {
              var ancestors = [];
              var node = arguments[i];
              while (node) {
                ancestors.unshift(node);
                node = node.parentNode
              }
              paths.push(ancestors);
              minLength = Math.min(minLength, ancestors.length)
            }
            var output = null;
            for (i = 0; i < minLength; i++) {
              var first = paths[0][i];
              for (var j = 1; j < count; j++) if (first != paths[j][i]) return output;
              output = first
            }
            return output
          };
          goog.dom.getOwnerDocument = function (node) {
            goog.asserts.assert(node, "Node cannot be null or undefined.");
            return node.nodeType == goog.dom.NodeType.DOCUMENT ? node : node.ownerDocument || node.document
          };
          goog.dom.getFrameContentDocument = function (frame) {
            return frame.contentDocument || frame.contentWindow.document
          };
          goog.dom.getFrameContentWindow = function (frame) {
            try {
              return frame.contentWindow || (frame.contentDocument ? goog.dom.getWindow(frame.contentDocument) : null)
            } catch (e) {
            }
            return null
          };
          goog.dom.setTextContent = function (node, text) {
            goog.asserts.assert(node != null, "goog.dom.setTextContent expects a non-null value for node");
            if ("textContent" in node) node.textContent = text; else if (node.nodeType == goog.dom.NodeType.TEXT) node.data = String(text); else if (node.firstChild && node.firstChild.nodeType == goog.dom.NodeType.TEXT) {
              while (node.lastChild != node.firstChild) node.removeChild(node.lastChild);
              node.firstChild.data = String(text)
            } else {
              goog.dom.removeChildren(node);
              var doc = goog.dom.getOwnerDocument(node);
              node.appendChild(doc.createTextNode(String(text)))
            }
          };
          goog.dom.getOuterHtml = function (element) {
            goog.asserts.assert(element !== null, "goog.dom.getOuterHtml expects a non-null value for element");
            if ("outerHTML" in element) return element.outerHTML; else {
              var doc = goog.dom.getOwnerDocument(element);
              var div = goog.dom.createElement_(doc, goog.dom.TagName.DIV);
              div.appendChild(element.cloneNode(true));
              return div.innerHTML
            }
          };
          goog.dom.findNode = function (root, p) {
            var rv = [];
            var found = goog.dom.findNodes_(root, p, rv, true);
            return found ? rv[0] : undefined
          };
          goog.dom.findNodes = function (root, p) {
            var rv = [];
            goog.dom.findNodes_(root, p, rv, false);
            return rv
          };
          goog.dom.findNodes_ = function (root, p, rv, findOne) {
            if (root != null) {
              var child = root.firstChild;
              while (child) {
                if (p(child)) {
                  rv.push(child);
                  if (findOne) return true
                }
                if (goog.dom.findNodes_(child, p, rv, findOne)) return true;
                child = child.nextSibling
              }
            }
            return false
          };
          goog.dom.TAGS_TO_IGNORE_ = {"SCRIPT": 1, "STYLE": 1, "HEAD": 1, "IFRAME": 1, "OBJECT": 1};
          goog.dom.PREDEFINED_TAG_VALUES_ = {"IMG": " ", "BR": "\n"};
          goog.dom.isFocusableTabIndex = function (element) {
            return goog.dom.hasSpecifiedTabIndex_(element) && goog.dom.isTabIndexFocusable_(element)
          };
          goog.dom.setFocusableTabIndex = function (element, enable) {
            if (enable) element.tabIndex = 0; else {
              element.tabIndex = -1;
              element.removeAttribute("tabIndex")
            }
          };
          goog.dom.isFocusable = function (element) {
            var focusable;
            if (goog.dom.nativelySupportsFocus_(element)) focusable = !element.disabled && (!goog.dom.hasSpecifiedTabIndex_(element) || goog.dom.isTabIndexFocusable_(element)); else focusable = goog.dom.isFocusableTabIndex(element);
            return focusable && goog.userAgent.IE ? goog.dom.hasNonZeroBoundingRect_(element) : focusable
          };
          goog.dom.hasSpecifiedTabIndex_ = function (element) {
            if (goog.userAgent.IE && !goog.userAgent.isVersionOrHigher("9")) {
              var attrNode = element.getAttributeNode("tabindex");
              return goog.isDefAndNotNull(attrNode) && attrNode.specified
            } else return element.hasAttribute("tabindex")
          };
          goog.dom.isTabIndexFocusable_ = function (element) {
            var index = element.tabIndex;
            return goog.isNumber(index) && index >= 0 && index < 32768
          };
          goog.dom.nativelySupportsFocus_ = function (element) {
            return element.tagName == goog.dom.TagName.A || element.tagName == goog.dom.TagName.INPUT || element.tagName == goog.dom.TagName.TEXTAREA || element.tagName == goog.dom.TagName.SELECT || element.tagName == goog.dom.TagName.BUTTON
          };
          goog.dom.hasNonZeroBoundingRect_ = function (element) {
            var rect;
            if (!goog.isFunction(element["getBoundingClientRect"]) || goog.userAgent.IE && element.parentElement == null) rect = {
              "height": element.offsetHeight,
              "width": element.offsetWidth
            }; else rect = element.getBoundingClientRect();
            return goog.isDefAndNotNull(rect) && rect.height > 0 && rect.width > 0
          };
          goog.dom.getTextContent = function (node) {
            var textContent;
            if (goog.dom.BrowserFeature.CAN_USE_INNER_TEXT && node !== null && "innerText" in node) textContent = goog.string.canonicalizeNewlines(node.innerText); else {
              var buf = [];
              goog.dom.getTextContent_(node, buf, true);
              textContent = buf.join("")
            }
            textContent = textContent.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
            textContent = textContent.replace(/\u200B/g, "");
            if (!goog.dom.BrowserFeature.CAN_USE_INNER_TEXT) textContent = textContent.replace(/ +/g, " ");
            if (textContent != " ") textContent =
              textContent.replace(/^\s*/, "");
            return textContent
          };
          goog.dom.getRawTextContent = function (node) {
            var buf = [];
            goog.dom.getTextContent_(node, buf, false);
            return buf.join("")
          };
          goog.dom.getTextContent_ = function (node, buf, normalizeWhitespace) {
            if (node.nodeName in goog.dom.TAGS_TO_IGNORE_) ; else if (node.nodeType == goog.dom.NodeType.TEXT) if (normalizeWhitespace) buf.push(String(node.nodeValue).replace(/(\r\n|\r|\n)/g, "")); else buf.push(node.nodeValue); else if (node.nodeName in goog.dom.PREDEFINED_TAG_VALUES_) buf.push(goog.dom.PREDEFINED_TAG_VALUES_[node.nodeName]); else {
              var child = node.firstChild;
              while (child) {
                goog.dom.getTextContent_(child, buf, normalizeWhitespace);
                child = child.nextSibling
              }
            }
          };
          goog.dom.getNodeTextLength = function (node) {
            return goog.dom.getTextContent(node).length
          };
          goog.dom.getNodeTextOffset = function (node, opt_offsetParent) {
            var root = opt_offsetParent || goog.dom.getOwnerDocument(node).body;
            var buf = [];
            while (node && node != root) {
              var cur = node;
              while (cur = cur.previousSibling) buf.unshift(goog.dom.getTextContent(cur));
              node = node.parentNode
            }
            return goog.string.trimLeft(buf.join("")).replace(/ +/g, " ").length
          };
          goog.dom.getNodeAtOffset = function (parent, offset, opt_result) {
            var stack = [parent], pos = 0, cur = null;
            while (stack.length > 0 && pos < offset) {
              cur = stack.pop();
              if (cur.nodeName in goog.dom.TAGS_TO_IGNORE_) ; else if (cur.nodeType == goog.dom.NodeType.TEXT) {
                var text = cur.nodeValue.replace(/(\r\n|\r|\n)/g, "").replace(/ +/g, " ");
                pos += text.length
              } else if (cur.nodeName in goog.dom.PREDEFINED_TAG_VALUES_) pos += goog.dom.PREDEFINED_TAG_VALUES_[cur.nodeName].length; else for (var i = cur.childNodes.length - 1; i >= 0; i--) stack.push(cur.childNodes[i])
            }
            if (goog.isObject(opt_result)) {
              opt_result.remainder =
                cur ? cur.nodeValue.length + offset - pos - 1 : 0;
              opt_result.node = cur
            }
            return cur
          };
          goog.dom.isNodeList = function (val) {
            if (val && typeof val.length == "number") if (goog.isObject(val)) return typeof val.item == "function" || typeof val.item == "string"; else if (goog.isFunction(val)) return typeof val.item == "function";
            return false
          };
          goog.dom.getAncestorByTagNameAndClass = function (element, opt_tag, opt_class, opt_maxSearchSteps) {
            if (!opt_tag && !opt_class) return null;
            var tagName = opt_tag ? String(opt_tag).toUpperCase() : null;
            return goog.dom.getAncestor(element, function (node) {
              return (!tagName || node.nodeName == tagName) && (!opt_class || goog.isString(node.className) && goog.array.contains(node.className.split(/\s+/), opt_class))
            }, true, opt_maxSearchSteps)
          };
          goog.dom.getAncestorByClass = function (element, className, opt_maxSearchSteps) {
            return goog.dom.getAncestorByTagNameAndClass(element, null, className, opt_maxSearchSteps)
          };
          goog.dom.getAncestor = function (element, matcher, opt_includeNode, opt_maxSearchSteps) {
            if (element && !opt_includeNode) element = element.parentNode;
            var steps = 0;
            while (element && (opt_maxSearchSteps == null || steps <= opt_maxSearchSteps)) {
              goog.asserts.assert(element.name != "parentNode");
              if (matcher(element)) return element;
              element = element.parentNode;
              steps++
            }
            return null
          };
          goog.dom.getActiveElement = function (doc) {
            try {
              return doc && doc.activeElement
            } catch (e) {
            }
            return null
          };
          goog.dom.getPixelRatio = function () {
            var win = goog.dom.getWindow();
            if (goog.isDef(win.devicePixelRatio)) return win.devicePixelRatio; else if (win.matchMedia) return goog.dom.matchesPixelRatio_(3) || goog.dom.matchesPixelRatio_(2) || goog.dom.matchesPixelRatio_(1.5) || goog.dom.matchesPixelRatio_(1) || .75;
            return 1
          };
          goog.dom.matchesPixelRatio_ = function (pixelRatio) {
            var win = goog.dom.getWindow();
            var dpiPerDppx = 96;
            var query = "(min-resolution: " + pixelRatio + "dppx)," + "(min--moz-device-pixel-ratio: " + pixelRatio + ")," + "(min-resolution: " + pixelRatio * dpiPerDppx + "dpi)";
            return win.matchMedia(query).matches ? pixelRatio : 0
          };
          goog.dom.getCanvasContext2D = function (canvas) {
            return canvas.getContext("2d")
          };
          goog.dom.DomHelper = function (opt_document) {
            this.document_ = opt_document || goog.global.document || document
          };
          goog.dom.DomHelper.prototype.getDomHelper = goog.dom.getDomHelper;
          goog.dom.DomHelper.prototype.setDocument = function (document) {
            this.document_ = document
          };
          goog.dom.DomHelper.prototype.getDocument = function () {
            return this.document_
          };
          goog.dom.DomHelper.prototype.getElement = function (element) {
            return goog.dom.getElementHelper_(this.document_, element)
          };
          goog.dom.DomHelper.prototype.getRequiredElement = function (id) {
            return goog.dom.getRequiredElementHelper_(this.document_, id)
          };
          goog.dom.DomHelper.prototype.$ = goog.dom.DomHelper.prototype.getElement;
          goog.dom.DomHelper.prototype.getElementsByTagName = function (tagName, opt_parent) {
            var parent = opt_parent || this.document_;
            return parent.getElementsByTagName(String(tagName))
          };
          goog.dom.DomHelper.prototype.getElementsByTagNameAndClass = function (opt_tag, opt_class, opt_el) {
            return goog.dom.getElementsByTagNameAndClass_(this.document_, opt_tag, opt_class, opt_el)
          };
          goog.dom.DomHelper.prototype.getElementByTagNameAndClass = function (opt_tag, opt_class, opt_el) {
            return goog.dom.getElementByTagNameAndClass_(this.document_, opt_tag, opt_class, opt_el)
          };
          goog.dom.DomHelper.prototype.getElementsByClass = function (className, opt_el) {
            var doc = opt_el || this.document_;
            return goog.dom.getElementsByClass(className, doc)
          };
          goog.dom.DomHelper.prototype.getElementByClass = function (className, opt_el) {
            var doc = opt_el || this.document_;
            return goog.dom.getElementByClass(className, doc)
          };
          goog.dom.DomHelper.prototype.getRequiredElementByClass = function (className, opt_root) {
            var root = opt_root || this.document_;
            return goog.dom.getRequiredElementByClass(className, root)
          };
          goog.dom.DomHelper.prototype.$$ = goog.dom.DomHelper.prototype.getElementsByTagNameAndClass;
          goog.dom.DomHelper.prototype.setProperties = goog.dom.setProperties;
          goog.dom.DomHelper.prototype.getViewportSize = function (opt_window) {
            return goog.dom.getViewportSize(opt_window || this.getWindow())
          };
          goog.dom.DomHelper.prototype.getDocumentHeight = function () {
            return goog.dom.getDocumentHeight_(this.getWindow())
          };
          goog.dom.Appendable;
          goog.dom.DomHelper.prototype.createDom = function (tagName, opt_attributes, var_args) {
            return goog.dom.createDom_(this.document_, arguments)
          };
          goog.dom.DomHelper.prototype.$dom = goog.dom.DomHelper.prototype.createDom;
          goog.dom.DomHelper.prototype.createElement = function (name) {
            return goog.dom.createElement_(this.document_, name)
          };
          goog.dom.DomHelper.prototype.createTextNode = function (content) {
            return this.document_.createTextNode(String(content))
          };
          goog.dom.DomHelper.prototype.createTable = function (rows, columns, opt_fillWithNbsp) {
            return goog.dom.createTable_(this.document_, rows, columns, !!opt_fillWithNbsp)
          };
          goog.dom.DomHelper.prototype.safeHtmlToNode = function (html) {
            return goog.dom.safeHtmlToNode_(this.document_, html)
          };
          goog.dom.DomHelper.prototype.isCss1CompatMode = function () {
            return goog.dom.isCss1CompatMode_(this.document_)
          };
          goog.dom.DomHelper.prototype.getWindow = function () {
            return goog.dom.getWindow_(this.document_)
          };
          goog.dom.DomHelper.prototype.getDocumentScrollElement = function () {
            return goog.dom.getDocumentScrollElement_(this.document_)
          };
          goog.dom.DomHelper.prototype.getDocumentScroll = function () {
            return goog.dom.getDocumentScroll_(this.document_)
          };
          goog.dom.DomHelper.prototype.getActiveElement = function (opt_doc) {
            return goog.dom.getActiveElement(opt_doc || this.document_)
          };
          goog.dom.DomHelper.prototype.appendChild = goog.dom.appendChild;
          goog.dom.DomHelper.prototype.append = goog.dom.append;
          goog.dom.DomHelper.prototype.canHaveChildren = goog.dom.canHaveChildren;
          goog.dom.DomHelper.prototype.removeChildren = goog.dom.removeChildren;
          goog.dom.DomHelper.prototype.insertSiblingBefore = goog.dom.insertSiblingBefore;
          goog.dom.DomHelper.prototype.insertSiblingAfter = goog.dom.insertSiblingAfter;
          goog.dom.DomHelper.prototype.insertChildAt = goog.dom.insertChildAt;
          goog.dom.DomHelper.prototype.removeNode = goog.dom.removeNode;
          goog.dom.DomHelper.prototype.replaceNode = goog.dom.replaceNode;
          goog.dom.DomHelper.prototype.flattenElement = goog.dom.flattenElement;
          goog.dom.DomHelper.prototype.getChildren = goog.dom.getChildren;
          goog.dom.DomHelper.prototype.getFirstElementChild = goog.dom.getFirstElementChild;
          goog.dom.DomHelper.prototype.getLastElementChild = goog.dom.getLastElementChild;
          goog.dom.DomHelper.prototype.getNextElementSibling = goog.dom.getNextElementSibling;
          goog.dom.DomHelper.prototype.getPreviousElementSibling = goog.dom.getPreviousElementSibling;
          goog.dom.DomHelper.prototype.getNextNode = goog.dom.getNextNode;
          goog.dom.DomHelper.prototype.getPreviousNode = goog.dom.getPreviousNode;
          goog.dom.DomHelper.prototype.isNodeLike = goog.dom.isNodeLike;
          goog.dom.DomHelper.prototype.isElement = goog.dom.isElement;
          goog.dom.DomHelper.prototype.isWindow = goog.dom.isWindow;
          goog.dom.DomHelper.prototype.getParentElement = goog.dom.getParentElement;
          goog.dom.DomHelper.prototype.contains = goog.dom.contains;
          goog.dom.DomHelper.prototype.compareNodeOrder = goog.dom.compareNodeOrder;
          goog.dom.DomHelper.prototype.findCommonAncestor = goog.dom.findCommonAncestor;
          goog.dom.DomHelper.prototype.getOwnerDocument = goog.dom.getOwnerDocument;
          goog.dom.DomHelper.prototype.getFrameContentDocument = goog.dom.getFrameContentDocument;
          goog.dom.DomHelper.prototype.getFrameContentWindow = goog.dom.getFrameContentWindow;
          goog.dom.DomHelper.prototype.setTextContent = goog.dom.setTextContent;
          goog.dom.DomHelper.prototype.getOuterHtml = goog.dom.getOuterHtml;
          goog.dom.DomHelper.prototype.findNode = goog.dom.findNode;
          goog.dom.DomHelper.prototype.findNodes = goog.dom.findNodes;
          goog.dom.DomHelper.prototype.isFocusableTabIndex = goog.dom.isFocusableTabIndex;
          goog.dom.DomHelper.prototype.setFocusableTabIndex = goog.dom.setFocusableTabIndex;
          goog.dom.DomHelper.prototype.isFocusable = goog.dom.isFocusable;
          goog.dom.DomHelper.prototype.getTextContent = goog.dom.getTextContent;
          goog.dom.DomHelper.prototype.getNodeTextLength = goog.dom.getNodeTextLength;
          goog.dom.DomHelper.prototype.getNodeTextOffset = goog.dom.getNodeTextOffset;
          goog.dom.DomHelper.prototype.getNodeAtOffset = goog.dom.getNodeAtOffset;
          goog.dom.DomHelper.prototype.isNodeList = goog.dom.isNodeList;
          goog.dom.DomHelper.prototype.getAncestorByTagNameAndClass = goog.dom.getAncestorByTagNameAndClass;
          goog.dom.DomHelper.prototype.getAncestorByClass = goog.dom.getAncestorByClass;
          goog.dom.DomHelper.prototype.getAncestor = goog.dom.getAncestor;
          goog.dom.DomHelper.prototype.getCanvasContext2D = goog.dom.getCanvasContext2D;
          goog.provide("goog.json");
          goog.provide("goog.json.Replacer");
          goog.provide("goog.json.Reviver");
          goog.provide("goog.json.Serializer");
          goog.define("goog.json.USE_NATIVE_JSON", false);
          goog.define("goog.json.TRY_NATIVE_JSON", false);
          goog.json.isValid = function (s) {
            if (/^\s*$/.test(s)) return false;
            var backslashesRe = /\\["\\\/bfnrtu]/g;
            var simpleValuesRe = /(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g;
            var openBracketsRe = /(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g;
            var remainderRe = /^[\],:{}\s\u2028\u2029]*$/;
            return remainderRe.test(s.replace(backslashesRe, "@").replace(simpleValuesRe, "]").replace(openBracketsRe, ""))
          };
          goog.json.errorLogger_ = goog.nullFunction;
          goog.json.setErrorLogger = function (errorLogger) {
            goog.json.errorLogger_ = errorLogger
          };
          goog.json.parse = goog.json.USE_NATIVE_JSON ? goog.global["JSON"]["parse"] : function (s) {
            var error;
            if (goog.json.TRY_NATIVE_JSON) try {
              return goog.global["JSON"]["parse"](s)
            } catch (ex) {
              error = ex
            }
            var o = String(s);
            if (goog.json.isValid(o)) try {
              var result = eval("(" + o + ")");
              if (error) goog.json.errorLogger_("Invalid JSON: " + o, error);
              return result
            } catch (ex$0) {
            }
            throw new Error("Invalid JSON string: " + o);
          };
          goog.json.Replacer;
          goog.json.Reviver;
          goog.json.serialize = goog.json.USE_NATIVE_JSON ? goog.global["JSON"]["stringify"] : function (object, opt_replacer) {
            return (new goog.json.Serializer(opt_replacer)).serialize(object)
          };
          goog.json.Serializer = function (opt_replacer) {
            this.replacer_ = opt_replacer
          };
          goog.json.Serializer.prototype.serialize = function (object) {
            var sb = [];
            this.serializeInternal(object, sb);
            return sb.join("")
          };
          goog.json.Serializer.prototype.serializeInternal = function (object, sb) {
            if (object == null) {
              sb.push("null");
              return
            }
            if (typeof object == "object") if (goog.isArray(object)) {
              this.serializeArray(object, sb);
              return
            } else if (object instanceof String || object instanceof Number || object instanceof Boolean) object = object.valueOf(); else {
              this.serializeObject_(object, sb);
              return
            }
            switch (typeof object) {
              case "string":
                this.serializeString_(object, sb);
                break;
              case "number":
                this.serializeNumber_(object, sb);
                break;
              case "boolean":
                sb.push(String(object));
                break;
              case "function":
                sb.push("null");
                break;
              default:
                throw new Error("Unknown type: " + typeof object);
            }
          };
          goog.json.Serializer.charToJsonCharCache_ = {
            '"': '\\"',
            "\\": "\\\\",
            "/": "\\/",
            "\b": "\\b",
            "\f": "\\f",
            "\n": "\\n",
            "\r": "\\r",
            "\t": "\\t",
            "\x0B": "\\u000b"
          };
          goog.json.Serializer.charsToReplace_ = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;
          goog.json.Serializer.prototype.serializeString_ = function (s, sb) {
            sb.push('"', s.replace(goog.json.Serializer.charsToReplace_, function (c) {
              var rv = goog.json.Serializer.charToJsonCharCache_[c];
              if (!rv) {
                rv = "\\u" + (c.charCodeAt(0) | 65536).toString(16).substr(1);
                goog.json.Serializer.charToJsonCharCache_[c] = rv
              }
              return rv
            }), '"')
          };
          goog.json.Serializer.prototype.serializeNumber_ = function (n, sb) {
            sb.push(isFinite(n) && !isNaN(n) ? String(n) : "null")
          };
          goog.json.Serializer.prototype.serializeArray = function (arr, sb) {
            var l = arr.length;
            sb.push("[");
            var sep = "";
            for (var i = 0; i < l; i++) {
              sb.push(sep);
              var value = arr[i];
              this.serializeInternal(this.replacer_ ? this.replacer_.call(arr, String(i), value) : value, sb);
              sep = ","
            }
            sb.push("]")
          };
          goog.json.Serializer.prototype.serializeObject_ = function (obj, sb) {
            sb.push("{");
            var sep = "";
            for (var key in obj) if (Object.prototype.hasOwnProperty.call(obj, key)) {
              var value = obj[key];
              if (typeof value != "function") {
                sb.push(sep);
                this.serializeString_(key, sb);
                sb.push(":");
                this.serializeInternal(this.replacer_ ? this.replacer_.call(obj, key, value) : value, sb);
                sep = ","
              }
            }
            sb.push("}")
          };
          goog.provide("goog.disposable.IDisposable");
          goog.disposable.IDisposable = function () {
          };
          goog.disposable.IDisposable.prototype.dispose = goog.abstractMethod;
          goog.disposable.IDisposable.prototype.isDisposed = goog.abstractMethod;
          goog.provide("goog.Disposable");
          goog.provide("goog.dispose");
          goog.provide("goog.disposeAll");
          goog.require("goog.disposable.IDisposable");
          goog.Disposable = function () {
            this.creationStack;
            if (goog.Disposable.MONITORING_MODE != goog.Disposable.MonitoringMode.OFF) {
              if (goog.Disposable.INCLUDE_STACK_ON_CREATION) this.creationStack = (new Error).stack;
              goog.Disposable.instances_[goog.getUid(this)] = this
            }
            this.disposed_ = this.disposed_;
            this.onDisposeCallbacks_ = this.onDisposeCallbacks_
          };
          goog.Disposable.MonitoringMode = {OFF: 0, PERMANENT: 1, INTERACTIVE: 2};
          goog.define("goog.Disposable.MONITORING_MODE", 0);
          goog.define("goog.Disposable.INCLUDE_STACK_ON_CREATION", true);
          goog.Disposable.instances_ = {};
          goog.Disposable.getUndisposedObjects = function () {
            var ret = [];
            for (var id in goog.Disposable.instances_) if (goog.Disposable.instances_.hasOwnProperty(id)) ret.push(goog.Disposable.instances_[Number(id)]);
            return ret
          };
          goog.Disposable.clearUndisposedObjects = function () {
            goog.Disposable.instances_ = {}
          };
          goog.Disposable.prototype.disposed_ = false;
          goog.Disposable.prototype.onDisposeCallbacks_;
          goog.Disposable.prototype.isDisposed = function () {
            return this.disposed_
          };
          goog.Disposable.prototype.getDisposed = goog.Disposable.prototype.isDisposed;
          goog.Disposable.prototype.dispose = function () {
            if (!this.disposed_) {
              this.disposed_ = true;
              this.disposeInternal();
              if (goog.Disposable.MONITORING_MODE != goog.Disposable.MonitoringMode.OFF) {
                var uid = goog.getUid(this);
                if (goog.Disposable.MONITORING_MODE == goog.Disposable.MonitoringMode.PERMANENT && !goog.Disposable.instances_.hasOwnProperty(uid)) throw new Error(this + " did not call the goog.Disposable base " + "constructor or was disposed of after a clearUndisposedObjects " + "call");
                delete goog.Disposable.instances_[uid]
              }
            }
          };
          goog.Disposable.prototype.registerDisposable = function (disposable) {
            this.addOnDisposeCallback(goog.partial(goog.dispose, disposable))
          };
          goog.Disposable.prototype.addOnDisposeCallback = function (callback, opt_scope) {
            if (this.disposed_) {
              goog.isDef(opt_scope) ? callback.call(opt_scope) : callback();
              return
            }
            if (!this.onDisposeCallbacks_) this.onDisposeCallbacks_ = [];
            this.onDisposeCallbacks_.push(goog.isDef(opt_scope) ? goog.bind(callback, opt_scope) : callback)
          };
          goog.Disposable.prototype.disposeInternal = function () {
            if (this.onDisposeCallbacks_) while (this.onDisposeCallbacks_.length) this.onDisposeCallbacks_.shift()()
          };
          goog.Disposable.isDisposed = function (obj) {
            if (obj && typeof obj.isDisposed == "function") return obj.isDisposed();
            return false
          };
          goog.dispose = function (obj) {
            if (obj && typeof obj.dispose == "function") obj.dispose()
          };
          goog.disposeAll = function (var_args) {
            for (var i = 0, len = arguments.length; i < len; ++i) {
              var disposable = arguments[i];
              if (goog.isArrayLike(disposable)) goog.disposeAll.apply(null, disposable); else goog.dispose(disposable)
            }
          };
          goog.provide("goog.debug.errorcontext");
          goog.debug.errorcontext.addErrorContext = function (err, contextKey, contextValue) {
            if (!err[goog.debug.errorcontext.CONTEXT_KEY_]) err[goog.debug.errorcontext.CONTEXT_KEY_] = {};
            err[goog.debug.errorcontext.CONTEXT_KEY_][contextKey] = contextValue
          };
          goog.debug.errorcontext.getErrorContext = function (err) {
            return err[goog.debug.errorcontext.CONTEXT_KEY_] || {}
          };
          goog.debug.errorcontext.CONTEXT_KEY_ = "__closure__error__context__984382";
          goog.provide("goog.debug");
          goog.require("goog.array");
          goog.require("goog.debug.errorcontext");
          goog.require("goog.userAgent");
          goog.define("goog.debug.LOGGING_ENABLED", goog.DEBUG);
          goog.define("goog.debug.FORCE_SLOPPY_STACKS", false);
          goog.debug.catchErrors = function (logFunc, opt_cancel, opt_target) {
            var target = opt_target || goog.global;
            var oldErrorHandler = target.onerror;
            var retVal = !!opt_cancel;
            if (goog.userAgent.WEBKIT && !goog.userAgent.isVersionOrHigher("535.3")) retVal = !retVal;
            target.onerror = function (message, url, line, opt_col, opt_error) {
              if (oldErrorHandler) oldErrorHandler(message, url, line, opt_col, opt_error);
              logFunc({message: message, fileName: url, line: line, col: opt_col, error: opt_error});
              return retVal
            }
          };
          goog.debug.expose = function (obj, opt_showFn) {
            if (typeof obj == "undefined") return "undefined";
            if (obj == null) return "NULL";
            var str = [];
            for (var x in obj) {
              if (!opt_showFn && goog.isFunction(obj[x])) continue;
              var s = x + " = ";
              try {
                s += obj[x]
              } catch (e) {
                s += "*** " + e + " ***"
              }
              str.push(s)
            }
            return str.join("\n")
          };
          goog.debug.deepExpose = function (obj, opt_showFn) {
            var str = [];
            var uidsToCleanup = [];
            var ancestorUids = {};
            var helper = function (obj, space) {
              var nestspace = space + "  ";
              var indentMultiline = function (str) {
                return str.replace(/\n/g, "\n" + space)
              };
              try {
                if (!goog.isDef(obj)) str.push("undefined"); else if (goog.isNull(obj)) str.push("NULL"); else if (goog.isString(obj)) str.push('"' + indentMultiline(obj) + '"'); else if (goog.isFunction(obj)) str.push(indentMultiline(String(obj))); else if (goog.isObject(obj)) {
                  if (!goog.hasUid(obj)) uidsToCleanup.push(obj);
                  var uid = goog.getUid(obj);
                  if (ancestorUids[uid]) str.push("*** reference loop detected (id=" + uid + ") ***"); else {
                    ancestorUids[uid] = true;
                    str.push("{");
                    for (var x in obj) {
                      if (!opt_showFn && goog.isFunction(obj[x])) continue;
                      str.push("\n");
                      str.push(nestspace);
                      str.push(x + " = ");
                      helper(obj[x], nestspace)
                    }
                    str.push("\n" + space + "}");
                    delete ancestorUids[uid]
                  }
                } else str.push(obj)
              } catch (e) {
                str.push("*** " + e + " ***")
              }
            };
            helper(obj, "");
            for (var i = 0; i < uidsToCleanup.length; i++) goog.removeUid(uidsToCleanup[i]);
            return str.join("")
          };
          goog.debug.exposeArray = function (arr) {
            var str = [];
            for (var i = 0; i < arr.length; i++) if (goog.isArray(arr[i])) str.push(goog.debug.exposeArray(arr[i])); else str.push(arr[i]);
            return "[ " + str.join(", ") + " ]"
          };
          goog.debug.normalizeErrorObject = function (err) {
            var href = goog.getObjectByName("window.location.href");
            if (goog.isString(err)) return {
              "message": err,
              "name": "Unknown error",
              "lineNumber": "Not available",
              "fileName": href,
              "stack": "Not available"
            };
            var lineNumber, fileName;
            var threwError = false;
            try {
              lineNumber = err.lineNumber || err.line || "Not available"
            } catch (e) {
              lineNumber = "Not available";
              threwError = true
            }
            try {
              fileName = err.fileName || err.filename || err.sourceURL || goog.global["$googDebugFname"] || href
            } catch (e$1) {
              fileName =
                "Not available";
              threwError = true
            }
            if (threwError || !err.lineNumber || !err.fileName || !err.stack || !err.message || !err.name) return {
              "message": err.message || "Not available",
              "name": err.name || "UnknownError",
              "lineNumber": lineNumber,
              "fileName": fileName,
              "stack": err.stack || "Not available"
            };
            return err
          };
          goog.debug.enhanceError = function (err, opt_message) {
            var error;
            if (!(err instanceof Error)) {
              error = Error(err);
              if (Error.captureStackTrace) Error.captureStackTrace(error, goog.debug.enhanceError)
            } else error = err;
            if (!error.stack) error.stack = goog.debug.getStacktrace(goog.debug.enhanceError);
            if (opt_message) {
              var x = 0;
              while (error["message" + x]) ++x;
              error["message" + x] = String(opt_message)
            }
            return error
          };
          goog.debug.enhanceErrorWithContext = function (err, opt_context) {
            var error = goog.debug.enhanceError(err);
            if (opt_context) for (var key in opt_context) goog.debug.errorcontext.addErrorContext(error, key, opt_context[key]);
            return error
          };
          goog.debug.getStacktraceSimple = function (opt_depth) {
            if (!goog.debug.FORCE_SLOPPY_STACKS) {
              var stack = goog.debug.getNativeStackTrace_(goog.debug.getStacktraceSimple);
              if (stack) return stack
            }
            var sb = [];
            var fn = arguments.callee.caller;
            var depth = 0;
            while (fn && (!opt_depth || depth < opt_depth)) {
              sb.push(goog.debug.getFunctionName(fn));
              sb.push("()\n");
              try {
                fn = fn.caller
              } catch (e) {
                sb.push("[exception trying to get caller]\n");
                break
              }
              depth++;
              if (depth >= goog.debug.MAX_STACK_DEPTH) {
                sb.push("[...long stack...]");
                break
              }
            }
            if (opt_depth &&
              depth >= opt_depth) sb.push("[...reached max depth limit...]"); else sb.push("[end]");
            return sb.join("")
          };
          goog.debug.MAX_STACK_DEPTH = 50;
          goog.debug.getNativeStackTrace_ = function (fn) {
            var tempErr = new Error;
            if (Error.captureStackTrace) {
              Error.captureStackTrace(tempErr, fn);
              return String(tempErr.stack)
            } else {
              try {
                throw tempErr;
              } catch (e) {
                tempErr = e
              }
              var stack = tempErr.stack;
              if (stack) return String(stack)
            }
            return null
          };
          goog.debug.getStacktrace = function (fn) {
            var stack;
            if (!goog.debug.FORCE_SLOPPY_STACKS) {
              var contextFn = fn || goog.debug.getStacktrace;
              stack = goog.debug.getNativeStackTrace_(contextFn)
            }
            if (!stack) stack = goog.debug.getStacktraceHelper_(fn || arguments.callee.caller, []);
            return stack
          };
          goog.debug.getStacktraceHelper_ = function (fn, visited) {
            var sb = [];
            if (goog.array.contains(visited, fn)) sb.push("[...circular reference...]"); else if (fn && visited.length < goog.debug.MAX_STACK_DEPTH) {
              sb.push(goog.debug.getFunctionName(fn) + "(");
              var args = fn.arguments;
              for (var i = 0; args && i < args.length; i++) {
                if (i > 0) sb.push(", ");
                var argDesc;
                var arg = args[i];
                switch (typeof arg) {
                  case "object":
                    argDesc = arg ? "object" : "null";
                    break;
                  case "string":
                    argDesc = arg;
                    break;
                  case "number":
                    argDesc = String(arg);
                    break;
                  case "boolean":
                    argDesc =
                      arg ? "true" : "false";
                    break;
                  case "function":
                    argDesc = goog.debug.getFunctionName(arg);
                    argDesc = argDesc ? argDesc : "[fn]";
                    break;
                  case "undefined":
                  default:
                    argDesc = typeof arg;
                    break
                }
                if (argDesc.length > 40) argDesc = argDesc.substr(0, 40) + "...";
                sb.push(argDesc)
              }
              visited.push(fn);
              sb.push(")\n");
              try {
                sb.push(goog.debug.getStacktraceHelper_(fn.caller, visited))
              } catch (e) {
                sb.push("[exception trying to get caller]\n")
              }
            } else if (fn) sb.push("[...long stack...]"); else sb.push("[end]");
            return sb.join("")
          };
          goog.debug.setFunctionResolver = function (resolver) {
            goog.debug.fnNameResolver_ = resolver
          };
          goog.debug.getFunctionName = function (fn) {
            if (goog.debug.fnNameCache_[fn]) return goog.debug.fnNameCache_[fn];
            if (goog.debug.fnNameResolver_) {
              var name = goog.debug.fnNameResolver_(fn);
              if (name) {
                goog.debug.fnNameCache_[fn] = name;
                return name
              }
            }
            var functionSource = String(fn);
            if (!goog.debug.fnNameCache_[functionSource]) {
              var matches = /function ([^\(]+)/.exec(functionSource);
              if (matches) {
                var method = matches[1];
                goog.debug.fnNameCache_[functionSource] = method
              } else goog.debug.fnNameCache_[functionSource] = "[Anonymous]"
            }
            return goog.debug.fnNameCache_[functionSource]
          };
          goog.debug.makeWhitespaceVisible = function (string) {
            return string.replace(/ /g, "[_]").replace(/\f/g, "[f]").replace(/\n/g, "[n]\n").replace(/\r/g, "[r]").replace(/\t/g, "[t]")
          };
          goog.debug.runtimeType = function (value) {
            if (value instanceof Function) return value.displayName || value.name || "unknown type name"; else if (value instanceof Object) return value.constructor.displayName || value.constructor.name || Object.prototype.toString.call(value); else return value === null ? "null" : typeof value
          };
          goog.debug.fnNameCache_ = {};
          goog.debug.fnNameResolver_;
          goog.debug.freezeInternal_ = goog.DEBUG && Object.freeze || function (arg) {
            return arg
          };
          goog.debug.freeze = function (arg) {
            return {
              valueOf: function () {
                return goog.debug.freezeInternal_(arg)
              }
            }.valueOf()
          };
          goog.provide("goog.events.BrowserFeature");
          goog.require("goog.userAgent");
          goog.scope(function () {
            goog.events.BrowserFeature = {
              HAS_W3C_BUTTON: !goog.userAgent.IE || goog.userAgent.isDocumentModeOrHigher(9),
              HAS_W3C_EVENT_SUPPORT: !goog.userAgent.IE || goog.userAgent.isDocumentModeOrHigher(9),
              SET_KEY_CODE_TO_PREVENT_DEFAULT: goog.userAgent.IE && !goog.userAgent.isVersionOrHigher("9"),
              HAS_NAVIGATOR_ONLINE_PROPERTY: !goog.userAgent.WEBKIT || goog.userAgent.isVersionOrHigher("528"),
              HAS_HTML5_NETWORK_EVENT_SUPPORT: goog.userAgent.GECKO && goog.userAgent.isVersionOrHigher("1.9b") || goog.userAgent.IE &&
              goog.userAgent.isVersionOrHigher("8") || goog.userAgent.OPERA && goog.userAgent.isVersionOrHigher("9.5") || goog.userAgent.WEBKIT && goog.userAgent.isVersionOrHigher("528"),
              HTML5_NETWORK_EVENTS_FIRE_ON_BODY: goog.userAgent.GECKO && !goog.userAgent.isVersionOrHigher("8") || goog.userAgent.IE && !goog.userAgent.isVersionOrHigher("9"),
              TOUCH_ENABLED: "ontouchstart" in goog.global || !!(goog.global["document"] && document.documentElement && "ontouchstart" in document.documentElement) || !!(goog.global["navigator"] && (goog.global["navigator"]["maxTouchPoints"] ||
                goog.global["navigator"]["msMaxTouchPoints"])),
              POINTER_EVENTS: "PointerEvent" in goog.global,
              MSPOINTER_EVENTS: "MSPointerEvent" in goog.global && !!(goog.global["navigator"] && goog.global["navigator"]["msPointerEnabled"]),
              PASSIVE_EVENTS: purify(function () {
                if (!goog.global.addEventListener || !Object.defineProperty) return false;
                var passive = false;
                var options = Object.defineProperty({}, "passive", {
                  get: function () {
                    passive = true
                  }
                });
                goog.global.addEventListener("test", goog.nullFunction, options);
                goog.global.removeEventListener("test",
                  goog.nullFunction, options);
                return passive
              })
            };

            function purify(fn) {
              return {valueOf: fn}.valueOf()
            }
          });
          goog.provide("goog.events.EventId");
          goog.events.EventId = function (eventId) {
            this.id = eventId
          };
          goog.events.EventId.prototype.toString = function () {
            return this.id
          };
          goog.provide("goog.events.Event");
          goog.provide("goog.events.EventLike");
          goog.require("goog.Disposable");
          goog.require("goog.events.EventId");
          goog.events.EventLike;
          goog.events.Event = function (type, opt_target) {
            this.type = type instanceof goog.events.EventId ? String(type) : type;
            this.target = opt_target;
            this.currentTarget = this.target;
            this.propagationStopped_ = false;
            this.defaultPrevented = false;
            this.returnValue_ = true
          };
          goog.events.Event.prototype.stopPropagation = function () {
            this.propagationStopped_ = true
          };
          goog.events.Event.prototype.preventDefault = function () {
            this.defaultPrevented = true;
            this.returnValue_ = false
          };
          goog.events.Event.stopPropagation = function (e) {
            e.stopPropagation()
          };
          goog.events.Event.preventDefault = function (e) {
            e.preventDefault()
          };
          goog.provide("goog.events.EventType");
          goog.provide("goog.events.PointerFallbackEventType");
          goog.require("goog.events.BrowserFeature");
          goog.require("goog.userAgent");
          goog.events.getVendorPrefixedName_ = function (eventName) {
            return goog.userAgent.WEBKIT ? "webkit" + eventName : goog.userAgent.OPERA ? "o" + eventName.toLowerCase() : eventName.toLowerCase()
          };
          goog.events.EventType = {
            CLICK: "click",
            RIGHTCLICK: "rightclick",
            DBLCLICK: "dblclick",
            MOUSEDOWN: "mousedown",
            MOUSEUP: "mouseup",
            MOUSEOVER: "mouseover",
            MOUSEOUT: "mouseout",
            MOUSEMOVE: "mousemove",
            MOUSEENTER: "mouseenter",
            MOUSELEAVE: "mouseleave",
            SELECTIONCHANGE: "selectionchange",
            SELECTSTART: "selectstart",
            WHEEL: "wheel",
            KEYPRESS: "keypress",
            KEYDOWN: "keydown",
            KEYUP: "keyup",
            BLUR: "blur",
            FOCUS: "focus",
            DEACTIVATE: "deactivate",
            FOCUSIN: goog.userAgent.IE ? "focusin" : "DOMFocusIn",
            FOCUSOUT: goog.userAgent.IE ? "focusout" : "DOMFocusOut",
            CHANGE: "change",
            RESET: "reset",
            SELECT: "select",
            SUBMIT: "submit",
            INPUT: "input",
            PROPERTYCHANGE: "propertychange",
            DRAGSTART: "dragstart",
            DRAG: "drag",
            DRAGENTER: "dragenter",
            DRAGOVER: "dragover",
            DRAGLEAVE: "dragleave",
            DROP: "drop",
            DRAGEND: "dragend",
            TOUCHSTART: "touchstart",
            TOUCHMOVE: "touchmove",
            TOUCHEND: "touchend",
            TOUCHCANCEL: "touchcancel",
            BEFOREUNLOAD: "beforeunload",
            CONSOLEMESSAGE: "consolemessage",
            CONTEXTMENU: "contextmenu",
            DEVICEMOTION: "devicemotion",
            DEVICEORIENTATION: "deviceorientation",
            DOMCONTENTLOADED: "DOMContentLoaded",
            ERROR: "error",
            HELP: "help",
            LOAD: "load",
            LOSECAPTURE: "losecapture",
            ORIENTATIONCHANGE: "orientationchange",
            READYSTATECHANGE: "readystatechange",
            RESIZE: "resize",
            SCROLL: "scroll",
            UNLOAD: "unload",
            CANPLAY: "canplay",
            CANPLAYTHROUGH: "canplaythrough",
            DURATIONCHANGE: "durationchange",
            EMPTIED: "emptied",
            ENDED: "ended",
            LOADEDDATA: "loadeddata",
            LOADEDMETADATA: "loadedmetadata",
            PAUSE: "pause",
            PLAY: "play",
            PLAYING: "playing",
            RATECHANGE: "ratechange",
            SEEKED: "seeked",
            SEEKING: "seeking",
            STALLED: "stalled",
            SUSPEND: "suspend",
            TIMEUPDATE: "timeupdate",
            VOLUMECHANGE: "volumechange",
            WAITING: "waiting",
            SOURCEOPEN: "sourceopen",
            SOURCEENDED: "sourceended",
            SOURCECLOSED: "sourceclosed",
            ABORT: "abort",
            UPDATE: "update",
            UPDATESTART: "updatestart",
            UPDATEEND: "updateend",
            HASHCHANGE: "hashchange",
            PAGEHIDE: "pagehide",
            PAGESHOW: "pageshow",
            POPSTATE: "popstate",
            COPY: "copy",
            PASTE: "paste",
            CUT: "cut",
            BEFORECOPY: "beforecopy",
            BEFORECUT: "beforecut",
            BEFOREPASTE: "beforepaste",
            ONLINE: "online",
            OFFLINE: "offline",
            MESSAGE: "message",
            CONNECT: "connect",
            INSTALL: "install",
            ACTIVATE: "activate",
            FETCH: "fetch",
            FOREIGNFETCH: "foreignfetch",
            MESSAGEERROR: "messageerror",
            STATECHANGE: "statechange",
            UPDATEFOUND: "updatefound",
            CONTROLLERCHANGE: "controllerchange",
            ANIMATIONSTART: goog.events.getVendorPrefixedName_("AnimationStart"),
            ANIMATIONEND: goog.events.getVendorPrefixedName_("AnimationEnd"),
            ANIMATIONITERATION: goog.events.getVendorPrefixedName_("AnimationIteration"),
            TRANSITIONEND: goog.events.getVendorPrefixedName_("TransitionEnd"),
            POINTERDOWN: "pointerdown",
            POINTERUP: "pointerup",
            POINTERCANCEL: "pointercancel",
            POINTERMOVE: "pointermove",
            POINTEROVER: "pointerover",
            POINTEROUT: "pointerout",
            POINTERENTER: "pointerenter",
            POINTERLEAVE: "pointerleave",
            GOTPOINTERCAPTURE: "gotpointercapture",
            LOSTPOINTERCAPTURE: "lostpointercapture",
            MSGESTURECHANGE: "MSGestureChange",
            MSGESTUREEND: "MSGestureEnd",
            MSGESTUREHOLD: "MSGestureHold",
            MSGESTURESTART: "MSGestureStart",
            MSGESTURETAP: "MSGestureTap",
            MSGOTPOINTERCAPTURE: "MSGotPointerCapture",
            MSINERTIASTART: "MSInertiaStart",
            MSLOSTPOINTERCAPTURE: "MSLostPointerCapture",
            MSPOINTERCANCEL: "MSPointerCancel",
            MSPOINTERDOWN: "MSPointerDown",
            MSPOINTERENTER: "MSPointerEnter",
            MSPOINTERHOVER: "MSPointerHover",
            MSPOINTERLEAVE: "MSPointerLeave",
            MSPOINTERMOVE: "MSPointerMove",
            MSPOINTEROUT: "MSPointerOut",
            MSPOINTEROVER: "MSPointerOver",
            MSPOINTERUP: "MSPointerUp",
            TEXT: "text",
            TEXTINPUT: goog.userAgent.IE ? "textinput" : "textInput",
            COMPOSITIONSTART: "compositionstart",
            COMPOSITIONUPDATE: "compositionupdate",
            COMPOSITIONEND: "compositionend",
            BEFOREINPUT: "beforeinput",
            EXIT: "exit",
            LOADABORT: "loadabort",
            LOADCOMMIT: "loadcommit",
            LOADREDIRECT: "loadredirect",
            LOADSTART: "loadstart",
            LOADSTOP: "loadstop",
            RESPONSIVE: "responsive",
            SIZECHANGED: "sizechanged",
            UNRESPONSIVE: "unresponsive",
            VISIBILITYCHANGE: "visibilitychange",
            STORAGE: "storage",
            DOMSUBTREEMODIFIED: "DOMSubtreeModified",
            DOMNODEINSERTED: "DOMNodeInserted",
            DOMNODEREMOVED: "DOMNodeRemoved",
            DOMNODEREMOVEDFROMDOCUMENT: "DOMNodeRemovedFromDocument",
            DOMNODEINSERTEDINTODOCUMENT: "DOMNodeInsertedIntoDocument",
            DOMATTRMODIFIED: "DOMAttrModified",
            DOMCHARACTERDATAMODIFIED: "DOMCharacterDataModified",
            BEFOREPRINT: "beforeprint",
            AFTERPRINT: "afterprint"
          };
          goog.events.getPointerFallbackEventName_ = function (pointerEventName, msPointerEventName, mouseEventName) {
            if (goog.events.BrowserFeature.POINTER_EVENTS) return pointerEventName;
            if (goog.events.BrowserFeature.MSPOINTER_EVENTS) return msPointerEventName;
            return mouseEventName
          };
          goog.events.PointerFallbackEventType = {
            POINTERDOWN: goog.events.getPointerFallbackEventName_(goog.events.EventType.POINTERDOWN, goog.events.EventType.MSPOINTERDOWN, goog.events.EventType.MOUSEDOWN),
            POINTERUP: goog.events.getPointerFallbackEventName_(goog.events.EventType.POINTERUP, goog.events.EventType.MSPOINTERUP, goog.events.EventType.MOUSEUP),
            POINTERCANCEL: goog.events.getPointerFallbackEventName_(goog.events.EventType.POINTERCANCEL, goog.events.EventType.MSPOINTERCANCEL, "mousecancel"),
            POINTERMOVE: goog.events.getPointerFallbackEventName_(goog.events.EventType.POINTERMOVE,
              goog.events.EventType.MSPOINTERMOVE, goog.events.EventType.MOUSEMOVE),
            POINTEROVER: goog.events.getPointerFallbackEventName_(goog.events.EventType.POINTEROVER, goog.events.EventType.MSPOINTEROVER, goog.events.EventType.MOUSEOVER),
            POINTEROUT: goog.events.getPointerFallbackEventName_(goog.events.EventType.POINTEROUT, goog.events.EventType.MSPOINTEROUT, goog.events.EventType.MOUSEOUT),
            POINTERENTER: goog.events.getPointerFallbackEventName_(goog.events.EventType.POINTERENTER, goog.events.EventType.MSPOINTERENTER,
              goog.events.EventType.MOUSEENTER),
            POINTERLEAVE: goog.events.getPointerFallbackEventName_(goog.events.EventType.POINTERLEAVE, goog.events.EventType.MSPOINTERLEAVE, goog.events.EventType.MOUSELEAVE)
          };
          goog.provide("goog.events.BrowserEvent");
          goog.provide("goog.events.BrowserEvent.MouseButton");
          goog.provide("goog.events.BrowserEvent.PointerType");
          goog.require("goog.debug");
          goog.require("goog.events.BrowserFeature");
          goog.require("goog.events.Event");
          goog.require("goog.events.EventType");
          goog.require("goog.reflect");
          goog.require("goog.userAgent");
          goog.events.BrowserEvent = function (opt_e, opt_currentTarget) {
            goog.events.BrowserEvent.base(this, "constructor", opt_e ? opt_e.type : "");
            this.target = null;
            this.currentTarget = null;
            this.relatedTarget = null;
            this.offsetX = 0;
            this.offsetY = 0;
            this.clientX = 0;
            this.clientY = 0;
            this.screenX = 0;
            this.screenY = 0;
            this.button = 0;
            this.key = "";
            this.keyCode = 0;
            this.charCode = 0;
            this.ctrlKey = false;
            this.altKey = false;
            this.shiftKey = false;
            this.metaKey = false;
            this.state = null;
            this.platformModifierKey = false;
            this.pointerId = 0;
            this.pointerType = "";
            this.event_ = null;
            if (opt_e) this.init(opt_e, opt_currentTarget)
          };
          goog.inherits(goog.events.BrowserEvent, goog.events.Event);
          goog.events.BrowserEvent.MouseButton = {LEFT: 0, MIDDLE: 1, RIGHT: 2};
          goog.events.BrowserEvent.PointerType = {MOUSE: "mouse", PEN: "pen", TOUCH: "touch"};
          goog.events.BrowserEvent.IEButtonMap = goog.debug.freeze([1, 4, 2]);
          goog.events.BrowserEvent.IE_BUTTON_MAP = goog.events.BrowserEvent.IEButtonMap;
          goog.events.BrowserEvent.IE_POINTER_TYPE_MAP = goog.debug.freeze({
            2: goog.events.BrowserEvent.PointerType.TOUCH,
            3: goog.events.BrowserEvent.PointerType.PEN,
            4: goog.events.BrowserEvent.PointerType.MOUSE
          });
          goog.events.BrowserEvent.prototype.init = function (e, opt_currentTarget) {
            var type = this.type = e.type;
            var relevantTouch = e.changedTouches ? e.changedTouches[0] : null;
            this.target = e.target || e.srcElement;
            this.currentTarget = opt_currentTarget;
            var relatedTarget = e.relatedTarget;
            if (relatedTarget) {
              if (goog.userAgent.GECKO) if (!goog.reflect.canAccessProperty(relatedTarget, "nodeName")) relatedTarget = null
            } else if (type == goog.events.EventType.MOUSEOVER) relatedTarget = e.fromElement; else if (type == goog.events.EventType.MOUSEOUT) relatedTarget =
              e.toElement;
            this.relatedTarget = relatedTarget;
            if (!goog.isNull(relevantTouch)) {
              this.clientX = relevantTouch.clientX !== undefined ? relevantTouch.clientX : relevantTouch.pageX;
              this.clientY = relevantTouch.clientY !== undefined ? relevantTouch.clientY : relevantTouch.pageY;
              this.screenX = relevantTouch.screenX || 0;
              this.screenY = relevantTouch.screenY || 0
            } else {
              this.offsetX = goog.userAgent.WEBKIT || e.offsetX !== undefined ? e.offsetX : e.layerX;
              this.offsetY = goog.userAgent.WEBKIT || e.offsetY !== undefined ? e.offsetY : e.layerY;
              this.clientX =
                e.clientX !== undefined ? e.clientX : e.pageX;
              this.clientY = e.clientY !== undefined ? e.clientY : e.pageY;
              this.screenX = e.screenX || 0;
              this.screenY = e.screenY || 0
            }
            this.button = e.button;
            this.keyCode = e.keyCode || 0;
            this.key = e.key || "";
            this.charCode = e.charCode || (type == "keypress" ? e.keyCode : 0);
            this.ctrlKey = e.ctrlKey;
            this.altKey = e.altKey;
            this.shiftKey = e.shiftKey;
            this.metaKey = e.metaKey;
            this.platformModifierKey = goog.userAgent.MAC ? e.metaKey : e.ctrlKey;
            this.pointerId = e.pointerId || 0;
            this.pointerType = goog.events.BrowserEvent.getPointerType_(e);
            this.state = e.state;
            this.event_ = e;
            if (e.defaultPrevented) this.preventDefault()
          };
          goog.events.BrowserEvent.prototype.isButton = function (button) {
            if (!goog.events.BrowserFeature.HAS_W3C_BUTTON) if (this.type == "click") return button == goog.events.BrowserEvent.MouseButton.LEFT; else return !!(this.event_.button & goog.events.BrowserEvent.IE_BUTTON_MAP[button]); else return this.event_.button == button
          };
          goog.events.BrowserEvent.prototype.isMouseActionButton = function () {
            return this.isButton(goog.events.BrowserEvent.MouseButton.LEFT) && !(goog.userAgent.WEBKIT && goog.userAgent.MAC && this.ctrlKey)
          };
          goog.events.BrowserEvent.prototype.stopPropagation = function () {
            goog.events.BrowserEvent.superClass_.stopPropagation.call(this);
            if (this.event_.stopPropagation) this.event_.stopPropagation(); else this.event_.cancelBubble = true
          };
          goog.events.BrowserEvent.prototype.preventDefault = function () {
            goog.events.BrowserEvent.superClass_.preventDefault.call(this);
            var be = this.event_;
            if (!be.preventDefault) {
              be.returnValue = false;
              if (goog.events.BrowserFeature.SET_KEY_CODE_TO_PREVENT_DEFAULT) try {
                var VK_F1 = 112;
                var VK_F12 = 123;
                if (be.ctrlKey || be.keyCode >= VK_F1 && be.keyCode <= VK_F12) be.keyCode = -1
              } catch (ex) {
              }
            } else be.preventDefault()
          };
          goog.events.BrowserEvent.prototype.getBrowserEvent = function () {
            return this.event_
          };
          goog.events.BrowserEvent.getPointerType_ = function (e) {
            if (goog.isString(e.pointerType)) return e.pointerType;
            return goog.events.BrowserEvent.IE_POINTER_TYPE_MAP[e.pointerType] || ""
          };
          goog.provide("goog.events.Listenable");
          goog.provide("goog.events.ListenableKey");
          goog.require("goog.events.EventId");
          goog.forwardDeclare("goog.events.EventLike");
          goog.forwardDeclare("goog.events.EventTarget");
          goog.events.Listenable = function () {
          };
          goog.events.Listenable.IMPLEMENTED_BY_PROP = "closure_listenable_" + (Math.random() * 1E6 | 0);
          goog.events.Listenable.addImplementation = function (cls) {
            cls.prototype[goog.events.Listenable.IMPLEMENTED_BY_PROP] = true
          };
          goog.events.Listenable.isImplementedBy = function (obj) {
            return !!(obj && obj[goog.events.Listenable.IMPLEMENTED_BY_PROP])
          };
          goog.events.Listenable.prototype.listen;
          goog.events.Listenable.prototype.listenOnce;
          goog.events.Listenable.prototype.unlisten;
          goog.events.Listenable.prototype.unlistenByKey;
          goog.events.Listenable.prototype.dispatchEvent;
          goog.events.Listenable.prototype.removeAllListeners;
          goog.events.Listenable.prototype.getParentEventTarget;
          goog.events.Listenable.prototype.fireListeners;
          goog.events.Listenable.prototype.getListeners;
          goog.events.Listenable.prototype.getListener;
          goog.events.Listenable.prototype.hasListener;
          goog.events.ListenableKey = function () {
          };
          goog.events.ListenableKey.counter_ = 0;
          goog.events.ListenableKey.reserveKey = function () {
            return ++goog.events.ListenableKey.counter_
          };
          goog.events.ListenableKey.prototype.src;
          goog.events.ListenableKey.prototype.type;
          goog.events.ListenableKey.prototype.listener;
          goog.events.ListenableKey.prototype.capture;
          goog.events.ListenableKey.prototype.handler;
          goog.events.ListenableKey.prototype.key;
          goog.provide("goog.events.Listener");
          goog.require("goog.events.ListenableKey");
          goog.events.Listener = function (listener, proxy, src, type, capture, opt_handler) {
            if (goog.events.Listener.ENABLE_MONITORING) this.creationStack = (new Error).stack;
            this.listener = listener;
            this.proxy = proxy;
            this.src = src;
            this.type = type;
            this.capture = !!capture;
            this.handler = opt_handler;
            this.key = goog.events.ListenableKey.reserveKey();
            this.callOnce = false;
            this.removed = false
          };
          goog.define("goog.events.Listener.ENABLE_MONITORING", false);
          goog.events.Listener.prototype.creationStack;
          goog.events.Listener.prototype.markAsRemoved = function () {
            this.removed = true;
            this.listener = null;
            this.proxy = null;
            this.src = null;
            this.handler = null
          };
          goog.provide("goog.events.ListenerMap");
          goog.require("goog.array");
          goog.require("goog.events.Listener");
          goog.require("goog.object");
          goog.events.ListenerMap = function (src) {
            this.src = src;
            this.listeners = {};
            this.typeCount_ = 0
          };
          goog.events.ListenerMap.prototype.getTypeCount = function () {
            return this.typeCount_
          };
          goog.events.ListenerMap.prototype.getListenerCount = function () {
            var count = 0;
            for (var type in this.listeners) count += this.listeners[type].length;
            return count
          };
          goog.events.ListenerMap.prototype.add = function (type, listener, callOnce, opt_useCapture, opt_listenerScope) {
            var typeStr = type.toString();
            var listenerArray = this.listeners[typeStr];
            if (!listenerArray) {
              listenerArray = this.listeners[typeStr] = [];
              this.typeCount_++
            }
            var listenerObj;
            var index = goog.events.ListenerMap.findListenerIndex_(listenerArray, listener, opt_useCapture, opt_listenerScope);
            if (index > -1) {
              listenerObj = listenerArray[index];
              if (!callOnce) listenerObj.callOnce = false
            } else {
              listenerObj = new goog.events.Listener(listener,
                null, this.src, typeStr, !!opt_useCapture, opt_listenerScope);
              listenerObj.callOnce = callOnce;
              listenerArray.push(listenerObj)
            }
            return listenerObj
          };
          goog.events.ListenerMap.prototype.remove = function (type, listener, opt_useCapture, opt_listenerScope) {
            var typeStr = type.toString();
            if (!(typeStr in this.listeners)) return false;
            var listenerArray = this.listeners[typeStr];
            var index = goog.events.ListenerMap.findListenerIndex_(listenerArray, listener, opt_useCapture, opt_listenerScope);
            if (index > -1) {
              var listenerObj = listenerArray[index];
              listenerObj.markAsRemoved();
              goog.array.removeAt(listenerArray, index);
              if (listenerArray.length == 0) {
                delete this.listeners[typeStr];
                this.typeCount_--
              }
              return true
            }
            return false
          };
          goog.events.ListenerMap.prototype.removeByKey = function (listener) {
            var type = listener.type;
            if (!(type in this.listeners)) return false;
            var removed = goog.array.remove(this.listeners[type], listener);
            if (removed) {
              listener.markAsRemoved();
              if (this.listeners[type].length == 0) {
                delete this.listeners[type];
                this.typeCount_--
              }
            }
            return removed
          };
          goog.events.ListenerMap.prototype.removeAll = function (opt_type) {
            var typeStr = opt_type && opt_type.toString();
            var count = 0;
            for (var type in this.listeners) if (!typeStr || type == typeStr) {
              var listenerArray = this.listeners[type];
              for (var i = 0; i < listenerArray.length; i++) {
                ++count;
                listenerArray[i].markAsRemoved()
              }
              delete this.listeners[type];
              this.typeCount_--
            }
            return count
          };
          goog.events.ListenerMap.prototype.getListeners = function (type, capture) {
            var listenerArray = this.listeners[type.toString()];
            var rv = [];
            if (listenerArray) for (var i = 0; i < listenerArray.length; ++i) {
              var listenerObj = listenerArray[i];
              if (listenerObj.capture == capture) rv.push(listenerObj)
            }
            return rv
          };
          goog.events.ListenerMap.prototype.getListener = function (type, listener, capture, opt_listenerScope) {
            var listenerArray = this.listeners[type.toString()];
            var i = -1;
            if (listenerArray) i = goog.events.ListenerMap.findListenerIndex_(listenerArray, listener, capture, opt_listenerScope);
            return i > -1 ? listenerArray[i] : null
          };
          goog.events.ListenerMap.prototype.hasListener = function (opt_type, opt_capture) {
            var hasType = goog.isDef(opt_type);
            var typeStr = hasType ? opt_type.toString() : "";
            var hasCapture = goog.isDef(opt_capture);
            return goog.object.some(this.listeners, function (listenerArray, type) {
              for (var i = 0; i < listenerArray.length; ++i) if ((!hasType || listenerArray[i].type == typeStr) && (!hasCapture || listenerArray[i].capture == opt_capture)) return true;
              return false
            })
          };
          goog.events.ListenerMap.findListenerIndex_ = function (listenerArray, listener, opt_useCapture, opt_listenerScope) {
            for (var i = 0; i < listenerArray.length; ++i) {
              var listenerObj = listenerArray[i];
              if (!listenerObj.removed && listenerObj.listener == listener && listenerObj.capture == !!opt_useCapture && listenerObj.handler == opt_listenerScope) return i
            }
            return -1
          };
          goog.provide("goog.events");
          goog.provide("goog.events.CaptureSimulationMode");
          goog.provide("goog.events.Key");
          goog.provide("goog.events.ListenableType");
          goog.require("goog.asserts");
          goog.require("goog.debug.entryPointRegistry");
          goog.require("goog.events.BrowserEvent");
          goog.require("goog.events.BrowserFeature");
          goog.require("goog.events.Listenable");
          goog.require("goog.events.ListenerMap");
          goog.forwardDeclare("goog.debug.ErrorHandler");
          goog.forwardDeclare("goog.events.EventWrapper");
          goog.events.Key;
          goog.events.ListenableType;
          goog.events.LISTENER_MAP_PROP_ = "closure_lm_" + (Math.random() * 1E6 | 0);
          goog.events.onString_ = "on";
          goog.events.onStringMap_ = {};
          goog.events.CaptureSimulationMode = {OFF_AND_FAIL: 0, OFF_AND_SILENT: 1, ON: 2};
          goog.define("goog.events.CAPTURE_SIMULATION_MODE", 2);
          goog.events.listenerCountEstimate_ = 0;
          goog.events.listen = function (src, type, listener, opt_options, opt_handler) {
            if (opt_options && opt_options.once) return goog.events.listenOnce(src, type, listener, opt_options, opt_handler);
            if (goog.isArray(type)) {
              for (var i = 0; i < type.length; i++) goog.events.listen(src, type[i], listener, opt_options, opt_handler);
              return null
            }
            listener = goog.events.wrapListener(listener);
            if (goog.events.Listenable.isImplementedBy(src)) {
              var capture = goog.isObject(opt_options) ? !!opt_options.capture : !!opt_options;
              return src.listen(type, listener,
                capture, opt_handler)
            } else return goog.events.listen_(src, type, listener, false, opt_options, opt_handler)
          };
          goog.events.listen_ = function (src, type, listener, callOnce, opt_options, opt_handler) {
            if (!type) throw new Error("Invalid event type");
            var capture = goog.isObject(opt_options) ? !!opt_options.capture : !!opt_options;
            if (capture && !goog.events.BrowserFeature.HAS_W3C_EVENT_SUPPORT) if (goog.events.CAPTURE_SIMULATION_MODE == goog.events.CaptureSimulationMode.OFF_AND_FAIL) {
              goog.asserts.fail("Can not register capture listener in IE8-.");
              return null
            } else if (goog.events.CAPTURE_SIMULATION_MODE == goog.events.CaptureSimulationMode.OFF_AND_SILENT) return null;
            var listenerMap = goog.events.getListenerMap_(src);
            if (!listenerMap) src[goog.events.LISTENER_MAP_PROP_] = listenerMap = new goog.events.ListenerMap(src);
            var listenerObj = listenerMap.add(type, listener, callOnce, capture, opt_handler);
            if (listenerObj.proxy) return listenerObj;
            var proxy = goog.events.getProxy();
            listenerObj.proxy = proxy;
            proxy.src = src;
            proxy.listener = listenerObj;
            if (src.addEventListener) {
              if (!goog.events.BrowserFeature.PASSIVE_EVENTS) opt_options = capture;
              if (opt_options === undefined) opt_options = false;
              src.addEventListener(type.toString(),
                proxy, opt_options)
            } else if (src.attachEvent) src.attachEvent(goog.events.getOnString_(type.toString()), proxy); else throw new Error("addEventListener and attachEvent are unavailable.");
            goog.events.listenerCountEstimate_++;
            return listenerObj
          };
          goog.events.getProxy = function () {
            var proxyCallbackFunction = goog.events.handleBrowserEvent_;
            var f = goog.events.BrowserFeature.HAS_W3C_EVENT_SUPPORT ? function (eventObject) {
              return proxyCallbackFunction.call(f.src, f.listener, eventObject)
            } : function (eventObject) {
              var v = proxyCallbackFunction.call(f.src, f.listener, eventObject);
              if (!v) return v
            };
            return f
          };
          goog.events.listenOnce = function (src, type, listener, opt_options, opt_handler) {
            if (goog.isArray(type)) {
              for (var i = 0; i < type.length; i++) goog.events.listenOnce(src, type[i], listener, opt_options, opt_handler);
              return null
            }
            listener = goog.events.wrapListener(listener);
            if (goog.events.Listenable.isImplementedBy(src)) {
              var capture = goog.isObject(opt_options) ? !!opt_options.capture : !!opt_options;
              return src.listenOnce(type, listener, capture, opt_handler)
            } else return goog.events.listen_(src, type, listener, true, opt_options, opt_handler)
          };
          goog.events.listenWithWrapper = function (src, wrapper, listener, opt_capt, opt_handler) {
            wrapper.listen(src, listener, opt_capt, opt_handler)
          };
          goog.events.unlisten = function (src, type, listener, opt_options, opt_handler) {
            if (goog.isArray(type)) {
              for (var i = 0; i < type.length; i++) goog.events.unlisten(src, type[i], listener, opt_options, opt_handler);
              return null
            }
            var capture = goog.isObject(opt_options) ? !!opt_options.capture : !!opt_options;
            listener = goog.events.wrapListener(listener);
            if (goog.events.Listenable.isImplementedBy(src)) return src.unlisten(type, listener, capture, opt_handler);
            if (!src) return false;
            var listenerMap = goog.events.getListenerMap_(src);
            if (listenerMap) {
              var listenerObj =
                listenerMap.getListener(type, listener, capture, opt_handler);
              if (listenerObj) return goog.events.unlistenByKey(listenerObj)
            }
            return false
          };
          goog.events.unlistenByKey = function (key) {
            if (goog.isNumber(key)) return false;
            var listener = key;
            if (!listener || listener.removed) return false;
            var src = listener.src;
            if (goog.events.Listenable.isImplementedBy(src)) return src.unlistenByKey(listener);
            var type = listener.type;
            var proxy = listener.proxy;
            if (src.removeEventListener) src.removeEventListener(type, proxy, listener.capture); else if (src.detachEvent) src.detachEvent(goog.events.getOnString_(type), proxy);
            goog.events.listenerCountEstimate_--;
            var listenerMap = goog.events.getListenerMap_(src);
            if (listenerMap) {
              listenerMap.removeByKey(listener);
              if (listenerMap.getTypeCount() == 0) {
                listenerMap.src = null;
                src[goog.events.LISTENER_MAP_PROP_] = null
              }
            } else listener.markAsRemoved();
            return true
          };
          goog.events.unlistenWithWrapper = function (src, wrapper, listener, opt_capt, opt_handler) {
            wrapper.unlisten(src, listener, opt_capt, opt_handler)
          };
          goog.events.removeAll = function (obj, opt_type) {
            if (!obj) return 0;
            if (goog.events.Listenable.isImplementedBy(obj)) return obj.removeAllListeners(opt_type);
            var listenerMap = goog.events.getListenerMap_(obj);
            if (!listenerMap) return 0;
            var count = 0;
            var typeStr = opt_type && opt_type.toString();
            for (var type in listenerMap.listeners) if (!typeStr || type == typeStr) {
              var listeners = listenerMap.listeners[type].concat();
              for (var i = 0; i < listeners.length; ++i) if (goog.events.unlistenByKey(listeners[i])) ++count
            }
            return count
          };
          goog.events.getListeners = function (obj, type, capture) {
            if (goog.events.Listenable.isImplementedBy(obj)) return obj.getListeners(type, capture); else {
              if (!obj) return [];
              var listenerMap = goog.events.getListenerMap_(obj);
              return listenerMap ? listenerMap.getListeners(type, capture) : []
            }
          };
          goog.events.getListener = function (src, type, listener, opt_capt, opt_handler) {
            type = type;
            listener = goog.events.wrapListener(listener);
            var capture = !!opt_capt;
            if (goog.events.Listenable.isImplementedBy(src)) return src.getListener(type, listener, capture, opt_handler);
            if (!src) return null;
            var listenerMap = goog.events.getListenerMap_(src);
            if (listenerMap) return listenerMap.getListener(type, listener, capture, opt_handler);
            return null
          };
          goog.events.hasListener = function (obj, opt_type, opt_capture) {
            if (goog.events.Listenable.isImplementedBy(obj)) return obj.hasListener(opt_type, opt_capture);
            var listenerMap = goog.events.getListenerMap_(obj);
            return !!listenerMap && listenerMap.hasListener(opt_type, opt_capture)
          };
          goog.events.expose = function (e) {
            var str = [];
            for (var key in e) if (e[key] && e[key].id) str.push(key + " = " + e[key] + " (" + e[key].id + ")"); else str.push(key + " = " + e[key]);
            return str.join("\n")
          };
          goog.events.getOnString_ = function (type) {
            if (type in goog.events.onStringMap_) return goog.events.onStringMap_[type];
            return goog.events.onStringMap_[type] = goog.events.onString_ + type
          };
          goog.events.fireListeners = function (obj, type, capture, eventObject) {
            if (goog.events.Listenable.isImplementedBy(obj)) return obj.fireListeners(type, capture, eventObject);
            return goog.events.fireListeners_(obj, type, capture, eventObject)
          };
          goog.events.fireListeners_ = function (obj, type, capture, eventObject) {
            var retval = true;
            var listenerMap = goog.events.getListenerMap_(obj);
            if (listenerMap) {
              var listenerArray = listenerMap.listeners[type.toString()];
              if (listenerArray) {
                listenerArray = listenerArray.concat();
                for (var i = 0; i < listenerArray.length; i++) {
                  var listener = listenerArray[i];
                  if (listener && listener.capture == capture && !listener.removed) {
                    var result = goog.events.fireListener(listener, eventObject);
                    retval = retval && result !== false
                  }
                }
              }
            }
            return retval
          };
          goog.events.fireListener = function (listener, eventObject) {
            var listenerFn = listener.listener;
            var listenerHandler = listener.handler || listener.src;
            if (listener.callOnce) goog.events.unlistenByKey(listener);
            return listenerFn.call(listenerHandler, eventObject)
          };
          goog.events.getTotalListenerCount = function () {
            return goog.events.listenerCountEstimate_
          };
          goog.events.dispatchEvent = function (src, e) {
            goog.asserts.assert(goog.events.Listenable.isImplementedBy(src), "Can not use goog.events.dispatchEvent with " + "non-goog.events.Listenable instance.");
            return src.dispatchEvent(e)
          };
          goog.events.protectBrowserEventEntryPoint = function (errorHandler) {
            goog.events.handleBrowserEvent_ = errorHandler.protectEntryPoint(goog.events.handleBrowserEvent_)
          };
          goog.events.handleBrowserEvent_ = function (listener, opt_evt) {
            if (listener.removed) return true;
            if (!goog.events.BrowserFeature.HAS_W3C_EVENT_SUPPORT) {
              var ieEvent = opt_evt || goog.getObjectByName("window.event");
              var evt = new goog.events.BrowserEvent(ieEvent, this);
              var retval = true;
              if (goog.events.CAPTURE_SIMULATION_MODE == goog.events.CaptureSimulationMode.ON) {
                if (!goog.events.isMarkedIeEvent_(ieEvent)) {
                  goog.events.markIeEvent_(ieEvent);
                  var ancestors = [];
                  for (var parent = evt.currentTarget; parent; parent = parent.parentNode) ancestors.push(parent);
                  var type = listener.type;
                  for (var i = ancestors.length - 1; !evt.propagationStopped_ && i >= 0; i--) {
                    evt.currentTarget = ancestors[i];
                    var result = goog.events.fireListeners_(ancestors[i], type, true, evt);
                    retval = retval && result
                  }
                  for (var i = 0; !evt.propagationStopped_ && i < ancestors.length; i++) {
                    evt.currentTarget = ancestors[i];
                    var result = goog.events.fireListeners_(ancestors[i], type, false, evt);
                    retval = retval && result
                  }
                }
              } else retval = goog.events.fireListener(listener, evt);
              return retval
            }
            return goog.events.fireListener(listener, new goog.events.BrowserEvent(opt_evt,
              this))
          };
          goog.events.markIeEvent_ = function (e) {
            var useReturnValue = false;
            if (e.keyCode == 0) try {
              e.keyCode = -1;
              return
            } catch (ex) {
              useReturnValue = true
            }
            if (useReturnValue || e.returnValue == undefined) e.returnValue = true
          };
          goog.events.isMarkedIeEvent_ = function (e) {
            return e.keyCode < 0 || e.returnValue != undefined
          };
          goog.events.uniqueIdCounter_ = 0;
          goog.events.getUniqueId = function (identifier) {
            return identifier + "_" + goog.events.uniqueIdCounter_++
          };
          goog.events.getListenerMap_ = function (src) {
            var listenerMap = src[goog.events.LISTENER_MAP_PROP_];
            return listenerMap instanceof goog.events.ListenerMap ? listenerMap : null
          };
          goog.events.LISTENER_WRAPPER_PROP_ = "__closure_events_fn_" + (Math.random() * 1E9 >>> 0);
          goog.events.wrapListener = function (listener) {
            goog.asserts.assert(listener, "Listener can not be null.");
            if (goog.isFunction(listener)) return listener;
            goog.asserts.assert(listener.handleEvent, "An object listener must have handleEvent method.");
            if (!listener[goog.events.LISTENER_WRAPPER_PROP_]) listener[goog.events.LISTENER_WRAPPER_PROP_] = function (e) {
              return listener.handleEvent(e)
            };
            return listener[goog.events.LISTENER_WRAPPER_PROP_]
          };
          goog.debug.entryPointRegistry.register(function (transformer) {
            goog.events.handleBrowserEvent_ = transformer(goog.events.handleBrowserEvent_)
          });
          goog.provide("goog.events.EventTarget");
          goog.require("goog.Disposable");
          goog.require("goog.asserts");
          goog.require("goog.events");
          goog.require("goog.events.Event");
          goog.require("goog.events.Listenable");
          goog.require("goog.events.ListenerMap");
          goog.require("goog.object");
          goog.events.EventTarget = function () {
            goog.Disposable.call(this);
            this.eventTargetListeners_ = new goog.events.ListenerMap(this);
            this.actualEventTarget_ = this;
            this.parentEventTarget_ = null
          };
          goog.inherits(goog.events.EventTarget, goog.Disposable);
          goog.events.Listenable.addImplementation(goog.events.EventTarget);
          goog.events.EventTarget.MAX_ANCESTORS_ = 1E3;
          goog.events.EventTarget.prototype.getParentEventTarget = function () {
            return this.parentEventTarget_
          };
          goog.events.EventTarget.prototype.setParentEventTarget = function (parent) {
            this.parentEventTarget_ = parent
          };
          goog.events.EventTarget.prototype.addEventListener = function (type, handler, opt_capture, opt_handlerScope) {
            goog.events.listen(this, type, handler, opt_capture, opt_handlerScope)
          };
          goog.events.EventTarget.prototype.removeEventListener = function (type, handler, opt_capture, opt_handlerScope) {
            goog.events.unlisten(this, type, handler, opt_capture, opt_handlerScope)
          };
          goog.events.EventTarget.prototype.dispatchEvent = function (e) {
            this.assertInitialized_();
            var ancestorsTree, ancestor = this.getParentEventTarget();
            if (ancestor) {
              ancestorsTree = [];
              var ancestorCount = 1;
              for (; ancestor; ancestor = ancestor.getParentEventTarget()) {
                ancestorsTree.push(ancestor);
                goog.asserts.assert(++ancestorCount < goog.events.EventTarget.MAX_ANCESTORS_, "infinite loop")
              }
            }
            return goog.events.EventTarget.dispatchEventInternal_(this.actualEventTarget_, e, ancestorsTree)
          };
          goog.events.EventTarget.prototype.disposeInternal = function () {
            goog.events.EventTarget.superClass_.disposeInternal.call(this);
            this.removeAllListeners();
            this.parentEventTarget_ = null
          };
          goog.events.EventTarget.prototype.listen = function (type, listener, opt_useCapture, opt_listenerScope) {
            this.assertInitialized_();
            return this.eventTargetListeners_.add(String(type), listener, false, opt_useCapture, opt_listenerScope)
          };
          goog.events.EventTarget.prototype.listenOnce = function (type, listener, opt_useCapture, opt_listenerScope) {
            return this.eventTargetListeners_.add(String(type), listener, true, opt_useCapture, opt_listenerScope)
          };
          goog.events.EventTarget.prototype.unlisten = function (type, listener, opt_useCapture, opt_listenerScope) {
            return this.eventTargetListeners_.remove(String(type), listener, opt_useCapture, opt_listenerScope)
          };
          goog.events.EventTarget.prototype.unlistenByKey = function (key) {
            return this.eventTargetListeners_.removeByKey(key)
          };
          goog.events.EventTarget.prototype.removeAllListeners = function (opt_type) {
            if (!this.eventTargetListeners_) return 0;
            return this.eventTargetListeners_.removeAll(opt_type)
          };
          goog.events.EventTarget.prototype.fireListeners = function (type, capture, eventObject) {
            var listenerArray = this.eventTargetListeners_.listeners[String(type)];
            if (!listenerArray) return true;
            listenerArray = listenerArray.concat();
            var rv = true;
            for (var i = 0; i < listenerArray.length; ++i) {
              var listener = listenerArray[i];
              if (listener && !listener.removed && listener.capture == capture) {
                var listenerFn = listener.listener;
                var listenerHandler = listener.handler || listener.src;
                if (listener.callOnce) this.unlistenByKey(listener);
                rv = listenerFn.call(listenerHandler,
                  eventObject) !== false && rv
              }
            }
            return rv && eventObject.returnValue_ != false
          };
          goog.events.EventTarget.prototype.getListeners = function (type, capture) {
            return this.eventTargetListeners_.getListeners(String(type), capture)
          };
          goog.events.EventTarget.prototype.getListener = function (type, listener, capture, opt_listenerScope) {
            return this.eventTargetListeners_.getListener(String(type), listener, capture, opt_listenerScope)
          };
          goog.events.EventTarget.prototype.hasListener = function (opt_type, opt_capture) {
            var id = goog.isDef(opt_type) ? String(opt_type) : undefined;
            return this.eventTargetListeners_.hasListener(id, opt_capture)
          };
          goog.events.EventTarget.prototype.setTargetForTesting = function (target) {
            this.actualEventTarget_ = target
          };
          goog.events.EventTarget.prototype.assertInitialized_ = function () {
            goog.asserts.assert(this.eventTargetListeners_, "Event target is not initialized. Did you call the superclass " + "(goog.events.EventTarget) constructor?")
          };
          goog.events.EventTarget.dispatchEventInternal_ = function (target, e, opt_ancestorsTree) {
            var type = e.type || e;
            if (goog.isString(e)) e = new goog.events.Event(e, target); else if (!(e instanceof goog.events.Event)) {
              var oldEvent = e;
              e = new goog.events.Event(type, target);
              goog.object.extend(e, oldEvent)
            } else e.target = e.target || target;
            var rv = true, currentTarget;
            if (opt_ancestorsTree) for (var i = opt_ancestorsTree.length - 1; !e.propagationStopped_ && i >= 0; i--) {
              currentTarget = e.currentTarget = opt_ancestorsTree[i];
              rv = currentTarget.fireListeners(type,
                true, e) && rv
            }
            if (!e.propagationStopped_) {
              currentTarget = e.currentTarget = target;
              rv = currentTarget.fireListeners(type, true, e) && rv;
              if (!e.propagationStopped_) rv = currentTarget.fireListeners(type, false, e) && rv
            }
            if (opt_ancestorsTree) for (i = 0; !e.propagationStopped_ && i < opt_ancestorsTree.length; i++) {
              currentTarget = e.currentTarget = opt_ancestorsTree[i];
              rv = currentTarget.fireListeners(type, false, e) && rv
            }
            return rv
          };
          goog.provide("goog.Timer");
          goog.require("goog.Promise");
          goog.require("goog.events.EventTarget");
          goog.Timer = function (opt_interval, opt_timerObject) {
            goog.events.EventTarget.call(this);
            this.interval_ = opt_interval || 1;
            this.timerObject_ = opt_timerObject || goog.Timer.defaultTimerObject;
            this.boundTick_ = goog.bind(this.tick_, this);
            this.last_ = goog.now()
          };
          goog.inherits(goog.Timer, goog.events.EventTarget);
          goog.Timer.MAX_TIMEOUT_ = 2147483647;
          goog.Timer.INVALID_TIMEOUT_ID_ = -1;
          goog.Timer.prototype.enabled = false;
          goog.Timer.defaultTimerObject = goog.global;
          goog.Timer.intervalScale = .8;
          goog.Timer.prototype.timer_ = null;
          goog.Timer.prototype.getInterval = function () {
            return this.interval_
          };
          goog.Timer.prototype.setInterval = function (interval) {
            this.interval_ = interval;
            if (this.timer_ && this.enabled) {
              this.stop();
              this.start()
            } else if (this.timer_) this.stop()
          };
          goog.Timer.prototype.tick_ = function () {
            if (this.enabled) {
              var elapsed = goog.now() - this.last_;
              if (elapsed > 0 && elapsed < this.interval_ * goog.Timer.intervalScale) {
                this.timer_ = this.timerObject_.setTimeout(this.boundTick_, this.interval_ - elapsed);
                return
              }
              if (this.timer_) {
                this.timerObject_.clearTimeout(this.timer_);
                this.timer_ = null
              }
              this.dispatchTick();
              if (this.enabled) {
                this.timer_ = this.timerObject_.setTimeout(this.boundTick_, this.interval_);
                this.last_ = goog.now()
              }
            }
          };
          goog.Timer.prototype.dispatchTick = function () {
            this.dispatchEvent(goog.Timer.TICK)
          };
          goog.Timer.prototype.start = function () {
            this.enabled = true;
            if (!this.timer_) {
              this.timer_ = this.timerObject_.setTimeout(this.boundTick_, this.interval_);
              this.last_ = goog.now()
            }
          };
          goog.Timer.prototype.stop = function () {
            this.enabled = false;
            if (this.timer_) {
              this.timerObject_.clearTimeout(this.timer_);
              this.timer_ = null
            }
          };
          goog.Timer.prototype.disposeInternal = function () {
            goog.Timer.superClass_.disposeInternal.call(this);
            this.stop();
            delete this.timerObject_
          };
          goog.Timer.TICK = "tick";
          goog.Timer.callOnce = function (listener, opt_delay, opt_handler) {
            if (goog.isFunction(listener)) {
              if (opt_handler) listener = goog.bind(listener, opt_handler)
            } else if (listener && typeof listener.handleEvent == "function") listener = goog.bind(listener.handleEvent, listener); else throw new Error("Invalid listener argument");
            if (Number(opt_delay) > goog.Timer.MAX_TIMEOUT_) return goog.Timer.INVALID_TIMEOUT_ID_; else return goog.Timer.defaultTimerObject.setTimeout(listener, opt_delay || 0)
          };
          goog.Timer.clear = function (timerId) {
            goog.Timer.defaultTimerObject.clearTimeout(timerId)
          };
          goog.Timer.promise = function (delay, opt_result) {
            var timerKey = null;
            return (new goog.Promise(function (resolve, reject) {
              timerKey = goog.Timer.callOnce(function () {
                resolve(opt_result)
              }, delay);
              if (timerKey == goog.Timer.INVALID_TIMEOUT_ID_) reject(new Error("Failed to schedule timer."))
            })).thenCatch(function (error) {
              goog.Timer.clear(timerKey);
              throw error;
            })
          };
          goog.provide("goog.debug.LogRecord");
          goog.debug.LogRecord = function (level, msg, loggerName, opt_time, opt_sequenceNumber) {
            this.reset(level, msg, loggerName, opt_time, opt_sequenceNumber)
          };
          goog.debug.LogRecord.prototype.time_;
          goog.debug.LogRecord.prototype.level_;
          goog.debug.LogRecord.prototype.msg_;
          goog.debug.LogRecord.prototype.loggerName_;
          goog.debug.LogRecord.prototype.sequenceNumber_ = 0;
          goog.debug.LogRecord.prototype.exception_ = null;
          goog.define("goog.debug.LogRecord.ENABLE_SEQUENCE_NUMBERS", true);
          goog.debug.LogRecord.nextSequenceNumber_ = 0;
          goog.debug.LogRecord.prototype.reset = function (level, msg, loggerName, opt_time, opt_sequenceNumber) {
            if (goog.debug.LogRecord.ENABLE_SEQUENCE_NUMBERS) this.sequenceNumber_ = typeof opt_sequenceNumber == "number" ? opt_sequenceNumber : goog.debug.LogRecord.nextSequenceNumber_++;
            this.time_ = opt_time || goog.now();
            this.level_ = level;
            this.msg_ = msg;
            this.loggerName_ = loggerName;
            delete this.exception_
          };
          goog.debug.LogRecord.prototype.getLoggerName = function () {
            return this.loggerName_
          };
          goog.debug.LogRecord.prototype.getException = function () {
            return this.exception_
          };
          goog.debug.LogRecord.prototype.setException = function (exception) {
            this.exception_ = exception
          };
          goog.debug.LogRecord.prototype.setLoggerName = function (loggerName) {
            this.loggerName_ = loggerName
          };
          goog.debug.LogRecord.prototype.getLevel = function () {
            return this.level_
          };
          goog.debug.LogRecord.prototype.setLevel = function (level) {
            this.level_ = level
          };
          goog.debug.LogRecord.prototype.getMessage = function () {
            return this.msg_
          };
          goog.debug.LogRecord.prototype.setMessage = function (msg) {
            this.msg_ = msg
          };
          goog.debug.LogRecord.prototype.getMillis = function () {
            return this.time_
          };
          goog.debug.LogRecord.prototype.setMillis = function (time) {
            this.time_ = time
          };
          goog.debug.LogRecord.prototype.getSequenceNumber = function () {
            return this.sequenceNumber_
          };
          goog.provide("goog.debug.LogBuffer");
          goog.require("goog.asserts");
          goog.require("goog.debug.LogRecord");
          goog.debug.LogBuffer = function () {
            goog.asserts.assert(goog.debug.LogBuffer.isBufferingEnabled(), "Cannot use goog.debug.LogBuffer without defining " + "goog.debug.LogBuffer.CAPACITY.");
            this.clear()
          };
          goog.debug.LogBuffer.getInstance = function () {
            if (!goog.debug.LogBuffer.instance_) goog.debug.LogBuffer.instance_ = new goog.debug.LogBuffer;
            return goog.debug.LogBuffer.instance_
          };
          goog.define("goog.debug.LogBuffer.CAPACITY", 0);
          goog.debug.LogBuffer.prototype.buffer_;
          goog.debug.LogBuffer.prototype.curIndex_;
          goog.debug.LogBuffer.prototype.isFull_;
          goog.debug.LogBuffer.prototype.addRecord = function (level, msg, loggerName) {
            var curIndex = (this.curIndex_ + 1) % goog.debug.LogBuffer.CAPACITY;
            this.curIndex_ = curIndex;
            if (this.isFull_) {
              var ret = this.buffer_[curIndex];
              ret.reset(level, msg, loggerName);
              return ret
            }
            this.isFull_ = curIndex == goog.debug.LogBuffer.CAPACITY - 1;
            return this.buffer_[curIndex] = new goog.debug.LogRecord(level, msg, loggerName)
          };
          goog.debug.LogBuffer.isBufferingEnabled = function () {
            return goog.debug.LogBuffer.CAPACITY > 0
          };
          goog.debug.LogBuffer.prototype.clear = function () {
            this.buffer_ = new Array(goog.debug.LogBuffer.CAPACITY);
            this.curIndex_ = -1;
            this.isFull_ = false
          };
          goog.debug.LogBuffer.prototype.forEachRecord = function (func) {
            var buffer = this.buffer_;
            if (!buffer[0]) return;
            var curIndex = this.curIndex_;
            var i = this.isFull_ ? curIndex : -1;
            do {
              i = (i + 1) % goog.debug.LogBuffer.CAPACITY;
              func(buffer[i])
            } while (i != curIndex)
          };
          goog.provide("goog.debug.LogManager");
          goog.provide("goog.debug.Loggable");
          goog.provide("goog.debug.Logger");
          goog.provide("goog.debug.Logger.Level");
          goog.require("goog.array");
          goog.require("goog.asserts");
          goog.require("goog.debug");
          goog.require("goog.debug.LogBuffer");
          goog.require("goog.debug.LogRecord");
          goog.debug.Loggable;
          goog.debug.Logger = function (name) {
            this.name_ = name;
            this.parent_ = null;
            this.level_ = null;
            this.children_ = null;
            this.handlers_ = null
          };
          goog.debug.Logger.ROOT_LOGGER_NAME = "";
          goog.define("goog.debug.Logger.ENABLE_HIERARCHY", true);
          if (!goog.debug.Logger.ENABLE_HIERARCHY) {
            goog.debug.Logger.rootHandlers_ = [];
            goog.debug.Logger.rootLevel_
          }
          goog.debug.Logger.Level = function (name, value) {
            this.name = name;
            this.value = value
          };
          goog.debug.Logger.Level.prototype.toString = function () {
            return this.name
          };
          goog.debug.Logger.Level.OFF = new goog.debug.Logger.Level("OFF", Infinity);
          goog.debug.Logger.Level.SHOUT = new goog.debug.Logger.Level("SHOUT", 1200);
          goog.debug.Logger.Level.SEVERE = new goog.debug.Logger.Level("SEVERE", 1E3);
          goog.debug.Logger.Level.WARNING = new goog.debug.Logger.Level("WARNING", 900);
          goog.debug.Logger.Level.INFO = new goog.debug.Logger.Level("INFO", 800);
          goog.debug.Logger.Level.CONFIG = new goog.debug.Logger.Level("CONFIG", 700);
          goog.debug.Logger.Level.FINE = new goog.debug.Logger.Level("FINE", 500);
          goog.debug.Logger.Level.FINER = new goog.debug.Logger.Level("FINER", 400);
          goog.debug.Logger.Level.FINEST = new goog.debug.Logger.Level("FINEST", 300);
          goog.debug.Logger.Level.ALL = new goog.debug.Logger.Level("ALL", 0);
          goog.debug.Logger.Level.PREDEFINED_LEVELS = [goog.debug.Logger.Level.OFF, goog.debug.Logger.Level.SHOUT, goog.debug.Logger.Level.SEVERE, goog.debug.Logger.Level.WARNING, goog.debug.Logger.Level.INFO, goog.debug.Logger.Level.CONFIG, goog.debug.Logger.Level.FINE, goog.debug.Logger.Level.FINER, goog.debug.Logger.Level.FINEST, goog.debug.Logger.Level.ALL];
          goog.debug.Logger.Level.predefinedLevelsCache_ = null;
          goog.debug.Logger.Level.createPredefinedLevelsCache_ = function () {
            goog.debug.Logger.Level.predefinedLevelsCache_ = {};
            for (var i = 0, level; level = goog.debug.Logger.Level.PREDEFINED_LEVELS[i]; i++) {
              goog.debug.Logger.Level.predefinedLevelsCache_[level.value] = level;
              goog.debug.Logger.Level.predefinedLevelsCache_[level.name] = level
            }
          };
          goog.debug.Logger.Level.getPredefinedLevel = function (name) {
            if (!goog.debug.Logger.Level.predefinedLevelsCache_) goog.debug.Logger.Level.createPredefinedLevelsCache_();
            return goog.debug.Logger.Level.predefinedLevelsCache_[name] || null
          };
          goog.debug.Logger.Level.getPredefinedLevelByValue = function (value) {
            if (!goog.debug.Logger.Level.predefinedLevelsCache_) goog.debug.Logger.Level.createPredefinedLevelsCache_();
            if (value in goog.debug.Logger.Level.predefinedLevelsCache_) return goog.debug.Logger.Level.predefinedLevelsCache_[value];
            for (var i = 0; i < goog.debug.Logger.Level.PREDEFINED_LEVELS.length; ++i) {
              var level = goog.debug.Logger.Level.PREDEFINED_LEVELS[i];
              if (level.value <= value) return level
            }
            return null
          };
          goog.debug.Logger.getLogger = function (name) {
            return goog.debug.LogManager.getLogger(name)
          };
          goog.debug.Logger.logToProfilers = function (msg) {
            var console = goog.global["console"];
            if (console && console["timeStamp"]) console["timeStamp"](msg);
            var msWriteProfilerMark = goog.global["msWriteProfilerMark"];
            if (msWriteProfilerMark) msWriteProfilerMark(msg)
          };
          goog.debug.Logger.prototype.getName = function () {
            return this.name_
          };
          goog.debug.Logger.prototype.addHandler = function (handler) {
            if (goog.debug.LOGGING_ENABLED) if (goog.debug.Logger.ENABLE_HIERARCHY) {
              if (!this.handlers_) this.handlers_ = [];
              this.handlers_.push(handler)
            } else {
              goog.asserts.assert(!this.name_, "Cannot call addHandler on a non-root logger when " + "goog.debug.Logger.ENABLE_HIERARCHY is false.");
              goog.debug.Logger.rootHandlers_.push(handler)
            }
          };
          goog.debug.Logger.prototype.removeHandler = function (handler) {
            if (goog.debug.LOGGING_ENABLED) {
              var handlers = goog.debug.Logger.ENABLE_HIERARCHY ? this.handlers_ : goog.debug.Logger.rootHandlers_;
              return !!handlers && goog.array.remove(handlers, handler)
            } else return false
          };
          goog.debug.Logger.prototype.getParent = function () {
            return this.parent_
          };
          goog.debug.Logger.prototype.getChildren = function () {
            if (!this.children_) this.children_ = {};
            return this.children_
          };
          goog.debug.Logger.prototype.setLevel = function (level) {
            if (goog.debug.LOGGING_ENABLED) if (goog.debug.Logger.ENABLE_HIERARCHY) this.level_ = level; else {
              goog.asserts.assert(!this.name_, "Cannot call setLevel() on a non-root logger when " + "goog.debug.Logger.ENABLE_HIERARCHY is false.");
              goog.debug.Logger.rootLevel_ = level
            }
          };
          goog.debug.Logger.prototype.getLevel = function () {
            return goog.debug.LOGGING_ENABLED ? this.level_ : goog.debug.Logger.Level.OFF
          };
          goog.debug.Logger.prototype.getEffectiveLevel = function () {
            if (!goog.debug.LOGGING_ENABLED) return goog.debug.Logger.Level.OFF;
            if (!goog.debug.Logger.ENABLE_HIERARCHY) return goog.debug.Logger.rootLevel_;
            if (this.level_) return this.level_;
            if (this.parent_) return this.parent_.getEffectiveLevel();
            goog.asserts.fail("Root logger has no level set.");
            return null
          };
          goog.debug.Logger.prototype.isLoggable = function (level) {
            return goog.debug.LOGGING_ENABLED && level.value >= this.getEffectiveLevel().value
          };
          goog.debug.Logger.prototype.log = function (level, msg, opt_exception) {
            if (goog.debug.LOGGING_ENABLED && this.isLoggable(level)) {
              if (goog.isFunction(msg)) msg = msg();
              this.doLogRecord_(this.getLogRecord(level, msg, opt_exception))
            }
          };
          goog.debug.Logger.prototype.getLogRecord = function (level, msg, opt_exception) {
            if (goog.debug.LogBuffer.isBufferingEnabled()) var logRecord = goog.debug.LogBuffer.getInstance().addRecord(level, msg, this.name_); else logRecord = new goog.debug.LogRecord(level, String(msg), this.name_);
            if (opt_exception) logRecord.setException(opt_exception);
            return logRecord
          };
          goog.debug.Logger.prototype.shout = function (msg, opt_exception) {
            if (goog.debug.LOGGING_ENABLED) this.log(goog.debug.Logger.Level.SHOUT, msg, opt_exception)
          };
          goog.debug.Logger.prototype.severe = function (msg, opt_exception) {
            if (goog.debug.LOGGING_ENABLED) this.log(goog.debug.Logger.Level.SEVERE, msg, opt_exception)
          };
          goog.debug.Logger.prototype.warning = function (msg, opt_exception) {
            if (goog.debug.LOGGING_ENABLED) this.log(goog.debug.Logger.Level.WARNING, msg, opt_exception)
          };
          goog.debug.Logger.prototype.info = function (msg, opt_exception) {
            if (goog.debug.LOGGING_ENABLED) this.log(goog.debug.Logger.Level.INFO, msg, opt_exception)
          };
          goog.debug.Logger.prototype.config = function (msg, opt_exception) {
            if (goog.debug.LOGGING_ENABLED) this.log(goog.debug.Logger.Level.CONFIG, msg, opt_exception)
          };
          goog.debug.Logger.prototype.fine = function (msg, opt_exception) {
            if (goog.debug.LOGGING_ENABLED) this.log(goog.debug.Logger.Level.FINE, msg, opt_exception)
          };
          goog.debug.Logger.prototype.finer = function (msg, opt_exception) {
            if (goog.debug.LOGGING_ENABLED) this.log(goog.debug.Logger.Level.FINER, msg, opt_exception)
          };
          goog.debug.Logger.prototype.finest = function (msg, opt_exception) {
            if (goog.debug.LOGGING_ENABLED) this.log(goog.debug.Logger.Level.FINEST, msg, opt_exception)
          };
          goog.debug.Logger.prototype.logRecord = function (logRecord) {
            if (goog.debug.LOGGING_ENABLED && this.isLoggable(logRecord.getLevel())) this.doLogRecord_(logRecord)
          };
          goog.debug.Logger.prototype.doLogRecord_ = function (logRecord) {
            goog.debug.Logger.logToProfilers("log:" + logRecord.getMessage());
            if (goog.debug.Logger.ENABLE_HIERARCHY) {
              var target = this;
              while (target) {
                target.callPublish_(logRecord);
                target = target.getParent()
              }
            } else for (var i = 0, handler; handler = goog.debug.Logger.rootHandlers_[i++];) handler(logRecord)
          };
          goog.debug.Logger.prototype.callPublish_ = function (logRecord) {
            if (this.handlers_) for (var i = 0, handler; handler = this.handlers_[i]; i++) handler(logRecord)
          };
          goog.debug.Logger.prototype.setParent_ = function (parent) {
            this.parent_ = parent
          };
          goog.debug.Logger.prototype.addChild_ = function (name, logger) {
            this.getChildren()[name] = logger
          };
          goog.debug.LogManager = {};
          goog.debug.LogManager.loggers_ = {};
          goog.debug.LogManager.rootLogger_ = null;
          goog.debug.LogManager.initialize = function () {
            if (!goog.debug.LogManager.rootLogger_) {
              goog.debug.LogManager.rootLogger_ = new goog.debug.Logger(goog.debug.Logger.ROOT_LOGGER_NAME);
              goog.debug.LogManager.loggers_[goog.debug.Logger.ROOT_LOGGER_NAME] = goog.debug.LogManager.rootLogger_;
              goog.debug.LogManager.rootLogger_.setLevel(goog.debug.Logger.Level.CONFIG)
            }
          };
          goog.debug.LogManager.getLoggers = function () {
            return goog.debug.LogManager.loggers_
          };
          goog.debug.LogManager.getRoot = function () {
            goog.debug.LogManager.initialize();
            return goog.debug.LogManager.rootLogger_
          };
          goog.debug.LogManager.getLogger = function (name) {
            goog.debug.LogManager.initialize();
            var ret = goog.debug.LogManager.loggers_[name];
            return ret || goog.debug.LogManager.createLogger_(name)
          };
          goog.debug.LogManager.createFunctionForCatchErrors = function (opt_logger) {
            return function (info) {
              var logger = opt_logger || goog.debug.LogManager.getRoot();
              logger.severe("Error: " + info.message + " (" + info.fileName + " @ Line: " + info.line + ")")
            }
          };
          goog.debug.LogManager.createLogger_ = function (name) {
            var logger = new goog.debug.Logger(name);
            if (goog.debug.Logger.ENABLE_HIERARCHY) {
              var lastDotIndex = name.lastIndexOf(".");
              var parentName = name.substr(0, lastDotIndex);
              var leafName = name.substr(lastDotIndex + 1);
              var parentLogger = goog.debug.LogManager.getLogger(parentName);
              parentLogger.addChild_(leafName, logger);
              logger.setParent_(parentLogger)
            }
            goog.debug.LogManager.loggers_[name] = logger;
            return logger
          };
          goog.provide("goog.iter");
          goog.provide("goog.iter.Iterable");
          goog.provide("goog.iter.Iterator");
          goog.provide("goog.iter.StopIteration");
          goog.require("goog.array");
          goog.require("goog.asserts");
          goog.require("goog.functions");
          goog.require("goog.math");
          goog.iter.Iterable;
          goog.iter.StopIteration = "StopIteration" in goog.global ? goog.global["StopIteration"] : {
            message: "StopIteration",
            stack: ""
          };
          goog.iter.Iterator = function () {
          };
          goog.iter.Iterator.prototype.next = function () {
            throw goog.iter.StopIteration;
          };
          goog.iter.Iterator.prototype.__iterator__ = function (opt_keys) {
            return this
          };
          goog.iter.toIterator = function (iterable) {
            if (iterable instanceof goog.iter.Iterator) return iterable;
            if (typeof iterable.__iterator__ == "function") return iterable.__iterator__(false);
            if (goog.isArrayLike(iterable)) {
              var i = 0;
              var newIter = new goog.iter.Iterator;
              newIter.next = function () {
                while (true) {
                  if (i >= iterable.length) throw goog.iter.StopIteration;
                  if (!(i in iterable)) {
                    i++;
                    continue
                  }
                  return iterable[i++]
                }
              };
              return newIter
            }
            throw new Error("Not implemented");
          };
          goog.iter.forEach = function (iterable, f, opt_obj) {
            if (goog.isArrayLike(iterable)) try {
              goog.array.forEach(iterable, f, opt_obj)
            } catch (ex) {
              if (ex !== goog.iter.StopIteration) throw ex;
            } else {
              iterable = goog.iter.toIterator(iterable);
              try {
                while (true) f.call(opt_obj, iterable.next(), undefined, iterable)
              } catch (ex$2) {
                if (ex$2 !== goog.iter.StopIteration) throw ex$2;
              }
            }
          };
          goog.iter.filter = function (iterable, f, opt_obj) {
            var iterator = goog.iter.toIterator(iterable);
            var newIter = new goog.iter.Iterator;
            newIter.next = function () {
              while (true) {
                var val = iterator.next();
                if (f.call(opt_obj, val, undefined, iterator)) return val
              }
            };
            return newIter
          };
          goog.iter.filterFalse = function (iterable, f, opt_obj) {
            return goog.iter.filter(iterable, goog.functions.not(f), opt_obj)
          };
          goog.iter.range = function (startOrStop, opt_stop, opt_step) {
            var start = 0;
            var stop = startOrStop;
            var step = opt_step || 1;
            if (arguments.length > 1) {
              start = startOrStop;
              stop = opt_stop
            }
            if (step == 0) throw new Error("Range step argument must not be zero");
            var newIter = new goog.iter.Iterator;
            newIter.next = function () {
              if (step > 0 && start >= stop || step < 0 && start <= stop) throw goog.iter.StopIteration;
              var rv = start;
              start += step;
              return rv
            };
            return newIter
          };
          goog.iter.join = function (iterable, deliminator) {
            return goog.iter.toArray(iterable).join(deliminator)
          };
          goog.iter.map = function (iterable, f, opt_obj) {
            var iterator = goog.iter.toIterator(iterable);
            var newIter = new goog.iter.Iterator;
            newIter.next = function () {
              var val = iterator.next();
              return f.call(opt_obj, val, undefined, iterator)
            };
            return newIter
          };
          goog.iter.reduce = function (iterable, f, val, opt_obj) {
            var rval = val;
            goog.iter.forEach(iterable, function (val) {
              rval = f.call(opt_obj, rval, val)
            });
            return rval
          };
          goog.iter.some = function (iterable, f, opt_obj) {
            iterable = goog.iter.toIterator(iterable);
            try {
              while (true) if (f.call(opt_obj, iterable.next(), undefined, iterable)) return true
            } catch (ex) {
              if (ex !== goog.iter.StopIteration) throw ex;
            }
            return false
          };
          goog.iter.every = function (iterable, f, opt_obj) {
            iterable = goog.iter.toIterator(iterable);
            try {
              while (true) if (!f.call(opt_obj, iterable.next(), undefined, iterable)) return false
            } catch (ex) {
              if (ex !== goog.iter.StopIteration) throw ex;
            }
            return true
          };
          goog.iter.chain = function (var_args) {
            return goog.iter.chainFromIterable(arguments)
          };
          goog.iter.chainFromIterable = function (iterable) {
            var iterator = goog.iter.toIterator(iterable);
            var iter = new goog.iter.Iterator;
            var current = null;
            iter.next = function () {
              while (true) {
                if (current == null) {
                  var it = iterator.next();
                  current = goog.iter.toIterator(it)
                }
                try {
                  return current.next()
                } catch (ex) {
                  if (ex !== goog.iter.StopIteration) throw ex;
                  current = null
                }
              }
            };
            return iter
          };
          goog.iter.dropWhile = function (iterable, f, opt_obj) {
            var iterator = goog.iter.toIterator(iterable);
            var newIter = new goog.iter.Iterator;
            var dropping = true;
            newIter.next = function () {
              while (true) {
                var val = iterator.next();
                if (dropping && f.call(opt_obj, val, undefined, iterator)) continue; else dropping = false;
                return val
              }
            };
            return newIter
          };
          goog.iter.takeWhile = function (iterable, f, opt_obj) {
            var iterator = goog.iter.toIterator(iterable);
            var iter = new goog.iter.Iterator;
            iter.next = function () {
              var val = iterator.next();
              if (f.call(opt_obj, val, undefined, iterator)) return val;
              throw goog.iter.StopIteration;
            };
            return iter
          };
          goog.iter.toArray = function (iterable) {
            if (goog.isArrayLike(iterable)) return goog.array.toArray(iterable);
            iterable = goog.iter.toIterator(iterable);
            var array = [];
            goog.iter.forEach(iterable, function (val) {
              array.push(val)
            });
            return array
          };
          goog.iter.equals = function (iterable1, iterable2, opt_equalsFn) {
            var fillValue = {};
            var pairs = goog.iter.zipLongest(fillValue, iterable1, iterable2);
            var equalsFn = opt_equalsFn || goog.array.defaultCompareEquality;
            return goog.iter.every(pairs, function (pair) {
              return equalsFn(pair[0], pair[1])
            })
          };
          goog.iter.nextOrValue = function (iterable, defaultValue) {
            try {
              return goog.iter.toIterator(iterable).next()
            } catch (e) {
              if (e != goog.iter.StopIteration) throw e;
              return defaultValue
            }
          };
          goog.iter.product = function (var_args) {
            var someArrayEmpty = goog.array.some(arguments, function (arr) {
              return !arr.length
            });
            if (someArrayEmpty || !arguments.length) return new goog.iter.Iterator;
            var iter = new goog.iter.Iterator;
            var arrays = arguments;
            var indicies = goog.array.repeat(0, arrays.length);
            iter.next = function () {
              if (indicies) {
                var retVal = goog.array.map(indicies, function (valueIndex, arrayIndex) {
                  return arrays[arrayIndex][valueIndex]
                });
                for (var i = indicies.length - 1; i >= 0; i--) {
                  goog.asserts.assert(indicies);
                  if (indicies[i] <
                    arrays[i].length - 1) {
                    indicies[i]++;
                    break
                  }
                  if (i == 0) {
                    indicies = null;
                    break
                  }
                  indicies[i] = 0
                }
                return retVal
              }
              throw goog.iter.StopIteration;
            };
            return iter
          };
          goog.iter.cycle = function (iterable) {
            var baseIterator = goog.iter.toIterator(iterable);
            var cache = [];
            var cacheIndex = 0;
            var iter = new goog.iter.Iterator;
            var useCache = false;
            iter.next = function () {
              var returnElement = null;
              if (!useCache) try {
                returnElement = baseIterator.next();
                cache.push(returnElement);
                return returnElement
              } catch (e) {
                if (e != goog.iter.StopIteration || goog.array.isEmpty(cache)) throw e;
                useCache = true
              }
              returnElement = cache[cacheIndex];
              cacheIndex = (cacheIndex + 1) % cache.length;
              return returnElement
            };
            return iter
          };
          goog.iter.count = function (opt_start, opt_step) {
            var counter = opt_start || 0;
            var step = goog.isDef(opt_step) ? opt_step : 1;
            var iter = new goog.iter.Iterator;
            iter.next = function () {
              var returnValue = counter;
              counter += step;
              return returnValue
            };
            return iter
          };
          goog.iter.repeat = function (value) {
            var iter = new goog.iter.Iterator;
            iter.next = goog.functions.constant(value);
            return iter
          };
          goog.iter.accumulate = function (iterable) {
            var iterator = goog.iter.toIterator(iterable);
            var total = 0;
            var iter = new goog.iter.Iterator;
            iter.next = function () {
              total += iterator.next();
              return total
            };
            return iter
          };
          goog.iter.zip = function (var_args) {
            var args = arguments;
            var iter = new goog.iter.Iterator;
            if (args.length > 0) {
              var iterators = goog.array.map(args, goog.iter.toIterator);
              iter.next = function () {
                var arr = goog.array.map(iterators, function (it) {
                  return it.next()
                });
                return arr
              }
            }
            return iter
          };
          goog.iter.zipLongest = function (fillValue, var_args) {
            var args = goog.array.slice(arguments, 1);
            var iter = new goog.iter.Iterator;
            if (args.length > 0) {
              var iterators = goog.array.map(args, goog.iter.toIterator);
              iter.next = function () {
                var iteratorsHaveValues = false;
                var arr = goog.array.map(iterators, function (it) {
                  var returnValue;
                  try {
                    returnValue = it.next();
                    iteratorsHaveValues = true
                  } catch (ex) {
                    if (ex !== goog.iter.StopIteration) throw ex;
                    returnValue = fillValue
                  }
                  return returnValue
                });
                if (!iteratorsHaveValues) throw goog.iter.StopIteration;
                return arr
              }
            }
            return iter
          };
          goog.iter.compress = function (iterable, selectors) {
            var selectorIterator = goog.iter.toIterator(selectors);
            return goog.iter.filter(iterable, function () {
              return !!selectorIterator.next()
            })
          };
          goog.iter.GroupByIterator_ = function (iterable, opt_keyFunc) {
            this.iterator = goog.iter.toIterator(iterable);
            this.keyFunc = opt_keyFunc || goog.functions.identity;
            this.targetKey;
            this.currentKey;
            this.currentValue
          };
          goog.inherits(goog.iter.GroupByIterator_, goog.iter.Iterator);
          goog.iter.GroupByIterator_.prototype.next = function () {
            while (this.currentKey == this.targetKey) {
              this.currentValue = this.iterator.next();
              this.currentKey = this.keyFunc(this.currentValue)
            }
            this.targetKey = this.currentKey;
            return [this.currentKey, this.groupItems_(this.targetKey)]
          };
          goog.iter.GroupByIterator_.prototype.groupItems_ = function (targetKey) {
            var arr = [];
            while (this.currentKey == targetKey) {
              arr.push(this.currentValue);
              try {
                this.currentValue = this.iterator.next()
              } catch (ex) {
                if (ex !== goog.iter.StopIteration) throw ex;
                break
              }
              this.currentKey = this.keyFunc(this.currentValue)
            }
            return arr
          };
          goog.iter.groupBy = function (iterable, opt_keyFunc) {
            return new goog.iter.GroupByIterator_(iterable, opt_keyFunc)
          };
          goog.iter.starMap = function (iterable, f, opt_obj) {
            var iterator = goog.iter.toIterator(iterable);
            var iter = new goog.iter.Iterator;
            iter.next = function () {
              var args = goog.iter.toArray(iterator.next());
              return f.apply(opt_obj, goog.array.concat(args, undefined, iterator))
            };
            return iter
          };
          goog.iter.tee = function (iterable, opt_num) {
            var iterator = goog.iter.toIterator(iterable);
            var num = goog.isNumber(opt_num) ? opt_num : 2;
            var buffers = goog.array.map(goog.array.range(num), function () {
              return []
            });
            var addNextIteratorValueToBuffers = function () {
              var val = iterator.next();
              goog.array.forEach(buffers, function (buffer) {
                buffer.push(val)
              })
            };
            var createIterator = function (buffer) {
              var iter = new goog.iter.Iterator;
              iter.next = function () {
                if (goog.array.isEmpty(buffer)) addNextIteratorValueToBuffers();
                goog.asserts.assert(!goog.array.isEmpty(buffer));
                return buffer.shift()
              };
              return iter
            };
            return goog.array.map(buffers, createIterator)
          };
          goog.iter.enumerate = function (iterable, opt_start) {
            return goog.iter.zip(goog.iter.count(opt_start), iterable)
          };
          goog.iter.limit = function (iterable, limitSize) {
            goog.asserts.assert(goog.math.isInt(limitSize) && limitSize >= 0);
            var iterator = goog.iter.toIterator(iterable);
            var iter = new goog.iter.Iterator;
            var remaining = limitSize;
            iter.next = function () {
              if (remaining-- > 0) return iterator.next();
              throw goog.iter.StopIteration;
            };
            return iter
          };
          goog.iter.consume = function (iterable, count) {
            goog.asserts.assert(goog.math.isInt(count) && count >= 0);
            var iterator = goog.iter.toIterator(iterable);
            while (count-- > 0) goog.iter.nextOrValue(iterator, null);
            return iterator
          };
          goog.iter.slice = function (iterable, start, opt_end) {
            goog.asserts.assert(goog.math.isInt(start) && start >= 0);
            var iterator = goog.iter.consume(iterable, start);
            if (goog.isNumber(opt_end)) {
              goog.asserts.assert(goog.math.isInt(opt_end) && opt_end >= start);
              iterator = goog.iter.limit(iterator, opt_end - start)
            }
            return iterator
          };
          goog.iter.hasDuplicates_ = function (arr) {
            var deduped = [];
            goog.array.removeDuplicates(arr, deduped);
            return arr.length != deduped.length
          };
          goog.iter.permutations = function (iterable, opt_length) {
            var elements = goog.iter.toArray(iterable);
            var length = goog.isNumber(opt_length) ? opt_length : elements.length;
            var sets = goog.array.repeat(elements, length);
            var product = goog.iter.product.apply(undefined, sets);
            return goog.iter.filter(product, function (arr) {
              return !goog.iter.hasDuplicates_(arr)
            })
          };
          goog.iter.combinations = function (iterable, length) {
            var elements = goog.iter.toArray(iterable);
            var indexes = goog.iter.range(elements.length);
            var indexIterator = goog.iter.permutations(indexes, length);
            var sortedIndexIterator = goog.iter.filter(indexIterator, function (arr) {
              return goog.array.isSorted(arr)
            });
            var iter = new goog.iter.Iterator;

            function getIndexFromElements(index) {
              return elements[index]
            }

            iter.next = function () {
              return goog.array.map(sortedIndexIterator.next(), getIndexFromElements)
            };
            return iter
          };
          goog.iter.combinationsWithReplacement = function (iterable, length) {
            var elements = goog.iter.toArray(iterable);
            var indexes = goog.array.range(elements.length);
            var sets = goog.array.repeat(indexes, length);
            var indexIterator = goog.iter.product.apply(undefined, sets);
            var sortedIndexIterator = goog.iter.filter(indexIterator, function (arr) {
              return goog.array.isSorted(arr)
            });
            var iter = new goog.iter.Iterator;

            function getIndexFromElements(index) {
              return elements[index]
            }

            iter.next = function () {
              return goog.array.map(sortedIndexIterator.next(),
                getIndexFromElements)
            };
            return iter
          };
          goog.provide("goog.structs.Map");
          goog.require("goog.iter.Iterator");
          goog.require("goog.iter.StopIteration");
          goog.require("goog.object");
          goog.structs.Map = function (opt_map, var_args) {
            this.map_ = {};
            this.keys_ = [];
            this.count_ = 0;
            this.version_ = 0;
            var argLength = arguments.length;
            if (argLength > 1) {
              if (argLength % 2) throw new Error("Uneven number of arguments");
              for (var i = 0; i < argLength; i += 2) this.set(arguments[i], arguments[i + 1])
            } else if (opt_map) this.addAll(opt_map)
          };
          goog.structs.Map.prototype.getCount = function () {
            return this.count_
          };
          goog.structs.Map.prototype.getValues = function () {
            this.cleanupKeysArray_();
            var rv = [];
            for (var i = 0; i < this.keys_.length; i++) {
              var key = this.keys_[i];
              rv.push(this.map_[key])
            }
            return rv
          };
          goog.structs.Map.prototype.getKeys = function () {
            this.cleanupKeysArray_();
            return this.keys_.concat()
          };
          goog.structs.Map.prototype.containsKey = function (key) {
            return goog.structs.Map.hasKey_(this.map_, key)
          };
          goog.structs.Map.prototype.containsValue = function (val) {
            for (var i = 0; i < this.keys_.length; i++) {
              var key = this.keys_[i];
              if (goog.structs.Map.hasKey_(this.map_, key) && this.map_[key] == val) return true
            }
            return false
          };
          goog.structs.Map.prototype.equals = function (otherMap, opt_equalityFn) {
            if (this === otherMap) return true;
            if (this.count_ != otherMap.getCount()) return false;
            var equalityFn = opt_equalityFn || goog.structs.Map.defaultEquals;
            this.cleanupKeysArray_();
            for (var key, i = 0; key = this.keys_[i]; i++) if (!equalityFn(this.get(key), otherMap.get(key))) return false;
            return true
          };
          goog.structs.Map.defaultEquals = function (a, b) {
            return a === b
          };
          goog.structs.Map.prototype.isEmpty = function () {
            return this.count_ == 0
          };
          goog.structs.Map.prototype.clear = function () {
            this.map_ = {};
            this.keys_.length = 0;
            this.count_ = 0;
            this.version_ = 0
          };
          goog.structs.Map.prototype.remove = function (key) {
            if (goog.structs.Map.hasKey_(this.map_, key)) {
              delete this.map_[key];
              this.count_--;
              this.version_++;
              if (this.keys_.length > 2 * this.count_) this.cleanupKeysArray_();
              return true
            }
            return false
          };
          goog.structs.Map.prototype.cleanupKeysArray_ = function () {
            if (this.count_ != this.keys_.length) {
              var srcIndex = 0;
              var destIndex = 0;
              while (srcIndex < this.keys_.length) {
                var key = this.keys_[srcIndex];
                if (goog.structs.Map.hasKey_(this.map_, key)) this.keys_[destIndex++] = key;
                srcIndex++
              }
              this.keys_.length = destIndex
            }
            if (this.count_ != this.keys_.length) {
              var seen = {};
              var srcIndex = 0;
              var destIndex = 0;
              while (srcIndex < this.keys_.length) {
                var key = this.keys_[srcIndex];
                if (!goog.structs.Map.hasKey_(seen, key)) {
                  this.keys_[destIndex++] = key;
                  seen[key] = 1
                }
                srcIndex++
              }
              this.keys_.length = destIndex
            }
          };
          goog.structs.Map.prototype.get = function (key, opt_val) {
            if (goog.structs.Map.hasKey_(this.map_, key)) return this.map_[key];
            return opt_val
          };
          goog.structs.Map.prototype.set = function (key, value) {
            if (!goog.structs.Map.hasKey_(this.map_, key)) {
              this.count_++;
              this.keys_.push(key);
              this.version_++
            }
            this.map_[key] = value
          };
          goog.structs.Map.prototype.addAll = function (map) {
            var keys, values;
            if (map instanceof goog.structs.Map) {
              keys = map.getKeys();
              values = map.getValues()
            } else {
              keys = goog.object.getKeys(map);
              values = goog.object.getValues(map)
            }
            for (var i = 0; i < keys.length; i++) this.set(keys[i], values[i])
          };
          goog.structs.Map.prototype.forEach = function (f, opt_obj) {
            var keys = this.getKeys();
            for (var i = 0; i < keys.length; i++) {
              var key = keys[i];
              var value = this.get(key);
              f.call(opt_obj, value, key, this)
            }
          };
          goog.structs.Map.prototype.clone = function () {
            return new goog.structs.Map(this)
          };
          goog.structs.Map.prototype.transpose = function () {
            var transposed = new goog.structs.Map;
            for (var i = 0; i < this.keys_.length; i++) {
              var key = this.keys_[i];
              var value = this.map_[key];
              transposed.set(value, key)
            }
            return transposed
          };
          goog.structs.Map.prototype.toObject = function () {
            this.cleanupKeysArray_();
            var obj = {};
            for (var i = 0; i < this.keys_.length; i++) {
              var key = this.keys_[i];
              obj[key] = this.map_[key]
            }
            return obj
          };
          goog.structs.Map.prototype.getKeyIterator = function () {
            return this.__iterator__(true)
          };
          goog.structs.Map.prototype.getValueIterator = function () {
            return this.__iterator__(false)
          };
          goog.structs.Map.prototype.__iterator__ = function (opt_keys) {
            this.cleanupKeysArray_();
            var i = 0;
            var version = this.version_;
            var selfObj = this;
            var newIter = new goog.iter.Iterator;
            newIter.next = function () {
              if (version != selfObj.version_) throw new Error("The map has changed since the iterator was created");
              if (i >= selfObj.keys_.length) throw goog.iter.StopIteration;
              var key = selfObj.keys_[i++];
              return opt_keys ? key : selfObj.map_[key]
            };
            return newIter
          };
          goog.structs.Map.hasKey_ = function (obj, key) {
            return Object.prototype.hasOwnProperty.call(obj, key)
          };
          goog.provide("goog.log");
          goog.provide("goog.log.Level");
          goog.provide("goog.log.LogRecord");
          goog.provide("goog.log.Logger");
          goog.require("goog.debug");
          goog.require("goog.debug.LogManager");
          goog.require("goog.debug.LogRecord");
          goog.require("goog.debug.Logger");
          goog.define("goog.log.ENABLED", goog.debug.LOGGING_ENABLED);
          goog.log.ROOT_LOGGER_NAME = goog.debug.Logger.ROOT_LOGGER_NAME;
          goog.log.Logger = goog.debug.Logger;
          goog.log.Level = goog.debug.Logger.Level;
          goog.log.LogRecord = goog.debug.LogRecord;
          goog.log.getLogger = function (name, opt_level) {
            if (goog.log.ENABLED) {
              var logger = goog.debug.LogManager.getLogger(name);
              if (opt_level && logger) logger.setLevel(opt_level);
              return logger
            } else return null
          };
          goog.log.addHandler = function (logger, handler) {
            if (goog.log.ENABLED && logger) logger.addHandler(handler)
          };
          goog.log.removeHandler = function (logger, handler) {
            if (goog.log.ENABLED && logger) return logger.removeHandler(handler); else return false
          };
          goog.log.log = function (logger, level, msg, opt_exception) {
            if (goog.log.ENABLED && logger) logger.log(level, msg, opt_exception)
          };
          goog.log.error = function (logger, msg, opt_exception) {
            if (goog.log.ENABLED && logger) logger.severe(msg, opt_exception)
          };
          goog.log.warning = function (logger, msg, opt_exception) {
            if (goog.log.ENABLED && logger) logger.warning(msg, opt_exception)
          };
          goog.log.info = function (logger, msg, opt_exception) {
            if (goog.log.ENABLED && logger) logger.info(msg, opt_exception)
          };
          goog.log.fine = function (logger, msg, opt_exception) {
            if (goog.log.ENABLED && logger) logger.fine(msg, opt_exception)
          };
          goog.provide("goog.crypt");
          goog.require("goog.array");
          goog.require("goog.asserts");
          goog.crypt.stringToByteArray = function (str) {
            var output = [], p = 0;
            for (var i = 0; i < str.length; i++) {
              var c = str.charCodeAt(i);
              if (c > 255) {
                output[p++] = c & 255;
                c >>= 8
              }
              output[p++] = c
            }
            return output
          };
          goog.crypt.byteArrayToString = function (bytes) {
            var CHUNK_SIZE = 8192;
            if (bytes.length <= CHUNK_SIZE) return String.fromCharCode.apply(null, bytes);
            var str = "";
            for (var i = 0; i < bytes.length; i += CHUNK_SIZE) {
              var chunk = goog.array.slice(bytes, i, i + CHUNK_SIZE);
              str += String.fromCharCode.apply(null, chunk)
            }
            return str
          };
          goog.crypt.byteArrayToHex = function (array) {
            return goog.array.map(array, function (numByte) {
              var hexByte = numByte.toString(16);
              return hexByte.length > 1 ? hexByte : "0" + hexByte
            }).join("")
          };
          goog.crypt.hexToByteArray = function (hexString) {
            goog.asserts.assert(hexString.length % 2 == 0, "Key string length must be multiple of 2");
            var arr = [];
            for (var i = 0; i < hexString.length; i += 2) arr.push(parseInt(hexString.substring(i, i + 2), 16));
            return arr
          };
          goog.crypt.stringToUtf8ByteArray = function (str) {
            var out = [], p = 0;
            for (var i = 0; i < str.length; i++) {
              var c = str.charCodeAt(i);
              if (c < 128) out[p++] = c; else if (c < 2048) {
                out[p++] = c >> 6 | 192;
                out[p++] = c & 63 | 128
              } else if ((c & 64512) == 55296 && i + 1 < str.length && (str.charCodeAt(i + 1) & 64512) == 56320) {
                c = 65536 + ((c & 1023) << 10) + (str.charCodeAt(++i) & 1023);
                out[p++] = c >> 18 | 240;
                out[p++] = c >> 12 & 63 | 128;
                out[p++] = c >> 6 & 63 | 128;
                out[p++] = c & 63 | 128
              } else {
                out[p++] = c >> 12 | 224;
                out[p++] = c >> 6 & 63 | 128;
                out[p++] = c & 63 | 128
              }
            }
            return out
          };
          goog.crypt.utf8ByteArrayToString = function (bytes) {
            var out = [], pos = 0, c = 0;
            while (pos < bytes.length) {
              var c1 = bytes[pos++];
              if (c1 < 128) out[c++] = String.fromCharCode(c1); else if (c1 > 191 && c1 < 224) {
                var c2 = bytes[pos++];
                out[c++] = String.fromCharCode((c1 & 31) << 6 | c2 & 63)
              } else if (c1 > 239 && c1 < 365) {
                var c2 = bytes[pos++];
                var c3 = bytes[pos++];
                var c4 = bytes[pos++];
                var u = ((c1 & 7) << 18 | (c2 & 63) << 12 | (c3 & 63) << 6 | c4 & 63) - 65536;
                out[c++] = String.fromCharCode(55296 + (u >> 10));
                out[c++] = String.fromCharCode(56320 + (u & 1023))
              } else {
                var c2 = bytes[pos++];
                var c3 =
                  bytes[pos++];
                out[c++] = String.fromCharCode((c1 & 15) << 12 | (c2 & 63) << 6 | c3 & 63)
              }
            }
            return out.join("")
          };
          goog.crypt.xorByteArray = function (bytes1, bytes2) {
            goog.asserts.assert(bytes1.length == bytes2.length, "XOR array lengths must match");
            var result = [];
            for (var i = 0; i < bytes1.length; i++) result.push(bytes1[i] ^ bytes2[i]);
            return result
          };
          goog.provide("goog.userAgent.product");
          goog.require("goog.labs.userAgent.browser");
          goog.require("goog.labs.userAgent.platform");
          goog.require("goog.userAgent");
          goog.define("goog.userAgent.product.ASSUME_FIREFOX", false);
          goog.define("goog.userAgent.product.ASSUME_IPHONE", false);
          goog.define("goog.userAgent.product.ASSUME_IPAD", false);
          goog.define("goog.userAgent.product.ASSUME_ANDROID", false);
          goog.define("goog.userAgent.product.ASSUME_CHROME", false);
          goog.define("goog.userAgent.product.ASSUME_SAFARI", false);
          goog.userAgent.product.PRODUCT_KNOWN_ = goog.userAgent.ASSUME_IE || goog.userAgent.ASSUME_EDGE || goog.userAgent.ASSUME_OPERA || goog.userAgent.product.ASSUME_FIREFOX || goog.userAgent.product.ASSUME_IPHONE || goog.userAgent.product.ASSUME_IPAD || goog.userAgent.product.ASSUME_ANDROID || goog.userAgent.product.ASSUME_CHROME || goog.userAgent.product.ASSUME_SAFARI;
          goog.userAgent.product.OPERA = goog.userAgent.OPERA;
          goog.userAgent.product.IE = goog.userAgent.IE;
          goog.userAgent.product.EDGE = goog.userAgent.EDGE;
          goog.userAgent.product.FIREFOX = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_FIREFOX : goog.labs.userAgent.browser.isFirefox();
          goog.userAgent.product.isIphoneOrIpod_ = function () {
            return goog.labs.userAgent.platform.isIphone() || goog.labs.userAgent.platform.isIpod()
          };
          goog.userAgent.product.IPHONE = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_IPHONE : goog.userAgent.product.isIphoneOrIpod_();
          goog.userAgent.product.IPAD = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_IPAD : goog.labs.userAgent.platform.isIpad();
          goog.userAgent.product.ANDROID = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_ANDROID : goog.labs.userAgent.browser.isAndroidBrowser();
          goog.userAgent.product.CHROME = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_CHROME : goog.labs.userAgent.browser.isChrome();
          goog.userAgent.product.isSafariDesktop_ = function () {
            return goog.labs.userAgent.browser.isSafari() && !goog.labs.userAgent.platform.isIos()
          };
          goog.userAgent.product.SAFARI = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_SAFARI : goog.userAgent.product.isSafariDesktop_();
          goog.provide("goog.crypt.base64");
          goog.require("goog.asserts");
          goog.require("goog.crypt");
          goog.require("goog.string");
          goog.require("goog.userAgent");
          goog.require("goog.userAgent.product");
          goog.crypt.base64.byteToCharMap_ = null;
          goog.crypt.base64.charToByteMap_ = null;
          goog.crypt.base64.byteToCharMapWebSafe_ = null;
          goog.crypt.base64.ENCODED_VALS_BASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + "abcdefghijklmnopqrstuvwxyz" + "0123456789";
          goog.crypt.base64.ENCODED_VALS = goog.crypt.base64.ENCODED_VALS_BASE + "+/=";
          goog.crypt.base64.ENCODED_VALS_WEBSAFE = goog.crypt.base64.ENCODED_VALS_BASE + "-_.";
          goog.crypt.base64.ASSUME_NATIVE_SUPPORT_ = goog.userAgent.GECKO || goog.userAgent.WEBKIT && !goog.userAgent.product.SAFARI || goog.userAgent.OPERA;
          goog.crypt.base64.HAS_NATIVE_ENCODE_ = goog.crypt.base64.ASSUME_NATIVE_SUPPORT_ || typeof goog.global.btoa == "function";
          goog.crypt.base64.HAS_NATIVE_DECODE_ = goog.crypt.base64.ASSUME_NATIVE_SUPPORT_ || !goog.userAgent.product.SAFARI && !goog.userAgent.IE && typeof goog.global.atob == "function";
          goog.crypt.base64.encodeByteArray = function (input, opt_webSafe) {
            goog.asserts.assert(goog.isArrayLike(input), "encodeByteArray takes an array as a parameter");
            goog.crypt.base64.init_();
            var byteToCharMap = opt_webSafe ? goog.crypt.base64.byteToCharMapWebSafe_ : goog.crypt.base64.byteToCharMap_;
            var output = [];
            for (var i = 0; i < input.length; i += 3) {
              var byte1 = input[i];
              var haveByte2 = i + 1 < input.length;
              var byte2 = haveByte2 ? input[i + 1] : 0;
              var haveByte3 = i + 2 < input.length;
              var byte3 = haveByte3 ? input[i + 2] : 0;
              var outByte1 = byte1 >> 2;
              var outByte2 =
                (byte1 & 3) << 4 | byte2 >> 4;
              var outByte3 = (byte2 & 15) << 2 | byte3 >> 6;
              var outByte4 = byte3 & 63;
              if (!haveByte3) {
                outByte4 = 64;
                if (!haveByte2) outByte3 = 64
              }
              output.push(byteToCharMap[outByte1], byteToCharMap[outByte2], byteToCharMap[outByte3], byteToCharMap[outByte4])
            }
            return output.join("")
          };
          goog.crypt.base64.encodeString = function (input, opt_webSafe) {
            if (goog.crypt.base64.HAS_NATIVE_ENCODE_ && !opt_webSafe) return goog.global.btoa(input);
            return goog.crypt.base64.encodeByteArray(goog.crypt.stringToByteArray(input), opt_webSafe)
          };
          goog.crypt.base64.decodeString = function (input, opt_webSafe) {
            if (goog.crypt.base64.HAS_NATIVE_DECODE_ && !opt_webSafe) return goog.global.atob(input);
            var output = "";

            function pushByte(b) {
              output += String.fromCharCode(b)
            }

            goog.crypt.base64.decodeStringInternal_(input, pushByte);
            return output
          };
          goog.crypt.base64.decodeStringToByteArray = function (input, opt_ignored) {
            var output = [];

            function pushByte(b) {
              output.push(b)
            }

            goog.crypt.base64.decodeStringInternal_(input, pushByte);
            return output
          };
          goog.crypt.base64.decodeStringToUint8Array = function (input) {
            goog.asserts.assert(!goog.userAgent.IE || goog.userAgent.isVersionOrHigher("10"), "Browser does not support typed arrays");
            var output = new Uint8Array(Math.ceil(input.length * 3 / 4));
            var outLen = 0;

            function pushByte(b) {
              output[outLen++] = b
            }

            goog.crypt.base64.decodeStringInternal_(input, pushByte);
            return output.subarray(0, outLen)
          };
          goog.crypt.base64.decodeStringInternal_ = function (input, pushByte) {
            goog.crypt.base64.init_();
            var nextCharIndex = 0;

            function getByte(default_val) {
              while (nextCharIndex < input.length) {
                var ch = input.charAt(nextCharIndex++);
                var b = goog.crypt.base64.charToByteMap_[ch];
                if (b != null) return b;
                if (!goog.string.isEmptyOrWhitespace(ch)) throw new Error("Unknown base64 encoding at char: " + ch);
              }
              return default_val
            }

            while (true) {
              var byte1 = getByte(-1);
              var byte2 = getByte(0);
              var byte3 = getByte(64);
              var byte4 = getByte(64);
              if (byte4 ===
                64) if (byte1 === -1) return;
              var outByte1 = byte1 << 2 | byte2 >> 4;
              pushByte(outByte1);
              if (byte3 != 64) {
                var outByte2 = byte2 << 4 & 240 | byte3 >> 2;
                pushByte(outByte2);
                if (byte4 != 64) {
                  var outByte3 = byte3 << 6 & 192 | byte4;
                  pushByte(outByte3)
                }
              }
            }
          };
          goog.crypt.base64.init_ = function () {
            if (!goog.crypt.base64.byteToCharMap_) {
              goog.crypt.base64.byteToCharMap_ = {};
              goog.crypt.base64.charToByteMap_ = {};
              goog.crypt.base64.byteToCharMapWebSafe_ = {};
              for (var i = 0; i < goog.crypt.base64.ENCODED_VALS.length; i++) {
                goog.crypt.base64.byteToCharMap_[i] = goog.crypt.base64.ENCODED_VALS.charAt(i);
                goog.crypt.base64.charToByteMap_[goog.crypt.base64.byteToCharMap_[i]] = i;
                goog.crypt.base64.byteToCharMapWebSafe_[i] = goog.crypt.base64.ENCODED_VALS_WEBSAFE.charAt(i);
                if (i >= goog.crypt.base64.ENCODED_VALS_BASE.length) goog.crypt.base64.charToByteMap_[goog.crypt.base64.ENCODED_VALS_WEBSAFE.charAt(i)] =
                  i
              }
            }
          };
          /*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
          goog.provide("goog.async.Deferred");
          goog.provide("goog.async.Deferred.AlreadyCalledError");
          goog.provide("goog.async.Deferred.CanceledError");
          goog.require("goog.Promise");
          goog.require("goog.Thenable");
          goog.require("goog.array");
          goog.require("goog.asserts");
          goog.require("goog.debug.Error");
          goog.async.Deferred = function (opt_onCancelFunction, opt_defaultScope) {
            this.sequence_ = [];
            this.onCancelFunction_ = opt_onCancelFunction;
            this.defaultScope_ = opt_defaultScope || null;
            this.fired_ = false;
            this.hadError_ = false;
            this.result_ = undefined;
            this.blocked_ = false;
            this.blocking_ = false;
            this.silentlyCanceled_ = false;
            this.unhandledErrorId_ = 0;
            this.parent_ = null;
            this.branches_ = 0;
            if (goog.async.Deferred.LONG_STACK_TRACES) {
              this.constructorStack_ = null;
              if (Error.captureStackTrace) {
                var target = {stack: ""};
                Error.captureStackTrace(target,
                  goog.async.Deferred);
                if (typeof target.stack == "string") this.constructorStack_ = target.stack.replace(/^[^\n]*\n/, "")
              }
            }
          };
          goog.define("goog.async.Deferred.STRICT_ERRORS", false);
          goog.define("goog.async.Deferred.LONG_STACK_TRACES", false);
          goog.async.Deferred.prototype.cancel = function (opt_deepCancel) {
            if (!this.hasFired()) {
              if (this.parent_) {
                var parent = this.parent_;
                delete this.parent_;
                if (opt_deepCancel) parent.cancel(opt_deepCancel); else parent.branchCancel_()
              }
              if (this.onCancelFunction_) this.onCancelFunction_.call(this.defaultScope_, this); else this.silentlyCanceled_ = true;
              if (!this.hasFired()) this.errback(new goog.async.Deferred.CanceledError(this))
            } else if (this.result_ instanceof goog.async.Deferred) this.result_.cancel()
          };
          goog.async.Deferred.prototype.branchCancel_ = function () {
            this.branches_--;
            if (this.branches_ <= 0) this.cancel()
          };
          goog.async.Deferred.prototype.continue_ = function (isSuccess, res) {
            this.blocked_ = false;
            this.updateResult_(isSuccess, res)
          };
          goog.async.Deferred.prototype.updateResult_ = function (isSuccess, res) {
            this.fired_ = true;
            this.result_ = res;
            this.hadError_ = !isSuccess;
            this.fire_()
          };
          goog.async.Deferred.prototype.check_ = function () {
            if (this.hasFired()) {
              if (!this.silentlyCanceled_) throw new goog.async.Deferred.AlreadyCalledError(this);
              this.silentlyCanceled_ = false
            }
          };
          goog.async.Deferred.prototype.callback = function (opt_result) {
            this.check_();
            this.assertNotDeferred_(opt_result);
            this.updateResult_(true, opt_result)
          };
          goog.async.Deferred.prototype.errback = function (opt_result) {
            this.check_();
            this.assertNotDeferred_(opt_result);
            this.makeStackTraceLong_(opt_result);
            this.updateResult_(false, opt_result)
          };
          goog.async.Deferred.prototype.makeStackTraceLong_ = function (error) {
            if (!goog.async.Deferred.LONG_STACK_TRACES) return;
            if (this.constructorStack_ && goog.isObject(error) && error.stack && /^[^\n]+(\n   [^\n]+)+/.test(error.stack)) error.stack = error.stack + "\nDEFERRED OPERATION:\n" + this.constructorStack_
          };
          goog.async.Deferred.prototype.assertNotDeferred_ = function (obj) {
            goog.asserts.assert(!(obj instanceof goog.async.Deferred), "An execution sequence may not be initiated with a blocking Deferred.")
          };
          goog.async.Deferred.prototype.addCallback = function (cb, opt_scope) {
            return this.addCallbacks(cb, null, opt_scope)
          };
          goog.async.Deferred.prototype.addErrback = function (eb, opt_scope) {
            return this.addCallbacks(null, eb, opt_scope)
          };
          goog.async.Deferred.prototype.addBoth = function (f, opt_scope) {
            return this.addCallbacks(f, f, opt_scope)
          };
          goog.async.Deferred.prototype.addFinally = function (f, opt_scope) {
            return this.addCallbacks(f, function (err) {
              var result = f.call(this, err);
              if (!goog.isDef(result)) throw err;
              return result
            }, opt_scope)
          };
          goog.async.Deferred.prototype.addCallbacks = function (cb, eb, opt_scope) {
            goog.asserts.assert(!this.blocking_, "Blocking Deferreds can not be re-used");
            this.sequence_.push([cb, eb, opt_scope]);
            if (this.hasFired()) this.fire_();
            return this
          };
          goog.async.Deferred.prototype.then = function (opt_onFulfilled, opt_onRejected, opt_context) {
            var resolve, reject;
            var promise = new goog.Promise(function (res, rej) {
              resolve = res;
              reject = rej
            });
            this.addCallbacks(resolve, function (reason) {
              if (reason instanceof goog.async.Deferred.CanceledError) promise.cancel(); else reject(reason)
            });
            return promise.then(opt_onFulfilled, opt_onRejected, opt_context)
          };
          goog.Thenable.addImplementation(goog.async.Deferred);
          goog.async.Deferred.prototype.chainDeferred = function (otherDeferred) {
            this.addCallbacks(otherDeferred.callback, otherDeferred.errback, otherDeferred);
            return this
          };
          goog.async.Deferred.prototype.awaitDeferred = function (otherDeferred) {
            if (!(otherDeferred instanceof goog.async.Deferred)) return this.addCallback(function () {
              return otherDeferred
            });
            return this.addCallback(goog.bind(otherDeferred.branch, otherDeferred))
          };
          goog.async.Deferred.prototype.branch = function (opt_propagateCancel) {
            var d = new goog.async.Deferred;
            this.chainDeferred(d);
            if (opt_propagateCancel) {
              d.parent_ = this;
              this.branches_++
            }
            return d
          };
          goog.async.Deferred.prototype.hasFired = function () {
            return this.fired_
          };
          goog.async.Deferred.prototype.isError = function (res) {
            return res instanceof Error
          };
          goog.async.Deferred.prototype.hasErrback_ = function () {
            return goog.array.some(this.sequence_, function (sequenceRow) {
              return goog.isFunction(sequenceRow[1])
            })
          };
          goog.async.Deferred.prototype.fire_ = function () {
            if (this.unhandledErrorId_ && this.hasFired() && this.hasErrback_()) {
              goog.async.Deferred.unscheduleError_(this.unhandledErrorId_);
              this.unhandledErrorId_ = 0
            }
            if (this.parent_) {
              this.parent_.branches_--;
              delete this.parent_
            }
            var res = this.result_;
            var unhandledException = false;
            var isNewlyBlocked = false;
            while (this.sequence_.length && !this.blocked_) {
              var sequenceEntry = this.sequence_.shift();
              var callback = sequenceEntry[0];
              var errback = sequenceEntry[1];
              var scope = sequenceEntry[2];
              var f = this.hadError_ ? errback : callback;
              if (f) try {
                var ret = f.call(scope || this.defaultScope_, res);
                if (goog.isDef(ret)) {
                  this.hadError_ = this.hadError_ && (ret == res || this.isError(ret));
                  this.result_ = res = ret
                }
                if (goog.Thenable.isImplementedBy(res) || typeof goog.global["Promise"] === "function" && res instanceof goog.global["Promise"]) {
                  isNewlyBlocked = true;
                  this.blocked_ = true
                }
              } catch (ex) {
                res = ex;
                this.hadError_ = true;
                this.makeStackTraceLong_(res);
                if (!this.hasErrback_()) unhandledException = true
              }
            }
            this.result_ = res;
            if (isNewlyBlocked) {
              var onCallback =
                goog.bind(this.continue_, this, true);
              var onErrback = goog.bind(this.continue_, this, false);
              if (res instanceof goog.async.Deferred) {
                res.addCallbacks(onCallback, onErrback);
                res.blocking_ = true
              } else res.then(onCallback, onErrback)
            } else if (goog.async.Deferred.STRICT_ERRORS && this.isError(res) && !(res instanceof goog.async.Deferred.CanceledError)) {
              this.hadError_ = true;
              unhandledException = true
            }
            if (unhandledException) this.unhandledErrorId_ = goog.async.Deferred.scheduleError_(res)
          };
          goog.async.Deferred.succeed = function (opt_result) {
            var d = new goog.async.Deferred;
            d.callback(opt_result);
            return d
          };
          goog.async.Deferred.fromPromise = function (promise) {
            var d = new goog.async.Deferred;
            d.callback();
            d.addCallback(function () {
              return promise
            });
            return d
          };
          goog.async.Deferred.fail = function (res) {
            var d = new goog.async.Deferred;
            d.errback(res);
            return d
          };
          goog.async.Deferred.canceled = function () {
            var d = new goog.async.Deferred;
            d.cancel();
            return d
          };
          goog.async.Deferred.when = function (value, callback, opt_scope) {
            if (value instanceof goog.async.Deferred) return value.branch(true).addCallback(callback, opt_scope); else return goog.async.Deferred.succeed(value).addCallback(callback, opt_scope)
          };
          goog.async.Deferred.AlreadyCalledError = function (deferred) {
            goog.debug.Error.call(this);
            this.deferred = deferred
          };
          goog.inherits(goog.async.Deferred.AlreadyCalledError, goog.debug.Error);
          goog.async.Deferred.AlreadyCalledError.prototype.message = "Deferred has already fired";
          goog.async.Deferred.AlreadyCalledError.prototype.name = "AlreadyCalledError";
          goog.async.Deferred.CanceledError = function (deferred) {
            goog.debug.Error.call(this);
            this.deferred = deferred
          };
          goog.inherits(goog.async.Deferred.CanceledError, goog.debug.Error);
          goog.async.Deferred.CanceledError.prototype.message = "Deferred was canceled";
          goog.async.Deferred.CanceledError.prototype.name = "CanceledError";
          goog.async.Deferred.Error_ = function (error) {
            this.id_ = goog.global.setTimeout(goog.bind(this.throwError, this), 0);
            this.error_ = error
          };
          goog.async.Deferred.Error_.prototype.throwError = function () {
            goog.asserts.assert(goog.async.Deferred.errorMap_[this.id_], "Cannot throw an error that is not scheduled.");
            delete goog.async.Deferred.errorMap_[this.id_];
            throw this.error_;
          };
          goog.async.Deferred.Error_.prototype.resetTimer = function () {
            goog.global.clearTimeout(this.id_)
          };
          goog.async.Deferred.errorMap_ = {};
          goog.async.Deferred.scheduleError_ = function (error) {
            var deferredError = new goog.async.Deferred.Error_(error);
            goog.async.Deferred.errorMap_[deferredError.id_] = deferredError;
            return deferredError.id_
          };
          goog.async.Deferred.unscheduleError_ = function (id) {
            var error = goog.async.Deferred.errorMap_[id];
            if (error) {
              error.resetTimer();
              delete goog.async.Deferred.errorMap_[id]
            }
          };
          goog.async.Deferred.assertNoErrors = function () {
            var map = goog.async.Deferred.errorMap_;
            for (var key in map) {
              var error = map[key];
              error.resetTimer();
              error.throwError()
            }
          };
          goog.provide("goog.crypt.Hash");
          goog.crypt.Hash = function () {
            this.blockSize = -1
          };
          goog.crypt.Hash.prototype.reset = goog.abstractMethod;
          goog.crypt.Hash.prototype.update = goog.abstractMethod;
          goog.crypt.Hash.prototype.digest = goog.abstractMethod;
          goog.provide("goog.crypt.Sha2");
          goog.require("goog.array");
          goog.require("goog.asserts");
          goog.require("goog.crypt.Hash");
          goog.crypt.Sha2 = function (numHashBlocks, initHashBlocks) {
            goog.crypt.Sha2.base(this, "constructor");
            this.blockSize = goog.crypt.Sha2.BLOCKSIZE_;
            this.chunk_ = goog.global["Uint8Array"] ? new Uint8Array(this.blockSize) : new Array(this.blockSize);
            this.inChunk_ = 0;
            this.total_ = 0;
            this.hash_ = [];
            this.numHashBlocks_ = numHashBlocks;
            this.initHashBlocks_ = initHashBlocks;
            this.w_ = goog.global["Int32Array"] ? new Int32Array(64) : new Array(64);
            if (!goog.isDef(goog.crypt.Sha2.Kx_)) if (goog.global["Int32Array"]) goog.crypt.Sha2.Kx_ = new Int32Array(goog.crypt.Sha2.K_);
            else goog.crypt.Sha2.Kx_ = goog.crypt.Sha2.K_;
            this.reset()
          };
          goog.inherits(goog.crypt.Sha2, goog.crypt.Hash);
          goog.crypt.Sha2.BLOCKSIZE_ = 512 / 8;
          goog.crypt.Sha2.PADDING_ = goog.array.concat(128, goog.array.repeat(0, goog.crypt.Sha2.BLOCKSIZE_ - 1));
          goog.crypt.Sha2.prototype.reset = function () {
            this.inChunk_ = 0;
            this.total_ = 0;
            this.hash_ = goog.global["Int32Array"] ? new Int32Array(this.initHashBlocks_) : goog.array.clone(this.initHashBlocks_)
          };
          goog.crypt.Sha2.prototype.computeChunk_ = function () {
            var chunk = this.chunk_;
            goog.asserts.assert(chunk.length == this.blockSize);
            var rounds = 64;
            var w = this.w_;
            var index = 0;
            var offset = 0;
            while (offset < chunk.length) {
              w[index++] = chunk[offset] << 24 | chunk[offset + 1] << 16 | chunk[offset + 2] << 8 | chunk[offset + 3];
              offset = index * 4
            }
            for (var i = 16; i < rounds; i++) {
              var w_15 = w[i - 15] | 0;
              var s0 = (w_15 >>> 7 | w_15 << 25) ^ (w_15 >>> 18 | w_15 << 14) ^ w_15 >>> 3;
              var w_2 = w[i - 2] | 0;
              var s1 = (w_2 >>> 17 | w_2 << 15) ^ (w_2 >>> 19 | w_2 << 13) ^ w_2 >>> 10;
              var partialSum1 = (w[i - 16] |
                0) + s0 | 0;
              var partialSum2 = (w[i - 7] | 0) + s1 | 0;
              w[i] = partialSum1 + partialSum2 | 0
            }
            var a = this.hash_[0] | 0;
            var b = this.hash_[1] | 0;
            var c = this.hash_[2] | 0;
            var d = this.hash_[3] | 0;
            var e = this.hash_[4] | 0;
            var f = this.hash_[5] | 0;
            var g = this.hash_[6] | 0;
            var h = this.hash_[7] | 0;
            for (var i = 0; i < rounds; i++) {
              var S0 = (a >>> 2 | a << 30) ^ (a >>> 13 | a << 19) ^ (a >>> 22 | a << 10);
              var maj = a & b ^ a & c ^ b & c;
              var t2 = S0 + maj | 0;
              var S1 = (e >>> 6 | e << 26) ^ (e >>> 11 | e << 21) ^ (e >>> 25 | e << 7);
              var ch = e & f ^ ~e & g;
              var partialSum1 = h + S1 | 0;
              var partialSum2 = ch + (goog.crypt.Sha2.Kx_[i] | 0) | 0;
              var partialSum3 =
                partialSum2 + (w[i] | 0) | 0;
              var t1 = partialSum1 + partialSum3 | 0;
              h = g;
              g = f;
              f = e;
              e = d + t1 | 0;
              d = c;
              c = b;
              b = a;
              a = t1 + t2 | 0
            }
            this.hash_[0] = this.hash_[0] + a | 0;
            this.hash_[1] = this.hash_[1] + b | 0;
            this.hash_[2] = this.hash_[2] + c | 0;
            this.hash_[3] = this.hash_[3] + d | 0;
            this.hash_[4] = this.hash_[4] + e | 0;
            this.hash_[5] = this.hash_[5] + f | 0;
            this.hash_[6] = this.hash_[6] + g | 0;
            this.hash_[7] = this.hash_[7] + h | 0
          };
          goog.crypt.Sha2.prototype.update = function (message, opt_length) {
            if (!goog.isDef(opt_length)) opt_length = message.length;
            var n = 0;
            var inChunk = this.inChunk_;
            if (goog.isString(message)) while (n < opt_length) {
              this.chunk_[inChunk++] = message.charCodeAt(n++);
              if (inChunk == this.blockSize) {
                this.computeChunk_();
                inChunk = 0
              }
            } else if (goog.isArrayLike(message)) while (n < opt_length) {
              var b = message[n++];
              if (!("number" == typeof b && 0 <= b && 255 >= b && b == (b | 0))) throw new Error("message must be a byte array");
              this.chunk_[inChunk++] = b;
              if (inChunk ==
                this.blockSize) {
                this.computeChunk_();
                inChunk = 0
              }
            } else throw new Error("message must be string or array");
            this.inChunk_ = inChunk;
            this.total_ += opt_length
          };
          goog.crypt.Sha2.prototype.digest = function () {
            var digest = [];
            var totalBits = this.total_ * 8;
            if (this.inChunk_ < 56) this.update(goog.crypt.Sha2.PADDING_, 56 - this.inChunk_); else this.update(goog.crypt.Sha2.PADDING_, this.blockSize - (this.inChunk_ - 56));
            for (var i = 63; i >= 56; i--) {
              this.chunk_[i] = totalBits & 255;
              totalBits /= 256
            }
            this.computeChunk_();
            var n = 0;
            for (var i = 0; i < this.numHashBlocks_; i++) for (var j = 24; j >= 0; j -= 8) digest[n++] = this.hash_[i] >> j & 255;
            return digest
          };
          goog.crypt.Sha2.K_ = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817,
            3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298];
          goog.crypt.Sha2.Kx_;
          goog.provide("goog.crypt.Sha256");
          goog.require("goog.crypt.Sha2");
          goog.crypt.Sha256 = function () {
            goog.crypt.Sha256.base(this, "constructor", 8, goog.crypt.Sha256.INIT_HASH_BLOCK_)
          };
          goog.inherits(goog.crypt.Sha256, goog.crypt.Sha2);
          goog.crypt.Sha256.INIT_HASH_BLOCK_ = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225];
          goog.provide("goog.structs");
          goog.require("goog.array");
          goog.require("goog.object");
          goog.structs.getCount = function (col) {
            if (col.getCount && typeof col.getCount == "function") return col.getCount();
            if (goog.isArrayLike(col) || goog.isString(col)) return col.length;
            return goog.object.getCount(col)
          };
          goog.structs.getValues = function (col) {
            if (col.getValues && typeof col.getValues == "function") return col.getValues();
            if (goog.isString(col)) return col.split("");
            if (goog.isArrayLike(col)) {
              var rv = [];
              var l = col.length;
              for (var i = 0; i < l; i++) rv.push(col[i]);
              return rv
            }
            return goog.object.getValues(col)
          };
          goog.structs.getKeys = function (col) {
            if (col.getKeys && typeof col.getKeys == "function") return col.getKeys();
            if (col.getValues && typeof col.getValues == "function") return undefined;
            if (goog.isArrayLike(col) || goog.isString(col)) {
              var rv = [];
              var l = col.length;
              for (var i = 0; i < l; i++) rv.push(i);
              return rv
            }
            return goog.object.getKeys(col)
          };
          goog.structs.contains = function (col, val) {
            if (col.contains && typeof col.contains == "function") return col.contains(val);
            if (col.containsValue && typeof col.containsValue == "function") return col.containsValue(val);
            if (goog.isArrayLike(col) || goog.isString(col)) return goog.array.contains(col, val);
            return goog.object.containsValue(col, val)
          };
          goog.structs.isEmpty = function (col) {
            if (col.isEmpty && typeof col.isEmpty == "function") return col.isEmpty();
            if (goog.isArrayLike(col) || goog.isString(col)) return goog.array.isEmpty(col);
            return goog.object.isEmpty(col)
          };
          goog.structs.clear = function (col) {
            if (col.clear && typeof col.clear == "function") col.clear(); else if (goog.isArrayLike(col)) goog.array.clear(col); else goog.object.clear(col)
          };
          goog.structs.forEach = function (col, f, opt_obj) {
            if (col.forEach && typeof col.forEach == "function") col.forEach(f, opt_obj); else if (goog.isArrayLike(col) || goog.isString(col)) goog.array.forEach(col, f, opt_obj); else {
              var keys = goog.structs.getKeys(col);
              var values = goog.structs.getValues(col);
              var l = values.length;
              for (var i = 0; i < l; i++) f.call(opt_obj, values[i], keys && keys[i], col)
            }
          };
          goog.structs.filter = function (col, f, opt_obj) {
            if (typeof col.filter == "function") return col.filter(f, opt_obj);
            if (goog.isArrayLike(col) || goog.isString(col)) return goog.array.filter(col, f, opt_obj);
            var rv;
            var keys = goog.structs.getKeys(col);
            var values = goog.structs.getValues(col);
            var l = values.length;
            if (keys) {
              rv = {};
              for (var i = 0; i < l; i++) if (f.call(opt_obj, values[i], keys[i], col)) rv[keys[i]] = values[i]
            } else {
              rv = [];
              for (var i = 0; i < l; i++) if (f.call(opt_obj, values[i], undefined, col)) rv.push(values[i])
            }
            return rv
          };
          goog.structs.map = function (col, f, opt_obj) {
            if (typeof col.map == "function") return col.map(f, opt_obj);
            if (goog.isArrayLike(col) || goog.isString(col)) return goog.array.map(col, f, opt_obj);
            var rv;
            var keys = goog.structs.getKeys(col);
            var values = goog.structs.getValues(col);
            var l = values.length;
            if (keys) {
              rv = {};
              for (var i = 0; i < l; i++) rv[keys[i]] = f.call(opt_obj, values[i], keys[i], col)
            } else {
              rv = [];
              for (var i = 0; i < l; i++) rv[i] = f.call(opt_obj, values[i], undefined, col)
            }
            return rv
          };
          goog.structs.some = function (col, f, opt_obj) {
            if (typeof col.some == "function") return col.some(f, opt_obj);
            if (goog.isArrayLike(col) || goog.isString(col)) return goog.array.some(col, f, opt_obj);
            var keys = goog.structs.getKeys(col);
            var values = goog.structs.getValues(col);
            var l = values.length;
            for (var i = 0; i < l; i++) if (f.call(opt_obj, values[i], keys && keys[i], col)) return true;
            return false
          };
          goog.structs.every = function (col, f, opt_obj) {
            if (typeof col.every == "function") return col.every(f, opt_obj);
            if (goog.isArrayLike(col) || goog.isString(col)) return goog.array.every(col, f, opt_obj);
            var keys = goog.structs.getKeys(col);
            var values = goog.structs.getValues(col);
            var l = values.length;
            for (var i = 0; i < l; i++) if (!f.call(opt_obj, values[i], keys && keys[i], col)) return false;
            return true
          };
          goog.provide("goog.uri.utils");
          goog.provide("goog.uri.utils.ComponentIndex");
          goog.provide("goog.uri.utils.QueryArray");
          goog.provide("goog.uri.utils.QueryValue");
          goog.provide("goog.uri.utils.StandardQueryParam");
          goog.require("goog.array");
          goog.require("goog.asserts");
          goog.require("goog.string");
          goog.uri.utils.CharCode_ = {AMPERSAND: 38, EQUAL: 61, HASH: 35, QUESTION: 63};
          goog.uri.utils.buildFromEncodedParts = function (opt_scheme, opt_userInfo, opt_domain, opt_port, opt_path, opt_queryData, opt_fragment) {
            var out = "";
            if (opt_scheme) out += opt_scheme + ":";
            if (opt_domain) {
              out += "//";
              if (opt_userInfo) out += opt_userInfo + "@";
              out += opt_domain;
              if (opt_port) out += ":" + opt_port
            }
            if (opt_path) out += opt_path;
            if (opt_queryData) out += "?" + opt_queryData;
            if (opt_fragment) out += "#" + opt_fragment;
            return out
          };
          goog.uri.utils.splitRe_ = new RegExp("^" + "(?:" + "([^:/?#.]+)" + ":)?" + "(?://" + "(?:([^/?#]*)@)?" + "([^/#?]*?)" + "(?::([0-9]+))?" + "(?=[/#?]|$)" + ")?" + "([^?#]+)?" + "(?:\\?([^#]*))?" + "(?:#([\\s\\S]*))?" + "$");
          goog.uri.utils.ComponentIndex = {
            SCHEME: 1,
            USER_INFO: 2,
            DOMAIN: 3,
            PORT: 4,
            PATH: 5,
            QUERY_DATA: 6,
            FRAGMENT: 7
          };
          goog.uri.utils.split = function (uri) {
            return uri.match(goog.uri.utils.splitRe_)
          };
          goog.uri.utils.decodeIfPossible_ = function (uri, opt_preserveReserved) {
            if (!uri) return uri;
            return opt_preserveReserved ? decodeURI(uri) : decodeURIComponent(uri)
          };
          goog.uri.utils.getComponentByIndex_ = function (componentIndex, uri) {
            return goog.uri.utils.split(uri)[componentIndex] || null
          };
          goog.uri.utils.getScheme = function (uri) {
            return goog.uri.utils.getComponentByIndex_(goog.uri.utils.ComponentIndex.SCHEME, uri)
          };
          goog.uri.utils.getEffectiveScheme = function (uri) {
            var scheme = goog.uri.utils.getScheme(uri);
            if (!scheme && goog.global.self && goog.global.self.location) {
              var protocol = goog.global.self.location.protocol;
              scheme = protocol.substr(0, protocol.length - 1)
            }
            return scheme ? scheme.toLowerCase() : ""
          };
          goog.uri.utils.getUserInfoEncoded = function (uri) {
            return goog.uri.utils.getComponentByIndex_(goog.uri.utils.ComponentIndex.USER_INFO, uri)
          };
          goog.uri.utils.getUserInfo = function (uri) {
            return goog.uri.utils.decodeIfPossible_(goog.uri.utils.getUserInfoEncoded(uri))
          };
          goog.uri.utils.getDomainEncoded = function (uri) {
            return goog.uri.utils.getComponentByIndex_(goog.uri.utils.ComponentIndex.DOMAIN, uri)
          };
          goog.uri.utils.getDomain = function (uri) {
            return goog.uri.utils.decodeIfPossible_(goog.uri.utils.getDomainEncoded(uri), true)
          };
          goog.uri.utils.getPort = function (uri) {
            return Number(goog.uri.utils.getComponentByIndex_(goog.uri.utils.ComponentIndex.PORT, uri)) || null
          };
          goog.uri.utils.getPathEncoded = function (uri) {
            return goog.uri.utils.getComponentByIndex_(goog.uri.utils.ComponentIndex.PATH, uri)
          };
          goog.uri.utils.getPath = function (uri) {
            return goog.uri.utils.decodeIfPossible_(goog.uri.utils.getPathEncoded(uri), true)
          };
          goog.uri.utils.getQueryData = function (uri) {
            return goog.uri.utils.getComponentByIndex_(goog.uri.utils.ComponentIndex.QUERY_DATA, uri)
          };
          goog.uri.utils.getFragmentEncoded = function (uri) {
            var hashIndex = uri.indexOf("#");
            return hashIndex < 0 ? null : uri.substr(hashIndex + 1)
          };
          goog.uri.utils.setFragmentEncoded = function (uri, fragment) {
            return goog.uri.utils.removeFragment(uri) + (fragment ? "#" + fragment : "")
          };
          goog.uri.utils.getFragment = function (uri) {
            return goog.uri.utils.decodeIfPossible_(goog.uri.utils.getFragmentEncoded(uri))
          };
          goog.uri.utils.getHost = function (uri) {
            var pieces = goog.uri.utils.split(uri);
            return goog.uri.utils.buildFromEncodedParts(pieces[goog.uri.utils.ComponentIndex.SCHEME], pieces[goog.uri.utils.ComponentIndex.USER_INFO], pieces[goog.uri.utils.ComponentIndex.DOMAIN], pieces[goog.uri.utils.ComponentIndex.PORT])
          };
          goog.uri.utils.getOrigin = function (uri) {
            var pieces = goog.uri.utils.split(uri);
            return goog.uri.utils.buildFromEncodedParts(pieces[goog.uri.utils.ComponentIndex.SCHEME], null, pieces[goog.uri.utils.ComponentIndex.DOMAIN], pieces[goog.uri.utils.ComponentIndex.PORT])
          };
          goog.uri.utils.getPathAndAfter = function (uri) {
            var pieces = goog.uri.utils.split(uri);
            return goog.uri.utils.buildFromEncodedParts(null, null, null, null, pieces[goog.uri.utils.ComponentIndex.PATH], pieces[goog.uri.utils.ComponentIndex.QUERY_DATA], pieces[goog.uri.utils.ComponentIndex.FRAGMENT])
          };
          goog.uri.utils.removeFragment = function (uri) {
            var hashIndex = uri.indexOf("#");
            return hashIndex < 0 ? uri : uri.substr(0, hashIndex)
          };
          goog.uri.utils.haveSameDomain = function (uri1, uri2) {
            var pieces1 = goog.uri.utils.split(uri1);
            var pieces2 = goog.uri.utils.split(uri2);
            return pieces1[goog.uri.utils.ComponentIndex.DOMAIN] == pieces2[goog.uri.utils.ComponentIndex.DOMAIN] && pieces1[goog.uri.utils.ComponentIndex.SCHEME] == pieces2[goog.uri.utils.ComponentIndex.SCHEME] && pieces1[goog.uri.utils.ComponentIndex.PORT] == pieces2[goog.uri.utils.ComponentIndex.PORT]
          };
          goog.uri.utils.assertNoFragmentsOrQueries_ = function (uri) {
            goog.asserts.assert(uri.indexOf("#") < 0 && uri.indexOf("?") < 0, "goog.uri.utils: Fragment or query identifiers are not supported: [%s]", uri)
          };
          goog.uri.utils.QueryValue;
          goog.uri.utils.QueryArray;
          goog.uri.utils.parseQueryData = function (encodedQuery, callback) {
            if (!encodedQuery) return;
            var pairs = encodedQuery.split("&");
            for (var i = 0; i < pairs.length; i++) {
              var indexOfEquals = pairs[i].indexOf("=");
              var name = null;
              var value = null;
              if (indexOfEquals >= 0) {
                name = pairs[i].substring(0, indexOfEquals);
                value = pairs[i].substring(indexOfEquals + 1)
              } else name = pairs[i];
              callback(name, value ? goog.string.urlDecode(value) : "")
            }
          };
          goog.uri.utils.splitQueryData_ = function (uri) {
            var hashIndex = uri.indexOf("#");
            if (hashIndex < 0) hashIndex = uri.length;
            var questionIndex = uri.indexOf("?");
            var queryData;
            if (questionIndex < 0 || questionIndex > hashIndex) {
              questionIndex = hashIndex;
              queryData = ""
            } else queryData = uri.substring(questionIndex + 1, hashIndex);
            return [uri.substr(0, questionIndex), queryData, uri.substr(hashIndex)]
          };
          goog.uri.utils.joinQueryData_ = function (parts) {
            return parts[0] + (parts[1] ? "?" + parts[1] : "") + parts[2]
          };
          goog.uri.utils.appendQueryData_ = function (queryData, newData) {
            if (!newData) return queryData;
            return queryData ? queryData + "&" + newData : newData
          };
          goog.uri.utils.appendQueryDataToUri_ = function (uri, queryData) {
            if (!queryData) return uri;
            var parts = goog.uri.utils.splitQueryData_(uri);
            parts[1] = goog.uri.utils.appendQueryData_(parts[1], queryData);
            return goog.uri.utils.joinQueryData_(parts)
          };
          goog.uri.utils.appendKeyValuePairs_ = function (key, value, pairs) {
            goog.asserts.assertString(key);
            if (goog.isArray(value)) {
              goog.asserts.assertArray(value);
              for (var j = 0; j < value.length; j++) goog.uri.utils.appendKeyValuePairs_(key, String(value[j]), pairs)
            } else if (value != null) pairs.push(key + (value === "" ? "" : "=" + goog.string.urlEncode(value)))
          };
          goog.uri.utils.buildQueryData = function (keysAndValues, opt_startIndex) {
            goog.asserts.assert(Math.max(keysAndValues.length - (opt_startIndex || 0), 0) % 2 == 0, "goog.uri.utils: Key/value lists must be even in length.");
            var params = [];
            for (var i = opt_startIndex || 0; i < keysAndValues.length; i += 2) {
              var key = keysAndValues[i];
              goog.uri.utils.appendKeyValuePairs_(key, keysAndValues[i + 1], params)
            }
            return params.join("&")
          };
          goog.uri.utils.buildQueryDataFromMap = function (map) {
            var params = [];
            for (var key in map) goog.uri.utils.appendKeyValuePairs_(key, map[key], params);
            return params.join("&")
          };
          goog.uri.utils.appendParams = function (uri, var_args) {
            var queryData = arguments.length == 2 ? goog.uri.utils.buildQueryData(arguments[1], 0) : goog.uri.utils.buildQueryData(arguments, 1);
            return goog.uri.utils.appendQueryDataToUri_(uri, queryData)
          };
          goog.uri.utils.appendParamsFromMap = function (uri, map) {
            var queryData = goog.uri.utils.buildQueryDataFromMap(map);
            return goog.uri.utils.appendQueryDataToUri_(uri, queryData)
          };
          goog.uri.utils.appendParam = function (uri, key, opt_value) {
            var value = goog.isDefAndNotNull(opt_value) ? "=" + goog.string.urlEncode(opt_value) : "";
            return goog.uri.utils.appendQueryDataToUri_(uri, key + value)
          };
          goog.uri.utils.findParam_ = function (uri, startIndex, keyEncoded, hashOrEndIndex) {
            var index = startIndex;
            var keyLength = keyEncoded.length;
            while ((index = uri.indexOf(keyEncoded, index)) >= 0 && index < hashOrEndIndex) {
              var precedingChar = uri.charCodeAt(index - 1);
              if (precedingChar == goog.uri.utils.CharCode_.AMPERSAND || precedingChar == goog.uri.utils.CharCode_.QUESTION) {
                var followingChar = uri.charCodeAt(index + keyLength);
                if (!followingChar || followingChar == goog.uri.utils.CharCode_.EQUAL || followingChar == goog.uri.utils.CharCode_.AMPERSAND ||
                  followingChar == goog.uri.utils.CharCode_.HASH) return index
              }
              index += keyLength + 1
            }
            return -1
          };
          goog.uri.utils.hashOrEndRe_ = /#|$/;
          goog.uri.utils.hasParam = function (uri, keyEncoded) {
            return goog.uri.utils.findParam_(uri, 0, keyEncoded, uri.search(goog.uri.utils.hashOrEndRe_)) >= 0
          };
          goog.uri.utils.getParamValue = function (uri, keyEncoded) {
            var hashOrEndIndex = uri.search(goog.uri.utils.hashOrEndRe_);
            var foundIndex = goog.uri.utils.findParam_(uri, 0, keyEncoded, hashOrEndIndex);
            if (foundIndex < 0) return null; else {
              var endPosition = uri.indexOf("&", foundIndex);
              if (endPosition < 0 || endPosition > hashOrEndIndex) endPosition = hashOrEndIndex;
              foundIndex += keyEncoded.length + 1;
              return goog.string.urlDecode(uri.substr(foundIndex, endPosition - foundIndex))
            }
          };
          goog.uri.utils.getParamValues = function (uri, keyEncoded) {
            var hashOrEndIndex = uri.search(goog.uri.utils.hashOrEndRe_);
            var position = 0;
            var foundIndex;
            var result = [];
            while ((foundIndex = goog.uri.utils.findParam_(uri, position, keyEncoded, hashOrEndIndex)) >= 0) {
              position = uri.indexOf("&", foundIndex);
              if (position < 0 || position > hashOrEndIndex) position = hashOrEndIndex;
              foundIndex += keyEncoded.length + 1;
              result.push(goog.string.urlDecode(uri.substr(foundIndex, position - foundIndex)))
            }
            return result
          };
          goog.uri.utils.trailingQueryPunctuationRe_ = /[?&]($|#)/;
          goog.uri.utils.removeParam = function (uri, keyEncoded) {
            var hashOrEndIndex = uri.search(goog.uri.utils.hashOrEndRe_);
            var position = 0;
            var foundIndex;
            var buffer = [];
            while ((foundIndex = goog.uri.utils.findParam_(uri, position, keyEncoded, hashOrEndIndex)) >= 0) {
              buffer.push(uri.substring(position, foundIndex));
              position = Math.min(uri.indexOf("&", foundIndex) + 1 || hashOrEndIndex, hashOrEndIndex)
            }
            buffer.push(uri.substr(position));
            return buffer.join("").replace(goog.uri.utils.trailingQueryPunctuationRe_, "$1")
          };
          goog.uri.utils.setParam = function (uri, keyEncoded, value) {
            return goog.uri.utils.appendParam(goog.uri.utils.removeParam(uri, keyEncoded), keyEncoded, value)
          };
          goog.uri.utils.setParamsFromMap = function (uri, params) {
            var parts = goog.uri.utils.splitQueryData_(uri);
            var queryData = parts[1];
            var buffer = [];
            if (queryData) goog.array.forEach(queryData.split("&"), function (pair) {
              var indexOfEquals = pair.indexOf("=");
              var name = indexOfEquals >= 0 ? pair.substr(0, indexOfEquals) : pair;
              if (!params.hasOwnProperty(name)) buffer.push(pair)
            });
            parts[1] = goog.uri.utils.appendQueryData_(buffer.join("&"), goog.uri.utils.buildQueryDataFromMap(params));
            return goog.uri.utils.joinQueryData_(parts)
          };
          goog.uri.utils.appendPath = function (baseUri, path) {
            goog.uri.utils.assertNoFragmentsOrQueries_(baseUri);
            if (goog.string.endsWith(baseUri, "/")) baseUri = baseUri.substr(0, baseUri.length - 1);
            if (goog.string.startsWith(path, "/")) path = path.substr(1);
            return goog.string.buildString(baseUri, "/", path)
          };
          goog.uri.utils.setPath = function (uri, path) {
            if (!goog.string.startsWith(path, "/")) path = "/" + path;
            var parts = goog.uri.utils.split(uri);
            return goog.uri.utils.buildFromEncodedParts(parts[goog.uri.utils.ComponentIndex.SCHEME], parts[goog.uri.utils.ComponentIndex.USER_INFO], parts[goog.uri.utils.ComponentIndex.DOMAIN], parts[goog.uri.utils.ComponentIndex.PORT], path, parts[goog.uri.utils.ComponentIndex.QUERY_DATA], parts[goog.uri.utils.ComponentIndex.FRAGMENT])
          };
          goog.uri.utils.StandardQueryParam = {RANDOM: "zx"};
          goog.uri.utils.makeUnique = function (uri) {
            return goog.uri.utils.setParam(uri, goog.uri.utils.StandardQueryParam.RANDOM, goog.string.getRandomString())
          };
          goog.provide("goog.Uri");
          goog.provide("goog.Uri.QueryData");
          goog.require("goog.array");
          goog.require("goog.asserts");
          goog.require("goog.string");
          goog.require("goog.structs");
          goog.require("goog.structs.Map");
          goog.require("goog.uri.utils");
          goog.require("goog.uri.utils.ComponentIndex");
          goog.require("goog.uri.utils.StandardQueryParam");
          goog.Uri = function (opt_uri, opt_ignoreCase) {
            this.scheme_ = "";
            this.userInfo_ = "";
            this.domain_ = "";
            this.port_ = null;
            this.path_ = "";
            this.fragment_ = "";
            this.isReadOnly_ = false;
            this.ignoreCase_ = false;
            this.queryData_;
            var m;
            if (opt_uri instanceof goog.Uri) {
              this.ignoreCase_ = goog.isDef(opt_ignoreCase) ? opt_ignoreCase : opt_uri.getIgnoreCase();
              this.setScheme(opt_uri.getScheme());
              this.setUserInfo(opt_uri.getUserInfo());
              this.setDomain(opt_uri.getDomain());
              this.setPort(opt_uri.getPort());
              this.setPath(opt_uri.getPath());
              this.setQueryData(opt_uri.getQueryData().clone());
              this.setFragment(opt_uri.getFragment())
            } else if (opt_uri && (m = goog.uri.utils.split(String(opt_uri)))) {
              this.ignoreCase_ = !!opt_ignoreCase;
              this.setScheme(m[goog.uri.utils.ComponentIndex.SCHEME] || "", true);
              this.setUserInfo(m[goog.uri.utils.ComponentIndex.USER_INFO] || "", true);
              this.setDomain(m[goog.uri.utils.ComponentIndex.DOMAIN] || "", true);
              this.setPort(m[goog.uri.utils.ComponentIndex.PORT]);
              this.setPath(m[goog.uri.utils.ComponentIndex.PATH] || "", true);
              this.setQueryData(m[goog.uri.utils.ComponentIndex.QUERY_DATA] ||
                "", true);
              this.setFragment(m[goog.uri.utils.ComponentIndex.FRAGMENT] || "", true)
            } else {
              this.ignoreCase_ = !!opt_ignoreCase;
              this.queryData_ = new goog.Uri.QueryData(null, null, this.ignoreCase_)
            }
          };
          goog.Uri.preserveParameterTypesCompatibilityFlag = false;
          goog.Uri.RANDOM_PARAM = goog.uri.utils.StandardQueryParam.RANDOM;
          goog.Uri.prototype.toString = function () {
            var out = [];
            var scheme = this.getScheme();
            if (scheme) out.push(goog.Uri.encodeSpecialChars_(scheme, goog.Uri.reDisallowedInSchemeOrUserInfo_, true), ":");
            var domain = this.getDomain();
            if (domain || scheme == "file") {
              out.push("//");
              var userInfo = this.getUserInfo();
              if (userInfo) out.push(goog.Uri.encodeSpecialChars_(userInfo, goog.Uri.reDisallowedInSchemeOrUserInfo_, true), "@");
              out.push(goog.Uri.removeDoubleEncoding_(goog.string.urlEncode(domain)));
              var port = this.getPort();
              if (port !=
                null) out.push(":", String(port))
            }
            var path = this.getPath();
            if (path) {
              if (this.hasDomain() && path.charAt(0) != "/") out.push("/");
              out.push(goog.Uri.encodeSpecialChars_(path, path.charAt(0) == "/" ? goog.Uri.reDisallowedInAbsolutePath_ : goog.Uri.reDisallowedInRelativePath_, true))
            }
            var query = this.getEncodedQuery();
            if (query) out.push("?", query);
            var fragment = this.getFragment();
            if (fragment) out.push("#", goog.Uri.encodeSpecialChars_(fragment, goog.Uri.reDisallowedInFragment_));
            return out.join("")
          };
          goog.Uri.prototype.resolve = function (relativeUri) {
            var absoluteUri = this.clone();
            var overridden = relativeUri.hasScheme();
            if (overridden) absoluteUri.setScheme(relativeUri.getScheme()); else overridden = relativeUri.hasUserInfo();
            if (overridden) absoluteUri.setUserInfo(relativeUri.getUserInfo()); else overridden = relativeUri.hasDomain();
            if (overridden) absoluteUri.setDomain(relativeUri.getDomain()); else overridden = relativeUri.hasPort();
            var path = relativeUri.getPath();
            if (overridden) absoluteUri.setPort(relativeUri.getPort());
            else {
              overridden = relativeUri.hasPath();
              if (overridden) {
                if (path.charAt(0) != "/") if (this.hasDomain() && !this.hasPath()) path = "/" + path; else {
                  var lastSlashIndex = absoluteUri.getPath().lastIndexOf("/");
                  if (lastSlashIndex != -1) path = absoluteUri.getPath().substr(0, lastSlashIndex + 1) + path
                }
                path = goog.Uri.removeDotSegments(path)
              }
            }
            if (overridden) absoluteUri.setPath(path); else overridden = relativeUri.hasQuery();
            if (overridden) absoluteUri.setQueryData(relativeUri.getQueryData().clone()); else overridden = relativeUri.hasFragment();
            if (overridden) absoluteUri.setFragment(relativeUri.getFragment());
            return absoluteUri
          };
          goog.Uri.prototype.clone = function () {
            return new goog.Uri(this)
          };
          goog.Uri.prototype.getScheme = function () {
            return this.scheme_
          };
          goog.Uri.prototype.setScheme = function (newScheme, opt_decode) {
            this.enforceReadOnly();
            this.scheme_ = opt_decode ? goog.Uri.decodeOrEmpty_(newScheme, true) : newScheme;
            if (this.scheme_) this.scheme_ = this.scheme_.replace(/:$/, "");
            return this
          };
          goog.Uri.prototype.hasScheme = function () {
            return !!this.scheme_
          };
          goog.Uri.prototype.getUserInfo = function () {
            return this.userInfo_
          };
          goog.Uri.prototype.setUserInfo = function (newUserInfo, opt_decode) {
            this.enforceReadOnly();
            this.userInfo_ = opt_decode ? goog.Uri.decodeOrEmpty_(newUserInfo) : newUserInfo;
            return this
          };
          goog.Uri.prototype.hasUserInfo = function () {
            return !!this.userInfo_
          };
          goog.Uri.prototype.getDomain = function () {
            return this.domain_
          };
          goog.Uri.prototype.setDomain = function (newDomain, opt_decode) {
            this.enforceReadOnly();
            this.domain_ = opt_decode ? goog.Uri.decodeOrEmpty_(newDomain, true) : newDomain;
            return this
          };
          goog.Uri.prototype.hasDomain = function () {
            return !!this.domain_
          };
          goog.Uri.prototype.getPort = function () {
            return this.port_
          };
          goog.Uri.prototype.setPort = function (newPort) {
            this.enforceReadOnly();
            if (newPort) {
              newPort = Number(newPort);
              if (isNaN(newPort) || newPort < 0) throw new Error("Bad port number " + newPort);
              this.port_ = newPort
            } else this.port_ = null;
            return this
          };
          goog.Uri.prototype.hasPort = function () {
            return this.port_ != null
          };
          goog.Uri.prototype.getPath = function () {
            return this.path_
          };
          goog.Uri.prototype.setPath = function (newPath, opt_decode) {
            this.enforceReadOnly();
            this.path_ = opt_decode ? goog.Uri.decodeOrEmpty_(newPath, true) : newPath;
            return this
          };
          goog.Uri.prototype.hasPath = function () {
            return !!this.path_
          };
          goog.Uri.prototype.hasQuery = function () {
            return this.queryData_.toString() !== ""
          };
          goog.Uri.prototype.setQueryData = function (queryData, opt_decode) {
            this.enforceReadOnly();
            if (queryData instanceof goog.Uri.QueryData) {
              this.queryData_ = queryData;
              this.queryData_.setIgnoreCase(this.ignoreCase_)
            } else {
              if (!opt_decode) queryData = goog.Uri.encodeSpecialChars_(queryData, goog.Uri.reDisallowedInQuery_);
              this.queryData_ = new goog.Uri.QueryData(queryData, null, this.ignoreCase_)
            }
            return this
          };
          goog.Uri.prototype.setQuery = function (newQuery, opt_decode) {
            return this.setQueryData(newQuery, opt_decode)
          };
          goog.Uri.prototype.getEncodedQuery = function () {
            return this.queryData_.toString()
          };
          goog.Uri.prototype.getDecodedQuery = function () {
            return this.queryData_.toDecodedString()
          };
          goog.Uri.prototype.getQueryData = function () {
            return this.queryData_
          };
          goog.Uri.prototype.getQuery = function () {
            return this.getEncodedQuery()
          };
          goog.Uri.prototype.setParameterValue = function (key, value) {
            this.enforceReadOnly();
            this.queryData_.set(key, value);
            return this
          };
          goog.Uri.prototype.setParameterValues = function (key, values) {
            this.enforceReadOnly();
            if (!goog.isArray(values)) values = [String(values)];
            this.queryData_.setValues(key, values);
            return this
          };
          goog.Uri.prototype.getParameterValues = function (name) {
            return this.queryData_.getValues(name)
          };
          goog.Uri.prototype.getParameterValue = function (paramName) {
            return this.queryData_.get(paramName)
          };
          goog.Uri.prototype.getFragment = function () {
            return this.fragment_
          };
          goog.Uri.prototype.setFragment = function (newFragment, opt_decode) {
            this.enforceReadOnly();
            this.fragment_ = opt_decode ? goog.Uri.decodeOrEmpty_(newFragment) : newFragment;
            return this
          };
          goog.Uri.prototype.hasFragment = function () {
            return !!this.fragment_
          };
          goog.Uri.prototype.hasSameDomainAs = function (uri2) {
            return (!this.hasDomain() && !uri2.hasDomain() || this.getDomain() == uri2.getDomain()) && (!this.hasPort() && !uri2.hasPort() || this.getPort() == uri2.getPort())
          };
          goog.Uri.prototype.makeUnique = function () {
            this.enforceReadOnly();
            this.setParameterValue(goog.Uri.RANDOM_PARAM, goog.string.getRandomString());
            return this
          };
          goog.Uri.prototype.removeParameter = function (key) {
            this.enforceReadOnly();
            this.queryData_.remove(key);
            return this
          };
          goog.Uri.prototype.setReadOnly = function (isReadOnly) {
            this.isReadOnly_ = isReadOnly;
            return this
          };
          goog.Uri.prototype.isReadOnly = function () {
            return this.isReadOnly_
          };
          goog.Uri.prototype.enforceReadOnly = function () {
            if (this.isReadOnly_) throw new Error("Tried to modify a read-only Uri");
          };
          goog.Uri.prototype.setIgnoreCase = function (ignoreCase) {
            this.ignoreCase_ = ignoreCase;
            if (this.queryData_) this.queryData_.setIgnoreCase(ignoreCase);
            return this
          };
          goog.Uri.prototype.getIgnoreCase = function () {
            return this.ignoreCase_
          };
          goog.Uri.parse = function (uri, opt_ignoreCase) {
            return uri instanceof goog.Uri ? uri.clone() : new goog.Uri(uri, opt_ignoreCase)
          };
          goog.Uri.create = function (opt_scheme, opt_userInfo, opt_domain, opt_port, opt_path, opt_query, opt_fragment, opt_ignoreCase) {
            var uri = new goog.Uri(null, opt_ignoreCase);
            opt_scheme && uri.setScheme(opt_scheme);
            opt_userInfo && uri.setUserInfo(opt_userInfo);
            opt_domain && uri.setDomain(opt_domain);
            opt_port && uri.setPort(opt_port);
            opt_path && uri.setPath(opt_path);
            opt_query && uri.setQueryData(opt_query);
            opt_fragment && uri.setFragment(opt_fragment);
            return uri
          };
          goog.Uri.resolve = function (base, rel) {
            if (!(base instanceof goog.Uri)) base = goog.Uri.parse(base);
            if (!(rel instanceof goog.Uri)) rel = goog.Uri.parse(rel);
            return base.resolve(rel)
          };
          goog.Uri.removeDotSegments = function (path) {
            if (path == ".." || path == ".") return ""; else if (!goog.string.contains(path, "./") && !goog.string.contains(path, "/.")) return path; else {
              var leadingSlash = goog.string.startsWith(path, "/");
              var segments = path.split("/");
              var out = [];
              for (var pos = 0; pos < segments.length;) {
                var segment = segments[pos++];
                if (segment == ".") {
                  if (leadingSlash && pos == segments.length) out.push("")
                } else if (segment == "..") {
                  if (out.length > 1 || out.length == 1 && out[0] != "") out.pop();
                  if (leadingSlash && pos == segments.length) out.push("")
                } else {
                  out.push(segment);
                  leadingSlash = true
                }
              }
              return out.join("/")
            }
          };
          goog.Uri.decodeOrEmpty_ = function (val, opt_preserveReserved) {
            if (!val) return "";
            return opt_preserveReserved ? decodeURI(val.replace(/%25/g, "%2525")) : decodeURIComponent(val)
          };
          goog.Uri.encodeSpecialChars_ = function (unescapedPart, extra, opt_removeDoubleEncoding) {
            if (goog.isString(unescapedPart)) {
              var encoded = encodeURI(unescapedPart).replace(extra, goog.Uri.encodeChar_);
              if (opt_removeDoubleEncoding) encoded = goog.Uri.removeDoubleEncoding_(encoded);
              return encoded
            }
            return null
          };
          goog.Uri.encodeChar_ = function (ch) {
            var n = ch.charCodeAt(0);
            return "%" + (n >> 4 & 15).toString(16) + (n & 15).toString(16)
          };
          goog.Uri.removeDoubleEncoding_ = function (doubleEncodedString) {
            return doubleEncodedString.replace(/%25([0-9a-fA-F]{2})/g, "%$1")
          };
          goog.Uri.reDisallowedInSchemeOrUserInfo_ = /[#\/\?@]/g;
          goog.Uri.reDisallowedInRelativePath_ = /[\#\?:]/g;
          goog.Uri.reDisallowedInAbsolutePath_ = /[\#\?]/g;
          goog.Uri.reDisallowedInQuery_ = /[\#\?@]/g;
          goog.Uri.reDisallowedInFragment_ = /#/g;
          goog.Uri.haveSameDomain = function (uri1String, uri2String) {
            var pieces1 = goog.uri.utils.split(uri1String);
            var pieces2 = goog.uri.utils.split(uri2String);
            return pieces1[goog.uri.utils.ComponentIndex.DOMAIN] == pieces2[goog.uri.utils.ComponentIndex.DOMAIN] && pieces1[goog.uri.utils.ComponentIndex.PORT] == pieces2[goog.uri.utils.ComponentIndex.PORT]
          };
          goog.Uri.QueryData = function (opt_query, opt_uri, opt_ignoreCase) {
            this.keyMap_ = null;
            this.count_ = null;
            this.encodedQuery_ = opt_query || null;
            this.ignoreCase_ = !!opt_ignoreCase
          };
          goog.Uri.QueryData.prototype.ensureKeyMapInitialized_ = function () {
            if (!this.keyMap_) {
              this.keyMap_ = new goog.structs.Map;
              this.count_ = 0;
              if (this.encodedQuery_) {
                var self = this;
                goog.uri.utils.parseQueryData(this.encodedQuery_, function (name, value) {
                  self.add(goog.string.urlDecode(name), value)
                })
              }
            }
          };
          goog.Uri.QueryData.createFromMap = function (map, opt_uri, opt_ignoreCase) {
            var keys = goog.structs.getKeys(map);
            if (typeof keys == "undefined") throw new Error("Keys are undefined");
            var queryData = new goog.Uri.QueryData(null, null, opt_ignoreCase);
            var values = goog.structs.getValues(map);
            for (var i = 0; i < keys.length; i++) {
              var key = keys[i];
              var value = values[i];
              if (!goog.isArray(value)) queryData.add(key, value); else queryData.setValues(key, value)
            }
            return queryData
          };
          goog.Uri.QueryData.createFromKeysValues = function (keys, values, opt_uri, opt_ignoreCase) {
            if (keys.length != values.length) throw new Error("Mismatched lengths for keys/values");
            var queryData = new goog.Uri.QueryData(null, null, opt_ignoreCase);
            for (var i = 0; i < keys.length; i++) queryData.add(keys[i], values[i]);
            return queryData
          };
          goog.Uri.QueryData.prototype.getCount = function () {
            this.ensureKeyMapInitialized_();
            return this.count_
          };
          goog.Uri.QueryData.prototype.add = function (key, value) {
            this.ensureKeyMapInitialized_();
            this.invalidateCache_();
            key = this.getKeyName_(key);
            var values = this.keyMap_.get(key);
            if (!values) this.keyMap_.set(key, values = []);
            values.push(value);
            this.count_ = goog.asserts.assertNumber(this.count_) + 1;
            return this
          };
          goog.Uri.QueryData.prototype.remove = function (key) {
            this.ensureKeyMapInitialized_();
            key = this.getKeyName_(key);
            if (this.keyMap_.containsKey(key)) {
              this.invalidateCache_();
              this.count_ = goog.asserts.assertNumber(this.count_) - this.keyMap_.get(key).length;
              return this.keyMap_.remove(key)
            }
            return false
          };
          goog.Uri.QueryData.prototype.clear = function () {
            this.invalidateCache_();
            this.keyMap_ = null;
            this.count_ = 0
          };
          goog.Uri.QueryData.prototype.isEmpty = function () {
            this.ensureKeyMapInitialized_();
            return this.count_ == 0
          };
          goog.Uri.QueryData.prototype.containsKey = function (key) {
            this.ensureKeyMapInitialized_();
            key = this.getKeyName_(key);
            return this.keyMap_.containsKey(key)
          };
          goog.Uri.QueryData.prototype.containsValue = function (value) {
            var vals = this.getValues();
            return goog.array.contains(vals, value)
          };
          goog.Uri.QueryData.prototype.forEach = function (f, opt_scope) {
            this.ensureKeyMapInitialized_();
            this.keyMap_.forEach(function (values, key) {
              goog.array.forEach(values, function (value) {
                f.call(opt_scope, value, key, this)
              }, this)
            }, this)
          };
          goog.Uri.QueryData.prototype.getKeys = function () {
            this.ensureKeyMapInitialized_();
            var vals = this.keyMap_.getValues();
            var keys = this.keyMap_.getKeys();
            var rv = [];
            for (var i = 0; i < keys.length; i++) {
              var val = vals[i];
              for (var j = 0; j < val.length; j++) rv.push(keys[i])
            }
            return rv
          };
          goog.Uri.QueryData.prototype.getValues = function (opt_key) {
            this.ensureKeyMapInitialized_();
            var rv = [];
            if (goog.isString(opt_key)) {
              if (this.containsKey(opt_key)) rv = goog.array.concat(rv, this.keyMap_.get(this.getKeyName_(opt_key)))
            } else {
              var values = this.keyMap_.getValues();
              for (var i = 0; i < values.length; i++) rv = goog.array.concat(rv, values[i])
            }
            return rv
          };
          goog.Uri.QueryData.prototype.set = function (key, value) {
            this.ensureKeyMapInitialized_();
            this.invalidateCache_();
            key = this.getKeyName_(key);
            if (this.containsKey(key)) this.count_ = goog.asserts.assertNumber(this.count_) - this.keyMap_.get(key).length;
            this.keyMap_.set(key, [value]);
            this.count_ = goog.asserts.assertNumber(this.count_) + 1;
            return this
          };
          goog.Uri.QueryData.prototype.get = function (key, opt_default) {
            var values = key ? this.getValues(key) : [];
            if (goog.Uri.preserveParameterTypesCompatibilityFlag) return values.length > 0 ? values[0] : opt_default; else return values.length > 0 ? String(values[0]) : opt_default
          };
          goog.Uri.QueryData.prototype.setValues = function (key, values) {
            this.remove(key);
            if (values.length > 0) {
              this.invalidateCache_();
              this.keyMap_.set(this.getKeyName_(key), goog.array.clone(values));
              this.count_ = goog.asserts.assertNumber(this.count_) + values.length
            }
          };
          goog.Uri.QueryData.prototype.toString = function () {
            if (this.encodedQuery_) return this.encodedQuery_;
            if (!this.keyMap_) return "";
            var sb = [];
            var keys = this.keyMap_.getKeys();
            for (var i = 0; i < keys.length; i++) {
              var key = keys[i];
              var encodedKey = goog.string.urlEncode(key);
              var val = this.getValues(key);
              for (var j = 0; j < val.length; j++) {
                var param = encodedKey;
                if (val[j] !== "") param += "=" + goog.string.urlEncode(val[j]);
                sb.push(param)
              }
            }
            return this.encodedQuery_ = sb.join("&")
          };
          goog.Uri.QueryData.prototype.toDecodedString = function () {
            return goog.Uri.decodeOrEmpty_(this.toString())
          };
          goog.Uri.QueryData.prototype.invalidateCache_ = function () {
            this.encodedQuery_ = null
          };
          goog.Uri.QueryData.prototype.filterKeys = function (keys) {
            this.ensureKeyMapInitialized_();
            this.keyMap_.forEach(function (value, key) {
              if (!goog.array.contains(keys, key)) this.remove(key)
            }, this);
            return this
          };
          goog.Uri.QueryData.prototype.clone = function () {
            var rv = new goog.Uri.QueryData;
            rv.encodedQuery_ = this.encodedQuery_;
            if (this.keyMap_) {
              rv.keyMap_ = this.keyMap_.clone();
              rv.count_ = this.count_
            }
            return rv
          };
          goog.Uri.QueryData.prototype.getKeyName_ = function (arg) {
            var keyName = String(arg);
            if (this.ignoreCase_) keyName = keyName.toLowerCase();
            return keyName
          };
          goog.Uri.QueryData.prototype.setIgnoreCase = function (ignoreCase) {
            var resetKeys = ignoreCase && !this.ignoreCase_;
            if (resetKeys) {
              this.ensureKeyMapInitialized_();
              this.invalidateCache_();
              this.keyMap_.forEach(function (value, key) {
                var lowerCase = key.toLowerCase();
                if (key != lowerCase) {
                  this.remove(key);
                  this.setValues(lowerCase, value)
                }
              }, this)
            }
            this.ignoreCase_ = ignoreCase
          };
          goog.Uri.QueryData.prototype.extend = function (var_args) {
            for (var i = 0; i < arguments.length; i++) {
              var data = arguments[i];
              goog.structs.forEach(data, function (value, key) {
                this.add(key, value)
              }, this)
            }
          };
          goog.provide("goog.json.hybrid");
          goog.require("goog.asserts");
          goog.require("goog.json");
          goog.json.hybrid.stringify = goog.json.USE_NATIVE_JSON ? goog.global["JSON"]["stringify"] : function (obj) {
            if (goog.global.JSON) try {
              return goog.global.JSON.stringify(obj)
            } catch (e) {
            }
            return goog.json.serialize(obj)
          };
          goog.json.hybrid.parse_ = function (jsonString, fallbackParser) {
            if (goog.global.JSON) try {
              var obj = goog.global.JSON.parse(jsonString);
              goog.asserts.assert(typeof obj == "object");
              return obj
            } catch (e) {
            }
            return fallbackParser(jsonString)
          };
          goog.json.hybrid.parse = goog.json.USE_NATIVE_JSON ? goog.global["JSON"]["parse"] : function (jsonString) {
            return goog.json.hybrid.parse_(jsonString, goog.json.parse)
          };
          goog.provide("goog.net.ErrorCode");
          goog.net.ErrorCode = {
            NO_ERROR: 0,
            ACCESS_DENIED: 1,
            FILE_NOT_FOUND: 2,
            FF_SILENT_ERROR: 3,
            CUSTOM_ERROR: 4,
            EXCEPTION: 5,
            HTTP_ERROR: 6,
            ABORT: 7,
            TIMEOUT: 8,
            OFFLINE: 9
          };
          goog.net.ErrorCode.getDebugMessage = function (errorCode) {
            switch (errorCode) {
              case goog.net.ErrorCode.NO_ERROR:
                return "No Error";
              case goog.net.ErrorCode.ACCESS_DENIED:
                return "Access denied to content document";
              case goog.net.ErrorCode.FILE_NOT_FOUND:
                return "File not found";
              case goog.net.ErrorCode.FF_SILENT_ERROR:
                return "Firefox silently errored";
              case goog.net.ErrorCode.CUSTOM_ERROR:
                return "Application custom error";
              case goog.net.ErrorCode.EXCEPTION:
                return "An exception occurred";
              case goog.net.ErrorCode.HTTP_ERROR:
                return "Http response at 400 or 500 level";
              case goog.net.ErrorCode.ABORT:
                return "Request was aborted";
              case goog.net.ErrorCode.TIMEOUT:
                return "Request timed out";
              case goog.net.ErrorCode.OFFLINE:
                return "The resource is not available offline";
              default:
                return "Unrecognized error code"
            }
          };
          goog.provide("goog.net.EventType");
          goog.net.EventType = {
            COMPLETE: "complete",
            SUCCESS: "success",
            ERROR: "error",
            ABORT: "abort",
            READY: "ready",
            READY_STATE_CHANGE: "readystatechange",
            TIMEOUT: "timeout",
            INCREMENTAL_DATA: "incrementaldata",
            PROGRESS: "progress",
            DOWNLOAD_PROGRESS: "downloadprogress",
            UPLOAD_PROGRESS: "uploadprogress"
          };
          goog.provide("goog.net.HttpStatus");
          goog.net.HttpStatus = {
            CONTINUE: 100,
            SWITCHING_PROTOCOLS: 101,
            OK: 200,
            CREATED: 201,
            ACCEPTED: 202,
            NON_AUTHORITATIVE_INFORMATION: 203,
            NO_CONTENT: 204,
            RESET_CONTENT: 205,
            PARTIAL_CONTENT: 206,
            MULTIPLE_CHOICES: 300,
            MOVED_PERMANENTLY: 301,
            FOUND: 302,
            SEE_OTHER: 303,
            NOT_MODIFIED: 304,
            USE_PROXY: 305,
            TEMPORARY_REDIRECT: 307,
            BAD_REQUEST: 400,
            UNAUTHORIZED: 401,
            PAYMENT_REQUIRED: 402,
            FORBIDDEN: 403,
            NOT_FOUND: 404,
            METHOD_NOT_ALLOWED: 405,
            NOT_ACCEPTABLE: 406,
            PROXY_AUTHENTICATION_REQUIRED: 407,
            REQUEST_TIMEOUT: 408,
            CONFLICT: 409,
            GONE: 410,
            LENGTH_REQUIRED: 411,
            PRECONDITION_FAILED: 412,
            REQUEST_ENTITY_TOO_LARGE: 413,
            REQUEST_URI_TOO_LONG: 414,
            UNSUPPORTED_MEDIA_TYPE: 415,
            REQUEST_RANGE_NOT_SATISFIABLE: 416,
            EXPECTATION_FAILED: 417,
            PRECONDITION_REQUIRED: 428,
            TOO_MANY_REQUESTS: 429,
            REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
            INTERNAL_SERVER_ERROR: 500,
            NOT_IMPLEMENTED: 501,
            BAD_GATEWAY: 502,
            SERVICE_UNAVAILABLE: 503,
            GATEWAY_TIMEOUT: 504,
            HTTP_VERSION_NOT_SUPPORTED: 505,
            NETWORK_AUTHENTICATION_REQUIRED: 511,
            QUIRK_IE_NO_CONTENT: 1223
          };
          goog.net.HttpStatus.isSuccess = function (status) {
            switch (status) {
              case goog.net.HttpStatus.OK:
              case goog.net.HttpStatus.CREATED:
              case goog.net.HttpStatus.ACCEPTED:
              case goog.net.HttpStatus.NO_CONTENT:
              case goog.net.HttpStatus.PARTIAL_CONTENT:
              case goog.net.HttpStatus.NOT_MODIFIED:
              case goog.net.HttpStatus.QUIRK_IE_NO_CONTENT:
                return true;
              default:
                return false
            }
          };
          goog.provide("goog.net.XhrLike");
          goog.net.XhrLike = function () {
          };
          goog.net.XhrLike.OrNative;
          goog.net.XhrLike.prototype.onreadystatechange;
          goog.net.XhrLike.prototype.responseText;
          goog.net.XhrLike.prototype.responseXML;
          goog.net.XhrLike.prototype.readyState;
          goog.net.XhrLike.prototype.status;
          goog.net.XhrLike.prototype.statusText;
          goog.net.XhrLike.prototype.open = function (method, url, opt_async, opt_user, opt_password) {
          };
          goog.net.XhrLike.prototype.send = function (opt_data) {
          };
          goog.net.XhrLike.prototype.abort = function () {
          };
          goog.net.XhrLike.prototype.setRequestHeader = function (header, value) {
          };
          goog.net.XhrLike.prototype.getResponseHeader = function (header) {
          };
          goog.net.XhrLike.prototype.getAllResponseHeaders = function () {
          };
          goog.provide("goog.net.XmlHttpFactory");
          goog.require("goog.net.XhrLike");
          goog.net.XmlHttpFactory = function () {
          };
          goog.net.XmlHttpFactory.prototype.cachedOptions_ = null;
          goog.net.XmlHttpFactory.prototype.createInstance = goog.abstractMethod;
          goog.net.XmlHttpFactory.prototype.getOptions = function () {
            return this.cachedOptions_ || (this.cachedOptions_ = this.internalGetOptions())
          };
          goog.net.XmlHttpFactory.prototype.internalGetOptions = goog.abstractMethod;
          goog.provide("goog.net.WrapperXmlHttpFactory");
          goog.require("goog.net.XhrLike");
          goog.require("goog.net.XmlHttpFactory");
          goog.net.WrapperXmlHttpFactory = function (xhrFactory, optionsFactory) {
            goog.net.XmlHttpFactory.call(this);
            this.xhrFactory_ = xhrFactory;
            this.optionsFactory_ = optionsFactory
          };
          goog.inherits(goog.net.WrapperXmlHttpFactory, goog.net.XmlHttpFactory);
          goog.net.WrapperXmlHttpFactory.prototype.createInstance = function () {
            return this.xhrFactory_()
          };
          goog.net.WrapperXmlHttpFactory.prototype.getOptions = function () {
            return this.optionsFactory_()
          };
          goog.provide("goog.net.DefaultXmlHttpFactory");
          goog.provide("goog.net.XmlHttp");
          goog.provide("goog.net.XmlHttp.OptionType");
          goog.provide("goog.net.XmlHttp.ReadyState");
          goog.provide("goog.net.XmlHttpDefines");
          goog.require("goog.asserts");
          goog.require("goog.net.WrapperXmlHttpFactory");
          goog.require("goog.net.XmlHttpFactory");
          goog.net.XmlHttp = function () {
            return goog.net.XmlHttp.factory_.createInstance()
          };
          goog.define("goog.net.XmlHttp.ASSUME_NATIVE_XHR", false);
          goog.net.XmlHttpDefines = {};
          goog.define("goog.net.XmlHttpDefines.ASSUME_NATIVE_XHR", false);
          goog.net.XmlHttp.getOptions = function () {
            return goog.net.XmlHttp.factory_.getOptions()
          };
          goog.net.XmlHttp.OptionType = {USE_NULL_FUNCTION: 0, LOCAL_REQUEST_ERROR: 1};
          goog.net.XmlHttp.ReadyState = {UNINITIALIZED: 0, LOADING: 1, LOADED: 2, INTERACTIVE: 3, COMPLETE: 4};
          goog.net.XmlHttp.factory_;
          goog.net.XmlHttp.setFactory = function (factory, optionsFactory) {
            goog.net.XmlHttp.setGlobalFactory(new goog.net.WrapperXmlHttpFactory(goog.asserts.assert(factory), goog.asserts.assert(optionsFactory)))
          };
          goog.net.XmlHttp.setGlobalFactory = function (factory) {
            goog.net.XmlHttp.factory_ = factory
          };
          goog.net.DefaultXmlHttpFactory = function () {
            goog.net.XmlHttpFactory.call(this)
          };
          goog.inherits(goog.net.DefaultXmlHttpFactory, goog.net.XmlHttpFactory);
          goog.net.DefaultXmlHttpFactory.prototype.createInstance = function () {
            var progId = this.getProgId_();
            if (progId) return new ActiveXObject(progId); else return new XMLHttpRequest
          };
          goog.net.DefaultXmlHttpFactory.prototype.internalGetOptions = function () {
            var progId = this.getProgId_();
            var options = {};
            if (progId) {
              options[goog.net.XmlHttp.OptionType.USE_NULL_FUNCTION] = true;
              options[goog.net.XmlHttp.OptionType.LOCAL_REQUEST_ERROR] = true
            }
            return options
          };
          goog.net.DefaultXmlHttpFactory.prototype.ieProgId_;
          goog.net.DefaultXmlHttpFactory.prototype.getProgId_ = function () {
            if (goog.net.XmlHttp.ASSUME_NATIVE_XHR || goog.net.XmlHttpDefines.ASSUME_NATIVE_XHR) return "";
            if (!this.ieProgId_ && typeof XMLHttpRequest == "undefined" && typeof ActiveXObject != "undefined") {
              var ACTIVE_X_IDENTS = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"];
              for (var i = 0; i < ACTIVE_X_IDENTS.length; i++) {
                var candidate = ACTIVE_X_IDENTS[i];
                try {
                  new ActiveXObject(candidate);
                  this.ieProgId_ = candidate;
                  return candidate
                } catch (e) {
                }
              }
              throw new Error("Could not create ActiveXObject. ActiveX might be disabled," +
                " or MSXML might not be installed");
            }
            return this.ieProgId_
          };
          goog.net.XmlHttp.setGlobalFactory(new goog.net.DefaultXmlHttpFactory);
          goog.provide("goog.net.XhrIo");
          goog.provide("goog.net.XhrIo.ResponseType");
          goog.require("goog.Timer");
          goog.require("goog.array");
          goog.require("goog.asserts");
          goog.require("goog.debug.entryPointRegistry");
          goog.require("goog.events.EventTarget");
          goog.require("goog.json.hybrid");
          goog.require("goog.log");
          goog.require("goog.net.ErrorCode");
          goog.require("goog.net.EventType");
          goog.require("goog.net.HttpStatus");
          goog.require("goog.net.XmlHttp");
          goog.require("goog.string");
          goog.require("goog.structs");
          goog.require("goog.structs.Map");
          goog.require("goog.uri.utils");
          goog.require("goog.userAgent");
          goog.forwardDeclare("goog.Uri");
          goog.net.XhrIo = function (opt_xmlHttpFactory) {
            goog.net.XhrIo.base(this, "constructor");
            this.headers = new goog.structs.Map;
            this.xmlHttpFactory_ = opt_xmlHttpFactory || null;
            this.active_ = false;
            this.xhr_ = null;
            this.xhrOptions_ = null;
            this.lastUri_ = "";
            this.lastMethod_ = "";
            this.lastErrorCode_ = goog.net.ErrorCode.NO_ERROR;
            this.lastError_ = "";
            this.errorDispatched_ = false;
            this.inSend_ = false;
            this.inOpen_ = false;
            this.inAbort_ = false;
            this.timeoutInterval_ = 0;
            this.timeoutId_ = null;
            this.responseType_ = goog.net.XhrIo.ResponseType.DEFAULT;
            this.withCredentials_ = false;
            this.progressEventsEnabled_ = false;
            this.useXhr2Timeout_ = false
          };
          goog.inherits(goog.net.XhrIo, goog.events.EventTarget);
          goog.net.XhrIo.ResponseType = {
            DEFAULT: "",
            TEXT: "text",
            DOCUMENT: "document",
            BLOB: "blob",
            ARRAY_BUFFER: "arraybuffer"
          };
          goog.net.XhrIo.prototype.logger_ = goog.log.getLogger("goog.net.XhrIo");
          goog.net.XhrIo.CONTENT_TYPE_HEADER = "Content-Type";
          goog.net.XhrIo.CONTENT_TRANSFER_ENCODING = "Content-Transfer-Encoding";
          goog.net.XhrIo.HTTP_SCHEME_PATTERN = /^https?$/i;
          goog.net.XhrIo.METHODS_WITH_FORM_DATA = ["POST", "PUT"];
          goog.net.XhrIo.FORM_CONTENT_TYPE = "application/x-www-form-urlencoded;charset=utf-8";
          goog.net.XhrIo.XHR2_TIMEOUT_ = "timeout";
          goog.net.XhrIo.XHR2_ON_TIMEOUT_ = "ontimeout";
          goog.net.XhrIo.sendInstances_ = [];
          goog.net.XhrIo.send = function (url, opt_callback, opt_method, opt_content, opt_headers, opt_timeoutInterval, opt_withCredentials) {
            var x = new goog.net.XhrIo;
            goog.net.XhrIo.sendInstances_.push(x);
            if (opt_callback) x.listen(goog.net.EventType.COMPLETE, opt_callback);
            x.listenOnce(goog.net.EventType.READY, x.cleanupSend_);
            if (opt_timeoutInterval) x.setTimeoutInterval(opt_timeoutInterval);
            if (opt_withCredentials) x.setWithCredentials(opt_withCredentials);
            x.send(url, opt_method, opt_content, opt_headers);
            return x
          };
          goog.net.XhrIo.cleanup = function () {
            var instances = goog.net.XhrIo.sendInstances_;
            while (instances.length) instances.pop().dispose()
          };
          goog.net.XhrIo.protectEntryPoints = function (errorHandler) {
            goog.net.XhrIo.prototype.onReadyStateChangeEntryPoint_ = errorHandler.protectEntryPoint(goog.net.XhrIo.prototype.onReadyStateChangeEntryPoint_)
          };
          goog.net.XhrIo.prototype.cleanupSend_ = function () {
            this.dispose();
            goog.array.remove(goog.net.XhrIo.sendInstances_, this)
          };
          goog.net.XhrIo.prototype.getTimeoutInterval = function () {
            return this.timeoutInterval_
          };
          goog.net.XhrIo.prototype.setTimeoutInterval = function (ms) {
            this.timeoutInterval_ = Math.max(0, ms)
          };
          goog.net.XhrIo.prototype.setResponseType = function (type) {
            this.responseType_ = type
          };
          goog.net.XhrIo.prototype.getResponseType = function () {
            return this.responseType_
          };
          goog.net.XhrIo.prototype.setWithCredentials = function (withCredentials) {
            this.withCredentials_ = withCredentials
          };
          goog.net.XhrIo.prototype.getWithCredentials = function () {
            return this.withCredentials_
          };
          goog.net.XhrIo.prototype.setProgressEventsEnabled = function (enabled) {
            this.progressEventsEnabled_ = enabled
          };
          goog.net.XhrIo.prototype.getProgressEventsEnabled = function () {
            return this.progressEventsEnabled_
          };
          goog.net.XhrIo.prototype.send = function (url, opt_method, opt_content, opt_headers) {
            if (this.xhr_) throw new Error("[goog.net.XhrIo] Object is active with another request=" + this.lastUri_ + "; newUri=" + url);
            var method = opt_method ? opt_method.toUpperCase() : "GET";
            this.lastUri_ = url;
            this.lastError_ = "";
            this.lastErrorCode_ = goog.net.ErrorCode.NO_ERROR;
            this.lastMethod_ = method;
            this.errorDispatched_ = false;
            this.active_ = true;
            this.xhr_ = this.createXhr();
            this.xhrOptions_ = this.xmlHttpFactory_ ? this.xmlHttpFactory_.getOptions() :
              goog.net.XmlHttp.getOptions();
            this.xhr_.onreadystatechange = goog.bind(this.onReadyStateChange_, this);
            if (this.getProgressEventsEnabled() && "onprogress" in this.xhr_) {
              this.xhr_.onprogress = goog.bind(function (e) {
                this.onProgressHandler_(e, true)
              }, this);
              if (this.xhr_.upload) this.xhr_.upload.onprogress = goog.bind(this.onProgressHandler_, this)
            }
            try {
              goog.log.fine(this.logger_, this.formatMsg_("Opening Xhr"));
              this.inOpen_ = true;
              this.xhr_.open(method, String(url), true);
              this.inOpen_ = false
            } catch (err) {
              goog.log.fine(this.logger_,
                this.formatMsg_("Error opening Xhr: " + err.message));
              this.error_(goog.net.ErrorCode.EXCEPTION, err);
              return
            }
            var content = opt_content || "";
            var headers = this.headers.clone();
            if (opt_headers) goog.structs.forEach(opt_headers, function (value, key) {
              headers.set(key, value)
            });
            var contentTypeKey = goog.array.find(headers.getKeys(), goog.net.XhrIo.isContentTypeHeader_);
            var contentIsFormData = goog.global["FormData"] && content instanceof goog.global["FormData"];
            if (goog.array.contains(goog.net.XhrIo.METHODS_WITH_FORM_DATA, method) &&
              !contentTypeKey && !contentIsFormData) headers.set(goog.net.XhrIo.CONTENT_TYPE_HEADER, goog.net.XhrIo.FORM_CONTENT_TYPE);
            headers.forEach(function (value, key) {
              this.xhr_.setRequestHeader(key, value)
            }, this);
            if (this.responseType_) this.xhr_.responseType = this.responseType_;
            if ("withCredentials" in this.xhr_ && this.xhr_.withCredentials !== this.withCredentials_) this.xhr_.withCredentials = this.withCredentials_;
            try {
              this.cleanUpTimeoutTimer_();
              if (this.timeoutInterval_ > 0) {
                this.useXhr2Timeout_ = goog.net.XhrIo.shouldUseXhr2Timeout_(this.xhr_);
                goog.log.fine(this.logger_, this.formatMsg_("Will abort after " + this.timeoutInterval_ + "ms if incomplete, xhr2 " + this.useXhr2Timeout_));
                if (this.useXhr2Timeout_) {
                  this.xhr_[goog.net.XhrIo.XHR2_TIMEOUT_] = this.timeoutInterval_;
                  this.xhr_[goog.net.XhrIo.XHR2_ON_TIMEOUT_] = goog.bind(this.timeout_, this)
                } else this.timeoutId_ = goog.Timer.callOnce(this.timeout_, this.timeoutInterval_, this)
              }
              goog.log.fine(this.logger_, this.formatMsg_("Sending request"));
              this.inSend_ = true;
              this.xhr_.send(content);
              this.inSend_ = false
            } catch (err$3) {
              goog.log.fine(this.logger_,
                this.formatMsg_("Send error: " + err$3.message));
              this.error_(goog.net.ErrorCode.EXCEPTION, err$3)
            }
          };
          goog.net.XhrIo.shouldUseXhr2Timeout_ = function (xhr) {
            return goog.userAgent.IE && goog.userAgent.isVersionOrHigher(9) && goog.isNumber(xhr[goog.net.XhrIo.XHR2_TIMEOUT_]) && goog.isDef(xhr[goog.net.XhrIo.XHR2_ON_TIMEOUT_])
          };
          goog.net.XhrIo.isContentTypeHeader_ = function (header) {
            return goog.string.caseInsensitiveEquals(goog.net.XhrIo.CONTENT_TYPE_HEADER, header)
          };
          goog.net.XhrIo.prototype.createXhr = function () {
            return this.xmlHttpFactory_ ? this.xmlHttpFactory_.createInstance() : goog.net.XmlHttp()
          };
          goog.net.XhrIo.prototype.timeout_ = function () {
            if (typeof goog == "undefined") ; else if (this.xhr_) {
              this.lastError_ = "Timed out after " + this.timeoutInterval_ + "ms, aborting";
              this.lastErrorCode_ = goog.net.ErrorCode.TIMEOUT;
              goog.log.fine(this.logger_, this.formatMsg_(this.lastError_));
              this.dispatchEvent(goog.net.EventType.TIMEOUT);
              this.abort(goog.net.ErrorCode.TIMEOUT)
            }
          };
          goog.net.XhrIo.prototype.error_ = function (errorCode, err) {
            this.active_ = false;
            if (this.xhr_) {
              this.inAbort_ = true;
              this.xhr_.abort();
              this.inAbort_ = false
            }
            this.lastError_ = err;
            this.lastErrorCode_ = errorCode;
            this.dispatchErrors_();
            this.cleanUpXhr_()
          };
          goog.net.XhrIo.prototype.dispatchErrors_ = function () {
            if (!this.errorDispatched_) {
              this.errorDispatched_ = true;
              this.dispatchEvent(goog.net.EventType.COMPLETE);
              this.dispatchEvent(goog.net.EventType.ERROR)
            }
          };
          goog.net.XhrIo.prototype.abort = function (opt_failureCode) {
            if (this.xhr_ && this.active_) {
              goog.log.fine(this.logger_, this.formatMsg_("Aborting"));
              this.active_ = false;
              this.inAbort_ = true;
              this.xhr_.abort();
              this.inAbort_ = false;
              this.lastErrorCode_ = opt_failureCode || goog.net.ErrorCode.ABORT;
              this.dispatchEvent(goog.net.EventType.COMPLETE);
              this.dispatchEvent(goog.net.EventType.ABORT);
              this.cleanUpXhr_()
            }
          };
          goog.net.XhrIo.prototype.disposeInternal = function () {
            if (this.xhr_) {
              if (this.active_) {
                this.active_ = false;
                this.inAbort_ = true;
                this.xhr_.abort();
                this.inAbort_ = false
              }
              this.cleanUpXhr_(true)
            }
            goog.net.XhrIo.base(this, "disposeInternal")
          };
          goog.net.XhrIo.prototype.onReadyStateChange_ = function () {
            if (this.isDisposed()) return;
            if (!this.inOpen_ && !this.inSend_ && !this.inAbort_) this.onReadyStateChangeEntryPoint_(); else this.onReadyStateChangeHelper_()
          };
          goog.net.XhrIo.prototype.onReadyStateChangeEntryPoint_ = function () {
            this.onReadyStateChangeHelper_()
          };
          goog.net.XhrIo.prototype.onReadyStateChangeHelper_ = function () {
            if (!this.active_) return;
            if (typeof goog == "undefined") ; else if (this.xhrOptions_[goog.net.XmlHttp.OptionType.LOCAL_REQUEST_ERROR] && this.getReadyState() == goog.net.XmlHttp.ReadyState.COMPLETE && this.getStatus() == 2) goog.log.fine(this.logger_, this.formatMsg_("Local request error detected and ignored")); else {
              if (this.inSend_ && this.getReadyState() == goog.net.XmlHttp.ReadyState.COMPLETE) {
                goog.Timer.callOnce(this.onReadyStateChange_, 0, this);
                return
              }
              this.dispatchEvent(goog.net.EventType.READY_STATE_CHANGE);
              if (this.isComplete()) {
                goog.log.fine(this.logger_, this.formatMsg_("Request complete"));
                this.active_ = false;
                try {
                  if (this.isSuccess()) {
                    this.dispatchEvent(goog.net.EventType.COMPLETE);
                    this.dispatchEvent(goog.net.EventType.SUCCESS)
                  } else {
                    this.lastErrorCode_ = goog.net.ErrorCode.HTTP_ERROR;
                    this.lastError_ = this.getStatusText() + " [" + this.getStatus() + "]";
                    this.dispatchErrors_()
                  }
                } finally {
                  this.cleanUpXhr_()
                }
              }
            }
          };
          goog.net.XhrIo.prototype.onProgressHandler_ = function (e, opt_isDownload) {
            goog.asserts.assert(e.type === goog.net.EventType.PROGRESS, "goog.net.EventType.PROGRESS is of the same type as raw XHR progress.");
            this.dispatchEvent(goog.net.XhrIo.buildProgressEvent_(e, goog.net.EventType.PROGRESS));
            this.dispatchEvent(goog.net.XhrIo.buildProgressEvent_(e, opt_isDownload ? goog.net.EventType.DOWNLOAD_PROGRESS : goog.net.EventType.UPLOAD_PROGRESS))
          };
          goog.net.XhrIo.buildProgressEvent_ = function (e, eventType) {
            return {type: eventType, lengthComputable: e.lengthComputable, loaded: e.loaded, total: e.total}
          };
          goog.net.XhrIo.prototype.cleanUpXhr_ = function (opt_fromDispose) {
            if (this.xhr_) {
              this.cleanUpTimeoutTimer_();
              var xhr = this.xhr_;
              var clearedOnReadyStateChange = this.xhrOptions_[goog.net.XmlHttp.OptionType.USE_NULL_FUNCTION] ? goog.nullFunction : null;
              this.xhr_ = null;
              this.xhrOptions_ = null;
              if (!opt_fromDispose) this.dispatchEvent(goog.net.EventType.READY);
              try {
                xhr.onreadystatechange = clearedOnReadyStateChange
              } catch (e) {
                goog.log.error(this.logger_, "Problem encountered resetting onreadystatechange: " + e.message)
              }
            }
          };
          goog.net.XhrIo.prototype.cleanUpTimeoutTimer_ = function () {
            if (this.xhr_ && this.useXhr2Timeout_) this.xhr_[goog.net.XhrIo.XHR2_ON_TIMEOUT_] = null;
            if (goog.isNumber(this.timeoutId_)) {
              goog.Timer.clear(this.timeoutId_);
              this.timeoutId_ = null
            }
          };
          goog.net.XhrIo.prototype.isActive = function () {
            return !!this.xhr_
          };
          goog.net.XhrIo.prototype.isComplete = function () {
            return this.getReadyState() == goog.net.XmlHttp.ReadyState.COMPLETE
          };
          goog.net.XhrIo.prototype.isSuccess = function () {
            var status = this.getStatus();
            return goog.net.HttpStatus.isSuccess(status) || status === 0 && !this.isLastUriEffectiveSchemeHttp_()
          };
          goog.net.XhrIo.prototype.isLastUriEffectiveSchemeHttp_ = function () {
            var scheme = goog.uri.utils.getEffectiveScheme(String(this.lastUri_));
            return goog.net.XhrIo.HTTP_SCHEME_PATTERN.test(scheme)
          };
          goog.net.XhrIo.prototype.getReadyState = function () {
            return this.xhr_ ? this.xhr_.readyState : goog.net.XmlHttp.ReadyState.UNINITIALIZED
          };
          goog.net.XhrIo.prototype.getStatus = function () {
            try {
              return this.getReadyState() > goog.net.XmlHttp.ReadyState.LOADED ? this.xhr_.status : -1
            } catch (e) {
              return -1
            }
          };
          goog.net.XhrIo.prototype.getStatusText = function () {
            try {
              return this.getReadyState() > goog.net.XmlHttp.ReadyState.LOADED ? this.xhr_.statusText : ""
            } catch (e) {
              goog.log.fine(this.logger_, "Can not get status: " + e.message);
              return ""
            }
          };
          goog.net.XhrIo.prototype.getLastUri = function () {
            return String(this.lastUri_)
          };
          goog.net.XhrIo.prototype.getResponseText = function () {
            try {
              return this.xhr_ ? this.xhr_.responseText : ""
            } catch (e) {
              goog.log.fine(this.logger_, "Can not get responseText: " + e.message);
              return ""
            }
          };
          goog.net.XhrIo.prototype.getResponseBody = function () {
            try {
              if (this.xhr_ && "responseBody" in this.xhr_) return this.xhr_["responseBody"]
            } catch (e) {
              goog.log.fine(this.logger_, "Can not get responseBody: " + e.message)
            }
            return null
          };
          goog.net.XhrIo.prototype.getResponseXml = function () {
            try {
              return this.xhr_ ? this.xhr_.responseXML : null
            } catch (e) {
              goog.log.fine(this.logger_, "Can not get responseXML: " + e.message);
              return null
            }
          };
          goog.net.XhrIo.prototype.getResponseJson = function (opt_xssiPrefix) {
            if (!this.xhr_) return undefined;
            var responseText = this.xhr_.responseText;
            if (opt_xssiPrefix && responseText.indexOf(opt_xssiPrefix) == 0) responseText = responseText.substring(opt_xssiPrefix.length);
            return goog.json.hybrid.parse(responseText)
          };
          goog.net.XhrIo.prototype.getResponse = function () {
            try {
              if (!this.xhr_) return null;
              if ("response" in this.xhr_) return this.xhr_.response;
              switch (this.responseType_) {
                case goog.net.XhrIo.ResponseType.DEFAULT:
                case goog.net.XhrIo.ResponseType.TEXT:
                  return this.xhr_.responseText;
                case goog.net.XhrIo.ResponseType.ARRAY_BUFFER:
                  if ("mozResponseArrayBuffer" in this.xhr_) return this.xhr_.mozResponseArrayBuffer
              }
              goog.log.error(this.logger_, "Response type " + this.responseType_ + " is not " + "supported on this browser");
              return null
            } catch (e) {
              goog.log.fine(this.logger_,
                "Can not get response: " + e.message);
              return null
            }
          };
          goog.net.XhrIo.prototype.getResponseHeader = function (key) {
            if (!this.xhr_ || !this.isComplete()) return undefined;
            var value = this.xhr_.getResponseHeader(key);
            return goog.isNull(value) ? undefined : value
          };
          goog.net.XhrIo.prototype.getAllResponseHeaders = function () {
            return this.xhr_ && this.isComplete() ? this.xhr_.getAllResponseHeaders() : ""
          };
          goog.net.XhrIo.prototype.getResponseHeaders = function () {
            var headersObject = {};
            var headersArray = this.getAllResponseHeaders().split("\r\n");
            for (var i = 0; i < headersArray.length; i++) {
              if (goog.string.isEmptyOrWhitespace(headersArray[i])) continue;
              var keyValue = goog.string.splitLimit(headersArray[i], ": ", 2);
              if (headersObject[keyValue[0]]) headersObject[keyValue[0]] += ", " + keyValue[1]; else headersObject[keyValue[0]] = keyValue[1]
            }
            return headersObject
          };
          goog.net.XhrIo.prototype.getStreamingResponseHeader = function (key) {
            return this.xhr_ ? this.xhr_.getResponseHeader(key) : null
          };
          goog.net.XhrIo.prototype.getAllStreamingResponseHeaders = function () {
            return this.xhr_ ? this.xhr_.getAllResponseHeaders() : ""
          };
          goog.net.XhrIo.prototype.getLastErrorCode = function () {
            return this.lastErrorCode_
          };
          goog.net.XhrIo.prototype.getLastError = function () {
            return goog.isString(this.lastError_) ? this.lastError_ : String(this.lastError_)
          };
          goog.net.XhrIo.prototype.formatMsg_ = function (msg) {
            return msg + " [" + this.lastMethod_ + " " + this.lastUri_ + " " + this.getStatus() + "]"
          };
          goog.debug.entryPointRegistry.register(function (transformer) {
            goog.net.XhrIo.prototype.onReadyStateChangeEntryPoint_ = transformer(goog.net.XhrIo.prototype.onReadyStateChangeEntryPoint_)
          });
          goog.provide("goog.format.EmailAddress");
          goog.require("goog.string");
          goog.format.EmailAddress = function (opt_address, opt_name) {
            this.name_ = opt_name || "";
            this.address = opt_address || ""
          };
          goog.format.EmailAddress.OPENERS_ = '"<([';
          goog.format.EmailAddress.CLOSERS_ = '">)]';
          goog.format.EmailAddress.SPECIAL_CHARS = '()<>@:\\".[]';
          goog.format.EmailAddress.ADDRESS_SEPARATORS_ = ",;";
          goog.format.EmailAddress.CHARS_REQUIRE_QUOTES_ = goog.format.EmailAddress.SPECIAL_CHARS + goog.format.EmailAddress.ADDRESS_SEPARATORS_;
          goog.format.EmailAddress.ALL_DOUBLE_QUOTES_ = /\"/g;
          goog.format.EmailAddress.ESCAPED_DOUBLE_QUOTES_ = /\\\"/g;
          goog.format.EmailAddress.ALL_BACKSLASHES_ = /\\/g;
          goog.format.EmailAddress.ESCAPED_BACKSLASHES_ = /\\\\/g;
          goog.format.EmailAddress.LOCAL_PART_REGEXP_STR_ = "[+a-zA-Z0-9_.!#$%&'*\\/=?^`{|}~-]+";
          goog.format.EmailAddress.DOMAIN_PART_REGEXP_STR_ = "([a-zA-Z0-9-]+\\.)+[a-zA-Z0-9]{2,63}";
          goog.format.EmailAddress.LOCAL_PART_ = new RegExp("^" + goog.format.EmailAddress.LOCAL_PART_REGEXP_STR_ + "$");
          goog.format.EmailAddress.DOMAIN_PART_ = new RegExp("^" + goog.format.EmailAddress.DOMAIN_PART_REGEXP_STR_ + "$");
          goog.format.EmailAddress.EMAIL_ADDRESS_ = new RegExp("^" + goog.format.EmailAddress.LOCAL_PART_REGEXP_STR_ + "@" + goog.format.EmailAddress.DOMAIN_PART_REGEXP_STR_ + "$");
          goog.format.EmailAddress.prototype.getName = function () {
            return this.name_
          };
          goog.format.EmailAddress.prototype.getAddress = function () {
            return this.address
          };
          goog.format.EmailAddress.prototype.setName = function (name) {
            this.name_ = name
          };
          goog.format.EmailAddress.prototype.setAddress = function (address) {
            this.address = address
          };
          goog.format.EmailAddress.prototype.toString = function () {
            return this.toStringInternal(goog.format.EmailAddress.CHARS_REQUIRE_QUOTES_)
          };
          goog.format.EmailAddress.isQuoteNeeded_ = function (name, specialChars) {
            for (var i = 0; i < specialChars.length; i++) {
              var specialChar = specialChars[i];
              if (goog.string.contains(name, specialChar)) return true
            }
            return false
          };
          goog.format.EmailAddress.prototype.toStringInternal = function (specialChars) {
            var name = this.getName();
            name = name.replace(goog.format.EmailAddress.ALL_DOUBLE_QUOTES_, "");
            if (goog.format.EmailAddress.isQuoteNeeded_(name, specialChars)) name = '"' + name.replace(goog.format.EmailAddress.ALL_BACKSLASHES_, "\\\\") + '"';
            if (name == "") return this.address;
            if (this.address == "") return name;
            return name + " <" + this.address + ">"
          };
          goog.format.EmailAddress.prototype.isValid = function () {
            return goog.format.EmailAddress.isValidAddrSpec(this.address)
          };
          goog.format.EmailAddress.isValidAddress = function (str) {
            return goog.format.EmailAddress.parse(str).isValid()
          };
          goog.format.EmailAddress.isValidAddrSpec = function (str) {
            return goog.format.EmailAddress.EMAIL_ADDRESS_.test(str)
          };
          goog.format.EmailAddress.isValidLocalPartSpec = function (str) {
            return goog.format.EmailAddress.LOCAL_PART_.test(str)
          };
          goog.format.EmailAddress.isValidDomainPartSpec = function (str) {
            return goog.format.EmailAddress.DOMAIN_PART_.test(str)
          };
          goog.format.EmailAddress.parseInternal = function (addr, ctor) {
            var name = "";
            var address = "";
            for (var i = 0; i < addr.length;) {
              var token = goog.format.EmailAddress.getToken_(addr, i);
              if (token.charAt(0) == "<" && token.indexOf(">") != -1) {
                var end = token.indexOf(">");
                address = token.substring(1, end)
              } else if (address == "") name += token;
              i += token.length
            }
            if (address == "" && name.indexOf("@") != -1) {
              address = name;
              name = ""
            }
            name = goog.string.collapseWhitespace(name);
            name = goog.string.stripQuotes(name, "'");
            name = goog.string.stripQuotes(name, '"');
            name = name.replace(goog.format.EmailAddress.ESCAPED_DOUBLE_QUOTES_, '"');
            name = name.replace(goog.format.EmailAddress.ESCAPED_BACKSLASHES_, "\\");
            address = goog.string.collapseWhitespace(address);
            return new ctor(address, name)
          };
          goog.format.EmailAddress.parse = function (addr) {
            return goog.format.EmailAddress.parseInternal(addr, goog.format.EmailAddress)
          };
          goog.format.EmailAddress.parseListInternal = function (str, parser, separatorChecker) {
            var result = [];
            var email = "";
            var token;
            str = goog.string.collapseWhitespace(str);
            for (var i = 0; i < str.length;) {
              token = goog.format.EmailAddress.getToken_(str, i);
              if (separatorChecker(token) || token == " " && parser(email).isValid()) {
                if (!goog.string.isEmptyOrWhitespace(email)) result.push(parser(email));
                email = "";
                i++;
                continue
              }
              email += token;
              i += token.length
            }
            if (!goog.string.isEmptyOrWhitespace(email)) result.push(parser(email));
            return result
          };
          goog.format.EmailAddress.parseList = function (str) {
            return goog.format.EmailAddress.parseListInternal(str, goog.format.EmailAddress.parse, goog.format.EmailAddress.isAddressSeparator)
          };
          goog.format.EmailAddress.getToken_ = function (str, pos) {
            var ch = str.charAt(pos);
            var p = goog.format.EmailAddress.OPENERS_.indexOf(ch);
            if (p == -1) return ch;
            if (goog.format.EmailAddress.isEscapedDlQuote_(str, pos)) return ch;
            var closerChar = goog.format.EmailAddress.CLOSERS_.charAt(p);
            var endPos = str.indexOf(closerChar, pos + 1);
            while (endPos >= 0 && goog.format.EmailAddress.isEscapedDlQuote_(str, endPos)) endPos = str.indexOf(closerChar, endPos + 1);
            var token = endPos >= 0 ? str.substring(pos, endPos + 1) : ch;
            return token
          };
          goog.format.EmailAddress.isEscapedDlQuote_ = function (str, pos) {
            if (str.charAt(pos) != '"') return false;
            var slashCount = 0;
            for (var idx = pos - 1; idx >= 0 && str.charAt(idx) == "\\"; idx--) slashCount++;
            return slashCount % 2 != 0
          };
          goog.format.EmailAddress.isAddressSeparator = function (ch) {
            return goog.string.contains(goog.format.EmailAddress.ADDRESS_SEPARATORS_, ch)
          };
          goog.provide("goog.window");
          goog.require("goog.dom.TagName");
          goog.require("goog.dom.safe");
          goog.require("goog.html.SafeUrl");
          goog.require("goog.html.uncheckedconversions");
          goog.require("goog.labs.userAgent.platform");
          goog.require("goog.string");
          goog.require("goog.string.Const");
          goog.require("goog.userAgent");
          goog.window.DEFAULT_POPUP_HEIGHT = 500;
          goog.window.DEFAULT_POPUP_WIDTH = 690;
          goog.window.DEFAULT_POPUP_TARGET = "google_popup";
          goog.window.createFakeWindow_ = function () {
            return {}
          };
          goog.window.open = function (linkRef, opt_options, opt_parentWin) {
            if (!opt_options) opt_options = {};
            var parentWin = opt_parentWin || window;
            var safeLinkRef;
            if (linkRef instanceof goog.html.SafeUrl) safeLinkRef = linkRef; else {
              var url = typeof linkRef.href != "undefined" ? linkRef.href : String(linkRef);
              safeLinkRef = goog.html.SafeUrl.sanitize(url)
            }
            var target = opt_options.target || linkRef.target;
            var sb = [];
            for (var option in opt_options) switch (option) {
              case "width":
              case "height":
              case "top":
              case "left":
                sb.push(option + "=" + opt_options[option]);
                break;
              case "target":
              case "noreferrer":
                break;
              default:
                sb.push(option + "=" + (opt_options[option] ? 1 : 0))
            }
            var optionString = sb.join(",");
            var newWin;
            if (goog.labs.userAgent.platform.isIos() && parentWin.navigator && parentWin.navigator["standalone"] && target && target != "_self") {
              var a = parentWin.document.createElement(String(goog.dom.TagName.A));
              goog.dom.safe.setAnchorHref(a, safeLinkRef);
              a.setAttribute("target", target);
              if (opt_options["noreferrer"]) a.setAttribute("rel", "noreferrer");
              var click = document.createEvent("MouseEvent");
              click.initMouseEvent("click", true, true, parentWin, 1);
              a.dispatchEvent(click);
              newWin = goog.window.createFakeWindow_()
            } else if (opt_options["noreferrer"]) {
              newWin = parentWin.open("", target, optionString);
              var sanitizedLinkRef = goog.html.SafeUrl.unwrap(safeLinkRef);
              if (newWin) {
                if (goog.userAgent.EDGE_OR_IE) if (goog.string.contains(sanitizedLinkRef, ";")) sanitizedLinkRef = "'" + sanitizedLinkRef.replace(/'/g, "%27") + "'";
                newWin.opener = null;
                var safeHtml = goog.html.uncheckedconversions.safeHtmlFromStringKnownToSatisfyTypeContract(goog.string.Const.from("b/12014412, meta tag with sanitized URL"),
                  '<META HTTP-EQUIV="refresh" content="0; url=' + goog.string.htmlEscape(sanitizedLinkRef) + '">');
                goog.dom.safe.documentWrite(newWin.document, safeHtml);
                newWin.document.close()
              }
            } else newWin = parentWin.open(goog.html.SafeUrl.unwrap(safeLinkRef), target, optionString);
            return newWin
          };
          goog.window.openBlank = function (opt_message, opt_options, opt_parentWin) {
            var loadingMessage;
            if (!opt_message) loadingMessage = ""; else loadingMessage = goog.string.escapeString(goog.string.htmlEscape(opt_message));
            var url = goog.html.uncheckedconversions.safeUrlFromStringKnownToSatisfyTypeContract(goog.string.Const.from("b/12014412, encoded string in javascript: URL"), 'javascript:"' + encodeURI(loadingMessage) + '"');
            return goog.window.open(url, opt_options, opt_parentWin)
          };
          goog.window.popup = function (linkRef, opt_options) {
            if (!opt_options) opt_options = {};
            opt_options["target"] = opt_options["target"] || linkRef["target"] || goog.window.DEFAULT_POPUP_TARGET;
            opt_options["width"] = opt_options["width"] || goog.window.DEFAULT_POPUP_WIDTH;
            opt_options["height"] = opt_options["height"] || goog.window.DEFAULT_POPUP_HEIGHT;
            var newWin = goog.window.open(linkRef, opt_options);
            if (!newWin) return true;
            newWin.focus();
            return false
          };
          goog.provide("goog.net.jsloader");
          goog.provide("goog.net.jsloader.Error");
          goog.provide("goog.net.jsloader.ErrorCode");
          goog.provide("goog.net.jsloader.Options");
          goog.require("goog.array");
          goog.require("goog.async.Deferred");
          goog.require("goog.debug.Error");
          goog.require("goog.dom");
          goog.require("goog.dom.TagName");
          goog.require("goog.dom.safe");
          goog.require("goog.html.TrustedResourceUrl");
          goog.require("goog.object");
          goog.net.jsloader.GLOBAL_VERIFY_OBJS_ = "closure_verification";
          goog.net.jsloader.DEFAULT_TIMEOUT = 5E3;
          goog.net.jsloader.Options;
          goog.net.jsloader.scriptsToLoad_ = [];
          goog.net.jsloader.scriptLoadingDeferred_;
          goog.net.jsloader.safeLoadMany = function (trustedUris, opt_options) {
            if (!trustedUris.length) return goog.async.Deferred.succeed(null);
            var isAnotherModuleLoading = goog.net.jsloader.scriptsToLoad_.length;
            goog.array.extend(goog.net.jsloader.scriptsToLoad_, trustedUris);
            if (isAnotherModuleLoading) return goog.net.jsloader.scriptLoadingDeferred_;
            trustedUris = goog.net.jsloader.scriptsToLoad_;
            var popAndLoadNextScript = function () {
              var trustedUri = trustedUris.shift();
              var deferred = goog.net.jsloader.safeLoad(trustedUri,
                opt_options);
              if (trustedUris.length) deferred.addBoth(popAndLoadNextScript);
              return deferred
            };
            goog.net.jsloader.scriptLoadingDeferred_ = popAndLoadNextScript();
            return goog.net.jsloader.scriptLoadingDeferred_
          };
          goog.net.jsloader.safeLoad = function (trustedUri, opt_options) {
            var options = opt_options || {};
            var doc = options.document || document;
            var uri = goog.html.TrustedResourceUrl.unwrap(trustedUri);
            var script = goog.dom.createElement(goog.dom.TagName.SCRIPT);
            var request = {script_: script, timeout_: undefined};
            var deferred = new goog.async.Deferred(goog.net.jsloader.cancel_, request);
            var timeout = null;
            var timeoutDuration = goog.isDefAndNotNull(options.timeout) ? options.timeout : goog.net.jsloader.DEFAULT_TIMEOUT;
            if (timeoutDuration >
              0) {
              timeout = window.setTimeout(function () {
                goog.net.jsloader.cleanup_(script, true);
                deferred.errback(new goog.net.jsloader.Error(goog.net.jsloader.ErrorCode.TIMEOUT, "Timeout reached for loading script " + uri))
              }, timeoutDuration);
              request.timeout_ = timeout
            }
            script.onload = script.onreadystatechange = function () {
              if (!script.readyState || script.readyState == "loaded" || script.readyState == "complete") {
                var removeScriptNode = options.cleanupWhenDone || false;
                goog.net.jsloader.cleanup_(script, removeScriptNode, timeout);
                deferred.callback(null)
              }
            };
            script.onerror = function () {
              goog.net.jsloader.cleanup_(script, true, timeout);
              deferred.errback(new goog.net.jsloader.Error(goog.net.jsloader.ErrorCode.LOAD_ERROR, "Error while loading script " + uri))
            };
            var properties = options.attributes || {};
            goog.object.extend(properties, {"type": "text/javascript", "charset": "UTF-8"});
            goog.dom.setProperties(script, properties);
            goog.dom.safe.setScriptSrc(script, trustedUri);
            var scriptParent = goog.net.jsloader.getScriptParentElement_(doc);
            scriptParent.appendChild(script);
            return deferred
          };
          goog.net.jsloader.safeLoadAndVerify = function (trustedUri, verificationObjName, options) {
            if (!goog.global[goog.net.jsloader.GLOBAL_VERIFY_OBJS_]) goog.global[goog.net.jsloader.GLOBAL_VERIFY_OBJS_] = {};
            var verifyObjs = goog.global[goog.net.jsloader.GLOBAL_VERIFY_OBJS_];
            var uri = goog.html.TrustedResourceUrl.unwrap(trustedUri);
            if (goog.isDef(verifyObjs[verificationObjName])) return goog.async.Deferred.fail(new goog.net.jsloader.Error(goog.net.jsloader.ErrorCode.VERIFY_OBJECT_ALREADY_EXISTS, "Verification object " +
              verificationObjName + " already defined."));
            var sendDeferred = goog.net.jsloader.safeLoad(trustedUri, options);
            var deferred = new goog.async.Deferred(goog.bind(sendDeferred.cancel, sendDeferred));
            sendDeferred.addCallback(function () {
              var result = verifyObjs[verificationObjName];
              if (goog.isDef(result)) {
                deferred.callback(result);
                delete verifyObjs[verificationObjName]
              } else deferred.errback(new goog.net.jsloader.Error(goog.net.jsloader.ErrorCode.VERIFY_ERROR, "Script " + uri + " loaded, but verification object " + verificationObjName +
                " was not defined."))
            });
            sendDeferred.addErrback(function (error) {
              if (goog.isDef(verifyObjs[verificationObjName])) delete verifyObjs[verificationObjName];
              deferred.errback(error)
            });
            return deferred
          };
          goog.net.jsloader.getScriptParentElement_ = function (doc) {
            var headElements = goog.dom.getElementsByTagName(goog.dom.TagName.HEAD, doc);
            if (!headElements || goog.array.isEmpty(headElements)) return doc.documentElement; else return headElements[0]
          };
          goog.net.jsloader.cancel_ = function () {
            var request = this;
            if (request && request.script_) {
              var scriptNode = request.script_;
              if (scriptNode && scriptNode.tagName == goog.dom.TagName.SCRIPT) goog.net.jsloader.cleanup_(scriptNode, true, request.timeout_)
            }
          };
          goog.net.jsloader.cleanup_ = function (scriptNode, removeScriptNode, opt_timeout) {
            if (goog.isDefAndNotNull(opt_timeout)) goog.global.clearTimeout(opt_timeout);
            scriptNode.onload = goog.nullFunction;
            scriptNode.onerror = goog.nullFunction;
            scriptNode.onreadystatechange = goog.nullFunction;
            if (removeScriptNode) window.setTimeout(function () {
              goog.dom.removeNode(scriptNode)
            }, 0)
          };
          goog.net.jsloader.ErrorCode = {LOAD_ERROR: 0, TIMEOUT: 1, VERIFY_ERROR: 2, VERIFY_OBJECT_ALREADY_EXISTS: 3};
          goog.net.jsloader.Error = function (code, opt_message) {
            var msg = "Jsloader error (code #" + code + ")";
            if (opt_message) msg += ": " + opt_message;
            goog.net.jsloader.Error.base(this, "constructor", msg);
            this.code = code
          };
          goog.inherits(goog.net.jsloader.Error, goog.debug.Error);
          goog.provide("goog.net.CorsXmlHttpFactory");
          goog.provide("goog.net.IeCorsXhrAdapter");
          goog.require("goog.net.HttpStatus");
          goog.require("goog.net.XhrLike");
          goog.require("goog.net.XmlHttp");
          goog.require("goog.net.XmlHttpFactory");
          goog.net.CorsXmlHttpFactory = function () {
            goog.net.XmlHttpFactory.call(this)
          };
          goog.inherits(goog.net.CorsXmlHttpFactory, goog.net.XmlHttpFactory);
          goog.net.CorsXmlHttpFactory.prototype.createInstance = function () {
            var xhr = new XMLHttpRequest;
            if ("withCredentials" in xhr) return xhr; else if (typeof XDomainRequest != "undefined") return new goog.net.IeCorsXhrAdapter; else throw new Error("Unsupported browser");
          };
          goog.net.CorsXmlHttpFactory.prototype.internalGetOptions = function () {
            return {}
          };
          goog.net.IeCorsXhrAdapter = function () {
            this.xdr_ = new XDomainRequest;
            this.readyState = goog.net.XmlHttp.ReadyState.UNINITIALIZED;
            this.onreadystatechange = null;
            this.responseText = "";
            this.status = -1;
            this.responseXML = null;
            this.statusText = null;
            this.xdr_.onload = goog.bind(this.handleLoad_, this);
            this.xdr_.onerror = goog.bind(this.handleError_, this);
            this.xdr_.onprogress = goog.bind(this.handleProgress_, this);
            this.xdr_.ontimeout = goog.bind(this.handleTimeout_, this)
          };
          goog.net.IeCorsXhrAdapter.prototype.open = function (method, url, opt_async) {
            if (goog.isDefAndNotNull(opt_async) && !opt_async) throw new Error("Only async requests are supported.");
            this.xdr_.open(method, url)
          };
          goog.net.IeCorsXhrAdapter.prototype.send = function (opt_content) {
            if (opt_content) if (typeof opt_content == "string") this.xdr_.send(opt_content); else throw new Error("Only string data is supported"); else this.xdr_.send()
          };
          goog.net.IeCorsXhrAdapter.prototype.abort = function () {
            this.xdr_.abort()
          };
          goog.net.IeCorsXhrAdapter.prototype.setRequestHeader = function (key, value) {
          };
          goog.net.IeCorsXhrAdapter.prototype.getResponseHeader = function (key) {
            if (key.toLowerCase() == "content-type") return this.xdr_.contentType;
            return ""
          };
          goog.net.IeCorsXhrAdapter.prototype.handleLoad_ = function () {
            this.status = goog.net.HttpStatus.OK;
            this.responseText = this.xdr_.responseText;
            this.setReadyState_(goog.net.XmlHttp.ReadyState.COMPLETE)
          };
          goog.net.IeCorsXhrAdapter.prototype.handleError_ = function () {
            this.status = goog.net.HttpStatus.INTERNAL_SERVER_ERROR;
            this.responseText = "";
            this.setReadyState_(goog.net.XmlHttp.ReadyState.COMPLETE)
          };
          goog.net.IeCorsXhrAdapter.prototype.handleTimeout_ = function () {
            this.handleError_()
          };
          goog.net.IeCorsXhrAdapter.prototype.handleProgress_ = function () {
            this.status = goog.net.HttpStatus.OK;
            this.setReadyState_(goog.net.XmlHttp.ReadyState.LOADING)
          };
          goog.net.IeCorsXhrAdapter.prototype.setReadyState_ = function (readyState) {
            this.readyState = readyState;
            if (this.onreadystatechange) this.onreadystatechange()
          };
          goog.net.IeCorsXhrAdapter.prototype.getAllResponseHeaders = function () {
            return "content-type: " + this.xdr_.contentType
          };
          goog.provide("fireauth.util");
          goog.require("goog.Promise");
          goog.require("goog.Timer");
          goog.require("goog.Uri");
          goog.require("goog.events");
          goog.require("goog.events.EventType");
          goog.require("goog.html.SafeUrl");
          goog.require("goog.json");
          goog.require("goog.object");
          goog.require("goog.string");
          goog.require("goog.userAgent");
          goog.require("goog.window");
          var angular;
          fireauth.util.isIe11 = function () {
            return goog.userAgent.IE && !!goog.userAgent.DOCUMENT_MODE && goog.userAgent.DOCUMENT_MODE == 11
          };
          fireauth.util.isIe10 = function () {
            return goog.userAgent.IE && !!goog.userAgent.DOCUMENT_MODE && goog.userAgent.DOCUMENT_MODE == 10
          };
          fireauth.util.isEdge = function (userAgent) {
            return /Edge\/\d+/.test(userAgent)
          };
          fireauth.util.isLocalStorageNotSynchronized = function (opt_userAgent) {
            var ua = opt_userAgent || fireauth.util.getUserAgentString();
            return fireauth.util.isIe11() || fireauth.util.isEdge(ua)
          };
          fireauth.util.getCurrentUrl = function () {
            return goog.global["window"] && goog.global["window"]["location"]["href"] || ""
          };
          fireauth.util.sanitizeRequestUri = function (requestUri) {
            if (typeof angular != "undefined") requestUri = requestUri.replace("#/", "#").replace("#!/", "#");
            return requestUri
          };
          fireauth.util.goTo = function (url, opt_window, opt_bypassCheck) {
            var win = opt_window || goog.global["window"];
            var finalUrl = "about:blank";
            if (url && !opt_bypassCheck) finalUrl = goog.html.SafeUrl.unwrap(goog.html.SafeUrl.sanitize(url));
            win.location.href = finalUrl
          };
          fireauth.util.replaceCurrentUrl = function (url, opt_window, opt_bypassCheck) {
            var win = opt_window || goog.global["window"];
            if (!opt_bypassCheck) win.location.replace(goog.html.SafeUrl.unwrap(goog.html.SafeUrl.sanitize(url))); else win.location.replace(url)
          };
          fireauth.util.getKeyDiff = function (a, b) {
            var diff = [];
            for (var k in a) if (!(k in b)) diff.push(k); else if (typeof a[k] != typeof b[k]) diff.push(k); else if (goog.isArray(a[k])) {
              if (!goog.object.equals(a[k], b[k])) diff.push(k)
            } else if (typeof a[k] == "object" && a[k] != null && b[k] != null) {
              if (fireauth.util.getKeyDiff(a[k], b[k]).length > 0) diff.push(k)
            } else if (a[k] !== b[k]) diff.push(k);
            for (var k in b) if (!(k in a)) diff.push(k);
            return diff
          };
          fireauth.util.getChromeVersion = function (opt_userAgent) {
            var ua = opt_userAgent || fireauth.util.getUserAgentString();
            var browserName = fireauth.util.getBrowserName(ua);
            if (browserName != fireauth.util.BrowserName.CHROME) return null;
            var matches = ua.match(/\sChrome\/(\d+)/i);
            if (matches && matches.length == 2) return parseInt(matches[1], 10);
            return null
          };
          fireauth.util.supportsCors = function (opt_userAgent) {
            var chromeVersion = fireauth.util.getChromeVersion(opt_userAgent);
            if (chromeVersion && chromeVersion < 30) return false;
            return !goog.userAgent.IE || !goog.userAgent.DOCUMENT_MODE || goog.userAgent.DOCUMENT_MODE > 9
          };
          fireauth.util.isMobileBrowser = function (opt_userAgent) {
            var ua = opt_userAgent || fireauth.util.getUserAgentString();
            var uaLower = ua.toLowerCase();
            if (uaLower.match(/android/) || uaLower.match(/webos/) || uaLower.match(/iphone|ipad|ipod/) || uaLower.match(/blackberry/) || uaLower.match(/windows phone/) || uaLower.match(/iemobile/)) return true;
            return false
          };
          fireauth.util.closeWindow = function (opt_window) {
            var win = opt_window || goog.global["window"];
            try {
              win.close()
            } catch (e) {
            }
          };
          fireauth.util.popup = function (opt_url, opt_name, opt_width, opt_height) {
            var width = opt_width || 500;
            var height = opt_height || 600;
            var top = (window.screen.availHeight - height) / 2;
            var left = (window.screen.availWidth - width) / 2;
            var options = {
              "width": width,
              "height": height,
              "top": top > 0 ? top : 0,
              "left": left > 0 ? left : 0,
              "location": true,
              "resizable": true,
              "statusbar": true,
              "toolbar": false
            };
            var ua = fireauth.util.getUserAgentString().toLowerCase();
            if (opt_name) {
              options["target"] = opt_name;
              if (goog.string.contains(ua, "crios/")) options["target"] =
                "_blank"
            }
            var browserName = fireauth.util.getBrowserName(fireauth.util.getUserAgentString());
            if (browserName == fireauth.util.BrowserName.FIREFOX) {
              opt_url = opt_url || "http://localhost";
              options["scrollbars"] = true
            }
            var newWin = goog.window.open(opt_url || "", options);
            if (newWin) try {
              newWin.focus()
            } catch (e) {
            }
            return newWin
          };
          fireauth.util.POPUP_WAIT_CYCLE_MS_ = 2E3;
          fireauth.util.requiresPopupDelay = function (opt_userAgent) {
            var ua = opt_userAgent || fireauth.util.getUserAgentString();
            var matches = ua.match(/OS (\d+)_.*CriOS\/(\d+)\./i);
            if (matches && matches.length > 2) return parseInt(matches[1], 10) >= 10 && parseInt(matches[2], 10) >= 55;
            return false
          };
          fireauth.util.onPopupClose = function (win, opt_stepDuration) {
            var stepDuration = opt_stepDuration || fireauth.util.POPUP_WAIT_CYCLE_MS_;
            return new goog.Promise(function (resolve, reject) {
              var repeat = function () {
                goog.Timer.promise(stepDuration).then(function () {
                  if (!win || win.closed) resolve(); else return repeat()
                })
              };
              return repeat()
            })
          };
          fireauth.util.isAuthorizedDomain = function (authorizedDomains, url) {
            var uri = goog.Uri.parse(url);
            var scheme = uri.getScheme();
            var domain = uri.getDomain();
            for (var i = 0; i < authorizedDomains.length; i++) if (fireauth.util.matchDomain(authorizedDomains[i], domain, scheme)) return true;
            return false
          };
          fireauth.util.Dimensions;
          fireauth.util.getWindowDimensions = function (opt_window) {
            var win = opt_window || goog.global["window"];
            if (win && win["innerWidth"] && win["innerHeight"]) return {
              "width": parseFloat(win["innerWidth"]),
              "height": parseFloat(win["innerHeight"])
            };
            return null
          };
          fireauth.util.IP_ADDRESS_REGEXP_ = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;
          fireauth.util.matchDomain = function (domainPattern, domain, scheme) {
            if (domainPattern.indexOf("chrome-extension://") == 0) {
              var chromeExtUri = goog.Uri.parse(domainPattern);
              return chromeExtUri.getDomain() == domain && scheme == "chrome-extension"
            } else if (scheme != "http" && scheme != "https") return false; else {
              if (fireauth.util.IP_ADDRESS_REGEXP_.test(domainPattern)) return domain == domainPattern;
              var escapedDomainPattern = domainPattern.split(".").join("\\.");
              var re = new RegExp("^(.+\\." + escapedDomainPattern + "|" + escapedDomainPattern +
                ")$", "i");
              return re.test(domain)
            }
          };
          fireauth.util.onDomReady = function () {
            var resolver = null;
            return (new goog.Promise(function (resolve, reject) {
              var doc = goog.global.document;
              if (doc.readyState == "complete") resolve(); else {
                resolver = function () {
                  resolve()
                };
                goog.events.listenOnce(window, goog.events.EventType.LOAD, resolver)
              }
            })).thenCatch(function (error) {
              goog.events.unlisten(window, goog.events.EventType.LOAD, resolver);
              throw error;
            })
          };
          fireauth.util.CORDOVA_ONDEVICEREADY_TIMEOUT_MS_ = 1E3;
          fireauth.util.checkIfCordova = function (opt_userAgent, opt_timeout) {
            if (fireauth.util.isAndroidOrIosFileEnvironment(opt_userAgent)) return fireauth.util.onDomReady().then(function () {
              return new goog.Promise(function (resolve, reject) {
                var doc = goog.global.document;
                var timeoutId = setTimeout(function () {
                  reject(new Error("Cordova framework is not ready."))
                }, opt_timeout || fireauth.util.CORDOVA_ONDEVICEREADY_TIMEOUT_MS_);
                doc.addEventListener("deviceready", function () {
                  clearTimeout(timeoutId);
                  resolve()
                }, false)
              })
            });
            return goog.Promise.reject(new Error("Cordova must run in an Android or iOS file scheme."))
          };
          fireauth.util.isAndroidOrIosFileEnvironment = function (opt_userAgent) {
            var ua = opt_userAgent || fireauth.util.getUserAgentString();
            return !!(fireauth.util.getCurrentScheme() === "file:" && ua.toLowerCase().match(/iphone|ipad|ipod|android/))
          };
          fireauth.util.isIOS7Or8 = function (opt_userAgent) {
            var ua = opt_userAgent || fireauth.util.getUserAgentString();
            return !!(ua.match(/(iPad|iPhone|iPod).*OS 7_\d/i) || ua.match(/(iPad|iPhone|iPod).*OS 8_\d/i))
          };
          fireauth.util.isSafariLocalStorageNotSynced = function () {
            var ua = fireauth.util.getUserAgentString();
            if (!fireauth.util.iframeCanSyncWebStorage(ua) && fireauth.util.isIframe()) return true;
            return false
          };
          fireauth.util.isIframe = function (opt_win) {
            var win = opt_win || goog.global["window"];
            try {
              return !!(win && win != win["top"])
            } catch (e) {
              return false
            }
          };
          fireauth.util.isOpenerAnIframe = function (opt_win) {
            var win = opt_win || goog.global["window"];
            try {
              var opener = win && win["opener"];
              return !!(opener && fireauth.util.isIframe(opener))
            } catch (e) {
              return false
            }
          };
          fireauth.util.Env = {BROWSER: "Browser", NODE: "Node", REACT_NATIVE: "ReactNative"};
          fireauth.util.getEnvironment = function () {
            if (firebase.INTERNAL.hasOwnProperty("reactNative")) return fireauth.util.Env.REACT_NATIVE; else if (firebase.INTERNAL.hasOwnProperty("node")) return fireauth.util.Env.NODE;
            return fireauth.util.Env.BROWSER
          };
          fireauth.util.isNativeEnvironment = function () {
            var environment = fireauth.util.getEnvironment();
            return environment === fireauth.util.Env.REACT_NATIVE || environment === fireauth.util.Env.NODE
          };
          fireauth.util.STORAGE_KEY_SEPARATOR_ = ":";
          fireauth.util.createStorageKey = function (apiKey, appName) {
            return apiKey + fireauth.util.STORAGE_KEY_SEPARATOR_ + appName
          };
          fireauth.util.generateRandomString = function () {
            return Math.floor(Math.random() * 1E9).toString()
          };
          fireauth.util.BrowserName = {
            ANDROID: "Android",
            BLACKBERRY: "Blackberry",
            EDGE: "Edge",
            FIREFOX: "Firefox",
            IE: "IE",
            IEMOBILE: "IEMobile",
            OPERA: "Opera",
            OTHER: "Other",
            CHROME: "Chrome",
            SAFARI: "Safari",
            SILK: "Silk",
            WEBOS: "Webos"
          };
          fireauth.util.getBrowserName = function (userAgent) {
            var ua = userAgent.toLowerCase();
            if (goog.string.contains(ua, "opera/") || goog.string.contains(ua, "opr/") || goog.string.contains(ua, "opios/")) return fireauth.util.BrowserName.OPERA; else if (goog.string.contains(ua, "iemobile")) return fireauth.util.BrowserName.IEMOBILE; else if (goog.string.contains(ua, "msie") || goog.string.contains(ua, "trident/")) return fireauth.util.BrowserName.IE; else if (goog.string.contains(ua, "edge/")) return fireauth.util.BrowserName.EDGE;
            else if (goog.string.contains(ua, "firefox/")) return fireauth.util.BrowserName.FIREFOX; else if (goog.string.contains(ua, "silk/")) return fireauth.util.BrowserName.SILK; else if (goog.string.contains(ua, "blackberry")) return fireauth.util.BrowserName.BLACKBERRY; else if (goog.string.contains(ua, "webos")) return fireauth.util.BrowserName.WEBOS; else if (goog.string.contains(ua, "safari/") && !goog.string.contains(ua, "chrome/") && !goog.string.contains(ua, "crios/") && !goog.string.contains(ua, "android")) return fireauth.util.BrowserName.SAFARI;
            else if ((goog.string.contains(ua, "chrome/") || goog.string.contains(ua, "crios/")) && !goog.string.contains(ua, "edge/")) return fireauth.util.BrowserName.CHROME; else if (goog.string.contains(ua, "android")) return fireauth.util.BrowserName.ANDROID; else {
              var re = new RegExp("([a-zA-Z\\d\\.]+)/[a-zA-Z\\d\\.]*$");
              var matches = userAgent.match(re);
              if (matches && matches.length == 2) return matches[1]
            }
            return fireauth.util.BrowserName.OTHER
          };
          fireauth.util.ClientImplementation = {JSCORE: "JsCore", OAUTH_HANDLER: "Handler", OAUTH_IFRAME: "Iframe"};
          fireauth.util.Framework = {DEFAULT: "FirebaseCore-web", FIREBASEUI: "FirebaseUI-web"};
          fireauth.util.getFrameworkIds = function (providedFrameworks) {
            var frameworkVersion = [];
            var frameworkSet = {};
            for (var key in fireauth.util.Framework) frameworkSet[fireauth.util.Framework[key]] = true;
            for (var i = 0; i < providedFrameworks.length; i++) if (typeof frameworkSet[providedFrameworks[i]] !== "undefined") {
              delete frameworkSet[providedFrameworks[i]];
              frameworkVersion.push(providedFrameworks[i])
            }
            frameworkVersion.sort();
            return frameworkVersion
          };
          fireauth.util.getClientVersion = function (clientImplementation, clientVersion, opt_frameworkVersion, opt_userAgent) {
            var frameworkVersion = fireauth.util.getFrameworkIds(opt_frameworkVersion || []);
            if (!frameworkVersion.length) frameworkVersion = [fireauth.util.Framework.DEFAULT];
            var environment = fireauth.util.getEnvironment();
            var reportedEnvironment = "";
            if (environment === fireauth.util.Env.BROWSER) {
              var userAgent = opt_userAgent || fireauth.util.getUserAgentString();
              reportedEnvironment = fireauth.util.getBrowserName(userAgent)
            } else reportedEnvironment =
              environment;
            return reportedEnvironment + "/" + clientImplementation + "/" + clientVersion + "/" + frameworkVersion.join(",")
          };
          fireauth.util.getUserAgentString = function () {
            return goog.global["navigator"] && goog.global["navigator"]["userAgent"] || ""
          };
          fireauth.util.getObjectRef = function (varStrName, opt_scope) {
            var pieces = varStrName.split(".");
            var last = opt_scope || goog.global;
            for (var i = 0; i < pieces.length && typeof last == "object" && last != null; i++) last = last[pieces[i]];
            if (i != pieces.length) last = undefined;
            return last
          };
          fireauth.util.isWebStorageSupported = function () {
            try {
              var storage = goog.global["localStorage"];
              var key = fireauth.util.generateEventId();
              if (storage) {
                storage["setItem"](key, "1");
                storage["removeItem"](key);
                if (fireauth.util.isLocalStorageNotSynchronized()) return !!goog.global["indexedDB"];
                return true
              }
            } catch (e) {
            }
            return false
          };
          fireauth.util.isCordovaOAuthEnabled = function () {
            return false
          };
          fireauth.util.isPopupRedirectSupported = function () {
            return (fireauth.util.isHttpOrHttps() || fireauth.util.isChromeExtension() || fireauth.util.isAndroidOrIosFileEnvironment()) && !fireauth.util.isNativeEnvironment() && fireauth.util.isWebStorageSupported()
          };
          fireauth.util.isHttpOrHttps = function () {
            return fireauth.util.getCurrentScheme() === "http:" || fireauth.util.getCurrentScheme() === "https:"
          };
          fireauth.util.getCurrentScheme = function () {
            return goog.global["location"] && goog.global["location"]["protocol"] || null
          };
          fireauth.util.isChromeExtension = function () {
            return fireauth.util.getCurrentScheme() === "chrome-extension:"
          };
          fireauth.util.isIOS = function (opt_userAgent) {
            var ua = opt_userAgent || fireauth.util.getUserAgentString();
            return !!ua.toLowerCase().match(/iphone|ipad|ipod/)
          };
          fireauth.util.isAndroid = function (opt_userAgent) {
            var ua = opt_userAgent || fireauth.util.getUserAgentString();
            return !!ua.toLowerCase().match(/android/)
          };
          fireauth.util.runsInBackground = function (opt_userAgent) {
            var ua = opt_userAgent || fireauth.util.getUserAgentString();
            if (fireauth.util.isMobileBrowser(ua)) return false; else if (fireauth.util.getBrowserName(ua) == fireauth.util.BrowserName.FIREFOX) return false;
            return true
          };
          fireauth.util.stringifyJSON = function (obj) {
            if (typeof obj === "undefined") return null;
            return goog.json.serialize(obj)
          };
          fireauth.util.copyWithoutNullsOrUndefined = function (obj) {
            var trimmedObj = {};
            for (var key in obj) if (obj.hasOwnProperty(key) && obj[key] !== null && obj[key] !== undefined) trimmedObj[key] = obj[key];
            return trimmedObj
          };
          fireauth.util.removeEntriesWithKeys = function (obj, keys) {
            var copy = goog.object.clone(obj);
            for (var i = 0; i < keys.length; i++) {
              var key = keys[i];
              if (key in copy) delete copy[key]
            }
            return copy
          };
          fireauth.util.parseJSON = function (json) {
            if (goog.isNull(json)) return undefined;
            return JSON.parse(json)
          };
          fireauth.util.getXMLHttpRequest = function () {
            var isNode = fireauth.util.getEnvironment() == fireauth.util.Env.NODE;
            var XMLHttpRequest = goog.global["XMLHttpRequest"] || isNode && firebase.INTERNAL["node"] && firebase.INTERNAL["node"]["XMLHttpRequest"];
            return XMLHttpRequest
          };
          fireauth.util.generateEventId = function (opt_prefix) {
            return opt_prefix ? opt_prefix : "" + Math.floor(Math.random() * 1E9).toString()
          };
          fireauth.util.iframeCanSyncWebStorage = function (opt_userAgent) {
            var ua = opt_userAgent || fireauth.util.getUserAgentString();
            if (fireauth.util.getBrowserName(ua) == fireauth.util.BrowserName.SAFARI || ua.toLowerCase().match(/iphone|ipad|ipod/)) return false;
            return true
          };
          fireauth.util.resetUnloadedGapiModules = function () {
            var beacon = goog.global["___jsl"];
            if (beacon && beacon["H"]) for (var hint in beacon["H"]) {
              beacon["H"][hint]["r"] = beacon["H"][hint]["r"] || [];
              beacon["H"][hint]["L"] = beacon["H"][hint]["L"] || [];
              beacon["H"][hint]["r"] = beacon["H"][hint]["L"].concat();
              if (beacon["CP"]) for (var i = 0; i < beacon["CP"].length; i++) beacon["CP"][i] = null
            }
          };
          fireauth.util.isMobileDevice = function (opt_userAgent, opt_env) {
            var ua = opt_userAgent || fireauth.util.getUserAgentString();
            var environment = opt_env || fireauth.util.getEnvironment();
            return fireauth.util.isMobileBrowser(ua) || environment === fireauth.util.Env.REACT_NATIVE
          };
          fireauth.util.isOnline = function (opt_navigator) {
            var navigator = opt_navigator || goog.global["navigator"];
            if (navigator && typeof navigator["onLine"] === "boolean" && (fireauth.util.isHttpOrHttps() || fireauth.util.isChromeExtension() || typeof navigator["connection"] !== "undefined")) return navigator["onLine"];
            return true
          };
          fireauth.util.getUserLanguage = function (opt_navigator) {
            var navigator = opt_navigator || goog.global["navigator"];
            if (!navigator) return null;
            return navigator["languages"] && navigator["languages"][0] || navigator["language"] || navigator["userLanguage"] || null
          };
          fireauth.util.Delay = function (shortDelay, longDelay, opt_userAgent, opt_env) {
            if (shortDelay > longDelay) throw new Error("Short delay should be less than long delay!");
            this.shortDelay_ = shortDelay;
            this.longDelay_ = longDelay;
            this.isMobile_ = fireauth.util.isMobileDevice(opt_userAgent, opt_env)
          };
          fireauth.util.Delay.prototype.get = function () {
            return this.isMobile_ ? this.longDelay_ : this.shortDelay_
          };
          fireauth.util.isAppVisible = function () {
            var doc = goog.global.document;
            if (doc && typeof doc["visibilityState"] !== "undefined") return doc["visibilityState"] == "visible";
            return true
          };
          fireauth.util.onAppVisible = function () {
            var doc = goog.global.document;
            var onVisibilityChange = null;
            if (fireauth.util.isAppVisible() || !doc) return goog.Promise.resolve(); else return (new goog.Promise(function (resolve, reject) {
              onVisibilityChange = function (event) {
                if (fireauth.util.isAppVisible()) {
                  doc.removeEventListener("visibilitychange", onVisibilityChange, false);
                  resolve()
                }
              };
              doc.addEventListener("visibilitychange", onVisibilityChange, false)
            })).thenCatch(function (error) {
              doc.removeEventListener("visibilitychange",
                onVisibilityChange, false);
              throw error;
            })
          };
          fireauth.util.consoleWarn = function (message) {
            if (typeof console !== "undefined" && typeof console.warn === "function") console.warn(message)
          };
          fireauth.util.utcTimestampToDateString = function (utcTimestamp) {
            try {
              var date = new Date(parseInt(utcTimestamp, 10));
              if (!isNaN(date.getTime()) && goog.string.isNumeric(utcTimestamp)) return date.toUTCString()
            } catch (e) {
            }
            return null
          };
          goog.provide("fireauth.deprecation");
          goog.provide("fireauth.deprecation.Deprecations");
          goog.require("fireauth.util");
          fireauth.deprecation.Deprecations = {USER_GET_TOKEN: "firebase.User.prototype.getToken is deprecated. Please use" + " firebase.User.prototype.getIdToken instead."};
          fireauth.deprecation.shownMessages_ = {};
          fireauth.deprecation.log = function (message) {
            if (fireauth.deprecation.shownMessages_[message]) return;
            fireauth.deprecation.shownMessages_[message] = true;
            fireauth.util.consoleWarn(message)
          };
          fireauth.deprecation.resetForTesting = function () {
            fireauth.deprecation.shownMessages_ = {}
          };
          goog.provide("fireauth.object");
          goog.require("fireauth.deprecation");
          goog.require("fireauth.deprecation.Deprecations");
          fireauth.object.isReadonlyConfigurable_ = function () {
            try {
              var obj = {};
              Object.defineProperty(obj, "abcd", {configurable: true, enumerable: true, value: 1});
              Object.defineProperty(obj, "abcd", {configurable: true, enumerable: true, value: 2});
              return obj["abcd"] == 2
            } catch (e) {
              return false
            }
          };
          fireauth.object.readonlyConfigurable_ = fireauth.object.isReadonlyConfigurable_();
          fireauth.object.setReadonlyProperty = function (obj, key, value) {
            if (fireauth.object.readonlyConfigurable_) Object.defineProperty(obj, key, {
              configurable: true,
              enumerable: true,
              value: value
            }); else obj[key] = value
          };
          fireauth.object.setDeprecatedReadonlyProperty = function (obj, key, value, deprecationMessage) {
            if (fireauth.object.readonlyConfigurable_) Object.defineProperty(obj, key, {
              configurable: true,
              enumerable: true,
              get: function () {
                fireauth.deprecation.log(deprecationMessage);
                return value
              }
            }); else obj[key] = value
          };
          fireauth.object.setReadonlyProperties = function (obj, props) {
            if (!props) return;
            for (var key in props) if (props.hasOwnProperty(key)) fireauth.object.setReadonlyProperty(obj, key, props[key])
          };
          fireauth.object.makeReadonlyCopy = function (obj) {
            var output = {};
            fireauth.object.setReadonlyProperties(output, obj);
            return output
          };
          fireauth.object.makeWritableCopy = function (obj) {
            var output = {};
            for (var key in obj) if (obj.hasOwnProperty(key)) output[key] = obj[key];
            return output
          };
          fireauth.object.hasNonEmptyFields = function (opt_obj, opt_fields) {
            if (!opt_fields || !opt_fields.length) return true;
            if (!opt_obj) return false;
            for (var i = 0; i < opt_fields.length; i++) {
              var field = opt_obj[opt_fields[i]];
              if (field === undefined || field === null || field === "") return false
            }
            return true
          };
          fireauth.object.unsafeCreateReadOnlyCopy = function (obj) {
            var copy = obj;
            if (typeof obj == "object" && obj != null) {
              copy = "length" in obj ? [] : {};
              for (var key in obj) fireauth.object.setReadonlyProperty(copy, key, fireauth.object.unsafeCreateReadOnlyCopy(obj[key]))
            }
            return copy
          };
          goog.provide("fireauth.ActionCodeInfo");
          goog.require("fireauth.object");
          fireauth.ActionCodeInfo = function (response) {
            var data = {};
            var email = response[fireauth.ActionCodeInfo.ServerFieldName.EMAIL];
            var newEmail = response[fireauth.ActionCodeInfo.ServerFieldName.NEW_EMAIL];
            var operation = response[fireauth.ActionCodeInfo.ServerFieldName.REQUEST_TYPE];
            if (!email || !operation) throw new Error("Invalid provider user info!");
            data[fireauth.ActionCodeInfo.DataField.FROM_EMAIL] = newEmail || null;
            data[fireauth.ActionCodeInfo.DataField.EMAIL] = email;
            fireauth.object.setReadonlyProperty(this, fireauth.ActionCodeInfo.PropertyName.OPERATION,
              operation);
            fireauth.object.setReadonlyProperty(this, fireauth.ActionCodeInfo.PropertyName.DATA, fireauth.object.unsafeCreateReadOnlyCopy(data))
          };
          fireauth.ActionCodeInfo.ServerFieldName = {
            EMAIL: "email",
            NEW_EMAIL: "newEmail",
            REQUEST_TYPE: "requestType"
          };
          fireauth.ActionCodeInfo.DataField = {EMAIL: "email", FROM_EMAIL: "fromEmail"};
          fireauth.ActionCodeInfo.PropertyName = {DATA: "data", OPERATION: "operation"};
          goog.provide("fireauth.AuthError");
          goog.provide("fireauth.authenum");
          goog.provide("fireauth.authenum.Error");
          fireauth.AuthError = function (code, opt_message) {
            this["code"] = fireauth.AuthError.ERROR_CODE_PREFIX + code;
            this.message = opt_message || fireauth.AuthError.MESSAGES_[code] || ""
          };
          goog.inherits(fireauth.AuthError, Error);
          fireauth.AuthError.prototype.toPlainObject = function () {
            return {"code": this["code"], "message": this.message}
          };
          fireauth.AuthError.prototype.toJSON = function () {
            return this.toPlainObject()
          };
          fireauth.AuthError.fromPlainObject = function (response) {
            var fullCode = response && response["code"];
            if (fullCode) {
              var code = fullCode.substring(fireauth.AuthError.ERROR_CODE_PREFIX.length);
              return new fireauth.AuthError(code, response["message"])
            }
            return null
          };
          fireauth.AuthError.translateError = function (error, fromCode, toCode) {
            if (error && error["code"] && error["code"] == fireauth.AuthError.ERROR_CODE_PREFIX + fromCode) return new fireauth.AuthError(toCode);
            return error
          };
          fireauth.AuthError.ERROR_CODE_PREFIX = "auth/";
          fireauth.authenum.Error = {
            ARGUMENT_ERROR: "argument-error",
            APP_NOT_AUTHORIZED: "app-not-authorized",
            APP_NOT_INSTALLED: "app-not-installed",
            CAPTCHA_CHECK_FAILED: "captcha-check-failed",
            CODE_EXPIRED: "code-expired",
            CORDOVA_NOT_READY: "cordova-not-ready",
            CORS_UNSUPPORTED: "cors-unsupported",
            CREDENTIAL_ALREADY_IN_USE: "credential-already-in-use",
            CREDENTIAL_MISMATCH: "custom-token-mismatch",
            CREDENTIAL_TOO_OLD_LOGIN_AGAIN: "requires-recent-login",
            DYNAMIC_LINK_NOT_ACTIVATED: "dynamic-link-not-activated",
            EMAIL_EXISTS: "email-already-in-use",
            EXPIRED_OOB_CODE: "expired-action-code",
            EXPIRED_POPUP_REQUEST: "cancelled-popup-request",
            INTERNAL_ERROR: "internal-error",
            INVALID_API_KEY: "invalid-api-key",
            INVALID_APP_CREDENTIAL: "invalid-app-credential",
            INVALID_APP_ID: "invalid-app-id",
            INVALID_AUTH: "invalid-user-token",
            INVALID_AUTH_EVENT: "invalid-auth-event",
            INVALID_CERT_HASH: "invalid-cert-hash",
            INVALID_CODE: "invalid-verification-code",
            INVALID_CONTINUE_URI: "invalid-continue-uri",
            INVALID_CORDOVA_CONFIGURATION: "invalid-cordova-configuration",
            INVALID_CUSTOM_TOKEN: "invalid-custom-token",
            INVALID_EMAIL: "invalid-email",
            INVALID_IDP_RESPONSE: "invalid-credential",
            INVALID_MESSAGE_PAYLOAD: "invalid-message-payload",
            INVALID_OAUTH_CLIENT_ID: "invalid-oauth-client-id",
            INVALID_OAUTH_PROVIDER: "invalid-oauth-provider",
            INVALID_OOB_CODE: "invalid-action-code",
            INVALID_ORIGIN: "unauthorized-domain",
            INVALID_PASSWORD: "wrong-password",
            INVALID_PERSISTENCE: "invalid-persistence-type",
            INVALID_PHONE_NUMBER: "invalid-phone-number",
            INVALID_RECIPIENT_EMAIL: "invalid-recipient-email",
            INVALID_SENDER: "invalid-sender",
            INVALID_SESSION_INFO: "invalid-verification-id",
            MISSING_ANDROID_PACKAGE_NAME: "missing-android-pkg-name",
            MISSING_APP_CREDENTIAL: "missing-app-credential",
            MISSING_AUTH_DOMAIN: "auth-domain-config-required",
            MISSING_CODE: "missing-verification-code",
            MISSING_CONTINUE_URI: "missing-continue-uri",
            MISSING_IFRAME_START: "missing-iframe-start",
            MISSING_IOS_BUNDLE_ID: "missing-ios-bundle-id",
            MISSING_PHONE_NUMBER: "missing-phone-number",
            MISSING_SESSION_INFO: "missing-verification-id",
            MODULE_DESTROYED: "app-deleted",
            NEED_CONFIRMATION: "account-exists-with-different-credential",
            NETWORK_REQUEST_FAILED: "network-request-failed",
            NO_AUTH_EVENT: "no-auth-event",
            NO_SUCH_PROVIDER: "no-such-provider",
            OPERATION_NOT_ALLOWED: "operation-not-allowed",
            OPERATION_NOT_SUPPORTED: "operation-not-supported-in-this-environment",
            POPUP_BLOCKED: "popup-blocked",
            POPUP_CLOSED_BY_USER: "popup-closed-by-user",
            PROVIDER_ALREADY_LINKED: "provider-already-linked",
            QUOTA_EXCEEDED: "quota-exceeded",
            REDIRECT_CANCELLED_BY_USER: "redirect-cancelled-by-user",
            REDIRECT_OPERATION_PENDING: "redirect-operation-pending",
            TIMEOUT: "timeout",
            TOKEN_EXPIRED: "user-token-expired",
            TOO_MANY_ATTEMPTS_TRY_LATER: "too-many-requests",
            UNAUTHORIZED_DOMAIN: "unauthorized-continue-uri",
            UNSUPPORTED_PERSISTENCE: "unsupported-persistence-type",
            USER_CANCELLED: "user-cancelled",
            USER_DELETED: "user-not-found",
            USER_DISABLED: "user-disabled",
            USER_MISMATCH: "user-mismatch",
            USER_SIGNED_OUT: "user-signed-out",
            WEAK_PASSWORD: "weak-password",
            WEB_STORAGE_UNSUPPORTED: "web-storage-unsupported"
          };
          fireauth.AuthError.MESSAGES_ = {};
          fireauth.AuthError.MESSAGES_[fireauth.authenum.Error.ARGUMENT_ERROR] = "";
          fireauth.AuthError.MESSAGES_[fireauth.authenum.Error.APP_NOT_AUTHORIZED] = "This app, identified by the domain where it's hosted, is not " + "authorized to use Firebase Authentication with the provided API key. " + "Review your key configuration in the Google API console.";
          fireauth.AuthError.MESSAGES_[fireauth.authenum.Error.APP_NOT_INSTALLED] = "The requested mobile application corresponding to the identifier (" + "Android package name or iOS bundle ID) provided is not installed on " + "this device.";
          fireauth.AuthError.MESSAGES_[fireauth.authenum.Error.CAPTCHA_CHECK_FAILED] = "The reCAPTCHA response token provided is either invalid, expired, " + "already used or the domain associated with it does not match the list " + "of whitelisted domains.";
          fireauth.AuthError.MESSAGES_[fireauth.authenum.Error.CODE_EXPIRED] = "The SMS code has expired. Please re-send the verification code to try " + "again.";
          fireauth.AuthError.MESSAGES_[fireauth.authenum.Error.CORDOVA_NOT_READY] = "Cordova framework is not ready.";
          fireauth.AuthError.MESSAGES_[fireauth.authenum.Error.CORS_UNSUPPORTED] = "This browser is not supported.";
          fireauth.AuthError.MESSAGES_[fireauth.authenum.Error.CREDENTIAL_ALREADY_IN_USE] = "This credential is already associated with a different user account.";
          fireauth.AuthError.MESSAGES_[fireauth.authenum.Error.CREDENTIAL_MISMATCH] = "The custom token corresponds to a different audience.";
          fireauth.AuthError.MESSAGES_[fireauth.authenum.Error.CREDENTIAL_TOO_OLD_LOGIN_AGAIN] = "This operation is sensitive and requires recent authentication. Log in " + "again before retrying this request.";
          fireauth.AuthError.MESSAGES_[fireauth.authenum.Error.DYNAMIC_LINK_NOT_ACTIVATED] = "Please activate " + "Dynamic Links in the Firebase Console and agree to the terms and " + "conditions.";
          fireauth.AuthError.MESSAGES_[fireauth.authenum.Error.EMAIL_EXISTS] = "The email address is already in use by another account.";
          fireauth.AuthError.MESSAGES_[fireauth.authenum.Error.EXPIRED_OOB_CODE] = "The action code has expired. ";
          fireauth.AuthError.MESSAGES_[fireauth.authenum.Error.EXPIRED_POPUP_REQUEST] = "This operation has been cancelled due to another conflicting popup " + "being opened.";
          fireauth.AuthError.MESSAGES_[fireauth.authenum.Error.INTERNAL_ERROR] = "An internal error has occurred.";
          fireauth.AuthError.MESSAGES_[fireauth.authenum.Error.INVALID_APP_CREDENTIAL] = "The phone verification request contains an invalid application verifier." + " The reCAPTCHA token response is either invalid or expired.";
          fireauth.AuthError.MESSAGES_[fireauth.authenum.Error.INVALID_APP_ID] = "The mobile app identifier is not registed for the current project.";
          fireauth.AuthError.MESSAGES_[fireauth.authenum.Error.INVALID_AUTH] = "The user's credential is no longer valid. The user must sign in again.";
          fireauth.AuthError.MESSAGES_[fireauth.authenum.Error.INVALID_AUTH_EVENT] = "An internal error has occurred.";
          fireauth.AuthError.MESSAGES_[fireauth.authenum.Error.INVALID_CODE] = "The SMS verification code used to create the phone auth credential is " + "invalid. Please resend the verification code sms and be sure use the " + "verification code provided by the user.";
          fireauth.AuthError.MESSAGES_[fireauth.authenum.Error.INVALID_CONTINUE_URI] = "The continue URL provided in the request is invalid.";
          fireauth.AuthError.MESSAGES_[fireauth.authenum.Error.INVALID_CORDOVA_CONFIGURATION] = "The following" + " Cordova plugins must be installed to enable OAuth sign-in: " + "cordova-plugin-buildinfo, cordova-universal-links-plugin, " + "cordova-plugin-browsertab, cordova-plugin-inappbrowser and " + "cordova-plugin-customurlscheme.";
          fireauth.AuthError.MESSAGES_[fireauth.authenum.Error.INVALID_CUSTOM_TOKEN] = "The custom token format is incorrect. Please check the documentation.";
          fireauth.AuthError.MESSAGES_[fireauth.authenum.Error.INVALID_EMAIL] = "The email address is badly formatted.";
          fireauth.AuthError.MESSAGES_[fireauth.authenum.Error.INVALID_API_KEY] = "Your API key is invalid, please check you have copied it correctly.";
          fireauth.AuthError.MESSAGES_[fireauth.authenum.Error.INVALID_CERT_HASH] = "The SHA-1 certificate hash provided is invalid.";
          fireauth.AuthError.MESSAGES_[fireauth.authenum.Error.INVALID_IDP_RESPONSE] = "The supplied auth credential is malformed or has expired.";
          fireauth.AuthError.MESSAGES_[fireauth.authenum.Error.INVALID_PERSISTENCE] = "The specified persistence type is invalid. It can only be local, " + "session or none.";
          fireauth.AuthError.MESSAGES_[fireauth.authenum.Error.INVALID_MESSAGE_PAYLOAD] = "The email template corresponding to this action contains invalid charac" + "ters in its message. Please fix by going to the Auth email templates se" + "ction in the Firebase Console.";
          fireauth.AuthError.MESSAGES_[fireauth.authenum.Error.INVALID_OAUTH_PROVIDER] = "EmailAuthProvider is not supported for this operation. This operation " + "only supports OAuth providers.";
          fireauth.AuthError.MESSAGES_[fireauth.authenum.Error.INVALID_OAUTH_CLIENT_ID] = "The OAuth client ID provided is either invalid or does not match the " + "specified API key.";
          fireauth.AuthError.MESSAGES_[fireauth.authenum.Error.INVALID_ORIGIN] = "This domain is not authorized for OAuth operations for your Firebase " + "project. Edit the list of authorized domains from the Firebase console.";
          fireauth.AuthError.MESSAGES_[fireauth.authenum.Error.INVALID_OOB_CODE] = "The action code is invalid. This can happen if the code is malformed, " + "expired, or has already been used.";
          fireauth.AuthError.MESSAGES_[fireauth.authenum.Error.INVALID_PASSWORD] = "The password is invalid or the user does not have a password.";
          fireauth.AuthError.MESSAGES_[fireauth.authenum.Error.INVALID_PHONE_NUMBER] = "The format of the phone number provided is incorrect. Please enter the " + "phone number in a format that can be parsed into E.164 format. E.164 " + "phone numbers are written in the format [+][country code][subscriber " + "number including area code].";
          fireauth.AuthError.MESSAGES_[fireauth.authenum.Error.INVALID_RECIPIENT_EMAIL] = "The email corresponding to this action failed to send as the provided " + "recipient email address is invalid.";
          fireauth.AuthError.MESSAGES_[fireauth.authenum.Error.INVALID_SENDER] = "The email template corresponding to this action contains an invalid sen" + "der email or name. Please fix by going to the Auth email templates sect" + "ion in the Firebase Console.";
          fireauth.AuthError.MESSAGES_[fireauth.authenum.Error.INVALID_SESSION_INFO] = "The verification ID used to create the phone auth credential is invalid.";
          fireauth.AuthError.MESSAGES_[fireauth.authenum.Error.MISSING_ANDROID_PACKAGE_NAME] = "An Android " + "Package Name must be provided if the Android App is required to be " + "installed.";
          fireauth.AuthError.MESSAGES_[fireauth.authenum.Error.MISSING_AUTH_DOMAIN] = "Be sure to include authDomain when calling firebase.initializeApp(), " + "by following the instructions in the Firebase console.";
          fireauth.AuthError.MESSAGES_[fireauth.authenum.Error.MISSING_APP_CREDENTIAL] = "The phone verification request is missing an application verifier " + "assertion. A reCAPTCHA response token needs to be provided.";
          fireauth.AuthError.MESSAGES_[fireauth.authenum.Error.MISSING_CODE] = "The phone auth credential was created with an empty SMS verification " + "code.";
          fireauth.AuthError.MESSAGES_[fireauth.authenum.Error.MISSING_CONTINUE_URI] = "A continue URL must be provided in the request.";
          fireauth.AuthError.MESSAGES_[fireauth.authenum.Error.MISSING_IFRAME_START] = "An internal error has occurred.";
          fireauth.AuthError.MESSAGES_[fireauth.authenum.Error.MISSING_IOS_BUNDLE_ID] = "An iOS Bundle ID must be provided if an App Store ID is provided.";
          fireauth.AuthError.MESSAGES_[fireauth.authenum.Error.MISSING_PHONE_NUMBER] = "To send verification codes, provide a phone number for the recipient.";
          fireauth.AuthError.MESSAGES_[fireauth.authenum.Error.MISSING_SESSION_INFO] = "The phone auth credential was created with an empty verification ID.";
          fireauth.AuthError.MESSAGES_[fireauth.authenum.Error.MODULE_DESTROYED] = "This instance of FirebaseApp has been deleted.";
          fireauth.AuthError.MESSAGES_[fireauth.authenum.Error.NEED_CONFIRMATION] = "An account already exists with the same email address but different " + "sign-in credentials. Sign in using a provider associated with this " + "email address.";
          fireauth.AuthError.MESSAGES_[fireauth.authenum.Error.NETWORK_REQUEST_FAILED] = "A network error (such as timeout, interrupted connection or " + "unreachable host) has occurred.";
          fireauth.AuthError.MESSAGES_[fireauth.authenum.Error.NO_AUTH_EVENT] = "An internal error has occurred.";
          fireauth.AuthError.MESSAGES_[fireauth.authenum.Error.NO_SUCH_PROVIDER] = "User was not linked to an account with the given provider.";
          fireauth.AuthError.MESSAGES_[fireauth.authenum.Error.OPERATION_NOT_ALLOWED] = "The given sign-in provider is disabled for this Firebase project. " + "Enable it in the Firebase console, under the sign-in method tab of the " + "Auth section.";
          fireauth.AuthError.MESSAGES_[fireauth.authenum.Error.OPERATION_NOT_SUPPORTED] = "This operation is not supported in the environment this application is " + 'running on. "location.protocol" must be http, https or chrome-extension' + " and web storage must be enabled.";
          fireauth.AuthError.MESSAGES_[fireauth.authenum.Error.POPUP_BLOCKED] = "Unable to establish a connection with the popup. It may have been " + "blocked by the browser.";
          fireauth.AuthError.MESSAGES_[fireauth.authenum.Error.POPUP_CLOSED_BY_USER] = "The popup has been closed by the user before finalizing the operation.";
          fireauth.AuthError.MESSAGES_[fireauth.authenum.Error.PROVIDER_ALREADY_LINKED] = "User can only be linked to one identity for the given provider.";
          fireauth.AuthError.MESSAGES_[fireauth.authenum.Error.QUOTA_EXCEEDED] = "The project's quota for this operation has been exceeded.";
          fireauth.AuthError.MESSAGES_[fireauth.authenum.Error.REDIRECT_CANCELLED_BY_USER] = "The redirect operation has been cancelled by the user before finalizing.";
          fireauth.AuthError.MESSAGES_[fireauth.authenum.Error.REDIRECT_OPERATION_PENDING] = "A redirect sign-in operation is already pending.";
          fireauth.AuthError.MESSAGES_[fireauth.authenum.Error.TIMEOUT] = "The operation has timed out.";
          fireauth.AuthError.MESSAGES_[fireauth.authenum.Error.TOKEN_EXPIRED] = "The user's credential is no longer valid. The user must sign in again.";
          fireauth.AuthError.MESSAGES_[fireauth.authenum.Error.TOO_MANY_ATTEMPTS_TRY_LATER] = "We have blocked all requests from this device due to unusual activity. " + "Try again later.";
          fireauth.AuthError.MESSAGES_[fireauth.authenum.Error.UNAUTHORIZED_DOMAIN] = "The domain of the continue URL is not whitelisted.  Please whitelist " + "the domain in the Firebase console.";
          fireauth.AuthError.MESSAGES_[fireauth.authenum.Error.UNSUPPORTED_PERSISTENCE] = "The current environment does not support the specified persistence type.";
          fireauth.AuthError.MESSAGES_[fireauth.authenum.Error.USER_CANCELLED] = "User did not grant your application the permissions it requested.";
          fireauth.AuthError.MESSAGES_[fireauth.authenum.Error.USER_DELETED] = "There is no user record corresponding to this identifier. The user may " + "have been deleted.";
          fireauth.AuthError.MESSAGES_[fireauth.authenum.Error.USER_DISABLED] = "The user account has been disabled by an administrator.";
          fireauth.AuthError.MESSAGES_[fireauth.authenum.Error.USER_MISMATCH] = "The supplied credentials do not correspond to the previously signed in " + "user.";
          fireauth.AuthError.MESSAGES_[fireauth.authenum.Error.USER_SIGNED_OUT] = "";
          fireauth.AuthError.MESSAGES_[fireauth.authenum.Error.WEAK_PASSWORD] = "The password must be 6 characters long or more.";
          fireauth.AuthError.MESSAGES_[fireauth.authenum.Error.WEB_STORAGE_UNSUPPORTED] = "This browser is not supported or 3rd party cookies and data may be " + "disabled.";
          goog.provide("fireauth.ActionCodeSettings");
          goog.require("fireauth.AuthError");
          goog.require("fireauth.authenum.Error");
          fireauth.ActionCodeSettings = function (settingsObj) {
            this.initialize_(settingsObj)
          };
          fireauth.ActionCodeSettings.prototype.initialize_ = function (settingsObj) {
            var continueUrl = settingsObj[fireauth.ActionCodeSettings.RawField.URL];
            if (typeof continueUrl === "undefined") throw new fireauth.AuthError(fireauth.authenum.Error.MISSING_CONTINUE_URI); else if (typeof continueUrl !== "string" || typeof continueUrl === "string" && !continueUrl.length) throw new fireauth.AuthError(fireauth.authenum.Error.INVALID_CONTINUE_URI);
            this.continueUrl_ = continueUrl;
            this.apn_ = null;
            this.amv_ = null;
            this.installApp_ = false;
            var androidSettings = settingsObj[fireauth.ActionCodeSettings.RawField.ANDROID];
            if (androidSettings && typeof androidSettings === "object") {
              var apn = androidSettings[fireauth.ActionCodeSettings.AndroidRawField.PACKAGE_NAME];
              var installApp = androidSettings[fireauth.ActionCodeSettings.AndroidRawField.INSTALL_APP];
              var amv = androidSettings[fireauth.ActionCodeSettings.AndroidRawField.MINIMUM_VERSION];
              if (typeof apn === "string" && apn.length) {
                this.apn_ = apn;
                if (typeof installApp !== "undefined" && typeof installApp !== "boolean") throw new fireauth.AuthError(fireauth.authenum.Error.ARGUMENT_ERROR,
                  fireauth.ActionCodeSettings.AndroidRawField.INSTALL_APP + " property must be a boolean when specified.");
                this.installApp_ = !!installApp;
                if (typeof amv !== "undefined" && (typeof amv !== "string" || typeof amv === "string" && !amv.length)) throw new fireauth.AuthError(fireauth.authenum.Error.ARGUMENT_ERROR, fireauth.ActionCodeSettings.AndroidRawField.MINIMUM_VERSION + " property must be a non empty string when specified.");
                this.amv_ = amv || null
              } else if (typeof apn !== "undefined") throw new fireauth.AuthError(fireauth.authenum.Error.ARGUMENT_ERROR,
                fireauth.ActionCodeSettings.AndroidRawField.PACKAGE_NAME + " property must be a non empty string when specified."); else if (typeof installApp !== "undefined" || typeof amv !== "undefined") throw new fireauth.AuthError(fireauth.authenum.Error.MISSING_ANDROID_PACKAGE_NAME);
            } else if (typeof androidSettings !== "undefined") throw new fireauth.AuthError(fireauth.authenum.Error.ARGUMENT_ERROR, fireauth.ActionCodeSettings.RawField.ANDROID + " property must be a non null object when specified.");
            this.ibi_ = null;
            var iosSettings =
              settingsObj[fireauth.ActionCodeSettings.RawField.IOS];
            if (iosSettings && typeof iosSettings === "object") {
              var ibi = iosSettings[fireauth.ActionCodeSettings.IosRawField.BUNDLE_ID];
              if (typeof ibi === "string" && ibi.length) this.ibi_ = ibi; else if (typeof ibi !== "undefined") throw new fireauth.AuthError(fireauth.authenum.Error.ARGUMENT_ERROR, fireauth.ActionCodeSettings.IosRawField.BUNDLE_ID + " property must be a non empty string when specified.");
            } else if (typeof iosSettings !== "undefined") throw new fireauth.AuthError(fireauth.authenum.Error.ARGUMENT_ERROR,
              fireauth.ActionCodeSettings.RawField.IOS + " property must be a non null object when specified.");
            var canHandleCodeInApp = settingsObj[fireauth.ActionCodeSettings.RawField.HANDLE_CODE_IN_APP];
            if (typeof canHandleCodeInApp !== "undefined" && typeof canHandleCodeInApp !== "boolean") throw new fireauth.AuthError(fireauth.authenum.Error.ARGUMENT_ERROR, fireauth.ActionCodeSettings.RawField.HANDLE_CODE_IN_APP + " property must be a boolean when specified.");
            this.canHandleCodeInApp_ = !!canHandleCodeInApp;
            if (this.canHandleCodeInApp_ &&
              !this.ibi_ && !this.apn_) throw new fireauth.AuthError(fireauth.authenum.Error.ARGUMENT_ERROR, fireauth.ActionCodeSettings.RawField.HANDLE_CODE_IN_APP + " property can't be true when no mobile application is provided.");
          };
          fireauth.ActionCodeSettings.RequestField = {
            ANDROID_INSTALL_APP: "androidInstallApp",
            ANDROID_MINIMUM_VERSION: "androidMinimumVersion",
            ANDROID_PACKAGE_NAME: "androidPackageName",
            CAN_HANDLE_CODE_IN_APP: "canHandleCodeInApp",
            CONTINUE_URL: "continueUrl",
            IOS_BUNDLE_ID: "iOSBundleId"
          };
          fireauth.ActionCodeSettings.RawField = {
            ANDROID: "android",
            HANDLE_CODE_IN_APP: "handleCodeInApp",
            IOS: "iOS",
            URL: "url"
          };
          fireauth.ActionCodeSettings.AndroidRawField = {
            INSTALL_APP: "installApp",
            MINIMUM_VERSION: "minimumVersion",
            PACKAGE_NAME: "packageName"
          };
          fireauth.ActionCodeSettings.IosRawField = {BUNDLE_ID: "bundleId"};
          fireauth.ActionCodeSettings.prototype.buildRequest = function () {
            var request = {};
            request[fireauth.ActionCodeSettings.RequestField.CONTINUE_URL] = this.continueUrl_;
            request[fireauth.ActionCodeSettings.RequestField.CAN_HANDLE_CODE_IN_APP] = this.canHandleCodeInApp_;
            request[fireauth.ActionCodeSettings.RequestField.ANDROID_PACKAGE_NAME] = this.apn_;
            if (this.apn_) {
              request[fireauth.ActionCodeSettings.RequestField.ANDROID_MINIMUM_VERSION] = this.amv_;
              request[fireauth.ActionCodeSettings.RequestField.ANDROID_INSTALL_APP] =
                this.installApp_
            }
            request[fireauth.ActionCodeSettings.RequestField.IOS_BUNDLE_ID] = this.ibi_;
            for (var key in request) if (request[key] === null) delete request[key];
            return request
          };
          goog.provide("fireauth.IdToken");
          goog.require("goog.crypt.base64");
          fireauth.IdToken = function (token) {
            this.iss_ = token["iss"];
            this.aud_ = token["aud"];
            this.exp_ = token["exp"];
            this.localId_ = token["sub"];
            var now = goog.now() / 1E3;
            this.iat_ = token["iat"] || (now > this.exp_ ? this.exp_ : now);
            this.email_ = token["email"] || null;
            this.verified_ = !!token["verified"];
            this.providerId_ = token["provider_id"] || token["firebase"] && token["firebase"]["sign_in_provider"] || null;
            this.anonymous_ = !!token["is_anonymous"] || this.providerId_ == "anonymous";
            this.federatedId_ = token["federated_id"] || null;
            this.displayName_ =
              token["display_name"] || null;
            this.photoURL_ = token["photo_url"] || null;
            this.phoneNumber_ = token["phone_number"] || null
          };
          fireauth.IdToken.Firebase;
          fireauth.IdToken.JsonToken;
          fireauth.IdToken.prototype.getEmail = function () {
            return this.email_
          };
          fireauth.IdToken.prototype.getExp = function () {
            return this.exp_
          };
          fireauth.IdToken.prototype.getProviderId = function () {
            return this.providerId_
          };
          fireauth.IdToken.prototype.getDisplayName = function () {
            return this.displayName_
          };
          fireauth.IdToken.prototype.getPhotoUrl = function () {
            return this.photoURL_
          };
          fireauth.IdToken.prototype.getLocalId = function () {
            return this.localId_
          };
          fireauth.IdToken.prototype.getFederatedId = function () {
            return this.federatedId_
          };
          fireauth.IdToken.prototype.isAnonymous = function () {
            return this.anonymous_
          };
          fireauth.IdToken.prototype.isVerified = function () {
            return this.verified_
          };
          fireauth.IdToken.prototype.isExpired = function () {
            var now = Math.floor(goog.now() / 1E3);
            return this.getExp() <= now
          };
          fireauth.IdToken.prototype.getIssuer = function () {
            return this.iss_
          };
          fireauth.IdToken.prototype.getPhoneNumber = function () {
            return this.phoneNumber_
          };
          fireauth.IdToken.parse = function (tokenString) {
            var fields = tokenString.split(".");
            if (fields.length != 3) return null;
            var jsonInfo = fields[1];
            var padLen = (4 - jsonInfo.length % 4) % 4;
            for (var i = 0; i < padLen; i++) jsonInfo += ".";
            try {
              var token = JSON.parse(goog.crypt.base64.decodeString(jsonInfo, true));
              if (token["sub"] && token["iss"] && token["aud"] && token["exp"]) return new fireauth.IdToken(token)
            } catch (e) {
            }
            return null
          };
          goog.provide("fireauth.idp");
          goog.provide("fireauth.idp.IdpSettings");
          goog.provide("fireauth.idp.ProviderId");
          goog.provide("fireauth.idp.Settings");
          fireauth.idp.ProviderId = {
            ANONYMOUS: "anonymous",
            FACEBOOK: "facebook.com",
            FIREBASE: "firebase",
            GITHUB: "github.com",
            GOOGLE: "google.com",
            PASSWORD: "password",
            PHONE: "phone",
            TWITTER: "twitter.com"
          };
          fireauth.idp.IdpSettings;
          fireauth.idp.RESERVED_OAUTH1_PARAMS = ["oauth_consumer_key", "oauth_nonce", "oauth_signature", "oauth_signature_method", "oauth_timestamp", "oauth_token", "oauth_version"];
          fireauth.idp.RESERVED_OAUTH2_PARAMS = ["client_id", "response_type", "scope", "redirect_uri", "state"];
          fireauth.idp.Settings = {
            FACEBOOK: {
              languageParam: "locale",
              popupWidth: 500,
              popupHeight: 600,
              providerId: fireauth.idp.ProviderId.FACEBOOK,
              reservedOAuthParameters: fireauth.idp.RESERVED_OAUTH2_PARAMS
            },
            GITHUB: {
              languageParam: null,
              popupWidth: 500,
              popupHeight: 620,
              providerId: fireauth.idp.ProviderId.GITHUB,
              reservedOAuthParameters: fireauth.idp.RESERVED_OAUTH2_PARAMS
            },
            GOOGLE: {
              languageParam: "hl",
              popupWidth: 515,
              popupHeight: 680,
              providerId: fireauth.idp.ProviderId.GOOGLE,
              reservedOAuthParameters: fireauth.idp.RESERVED_OAUTH2_PARAMS
            },
            TWITTER: {
              languageParam: "lang",
              popupWidth: 485,
              popupHeight: 705,
              providerId: fireauth.idp.ProviderId.TWITTER,
              reservedOAuthParameters: fireauth.idp.RESERVED_OAUTH1_PARAMS
            }
          };
          fireauth.idp.getIdpSettings = function (providerId) {
            for (var key in fireauth.idp.Settings) if (fireauth.idp.Settings[key].providerId == providerId) return fireauth.idp.Settings[key];
            return null
          };
          fireauth.idp.getReservedOAuthParams = function (providerId) {
            var settings = fireauth.idp.getIdpSettings(providerId);
            return settings && settings.reservedOAuthParameters || []
          };
          goog.provide("fireauth.AdditionalUserInfo");
          goog.provide("fireauth.FacebookAdditionalUserInfo");
          goog.provide("fireauth.FederatedAdditionalUserInfo");
          goog.provide("fireauth.GenericAdditionalUserInfo");
          goog.provide("fireauth.GithubAdditionalUserInfo");
          goog.provide("fireauth.GoogleAdditionalUserInfo");
          goog.provide("fireauth.TwitterAdditionalUserInfo");
          goog.require("fireauth.IdToken");
          goog.require("fireauth.idp");
          goog.require("fireauth.object");
          goog.require("fireauth.util");
          fireauth.AdditionalUserInfo = function () {
          };
          fireauth.AdditionalUserInfo.fromPlainObject = function (resp) {
            var factory = {};
            factory[fireauth.idp.ProviderId.FACEBOOK] = fireauth.FacebookAdditionalUserInfo;
            factory[fireauth.idp.ProviderId.GOOGLE] = fireauth.GoogleAdditionalUserInfo;
            factory[fireauth.idp.ProviderId.GITHUB] = fireauth.GithubAdditionalUserInfo;
            factory[fireauth.idp.ProviderId.TWITTER] = fireauth.TwitterAdditionalUserInfo;
            var providerId = resp && resp[fireauth.AdditionalUserInfo.VerifyAssertionField.PROVIDER_ID];
            try {
              if (providerId) if (factory[providerId]) return new factory[providerId](resp);
              else return new fireauth.FederatedAdditionalUserInfo(resp); else if (typeof resp[fireauth.AdditionalUserInfo.VerifyAssertionField.ID_TOKEN] !== "undefined") return new fireauth.GenericAdditionalUserInfo(resp)
            } catch (e) {
            }
            return null
          };
          fireauth.AdditionalUserInfo.VerifyAssertionField = {
            ID_TOKEN: "idToken",
            IS_NEW_USER: "isNewUser",
            PROVIDER_ID: "providerId",
            RAW_USER_INFO: "rawUserInfo",
            SCREEN_NAME: "screenName"
          };
          fireauth.GenericAdditionalUserInfo = function (info) {
            var providerId = info[fireauth.AdditionalUserInfo.VerifyAssertionField.PROVIDER_ID];
            if (!providerId && info[fireauth.AdditionalUserInfo.VerifyAssertionField.ID_TOKEN]) {
              var idToken = fireauth.IdToken.parse(info[fireauth.AdditionalUserInfo.VerifyAssertionField.ID_TOKEN]);
              if (idToken && idToken.getProviderId()) providerId = idToken.getProviderId()
            }
            if (!providerId) throw new Error("Invalid additional user info!");
            var isNewUser = !!info[fireauth.AdditionalUserInfo.VerifyAssertionField.IS_NEW_USER];
            fireauth.object.setReadonlyProperty(this, "providerId", providerId);
            fireauth.object.setReadonlyProperty(this, "isNewUser", isNewUser)
          };
          fireauth.FederatedAdditionalUserInfo = function (info) {
            fireauth.FederatedAdditionalUserInfo.base(this, "constructor", info);
            var profile = fireauth.util.parseJSON(info[fireauth.AdditionalUserInfo.VerifyAssertionField.RAW_USER_INFO] || "{}");
            fireauth.object.setReadonlyProperty(this, "profile", fireauth.object.unsafeCreateReadOnlyCopy(profile || {}))
          };
          goog.inherits(fireauth.FederatedAdditionalUserInfo, fireauth.GenericAdditionalUserInfo);
          fireauth.FacebookAdditionalUserInfo = function (info) {
            fireauth.FacebookAdditionalUserInfo.base(this, "constructor", info);
            if (this["providerId"] != fireauth.idp.ProviderId.FACEBOOK) throw new Error("Invalid provider ID!");
          };
          goog.inherits(fireauth.FacebookAdditionalUserInfo, fireauth.FederatedAdditionalUserInfo);
          fireauth.GithubAdditionalUserInfo = function (info) {
            fireauth.GithubAdditionalUserInfo.base(this, "constructor", info);
            if (this["providerId"] != fireauth.idp.ProviderId.GITHUB) throw new Error("Invalid provider ID!");
            fireauth.object.setReadonlyProperty(this, "username", this["profile"] && this["profile"]["login"] || null)
          };
          goog.inherits(fireauth.GithubAdditionalUserInfo, fireauth.FederatedAdditionalUserInfo);
          fireauth.GoogleAdditionalUserInfo = function (info) {
            fireauth.GoogleAdditionalUserInfo.base(this, "constructor", info);
            if (this["providerId"] != fireauth.idp.ProviderId.GOOGLE) throw new Error("Invalid provider ID!");
          };
          goog.inherits(fireauth.GoogleAdditionalUserInfo, fireauth.FederatedAdditionalUserInfo);
          fireauth.TwitterAdditionalUserInfo = function (info) {
            fireauth.TwitterAdditionalUserInfo.base(this, "constructor", info);
            if (this["providerId"] != fireauth.idp.ProviderId.TWITTER) throw new Error("Invalid provider ID!");
            fireauth.object.setReadonlyProperty(this, "username", info[fireauth.AdditionalUserInfo.VerifyAssertionField.SCREEN_NAME] || null)
          };
          goog.inherits(fireauth.TwitterAdditionalUserInfo, fireauth.FederatedAdditionalUserInfo);
          goog.provide("fireauth.AuthCredential");
          goog.provide("fireauth.AuthProvider");
          goog.provide("fireauth.EmailAuthCredential");
          goog.provide("fireauth.EmailAuthProvider");
          goog.provide("fireauth.FacebookAuthProvider");
          goog.provide("fireauth.FederatedProvider");
          goog.provide("fireauth.GithubAuthProvider");
          goog.provide("fireauth.GoogleAuthProvider");
          goog.provide("fireauth.OAuthCredential");
          goog.provide("fireauth.OAuthProvider");
          goog.provide("fireauth.OAuthResponse");
          goog.provide("fireauth.PhoneAuthCredential");
          goog.provide("fireauth.PhoneAuthProvider");
          goog.provide("fireauth.TwitterAuthProvider");
          goog.require("fireauth.AuthError");
          goog.require("fireauth.IdToken");
          goog.require("fireauth.authenum.Error");
          goog.require("fireauth.idp");
          goog.require("fireauth.object");
          goog.require("fireauth.util");
          goog.require("goog.Promise");
          goog.require("goog.Uri");
          goog.require("goog.array");
          goog.require("goog.object");
          goog.forwardDeclare("fireauth.RpcHandler");
          fireauth.AuthCredential = function () {
          };
          fireauth.AuthCredential.prototype.getIdTokenProvider;
          fireauth.AuthCredential.prototype.linkToIdToken;
          fireauth.AuthCredential.prototype.matchIdTokenWithUid;
          fireauth.AuthCredential.prototype.toPlainObject;
          fireauth.AuthCredential.verifyTokenResponseUid = function (idTokenResolver, uid) {
            return idTokenResolver.then(function (response) {
              if (response[fireauth.RpcHandler.AuthServerField.ID_TOKEN]) {
                var parsedIdToken = fireauth.IdToken.parse(response[fireauth.RpcHandler.AuthServerField.ID_TOKEN]);
                if (!parsedIdToken || uid != parsedIdToken.getLocalId()) throw new fireauth.AuthError(fireauth.authenum.Error.USER_MISMATCH);
                return response
              }
              throw new fireauth.AuthError(fireauth.authenum.Error.USER_MISMATCH);
            }).thenCatch(function (error) {
              throw fireauth.AuthError.translateError(error,
                fireauth.authenum.Error.USER_DELETED, fireauth.authenum.Error.USER_MISMATCH);
            })
          };
          fireauth.AuthProvider = function () {
          };
          fireauth.AuthProvider.credential;
          fireauth.OAuthResponse;
          fireauth.OAuthCredential = function (providerId, oauthResponse) {
            if (oauthResponse["idToken"] || oauthResponse["accessToken"]) {
              if (oauthResponse["idToken"]) fireauth.object.setReadonlyProperty(this, "idToken", oauthResponse["idToken"]);
              if (oauthResponse["accessToken"]) fireauth.object.setReadonlyProperty(this, "accessToken", oauthResponse["accessToken"])
            } else if (oauthResponse["oauthToken"] && oauthResponse["oauthTokenSecret"]) {
              fireauth.object.setReadonlyProperty(this, "accessToken", oauthResponse["oauthToken"]);
              fireauth.object.setReadonlyProperty(this,
                "secret", oauthResponse["oauthTokenSecret"])
            } else throw new fireauth.AuthError(fireauth.authenum.Error.INTERNAL_ERROR, "failed to construct a credential");
            fireauth.object.setReadonlyProperty(this, "providerId", providerId)
          };
          fireauth.OAuthCredential.prototype.getIdTokenProvider = function (rpcHandler) {
            return rpcHandler.verifyAssertion(this.makeVerifyAssertionRequest_())
          };
          fireauth.OAuthCredential.prototype.linkToIdToken = function (rpcHandler, idToken) {
            var request = this.makeVerifyAssertionRequest_();
            request["idToken"] = idToken;
            return rpcHandler.verifyAssertionForLinking(request)
          };
          fireauth.OAuthCredential.prototype.matchIdTokenWithUid = function (rpcHandler, uid) {
            var request = this.makeVerifyAssertionRequest_();
            return fireauth.AuthCredential.verifyTokenResponseUid(rpcHandler.verifyAssertionForExisting(request), uid)
          };
          fireauth.OAuthCredential.prototype.makeVerifyAssertionRequest_ = function () {
            var postBody = {};
            if (this["idToken"]) postBody["id_token"] = this["idToken"];
            if (this["accessToken"]) postBody["access_token"] = this["accessToken"];
            if (this["secret"]) postBody["oauth_token_secret"] = this["secret"];
            postBody["providerId"] = this["providerId"];
            return {"postBody": goog.Uri.QueryData.createFromMap(postBody).toString(), "requestUri": "http://localhost"}
          };
          fireauth.OAuthCredential.prototype.toPlainObject = function () {
            var obj = {"providerId": this["providerId"]};
            if (this["idToken"]) obj["oauthIdToken"] = this["idToken"];
            if (this["accessToken"]) obj["oauthAccessToken"] = this["accessToken"];
            if (this["secret"]) obj["oauthTokenSecret"] = this["secret"];
            return obj
          };
          fireauth.FederatedProvider = function (providerId, opt_reservedParams) {
            this.reservedParams_ = opt_reservedParams || [];
            fireauth.object.setReadonlyProperties(this, {"providerId": providerId, "isOAuthProvider": true});
            this.customParameters_ = {};
            this.languageParameter = (fireauth.idp.getIdpSettings(providerId) || {}).languageParam || null;
            this.defaultLanguageCode = null
          };
          fireauth.FederatedProvider.prototype.setCustomParameters = function (customParameters) {
            this.customParameters_ = goog.object.clone(customParameters);
            return this
          };
          fireauth.FederatedProvider.prototype.setDefaultLanguage = function (languageCode) {
            this.defaultLanguageCode = languageCode
          };
          fireauth.FederatedProvider.prototype.getCustomParameters = function () {
            var params = fireauth.util.copyWithoutNullsOrUndefined(this.customParameters_);
            for (var key in params) params[key] = params[key].toString();
            var customParams = fireauth.util.removeEntriesWithKeys(params, this.reservedParams_);
            if (this.languageParameter && this.defaultLanguageCode && !customParams[this.languageParameter]) customParams[this.languageParameter] = this.defaultLanguageCode;
            return customParams
          };
          fireauth.OAuthProvider = function (providerId) {
            fireauth.OAuthProvider.base(this, "constructor", providerId, fireauth.idp.RESERVED_OAUTH2_PARAMS);
            this.scopes_ = []
          };
          goog.inherits(fireauth.OAuthProvider, fireauth.FederatedProvider);
          fireauth.OAuthProvider.prototype.addScope = function (scope) {
            if (!goog.array.contains(this.scopes_, scope)) this.scopes_.push(scope);
            return this
          };
          fireauth.OAuthProvider.prototype.getScopes = function () {
            return goog.array.clone(this.scopes_)
          };
          fireauth.OAuthProvider.prototype.credential = function (opt_idToken, opt_accessToken) {
            if (!opt_idToken && !opt_accessToken) throw new fireauth.AuthError(fireauth.authenum.Error.ARGUMENT_ERROR, "credential failed: must provide the ID token and/or the access " + "token.");
            var oauthResponse = {"idToken": opt_idToken || null, "accessToken": opt_accessToken || null};
            return new fireauth.OAuthCredential(this["providerId"], oauthResponse)
          };
          fireauth.FacebookAuthProvider = function () {
            fireauth.FacebookAuthProvider.base(this, "constructor", fireauth.idp.ProviderId.FACEBOOK)
          };
          goog.inherits(fireauth.FacebookAuthProvider, fireauth.OAuthProvider);
          fireauth.object.setReadonlyProperty(fireauth.FacebookAuthProvider, "PROVIDER_ID", fireauth.idp.ProviderId.FACEBOOK);
          fireauth.FacebookAuthProvider.credential = function (accessTokenOrObject) {
            if (!accessTokenOrObject) throw new fireauth.AuthError(fireauth.authenum.Error.ARGUMENT_ERROR, "credential failed: expected 1 argument (the OAuth access token).");
            var accessToken = accessTokenOrObject;
            if (goog.isObject(accessTokenOrObject)) accessToken = accessTokenOrObject["accessToken"];
            return (new fireauth.FacebookAuthProvider).credential(null, accessToken)
          };
          fireauth.GithubAuthProvider = function () {
            fireauth.GithubAuthProvider.base(this, "constructor", fireauth.idp.ProviderId.GITHUB)
          };
          goog.inherits(fireauth.GithubAuthProvider, fireauth.OAuthProvider);
          fireauth.object.setReadonlyProperty(fireauth.GithubAuthProvider, "PROVIDER_ID", fireauth.idp.ProviderId.GITHUB);
          fireauth.GithubAuthProvider.credential = function (accessTokenOrObject) {
            if (!accessTokenOrObject) throw new fireauth.AuthError(fireauth.authenum.Error.ARGUMENT_ERROR, "credential failed: expected 1 argument (the OAuth access token).");
            var accessToken = accessTokenOrObject;
            if (goog.isObject(accessTokenOrObject)) accessToken = accessTokenOrObject["accessToken"];
            return (new fireauth.GithubAuthProvider).credential(null, accessToken)
          };
          fireauth.GoogleAuthProvider = function () {
            fireauth.GoogleAuthProvider.base(this, "constructor", fireauth.idp.ProviderId.GOOGLE);
            this.addScope("profile")
          };
          goog.inherits(fireauth.GoogleAuthProvider, fireauth.OAuthProvider);
          fireauth.object.setReadonlyProperty(fireauth.GoogleAuthProvider, "PROVIDER_ID", fireauth.idp.ProviderId.GOOGLE);
          fireauth.GoogleAuthProvider.credential = function (idTokenOrObject, accessToken) {
            var idToken = idTokenOrObject;
            if (goog.isObject(idTokenOrObject)) {
              idToken = idTokenOrObject["idToken"];
              accessToken = idTokenOrObject["accessToken"]
            }
            return (new fireauth.GoogleAuthProvider).credential(idToken, accessToken)
          };
          fireauth.TwitterAuthProvider = function () {
            fireauth.TwitterAuthProvider.base(this, "constructor", fireauth.idp.ProviderId.TWITTER, fireauth.idp.RESERVED_OAUTH1_PARAMS)
          };
          goog.inherits(fireauth.TwitterAuthProvider, fireauth.FederatedProvider);
          fireauth.object.setReadonlyProperty(fireauth.TwitterAuthProvider, "PROVIDER_ID", fireauth.idp.ProviderId.TWITTER);
          fireauth.TwitterAuthProvider.credential = function (tokenOrObject, secret) {
            var tokenObject = tokenOrObject;
            if (!goog.isObject(tokenObject)) tokenObject = {"oauthToken": tokenOrObject, "oauthTokenSecret": secret};
            if (!tokenObject["oauthToken"] || !tokenObject["oauthTokenSecret"]) throw new fireauth.AuthError(fireauth.authenum.Error.ARGUMENT_ERROR, "credential failed: expected 2 arguments (the OAuth access token " + "and secret).");
            return new fireauth.OAuthCredential(fireauth.idp.ProviderId.TWITTER, tokenObject)
          };
          fireauth.EmailAuthCredential = function (email, password) {
            this.email_ = email;
            this.password_ = password;
            fireauth.object.setReadonlyProperty(this, "providerId", fireauth.idp.ProviderId.PASSWORD)
          };
          fireauth.EmailAuthCredential.prototype.getIdTokenProvider = function (rpcHandler) {
            return rpcHandler.verifyPassword(this.email_, this.password_)
          };
          fireauth.EmailAuthCredential.prototype.linkToIdToken = function (rpcHandler, idToken) {
            return rpcHandler.updateEmailAndPassword(idToken, this.email_, this.password_)
          };
          fireauth.EmailAuthCredential.prototype.matchIdTokenWithUid = function (rpcHandler, uid) {
            return fireauth.AuthCredential.verifyTokenResponseUid(this.getIdTokenProvider(rpcHandler), uid)
          };
          fireauth.EmailAuthCredential.prototype.toPlainObject = function () {
            return {"email": this.email_, "password": this.password_}
          };
          fireauth.EmailAuthProvider = function () {
            fireauth.object.setReadonlyProperties(this, {
              "providerId": fireauth.idp.ProviderId.PASSWORD,
              "isOAuthProvider": false
            })
          };
          fireauth.EmailAuthProvider.credential = function (email, password) {
            return new fireauth.EmailAuthCredential(email, password)
          };
          fireauth.object.setReadonlyProperties(fireauth.EmailAuthProvider, {"PROVIDER_ID": fireauth.idp.ProviderId.PASSWORD});
          fireauth.PhoneAuthCredential = function (params) {
            if (!(params.verificationId && params.verificationCode) && !(params.temporaryProof && params.phoneNumber)) throw new fireauth.AuthError(fireauth.authenum.Error.INTERNAL_ERROR);
            this.params_ = params;
            fireauth.object.setReadonlyProperty(this, "providerId", fireauth.idp.ProviderId.PHONE)
          };
          fireauth.PhoneAuthCredential.VerificationParameters_;
          fireauth.PhoneAuthCredential.TemporaryProofParameters_;
          fireauth.PhoneAuthCredential.Parameters_;
          fireauth.PhoneAuthCredential.prototype.getIdTokenProvider = function (rpcHandler) {
            return rpcHandler.verifyPhoneNumber(this.makeVerifyPhoneNumberRequest_())
          };
          fireauth.PhoneAuthCredential.prototype.linkToIdToken = function (rpcHandler, idToken) {
            var request = this.makeVerifyPhoneNumberRequest_();
            request["idToken"] = idToken;
            return rpcHandler.verifyPhoneNumberForLinking(request)
          };
          fireauth.PhoneAuthCredential.prototype.matchIdTokenWithUid = function (rpcHandler, uid) {
            var request = this.makeVerifyPhoneNumberRequest_();
            return fireauth.AuthCredential.verifyTokenResponseUid(rpcHandler.verifyPhoneNumberForExisting(request), uid)
          };
          fireauth.PhoneAuthCredential.prototype.toPlainObject = function () {
            var obj = {"providerId": fireauth.idp.ProviderId.PHONE};
            if (this.params_.verificationId) obj["verificationId"] = this.params_.verificationId;
            if (this.params_.verificationCode) obj["verificationCode"] = this.params_.verificationCode;
            if (this.params_.temporaryProof) obj["temporaryProof"] = this.params_.temporaryProof;
            if (this.params_.phoneNumber) obj["phoneNumber"] = this.params_.phoneNumber;
            return obj
          };
          fireauth.PhoneAuthCredential.prototype.makeVerifyPhoneNumberRequest_ = function () {
            if (this.params_.temporaryProof && this.params_.phoneNumber) return {
              "temporaryProof": this.params_.temporaryProof,
              "phoneNumber": this.params_.phoneNumber
            };
            return {"sessionInfo": this.params_.verificationId, "code": this.params_.verificationCode}
          };
          fireauth.PhoneAuthProvider = function (opt_auth) {
            try {
              this.auth_ = opt_auth || firebase["auth"]()
            } catch (e) {
              throw new fireauth.AuthError(fireauth.authenum.Error.ARGUMENT_ERROR, "Either an instance of firebase.auth.Auth must be passed as an " + "argument to the firebase.auth.PhoneAuthProvider constructor, or the " + "default firebase App instance must be initialized via " + "firebase.initializeApp().");
            }
            fireauth.object.setReadonlyProperties(this, {
              "providerId": fireauth.idp.ProviderId.PHONE,
              "isOAuthProvider": false
            })
          };
          fireauth.PhoneAuthProvider.prototype.verifyPhoneNumber = function (phoneNumber, applicationVerifier) {
            var rpcHandler = this.auth_.getRpcHandler();
            return goog.Promise.resolve(applicationVerifier["verify"]()).then(function (assertion) {
              if (!goog.isString(assertion)) throw new fireauth.AuthError(fireauth.authenum.Error.ARGUMENT_ERROR, "An implementation of firebase.auth.ApplicationVerifier" + ".prototype.verify() must return a firebase.Promise " + "that resolves with a string.");
              switch (applicationVerifier["type"]) {
                case "recaptcha":
                  return rpcHandler.sendVerificationCode({
                    "phoneNumber": phoneNumber,
                    "recaptchaToken": assertion
                  }).then(function (verificationId) {
                    if (typeof applicationVerifier.reset === "function") applicationVerifier.reset();
                    return verificationId
                  }, function (error) {
                    if (typeof applicationVerifier.reset === "function") applicationVerifier.reset();
                    throw error;
                  });
                default:
                  throw new fireauth.AuthError(fireauth.authenum.Error.ARGUMENT_ERROR, "Only firebase.auth.ApplicationVerifiers with " + 'type="recaptcha" are currently supported.');
              }
            })
          };
          fireauth.PhoneAuthProvider.credential = function (verificationId, verificationCode) {
            if (!verificationId) throw new fireauth.AuthError(fireauth.authenum.Error.MISSING_SESSION_INFO);
            if (!verificationCode) throw new fireauth.AuthError(fireauth.authenum.Error.MISSING_CODE);
            return new fireauth.PhoneAuthCredential({
              verificationId: verificationId,
              verificationCode: verificationCode
            })
          };
          fireauth.object.setReadonlyProperties(fireauth.PhoneAuthProvider, {"PROVIDER_ID": fireauth.idp.ProviderId.PHONE});
          fireauth.AuthProvider.getCredentialFromResponse = function (response) {
            if (response["temporaryProof"] && response["phoneNumber"]) return new fireauth.PhoneAuthCredential({
              temporaryProof: response["temporaryProof"],
              phoneNumber: response["phoneNumber"]
            });
            var providerId = response && response["providerId"];
            if (!providerId || providerId === fireauth.idp.ProviderId.PASSWORD) return null;
            var accessToken = response && response["oauthAccessToken"];
            var accessTokenSecret = response && response["oauthTokenSecret"];
            var idToken = response &&
              response["oauthIdToken"];
            try {
              switch (providerId) {
                case fireauth.idp.ProviderId.GOOGLE:
                  return fireauth.GoogleAuthProvider.credential(idToken, accessToken);
                case fireauth.idp.ProviderId.FACEBOOK:
                  return fireauth.FacebookAuthProvider.credential(accessToken);
                case fireauth.idp.ProviderId.GITHUB:
                  return fireauth.GithubAuthProvider.credential(accessToken);
                case fireauth.idp.ProviderId.TWITTER:
                  return fireauth.TwitterAuthProvider.credential(accessToken, accessTokenSecret);
                default:
                  return (new fireauth.OAuthProvider(providerId)).credential(idToken,
                    accessToken)
              }
            } catch (e) {
              return null
            }
          };
          fireauth.AuthProvider.checkIfOAuthSupported = function (provider) {
            if (!provider["isOAuthProvider"]) throw new fireauth.AuthError(fireauth.authenum.Error.INVALID_OAUTH_PROVIDER);
          };
          goog.provide("fireauth.AuthEvent");
          goog.require("fireauth.AuthError");
          goog.require("fireauth.authenum.Error");
          fireauth.AuthEvent = function (type, opt_eventId, opt_urlResponse, opt_sessionId, opt_error) {
            this.type_ = type;
            this.eventId_ = opt_eventId || null;
            this.urlResponse_ = opt_urlResponse || null;
            this.sessionId_ = opt_sessionId || null;
            this.error_ = opt_error || null;
            if (!this.urlResponse_ && !this.error_) throw new fireauth.AuthError(fireauth.authenum.Error.INVALID_AUTH_EVENT); else if (this.urlResponse_ && this.error_) throw new fireauth.AuthError(fireauth.authenum.Error.INVALID_AUTH_EVENT); else if (this.urlResponse_ && !this.sessionId_) throw new fireauth.AuthError(fireauth.authenum.Error.INVALID_AUTH_EVENT);
          };
          fireauth.AuthEvent.Type = {
            LINK_VIA_POPUP: "linkViaPopup",
            LINK_VIA_REDIRECT: "linkViaRedirect",
            REAUTH_VIA_POPUP: "reauthViaPopup",
            REAUTH_VIA_REDIRECT: "reauthViaRedirect",
            SIGN_IN_VIA_POPUP: "signInViaPopup",
            SIGN_IN_VIA_REDIRECT: "signInViaRedirect",
            UNKNOWN: "unknown",
            VERIFY_APP: "verifyApp"
          };
          fireauth.AuthEvent.isRedirect = function (event) {
            return !!event.getType().match(/Redirect$/)
          };
          fireauth.AuthEvent.isPopup = function (event) {
            return !!event.getType().match(/Popup$/)
          };
          fireauth.AuthEvent.prototype.getType = function () {
            return this.type_
          };
          fireauth.AuthEvent.prototype.getEventId = function () {
            return this.eventId_
          };
          fireauth.AuthEvent.prototype.getUrlResponse = function () {
            return this.urlResponse_
          };
          fireauth.AuthEvent.prototype.getSessionId = function () {
            return this.sessionId_
          };
          fireauth.AuthEvent.prototype.getError = function () {
            return this.error_
          };
          fireauth.AuthEvent.prototype.hasError = function () {
            return !!this.error_
          };
          fireauth.AuthEvent.prototype.toPlainObject = function () {
            return {
              "type": this.type_,
              "eventId": this.eventId_,
              "urlResponse": this.urlResponse_,
              "sessionId": this.sessionId_,
              "error": this.error_ && this.error_.toPlainObject()
            }
          };
          fireauth.AuthEvent.fromPlainObject = function (rawResponse) {
            var response = rawResponse || {};
            if (response["type"]) return new fireauth.AuthEvent(response["type"], response["eventId"], response["urlResponse"], response["sessionId"], response["error"] && fireauth.AuthError.fromPlainObject(response["error"]));
            return null
          };
          goog.provide("fireauth.DynamicLink");
          goog.require("fireauth.AuthError");
          goog.require("fireauth.authenum.Error");
          goog.require("fireauth.object");
          goog.require("fireauth.util");
          goog.require("goog.Uri");
          fireauth.DynamicLink = function (fdlDomain, platform, appIdentifier, authDomain, payload, opt_clientId) {
            var defaultError = new fireauth.AuthError(fireauth.authenum.Error.APP_NOT_INSTALLED);
            this.fallbackUrl_ = "https://" + authDomain + "/__/auth/handler?" + "firebaseError=" + encodeURIComponent(fireauth.util.stringifyJSON(defaultError.toPlainObject()));
            fireauth.object.setReadonlyProperty(this, "fallbackUrl", this.fallbackUrl_);
            this.fdlDomain_ = fdlDomain;
            fireauth.object.setReadonlyProperty(this, "fdlDomain", fdlDomain);
            this.platform_ =
              platform;
            fireauth.object.setReadonlyProperty(this, "platform", platform);
            this.appIdentifier_ = appIdentifier;
            fireauth.object.setReadonlyProperty(this, "appIdentifier", appIdentifier);
            this.authDomain_ = authDomain;
            fireauth.object.setReadonlyProperty(this, "authDomain", authDomain);
            this.link_ = payload;
            fireauth.object.setReadonlyProperty(this, "payload", payload);
            this.appName_ = null;
            fireauth.object.setReadonlyProperty(this, "appName", null);
            this.clientId_ = opt_clientId || null;
            fireauth.object.setReadonlyProperty(this,
              "clientId", this.clientId_)
          };
          fireauth.DynamicLink.prototype.setAppName = function (appName) {
            this.appName_ = appName || null;
            fireauth.object.setReadonlyProperty(this, "appName", appName)
          };
          fireauth.DynamicLink.prototype.setFallbackUrl = function (fallbackUrl) {
            this.fallbackUrl_ = fallbackUrl;
            fireauth.object.setReadonlyProperty(this, "fallbackUrl", fallbackUrl)
          };
          fireauth.DynamicLink.fromURL = function (url) {
            var uri = goog.Uri.parse(url);
            var fdlDomain = uri.getParameterValue("fdlDomain");
            var platform = uri.getParameterValue("platform");
            var appIdentifier = uri.getParameterValue("appIdentifier");
            var authDomain = uri.getParameterValue("authDomain");
            var payload = uri.getParameterValue("link");
            var appName = uri.getParameterValue("appName");
            if (fdlDomain && platform && appIdentifier && authDomain && payload && appName) {
              var dl = new fireauth.DynamicLink(fdlDomain, platform, appIdentifier, authDomain,
                payload);
              dl.setAppName(appName);
              return dl
            }
            return null
          };
          fireauth.DynamicLink.parseDeepLink = function (url) {
            var uri = goog.Uri.parse(url);
            var link = uri.getParameterValue("link");
            var doubleDeepLink = goog.Uri.parse(link).getParameterValue("link");
            var iOSdeepLink = uri.getParameterValue("deep_link_id");
            var iOSDoubledeepLink = goog.Uri.parse(iOSdeepLink).getParameterValue("link");
            var callbackUrl = iOSDoubledeepLink || iOSdeepLink || doubleDeepLink || link || url;
            return callbackUrl
          };
          fireauth.DynamicLink.Platform = {ANDROID: "android", IOS: "ios"};
          fireauth.DynamicLink.prototype.constructFdlBase_ = function (fallbackUrl) {
            var uri = goog.Uri.create("https", null, this.fdlDomain_, null, "/");
            if (this.platform_ == fireauth.DynamicLink.Platform.ANDROID) {
              uri.setParameterValue("apn", this.appIdentifier_);
              uri.setParameterValue("afl", fallbackUrl)
            } else if (this.platform_ == fireauth.DynamicLink.Platform.IOS) {
              uri.setParameterValue("ibi", this.appIdentifier_);
              uri.setParameterValue("ifl", fallbackUrl)
            }
            return uri
          };
          fireauth.DynamicLink.prototype.constructCustomSchemeUrl_ = function () {
            var uri = goog.Uri.create(this.clientId_ ? this.clientId_.split(".").reverse().join(".") : this.appIdentifier_, null, this.clientId_ ? "firebaseauth" : "google", null, "/link");
            uri.setParameterValue("deep_link_id", this.link_);
            return uri
          };
          fireauth.DynamicLink.prototype.toString = function (opt_isAutoRedirect) {
            if (!this.fdlDomain_) return this.constructCustomSchemeUrl_().toString();
            if (!!opt_isAutoRedirect) return this.generateAutomaticRedirectLink_();
            return this.generateButtonLink_()
          };
          fireauth.DynamicLink.prototype.generateButtonLink_ = function () {
            var fdlLink = this.constructFdlBase_(this.fallbackUrl_);
            fdlLink.setParameterValue("link", this.link_);
            return fdlLink.toString()
          };
          fireauth.DynamicLink.prototype.generateAutomaticRedirectLink_ = function () {
            var doubleDeeplink = goog.Uri.create("https", null, this.authDomain_, null, "/__/auth/callback");
            doubleDeeplink.setParameterValue("fdlDomain", this.fdlDomain_);
            doubleDeeplink.setParameterValue("platform", this.platform_);
            doubleDeeplink.setParameterValue("appIdentifier", this.appIdentifier_);
            doubleDeeplink.setParameterValue("authDomain", this.authDomain_);
            doubleDeeplink.setParameterValue("link", this.link_);
            doubleDeeplink.setParameterValue("appName",
              this.appName_ || "");
            var fdlLink = this.constructFdlBase_(doubleDeeplink.toString());
            fdlLink.setParameterValue("link", doubleDeeplink.toString());
            return fdlLink.toString()
          };
          goog.provide("fireauth.OAuthSignInHandler");
          fireauth.OAuthSignInHandler = function () {
          };
          fireauth.OAuthSignInHandler.prototype.shouldBeInitializedEarly = function () {
          };
          fireauth.OAuthSignInHandler.prototype.hasVolatileStorage = function () {
          };
          fireauth.OAuthSignInHandler.prototype.initializeAndWait = function () {
          };
          fireauth.OAuthSignInHandler.prototype.processPopup = function (popupWin, mode, provider, onInitialize, onError, opt_eventId, opt_alreadyRedirected) {
          };
          fireauth.OAuthSignInHandler.prototype.processRedirect = function (mode, provider, opt_eventId) {
          };
          fireauth.OAuthSignInHandler.prototype.unloadsOnRedirect = function () {
          };
          fireauth.OAuthSignInHandler.prototype.startPopupTimeout = function (popupWin, onError, timeoutDuration) {
          };
          fireauth.OAuthSignInHandler.prototype.addAuthEventListener = function (listener) {
          };
          fireauth.OAuthSignInHandler.prototype.removeAuthEventListener = function (listener) {
          };
          goog.provide("fireauth.InvalidOriginError");
          goog.require("fireauth.AuthError");
          goog.require("fireauth.authenum.Error");
          goog.require("goog.Uri");
          goog.require("goog.string");
          fireauth.InvalidOriginError = function (origin) {
            var code = fireauth.authenum.Error.INVALID_ORIGIN;
            var message = undefined;
            var uri = goog.Uri.parse(origin);
            var domain = uri.getDomain();
            var scheme = uri.getScheme();
            if (scheme == "chrome-extension") message = goog.string.subs(fireauth.InvalidOriginError.CHROME_EXTENSION_MESSAGE_TEMPLATE_, domain); else if (scheme == "http" || scheme == "https") message = goog.string.subs(fireauth.InvalidOriginError.HTTP_MESSAGE_TEMPLATE_, domain); else code = fireauth.authenum.Error.OPERATION_NOT_SUPPORTED;
            fireauth.InvalidOriginError.base(this, "constructor", code, message)
          };
          goog.inherits(fireauth.InvalidOriginError, fireauth.AuthError);
          fireauth.InvalidOriginError.HTTP_MESSAGE_TEMPLATE_ = "This domain (%s) is no" + "t authorized to run this operation. Add it to the OAuth redirect domain" + "s list in the Firebase console -> Auth section -> Sign in method tab.";
          fireauth.InvalidOriginError.CHROME_EXTENSION_MESSAGE_TEMPLATE_ = "This chrom" + "e extension ID (chrome-extension://%s) is not authorized to run this op" + "eration. Add it to the OAuth redirect domains list in the Firebase cons" + "ole -> Auth section -> Sign in method tab.";
          goog.provide("fireauth.AuthErrorWithCredential");
          goog.require("fireauth.AuthError");
          goog.require("fireauth.AuthProvider");
          goog.require("fireauth.object");
          goog.require("goog.object");
          fireauth.AuthErrorWithCredential = function (code, opt_credentialInfo, opt_message) {
            fireauth.AuthErrorWithCredential.base(this, "constructor", code, opt_message);
            var credentialInfo = opt_credentialInfo || {};
            if (credentialInfo.email) fireauth.object.setReadonlyProperty(this, "email", credentialInfo.email);
            if (credentialInfo.phoneNumber) fireauth.object.setReadonlyProperty(this, "phoneNumber", credentialInfo.phoneNumber);
            if (credentialInfo.credential) fireauth.object.setReadonlyProperty(this, "credential", credentialInfo.credential)
          };
          goog.inherits(fireauth.AuthErrorWithCredential, fireauth.AuthError);
          fireauth.AuthErrorWithCredential.CredentialInfo;
          fireauth.AuthErrorWithCredential.prototype.toPlainObject = function () {
            var obj = {"code": this["code"], "message": this.message};
            if (this["email"]) obj["email"] = this["email"];
            if (this["phoneNumber"]) obj["phoneNumber"] = this["phoneNumber"];
            var credential = this["credential"] && this["credential"].toPlainObject();
            if (credential) goog.object.extend(obj, credential);
            return obj
          };
          fireauth.AuthErrorWithCredential.prototype.toJSON = function () {
            return this.toPlainObject()
          };
          fireauth.AuthErrorWithCredential.fromPlainObject = function (response) {
            if (response["code"]) {
              var code = response["code"] || "";
              if (code.indexOf(fireauth.AuthError.ERROR_CODE_PREFIX) == 0) code = code.substring(fireauth.AuthError.ERROR_CODE_PREFIX.length);
              var credentialInfo = {credential: fireauth.AuthProvider.getCredentialFromResponse(response)};
              if (response["email"]) credentialInfo.email = response["email"]; else if (response["phoneNumber"]) credentialInfo.phoneNumber = response["phoneNumber"]; else return new fireauth.AuthError(code,
                response["message"] || undefined);
              return new fireauth.AuthErrorWithCredential(code, credentialInfo, response["message"])
            }
            return null
          };
          goog.provide("fireauth.RpcHandler");
          goog.provide("fireauth.RpcHandler.ApiMethodHandler");
          goog.provide("fireauth.RpcHandler.VerifyAssertionData");
          goog.provide("fireauth.XmlHttpFactory");
          goog.require("fireauth.AuthError");
          goog.require("fireauth.AuthErrorWithCredential");
          goog.require("fireauth.authenum.Error");
          goog.require("fireauth.idp.ProviderId");
          goog.require("fireauth.object");
          goog.require("fireauth.util");
          goog.require("goog.Promise");
          goog.require("goog.Uri");
          goog.require("goog.format.EmailAddress");
          goog.require("goog.html.TrustedResourceUrl");
          goog.require("goog.json");
          goog.require("goog.net.CorsXmlHttpFactory");
          goog.require("goog.net.EventType");
          goog.require("goog.net.XhrIo");
          goog.require("goog.net.XmlHttpFactory");
          goog.require("goog.net.jsloader");
          goog.require("goog.object");
          goog.require("goog.string.Const");
          fireauth.XmlHttpFactory = function (xmlHttpRequest) {
            this.xmlHttpRequest_ = xmlHttpRequest;
            fireauth.XmlHttpFactory.base(this, "constructor")
          };
          goog.inherits(fireauth.XmlHttpFactory, goog.net.XmlHttpFactory);
          fireauth.XmlHttpFactory.prototype.createInstance = function () {
            return new this.xmlHttpRequest_
          };
          fireauth.XmlHttpFactory.prototype.internalGetOptions = function () {
            return {}
          };
          fireauth.RpcHandler = function (apiKey, opt_config, opt_firebaseClientVersion) {
            var XMLHttpRequest = fireauth.util.getXMLHttpRequest();
            if (!XMLHttpRequest) throw new fireauth.AuthError(fireauth.authenum.Error.INTERNAL_ERROR, "The XMLHttpRequest compatibility library was not found.");
            this.apiKey_ = apiKey;
            var config = opt_config || {};
            this.secureTokenEndpoint_ = config["secureTokenEndpoint"] || fireauth.RpcHandler.SECURE_TOKEN_ENDPOINT_;
            this.secureTokenTimeout_ = config["secureTokenTimeout"] || fireauth.RpcHandler.DEFAULT_SECURE_TOKEN_TIMEOUT_;
            this.secureTokenHeaders_ = goog.object.clone(config["secureTokenHeaders"] || fireauth.RpcHandler.DEFAULT_SECURE_TOKEN_HEADERS_);
            this.firebaseEndpoint_ = config["firebaseEndpoint"] || fireauth.RpcHandler.FIREBASE_ENDPOINT_;
            this.firebaseTimeout_ = config["firebaseTimeout"] || fireauth.RpcHandler.DEFAULT_FIREBASE_TIMEOUT_;
            this.firebaseHeaders_ = goog.object.clone(config["firebaseHeaders"] || fireauth.RpcHandler.DEFAULT_FIREBASE_HEADERS_);
            if (opt_firebaseClientVersion) {
              this.firebaseHeaders_["X-Client-Version"] = opt_firebaseClientVersion;
              this.secureTokenHeaders_["X-Client-Version"] = opt_firebaseClientVersion
            }
            this.corsXhrFactory_ = new goog.net.CorsXmlHttpFactory;
            this.xhrFactory_ = new fireauth.XmlHttpFactory(XMLHttpRequest)
          };
          fireauth.RpcHandler.HttpMethod = {POST: "POST", GET: "GET"};
          fireauth.RpcHandler.ServerError = {
            CAPTCHA_CHECK_FAILED: "CAPTCHA_CHECK_FAILED",
            CORS_UNSUPPORTED: "CORS_UNSUPPORTED",
            CREDENTIAL_MISMATCH: "CREDENTIAL_MISMATCH",
            CREDENTIAL_TOO_OLD_LOGIN_AGAIN: "CREDENTIAL_TOO_OLD_LOGIN_AGAIN",
            DYNAMIC_LINK_NOT_ACTIVATED: "DYNAMIC_LINK_NOT_ACTIVATED",
            EMAIL_EXISTS: "EMAIL_EXISTS",
            EMAIL_NOT_FOUND: "EMAIL_NOT_FOUND",
            EXPIRED_OOB_CODE: "EXPIRED_OOB_CODE",
            FEDERATED_USER_ID_ALREADY_LINKED: "FEDERATED_USER_ID_ALREADY_LINKED",
            INVALID_APP_CREDENTIAL: "INVALID_APP_CREDENTIAL",
            INVALID_APP_ID: "INVALID_APP_ID",
            INVALID_CERT_HASH: "INVALID_CERT_HASH",
            INVALID_CODE: "INVALID_CODE",
            INVALID_CONTINUE_URI: "INVALID_CONTINUE_URI",
            INVALID_CUSTOM_TOKEN: "INVALID_CUSTOM_TOKEN",
            INVALID_EMAIL: "INVALID_EMAIL",
            INVALID_ID_TOKEN: "INVALID_ID_TOKEN",
            INVALID_IDP_RESPONSE: "INVALID_IDP_RESPONSE",
            INVALID_IDENTIFIER: "INVALID_IDENTIFIER",
            INVALID_MESSAGE_PAYLOAD: "INVALID_MESSAGE_PAYLOAD",
            INVALID_OAUTH_CLIENT_ID: "INVALID_OAUTH_CLIENT_ID",
            INVALID_OOB_CODE: "INVALID_OOB_CODE",
            INVALID_PASSWORD: "INVALID_PASSWORD",
            INVALID_PHONE_NUMBER: "INVALID_PHONE_NUMBER",
            INVALID_RECIPIENT_EMAIL: "INVALID_RECIPIENT_EMAIL",
            INVALID_SENDER: "INVALID_SENDER",
            INVALID_SESSION_INFO: "INVALID_SESSION_INFO",
            INVALID_TEMPORARY_PROOF: "INVALID_TEMPORARY_PROOF",
            MISSING_ANDROID_PACKAGE_NAME: "MISSING_ANDROID_PACKAGE_NAME",
            MISSING_APP_CREDENTIAL: "MISSING_APP_CREDENTIAL",
            MISSING_CODE: "MISSING_CODE",
            MISSING_CONTINUE_URI: "MISSING_CONTINUE_URI",
            MISSING_CUSTOM_TOKEN: "MISSING_CUSTOM_TOKEN",
            MISSING_IOS_BUNDLE_ID: "MISSING_IOS_BUNDLE_ID",
            MISSING_OOB_CODE: "MISSING_OOB_CODE",
            MISSING_PASSWORD: "MISSING_PASSWORD",
            MISSING_PHONE_NUMBER: "MISSING_PHONE_NUMBER",
            MISSING_SESSION_INFO: "MISSING_SESSION_INFO",
            OPERATION_NOT_ALLOWED: "OPERATION_NOT_ALLOWED",
            PASSWORD_LOGIN_DISABLED: "PASSWORD_LOGIN_DISABLED",
            QUOTA_EXCEEDED: "QUOTA_EXCEEDED",
            SESSION_EXPIRED: "SESSION_EXPIRED",
            TOKEN_EXPIRED: "TOKEN_EXPIRED",
            TOO_MANY_ATTEMPTS_TRY_LATER: "TOO_MANY_ATTEMPTS_TRY_LATER",
            UNAUTHORIZED_DOMAIN: "UNAUTHORIZED_DOMAIN",
            USER_CANCELLED: "USER_CANCELLED",
            USER_DISABLED: "USER_DISABLED",
            USER_NOT_FOUND: "USER_NOT_FOUND",
            WEAK_PASSWORD: "WEAK_PASSWORD"
          };
          fireauth.RpcHandler.ServerErrorMap;
          fireauth.RpcHandler.AuthServerField = {
            ALL_PROVIDERS: "allProviders",
            AUTH_URI: "authUri",
            AUTHORIZED_DOMAINS: "authorizedDomains",
            DYNAMIC_LINKS_DOMAIN: "dynamicLinksDomain",
            EMAIL: "email",
            ERROR_MESSAGE: "errorMessage",
            EXPIRES_IN: "expiresIn",
            ID_TOKEN: "idToken",
            NEED_CONFIRMATION: "needConfirmation",
            RECAPTCHA_SITE_KEY: "recaptchaSiteKey",
            REFRESH_TOKEN: "refreshToken",
            SESSION_ID: "sessionId",
            SESSION_INFO: "sessionInfo",
            TEMPORARY_PROOF: "temporaryProof"
          };
          fireauth.RpcHandler.GetOobCodeRequestType = {
            NEW_EMAIL_ACCEPT: "NEW_EMAIL_ACCEPT",
            PASSWORD_RESET: "PASSWORD_RESET",
            VERIFY_EMAIL: "VERIFY_EMAIL"
          };
          fireauth.RpcHandler.StsServerField = {
            ACCESS_TOKEN: "access_token",
            EXPIRES_IN: "expires_in",
            REFRESH_TOKEN: "refresh_token"
          };
          fireauth.RpcHandler.prototype.getApiKey = function () {
            return this.apiKey_
          };
          fireauth.RpcHandler.FIREBASE_LOCALE_KEY_ = "X-Firebase-Locale";
          fireauth.RpcHandler.SECURE_TOKEN_ENDPOINT_ = "https://securetoken.googleapis.com/v1/token";
          fireauth.RpcHandler.DEFAULT_SECURE_TOKEN_TIMEOUT_ = new fireauth.util.Delay(3E4, 6E4);
          fireauth.RpcHandler.DEFAULT_SECURE_TOKEN_HEADERS_ = {"Content-Type": "application/x-www-form-urlencoded"};
          fireauth.RpcHandler.FIREBASE_ENDPOINT_ = "https://www.googleapis.com/identitytoolkit/v3/relyingparty/";
          fireauth.RpcHandler.DEFAULT_FIREBASE_TIMEOUT_ = new fireauth.util.Delay(3E4, 6E4);
          fireauth.RpcHandler.DEFAULT_FIREBASE_HEADERS_ = {"Content-Type": "application/json"};
          fireauth.RpcHandler.prototype.updateCustomLocaleHeader = function (languageCode) {
            if (languageCode) this.firebaseHeaders_[fireauth.RpcHandler.FIREBASE_LOCALE_KEY_] = languageCode; else delete this.firebaseHeaders_[fireauth.RpcHandler.FIREBASE_LOCALE_KEY_]
          };
          fireauth.RpcHandler.prototype.updateClientVersion = function (clientVersion) {
            if (clientVersion) {
              this.firebaseHeaders_["X-Client-Version"] = clientVersion;
              this.secureTokenHeaders_["X-Client-Version"] = clientVersion
            } else {
              delete this.firebaseHeaders_["X-Client-Version"];
              delete this.secureTokenHeaders_["X-Client-Version"]
            }
          };
          fireauth.RpcHandler.prototype.sendXhr_ = function (url, opt_callback, opt_httpMethod, opt_data, opt_headers, opt_timeout) {
            if (!fireauth.util.isOnline()) {
              if (opt_callback) opt_callback(null);
              return
            }
            var sendXhr;
            if (fireauth.util.supportsCors()) sendXhr = goog.bind(this.sendXhrUsingXhrIo_, this); else {
              if (!fireauth.RpcHandler.loadGApi_) fireauth.RpcHandler.loadGApi_ = new goog.Promise(function (resolve, reject) {
                fireauth.RpcHandler.loadGApiJs_(resolve, reject)
              });
              sendXhr = goog.bind(this.sendXhrUsingGApiClient_, this)
            }
            sendXhr(url,
              opt_callback, opt_httpMethod, opt_data, opt_headers, opt_timeout)
          };
          fireauth.RpcHandler.prototype.sendXhrUsingXhrIo_ = function (url, opt_callback, opt_httpMethod, opt_data, opt_headers, opt_timeout) {
            var isNode = fireauth.util.getEnvironment() == fireauth.util.Env.NODE;
            var xhrIo = fireauth.util.isNativeEnvironment() ? isNode ? new goog.net.XhrIo(this.xhrFactory_) : new goog.net.XhrIo : new goog.net.XhrIo(this.corsXhrFactory_);
            var requestTimeout;
            if (opt_timeout) {
              xhrIo.setTimeoutInterval(opt_timeout);
              requestTimeout = setTimeout(function () {
                xhrIo.dispatchEvent(goog.net.EventType.TIMEOUT)
              }, opt_timeout)
            }
            xhrIo.listen(goog.net.EventType.COMPLETE,
              function () {
                if (requestTimeout) clearTimeout(requestTimeout);
                var response = null;
                try {
                  response = JSON.parse(this.getResponseText()) || null
                } catch (e) {
                  response = null
                }
                if (opt_callback) opt_callback(response)
              });
            xhrIo.listenOnce(goog.net.EventType.READY, function () {
              if (requestTimeout) clearTimeout(requestTimeout);
              this.dispose()
            });
            xhrIo.listenOnce(goog.net.EventType.TIMEOUT, function () {
              if (requestTimeout) clearTimeout(requestTimeout);
              this.dispose();
              if (opt_callback) opt_callback(null)
            });
            xhrIo.send(url, opt_httpMethod, opt_data,
              opt_headers)
          };
          fireauth.RpcHandler.GAPI_SRC_ = goog.string.Const.from("https://apis.google.com/js/client.js?onload=%{onload}");
          fireauth.RpcHandler.GAPI_CALLBACK_NAME_ = "__fcb" + Math.floor(Math.random() * 1E6).toString();
          fireauth.RpcHandler.loadGApiJs_ = function (callback, errback) {
            if (!((window["gapi"] || {})["client"] || {})["request"]) {
              goog.global[fireauth.RpcHandler.GAPI_CALLBACK_NAME_] = function () {
                if (!((window["gapi"] || {})["client"] || {})["request"]) errback(new Error(fireauth.RpcHandler.ServerError.CORS_UNSUPPORTED)); else callback()
              };
              var url = goog.html.TrustedResourceUrl.format(fireauth.RpcHandler.GAPI_SRC_, {"onload": fireauth.RpcHandler.GAPI_CALLBACK_NAME_});
              var result = goog.net.jsloader.safeLoad(url);
              result.addErrback(function () {
                errback(new Error(fireauth.RpcHandler.ServerError.CORS_UNSUPPORTED))
              })
            } else callback()
          };
          fireauth.RpcHandler.prototype.sendXhrUsingGApiClient_ = function (url, opt_callback, opt_httpMethod, opt_data, opt_headers, opt_timeout) {
            var self = this;
            fireauth.RpcHandler.loadGApi_.then(function () {
              window["gapi"]["client"]["setApiKey"](self.getApiKey());
              var oauth2Token = window["gapi"]["auth"]["getToken"]();
              window["gapi"]["auth"]["setToken"](null);
              window["gapi"]["client"]["request"]({
                "path": url,
                "method": opt_httpMethod,
                "body": opt_data,
                "headers": opt_headers,
                "authType": "none",
                "callback": function (response) {
                  window["gapi"]["auth"]["setToken"](oauth2Token);
                  if (opt_callback) opt_callback(response)
                }
              })
            }).thenCatch(function (error) {
              if (opt_callback) opt_callback({"error": {"message": error && error["message"] || fireauth.RpcHandler.ServerError.CORS_UNSUPPORTED}})
            })
          };
          fireauth.RpcHandler.prototype.validateStsTokenRequest_ = function (data) {
            if (data["grant_type"] == "refresh_token" && data["refresh_token"]) return true; else if (data["grant_type"] == "authorization_code" && data["code"]) return true; else return false
          };
          fireauth.RpcHandler.prototype.requestStsToken = function (data) {
            var self = this;
            return new goog.Promise(function (resolve, reject) {
              if (self.validateStsTokenRequest_(data)) self.sendXhr_(self.secureTokenEndpoint_ + "?key=" + encodeURIComponent(self.getApiKey()), function (response) {
                if (!response) reject(new fireauth.AuthError(fireauth.authenum.Error.NETWORK_REQUEST_FAILED)); else if (fireauth.RpcHandler.hasError_(response)) reject(fireauth.RpcHandler.getDeveloperError_(response)); else if (!response[fireauth.RpcHandler.StsServerField.ACCESS_TOKEN] ||
                  !response[fireauth.RpcHandler.StsServerField.REFRESH_TOKEN]) reject(new fireauth.AuthError(fireauth.authenum.Error.INTERNAL_ERROR)); else resolve(response)
              }, fireauth.RpcHandler.HttpMethod.POST, goog.Uri.QueryData.createFromMap(data).toString(), self.secureTokenHeaders_, self.secureTokenTimeout_.get()); else reject(new fireauth.AuthError(fireauth.authenum.Error.INTERNAL_ERROR))
            })
          };
          fireauth.RpcHandler.serialize_ = function (data) {
            return goog.json.serialize(fireauth.util.copyWithoutNullsOrUndefined(data))
          };
          fireauth.RpcHandler.prototype.requestFirebaseEndpoint = function (method, httpMethod, data, opt_customErrorMap, opt_cachebuster) {
            var self = this;
            var uri = goog.Uri.parse(this.firebaseEndpoint_ + method);
            uri.setParameterValue("key", this.getApiKey());
            if (opt_cachebuster) uri.setParameterValue("cb", goog.now().toString());
            var isGet = httpMethod == fireauth.RpcHandler.HttpMethod.GET;
            if (isGet) for (var key in data) if (data.hasOwnProperty(key)) uri.setParameterValue(key, data[key]);
            return new goog.Promise(function (resolve, reject) {
              self.sendXhr_(uri.toString(),
                function (response) {
                  if (!response) reject(new fireauth.AuthError(fireauth.authenum.Error.NETWORK_REQUEST_FAILED)); else if (fireauth.RpcHandler.hasError_(response)) reject(fireauth.RpcHandler.getDeveloperError_(response, opt_customErrorMap || {})); else resolve(response)
                }, httpMethod, isGet ? undefined : fireauth.RpcHandler.serialize_(data), self.firebaseHeaders_, self.firebaseTimeout_.get())
            })
          };
          fireauth.RpcHandler.validateRequestHasEmail_ = function (request) {
            if (!goog.format.EmailAddress.isValidAddrSpec(request["email"])) throw new fireauth.AuthError(fireauth.authenum.Error.INVALID_EMAIL);
          };
          fireauth.RpcHandler.validateResponseHasEmail_ = function (response) {
            if (!goog.format.EmailAddress.isValidAddrSpec(response["email"])) throw new fireauth.AuthError(fireauth.authenum.Error.INTERNAL_ERROR);
          };
          fireauth.RpcHandler.validateEmailIfPresent_ = function (request) {
            if ("email" in request) fireauth.RpcHandler.validateRequestHasEmail_(request)
          };
          fireauth.RpcHandler.getAdditionalScopes_ = function (providerId, opt_additionalScopes) {
            var scopes = {};
            if (opt_additionalScopes && opt_additionalScopes.length) {
              scopes[providerId] = opt_additionalScopes.join(",");
              return goog.json.serialize(scopes)
            }
            return null
          };
          fireauth.RpcHandler.validateGetAuthResponse_ = function (response) {
            if (!response[fireauth.RpcHandler.AuthServerField.AUTH_URI] || !response[fireauth.RpcHandler.AuthServerField.SESSION_ID]) throw new fireauth.AuthError(fireauth.authenum.Error.INTERNAL_ERROR);
          };
          fireauth.RpcHandler.prototype.getAuthUri = function (providerId, continueUri, opt_customParameters, opt_additionalScopes, opt_email, opt_sessionId) {
            var request = {
              "identifier": opt_email,
              "providerId": providerId,
              "continueUri": continueUri,
              "customParameter": opt_customParameters || {},
              "oauthScope": fireauth.RpcHandler.getAdditionalScopes_(providerId, opt_additionalScopes),
              "sessionId": opt_sessionId
            };
            if (opt_sessionId && providerId == fireauth.idp.ProviderId.GOOGLE) request["authFlowType"] = "CODE_FLOW";
            return this.invokeRpc_(fireauth.RpcHandler.ApiMethod.GET_AUTH_URI,
              request)
          };
          fireauth.RpcHandler.prototype.fetchProvidersForIdentifier = function (identifier) {
            var continueUri = fireauth.util.isHttpOrHttps() ? fireauth.util.getCurrentUrl() : "http://localhost";
            var request = {"identifier": identifier, "continueUri": continueUri};
            return this.invokeRpc_(fireauth.RpcHandler.ApiMethod.CREATE_AUTH_URI, request).then(function (response) {
              return response[fireauth.RpcHandler.AuthServerField.ALL_PROVIDERS] || []
            })
          };
          fireauth.RpcHandler.prototype.getAuthorizedDomains = function () {
            return this.invokeRpc_(fireauth.RpcHandler.ApiMethod.GET_PROJECT_CONFIG, {}).then(function (response) {
              return response[fireauth.RpcHandler.AuthServerField.AUTHORIZED_DOMAINS] || []
            })
          };
          fireauth.RpcHandler.prototype.getRecaptchaParam = function () {
            return this.invokeRpc_(fireauth.RpcHandler.ApiMethod.GET_RECAPTCHA_PARAM, {})
          };
          fireauth.RpcHandler.prototype.getDynamicLinkDomain = function () {
            var request = {"returnDynamicLink": true};
            return this.invokeRpc_(fireauth.RpcHandler.ApiMethod.RETURN_DYNAMIC_LINK, request)
          };
          fireauth.RpcHandler.prototype.isIosBundleIdValid = function (iosBundleId) {
            var request = {"iosBundleId": iosBundleId};
            return this.invokeRpc_(fireauth.RpcHandler.ApiMethod.GET_PROJECT_CONFIG, request).then(function (result) {
            })
          };
          fireauth.RpcHandler.prototype.isAndroidPackageNameValid = function (androidPackageName, opt_sha1Cert) {
            var request = {"androidPackageName": androidPackageName};
            if (!!opt_sha1Cert) request["sha1Cert"] = opt_sha1Cert;
            return this.invokeRpc_(fireauth.RpcHandler.ApiMethod.GET_PROJECT_CONFIG, request).then(function (result) {
            })
          };
          fireauth.RpcHandler.prototype.isOAuthClientIdValid = function (clientId) {
            var request = {"clientId": clientId};
            return this.invokeRpc_(fireauth.RpcHandler.ApiMethod.GET_PROJECT_CONFIG, request).then(function (result) {
            })
          };
          fireauth.RpcHandler.prototype.getAccountInfoByIdToken = function (idToken) {
            var request = {"idToken": idToken};
            return this.invokeRpc_(fireauth.RpcHandler.ApiMethod.GET_ACCOUNT_INFO, request)
          };
          fireauth.RpcHandler.validateVerifyCustomTokenRequest_ = function (request) {
            if (!request["token"]) throw new fireauth.AuthError(fireauth.authenum.Error.INVALID_CUSTOM_TOKEN);
          };
          fireauth.RpcHandler.prototype.verifyCustomToken = function (token) {
            var request = {"token": token};
            return this.invokeRpc_(fireauth.RpcHandler.ApiMethod.VERIFY_CUSTOM_TOKEN, request)
          };
          fireauth.RpcHandler.validateVerifyPasswordRequest_ = function (request) {
            fireauth.RpcHandler.validateRequestHasEmail_(request);
            if (!request["password"]) throw new fireauth.AuthError(fireauth.authenum.Error.INVALID_PASSWORD);
          };
          fireauth.RpcHandler.prototype.verifyPassword = function (email, password) {
            var request = {"email": email, "password": password};
            return this.invokeRpc_(fireauth.RpcHandler.ApiMethod.VERIFY_PASSWORD, request)
          };
          fireauth.RpcHandler.validateIdTokenResponse_ = function (response) {
            if (!response[fireauth.RpcHandler.AuthServerField.ID_TOKEN]) throw new fireauth.AuthError(fireauth.authenum.Error.INTERNAL_ERROR);
          };
          fireauth.RpcHandler.validateGetRecaptchaParamResponse_ = function (response) {
            if (!response[fireauth.RpcHandler.AuthServerField.RECAPTCHA_SITE_KEY]) throw new fireauth.AuthError(fireauth.authenum.Error.INTERNAL_ERROR);
          };
          fireauth.RpcHandler.validateVerifyPhoneNumberRequest_ = function (request) {
            if (request["phoneNumber"] || request["temporaryProof"]) {
              if (!request["phoneNumber"] || !request["temporaryProof"]) throw new fireauth.AuthError(fireauth.authenum.Error.INTERNAL_ERROR);
            } else {
              if (!request["sessionInfo"]) throw new fireauth.AuthError(fireauth.authenum.Error.MISSING_SESSION_INFO);
              if (!request["code"]) throw new fireauth.AuthError(fireauth.authenum.Error.MISSING_CODE);
            }
          };
          fireauth.RpcHandler.validateVerifyPhoneNumberLinkRequest_ = function (request) {
            if (!request["idToken"]) throw new fireauth.AuthError(fireauth.authenum.Error.INTERNAL_ERROR);
            fireauth.RpcHandler.validateVerifyPhoneNumberRequest_(request)
          };
          fireauth.RpcHandler.validateCreateAccountRequest_ = function (request) {
            fireauth.RpcHandler.validateRequestHasEmail_(request);
            if (!request["password"]) throw new fireauth.AuthError(fireauth.authenum.Error.WEAK_PASSWORD);
          };
          fireauth.RpcHandler.prototype.createAccount = function (email, password) {
            var request = {"email": email, "password": password};
            return this.invokeRpc_(fireauth.RpcHandler.ApiMethod.CREATE_ACCOUNT, request)
          };
          fireauth.RpcHandler.prototype.signInAnonymously = function () {
            return this.invokeRpc_(fireauth.RpcHandler.ApiMethod.SIGN_IN_ANONYMOUSLY, {})
          };
          fireauth.RpcHandler.prototype.deleteAccount = function (idToken) {
            var request = {"idToken": idToken};
            return this.invokeRpc_(fireauth.RpcHandler.ApiMethod.DELETE_ACCOUNT, request)
          };
          fireauth.RpcHandler.prototype.updateEmail = function (idToken, newEmail) {
            var request = {"idToken": idToken, "email": newEmail};
            return this.invokeRpc_(fireauth.RpcHandler.ApiMethod.SET_ACCOUNT_INFO, request)
          };
          fireauth.RpcHandler.validateSetAccountInfoSensitive_ = function (request) {
            fireauth.RpcHandler.validateEmailIfPresent_(request);
            if (!request["password"]) throw new fireauth.AuthError(fireauth.authenum.Error.WEAK_PASSWORD);
          };
          fireauth.RpcHandler.prototype.updatePassword = function (idToken, newPassword) {
            var request = {"idToken": idToken, "password": newPassword};
            return this.invokeRpc_(fireauth.RpcHandler.ApiMethod.SET_ACCOUNT_INFO_SENSITIVE, request)
          };
          fireauth.RpcHandler.prototype.updateEmailAndPassword = function (idToken, newEmail, newPassword) {
            var request = {"idToken": idToken, "email": newEmail, "password": newPassword};
            return this.invokeRpc_(fireauth.RpcHandler.ApiMethod.SET_ACCOUNT_INFO_SENSITIVE, request)
          };
          fireauth.RpcHandler.PROFILE_FIELD_TO_ENUM_NAME_ = {"displayName": "DISPLAY_NAME", "photoUrl": "PHOTO_URL"};
          fireauth.RpcHandler.prototype.updateProfile = function (idToken, profileData) {
            var data = {"idToken": idToken};
            var fieldsToDelete = [];
            goog.object.forEach(fireauth.RpcHandler.PROFILE_FIELD_TO_ENUM_NAME_, function (enumName, fieldName) {
              var fieldValue = profileData[fieldName];
              if (fieldValue === null) fieldsToDelete.push(enumName); else if (fieldName in profileData) data[fieldName] = fieldValue
            });
            if (fieldsToDelete.length) data["deleteAttribute"] = fieldsToDelete;
            return this.invokeRpc_(fireauth.RpcHandler.ApiMethod.SET_ACCOUNT_INFO,
              data)
          };
          fireauth.RpcHandler.validateOobCodeRequest_ = function (request) {
            if (request["requestType"] != fireauth.RpcHandler.GetOobCodeRequestType.PASSWORD_RESET) throw new fireauth.AuthError(fireauth.authenum.Error.INTERNAL_ERROR);
            fireauth.RpcHandler.validateRequestHasEmail_(request)
          };
          fireauth.RpcHandler.validateEmailVerificationCodeRequest_ = function (request) {
            if (request["requestType"] != fireauth.RpcHandler.GetOobCodeRequestType.VERIFY_EMAIL) throw new fireauth.AuthError(fireauth.authenum.Error.INTERNAL_ERROR);
          };
          fireauth.RpcHandler.prototype.sendPasswordResetEmail = function (email, additionalRequestData) {
            var request = {"requestType": fireauth.RpcHandler.GetOobCodeRequestType.PASSWORD_RESET, "email": email};
            goog.object.extend(request, additionalRequestData);
            return this.invokeRpc_(fireauth.RpcHandler.ApiMethod.GET_OOB_CODE, request)
          };
          fireauth.RpcHandler.prototype.sendEmailVerification = function (idToken, additionalRequestData) {
            var request = {"requestType": fireauth.RpcHandler.GetOobCodeRequestType.VERIFY_EMAIL, "idToken": idToken};
            goog.object.extend(request, additionalRequestData);
            return this.invokeRpc_(fireauth.RpcHandler.ApiMethod.GET_EMAIL_VERIFICATION_CODE, request)
          };
          fireauth.RpcHandler.prototype.sendVerificationCode = function (request) {
            return this.invokeRpc_(fireauth.RpcHandler.ApiMethod.SEND_VERIFICATION_CODE, request)
          };
          fireauth.RpcHandler.prototype.verifyPhoneNumber = function (request) {
            return this.invokeRpc_(fireauth.RpcHandler.ApiMethod.VERIFY_PHONE_NUMBER, request)
          };
          fireauth.RpcHandler.prototype.verifyPhoneNumberForLinking = function (request) {
            return this.invokeRpc_(fireauth.RpcHandler.ApiMethod.VERIFY_PHONE_NUMBER_FOR_LINKING, request)
          };
          fireauth.RpcHandler.validateVerifyPhoneNumberForLinkingResponse_ = function (response) {
            if (response[fireauth.RpcHandler.AuthServerField.TEMPORARY_PROOF]) {
              response["code"] = fireauth.authenum.Error.CREDENTIAL_ALREADY_IN_USE;
              throw fireauth.AuthErrorWithCredential.fromPlainObject(response);
            }
            fireauth.RpcHandler.validateIdTokenResponse_(response)
          };
          fireauth.RpcHandler.prototype.verifyPhoneNumberForExisting = function (request) {
            request["operation"] = "REAUTH";
            return this.invokeRpc_(fireauth.RpcHandler.ApiMethod.VERIFY_PHONE_NUMBER_FOR_EXISTING, request)
          };
          fireauth.RpcHandler.verifyPhoneNumberForExistingErrorMap_ = {};
          fireauth.RpcHandler.verifyPhoneNumberForExistingErrorMap_[fireauth.RpcHandler.ServerError.USER_NOT_FOUND] = fireauth.authenum.Error.USER_DELETED;
          fireauth.RpcHandler.validateDeleteLinkedAccountsRequest_ = function (request) {
            if (!goog.isArray(request["deleteProvider"])) throw new fireauth.AuthError(fireauth.authenum.Error.INTERNAL_ERROR);
          };
          fireauth.RpcHandler.prototype.deleteLinkedAccounts = function (idToken, providersToDelete) {
            var request = {"idToken": idToken, "deleteProvider": providersToDelete};
            return this.invokeRpc_(fireauth.RpcHandler.ApiMethod.DELETE_LINKED_ACCOUNTS, request)
          };
          fireauth.RpcHandler.validateVerifyAssertionRequest_ = function (request) {
            if (!request["requestUri"] || !request["sessionId"] && !request["postBody"]) throw new fireauth.AuthError(fireauth.authenum.Error.INTERNAL_ERROR);
          };
          fireauth.RpcHandler.validateVerifyAssertionForExistingResponse_ = function (response) {
            if (response[fireauth.RpcHandler.AuthServerField.ERROR_MESSAGE] && response[fireauth.RpcHandler.AuthServerField.ERROR_MESSAGE] == fireauth.RpcHandler.ServerError.USER_NOT_FOUND) throw new fireauth.AuthError(fireauth.authenum.Error.USER_DELETED); else if (response[fireauth.RpcHandler.AuthServerField.ERROR_MESSAGE]) throw fireauth.RpcHandler.getDeveloperErrorFromCode_(response[fireauth.RpcHandler.AuthServerField.ERROR_MESSAGE]);
            if (!response[fireauth.RpcHandler.AuthServerField.ID_TOKEN]) throw new fireauth.AuthError(fireauth.authenum.Error.INTERNAL_ERROR);
          };
          fireauth.RpcHandler.validateVerifyAssertionResponse_ = function (response) {
            var error = null;
            if (response[fireauth.RpcHandler.AuthServerField.NEED_CONFIRMATION]) {
              response["code"] = fireauth.authenum.Error.NEED_CONFIRMATION;
              error = fireauth.AuthErrorWithCredential.fromPlainObject(response)
            } else if (response[fireauth.RpcHandler.AuthServerField.ERROR_MESSAGE] == fireauth.RpcHandler.ServerError.FEDERATED_USER_ID_ALREADY_LINKED) {
              response["code"] = fireauth.authenum.Error.CREDENTIAL_ALREADY_IN_USE;
              error = fireauth.AuthErrorWithCredential.fromPlainObject(response)
            } else if (response[fireauth.RpcHandler.AuthServerField.ERROR_MESSAGE] ==
              fireauth.RpcHandler.ServerError.EMAIL_EXISTS) {
              response["code"] = fireauth.authenum.Error.EMAIL_EXISTS;
              error = fireauth.AuthErrorWithCredential.fromPlainObject(response)
            } else if (response[fireauth.RpcHandler.AuthServerField.ERROR_MESSAGE]) error = fireauth.RpcHandler.getDeveloperErrorFromCode_(response[fireauth.RpcHandler.AuthServerField.ERROR_MESSAGE]);
            if (error) throw error;
            if (!response[fireauth.RpcHandler.AuthServerField.ID_TOKEN]) throw new fireauth.AuthError(fireauth.authenum.Error.INTERNAL_ERROR);
          };
          fireauth.RpcHandler.validateVerifyAssertionLinkRequest_ = function (request) {
            fireauth.RpcHandler.validateVerifyAssertionRequest_(request);
            if (!request["idToken"]) throw new fireauth.AuthError(fireauth.authenum.Error.INTERNAL_ERROR);
          };
          fireauth.RpcHandler.VerifyAssertionData;
          fireauth.RpcHandler.prototype.verifyAssertion = function (request) {
            request["returnIdpCredential"] = true;
            return this.invokeRpc_(fireauth.RpcHandler.ApiMethod.VERIFY_ASSERTION, request)
          };
          fireauth.RpcHandler.prototype.verifyAssertionForLinking = function (request) {
            request["returnIdpCredential"] = true;
            return this.invokeRpc_(fireauth.RpcHandler.ApiMethod.VERIFY_ASSERTION_FOR_LINKING, request)
          };
          fireauth.RpcHandler.prototype.verifyAssertionForExisting = function (request) {
            request["returnIdpCredential"] = true;
            request["autoCreate"] = false;
            return this.invokeRpc_(fireauth.RpcHandler.ApiMethod.VERIFY_ASSERTION_FOR_EXISTING, request)
          };
          fireauth.RpcHandler.validateApplyActionCodeRequest_ = function (request) {
            if (!request["oobCode"]) throw new fireauth.AuthError(fireauth.authenum.Error.INVALID_OOB_CODE);
          };
          fireauth.RpcHandler.validateCheckActionCodeResponse_ = function (response) {
            if (!response["email"] || !response["requestType"]) throw new fireauth.AuthError(fireauth.authenum.Error.INTERNAL_ERROR);
          };
          fireauth.RpcHandler.prototype.confirmPasswordReset = function (code, newPassword) {
            var request = {"oobCode": code, "newPassword": newPassword};
            return this.invokeRpc_(fireauth.RpcHandler.ApiMethod.RESET_PASSWORD, request)
          };
          fireauth.RpcHandler.prototype.checkActionCode = function (code) {
            var request = {"oobCode": code};
            return this.invokeRpc_(fireauth.RpcHandler.ApiMethod.CHECK_ACTION_CODE, request)
          };
          fireauth.RpcHandler.prototype.applyActionCode = function (code) {
            var request = {"oobCode": code};
            return this.invokeRpc_(fireauth.RpcHandler.ApiMethod.APPLY_OOB_CODE, request)
          };
          fireauth.RpcHandler.ApiMethodHandler;
          fireauth.RpcHandler.ApiMethod = {
            APPLY_OOB_CODE: {
              endpoint: "setAccountInfo",
              requestValidator: fireauth.RpcHandler.validateApplyActionCodeRequest_,
              responseField: fireauth.RpcHandler.AuthServerField.EMAIL
            },
            CHECK_ACTION_CODE: {
              endpoint: "resetPassword",
              requestValidator: fireauth.RpcHandler.validateApplyActionCodeRequest_,
              responseValidator: fireauth.RpcHandler.validateCheckActionCodeResponse_
            },
            CREATE_ACCOUNT: {
              endpoint: "signupNewUser",
              requestValidator: fireauth.RpcHandler.validateCreateAccountRequest_,
              responseValidator: fireauth.RpcHandler.validateIdTokenResponse_,
              returnSecureToken: true
            },
            CREATE_AUTH_URI: {endpoint: "createAuthUri"},
            DELETE_ACCOUNT: {endpoint: "deleteAccount", requestRequiredFields: ["idToken"]},
            DELETE_LINKED_ACCOUNTS: {
              endpoint: "setAccountInfo",
              requestRequiredFields: ["idToken", "deleteProvider"],
              requestValidator: fireauth.RpcHandler.validateDeleteLinkedAccountsRequest_
            },
            GET_ACCOUNT_INFO: {endpoint: "getAccountInfo"},
            GET_AUTH_URI: {
              endpoint: "createAuthUri",
              requestRequiredFields: ["continueUri", "providerId"],
              responseValidator: fireauth.RpcHandler.validateGetAuthResponse_
            },
            GET_EMAIL_VERIFICATION_CODE: {
              endpoint: "getOobConfirmationCode",
              requestRequiredFields: ["idToken", "requestType"],
              requestValidator: fireauth.RpcHandler.validateEmailVerificationCodeRequest_,
              responseField: fireauth.RpcHandler.AuthServerField.EMAIL
            },
            GET_OOB_CODE: {
              endpoint: "getOobConfirmationCode",
              requestRequiredFields: ["requestType"],
              requestValidator: fireauth.RpcHandler.validateOobCodeRequest_,
              responseField: fireauth.RpcHandler.AuthServerField.EMAIL
            },
            GET_PROJECT_CONFIG: {
              cachebuster: true, endpoint: "getProjectConfig",
              httpMethod: fireauth.RpcHandler.HttpMethod.GET
            },
            GET_RECAPTCHA_PARAM: {
              cachebuster: true,
              endpoint: "getRecaptchaParam",
              httpMethod: fireauth.RpcHandler.HttpMethod.GET,
              responseValidator: fireauth.RpcHandler.validateGetRecaptchaParamResponse_
            },
            RESET_PASSWORD: {
              endpoint: "resetPassword",
              requestValidator: fireauth.RpcHandler.validateApplyActionCodeRequest_,
              responseField: fireauth.RpcHandler.AuthServerField.EMAIL
            },
            RETURN_DYNAMIC_LINK: {
              cachebuster: true, endpoint: "getProjectConfig", httpMethod: fireauth.RpcHandler.HttpMethod.GET,
              responseField: fireauth.RpcHandler.AuthServerField.DYNAMIC_LINKS_DOMAIN
            },
            SEND_VERIFICATION_CODE: {
              endpoint: "sendVerificationCode",
              requestRequiredFields: ["phoneNumber", "recaptchaToken"],
              responseField: fireauth.RpcHandler.AuthServerField.SESSION_INFO
            },
            SET_ACCOUNT_INFO: {
              endpoint: "setAccountInfo",
              requestRequiredFields: ["idToken"],
              requestValidator: fireauth.RpcHandler.validateEmailIfPresent_,
              returnSecureToken: true
            },
            SET_ACCOUNT_INFO_SENSITIVE: {
              endpoint: "setAccountInfo",
              requestRequiredFields: ["idToken"],
              requestValidator: fireauth.RpcHandler.validateSetAccountInfoSensitive_,
              responseValidator: fireauth.RpcHandler.validateIdTokenResponse_,
              returnSecureToken: true
            },
            SIGN_IN_ANONYMOUSLY: {
              endpoint: "signupNewUser",
              responseValidator: fireauth.RpcHandler.validateIdTokenResponse_,
              returnSecureToken: true
            },
            VERIFY_ASSERTION: {
              endpoint: "verifyAssertion",
              requestValidator: fireauth.RpcHandler.validateVerifyAssertionRequest_,
              responseValidator: fireauth.RpcHandler.validateVerifyAssertionResponse_,
              returnSecureToken: true
            },
            VERIFY_ASSERTION_FOR_EXISTING: {
              endpoint: "verifyAssertion",
              requestValidator: fireauth.RpcHandler.validateVerifyAssertionRequest_,
              responseValidator: fireauth.RpcHandler.validateVerifyAssertionForExistingResponse_,
              returnSecureToken: true
            },
            VERIFY_ASSERTION_FOR_LINKING: {
              endpoint: "verifyAssertion",
              requestValidator: fireauth.RpcHandler.validateVerifyAssertionLinkRequest_,
              responseValidator: fireauth.RpcHandler.validateVerifyAssertionResponse_,
              returnSecureToken: true
            },
            VERIFY_CUSTOM_TOKEN: {
              endpoint: "verifyCustomToken",
              requestValidator: fireauth.RpcHandler.validateVerifyCustomTokenRequest_,
              responseValidator: fireauth.RpcHandler.validateIdTokenResponse_,
              returnSecureToken: true
            },
            VERIFY_PASSWORD: {
              endpoint: "verifyPassword",
              requestValidator: fireauth.RpcHandler.validateVerifyPasswordRequest_,
              responseValidator: fireauth.RpcHandler.validateIdTokenResponse_,
              returnSecureToken: true
            },
            VERIFY_PHONE_NUMBER: {
              endpoint: "verifyPhoneNumber",
              requestValidator: fireauth.RpcHandler.validateVerifyPhoneNumberRequest_,
              responseValidator: fireauth.RpcHandler.validateIdTokenResponse_
            },
            VERIFY_PHONE_NUMBER_FOR_LINKING: {
              endpoint: "verifyPhoneNumber",
              requestValidator: fireauth.RpcHandler.validateVerifyPhoneNumberLinkRequest_,
              responseValidator: fireauth.RpcHandler.validateVerifyPhoneNumberForLinkingResponse_
            },
            VERIFY_PHONE_NUMBER_FOR_EXISTING: {
              customErrorMap: fireauth.RpcHandler.verifyPhoneNumberForExistingErrorMap_,
              endpoint: "verifyPhoneNumber",
              requestValidator: fireauth.RpcHandler.validateVerifyPhoneNumberRequest_,
              responseValidator: fireauth.RpcHandler.validateIdTokenResponse_
            }
          };
          fireauth.RpcHandler.USE_STS_TOKEN_PARAM_ = "returnSecureToken";
          fireauth.RpcHandler.prototype.invokeRpc_ = function (method, request) {
            if (!fireauth.object.hasNonEmptyFields(request, method.requestRequiredFields)) return goog.Promise.reject(new fireauth.AuthError(fireauth.authenum.Error.INTERNAL_ERROR));
            var httpMethod = method.httpMethod || fireauth.RpcHandler.HttpMethod.POST;
            var self = this;
            var response;
            return goog.Promise.resolve(request).then(method.requestValidator).then(function () {
              if (method.returnSecureToken) request[fireauth.RpcHandler.USE_STS_TOKEN_PARAM_] = true;
              return self.requestFirebaseEndpoint(method.endpoint,
                httpMethod, request, method.customErrorMap, method.cachebuster || false)
            }).then(function (tempResponse) {
              response = tempResponse;
              return response
            }).then(method.responseValidator).then(function () {
              if (!method.responseField) return response;
              if (!(method.responseField in response)) throw new fireauth.AuthError(fireauth.authenum.Error.INTERNAL_ERROR);
              return response[method.responseField]
            })
          };
          fireauth.RpcHandler.hasError_ = function (resp) {
            return !!resp["error"]
          };
          fireauth.RpcHandler.getDeveloperErrorFromCode_ = function (serverErrorCode) {
            return fireauth.RpcHandler.getDeveloperError_({
              "error": {
                "errors": [{"message": serverErrorCode}],
                "code": 400,
                "message": serverErrorCode
              }
            })
          };
          fireauth.RpcHandler.getDeveloperError_ = function (response, opt_customErrorMap) {
            var errorMessage;
            var apiaryError = fireauth.RpcHandler.getApiaryError_(response);
            if (apiaryError) return apiaryError;
            var serverErrorCode = fireauth.RpcHandler.getErrorCode_(response);
            var errorMap = {};
            errorMap[fireauth.RpcHandler.ServerError.INVALID_CUSTOM_TOKEN] = fireauth.authenum.Error.INVALID_CUSTOM_TOKEN;
            errorMap[fireauth.RpcHandler.ServerError.CREDENTIAL_MISMATCH] = fireauth.authenum.Error.CREDENTIAL_MISMATCH;
            errorMap[fireauth.RpcHandler.ServerError.MISSING_CUSTOM_TOKEN] =
              fireauth.authenum.Error.INTERNAL_ERROR;
            errorMap[fireauth.RpcHandler.ServerError.INVALID_IDENTIFIER] = fireauth.authenum.Error.INVALID_EMAIL;
            errorMap[fireauth.RpcHandler.ServerError.MISSING_CONTINUE_URI] = fireauth.authenum.Error.INTERNAL_ERROR;
            errorMap[fireauth.RpcHandler.ServerError.INVALID_EMAIL] = fireauth.authenum.Error.INVALID_EMAIL;
            errorMap[fireauth.RpcHandler.ServerError.INVALID_PASSWORD] = fireauth.authenum.Error.INVALID_PASSWORD;
            errorMap[fireauth.RpcHandler.ServerError.USER_DISABLED] = fireauth.authenum.Error.USER_DISABLED;
            errorMap[fireauth.RpcHandler.ServerError.MISSING_PASSWORD] = fireauth.authenum.Error.INTERNAL_ERROR;
            errorMap[fireauth.RpcHandler.ServerError.EMAIL_EXISTS] = fireauth.authenum.Error.EMAIL_EXISTS;
            errorMap[fireauth.RpcHandler.ServerError.PASSWORD_LOGIN_DISABLED] = fireauth.authenum.Error.OPERATION_NOT_ALLOWED;
            errorMap[fireauth.RpcHandler.ServerError.INVALID_IDP_RESPONSE] = fireauth.authenum.Error.INVALID_IDP_RESPONSE;
            errorMap[fireauth.RpcHandler.ServerError.FEDERATED_USER_ID_ALREADY_LINKED] = fireauth.authenum.Error.CREDENTIAL_ALREADY_IN_USE;
            errorMap[fireauth.RpcHandler.ServerError.INVALID_MESSAGE_PAYLOAD] = fireauth.authenum.Error.INVALID_MESSAGE_PAYLOAD;
            errorMap[fireauth.RpcHandler.ServerError.INVALID_RECIPIENT_EMAIL] = fireauth.authenum.Error.INVALID_RECIPIENT_EMAIL;
            errorMap[fireauth.RpcHandler.ServerError.INVALID_SENDER] = fireauth.authenum.Error.INVALID_SENDER;
            errorMap[fireauth.RpcHandler.ServerError.EMAIL_NOT_FOUND] = fireauth.authenum.Error.USER_DELETED;
            errorMap[fireauth.RpcHandler.ServerError.EXPIRED_OOB_CODE] = fireauth.authenum.Error.EXPIRED_OOB_CODE;
            errorMap[fireauth.RpcHandler.ServerError.INVALID_OOB_CODE] = fireauth.authenum.Error.INVALID_OOB_CODE;
            errorMap[fireauth.RpcHandler.ServerError.MISSING_OOB_CODE] = fireauth.authenum.Error.INTERNAL_ERROR;
            errorMap[fireauth.RpcHandler.ServerError.CREDENTIAL_TOO_OLD_LOGIN_AGAIN] = fireauth.authenum.Error.CREDENTIAL_TOO_OLD_LOGIN_AGAIN;
            errorMap[fireauth.RpcHandler.ServerError.INVALID_ID_TOKEN] = fireauth.authenum.Error.INVALID_AUTH;
            errorMap[fireauth.RpcHandler.ServerError.TOKEN_EXPIRED] = fireauth.authenum.Error.TOKEN_EXPIRED;
            errorMap[fireauth.RpcHandler.ServerError.USER_NOT_FOUND] = fireauth.authenum.Error.TOKEN_EXPIRED;
            errorMap[fireauth.RpcHandler.ServerError.CORS_UNSUPPORTED] = fireauth.authenum.Error.CORS_UNSUPPORTED;
            errorMap[fireauth.RpcHandler.ServerError.DYNAMIC_LINK_NOT_ACTIVATED] = fireauth.authenum.Error.DYNAMIC_LINK_NOT_ACTIVATED;
            errorMap[fireauth.RpcHandler.ServerError.INVALID_APP_ID] = fireauth.authenum.Error.INVALID_APP_ID;
            errorMap[fireauth.RpcHandler.ServerError.TOO_MANY_ATTEMPTS_TRY_LATER] = fireauth.authenum.Error.TOO_MANY_ATTEMPTS_TRY_LATER;
            errorMap[fireauth.RpcHandler.ServerError.WEAK_PASSWORD] = fireauth.authenum.Error.WEAK_PASSWORD;
            errorMap[fireauth.RpcHandler.ServerError.OPERATION_NOT_ALLOWED] = fireauth.authenum.Error.OPERATION_NOT_ALLOWED;
            errorMap[fireauth.RpcHandler.ServerError.USER_CANCELLED] = fireauth.authenum.Error.USER_CANCELLED;
            errorMap[fireauth.RpcHandler.ServerError.CAPTCHA_CHECK_FAILED] = fireauth.authenum.Error.CAPTCHA_CHECK_FAILED;
            errorMap[fireauth.RpcHandler.ServerError.INVALID_APP_CREDENTIAL] = fireauth.authenum.Error.INVALID_APP_CREDENTIAL;
            errorMap[fireauth.RpcHandler.ServerError.INVALID_CODE] = fireauth.authenum.Error.INVALID_CODE;
            errorMap[fireauth.RpcHandler.ServerError.INVALID_PHONE_NUMBER] = fireauth.authenum.Error.INVALID_PHONE_NUMBER;
            errorMap[fireauth.RpcHandler.ServerError.INVALID_SESSION_INFO] = fireauth.authenum.Error.INVALID_SESSION_INFO;
            errorMap[fireauth.RpcHandler.ServerError.INVALID_TEMPORARY_PROOF] = fireauth.authenum.Error.INVALID_IDP_RESPONSE;
            errorMap[fireauth.RpcHandler.ServerError.MISSING_APP_CREDENTIAL] = fireauth.authenum.Error.MISSING_APP_CREDENTIAL;
            errorMap[fireauth.RpcHandler.ServerError.MISSING_CODE] = fireauth.authenum.Error.MISSING_CODE;
            errorMap[fireauth.RpcHandler.ServerError.MISSING_PHONE_NUMBER] = fireauth.authenum.Error.MISSING_PHONE_NUMBER;
            errorMap[fireauth.RpcHandler.ServerError.MISSING_SESSION_INFO] = fireauth.authenum.Error.MISSING_SESSION_INFO;
            errorMap[fireauth.RpcHandler.ServerError.QUOTA_EXCEEDED] = fireauth.authenum.Error.QUOTA_EXCEEDED;
            errorMap[fireauth.RpcHandler.ServerError.SESSION_EXPIRED] = fireauth.authenum.Error.CODE_EXPIRED;
            errorMap[fireauth.RpcHandler.ServerError.INVALID_CONTINUE_URI] =
              fireauth.authenum.Error.INVALID_CONTINUE_URI;
            errorMap[fireauth.RpcHandler.ServerError.MISSING_ANDROID_PACKAGE_NAME] = fireauth.authenum.Error.MISSING_ANDROID_PACKAGE_NAME;
            errorMap[fireauth.RpcHandler.ServerError.MISSING_IOS_BUNDLE_ID] = fireauth.authenum.Error.MISSING_IOS_BUNDLE_ID;
            errorMap[fireauth.RpcHandler.ServerError.UNAUTHORIZED_DOMAIN] = fireauth.authenum.Error.UNAUTHORIZED_DOMAIN;
            errorMap[fireauth.RpcHandler.ServerError.INVALID_OAUTH_CLIENT_ID] = fireauth.authenum.Error.INVALID_OAUTH_CLIENT_ID;
            errorMap[fireauth.RpcHandler.ServerError.INVALID_CERT_HASH] =
              fireauth.authenum.Error.INVALID_CERT_HASH;
            var customErrorMap = opt_customErrorMap || {};
            goog.object.extend(errorMap, customErrorMap);
            errorMessage = fireauth.RpcHandler.getErrorCodeDetails(serverErrorCode);
            for (var prefixCode in errorMap) if (serverErrorCode.indexOf(prefixCode) === 0) return new fireauth.AuthError(errorMap[prefixCode], errorMessage);
            if (!errorMessage && response) errorMessage = fireauth.util.stringifyJSON(response);
            return new fireauth.AuthError(fireauth.authenum.Error.INTERNAL_ERROR, errorMessage)
          };
          fireauth.RpcHandler.getErrorCodeDetails = function (serverMessage) {
            var matches = serverMessage.match(/^[^\s]+\s*:\s*(.*)$/);
            if (matches && matches.length > 1) return matches[1];
            return undefined
          };
          fireauth.RpcHandler.getApiaryError_ = function (response) {
            var error = response["error"] && response["error"]["errors"] && response["error"]["errors"][0] || {};
            var reason = error["reason"] || "";
            var errorReasonMap = {
              "keyInvalid": fireauth.authenum.Error.INVALID_API_KEY,
              "ipRefererBlocked": fireauth.authenum.Error.APP_NOT_AUTHORIZED
            };
            if (errorReasonMap[reason]) return new fireauth.AuthError(errorReasonMap[reason]);
            return null
          };
          fireauth.RpcHandler.getErrorCode_ = function (resp) {
            return resp["error"] && resp["error"]["message"] || ""
          };
          goog.provide("fireauth.constants");
          goog.provide("fireauth.constants.AuthEventType");
          fireauth.constants.OperationType = {LINK: "link", REAUTHENTICATE: "reauthenticate", SIGN_IN: "signIn"};
          fireauth.constants.AuthEventType = {
            FRAMEWORK_CHANGED: "frameworkChanged",
            LANGUAGE_CODE_CHANGED: "languageCodeChanged"
          };
          fireauth.constants.EndpointSettings;
          fireauth.constants.Endpoint = {
            PRODUCTION: {
              firebaseAuthEndpoint: "https://www.googleapis.com/identitytoolkit/v3/" + "relyingparty/",
              secureTokenEndpoint: "https://securetoken.googleapis.com/v1/token",
              id: "p"
            },
            STAGING: {
              firebaseAuthEndpoint: "https://staging-www.sandbox.googleapis.com/" + "identitytoolkit/v3/relyingparty/",
              secureTokenEndpoint: "https://staging-securetoken.sandbox.googleapis.com" + "/v1/token",
              id: "s"
            },
            TEST: {
              firebaseAuthEndpoint: "https://www-googleapis-test.sandbox.google.com/" + "identitytoolkit/v3/relyingparty/",
              secureTokenEndpoint: "https://test-securetoken.sandbox.googleapis.com/v1" + "/token", id: "t"
            }
          };
          fireauth.constants.getEndpointConfig = function (opt_id) {
            for (var endpointKey in fireauth.constants.Endpoint) if (fireauth.constants.Endpoint[endpointKey].id === opt_id) {
              var endpoint = fireauth.constants.Endpoint[endpointKey];
              return {
                "firebaseEndpoint": endpoint.firebaseAuthEndpoint,
                "secureTokenEndpoint": endpoint.secureTokenEndpoint
              }
            }
            return null
          };
          fireauth.constants.getEndpointId = function (opt_id) {
            if (opt_id && fireauth.constants.getEndpointConfig(opt_id)) return opt_id;
            return undefined
          };
          fireauth.constants.clientEndpoint = fireauth.constants.getEndpointId("__EID__");
          goog.provide("fireauth.iframeclient.IframeWrapper");
          goog.require("fireauth.util");
          goog.require("goog.Promise");
          goog.require("goog.html.TrustedResourceUrl");
          goog.require("goog.net.jsloader");
          goog.require("goog.string.Const");
          fireauth.iframeclient.IframeWrapper = function (url) {
            this.url_ = url;
            this.iframe_ = null;
            this.onIframeOpen_ = this.open_()
          };
          fireauth.iframeclient.IframeWrapper.Message;
          fireauth.iframeclient.IframeWrapper.prototype.getPath_ = function () {
            return this.url_
          };
          fireauth.iframeclient.IframeWrapper.prototype.onReady = function () {
            return this.onIframeOpen_
          };
          fireauth.iframeclient.IframeWrapper.prototype.getOptions_ = function () {
            var options = {
              "where": document.body,
              "url": this.getPath_(),
              "messageHandlersFilter": fireauth.util.getObjectRef("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"),
              "attributes": {"style": {"position": "absolute", "top": "-100px", "width": "1px", "height": "1px"}},
              "dontclear": true
            };
            return options
          };
          fireauth.iframeclient.IframeWrapper.prototype.open_ = function () {
            var self = this;
            return fireauth.iframeclient.IframeWrapper.loadGApiJs_().then(function () {
              return new goog.Promise(function (resolve, reject) {
                var onOpen = function (iframe) {
                  self.iframe_ = iframe;
                  self.iframe_.restyle({"setHideOnLeave": false});
                  var networkErrorTimer = setTimeout(function () {
                    reject(new Error("Network Error"))
                  }, fireauth.iframeclient.IframeWrapper.PING_TIMEOUT_.get());
                  var clearTimerAndResolve = function () {
                    clearTimeout(networkErrorTimer);
                    resolve()
                  };
                  iframe.ping(clearTimerAndResolve).then(clearTimerAndResolve, function (error) {
                    reject(new Error("Network Error"))
                  })
                };
                fireauth.util.getObjectRef("gapi.iframes.getContext")().open(self.getOptions_(), onOpen)
              })
            })
          };
          fireauth.iframeclient.IframeWrapper.prototype.sendMessage = function (message) {
            var self = this;
            return this.onIframeOpen_.then(function () {
              return new goog.Promise(function (resolve, reject) {
                self.iframe_.send(message["type"], message, resolve, fireauth.util.getObjectRef("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"))
              })
            })
          };
          fireauth.iframeclient.IframeWrapper.prototype.registerEvent = function (eventName, handler) {
            var self = this;
            this.onIframeOpen_.then(function () {
              self.iframe_.register(eventName, handler, fireauth.util.getObjectRef("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"))
            })
          };
          fireauth.iframeclient.IframeWrapper.prototype.unregisterEvent = function (eventName, handler) {
            var self = this;
            this.onIframeOpen_.then(function () {
              self.iframe_.unregister(eventName, handler)
            })
          };
          fireauth.iframeclient.IframeWrapper.GAPI_LOADER_SRC_ = goog.string.Const.from("https://apis.google.com/js/api.js?onload=%{onload}");
          fireauth.iframeclient.IframeWrapper.NETWORK_TIMEOUT_ = new fireauth.util.Delay(3E4, 6E4);
          fireauth.iframeclient.IframeWrapper.PING_TIMEOUT_ = new fireauth.util.Delay(5E3, 15E3);
          fireauth.iframeclient.IframeWrapper.cachedGApiLoader_ = null;
          fireauth.iframeclient.IframeWrapper.resetCachedGApiLoader = function () {
            fireauth.iframeclient.IframeWrapper.cachedGApiLoader_ = null
          };
          fireauth.iframeclient.IframeWrapper.loadGApiJs_ = function () {
            if (fireauth.iframeclient.IframeWrapper.cachedGApiLoader_) return fireauth.iframeclient.IframeWrapper.cachedGApiLoader_;
            fireauth.iframeclient.IframeWrapper.cachedGApiLoader_ = (new goog.Promise(function (resolve, reject) {
              if (!fireauth.util.isOnline()) {
                reject(new Error("Network Error"));
                return
              }
              var onGapiLoad = function () {
                fireauth.util.resetUnloadedGapiModules();
                var loader = fireauth.util.getObjectRef("gapi.load");
                loader("gapi.iframes", {
                  "callback": resolve,
                  "ontimeout": function () {
                    fireauth.util.resetUnloadedGapiModules();
                    reject(new Error("Network Error"))
                  }, "timeout": fireauth.iframeclient.IframeWrapper.NETWORK_TIMEOUT_.get()
                })
              };
              if (fireauth.util.getObjectRef("gapi.iframes.Iframe")) resolve(); else if (fireauth.util.getObjectRef("gapi.load")) onGapiLoad(); else {
                var cbName = "__iframefcb" + Math.floor(Math.random() * 1E6).toString();
                goog.global[cbName] = function () {
                  if (fireauth.util.getObjectRef("gapi.load")) onGapiLoad(); else reject(new Error("Network Error"))
                };
                var url =
                  goog.html.TrustedResourceUrl.format(fireauth.iframeclient.IframeWrapper.GAPI_LOADER_SRC_, {"onload": cbName});
                var result = goog.Promise.resolve(goog.net.jsloader.safeLoad(url));
                result.thenCatch(function (error) {
                  reject(new Error("Network Error"))
                })
              }
            })).thenCatch(function (error) {
              fireauth.iframeclient.IframeWrapper.cachedGApiLoader_ = null;
              throw error;
            });
            return fireauth.iframeclient.IframeWrapper.cachedGApiLoader_
          };
          goog.provide("fireauth.iframeclient.IfcHandler");
          goog.provide("fireauth.iframeclient.IframeUrlBuilder");
          goog.provide("fireauth.iframeclient.OAuthUrlBuilder");
          goog.require("fireauth.AuthError");
          goog.require("fireauth.AuthEvent");
          goog.require("fireauth.AuthProvider");
          goog.require("fireauth.InvalidOriginError");
          goog.require("fireauth.OAuthSignInHandler");
          goog.require("fireauth.RpcHandler");
          goog.require("fireauth.authenum.Error");
          goog.require("fireauth.constants");
          goog.require("fireauth.iframeclient.IframeWrapper");
          goog.require("fireauth.util");
          goog.require("goog.Promise");
          goog.require("goog.Timer");
          goog.require("goog.Uri");
          goog.require("goog.array");
          goog.require("goog.object");
          fireauth.iframeclient.SCHEME = "https";
          fireauth.iframeclient.PORT_NUMBER = null;
          fireauth.iframeclient.IframeUrlBuilder = function (authDomain, apiKey, appName) {
            this.authDomain_ = authDomain;
            this.apiKey_ = apiKey;
            this.appName_ = appName;
            this.v_ = null;
            this.uri_ = goog.Uri.create(fireauth.iframeclient.SCHEME, null, this.authDomain_, fireauth.iframeclient.PORT_NUMBER, "/__/auth/iframe", null, null);
            this.uri_.setParameterValue("apiKey", this.apiKey_);
            this.uri_.setParameterValue("appName", this.appName_);
            this.endpointId_ = null;
            this.frameworks_ = []
          };
          fireauth.iframeclient.IframeUrlBuilder.prototype.setVersion = function (v) {
            this.v_ = v;
            return this
          };
          fireauth.iframeclient.IframeUrlBuilder.prototype.setEndpointId = function (eid) {
            this.endpointId_ = eid;
            return this
          };
          fireauth.iframeclient.IframeUrlBuilder.prototype.setFrameworks = function (frameworks) {
            this.frameworks_ = goog.array.clone(frameworks || []);
            return this
          };
          fireauth.iframeclient.IframeUrlBuilder.prototype.toString = function () {
            if (this.v_) this.uri_.setParameterValue("v", this.v_); else this.uri_.removeParameter("v");
            if (this.endpointId_) this.uri_.setParameterValue("eid", this.endpointId_); else this.uri_.removeParameter("eid");
            if (this.frameworks_.length) this.uri_.setParameterValue("fw", this.frameworks_.join(",")); else this.uri_.removeParameter("fw");
            return this.uri_.toString()
          };
          fireauth.iframeclient.OAuthUrlBuilder = function (authDomain, apiKey, appName, authType, provider) {
            this.authDomain_ = authDomain;
            this.apiKey_ = apiKey;
            this.appName_ = appName;
            this.authType_ = authType;
            this.redirectUrl_ = null;
            this.eventId_ = null;
            this.v_ = null;
            this.provider_ = provider;
            this.endpointId_ = null
          };
          fireauth.iframeclient.OAuthUrlBuilder.prototype.setRedirectUrl = function (redirectUrl) {
            this.redirectUrl_ = redirectUrl;
            return this
          };
          fireauth.iframeclient.OAuthUrlBuilder.prototype.setEventId = function (eventId) {
            this.eventId_ = eventId;
            return this
          };
          fireauth.iframeclient.OAuthUrlBuilder.prototype.setVersion = function (v) {
            this.v_ = v;
            return this
          };
          fireauth.iframeclient.OAuthUrlBuilder.prototype.setEndpointId = function (eid) {
            this.endpointId_ = eid;
            return this
          };
          fireauth.iframeclient.OAuthUrlBuilder.prototype.setAdditionalParameters = function (additionalParams) {
            this.additionalParams_ = goog.object.clone(additionalParams || null);
            return this
          };
          fireauth.iframeclient.OAuthUrlBuilder.prototype.toString = function () {
            var uri = goog.Uri.create(fireauth.iframeclient.SCHEME, null, this.authDomain_, fireauth.iframeclient.PORT_NUMBER, "/__/auth/handler", null, null);
            uri.setParameterValue("apiKey", this.apiKey_);
            uri.setParameterValue("appName", this.appName_);
            uri.setParameterValue("authType", this.authType_);
            if (this.provider_["isOAuthProvider"]) {
              this.provider_.setDefaultLanguage(this.getAuthLanguage_());
              uri.setParameterValue("providerId", this.provider_["providerId"]);
              var customParameters = this.provider_.getCustomParameters();
              if (!goog.object.isEmpty(customParameters)) uri.setParameterValue("customParameters", fireauth.util.stringifyJSON(customParameters))
            }
            if (typeof this.provider_.getScopes === "function") {
              var scopes = this.provider_.getScopes();
              if (scopes.length) uri.setParameterValue("scopes", scopes.join(","))
            }
            if (this.redirectUrl_) uri.setParameterValue("redirectUrl", this.redirectUrl_); else uri.removeParameter("redirectUrl");
            if (this.eventId_) uri.setParameterValue("eventId",
              this.eventId_); else uri.removeParameter("eventId");
            if (this.v_) uri.setParameterValue("v", this.v_); else uri.removeParameter("v");
            if (this.additionalParams_) for (var key in this.additionalParams_) if (this.additionalParams_.hasOwnProperty(key) && !uri.getParameterValue(key)) uri.setParameterValue(key, this.additionalParams_[key]);
            if (this.endpointId_) uri.setParameterValue("eid", this.endpointId_); else uri.removeParameter("eid");
            var frameworks = this.getAuthFrameworks_();
            if (frameworks.length) uri.setParameterValue("fw",
              frameworks.join(","));
            return uri.toString()
          };
          fireauth.iframeclient.OAuthUrlBuilder.prototype.getAuthLanguage_ = function () {
            try {
              return firebase["app"](this.appName_)["auth"]().getLanguageCode()
            } catch (e) {
              return null
            }
          };
          fireauth.iframeclient.OAuthUrlBuilder.prototype.getAuthFrameworks_ = function () {
            return fireauth.iframeclient.OAuthUrlBuilder.getAuthFrameworksForApp_(this.appName_)
          };
          fireauth.iframeclient.OAuthUrlBuilder.getAuthFrameworksForApp_ = function (appName) {
            try {
              return firebase["app"](appName)["auth"]().getFramework()
            } catch (e) {
              return []
            }
          };
          fireauth.iframeclient.IfcHandler = function (authDomain, apiKey, appName, opt_clientVersion, opt_endpointId) {
            this.authDomain_ = authDomain;
            this.apiKey_ = apiKey;
            this.appName_ = appName;
            this.clientVersion_ = opt_clientVersion || null;
            this.endpointId_ = opt_endpointId || null;
            this.fullClientVersion_ = null;
            this.iframeUrl_ = null;
            this.rpcHandler_ = null;
            this.authEventListeners_ = [];
            this.originValidator_ = null;
            this.isInitialized_ = null
          };
          fireauth.iframeclient.IfcHandler.getOriginValidator_ = function (rpcHandler, opt_origin) {
            var origin = opt_origin || fireauth.util.getCurrentUrl();
            return rpcHandler.getAuthorizedDomains().then(function (authorizedDomains) {
              if (!fireauth.util.isAuthorizedDomain(authorizedDomains, origin)) throw new fireauth.InvalidOriginError(fireauth.util.getCurrentUrl());
            })
          };
          fireauth.iframeclient.IfcHandler.prototype.initialize = function () {
            if (this.isInitialized_) return this.isInitialized_;
            var self = this;
            this.isInitialized_ = fireauth.util.onDomReady().then(function () {
              self.iframeWrapper_ = new fireauth.iframeclient.IframeWrapper(self.getIframeUrl());
              self.registerEvents_()
            });
            return this.isInitialized_
          };
          fireauth.iframeclient.IfcHandler.prototype.startPopupTimeout = function (popupWin, onError, timeoutDuration) {
            var popupClosedByUserError = new fireauth.AuthError(fireauth.authenum.Error.POPUP_CLOSED_BY_USER);
            var webStorageNotSupportedError = new fireauth.AuthError(fireauth.authenum.Error.WEB_STORAGE_UNSUPPORTED);
            var self = this;
            var isResolved = false;
            return this.initializeAndWait().then(function () {
              self.isWebStorageSupported().then(function (isSupported) {
                if (!isSupported) {
                  if (popupWin) fireauth.util.closeWindow(popupWin);
                  onError(webStorageNotSupportedError);
                  isResolved = true
                }
              })
            }).thenCatch(function (error) {
              return
            }).then(function () {
              if (isResolved) return;
              return fireauth.util.onPopupClose(popupWin)
            }).then(function () {
              if (isResolved) return;
              return goog.Timer.promise(timeoutDuration).then(function () {
                onError(popupClosedByUserError)
              })
            })
          };
          fireauth.iframeclient.IfcHandler.prototype.shouldBeInitializedEarly = function () {
            var ua = fireauth.util.getUserAgentString();
            return !fireauth.util.runsInBackground(ua) && !fireauth.util.iframeCanSyncWebStorage(ua)
          };
          fireauth.iframeclient.IfcHandler.prototype.hasVolatileStorage = function () {
            return false
          };
          fireauth.iframeclient.IfcHandler.prototype.processPopup = function (popupWin, mode, provider, onInitialize, onError, opt_eventId, opt_alreadyRedirected) {
            if (!popupWin) return goog.Promise.reject(new fireauth.AuthError(fireauth.authenum.Error.POPUP_BLOCKED));
            if (opt_alreadyRedirected && !fireauth.util.runsInBackground()) {
              this.initializeAndWait().thenCatch(function (error) {
                fireauth.util.closeWindow(popupWin);
                onError(error)
              });
              onInitialize();
              return goog.Promise.resolve()
            }
            if (!this.originValidator_) this.originValidator_ =
              fireauth.iframeclient.IfcHandler.getOriginValidator_(this.getRpcHandler_());
            var self = this;
            return this.originValidator_.then(function () {
              var onReady = self.initializeAndWait().thenCatch(function (error) {
                fireauth.util.closeWindow(popupWin);
                onError(error);
                throw error;
              });
              onInitialize();
              return onReady
            }).then(function () {
              fireauth.AuthProvider.checkIfOAuthSupported(provider);
              if (opt_alreadyRedirected) return;
              var oauthHelperWidgetUrl = fireauth.iframeclient.IfcHandler.getOAuthHelperWidgetUrl(self.authDomain_, self.apiKey_,
                self.appName_, mode, provider, null, opt_eventId, self.clientVersion_, undefined, self.endpointId_);
              fireauth.util.goTo(oauthHelperWidgetUrl, popupWin)
            }).thenCatch(function (e) {
              if (e.code == "auth/network-request-failed") self.originValidator_ = null;
              throw e;
            })
          };
          fireauth.iframeclient.IfcHandler.prototype.getRpcHandler_ = function () {
            if (!this.rpcHandler_) {
              this.fullClientVersion_ = this.clientVersion_ ? fireauth.util.getClientVersion(fireauth.util.ClientImplementation.JSCORE, this.clientVersion_, fireauth.iframeclient.OAuthUrlBuilder.getAuthFrameworksForApp_(this.appName_)) : null;
              this.rpcHandler_ = new fireauth.RpcHandler(this.apiKey_, fireauth.constants.getEndpointConfig(this.endpointId_), this.fullClientVersion_)
            }
            return this.rpcHandler_
          };
          fireauth.iframeclient.IfcHandler.prototype.processRedirect = function (mode, provider, opt_eventId) {
            if (!this.originValidator_) this.originValidator_ = fireauth.iframeclient.IfcHandler.getOriginValidator_(this.getRpcHandler_());
            var self = this;
            return this.originValidator_.then(function () {
              fireauth.AuthProvider.checkIfOAuthSupported(provider);
              var oauthHelperWidgetUrl = fireauth.iframeclient.IfcHandler.getOAuthHelperWidgetUrl(self.authDomain_, self.apiKey_, self.appName_, mode, provider, fireauth.util.getCurrentUrl(),
                opt_eventId, self.clientVersion_, undefined, self.endpointId_);
              fireauth.util.goTo(oauthHelperWidgetUrl)
            }).thenCatch(function (e) {
              if (e.code == "auth/network-request-failed") self.originValidator_ = null;
              throw e;
            })
          };
          fireauth.iframeclient.IfcHandler.prototype.getIframeUrl = function () {
            if (!this.iframeUrl_) this.iframeUrl_ = fireauth.iframeclient.IfcHandler.getAuthIframeUrl(this.authDomain_, this.apiKey_, this.appName_, this.clientVersion_, this.endpointId_, fireauth.iframeclient.OAuthUrlBuilder.getAuthFrameworksForApp_(this.appName_));
            return this.iframeUrl_
          };
          fireauth.iframeclient.IfcHandler.prototype.initializeAndWait = function () {
            var self = this;
            return this.initialize().then(function () {
              return self.iframeWrapper_.onReady()
            }).thenCatch(function (error) {
              self.originValidator_ = null;
              throw new fireauth.AuthError(fireauth.authenum.Error.NETWORK_REQUEST_FAILED);
            })
          };
          fireauth.iframeclient.IfcHandler.prototype.unloadsOnRedirect = function () {
            return true
          };
          fireauth.iframeclient.IfcHandler.getAuthIframeUrl = function (authDomain, apiKey, appName, opt_clientVersion, opt_endpointId, opt_frameworks) {
            var builder = new fireauth.iframeclient.IframeUrlBuilder(authDomain, apiKey, appName);
            return builder.setVersion(opt_clientVersion).setEndpointId(opt_endpointId).setFrameworks(opt_frameworks).toString()
          };
          fireauth.iframeclient.IfcHandler.getOAuthHelperWidgetUrl = function (authDomain, apiKey, appName, authType, provider, opt_redirectUrl, opt_eventId, opt_clientVersion, opt_additionalParams, opt_endpointId) {
            var builder = new fireauth.iframeclient.OAuthUrlBuilder(authDomain, apiKey, appName, authType, provider);
            return builder.setRedirectUrl(opt_redirectUrl).setEventId(opt_eventId).setVersion(opt_clientVersion).setAdditionalParameters(opt_additionalParams).setEndpointId(opt_endpointId).toString()
          };
          fireauth.iframeclient.IfcHandler.ReceiverEvent = {AUTH_EVENT: "authEvent"};
          fireauth.iframeclient.IfcHandler.SenderEvent = {WEB_STORAGE_SUPPORT_EVENT: "webStorageSupport"};
          fireauth.iframeclient.IfcHandler.Response = {
            STATUS: "status",
            AUTH_EVENT: "authEvent",
            WEB_STORAGE_SUPPORT: "webStorageSupport"
          };
          fireauth.iframeclient.IfcHandler.Status = {ACK: "ACK", ERROR: "ERROR"};
          fireauth.iframeclient.IfcHandler.prototype.registerEvents_ = function () {
            if (!this.iframeWrapper_) throw new Error("IfcHandler must be initialized!");
            var self = this;
            this.iframeWrapper_.registerEvent(fireauth.iframeclient.IfcHandler.ReceiverEvent.AUTH_EVENT, function (response) {
              var resolveResponse = {};
              if (response && response[fireauth.iframeclient.IfcHandler.Response.AUTH_EVENT]) {
                var isHandled = false;
                var authEvent = fireauth.AuthEvent.fromPlainObject(response[fireauth.iframeclient.IfcHandler.Response.AUTH_EVENT]);
                for (var i = 0; i < self.authEventListeners_.length; i++) isHandled = self.authEventListeners_[i](authEvent) || isHandled;
                resolveResponse = {};
                resolveResponse[fireauth.iframeclient.IfcHandler.Response.STATUS] = isHandled ? fireauth.iframeclient.IfcHandler.Status.ACK : fireauth.iframeclient.IfcHandler.Status.ERROR;
                return goog.Promise.resolve(resolveResponse)
              }
              resolveResponse[fireauth.iframeclient.IfcHandler.Response.STATUS] = fireauth.iframeclient.IfcHandler.Status.ERROR;
              return goog.Promise.resolve(resolveResponse)
            })
          };
          fireauth.iframeclient.IfcHandler.prototype.isWebStorageSupported = function () {
            var webStorageSupportEvent = fireauth.iframeclient.IfcHandler.SenderEvent.WEB_STORAGE_SUPPORT_EVENT;
            var message = {"type": webStorageSupportEvent};
            var self = this;
            return this.initialize().then(function () {
              return self.iframeWrapper_.sendMessage(message)
            }).then(function (response) {
              var key = fireauth.iframeclient.IfcHandler.Response.WEB_STORAGE_SUPPORT;
              if (response && response.length && typeof response[0][key] !== "undefined") return response[0][key];
              throw new Error;
            })
          };
          fireauth.iframeclient.IfcHandler.prototype.addAuthEventListener = function (listener) {
            this.authEventListeners_.push(listener)
          };
          fireauth.iframeclient.IfcHandler.prototype.removeAuthEventListener = function (listener) {
            goog.array.removeAllIf(this.authEventListeners_, function (ele) {
              return ele == listener
            })
          };
          goog.provide("fireauth.storage.Storage");
          fireauth.storage.Storage = function () {
          };
          fireauth.storage.Storage.prototype.get = function (key) {
          };
          fireauth.storage.Storage.prototype.set = function (key, value) {
          };
          fireauth.storage.Storage.prototype.remove = function (key) {
          };
          fireauth.storage.Storage.prototype.addStorageListener = function (listener) {
          };
          fireauth.storage.Storage.prototype.removeStorageListener = function (listener) {
          };
          goog.provide("fireauth.storage.AsyncStorage");
          goog.require("fireauth.AuthError");
          goog.require("fireauth.authenum.Error");
          goog.require("fireauth.storage.Storage");
          goog.require("fireauth.util");
          goog.require("goog.Promise");
          fireauth.storage.AsyncStorage = function (opt_asyncStorage) {
            this.storage_ = opt_asyncStorage || firebase.INTERNAL["reactNative"] && firebase.INTERNAL["reactNative"]["AsyncStorage"];
            if (!this.storage_) throw new fireauth.AuthError(fireauth.authenum.Error.INTERNAL_ERROR, "The React Native compatibility library was not found.");
          };
          fireauth.storage.AsyncStorage.prototype.get = function (key) {
            return goog.Promise.resolve(this.storage_["getItem"](key)).then(function (val) {
              return val && fireauth.util.parseJSON(val)
            })
          };
          fireauth.storage.AsyncStorage.prototype.set = function (key, value) {
            return goog.Promise.resolve(this.storage_["setItem"](key, fireauth.util.stringifyJSON(value)))
          };
          fireauth.storage.AsyncStorage.prototype.remove = function (key) {
            return goog.Promise.resolve(this.storage_["removeItem"](key))
          };
          fireauth.storage.AsyncStorage.prototype.addStorageListener = function (listener) {
          };
          fireauth.storage.AsyncStorage.prototype.removeStorageListener = function (listener) {
          };
          goog.provide("fireauth.storage.InMemoryStorage");
          goog.require("goog.Promise");
          fireauth.storage.InMemoryStorage = function () {
            this.storage_ = {}
          };
          fireauth.storage.InMemoryStorage.prototype.get = function (key) {
            return goog.Promise.resolve(this.storage_[key])
          };
          fireauth.storage.InMemoryStorage.prototype.set = function (key, value) {
            this.storage_[key] = value;
            return goog.Promise.resolve()
          };
          fireauth.storage.InMemoryStorage.prototype.remove = function (key) {
            delete this.storage_[key];
            return goog.Promise.resolve()
          };
          fireauth.storage.InMemoryStorage.prototype.addStorageListener = function (listener) {
          };
          fireauth.storage.InMemoryStorage.prototype.removeStorageListener = function (listener) {
          };
          goog.provide("fireauth.storage.IndexedDB");
          goog.require("fireauth.AuthError");
          goog.require("fireauth.authenum.Error");
          goog.require("fireauth.storage.Storage");
          goog.require("fireauth.util");
          goog.require("goog.Promise");
          goog.require("goog.Timer");
          goog.require("goog.array");
          fireauth.storage.IndexedDB = function (dbName, objectStoreName, dataKeyPath, valueKeyPath, version, opt_indexedDB) {
            if (!fireauth.storage.IndexedDB.isAvailable()) throw new fireauth.AuthError(fireauth.authenum.Error.WEB_STORAGE_UNSUPPORTED);
            this.dbName_ = dbName;
            this.objectStoreName_ = objectStoreName;
            this.dataKeyPath_ = dataKeyPath;
            this.valueKeyPath_ = valueKeyPath;
            this.version_ = version;
            this.localMap_ = {};
            this.storageListeners_ = [];
            this.pendingOpsTracker_ = 0;
            this.indexedDB_ = opt_indexedDB || goog.global.indexedDB
          };
          fireauth.storage.IndexedDB.DB_NAME_ = "firebaseLocalStorageDb";
          fireauth.storage.IndexedDB.DATA_OBJECT_STORE_NAME_ = "firebaseLocalStorage";
          fireauth.storage.IndexedDB.DATA_KEY_PATH_ = "fbase_key";
          fireauth.storage.IndexedDB.VALUE_KEY_PATH_ = "value";
          fireauth.storage.IndexedDB.VERSION_ = 1;
          fireauth.storage.IndexedDB.POLLING_DELAY_ = 800;
          fireauth.storage.IndexedDB.STOP_ERROR_ = "STOP_EVENT";
          fireauth.storage.IndexedDB.getFireauthManager = function () {
            if (!fireauth.storage.IndexedDB.managerInstance_) fireauth.storage.IndexedDB.managerInstance_ = new fireauth.storage.IndexedDB(fireauth.storage.IndexedDB.DB_NAME_, fireauth.storage.IndexedDB.DATA_OBJECT_STORE_NAME_, fireauth.storage.IndexedDB.DATA_KEY_PATH_, fireauth.storage.IndexedDB.VALUE_KEY_PATH_, fireauth.storage.IndexedDB.VERSION_);
            return fireauth.storage.IndexedDB.managerInstance_
          };
          fireauth.storage.IndexedDB.prototype.initializeDb_ = function () {
            var self = this;
            return new goog.Promise(function (resolve, reject) {
              var request = self.indexedDB_.open(self.dbName_, self.version_);
              request.onerror = function (event) {
                reject(new Error(event.target.errorCode))
              };
              request.onupgradeneeded = function (event) {
                var db = event.target.result;
                try {
                  db.createObjectStore(self.objectStoreName_, {"keyPath": self.dataKeyPath_})
                } catch (e) {
                  reject(e)
                }
              };
              request.onsuccess = function (event) {
                var db = event.target.result;
                resolve(db)
              }
            })
          };
          fireauth.storage.IndexedDB.prototype.initializeDbAndRun_ = function () {
            if (!this.initPromise_) this.initPromise_ = this.initializeDb_();
            return this.initPromise_
          };
          fireauth.storage.IndexedDB.isAvailable = function () {
            try {
              return !!goog.global["indexedDB"]
            } catch (e) {
              return false
            }
          };
          fireauth.storage.IndexedDB.prototype.getDataObjectStore_ = function (tx) {
            return tx.objectStore(this.objectStoreName_)
          };
          fireauth.storage.IndexedDB.prototype.getTransaction_ = function (db, isReadWrite) {
            var tx = db.transaction([this.objectStoreName_], isReadWrite ? "readwrite" : "readonly");
            return tx
          };
          fireauth.storage.IndexedDB.prototype.onIDBRequest_ = function (request) {
            return new goog.Promise(function (resolve, reject) {
              request.onsuccess = function (event) {
                if (event && event.target) resolve(event.target.result); else resolve()
              };
              request.onerror = function (event) {
                reject(new Error(event.target.errorCode))
              }
            })
          };
          fireauth.storage.IndexedDB.prototype.set = function (key, value) {
            var isLocked = false;
            var dbTemp;
            var self = this;
            return this.initializeDbAndRun_().then(function (db) {
              dbTemp = db;
              var objectStore = self.getDataObjectStore_(self.getTransaction_(dbTemp, true));
              return self.onIDBRequest_(objectStore.get(key))
            }).then(function (data) {
              var objectStore = self.getDataObjectStore_(self.getTransaction_(dbTemp, true));
              if (data) {
                data.value = value;
                return self.onIDBRequest_(objectStore.put(data))
              }
              self.pendingOpsTracker_++;
              isLocked = true;
              var obj = {};
              obj[self.dataKeyPath_] = key;
              obj[self.valueKeyPath_] = value;
              return self.onIDBRequest_(objectStore.add(obj))
            }).then(function () {
              self.localMap_[key] = value
            }).thenAlways(function () {
              if (isLocked) self.pendingOpsTracker_--
            })
          };
          fireauth.storage.IndexedDB.prototype.get = function (key) {
            var self = this;
            return this.initializeDbAndRun_().then(function (db) {
              return self.onIDBRequest_(self.getDataObjectStore_(self.getTransaction_(db, false)).get(key))
            }).then(function (response) {
              return response && response.value
            })
          };
          fireauth.storage.IndexedDB.prototype.remove = function (key) {
            var isLocked = false;
            var self = this;
            return this.initializeDbAndRun_().then(function (db) {
              isLocked = true;
              self.pendingOpsTracker_++;
              return self.onIDBRequest_(self.getDataObjectStore_(self.getTransaction_(db, true))["delete"](key))
            }).then(function () {
              delete self.localMap_[key]
            }).thenAlways(function () {
              if (isLocked) self.pendingOpsTracker_--
            })
          };
          fireauth.storage.IndexedDB.prototype.sync_ = function () {
            var self = this;
            return this.initializeDbAndRun_().then(function (db) {
              var objectStore = self.getDataObjectStore_(self.getTransaction_(db, false));
              if (objectStore["getAll"]) return self.onIDBRequest_(objectStore["getAll"]()); else return new goog.Promise(function (resolve, reject) {
                var res = [];
                var request = objectStore.openCursor();
                request.onsuccess = function (event) {
                  var cursor = event.target.result;
                  if (cursor) {
                    res.push(cursor.value);
                    cursor["continue"]()
                  } else resolve(res)
                };
                request.onerror = function (event) {
                  reject(new Error(event.target.errorCode))
                }
              })
            }).then(function (res) {
              var centralCopy = {};
              var diffKeys = [];
              if (self.pendingOpsTracker_ == 0) {
                for (var i = 0; i < res.length; i++) centralCopy[res[i][self.dataKeyPath_]] = res[i][self.valueKeyPath_];
                diffKeys = fireauth.util.getKeyDiff(self.localMap_, centralCopy);
                self.localMap_ = centralCopy
              }
              return diffKeys
            })
          };
          fireauth.storage.IndexedDB.prototype.addStorageListener = function (listener) {
            if (this.storageListeners_.length == 0) this.startListeners_();
            this.storageListeners_.push(listener)
          };
          fireauth.storage.IndexedDB.prototype.removeStorageListener = function (listener) {
            goog.array.removeAllIf(this.storageListeners_, function (ele) {
              return ele == listener
            });
            if (this.storageListeners_.length == 0) this.stopListeners_()
          };
          fireauth.storage.IndexedDB.prototype.removeAllStorageListeners = function () {
            this.storageListeners_ = [];
            this.stopListeners_()
          };
          fireauth.storage.IndexedDB.prototype.startListeners_ = function () {
            var self = this;
            this.stopListeners_();
            var repeat = function () {
              self.poll_ = goog.Timer.promise(fireauth.storage.IndexedDB.POLLING_DELAY_).then(goog.bind(self.sync_, self)).then(function (keys) {
                if (keys.length > 0) goog.array.forEach(self.storageListeners_, function (listener) {
                  listener(keys)
                })
              }).then(repeat).thenCatch(function (error) {
                if (error.message != fireauth.storage.IndexedDB.STOP_ERROR_) repeat()
              });
              return self.poll_
            };
            repeat()
          };
          fireauth.storage.IndexedDB.prototype.stopListeners_ = function () {
            if (this.poll_) this.poll_.cancel(fireauth.storage.IndexedDB.STOP_ERROR_)
          };
          goog.provide("fireauth.storage.LocalStorage");
          goog.require("fireauth.AuthError");
          goog.require("fireauth.authenum.Error");
          goog.require("fireauth.storage.Storage");
          goog.require("fireauth.util");
          goog.require("goog.Promise");
          goog.require("goog.events");
          fireauth.storage.LocalStorage = function () {
            if (!fireauth.storage.LocalStorage.isAvailable()) {
              if (fireauth.util.getEnvironment() == fireauth.util.Env.NODE) throw new fireauth.AuthError(fireauth.authenum.Error.INTERNAL_ERROR, "The LocalStorage compatibility library was not found.");
              throw new fireauth.AuthError(fireauth.authenum.Error.WEB_STORAGE_UNSUPPORTED);
            }
            this.storage_ = fireauth.storage.LocalStorage.getGlobalStorage() || firebase.INTERNAL["node"]["localStorage"]
          };
          fireauth.storage.LocalStorage.getGlobalStorage = function () {
            try {
              var storage = goog.global["localStorage"];
              var key = fireauth.util.generateEventId();
              if (storage) {
                storage["setItem"](key, "1");
                storage["removeItem"](key)
              }
              return storage
            } catch (e) {
              return null
            }
          };
          fireauth.storage.LocalStorage.STORAGE_AVAILABLE_KEY_ = "__sak";
          fireauth.storage.LocalStorage.isAvailable = function () {
            var isNode = fireauth.util.getEnvironment() == fireauth.util.Env.NODE;
            var storage = fireauth.storage.LocalStorage.getGlobalStorage() || isNode && firebase.INTERNAL["node"] && firebase.INTERNAL["node"]["localStorage"];
            if (!storage) return false;
            try {
              storage.setItem(fireauth.storage.LocalStorage.STORAGE_AVAILABLE_KEY_, "1");
              storage.removeItem(fireauth.storage.LocalStorage.STORAGE_AVAILABLE_KEY_);
              return true
            } catch (e) {
              return false
            }
          };
          fireauth.storage.LocalStorage.prototype.get = function (key) {
            var self = this;
            return goog.Promise.resolve().then(function () {
              var json = self.storage_.getItem(key);
              return fireauth.util.parseJSON(json)
            })
          };
          fireauth.storage.LocalStorage.prototype.set = function (key, value) {
            var self = this;
            return goog.Promise.resolve().then(function () {
              var obj = fireauth.util.stringifyJSON(value);
              if (goog.isNull(obj)) self.remove(key); else self.storage_.setItem(key, obj)
            })
          };
          fireauth.storage.LocalStorage.prototype.remove = function (key) {
            var self = this;
            return goog.Promise.resolve().then(function () {
              self.storage_.removeItem(key)
            })
          };
          fireauth.storage.LocalStorage.prototype.addStorageListener = function (listener) {
            if (goog.global["window"]) goog.events.listen(goog.global["window"], "storage", listener)
          };
          fireauth.storage.LocalStorage.prototype.removeStorageListener = function (listener) {
            if (goog.global["window"]) goog.events.unlisten(goog.global["window"], "storage", listener)
          };
          goog.provide("fireauth.storage.NullStorage");
          goog.require("goog.Promise");
          fireauth.storage.NullStorage = function () {
            this.storage_ = {}
          };
          fireauth.storage.NullStorage.prototype.get = function (key) {
            return goog.Promise.resolve(null)
          };
          fireauth.storage.NullStorage.prototype.set = function (key, value) {
            return goog.Promise.resolve()
          };
          fireauth.storage.NullStorage.prototype.remove = function (key) {
            return goog.Promise.resolve()
          };
          fireauth.storage.NullStorage.prototype.addStorageListener = function (listener) {
          };
          fireauth.storage.NullStorage.prototype.removeStorageListener = function (listener) {
          };
          goog.provide("fireauth.storage.SessionStorage");
          goog.require("fireauth.AuthError");
          goog.require("fireauth.authenum.Error");
          goog.require("fireauth.storage.Storage");
          goog.require("fireauth.util");
          goog.require("goog.Promise");
          fireauth.storage.SessionStorage = function () {
            if (!fireauth.storage.SessionStorage.isAvailable()) {
              if (fireauth.util.getEnvironment() == fireauth.util.Env.NODE) throw new fireauth.AuthError(fireauth.authenum.Error.INTERNAL_ERROR, "The SessionStorage compatibility library was not found.");
              throw new fireauth.AuthError(fireauth.authenum.Error.WEB_STORAGE_UNSUPPORTED);
            }
            this.storage_ = fireauth.storage.SessionStorage.getGlobalStorage() || firebase.INTERNAL["node"]["sessionStorage"]
          };
          fireauth.storage.SessionStorage.getGlobalStorage = function () {
            try {
              var storage = goog.global["sessionStorage"];
              var key = fireauth.util.generateEventId();
              if (storage) {
                storage["setItem"](key, "1");
                storage["removeItem"](key)
              }
              return storage
            } catch (e) {
              return null
            }
          };
          fireauth.storage.SessionStorage.STORAGE_AVAILABLE_KEY_ = "__sak";
          fireauth.storage.SessionStorage.isAvailable = function () {
            var isNode = fireauth.util.getEnvironment() == fireauth.util.Env.NODE;
            var storage = fireauth.storage.SessionStorage.getGlobalStorage() || isNode && firebase.INTERNAL["node"] && firebase.INTERNAL["node"]["sessionStorage"];
            if (!storage) return false;
            try {
              storage.setItem(fireauth.storage.SessionStorage.STORAGE_AVAILABLE_KEY_, "1");
              storage.removeItem(fireauth.storage.SessionStorage.STORAGE_AVAILABLE_KEY_);
              return true
            } catch (e) {
              return false
            }
          };
          fireauth.storage.SessionStorage.prototype.get = function (key) {
            var self = this;
            return goog.Promise.resolve().then(function () {
              var json = self.storage_.getItem(key);
              return fireauth.util.parseJSON(json)
            })
          };
          fireauth.storage.SessionStorage.prototype.set = function (key, value) {
            var self = this;
            return goog.Promise.resolve().then(function () {
              var obj = fireauth.util.stringifyJSON(value);
              if (goog.isNull(obj)) self.remove(key); else self.storage_.setItem(key, obj)
            })
          };
          fireauth.storage.SessionStorage.prototype.remove = function (key) {
            var self = this;
            return goog.Promise.resolve().then(function () {
              self.storage_.removeItem(key)
            })
          };
          fireauth.storage.SessionStorage.prototype.addStorageListener = function (listener) {
          };
          fireauth.storage.SessionStorage.prototype.removeStorageListener = function (listener) {
          };
          goog.provide("fireauth.storage.Factory");
          goog.provide("fireauth.storage.Factory.EnvConfig");
          goog.require("fireauth.storage.AsyncStorage");
          goog.require("fireauth.storage.InMemoryStorage");
          goog.require("fireauth.storage.IndexedDB");
          goog.require("fireauth.storage.LocalStorage");
          goog.require("fireauth.storage.NullStorage");
          goog.require("fireauth.storage.SessionStorage");
          goog.require("fireauth.util");
          fireauth.storage.Factory = function (env) {
            this.env_ = env
          };
          fireauth.storage.Factory.getInstance = function () {
            if (!fireauth.storage.Factory.instance_) fireauth.storage.Factory.instance_ = new fireauth.storage.Factory(fireauth.storage.Factory.getEnvConfig());
            return fireauth.storage.Factory.instance_
          };
          fireauth.storage.Factory.EnvConfigType;
          fireauth.storage.Factory.EnvConfig = {
            BROWSER: {
              persistent: fireauth.storage.LocalStorage,
              temporary: fireauth.storage.SessionStorage
            },
            NODE: {persistent: fireauth.storage.LocalStorage, temporary: fireauth.storage.SessionStorage},
            REACT_NATIVE: {persistent: fireauth.storage.AsyncStorage, temporary: fireauth.storage.NullStorage}
          };
          fireauth.storage.Factory.getEnvConfig = function () {
            var envMap = {};
            envMap[fireauth.util.Env.BROWSER] = fireauth.storage.Factory.EnvConfig.BROWSER;
            envMap[fireauth.util.Env.NODE] = fireauth.storage.Factory.EnvConfig.NODE;
            envMap[fireauth.util.Env.REACT_NATIVE] = fireauth.storage.Factory.EnvConfig.REACT_NATIVE;
            return envMap[fireauth.util.getEnvironment()]
          };
          fireauth.storage.Factory.prototype.makePersistentStorage = function () {
            if (fireauth.util.isLocalStorageNotSynchronized()) return fireauth.storage.IndexedDB.getFireauthManager();
            return new this.env_.persistent
          };
          fireauth.storage.Factory.prototype.makeTemporaryStorage = function () {
            return new this.env_.temporary
          };
          fireauth.storage.Factory.prototype.makeInMemoryStorage = function () {
            return new fireauth.storage.InMemoryStorage
          };
          goog.provide("fireauth.authStorage");
          goog.provide("fireauth.authStorage.Key");
          goog.provide("fireauth.authStorage.Manager");
          goog.provide("fireauth.authStorage.Persistence");
          goog.require("fireauth.AuthError");
          goog.require("fireauth.authenum.Error");
          goog.require("fireauth.storage.Factory");
          goog.require("fireauth.util");
          goog.require("goog.Promise");
          goog.require("goog.array");
          goog.require("goog.events");
          goog.require("goog.object");
          fireauth.authStorage.NAMESPACE_ = "firebase";
          fireauth.authStorage.SEPARATOR_ = ":";
          fireauth.authStorage.IE10_LOCAL_STORAGE_SYNC_DELAY = 10;
          fireauth.authStorage.Persistence = {LOCAL: "local", NONE: "none", SESSION: "session"};
          fireauth.authStorage.validatePersistenceArgument = function (arg) {
            var invalidTypeError = new fireauth.AuthError(fireauth.authenum.Error.INVALID_PERSISTENCE);
            var unsupportedTypeError = new fireauth.AuthError(fireauth.authenum.Error.UNSUPPORTED_PERSISTENCE);
            if (!goog.object.containsValue(fireauth.authStorage.Persistence, arg) || typeof arg !== "string") throw invalidTypeError;
            switch (fireauth.util.getEnvironment()) {
              case fireauth.util.Env.REACT_NATIVE:
                if (arg === fireauth.authStorage.Persistence.SESSION) throw unsupportedTypeError;
                break;
              case fireauth.util.Env.NODE:
                if (arg !== fireauth.authStorage.Persistence.NONE) throw unsupportedTypeError;
                break;
              case fireauth.util.Env.BROWSER:
              default:
                if (!fireauth.util.isWebStorageSupported() && arg !== fireauth.authStorage.Persistence.NONE) throw unsupportedTypeError;
                break
            }
          };
          fireauth.authStorage.Key;
          fireauth.authStorage.Manager = function (namespace, separator, safariLocalStorageNotSynced, runsInBackground, webStorageSupported) {
            this.namespace_ = namespace;
            this.separator_ = separator;
            this.safariLocalStorageNotSynced_ = safariLocalStorageNotSynced;
            this.runsInBackground_ = runsInBackground;
            this.webStorageSupported_ = webStorageSupported;
            this.listeners_ = {};
            var storageFactory = fireauth.storage.Factory.getInstance();
            try {
              this.persistentStorage_ = storageFactory.makePersistentStorage()
            } catch (e) {
              this.persistentStorage_ =
                storageFactory.makeInMemoryStorage();
              this.localStorageNotSynchronized_ = false;
              this.runsInBackground_ = true
            }
            try {
              this.temporaryStorage_ = storageFactory.makeTemporaryStorage()
            } catch (e$4) {
              this.temporaryStorage_ = storageFactory.makeInMemoryStorage()
            }
            this.inMemoryStorage_ = storageFactory.makeInMemoryStorage();
            this.storageChangeEventHandler_ = goog.bind(this.storageChangeEvent_, this);
            this.localMap_ = {}
          };
          fireauth.authStorage.Manager.getInstance = function () {
            if (!fireauth.authStorage.Manager.instance_) fireauth.authStorage.Manager.instance_ = new fireauth.authStorage.Manager(fireauth.authStorage.NAMESPACE_, fireauth.authStorage.SEPARATOR_, fireauth.util.isSafariLocalStorageNotSynced(), fireauth.util.runsInBackground(), fireauth.util.isWebStorageSupported());
            return fireauth.authStorage.Manager.instance_
          };
          fireauth.authStorage.Manager.prototype.getStorage_ = function (persistent) {
            switch (persistent) {
              case fireauth.authStorage.Persistence.SESSION:
                return this.temporaryStorage_;
              case fireauth.authStorage.Persistence.NONE:
                return this.inMemoryStorage_;
              case fireauth.authStorage.Persistence.LOCAL:
              default:
                return this.persistentStorage_
            }
          };
          fireauth.authStorage.Manager.prototype.getKeyName_ = function (dataKey, opt_id) {
            return this.namespace_ + this.separator_ + dataKey.name + (opt_id ? this.separator_ + opt_id : "")
          };
          fireauth.authStorage.Manager.prototype.get = function (dataKey, opt_id) {
            var keyName = this.getKeyName_(dataKey, opt_id);
            return this.getStorage_(dataKey.persistent).get(keyName)
          };
          fireauth.authStorage.Manager.prototype.remove = function (dataKey, opt_id) {
            var keyName = this.getKeyName_(dataKey, opt_id);
            if (dataKey.persistent == fireauth.authStorage.Persistence.LOCAL) this.localMap_[keyName] = null;
            return this.getStorage_(dataKey.persistent).remove(keyName)
          };
          fireauth.authStorage.Manager.prototype.set = function (dataKey, value, opt_id) {
            var keyName = this.getKeyName_(dataKey, opt_id);
            var self = this;
            var storage = this.getStorage_(dataKey.persistent);
            return storage.set(keyName, value).then(function () {
              return storage.get(keyName)
            }).then(function (serializedValue) {
              if (dataKey.persistent == fireauth.authStorage.Persistence.LOCAL) self.localMap_[keyName] = serializedValue
            })
          };
          fireauth.authStorage.Manager.prototype.addListener = function (dataKey, id, listener) {
            var key = this.getKeyName_(dataKey, id);
            if (this.webStorageSupported_) this.localMap_[key] = goog.global["localStorage"]["getItem"](key);
            if (goog.object.isEmpty(this.listeners_)) this.startListeners_();
            if (!this.listeners_[key]) this.listeners_[key] = [];
            this.listeners_[key].push(listener)
          };
          fireauth.authStorage.Manager.prototype.removeListener = function (dataKey, id, listener) {
            var key = this.getKeyName_(dataKey, id);
            if (this.listeners_[key]) {
              goog.array.removeAllIf(this.listeners_[key], function (ele) {
                return ele == listener
              });
              if (this.listeners_[key].length == 0) delete this.listeners_[key]
            }
            if (goog.object.isEmpty(this.listeners_)) this.stopListeners_()
          };
          fireauth.authStorage.Manager.LOCAL_STORAGE_POLLING_TIMER_ = 1E3;
          fireauth.authStorage.Manager.prototype.startListeners_ = function () {
            this.getStorage_(fireauth.authStorage.Persistence.LOCAL).addStorageListener(this.storageChangeEventHandler_);
            if (!this.runsInBackground_ && !fireauth.util.isLocalStorageNotSynchronized() && this.webStorageSupported_) this.startManualListeners_()
          };
          fireauth.authStorage.Manager.prototype.startManualListeners_ = function () {
            var self = this;
            this.stopManualListeners_();
            this.manualListenerTimer_ = setInterval(function () {
                for (var key in self.listeners_) {
                  var currentValue = goog.global["localStorage"]["getItem"](key);
                  var oldValue = self.localMap_[key];
                  if (currentValue != oldValue) {
                    self.localMap_[key] = currentValue;
                    var event = new goog.events.BrowserEvent({
                      type: "storage",
                      key: key,
                      target: window,
                      oldValue: oldValue,
                      newValue: currentValue,
                      poll: true
                    });
                    self.storageChangeEvent_(event)
                  }
                }
              },
              fireauth.authStorage.Manager.LOCAL_STORAGE_POLLING_TIMER_)
          };
          fireauth.authStorage.Manager.prototype.stopManualListeners_ = function () {
            if (this.manualListenerTimer_) {
              clearInterval(this.manualListenerTimer_);
              this.manualListenerTimer_ = null
            }
          };
          fireauth.authStorage.Manager.prototype.stopListeners_ = function () {
            this.getStorage_(fireauth.authStorage.Persistence.LOCAL).removeStorageListener(this.storageChangeEventHandler_);
            this.stopManualListeners_()
          };
          fireauth.authStorage.Manager.prototype.storageChangeEvent_ = function (data) {
            if (data && data.getBrowserEvent) {
              var event = data;
              var key = event.getBrowserEvent().key;
              if (key == null) {
                for (var keyName in this.listeners_) {
                  var storedValue = this.localMap_[keyName];
                  if (typeof storedValue === "undefined") storedValue = null;
                  var realValue = goog.global["localStorage"]["getItem"](keyName);
                  if (realValue !== storedValue) {
                    this.localMap_[keyName] = realValue;
                    this.callListeners_(keyName)
                  }
                }
                return
              }
              if (key.indexOf(this.namespace_ + this.separator_) !=
                0 || !this.listeners_[key]) return;
              if (typeof event.getBrowserEvent().poll !== "undefined") this.getStorage_(fireauth.authStorage.Persistence.LOCAL).removeStorageListener(this.storageChangeEventHandler_); else this.stopManualListeners_();
              if (this.safariLocalStorageNotSynced_) {
                var currentValue = goog.global["localStorage"]["getItem"](key);
                var newValue = event.getBrowserEvent().newValue;
                if (newValue !== currentValue) if (newValue !== null) goog.global["localStorage"]["setItem"](key, newValue); else goog.global["localStorage"]["removeItem"](key);
                else if (this.localMap_[key] === newValue && typeof event.getBrowserEvent().poll === "undefined") return
              }
              var self = this;
              var triggerListeners = function () {
                if (typeof event.getBrowserEvent().poll === "undefined" && self.localMap_[key] === goog.global["localStorage"]["getItem"](key)) return;
                self.localMap_[key] = goog.global["localStorage"]["getItem"](key);
                self.callListeners_(key)
              };
              if (fireauth.util.isIe10() && goog.global["localStorage"]["getItem"](key) !== event.getBrowserEvent().newValue && event.getBrowserEvent().newValue !==
                event.getBrowserEvent().oldValue) setTimeout(triggerListeners, fireauth.authStorage.IE10_LOCAL_STORAGE_SYNC_DELAY); else triggerListeners()
            } else {
              var keys = data;
              goog.array.forEach(keys, goog.bind(this.callListeners_, this))
            }
          };
          fireauth.authStorage.Manager.prototype.callListeners_ = function (key) {
            if (this.listeners_[key]) goog.array.forEach(this.listeners_[key], function (listener) {
              listener()
            })
          };
          goog.provide("fireauth.storage.AuthEventManager");
          goog.provide("fireauth.storage.AuthEventManager.Keys");
          goog.require("fireauth.AuthEvent");
          goog.require("fireauth.authStorage");
          fireauth.storage.AuthEventManager = function (appId, opt_manager) {
            this.appId_ = appId;
            this.manager_ = opt_manager || fireauth.authStorage.Manager.getInstance()
          };
          fireauth.storage.AuthEventManager.Keys = {
            AUTH_EVENT: {
              name: "authEvent",
              persistent: fireauth.authStorage.Persistence.LOCAL
            }, REDIRECT_EVENT: {name: "redirectEvent", persistent: fireauth.authStorage.Persistence.SESSION}
          };
          fireauth.storage.AuthEventManager.prototype.getAuthEvent = function () {
            return this.manager_.get(fireauth.storage.AuthEventManager.Keys.AUTH_EVENT, this.appId_).then(function (response) {
              return fireauth.AuthEvent.fromPlainObject(response)
            })
          };
          fireauth.storage.AuthEventManager.prototype.removeAuthEvent = function () {
            return this.manager_.remove(fireauth.storage.AuthEventManager.Keys.AUTH_EVENT, this.appId_)
          };
          fireauth.storage.AuthEventManager.prototype.addAuthEventListener = function (listener) {
            this.manager_.addListener(fireauth.storage.AuthEventManager.Keys.AUTH_EVENT, this.appId_, listener)
          };
          fireauth.storage.AuthEventManager.prototype.removeAuthEventListener = function (listener) {
            this.manager_.removeListener(fireauth.storage.AuthEventManager.Keys.AUTH_EVENT, this.appId_, listener)
          };
          fireauth.storage.AuthEventManager.prototype.getRedirectEvent = function () {
            return this.manager_.get(fireauth.storage.AuthEventManager.Keys.REDIRECT_EVENT, this.appId_).then(function (response) {
              return fireauth.AuthEvent.fromPlainObject(response)
            })
          };
          fireauth.storage.AuthEventManager.prototype.removeRedirectEvent = function () {
            return this.manager_.remove(fireauth.storage.AuthEventManager.Keys.REDIRECT_EVENT, this.appId_)
          };
          goog.provide("fireauth.OAuthHelperState");
          goog.require("fireauth.AuthEvent");
          fireauth.OAuthHelperState = function (apiKey, appName, type, opt_eventId, opt_redirectUrl, opt_clientVersion, opt_displayName, opt_apn, opt_ibi, opt_eid, opt_frameworks, opt_clientId, opt_sha1Cert) {
            this.apiKey_ = apiKey;
            this.appName_ = appName;
            this.type_ = type;
            this.eventId_ = opt_eventId || null;
            this.redirectUrl_ = opt_redirectUrl || null;
            this.clientVersion_ = opt_clientVersion || null;
            this.displayName_ = opt_displayName || null;
            this.apn_ = opt_apn || null;
            this.ibi_ = opt_ibi || null;
            this.eid_ = opt_eid || null;
            this.frameworks_ = opt_frameworks ||
              [];
            this.clientId_ = opt_clientId || null;
            this.sha1Cert_ = opt_sha1Cert || null
          };
          fireauth.OAuthHelperState.prototype.getClientId = function () {
            return this.clientId_
          };
          fireauth.OAuthHelperState.prototype.getSha1Cert = function () {
            return this.sha1Cert_
          };
          fireauth.OAuthHelperState.prototype.getType = function () {
            return this.type_
          };
          fireauth.OAuthHelperState.prototype.getEventId = function () {
            return this.eventId_
          };
          fireauth.OAuthHelperState.prototype.getApiKey = function () {
            return this.apiKey_
          };
          fireauth.OAuthHelperState.prototype.getAppName = function () {
            return this.appName_
          };
          fireauth.OAuthHelperState.prototype.getRedirectUrl = function () {
            return this.redirectUrl_
          };
          fireauth.OAuthHelperState.prototype.getClientVersion = function () {
            return this.clientVersion_
          };
          fireauth.OAuthHelperState.prototype.getDisplayName = function () {
            return this.displayName_
          };
          fireauth.OAuthHelperState.prototype.getApn = function () {
            return this.apn_
          };
          fireauth.OAuthHelperState.prototype.getIbi = function () {
            return this.ibi_
          };
          fireauth.OAuthHelperState.prototype.getEndpointId = function () {
            return this.eid_
          };
          fireauth.OAuthHelperState.prototype.getFrameworks = function () {
            return this.frameworks_
          };
          fireauth.OAuthHelperState.prototype.toPlainObject = function () {
            return {
              "apiKey": this.apiKey_,
              "appName": this.appName_,
              "type": this.type_,
              "eventId": this.eventId_,
              "redirectUrl": this.redirectUrl_,
              "clientVersion": this.clientVersion_,
              "displayName": this.displayName_,
              "apn": this.apn_,
              "ibi": this.ibi_,
              "eid": this.eid_,
              "fw": this.frameworks_,
              "clientId": this.clientId_,
              "sha1Cert": this.sha1Cert_
            }
          };
          fireauth.OAuthHelperState.fromPlainObject = function (rawResponse) {
            var response = rawResponse || {};
            if (response["type"] && response["apiKey"]) return new fireauth.OAuthHelperState(response["apiKey"], response["appName"] || "", response["type"], response["eventId"], response["redirectUrl"], response["clientVersion"], response["displayName"], response["apn"], response["ibi"], response["eid"], response["fw"], response["clientId"], response["sha1Cert"]);
            return null
          };
          goog.provide("fireauth.storage.OAuthHandlerManager");
          goog.require("fireauth.AuthEvent");
          goog.require("fireauth.OAuthHelperState");
          goog.require("fireauth.authStorage");
          goog.require("fireauth.storage.AuthEventManager.Keys");
          fireauth.storage.OAuthHandlerManager = function (opt_manager) {
            this.manager_ = opt_manager || fireauth.authStorage.Manager.getInstance()
          };
          fireauth.storage.OAuthHandlerManager.Keys_ = {
            OAUTH_HELPER_STATE: {
              name: "oauthHelperState",
              persistent: fireauth.authStorage.Persistence.SESSION
            }, SESSION_ID: {name: "sessionId", persistent: fireauth.authStorage.Persistence.SESSION}
          };
          fireauth.storage.OAuthHandlerManager.prototype.getSessionId = function (appId) {
            return this.manager_.get(fireauth.storage.OAuthHandlerManager.Keys_.SESSION_ID, appId)
          };
          fireauth.storage.OAuthHandlerManager.prototype.removeSessionId = function (appId) {
            return this.manager_.remove(fireauth.storage.OAuthHandlerManager.Keys_.SESSION_ID, appId)
          };
          fireauth.storage.OAuthHandlerManager.prototype.setSessionId = function (appId, sessionId) {
            return this.manager_.set(fireauth.storage.OAuthHandlerManager.Keys_.SESSION_ID, sessionId, appId)
          };
          fireauth.storage.OAuthHandlerManager.prototype.getOAuthHelperState = function () {
            return this.manager_.get(fireauth.storage.OAuthHandlerManager.Keys_.OAUTH_HELPER_STATE).then(function (response) {
              return fireauth.OAuthHelperState.fromPlainObject(response)
            })
          };
          fireauth.storage.OAuthHandlerManager.prototype.removeOAuthHelperState = function () {
            return this.manager_.remove(fireauth.storage.OAuthHandlerManager.Keys_.OAUTH_HELPER_STATE)
          };
          fireauth.storage.OAuthHandlerManager.prototype.setOAuthHelperState = function (state) {
            return this.manager_.set(fireauth.storage.OAuthHandlerManager.Keys_.OAUTH_HELPER_STATE, state.toPlainObject())
          };
          fireauth.storage.OAuthHandlerManager.prototype.setAuthEvent = function (appId, authEvent) {
            return this.manager_.set(fireauth.storage.AuthEventManager.Keys.AUTH_EVENT, authEvent.toPlainObject(), appId)
          };
          fireauth.storage.OAuthHandlerManager.prototype.setRedirectEvent = function (appId, authEvent) {
            return this.manager_.set(fireauth.storage.AuthEventManager.Keys.REDIRECT_EVENT, authEvent.toPlainObject(), appId)
          };
          goog.provide("fireauth.CordovaHandler");
          goog.require("fireauth.AuthError");
          goog.require("fireauth.AuthEvent");
          goog.require("fireauth.AuthProvider");
          goog.require("fireauth.DynamicLink");
          goog.require("fireauth.OAuthSignInHandler");
          goog.require("fireauth.authenum.Error");
          goog.require("fireauth.iframeclient.IfcHandler");
          goog.require("fireauth.storage.AuthEventManager");
          goog.require("fireauth.storage.OAuthHandlerManager");
          goog.require("fireauth.util");
          goog.require("goog.Promise");
          goog.require("goog.Timer");
          goog.require("goog.Uri");
          goog.require("goog.array");
          goog.require("goog.crypt");
          goog.require("goog.crypt.Sha256");
          fireauth.CordovaHandler = function (authDomain, apiKey, appName, opt_clientVersion, opt_initialTimeout, opt_redirectTimeout, opt_endpointId) {
            this.authDomain_ = authDomain;
            this.apiKey_ = apiKey;
            this.appName_ = appName;
            this.clientVersion_ = opt_clientVersion || null;
            this.endpointId_ = opt_endpointId || null;
            this.storageKey_ = fireauth.util.createStorageKey(apiKey, appName);
            this.savePartialEventManager_ = new fireauth.storage.OAuthHandlerManager;
            this.getAndDeletePartialEventManager_ = new fireauth.storage.AuthEventManager(this.storageKey_);
            this.initialAuthEvent_ = null;
            this.authEventListeners_ = [];
            this.initialTimeout_ = opt_initialTimeout || fireauth.CordovaHandler.INITIAL_TIMEOUT_MS_;
            this.redirectTimeout_ = opt_redirectTimeout || fireauth.CordovaHandler.REDIRECT_TIMEOUT_MS_;
            this.pendingRedirect_ = null;
            this.inAppBrowserRef_ = null
          };
          fireauth.CordovaHandler.SESSION_ID_TOTAL_CHARS_ = 20;
          fireauth.CordovaHandler.INITIAL_TIMEOUT_MS_ = 500;
          fireauth.CordovaHandler.REDIRECT_TIMEOUT_MS_ = 2E3;
          fireauth.CordovaHandler.getError_ = function (opt_message) {
            return new fireauth.AuthError(fireauth.authenum.Error.INVALID_CORDOVA_CONFIGURATION, opt_message)
          };
          fireauth.CordovaHandler.prototype.initializeAndWait = function () {
            if (this.isReady_) return this.isReady_;
            this.isReady_ = fireauth.util.checkIfCordova().then(function () {
              var subscribe = fireauth.util.getObjectRef("universalLinks.subscribe", goog.global);
              if (typeof subscribe !== "function") throw fireauth.CordovaHandler.getError_("cordova-universal-links-plugin is not installed");
              var appIdentifier = fireauth.util.getObjectRef("BuildInfo.packageName", goog.global);
              if (typeof appIdentifier === "undefined") throw fireauth.CordovaHandler.getError_("cordova-plugin-buildinfo is not installed");
              var openUrl = fireauth.util.getObjectRef("cordova.plugins.browsertab.openUrl", goog.global);
              if (typeof openUrl !== "function") throw fireauth.CordovaHandler.getError_("cordova-plugin-browsertab is not installed");
              var openInAppBrowser = fireauth.util.getObjectRef("cordova.InAppBrowser.open", goog.global);
              if (typeof openInAppBrowser !== "function") throw fireauth.CordovaHandler.getError_("cordova-plugin-inappbrowser is not installed");
            }, function (error) {
              throw new fireauth.AuthError(fireauth.authenum.Error.CORDOVA_NOT_READY);
            });
            return this.isReady_
          };
          fireauth.CordovaHandler.prototype.generateSessionId_ = function (numOfChars) {
            var chars = [];
            var allowedChars = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
            while (numOfChars > 0) {
              var index = Math.floor(Math.random() * allowedChars.length);
              chars.push(allowedChars.charAt(index));
              numOfChars--
            }
            return chars.join("")
          };
          fireauth.CordovaHandler.prototype.computeSecureHash_ = function (str) {
            var sha256 = new goog.crypt.Sha256;
            sha256.update(str);
            return goog.crypt.byteArrayToHex(sha256.digest())
          };
          fireauth.CordovaHandler.prototype.startPopupTimeout = function (popupWin, onError, timeoutDuration) {
            onError(new fireauth.AuthError(fireauth.authenum.Error.OPERATION_NOT_SUPPORTED));
            return goog.Promise.resolve()
          };
          fireauth.CordovaHandler.prototype.processPopup = function (popupWin, mode, provider, onInitialize, onError, opt_eventId, opt_alreadyRedirected) {
            return goog.Promise.reject(new fireauth.AuthError(fireauth.authenum.Error.OPERATION_NOT_SUPPORTED))
          };
          fireauth.CordovaHandler.prototype.unloadsOnRedirect = function () {
            return false
          };
          fireauth.CordovaHandler.prototype.shouldBeInitializedEarly = function () {
            return true
          };
          fireauth.CordovaHandler.prototype.hasVolatileStorage = function () {
            return true
          };
          fireauth.CordovaHandler.prototype.processRedirect = function (mode, provider, opt_eventId) {
            if (this.pendingRedirect_) return goog.Promise.reject(new fireauth.AuthError(fireauth.authenum.Error.REDIRECT_OPERATION_PENDING));
            var self = this;
            var doc = goog.global.document;
            var onClose = null;
            var authEventCallback = null;
            var onResume = null;
            var onVisibilityChange = null;
            var cleanup = function () {
              if (onResume) doc.removeEventListener("resume", onResume, false);
              if (onVisibilityChange) doc.removeEventListener("visibilitychange", onVisibilityChange,
                false);
              if (onClose) onClose.cancel();
              if (authEventCallback) self.removeAuthEventListener(authEventCallback);
              self.pendingRedirect_ = null
            };
            this.pendingRedirect_ = goog.Promise.resolve().then(function () {
              fireauth.AuthProvider.checkIfOAuthSupported(provider);
              return self.getInitialAuthEvent_()
            }).then(function () {
              return self.processRedirectInternal_(mode, provider, opt_eventId)
            }).then(function () {
              return (new goog.Promise(function (resolve, reject) {
                authEventCallback = function (event) {
                  var closeBrowsertab = fireauth.util.getObjectRef("cordova.plugins.browsertab.close",
                    goog.global);
                  resolve();
                  if (typeof closeBrowsertab === "function") closeBrowsertab();
                  if (self.inAppBrowserRef_ && typeof self.inAppBrowserRef_["close"] === "function") {
                    self.inAppBrowserRef_["close"]();
                    self.inAppBrowserRef_ = null
                  }
                  return false
                };
                self.addAuthEventListener(authEventCallback);
                onResume = function () {
                  if (onClose) return;
                  onClose = goog.Timer.promise(self.redirectTimeout_).then(function () {
                    reject(new fireauth.AuthError(fireauth.authenum.Error.REDIRECT_CANCELLED_BY_USER))
                  })
                };
                onVisibilityChange = function () {
                  if (fireauth.util.isAppVisible()) onResume()
                };
                doc.addEventListener("resume", onResume, false);
                if (!fireauth.util.isAndroid()) doc.addEventListener("visibilitychange", onVisibilityChange, false)
              })).thenCatch(function (error) {
                return self.getPartialStoredEvent_().then(function () {
                  throw error;
                })
              })
            }).thenAlways(cleanup);
            return this.pendingRedirect_
          };
          fireauth.CordovaHandler.prototype.processRedirectInternal_ = function (mode, provider, opt_eventId) {
            var self = this;
            var sessionId = this.generateSessionId_(fireauth.CordovaHandler.SESSION_ID_TOTAL_CHARS_);
            var event = new fireauth.AuthEvent(mode, opt_eventId, null, sessionId, new fireauth.AuthError(fireauth.authenum.Error.NO_AUTH_EVENT));
            var appIdentifier = fireauth.util.getObjectRef("BuildInfo.packageName", goog.global);
            if (typeof appIdentifier !== "string") throw new fireauth.AuthError(fireauth.authenum.Error.INVALID_CORDOVA_CONFIGURATION);
            var appDisplayName = fireauth.util.getObjectRef("BuildInfo.displayName", goog.global);
            var additionalParams = {};
            if (fireauth.util.isIOS()) additionalParams["ibi"] = appIdentifier; else if (fireauth.util.isAndroid()) additionalParams["apn"] = appIdentifier; else return goog.Promise.reject(new fireauth.AuthError(fireauth.authenum.Error.OPERATION_NOT_SUPPORTED));
            if (appDisplayName) additionalParams["appDisplayName"] = appDisplayName;
            var hashedSessionId = this.computeSecureHash_(sessionId);
            additionalParams["sessionId"] = hashedSessionId;
            var oauthHelperWidgetUrl = fireauth.iframeclient.IfcHandler.getOAuthHelperWidgetUrl(this.authDomain_, this.apiKey_, this.appName_, mode, provider, null, opt_eventId, this.clientVersion_, additionalParams, this.endpointId_);
            return this.initializeAndWait().then(function () {
              return self.savePartialEventManager_.setAuthEvent(self.storageKey_, event)
            }).then(function () {
              var isAvailable = fireauth.util.getObjectRef("cordova.plugins.browsertab.isAvailable", goog.global);
              if (typeof isAvailable !== "function") throw new fireauth.AuthError(fireauth.authenum.Error.INVALID_CORDOVA_CONFIGURATION);
              var openUrl = null;
              isAvailable(function (result) {
                if (result) {
                  openUrl = fireauth.util.getObjectRef("cordova.plugins.browsertab.openUrl", goog.global);
                  if (typeof openUrl !== "function") throw new fireauth.AuthError(fireauth.authenum.Error.INVALID_CORDOVA_CONFIGURATION);
                  openUrl(oauthHelperWidgetUrl)
                } else {
                  openUrl = fireauth.util.getObjectRef("cordova.InAppBrowser.open", goog.global);
                  if (typeof openUrl !== "function") throw new fireauth.AuthError(fireauth.authenum.Error.INVALID_CORDOVA_CONFIGURATION);
                  self.inAppBrowserRef_ =
                    openUrl(oauthHelperWidgetUrl, fireauth.util.isIOS7Or8() ? "_blank" : "_system", "location=yes")
                }
              })
            })
          };
          fireauth.CordovaHandler.prototype.dispatchEvent_ = function (event) {
            for (var i = 0; i < this.authEventListeners_.length; i++) try {
              this.authEventListeners_[i](event)
            } catch (e) {
            }
          };
          fireauth.CordovaHandler.prototype.getInitialAuthEvent_ = function () {
            var self = this;
            if (!this.initialAuthEvent_) this.initialAuthEvent_ = this.initializeAndWait().then(function () {
              return new goog.Promise(function (resolve, reject) {
                var authEventCallback = function (event) {
                  resolve(event);
                  self.removeAuthEventListener(authEventCallback);
                  return false
                };
                self.addAuthEventListener(authEventCallback);
                self.setAuthEventListener_()
              })
            });
            return this.initialAuthEvent_
          };
          fireauth.CordovaHandler.prototype.getPartialStoredEvent_ = function () {
            var event = null;
            var self = this;
            return this.getAndDeletePartialEventManager_.getAuthEvent().then(function (authEvent) {
              event = authEvent;
              return self.getAndDeletePartialEventManager_.removeAuthEvent()
            }).then(function () {
              return event
            })
          };
          fireauth.CordovaHandler.prototype.extractAuthEventFromUrl_ = function (partialEvent, url) {
            var authEvent = null;
            var callbackUrl = fireauth.DynamicLink.parseDeepLink(url);
            if (callbackUrl.indexOf("/__/auth/callback") != -1) {
              var uri = goog.Uri.parse(callbackUrl);
              var errorObject = fireauth.util.parseJSON(uri.getParameterValue("firebaseError") || null);
              var error = typeof errorObject === "object" ? fireauth.AuthError.fromPlainObject(errorObject) : null;
              if (error) authEvent = new fireauth.AuthEvent(partialEvent.getType(), partialEvent.getEventId(),
                null, null, error); else authEvent = new fireauth.AuthEvent(partialEvent.getType(), partialEvent.getEventId(), callbackUrl, partialEvent.getSessionId())
            }
            return authEvent
          };
          fireauth.CordovaHandler.prototype.setAuthEventListener_ = function () {
            var self = this;
            var subscribe = fireauth.util.getObjectRef("universalLinks.subscribe", goog.global);
            if (typeof subscribe !== "function") throw new fireauth.AuthError(fireauth.authenum.Error.INVALID_CORDOVA_CONFIGURATION);
            var noEvent = new fireauth.AuthEvent(fireauth.AuthEvent.Type.UNKNOWN, null, null, null, new fireauth.AuthError(fireauth.authenum.Error.NO_AUTH_EVENT));
            var initialResolve = false;
            var noEventTimer = goog.Timer.promise(this.initialTimeout_).then(function () {
              return self.getPartialStoredEvent_().then(function (event) {
                if (!initialResolve) self.dispatchEvent_(noEvent)
              })
            });
            var universalLinkCb = function (eventData) {
              initialResolve = true;
              if (noEventTimer) noEventTimer.cancel();
              self.getPartialStoredEvent_().then(function (event) {
                var authEvent = noEvent;
                if (event && eventData && eventData["url"]) authEvent = self.extractAuthEventFromUrl_(event, eventData["url"]) || noEvent;
                self.dispatchEvent_(authEvent)
              })
            };
            var existingHandlerOpenURL = goog.global["handleOpenURL"];
            goog.global["handleOpenURL"] = function (url) {
              var appIdentifier = fireauth.util.getObjectRef("BuildInfo.packageName", goog.global);
              if (url.toLowerCase().indexOf(appIdentifier.toLowerCase() +
                  "://") == 0) universalLinkCb({"url": url});
              if (typeof existingHandlerOpenURL === "function") try {
                existingHandlerOpenURL(url)
              } catch (e) {
                console.error(e)
              }
            };
            subscribe(null, universalLinkCb)
          };
          fireauth.CordovaHandler.prototype.addAuthEventListener = function (listener) {
            this.authEventListeners_.push(listener);
            this.getInitialAuthEvent_().thenCatch(function (error) {
              if (error.code === "auth/invalid-cordova-configuration") {
                var noEvent = new fireauth.AuthEvent(fireauth.AuthEvent.Type.UNKNOWN, null, null, null, new fireauth.AuthError(fireauth.authenum.Error.NO_AUTH_EVENT));
                listener(noEvent)
              }
            })
          };
          fireauth.CordovaHandler.prototype.removeAuthEventListener = function (listener) {
            goog.array.removeAllIf(this.authEventListeners_, function (ele) {
              return ele == listener
            })
          };
          goog.provide("fireauth.storage.PendingRedirectManager");
          goog.require("fireauth.authStorage");
          fireauth.storage.PendingRedirectManager = function (appId, opt_manager) {
            this.appId_ = appId;
            this.manager_ = opt_manager || fireauth.authStorage.Manager.getInstance()
          };
          fireauth.storage.PendingRedirectManager.PENDING_FLAG_ = "pending";
          fireauth.storage.PendingRedirectManager.PENDING_REDIRECT_KEY_ = {
            name: "pendingRedirect",
            persistent: fireauth.authStorage.Persistence.SESSION
          };
          fireauth.storage.PendingRedirectManager.prototype.setPendingStatus = function () {
            return this.manager_.set(fireauth.storage.PendingRedirectManager.PENDING_REDIRECT_KEY_, fireauth.storage.PendingRedirectManager.PENDING_FLAG_, this.appId_)
          };
          fireauth.storage.PendingRedirectManager.prototype.removePendingStatus = function () {
            return this.manager_.remove(fireauth.storage.PendingRedirectManager.PENDING_REDIRECT_KEY_, this.appId_)
          };
          fireauth.storage.PendingRedirectManager.prototype.getPendingStatus = function () {
            return this.manager_.get(fireauth.storage.PendingRedirectManager.PENDING_REDIRECT_KEY_, this.appId_).then(function (response) {
              return response == fireauth.storage.PendingRedirectManager.PENDING_FLAG_
            })
          };
          goog.provide("fireauth.AuthEventHandler");
          goog.provide("fireauth.AuthEventManager");
          goog.provide("fireauth.AuthEventManager.Result");
          goog.provide("fireauth.PopupAuthEventProcessor");
          goog.provide("fireauth.RedirectAuthEventProcessor");
          goog.require("fireauth.AuthCredential");
          goog.require("fireauth.AuthError");
          goog.require("fireauth.AuthEvent");
          goog.require("fireauth.CordovaHandler");
          goog.require("fireauth.authenum.Error");
          goog.require("fireauth.constants");
          goog.require("fireauth.iframeclient.IfcHandler");
          goog.require("fireauth.storage.PendingRedirectManager");
          goog.require("fireauth.util");
          goog.require("goog.Promise");
          goog.require("goog.Timer");
          goog.require("goog.array");
          fireauth.AuthEventManager = function (authDomain, apiKey, appName) {
            this.authDomain_ = authDomain;
            this.apiKey_ = apiKey;
            this.appName_ = appName;
            this.subscribedHandlers_ = [];
            this.initialized_ = false;
            this.authEventHandler_ = goog.bind(this.handleAuthEvent_, this);
            this.redirectAuthEventProcessor_ = new fireauth.RedirectAuthEventProcessor(this);
            this.popupAuthEventProcessor_ = new fireauth.PopupAuthEventProcessor(this);
            this.pendingRedirectStorageManager_ = new fireauth.storage.PendingRedirectManager(fireauth.AuthEventManager.getKey_(this.apiKey_,
              this.appName_));
            this.typeToManager_ = {};
            this.typeToManager_[fireauth.AuthEvent.Type.UNKNOWN] = this.redirectAuthEventProcessor_;
            this.typeToManager_[fireauth.AuthEvent.Type.SIGN_IN_VIA_REDIRECT] = this.redirectAuthEventProcessor_;
            this.typeToManager_[fireauth.AuthEvent.Type.LINK_VIA_REDIRECT] = this.redirectAuthEventProcessor_;
            this.typeToManager_[fireauth.AuthEvent.Type.REAUTH_VIA_REDIRECT] = this.redirectAuthEventProcessor_;
            this.typeToManager_[fireauth.AuthEvent.Type.SIGN_IN_VIA_POPUP] = this.popupAuthEventProcessor_;
            this.typeToManager_[fireauth.AuthEvent.Type.LINK_VIA_POPUP] = this.popupAuthEventProcessor_;
            this.typeToManager_[fireauth.AuthEvent.Type.REAUTH_VIA_POPUP] = this.popupAuthEventProcessor_;
            this.oauthSignInHandler_ = fireauth.AuthEventManager.instantiateOAuthSignInHandler(this.authDomain_, this.apiKey_, this.appName_, firebase.SDK_VERSION || null, fireauth.constants.clientEndpoint)
          };
          fireauth.AuthEventManager.instantiateOAuthSignInHandler = function (authDomain, apiKey, appName, version, opt_endpointId) {
            return fireauth.util.isAndroidOrIosFileEnvironment() ? new fireauth.CordovaHandler(authDomain, apiKey, appName, version, undefined, undefined, opt_endpointId) : new fireauth.iframeclient.IfcHandler(authDomain, apiKey, appName, version, opt_endpointId)
          };
          fireauth.AuthEventManager.prototype.reset = function () {
            this.initialized_ = false;
            this.oauthSignInHandler_.removeAuthEventListener(this.authEventHandler_);
            this.oauthSignInHandler_ = fireauth.AuthEventManager.instantiateOAuthSignInHandler(this.authDomain_, this.apiKey_, this.appName_, firebase.SDK_VERSION || null)
          };
          fireauth.AuthEventManager.Result;
          fireauth.AuthEventManager.ENABLED = true;
          fireauth.AuthEventManager.prototype.initialize = function () {
            var self = this;
            if (!this.initialized_) {
              this.initialized_ = true;
              this.oauthSignInHandler_.addAuthEventListener(this.authEventHandler_)
            }
            var previousOauthSignInHandler = this.oauthSignInHandler_;
            return this.oauthSignInHandler_.initializeAndWait().thenCatch(function (error) {
              if (self.oauthSignInHandler_ == previousOauthSignInHandler) self.reset();
              throw error;
            })
          };
          fireauth.AuthEventManager.prototype.initializeWithNoPendingRedirectResult_ = function () {
            var self = this;
            if (this.oauthSignInHandler_.shouldBeInitializedEarly()) this.initialize().thenCatch(function (error) {
              var notSupportedEvent = new fireauth.AuthEvent(fireauth.AuthEvent.Type.UNKNOWN, null, null, null, new fireauth.AuthError(fireauth.authenum.Error.OPERATION_NOT_SUPPORTED));
              if (fireauth.AuthEventManager.isCordovaFalsePositive_(error)) self.handleAuthEvent_(notSupportedEvent)
            });
            if (!this.oauthSignInHandler_.hasVolatileStorage()) this.redirectAuthEventProcessor_.defaultToEmptyResponse()
          };
          fireauth.AuthEventManager.prototype.subscribe = function (handler) {
            if (!goog.array.contains(this.subscribedHandlers_, handler)) this.subscribedHandlers_.push(handler);
            if (this.initialized_) return;
            var self = this;
            this.pendingRedirectStorageManager_.getPendingStatus().then(function (status) {
              if (status) self.pendingRedirectStorageManager_.removePendingStatus().then(function () {
                self.initialize().thenCatch(function (error) {
                  var notSupportedEvent = new fireauth.AuthEvent(fireauth.AuthEvent.Type.UNKNOWN, null, null, null, new fireauth.AuthError(fireauth.authenum.Error.OPERATION_NOT_SUPPORTED));
                  if (fireauth.AuthEventManager.isCordovaFalsePositive_(error)) self.handleAuthEvent_(notSupportedEvent)
                })
              }); else self.initializeWithNoPendingRedirectResult_()
            }).thenCatch(function (error) {
              self.initializeWithNoPendingRedirectResult_()
            })
          };
          fireauth.AuthEventManager.prototype.isSubscribed = function (handler) {
            return goog.array.contains(this.subscribedHandlers_, handler)
          };
          fireauth.AuthEventManager.prototype.unsubscribe = function (handler) {
            goog.array.removeAllIf(this.subscribedHandlers_, function (ele) {
              return ele == handler
            })
          };
          fireauth.AuthEventManager.prototype.handleAuthEvent_ = function (authEvent) {
            if (!authEvent) throw new fireauth.AuthError(fireauth.authenum.Error.INVALID_AUTH_EVENT);
            var processed = false;
            for (var i = 0; i < this.subscribedHandlers_.length; i++) {
              var potentialHandler = this.subscribedHandlers_[i];
              if (potentialHandler.canHandleAuthEvent(authEvent.getType(), authEvent.getEventId())) {
                var eventManager = this.typeToManager_[authEvent.getType()];
                if (eventManager) eventManager.processAuthEvent(authEvent, potentialHandler);
                processed =
                  true;
                break
              }
            }
            this.redirectAuthEventProcessor_.defaultToEmptyResponse();
            return processed
          };
          fireauth.AuthEventManager.POPUP_TIMEOUT_MS_ = new fireauth.util.Delay(2E3, 1E4);
          fireauth.AuthEventManager.REDIRECT_TIMEOUT_MS_ = new fireauth.util.Delay(3E4, 6E4);
          fireauth.AuthEventManager.prototype.getRedirectResult = function () {
            return this.redirectAuthEventProcessor_.getRedirectResult()
          };
          fireauth.AuthEventManager.prototype.processPopup = function (popupWin, mode, provider, opt_eventId, opt_alreadyRedirected) {
            var self = this;
            return this.oauthSignInHandler_.processPopup(popupWin, mode, provider, function () {
              if (!self.initialized_) {
                self.initialized_ = true;
                self.oauthSignInHandler_.addAuthEventListener(self.authEventHandler_)
              }
            }, function (error) {
              self.reset()
            }, opt_eventId, opt_alreadyRedirected)
          };
          fireauth.AuthEventManager.isCordovaFalsePositive_ = function (error) {
            if (error && error["code"] == "auth/cordova-not-ready") return true;
            return false
          };
          fireauth.AuthEventManager.prototype.processRedirect = function (mode, provider, opt_eventId) {
            var self = this;
            var error;
            return this.pendingRedirectStorageManager_.setPendingStatus().then(function () {
              return self.oauthSignInHandler_.processRedirect(mode, provider, opt_eventId).thenCatch(function (e) {
                if (fireauth.AuthEventManager.isCordovaFalsePositive_(e)) throw new fireauth.AuthError(fireauth.authenum.Error.OPERATION_NOT_SUPPORTED);
                error = e;
                return self.pendingRedirectStorageManager_.removePendingStatus().then(function () {
                  throw error;
                })
              }).then(function () {
                if (!self.oauthSignInHandler_.unloadsOnRedirect()) return self.pendingRedirectStorageManager_.removePendingStatus().then(function () {
                  return self.getRedirectResult()
                }).then(function (result) {
                }).thenCatch(function (error) {
                }); else return new goog.Promise(function (resolve, reject) {
                })
              })
            })
          };
          fireauth.AuthEventManager.prototype.startPopupTimeout = function (owner, mode, popupWin, opt_eventId) {
            return this.oauthSignInHandler_.startPopupTimeout(popupWin, function (error) {
              owner.resolvePendingPopupEvent(mode, null, error, opt_eventId)
            }, fireauth.AuthEventManager.POPUP_TIMEOUT_MS_.get())
          };
          fireauth.AuthEventManager.manager_ = {};
          fireauth.AuthEventManager.KEY_SEPARATOR_ = ":";
          fireauth.AuthEventManager.getKey_ = function (apiKey, appName) {
            return apiKey + fireauth.AuthEventManager.KEY_SEPARATOR_ + appName
          };
          fireauth.AuthEventManager.getManager = function (authDomain, apiKey, appName) {
            var key = fireauth.AuthEventManager.getKey_(apiKey, appName);
            if (!fireauth.AuthEventManager.manager_[key]) fireauth.AuthEventManager.manager_[key] = new fireauth.AuthEventManager(authDomain, apiKey, appName);
            return fireauth.AuthEventManager.manager_[key]
          };
          fireauth.AuthEventProcessor = function () {
          };
          fireauth.AuthEventProcessor.prototype.processAuthEvent = function (authEvent, owner) {
          };
          fireauth.RedirectAuthEventProcessor = function (manager) {
            this.manager_ = manager;
            this.redirectedUserPromise_ = null;
            this.redirectResolve_ = [];
            this.redirectReject_ = [];
            this.redirectTimeoutPromise_ = null;
            this.redirectResultResolved_ = false
          };
          fireauth.RedirectAuthEventProcessor.prototype.reset = function () {
            this.redirectedUserPromise_ = null;
            if (this.redirectTimeoutPromise_) {
              this.redirectTimeoutPromise_.cancel();
              this.redirectTimeoutPromise_ = null
            }
          };
          fireauth.RedirectAuthEventProcessor.prototype.processAuthEvent = function (authEvent, owner) {
            if (!authEvent) return goog.Promise.reject(new fireauth.AuthError(fireauth.authenum.Error.INVALID_AUTH_EVENT));
            this.reset();
            this.redirectResultResolved_ = true;
            var mode = authEvent.getType();
            var eventId = authEvent.getEventId();
            var isWebStorageNotSupported = authEvent.getError() && authEvent.getError()["code"] == "auth/web-storage-unsupported";
            var isOperationNotSupported = authEvent.getError() && authEvent.getError()["code"] ==
              "auth/operation-not-supported-in-this-" + "environment";
            if (mode == fireauth.AuthEvent.Type.UNKNOWN && !isWebStorageNotSupported && !isOperationNotSupported) return this.processUnknownEvent_(); else if (authEvent.hasError()) return this.processErrorEvent_(authEvent, owner); else if (owner.getAuthEventHandlerFinisher(mode, eventId)) return this.processSuccessEvent_(authEvent, owner); else return goog.Promise.reject(new fireauth.AuthError(fireauth.authenum.Error.INVALID_AUTH_EVENT))
          };
          fireauth.RedirectAuthEventProcessor.prototype.defaultToEmptyResponse = function () {
            if (!this.redirectResultResolved_) {
              this.redirectResultResolved_ = true;
              this.setRedirectResult_(false, null, null)
            }
          };
          fireauth.RedirectAuthEventProcessor.prototype.processUnknownEvent_ = function () {
            this.setRedirectResult_(false, null, null);
            return goog.Promise.resolve()
          };
          fireauth.RedirectAuthEventProcessor.prototype.processErrorEvent_ = function (authEvent, owner) {
            this.setRedirectResult_(true, null, authEvent.getError());
            return goog.Promise.resolve()
          };
          fireauth.RedirectAuthEventProcessor.prototype.processSuccessEvent_ = function (authEvent, owner) {
            var self = this;
            var eventId = authEvent.getEventId();
            var mode = authEvent.getType();
            var handler = owner.getAuthEventHandlerFinisher(mode, eventId);
            var requestUri = authEvent.getUrlResponse();
            var sessionId = authEvent.getSessionId();
            var isRedirect = fireauth.AuthEvent.isRedirect(authEvent);
            return handler(requestUri, sessionId).then(function (popupRedirectResponse) {
              self.setRedirectResult_(isRedirect, popupRedirectResponse, null)
            }).thenCatch(function (error) {
              self.setRedirectResult_(isRedirect,
                null, error);
              return
            })
          };
          fireauth.RedirectAuthEventProcessor.prototype.setRedirectReject_ = function (error) {
            this.redirectedUserPromise_ = function () {
              return goog.Promise.reject(error)
            };
            if (this.redirectReject_.length) for (var i = 0; i < this.redirectReject_.length; i++) this.redirectReject_[i](error)
          };
          fireauth.RedirectAuthEventProcessor.prototype.setRedirectResolve_ = function (popupRedirectResult) {
            this.redirectedUserPromise_ = function () {
              return goog.Promise.resolve(popupRedirectResult)
            };
            if (this.redirectResolve_.length) for (var i = 0; i < this.redirectResolve_.length; i++) this.redirectResolve_[i](popupRedirectResult)
          };
          fireauth.RedirectAuthEventProcessor.prototype.setRedirectResult_ = function (isRedirect, popupRedirectResult, error) {
            if (isRedirect) if (error) this.setRedirectReject_(error); else this.setRedirectResolve_(popupRedirectResult); else this.setRedirectResolve_({"user": null});
            this.redirectResolve_ = [];
            this.redirectReject_ = []
          };
          fireauth.RedirectAuthEventProcessor.prototype.getRedirectResult = function () {
            var self = this;
            var p = new goog.Promise(function (resolve, reject) {
              if (!self.redirectedUserPromise_) {
                self.redirectResolve_.push(resolve);
                self.redirectReject_.push(reject);
                self.startRedirectTimeout_()
              } else self.redirectedUserPromise_().then(resolve, reject)
            });
            return p
          };
          fireauth.RedirectAuthEventProcessor.prototype.startRedirectTimeout_ = function () {
            var self = this;
            var error = new fireauth.AuthError(fireauth.authenum.Error.TIMEOUT);
            if (this.redirectTimeoutPromise_) this.redirectTimeoutPromise_.cancel();
            this.redirectTimeoutPromise_ = goog.Timer.promise(fireauth.AuthEventManager.REDIRECT_TIMEOUT_MS_.get()).then(function () {
              if (!self.redirectedUserPromise_) self.setRedirectResult_(true, null, error)
            })
          };
          fireauth.PopupAuthEventProcessor = function (manager) {
            this.manager_ = manager
          };
          fireauth.PopupAuthEventProcessor.prototype.processAuthEvent = function (authEvent, owner) {
            if (!authEvent) return goog.Promise.reject(new fireauth.AuthError(fireauth.authenum.Error.INVALID_AUTH_EVENT));
            var mode = authEvent.getType();
            var eventId = authEvent.getEventId();
            if (authEvent.hasError()) return this.processErrorEvent_(authEvent, owner); else if (owner.getAuthEventHandlerFinisher(mode, eventId)) return this.processSuccessEvent_(authEvent, owner); else return goog.Promise.reject(new fireauth.AuthError(fireauth.authenum.Error.INVALID_AUTH_EVENT))
          };
          fireauth.PopupAuthEventProcessor.prototype.processErrorEvent_ = function (authEvent, owner) {
            var eventId = authEvent.getEventId();
            var mode = authEvent.getType();
            owner.resolvePendingPopupEvent(mode, null, authEvent.getError(), eventId);
            return goog.Promise.resolve()
          };
          fireauth.PopupAuthEventProcessor.prototype.processSuccessEvent_ = function (authEvent, owner) {
            var eventId = authEvent.getEventId();
            var mode = authEvent.getType();
            var handler = owner.getAuthEventHandlerFinisher(mode, eventId);
            var requestUri = authEvent.getUrlResponse();
            var sessionId = authEvent.getSessionId();
            return handler(requestUri, sessionId).then(function (popupRedirectResponse) {
              owner.resolvePendingPopupEvent(mode, popupRedirectResponse, null, eventId)
            }).thenCatch(function (error) {
              owner.resolvePendingPopupEvent(mode,
                null, error, eventId);
              return
            })
          };
          fireauth.AuthEventHandler = function () {
          };
          fireauth.AuthEventHandler.prototype.canHandleAuthEvent = function (mode, opt_eventId) {
          };
          fireauth.AuthEventHandler.prototype.resolvePendingPopupEvent = function (mode, popupRedirectResult, error, opt_eventId) {
          };
          fireauth.AuthEventHandler.prototype.getAuthEventHandlerFinisher = function (mode, opt_eventId) {
          };
          goog.provide("fireauth.ConfirmationResult");
          goog.require("fireauth.PhoneAuthProvider");
          goog.require("fireauth.object");
          goog.require("goog.Promise");
          fireauth.ConfirmationResult = function (verificationId, credentialResolver) {
            this.credentialResolver_ = credentialResolver;
            fireauth.object.setReadonlyProperty(this, "verificationId", verificationId)
          };
          fireauth.ConfirmationResult.prototype.confirm = function (verificationCode) {
            var credential = fireauth.PhoneAuthProvider.credential(this["verificationId"], verificationCode);
            return this.credentialResolver_(credential)
          };
          fireauth.ConfirmationResult.initialize = function (auth, phoneNumber, appVerifier, credentialResolver) {
            var phoneAuthProvider = new fireauth.PhoneAuthProvider(auth);
            return phoneAuthProvider.verifyPhoneNumber(phoneNumber, appVerifier).then(function (verificationId) {
              return new fireauth.ConfirmationResult(verificationId, credentialResolver)
            })
          };
          goog.provide("fireauth.ProactiveRefresh");
          goog.require("fireauth.util");
          goog.require("goog.Promise");
          goog.require("goog.Timer");
          fireauth.ProactiveRefresh = function (operation, retryPolicy, getWaitDuration, lowerBound, upperBound, opt_runInBackground) {
            this.operation_ = operation;
            this.retryPolicy_ = retryPolicy;
            this.getWaitDuration_ = getWaitDuration;
            this.lowerBound_ = lowerBound;
            this.upperBound_ = upperBound;
            this.runInBackground_ = !!opt_runInBackground;
            this.pending_ = null;
            this.nextErrorWaitInterval_ = this.lowerBound_;
            if (this.upperBound_ < this.lowerBound_) throw new Error("Proactive refresh lower bound greater than upper bound!");
          };
          fireauth.ProactiveRefresh.prototype.start = function () {
            this.nextErrorWaitInterval_ = this.lowerBound_;
            this.process_(true)
          };
          fireauth.ProactiveRefresh.prototype.getNextRun_ = function (hasSucceeded) {
            if (hasSucceeded) {
              this.nextErrorWaitInterval_ = this.lowerBound_;
              return this.getWaitDuration_()
            } else {
              var currentErrorWaitInterval = this.nextErrorWaitInterval_;
              this.nextErrorWaitInterval_ *= 2;
              if (this.nextErrorWaitInterval_ > this.upperBound_) this.nextErrorWaitInterval_ = this.upperBound_;
              return currentErrorWaitInterval
            }
          };
          fireauth.ProactiveRefresh.prototype.process_ = function (hasSucceeded) {
            var self = this;
            this.stop();
            this.pending_ = goog.Timer.promise(this.getNextRun_(hasSucceeded)).then(function () {
              return self.waitUntilReady_()
            }).then(function () {
              return self.operation_()
            }).then(function () {
              self.process_(true)
            }).thenCatch(function (error) {
              if (self.retryPolicy_(error)) self.process_(false)
            })
          };
          fireauth.ProactiveRefresh.prototype.waitUntilReady_ = function () {
            if (this.runInBackground_) return goog.Promise.resolve(); else return fireauth.util.onAppVisible()
          };
          fireauth.ProactiveRefresh.prototype.stop = function () {
            if (this.pending_) {
              this.pending_.cancel();
              this.pending_ = null
            }
          };
          fireauth.ProactiveRefresh.prototype.isRunning = function () {
            return !!this.pending_
          };
          goog.provide("fireauth.StsTokenManager");
          goog.provide("fireauth.StsTokenManager.Response");
          goog.provide("fireauth.StsTokenManager.ResponseData");
          goog.require("fireauth.AuthError");
          goog.require("fireauth.RpcHandler");
          goog.require("fireauth.authenum.Error");
          goog.require("goog.Promise");
          goog.require("goog.asserts");
          fireauth.StsTokenManager = function (rpcHandler) {
            this.rpcHandler_ = rpcHandler;
            this.refreshToken_ = null;
            this.accessToken_ = null;
            this.expirationTime_ = 0
          };
          fireauth.StsTokenManager.prototype.toPlainObject = function () {
            return {
              "apiKey": this.rpcHandler_.getApiKey(),
              "refreshToken": this.refreshToken_,
              "accessToken": this.accessToken_,
              "expirationTime": this.expirationTime_
            }
          };
          fireauth.StsTokenManager.fromPlainObject = function (rpcHandler, obj) {
            var stsTokenManager = null;
            if (obj && obj["apiKey"]) {
              goog.asserts.assert(obj["apiKey"] == rpcHandler.getApiKey());
              stsTokenManager = new fireauth.StsTokenManager(rpcHandler);
              stsTokenManager.setRefreshToken(obj["refreshToken"]);
              stsTokenManager.setAccessToken(obj["accessToken"], obj["expirationTime"] || 0)
            }
            return stsTokenManager
          };
          fireauth.StsTokenManager.Response;
          fireauth.StsTokenManager.ResponseData;
          fireauth.StsTokenManager.prototype.setRefreshToken = function (refreshToken) {
            this.refreshToken_ = refreshToken
          };
          fireauth.StsTokenManager.prototype.setAccessToken = function (accessToken, expirationTime) {
            this.accessToken_ = accessToken;
            this.expirationTime_ = expirationTime
          };
          fireauth.StsTokenManager.prototype.getRefreshToken = function () {
            return this.refreshToken_
          };
          fireauth.StsTokenManager.prototype.getExpirationTime = function () {
            return this.expirationTime_
          };
          fireauth.StsTokenManager.TOKEN_REFRESH_BUFFER_ = 30 * 1E3;
          fireauth.StsTokenManager.prototype.isExpired_ = function () {
            return goog.now() > this.expirationTime_ - fireauth.StsTokenManager.TOKEN_REFRESH_BUFFER_
          };
          fireauth.StsTokenManager.prototype.parseServerResponse = function (response) {
            var idToken = response[fireauth.RpcHandler.AuthServerField.ID_TOKEN];
            var refreshToken = response[fireauth.RpcHandler.AuthServerField.REFRESH_TOKEN];
            var expirationTime = fireauth.StsTokenManager.calcOffsetTimestamp_(response[fireauth.RpcHandler.AuthServerField.EXPIRES_IN]);
            this.setAccessToken(idToken, expirationTime);
            this.setRefreshToken(refreshToken);
            return idToken
          };
          fireauth.StsTokenManager.calcOffsetTimestamp_ = function (offset) {
            return goog.now() + parseInt(offset, 10) * 1E3
          };
          fireauth.StsTokenManager.prototype.exchangeRefreshToken_ = function () {
            var data = {"grant_type": "refresh_token", "refresh_token": this.refreshToken_};
            return this.requestToken_(data)
          };
          fireauth.StsTokenManager.prototype.requestToken_ = function (data) {
            var self = this;
            return this.rpcHandler_.requestStsToken(data).then(function (resp) {
              var response = resp;
              self.accessToken_ = response[fireauth.RpcHandler.StsServerField.ACCESS_TOKEN];
              self.expirationTime_ = fireauth.StsTokenManager.calcOffsetTimestamp_(response[fireauth.RpcHandler.StsServerField.EXPIRES_IN]);
              self.refreshToken_ = response[fireauth.RpcHandler.StsServerField.REFRESH_TOKEN];
              return {
                "accessToken": self.accessToken_, "expirationTime": self.expirationTime_,
                "refreshToken": self.refreshToken_
              }
            }).thenCatch(function (error) {
              if (error["code"] == "auth/user-token-expired") self.refreshToken_ = null;
              throw error;
            })
          };
          fireauth.StsTokenManager.prototype.isRefreshTokenExpired = function () {
            return !!(this.accessToken_ && !this.refreshToken_)
          };
          fireauth.StsTokenManager.prototype.getToken = function (opt_forceRefresh) {
            var self = this;
            var forceRefresh = !!opt_forceRefresh;
            if (this.isRefreshTokenExpired()) return goog.Promise.reject(new fireauth.AuthError(fireauth.authenum.Error.TOKEN_EXPIRED));
            if (!forceRefresh && this.accessToken_ && !this.isExpired_()) return goog.Promise.resolve({
              "accessToken": self.accessToken_,
              "expirationTime": self.expirationTime_,
              "refreshToken": self.refreshToken_
            }); else if (this.refreshToken_) return this.exchangeRefreshToken_(); else return goog.Promise.resolve(null)
          };
          goog.provide("fireauth.AuthUser");
          goog.provide("fireauth.AuthUser.AccountInfo");
          goog.provide("fireauth.AuthUserInfo");
          goog.provide("fireauth.TokenRefreshTime");
          goog.provide("fireauth.UserEvent");
          goog.provide("fireauth.UserEventType");
          goog.provide("fireauth.UserMetadata");
          goog.require("fireauth.ActionCodeSettings");
          goog.require("fireauth.AdditionalUserInfo");
          goog.require("fireauth.AuthCredential");
          goog.require("fireauth.AuthError");
          goog.require("fireauth.AuthEvent");
          goog.require("fireauth.AuthEventHandler");
          goog.require("fireauth.AuthEventManager");
          goog.require("fireauth.AuthProvider");
          goog.require("fireauth.ConfirmationResult");
          goog.require("fireauth.PhoneAuthProvider");
          goog.require("fireauth.ProactiveRefresh");
          goog.require("fireauth.RpcHandler");
          goog.require("fireauth.StsTokenManager");
          goog.require("fireauth.authenum.Error");
          goog.require("fireauth.constants");
          goog.require("fireauth.constants.AuthEventType");
          goog.require("fireauth.deprecation");
          goog.require("fireauth.idp");
          goog.require("fireauth.iframeclient.IfcHandler");
          goog.require("fireauth.object");
          goog.require("fireauth.util");
          goog.require("goog.Promise");
          goog.require("goog.array");
          goog.require("goog.events");
          goog.require("goog.events.Event");
          goog.require("goog.events.EventTarget");
          goog.require("goog.object");
          fireauth.UserMetadata = function (opt_createdAt, opt_lastLoginAt) {
            this.createdAt_ = opt_createdAt || null;
            this.lastLoginAt_ = opt_lastLoginAt || null;
            fireauth.object.setReadonlyProperties(this, {
              "lastSignInTime": fireauth.util.utcTimestampToDateString(opt_lastLoginAt || null),
              "creationTime": fireauth.util.utcTimestampToDateString(opt_createdAt || null)
            })
          };
          fireauth.UserMetadata.prototype.clone = function () {
            return new fireauth.UserMetadata(this.createdAt_, this.lastLoginAt_)
          };
          fireauth.UserMetadata.prototype.toPlainObject = function () {
            return {"lastLoginAt": this.lastLoginAt_, "createdAt": this.createdAt_}
          };
          fireauth.AuthUserInfo = function (uid, providerId, opt_email, opt_displayName, opt_photoURL, opt_phoneNumber) {
            fireauth.object.setReadonlyProperties(this, {
              "uid": uid,
              "displayName": opt_displayName || null,
              "photoURL": opt_photoURL || null,
              "email": opt_email || null,
              "phoneNumber": opt_phoneNumber || null,
              "providerId": providerId
            })
          };
          fireauth.UserEvent = function (type, opt_properties) {
            goog.events.Event.call(this, type);
            for (var key in opt_properties) this[key] = opt_properties[key]
          };
          goog.inherits(fireauth.UserEvent, goog.events.Event);
          fireauth.UserEventType = {
            TOKEN_CHANGED: "tokenChanged",
            USER_DELETED: "userDeleted",
            USER_INVALIDATED: "userInvalidated"
          };
          fireauth.TokenRefreshTime = {
            OFFSET_DURATION: 5 * 60 * 1E3,
            RETRIAL_MIN_WAIT: 30 * 1E3,
            RETRIAL_MAX_WAIT: 16 * 60 * 1E3
          };
          fireauth.AuthUser = function (appOptions, stsTokenResponse, opt_accountInfo) {
            this.pendingPromises_ = [];
            this.apiKey_ = appOptions["apiKey"];
            this.appName_ = appOptions["appName"];
            this.authDomain_ = appOptions["authDomain"] || null;
            var clientFullVersion = firebase.SDK_VERSION ? fireauth.util.getClientVersion(fireauth.util.ClientImplementation.JSCORE, firebase.SDK_VERSION) : null;
            this.rpcHandler_ = new fireauth.RpcHandler(this.apiKey_, fireauth.constants.getEndpointConfig(fireauth.constants.clientEndpoint), clientFullVersion);
            this.stsTokenManager_ = new fireauth.StsTokenManager(this.rpcHandler_);
            this.setLastAccessToken_(stsTokenResponse[fireauth.RpcHandler.AuthServerField.ID_TOKEN]);
            this.stsTokenManager_.parseServerResponse(stsTokenResponse);
            fireauth.object.setReadonlyProperty(this, "refreshToken", this.stsTokenManager_.getRefreshToken());
            this.setAccountInfo(opt_accountInfo || {});
            fireauth.AuthUser.base(this, "constructor");
            this.popupRedirectEnabled_ = false;
            if (this.authDomain_ && fireauth.AuthEventManager.ENABLED && fireauth.util.isPopupRedirectSupported()) this.authEventManager_ =
              fireauth.AuthEventManager.getManager(this.authDomain_, this.apiKey_, this.appName_);
            this.stateChangeListeners_ = [];
            this.userInvalidatedError_ = null;
            this.proactiveRefresh_ = this.initializeProactiveRefreshUtility_();
            this.userTokenChangeListener_ = goog.bind(this.handleUserTokenChange_, this);
            var self = this;
            this.languageCode_ = null;
            this.onLanguageCodeChanged_ = function (event) {
              self.setLanguageCode(event.languageCode)
            };
            this.languageCodeChangeEventDispatcher_ = null;
            this.frameworks_ = [];
            this.onFrameworkChanged_ = function (event) {
              self.setFramework(event.frameworks)
            };
            this.frameworkChangeEventDispatcher_ = null
          };
          goog.inherits(fireauth.AuthUser, goog.events.EventTarget);
          fireauth.AuthUser.prototype.setLanguageCode = function (languageCode) {
            this.languageCode_ = languageCode;
            this.rpcHandler_.updateCustomLocaleHeader(languageCode)
          };
          fireauth.AuthUser.prototype.getLanguageCode = function () {
            return this.languageCode_
          };
          fireauth.AuthUser.prototype.setLanguageCodeChangeDispatcher = function (dispatcher) {
            if (this.languageCodeChangeEventDispatcher_) goog.events.unlisten(this.languageCodeChangeEventDispatcher_, fireauth.constants.AuthEventType.LANGUAGE_CODE_CHANGED, this.onLanguageCodeChanged_);
            this.languageCodeChangeEventDispatcher_ = dispatcher;
            if (dispatcher) goog.events.listen(dispatcher, fireauth.constants.AuthEventType.LANGUAGE_CODE_CHANGED, this.onLanguageCodeChanged_)
          };
          fireauth.AuthUser.prototype.setFramework = function (framework) {
            this.frameworks_ = framework;
            this.rpcHandler_.updateClientVersion(firebase.SDK_VERSION ? fireauth.util.getClientVersion(fireauth.util.ClientImplementation.JSCORE, firebase.SDK_VERSION, this.frameworks_) : null)
          };
          fireauth.AuthUser.prototype.getFramework = function () {
            return goog.array.clone(this.frameworks_)
          };
          fireauth.AuthUser.prototype.setFrameworkChangeDispatcher = function (dispatcher) {
            if (this.frameworkChangeEventDispatcher_) goog.events.unlisten(this.frameworkChangeEventDispatcher_, fireauth.constants.AuthEventType.FRAMEWORK_CHANGED, this.onFrameworkChanged_);
            this.frameworkChangeEventDispatcher_ = dispatcher;
            if (dispatcher) goog.events.listen(dispatcher, fireauth.constants.AuthEventType.FRAMEWORK_CHANGED, this.onFrameworkChanged_)
          };
          fireauth.AuthUser.prototype.handleUserTokenChange_ = function (event) {
            if (this.proactiveRefresh_.isRunning()) {
              this.proactiveRefresh_.stop();
              this.proactiveRefresh_.start()
            }
          };
          fireauth.AuthUser.prototype.getAuth_ = function () {
            try {
              return firebase["app"](this.appName_)["auth"]()
            } catch (e) {
              throw new fireauth.AuthError(fireauth.authenum.Error.INTERNAL_ERROR, "No firebase.auth.Auth instance is available for the Firebase App " + "'" + this.appName_ + "'!");
            }
          };
          fireauth.AuthUser.prototype.initializeProactiveRefreshUtility_ = function () {
            var self = this;
            return new fireauth.ProactiveRefresh(function () {
                return self.getIdToken(true)
              }, function (error) {
                if (error && error.code == "auth/network-request-failed") return true;
                return false
              }, function () {
                var waitInterval = self.stsTokenManager_.getExpirationTime() - goog.now() - fireauth.TokenRefreshTime.OFFSET_DURATION;
                return waitInterval > 0 ? waitInterval : 0
              }, fireauth.TokenRefreshTime.RETRIAL_MIN_WAIT, fireauth.TokenRefreshTime.RETRIAL_MAX_WAIT,
              false)
          };
          fireauth.AuthUser.prototype.startProactiveRefresh = function () {
            if (!this.destroyed_ && !this.proactiveRefresh_.isRunning()) {
              this.proactiveRefresh_.start();
              goog.events.unlisten(this, fireauth.UserEventType.TOKEN_CHANGED, this.userTokenChangeListener_);
              goog.events.listen(this, fireauth.UserEventType.TOKEN_CHANGED, this.userTokenChangeListener_)
            }
          };
          fireauth.AuthUser.prototype.stopProactiveRefresh = function () {
            goog.events.unlisten(this, fireauth.UserEventType.TOKEN_CHANGED, this.userTokenChangeListener_);
            this.proactiveRefresh_.stop()
          };
          fireauth.AuthUser.prototype.setLastAccessToken_ = function (lastAccessToken) {
            this.lastAccessToken_ = lastAccessToken;
            fireauth.object.setReadonlyProperty(this, "_lat", lastAccessToken)
          };
          fireauth.AuthUser.prototype.addStateChangeListener = function (listener) {
            this.stateChangeListeners_.push(listener)
          };
          fireauth.AuthUser.prototype.removeStateChangeListener = function (listener) {
            goog.array.removeAllIf(this.stateChangeListeners_, function (ele) {
              return ele == listener
            })
          };
          fireauth.AuthUser.prototype.notifyStateChangeListeners_ = function () {
            var promises = [];
            var self = this;
            for (var i = 0; i < this.stateChangeListeners_.length; i++) promises.push(this.stateChangeListeners_[i](this));
            return goog.Promise.allSettled(promises).then(function (results) {
              return self
            })
          };
          fireauth.AuthUser.prototype.setPopupEventId = function (eventId) {
            this.popupEventId_ = eventId
          };
          fireauth.AuthUser.prototype.getPopupEventId = function () {
            return this.popupEventId_ || null
          };
          fireauth.AuthUser.prototype.setRedirectEventId = function (eventId) {
            this.redirectEventId_ = eventId
          };
          fireauth.AuthUser.prototype.getRedirectEventId = function () {
            return this.redirectEventId_ || null
          };
          fireauth.AuthUser.prototype.enablePopupRedirect = function () {
            if (this.authEventManager_ && !this.popupRedirectEnabled_) {
              this.popupRedirectEnabled_ = true;
              this.authEventManager_.subscribe(this)
            }
          };
          fireauth.AuthUser.GET_ACCOUNT_INFO_USERS = "users";
          fireauth.AuthUser.GetAccountInfoField = {
            CREATED_AT: "createdAt",
            DISPLAY_NAME: "displayName",
            EMAIL: "email",
            LAST_LOGIN_AT: "lastLoginAt",
            LOCAL_ID: "localId",
            PASSWORD_HASH: "passwordHash",
            PASSWORD_UPDATED_AT: "passwordUpdatedAt",
            PHONE_NUMBER: "phoneNumber",
            PHOTO_URL: "photoUrl",
            PROVIDER_USER_INFO: "providerUserInfo",
            EMAIL_VERIFIED: "emailVerified"
          };
          fireauth.AuthUser.SetAccountInfoField = {
            DISPLAY_NAME: "displayName",
            EMAIL: "email",
            PHOTO_URL: "photoUrl",
            PROVIDER_ID: "providerId",
            PROVIDER_USER_INFO: "providerUserInfo"
          };
          fireauth.AuthUser.GetAccountInfoProviderField = {
            DISPLAY_NAME: "displayName",
            EMAIL: "email",
            PHOTO_URL: "photoUrl",
            PHONE_NUMBER: "phoneNumber",
            PROVIDER_ID: "providerId",
            RAW_ID: "rawId"
          };
          fireauth.AuthUser.VerifyAssertionField = {ID_TOKEN: "idToken", PROVIDER_ID: "providerId"};
          fireauth.AuthUser.prototype.getStsTokenManager = function () {
            return this.stsTokenManager_
          };
          fireauth.AuthUser.prototype.setAccountInfo = function (accountInfo) {
            fireauth.object.setReadonlyProperties(this, {
              "uid": accountInfo["uid"],
              "displayName": accountInfo["displayName"] || null,
              "photoURL": accountInfo["photoURL"] || null,
              "email": accountInfo["email"] || null,
              "emailVerified": accountInfo["emailVerified"] || false,
              "phoneNumber": accountInfo["phoneNumber"] || null,
              "isAnonymous": accountInfo["isAnonymous"] || false,
              "metadata": new fireauth.UserMetadata(accountInfo["createdAt"], accountInfo["lastLoginAt"]),
              "providerData": []
            })
          };
          fireauth.AuthUser.AccountInfo;
          fireauth.object.setReadonlyProperty(fireauth.AuthUser.prototype, "providerId", fireauth.idp.ProviderId.FIREBASE);
          fireauth.AuthUser.returnNothing_ = function () {
          };
          fireauth.AuthUser.prototype.checkDestroyed_ = function () {
            var self = this;
            return goog.Promise.resolve().then(function () {
              if (self.destroyed_) throw new fireauth.AuthError(fireauth.authenum.Error.MODULE_DESTROYED);
            })
          };
          fireauth.AuthUser.prototype.getProviderIds = function () {
            return goog.array.map(this["providerData"], function (userInfo) {
              return userInfo["providerId"]
            })
          };
          fireauth.AuthUser.prototype.addProviderData = function (providerData) {
            if (!providerData) return;
            this.removeProviderData(providerData["providerId"]);
            this["providerData"].push(providerData)
          };
          fireauth.AuthUser.prototype.removeProviderData = function (providerId) {
            goog.array.removeAllIf(this["providerData"], function (userInfo) {
              return userInfo["providerId"] == providerId
            })
          };
          fireauth.AuthUser.prototype.updateProperty = function (propName, value) {
            if (propName == "uid" && !value) return;
            if (this.hasOwnProperty(propName)) fireauth.object.setReadonlyProperty(this, propName, value)
          };
          fireauth.AuthUser.prototype.hasSameUserIdAs = function (otherUser) {
            var thisId = this["uid"];
            var thatId = otherUser["uid"];
            if (thisId === undefined || thisId === null || thisId === "" || thatId === undefined || thatId === null || thatId === "") return false;
            return thisId == thatId
          };
          fireauth.AuthUser.prototype.copy = function (userToCopy) {
            var self = this;
            if (self == userToCopy) return;
            fireauth.object.setReadonlyProperties(this, {
              "uid": userToCopy["uid"],
              "displayName": userToCopy["displayName"],
              "photoURL": userToCopy["photoURL"],
              "email": userToCopy["email"],
              "emailVerified": userToCopy["emailVerified"],
              "phoneNumber": userToCopy["phoneNumber"],
              "isAnonymous": userToCopy["isAnonymous"],
              "providerData": []
            });
            if (userToCopy["metadata"]) fireauth.object.setReadonlyProperty(this, "metadata", userToCopy["metadata"].clone());
            else fireauth.object.setReadonlyProperty(this, "metadata", new fireauth.UserMetadata);
            goog.array.forEach(userToCopy["providerData"], function (userInfo) {
              self.addProviderData(userInfo)
            });
            this.stsTokenManager_ = userToCopy.getStsTokenManager();
            fireauth.object.setReadonlyProperty(this, "refreshToken", this.stsTokenManager_.getRefreshToken())
          };
          fireauth.AuthUser.prototype.setRedirectStorageManager = function (redirectStorageManager) {
            this.redirectStorageManager_ = redirectStorageManager
          };
          fireauth.AuthUser.prototype.reload = function () {
            var self = this;
            return this.registerPendingPromise_(this.checkDestroyed_().then(function () {
              return self.reloadWithoutSaving_().then(function () {
                return self.notifyStateChangeListeners_()
              }).then(fireauth.AuthUser.returnNothing_)
            }))
          };
          fireauth.AuthUser.prototype.reloadWithoutSaving_ = function () {
            var self = this;
            return this.getIdToken().then(function (idToken) {
              var isAnonymous = self["isAnonymous"];
              return self.setUserAccountInfoFromToken_(idToken).then(function (user) {
                if (!isAnonymous) self.updateProperty("isAnonymous", false);
                return idToken
              })
            })
          };
          fireauth.AuthUser.prototype.getIdToken = function (opt_forceRefresh) {
            var self = this;
            return this.registerPendingPromise_(this.checkDestroyed_().then(function () {
              return self.stsTokenManager_.getToken(opt_forceRefresh)
            }).then(function (response) {
              if (!response) throw new fireauth.AuthError(fireauth.authenum.Error.INTERNAL_ERROR);
              if (response["accessToken"] != self.lastAccessToken_) {
                self.setLastAccessToken_(response["accessToken"]);
                self.notifyAuthListeners_()
              }
              self.updateProperty("refreshToken", response["refreshToken"]);
              return response["accessToken"]
            }))
          };
          fireauth.AuthUser.prototype.getToken = function (opt_forceRefresh) {
            fireauth.deprecation.log(fireauth.deprecation.Deprecations.USER_GET_TOKEN);
            return this.getIdToken(opt_forceRefresh)
          };
          fireauth.AuthUser.isUserInvalidated_ = function (error) {
            return !!(error && (error.code == "auth/user-disabled" || error.code == "auth/user-token-expired"))
          };
          fireauth.AuthUser.prototype.updateTokensIfPresent_ = function (response) {
            if (response[fireauth.RpcHandler.AuthServerField.ID_TOKEN] && this.lastAccessToken_ != response[fireauth.RpcHandler.AuthServerField.ID_TOKEN]) {
              this.stsTokenManager_.parseServerResponse(response);
              this.notifyAuthListeners_();
              this.setLastAccessToken_(response[fireauth.RpcHandler.AuthServerField.ID_TOKEN]);
              this.updateProperty("refreshToken", this.stsTokenManager_.getRefreshToken())
            }
          };
          fireauth.AuthUser.prototype.notifyAuthListeners_ = function () {
            this.dispatchEvent(new fireauth.UserEvent(fireauth.UserEventType.TOKEN_CHANGED))
          };
          fireauth.AuthUser.prototype.notifyUserDeletedListeners_ = function () {
            this.dispatchEvent(new fireauth.UserEvent(fireauth.UserEventType.USER_DELETED))
          };
          fireauth.AuthUser.prototype.notifyUserInvalidatedListeners_ = function () {
            this.dispatchEvent(new fireauth.UserEvent(fireauth.UserEventType.USER_INVALIDATED))
          };
          fireauth.AuthUser.prototype.setUserAccountInfoFromToken_ = function (idToken) {
            return this.rpcHandler_.getAccountInfoByIdToken(idToken).then(goog.bind(this.parseAccountInfo_, this))
          };
          fireauth.AuthUser.prototype.parseAccountInfo_ = function (resp) {
            var users = resp[fireauth.AuthUser.GET_ACCOUNT_INFO_USERS];
            if (!users || !users.length) throw new fireauth.AuthError(fireauth.authenum.Error.INTERNAL_ERROR);
            var user = users[0];
            var accountInfo = {
              "uid": user[fireauth.AuthUser.GetAccountInfoField.LOCAL_ID],
              "displayName": user[fireauth.AuthUser.GetAccountInfoField.DISPLAY_NAME],
              "photoURL": user[fireauth.AuthUser.GetAccountInfoField.PHOTO_URL],
              "email": user[fireauth.AuthUser.GetAccountInfoField.EMAIL],
              "emailVerified": !!user[fireauth.AuthUser.GetAccountInfoField.EMAIL_VERIFIED],
              "phoneNumber": user[fireauth.AuthUser.GetAccountInfoField.PHONE_NUMBER],
              "lastLoginAt": user[fireauth.AuthUser.GetAccountInfoField.LAST_LOGIN_AT],
              "createdAt": user[fireauth.AuthUser.GetAccountInfoField.CREATED_AT]
            };
            this.setAccountInfo(accountInfo);
            var linkedAccounts = this.extractLinkedAccounts_(user);
            for (var i = 0; i < linkedAccounts.length; i++) this.addProviderData(linkedAccounts[i]);
            var isAnonymous = !(this["email"] && user[fireauth.AuthUser.GetAccountInfoField.PASSWORD_HASH]) && !(this["providerData"] && this["providerData"].length);
            this.updateProperty("isAnonymous", isAnonymous)
          };
          fireauth.AuthUser.prototype.extractLinkedAccounts_ = function (resp) {
            var providerInfo = resp[fireauth.AuthUser.GetAccountInfoField.PROVIDER_USER_INFO];
            if (!providerInfo || !providerInfo.length) return [];
            return goog.array.map(providerInfo, function (info) {
              return new fireauth.AuthUserInfo(info[fireauth.AuthUser.GetAccountInfoProviderField.RAW_ID], info[fireauth.AuthUser.GetAccountInfoProviderField.PROVIDER_ID], info[fireauth.AuthUser.GetAccountInfoProviderField.EMAIL], info[fireauth.AuthUser.GetAccountInfoProviderField.DISPLAY_NAME],
                info[fireauth.AuthUser.GetAccountInfoProviderField.PHOTO_URL], info[fireauth.AuthUser.GetAccountInfoProviderField.PHONE_NUMBER])
            })
          };
          fireauth.AuthUser.prototype.reauthenticateAndRetrieveDataWithCredential = function (credential) {
            var self = this;
            var userCredential = null;
            return this.registerPendingPromise_(credential.matchIdTokenWithUid(this.rpcHandler_, this["uid"]).then(function (response) {
              self.updateTokensIfPresent_(response);
              userCredential = self.getUserCredential_(response, fireauth.constants.OperationType.REAUTHENTICATE);
              self.userInvalidatedError_ = null;
              return self.reload()
            }).then(function () {
              return userCredential
            }), true)
          };
          fireauth.AuthUser.prototype.reauthenticateWithCredential = function (credential) {
            return this.reauthenticateAndRetrieveDataWithCredential(credential).then(function (result) {
            })
          };
          fireauth.AuthUser.prototype.checkIfAlreadyLinked_ = function (providerId) {
            var self = this;
            return this.reloadWithoutSaving_().then(function () {
              if (goog.array.contains(self.getProviderIds(), providerId)) return self.notifyStateChangeListeners_().then(function () {
                throw new fireauth.AuthError(fireauth.authenum.Error.PROVIDER_ALREADY_LINKED);
              })
            })
          };
          fireauth.AuthUser.prototype.linkAndRetrieveDataWithCredential = function (credential) {
            var self = this;
            var userCredential = null;
            return this.registerPendingPromise_(this.checkIfAlreadyLinked_(credential["providerId"]).then(function () {
              return self.getIdToken()
            }).then(function (idToken) {
              return credential.linkToIdToken(self.rpcHandler_, idToken)
            }).then(function (response) {
              userCredential = self.getUserCredential_(response, fireauth.constants.OperationType.LINK);
              return self.finalizeLinking_(response)
            }).then(function (user) {
              return userCredential
            }))
          };
          fireauth.AuthUser.prototype.linkWithCredential = function (credential) {
            return this.linkAndRetrieveDataWithCredential(credential).then(function (result) {
              return result["user"]
            })
          };
          fireauth.AuthUser.prototype.linkWithPhoneNumber = function (phoneNumber, appVerifier) {
            var self = this;
            return this.registerPendingPromise_(this.checkIfAlreadyLinked_(fireauth.idp.ProviderId.PHONE).then(function () {
              return fireauth.ConfirmationResult.initialize(self.getAuth_(), phoneNumber, appVerifier, goog.bind(self.linkAndRetrieveDataWithCredential, self))
            }))
          };
          fireauth.AuthUser.prototype.reauthenticateWithPhoneNumber = function (phoneNumber, appVerifier) {
            var self = this;
            return this.registerPendingPromise_(goog.Promise.resolve().then(function () {
              return fireauth.ConfirmationResult.initialize(self.getAuth_(), phoneNumber, appVerifier, goog.bind(self.reauthenticateAndRetrieveDataWithCredential, self))
            }), true)
          };
          fireauth.AuthUser.prototype.getUserCredential_ = function (idTokenResponse, operationType) {
            var credential = fireauth.AuthProvider.getCredentialFromResponse(idTokenResponse);
            var additionalUserInfo = fireauth.AdditionalUserInfo.fromPlainObject(idTokenResponse);
            return fireauth.object.makeReadonlyCopy({
              "user": this,
              "credential": credential,
              "additionalUserInfo": additionalUserInfo,
              "operationType": operationType
            })
          };
          fireauth.AuthUser.prototype.finalizeLinking_ = function (response) {
            this.updateTokensIfPresent_(response);
            var self = this;
            return this.reload().then(function () {
              return self
            })
          };
          fireauth.AuthUser.prototype.updateEmail = function (newEmail) {
            var self = this;
            return this.registerPendingPromise_(this.getIdToken().then(function (idToken) {
              return self.rpcHandler_.updateEmail(idToken, newEmail)
            }).then(function (response) {
              self.updateTokensIfPresent_(response);
              return self.reload()
            }))
          };
          fireauth.AuthUser.prototype.updatePhoneNumber = function (phoneCredential) {
            var self = this;
            return this.registerPendingPromise_(this.getIdToken().then(function (idToken) {
              return phoneCredential.linkToIdToken(self.rpcHandler_, idToken)
            }).then(function (response) {
              self.updateTokensIfPresent_(response);
              return self.reload()
            }))
          };
          fireauth.AuthUser.prototype.updatePassword = function (newPassword) {
            var self = this;
            return this.registerPendingPromise_(this.getIdToken().then(function (idToken) {
              return self.rpcHandler_.updatePassword(idToken, newPassword)
            }).then(function (response) {
              self.updateTokensIfPresent_(response);
              return self.reload()
            }))
          };
          fireauth.AuthUser.prototype.updateProfile = function (profile) {
            if (profile["displayName"] === undefined && profile["photoURL"] === undefined) return this.checkDestroyed_();
            var self = this;
            return this.registerPendingPromise_(this.getIdToken().then(function (idToken) {
              var profileRequest = {"displayName": profile["displayName"], "photoUrl": profile["photoURL"]};
              return self.rpcHandler_.updateProfile(idToken, profileRequest)
            }).then(function (response) {
              self.updateTokensIfPresent_(response);
              self.updateProperty("displayName",
                response[fireauth.AuthUser.SetAccountInfoField.DISPLAY_NAME] || null);
              self.updateProperty("photoURL", response[fireauth.AuthUser.SetAccountInfoField.PHOTO_URL] || null);
              goog.array.forEach(self["providerData"], function (userInfo) {
                if (userInfo["providerId"] === fireauth.idp.ProviderId.PASSWORD) {
                  fireauth.object.setReadonlyProperty(userInfo, "displayName", self["displayName"]);
                  fireauth.object.setReadonlyProperty(userInfo, "photoURL", self["photoURL"])
                }
              });
              return self.notifyStateChangeListeners_()
            }).then(fireauth.AuthUser.returnNothing_))
          };
          fireauth.AuthUser.prototype.unlink = function (providerId) {
            var self = this;
            return this.registerPendingPromise_(this.reloadWithoutSaving_().then(function (idToken) {
              if (!goog.array.contains(self.getProviderIds(), providerId)) return self.notifyStateChangeListeners_().then(function () {
                throw new fireauth.AuthError(fireauth.authenum.Error.NO_SUCH_PROVIDER);
              });
              return self.rpcHandler_.deleteLinkedAccounts(idToken, [providerId]).then(function (resp) {
                var remainingProviderIds = {};
                var userInfo = resp[fireauth.AuthUser.SetAccountInfoField.PROVIDER_USER_INFO] ||
                  [];
                goog.array.forEach(userInfo, function (obj) {
                  remainingProviderIds[obj[fireauth.AuthUser.SetAccountInfoField.PROVIDER_ID]] = true
                });
                goog.array.forEach(self.getProviderIds(), function (pId) {
                  if (!remainingProviderIds[pId]) self.removeProviderData(pId)
                });
                if (!remainingProviderIds[fireauth.PhoneAuthProvider["PROVIDER_ID"]]) fireauth.object.setReadonlyProperty(self, "phoneNumber", null);
                return self.notifyStateChangeListeners_()
              })
            }))
          };
          fireauth.AuthUser.prototype.delete = function () {
            var self = this;
            return this.registerPendingPromise_(this.getIdToken().then(function (idToken) {
              return self.rpcHandler_.deleteAccount(idToken)
            }).then(function () {
              self.notifyUserDeletedListeners_()
            })).then(function () {
              self.destroy()
            })
          };
          fireauth.AuthUser.prototype.canHandleAuthEvent = function (mode, opt_eventId) {
            if (mode == fireauth.AuthEvent.Type.LINK_VIA_POPUP && this.getPopupEventId() == opt_eventId && this.pendingPopupResolvePromise_) return true; else if (mode == fireauth.AuthEvent.Type.REAUTH_VIA_POPUP && this.getPopupEventId() == opt_eventId && this.pendingPopupResolvePromise_) return true; else if (mode == fireauth.AuthEvent.Type.LINK_VIA_REDIRECT && this.getRedirectEventId() == opt_eventId) return true; else if (mode == fireauth.AuthEvent.Type.REAUTH_VIA_REDIRECT &&
              this.getRedirectEventId() == opt_eventId) return true;
            return false
          };
          fireauth.AuthUser.prototype.resolvePendingPopupEvent = function (mode, popupRedirectResult, error, opt_eventId) {
            if (mode != fireauth.AuthEvent.Type.LINK_VIA_POPUP && mode != fireauth.AuthEvent.Type.REAUTH_VIA_POPUP || opt_eventId != this.getPopupEventId()) return;
            if (error && this.pendingPopupRejectPromise_) this.pendingPopupRejectPromise_(error); else if (popupRedirectResult && !error && this.pendingPopupResolvePromise_) this.pendingPopupResolvePromise_(popupRedirectResult);
            if (this.popupTimeoutPromise_) {
              this.popupTimeoutPromise_.cancel();
              this.popupTimeoutPromise_ = null
            }
            delete this.pendingPopupResolvePromise_;
            delete this.pendingPopupRejectPromise_
          };
          fireauth.AuthUser.prototype.getAuthEventHandlerFinisher = function (mode, opt_eventId) {
            if (mode == fireauth.AuthEvent.Type.LINK_VIA_POPUP && opt_eventId == this.getPopupEventId()) return goog.bind(this.finishPopupAndRedirectLink, this); else if (mode == fireauth.AuthEvent.Type.REAUTH_VIA_POPUP && opt_eventId == this.getPopupEventId()) return goog.bind(this.finishPopupAndRedirectReauth, this); else if (mode == fireauth.AuthEvent.Type.LINK_VIA_REDIRECT && this.getRedirectEventId() == opt_eventId) return goog.bind(this.finishPopupAndRedirectLink,
              this); else if (mode == fireauth.AuthEvent.Type.REAUTH_VIA_REDIRECT && this.getRedirectEventId() == opt_eventId) return goog.bind(this.finishPopupAndRedirectReauth, this);
            return null
          };
          fireauth.AuthUser.prototype.generateEventId_ = function () {
            return fireauth.util.generateEventId(this["uid"] + ":::")
          };
          fireauth.AuthUser.prototype.linkWithPopup = function (provider) {
            var self = this;
            var additionalCheck = function () {
              return self.checkIfAlreadyLinked_(provider["providerId"]).then(function () {
                return self.notifyStateChangeListeners_()
              })
            };
            return this.runOperationWithPopup_(fireauth.AuthEvent.Type.LINK_VIA_POPUP, provider, additionalCheck, false)
          };
          fireauth.AuthUser.prototype.reauthenticateWithPopup = function (provider) {
            var additionalCheck = function () {
              return goog.Promise.resolve()
            };
            return this.runOperationWithPopup_(fireauth.AuthEvent.Type.REAUTH_VIA_POPUP, provider, additionalCheck, true)
          };
          fireauth.AuthUser.prototype.runOperationWithPopup_ = function (mode, provider, additionalCheck, isReauthOperation) {
            if (!fireauth.util.isPopupRedirectSupported()) return goog.Promise.reject(new fireauth.AuthError(fireauth.authenum.Error.OPERATION_NOT_SUPPORTED));
            if (this.userInvalidatedError_ && !isReauthOperation) return goog.Promise.reject(this.userInvalidatedError_);
            var self = this;
            var settings = fireauth.idp.getIdpSettings(provider["providerId"]);
            var eventId = this.generateEventId_();
            var oauthHelperWidgetUrl = null;
            if ((!fireauth.util.runsInBackground() || fireauth.util.isIframe()) && this.authDomain_ && provider["isOAuthProvider"]) oauthHelperWidgetUrl = fireauth.iframeclient.IfcHandler.getOAuthHelperWidgetUrl(this.authDomain_, this.apiKey_, this.appName_, mode, provider, null, eventId, firebase.SDK_VERSION || null);
            var popupWin = fireauth.util.popup(oauthHelperWidgetUrl, fireauth.util.generateRandomString(), settings && settings.popupWidth, settings && settings.popupHeight);
            var p = additionalCheck().then(function () {
              self.getAuthEventManager();
              if (!isReauthOperation) return self.getIdToken().then(function (idToken) {
              })
            }).then(function () {
              return self.authEventManager_.processPopup(popupWin, mode, provider, eventId, !!oauthHelperWidgetUrl)
            }).then(function () {
              return new goog.Promise(function (resolve, reject) {
                self.resolvePendingPopupEvent(mode, null, new fireauth.AuthError(fireauth.authenum.Error.EXPIRED_POPUP_REQUEST), self.getPopupEventId());
                self.pendingPopupResolvePromise_ = resolve;
                self.pendingPopupRejectPromise_ = reject;
                self.setPopupEventId(eventId);
                self.popupTimeoutPromise_ =
                  self.authEventManager_.startPopupTimeout(self, mode, popupWin, eventId)
              })
            }).then(function (result) {
              if (popupWin) fireauth.util.closeWindow(popupWin);
              if (result) return fireauth.object.makeReadonlyCopy(result);
              return null
            }).thenCatch(function (error) {
              if (popupWin) fireauth.util.closeWindow(popupWin);
              throw error;
            });
            return this.registerPendingPromise_(p, isReauthOperation)
          };
          fireauth.AuthUser.prototype.linkWithRedirect = function (provider) {
            var mode = fireauth.AuthEvent.Type.LINK_VIA_REDIRECT;
            var self = this;
            var additionalCheck = function () {
              return self.checkIfAlreadyLinked_(provider["providerId"])
            };
            return this.runOperationWithRedirect_(mode, provider, additionalCheck, false)
          };
          fireauth.AuthUser.prototype.reauthenticateWithRedirect = function (provider) {
            var additionalCheck = function () {
              return goog.Promise.resolve()
            };
            return this.runOperationWithRedirect_(fireauth.AuthEvent.Type.REAUTH_VIA_REDIRECT, provider, additionalCheck, true)
          };
          fireauth.AuthUser.prototype.runOperationWithRedirect_ = function (mode, provider, additionalCheck, isReauthOperation) {
            if (!fireauth.util.isPopupRedirectSupported()) return goog.Promise.reject(new fireauth.AuthError(fireauth.authenum.Error.OPERATION_NOT_SUPPORTED));
            if (this.userInvalidatedError_ && !isReauthOperation) return goog.Promise.reject(this.userInvalidatedError_);
            var self = this;
            var errorThrown = null;
            var eventId = this.generateEventId_();
            var p = additionalCheck().then(function () {
              self.getAuthEventManager();
              if (!isReauthOperation) return self.getIdToken().then(function (idToken) {
              })
            }).then(function () {
              self.setRedirectEventId(eventId);
              return self.notifyStateChangeListeners_()
            }).then(function (user) {
              if (self.redirectStorageManager_) return self.redirectStorageManager_.setRedirectUser(self);
              return user
            }).then(function (user) {
              return self.authEventManager_.processRedirect(mode, provider, eventId)
            }).thenCatch(function (error) {
              errorThrown = error;
              if (self.redirectStorageManager_) return self.redirectStorageManager_.removeRedirectUser();
              throw errorThrown;
            }).then(function () {
              if (errorThrown) throw errorThrown;
            });
            return this.registerPendingPromise_(p,
              isReauthOperation)
          };
          fireauth.AuthUser.prototype.getAuthEventManager = function () {
            if (this.authEventManager_ && this.popupRedirectEnabled_) return this.authEventManager_; else if (this.authEventManager_ && !this.popupRedirectEnabled_) throw new fireauth.AuthError(fireauth.authenum.Error.INTERNAL_ERROR);
            throw new fireauth.AuthError(fireauth.authenum.Error.MISSING_AUTH_DOMAIN);
          };
          fireauth.AuthUser.prototype.finishPopupAndRedirectLink = function (requestUri, sessionId) {
            var self = this;
            if (this.popupTimeoutPromise_) {
              this.popupTimeoutPromise_.cancel();
              this.popupTimeoutPromise_ = null
            }
            var userCredential = null;
            var p = this.getIdToken().then(function (idToken) {
              var request = {"requestUri": requestUri, "sessionId": sessionId, "idToken": idToken};
              return self.rpcHandler_.verifyAssertionForLinking(request)
            }).then(function (response) {
              userCredential = self.getUserCredential_(response, fireauth.constants.OperationType.LINK);
              return self.finalizeLinking_(response)
            }).then(function (user) {
              return userCredential
            });
            return this.registerPendingPromise_(p)
          };
          fireauth.AuthUser.prototype.finishPopupAndRedirectReauth = function (requestUri, sessionId) {
            var self = this;
            if (this.popupTimeoutPromise_) {
              this.popupTimeoutPromise_.cancel();
              this.popupTimeoutPromise_ = null
            }
            var userCredential = null;
            var p = goog.Promise.resolve().then(function () {
              var request = {"requestUri": requestUri, "sessionId": sessionId};
              return fireauth.AuthCredential.verifyTokenResponseUid(self.rpcHandler_.verifyAssertionForExisting(request), self["uid"])
            }).then(function (response) {
              userCredential = self.getUserCredential_(response,
                fireauth.constants.OperationType.REAUTHENTICATE);
              self.updateTokensIfPresent_(response);
              self.userInvalidatedError_ = null;
              return self.reload()
            }).then(function () {
              return userCredential
            });
            return this.registerPendingPromise_(p, true)
          };
          fireauth.AuthUser.prototype.sendEmailVerification = function (opt_actionCodeSettings) {
            var self = this;
            var idToken = null;
            return this.registerPendingPromise_(this.getIdToken().then(function (latestIdToken) {
              idToken = latestIdToken;
              if (typeof opt_actionCodeSettings !== "undefined" && !goog.object.isEmpty(opt_actionCodeSettings)) return (new fireauth.ActionCodeSettings(opt_actionCodeSettings)).buildRequest();
              return {}
            }).then(function (additionalRequestData) {
              return self.rpcHandler_.sendEmailVerification(idToken, additionalRequestData)
            }).then(function (email) {
              if (self["email"] !=
                email) return self.reload()
            }).then(function () {
            }))
          };
          fireauth.AuthUser.prototype.destroy = function () {
            for (var i = 0; i < this.pendingPromises_.length; i++) this.pendingPromises_[i].cancel(fireauth.authenum.Error.MODULE_DESTROYED);
            this.setLanguageCodeChangeDispatcher(null);
            this.setFrameworkChangeDispatcher(null);
            this.pendingPromises_ = [];
            this.destroyed_ = true;
            this.stopProactiveRefresh();
            fireauth.object.setReadonlyProperty(this, "refreshToken", null);
            if (this.authEventManager_) this.authEventManager_.unsubscribe(this)
          };
          fireauth.AuthUser.prototype.registerPendingPromise_ = function (p, opt_skipInvalidationCheck) {
            var self = this;
            var processedP = this.checkIfInvalidated_(p, opt_skipInvalidationCheck);
            this.pendingPromises_.push(processedP);
            processedP.thenAlways(function () {
              goog.array.remove(self.pendingPromises_, processedP)
            });
            return processedP
          };
          fireauth.AuthUser.prototype.checkIfInvalidated_ = function (p, opt_skipInvalidationCheck) {
            var self = this;
            if (this.userInvalidatedError_ && !opt_skipInvalidationCheck) {
              p.cancel();
              return goog.Promise.reject(this.userInvalidatedError_)
            }
            return p.thenCatch(function (error) {
              if (fireauth.AuthUser.isUserInvalidated_(error)) {
                if (!self.userInvalidatedError_) self.notifyUserInvalidatedListeners_();
                self.userInvalidatedError_ = error
              }
              throw error;
            })
          };
          fireauth.AuthUser.prototype.toJSON = function () {
            return this.toPlainObject()
          };
          fireauth.AuthUser.prototype.toPlainObject = function () {
            var obj = {
              "uid": this["uid"],
              "displayName": this["displayName"],
              "photoURL": this["photoURL"],
              "email": this["email"],
              "emailVerified": this["emailVerified"],
              "phoneNumber": this["phoneNumber"],
              "isAnonymous": this["isAnonymous"],
              "providerData": [],
              "apiKey": this.apiKey_,
              "appName": this.appName_,
              "authDomain": this.authDomain_,
              "stsTokenManager": this.stsTokenManager_.toPlainObject(),
              "redirectEventId": this.getRedirectEventId()
            };
            if (this["metadata"]) goog.object.extend(obj,
              this["metadata"].toPlainObject());
            goog.array.forEach(this["providerData"], function (userInfo) {
              obj["providerData"].push(fireauth.object.makeWritableCopy(userInfo))
            });
            return obj
          };
          fireauth.AuthUser.fromPlainObject = function (user) {
            if (!user["apiKey"]) return null;
            var options = {"apiKey": user["apiKey"], "authDomain": user["authDomain"], "appName": user["appName"]};
            var stsTokenManagerResponse = {};
            if (user["stsTokenManager"] && user["stsTokenManager"]["accessToken"] && user["stsTokenManager"]["expirationTime"]) {
              stsTokenManagerResponse[fireauth.RpcHandler.AuthServerField.ID_TOKEN] = user["stsTokenManager"]["accessToken"];
              stsTokenManagerResponse[fireauth.RpcHandler.AuthServerField.REFRESH_TOKEN] =
                user["stsTokenManager"]["refreshToken"] || null;
              stsTokenManagerResponse[fireauth.RpcHandler.AuthServerField.EXPIRES_IN] = (user["stsTokenManager"]["expirationTime"] - goog.now()) / 1E3
            } else return null;
            var firebaseUser = new fireauth.AuthUser(options, stsTokenManagerResponse, user);
            if (user["providerData"]) goog.array.forEach(user["providerData"], function (userInfo) {
              if (userInfo) firebaseUser.addProviderData(fireauth.object.makeReadonlyCopy(userInfo))
            });
            if (user["redirectEventId"]) firebaseUser.setRedirectEventId(user["redirectEventId"]);
            return firebaseUser
          };
          fireauth.AuthUser.initializeFromIdTokenResponse = function (appOptions, stsTokenResponse, opt_redirectStorageManager, opt_frameworks) {
            var user = new fireauth.AuthUser(appOptions, stsTokenResponse);
            if (opt_redirectStorageManager) user.setRedirectStorageManager(opt_redirectStorageManager);
            if (opt_frameworks) user.setFramework(opt_frameworks);
            return user.reload().then(function () {
              return user
            })
          };
          goog.provide("fireauth.storage.RedirectUserManager");
          goog.require("fireauth.AuthUser");
          goog.require("fireauth.authStorage");
          fireauth.storage.RedirectUserManager = function (appId, opt_manager) {
            this.appId_ = appId;
            this.manager_ = opt_manager || fireauth.authStorage.Manager.getInstance()
          };
          fireauth.storage.RedirectUserManager.REDIRECT_USER_KEY_ = {
            name: "redirectUser",
            persistent: fireauth.authStorage.Persistence.SESSION
          };
          fireauth.storage.RedirectUserManager.prototype.setRedirectUser = function (redirectUser) {
            return this.manager_.set(fireauth.storage.RedirectUserManager.REDIRECT_USER_KEY_, redirectUser.toPlainObject(), this.appId_)
          };
          fireauth.storage.RedirectUserManager.prototype.removeRedirectUser = function () {
            return this.manager_.remove(fireauth.storage.RedirectUserManager.REDIRECT_USER_KEY_, this.appId_)
          };
          fireauth.storage.RedirectUserManager.prototype.getRedirectUser = function (opt_authDomain) {
            return this.manager_.get(fireauth.storage.RedirectUserManager.REDIRECT_USER_KEY_, this.appId_).then(function (response) {
              if (response && opt_authDomain) response["authDomain"] = opt_authDomain;
              return fireauth.AuthUser.fromPlainObject(response || {})
            })
          };
          goog.provide("fireauth.storage.UserManager");
          goog.require("fireauth.AuthUser");
          goog.require("fireauth.authStorage");
          fireauth.storage.UserManager = function (appId, opt_manager) {
            this.appId_ = appId;
            this.manager_ = opt_manager || fireauth.authStorage.Manager.getInstance();
            this.currentAuthUserKey_ = null;
            this.onReady_ = this.initialize_();
            this.manager_.addListener(fireauth.storage.UserManager.getAuthUserKey_(fireauth.authStorage.Persistence.LOCAL), this.appId_, goog.bind(this.switchToLocalOnExternalEvent_, this))
          };
          fireauth.storage.UserManager.prototype.switchToLocalOnExternalEvent_ = function () {
            var self = this;
            var localKey = fireauth.storage.UserManager.getAuthUserKey_(fireauth.authStorage.Persistence.LOCAL);
            this.waitForReady_(function () {
              return goog.Promise.resolve().then(function () {
                if (self.currentAuthUserKey_ && self.currentAuthUserKey_.persistent != fireauth.authStorage.Persistence.LOCAL) return self.manager_.get(localKey, self.appId_);
                return null
              }).then(function (response) {
                if (response) return self.removeAllExcept_(fireauth.authStorage.Persistence.LOCAL).then(function () {
                  self.currentAuthUserKey_ =
                    localKey
                })
              })
            })
          };
          fireauth.storage.UserManager.prototype.removeAllExcept_ = function (persistence) {
            var promises = [];
            for (var key in fireauth.authStorage.Persistence) if (fireauth.authStorage.Persistence[key] !== persistence) {
              var storageKey = fireauth.storage.UserManager.getAuthUserKey_(fireauth.authStorage.Persistence[key]);
              promises.push(this.manager_.remove(storageKey, this.appId_))
            }
            promises.push(this.manager_.remove(fireauth.storage.UserManager.PERSISTENCE_KEY_, this.appId_));
            return goog.Promise.all(promises)
          };
          fireauth.storage.UserManager.prototype.initialize_ = function () {
            var self = this;
            var localKey = fireauth.storage.UserManager.getAuthUserKey_(fireauth.authStorage.Persistence.LOCAL);
            var sessionKey = fireauth.storage.UserManager.getAuthUserKey_(fireauth.authStorage.Persistence.SESSION);
            var inMemoryKey = fireauth.storage.UserManager.getAuthUserKey_(fireauth.authStorage.Persistence.NONE);
            return this.manager_.get(sessionKey, this.appId_).then(function (response) {
              if (response) return sessionKey; else return self.manager_.get(inMemoryKey,
                self.appId_).then(function (response) {
                if (response) return inMemoryKey; else return self.manager_.get(localKey, self.appId_).then(function (response) {
                  if (response) return localKey; else return self.manager_.get(fireauth.storage.UserManager.PERSISTENCE_KEY_, self.appId_).then(function (persistence) {
                    if (persistence) return fireauth.storage.UserManager.getAuthUserKey_(persistence); else return localKey
                  })
                })
              })
            }).then(function (currentKey) {
              self.currentAuthUserKey_ = currentKey;
              return self.removeAllExcept_(currentKey.persistent)
            }).thenCatch(function (error) {
              if (!self.currentAuthUserKey_) self.currentAuthUserKey_ =
                localKey
            })
          };
          fireauth.storage.UserManager.AUTH_USER_KEY_NAME_ = "authUser";
          fireauth.storage.UserManager.PERSISTENCE_KEY_ = {
            name: "persistence",
            persistent: fireauth.authStorage.Persistence.SESSION
          };
          fireauth.storage.UserManager.getAuthUserKey_ = function (persistence) {
            return {name: fireauth.storage.UserManager.AUTH_USER_KEY_NAME_, persistent: persistence}
          };
          fireauth.storage.UserManager.prototype.setPersistence = function (persistence) {
            var currentUser = null;
            var self = this;
            fireauth.authStorage.validatePersistenceArgument(persistence);
            return this.waitForReady_(function () {
              if (persistence != self.currentAuthUserKey_.persistent) return self.manager_.get(self.currentAuthUserKey_, self.appId_).then(function (result) {
                currentUser = result;
                return self.removeAllExcept_(persistence)
              }).then(function () {
                self.currentAuthUserKey_ = fireauth.storage.UserManager.getAuthUserKey_(persistence);
                if (currentUser) return self.manager_.set(self.currentAuthUserKey_, currentUser, self.appId_)
              });
              return goog.Promise.resolve()
            })
          };
          fireauth.storage.UserManager.prototype.savePersistenceForRedirect = function () {
            var self = this;
            return this.waitForReady_(function () {
              return self.manager_.set(fireauth.storage.UserManager.PERSISTENCE_KEY_, self.currentAuthUserKey_.persistent, self.appId_)
            })
          };
          fireauth.storage.UserManager.prototype.setCurrentUser = function (currentUser) {
            var self = this;
            return this.waitForReady_(function () {
              return self.manager_.set(self.currentAuthUserKey_, currentUser.toPlainObject(), self.appId_)
            })
          };
          fireauth.storage.UserManager.prototype.removeCurrentUser = function () {
            var self = this;
            return this.waitForReady_(function () {
              return self.manager_.remove(self.currentAuthUserKey_, self.appId_)
            })
          };
          fireauth.storage.UserManager.prototype.getCurrentUser = function (opt_authDomain) {
            var self = this;
            return this.waitForReady_(function () {
              return self.manager_.get(self.currentAuthUserKey_, self.appId_).then(function (response) {
                if (response && opt_authDomain) response["authDomain"] = opt_authDomain;
                return fireauth.AuthUser.fromPlainObject(response || {})
              })
            })
          };
          fireauth.storage.UserManager.prototype.waitForReady_ = function (cb) {
            this.onReady_ = this.onReady_.then(cb, cb);
            return this.onReady_
          };
          fireauth.storage.UserManager.prototype.addCurrentUserChangeListener = function (listener) {
            this.manager_.addListener(fireauth.storage.UserManager.getAuthUserKey_(fireauth.authStorage.Persistence.LOCAL), this.appId_, listener)
          };
          fireauth.storage.UserManager.prototype.removeCurrentUserChangeListener = function (listener) {
            this.manager_.removeListener(fireauth.storage.UserManager.getAuthUserKey_(fireauth.authStorage.Persistence.LOCAL), this.appId_, listener)
          };
          goog.provide("fireauth.Auth");
          goog.require("fireauth.ActionCodeInfo");
          goog.require("fireauth.ActionCodeSettings");
          goog.require("fireauth.AdditionalUserInfo");
          goog.require("fireauth.AuthCredential");
          goog.require("fireauth.AuthError");
          goog.require("fireauth.AuthEvent");
          goog.require("fireauth.AuthEventHandler");
          goog.require("fireauth.AuthEventManager");
          goog.require("fireauth.AuthProvider");
          goog.require("fireauth.AuthUser");
          goog.require("fireauth.ConfirmationResult");
          goog.require("fireauth.RpcHandler");
          goog.require("fireauth.UserEventType");
          goog.require("fireauth.authenum.Error");
          goog.require("fireauth.constants");
          goog.require("fireauth.idp");
          goog.require("fireauth.iframeclient.IfcHandler");
          goog.require("fireauth.object");
          goog.require("fireauth.storage.RedirectUserManager");
          goog.require("fireauth.storage.UserManager");
          goog.require("fireauth.util");
          goog.require("goog.Promise");
          goog.require("goog.array");
          goog.require("goog.events");
          goog.require("goog.events.Event");
          goog.require("goog.events.EventTarget");
          goog.require("goog.object");
          fireauth.Auth = function (app) {
            this.deleted_ = false;
            fireauth.object.setReadonlyProperty(this, "app", app);
            if (this.app_().options && this.app_().options["apiKey"]) {
              var clientFullVersion = firebase.SDK_VERSION ? fireauth.util.getClientVersion(fireauth.util.ClientImplementation.JSCORE, firebase.SDK_VERSION) : null;
              this.rpcHandler_ = new fireauth.RpcHandler(this.app_().options && this.app_().options["apiKey"], fireauth.constants.getEndpointConfig(fireauth.constants.clientEndpoint), clientFullVersion)
            } else throw new fireauth.AuthError(fireauth.authenum.Error.INVALID_API_KEY);
            this.pendingPromises_ =
              [];
            this.authListeners_ = [];
            this.userChangeListeners_ = [];
            this.onIdTokenChanged_ = firebase.INTERNAL.createSubscribe(goog.bind(this.initIdTokenChangeObserver_, this));
            this.userStateChangeUid_ = undefined;
            this.onUserStateChanged_ = firebase.INTERNAL.createSubscribe(goog.bind(this.initUserStateObserver_, this));
            this.setCurrentUser_(null);
            this.userStorageManager_ = new fireauth.storage.UserManager(this.getStorageKey());
            this.redirectUserStorageManager_ = new fireauth.storage.RedirectUserManager(this.getStorageKey());
            this.authStateLoaded_ = this.registerPendingPromise_(this.initAuthState_());
            this.redirectStateIsReady_ = this.registerPendingPromise_(this.initAuthRedirectState_());
            this.isStateResolved_ = false;
            this.getSyncAuthUserChanges_ = goog.bind(this.syncAuthUserChanges_, this);
            this.userStateChangeListener_ = goog.bind(this.handleUserStateChange_, this);
            this.userTokenChangeListener_ = goog.bind(this.handleUserTokenChange_, this);
            this.userDeleteListener_ = goog.bind(this.handleUserDelete_, this);
            this.userInvalidatedListener_ =
              goog.bind(this.handleUserInvalidated_, this);
            if (fireauth.AuthEventManager.ENABLED) this.initAuthEventManager_();
            this.INTERNAL = {};
            this.INTERNAL["delete"] = goog.bind(this.delete, this);
            this.INTERNAL["logFramework"] = goog.bind(this.logFramework, this);
            this.firebaseServices_ = 0;
            fireauth.Auth.base(this, "constructor");
            this.initializeReadableWritableProps_();
            this.frameworks_ = []
          };
          goog.inherits(fireauth.Auth, goog.events.EventTarget);
          fireauth.Auth.LanguageCodeChangeEvent = function (languageCode) {
            goog.events.Event.call(this, fireauth.constants.AuthEventType.LANGUAGE_CODE_CHANGED);
            this.languageCode = languageCode
          };
          goog.inherits(fireauth.Auth.LanguageCodeChangeEvent, goog.events.Event);
          fireauth.Auth.FrameworkChangeEvent = function (frameworks) {
            goog.events.Event.call(this, fireauth.constants.AuthEventType.FRAMEWORK_CHANGED);
            this.frameworks = frameworks
          };
          goog.inherits(fireauth.Auth.FrameworkChangeEvent, goog.events.Event);
          fireauth.Auth.prototype.setPersistence = function (persistence) {
            var p = this.userStorageManager_.setPersistence(persistence);
            return this.registerPendingPromise_(p)
          };
          fireauth.Auth.prototype.app;
          fireauth.Auth.prototype.setLanguageCode = function (languageCode) {
            if (this.languageCode_ !== languageCode && !this.deleted_) {
              this.languageCode_ = languageCode;
              this.rpcHandler_.updateCustomLocaleHeader(this.languageCode_);
              this.notifyLanguageCodeListeners_()
            }
          };
          fireauth.Auth.prototype.getLanguageCode = function () {
            return this.languageCode_
          };
          fireauth.Auth.prototype.useDeviceLanguage = function () {
            this.setLanguageCode(fireauth.util.getUserLanguage())
          };
          fireauth.Auth.prototype.logFramework = function (frameworkId) {
            this.frameworks_.push(frameworkId);
            this.rpcHandler_.updateClientVersion(firebase.SDK_VERSION ? fireauth.util.getClientVersion(fireauth.util.ClientImplementation.JSCORE, firebase.SDK_VERSION, this.frameworks_) : null);
            this.dispatchEvent(new fireauth.Auth.FrameworkChangeEvent(this.frameworks_))
          };
          fireauth.Auth.prototype.getFramework = function () {
            return goog.array.clone(this.frameworks_)
          };
          fireauth.Auth.prototype.setUserFramework_ = function (user) {
            user.setFramework(this.frameworks_);
            user.setFrameworkChangeDispatcher(this)
          };
          fireauth.Auth.prototype.initializeReadableWritableProps_ = function () {
            Object.defineProperty(this, "lc", {
              get: function () {
                return this.getLanguageCode()
              }, set: function (value) {
                this.setLanguageCode(value)
              }, enumerable: false
            });
            this.languageCode_ = null
          };
          fireauth.Auth.prototype.notifyLanguageCodeListeners_ = function () {
            this.dispatchEvent(new fireauth.Auth.LanguageCodeChangeEvent(this.getLanguageCode()))
          };
          fireauth.Auth.prototype.toJSON = function () {
            return {
              "apiKey": this.app_().options["apiKey"],
              "authDomain": this.app_().options["authDomain"],
              "appName": this.app_().name,
              "currentUser": this.currentUser_() && this.currentUser_().toPlainObject()
            }
          };
          fireauth.Auth.prototype.getAuthEventManager_ = function () {
            return this.eventManagerProviderPromise_ || goog.Promise.reject(new fireauth.AuthError(fireauth.authenum.Error.MISSING_AUTH_DOMAIN))
          };
          fireauth.Auth.prototype.initAuthEventManager_ = function () {
            var self = this;
            var authDomain = this.app_().options["authDomain"];
            var apiKey = this.app_().options["apiKey"];
            if (authDomain && fireauth.util.isPopupRedirectSupported()) this.eventManagerProviderPromise_ = this.authStateLoaded_.then(function () {
              if (self.deleted_) return;
              self.authEventManager_ = fireauth.AuthEventManager.getManager(authDomain, apiKey, self.app_().name);
              self.authEventManager_.subscribe(self);
              if (self.currentUser_()) self.currentUser_().enablePopupRedirect();
              if (self.redirectUser_) {
                self.redirectUser_.enablePopupRedirect();
                self.setUserLanguage_(self.redirectUser_);
                self.setUserFramework_(self.redirectUser_);
                self.redirectUser_ = null
              }
              return self.authEventManager_
            })
          };
          fireauth.Auth.prototype.canHandleAuthEvent = function (mode, opt_eventId) {
            switch (mode) {
              case fireauth.AuthEvent.Type.UNKNOWN:
              case fireauth.AuthEvent.Type.SIGN_IN_VIA_REDIRECT:
                return true;
              case fireauth.AuthEvent.Type.SIGN_IN_VIA_POPUP:
                return this.popupEventId_ == opt_eventId && !!this.pendingPopupResolvePromise_;
              default:
                return false
            }
          };
          fireauth.Auth.prototype.resolvePendingPopupEvent = function (mode, popupRedirectResult, error, opt_eventId) {
            if (mode != fireauth.AuthEvent.Type.SIGN_IN_VIA_POPUP || this.popupEventId_ != opt_eventId) return;
            if (error && this.pendingPopupRejectPromise_) this.pendingPopupRejectPromise_(error); else if (popupRedirectResult && !error && this.pendingPopupResolvePromise_) this.pendingPopupResolvePromise_(popupRedirectResult);
            if (this.popupTimeoutPromise_) {
              this.popupTimeoutPromise_.cancel();
              this.popupTimeoutPromise_ = null
            }
            delete this.pendingPopupResolvePromise_;
            delete this.pendingPopupRejectPromise_
          };
          fireauth.Auth.prototype.getAuthEventHandlerFinisher = function (mode, opt_eventId) {
            if (mode == fireauth.AuthEvent.Type.SIGN_IN_VIA_REDIRECT) return goog.bind(this.finishPopupAndRedirectSignIn, this); else if (mode == fireauth.AuthEvent.Type.SIGN_IN_VIA_POPUP && this.popupEventId_ == opt_eventId && this.pendingPopupResolvePromise_) return goog.bind(this.finishPopupAndRedirectSignIn, this);
            return null
          };
          fireauth.Auth.prototype.finishPopupAndRedirectSignIn = function (requestUri, sessionId) {
            var self = this;
            var request = {"requestUri": requestUri, "sessionId": sessionId};
            if (this.popupTimeoutPromise_) {
              this.popupTimeoutPromise_.cancel();
              this.popupTimeoutPromise_ = null
            }
            var credential = null;
            var additionalUserInfo = null;
            var idTokenResolver = self.rpcHandler_.verifyAssertion(request).then(function (response) {
              credential = fireauth.AuthProvider.getCredentialFromResponse(response);
              additionalUserInfo = fireauth.AdditionalUserInfo.fromPlainObject(response);
              return response
            });
            var p = self.authStateLoaded_.then(function () {
              return idTokenResolver
            }).then(function (idTokenResponse) {
              return self.signInWithIdTokenResponse(idTokenResponse)
            }).then(function () {
              return fireauth.object.makeReadonlyCopy({
                "user": self.currentUser_(),
                "credential": credential,
                "additionalUserInfo": additionalUserInfo,
                "operationType": fireauth.constants.OperationType.SIGN_IN
              })
            });
            return this.registerPendingPromise_(p)
          };
          fireauth.Auth.prototype.generateEventId_ = function () {
            return fireauth.util.generateEventId()
          };
          fireauth.Auth.prototype.signInWithPopup = function (provider) {
            if (!fireauth.util.isPopupRedirectSupported()) return goog.Promise.reject(new fireauth.AuthError(fireauth.authenum.Error.OPERATION_NOT_SUPPORTED));
            var mode = fireauth.AuthEvent.Type.SIGN_IN_VIA_POPUP;
            var self = this;
            var settings = fireauth.idp.getIdpSettings(provider["providerId"]);
            var eventId = this.generateEventId_();
            var oauthHelperWidgetUrl = null;
            if ((!fireauth.util.runsInBackground() || fireauth.util.isIframe()) && this.app_().options["authDomain"] &&
              provider["isOAuthProvider"]) oauthHelperWidgetUrl = fireauth.iframeclient.IfcHandler.getOAuthHelperWidgetUrl(this.app_().options["authDomain"], this.app_().options["apiKey"], this.app_().name, mode, provider, null, eventId, firebase.SDK_VERSION || null);
            var popupWin = fireauth.util.popup(oauthHelperWidgetUrl, fireauth.util.generateRandomString(), settings && settings.popupWidth, settings && settings.popupHeight);
            var p = this.getAuthEventManager_().then(function (manager) {
              return manager.processPopup(popupWin, mode, provider,
                eventId, !!oauthHelperWidgetUrl)
            }).then(function () {
              return new goog.Promise(function (resolve, reject) {
                self.resolvePendingPopupEvent(mode, null, new fireauth.AuthError(fireauth.authenum.Error.EXPIRED_POPUP_REQUEST), self.popupEventId_);
                self.pendingPopupResolvePromise_ = resolve;
                self.pendingPopupRejectPromise_ = reject;
                self.popupEventId_ = eventId;
                self.popupTimeoutPromise_ = self.authEventManager_.startPopupTimeout(self, mode, popupWin, eventId)
              })
            }).then(function (result) {
              if (popupWin) fireauth.util.closeWindow(popupWin);
              if (result) return fireauth.object.makeReadonlyCopy(result);
              return null
            }).thenCatch(function (error) {
              if (popupWin) fireauth.util.closeWindow(popupWin);
              throw error;
            });
            return this.registerPendingPromise_(p)
          };
          fireauth.Auth.prototype.signInWithRedirect = function (provider) {
            if (!fireauth.util.isPopupRedirectSupported()) return goog.Promise.reject(new fireauth.AuthError(fireauth.authenum.Error.OPERATION_NOT_SUPPORTED));
            var self = this;
            var mode = fireauth.AuthEvent.Type.SIGN_IN_VIA_REDIRECT;
            var p = this.getAuthEventManager_().then(function (manager) {
              return self.userStorageManager_.savePersistenceForRedirect()
            }).then(function () {
              return self.authEventManager_.processRedirect(mode, provider)
            });
            return this.registerPendingPromise_(p)
          };
          fireauth.Auth.prototype.getRedirectResult = function () {
            if (!fireauth.util.isPopupRedirectSupported()) return goog.Promise.reject(new fireauth.AuthError(fireauth.authenum.Error.OPERATION_NOT_SUPPORTED));
            var self = this;
            var p = this.getAuthEventManager_().then(function (manager) {
              return self.authEventManager_.getRedirectResult()
            }).then(function (result) {
              if (result) return fireauth.object.makeReadonlyCopy(result);
              return null
            });
            return this.registerPendingPromise_(p)
          };
          fireauth.Auth.prototype.signInWithIdTokenResponse = function (idTokenResponse) {
            var self = this;
            var options = {};
            options["apiKey"] = self.app_().options["apiKey"];
            options["authDomain"] = self.app_().options["authDomain"];
            options["appName"] = self.app_().name;
            return this.authStateLoaded_.then(function () {
              return fireauth.AuthUser.initializeFromIdTokenResponse(options, idTokenResponse, self.redirectUserStorageManager_, self.getFramework())
            }).then(function (user) {
              if (self.currentUser_() && user["uid"] == self.currentUser_()["uid"]) {
                self.currentUser_().copy(user);
                return self.handleUserStateChange_(user)
              }
              self.setCurrentUser_(user);
              user.enablePopupRedirect();
              return self.handleUserStateChange_(user)
            }).then(function () {
              self.notifyAuthListeners_()
            })
          };
          fireauth.Auth.prototype.setCurrentUser_ = function (user) {
            this.attachEventListeners_(user);
            fireauth.object.setReadonlyProperty(this, "currentUser", user);
            if (user) {
              this.setUserLanguage_(user);
              this.setUserFramework_(user)
            }
          };
          fireauth.Auth.prototype.signOut = function () {
            var self = this;
            var p = this.redirectStateIsReady_.then(function () {
              if (!self.currentUser_()) return goog.Promise.resolve();
              self.setCurrentUser_(null);
              return self.userStorageManager_.removeCurrentUser().then(function () {
                self.notifyAuthListeners_()
              })
            });
            return this.registerPendingPromise_(p)
          };
          fireauth.Auth.prototype.initRedirectUser_ = function () {
            var self = this;
            var authDomain = this.app_().options["authDomain"];
            var p = this.redirectUserStorageManager_.getRedirectUser(authDomain).then(function (user) {
              self.redirectUser_ = user;
              if (user) user.setRedirectStorageManager(self.redirectUserStorageManager_);
              return self.redirectUserStorageManager_.removeRedirectUser()
            });
            return this.registerPendingPromise_(p)
          };
          fireauth.Auth.prototype.initAuthState_ = function () {
            var self = this;
            var authDomain = this.app_().options["authDomain"];
            var p = this.initRedirectUser_().then(function () {
              return self.userStorageManager_.getCurrentUser(authDomain)
            }).then(function (user) {
              if (user) {
                user.setRedirectStorageManager(self.redirectUserStorageManager_);
                if (self.redirectUser_ && self.redirectUser_.getRedirectEventId() == user.getRedirectEventId()) return user;
                return user.reload().then(function () {
                  return self.userStorageManager_.setCurrentUser(user).then(function () {
                    return user
                  })
                }).thenCatch(function (error) {
                  if (error["code"] ==
                    "auth/network-request-failed") return user;
                  return self.userStorageManager_.removeCurrentUser()
                })
              }
              return null
            }).then(function (user) {
              self.setCurrentUser_(user || null)
            });
            return this.registerPendingPromise_(p)
          };
          fireauth.Auth.prototype.initAuthRedirectState_ = function () {
            var self = this;
            return this.authStateLoaded_.then(function () {
              return self.getRedirectResult()
            }).thenCatch(function (error) {
              return
            }).then(function () {
              if (self.deleted_) return;
              return self.getSyncAuthUserChanges_()
            }).thenCatch(function (error) {
              return
            }).then(function () {
              if (self.deleted_) return;
              self.isStateResolved_ = true;
              self.userStorageManager_.addCurrentUserChangeListener(self.getSyncAuthUserChanges_)
            })
          };
          fireauth.Auth.prototype.syncAuthUserChanges_ = function () {
            var self = this;
            var authDomain = this.app_().options["authDomain"];
            return this.userStorageManager_.getCurrentUser(authDomain).then(function (user) {
              if (self.deleted_) return;
              if (self.currentUser_() && user && self.currentUser_().hasSameUserIdAs(user)) {
                self.currentUser_().copy(user);
                return self.currentUser_().getIdToken()
              } else if (!self.currentUser_() && !user) return; else {
                self.setCurrentUser_(user);
                if (user) {
                  user.enablePopupRedirect();
                  user.setRedirectStorageManager(self.redirectUserStorageManager_)
                }
                if (self.authEventManager_) self.authEventManager_.subscribe(self);
                self.notifyAuthListeners_()
              }
            })
          };
          fireauth.Auth.prototype.setUserLanguage_ = function (user) {
            user.setLanguageCode(this.getLanguageCode());
            user.setLanguageCodeChangeDispatcher(this)
          };
          fireauth.Auth.prototype.handleUserStateChange_ = function (user) {
            return this.userStorageManager_.setCurrentUser(user)
          };
          fireauth.Auth.prototype.handleUserTokenChange_ = function (event) {
            this.notifyAuthListeners_();
            this.handleUserStateChange_(this.currentUser_())
          };
          fireauth.Auth.prototype.handleUserDelete_ = function (event) {
            this.signOut()
          };
          fireauth.Auth.prototype.handleUserInvalidated_ = function (event) {
            this.signOut()
          };
          fireauth.Auth.prototype.attachEventListeners_ = function (user) {
            if (this.currentUser_()) {
              this.currentUser_().removeStateChangeListener(this.userStateChangeListener_);
              goog.events.unlisten(this.currentUser_(), fireauth.UserEventType.TOKEN_CHANGED, this.userTokenChangeListener_);
              goog.events.unlisten(this.currentUser_(), fireauth.UserEventType.USER_DELETED, this.userDeleteListener_);
              goog.events.unlisten(this.currentUser_(), fireauth.UserEventType.USER_INVALIDATED, this.userInvalidatedListener_);
              this.currentUser_().stopProactiveRefresh()
            }
            if (user) {
              user.addStateChangeListener(this.userStateChangeListener_);
              goog.events.listen(user, fireauth.UserEventType.TOKEN_CHANGED, this.userTokenChangeListener_);
              goog.events.listen(user, fireauth.UserEventType.USER_DELETED, this.userDeleteListener_);
              goog.events.listen(user, fireauth.UserEventType.USER_INVALIDATED, this.userInvalidatedListener_);
              if (this.firebaseServices_ > 0) user.startProactiveRefresh()
            }
          };
          fireauth.Auth.prototype.signInWithIdTokenProvider_ = function (idTokenPromise) {
            var self = this;
            var credential = null;
            var additionalUserInfo = null;
            return this.registerPendingPromise_(idTokenPromise.then(function (idTokenResponse) {
              credential = fireauth.AuthProvider.getCredentialFromResponse(idTokenResponse);
              additionalUserInfo = fireauth.AdditionalUserInfo.fromPlainObject(idTokenResponse);
              return self.signInWithIdTokenResponse(idTokenResponse)
            }).then(function () {
              return fireauth.object.makeReadonlyCopy({
                "user": self.currentUser_(),
                "credential": credential,
                "additionalUserInfo": additionalUserInfo,
                "operationType": fireauth.constants.OperationType.SIGN_IN
              })
            }))
          };
          fireauth.Auth.prototype.initIdTokenChangeObserver_ = function (observer) {
            var self = this;
            this.addAuthTokenListener(function (accessToken) {
              observer.next(self.currentUser_())
            })
          };
          fireauth.Auth.prototype.initUserStateObserver_ = function (observer) {
            var self = this;
            this.addUserChangeListener_(function (accessToken) {
              observer.next(self.currentUser_())
            })
          };
          fireauth.Auth.prototype.onIdTokenChanged = function (nextOrObserver, opt_error, opt_completed) {
            var self = this;
            if (this.isStateResolved_) firebase.Promise.resolve().then(function () {
              if (goog.isFunction(nextOrObserver)) nextOrObserver(self.currentUser_()); else if (goog.isFunction(nextOrObserver["next"])) nextOrObserver["next"](self.currentUser_())
            });
            return this.onIdTokenChanged_(nextOrObserver, opt_error, opt_completed)
          };
          fireauth.Auth.prototype.onAuthStateChanged = function (nextOrObserver, opt_error, opt_completed) {
            var self = this;
            if (this.isStateResolved_) firebase.Promise.resolve().then(function () {
              self.userStateChangeUid_ = self.getUid();
              if (goog.isFunction(nextOrObserver)) nextOrObserver(self.currentUser_()); else if (goog.isFunction(nextOrObserver["next"])) nextOrObserver["next"](self.currentUser_())
            });
            return this.onUserStateChanged_(nextOrObserver, opt_error, opt_completed)
          };
          fireauth.Auth.prototype.getIdTokenInternal = function (opt_forceRefresh) {
            var self = this;
            var p = this.redirectStateIsReady_.then(function () {
              if (self.currentUser_()) return self.currentUser_().getIdToken(opt_forceRefresh).then(function (stsAccessToken) {
                return {"accessToken": stsAccessToken}
              });
              return null
            });
            return this.registerPendingPromise_(p)
          };
          fireauth.Auth.prototype.signInWithCustomToken = function (token) {
            var self = this;
            return this.redirectStateIsReady_.then(function () {
              return self.signInWithIdTokenProvider_(self.getRpcHandler().verifyCustomToken(token))
            }).then(function (result) {
              var user = result["user"];
              user.updateProperty("isAnonymous", false);
              return self.handleUserStateChange_(user)
            }).then(function () {
              return self.currentUser_()
            })
          };
          fireauth.Auth.prototype.signInWithEmailAndPassword = function (email, password) {
            var self = this;
            return this.redirectStateIsReady_.then(function () {
              return self.signInWithIdTokenProvider_(self.getRpcHandler().verifyPassword(email, password))
            }).then(function (result) {
              return result["user"]
            })
          };
          fireauth.Auth.prototype.createUserWithEmailAndPassword = function (email, password) {
            var self = this;
            return this.redirectStateIsReady_.then(function () {
              return self.signInWithIdTokenProvider_(self.getRpcHandler().createAccount(email, password))
            }).then(function (result) {
              return result["user"]
            })
          };
          fireauth.Auth.prototype.signInWithCredential = function (credential) {
            return this.signInAndRetrieveDataWithCredential(credential).then(function (result) {
              return result["user"]
            })
          };
          fireauth.Auth.prototype.signInAndRetrieveDataWithCredential = function (credential) {
            var self = this;
            return this.redirectStateIsReady_.then(function () {
              return self.signInWithIdTokenProvider_(credential.getIdTokenProvider(self.getRpcHandler()))
            })
          };
          fireauth.Auth.prototype.signInAnonymously = function () {
            var self = this;
            return this.redirectStateIsReady_.then(function () {
              var user = self.currentUser_();
              if (user && user["isAnonymous"]) return user; else return self.signInWithIdTokenProvider_(self.getRpcHandler().signInAnonymously()).then(function (result) {
                var user = result["user"];
                user.updateProperty("isAnonymous", true);
                return self.handleUserStateChange_(user)
              }).then(function () {
                return self.currentUser_()
              })
            })
          };
          fireauth.Auth.prototype.getStorageKey = function () {
            return fireauth.util.createStorageKey(this.app_().options["apiKey"], this.app_().name)
          };
          fireauth.Auth.prototype.app_ = function () {
            return this["app"]
          };
          fireauth.Auth.prototype.getRpcHandler = function () {
            return this.rpcHandler_
          };
          fireauth.Auth.prototype.currentUser_ = function () {
            return this["currentUser"]
          };
          fireauth.Auth.prototype.getUid = function () {
            return this.currentUser_() && this.currentUser_()["uid"] || null
          };
          fireauth.Auth.prototype.getLastAccessToken_ = function () {
            return this.currentUser_() && this.currentUser_()["_lat"] || null
          };
          fireauth.Auth.prototype.notifyAuthListeners_ = function () {
            if (this.isStateResolved_) {
              for (var i = 0; i < this.authListeners_.length; i++) if (this.authListeners_[i]) this.authListeners_[i](this.getLastAccessToken_());
              if (this.userStateChangeUid_ !== this.getUid() && this.userChangeListeners_.length) {
                this.userStateChangeUid_ = this.getUid();
                for (var i = 0; i < this.userChangeListeners_.length; i++) if (this.userChangeListeners_[i]) this.userChangeListeners_[i](this.getLastAccessToken_())
              }
            }
          };
          fireauth.Auth.prototype.addAuthTokenListenerInternal = function (listener) {
            this.addAuthTokenListener(listener);
            this.firebaseServices_++;
            if (this.firebaseServices_ > 0 && this.currentUser_()) this.currentUser_().startProactiveRefresh()
          };
          fireauth.Auth.prototype.removeAuthTokenListenerInternal = function (listener) {
            var self = this;
            goog.array.forEach(this.authListeners_, function (ele) {
              if (ele == listener) self.firebaseServices_--
            });
            if (this.firebaseServices_ < 0) this.firebaseServices_ = 0;
            if (this.firebaseServices_ == 0 && this.currentUser_()) this.currentUser_().stopProactiveRefresh();
            this.removeAuthTokenListener(listener)
          };
          fireauth.Auth.prototype.addAuthTokenListener = function (listener) {
            var self = this;
            this.authListeners_.push(listener);
            this.registerPendingPromise_(this.redirectStateIsReady_.then(function () {
              if (self.deleted_) return;
              if (goog.array.contains(self.authListeners_, listener)) listener(self.getLastAccessToken_())
            }))
          };
          fireauth.Auth.prototype.removeAuthTokenListener = function (listener) {
            goog.array.removeAllIf(this.authListeners_, function (ele) {
              return ele == listener
            })
          };
          fireauth.Auth.prototype.addUserChangeListener_ = function (listener) {
            var self = this;
            this.userChangeListeners_.push(listener);
            this.registerPendingPromise_(this.redirectStateIsReady_.then(function () {
              if (self.deleted_) return;
              if (goog.array.contains(self.userChangeListeners_, listener)) if (self.userStateChangeUid_ !== self.getUid()) {
                self.userStateChangeUid_ = self.getUid();
                listener(self.getLastAccessToken_())
              }
            }))
          };
          fireauth.Auth.prototype.delete = function () {
            this.deleted_ = true;
            for (var i = 0; i < this.pendingPromises_.length; i++) this.pendingPromises_[i].cancel(fireauth.authenum.Error.MODULE_DESTROYED);
            this.pendingPromises_ = [];
            if (this.userStorageManager_) this.userStorageManager_.removeCurrentUserChangeListener(this.getSyncAuthUserChanges_);
            if (this.authEventManager_) this.authEventManager_.unsubscribe(this);
            return firebase.Promise.resolve()
          };
          fireauth.Auth.prototype.hasPendingPromises = function () {
            return this.pendingPromises_.length != 0
          };
          fireauth.Auth.prototype.registerPendingPromise_ = function (p) {
            var self = this;
            this.pendingPromises_.push(p);
            p.thenAlways(function () {
              goog.array.remove(self.pendingPromises_, p)
            });
            return p
          };
          fireauth.Auth.prototype.fetchProvidersForEmail = function (email) {
            return this.registerPendingPromise_(this.getRpcHandler().fetchProvidersForIdentifier(email))
          };
          fireauth.Auth.prototype.verifyPasswordResetCode = function (code) {
            return this.checkActionCode(code).then(function (info) {
              return info["data"]["email"]
            })
          };
          fireauth.Auth.prototype.confirmPasswordReset = function (code, newPassword) {
            return this.registerPendingPromise_(this.getRpcHandler().confirmPasswordReset(code, newPassword).then(function (email) {
            }))
          };
          fireauth.Auth.prototype.checkActionCode = function (code) {
            return this.registerPendingPromise_(this.getRpcHandler().checkActionCode(code).then(function (response) {
              return new fireauth.ActionCodeInfo(response)
            }))
          };
          fireauth.Auth.prototype.applyActionCode = function (code) {
            return this.registerPendingPromise_(this.getRpcHandler().applyActionCode(code).then(function (email) {
            }))
          };
          fireauth.Auth.prototype.sendPasswordResetEmail = function (email, opt_actionCodeSettings) {
            var self = this;
            return this.registerPendingPromise_(goog.Promise.resolve().then(function () {
              if (typeof opt_actionCodeSettings !== "undefined" && !goog.object.isEmpty(opt_actionCodeSettings)) return (new fireauth.ActionCodeSettings(opt_actionCodeSettings)).buildRequest();
              return {}
            }).then(function (additionalRequestData) {
              return self.getRpcHandler().sendPasswordResetEmail(email, additionalRequestData)
            }).then(function (email) {
            }))
          };
          fireauth.Auth.prototype.signInWithPhoneNumber = function (phoneNumber, appVerifier) {
            return this.registerPendingPromise_(fireauth.ConfirmationResult.initialize(this, phoneNumber, appVerifier, goog.bind(this.signInAndRetrieveDataWithCredential, this)))
          };
          goog.provide("fireauth.args");
          goog.provide("fireauth.args.Argument");
          goog.require("fireauth.Auth");
          goog.require("fireauth.AuthError");
          goog.require("fireauth.authenum.Error");
          fireauth.args.Argument;
          fireauth.args.validate = function (apiName, expected, actual, opt_isSetter) {
            var actualAsArray = Array.prototype.slice.call(actual);
            var errorMessage = fireauth.args.validateAndGetMessage_(expected, actualAsArray, opt_isSetter);
            if (errorMessage) throw new fireauth.AuthError(fireauth.authenum.Error.ARGUMENT_ERROR, apiName + " failed: " + errorMessage);
          };
          fireauth.args.validateAndGetMessage_ = function (expected, actual, opt_isSetter) {
            var minNumArgs = fireauth.args.calcNumRequiredArgs_(expected);
            var maxNumArgs = expected.length;
            if (actual.length < minNumArgs || maxNumArgs < actual.length) return fireauth.args.makeLengthError_(minNumArgs, maxNumArgs, actual.length);
            for (var i = 0; i < actual.length; i++) {
              var optionalUndefined = expected[i].optional && actual[i] === undefined;
              if (!expected[i].validator(actual[i]) && !optionalUndefined) return fireauth.args.makeErrorAtPosition_(i, expected[i],
                opt_isSetter)
            }
            return null
          };
          fireauth.args.calcNumRequiredArgs_ = function (expected) {
            var numRequiredArgs = 0;
            var isOptionalSection = false;
            for (var i = 0; i < expected.length; i++) if (expected[i].optional) isOptionalSection = true; else {
              if (isOptionalSection) throw new fireauth.AuthError(fireauth.authenum.Error.INTERNAL_ERROR, "Argument validator encountered a required argument after an " + "optional argument.");
              numRequiredArgs++
            }
            return numRequiredArgs
          };
          fireauth.args.makeLengthError_ = function (min, max, actual) {
            var numExpectedString;
            if (min == max) if (min == 1) numExpectedString = "1 argument"; else numExpectedString = min + " arguments"; else numExpectedString = min + "-" + max + " arguments";
            return "Expected " + numExpectedString + " but got " + actual + "."
          };
          fireauth.args.makeErrorAtPosition_ = function (position, expectedType, opt_isSetter) {
            var ordinal = fireauth.args.makeOrdinal_(position);
            var argName = expectedType.name ? fireauth.args.quoteString_(expectedType.name) + " " : "";
            var errorPrefix = !!opt_isSetter ? "" : ordinal + " argument ";
            return errorPrefix + argName + "must be " + expectedType.typeLabel + "."
          };
          fireauth.args.ORDINAL_NUMBERS_ = ["First", "Second", "Third", "Fourth", "Fifth", "Sixth", "Seventh", "Eighth", "Ninth"];
          fireauth.args.makeOrdinal_ = function (cardinal) {
            if (cardinal < 0 || cardinal >= fireauth.args.ORDINAL_NUMBERS_.length) throw new fireauth.AuthError(fireauth.authenum.Error.INTERNAL_ERROR, "Argument validator received an unsupported number of arguments.");
            return fireauth.args.ORDINAL_NUMBERS_[cardinal]
          };
          fireauth.args.string = function (opt_name, opt_optional) {
            return {
              name: opt_name || "",
              typeLabel: "a valid string",
              optional: !!opt_optional,
              validator: goog.isString
            }
          };
          fireauth.args.bool = function (opt_name, opt_optional) {
            return {name: opt_name || "", typeLabel: "a boolean", optional: !!opt_optional, validator: goog.isBoolean}
          };
          fireauth.args.number = function (opt_name, opt_optional) {
            return {
              name: opt_name || "",
              typeLabel: "a valid number",
              optional: !!opt_optional,
              validator: goog.isNumber
            }
          };
          fireauth.args.object = function (opt_name, opt_optional) {
            return {
              name: opt_name || "",
              typeLabel: "a valid object",
              optional: !!opt_optional,
              validator: goog.isObject
            }
          };
          fireauth.args.func = function (opt_name, opt_optional) {
            return {name: opt_name || "", typeLabel: "a function", optional: !!opt_optional, validator: goog.isFunction}
          };
          fireauth.args.null = function (opt_name, opt_optional) {
            return {name: opt_name || "", typeLabel: "null", optional: !!opt_optional, validator: goog.isNull}
          };
          fireauth.args.element = function (opt_name, opt_optional) {
            return {
              name: opt_name || "",
              typeLabel: "an HTML element",
              optional: !!opt_optional,
              validator: function (element) {
                return !!(element && element instanceof Element)
              }
            }
          };
          fireauth.args.firebaseAuth = function (opt_optional) {
            return {
              name: "auth",
              typeLabel: "an instance of Firebase Auth",
              optional: !!opt_optional,
              validator: function (auth) {
                return !!(auth && auth instanceof fireauth.Auth)
              }
            }
          };
          fireauth.args.firebaseApp = function (opt_optional) {
            return {
              name: "app",
              typeLabel: "an instance of Firebase App",
              optional: !!opt_optional,
              validator: function (app) {
                return !!(app && app instanceof firebase.app.App)
              }
            }
          };
          fireauth.args.authCredential = function (opt_requiredProviderId, opt_name, opt_optional) {
            var name = opt_name || (opt_requiredProviderId ? opt_requiredProviderId + "Credential" : "credential");
            var typeLabel = opt_requiredProviderId ? "a valid " + opt_requiredProviderId + " credential" : "a valid credential";
            return {
              name: name, typeLabel: typeLabel, optional: !!opt_optional, validator: function (credential) {
                if (!credential) return false;
                var matchesRequiredProvider = !opt_requiredProviderId || credential["providerId"] === opt_requiredProviderId;
                return !!(credential.getIdTokenProvider && matchesRequiredProvider)
              }
            }
          };
          fireauth.args.authProvider = function (opt_name, opt_optional) {
            return {
              name: opt_name || "authProvider",
              typeLabel: "a valid Auth provider",
              optional: !!opt_optional,
              validator: function (provider) {
                return !!(provider && provider["providerId"] && provider.hasOwnProperty && provider.hasOwnProperty("isOAuthProvider"))
              }
            }
          };
          fireauth.args.applicationVerifier = function (opt_optional) {
            return {
              name: "applicationVerifier",
              typeLabel: "an implementation of firebase.auth.ApplicationVerifier",
              optional: !!opt_optional,
              validator: function (applicationVerifier) {
                return !!(applicationVerifier && goog.isString(applicationVerifier.type) && goog.isFunction(applicationVerifier.verify))
              }
            }
          };
          fireauth.args.or = function (optionA, optionB, opt_name, opt_optional) {
            return {
              name: opt_name || "",
              typeLabel: optionA.typeLabel + " or " + optionB.typeLabel,
              optional: !!opt_optional,
              validator: function (value) {
                return optionA.validator(value) || optionB.validator(value)
              }
            }
          };
          fireauth.args.quoteString_ = function (str) {
            return '"' + str + '"'
          };
          goog.provide("fireauth.BaseRecaptchaVerifier");
          goog.provide("fireauth.RecaptchaVerifier");
          goog.require("fireauth.AuthError");
          goog.require("fireauth.RpcHandler");
          goog.require("fireauth.authenum.Error");
          goog.require("fireauth.constants");
          goog.require("fireauth.object");
          goog.require("fireauth.util");
          goog.require("goog.Promise");
          goog.require("goog.array");
          goog.require("goog.dom");
          goog.require("goog.html.TrustedResourceUrl");
          goog.require("goog.net.jsloader");
          goog.require("goog.string.Const");
          fireauth.BaseRecaptchaVerifier = function (apiKey, container, opt_parameters, opt_getLanguageCode, opt_clientVersion, opt_rpcHandlerConfig) {
            fireauth.object.setReadonlyProperty(this, "type", "recaptcha");
            this.cachedReadyPromise_ = null;
            this.widgetId_ = null;
            this.destroyed_ = false;
            this.container_ = container;
            this.parameters_ = opt_parameters || {"theme": "light", "type": "image"};
            this.pendingPromises_ = [];
            if (this.parameters_[fireauth.BaseRecaptchaVerifier.ParamName.SITEKEY]) throw new fireauth.AuthError(fireauth.authenum.Error.ARGUMENT_ERROR,
              "sitekey should not be provided for reCAPTCHA as one is " + "automatically provisioned for the current project.");
            this.isInvisible_ = this.parameters_[fireauth.BaseRecaptchaVerifier.ParamName.SIZE] === "invisible";
            if (!goog.dom.getElement(container) || !this.isInvisible_ && goog.dom.getElement(container).hasChildNodes()) throw new fireauth.AuthError(fireauth.authenum.Error.ARGUMENT_ERROR, "reCAPTCHA container is either not found or already contains inner " + "elements!");
            this.rpcHandler_ = new fireauth.RpcHandler(apiKey,
              opt_rpcHandlerConfig || null, opt_clientVersion || null);
            this.getLanguageCode_ = opt_getLanguageCode || function () {
              return null
            };
            var self = this;
            this.tokenListeners_ = [];
            var existingCallback = this.parameters_[fireauth.BaseRecaptchaVerifier.ParamName.CALLBACK];
            this.parameters_[fireauth.BaseRecaptchaVerifier.ParamName.CALLBACK] = function (response) {
              self.dispatchEvent_(response);
              if (typeof existingCallback === "function") existingCallback(response); else if (typeof existingCallback === "string") {
                var cb = fireauth.util.getObjectRef(existingCallback,
                  goog.global);
                if (typeof cb === "function") cb(response)
              }
            };
            var existingExpiredCallback = this.parameters_[fireauth.BaseRecaptchaVerifier.ParamName.EXPIRED_CALLBACK];
            this.parameters_[fireauth.BaseRecaptchaVerifier.ParamName.EXPIRED_CALLBACK] = function () {
              self.dispatchEvent_(null);
              if (typeof existingExpiredCallback === "function") existingExpiredCallback(); else if (typeof existingExpiredCallback === "string") {
                var cb = fireauth.util.getObjectRef(existingExpiredCallback, goog.global);
                if (typeof cb === "function") cb()
              }
            }
          };
          fireauth.BaseRecaptchaVerifier.ParamName = {
            CALLBACK: "callback",
            EXPIRED_CALLBACK: "expired-callback",
            SITEKEY: "sitekey",
            SIZE: "size"
          };
          fireauth.BaseRecaptchaVerifier.prototype.dispatchEvent_ = function (token) {
            for (var i = 0; i < this.tokenListeners_.length; i++) try {
              this.tokenListeners_[i](token)
            } catch (e) {
            }
          };
          fireauth.BaseRecaptchaVerifier.prototype.addTokenChangeListener_ = function (listener) {
            this.tokenListeners_.push(listener)
          };
          fireauth.BaseRecaptchaVerifier.prototype.removeTokenChangeListener_ = function (listener) {
            goog.array.removeAllIf(this.tokenListeners_, function (ele) {
              return ele == listener
            })
          };
          fireauth.BaseRecaptchaVerifier.prototype.registerPendingPromise_ = function (p) {
            var self = this;
            this.pendingPromises_.push(p);
            p.thenAlways(function () {
              goog.array.remove(self.pendingPromises_, p)
            });
            return p
          };
          fireauth.BaseRecaptchaVerifier.prototype.hasPendingPromises = function () {
            return this.pendingPromises_.length != 0
          };
          fireauth.BaseRecaptchaVerifier.prototype.isReady_ = function () {
            var self = this;
            if (this.cachedReadyPromise_) return this.cachedReadyPromise_;
            this.cachedReadyPromise_ = this.registerPendingPromise_(goog.Promise.resolve().then(function () {
              if (fireauth.util.isHttpOrHttps()) return fireauth.util.onDomReady(); else throw new fireauth.AuthError(fireauth.authenum.Error.OPERATION_NOT_SUPPORTED, "RecaptchaVerifier is only supported in a browser HTTP/HTTPS " + "environment.");
            }).then(function () {
              return fireauth.BaseRecaptchaVerifier.Loader.getInstance().loadRecaptchaDeps(self.getLanguageCode_())
            }).then(function () {
              return self.rpcHandler_.getRecaptchaParam()
            }).then(function (result) {
              self.parameters_[fireauth.BaseRecaptchaVerifier.ParamName.SITEKEY] =
                result[fireauth.RpcHandler.AuthServerField.RECAPTCHA_SITE_KEY]
            }).thenCatch(function (error) {
              self.cachedReadyPromise_ = null;
              throw error;
            }));
            return this.cachedReadyPromise_
          };
          fireauth.BaseRecaptchaVerifier.prototype.render = function () {
            this.checkIfDestroyed_();
            var self = this;
            return this.registerPendingPromise_(this.isReady_().then(function () {
              if (self.widgetId_ === null) {
                var container = self.container_;
                if (!self.isInvisible_) {
                  var outerContainer = goog.dom.getElement(container);
                  container = goog.dom.createDom(goog.dom.TagName.DIV);
                  outerContainer.appendChild(container)
                }
                self.widgetId_ = grecaptcha.render(container, self.parameters_)
              }
              return self.widgetId_
            }))
          };
          fireauth.BaseRecaptchaVerifier.prototype.verify = function () {
            this.checkIfDestroyed_();
            var self = this;
            return this.registerPendingPromise_(this.render().then(function (widgetId) {
              return new goog.Promise(function (resolve, reject) {
                var recaptchaToken = grecaptcha.getResponse(widgetId);
                if (recaptchaToken) resolve(recaptchaToken); else {
                  var cb = function (token) {
                    if (!token) return;
                    self.removeTokenChangeListener_(cb);
                    resolve(token)
                  };
                  self.addTokenChangeListener_(cb);
                  if (self.isInvisible_) grecaptcha.execute(self.widgetId_)
                }
              })
            }))
          };
          fireauth.BaseRecaptchaVerifier.prototype.reset = function () {
            this.checkIfDestroyed_();
            if (this.widgetId_ !== null) grecaptcha.reset(this.widgetId_)
          };
          fireauth.BaseRecaptchaVerifier.prototype.checkIfDestroyed_ = function () {
            if (this.destroyed_) throw new fireauth.AuthError(fireauth.authenum.Error.INTERNAL_ERROR, "RecaptchaVerifier instance has been destroyed.");
          };
          fireauth.BaseRecaptchaVerifier.prototype.clear = function () {
            this.checkIfDestroyed_();
            this.destroyed_ = true;
            fireauth.BaseRecaptchaVerifier.Loader.getInstance().clearSingleRecaptcha();
            for (var i = 0; i < this.pendingPromises_.length; i++) this.pendingPromises_[i].cancel("RecaptchaVerifier instance has been destroyed.");
            if (!this.isInvisible_) goog.dom.removeChildren(goog.dom.getElement(this.container_))
          };
          fireauth.BaseRecaptchaVerifier.RECAPTCHA_SRC_ = goog.string.Const.from("https://www.google.com/recaptcha/api.js?onload=%{onload}&render=explicit" + "&hl=%{hl}");
          fireauth.BaseRecaptchaVerifier.Loader = function () {
            this.counter_ = goog.global["grecaptcha"] ? Infinity : 0;
            this.hl_ = null;
            this.cbName_ = "__rcb" + Math.floor(Math.random() * 1E6).toString()
          };
          fireauth.BaseRecaptchaVerifier.Loader.prototype.loadRecaptchaDeps = function (hl) {
            var self = this;
            return new goog.Promise(function (resolve, reject) {
              if (!fireauth.util.isOnline()) {
                reject(new fireauth.AuthError(fireauth.authenum.Error.NETWORK_REQUEST_FAILED));
                return
              }
              if (!goog.global["grecaptcha"] || hl !== self.hl_ && !self.counter_) {
                goog.global[self.cbName_] = function () {
                  if (!goog.global["grecaptcha"]) reject(new fireauth.AuthError(fireauth.authenum.Error.INTERNAL_ERROR)); else {
                    self.hl_ = hl;
                    var render = goog.global["grecaptcha"]["render"];
                    goog.global["grecaptcha"]["render"] = function (container, parameters) {
                      var widgetId = render(container, parameters);
                      self.counter_++;
                      return widgetId
                    };
                    resolve()
                  }
                  delete goog.global[self.cbName_]
                };
                var url = goog.html.TrustedResourceUrl.format(fireauth.BaseRecaptchaVerifier.RECAPTCHA_SRC_, {
                  "onload": self.cbName_,
                  "hl": hl || ""
                });
                goog.Promise.resolve(goog.net.jsloader.safeLoad(url)).thenCatch(function (error) {
                  reject(new fireauth.AuthError(fireauth.authenum.Error.INTERNAL_ERROR, "Unable to load external reCAPTCHA dependencies!"))
                })
              } else resolve()
            })
          };
          fireauth.BaseRecaptchaVerifier.Loader.prototype.clearSingleRecaptcha = function () {
            this.counter_--
          };
          fireauth.BaseRecaptchaVerifier.Loader.instance_ = null;
          fireauth.BaseRecaptchaVerifier.Loader.getInstance = function () {
            if (!fireauth.BaseRecaptchaVerifier.Loader.instance_) fireauth.BaseRecaptchaVerifier.Loader.instance_ = new fireauth.BaseRecaptchaVerifier.Loader;
            return fireauth.BaseRecaptchaVerifier.Loader.instance_
          };
          fireauth.RecaptchaVerifier = function (container, opt_parameters, opt_app) {
            var apiKey;
            try {
              this.app_ = opt_app || firebase.app()
            } catch (error) {
              throw new fireauth.AuthError(fireauth.authenum.Error.ARGUMENT_ERROR, "No firebase.app.App instance is currently initialized.");
            }
            if (this.app_.options && this.app_.options["apiKey"]) apiKey = this.app_.options["apiKey"]; else throw new fireauth.AuthError(fireauth.authenum.Error.INVALID_API_KEY);
            var self = this;
            var getLanguageCode = function () {
              var languageCode;
              try {
                languageCode = self.app_["auth"]().getLanguageCode()
              } catch (e) {
                languageCode =
                  null
              }
              return languageCode
            };
            var frameworkVersion = null;
            try {
              frameworkVersion = this.app_["auth"]().getFramework()
            } catch (e) {
            }
            var clientFullVersion = firebase.SDK_VERSION ? fireauth.util.getClientVersion(fireauth.util.ClientImplementation.JSCORE, firebase.SDK_VERSION, frameworkVersion) : null;
            fireauth.RecaptchaVerifier.base(this, "constructor", apiKey, container, opt_parameters, getLanguageCode, clientFullVersion, fireauth.constants.getEndpointConfig(fireauth.constants.clientEndpoint))
          };
          goog.inherits(fireauth.RecaptchaVerifier, fireauth.BaseRecaptchaVerifier);
          goog.provide("fireauth.exportlib");
          goog.provide("fireauth.exportlib.ExportedMethod");
          goog.require("fireauth.args");
          fireauth.exportlib.AUTH_TYPE = "auth";
          fireauth.exportlib.ExportedMethod;
          fireauth.exportlib.ExportedProperty;
          fireauth.exportlib.exportPrototypeMethods = function (protObj, fnMap) {
            for (var obfuscatedFnName in fnMap) {
              var unobfuscatedFnName = fnMap[obfuscatedFnName].name;
              protObj[unobfuscatedFnName] = fireauth.exportlib.wrapMethodWithArgumentVerifier_(unobfuscatedFnName, protObj[obfuscatedFnName], fnMap[obfuscatedFnName].args)
            }
          };
          fireauth.exportlib.exportPrototypeProperties = function (protObj, propMap) {
            for (var obfuscatedPropName in propMap) {
              var unobfuscatedPropName = propMap[obfuscatedPropName].name;
              if (unobfuscatedPropName === obfuscatedPropName) continue;
              var expectedArg = propMap[obfuscatedPropName].arg;
              Object.defineProperty(protObj, unobfuscatedPropName, {
                get: function () {
                  return this[obfuscatedPropName]
                }, set: function (value) {
                  fireauth.args.validate(unobfuscatedPropName, [expectedArg], [value], true);
                  this[obfuscatedPropName] = value
                }, enumerable: true
              })
            }
          };
          fireauth.exportlib.exportFunction = function (parentObj, name, func, opt_expectedArgs) {
            parentObj[name] = fireauth.exportlib.wrapMethodWithArgumentVerifier_(name, func, opt_expectedArgs)
          };
          fireauth.exportlib.wrapMethodWithArgumentVerifier_ = function (methodName, method, opt_expectedArgs) {
            if (!opt_expectedArgs) return method;
            var shortName = fireauth.exportlib.extractMethodNameFromFullPath_(methodName);
            var wrapper = function () {
              var argumentsAsArray = Array.prototype.slice.call(arguments);
              fireauth.args.validate(shortName, opt_expectedArgs, argumentsAsArray);
              return method.apply(this, argumentsAsArray)
            };
            for (var key in method) wrapper[key] = method[key];
            for (var key in method.prototype) wrapper.prototype[key] =
              method.prototype[key];
            return wrapper
          };
          fireauth.exportlib.extractMethodNameFromFullPath_ = function (path) {
            var parts = path.split(".");
            return parts[parts.length - 1]
          };
          goog.provide("fireauth.exports");
          goog.require("fireauth.Auth");
          goog.require("fireauth.AuthError");
          goog.require("fireauth.AuthErrorWithCredential");
          goog.require("fireauth.AuthUser");
          goog.require("fireauth.ConfirmationResult");
          goog.require("fireauth.EmailAuthProvider");
          goog.require("fireauth.FacebookAuthProvider");
          goog.require("fireauth.GithubAuthProvider");
          goog.require("fireauth.GoogleAuthProvider");
          goog.require("fireauth.InvalidOriginError");
          goog.require("fireauth.OAuthProvider");
          goog.require("fireauth.PhoneAuthProvider");
          goog.require("fireauth.RecaptchaVerifier");
          goog.require("fireauth.TwitterAuthProvider");
          goog.require("fireauth.args");
          goog.require("fireauth.authStorage.Persistence");
          goog.require("fireauth.exportlib");
          goog.require("fireauth.idp.ProviderId");
          goog.require("goog.Promise");
          fireauth.exportlib.exportPrototypeMethods(fireauth.Auth.prototype, {
            applyActionCode: {name: "applyActionCode", args: [fireauth.args.string("code")]},
            checkActionCode: {name: "checkActionCode", args: [fireauth.args.string("code")]},
            confirmPasswordReset: {
              name: "confirmPasswordReset",
              args: [fireauth.args.string("code"), fireauth.args.string("newPassword")]
            },
            createUserWithEmailAndPassword: {
              name: "createUserWithEmailAndPassword",
              args: [fireauth.args.string("email"), fireauth.args.string("password")]
            },
            fetchProvidersForEmail: {
              name: "fetchProvidersForEmail",
              args: [fireauth.args.string("email")]
            },
            getRedirectResult: {name: "getRedirectResult", args: []},
            onAuthStateChanged: {
              name: "onAuthStateChanged",
              args: [fireauth.args.or(fireauth.args.object(), fireauth.args.func(), "nextOrObserver"), fireauth.args.func("opt_error", true), fireauth.args.func("opt_completed", true)]
            },
            onIdTokenChanged: {
              name: "onIdTokenChanged",
              args: [fireauth.args.or(fireauth.args.object(), fireauth.args.func(), "nextOrObserver"), fireauth.args.func("opt_error", true), fireauth.args.func("opt_completed",
                true)]
            },
            sendPasswordResetEmail: {
              name: "sendPasswordResetEmail",
              args: [fireauth.args.string("email"), fireauth.args.or(fireauth.args.object("opt_actionCodeSettings", true), fireauth.args.null(null, true), "opt_actionCodeSettings", true)]
            },
            setPersistence: {name: "setPersistence", args: [fireauth.args.string("persistence")]},
            signInAndRetrieveDataWithCredential: {
              name: "signInAndRetrieveDataWithCredential",
              args: [fireauth.args.authCredential()]
            },
            signInAnonymously: {name: "signInAnonymously", args: []},
            signInWithCredential: {
              name: "signInWithCredential",
              args: [fireauth.args.authCredential()]
            },
            signInWithCustomToken: {name: "signInWithCustomToken", args: [fireauth.args.string("token")]},
            signInWithEmailAndPassword: {
              name: "signInWithEmailAndPassword",
              args: [fireauth.args.string("email"), fireauth.args.string("password")]
            },
            signInWithPhoneNumber: {
              name: "signInWithPhoneNumber",
              args: [fireauth.args.string("phoneNumber"), fireauth.args.applicationVerifier()]
            },
            signInWithPopup: {name: "signInWithPopup", args: [fireauth.args.authProvider()]},
            signInWithRedirect: {
              name: "signInWithRedirect",
              args: [fireauth.args.authProvider()]
            },
            signOut: {name: "signOut", args: []},
            toJSON: {name: "toJSON", args: [fireauth.args.string(null, true)]},
            useDeviceLanguage: {name: "useDeviceLanguage", args: []},
            verifyPasswordResetCode: {name: "verifyPasswordResetCode", args: [fireauth.args.string("code")]}
          });
          fireauth.exportlib.exportPrototypeProperties(fireauth.Auth.prototype, {
            "lc": {
              name: "languageCode",
              arg: fireauth.args.or(fireauth.args.string(), fireauth.args.null(), "languageCode")
            }
          });
          fireauth.Auth["Persistence"] = fireauth.authStorage.Persistence;
          fireauth.Auth["Persistence"]["LOCAL"] = fireauth.authStorage.Persistence.LOCAL;
          fireauth.Auth["Persistence"]["SESSION"] = fireauth.authStorage.Persistence.SESSION;
          fireauth.Auth["Persistence"]["NONE"] = fireauth.authStorage.Persistence.NONE;
          fireauth.exportlib.exportPrototypeMethods(fireauth.AuthUser.prototype, {
            "delete": {name: "delete", args: []},
            getIdToken: {name: "getIdToken", args: [fireauth.args.bool("opt_forceRefresh", true)]},
            getToken: {name: "getToken", args: [fireauth.args.bool("opt_forceRefresh", true)]},
            linkAndRetrieveDataWithCredential: {
              name: "linkAndRetrieveDataWithCredential",
              args: [fireauth.args.authCredential()]
            },
            linkWithCredential: {name: "linkWithCredential", args: [fireauth.args.authCredential()]},
            linkWithPhoneNumber: {
              name: "linkWithPhoneNumber",
              args: [fireauth.args.string("phoneNumber"), fireauth.args.applicationVerifier()]
            },
            linkWithPopup: {name: "linkWithPopup", args: [fireauth.args.authProvider()]},
            linkWithRedirect: {name: "linkWithRedirect", args: [fireauth.args.authProvider()]},
            reauthenticateAndRetrieveDataWithCredential: {
              name: "reauthenticateAndRetrieveDataWithCredential",
              args: [fireauth.args.authCredential()]
            },
            reauthenticateWithCredential: {
              name: "reauthenticateWithCredential",
              args: [fireauth.args.authCredential()]
            },
            reauthenticateWithPhoneNumber: {
              name: "reauthenticateWithPhoneNumber",
              args: [fireauth.args.string("phoneNumber"), fireauth.args.applicationVerifier()]
            },
            reauthenticateWithPopup: {name: "reauthenticateWithPopup", args: [fireauth.args.authProvider()]},
            reauthenticateWithRedirect: {name: "reauthenticateWithRedirect", args: [fireauth.args.authProvider()]},
            reload: {name: "reload", args: []},
            sendEmailVerification: {
              name: "sendEmailVerification",
              args: [fireauth.args.or(fireauth.args.object("opt_actionCodeSettings", true), fireauth.args.null(null, true), "opt_actionCodeSettings", true)]
            },
            toJSON: {
              name: "toJSON",
              args: [fireauth.args.string(null, true)]
            },
            unlink: {name: "unlink", args: [fireauth.args.string("provider")]},
            updateEmail: {name: "updateEmail", args: [fireauth.args.string("email")]},
            updatePassword: {name: "updatePassword", args: [fireauth.args.string("password")]},
            updatePhoneNumber: {
              name: "updatePhoneNumber",
              args: [fireauth.args.authCredential(fireauth.idp.ProviderId.PHONE)]
            },
            updateProfile: {name: "updateProfile", args: [fireauth.args.object("profile")]}
          });
          fireauth.exportlib.exportPrototypeMethods(goog.Promise.prototype, {
            thenCatch: {name: "catch"},
            then: {name: "then"}
          });
          fireauth.exportlib.exportPrototypeMethods(fireauth.ConfirmationResult.prototype, {
            confirm: {
              name: "confirm",
              args: [fireauth.args.string("verificationCode")]
            }
          });
          fireauth.exportlib.exportFunction(fireauth.EmailAuthProvider, "credential", fireauth.EmailAuthProvider.credential, [fireauth.args.string("email"), fireauth.args.string("password")]);
          fireauth.exportlib.exportPrototypeMethods(fireauth.FacebookAuthProvider.prototype, {
            addScope: {
              name: "addScope",
              args: [fireauth.args.string("scope")]
            }, setCustomParameters: {name: "setCustomParameters", args: [fireauth.args.object("customOAuthParameters")]}
          });
          fireauth.exportlib.exportFunction(fireauth.FacebookAuthProvider, "credential", fireauth.FacebookAuthProvider.credential, [fireauth.args.or(fireauth.args.string(), fireauth.args.object(), "token")]);
          fireauth.exportlib.exportPrototypeMethods(fireauth.GithubAuthProvider.prototype, {
            addScope: {
              name: "addScope",
              args: [fireauth.args.string("scope")]
            }, setCustomParameters: {name: "setCustomParameters", args: [fireauth.args.object("customOAuthParameters")]}
          });
          fireauth.exportlib.exportFunction(fireauth.GithubAuthProvider, "credential", fireauth.GithubAuthProvider.credential, [fireauth.args.or(fireauth.args.string(), fireauth.args.object(), "token")]);
          fireauth.exportlib.exportPrototypeMethods(fireauth.GoogleAuthProvider.prototype, {
            addScope: {
              name: "addScope",
              args: [fireauth.args.string("scope")]
            }, setCustomParameters: {name: "setCustomParameters", args: [fireauth.args.object("customOAuthParameters")]}
          });
          fireauth.exportlib.exportFunction(fireauth.GoogleAuthProvider, "credential", fireauth.GoogleAuthProvider.credential, [fireauth.args.or(fireauth.args.string(), fireauth.args.or(fireauth.args.object(), fireauth.args.null()), "idToken"), fireauth.args.or(fireauth.args.string(), fireauth.args.null(), "accessToken", true)]);
          fireauth.exportlib.exportPrototypeMethods(fireauth.TwitterAuthProvider.prototype, {
            setCustomParameters: {
              name: "setCustomParameters",
              args: [fireauth.args.object("customOAuthParameters")]
            }
          });
          fireauth.exportlib.exportFunction(fireauth.TwitterAuthProvider, "credential", fireauth.TwitterAuthProvider.credential, [fireauth.args.or(fireauth.args.string(), fireauth.args.object(), "token"), fireauth.args.string("secret", true)]);
          fireauth.exportlib.exportPrototypeMethods(fireauth.OAuthProvider.prototype, {
            addScope: {
              name: "addScope",
              args: [fireauth.args.string("scope")]
            },
            credential: {
              name: "credential",
              args: [fireauth.args.or(fireauth.args.string(), fireauth.args.null(), "idToken", true), fireauth.args.or(fireauth.args.string(), fireauth.args.null(), "accessToken", true)]
            },
            setCustomParameters: {name: "setCustomParameters", args: [fireauth.args.object("customOAuthParameters")]}
          });
          fireauth.exportlib.exportFunction(fireauth.PhoneAuthProvider, "credential", fireauth.PhoneAuthProvider.credential, [fireauth.args.string("verificationId"), fireauth.args.string("verificationCode")]);
          fireauth.exportlib.exportPrototypeMethods(fireauth.PhoneAuthProvider.prototype, {
            verifyPhoneNumber: {
              name: "verifyPhoneNumber",
              args: [fireauth.args.string("phoneNumber"), fireauth.args.applicationVerifier()]
            }
          });
          fireauth.exportlib.exportPrototypeMethods(fireauth.AuthError.prototype, {
            toJSON: {
              name: "toJSON",
              args: [fireauth.args.string(null, true)]
            }
          });
          fireauth.exportlib.exportPrototypeMethods(fireauth.AuthErrorWithCredential.prototype, {
            toJSON: {
              name: "toJSON",
              args: [fireauth.args.string(null, true)]
            }
          });
          fireauth.exportlib.exportPrototypeMethods(fireauth.InvalidOriginError.prototype, {
            toJSON: {
              name: "toJSON",
              args: [fireauth.args.string(null, true)]
            }
          });
          fireauth.exportlib.exportPrototypeMethods(fireauth.RecaptchaVerifier.prototype, {
            clear: {
              name: "clear",
              args: []
            }, render: {name: "render", args: []}, verify: {name: "verify", args: []}
          });
          (function () {
            if (typeof firebase === "undefined" || !firebase.INTERNAL || !firebase.INTERNAL.registerService) throw new Error("Cannot find the firebase namespace; be sure to include " + "firebase-app.js before this library."); else {
              var factory = function (app, extendApp) {
                var auth = new fireauth.Auth(app);
                extendApp({
                  "INTERNAL": {
                    "getUid": goog.bind(auth.getUid, auth),
                    "getToken": goog.bind(auth.getIdTokenInternal, auth),
                    "addAuthTokenListener": goog.bind(auth.addAuthTokenListenerInternal, auth),
                    "removeAuthTokenListener": goog.bind(auth.removeAuthTokenListenerInternal,
                      auth)
                  }
                });
                return auth
              };
              var namespace = {"Auth": fireauth.Auth, "Error": fireauth.AuthError};
              fireauth.exportlib.exportFunction(namespace, "EmailAuthProvider", fireauth.EmailAuthProvider, []);
              fireauth.exportlib.exportFunction(namespace, "FacebookAuthProvider", fireauth.FacebookAuthProvider, []);
              fireauth.exportlib.exportFunction(namespace, "GithubAuthProvider", fireauth.GithubAuthProvider, []);
              fireauth.exportlib.exportFunction(namespace, "GoogleAuthProvider", fireauth.GoogleAuthProvider, []);
              fireauth.exportlib.exportFunction(namespace,
                "TwitterAuthProvider", fireauth.TwitterAuthProvider, []);
              fireauth.exportlib.exportFunction(namespace, "OAuthProvider", fireauth.OAuthProvider, [fireauth.args.string("providerId")]);
              fireauth.exportlib.exportFunction(namespace, "PhoneAuthProvider", fireauth.PhoneAuthProvider, [fireauth.args.firebaseAuth(true)]);
              fireauth.exportlib.exportFunction(namespace, "RecaptchaVerifier", fireauth.RecaptchaVerifier, [fireauth.args.or(fireauth.args.string(), fireauth.args.element(), "recaptchaContainer"), fireauth.args.object("recaptchaParameters",
                true), fireauth.args.firebaseApp(true)]);
              firebase.INTERNAL.registerService(fireauth.exportlib.AUTH_TYPE, factory, namespace, function (event, app) {
                if (event === "create") try {
                  app[fireauth.exportlib.AUTH_TYPE]()
                } catch (e) {
                }
              });
              firebase.INTERNAL.extendNamespace({"User": fireauth.AuthUser})
            }
          })();
        }).call(typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : {});

        /* WEBPACK VAR INJECTION */
      }.call(exports, __webpack_require__(19)))

      /***/
    })

  }, [76]);
} catch (error) {
  throw new Error(
    'Cannot instantiate firebase-auth.js - ' +
    'be sure to load firebase-app.js first.'
  )
}
//# sourceMappingURL=firebase-auth.js.map
