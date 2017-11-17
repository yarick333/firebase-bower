/*!
 * @license Firebase v4.6.2
 * Build: rev-61e817a
 * Terms: https://firebase.google.com/terms/
 */
try {
        webpackJsonpFirebase([1],{

/***/ 113:
/***/ (function(module, exports, __webpack_require__) {

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

__webpack_require__(114);


/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ../app/dist/esm/index.js + 1 modules
var esm = __webpack_require__(6);

// CONCATENATED MODULE: ../firestore/dist/esm/src/core/version.js
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

/** The semver (www.semver.org) version of the SDK. */
var SDK_VERSION = esm["default"].SDK_VERSION;

//# sourceMappingURL=version.js.map

// CONCATENATED MODULE: ../firestore/dist/esm/src/util/log.js
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
/* tslint:disable:no-console */

var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["DEBUG"] = 0] = "DEBUG";
    LogLevel[LogLevel["ERROR"] = 1] = "ERROR";
    LogLevel[LogLevel["SILENT"] = 2] = "SILENT";
})(LogLevel || (LogLevel = {}));
var logLevel = LogLevel.ERROR;
// Helper methods are needed because variables can't be exported as read/write
function getLogLevel() {
    return logLevel;
}
function setLogLevel(newLevel) {
    logLevel = newLevel;
}
function debug(tag, msg) {
    var obj = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        obj[_i - 2] = arguments[_i];
    }
    if (logLevel <= LogLevel.DEBUG) {
        var time = new Date().toISOString();
        var args = obj.map(argToString);
        console.log.apply(console, ["Firestore (" + SDK_VERSION + ") " + time + " [" + tag + "]: " + msg].concat(args));
    }
}
function log_error(msg) {
    var obj = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        obj[_i - 1] = arguments[_i];
    }
    if (logLevel <= LogLevel.ERROR) {
        var time = new Date().toISOString();
        var args = obj.map(argToString);
        console.error.apply(console, ["Firestore (" + SDK_VERSION + ") " + time + ": " + msg].concat(args));
    }
}
/**
 * Converts an additional log parameter to a string representation.
 */
function argToString(obj) {
    if (typeof obj === 'string') {
        return obj;
    }
    else {
        try {
            return JSON.stringify(obj);
        }
        catch (e) {
            // Converting to JSON failed, just log the object directly
            return obj;
        }
    }
}

//# sourceMappingURL=log.js.map

// CONCATENATED MODULE: ../firestore/dist/esm/src/util/assert.js
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


/**
 * Unconditionally fails, throwing an Error with the given message.
 *
 * Returns any so it can be used in expressions:
 * @example
 * let futureVar = fail('not implemented yet');
 */
function fail(failure) {
    // Log the failure in addition to throw an exception, just in case the
    // exception is swallowed.
    var message = "FIRESTORE (" + SDK_VERSION + ") INTERNAL ASSERTION FAILED: " + failure;
    log_error(message);
    // NOTE: We don't use FirestoreError here because these are internal failures
    // that cannot be handled by the user. (Also it would create a circular
    // dependency between the error and assert modules which doesn't work.)
    throw new Error(message);
}
/**
 * Fails if the given assertion condition is false, throwing an Error with the
 * given message if it did.
 */
function assert(assertion, message) {
    if (!assertion) {
        fail(message);
    }
}

//# sourceMappingURL=assert.js.map

// CONCATENATED MODULE: ../firestore/dist/esm/src/platform/platform.js
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

/**
 * Provides singleton helpers where setup code can inject a platform at runtime.
 * setPlatform needs to be set before Firestore is used and must be set exactly
 * once.
 */
var platform_PlatformSupport = /** @class */ (function () {
    function PlatformSupport() {
    }
    PlatformSupport.setPlatform = function (platform) {
        if (PlatformSupport.platform) {
            fail('Platform already defined');
        }
        PlatformSupport.platform = platform;
    };
    PlatformSupport.getPlatform = function () {
        if (!PlatformSupport.platform) {
            fail('Platform not set');
        }
        return PlatformSupport.platform;
    };
    return PlatformSupport;
}());

/**
 * Returns the representation of an empty "proto" byte string for the
 * platform.
 */
function emptyByteString() {
    return platform_PlatformSupport.getPlatform().emptyByteString;
}

//# sourceMappingURL=platform.js.map

// CONCATENATED MODULE: ../firestore/dist/esm/src/util/error.js
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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// TODO(mcg): Change to a string enum once we've upgraded to typescript 2.4.
//  tslint:disable-next-line:variable-name Intended to look like a TS 2.4 enum
var Code = {
    // Causes are copied from:
    // https://github.com/grpc/grpc/blob/bceec94ea4fc5f0085d81235d8e1c06798dc341a/include/grpc%2B%2B/impl/codegen/status_code_enum.h
    /** Not an error; returned on success. */
    OK: 'ok',
    /** The operation was cancelled (typically by the caller). */
    CANCELLED: 'cancelled',
    /** Unknown error or an error from a different error domain. */
    UNKNOWN: 'unknown',
    /**
     * Client specified an invalid argument. Note that this differs from
     * FAILED_PRECONDITION. INVALID_ARGUMENT indicates arguments that are
     * problematic regardless of the state of the system (e.g., a malformed file
     * name).
     */
    INVALID_ARGUMENT: 'invalid-argument',
    /**
     * Deadline expired before operation could complete. For operations that
     * change the state of the system, this error may be returned even if the
     * operation has completed successfully. For example, a successful response
     * from a server could have been delayed long enough for the deadline to
     * expire.
     */
    DEADLINE_EXCEEDED: 'deadline-exceeded',
    /** Some requested entity (e.g., file or directory) was not found. */
    NOT_FOUND: 'not-found',
    /**
     * Some entity that we attempted to create (e.g., file or directory) already
     * exists.
     */
    ALREADY_EXISTS: 'already-exists',
    /**
     * The caller does not have permission to execute the specified operation.
     * PERMISSION_DENIED must not be used for rejections caused by exhausting
     * some resource (use RESOURCE_EXHAUSTED instead for those errors).
     * PERMISSION_DENIED must not be used if the caller can not be identified
     * (use UNAUTHENTICATED instead for those errors).
     */
    PERMISSION_DENIED: 'permission-denied',
    /**
     * The request does not have valid authentication credentials for the
     * operation.
     */
    UNAUTHENTICATED: 'unauthenticated',
    /**
     * Some resource has been exhausted, perhaps a per-user quota, or perhaps the
     * entire file system is out of space.
     */
    RESOURCE_EXHAUSTED: 'resource-exhausted',
    /**
     * Operation was rejected because the system is not in a state required for
     * the operation's execution. For example, directory to be deleted may be
     * non-empty, an rmdir operation is applied to a non-directory, etc.
     *
     * A litmus test that may help a service implementor in deciding
     * between FAILED_PRECONDITION, ABORTED, and UNAVAILABLE:
     *  (a) Use UNAVAILABLE if the client can retry just the failing call.
     *  (b) Use ABORTED if the client should retry at a higher-level
     *      (e.g., restarting a read-modify-write sequence).
     *  (c) Use FAILED_PRECONDITION if the client should not retry until
     *      the system state has been explicitly fixed. E.g., if an "rmdir"
     *      fails because the directory is non-empty, FAILED_PRECONDITION
     *      should be returned since the client should not retry unless
     *      they have first fixed up the directory by deleting files from it.
     *  (d) Use FAILED_PRECONDITION if the client performs conditional
     *      REST Get/Update/Delete on a resource and the resource on the
     *      server does not match the condition. E.g., conflicting
     *      read-modify-write on the same resource.
     */
    FAILED_PRECONDITION: 'failed-precondition',
    /**
     * The operation was aborted, typically due to a concurrency issue like
     * sequencer check failures, transaction aborts, etc.
     *
     * See litmus test above for deciding between FAILED_PRECONDITION, ABORTED,
     * and UNAVAILABLE.
     */
    ABORTED: 'aborted',
    /**
     * Operation was attempted past the valid range. E.g., seeking or reading
     * past end of file.
     *
     * Unlike INVALID_ARGUMENT, this error indicates a problem that may be fixed
     * if the system state changes. For example, a 32-bit file system will
     * generate INVALID_ARGUMENT if asked to read at an offset that is not in the
     * range [0,2^32-1], but it will generate OUT_OF_RANGE if asked to read from
     * an offset past the current file size.
     *
     * There is a fair bit of overlap between FAILED_PRECONDITION and
     * OUT_OF_RANGE. We recommend using OUT_OF_RANGE (the more specific error)
     * when it applies so that callers who are iterating through a space can
     * easily look for an OUT_OF_RANGE error to detect when they are done.
     */
    OUT_OF_RANGE: 'out-of-range',
    /** Operation is not implemented or not supported/enabled in this service. */
    UNIMPLEMENTED: 'unimplemented',
    /**
     * Internal errors. Means some invariants expected by underlying System has
     * been broken. If you see one of these errors, Something is very broken.
     */
    INTERNAL: 'internal',
    /**
     * The service is currently unavailable. This is a most likely a transient
     * condition and may be corrected by retrying with a backoff.
     *
     * See litmus test above for deciding between FAILED_PRECONDITION, ABORTED,
     * and UNAVAILABLE.
     */
    UNAVAILABLE: 'unavailable',
    /** Unrecoverable data loss or corruption. */
    DATA_LOSS: 'data-loss'
};
/**
 * An error class used for Firestore-generated errors. Ideally we should be
 * using FirebaseError, but integrating with it is overly arduous at the moment,
 * so we define our own compatible error class (with a `name` of 'FirebaseError'
 * and compatible `code` and `message` fields.)
 */
var FirestoreError = /** @class */ (function (_super) {
    __extends(FirestoreError, _super);
    function FirestoreError(code, message) {
        var _this = _super.call(this, message) || this;
        _this.code = code;
        _this.message = message;
        _this.name = 'FirebaseError';
        // HACK: We write a toString property directly because Error is not a real
        // class and so inheritance does not work correctly. We could alternatively
        // do the same "back-door inheritance" trick that FirebaseError does.
        _this.toString = function () { return _this.name + ": [code=" + _this.code + "]: " + _this.message; };
        return _this;
    }
    return FirestoreError;
}(Error));


//# sourceMappingURL=error.js.map

// CONCATENATED MODULE: ../firestore/dist/esm/src/util/api.js
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
// We are doing some heavy reflective stuff, lots of any casting necessary
/* tslint:disable:no-any */

/**
 * Helper function to prevent instantiation through the constructor.
 *
 * This method creates a new constructor that throws when it's invoked.
 * The prototype of that constructor is then set to the prototype of the hidden
 * "class" to expose all the prototype methods and allow for instanceof
 * checks.
 *
 * To also make all the static methods available, all properties of the
 * original constructor are copied to the new constructor.
 */
function makeConstructorPrivate(cls, optionalMessage) {
    function PublicConstructor() {
        var error = 'This constructor is private.';
        if (optionalMessage) {
            error += ' ';
            error += optionalMessage;
        }
        throw new FirestoreError(Code.INVALID_ARGUMENT, error);
    }
    // Make sure instanceof checks work and all methods are exposed on the public
    // constructor
    PublicConstructor.prototype = cls.prototype;
    // Copy any static methods/members
    for (var staticProperty in cls) {
        if (cls.hasOwnProperty(staticProperty)) {
            PublicConstructor[staticProperty] = cls[staticProperty];
        }
    }
    return PublicConstructor;
}

//# sourceMappingURL=api.js.map

// CONCATENATED MODULE: ../firestore/dist/esm/src/util/obj.js
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

function contains(obj, key) {
    return Object.prototype.hasOwnProperty.call(obj, key);
}
function get(obj, key) {
    return Object.prototype.hasOwnProperty.call(obj, key) ? obj[key] : null;
}
function obj_size(obj) {
    var count = 0;
    for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            count++;
        }
    }
    return count;
}
/** Returns the given value if it's defined or the defaultValue otherwise. */
function defaulted(value, defaultValue) {
    return value !== undefined ? value : defaultValue;
}
function forEachNumber(obj, fn) {
    for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            var num = parseInt(key, 10);
            if (!isNaN(num)) {
                fn(num, obj[key]);
            }
        }
    }
}
function forEach(obj, fn) {
    for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            fn(key, obj[key]);
        }
    }
}
function lookupOrInsert(obj, key, valFn) {
    if (!contains(obj, key)) {
        obj[key] = valFn();
    }
    return obj[key];
}
function isEmpty(obj) {
    assert(obj != null && typeof obj === 'object', 'isEmpty() expects object parameter.');
    for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            return false;
        }
    }
    return true;
}
function shallowCopy(obj) {
    assert(obj && typeof obj === 'object', 'shallowCopy() expects object parameter.');
    var result = {};
    for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            result[key] = obj[key];
        }
    }
    return result;
}

//# sourceMappingURL=obj.js.map

// CONCATENATED MODULE: ../firestore/dist/esm/src/util/input_validation.js
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



/**
 * Validates the invocation of functionName has the exact number of arguments.
 *
 * Forward the magic "arguments" variable as second parameter on which the
 * parameter validation is performed:
 * validateExactNumberOfArgs('myFunction', arguments, 2);
 */
function validateExactNumberOfArgs(functionName, args, numberOfArgs) {
    if (args.length !== numberOfArgs) {
        throw new FirestoreError(Code.INVALID_ARGUMENT, "Function " + functionName + "() requires " +
            formatPlural(numberOfArgs, 'argument') +
            ', but was called with ' +
            formatPlural(args.length, 'argument') +
            '.');
    }
}
/**
 * Validates the invocation of functionName has at least the provided number of
 * arguments (but can have many more).
 *
 * Forward the magic "arguments" variable as second parameter on which the
 * parameter validation is performed:
 * validateAtLeastNumberOfArgs('myFunction', arguments, 2);
 */
function validateAtLeastNumberOfArgs(functionName, args, minNumberOfArgs) {
    if (args.length < minNumberOfArgs) {
        throw new FirestoreError(Code.INVALID_ARGUMENT, "Function " + functionName + "() requires at least " +
            formatPlural(minNumberOfArgs, 'argument') +
            ', but was called with ' +
            formatPlural(args.length, 'argument') +
            '.');
    }
}
/**
 * Validates the invocation of functionName has number of arguments between
 * the values provided.
 *
 * Forward the magic "arguments" variable as second parameter on which the
 * parameter validation is performed:
 * validateBetweenNumberOfArgs('myFunction', arguments, 2, 3);
 */
function validateBetweenNumberOfArgs(functionName, args, minNumberOfArgs, maxNumberOfArgs) {
    if (args.length < minNumberOfArgs || args.length > maxNumberOfArgs) {
        throw new FirestoreError(Code.INVALID_ARGUMENT, "Function " + functionName + "() requires between " + minNumberOfArgs + " and " +
            (maxNumberOfArgs + " arguments, but was called with ") +
            formatPlural(args.length, 'argument') +
            '.');
    }
}
/**
 * Validates the provided argument is an array and has as least the expected
 * number of elements.
 */
function validateNamedArrayAtLeastNumberOfElements(functionName, value, name, minNumberOfElements) {
    if (!(value instanceof Array) || value.length < minNumberOfElements) {
        throw new FirestoreError(Code.INVALID_ARGUMENT, "Function " + functionName + "() requires its " + name + " argument to be an " +
            'array with at least ' +
            (formatPlural(minNumberOfElements, 'element') + "."));
    }
}
/**
 * Validates the provided positional argument has the native JavaScript type
 * using typeof checks.
 */
function validateArgType(functionName, type, position, argument) {
    validateType(functionName, type, ordinal(position) + " argument", argument);
}
/**
 * Validates the provided argument has the native JavaScript type using
 * typeof checks or is undefined.
 */
function validateOptionalArgType(functionName, type, position, argument) {
    if (argument !== undefined) {
        validateArgType(functionName, type, position, argument);
    }
}
/**
 * Validates the provided named option has the native JavaScript type using
 * typeof checks.
 */
function validateNamedType(functionName, type, optionName, argument) {
    validateType(functionName, type, optionName + " option", argument);
}
/**
 * Validates the provided named option has the native JavaScript type using
 * typeof checks or is undefined.
 */
function validateNamedOptionalType(functionName, type, optionName, argument) {
    if (argument !== undefined) {
        validateNamedType(functionName, type, optionName, argument);
    }
}
/** Helper to validate the type of a provided input. */
function validateType(functionName, type, inputName, input) {
    if (typeof input !== type || (type === 'object' && !isPlainObject(input))) {
        var description = valueDescription(input);
        throw new FirestoreError(Code.INVALID_ARGUMENT, "Function " + functionName + "() requires its " + inputName + " " +
            ("to be of type " + type + ", but it was: " + description));
    }
}
/**
 * Returns true iff it's a non-null object without a custom prototype
 * (i.e. excludes Array, Date, etc.).
 */
function isPlainObject(input) {
    return (typeof input === 'object' &&
        input !== null &&
        Object.getPrototypeOf(input) === Object.prototype);
}
/** Returns a string describing the type / value of the provided input. */
function valueDescription(input) {
    if (input === undefined) {
        return 'undefined';
    }
    else if (input === null) {
        return 'null';
    }
    else if (typeof input === 'string') {
        if (input.length > 20) {
            input = input.substring(0, 20) + "...";
        }
        return JSON.stringify(input);
    }
    else if (typeof input === 'number' || typeof input === 'boolean') {
        return '' + input;
    }
    else if (typeof input === 'object') {
        if (input instanceof Array) {
            return 'an array';
        }
        else {
            var customObjectName = tryGetCustomObjectType(input);
            if (customObjectName) {
                return "a custom " + customObjectName + " object";
            }
            else {
                return 'an object';
            }
        }
    }
    else if (typeof input === 'function') {
        return 'a function';
    }
    else {
        return fail('Unknown wrong type: ' + typeof input);
    }
}
/** Hacky method to try to get the constructor name for an object. */
function tryGetCustomObjectType(input) {
    if (input.constructor) {
        var funcNameRegex = /function\s+([^\s(]+)\s*\(/;
        var results = funcNameRegex.exec(input.constructor.toString());
        if (results && results.length > 1) {
            return results[1];
        }
    }
    return null;
}
/** Validates the provided argument is defined. */
function validateDefined(functionName, position, argument) {
    if (argument === undefined) {
        throw new FirestoreError(Code.INVALID_ARGUMENT, "Function " + functionName + "() requires a valid " + ordinal(position) + " " +
            "argument, but it was undefined.");
    }
}
/**
 * Validates the provided positional argument is an object, and its keys and
 * values match the expected keys and types provided in optionTypes.
 */
function validateOptionNames(functionName, options, optionNames) {
    forEach(options, function (key, _) {
        if (optionNames.indexOf(key) < 0) {
            throw new FirestoreError(Code.INVALID_ARGUMENT, "Unknown option '" + key + "' passed to function " + functionName + "(). " +
                'Available options: ' +
                optionNames.join(', '));
        }
    });
}
/**
 * Helper method to throw an error that the provided argument did not pass
 * an instanceof check.
 */
function invalidClassError(functionName, type, position, argument) {
    var description = valueDescription(argument);
    return new FirestoreError(Code.INVALID_ARGUMENT, "Function " + functionName + "() requires its " + ordinal(position) + " " +
        ("argument to be a " + type + ", but it was: " + description));
}
/** Converts a number to its english word representation */
function ordinal(num) {
    switch (num) {
        case 1:
            return 'first';
        case 2:
            return 'second';
        case 3:
            return 'third';
        default:
            return num + 'th';
    }
}
/**
 * Formats the given word as plural conditionally given the preceding number.
 */
function formatPlural(num, str) {
    return num + " " + str + (num === 1 ? '' : 's');
}

//# sourceMappingURL=input_validation.js.map

// CONCATENATED MODULE: ../firestore/dist/esm/src/util/misc.js
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

// tslint:disable-next-line:class-as-namespace
var misc_AutoId = /** @class */ (function () {
    function AutoId() {
    }
    AutoId.newId = function () {
        // Alphanumeric characters
        var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var autoId = '';
        for (var i = 0; i < 20; i++) {
            autoId += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        assert(autoId.length === 20, 'Invalid auto ID: ' + autoId);
        return autoId;
    };
    return AutoId;
}());

function primitiveComparator(left, right) {
    if (left < right)
        return -1;
    if (left > right)
        return 1;
    return 0;
}
/** Helper to compare nullable (or undefined-able) objects using equals(). */
function equals(left, right) {
    if (left !== null && left !== undefined) {
        return !!(right && left.equals(right));
    }
    else {
        // HACK: Explicitly cast since TypeScript's type narrowing apparently isn't
        // smart enough.
        return left === right;
    }
}
/** Helper to compare arrays using equals(). */
function arrayEquals(left, right) {
    if (left.length !== right.length) {
        return false;
    }
    for (var i = 0; i < left.length; i++) {
        if (!left[i].equals(right[i])) {
            return false;
        }
    }
    return true;
}
/**
 * Returns the largest lexicographically smaller string of equal or smaller
 * length. Returns an empty string if there is no such predecessor (if the input
 * is empty).
 *
 * Strings returned from this method can be invalid UTF-16 but this is sufficent
 * in use for indexeddb because that depends on lexicographical ordering but
 * shouldn't be used elsewhere.
 */
function immediatePredecessor(s) {
    // We can decrement the last character in the string and be done
    // unless that character is 0 (0x0000), in which case we have to erase the
    // last character.
    var lastIndex = s.length - 1;
    if (s.length === 0) {
        // Special case the empty string.
        return '';
    }
    else if (s.charAt(lastIndex) === '\0') {
        return s.substring(0, lastIndex);
    }
    else {
        return (s.substring(0, lastIndex) +
            String.fromCharCode(s.charCodeAt(lastIndex) - 1));
    }
}
/**
 * Returns the immediate lexicographically-following string. This is useful to
 * construct an inclusive range for indexeddb iterators.
 */
function immediateSuccessor(s) {
    // Return the input string, with an additional NUL byte appended.
    return s + '\0';
}

//# sourceMappingURL=misc.js.map

// CONCATENATED MODULE: ../firestore/dist/esm/src/api/blob.js
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





/** Helper function to assert Uint8Array is available at runtime. */
function assertUint8ArrayAvailable() {
    if (typeof Uint8Array === 'undefined') {
        throw new FirestoreError(Code.UNIMPLEMENTED, 'Uint8Arrays are not available in this environment.');
    }
}
/** Helper function to assert Base64 functions are available at runtime. */
function assertBase64Available() {
    if (!platform_PlatformSupport.getPlatform().base64Available) {
        throw new FirestoreError(Code.UNIMPLEMENTED, 'Blobs are unavailable in Firestore in this environment.');
    }
}
/**
 * Immutable class holding a blob (binary data).
 * This class is directly exposed in the public API.
 *
 * Note that while you can't hide the constructor in JavaScript code, we are
 * using the hack above to make sure no-one outside this module can call it.
 */
var blob_Blob = /** @class */ (function () {
    function Blob(binaryString) {
        assertBase64Available();
        this._binaryString = binaryString;
    }
    Blob.fromBase64String = function (base64) {
        validateExactNumberOfArgs('Blob.fromBase64String', arguments, 1);
        validateArgType('Blob.fromBase64String', 'string', 1, base64);
        assertBase64Available();
        try {
            var binaryString = platform_PlatformSupport.getPlatform().atob(base64);
            return new Blob(binaryString);
        }
        catch (e) {
            throw new FirestoreError(Code.INVALID_ARGUMENT, 'Failed to construct Blob from Base64 string: ' + e);
        }
    };
    Blob.fromUint8Array = function (array) {
        validateExactNumberOfArgs('Blob.fromUint8Array', arguments, 1);
        assertUint8ArrayAvailable();
        if (!(array instanceof Uint8Array)) {
            throw invalidClassError('Blob.fromUint8Array', 'Uint8Array', 1, array);
        }
        // We can't call array.map directly because it expects the return type to
        // be a Uint8Array, whereas we can convert it to a regular array by invoking
        // map on the Array prototype.
        var binaryString = Array.prototype.map
            .call(array, function (char) {
            return String.fromCharCode(char);
        })
            .join('');
        return new Blob(binaryString);
    };
    Blob.prototype.toBase64 = function () {
        validateExactNumberOfArgs('Blob.toBase64', arguments, 0);
        assertBase64Available();
        return platform_PlatformSupport.getPlatform().btoa(this._binaryString);
    };
    Blob.prototype.toUint8Array = function () {
        validateExactNumberOfArgs('Blob.toUint8Array', arguments, 0);
        assertUint8ArrayAvailable();
        var buffer = new Uint8Array(this._binaryString.length);
        for (var i = 0; i < this._binaryString.length; i++) {
            buffer[i] = this._binaryString.charCodeAt(i);
        }
        return buffer;
    };
    Blob.prototype.toString = function () {
        return 'Blob(base64: ' + this.toBase64() + ')';
    };
    /**
     * Actually private to JS consumers of our API, so this function is prefixed
     * with an underscore.
     */
    Blob.prototype._equals = function (other) {
        return this._binaryString === other._binaryString;
    };
    /**
     * Actually private to JS consumers of our API, so this function is prefixed
     * with an underscore.
     */
    Blob.prototype._compareTo = function (other) {
        return primitiveComparator(this._binaryString, other._binaryString);
    };
    return Blob;
}());

// Public instance that disallows construction at runtime. This constructor is
// used when exporting Blob on firebase.firestore.Blob and will be called Blob
// publicly. Internally we still use Blob which has a type checked private
// constructor. Note that Blob and PublicBlob can be used interchangeably in
// instanceof checks.
// For our internal TypeScript code PublicBlob doesn't exist as a type, and so
// we need to use Blob as type and export it too.
// tslint:disable-next-line:variable-name We're treating this as a class name.
var PublicBlob = makeConstructorPrivate(blob_Blob, 'Use Blob.fromUint8Array() or Blob.fromBase64String() instead.');

//# sourceMappingURL=blob.js.map

// CONCATENATED MODULE: ../firestore/dist/esm/src/api/geo_point.js
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



/**
 * Immutable class representing a geo point as latitude-longitude pair.
 * This class is directly exposed in the public API, including its constructor.
 */
var geo_point_GeoPoint = /** @class */ (function () {
    function GeoPoint(latitude, longitude) {
        validateExactNumberOfArgs('GeoPoint', arguments, 2);
        validateArgType('GeoPoint', 'number', 1, latitude);
        validateArgType('GeoPoint', 'number', 2, longitude);
        if (!isFinite(latitude) || latitude < -90 || latitude > 90) {
            throw new FirestoreError(Code.INVALID_ARGUMENT, 'Latitude must be a number between -90 and 90, but was: ' + latitude);
        }
        if (!isFinite(longitude) || longitude < -180 || longitude > 180) {
            throw new FirestoreError(Code.INVALID_ARGUMENT, 'Longitude must be a number between -180 and 180, but was: ' + longitude);
        }
        this._lat = latitude;
        this._long = longitude;
    }
    Object.defineProperty(GeoPoint.prototype, "latitude", {
        /**
         * Returns the latitude of this geo point, a number between -90 and 90.
         */
        get: function () {
            return this._lat;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GeoPoint.prototype, "longitude", {
        /**
         * Returns the longitude of this geo point, a number between -180 and 180.
         */
        get: function () {
            return this._long;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Actually private to JS consumers of our API, so this function is prefixed
     * with an underscore.
     */
    GeoPoint.prototype._equals = function (other) {
        return this._lat === other._lat && this._long === other._long;
    };
    /**
     * Actually private to JS consumers of our API, so this function is prefixed
     * with an underscore.
     */
    GeoPoint.prototype._compareTo = function (other) {
        return (primitiveComparator(this._lat, other._lat) ||
            primitiveComparator(this._long, other._long));
    };
    return GeoPoint;
}());


//# sourceMappingURL=geo_point.js.map

// CONCATENATED MODULE: ../firestore/dist/esm/src/core/database_info.js
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

var DatabaseInfo = /** @class */ (function () {
    /**
     * Constructs a DatabaseInfo using the provided host, databaseId and
     * persistenceKey.
     *
     * @param databaseId The database to use.
     * @param persistenceKey A unique identifier for this Firestore's local
     * storage (used in conjunction with the databaseId).
     * @param host The Firestore backend host to connect to.
     * @param ssl Whether to use SSL when connecting.
     */
    function DatabaseInfo(databaseId, persistenceKey, host, ssl) {
        this.databaseId = databaseId;
        this.persistenceKey = persistenceKey;
        this.host = host;
        this.ssl = ssl;
    }
    return DatabaseInfo;
}());

/** The default database name for a project. */
var DEFAULT_DATABASE_NAME = '(default)';
/** Represents the database ID a Firestore client is associated with. */
var database_info_DatabaseId = /** @class */ (function () {
    function DatabaseId(projectId, database) {
        this.projectId = projectId;
        this.database = database ? database : DEFAULT_DATABASE_NAME;
    }
    Object.defineProperty(DatabaseId.prototype, "isDefaultDatabase", {
        get: function () {
            return this.database === DEFAULT_DATABASE_NAME;
        },
        enumerable: true,
        configurable: true
    });
    DatabaseId.prototype.equals = function (other) {
        return (other instanceof DatabaseId &&
            other.projectId === this.projectId &&
            other.database === this.database);
    };
    DatabaseId.prototype.compareTo = function (other) {
        return (primitiveComparator(this.projectId, other.projectId) ||
            primitiveComparator(this.database, other.database));
    };
    return DatabaseId;
}());


//# sourceMappingURL=database_info.js.map

// CONCATENATED MODULE: ../firestore/dist/esm/src/model/path.js
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
var path___extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var DOCUMENT_KEY_NAME = '__name__';
/**
 * Path represents an ordered sequence of string segments.
 */
var path_Path = /** @class */ (function () {
    function Path(segments, offset, length) {
        this.init(segments, offset, length);
    }
    /**
     * An initialization method that can be called from outside the constructor.
     * We need this so that we can have a non-static construct method that returns
     * the polymorphic `this` type.
     */
    Path.prototype.init = function (segments, offset, length) {
        if (offset === undefined) {
            offset = 0;
        }
        else if (offset > segments.length) {
            fail('offset ' + offset + ' out of range ' + segments.length);
        }
        if (length === undefined) {
            length = segments.length - offset;
        }
        else if (length > segments.length - offset) {
            fail('length ' + length + ' out of range ' + (segments.length - offset));
        }
        this.segments = segments;
        this.offset = offset;
        this.len = length;
    };
    /**
     * Constructs a new instance of Path using the same concrete type as `this`.
     * We need this instead of using the normal constructor, because polymorphic
     * `this` doesn't work on static methods.
     */
    Path.prototype.construct = function (segments, offset, length) {
        var path = Object.create(Object.getPrototypeOf(this));
        path.init(segments, offset, length);
        return path;
    };
    Object.defineProperty(Path.prototype, "length", {
        get: function () {
            return this.len;
        },
        enumerable: true,
        configurable: true
    });
    Path.prototype.equals = function (other) {
        return Path.comparator(this, other) === 0;
    };
    Path.prototype.child = function (nameOrPath) {
        var segments = this.segments.slice(this.offset, this.limit());
        if (nameOrPath instanceof Path) {
            nameOrPath.forEach(function (segment) {
                segments.push(segment);
            });
        }
        else if (typeof nameOrPath === 'string') {
            segments.push(nameOrPath);
        }
        else {
            fail('Unknown parameter type for Path.child(): ' + nameOrPath);
        }
        return this.construct(segments);
    };
    /** The index of one past the last segment of the path. */
    Path.prototype.limit = function () {
        return this.offset + this.length;
    };
    Path.prototype.popFirst = function (size) {
        size = size === undefined ? 1 : size;
        assert(this.length >= size, "Can't call popFirst() with less segments");
        return this.construct(this.segments, this.offset + size, this.length - size);
    };
    Path.prototype.popLast = function () {
        assert(!this.isEmpty(), "Can't call popLast() on empty path");
        return this.construct(this.segments, this.offset, this.length - 1);
    };
    Path.prototype.firstSegment = function () {
        assert(!this.isEmpty(), "Can't call firstSegment() on empty path");
        return this.segments[this.offset];
    };
    Path.prototype.lastSegment = function () {
        assert(!this.isEmpty(), "Can't call lastSegment() on empty path");
        return this.segments[this.limit() - 1];
    };
    Path.prototype.get = function (index) {
        assert(index < this.length, 'Index out of range');
        return this.segments[this.offset + index];
    };
    Path.prototype.isEmpty = function () {
        return this.length === 0;
    };
    Path.prototype.isPrefixOf = function (other) {
        if (other.length < this.length) {
            return false;
        }
        for (var i = 0; i < this.length; i++) {
            if (this.get(i) !== other.get(i)) {
                return false;
            }
        }
        return true;
    };
    Path.prototype.forEach = function (fn) {
        for (var i = this.offset, end = this.limit(); i < end; i++) {
            fn(this.segments[i]);
        }
    };
    Path.prototype.toArray = function () {
        return this.segments.slice(this.offset, this.limit());
    };
    Path.comparator = function (p1, p2) {
        var len = Math.min(p1.length, p2.length);
        for (var i = 0; i < len; i++) {
            var left = p1.get(i);
            var right = p2.get(i);
            if (left < right)
                return -1;
            if (left > right)
                return 1;
        }
        if (p1.length < p2.length)
            return -1;
        if (p1.length > p2.length)
            return 1;
        return 0;
    };
    return Path;
}());

/**
 * A slash-separated path for navigating resources (documents and collections)
 * within Firestore.
 */
var path_ResourcePath = /** @class */ (function (_super) {
    path___extends(ResourcePath, _super);
    function ResourcePath() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ResourcePath.prototype.canonicalString = function () {
        // NOTE: The client is ignorant of any path segments containing escape
        // sequences (e.g. __id123__) and just passes them through raw (they exist
        // for legacy reasons and should not be used frequently).
        return this.toArray().join('/');
    };
    ResourcePath.prototype.toString = function () {
        return this.canonicalString();
    };
    /**
     * Creates a resource path from the given slash-delimited string.
     */
    ResourcePath.fromString = function (path) {
        // NOTE: The client is ignorant of any path segments containing escape
        // sequences (e.g. __id123__) and just passes them through raw (they exist
        // for legacy reasons and should not be used frequently).
        if (path.indexOf('//') >= 0) {
            throw new FirestoreError(Code.INVALID_ARGUMENT, "Invalid path (" + path + "). Paths must not contain // in them.");
        }
        // We may still have an empty segment at the beginning or end if they had a
        // leading or trailing slash (which we allow).
        var segments = path.split('/').filter(function (segment) { return segment.length > 0; });
        return new ResourcePath(segments);
    };
    ResourcePath.EMPTY_PATH = new ResourcePath([]);
    return ResourcePath;
}(path_Path));

var identifierRegExp = /^[_a-zA-Z][_a-zA-Z0-9]*$/;
/** A dot-separated path for navigating sub-objects within a document. */
var path_FieldPath = /** @class */ (function (_super) {
    path___extends(FieldPath, _super);
    function FieldPath() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns true if the string could be used as a segment in a field path
     * without escaping.
     */
    FieldPath.isValidIdentifier = function (segment) {
        return identifierRegExp.test(segment);
    };
    FieldPath.prototype.canonicalString = function () {
        return this.toArray()
            .map(function (str) {
            str = str.replace('\\', '\\\\').replace('`', '\\`');
            if (!FieldPath.isValidIdentifier(str)) {
                str = '`' + str + '`';
            }
            return str;
        })
            .join('.');
    };
    FieldPath.prototype.toString = function () {
        return this.canonicalString();
    };
    /**
     * Returns true if this field references the key of a document.
     */
    FieldPath.prototype.isKeyField = function () {
        return this.length === 1 && this.get(0) === DOCUMENT_KEY_NAME;
    };
    /**
     * The field designating the key of a document.
     */
    FieldPath.keyField = function () {
        return new FieldPath([DOCUMENT_KEY_NAME]);
    };
    /**
     * Parses a field string from the given server-formatted string.
     *
     * - Splitting the empty string is not allowed (for now at least).
     * - Empty segments within the string (e.g. if there are two consecutive
     *   separators) are not allowed.
     *
     * TODO(b/37244157): we should make this more strict. Right now, it allows
     * non-identifier path components, even if they aren't escaped.
     */
    FieldPath.fromServerFormat = function (path) {
        var segments = [];
        var current = '';
        var i = 0;
        var addCurrentSegment = function () {
            if (current.length === 0) {
                throw new FirestoreError(Code.INVALID_ARGUMENT, "Invalid field path (" + path + "). Paths must not be empty, begin " +
                    "with '.', end with '.', or contain '..'");
            }
            segments.push(current);
            current = '';
        };
        var inBackticks = false;
        while (i < path.length) {
            var c = path[i];
            if (c === '\\') {
                if (i + 1 === path.length) {
                    throw new FirestoreError(Code.INVALID_ARGUMENT, 'Path has trailing escape character: ' + path);
                }
                var next = path[i + 1];
                if (!(next === '\\' || next === '.' || next === '`')) {
                    throw new FirestoreError(Code.INVALID_ARGUMENT, 'Path has invalid escape sequence: ' + path);
                }
                current += next;
                i += 2;
            }
            else if (c === '`') {
                inBackticks = !inBackticks;
                i++;
            }
            else if (c === '.' && !inBackticks) {
                addCurrentSegment();
                i++;
            }
            else {
                current += c;
                i++;
            }
        }
        addCurrentSegment();
        if (inBackticks) {
            throw new FirestoreError(Code.INVALID_ARGUMENT, 'Unterminated ` in path: ' + path);
        }
        return new FieldPath(segments);
    };
    FieldPath.EMPTY_PATH = new FieldPath([]);
    return FieldPath;
}(path_Path));


//# sourceMappingURL=path.js.map

// CONCATENATED MODULE: ../firestore/dist/esm/src/model/document_key.js
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


var document_key_DocumentKey = /** @class */ (function () {
    function DocumentKey(path) {
        this.path = path;
        assert(DocumentKey.isDocumentKey(path), 'Invalid DocumentKey with an odd number of segments: ' +
            path.toArray().join('/'));
    }
    DocumentKey.prototype.equals = function (other) {
        return (other !== null && path_ResourcePath.comparator(this.path, other.path) === 0);
    };
    DocumentKey.prototype.toString = function () {
        return this.path.toString();
    };
    DocumentKey.comparator = function (k1, k2) {
        return path_ResourcePath.comparator(k1.path, k2.path);
    };
    DocumentKey.isDocumentKey = function (path) {
        return path.length % 2 === 0;
    };
    /**
     * Creates and returns a new document key with the given segments.
     *
     * @param path The segments of the path to the document
     * @return A new instance of DocumentKey
     */
    DocumentKey.fromSegments = function (segments) {
        return new DocumentKey(new path_ResourcePath(segments.slice()));
    };
    /**
     * Creates and returns a new document key using '/' to split the string into
     * segments.
     *
     * @param path The slash-separated path string to the document
     * @return A new instance of DocumentKey
     */
    DocumentKey.fromPathString = function (path) {
        return new DocumentKey(path_ResourcePath.fromString(path));
    };
    DocumentKey.EMPTY = new DocumentKey(new path_ResourcePath([]));
    return DocumentKey;
}());


//# sourceMappingURL=document_key.js.map

// CONCATENATED MODULE: ../firestore/dist/esm/src/model/document.js
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


var document_Document = /** @class */ (function () {
    function Document(key, version, data, options) {
        this.key = key;
        this.version = version;
        this.data = data;
        this.hasLocalMutations = options.hasLocalMutations;
    }
    Document.prototype.field = function (path) {
        return this.data.field(path);
    };
    Document.prototype.fieldValue = function (path) {
        var field = this.field(path);
        return field ? field.value() : undefined;
    };
    Document.prototype.value = function () {
        return this.data.value();
    };
    Document.prototype.equals = function (other) {
        return (other instanceof Document &&
            this.key.equals(other.key) &&
            this.version.equals(other.version) &&
            this.data.equals(other.data) &&
            this.hasLocalMutations === other.hasLocalMutations);
    };
    Document.prototype.toString = function () {
        return ("Document(" + this.key + ", " + this.version + ", " + this.data.toString() + ", " +
            ("{hasLocalMutations: " + this.hasLocalMutations + "})"));
    };
    Document.compareByKey = function (d1, d2) {
        return document_key_DocumentKey.comparator(d1.key, d2.key);
    };
    Document.compareByField = function (field, d1, d2) {
        var v1 = d1.field(field);
        var v2 = d2.field(field);
        if (v1 !== undefined && v2 !== undefined) {
            return v1.compareTo(v2);
        }
        else {
            return fail("Trying to compare documents on fields that don't exist");
        }
    };
    return Document;
}());

/**
 * A class representing a deleted document.
 * Version is set to 0 if we don't point to any specific time, otherwise it
 * denotes time we know it didn't exist at.
 */
var document_NoDocument = /** @class */ (function () {
    function NoDocument(key, version) {
        this.key = key;
        this.version = version;
    }
    NoDocument.prototype.toString = function () {
        return "NoDocument(" + this.key + ", " + this.version + ")";
    };
    NoDocument.prototype.equals = function (other) {
        return (other && other.version.equals(this.version) && other.key.equals(this.key));
    };
    NoDocument.compareByKey = function (d1, d2) {
        return document_key_DocumentKey.comparator(d1.key, d2.key);
    };
    return NoDocument;
}());


//# sourceMappingURL=document.js.map

// CONCATENATED MODULE: ../firestore/dist/esm/src/util/sorted_map.js
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

// An immutable sorted map implementation, based on a Left-leaning Red-Black
// tree.
var sorted_map_SortedMap = /** @class */ (function () {
    function SortedMap(comparator, root) {
        this.comparator = comparator;
        this.root = root ? root : sorted_map_LLRBNode.EMPTY;
    }
    // Returns a copy of the map, with the specified key/value added or replaced.
    SortedMap.prototype.insert = function (key, value) {
        return new SortedMap(this.comparator, this.root
            .insert(key, value, this.comparator)
            .copy(null, null, sorted_map_LLRBNode.BLACK, null, null));
    };
    // Returns a copy of the map, with the specified key removed.
    SortedMap.prototype.remove = function (key) {
        return new SortedMap(this.comparator, this.root
            .remove(key, this.comparator)
            .copy(null, null, sorted_map_LLRBNode.BLACK, null, null));
    };
    // Returns the value of the node with the given key, or null.
    SortedMap.prototype.get = function (key) {
        var node = this.root;
        while (!node.isEmpty()) {
            var cmp = this.comparator(key, node.key);
            if (cmp === 0) {
                return node.value;
            }
            else if (cmp < 0) {
                node = node.left;
            }
            else if (cmp > 0) {
                node = node.right;
            }
        }
        return null;
    };
    // Returns the key of the item *before* the specified key, or null if key is
    // the first item.
    SortedMap.prototype.getPredecessorKey = function (key) {
        var node = this.root;
        var rightParent = null;
        while (!node.isEmpty()) {
            var cmp = this.comparator(key, node.key);
            if (cmp === 0) {
                if (!node.left.isEmpty()) {
                    node = node.left;
                    while (!node.right.isEmpty())
                        node = node.right;
                    return node.key;
                }
                else if (rightParent) {
                    return rightParent.key;
                }
                else {
                    return null; // first item.
                }
            }
            else if (cmp < 0) {
                node = node.left;
            }
            else if (cmp > 0) {
                rightParent = node;
                node = node.right;
            }
        }
        throw fail('Attempted to find predecessor key for a nonexistent key.' +
            '  What gives?');
    };
    // Returns the index of the element in this sorted map, or -1 if it doesn't
    // exist.
    SortedMap.prototype.indexOf = function (key) {
        // Number of nodes that were pruned when descending right
        var prunedNodes = 0;
        var node = this.root;
        while (!node.isEmpty()) {
            var cmp = this.comparator(key, node.key);
            if (cmp === 0) {
                return prunedNodes + node.left.size;
            }
            else if (cmp < 0) {
                node = node.left;
            }
            else {
                // Count all nodes left of the node plus the node itself
                prunedNodes += node.left.size + 1;
                node = node.right;
            }
        }
        // Node not found
        return -1;
    };
    SortedMap.prototype.isEmpty = function () {
        return this.root.isEmpty();
    };
    Object.defineProperty(SortedMap.prototype, "size", {
        // Returns the total number of nodes in the map.
        get: function () {
            return this.root.size;
        },
        enumerable: true,
        configurable: true
    });
    // Returns the minimum key in the map.
    SortedMap.prototype.minKey = function () {
        return this.root.minKey();
    };
    // Returns the maximum key in the map.
    SortedMap.prototype.maxKey = function () {
        return this.root.maxKey();
    };
    // Traverses the map in key order and calls the specified action function
    // for each key/value pair. If action returns true, traversal is aborted.
    // Returns the first truthy value returned by action, or the last falsey
    // value returned by action.
    SortedMap.prototype.inorderTraversal = function (action) {
        return this.root.inorderTraversal(action);
    };
    SortedMap.prototype.forEach = function (fn) {
        this.inorderTraversal(function (k, v) {
            fn(k, v);
            return false;
        });
    };
    // Traverses the map in reverse key order and calls the specified action
    // function for each key/value pair. If action returns true, traversal is
    // aborted.
    // Returns the first truthy value returned by action, or the last falsey
    // value returned by action.
    SortedMap.prototype.reverseTraversal = function (action) {
        return this.root.reverseTraversal(action);
    };
    SortedMap.prototype.getIterator = function (resultGenerator) {
        return new sorted_map_SortedMapIterator(this.root, null, this.comparator, false, resultGenerator);
    };
    SortedMap.prototype.getIteratorFrom = function (key, resultGenerator) {
        return new sorted_map_SortedMapIterator(this.root, key, this.comparator, false, resultGenerator);
    };
    SortedMap.prototype.getReverseIterator = function (resultGenerator) {
        return new sorted_map_SortedMapIterator(this.root, null, this.comparator, true, resultGenerator);
    };
    SortedMap.prototype.getReverseIteratorFrom = function (key, resultGenerator) {
        return new sorted_map_SortedMapIterator(this.root, key, this.comparator, true, resultGenerator);
    };
    return SortedMap;
}()); // end SortedMap

// An iterator over an LLRBNode.
var sorted_map_SortedMapIterator = /** @class */ (function () {
    function SortedMapIterator(node, startKey, comparator, isReverse, resultGenerator) {
        this.resultGenerator = resultGenerator || null;
        this.isReverse = isReverse;
        this.nodeStack = [];
        var cmp = 1;
        while (!node.isEmpty()) {
            cmp = startKey ? comparator(node.key, startKey) : 1;
            // flip the comparison if we're going in reverse
            if (isReverse)
                cmp *= -1;
            if (cmp < 0) {
                // This node is less than our start key. ignore it
                if (this.isReverse) {
                    node = node.left;
                }
                else {
                    node = node.right;
                }
            }
            else if (cmp === 0) {
                // This node is exactly equal to our start key. Push it on the stack,
                // but stop iterating;
                this.nodeStack.push(node);
                break;
            }
            else {
                // This node is greater than our start key, add it to the stack and move
                // to the next one
                this.nodeStack.push(node);
                if (this.isReverse) {
                    node = node.right;
                }
                else {
                    node = node.left;
                }
            }
        }
    }
    SortedMapIterator.prototype.getNext = function () {
        assert(this.nodeStack.length > 0, 'getNext() called on iterator when hasNext() is false.');
        var node = this.nodeStack.pop();
        var result;
        if (this.resultGenerator)
            result = this.resultGenerator(node.key, node.value);
        else
            result = { key: node.key, value: node.value };
        if (this.isReverse) {
            node = node.left;
            while (!node.isEmpty()) {
                this.nodeStack.push(node);
                node = node.right;
            }
        }
        else {
            node = node.right;
            while (!node.isEmpty()) {
                this.nodeStack.push(node);
                node = node.left;
            }
        }
        return result;
    };
    SortedMapIterator.prototype.hasNext = function () {
        return this.nodeStack.length > 0;
    };
    SortedMapIterator.prototype.peek = function () {
        if (this.nodeStack.length === 0)
            return null;
        var node = this.nodeStack[this.nodeStack.length - 1];
        if (this.resultGenerator) {
            return this.resultGenerator(node.key, node.value);
        }
        else {
            return { key: node.key, value: node.value };
        }
    };
    return SortedMapIterator;
}()); // end SortedMapIterator

// Represents a node in a Left-leaning Red-Black tree.
var sorted_map_LLRBNode = /** @class */ (function () {
    function LLRBNode(key, value, color, left, right) {
        this.key = key;
        this.value = value;
        this.color = color != null ? color : LLRBNode.RED;
        this.left = left != null ? left : LLRBNode.EMPTY;
        this.right = right != null ? right : LLRBNode.EMPTY;
        this.size = this.left.size + 1 + this.right.size;
    }
    // Returns a copy of the current node, optionally replacing pieces of it.
    LLRBNode.prototype.copy = function (key, value, color, left, right) {
        return new LLRBNode(key != null ? key : this.key, value != null ? value : this.value, color != null ? color : this.color, left != null ? left : this.left, right != null ? right : this.right);
    };
    LLRBNode.prototype.isEmpty = function () {
        return false;
    };
    // Traverses the tree in key order and calls the specified action function
    // for each node. If action returns true, traversal is aborted.
    // Returns the first truthy value returned by action, or the last falsey
    // value returned by action.
    LLRBNode.prototype.inorderTraversal = function (action) {
        return (this.left.inorderTraversal(action) ||
            action(this.key, this.value) ||
            this.right.inorderTraversal(action));
    };
    // Traverses the tree in reverse key order and calls the specified action
    // function for each node. If action returns true, traversal is aborted.
    // Returns the first truthy value returned by action, or the last falsey
    // value returned by action.
    LLRBNode.prototype.reverseTraversal = function (action) {
        return (this.right.reverseTraversal(action) ||
            action(this.key, this.value) ||
            this.left.reverseTraversal(action));
    };
    // Returns the minimum node in the tree.
    LLRBNode.prototype.min = function () {
        if (this.left.isEmpty()) {
            return this;
        }
        else {
            return this.left.min();
        }
    };
    // Returns the maximum key in the tree.
    LLRBNode.prototype.minKey = function () {
        return this.min().key;
    };
    // Returns the maximum key in the tree.
    LLRBNode.prototype.maxKey = function () {
        if (this.right.isEmpty()) {
            return this.key;
        }
        else {
            return this.right.maxKey();
        }
    };
    // Returns new tree, with the key/value added.
    LLRBNode.prototype.insert = function (key, value, comparator) {
        var n = this;
        var cmp = comparator(key, n.key);
        if (cmp < 0) {
            n = n.copy(null, null, null, n.left.insert(key, value, comparator), null);
        }
        else if (cmp === 0) {
            n = n.copy(null, value, null, null, null);
        }
        else {
            n = n.copy(null, null, null, null, n.right.insert(key, value, comparator));
        }
        return n.fixUp();
    };
    LLRBNode.prototype.removeMin = function () {
        if (this.left.isEmpty()) {
            return LLRBNode.EMPTY;
        }
        var n = this;
        if (!n.left.isRed() && !n.left.left.isRed())
            n = n.moveRedLeft();
        n = n.copy(null, null, null, n.left.removeMin(), null);
        return n.fixUp();
    };
    // Returns new tree, with the specified item removed.
    LLRBNode.prototype.remove = function (key, comparator) {
        var smallest;
        var n = this;
        if (comparator(key, n.key) < 0) {
            if (!n.left.isEmpty() && !n.left.isRed() && !n.left.left.isRed()) {
                n = n.moveRedLeft();
            }
            n = n.copy(null, null, null, n.left.remove(key, comparator), null);
        }
        else {
            if (n.left.isRed())
                n = n.rotateRight();
            if (!n.right.isEmpty() && !n.right.isRed() && !n.right.left.isRed()) {
                n = n.moveRedRight();
            }
            if (comparator(key, n.key) === 0) {
                if (n.right.isEmpty()) {
                    return LLRBNode.EMPTY;
                }
                else {
                    smallest = n.right.min();
                    n = n.copy(smallest.key, smallest.value, null, null, n.right.removeMin());
                }
            }
            n = n.copy(null, null, null, null, n.right.remove(key, comparator));
        }
        return n.fixUp();
    };
    LLRBNode.prototype.isRed = function () {
        return this.color;
    };
    // Returns new tree after performing any needed rotations.
    LLRBNode.prototype.fixUp = function () {
        var n = this;
        if (n.right.isRed() && !n.left.isRed())
            n = n.rotateLeft();
        if (n.left.isRed() && n.left.left.isRed())
            n = n.rotateRight();
        if (n.left.isRed() && n.right.isRed())
            n = n.colorFlip();
        return n;
    };
    LLRBNode.prototype.moveRedLeft = function () {
        var n = this.colorFlip();
        if (n.right.left.isRed()) {
            n = n.copy(null, null, null, null, n.right.rotateRight());
            n = n.rotateLeft();
            n = n.colorFlip();
        }
        return n;
    };
    LLRBNode.prototype.moveRedRight = function () {
        var n = this.colorFlip();
        if (n.left.left.isRed()) {
            n = n.rotateRight();
            n = n.colorFlip();
        }
        return n;
    };
    LLRBNode.prototype.rotateLeft = function () {
        var nl = this.copy(null, null, LLRBNode.RED, null, this.right.left);
        return this.right.copy(null, null, this.color, nl, null);
    };
    LLRBNode.prototype.rotateRight = function () {
        var nr = this.copy(null, null, LLRBNode.RED, this.left.right, null);
        return this.left.copy(null, null, this.color, null, nr);
    };
    LLRBNode.prototype.colorFlip = function () {
        var left = this.left.copy(null, null, !this.left.color, null, null);
        var right = this.right.copy(null, null, !this.right.color, null, null);
        return this.copy(null, null, !this.color, left, right);
    };
    // For testing.
    LLRBNode.prototype.checkMaxDepth = function () {
        var blackDepth = this.check();
        if (Math.pow(2.0, blackDepth) <= this.size + 1) {
            return true;
        }
        else {
            return false;
        }
    };
    // In a balanced RB tree, the black-depth (number of black nodes) from root to
    // leaves is equal on both sides.  This function verifies that or asserts.
    LLRBNode.prototype.check = function () {
        if (this.isRed() && this.left.isRed()) {
            throw fail('Red node has red child(' + this.key + ',' + this.value + ')');
        }
        if (this.right.isRed()) {
            throw fail('Right child of (' + this.key + ',' + this.value + ') is red');
        }
        var blackDepth = this.left.check();
        if (blackDepth !== this.right.check()) {
            throw fail('Black depths differ');
        }
        else {
            return blackDepth + (this.isRed() ? 0 : 1);
        }
    };
    LLRBNode.EMPTY = null;
    LLRBNode.RED = true;
    LLRBNode.BLACK = false;
    return LLRBNode;
}()); // end LLRBNode

// Represents an empty node (a leaf node in the Red-Black Tree).
var LLRBEmptyNode = /** @class */ (function () {
    function LLRBEmptyNode() {
        this.size = 0;
    }
    // Returns a copy of the current node.
    LLRBEmptyNode.prototype.copy = function (key, value, color, left, right) {
        return this;
    };
    // Returns a copy of the tree, with the specified key/value added.
    LLRBEmptyNode.prototype.insert = function (key, value, comparator) {
        return new sorted_map_LLRBNode(key, value);
    };
    // Returns a copy of the tree, with the specified key removed.
    LLRBEmptyNode.prototype.remove = function (key, comparator) {
        return this;
    };
    LLRBEmptyNode.prototype.isEmpty = function () {
        return true;
    };
    LLRBEmptyNode.prototype.inorderTraversal = function (action) {
        return false;
    };
    LLRBEmptyNode.prototype.reverseTraversal = function (action) {
        return false;
    };
    LLRBEmptyNode.prototype.minKey = function () {
        return null;
    };
    LLRBEmptyNode.prototype.maxKey = function () {
        return null;
    };
    LLRBEmptyNode.prototype.isRed = function () {
        return false;
    };
    // For testing.
    LLRBEmptyNode.prototype.checkMaxDepth = function () {
        return true;
    };
    LLRBEmptyNode.prototype.check = function () {
        return 0;
    };
    return LLRBEmptyNode;
}()); // end LLRBEmptyNode

sorted_map_LLRBNode.EMPTY = new LLRBEmptyNode();

//# sourceMappingURL=sorted_map.js.map

// CONCATENATED MODULE: ../firestore/dist/esm/src/model/field_value.js
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
var field_value___extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var TypeOrder;
(function (TypeOrder) {
    // This order is defined by the backend.
    TypeOrder[TypeOrder["NullValue"] = 0] = "NullValue";
    TypeOrder[TypeOrder["BooleanValue"] = 1] = "BooleanValue";
    TypeOrder[TypeOrder["NumberValue"] = 2] = "NumberValue";
    TypeOrder[TypeOrder["TimestampValue"] = 3] = "TimestampValue";
    TypeOrder[TypeOrder["StringValue"] = 4] = "StringValue";
    TypeOrder[TypeOrder["BlobValue"] = 5] = "BlobValue";
    TypeOrder[TypeOrder["RefValue"] = 6] = "RefValue";
    TypeOrder[TypeOrder["GeoPointValue"] = 7] = "GeoPointValue";
    TypeOrder[TypeOrder["ArrayValue"] = 8] = "ArrayValue";
    TypeOrder[TypeOrder["ObjectValue"] = 9] = "ObjectValue";
})(TypeOrder || (TypeOrder = {}));
/**
 * A field value represents a datatype as stored by Firestore.
 */
var field_value_FieldValue = /** @class */ (function () {
    function FieldValue() {
    }
    FieldValue.prototype.toString = function () {
        var val = this.value();
        return val === null ? 'null' : val.toString();
    };
    FieldValue.prototype.defaultCompareTo = function (other) {
        assert(this.typeOrder !== other.typeOrder, 'Default compareTo should not be used for values of same type.');
        var cmp = primitiveComparator(this.typeOrder, other.typeOrder);
        return cmp;
    };
    return FieldValue;
}());

var NullValue = /** @class */ (function (_super) {
    field_value___extends(NullValue, _super);
    function NullValue() {
        var _this = _super.call(this) || this;
        _this.typeOrder = TypeOrder.NullValue;
        // internalValue is unused but we add it to work around
        // https://github.com/Microsoft/TypeScript/issues/15585
        _this.internalValue = null;
        return _this;
    }
    NullValue.prototype.value = function () {
        return null;
    };
    NullValue.prototype.equals = function (other) {
        return other instanceof NullValue;
    };
    NullValue.prototype.compareTo = function (other) {
        if (other instanceof NullValue) {
            return 0;
        }
        return this.defaultCompareTo(other);
    };
    NullValue.INSTANCE = new NullValue();
    return NullValue;
}(field_value_FieldValue));

var field_value_BooleanValue = /** @class */ (function (_super) {
    field_value___extends(BooleanValue, _super);
    function BooleanValue(internalValue) {
        var _this = _super.call(this) || this;
        _this.internalValue = internalValue;
        _this.typeOrder = TypeOrder.BooleanValue;
        return _this;
    }
    BooleanValue.prototype.value = function () {
        return this.internalValue;
    };
    BooleanValue.prototype.equals = function (other) {
        return (other instanceof BooleanValue &&
            this.internalValue === other.internalValue);
    };
    BooleanValue.prototype.compareTo = function (other) {
        if (other instanceof BooleanValue) {
            return primitiveComparator(this, other);
        }
        return this.defaultCompareTo(other);
    };
    BooleanValue.of = function (value) {
        return value ? BooleanValue.TRUE : BooleanValue.FALSE;
    };
    BooleanValue.TRUE = new BooleanValue(true);
    BooleanValue.FALSE = new BooleanValue(false);
    return BooleanValue;
}(field_value_FieldValue));

/** Base class for IntegerValue and DoubleValue. */
var NumberValue = /** @class */ (function (_super) {
    field_value___extends(NumberValue, _super);
    function NumberValue(internalValue) {
        var _this = _super.call(this) || this;
        _this.internalValue = internalValue;
        _this.typeOrder = TypeOrder.NumberValue;
        return _this;
    }
    NumberValue.prototype.value = function () {
        return this.internalValue;
    };
    NumberValue.prototype.compareTo = function (other) {
        if (other instanceof NumberValue) {
            return numericComparator(this.internalValue, other.internalValue);
        }
        return this.defaultCompareTo(other);
    };
    return NumberValue;
}(field_value_FieldValue));

/** Utility function to compare doubles (using Firestore semantics for NaN). */
function numericComparator(left, right) {
    if (left < right) {
        return -1;
    }
    else if (left > right) {
        return 1;
    }
    else if (left === right) {
        return 0;
    }
    else {
        // one or both are NaN.
        if (isNaN(left)) {
            return isNaN(right) ? 0 : -1;
        }
        else {
            return 1;
        }
    }
}
/**
 * Utility function to check numbers for equality using Firestore semantics
 * (NaN === NaN, -0.0 !== 0.0).
 */
function numericEquals(left, right) {
    // Implemented based on Object.is() polyfill from
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
    if (left === right) {
        // +0 != -0
        return left !== 0 || 1 / left === 1 / right;
    }
    else {
        // NaN == NaN
        return left !== left && right !== right;
    }
}
var IntegerValue = /** @class */ (function (_super) {
    field_value___extends(IntegerValue, _super);
    function IntegerValue(internalValue) {
        return _super.call(this, internalValue) || this;
    }
    IntegerValue.prototype.equals = function (other) {
        // NOTE: DoubleValue and IntegerValue instances may compareTo() the same,
        // but that doesn't make them equal via equals().
        if (other instanceof IntegerValue) {
            return numericEquals(this.internalValue, other.internalValue);
        }
        else {
            return false;
        }
    };
    return IntegerValue;
}(NumberValue));

var DoubleValue = /** @class */ (function (_super) {
    field_value___extends(DoubleValue, _super);
    function DoubleValue(internalValue) {
        var _this = _super.call(this, internalValue) || this;
        _this.internalValue = internalValue;
        return _this;
    }
    DoubleValue.prototype.equals = function (other) {
        // NOTE: DoubleValue and IntegerValue instances may compareTo() the same,
        // but that doesn't make them equal via equals().
        if (other instanceof DoubleValue) {
            return numericEquals(this.internalValue, other.internalValue);
        }
        else {
            return false;
        }
    };
    DoubleValue.NAN = new DoubleValue(NaN);
    DoubleValue.POSITIVE_INFINITY = new DoubleValue(Infinity);
    DoubleValue.NEGATIVE_INFINITY = new DoubleValue(-Infinity);
    return DoubleValue;
}(NumberValue));

// TODO(b/37267885): Add truncation support
var field_value_StringValue = /** @class */ (function (_super) {
    field_value___extends(StringValue, _super);
    function StringValue(internalValue) {
        var _this = _super.call(this) || this;
        _this.internalValue = internalValue;
        _this.typeOrder = TypeOrder.StringValue;
        return _this;
    }
    StringValue.prototype.value = function () {
        return this.internalValue;
    };
    StringValue.prototype.equals = function (other) {
        return (other instanceof StringValue && this.internalValue === other.internalValue);
    };
    StringValue.prototype.compareTo = function (other) {
        if (other instanceof StringValue) {
            return primitiveComparator(this.internalValue, other.internalValue);
        }
        return this.defaultCompareTo(other);
    };
    return StringValue;
}(field_value_FieldValue));

var TimestampValue = /** @class */ (function (_super) {
    field_value___extends(TimestampValue, _super);
    function TimestampValue(internalValue) {
        var _this = _super.call(this) || this;
        _this.internalValue = internalValue;
        _this.typeOrder = TypeOrder.TimestampValue;
        return _this;
    }
    TimestampValue.prototype.value = function () {
        return this.internalValue.toDate();
    };
    TimestampValue.prototype.equals = function (other) {
        return (other instanceof TimestampValue &&
            this.internalValue.equals(other.internalValue));
    };
    TimestampValue.prototype.compareTo = function (other) {
        if (other instanceof TimestampValue) {
            return this.internalValue.compareTo(other.internalValue);
        }
        else if (other instanceof ServerTimestampValue) {
            // Concrete timestamps come before server timestamps.
            return -1;
        }
        else {
            return this.defaultCompareTo(other);
        }
    };
    return TimestampValue;
}(field_value_FieldValue));

/**
 * Represents a locally-applied ServerTimestamp.
 *
 * Notes:
 * - ServerTimestampValue instances are created as the result of applying a
 *   TransformMutation (see TransformMutation.applyTo()). They can only exist in
 *   the local view of a document. Therefore they do not need to be parsed or
 *   serialized.
 * - When evaluated locally (e.g. for snapshot.data()), they evaluate to null.
 * - With respect to other ServerTimestampValues, they sort by their
 *   localWriteTime.
 */
var ServerTimestampValue = /** @class */ (function (_super) {
    field_value___extends(ServerTimestampValue, _super);
    function ServerTimestampValue(localWriteTime) {
        var _this = _super.call(this) || this;
        _this.localWriteTime = localWriteTime;
        _this.typeOrder = TypeOrder.TimestampValue;
        return _this;
    }
    ServerTimestampValue.prototype.value = function () {
        return null;
    };
    ServerTimestampValue.prototype.equals = function (other) {
        return (other instanceof ServerTimestampValue &&
            this.localWriteTime.equals(other.localWriteTime));
    };
    ServerTimestampValue.prototype.compareTo = function (other) {
        if (other instanceof ServerTimestampValue) {
            return this.localWriteTime.compareTo(other.localWriteTime);
        }
        else if (other instanceof TimestampValue) {
            // Server timestamps come after all concrete timestamps.
            return 1;
        }
        else {
            return this.defaultCompareTo(other);
        }
    };
    ServerTimestampValue.prototype.toString = function () {
        return '<ServerTimestamp localTime=' + this.localWriteTime.toString() + '>';
    };
    return ServerTimestampValue;
}(field_value_FieldValue));

var BlobValue = /** @class */ (function (_super) {
    field_value___extends(BlobValue, _super);
    function BlobValue(internalValue) {
        var _this = _super.call(this) || this;
        _this.internalValue = internalValue;
        _this.typeOrder = TypeOrder.BlobValue;
        return _this;
    }
    BlobValue.prototype.value = function () {
        return this.internalValue;
    };
    BlobValue.prototype.equals = function (other) {
        return (other instanceof BlobValue &&
            this.internalValue._equals(other.internalValue));
    };
    BlobValue.prototype.compareTo = function (other) {
        if (other instanceof BlobValue) {
            return this.internalValue._compareTo(other.internalValue);
        }
        return this.defaultCompareTo(other);
    };
    return BlobValue;
}(field_value_FieldValue));

var field_value_RefValue = /** @class */ (function (_super) {
    field_value___extends(RefValue, _super);
    function RefValue(databaseId, key) {
        var _this = _super.call(this) || this;
        _this.databaseId = databaseId;
        _this.key = key;
        _this.typeOrder = TypeOrder.RefValue;
        return _this;
    }
    RefValue.prototype.value = function () {
        return this.key;
    };
    RefValue.prototype.equals = function (other) {
        if (other instanceof RefValue) {
            return (this.key.equals(other.key) && this.databaseId.equals(other.databaseId));
        }
        else {
            return false;
        }
    };
    RefValue.prototype.compareTo = function (other) {
        if (other instanceof RefValue) {
            var cmp = this.databaseId.compareTo(other.databaseId);
            return cmp !== 0 ? cmp : document_key_DocumentKey.comparator(this.key, other.key);
        }
        return this.defaultCompareTo(other);
    };
    return RefValue;
}(field_value_FieldValue));

var GeoPointValue = /** @class */ (function (_super) {
    field_value___extends(GeoPointValue, _super);
    function GeoPointValue(internalValue) {
        var _this = _super.call(this) || this;
        _this.internalValue = internalValue;
        _this.typeOrder = TypeOrder.GeoPointValue;
        return _this;
    }
    GeoPointValue.prototype.value = function () {
        return this.internalValue;
    };
    GeoPointValue.prototype.equals = function (other) {
        return (other instanceof GeoPointValue &&
            this.internalValue._equals(other.internalValue));
    };
    GeoPointValue.prototype.compareTo = function (other) {
        if (other instanceof GeoPointValue) {
            return this.internalValue._compareTo(other.internalValue);
        }
        return this.defaultCompareTo(other);
    };
    return GeoPointValue;
}(field_value_FieldValue));

var field_value_ObjectValue = /** @class */ (function (_super) {
    field_value___extends(ObjectValue, _super);
    function ObjectValue(internalValue) {
        var _this = _super.call(this) || this;
        _this.internalValue = internalValue;
        _this.typeOrder = TypeOrder.ObjectValue;
        return _this;
    }
    ObjectValue.prototype.value = function () {
        var result = {};
        this.internalValue.inorderTraversal(function (key, val) {
            result[key] = val.value();
        });
        return result;
    };
    ObjectValue.prototype.forEach = function (action) {
        this.internalValue.inorderTraversal(action);
    };
    ObjectValue.prototype.equals = function (other) {
        if (other instanceof ObjectValue) {
            var it1 = this.internalValue.getIterator();
            var it2 = other.internalValue.getIterator();
            while (it1.hasNext() && it2.hasNext()) {
                var next1 = it1.getNext();
                var next2 = it2.getNext();
                if (next1.key !== next2.key || !next1.value.equals(next2.value)) {
                    return false;
                }
            }
            return !it1.hasNext() && !it2.hasNext();
        }
        return false;
    };
    ObjectValue.prototype.compareTo = function (other) {
        if (other instanceof ObjectValue) {
            var it1 = this.internalValue.getIterator();
            var it2 = other.internalValue.getIterator();
            while (it1.hasNext() && it2.hasNext()) {
                var next1 = it1.getNext();
                var next2 = it2.getNext();
                var cmp = primitiveComparator(next1.key, next2.key) ||
                    next1.value.compareTo(next2.value);
                if (cmp) {
                    return cmp;
                }
            }
            // Only equal if both iterators are exhausted
            return primitiveComparator(it1.hasNext(), it2.hasNext());
        }
        else {
            return this.defaultCompareTo(other);
        }
    };
    ObjectValue.prototype.set = function (path, to) {
        assert(!path.isEmpty(), 'Cannot set field for empty path on ObjectValue');
        if (path.length === 1) {
            return this.setChild(path.firstSegment(), to);
        }
        else {
            var child = this.child(path.firstSegment());
            if (!(child instanceof ObjectValue)) {
                child = ObjectValue.EMPTY;
            }
            var newChild = child.set(path.popFirst(), to);
            return this.setChild(path.firstSegment(), newChild);
        }
    };
    ObjectValue.prototype.delete = function (path) {
        assert(!path.isEmpty(), 'Cannot delete field for empty path on ObjectValue');
        if (path.length === 1) {
            return new ObjectValue(this.internalValue.remove(path.firstSegment()));
        }
        else {
            // nested field
            var child = this.child(path.firstSegment());
            if (child instanceof ObjectValue) {
                var newChild = child.delete(path.popFirst());
                return new ObjectValue(this.internalValue.insert(path.firstSegment(), newChild));
            }
            else {
                // Don't actually change a primitive value to an object for a delete
                return this;
            }
        }
    };
    ObjectValue.prototype.contains = function (path) {
        return this.field(path) !== undefined;
    };
    ObjectValue.prototype.field = function (path) {
        assert(!path.isEmpty(), "Can't get field of empty path");
        var field = this;
        path.forEach(function (pathSegment) {
            if (field instanceof ObjectValue) {
                field = field.internalValue.get(pathSegment) || undefined;
            }
            else {
                field = undefined;
            }
        });
        return field;
    };
    ObjectValue.prototype.toString = function () {
        return JSON.stringify(this.value());
    };
    ObjectValue.prototype.child = function (childName) {
        return this.internalValue.get(childName) || undefined;
    };
    ObjectValue.prototype.setChild = function (childName, value) {
        return new ObjectValue(this.internalValue.insert(childName, value));
    };
    ObjectValue.EMPTY = new ObjectValue(new sorted_map_SortedMap(primitiveComparator));
    return ObjectValue;
}(field_value_FieldValue));

var field_value_ArrayValue = /** @class */ (function (_super) {
    field_value___extends(ArrayValue, _super);
    function ArrayValue(internalValue) {
        var _this = _super.call(this) || this;
        _this.internalValue = internalValue;
        _this.typeOrder = TypeOrder.ArrayValue;
        return _this;
    }
    ArrayValue.prototype.value = function () {
        return this.internalValue.map(function (v) { return v.value(); });
    };
    ArrayValue.prototype.forEach = function (action) {
        this.internalValue.forEach(action);
    };
    ArrayValue.prototype.equals = function (other) {
        if (other instanceof ArrayValue) {
            if (this.internalValue.length !== other.internalValue.length) {
                return false;
            }
            for (var i = 0; i < this.internalValue.length; i++) {
                if (!this.internalValue[i].equals(other.internalValue[i])) {
                    return false;
                }
            }
            return true;
        }
        return false;
    };
    ArrayValue.prototype.compareTo = function (other) {
        if (other instanceof ArrayValue) {
            var minLength = Math.min(this.internalValue.length, other.internalValue.length);
            for (var i = 0; i < minLength; i++) {
                var cmp = this.internalValue[i].compareTo(other.internalValue[i]);
                if (cmp) {
                    return cmp;
                }
            }
            return primitiveComparator(this.internalValue.length, other.internalValue.length);
        }
        else {
            return this.defaultCompareTo(other);
        }
    };
    ArrayValue.prototype.toString = function () {
        return JSON.stringify(this.value());
    };
    return ArrayValue;
}(field_value_FieldValue));


//# sourceMappingURL=field_value.js.map

// CONCATENATED MODULE: ../firestore/dist/esm/src/util/types.js
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
// Untyped Number alias we can use to check for ES6 methods / properties.
// tslint:disable-next-line:no-any variable-name
var NumberAsAny = Number;
/**
 * Minimum safe integer in Javascript because of floating point precision.
 * Added to not rely on ES6 features.
 */
var MIN_SAFE_INTEGER = NumberAsAny.MIN_SAFE_INTEGER || -(Math.pow(2, 53) - 1);
/**
 * Maximum safe integer in Javascript because of floating point precision.
 * Added to not rely on ES6 features.
 */
var MAX_SAFE_INTEGER = NumberAsAny.MAX_SAFE_INTEGER || Math.pow(2, 53) - 1;
/**
 * Returns whether an number is an integer, uses native implementation if
 * available.
 * Added to not rely on ES6 features.
 * @param value The value to test for being an integer
 */
var isInteger = NumberAsAny.isInteger ||
    (function (value) {
        return typeof value === 'number' &&
            isFinite(value) &&
            Math.floor(value) === value;
    });
/**
 * Returns whether a variable is either undefined or null.
 */
function isNullOrUndefined(value) {
    return value === null || value === undefined;
}
/**
 * Returns whether a value is an integer and in the safe integer range
 * @param value The value to test for being an integer and in the safe range
 */
function isSafeInteger(value) {
    return (isInteger(value) &&
        value <= MAX_SAFE_INTEGER &&
        value >= MIN_SAFE_INTEGER);
}
/**
 * Safely checks if the number is NaN.
 */
function safeIsNaN(value) {
    if (NumberAsAny.IsNaN) {
        return NumberAsAny.IsNaN(value);
    }
    else {
        return typeof value === 'number' && isNaN(value);
    }
}

//# sourceMappingURL=types.js.map

// CONCATENATED MODULE: ../firestore/dist/esm/src/core/query.js
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







var query_Query = /** @class */ (function () {
    function Query(path, explicitOrderBy, filters, limit, startAt, endAt) {
        if (explicitOrderBy === void 0) { explicitOrderBy = []; }
        if (filters === void 0) { filters = []; }
        if (limit === void 0) { limit = null; }
        if (startAt === void 0) { startAt = null; }
        if (endAt === void 0) { endAt = null; }
        this.path = path;
        this.explicitOrderBy = explicitOrderBy;
        this.filters = filters;
        this.limit = limit;
        this.startAt = startAt;
        this.endAt = endAt;
        this.memoizedCanonicalId = null;
        this.memoizedOrderBy = null;
        if (this.startAt) {
            this.assertValidBound(this.startAt);
        }
        if (this.endAt) {
            this.assertValidBound(this.endAt);
        }
    }
    Query.atPath = function (path) {
        return new Query(path);
    };
    Object.defineProperty(Query.prototype, "orderBy", {
        get: function () {
            if (this.memoizedOrderBy === null) {
                var inequalityField = this.getInequalityFilterField();
                var firstOrderByField = this.getFirstOrderByField();
                if (inequalityField !== null && firstOrderByField === null) {
                    // In order to implicitly add key ordering, we must also add the
                    // inequality filter field for it to be a valid query.
                    // Note that the default inequality field and key ordering is ascending.
                    if (inequalityField.isKeyField()) {
                        this.memoizedOrderBy = [KEY_ORDERING_ASC];
                    }
                    else {
                        this.memoizedOrderBy = [
                            new query_OrderBy(inequalityField),
                            KEY_ORDERING_ASC
                        ];
                    }
                }
                else {
                    assert(inequalityField === null ||
                        (firstOrderByField !== null &&
                            inequalityField.equals(firstOrderByField)), 'First orderBy should match inequality field.');
                    this.memoizedOrderBy = [];
                    var foundKeyOrdering = false;
                    for (var _i = 0, _a = this.explicitOrderBy; _i < _a.length; _i++) {
                        var orderBy = _a[_i];
                        this.memoizedOrderBy.push(orderBy);
                        if (orderBy.field.isKeyField()) {
                            foundKeyOrdering = true;
                        }
                    }
                    if (!foundKeyOrdering) {
                        // The order of the implicit key ordering always matches the last
                        // explicit order by
                        var lastDirection = this.explicitOrderBy.length > 0
                            ? this.explicitOrderBy[this.explicitOrderBy.length - 1].dir
                            : Direction.ASCENDING;
                        this.memoizedOrderBy.push(lastDirection === Direction.ASCENDING
                            ? KEY_ORDERING_ASC
                            : KEY_ORDERING_DESC);
                    }
                }
            }
            return this.memoizedOrderBy;
        },
        enumerable: true,
        configurable: true
    });
    Query.prototype.addFilter = function (filter) {
        assert(this.getInequalityFilterField() == null ||
            !(filter instanceof query_RelationFilter) ||
            !filter.isInequality() ||
            filter.field.equals(this.getInequalityFilterField()), 'Query must only have one inequality field.');
        assert(!document_key_DocumentKey.isDocumentKey(this.path), 'No filtering allowed for document query');
        var newFilters = this.filters.concat([filter]);
        return new Query(this.path, this.explicitOrderBy.slice(), newFilters, this.limit, this.startAt, this.endAt);
    };
    Query.prototype.addOrderBy = function (orderBy) {
        assert(!document_key_DocumentKey.isDocumentKey(this.path), 'No ordering allowed for document query');
        assert(!this.startAt && !this.endAt, 'Bounds must be set after orderBy');
        // TODO(dimond): validate that orderBy does not list the same key twice.
        var newOrderBy = this.explicitOrderBy.concat([orderBy]);
        return new Query(this.path, newOrderBy, this.filters.slice(), this.limit, this.startAt, this.endAt);
    };
    Query.prototype.withLimit = function (limit) {
        return new Query(this.path, this.explicitOrderBy.slice(), this.filters.slice(), limit, this.startAt, this.endAt);
    };
    Query.prototype.withStartAt = function (bound) {
        return new Query(this.path, this.explicitOrderBy.slice(), this.filters.slice(), this.limit, bound, this.endAt);
    };
    Query.prototype.withEndAt = function (bound) {
        return new Query(this.path, this.explicitOrderBy.slice(), this.filters.slice(), this.limit, this.startAt, bound);
    };
    // TODO(b/29183165): This is used to get a unique string from a query to, for
    // example, use as a dictionary key, but the implementation is subject to
    // collisions. Make it collision-free.
    Query.prototype.canonicalId = function () {
        if (this.memoizedCanonicalId === null) {
            var canonicalId = this.path.canonicalString();
            canonicalId += '|f:';
            for (var _i = 0, _a = this.filters; _i < _a.length; _i++) {
                var filter = _a[_i];
                canonicalId += filter.canonicalId();
                canonicalId += ',';
            }
            canonicalId += '|ob:';
            // TODO(dimond): make this collision resistant
            for (var _b = 0, _c = this.orderBy; _b < _c.length; _b++) {
                var orderBy = _c[_b];
                canonicalId += orderBy.canonicalId();
                canonicalId += ',';
            }
            if (!isNullOrUndefined(this.limit)) {
                canonicalId += '|l:';
                canonicalId += this.limit;
            }
            if (this.startAt) {
                canonicalId += '|lb:';
                canonicalId += this.startAt.canonicalId();
            }
            if (this.endAt) {
                canonicalId += '|ub:';
                canonicalId += this.endAt.canonicalId();
            }
            this.memoizedCanonicalId = canonicalId;
        }
        return this.memoizedCanonicalId;
    };
    Query.prototype.toString = function () {
        var str = 'Query(' + this.path.canonicalString();
        if (this.filters.length > 0) {
            str += ", filters: [" + this.filters.join(', ') + "]";
        }
        if (!isNullOrUndefined(this.limit)) {
            str += ', limit: ' + this.limit;
        }
        if (this.explicitOrderBy.length > 0) {
            str += ", orderBy: [" + this.explicitOrderBy.join(', ') + "]";
        }
        if (this.startAt) {
            str += ', startAt: ' + this.startAt.canonicalId();
        }
        if (this.endAt) {
            str += ', endAt: ' + this.endAt.canonicalId();
        }
        return str + ')';
    };
    Query.prototype.equals = function (other) {
        if (this.limit !== other.limit) {
            return false;
        }
        if (this.orderBy.length !== other.orderBy.length) {
            return false;
        }
        for (var i = 0; i < this.orderBy.length; i++) {
            if (!this.orderBy[i].equals(other.orderBy[i])) {
                return false;
            }
        }
        if (this.filters.length !== other.filters.length) {
            return false;
        }
        for (var i = 0; i < this.filters.length; i++) {
            if (!this.filters[i].equals(other.filters[i])) {
                return false;
            }
        }
        if (!this.path.equals(other.path)) {
            return false;
        }
        if (this.startAt !== null
            ? !this.startAt.equals(other.startAt)
            : other.startAt !== null) {
            return false;
        }
        return this.endAt !== null
            ? this.endAt.equals(other.endAt)
            : other.endAt === null;
    };
    Query.prototype.docComparator = function (d1, d2) {
        var comparedOnKeyField = false;
        for (var _i = 0, _a = this.orderBy; _i < _a.length; _i++) {
            var orderBy = _a[_i];
            var comp = orderBy.compare(d1, d2);
            if (comp !== 0)
                return comp;
            comparedOnKeyField = comparedOnKeyField || orderBy.field.isKeyField();
        }
        // Assert that we actually compared by key
        assert(comparedOnKeyField, "orderBy used that doesn't compare on key field");
        return 0;
    };
    Query.prototype.matches = function (doc) {
        return (this.matchesAncestor(doc) &&
            this.matchesOrderBy(doc) &&
            this.matchesFilters(doc) &&
            this.matchesBounds(doc));
    };
    Query.prototype.hasLimit = function () {
        return !isNullOrUndefined(this.limit);
    };
    Query.prototype.getFirstOrderByField = function () {
        return this.explicitOrderBy.length > 0
            ? this.explicitOrderBy[0].field
            : null;
    };
    Query.prototype.getInequalityFilterField = function () {
        for (var _i = 0, _a = this.filters; _i < _a.length; _i++) {
            var filter = _a[_i];
            if (filter instanceof query_RelationFilter && filter.isInequality()) {
                return filter.field;
            }
        }
        return null;
    };
    Query.prototype.isDocumentQuery = function () {
        return document_key_DocumentKey.isDocumentKey(this.path) && this.filters.length === 0;
    };
    Query.prototype.matchesAncestor = function (doc) {
        var docPath = doc.key.path;
        if (document_key_DocumentKey.isDocumentKey(this.path)) {
            // exact match for document queries
            return this.path.equals(docPath);
        }
        else {
            // shallow ancestor queries by default
            return (this.path.isPrefixOf(docPath) && this.path.length === docPath.length - 1);
        }
    };
    /**
     * A document must have a value for every ordering clause in order to show up
     * in the results.
     */
    Query.prototype.matchesOrderBy = function (doc) {
        for (var _i = 0, _a = this.explicitOrderBy; _i < _a.length; _i++) {
            var orderBy = _a[_i];
            // order by key always matches
            if (!orderBy.field.isKeyField() &&
                doc.field(orderBy.field) === undefined) {
                return false;
            }
        }
        return true;
    };
    Query.prototype.matchesFilters = function (doc) {
        for (var _i = 0, _a = this.filters; _i < _a.length; _i++) {
            var filter = _a[_i];
            if (!filter.matches(doc)) {
                return false;
            }
        }
        return true;
    };
    /**
     * Makes sure a document is within the bounds, if provided.
     */
    Query.prototype.matchesBounds = function (doc) {
        if (this.startAt && !this.startAt.sortsBeforeDocument(this.orderBy, doc)) {
            return false;
        }
        if (this.endAt && this.endAt.sortsBeforeDocument(this.orderBy, doc)) {
            return false;
        }
        return true;
    };
    Query.prototype.assertValidBound = function (bound) {
        assert(bound.position.length <= this.orderBy.length, 'Bound is longer than orderBy');
    };
    return Query;
}());

var query_RelationOp = /** @class */ (function () {
    function RelationOp(name) {
        this.name = name;
    }
    RelationOp.fromString = function (op) {
        switch (op) {
            case '<':
                return RelationOp.LESS_THAN;
            case '<=':
                return RelationOp.LESS_THAN_OR_EQUAL;
            case '==':
                return RelationOp.EQUAL;
            case '>=':
                return RelationOp.GREATER_THAN_OR_EQUAL;
            case '>':
                return RelationOp.GREATER_THAN;
            default:
                return fail('Unknown relation: ' + op);
        }
    };
    RelationOp.prototype.toString = function () {
        return this.name;
    };
    RelationOp.prototype.equals = function (other) {
        return this.name === other.name;
    };
    RelationOp.LESS_THAN = new RelationOp('<');
    RelationOp.LESS_THAN_OR_EQUAL = new RelationOp('<=');
    RelationOp.EQUAL = new RelationOp('==');
    RelationOp.GREATER_THAN = new RelationOp('>');
    RelationOp.GREATER_THAN_OR_EQUAL = new RelationOp('>=');
    return RelationOp;
}());

var query_RelationFilter = /** @class */ (function () {
    function RelationFilter(field, op, value) {
        this.field = field;
        this.op = op;
        this.value = value;
    }
    RelationFilter.prototype.matches = function (doc) {
        if (this.field.isKeyField()) {
            assert(this.value instanceof field_value_RefValue, 'Comparing on key, but filter value not a RefValue');
            var refValue = this.value;
            var comparison = document_key_DocumentKey.comparator(doc.key, refValue.key);
            return this.matchesComparison(comparison);
        }
        else {
            var val = doc.field(this.field);
            return val !== undefined && this.matchesValue(val);
        }
    };
    RelationFilter.prototype.matchesValue = function (value) {
        // Only compare types with matching backend order (such as double and int).
        if (this.value.typeOrder !== value.typeOrder) {
            return false;
        }
        return this.matchesComparison(value.compareTo(this.value));
    };
    RelationFilter.prototype.matchesComparison = function (comparison) {
        switch (this.op) {
            case query_RelationOp.LESS_THAN:
                return comparison < 0;
            case query_RelationOp.LESS_THAN_OR_EQUAL:
                return comparison <= 0;
            case query_RelationOp.EQUAL:
                return comparison === 0;
            case query_RelationOp.GREATER_THAN:
                return comparison > 0;
            case query_RelationOp.GREATER_THAN_OR_EQUAL:
                return comparison >= 0;
            default:
                return fail('Unknown relation op' + this.op);
        }
    };
    RelationFilter.prototype.isInequality = function () {
        return this.op !== query_RelationOp.EQUAL;
    };
    RelationFilter.prototype.canonicalId = function () {
        // TODO(b/29183165): Technically, this won't be unique if two values have
        // the same description, such as the int 3 and the string "3". So we should
        // add the types in here somehow, too.
        return (this.field.canonicalString() + this.op.toString() + this.value.toString());
    };
    RelationFilter.prototype.equals = function (other) {
        if (other instanceof RelationFilter) {
            return (this.op.equals(other.op) &&
                this.field.equals(other.field) &&
                this.value.equals(other.value));
        }
        else {
            return false;
        }
    };
    RelationFilter.prototype.toString = function () {
        return this.field.canonicalString() + " " + this.op + " " + this.value.value();
    };
    return RelationFilter;
}());

/**
 * Filter that matches 'null' values.
 */
var NullFilter = /** @class */ (function () {
    function NullFilter(field) {
        this.field = field;
    }
    NullFilter.prototype.matches = function (doc) {
        var val = doc.field(this.field);
        return val !== undefined && val.value() === null;
    };
    NullFilter.prototype.canonicalId = function () {
        return this.field.canonicalString() + ' IS null';
    };
    NullFilter.prototype.toString = function () {
        return this.field.canonicalString() + " IS null";
    };
    NullFilter.prototype.equals = function (other) {
        if (other instanceof NullFilter) {
            return this.field.equals(other.field);
        }
        else {
            return false;
        }
    };
    return NullFilter;
}());

/**
 * Filter that matches 'NaN' values.
 */
var NanFilter = /** @class */ (function () {
    function NanFilter(field) {
        this.field = field;
    }
    NanFilter.prototype.matches = function (doc) {
        var val = doc.field(this.field).value();
        return typeof val === 'number' && isNaN(val);
    };
    NanFilter.prototype.canonicalId = function () {
        return this.field.canonicalString() + ' IS NaN';
    };
    NanFilter.prototype.toString = function () {
        return this.field.canonicalString() + " IS NaN";
    };
    NanFilter.prototype.equals = function (other) {
        if (other instanceof NanFilter) {
            return this.field.equals(other.field);
        }
        else {
            return false;
        }
    };
    return NanFilter;
}());

/**
 * Creates a filter based on the provided arguments.
 */
function fieldFilter(field, op, value) {
    if (value.equals(NullValue.INSTANCE)) {
        if (op !== query_RelationOp.EQUAL) {
            throw new FirestoreError(Code.INVALID_ARGUMENT, 'Invalid query. You can only perform equals ' + 'comparisons on null.');
        }
        return new NullFilter(field);
    }
    else if (value.equals(DoubleValue.NAN)) {
        if (op !== query_RelationOp.EQUAL) {
            throw new FirestoreError(Code.INVALID_ARGUMENT, 'Invalid query. You can only perform equals ' + 'comparisons on NaN.');
        }
        return new NanFilter(field);
    }
    else {
        return new query_RelationFilter(field, op, value);
    }
}
/**
 * The direction of sorting in an order by.
 */
var Direction = /** @class */ (function () {
    function Direction(name) {
        this.name = name;
    }
    Direction.prototype.toString = function () {
        return this.name;
    };
    Direction.ASCENDING = new Direction('asc');
    Direction.DESCENDING = new Direction('desc');
    return Direction;
}());

/**
 * Represents a bound of a query.
 *
 * The bound is specified with the given components representing a position and
 * whether it's just before or just after the position (relative to whatever the
 * query order is).
 *
 * The position represents a logical index position for a query. It's a prefix
 * of values for the (potentially implicit) order by clauses of a query.
 *
 * Bound provides a function to determine whether a document comes before or
 * after a bound. This is influenced by whether the position is just before or
 * just after the provided values.
 */
var query_Bound = /** @class */ (function () {
    function Bound(position, before) {
        this.position = position;
        this.before = before;
    }
    Bound.prototype.canonicalId = function () {
        // TODO(b/29183165): Make this collision robust.
        var canonicalId = this.before ? 'b:' : 'a:';
        for (var _i = 0, _a = this.position; _i < _a.length; _i++) {
            var component = _a[_i];
            canonicalId += component.toString();
        }
        return canonicalId;
    };
    /**
     * Returns true if a document sorts before a bound using the provided sort
     * order.
     */
    Bound.prototype.sortsBeforeDocument = function (orderBy, doc) {
        assert(this.position.length <= orderBy.length, "Bound has more components than query's orderBy");
        var comparison = 0;
        for (var i = 0; i < this.position.length; i++) {
            var orderByComponent = orderBy[i];
            var component = this.position[i];
            if (orderByComponent.field.isKeyField()) {
                assert(component instanceof field_value_RefValue, 'Bound has a non-key value where the key path is being used.');
                comparison = document_key_DocumentKey.comparator(component.key, doc.key);
            }
            else {
                var docValue = doc.field(orderByComponent.field);
                assert(docValue !== undefined, 'Field should exist since document matched the orderBy already.');
                comparison = component.compareTo(docValue);
            }
            if (orderByComponent.dir === Direction.DESCENDING) {
                comparison = comparison * -1;
            }
            if (comparison !== 0) {
                break;
            }
        }
        return this.before ? comparison <= 0 : comparison < 0;
    };
    Bound.prototype.equals = function (other) {
        if (other === null) {
            return false;
        }
        if (this.before !== other.before ||
            this.position.length !== other.position.length) {
            return false;
        }
        for (var i = 0; i < this.position.length; i++) {
            var thisPosition = this.position[i];
            var otherPosition = other.position[i];
            return thisPosition.equals(otherPosition);
        }
        return true;
    };
    return Bound;
}());

/**
 * An ordering on a field, in some Direction. Direction defaults to ASCENDING.
 */
var query_OrderBy = /** @class */ (function () {
    function OrderBy(field, dir) {
        this.field = field;
        if (dir === undefined) {
            dir = Direction.ASCENDING;
        }
        this.dir = dir;
        this.isKeyOrderBy = field.isKeyField();
    }
    OrderBy.prototype.compare = function (d1, d2) {
        var comparison = this.isKeyOrderBy
            ? document_Document.compareByKey(d1, d2)
            : document_Document.compareByField(this.field, d1, d2);
        switch (this.dir) {
            case Direction.ASCENDING:
                return comparison;
            case Direction.DESCENDING:
                return -1 * comparison;
            default:
                return fail('Unknown direction: ' + this.dir);
        }
    };
    OrderBy.prototype.canonicalId = function () {
        // TODO(b/29183165): Make this collision robust.
        return this.field.canonicalString() + this.dir.toString();
    };
    OrderBy.prototype.toString = function () {
        return this.field.canonicalString() + " (" + this.dir + ")";
    };
    OrderBy.prototype.equals = function (other) {
        return this.dir === other.dir && this.field.equals(other.field);
    };
    return OrderBy;
}());

var KEY_ORDERING_ASC = new query_OrderBy(path_FieldPath.keyField(), Direction.ASCENDING);
var KEY_ORDERING_DESC = new query_OrderBy(path_FieldPath.keyField(), Direction.DESCENDING);

//# sourceMappingURL=query.js.map

// CONCATENATED MODULE: ../firestore/dist/esm/src/core/timestamp.js
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


// A RegExp matching ISO 8601 UTC timestamps with optional fraction.
var isoRegExp = new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);
var timestamp_Timestamp = /** @class */ (function () {
    function Timestamp(seconds, nanos) {
        this.seconds = seconds;
        this.nanos = nanos;
        assert(nanos >= 0, 'timestamp nanoseconds out of range: ' + nanos);
        assert(nanos < 1e9, 'timestamp nanoseconds out of range' + nanos);
        // Midnight at the beginning of 1/1/1 is the earliest Firestore supports.
        assert(seconds >= -62135596800, 'timestamp seconds out of range: ' + seconds);
        // This will break in the year 10,000.
        assert(seconds < 253402300800, 'timestamp seconds out of range' + seconds);
    }
    Timestamp.now = function () {
        return Timestamp.fromEpochMilliseconds(Date.now());
    };
    Timestamp.fromDate = function (date) {
        return Timestamp.fromEpochMilliseconds(date.getTime());
    };
    Timestamp.fromEpochMilliseconds = function (milliseconds) {
        var seconds = Math.floor(milliseconds / 1000);
        var nanos = (milliseconds - seconds * 1000) * 1e6;
        return new Timestamp(seconds, nanos);
    };
    Timestamp.fromISOString = function (utc) {
        // The date string can have higher precision (nanos) than the Date class
        // (millis), so we do some custom parsing here.
        // Parse the nanos right out of the string.
        var nanos = 0;
        var fraction = isoRegExp.exec(utc);
        assert(!!fraction, 'invalid timestamp: ' + utc);
        if (fraction[1]) {
            // Pad the fraction out to 9 digits (nanos).
            var nanoStr = fraction[1];
            nanoStr = (nanoStr + '000000000').substr(0, 9);
            nanos = parseInt(nanoStr, 10);
        }
        // Parse the date to get the seconds.
        var date = new Date(utc);
        var seconds = Math.floor(date.getTime() / 1000);
        return new Timestamp(seconds, nanos);
    };
    Timestamp.prototype.toDate = function () {
        return new Date(this.toEpochMilliseconds());
    };
    Timestamp.prototype.toEpochMilliseconds = function () {
        return this.seconds * 1000 + this.nanos / 1e6;
    };
    Timestamp.prototype.compareTo = function (other) {
        if (this.seconds === other.seconds) {
            return primitiveComparator(this.nanos, other.nanos);
        }
        return primitiveComparator(this.seconds, other.seconds);
    };
    Timestamp.prototype.equals = function (other) {
        return other.seconds === this.seconds && other.nanos === this.nanos;
    };
    Timestamp.prototype.toString = function () {
        return 'Timestamp(seconds=' + this.seconds + ', nanos=' + this.nanos + ')';
    };
    return Timestamp;
}());


//# sourceMappingURL=timestamp.js.map

// CONCATENATED MODULE: ../firestore/dist/esm/src/core/snapshot_version.js
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

/**
 * A version of a document in Firestore. This corresponds to the version
 * timestamp, such as update_time or read_time.
 */
var snapshot_version_SnapshotVersion = /** @class */ (function () {
    function SnapshotVersion(timestamp) {
        this.timestamp = timestamp;
    }
    // TODO(b/34176344): Once we no longer need to use the old alpha protos,
    // delete this constructor and use a timestamp-backed version everywhere.
    SnapshotVersion.fromMicroseconds = function (value) {
        var seconds = Math.floor(value / 1e6);
        var nanos = (value % 1e6) * 1e3;
        return new SnapshotVersion(new timestamp_Timestamp(seconds, nanos));
    };
    SnapshotVersion.fromTimestamp = function (value) {
        return new SnapshotVersion(value);
    };
    SnapshotVersion.forDeletedDoc = function () {
        return SnapshotVersion.MIN;
    };
    SnapshotVersion.prototype.compareTo = function (other) {
        return this.timestamp.compareTo(other.timestamp);
    };
    SnapshotVersion.prototype.equals = function (other) {
        return this.timestamp.equals(other.timestamp);
    };
    /** Returns a number representation of the version for use in spec tests. */
    SnapshotVersion.prototype.toMicroseconds = function () {
        // Convert to microseconds.
        return this.timestamp.seconds * 1e6 + this.timestamp.nanos / 1000;
    };
    SnapshotVersion.prototype.toString = function () {
        return 'SnapshotVersion(' + this.timestamp.toString() + ')';
    };
    SnapshotVersion.prototype.toTimestamp = function () {
        return this.timestamp;
    };
    SnapshotVersion.MIN = new SnapshotVersion(new timestamp_Timestamp(0, 0));
    return SnapshotVersion;
}());


//# sourceMappingURL=snapshot_version.js.map

// CONCATENATED MODULE: ../firestore/dist/esm/src/local/query_data.js
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


/** An enumeration of the different purposes we have for queries. */
var QueryPurpose;
(function (QueryPurpose) {
    /** A regular, normal query. */
    QueryPurpose[QueryPurpose["Listen"] = 0] = "Listen";
    /**
     * The query was used to refill a query after an existence filter mismatch.
     */
    QueryPurpose[QueryPurpose["ExistenceFilterMismatch"] = 1] = "ExistenceFilterMismatch";
    /** The query was used to resolve a limbo document. */
    QueryPurpose[QueryPurpose["LimboResolution"] = 2] = "LimboResolution";
})(QueryPurpose || (QueryPurpose = {}));
/**
 * An immutable set of metadata that the local store tracks for each query.
 */
var query_data_QueryData = /** @class */ (function () {
    function QueryData(
        /** The query being listened to. */
        query, 
        /**
         * The target ID to which the query corresponds; Assigned by the
         * LocalStore for user listens and by the SyncEngine for limbo watches.
         */
        targetId, 
        /** The purpose of the query. */
        purpose, 
        /** The latest snapshot version seen for this target. */
        snapshotVersion, 
        /**
         * An opaque, server-assigned token that allows watching a query to be
         * resumed after disconnecting without retransmitting all the data that
         * matches the query. The resume token essentially identifies a point in
         * time from which the server should resume sending results.
         */
        resumeToken) {
        if (snapshotVersion === void 0) { snapshotVersion = snapshot_version_SnapshotVersion.MIN; }
        if (resumeToken === void 0) { resumeToken = emptyByteString(); }
        this.query = query;
        this.targetId = targetId;
        this.purpose = purpose;
        this.snapshotVersion = snapshotVersion;
        this.resumeToken = resumeToken;
    }
    /**
     * Creates a new query data instance with an updated snapshot version and
     * resume token.
     */
    QueryData.prototype.update = function (updated) {
        return new QueryData(this.query, this.targetId, this.purpose, updated.snapshotVersion, updated.resumeToken);
    };
    QueryData.prototype.equals = function (other) {
        return (this.targetId === other.targetId &&
            this.purpose === other.purpose &&
            this.snapshotVersion.equals(other.snapshotVersion) &&
            this.resumeToken === other.resumeToken &&
            this.query.equals(other.query));
    };
    return QueryData;
}());


//# sourceMappingURL=query_data.js.map

// CONCATENATED MODULE: ../firestore/dist/esm/src/model/mutation.js
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
var mutation___extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





/**
 * Provides a set of fields that can be used to partially patch a document.
 * FieldMask is used in conjunction with ObjectValue.
 * Examples:
 *   foo - Overwrites foo entirely with the provided value. If foo is not
 *         present in the companion ObjectValue, the field is deleted.
 *   foo.bar - Overwrites only the field bar of the object foo.
 *             If foo is not an object, foo is replaced with an object
 *             containing foo
 */
var mutation_FieldMask = /** @class */ (function () {
    function FieldMask(fields) {
        this.fields = fields;
        // TODO(dimond): validation of FieldMask
    }
    FieldMask.prototype.equals = function (other) {
        return arrayEquals(this.fields, other.fields);
    };
    return FieldMask;
}());

/** Transforms a value into a server-generated timestamp. */
var ServerTimestampTransform = /** @class */ (function () {
    function ServerTimestampTransform() {
    }
    ServerTimestampTransform.prototype.equals = function (other) {
        return other instanceof ServerTimestampTransform;
    };
    ServerTimestampTransform.instance = new ServerTimestampTransform();
    return ServerTimestampTransform;
}());

/** A field path and the TransformOperation to perform upon it. */
var FieldTransform = /** @class */ (function () {
    function FieldTransform(field, transform) {
        this.field = field;
        this.transform = transform;
    }
    FieldTransform.prototype.equals = function (other) {
        return (this.field.equals(other.field) && this.transform.equals(other.transform));
    };
    return FieldTransform;
}());

/** The result of successfully applying a mutation to the backend. */
var MutationResult = /** @class */ (function () {
    function MutationResult(
        /**
         * The version at which the mutation was committed or null for a delete.
         */
        version, 
        /**
         * The resulting fields returned from the backend after a
         * TransformMutation has been committed. Contains one FieldValue for each
         * FieldTransform that was in the mutation.
         *
         * Will be null if the mutation was not a TransformMutation.
         */
        transformResults) {
        this.version = version;
        this.transformResults = transformResults;
    }
    return MutationResult;
}());

var MutationType;
(function (MutationType) {
    MutationType[MutationType["Set"] = 0] = "Set";
    MutationType[MutationType["Patch"] = 1] = "Patch";
    MutationType[MutationType["Transform"] = 2] = "Transform";
    MutationType[MutationType["Delete"] = 3] = "Delete";
})(MutationType || (MutationType = {}));
/**
 * Encodes a precondition for a mutation. This follows the model that the
 * backend accepts with the special case of an explicit "empty" precondition
 * (meaning no precondition).
 */
var mutation_Precondition = /** @class */ (function () {
    function Precondition(updateTime, exists) {
        this.updateTime = updateTime;
        this.exists = exists;
        assert(updateTime === undefined || exists === undefined, 'Precondition can specify "exists" or "updateTime" but not both');
    }
    /** Creates a new Precondition with an exists flag. */
    Precondition.exists = function (exists) {
        return new Precondition(undefined, exists);
    };
    /** Creates a new Precondition based on a version a document exists at. */
    Precondition.updateTime = function (version) {
        return new Precondition(version);
    };
    Object.defineProperty(Precondition.prototype, "isNone", {
        /** Returns whether this Precondition is empty. */
        get: function () {
            return this.updateTime === undefined && this.exists === undefined;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns true if the preconditions is valid for the given document
     * (or null if no document is available).
     */
    Precondition.prototype.isValidFor = function (maybeDoc) {
        if (this.updateTime !== undefined) {
            return (maybeDoc instanceof document_Document && maybeDoc.version.equals(this.updateTime));
        }
        else if (this.exists !== undefined) {
            if (this.exists) {
                return maybeDoc instanceof document_Document;
            }
            else {
                return maybeDoc === null || maybeDoc instanceof document_NoDocument;
            }
        }
        else {
            assert(this.isNone, 'Precondition should be empty');
            return true;
        }
    };
    Precondition.prototype.equals = function (other) {
        return (equals(this.updateTime, other.updateTime) &&
            this.exists === other.exists);
    };
    Precondition.NONE = new Precondition();
    return Precondition;
}());

/**
 * A mutation describes a self-contained change to a document. Mutations can
 * create, replace, delete, and update subsets of documents.
 *
 * Mutations not only act on the value of the document but also it version.
 * In the case of Set, Patch, and Transform mutations we preserve the existing
 * version. In the case of Delete mutations, we reset the version to 0.
 *
 * Here's the expected transition table.
 *
 * MUTATION           APPLIED TO            RESULTS IN
 *
 * SetMutation        Document(v3)          Document(v3)
 * SetMutation        NoDocument(v3)        Document(v0)
 * SetMutation        null                  Document(v0)
 * PatchMutation      Document(v3)          Document(v3)
 * PatchMutation      NoDocument(v3)        NoDocument(v3)
 * PatchMutation      null                  null
 * TransformMutation  Document(v3)          Document(v3)
 * TransformMutation  NoDocument(v3)        NoDocument(v3)
 * TransformMutation  null                  null
 * DeleteMutation     Document(v3)          NoDocument(v0)
 * DeleteMutation     NoDocument(v3)        NoDocument(v0)
 * DeleteMutation     null                  NoDocument(v0)
 *
 * Note that TransformMutations don't create Documents (in the case of being
 * applied to a NoDocument), even though they would on the backend. This is
 * because the client always combines the TransformMutation with a SetMutation
 * or PatchMutation and we only want to apply the transform if the prior
 * mutation resulted in a Document (always true for a SetMutation, but not
 * necessarily for a PatchMutation).
 *
 * ## Subclassing Notes
 *
 * Subclasses of Mutation need to implement applyToRemoteDocument() and
 * applyToLocalView() to implement the actual behavior of applying the mutation
 * to some source document.
 */
var mutation_Mutation = /** @class */ (function () {
    function Mutation() {
    }
    Mutation.prototype.verifyKeyMatches = function (maybeDoc) {
        if (maybeDoc != null) {
            assert(maybeDoc.key.equals(this.key), 'Can only apply a mutation to a document with the same key');
        }
    };
    /**
     * Returns the version from the given document for use as the result of a
     * mutation. Mutations are defined to return the version of the base document
     * only if it is an existing document. Deleted and unknown documents have a
     * post-mutation version of SnapshotVersion.MIN.
     */
    Mutation.getPostMutationVersion = function (maybeDoc) {
        if (maybeDoc instanceof document_Document) {
            return maybeDoc.version;
        }
        else {
            return snapshot_version_SnapshotVersion.MIN;
        }
    };
    return Mutation;
}());

/**
 * A mutation that creates or replaces the document at the given key with the
 * object value contents.
 */
var mutation_SetMutation = /** @class */ (function (_super) {
    mutation___extends(SetMutation, _super);
    function SetMutation(key, value, precondition) {
        var _this = _super.call(this) || this;
        _this.key = key;
        _this.value = value;
        _this.precondition = precondition;
        _this.type = MutationType.Set;
        return _this;
    }
    SetMutation.prototype.applyToRemoteDocument = function (maybeDoc, mutationResult) {
        this.verifyKeyMatches(maybeDoc);
        assert(mutationResult.transformResults == null, 'Transform results received by SetMutation.');
        // Unlike applyToLocalView, if we're applying a mutation to a remote
        // document the server has accepted the mutation so the precondition must
        // have held.
        var version = mutation_Mutation.getPostMutationVersion(maybeDoc);
        return new document_Document(this.key, version, this.value, {
            hasLocalMutations: false
        });
    };
    SetMutation.prototype.applyToLocalView = function (maybeDoc, localWriteTime) {
        this.verifyKeyMatches(maybeDoc);
        if (!this.precondition.isValidFor(maybeDoc)) {
            return maybeDoc;
        }
        var version = mutation_Mutation.getPostMutationVersion(maybeDoc);
        return new document_Document(this.key, version, this.value, {
            hasLocalMutations: true
        });
    };
    SetMutation.prototype.equals = function (other) {
        return (other instanceof SetMutation &&
            this.key.equals(other.key) &&
            this.value.equals(other.value) &&
            this.precondition.equals(other.precondition));
    };
    return SetMutation;
}(mutation_Mutation));

/**
 * A mutation that modifies fields of the document at the given key with the
 * given values. The values are applied through a field mask:
 *
 *  * When a field is in both the mask and the values, the corresponding field
 *    is updated.
 *  * When a field is in neither the mask nor the values, the corresponding
 *    field is unmodified.
 *  * When a field is in the mask but not in the values, the corresponding field
 *    is deleted.
 *  * When a field is not in the mask but is in the values, the values map is
 *    ignored.
 */
var mutation_PatchMutation = /** @class */ (function (_super) {
    mutation___extends(PatchMutation, _super);
    function PatchMutation(key, data, fieldMask, precondition) {
        var _this = _super.call(this) || this;
        _this.key = key;
        _this.data = data;
        _this.fieldMask = fieldMask;
        _this.precondition = precondition;
        _this.type = MutationType.Patch;
        return _this;
    }
    PatchMutation.prototype.applyToRemoteDocument = function (maybeDoc, mutationResult) {
        this.verifyKeyMatches(maybeDoc);
        assert(mutationResult.transformResults == null, 'Transform results received by PatchMutation.');
        // TODO(mcg): Relax enforcement of this precondition
        //
        // We shouldn't actually enforce the precondition since it already passed on
        // the backend, but we may not have a local version of the document to
        // patch, so we use the precondition to prevent incorrectly putting a
        // partial document into our cache.
        if (!this.precondition.isValidFor(maybeDoc)) {
            return maybeDoc;
        }
        var version = mutation_Mutation.getPostMutationVersion(maybeDoc);
        var newData = this.patchDocument(maybeDoc);
        return new document_Document(this.key, version, newData, {
            hasLocalMutations: false
        });
    };
    PatchMutation.prototype.applyToLocalView = function (maybeDoc, localWriteTime) {
        this.verifyKeyMatches(maybeDoc);
        if (!this.precondition.isValidFor(maybeDoc)) {
            return maybeDoc;
        }
        var version = mutation_Mutation.getPostMutationVersion(maybeDoc);
        var newData = this.patchDocument(maybeDoc);
        return new document_Document(this.key, version, newData, {
            hasLocalMutations: true
        });
    };
    PatchMutation.prototype.equals = function (other) {
        return (other instanceof PatchMutation &&
            this.key.equals(other.key) &&
            this.fieldMask.equals(other.fieldMask) &&
            this.precondition.equals(other.precondition));
    };
    /**
     * Patches the data of document if available or creates a new document. Note
     * that this does not check whether or not the precondition of this patch
     * holds.
     */
    PatchMutation.prototype.patchDocument = function (maybeDoc) {
        var data;
        if (maybeDoc instanceof document_Document) {
            data = maybeDoc.data;
        }
        else {
            data = field_value_ObjectValue.EMPTY;
        }
        return this.patchObject(data);
    };
    PatchMutation.prototype.patchObject = function (data) {
        for (var _i = 0, _a = this.fieldMask.fields; _i < _a.length; _i++) {
            var fieldPath = _a[_i];
            var newValue = this.data.field(fieldPath);
            if (newValue !== undefined) {
                data = data.set(fieldPath, newValue);
            }
            else {
                data = data.delete(fieldPath);
            }
        }
        return data;
    };
    return PatchMutation;
}(mutation_Mutation));

/**
 * A mutation that modifies specific fields of the document with transform
 * operations. Currently the only supported transform is a server timestamp, but
 * IP Address, increment(n), etc. could be supported in the future.
 *
 * It is somewhat similar to a PatchMutation in that it patches specific fields
 * and has no effect when applied to a null or NoDocument (see comment on
 * Mutation for rationale).
 */
var mutation_TransformMutation = /** @class */ (function (_super) {
    mutation___extends(TransformMutation, _super);
    function TransformMutation(key, fieldTransforms) {
        var _this = _super.call(this) || this;
        _this.key = key;
        _this.fieldTransforms = fieldTransforms;
        _this.type = MutationType.Transform;
        // NOTE: We set a precondition of exists: true as a safety-check, since we
        // always combine TransformMutations with a SetMutation or PatchMutation which
        // (if successful) should end up with an existing document.
        _this.precondition = mutation_Precondition.exists(true);
        return _this;
    }
    TransformMutation.prototype.applyToRemoteDocument = function (maybeDoc, mutationResult) {
        this.verifyKeyMatches(maybeDoc);
        assert(mutationResult.transformResults != null, 'Transform results missing for TransformMutation.');
        var transformResults = mutationResult.transformResults;
        // TODO(mcg): Relax enforcement of this precondition
        //
        // We shouldn't actually enforce the precondition since it already passed on
        // the backend, but we may not have a local version of the document to
        // patch, so we use the precondition to prevent incorrectly putting a
        // partial document into our cache.
        if (!this.precondition.isValidFor(maybeDoc)) {
            return maybeDoc;
        }
        var doc = this.requireDocument(maybeDoc);
        var newData = this.transformObject(doc.data, transformResults);
        return new document_Document(this.key, doc.version, newData, {
            hasLocalMutations: false
        });
    };
    TransformMutation.prototype.applyToLocalView = function (maybeDoc, localWriteTime) {
        this.verifyKeyMatches(maybeDoc);
        if (!this.precondition.isValidFor(maybeDoc)) {
            return maybeDoc;
        }
        var doc = this.requireDocument(maybeDoc);
        var transformResults = this.localTransformResults(localWriteTime);
        var newData = this.transformObject(doc.data, transformResults);
        return new document_Document(this.key, doc.version, newData, {
            hasLocalMutations: true
        });
    };
    TransformMutation.prototype.equals = function (other) {
        return (other instanceof TransformMutation &&
            this.key.equals(other.key) &&
            arrayEquals(this.fieldTransforms, other.fieldTransforms) &&
            this.precondition.equals(other.precondition));
    };
    /**
     * Asserts that the given MaybeDocument is actually a Document and verifies
     * that it matches the key for this mutation. Since we only support
     * transformations with precondition exists this method is guaranteed to be
     * safe.
     */
    TransformMutation.prototype.requireDocument = function (maybeDoc) {
        assert(maybeDoc instanceof document_Document, 'Unknown MaybeDocument type ' + maybeDoc);
        var doc = maybeDoc;
        assert(doc.key.equals(this.key), 'Can only transform a document with the same key');
        return doc;
    };
    /**
     * Creates a list of "transform results" (a transform result is a field value
     * representing the result of applying a transform) for use when applying a
     * TransformMutation locally.
     *
     * @param localWriteTime The local time of the transform mutation (used to
     *     generate ServerTimestampValues).
     * @return The transform results list.
     */
    TransformMutation.prototype.localTransformResults = function (localWriteTime) {
        var transformResults = [];
        for (var _i = 0, _a = this.fieldTransforms; _i < _a.length; _i++) {
            var fieldTransform = _a[_i];
            var transform = fieldTransform.transform;
            if (transform instanceof ServerTimestampTransform) {
                transformResults.push(new ServerTimestampValue(localWriteTime));
            }
            else {
                return fail('Encountered unknown transform: ' + transform);
            }
        }
        return transformResults;
    };
    TransformMutation.prototype.transformObject = function (data, transformResults) {
        assert(transformResults.length === this.fieldTransforms.length, 'TransformResults length mismatch.');
        for (var i = 0; i < this.fieldTransforms.length; i++) {
            var fieldTransform = this.fieldTransforms[i];
            var transform = fieldTransform.transform;
            var fieldPath = fieldTransform.field;
            if (transform instanceof ServerTimestampTransform) {
                data = data.set(fieldPath, transformResults[i]);
            }
            else {
                return fail('Encountered unknown transform: ' + transform);
            }
        }
        return data;
    };
    return TransformMutation;
}(mutation_Mutation));

/** A mutation that deletes the document at the given key. */
var mutation_DeleteMutation = /** @class */ (function (_super) {
    mutation___extends(DeleteMutation, _super);
    function DeleteMutation(key, precondition) {
        var _this = _super.call(this) || this;
        _this.key = key;
        _this.precondition = precondition;
        _this.type = MutationType.Delete;
        return _this;
    }
    DeleteMutation.prototype.applyToRemoteDocument = function (maybeDoc, mutationResult) {
        this.verifyKeyMatches(maybeDoc);
        assert(mutationResult.transformResults == null, 'Transform results received by DeleteMutation.');
        // Unlike applyToLocalView, if we're applying a mutation to a remote
        // document the server has accepted the mutation so the precondition must
        // have held.
        return new document_NoDocument(this.key, snapshot_version_SnapshotVersion.MIN);
    };
    DeleteMutation.prototype.applyToLocalView = function (maybeDoc, localWriteTime) {
        this.verifyKeyMatches(maybeDoc);
        if (!this.precondition.isValidFor(maybeDoc)) {
            return maybeDoc;
        }
        if (maybeDoc) {
            assert(maybeDoc.key.equals(this.key), 'Can only apply mutation to document with same key');
        }
        return new document_NoDocument(this.key, snapshot_version_SnapshotVersion.forDeletedDoc());
    };
    DeleteMutation.prototype.equals = function (other) {
        return (other instanceof DeleteMutation &&
            this.key.equals(other.key) &&
            this.precondition.equals(other.precondition));
    };
    return DeleteMutation;
}(mutation_Mutation));


//# sourceMappingURL=mutation.js.map

// CONCATENATED MODULE: ../firestore/dist/esm/src/remote/existence_filter.js
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
var ExistenceFilter = /** @class */ (function () {
    // TODO(b/33078163): just use simplest form of existence filter for now
    function ExistenceFilter(count) {
        this.count = count;
    }
    ExistenceFilter.prototype.equals = function (other) {
        return other && other.count === this.count;
    };
    return ExistenceFilter;
}());


//# sourceMappingURL=existence_filter.js.map

// CONCATENATED MODULE: ../firestore/dist/esm/src/remote/rpc_error.js
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


/**
 * Error Codes describing the different ways GRPC can fail. These are copied
 * directly from GRPC's sources here:
 *
 * https://github.com/grpc/grpc/blob/bceec94ea4fc5f0085d81235d8e1c06798dc341a/include/grpc%2B%2B/impl/codegen/status_code_enum.h
 *
 * Important! The names of these identifiers matter because the string forms
 * are used for reverse lookups from the webchannel stream. Do NOT change the
 * names of these identifiers.
 */
var RpcCode;
(function (RpcCode) {
    RpcCode[RpcCode["OK"] = 0] = "OK";
    RpcCode[RpcCode["CANCELLED"] = 1] = "CANCELLED";
    RpcCode[RpcCode["UNKNOWN"] = 2] = "UNKNOWN";
    RpcCode[RpcCode["INVALID_ARGUMENT"] = 3] = "INVALID_ARGUMENT";
    RpcCode[RpcCode["DEADLINE_EXCEEDED"] = 4] = "DEADLINE_EXCEEDED";
    RpcCode[RpcCode["NOT_FOUND"] = 5] = "NOT_FOUND";
    RpcCode[RpcCode["ALREADY_EXISTS"] = 6] = "ALREADY_EXISTS";
    RpcCode[RpcCode["PERMISSION_DENIED"] = 7] = "PERMISSION_DENIED";
    RpcCode[RpcCode["UNAUTHENTICATED"] = 16] = "UNAUTHENTICATED";
    RpcCode[RpcCode["RESOURCE_EXHAUSTED"] = 8] = "RESOURCE_EXHAUSTED";
    RpcCode[RpcCode["FAILED_PRECONDITION"] = 9] = "FAILED_PRECONDITION";
    RpcCode[RpcCode["ABORTED"] = 10] = "ABORTED";
    RpcCode[RpcCode["OUT_OF_RANGE"] = 11] = "OUT_OF_RANGE";
    RpcCode[RpcCode["UNIMPLEMENTED"] = 12] = "UNIMPLEMENTED";
    RpcCode[RpcCode["INTERNAL"] = 13] = "INTERNAL";
    RpcCode[RpcCode["UNAVAILABLE"] = 14] = "UNAVAILABLE";
    RpcCode[RpcCode["DATA_LOSS"] = 15] = "DATA_LOSS";
})(RpcCode || (RpcCode = {}));
function isPermanentError(code) {
    switch (code) {
        case Code.OK:
            return fail('Treated status OK as error');
        case Code.CANCELLED:
        case Code.UNKNOWN:
        case Code.DEADLINE_EXCEEDED:
        case Code.RESOURCE_EXHAUSTED:
        case Code.INTERNAL:
        case Code.UNAVAILABLE:
        // Unauthenticated means something went wrong with our token and we need
        // to retry with new credentials which will happen automatically.
        // TODO(b/37325376): Give up after second unauthenticated error.
        case Code.UNAUTHENTICATED:
            return false;
        case Code.INVALID_ARGUMENT:
        case Code.NOT_FOUND:
        case Code.ALREADY_EXISTS:
        case Code.PERMISSION_DENIED:
        case Code.FAILED_PRECONDITION:
        // Aborted might be retried in some scenarios, but that is dependant on
        // the context and should handled individually by the calling code.
        // See https://cloud.google.com/apis/design/errors.
        case Code.ABORTED:
        case Code.OUT_OF_RANGE:
        case Code.UNIMPLEMENTED:
        case Code.DATA_LOSS:
            return true;
        default:
            return fail('Unknown status code: ' + code);
    }
}
/**
 * Maps an error Code from a GRPC status identifier like 'NOT_FOUND'.
 *
 * @returns The Code equivalent to the given status string or undefined if
 *     there is no match.
 */
function mapCodeFromRpcStatus(status) {
    // tslint:disable-next-line:no-any lookup by string
    var code = RpcCode[status];
    if (code === undefined) {
        return undefined;
    }
    return mapCodeFromRpcCode(code);
}
/**
 * Maps an error Code from GRPC status code number, like 0, 1, or 14. These
 * are not the same as HTTP status codes.
 *
 * @returns The Code equivalent to the given GRPC status code. Fails if there
 *     is no match.
 */
function mapCodeFromRpcCode(code) {
    switch (code) {
        case RpcCode.OK:
            return Code.OK;
        case RpcCode.CANCELLED:
            return Code.CANCELLED;
        case RpcCode.UNKNOWN:
            return Code.UNKNOWN;
        case RpcCode.DEADLINE_EXCEEDED:
            return Code.DEADLINE_EXCEEDED;
        case RpcCode.RESOURCE_EXHAUSTED:
            return Code.RESOURCE_EXHAUSTED;
        case RpcCode.INTERNAL:
            return Code.INTERNAL;
        case RpcCode.UNAVAILABLE:
            return Code.UNAVAILABLE;
        case RpcCode.UNAUTHENTICATED:
            return Code.UNAUTHENTICATED;
        case RpcCode.INVALID_ARGUMENT:
            return Code.INVALID_ARGUMENT;
        case RpcCode.NOT_FOUND:
            return Code.NOT_FOUND;
        case RpcCode.ALREADY_EXISTS:
            return Code.ALREADY_EXISTS;
        case RpcCode.PERMISSION_DENIED:
            return Code.PERMISSION_DENIED;
        case RpcCode.FAILED_PRECONDITION:
            return Code.FAILED_PRECONDITION;
        case RpcCode.ABORTED:
            return Code.ABORTED;
        case RpcCode.OUT_OF_RANGE:
            return Code.OUT_OF_RANGE;
        case RpcCode.UNIMPLEMENTED:
            return Code.UNIMPLEMENTED;
        case RpcCode.DATA_LOSS:
            return Code.DATA_LOSS;
        default:
            return fail('Unknown status code: ' + code);
    }
}
/**
 * Maps an RPC code from a Code. This is the reverse operation from
 * mapCodeFromRpcCode and should really only be used in tests.
 */
function mapRpcCodeFromCode(code) {
    if (code === undefined) {
        return RpcCode.OK;
    }
    switch (code) {
        case Code.OK:
            return RpcCode.OK;
        case Code.CANCELLED:
            return RpcCode.CANCELLED;
        case Code.UNKNOWN:
            return RpcCode.UNKNOWN;
        case Code.DEADLINE_EXCEEDED:
            return RpcCode.DEADLINE_EXCEEDED;
        case Code.RESOURCE_EXHAUSTED:
            return RpcCode.RESOURCE_EXHAUSTED;
        case Code.INTERNAL:
            return RpcCode.INTERNAL;
        case Code.UNAVAILABLE:
            return RpcCode.UNAVAILABLE;
        case Code.UNAUTHENTICATED:
            return RpcCode.UNAUTHENTICATED;
        case Code.INVALID_ARGUMENT:
            return RpcCode.INVALID_ARGUMENT;
        case Code.NOT_FOUND:
            return RpcCode.NOT_FOUND;
        case Code.ALREADY_EXISTS:
            return RpcCode.ALREADY_EXISTS;
        case Code.PERMISSION_DENIED:
            return RpcCode.PERMISSION_DENIED;
        case Code.FAILED_PRECONDITION:
            return RpcCode.FAILED_PRECONDITION;
        case Code.ABORTED:
            return RpcCode.ABORTED;
        case Code.OUT_OF_RANGE:
            return RpcCode.OUT_OF_RANGE;
        case Code.UNIMPLEMENTED:
            return RpcCode.UNIMPLEMENTED;
        case Code.DATA_LOSS:
            return RpcCode.DATA_LOSS;
        default:
            return fail('Unknown status code: ' + code);
    }
}
/**
 * Converts an HTTP Status Code to the equivalent error code.
 *
 * @param status An HTTP Status Code, like 200, 404, 503, etc.
 * @returns The equivalent Code. Unknown status codes are mapped to
 *     Code.UNKNOWN.
 */
function mapCodeFromHttpStatus(status) {
    // The canonical error codes for Google APIs [1] specify mapping onto HTTP
    // status codes but the mapping is not bijective. In each case of ambiguity
    // this function chooses a primary error.
    //
    // [1]
    // https://github.com/googleapis/googleapis/blob/master/google/rpc/code.proto
    switch (status) {
        case 200:// OK
            return Code.OK;
        case 400:// Bad Request
            return Code.INVALID_ARGUMENT;
        // Other possibilities based on the forward mapping
        // return Code.FAILED_PRECONDITION;
        // return Code.OUT_OF_RANGE;
        case 401:// Unauthorized
            return Code.UNAUTHENTICATED;
        case 403:// Forbidden
            return Code.PERMISSION_DENIED;
        case 404:// Not Found
            return Code.NOT_FOUND;
        case 409:// Conflict
            return Code.ABORTED;
        // Other possibilities:
        // return Code.ALREADY_EXISTS;
        case 416:// Range Not Satisfiable
            return Code.OUT_OF_RANGE;
        case 429:// Too Many Requests
            return Code.RESOURCE_EXHAUSTED;
        case 499:// Client Closed Request
            return Code.CANCELLED;
        case 500:// Internal Server Error
            return Code.UNKNOWN;
        // Other possibilities:
        // return Code.INTERNAL;
        // return Code.DATA_LOSS;
        case 501:// Unimplemented
            return Code.UNIMPLEMENTED;
        case 503:// Service Unavailable
            return Code.UNAVAILABLE;
        case 504:// Gateway Timeout
            return Code.DEADLINE_EXCEEDED;
        default:
            if (status >= 200 && status < 300)
                return Code.OK;
            if (status >= 400 && status < 500)
                return Code.FAILED_PRECONDITION;
            if (status >= 500 && status < 600)
                return Code.INTERNAL;
            return Code.UNKNOWN;
    }
}

//# sourceMappingURL=rpc_error.js.map

// CONCATENATED MODULE: ../firestore/dist/esm/src/util/sorted_set.js
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

/**
 * SortedSet is an immutable (copy-on-write) collection that holds elements
 * in order specified by the provided comparator.
 *
 * NOTE: if provided comparator returns 0 for two elements, we consider them to
 * be equal!
 */
var sorted_set_SortedSet = /** @class */ (function () {
    function SortedSet(comparator) {
        this.comparator = comparator;
        this.data = new sorted_map_SortedMap(this.comparator);
    }
    /**
     * Creates a SortedSet from the keys of the map.
     * This is currently implemented as an O(n) copy.
     */
    SortedSet.fromMapKeys = function (map) {
        var keys = new SortedSet(map.comparator);
        map.forEach(function (key) {
            keys = keys.add(key);
        });
        return keys;
    };
    SortedSet.prototype.has = function (elem) {
        return this.data.get(elem) !== null;
    };
    SortedSet.prototype.first = function () {
        return this.data.minKey();
    };
    SortedSet.prototype.last = function () {
        return this.data.maxKey();
    };
    Object.defineProperty(SortedSet.prototype, "size", {
        get: function () {
            return this.data.size;
        },
        enumerable: true,
        configurable: true
    });
    SortedSet.prototype.indexOf = function (elem) {
        return this.data.indexOf(elem);
    };
    /** Iterates elements in order defined by "comparator" */
    SortedSet.prototype.forEach = function (cb) {
        this.data.inorderTraversal(function (k, v) {
            cb(k);
            return false;
        });
    };
    /** Iterates over `elem`s such that: range[0] <= elem < range[1]. */
    SortedSet.prototype.forEachInRange = function (range, cb) {
        var iter = this.data.getIteratorFrom(range[0]);
        while (iter.hasNext()) {
            var elem = iter.getNext();
            if (this.comparator(elem.key, range[1]) >= 0)
                return;
            cb(elem.key);
        }
    };
    /**
     * Iterates over `elem`s such that: start <= elem until false is returned.
     */
    SortedSet.prototype.forEachWhile = function (cb, start) {
        var iter;
        if (start !== undefined) {
            iter = this.data.getIteratorFrom(start);
        }
        else {
            iter = this.data.getIterator();
        }
        while (iter.hasNext()) {
            var elem = iter.getNext();
            var result = cb(elem.key);
            if (!result)
                return;
        }
    };
    /** Finds the least element greater than or equal to `elem`. */
    SortedSet.prototype.firstAfterOrEqual = function (elem) {
        var iter = this.data.getIteratorFrom(elem);
        return iter.hasNext() ? iter.getNext().key : null;
    };
    /** Inserts or updates an element */
    SortedSet.prototype.add = function (elem) {
        return this.copy(this.data.remove(elem).insert(elem, true));
    };
    /** Deletes an element */
    SortedSet.prototype.delete = function (elem) {
        if (!this.has(elem))
            return this;
        return this.copy(this.data.remove(elem));
    };
    SortedSet.prototype.isEmpty = function () {
        return this.data.isEmpty();
    };
    SortedSet.prototype.unionWith = function (other) {
        var result = this;
        other.forEach(function (elem) {
            result = result.add(elem);
        });
        return result;
    };
    SortedSet.prototype.equals = function (other) {
        if (!(other instanceof SortedSet))
            return false;
        if (this.size !== other.size)
            return false;
        var thisIt = this.data.getIterator();
        var otherIt = other.data.getIterator();
        while (thisIt.hasNext()) {
            var thisElem = thisIt.getNext().key;
            var otherElem = otherIt.getNext().key;
            if (this.comparator(thisElem, otherElem) !== 0)
                return false;
        }
        return true;
    };
    SortedSet.prototype.toString = function () {
        var result = [];
        this.forEach(function (elem) { return result.push(elem); });
        return 'SortedSet(' + result.toString() + ')';
    };
    SortedSet.prototype.copy = function (data) {
        var result = new SortedSet(this.comparator);
        result.data = data;
        return result;
    };
    return SortedSet;
}());


//# sourceMappingURL=sorted_set.js.map

// CONCATENATED MODULE: ../firestore/dist/esm/src/model/collections.js
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



var EMPTY_MAYBE_DOCUMENT_MAP = new sorted_map_SortedMap(document_key_DocumentKey.comparator);
function maybeDocumentMap() {
    return EMPTY_MAYBE_DOCUMENT_MAP;
}
var EMPTY_DOCUMENT_MAP = new sorted_map_SortedMap(document_key_DocumentKey.comparator);
function documentMap() {
    return EMPTY_DOCUMENT_MAP;
}
var EMPTY_DOCUMENT_VERSION_MAP = new sorted_map_SortedMap(document_key_DocumentKey.comparator);
function documentVersionMap() {
    return EMPTY_DOCUMENT_VERSION_MAP;
}
var EMPTY_DOCUMENT_KEY_SET = new sorted_set_SortedSet(document_key_DocumentKey.comparator);
function documentKeySet() {
    return EMPTY_DOCUMENT_KEY_SET;
}

//# sourceMappingURL=collections.js.map

// CONCATENATED MODULE: ../firestore/dist/esm/src/remote/remote_event.js
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



/**
 * An event from the RemoteStore. It is split into targetChanges (changes to the
 * state or the set of documents in our watched targets) and documentUpdates
 * (changes to the actual documents).
 */
var remote_event_RemoteEvent = /** @class */ (function () {
    function RemoteEvent(
        /**
         * The snapshot version this event brings us up to, or MIN if not set.
         */
        snapshotVersion, 
        /**
         * A map from target to changes to the target. See TargetChange.
         */
        targetChanges, 
        /**
         * A set of which documents have changed or been deleted, along with the
         * doc's new values (if not deleted).
         */
        documentUpdates) {
        this.snapshotVersion = snapshotVersion;
        this.targetChanges = targetChanges;
        this.documentUpdates = documentUpdates;
    }
    RemoteEvent.prototype.addDocumentUpdate = function (doc) {
        this.documentUpdates = this.documentUpdates.insert(doc.key, doc);
    };
    RemoteEvent.prototype.handleExistenceFilterMismatch = function (targetId) {
        /*
         * An existence filter mismatch will reset the query and we need to reset
         * the mapping to contain no documents and an empty resume token.
         *
         * Note:
         *   * The reset mapping is empty, specifically forcing the consumer of the
         *     change to forget all keys for this targetID;
         *   * The resume snapshot for this target must be reset
         *   * The target must be unacked because unwatching and rewatching
         *     introduces a race for changes.
         */
        this.targetChanges[targetId] = {
            mapping: new ResetMapping(),
            snapshotVersion: snapshot_version_SnapshotVersion.MIN,
            currentStatusUpdate: CurrentStatusUpdate.MarkNotCurrent,
            resumeToken: emptyByteString()
        };
    };
    return RemoteEvent;
}());

/**
 * Represents an update to the current status of a target, either explicitly
 * having no new state, or the new value to set. Note "current" has special
 * meaning for in the RPC protocol that implies that a target is both up-to-date
 * and consistent with the rest of the watch stream.
 */
var CurrentStatusUpdate;
(function (CurrentStatusUpdate) {
    /** The current status is not affected and should not be modified. */
    CurrentStatusUpdate[CurrentStatusUpdate["None"] = 0] = "None";
    /** The target must be marked as no longer "current". */
    CurrentStatusUpdate[CurrentStatusUpdate["MarkNotCurrent"] = 1] = "MarkNotCurrent";
    /** The target must be marked as "current". */
    CurrentStatusUpdate[CurrentStatusUpdate["MarkCurrent"] = 2] = "MarkCurrent";
})(CurrentStatusUpdate || (CurrentStatusUpdate = {}));
var EMPTY_KEY_SET = documentKeySet();
var ResetMapping = /** @class */ (function () {
    function ResetMapping() {
        this.docs = EMPTY_KEY_SET;
    }
    Object.defineProperty(ResetMapping.prototype, "documents", {
        get: function () {
            return this.docs;
        },
        enumerable: true,
        configurable: true
    });
    ResetMapping.prototype.add = function (key) {
        this.docs = this.docs.add(key);
    };
    ResetMapping.prototype.delete = function (key) {
        this.docs = this.docs.delete(key);
    };
    ResetMapping.prototype.equals = function (other) {
        return other !== null && this.docs.equals(other.docs);
    };
    return ResetMapping;
}());

var UpdateMapping = /** @class */ (function () {
    function UpdateMapping() {
        this.addedDocuments = EMPTY_KEY_SET;
        this.removedDocuments = EMPTY_KEY_SET;
    }
    UpdateMapping.prototype.applyToKeySet = function (keys) {
        var result = keys;
        this.addedDocuments.forEach(function (key) { return (result = result.add(key)); });
        this.removedDocuments.forEach(function (key) { return (result = result.delete(key)); });
        return result;
    };
    UpdateMapping.prototype.add = function (key) {
        this.addedDocuments = this.addedDocuments.add(key);
        this.removedDocuments = this.removedDocuments.delete(key);
    };
    UpdateMapping.prototype.delete = function (key) {
        this.addedDocuments = this.addedDocuments.delete(key);
        this.removedDocuments = this.removedDocuments.add(key);
    };
    UpdateMapping.prototype.equals = function (other) {
        return (other !== null &&
            this.addedDocuments.equals(other.addedDocuments) &&
            this.removedDocuments.equals(other.removedDocuments));
    };
    return UpdateMapping;
}());


//# sourceMappingURL=remote_event.js.map

// CONCATENATED MODULE: ../firestore/dist/esm/src/remote/watch_change.js
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





/**
 * Represents a changed document and a list of target ids to which this change
 * applies.
 *
 * If document has been deleted NoDocument will be provided.
 */
var DocumentWatchChange = /** @class */ (function () {
    function DocumentWatchChange(
        /** The new document applies to all of these targets. */
        updatedTargetIds, 
        /** The new document is removed from all of these targets. */
        removedTargetIds, 
        /** The key of the document for this change. */
        key, 
        /**
         * The new document or NoDocument if it was deleted. Is null if the
         * document went out of view without the server sending a new document.
         */
        newDoc) {
        this.updatedTargetIds = updatedTargetIds;
        this.removedTargetIds = removedTargetIds;
        this.key = key;
        this.newDoc = newDoc;
    }
    return DocumentWatchChange;
}());

var ExistenceFilterChange = /** @class */ (function () {
    function ExistenceFilterChange(targetId, existenceFilter) {
        this.targetId = targetId;
        this.existenceFilter = existenceFilter;
    }
    return ExistenceFilterChange;
}());

var WatchTargetChangeState;
(function (WatchTargetChangeState) {
    WatchTargetChangeState[WatchTargetChangeState["NoChange"] = 0] = "NoChange";
    WatchTargetChangeState[WatchTargetChangeState["Added"] = 1] = "Added";
    WatchTargetChangeState[WatchTargetChangeState["Removed"] = 2] = "Removed";
    WatchTargetChangeState[WatchTargetChangeState["Current"] = 3] = "Current";
    WatchTargetChangeState[WatchTargetChangeState["Reset"] = 4] = "Reset";
})(WatchTargetChangeState || (WatchTargetChangeState = {}));
var watch_change_WatchTargetChange = /** @class */ (function () {
    function WatchTargetChange(
        /** What kind of change occurred to the watch target. */
        state, 
        /** The target IDs that were added/removed/set. */
        targetIds, 
        /**
         * An opaque, server-assigned token that allows watching a query to be
         * resumed after disconnecting without retransmitting all the data that
         * matches the query. The resume token essentially identifies a point in
         * time from which the server should resume sending results.
         */
        resumeToken, 
        /** An RPC error indicating why the watch failed. */
        cause) {
        if (resumeToken === void 0) { resumeToken = emptyByteString(); }
        if (cause === void 0) { cause = null; }
        this.state = state;
        this.targetIds = targetIds;
        this.resumeToken = resumeToken;
        this.cause = cause;
    }
    return WatchTargetChange;
}());

/**
 * A helper class to accumulate watch changes into a RemoteEvent and other
 * target information.
 */
var watch_change_WatchChangeAggregator = /** @class */ (function () {
    function WatchChangeAggregator(snapshotVersion, listenTargets, pendingTargetResponses) {
        this.snapshotVersion = snapshotVersion;
        this.listenTargets = listenTargets;
        /** The existence filter - if any - for the given target IDs. */
        this.existenceFilters = {};
        /** Keeps track of the current target mappings */
        this.targetChanges = {};
        /** Keeps track of document to update */
        this.documentUpdates = maybeDocumentMap();
        /** Whether this aggregator was frozen and can no longer be modified */
        this.frozen = false;
        this.pendingTargetResponses = shallowCopy(pendingTargetResponses);
    }
    /** Aggregates a watch change into the current state */
    WatchChangeAggregator.prototype.add = function (watchChange) {
        assert(!this.frozen, 'Trying to modify frozen WatchChangeAggregator.');
        if (watchChange instanceof DocumentWatchChange) {
            this.addDocumentChange(watchChange);
        }
        else if (watchChange instanceof watch_change_WatchTargetChange) {
            this.addTargetChange(watchChange);
        }
        else if (watchChange instanceof ExistenceFilterChange) {
            this.addExistenceFilterChange(watchChange);
        }
        else {
            fail('Unknown watch change: ' + watchChange);
        }
    };
    /** Aggregates all provided watch changes to the current state in order */
    WatchChangeAggregator.prototype.addChanges = function (watchChanges) {
        var _this = this;
        assert(!this.frozen, 'Trying to modify frozen WatchChangeAggregator.');
        watchChanges.forEach(function (change) { return _this.add(change); });
    };
    /**
     * Converts the current state into a remote event with the snapshot version
     * provided via the constructor.
     */
    WatchChangeAggregator.prototype.createRemoteEvent = function () {
        var _this = this;
        var targetChanges = this.targetChanges;
        // Remove all the non-active targets from the remote event.
        forEachNumber(this.targetChanges, function (targetId) {
            if (!_this.isActiveTarget(targetId)) {
                delete targetChanges[targetId];
            }
        });
        // Mark this aggregator as frozen so no further modifications are made
        this.frozen = true;
        return new remote_event_RemoteEvent(this.snapshotVersion, targetChanges, this.documentUpdates);
    };
    WatchChangeAggregator.prototype.ensureTargetChange = function (targetId) {
        var change = this.targetChanges[targetId];
        if (!change) {
            // Create an UpdateMapping by default, since resets are always explicit.
            change = {
                currentStatusUpdate: CurrentStatusUpdate.None,
                snapshotVersion: this.snapshotVersion,
                mapping: new UpdateMapping(),
                resumeToken: emptyByteString()
            };
            this.targetChanges[targetId] = change;
        }
        return change;
    };
    /**
     * We need to wait for watch to ack targets before we process those events,
     * so to know if a target is active, there must be no pending acks we're
     * waiting for and it must be in the current list of targets that the client
     * cares about.
     *
     * This method is visible for testing.
     */
    WatchChangeAggregator.prototype.isActiveTarget = function (targetId) {
        return (!contains(this.pendingTargetResponses, targetId) &&
            contains(this.listenTargets, targetId));
    };
    WatchChangeAggregator.prototype.addDocumentChange = function (docChange) {
        var relevant = false;
        for (var _i = 0, _a = docChange.updatedTargetIds; _i < _a.length; _i++) {
            var targetId = _a[_i];
            if (this.isActiveTarget(targetId)) {
                var change = this.ensureTargetChange(targetId);
                change.mapping.add(docChange.key);
                relevant = true;
            }
        }
        for (var _b = 0, _c = docChange.removedTargetIds; _b < _c.length; _b++) {
            var targetId = _c[_b];
            if (this.isActiveTarget(targetId)) {
                var change = this.ensureTargetChange(targetId);
                change.mapping.delete(docChange.key);
                relevant = true;
            }
        }
        // Only update the document if there is a new document to replace to an
        // active target that is being listened to, this might be just a target
        // update instead.
        if (docChange.newDoc && relevant) {
            this.documentUpdates = this.documentUpdates.insert(docChange.key, docChange.newDoc);
        }
    };
    WatchChangeAggregator.prototype.addTargetChange = function (targetChange) {
        var _this = this;
        targetChange.targetIds.forEach(function (targetId) {
            var change = _this.ensureTargetChange(targetId);
            switch (targetChange.state) {
                case WatchTargetChangeState.NoChange:
                    if (_this.isActiveTarget(targetId)) {
                        // Creating the change above satisfies the semantics of no-change.
                        applyResumeToken(change, targetChange.resumeToken);
                    }
                    break;
                case WatchTargetChangeState.Added:
                    // We need to decrement the number of pending acks needed from watch
                    // for this targetId.
                    _this.recordTargetResponse(targetId);
                    if (!contains(_this.pendingTargetResponses, targetId)) {
                        // We have a freshly added target, so we need to reset any state
                        // that we had previously This can happen e.g. when remove and add
                        // back a target for existence filter mismatches.
                        change.mapping = new UpdateMapping();
                        change.currentStatusUpdate = CurrentStatusUpdate.None;
                        delete _this.existenceFilters[targetId];
                    }
                    applyResumeToken(change, targetChange.resumeToken);
                    break;
                case WatchTargetChangeState.Removed:
                    // We need to keep track of removed targets to we can
                    // post-filter and remove any target changes.
                    // We need to decrement the number of pending acks needed from watch
                    // for this targetId.
                    _this.recordTargetResponse(targetId);
                    assert(!targetChange.cause, 'WatchChangeAggregator does not handle errored targets');
                    break;
                case WatchTargetChangeState.Current:
                    if (_this.isActiveTarget(targetId)) {
                        change.currentStatusUpdate = CurrentStatusUpdate.MarkCurrent;
                        applyResumeToken(change, targetChange.resumeToken);
                    }
                    break;
                case WatchTargetChangeState.Reset:
                    if (_this.isActiveTarget(targetId)) {
                        // Overwrite any existing target mapping with a reset
                        // mapping. Every subsequent update will modify the reset
                        // mapping, not an update mapping.
                        change.mapping = new ResetMapping();
                        applyResumeToken(change, targetChange.resumeToken);
                    }
                    break;
                default:
                    fail('Unknown target watch change state: ' + targetChange.state);
            }
        });
    };
    /**
     * Record that we get a watch target add/remove by decrementing the number of
     * pending target responses that we have.
     */
    WatchChangeAggregator.prototype.recordTargetResponse = function (targetId) {
        var newCount = (this.pendingTargetResponses[targetId] || 0) - 1;
        if (newCount === 0) {
            delete this.pendingTargetResponses[targetId];
        }
        else {
            this.pendingTargetResponses[targetId] = newCount;
        }
    };
    WatchChangeAggregator.prototype.addExistenceFilterChange = function (change) {
        if (this.isActiveTarget(change.targetId)) {
            this.existenceFilters[change.targetId] = change.existenceFilter;
        }
    };
    return WatchChangeAggregator;
}());

/**
 * Applies the resume token to the TargetChange, but only when it has a new
 * value. null and empty resumeTokens are discarded.
 */
function applyResumeToken(change, resumeToken) {
    if (resumeToken.length > 0) {
        change.resumeToken = resumeToken;
    }
}

//# sourceMappingURL=watch_change.js.map

// CONCATENATED MODULE: ../firestore/dist/esm/src/remote/serializer.js
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



















var DIRECTIONS = (function () {
    var dirs = {};
    dirs[Direction.ASCENDING.name] = 'ASCENDING';
    dirs[Direction.DESCENDING.name] = 'DESCENDING';
    return dirs;
})();
var OPERATORS = (function () {
    var ops = {};
    ops[query_RelationOp.LESS_THAN.name] = 'LESS_THAN';
    ops[query_RelationOp.LESS_THAN_OR_EQUAL.name] = 'LESS_THAN_OR_EQUAL';
    ops[query_RelationOp.GREATER_THAN.name] = 'GREATER_THAN';
    ops[query_RelationOp.GREATER_THAN_OR_EQUAL.name] = 'GREATER_THAN_OR_EQUAL';
    ops[query_RelationOp.EQUAL.name] = 'EQUAL';
    return ops;
})();
function assertPresent(value, description) {
    assert(!isNullOrUndefined(value), description + ' is missing');
}
function parseInt64(value) {
    // TODO(bjornick): Handle int64 greater than 53 bits.
    if (typeof value === 'number') {
        return value;
    }
    else if (typeof value === 'string') {
        return parseInt(value, 10);
    }
    else {
        return fail("can't parse " + value);
    }
}
/**
 * Generates JsonObject values for the Datastore API suitable for sending to
 * either GRPC stub methods or via the JSON/HTTP REST API.
 * TODO(klimt): We can remove the databaseId argument if we keep the full
 * resource name in documents.
 */
var serializer_JsonProtoSerializer = /** @class */ (function () {
    function JsonProtoSerializer(databaseId, options) {
        this.databaseId = databaseId;
        this.options = options;
    }
    JsonProtoSerializer.prototype.emptyByteString = function () {
        if (this.options.useProto3Json) {
            return '';
        }
        else {
            return new Uint8Array(0);
        }
    };
    JsonProtoSerializer.prototype.unsafeCastProtoByteString = function (byteString) {
        // byteStrings can be either string or UInt8Array, but the typings say
        // it's always a string. Cast as string to avoid type check failing
        return byteString;
    };
    JsonProtoSerializer.prototype.fromRpcStatus = function (status) {
        var code = status.code === undefined
            ? Code.UNKNOWN
            : mapCodeFromRpcCode(status.code);
        return new FirestoreError(code, status.message || '');
    };
    /**
     * Returns a value for a Date that's appropriate to put into a proto.
     * DO NOT USE THIS FOR ANYTHING ELSE.
     * This method cheats. It's typed as returning "string" because that's what
     * our generated proto interfaces say dates must be. But it's easier and safer
     * to actually return a Timestamp proto.
     */
    JsonProtoSerializer.prototype.toTimestamp = function (timestamp) {
        return {
            seconds: timestamp.seconds,
            nanos: timestamp.nanos
            // tslint:disable-next-line:no-any
        };
    };
    JsonProtoSerializer.prototype.fromTimestamp = function (date) {
        // The json interface (for the browser) will return an iso timestamp string,
        // while the proto js library (for node) will return a
        // google.protobuf.Timestamp instance.
        if (typeof date === 'string') {
            // TODO(b/37282237): Use strings for Proto3 timestamps
            // assert(this.options.useProto3Json,
            //   'The timestamp string format requires Proto3.');
            return timestamp_Timestamp.fromISOString(date);
        }
        else {
            assert(!!date, 'Cannot deserialize null or undefined timestamp.');
            // TODO(b/37282237): Use strings for Proto3 timestamps
            // assert(!this.options.useProto3Json,
            //   'The timestamp instance format requires Proto JS.');
            var seconds = parseInt64(date.seconds || '0');
            var nanos = date.nanos || 0;
            return new timestamp_Timestamp(seconds, nanos);
        }
    };
    /**
     * Returns a value for bytes that's appropriate to put in a proto.
     * DO NOT USE THIS FOR ANYTHING ELSE.
     * This method cheats. It's typed as returning "string" because that's what
     * our generated proto interfaces say bytes must be. But it should return
     * an Uint8Array in Node.
     */
    JsonProtoSerializer.prototype.toBytes = function (bytes) {
        if (this.options.useProto3Json) {
            return bytes.toBase64();
        }
        else {
            // The typings say it's a string, but it needs to be a Uint8Array in Node.
            return this.unsafeCastProtoByteString(bytes.toUint8Array());
        }
    };
    /**
     * Parse the blob from the protos into the internal Blob class. Note that the
     * typings assume all blobs are strings, but they are actually Uint8Arrays
     * on Node.
     */
    JsonProtoSerializer.prototype.fromBlob = function (blob) {
        if (typeof blob === 'string') {
            assert(this.options.useProto3Json, 'Expected bytes to be passed in as Uint8Array, but got a string instead.');
            return blob_Blob.fromBase64String(blob);
        }
        else {
            assert(!this.options.useProto3Json, 'Expected bytes to be passed in as string, but got something else instead.');
            return blob_Blob.fromUint8Array(blob);
        }
    };
    JsonProtoSerializer.prototype.toVersion = function (version) {
        return this.toTimestamp(version.toTimestamp());
    };
    JsonProtoSerializer.prototype.fromVersion = function (version) {
        assert(!!version, "Trying to deserialize version that isn't set");
        return snapshot_version_SnapshotVersion.fromTimestamp(this.fromTimestamp(version));
    };
    JsonProtoSerializer.prototype.toResourceName = function (databaseId, path) {
        return this.fullyQualifiedPrefixPath(databaseId)
            .child('documents')
            .child(path)
            .canonicalString();
    };
    JsonProtoSerializer.prototype.fromResourceName = function (name) {
        var resource = path_ResourcePath.fromString(name);
        assert(this.isValidResourceName(resource), 'Tried to deserialize invalid key ' + resource.toString());
        return resource;
    };
    JsonProtoSerializer.prototype.toName = function (key) {
        return this.toResourceName(this.databaseId, key.path);
    };
    JsonProtoSerializer.prototype.fromName = function (name) {
        var resource = this.fromResourceName(name);
        assert(resource.get(1) === this.databaseId.projectId, 'Tried to deserialize key from different project: ' +
            resource.get(1) +
            ' vs ' +
            this.databaseId.projectId);
        assert((!resource.get(3) && !this.databaseId.database) ||
            resource.get(3) === this.databaseId.database, 'Tried to deserialize key from different database: ' +
            resource.get(3) +
            ' vs ' +
            this.databaseId.database);
        return new document_key_DocumentKey(this.extractLocalPathFromResourceName(resource));
    };
    JsonProtoSerializer.prototype.toQueryPath = function (path) {
        if (path.length === 0) {
            // If the path is empty, the backend requires we leave off the /documents
            // at the end.
            return this.encodedDatabaseId;
        }
        return this.toResourceName(this.databaseId, path);
    };
    JsonProtoSerializer.prototype.fromQueryPath = function (name) {
        var resourceName = this.fromResourceName(name);
        if (resourceName.length === 4) {
            return path_ResourcePath.EMPTY_PATH;
        }
        return this.extractLocalPathFromResourceName(resourceName);
    };
    Object.defineProperty(JsonProtoSerializer.prototype, "encodedDatabaseId", {
        get: function () {
            var path = new path_ResourcePath([
                'projects',
                this.databaseId.projectId,
                'databases',
                this.databaseId.database
            ]);
            return path.canonicalString();
        },
        enumerable: true,
        configurable: true
    });
    JsonProtoSerializer.prototype.fullyQualifiedPrefixPath = function (databaseId) {
        return new path_ResourcePath([
            'projects',
            databaseId.projectId,
            'databases',
            databaseId.database
        ]);
    };
    JsonProtoSerializer.prototype.extractLocalPathFromResourceName = function (resourceName) {
        assert(resourceName.length > 4 && resourceName.get(4) === 'documents', 'tried to deserialize invalid key ' + resourceName.toString());
        return resourceName.popFirst(5);
    };
    JsonProtoSerializer.prototype.isValidResourceName = function (path) {
        // Resource names have at least 4 components (project ID, database ID)
        return (path.length >= 4 &&
            path.get(0) === 'projects' &&
            path.get(2) === 'databases');
    };
    JsonProtoSerializer.prototype.toValue = function (val) {
        if (val instanceof NullValue) {
            return { nullValue: 'NULL_VALUE' };
        }
        else if (val instanceof field_value_BooleanValue) {
            return { booleanValue: val.value() };
        }
        else if (val instanceof IntegerValue) {
            return { integerValue: '' + val.value() };
        }
        else if (val instanceof DoubleValue) {
            var doubleValue = val.value();
            if (this.options.useProto3Json) {
                // Proto 3 let's us encode NaN and Infinity as string values as
                // expected by the backend. This is currently not checked by our unit
                // tests because they rely on protobuf.js.
                if (isNaN(doubleValue)) {
                    return { doubleValue: 'NaN' };
                }
                else if (doubleValue === Infinity) {
                    return { doubleValue: 'Infinity' };
                }
                else if (doubleValue === -Infinity) {
                    return { doubleValue: '-Infinity' };
                }
            }
            return { doubleValue: val.value() };
        }
        else if (val instanceof field_value_StringValue) {
            return { stringValue: val.value() };
        }
        else if (val instanceof field_value_ObjectValue) {
            return { mapValue: this.toMapValue(val) };
        }
        else if (val instanceof field_value_ArrayValue) {
            return { arrayValue: this.toArrayValue(val) };
        }
        else if (val instanceof TimestampValue) {
            return {
                timestampValue: this.toTimestamp(val.internalValue)
            };
        }
        else if (val instanceof GeoPointValue) {
            return {
                geoPointValue: {
                    latitude: val.value().latitude,
                    longitude: val.value().longitude
                }
            };
        }
        else if (val instanceof BlobValue) {
            return {
                bytesValue: this.toBytes(val.value())
            };
        }
        else if (val instanceof field_value_RefValue) {
            return {
                referenceValue: this.toResourceName(val.databaseId, val.key.path)
            };
        }
        else {
            return fail('Unknown FieldValue ' + JSON.stringify(val));
        }
    };
    JsonProtoSerializer.prototype.fromValue = function (obj) {
        var _this = this;
        // tslint:disable-next-line:no-any
        var type = obj['value_type'];
        if (hasTag(obj, type, 'nullValue')) {
            return NullValue.INSTANCE;
        }
        else if (hasTag(obj, type, 'booleanValue')) {
            return field_value_BooleanValue.of(obj.booleanValue);
        }
        else if (hasTag(obj, type, 'integerValue')) {
            return new IntegerValue(parseInt64(obj.integerValue));
        }
        else if (hasTag(obj, type, 'doubleValue')) {
            if (this.options.useProto3Json) {
                // Proto 3 uses the string values 'NaN' and 'Infinity'.
                if (obj.doubleValue === 'NaN') {
                    return DoubleValue.NAN;
                }
                else if (obj.doubleValue === 'Infinity') {
                    return DoubleValue.POSITIVE_INFINITY;
                }
                else if (obj.doubleValue === '-Infinity') {
                    return DoubleValue.NEGATIVE_INFINITY;
                }
            }
            return new DoubleValue(obj.doubleValue);
        }
        else if (hasTag(obj, type, 'stringValue')) {
            return new field_value_StringValue(obj.stringValue);
        }
        else if (hasTag(obj, type, 'mapValue')) {
            return this.fromFields(obj.mapValue.fields || {});
        }
        else if (hasTag(obj, type, 'arrayValue')) {
            // "values" is not present if the array is empty
            assertPresent(obj.arrayValue, 'arrayValue');
            var values = obj.arrayValue.values || [];
            return new field_value_ArrayValue(values.map(function (v) { return _this.fromValue(v); }));
        }
        else if (hasTag(obj, type, 'timestampValue')) {
            assertPresent(obj.timestampValue, 'timestampValue');
            return new TimestampValue(this.fromTimestamp(obj.timestampValue));
        }
        else if (hasTag(obj, type, 'geoPointValue')) {
            assertPresent(obj.geoPointValue, 'geoPointValue');
            var latitude = obj.geoPointValue.latitude || 0;
            var longitude = obj.geoPointValue.longitude || 0;
            return new GeoPointValue(new geo_point_GeoPoint(latitude, longitude));
        }
        else if (hasTag(obj, type, 'bytesValue')) {
            assertPresent(obj.bytesValue, 'bytesValue');
            var blob = this.fromBlob(obj.bytesValue);
            return new BlobValue(blob);
        }
        else if (hasTag(obj, type, 'referenceValue')) {
            assertPresent(obj.referenceValue, 'referenceValue');
            var resourceName = this.fromResourceName(obj.referenceValue);
            var dbId = new database_info_DatabaseId(resourceName.get(1), resourceName.get(3));
            var key = new document_key_DocumentKey(this.extractLocalPathFromResourceName(resourceName));
            return new field_value_RefValue(dbId, key);
        }
        else {
            return fail('Unknown Value proto ' + JSON.stringify(obj));
        }
    };
    /** Creates an api.Document from key and fields (but no create/update time) */
    JsonProtoSerializer.prototype.toMutationDocument = function (key, fields) {
        return {
            name: this.toName(key),
            fields: this.toFields(fields)
        };
    };
    JsonProtoSerializer.prototype.toDocument = function (document) {
        assert(!document.hasLocalMutations, "Can't serialize documents with mutations.");
        return {
            name: this.toName(document.key),
            fields: this.toFields(document.data),
            updateTime: this.toTimestamp(document.version.toTimestamp())
        };
    };
    JsonProtoSerializer.prototype.fromDocument = function (document) {
        return new document_Document(this.fromName(document.name), this.fromVersion(document.updateTime), this.fromFields(document.fields || {}), { hasLocalMutations: false });
    };
    JsonProtoSerializer.prototype.toFields = function (fields) {
        var _this = this;
        var result = {};
        fields.forEach(function (key, value) {
            result[key] = _this.toValue(value);
        });
        return result;
    };
    JsonProtoSerializer.prototype.fromFields = function (object) {
        var _this = this;
        // Proto map<string, Value> gets mapped to Object, so cast it.
        var map = object;
        var result = field_value_ObjectValue.EMPTY;
        forEach(map, function (key, value) {
            result = result.set(new path_FieldPath([key]), _this.fromValue(value));
        });
        return result;
    };
    JsonProtoSerializer.prototype.toMapValue = function (map) {
        return {
            fields: this.toFields(map)
        };
    };
    JsonProtoSerializer.prototype.toArrayValue = function (array) {
        var _this = this;
        var result = [];
        array.forEach(function (value) {
            result.push(_this.toValue(value));
        });
        return { values: result };
    };
    JsonProtoSerializer.prototype.fromFound = function (doc) {
        assert(!!doc.found, 'Tried to deserialize a found document from a missing document.');
        assertPresent(doc.found.name, 'doc.found.name');
        assertPresent(doc.found.updateTime, 'doc.found.updateTime');
        var key = this.fromName(doc.found.name);
        var version = this.fromVersion(doc.found.updateTime);
        var fields = this.fromFields(doc.found.fields || {});
        return new document_Document(key, version, fields, { hasLocalMutations: false });
    };
    JsonProtoSerializer.prototype.fromMissing = function (result) {
        assert(!!result.missing, 'Tried to deserialize a missing document from a found document.');
        assert(!!result.readTime, 'Tried to deserialize a missing document without a read time.');
        var key = this.fromName(result.missing);
        var version = this.fromVersion(result.readTime);
        return new document_NoDocument(key, version);
    };
    JsonProtoSerializer.prototype.fromMaybeDocument = function (result) {
        // tslint:disable-next-line:no-any
        var type = result['result_type'];
        if (hasTag(result, type, 'found')) {
            return this.fromFound(result);
        }
        else if (hasTag(result, type, 'missing')) {
            return this.fromMissing(result);
        }
        return fail('invalid batch get response: ' + JSON.stringify(result));
    };
    JsonProtoSerializer.prototype.toWatchTargetChangeState = function (state) {
        switch (state) {
            case WatchTargetChangeState.Added:
                return 'ADD';
            case WatchTargetChangeState.Current:
                return 'CURRENT';
            case WatchTargetChangeState.NoChange:
                return 'NO_CHANGE';
            case WatchTargetChangeState.Removed:
                return 'REMOVE';
            case WatchTargetChangeState.Reset:
                return 'RESET';
            default:
                return fail('Unknown WatchTargetChangeState: ' + state);
        }
    };
    JsonProtoSerializer.prototype.toTestWatchChange = function (watchChange) {
        if (watchChange instanceof ExistenceFilterChange) {
            return {
                filter: {
                    count: watchChange.existenceFilter.count,
                    targetId: watchChange.targetId
                }
            };
        }
        if (watchChange instanceof DocumentWatchChange) {
            if (watchChange.newDoc instanceof document_Document) {
                var doc = watchChange.newDoc;
                return {
                    documentChange: {
                        document: {
                            name: this.toName(doc.key),
                            fields: this.toFields(doc.data),
                            updateTime: this.toVersion(doc.version)
                        },
                        targetIds: watchChange.updatedTargetIds,
                        removedTargetIds: watchChange.removedTargetIds
                    }
                };
            }
            else if (watchChange.newDoc instanceof document_NoDocument) {
                var doc = watchChange.newDoc;
                return {
                    documentDelete: {
                        document: this.toName(doc.key),
                        readTime: this.toVersion(doc.version),
                        removedTargetIds: watchChange.removedTargetIds
                    }
                };
            }
            else if (watchChange.newDoc === null) {
                return {
                    documentRemove: {
                        document: this.toName(watchChange.key),
                        removedTargetIds: watchChange.removedTargetIds
                    }
                };
            }
        }
        if (watchChange instanceof watch_change_WatchTargetChange) {
            var cause = undefined;
            if (watchChange.cause) {
                cause = {
                    code: mapRpcCodeFromCode(watchChange.cause.code),
                    message: watchChange.cause.message
                };
            }
            return {
                targetChange: {
                    targetChangeType: this.toWatchTargetChangeState(watchChange.state),
                    targetIds: watchChange.targetIds,
                    resumeToken: this.unsafeCastProtoByteString(watchChange.resumeToken),
                    cause: cause
                }
            };
        }
        return fail('Unrecognized watch change: ' + JSON.stringify(watchChange));
    };
    JsonProtoSerializer.prototype.fromWatchChange = function (change) {
        // tslint:disable-next-line:no-any
        var type = change['change_type'];
        var watchChange;
        if (hasTag(change, type, 'targetChange')) {
            assertPresent(change.targetChange, 'targetChange');
            // proto3 default value is unset in JSON (undefined), so use 'NO_CHANGE'
            // if unset
            var state = this.fromWatchTargetChangeState(change.targetChange.targetChangeType || 'NO_CHANGE');
            var targetIds = change.targetChange.targetIds || [];
            var resumeToken = change.targetChange.resumeToken || this.emptyByteString();
            var causeProto = change.targetChange.cause;
            var cause = causeProto && this.fromRpcStatus(causeProto);
            watchChange = new watch_change_WatchTargetChange(state, targetIds, resumeToken, cause || null);
        }
        else if (hasTag(change, type, 'documentChange')) {
            assertPresent(change.documentChange, 'documentChange');
            assertPresent(change.documentChange.document, 'documentChange.name');
            assertPresent(change.documentChange.document.name, 'documentChange.document.name');
            assertPresent(change.documentChange.document.updateTime, 'documentChange.document.updateTime');
            var entityChange = change.documentChange;
            var key = this.fromName(entityChange.document.name);
            var version = this.fromVersion(entityChange.document.updateTime);
            var fields = this.fromFields(entityChange.document.fields || {});
            var doc = new document_Document(key, version, fields, {
                hasLocalMutations: false
            });
            var updatedTargetIds = entityChange.targetIds || [];
            var removedTargetIds = entityChange.removedTargetIds || [];
            watchChange = new DocumentWatchChange(updatedTargetIds, removedTargetIds, doc.key, doc);
        }
        else if (hasTag(change, type, 'documentDelete')) {
            assertPresent(change.documentDelete, 'documentDelete');
            assertPresent(change.documentDelete.document, 'documentDelete.document');
            var docDelete = change.documentDelete;
            var key = this.fromName(docDelete.document);
            var version = docDelete.readTime
                ? this.fromVersion(docDelete.readTime)
                : snapshot_version_SnapshotVersion.forDeletedDoc();
            var doc = new document_NoDocument(key, version);
            var removedTargetIds = docDelete.removedTargetIds || [];
            watchChange = new DocumentWatchChange([], removedTargetIds, doc.key, doc);
        }
        else if (hasTag(change, type, 'documentRemove')) {
            assertPresent(change.documentRemove, 'documentRemove');
            assertPresent(change.documentRemove.document, 'documentRemove');
            var docRemove = change.documentRemove;
            var key = this.fromName(docRemove.document);
            var removedTargetIds = docRemove.removedTargetIds || [];
            watchChange = new DocumentWatchChange([], removedTargetIds, key, null);
        }
        else if (hasTag(change, type, 'filter')) {
            // TODO(dimond): implement existence filter parsing with strategy.
            assertPresent(change.filter, 'filter');
            assertPresent(change.filter.targetId, 'filter.targetId');
            var filter = change.filter;
            var count = filter.count || 0;
            var existenceFilter = new ExistenceFilter(count);
            var targetId = filter.targetId;
            watchChange = new ExistenceFilterChange(targetId, existenceFilter);
        }
        else {
            return fail('Unknown change type ' + JSON.stringify(change));
        }
        return watchChange;
    };
    JsonProtoSerializer.prototype.fromWatchTargetChangeState = function (state) {
        if (state === 'NO_CHANGE') {
            return WatchTargetChangeState.NoChange;
        }
        else if (state === 'ADD') {
            return WatchTargetChangeState.Added;
        }
        else if (state === 'REMOVE') {
            return WatchTargetChangeState.Removed;
        }
        else if (state === 'CURRENT') {
            return WatchTargetChangeState.Current;
        }
        else if (state === 'RESET') {
            return WatchTargetChangeState.Reset;
        }
        else {
            return fail('Got unexpected TargetChange.state: ' + state);
        }
    };
    JsonProtoSerializer.prototype.versionFromListenResponse = function (change) {
        // We have only reached a consistent snapshot for the entire stream if there
        // is a read_time set and it applies to all targets (i.e. the list of
        // targets is empty). The backend is guaranteed to send such responses.
        // tslint:disable-next-line:no-any
        var type = change['response_type'];
        if (!hasTag(change, type, 'targetChange')) {
            return snapshot_version_SnapshotVersion.MIN;
        }
        var targetChange = change.targetChange;
        if (targetChange.targetIds && targetChange.targetIds.length) {
            return snapshot_version_SnapshotVersion.MIN;
        }
        if (!targetChange.readTime) {
            return snapshot_version_SnapshotVersion.MIN;
        }
        return this.fromVersion(targetChange.readTime);
    };
    JsonProtoSerializer.prototype.toMutation = function (mutation) {
        var _this = this;
        var result;
        if (mutation instanceof mutation_SetMutation) {
            result = {
                update: this.toMutationDocument(mutation.key, mutation.value)
            };
        }
        else if (mutation instanceof mutation_DeleteMutation) {
            result = { delete: this.toName(mutation.key) };
        }
        else if (mutation instanceof mutation_PatchMutation) {
            result = {
                update: this.toMutationDocument(mutation.key, mutation.data),
                updateMask: this.toDocumentMask(mutation.fieldMask)
            };
        }
        else if (mutation instanceof mutation_TransformMutation) {
            result = {
                transform: {
                    document: this.toName(mutation.key),
                    fieldTransforms: mutation.fieldTransforms.map(function (transform) {
                        return _this.toFieldTransform(transform);
                    })
                }
            };
        }
        else {
            return fail('Unknown mutation type ' + mutation.type);
        }
        if (!mutation.precondition.isNone) {
            result.currentDocument = this.toPrecondition(mutation.precondition);
        }
        return result;
    };
    JsonProtoSerializer.prototype.fromMutation = function (proto) {
        var _this = this;
        var precondition = proto.currentDocument
            ? this.fromPrecondition(proto.currentDocument)
            : mutation_Precondition.NONE;
        if (proto.update) {
            assertPresent(proto.update.name, 'name');
            var key = this.fromName(proto.update.name);
            var value = this.fromFields(proto.update.fields || {});
            if (proto.updateMask) {
                var fieldMask = this.fromDocumentMask(proto.updateMask);
                return new mutation_PatchMutation(key, value, fieldMask, precondition);
            }
            else {
                return new mutation_SetMutation(key, value, precondition);
            }
        }
        else if (proto.delete) {
            var key = this.fromName(proto.delete);
            return new mutation_DeleteMutation(key, precondition);
        }
        else if (proto.transform) {
            var key = this.fromName(proto.transform.document);
            var fieldTransforms = proto.transform.fieldTransforms.map(function (transform) {
                return _this.fromFieldTransform(transform);
            });
            assert(precondition.exists === true, 'Transforms only support precondition "exists == true"');
            return new mutation_TransformMutation(key, fieldTransforms);
        }
        else {
            return fail('unknown mutation proto: ' + JSON.stringify(proto));
        }
    };
    JsonProtoSerializer.prototype.toPrecondition = function (precondition) {
        assert(!precondition.isNone, "Can't serialize an empty precondition");
        if (precondition.updateTime !== undefined) {
            return {
                updateTime: this.toVersion(precondition.updateTime)
            };
        }
        else if (precondition.exists !== undefined) {
            return { exists: precondition.exists };
        }
        else {
            return fail('Unknown precondition');
        }
    };
    JsonProtoSerializer.prototype.fromPrecondition = function (precondition) {
        if (precondition.updateTime !== undefined) {
            return mutation_Precondition.updateTime(this.fromVersion(precondition.updateTime));
        }
        else if (precondition.exists !== undefined) {
            return mutation_Precondition.exists(precondition.exists);
        }
        else {
            return mutation_Precondition.NONE;
        }
    };
    JsonProtoSerializer.prototype.fromWriteResult = function (proto) {
        var _this = this;
        // NOTE: Deletes don't have an updateTime.
        var version = proto.updateTime
            ? this.fromVersion(proto.updateTime)
            : null;
        var transformResults = null;
        if (proto.transformResults) {
            transformResults = proto.transformResults.map(function (result) {
                return _this.fromValue(result);
            });
        }
        return new MutationResult(version, transformResults);
    };
    JsonProtoSerializer.prototype.fromWriteResults = function (protos) {
        var _this = this;
        return (protos || []).map(function (proto) { return _this.fromWriteResult(proto); });
    };
    JsonProtoSerializer.prototype.toFieldTransform = function (fieldTransform) {
        assert(fieldTransform.transform instanceof ServerTimestampTransform, 'Unknown transform: ' + fieldTransform.transform);
        return {
            fieldPath: fieldTransform.field.canonicalString(),
            setToServerValue: 'REQUEST_TIME'
        };
    };
    JsonProtoSerializer.prototype.fromFieldTransform = function (proto) {
        assert(proto.setToServerValue === 'REQUEST_TIME', 'Unknown transform proto: ' + JSON.stringify(proto));
        var fieldPath = path_FieldPath.fromServerFormat(proto.fieldPath);
        return new FieldTransform(fieldPath, ServerTimestampTransform.instance);
    };
    JsonProtoSerializer.prototype.toDocumentsTarget = function (query) {
        return { documents: [this.toQueryPath(query.path)] };
    };
    JsonProtoSerializer.prototype.fromDocumentsTarget = function (documentsTarget) {
        var count = documentsTarget.documents.length;
        assert(count === 1, 'DocumentsTarget contained other than 1 document: ' + count);
        var name = documentsTarget.documents[0];
        return query_Query.atPath(this.fromQueryPath(name));
    };
    JsonProtoSerializer.prototype.toQueryTarget = function (query) {
        // Dissect the path into parent, collectionId, and optional key filter.
        var result = { structuredQuery: {} };
        if (query.path.isEmpty()) {
            result.parent = this.toQueryPath(path_ResourcePath.EMPTY_PATH);
        }
        else {
            var path = query.path;
            assert(path.length % 2 !== 0, 'Document queries with filters are not supported.');
            result.parent = this.toQueryPath(path.popLast());
            result.structuredQuery.from = [{ collectionId: path.lastSegment() }];
        }
        var where = this.toFilter(query.filters);
        if (where) {
            result.structuredQuery.where = where;
        }
        var orderBy = this.toOrder(query.orderBy);
        if (orderBy) {
            result.structuredQuery.orderBy = orderBy;
        }
        var limit = this.toLimit(query.limit);
        if (limit !== undefined) {
            result.structuredQuery.limit = limit;
        }
        if (query.startAt) {
            result.structuredQuery.startAt = this.toCursor(query.startAt);
        }
        if (query.endAt) {
            result.structuredQuery.endAt = this.toCursor(query.endAt);
        }
        return result;
    };
    JsonProtoSerializer.prototype.fromQueryTarget = function (target) {
        var path = this.fromQueryPath(target.parent);
        var query = target.structuredQuery;
        var fromCount = query.from ? query.from.length : 0;
        if (fromCount > 0) {
            assert(fromCount === 1, 'StructuredQuery.from with more than one collection is not supported.');
            var from = query.from[0];
            path = path.child(from.collectionId);
        }
        var filterBy = [];
        if (query.where) {
            filterBy = this.fromFilter(query.where);
        }
        var orderBy = [];
        if (query.orderBy) {
            orderBy = this.fromOrder(query.orderBy);
        }
        var limit = null;
        if (query.limit) {
            limit = query.limit;
        }
        var startAt = null;
        if (query.startAt) {
            startAt = this.fromCursor(query.startAt);
        }
        var endAt = null;
        if (query.endAt) {
            endAt = this.fromCursor(query.endAt);
        }
        return new query_Query(path, orderBy, filterBy, limit, startAt, endAt);
    };
    JsonProtoSerializer.prototype.toListenRequestLabels = function (queryData) {
        var value = this.toLabel(queryData.purpose);
        if (value == null) {
            return null;
        }
        else {
            return {
                'goog-listen-tags': value
            };
        }
    };
    JsonProtoSerializer.prototype.toLabel = function (purpose) {
        switch (purpose) {
            case QueryPurpose.Listen:
                return null;
            case QueryPurpose.ExistenceFilterMismatch:
                return 'existence-filter-mismatch';
            case QueryPurpose.LimboResolution:
                return 'limbo-document';
            default:
                return fail('Unrecognized query purpose: ' + purpose);
        }
    };
    JsonProtoSerializer.prototype.toTarget = function (queryData) {
        var result;
        var query = queryData.query;
        if (query.isDocumentQuery()) {
            result = { documents: this.toDocumentsTarget(query) };
        }
        else {
            result = { query: this.toQueryTarget(query) };
        }
        result.targetId = queryData.targetId;
        if (queryData.resumeToken.length > 0) {
            result.resumeToken = this.unsafeCastProtoByteString(queryData.resumeToken);
        }
        return result;
    };
    JsonProtoSerializer.prototype.toFilter = function (filters) {
        var _this = this;
        if (filters.length === 0)
            return;
        var protos = filters.map(function (filter) {
            return filter instanceof query_RelationFilter
                ? _this.toRelationFilter(filter)
                : _this.toUnaryFilter(filter);
        });
        if (protos.length === 1) {
            return protos[0];
        }
        return { compositeFilter: { op: 'AND', filters: protos } };
    };
    JsonProtoSerializer.prototype.fromFilter = function (filter) {
        var _this = this;
        if (!filter) {
            return [];
        }
        else if (filter.unaryFilter !== undefined) {
            return [this.fromUnaryFilter(filter)];
        }
        else if (filter.fieldFilter !== undefined) {
            return [this.fromRelationFilter(filter)];
        }
        else if (filter.compositeFilter !== undefined) {
            return filter.compositeFilter.filters
                .map(function (f) { return _this.fromFilter(f); })
                .reduce(function (accum, current) { return accum.concat(current); });
        }
        else {
            return fail('Unknown filter: ' + JSON.stringify(filter));
        }
    };
    JsonProtoSerializer.prototype.toOrder = function (orderBys) {
        var _this = this;
        if (orderBys.length === 0)
            return;
        return orderBys.map(function (order) { return _this.toPropertyOrder(order); });
    };
    JsonProtoSerializer.prototype.fromOrder = function (orderBys) {
        var _this = this;
        return orderBys.map(function (order) { return _this.fromPropertyOrder(order); });
    };
    JsonProtoSerializer.prototype.toLimit = function (limit) {
        if (!isNullOrUndefined(limit)) {
            return limit;
        }
        return;
    };
    JsonProtoSerializer.prototype.toCursor = function (cursor) {
        var _this = this;
        return {
            before: cursor.before,
            values: cursor.position.map(function (component) { return _this.toValue(component); })
        };
    };
    JsonProtoSerializer.prototype.fromCursor = function (cursor) {
        var _this = this;
        var before = !!cursor.before;
        var position = cursor.values.map(function (component) { return _this.fromValue(component); });
        return new query_Bound(position, before);
    };
    // visible for testing
    JsonProtoSerializer.prototype.toDirection = function (dir) {
        return DIRECTIONS[dir.name];
    };
    // visible for testing
    JsonProtoSerializer.prototype.fromDirection = function (dir) {
        switch (dir) {
            case 'ASCENDING':
                return Direction.ASCENDING;
            case 'DESCENDING':
                return Direction.DESCENDING;
            default:
                return undefined;
        }
    };
    // visible for testing
    JsonProtoSerializer.prototype.toOperatorName = function (op) {
        return OPERATORS[op.name];
    };
    JsonProtoSerializer.prototype.fromOperatorName = function (op) {
        switch (op) {
            case 'EQUAL':
                return query_RelationOp.EQUAL;
            case 'GREATER_THAN':
                return query_RelationOp.GREATER_THAN;
            case 'GREATER_THAN_OR_EQUAL':
                return query_RelationOp.GREATER_THAN_OR_EQUAL;
            case 'LESS_THAN':
                return query_RelationOp.LESS_THAN;
            case 'LESS_THAN_OR_EQUAL':
                return query_RelationOp.LESS_THAN_OR_EQUAL;
            case 'OPERATOR_UNSPECIFIED':
                return fail('Unspecified relation');
            default:
                return fail('Unknown relation');
        }
    };
    JsonProtoSerializer.prototype.toFieldPathReference = function (path) {
        return { fieldPath: path.canonicalString() };
    };
    JsonProtoSerializer.prototype.fromFieldPathReference = function (fieldReference) {
        return path_FieldPath.fromServerFormat(fieldReference.fieldPath);
    };
    // visible for testing
    JsonProtoSerializer.prototype.toPropertyOrder = function (orderBy) {
        return {
            field: this.toFieldPathReference(orderBy.field),
            direction: this.toDirection(orderBy.dir)
        };
    };
    JsonProtoSerializer.prototype.fromPropertyOrder = function (orderBy) {
        return new query_OrderBy(this.fromFieldPathReference(orderBy.field), this.fromDirection(orderBy.direction));
    };
    // visible for testing
    JsonProtoSerializer.prototype.toRelationFilter = function (filter) {
        if (filter instanceof query_RelationFilter) {
            return {
                fieldFilter: {
                    field: this.toFieldPathReference(filter.field),
                    op: this.toOperatorName(filter.op),
                    value: this.toValue(filter.value)
                }
            };
        }
        else {
            return fail('Unrecognized filter: ' + JSON.stringify(filter));
        }
    };
    JsonProtoSerializer.prototype.fromRelationFilter = function (filter) {
        return new query_RelationFilter(this.fromFieldPathReference(filter.fieldFilter.field), this.fromOperatorName(filter.fieldFilter.op), this.fromValue(filter.fieldFilter.value));
    };
    // visible for testing
    JsonProtoSerializer.prototype.toUnaryFilter = function (filter) {
        if (filter instanceof NanFilter) {
            return {
                unaryFilter: {
                    field: this.toFieldPathReference(filter.field),
                    op: 'IS_NAN'
                }
            };
        }
        else if (filter instanceof NullFilter) {
            return {
                unaryFilter: {
                    field: this.toFieldPathReference(filter.field),
                    op: 'IS_NULL'
                }
            };
        }
        else {
            return fail('Unrecognized filter: ' + JSON.stringify(filter));
        }
    };
    JsonProtoSerializer.prototype.fromUnaryFilter = function (filter) {
        switch (filter.unaryFilter.op) {
            case 'IS_NAN':
                var nanField = this.fromFieldPathReference(filter.unaryFilter.field);
                return new NanFilter(nanField);
            case 'IS_NULL':
                var nullField = this.fromFieldPathReference(filter.unaryFilter.field);
                return new NullFilter(nullField);
            case 'OPERATOR_UNSPECIFIED':
                return fail('Unspecified filter');
            default:
                return fail('Unknown filter');
        }
    };
    JsonProtoSerializer.prototype.toDocumentMask = function (fieldMask) {
        return {
            fieldPaths: fieldMask.fields.map(function (field) { return field.canonicalString(); })
        };
    };
    JsonProtoSerializer.prototype.fromDocumentMask = function (proto) {
        var paths = proto.fieldPaths || [];
        var fields = paths.map(function (path) { return path_FieldPath.fromServerFormat(path); });
        return new mutation_FieldMask(fields);
    };
    return JsonProtoSerializer;
}());

/**
 * Checks for a specific oneof tag in a protocol buffer message.
 *
 * This intentionally accommodates two distinct cases:
 *
 * 1) Messages containing a type tag: these are the format produced by GRPC in
 * return values. These may contain default-value mappings for all tags in the
 * oneof but the type tag specifies which one was actually set.
 *
 * 2) Messages that don't contain a type tag: these are the format required by
 * GRPC as inputs. If we emitted objects with type tags, ProtoBuf.js would
 * choke claiming that the tags aren't fields in the Message.
 *
 * Allowing both formats here makes the serializer able to consume the outputs
 * it produces: for all messages it supports, fromX(toX(value)) == value.
 *
 * Note that case 2 suffers from ambiguity: if multiple tags are present
 * without a type tag then the callers are structured in such a way that the
 * first invocation will win. Since we only parse in this mode when parsing
 * the output of a serialize method this works, but it's not a general
 * solution.
 *
 * Unfortunately there is no general solution here because proto3 makes it
 * impossible to distinguish unset from explicitly set fields: both have the
 * default value for the type. Without the type tag but multiple value tags
 * it's possible to have default values for each tag in the oneof and not be
 * able to know which was actually in effect.
 */
function hasTag(obj, type, tag) {
    return type === tag || (!type && tag in obj);
}

//# sourceMappingURL=serializer.js.map

// EXTERNAL MODULE: ../webchannel-wrapper/dist/index.js
var dist = __webpack_require__(115);
var dist_default = /*#__PURE__*/__webpack_require__.n(dist);

// CONCATENATED MODULE: ../firestore/dist/esm/src/remote/stream_bridge.js
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

/**
 * Provides a simple helper class that implements the Stream interface to
 * bridge to other implementations that are streams but do not implement the
 * interface. The stream callbacks are invoked with the callOn... methods.
 */
var stream_bridge_StreamBridge = /** @class */ (function () {
    function StreamBridge(args) {
        this.wrappedOnOpen = null;
        this.wrappedOnClose = null;
        this.wrappedOnMessage = null;
        this.sendFn = args.sendFn;
        this.closeFn = args.closeFn;
    }
    StreamBridge.prototype.onOpen = function (callback) {
        assert(!this.wrappedOnOpen, 'Called onOpen on stream twice!');
        this.wrappedOnOpen = callback;
    };
    StreamBridge.prototype.onClose = function (callback) {
        assert(!this.wrappedOnClose, 'Called onClose on stream twice!');
        this.wrappedOnClose = callback;
    };
    StreamBridge.prototype.onMessage = function (callback) {
        assert(!this.wrappedOnMessage, 'Called onMessage on stream twice!');
        this.wrappedOnMessage = callback;
    };
    StreamBridge.prototype.close = function () {
        this.closeFn();
    };
    StreamBridge.prototype.send = function (msg) {
        this.sendFn(msg);
    };
    StreamBridge.prototype.callOnOpen = function () {
        assert(this.wrappedOnOpen !== null, 'Cannot call onOpen because no callback ' + 'was set');
        this.wrappedOnOpen();
    };
    StreamBridge.prototype.callOnClose = function (err) {
        assert(this.wrappedOnClose !== null, 'Cannot call onClose because no ' + 'callback was set');
        this.wrappedOnClose(err);
    };
    StreamBridge.prototype.callOnMessage = function (msg) {
        assert(this.wrappedOnMessage !== null, 'Cannot call onMessage because no ' + 'callback was set');
        this.wrappedOnMessage(msg);
    };
    return StreamBridge;
}());


//# sourceMappingURL=stream_bridge.js.map

// CONCATENATED MODULE: ../firestore/dist/esm/src/platform_browser/webchannel_connection.js
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







var LOG_TAG = 'Connection';
var RPC_URL_VERSION = 'v1beta1';
// TODO(b/38203344): The SDK_VERSION is set independently from Firebase because
// we are doing out-of-band releases. Once we release as part of Firebase, we
// should use the Firebase version instead.
var X_GOOG_API_CLIENT_VALUE = 'gl-js/ fire/' + SDK_VERSION;
var XHR_TIMEOUT_SECS = 15;
var webchannel_connection_WebChannelConnection = /** @class */ (function () {
    function WebChannelConnection(info) {
        this.databaseId = info.databaseId;
        this.pool = new dist["XhrIoPool"]();
        var proto = info.ssl ? 'https' : 'http';
        this.baseUrl = proto + '://' + info.host;
    }
    /**
     * Modifies the headers for a request, adding any authorization token if
     * present and any additional headers for the request.
     */
    WebChannelConnection.prototype.modifyHeadersForRequest = function (headers, token) {
        if (token) {
            for (var header in token.authHeaders) {
                if (token.authHeaders.hasOwnProperty(header)) {
                    headers[header] = token.authHeaders[header];
                }
            }
        }
        headers['X-Goog-Api-Client'] = X_GOOG_API_CLIENT_VALUE;
        // This header is used to improve routing and project isolation by the
        // backend.
        headers['google-cloud-resource-prefix'] =
            "projects/" + this.databaseId.projectId + "/" +
                ("databases/" + this.databaseId.database);
    };
    WebChannelConnection.prototype.invoke = function (rpcName, request, token) {
        var _this = this;
        var url = this.makeUrl(rpcName);
        return new Promise(function (resolve, reject) {
            _this.pool.getObject(function (xhr) {
                xhr.listenOnce(dist["EventType"].COMPLETE, function () {
                    try {
                        switch (xhr.getLastErrorCode()) {
                            case dist["ErrorCode"].NO_ERROR:
                                var json = xhr.getResponseJson();
                                debug(LOG_TAG, 'XHR received:', JSON.stringify(json));
                                resolve(json);
                                break;
                            case dist["ErrorCode"].TIMEOUT:
                                debug(LOG_TAG, 'RPC "' + rpcName + '" timed out');
                                reject(new FirestoreError(Code.DEADLINE_EXCEEDED, 'Request time out'));
                                break;
                            case dist["ErrorCode"].HTTP_ERROR:
                                var status_1 = xhr.getStatus();
                                debug(LOG_TAG, 'RPC "' + rpcName + '" failed with status:', status_1, 'response text:', xhr.getResponseText());
                                if (status_1 > 0) {
                                    reject(new FirestoreError(mapCodeFromHttpStatus(status_1), 'Server responded with status ' + xhr.getStatusText()));
                                }
                                else {
                                    // If we received an HTTP_ERROR but there's no status code,
                                    // it's most probably a connection issue
                                    debug(LOG_TAG, 'RPC "' + rpcName + '" failed');
                                    reject(new FirestoreError(Code.UNAVAILABLE, 'Connection failed.'));
                                }
                                break;
                            default:
                                fail('RPC "' +
                                    rpcName +
                                    '" failed with unanticipated ' +
                                    'webchannel error ' +
                                    xhr.getLastErrorCode() +
                                    ': ' +
                                    xhr.getLastError() +
                                    ', giving up.');
                        }
                    }
                    finally {
                        debug(LOG_TAG, 'RPC "' + rpcName + '" completed.');
                        _this.pool.releaseObject(xhr);
                    }
                });
                var requestString = JSON.stringify(request);
                debug(LOG_TAG, 'XHR sending: ', url + ' ' + requestString);
                // Content-Type: text/plain will avoid preflight requests which might
                // mess with CORS and redirects by proxies. If we add custom headers
                // we will need to change this code to potentially use the
                // $httpOverwrite parameter supported by ESF to avoid
                // triggering preflight requests.
                var headers = { 'Content-Type': 'text/plain' };
                _this.modifyHeadersForRequest(headers, token);
                xhr.send(url, 'POST', requestString, headers, XHR_TIMEOUT_SECS);
            });
        });
    };
    WebChannelConnection.prototype.openStream = function (rpcName, token) {
        var rpcService = WebChannelConnection.RPC_STREAM_SERVICE_MAPPING[rpcName];
        var rpcUrlName = WebChannelConnection.RPC_STREAM_NAME_MAPPING[rpcName];
        if (!rpcService || !rpcUrlName) {
            fail('Unknown RPC name: ' + rpcName);
        }
        var urlParts = [
            this.baseUrl,
            '/',
            rpcService,
            '/',
            rpcUrlName,
            '/channel'
        ];
        var webchannelTransport = Object(dist["createWebChannelTransport"])();
        var request = {
            // Background channel test avoids the initial two test calls and decreases
            // initial cold start time.
            // TODO(dimond): wenboz@ mentioned this might affect use with proxies and
            // we should monitor closely for any reports.
            backgroundChannelTest: true,
            // Required for backend stickiness, routing behavior is based on this
            // parameter.
            httpSessionIdParam: 'gsessionid',
            initMessageHeaders: {},
            sendRawJson: true,
            supportsCrossDomainXhr: true
        };
        this.modifyHeadersForRequest(request.initMessageHeaders, token);
        var url = urlParts.join('');
        debug(LOG_TAG, 'Creating WebChannel: ' + url + ' ' + request);
        // tslint:disable-next-line:no-any Because listen isn't defined on it.
        var channel = webchannelTransport.createWebChannel(url, request);
        // WebChannel supports sending the first message with the handshake - saving
        // a network round trip. However, it will have to call send in the same
        // JS event loop as open. In order to enforce this, we delay actually
        // opening the WebChannel until send is called. Whether we have called
        // open is tracked with this variable.
        var opened = false;
        // A flag to determine whether the stream was closed (by us or through an
        // error/close event) to avoid delivering multiple close events or sending
        // on a closed stream
        var closed = false;
        // tslint:disable-next-line:no-any
        var streamBridge = new stream_bridge_StreamBridge({
            sendFn: function (msg) {
                if (!closed) {
                    if (!opened) {
                        debug(LOG_TAG, 'Opening WebChannel transport.');
                        channel.open();
                        opened = true;
                    }
                    debug(LOG_TAG, 'WebChannel sending:', msg);
                    channel.send(msg);
                }
                else {
                    debug(LOG_TAG, 'Not sending because WebChannel is closed:', msg);
                }
            },
            closeFn: function () { return channel.close(); }
        });
        // Closure events are guarded and exceptions are swallowed, so catch any
        // exception and rethrow using a setTimeout so they become visible again.
        // Note that eventually this function could go away if we are confident
        // enough the code is exception free.
        var unguardedEventListen = function (type, fn) {
            // TODO(dimond): closure typing seems broken because WebChannel does
            // not implement goog.events.Listenable
            channel.listen(type, function (param) {
                try {
                    fn(param);
                }
                catch (e) {
                    setTimeout(function () {
                        throw e;
                    }, 0);
                }
            });
        };
        unguardedEventListen(dist["WebChannel"].EventType.OPEN, function () {
            if (!closed) {
                debug(LOG_TAG, 'WebChannel transport opened.');
            }
        });
        unguardedEventListen(dist["WebChannel"].EventType.CLOSE, function () {
            if (!closed) {
                closed = true;
                debug(LOG_TAG, 'WebChannel transport closed');
                streamBridge.callOnClose();
            }
        });
        unguardedEventListen(dist["WebChannel"].EventType.ERROR, function (err) {
            if (!closed) {
                closed = true;
                debug(LOG_TAG, 'WebChannel transport errored:', err);
                streamBridge.callOnClose(new FirestoreError(Code.UNAVAILABLE, 'The operation could not be completed'));
            }
        });
        unguardedEventListen(dist["WebChannel"].EventType.MESSAGE, function (msg) {
            if (!closed) {
                // WebChannel delivers message events as array. If batching
                // is not enabled (it's off by default) each message will be
                // delivered alone, resulting in a single element array.
                var msgData = msg.data[0];
                assert(!!msgData, 'Got a webchannel message without data.');
                // TODO(b/35143891): There is a bug in One Platform that caused errors
                // (and only errors) to be wrapped in an extra array. To be forward
                // compatible with the bug we need to check either condition. The latter
                // can be removed once the fix has been rolled out.
                var error = msgData.error || (msgData[0] && msgData[0].error);
                if (error) {
                    debug(LOG_TAG, 'WebChannel received error:', error);
                    // error.status will be a string like 'OK' or 'NOT_FOUND'.
                    var status_2 = error.status;
                    var code = mapCodeFromRpcStatus(status_2);
                    var message = error.message;
                    if (code === undefined) {
                        code = Code.INTERNAL;
                        message =
                            'Unknown error status: ' +
                                status_2 +
                                ' with message ' +
                                error.message;
                    }
                    // Mark closed so no further events are propagated
                    closed = true;
                    streamBridge.callOnClose(new FirestoreError(code, message));
                    channel.close();
                }
                else {
                    debug(LOG_TAG, 'WebChannel received:', msgData);
                    streamBridge.callOnMessage(msgData);
                }
            }
        });
        setTimeout(function () {
            // Technically we could/should wait for the WebChannel opened event,
            // but because we want to send the first message with the WebChannel
            // handshake we pretend the channel opened here (asynchronously), and
            // then delay the actual open until the first message is sent.
            streamBridge.callOnOpen();
        }, 0);
        return streamBridge;
    };
    // visible for testing
    WebChannelConnection.prototype.makeUrl = function (rpcName) {
        var url = [this.baseUrl, '/', RPC_URL_VERSION];
        url.push('/projects/');
        url.push(this.databaseId.projectId);
        url.push('/databases/');
        url.push(this.databaseId.database);
        url.push('/documents');
        url.push(':');
        url.push(rpcName);
        return url.join('');
    };
    /**
     * Mapping from RPC name to service providing the RPC.
     * For streaming RPCs only.
     */
    WebChannelConnection.RPC_STREAM_SERVICE_MAPPING = {
        Write: 'google.firestore.v1beta1.Firestore',
        Listen: 'google.firestore.v1beta1.Firestore'
    };
    /**
     * Mapping from RPC name to actual RPC name in URLs.
     * For streaming RPCs only.
     */
    WebChannelConnection.RPC_STREAM_NAME_MAPPING = {
        Write: 'Write',
        Listen: 'Listen'
    };
    return WebChannelConnection;
}());


//# sourceMappingURL=webchannel_connection.js.map

// CONCATENATED MODULE: ../firestore/dist/esm/src/platform_browser/browser_platform.js
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


var browser_platform_BrowserPlatform = /** @class */ (function () {
    function BrowserPlatform() {
        this.emptyByteString = '';
        this.base64Available = typeof atob !== 'undefined';
    }
    BrowserPlatform.prototype.loadConnection = function (databaseInfo) {
        return Promise.resolve(new webchannel_connection_WebChannelConnection(databaseInfo));
    };
    BrowserPlatform.prototype.newSerializer = function (databaseId) {
        return new serializer_JsonProtoSerializer(databaseId, { useProto3Json: true });
    };
    BrowserPlatform.prototype.atob = function (encoded) {
        return atob(encoded);
    };
    BrowserPlatform.prototype.btoa = function (raw) {
        return btoa(raw);
    };
    return BrowserPlatform;
}());


//# sourceMappingURL=browser_platform.js.map

// CONCATENATED MODULE: ../firestore/dist/esm/src/platform_browser/browser_init.js
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


/**
 * This code needs to run before Firestore is used. This can be achieved in
 * several ways:
 *   1) Through the JSCompiler compiling this code and then (automatically)
 *      executing it before exporting the Firestore symbols.
 *   2) Through importing this module first in a Firestore main module
 */
platform_PlatformSupport.setPlatform(new browser_platform_BrowserPlatform());

//# sourceMappingURL=browser_init.js.map

// CONCATENATED MODULE: ../firestore/dist/esm/src/api/field_path.js
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



// The objects that are a part of this API are exposed to third-parties as
// compiled javascript so we want to flag our private members with a leading
// underscore to discourage their use.
// tslint:disable:strip-private-property-underscore
/**
 * A FieldPath refers to a field in a document. The path may consist of a single
 * field name (referring to a top-level field in the document), or a list of
 * field names (referring to a nested field in the document).
 */
var field_path_FieldPath = /** @class */ (function () {
    /**
     * Creates a FieldPath from the provided field names. If more than one field
     * name is provided, the path will point to a nested field in a document.
     *
     * @param fieldNames A list of field names.
     */
    function FieldPath() {
        var fieldNames = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            fieldNames[_i] = arguments[_i];
        }
        validateNamedArrayAtLeastNumberOfElements('FieldPath', fieldNames, 'fieldNames', 1);
        for (var i = 0; i < fieldNames.length; ++i) {
            validateArgType('FieldPath', 'string', i, fieldNames[i]);
            if (fieldNames[i].length === 0) {
                throw new FirestoreError(Code.INVALID_ARGUMENT, "Invalid field name at argument $(i + 1). " +
                    'Field names must not be empty.');
            }
        }
        this._internalPath = new path_FieldPath(fieldNames);
    }
    FieldPath.documentId = function () {
        return FieldPath._DOCUMENT_ID;
    };
    /**
     * Internal Note: The backend doesn't technically support querying by
     * document ID. Instead it queries by the entire document name (full path
     * included), but in the cases we currently support documentId(), the net
     * effect is the same.
     */
    FieldPath._DOCUMENT_ID = new FieldPath(path_FieldPath.keyField().canonicalString());
    return FieldPath;
}());

/**
 * Matches any characters in a field path string that are reserved.
 */
var RESERVED = new RegExp('[~\\*/\\[\\]]');
/**
 * Parses a field path string into a FieldPath, treating dots as separators.
 */
function fromDotSeparatedString(path) {
    var found = path.search(RESERVED);
    if (found >= 0) {
        throw new FirestoreError(Code.INVALID_ARGUMENT, "Invalid field path (" + path + "). Paths must not contain " +
            "'~', '*', '/', '[', or ']'");
    }
    try {
        return new (field_path_FieldPath.bind.apply(field_path_FieldPath, [void 0].concat(path.split('.'))))();
    }
    catch (e) {
        throw new FirestoreError(Code.INVALID_ARGUMENT, "Invalid field path (" + path + "). Paths must not be empty, " +
            "begin with '.', end with '.', or contain '..'");
    }
}

//# sourceMappingURL=field_path.js.map

// CONCATENATED MODULE: ../firestore/dist/esm/src/core/types.js
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
/** Describes the online state of the Firestore client */
var OnlineState;
(function (OnlineState) {
    /**
     * The Firestore client is in an unknown online state. This means the client
     * is either not actively trying to establish a connection or it was
     * previously in an unknown state and is trying to establish a connection.
     */
    OnlineState[OnlineState["Unknown"] = 0] = "Unknown";
    /**
     * The client is connected and the connections are healthy. This state is
     * reached after a successful connection and there has been at least one
     * succesful message received from the backends.
     */
    OnlineState[OnlineState["Healthy"] = 1] = "Healthy";
    /**
     * The client has tried to establish a connection but has failed.
     * This state is reached after either a connection attempt failed or a
     * healthy stream was closed for unexpected reasons.
     */
    OnlineState[OnlineState["Failed"] = 2] = "Failed";
})(OnlineState || (OnlineState = {}));

//# sourceMappingURL=types.js.map

// CONCATENATED MODULE: ../firestore/dist/esm/src/core/view_snapshot.js
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



var ChangeType;
(function (ChangeType) {
    ChangeType[ChangeType["Added"] = 0] = "Added";
    ChangeType[ChangeType["Removed"] = 1] = "Removed";
    ChangeType[ChangeType["Modified"] = 2] = "Modified";
    ChangeType[ChangeType["Metadata"] = 3] = "Metadata";
})(ChangeType || (ChangeType = {}));
var SyncState;
(function (SyncState) {
    SyncState[SyncState["Local"] = 0] = "Local";
    SyncState[SyncState["Synced"] = 1] = "Synced";
})(SyncState || (SyncState = {}));
/**
 * DocumentChangeSet keeps track of a set of changes to docs in a query, merging
 * duplicate events for the same doc.
 */
var view_snapshot_DocumentChangeSet = /** @class */ (function () {
    function DocumentChangeSet() {
        this.changeMap = new sorted_map_SortedMap(document_key_DocumentKey.comparator);
    }
    DocumentChangeSet.prototype.track = function (change) {
        var key = change.doc.key;
        var oldChange = this.changeMap.get(key);
        if (!oldChange) {
            this.changeMap = this.changeMap.insert(key, change);
            return;
        }
        // Merge the new change with the existing change.
        if (change.type !== ChangeType.Added &&
            oldChange.type === ChangeType.Metadata) {
            this.changeMap = this.changeMap.insert(key, change);
        }
        else if (change.type === ChangeType.Metadata &&
            oldChange.type !== ChangeType.Removed) {
            this.changeMap = this.changeMap.insert(key, {
                type: oldChange.type,
                doc: change.doc
            });
        }
        else if (change.type === ChangeType.Modified &&
            oldChange.type === ChangeType.Modified) {
            this.changeMap = this.changeMap.insert(key, {
                type: ChangeType.Modified,
                doc: change.doc
            });
        }
        else if (change.type === ChangeType.Modified &&
            oldChange.type === ChangeType.Added) {
            this.changeMap = this.changeMap.insert(key, {
                type: ChangeType.Added,
                doc: change.doc
            });
        }
        else if (change.type === ChangeType.Removed &&
            oldChange.type === ChangeType.Added) {
            this.changeMap = this.changeMap.remove(key);
        }
        else if (change.type === ChangeType.Removed &&
            oldChange.type === ChangeType.Modified) {
            this.changeMap = this.changeMap.insert(key, {
                type: ChangeType.Removed,
                doc: oldChange.doc
            });
        }
        else if (change.type === ChangeType.Added &&
            oldChange.type === ChangeType.Removed) {
            this.changeMap = this.changeMap.insert(key, {
                type: ChangeType.Modified,
                doc: change.doc
            });
        }
        else {
            // This includes these cases, which don't make sense:
            // Added->Added
            // Removed->Removed
            // Modified->Added
            // Removed->Modified
            // Metadata->Added
            // Removed->Metadata
            fail('unsupported combination of changes: ' +
                JSON.stringify(change) +
                ' after ' +
                JSON.stringify(oldChange));
        }
    };
    DocumentChangeSet.prototype.getChanges = function () {
        var changes = [];
        this.changeMap.inorderTraversal(function (key, change) {
            changes.push(change);
        });
        return changes;
    };
    return DocumentChangeSet;
}());


//# sourceMappingURL=view_snapshot.js.map

// CONCATENATED MODULE: ../firestore/dist/esm/src/model/document_set.js
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




/**
 * DocumentSet is an immutable (copy-on-write) collection that holds documents
 * in order specified by the provided comparator. We always add a document key
 * comparator on top of what is provided to guarantee document equality based on
 * the key.
 */
var document_set_DocumentSet = /** @class */ (function () {
    /** The default ordering is by key if the comparator is omitted */
    function DocumentSet(comp) {
        // We are adding document key comparator to the end as it's the only
        // guaranteed unique property of a document.
        if (comp) {
            this.comparator = function (d1, d2) {
                return comp(d1, d2) || document_key_DocumentKey.comparator(d1.key, d2.key);
            };
        }
        else {
            this.comparator = function (d1, d2) {
                return document_key_DocumentKey.comparator(d1.key, d2.key);
            };
        }
        this.keyedMap = documentMap();
        this.sortedSet = new sorted_map_SortedMap(this.comparator);
    }
    /**
     * Returns an empty copy of the existing DocumentSet, using the same
     * comparator.
     */
    DocumentSet.emptySet = function (oldSet) {
        return new DocumentSet(oldSet.comparator);
    };
    DocumentSet.prototype.has = function (key) {
        return this.keyedMap.get(key) != null;
    };
    DocumentSet.prototype.get = function (key) {
        return this.keyedMap.get(key);
    };
    DocumentSet.prototype.first = function () {
        return this.sortedSet.minKey();
    };
    DocumentSet.prototype.last = function () {
        return this.sortedSet.maxKey();
    };
    DocumentSet.prototype.isEmpty = function () {
        return this.sortedSet.isEmpty();
    };
    /**
     * Returns previous document or null if it's a first doc.
     *
     * @param key A key that MUST be present in the DocumentSet.
     */
    DocumentSet.prototype.prevDoc = function (key) {
        assert(this.has(key), 'Trying to get a previous document to non-existing key: ' + key);
        var doc = this.keyedMap.get(key);
        return this.sortedSet.getPredecessorKey(doc);
    };
    /**
     * Returns the index of the provided key in the document set, or -1 if the
     * document key is not present in the set;
     */
    DocumentSet.prototype.indexOf = function (key) {
        var doc = this.keyedMap.get(key);
        return doc ? this.sortedSet.indexOf(doc) : -1;
    };
    Object.defineProperty(DocumentSet.prototype, "size", {
        get: function () {
            return this.sortedSet.size;
        },
        enumerable: true,
        configurable: true
    });
    /** Iterates documents in order defined by "comparator" */
    DocumentSet.prototype.forEach = function (cb) {
        this.sortedSet.inorderTraversal(function (k, v) {
            cb(k);
            return false;
        });
    };
    /** Inserts or updates a document with the same key */
    DocumentSet.prototype.add = function (doc) {
        // First remove the element if we have it.
        var set = this.delete(doc.key);
        return set.copy(set.keyedMap.insert(doc.key, doc), set.sortedSet.insert(doc, null));
    };
    /** Deletes a document with a given key */
    DocumentSet.prototype.delete = function (key) {
        var doc = this.get(key);
        if (!doc) {
            return this;
        }
        return this.copy(this.keyedMap.remove(key), this.sortedSet.remove(doc));
    };
    DocumentSet.prototype.equals = function (other) {
        if (!(other instanceof DocumentSet))
            return false;
        if (this.size !== other.size)
            return false;
        var thisIt = this.sortedSet.getIterator();
        var otherIt = other.sortedSet.getIterator();
        while (thisIt.hasNext()) {
            var thisDoc = thisIt.getNext().key;
            var otherDoc = otherIt.getNext().key;
            if (!thisDoc.equals(otherDoc))
                return false;
        }
        return true;
    };
    DocumentSet.prototype.toString = function () {
        var docStrings = [];
        this.forEach(function (doc) {
            docStrings.push(doc.toString());
        });
        if (docStrings.length === 0) {
            return 'DocumentSet ()';
        }
        else {
            return 'DocumentSet (\n  ' + docStrings.join('  \n') + '\n)';
        }
    };
    DocumentSet.prototype.copy = function (keyedMap, sortedSet) {
        var newSet = new DocumentSet();
        newSet.comparator = this.comparator;
        newSet.keyedMap = keyedMap;
        newSet.sortedSet = sortedSet;
        return newSet;
    };
    return DocumentSet;
}());


//# sourceMappingURL=document_set.js.map

// CONCATENATED MODULE: ../firestore/dist/esm/src/util/obj_map.js
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

/**
 * A map implementation that uses objects as keys. Objects must implement the
 * Equatable interface and must be immutable. Entries in the map are stored
 * together with the key being produced from the mapKeyFn. This map
 * automatically handles collisions of keys.
 */
var obj_map_ObjectMap = /** @class */ (function () {
    function ObjectMap(mapKeyFn) {
        this.mapKeyFn = mapKeyFn;
        /**
         * The inner map for a key -> value pair. Due to the possibility of
         * collisions we keep a list of entries that we do a linear search through
         * to find an actual match. Note that collisions should be rare, so we still
         * expect near constant time lookups in practice.
         */
        this.inner = {};
    }
    /** Get a value for this key, or undefined if it does not exist. */
    ObjectMap.prototype.get = function (key) {
        var id = this.mapKeyFn(key);
        var matches = this.inner[id];
        if (matches === undefined) {
            return undefined;
        }
        for (var _i = 0, matches_1 = matches; _i < matches_1.length; _i++) {
            var _a = matches_1[_i], otherKey = _a[0], value = _a[1];
            if (otherKey.equals(key)) {
                return value;
            }
        }
        return undefined;
    };
    ObjectMap.prototype.has = function (key) {
        return this.get(key) !== undefined;
    };
    /** Put this key and value in the map. */
    ObjectMap.prototype.set = function (key, value) {
        var id = this.mapKeyFn(key);
        var matches = this.inner[id];
        if (matches === undefined) {
            this.inner[id] = [[key, value]];
            return;
        }
        for (var i = 0; i < matches.length; i++) {
            if (matches[i][0].equals(key)) {
                matches[i] = [key, value];
                return;
            }
        }
        matches.push([key, value]);
    };
    /**
     * Remove this key from the map. Returns a boolean if anything was deleted.
     */
    ObjectMap.prototype.delete = function (key) {
        var id = this.mapKeyFn(key);
        var matches = this.inner[id];
        if (matches === undefined) {
            return false;
        }
        for (var i = 0; i < matches.length; i++) {
            if (matches[i][0].equals(key)) {
                if (matches.length === 1) {
                    delete this.inner[id];
                }
                else {
                    matches.splice(i, 1);
                }
                return true;
            }
        }
        return false;
    };
    ObjectMap.prototype.forEach = function (fn) {
        forEach(this.inner, function (_, entries) {
            for (var _i = 0, entries_1 = entries; _i < entries_1.length; _i++) {
                var _a = entries_1[_i], k = _a[0], v = _a[1];
                fn(k, v);
            }
        });
    };
    ObjectMap.prototype.isEmpty = function () {
        return isEmpty(this.inner);
    };
    return ObjectMap;
}());


//# sourceMappingURL=obj_map.js.map

// CONCATENATED MODULE: ../firestore/dist/esm/src/core/event_manager.js
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





/**
 * Holds the listeners and the last received ViewSnapshot for a query being
 * tracked by EventManager.
 */
var QueryListenersInfo = /** @class */ (function () {
    function QueryListenersInfo() {
        this.listeners = [];
    }
    return QueryListenersInfo;
}());
/**
 * EventManager is responsible for mapping queries to query event emitters.
 * It handles "fan-out". -- Identical queries will re-use the same watch on the
 * backend.
 */
var event_manager_EventManager = /** @class */ (function () {
    function EventManager(syncEngine) {
        this.syncEngine = syncEngine;
        this.queries = new obj_map_ObjectMap(function (q) {
            return q.canonicalId();
        });
        this.onlineState = OnlineState.Unknown;
        this.syncEngine.subscribe(this.onChange.bind(this), this.onError.bind(this));
    }
    EventManager.prototype.listen = function (listener) {
        var query = listener.query;
        var firstListen = false;
        var queryInfo = this.queries.get(query);
        if (!queryInfo) {
            firstListen = true;
            queryInfo = new QueryListenersInfo();
            this.queries.set(query, queryInfo);
        }
        queryInfo.listeners.push(listener);
        listener.onOnlineStateChanged(this.onlineState);
        if (queryInfo.viewSnap)
            listener.onViewSnapshot(queryInfo.viewSnap);
        if (firstListen) {
            return this.syncEngine.listen(query).then(function (targetId) {
                queryInfo.targetId = targetId;
                return targetId;
            });
        }
        else {
            return Promise.resolve(queryInfo.targetId);
        }
    };
    EventManager.prototype.unlisten = function (listener) {
        var query = listener.query;
        var lastListen = false;
        var queryInfo = this.queries.get(query);
        if (queryInfo) {
            var i = queryInfo.listeners.indexOf(listener);
            if (i >= 0) {
                queryInfo.listeners.splice(i, 1);
                lastListen = queryInfo.listeners.length === 0;
            }
        }
        if (lastListen) {
            this.queries.delete(query);
            return this.syncEngine.unlisten(query);
        }
        else {
            return Promise.resolve();
        }
    };
    EventManager.prototype.onChange = function (viewSnaps) {
        for (var _i = 0, viewSnaps_1 = viewSnaps; _i < viewSnaps_1.length; _i++) {
            var viewSnap = viewSnaps_1[_i];
            var query = viewSnap.query;
            var queryInfo = this.queries.get(query);
            if (queryInfo) {
                for (var _a = 0, _b = queryInfo.listeners; _a < _b.length; _a++) {
                    var listener = _b[_a];
                    listener.onViewSnapshot(viewSnap);
                }
                queryInfo.viewSnap = viewSnap;
            }
        }
    };
    EventManager.prototype.onError = function (query, error) {
        var queryInfo = this.queries.get(query);
        if (queryInfo) {
            for (var _i = 0, _a = queryInfo.listeners; _i < _a.length; _i++) {
                var listener = _a[_i];
                listener.onError(error);
            }
        }
        // Remove all listeners. NOTE: We don't need to call syncEngine.unlisten()
        // after an error.
        this.queries.delete(query);
    };
    EventManager.prototype.onOnlineStateChanged = function (onlineState) {
        this.onlineState = onlineState;
        this.queries.forEach(function (_, queryInfo) {
            for (var _i = 0, _a = queryInfo.listeners; _i < _a.length; _i++) {
                var listener = _a[_i];
                listener.onOnlineStateChanged(onlineState);
            }
        });
    };
    return EventManager;
}());

/**
 * QueryListener takes a series of internal view snapshots and determines
 * when to raise the event.
 *
 * It uses an Observer to dispatch events.
 */
var event_manager_QueryListener = /** @class */ (function () {
    function QueryListener(query, queryObserver, options) {
        this.query = query;
        this.queryObserver = queryObserver;
        /**
         * Initial snapshots (e.g. from cache) may not be propagated to the wrapped
         * observer. This flag is set to true once we've actually raised an event.
         */
        this.raisedInitialEvent = false;
        this.onlineState = OnlineState.Unknown;
        this.options = options || {};
    }
    QueryListener.prototype.onViewSnapshot = function (snap) {
        assert(snap.docChanges.length > 0 || snap.syncStateChanged, 'We got a new snapshot with no changes?');
        if (!this.options.includeDocumentMetadataChanges) {
            // Remove the metadata only changes.
            var docChanges = [];
            for (var _i = 0, _a = snap.docChanges; _i < _a.length; _i++) {
                var docChange = _a[_i];
                if (docChange.type !== ChangeType.Metadata) {
                    docChanges.push(docChange);
                }
            }
            snap = {
                query: snap.query,
                docs: snap.docs,
                oldDocs: snap.oldDocs,
                docChanges: docChanges,
                fromCache: snap.fromCache,
                hasPendingWrites: snap.hasPendingWrites,
                syncStateChanged: snap.syncStateChanged
            };
        }
        if (!this.raisedInitialEvent) {
            if (this.shouldRaiseInitialEvent(snap, this.onlineState)) {
                this.raiseInitialEvent(snap);
            }
        }
        else if (this.shouldRaiseEvent(snap)) {
            this.queryObserver.next(snap);
        }
        this.snap = snap;
    };
    QueryListener.prototype.onError = function (error) {
        this.queryObserver.error(error);
    };
    QueryListener.prototype.onOnlineStateChanged = function (onlineState) {
        this.onlineState = onlineState;
        if (this.snap &&
            !this.raisedInitialEvent &&
            this.shouldRaiseInitialEvent(this.snap, onlineState)) {
            this.raiseInitialEvent(this.snap);
        }
    };
    QueryListener.prototype.shouldRaiseInitialEvent = function (snap, onlineState) {
        assert(!this.raisedInitialEvent, 'Determining whether to raise first event but already had first event');
        // Always raise the first event when we're synced
        if (!snap.fromCache) {
            return true;
        }
        // NOTE: We consider OnlineState.Unknown as online (it should become Failed
        // or Online if we wait long enough).
        var maybeOnline = onlineState !== OnlineState.Failed;
        // Don't raise the event if we're online, aren't synced yet (checked
        // above) and are waiting for a sync.
        if (this.options.waitForSyncWhenOnline && maybeOnline) {
            assert(snap.fromCache, 'Waiting for sync, but snapshot is not from cache');
            return false;
        }
        // Raise data from cache if we have any documents or we are offline
        return !snap.docs.isEmpty() || onlineState === OnlineState.Failed;
    };
    QueryListener.prototype.shouldRaiseEvent = function (snap) {
        // We don't need to handle includeDocumentMetadataChanges here because
        // the Metadata only changes have already been stripped out if needed.
        // At this point the only changes we will see are the ones we should
        // propagate.
        if (snap.docChanges.length > 0) {
            return true;
        }
        var hasPendingWritesChanged = this.snap && this.snap.hasPendingWrites !== snap.hasPendingWrites;
        if (snap.syncStateChanged || hasPendingWritesChanged) {
            return this.options.includeQueryMetadataChanges === true;
        }
        // Generally we should have hit one of the cases above, but it's possible
        // to get here if there were only metadata docChanges and they got
        // stripped out.
        return false;
    };
    QueryListener.prototype.raiseInitialEvent = function (snap) {
        assert(!this.raisedInitialEvent, 'Trying to raise initial events for second time');
        snap = {
            query: snap.query,
            docs: snap.docs,
            oldDocs: document_set_DocumentSet.emptySet(snap.docs),
            docChanges: QueryListener.getInitialViewChanges(snap),
            fromCache: snap.fromCache,
            hasPendingWrites: snap.hasPendingWrites,
            syncStateChanged: true
        };
        this.raisedInitialEvent = true;
        this.queryObserver.next(snap);
    };
    /** Returns changes as if all documents in the snap were added. */
    QueryListener.getInitialViewChanges = function (snap) {
        var result = [];
        snap.docs.forEach(function (doc) {
            result.push({ type: ChangeType.Added, doc: doc });
        });
        return result;
    };
    return QueryListener;
}());


//# sourceMappingURL=event_manager.js.map

// CONCATENATED MODULE: ../firestore/dist/esm/src/local/persistence_promise.js
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

/**
 * PersistencePromise<> is essentially a re-implementation of Promise<> except
 * it has a .next() method instead of .then() and .next() and .catch() callbacks
 * are executed synchronously when a PersistencePromise resolves rather than
 * asynchronously (Promise<> implementations use setImmediate() or similar).
 *
 * This is necessary to interoperate with IndexedDB which will automatically
 * commit transactions if control is returned to the event loop without
 * synchronously initiating another operation on the transaction.
 *
 * NOTE: .then() and .catch() only allow a single consumer, unlike normal
 * Promises.
 */
var persistence_promise_PersistencePromise = /** @class */ (function () {
    function PersistencePromise(callback) {
        var _this = this;
        // NOTE: next/catchCallback will always point to our own wrapper functions,
        // not the user's raw next() or catch() callbacks.
        this.nextCallback = null;
        this.catchCallback = null;
        // When the operation resolves, we'll set result or error and mark isDone.
        this.result = undefined;
        this.error = null;
        this.isDone = false;
        // Set to true when .then() or .catch() are called and prevents additional
        // chaining.
        this.callbackAttached = false;
        callback(function (value) {
            _this.isDone = true;
            _this.result = value;
            if (_this.nextCallback) {
                // value should be defined unless T is Void, but we can't express
                // that in the type system.
                _this.nextCallback(value);
            }
        }, function (error) {
            _this.isDone = true;
            _this.error = error;
            if (_this.catchCallback) {
                _this.catchCallback(error);
            }
        });
    }
    PersistencePromise.prototype.catch = function (fn) {
        return this.next(undefined, fn);
    };
    PersistencePromise.prototype.next = function (nextFn, catchFn) {
        var _this = this;
        if (this.callbackAttached) {
            fail('Called next() or catch() twice for PersistencePromise');
        }
        this.callbackAttached = true;
        if (this.isDone) {
            if (!this.error) {
                return this.wrapSuccess(nextFn, this.result);
            }
            else {
                return this.wrapFailure(catchFn, this.error);
            }
        }
        else {
            return new PersistencePromise(function (resolve, reject) {
                _this.nextCallback = function (value) {
                    _this.wrapSuccess(nextFn, value).next(resolve, reject);
                };
                _this.catchCallback = function (error) {
                    _this.wrapFailure(catchFn, error).next(resolve, reject);
                };
            });
        }
    };
    PersistencePromise.prototype.toPromise = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.next(resolve, reject);
        });
    };
    PersistencePromise.prototype.wrapUserFunction = function (fn) {
        try {
            var result = fn();
            if (result instanceof PersistencePromise) {
                return result;
            }
            else {
                return PersistencePromise.resolve(result);
            }
        }
        catch (e) {
            return PersistencePromise.reject(e);
        }
    };
    PersistencePromise.prototype.wrapSuccess = function (nextFn, value) {
        if (nextFn) {
            return this.wrapUserFunction(function () { return nextFn(value); });
        }
        else {
            // If there's no nextFn, then R must be the same as T but we
            // can't express that in the type system.
            return PersistencePromise.resolve(value);
        }
    };
    PersistencePromise.prototype.wrapFailure = function (catchFn, error) {
        if (catchFn) {
            return this.wrapUserFunction(function () { return catchFn(error); });
        }
        else {
            return PersistencePromise.reject(error);
        }
    };
    PersistencePromise.resolve = function (result) {
        return new PersistencePromise(function (resolve, reject) {
            resolve(result);
        });
    };
    PersistencePromise.reject = function (error) {
        return new PersistencePromise(function (resolve, reject) {
            reject(error);
        });
    };
    PersistencePromise.waitFor = function (all) {
        return all.reduce(function (promise, nextPromise, idx) {
            return promise.next(function () {
                return nextPromise;
            });
        }, PersistencePromise.resolve());
    };
    PersistencePromise.map = function (all) {
        var results = [];
        var first = true;
        // initial is ignored, so we can cheat on the type.
        var initial = PersistencePromise.resolve(null);
        return all
            .reduce(function (promise, nextPromise) {
            return promise.next(function (result) {
                if (!first) {
                    results.push(result);
                }
                first = false;
                return nextPromise;
            });
        }, initial)
            .next(function (result) {
            results.push(result);
            return results;
        });
    };
    return PersistencePromise;
}());


//# sourceMappingURL=persistence_promise.js.map

// CONCATENATED MODULE: ../firestore/dist/esm/src/local/eager_garbage_collector.js
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


/**
 * A garbage collector implementation that eagerly collects documents as soon as
 * they're no longer referenced in any of its registered GarbageSources.
 *
 * This implementation keeps track of a set of keys that are potentially garbage
 * without keeping an exact reference count. During collectGarbage, the
 * collector verifies that all potential garbage keys actually have no
 * references by consulting its list of garbage sources.
 */
var eager_garbage_collector_EagerGarbageCollector = /** @class */ (function () {
    function EagerGarbageCollector() {
        this.isEager = true;
        /**
         * The garbage collectible sources to double-check during garbage collection.
         */
        this.sources = [];
        /**
         * A set of potentially garbage keys.
         * PORTING NOTE: This would be a mutable set if Javascript had one.
         */
        this.potentialGarbage = documentKeySet();
    }
    EagerGarbageCollector.prototype.addGarbageSource = function (garbageSource) {
        this.sources.push(garbageSource);
        garbageSource.setGarbageCollector(this);
    };
    EagerGarbageCollector.prototype.removeGarbageSource = function (garbageSource) {
        this.sources.splice(this.sources.indexOf(garbageSource), 1);
        garbageSource.setGarbageCollector(null);
    };
    EagerGarbageCollector.prototype.addPotentialGarbageKey = function (key) {
        this.potentialGarbage = this.potentialGarbage.add(key);
    };
    EagerGarbageCollector.prototype.collectGarbage = function (txn) {
        var _this = this;
        var promises = [];
        var garbageKeys = documentKeySet();
        this.potentialGarbage.forEach(function (key) {
            var hasRefsPromise = _this.documentHasAnyReferences(txn, key);
            promises.push(hasRefsPromise.next(function (hasRefs) {
                // If there are no references, get the key.
                if (!hasRefs) {
                    garbageKeys = garbageKeys.add(key);
                }
                return persistence_promise_PersistencePromise.resolve();
            }));
        });
        // Clear locally retained potential keys and returned confirmed garbage.
        this.potentialGarbage = documentKeySet();
        return persistence_promise_PersistencePromise.waitFor(promises).next(function () { return garbageKeys; });
    };
    EagerGarbageCollector.prototype.documentHasAnyReferences = function (txn, key) {
        var initial = persistence_promise_PersistencePromise.resolve(false);
        return this.sources
            .map(function (source) { return function () { return source.containsKey(txn, key); }; })
            .reduce(function (promise, nextPromise) {
            return promise.next(function (result) {
                if (result) {
                    return persistence_promise_PersistencePromise.resolve(true);
                }
                else {
                    return nextPromise();
                }
            });
        }, initial);
    };
    return EagerGarbageCollector;
}());


//# sourceMappingURL=eager_garbage_collector.js.map

// CONCATENATED MODULE: ../firestore/dist/esm/src/local/local_view_changes.js
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


/**
 * A set of changes to what documents are currently in view and out of view for
 * a given query. These changes are sent to the LocalStore by the View (via
 * the SyncEngine) and are used to pin / unpin documents as appropriate.
 */
var local_view_changes_LocalViewChanges = /** @class */ (function () {
    function LocalViewChanges(query, addedKeys, removedKeys) {
        this.query = query;
        this.addedKeys = addedKeys;
        this.removedKeys = removedKeys;
    }
    LocalViewChanges.fromSnapshot = function (viewSnapshot) {
        var addedKeys = documentKeySet();
        var removedKeys = documentKeySet();
        for (var _i = 0, _a = viewSnapshot.docChanges; _i < _a.length; _i++) {
            var docChange = _a[_i];
            switch (docChange.type) {
                case ChangeType.Added:
                    addedKeys = addedKeys.add(docChange.doc.key);
                    break;
                case ChangeType.Removed:
                    removedKeys = removedKeys.add(docChange.doc.key);
                    break;
                default:
            }
        }
        return new LocalViewChanges(viewSnapshot.query, addedKeys, removedKeys);
    };
    return LocalViewChanges;
}());


//# sourceMappingURL=local_view_changes.js.map

// CONCATENATED MODULE: ../firestore/dist/esm/src/local/reference_set.js
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





/**
 * A collection of references to a document from some kind of numbered entity
 * (either a target ID or batch ID). As references are added to or removed from
 * the set corresponding events are emitted to a registered garbage collector.
 *
 * Each reference is represented by a DocumentReference object. Each of them
 * contains enough information to uniquely identify the reference. They are all
 * stored primarily in a set sorted by key. A document is considered garbage if
 * there's no references in that set (this can be efficiently checked thanks to
 * sorting by key).
 *
 * ReferenceSet also keeps a secondary set that contains references sorted by
 * IDs. This one is used to efficiently implement removal of all references by
 * some target ID.
 */
var reference_set_ReferenceSet = /** @class */ (function () {
    function ReferenceSet() {
        // A set of outstanding references to a document sorted by key.
        this.refsByKey = new sorted_set_SortedSet(reference_set_DocReference.compareByKey);
        // A set of outstanding references to a document sorted by target id.
        this.refsByTarget = new sorted_set_SortedSet(reference_set_DocReference.compareByTargetId);
        /** Keeps track of keys that have references */
        this.garbageCollector = null;
    }
    /** Returns true if the reference set contains no references. */
    ReferenceSet.prototype.isEmpty = function () {
        return this.refsByKey.isEmpty();
    };
    /** Adds a reference to the given document key for the given ID. */
    ReferenceSet.prototype.addReference = function (key, id) {
        var ref = new reference_set_DocReference(key, id);
        this.refsByKey = this.refsByKey.add(ref);
        this.refsByTarget = this.refsByTarget.add(ref);
    };
    /** Add references to the given document keys for the given ID. */
    ReferenceSet.prototype.addReferences = function (keys, id) {
        var _this = this;
        keys.forEach(function (key) { return _this.addReference(key, id); });
    };
    /**
     * Removes a reference to the given document key for the given
     * ID.
     */
    ReferenceSet.prototype.removeReference = function (key, id) {
        this.removeRef(new reference_set_DocReference(key, id));
    };
    ReferenceSet.prototype.removeReferences = function (keys, id) {
        var _this = this;
        keys.forEach(function (key) { return _this.removeReference(key, id); });
    };
    /**
     * Clears all references with a given ID. Calls removeRef() for each key
     * removed.
     */
    ReferenceSet.prototype.removeReferencesForId = function (id) {
        var _this = this;
        var emptyKey = document_key_DocumentKey.EMPTY;
        var startRef = new reference_set_DocReference(emptyKey, id);
        var endRef = new reference_set_DocReference(emptyKey, id + 1);
        this.refsByTarget.forEachInRange([startRef, endRef], function (ref) {
            _this.removeRef(ref);
        });
    };
    ReferenceSet.prototype.removeAllReferences = function () {
        var _this = this;
        this.refsByKey.forEach(function (ref) { return _this.removeRef(ref); });
    };
    ReferenceSet.prototype.removeRef = function (ref) {
        this.refsByKey = this.refsByKey.delete(ref);
        this.refsByTarget = this.refsByTarget.delete(ref);
        if (this.garbageCollector !== null) {
            this.garbageCollector.addPotentialGarbageKey(ref.key);
        }
    };
    ReferenceSet.prototype.referencesForId = function (id) {
        var emptyKey = document_key_DocumentKey.EMPTY;
        var startRef = new reference_set_DocReference(emptyKey, id);
        var endRef = new reference_set_DocReference(emptyKey, id + 1);
        var keys = documentKeySet();
        this.refsByTarget.forEachInRange([startRef, endRef], function (ref) {
            keys = keys.add(ref.key);
        });
        return keys;
    };
    ReferenceSet.prototype.setGarbageCollector = function (garbageCollector) {
        this.garbageCollector = garbageCollector;
    };
    ReferenceSet.prototype.containsKey = function (txn, key) {
        var ref = new reference_set_DocReference(key, 0);
        var firstRef = this.refsByKey.firstAfterOrEqual(ref);
        return persistence_promise_PersistencePromise.resolve(firstRef !== null && key.equals(firstRef.key));
    };
    return ReferenceSet;
}());

var reference_set_DocReference = /** @class */ (function () {
    function DocReference(key, targetOrBatchId) {
        this.key = key;
        this.targetOrBatchId = targetOrBatchId;
    }
    /** Compare by key then by ID */
    DocReference.compareByKey = function (left, right) {
        return (document_key_DocumentKey.comparator(left.key, right.key) ||
            primitiveComparator(left.targetOrBatchId, right.targetOrBatchId));
    };
    /** Compare by ID then by key */
    DocReference.compareByTargetId = function (left, right) {
        return (primitiveComparator(left.targetOrBatchId, right.targetOrBatchId) ||
            document_key_DocumentKey.comparator(left.key, right.key));
    };
    return DocReference;
}());


//# sourceMappingURL=reference_set.js.map

// CONCATENATED MODULE: ../firestore/dist/esm/src/core/target_id_generator.js
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
var RESERVED_BITS = 1;
var GeneratorIds;
(function (GeneratorIds) {
    GeneratorIds[GeneratorIds["LocalStore"] = 0] = "LocalStore";
    GeneratorIds[GeneratorIds["SyncEngine"] = 1] = "SyncEngine";
})(GeneratorIds || (GeneratorIds = {}));
/**
 * TargetIdGenerator generates monotonically increasing integer IDs. There are
 * separate generators for different scopes. While these generators will operate
 * independently of each other, they are scoped, such that no two generators
 * will ever produce the same ID. This is useful, because sometimes the backend
 * may group IDs from separate parts of the client into the same ID space.
 */
var TargetIdGenerator = /** @class */ (function () {
    function TargetIdGenerator(generatorId, initAfter) {
        if (initAfter === void 0) { initAfter = 0; }
        this.generatorId = generatorId;
        // Replace the generator part of initAfter with this generator's ID.
        var afterWithoutGenerator = (initAfter >> RESERVED_BITS) << RESERVED_BITS;
        var afterGenerator = initAfter - afterWithoutGenerator;
        if (afterGenerator >= generatorId) {
            // For example, if:
            //   this.generatorId = 0b0000
            //   after = 0b1011
            //   afterGenerator = 0b0001
            // Then:
            //   previous = 0b1010
            //   next = 0b1100
            this.previousId = afterWithoutGenerator | this.generatorId;
        }
        else {
            // For example, if:
            //   this.generatorId = 0b0001
            //   after = 0b1010
            //   afterGenerator = 0b0000
            // Then:
            //   previous = 0b1001
            //   next = 0b1011
            this.previousId =
                (afterWithoutGenerator | this.generatorId) - (1 << RESERVED_BITS);
        }
    }
    TargetIdGenerator.prototype.next = function () {
        this.previousId += 1 << RESERVED_BITS;
        return this.previousId;
    };
    TargetIdGenerator.forLocalStore = function (initAfter) {
        if (initAfter === void 0) { initAfter = 0; }
        return new TargetIdGenerator(GeneratorIds.LocalStore, initAfter);
    };
    TargetIdGenerator.forSyncEngine = function () {
        return new TargetIdGenerator(GeneratorIds.SyncEngine);
    };
    return TargetIdGenerator;
}());


//# sourceMappingURL=target_id_generator.js.map

// CONCATENATED MODULE: ../firestore/dist/esm/src/core/view.js
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






var AddedLimboDocument = /** @class */ (function () {
    function AddedLimboDocument(key) {
        this.key = key;
    }
    return AddedLimboDocument;
}());

var RemovedLimboDocument = /** @class */ (function () {
    function RemovedLimboDocument(key) {
        this.key = key;
    }
    return RemovedLimboDocument;
}());

/**
 * View is responsible for computing the final merged truth of what docs are in
 * a query. It gets notified of local and remote changes to docs, and applies
 * the query filters and limits to determine the most correct possible results.
 */
var view_View = /** @class */ (function () {
    function View(query, 
        /** Documents included in the remote target */
        syncedDocuments) {
        this.query = query;
        this.syncedDocuments = syncedDocuments;
        this.syncState = null;
        /**
         * A flag whether the view is current with the backend. A view is considered
         * current after it has seen the current flag from the backend and did not
         * lose consistency within the watch stream (e.g. because of an existence
         * filter mismatch).
         */
        this.current = false;
        /** Documents in the view but not in the remote target */
        this.limboDocuments = documentKeySet();
        /** Document Keys that have local changes */
        this.mutatedKeys = documentKeySet();
        this.documentSet = new document_set_DocumentSet(query.docComparator.bind(query));
    }
    /**
     * Iterates over a set of doc changes, applies the query limit, and computes
     * what the new results should be, what the changes were, and whether we may
     * need to go back to the local cache for more results. Does not make any
     * changes to the view.
     * @param docChanges The doc changes to apply to this view.
     * @param previousChanges If this is being called with a refill, then start
     *        with this set of docs and changes instead of the current view.
     * @return a new set of docs, changes, and refill flag.
     */
    View.prototype.computeDocChanges = function (docChanges, previousChanges) {
        var _this = this;
        var changeSet = previousChanges
            ? previousChanges.changeSet
            : new view_snapshot_DocumentChangeSet();
        var oldDocumentSet = previousChanges
            ? previousChanges.documentSet
            : this.documentSet;
        var newMutatedKeys = previousChanges
            ? previousChanges.mutatedKeys
            : this.mutatedKeys;
        var newDocumentSet = oldDocumentSet;
        var needsRefill = false;
        // Track the last doc in a (full) limit. This is necessary, because some
        // update (a delete, or an update moving a doc past the old limit) might
        // mean there is some other document in the local cache that either should
        // come (1) between the old last limit doc and the new last document, in the
        // case of updates, or (2) after the new last document, in the case of
        // deletes. So we keep this doc at the old limit to compare the updates to.
        //
        // Note that this should never get used in a refill (when previousChanges is
        // set), because there will only be adds -- no deletes or updates.
        var lastDocInLimit = this.query.hasLimit() && oldDocumentSet.size === this.query.limit
            ? oldDocumentSet.last()
            : null;
        docChanges.inorderTraversal(function (key, newMaybeDoc) {
            var oldDoc = oldDocumentSet.get(key);
            var newDoc = newMaybeDoc instanceof document_Document ? newMaybeDoc : null;
            if (newDoc) {
                assert(key.equals(newDoc.key), 'Mismatching keys found in document changes: ' +
                    key +
                    ' != ' +
                    newDoc.key);
                newDoc = _this.query.matches(newDoc) ? newDoc : null;
            }
            if (newDoc) {
                newDocumentSet = newDocumentSet.add(newDoc);
                if (newDoc.hasLocalMutations) {
                    newMutatedKeys = newMutatedKeys.add(key);
                }
                else {
                    newMutatedKeys = newMutatedKeys.delete(key);
                }
            }
            else {
                newDocumentSet = newDocumentSet.delete(key);
                newMutatedKeys = newMutatedKeys.delete(key);
            }
            // Calculate change
            if (oldDoc && newDoc) {
                var docsEqual = oldDoc.data.equals(newDoc.data);
                if (!docsEqual ||
                    oldDoc.hasLocalMutations !== newDoc.hasLocalMutations) {
                    // only report a change if document actually changed
                    if (docsEqual) {
                        changeSet.track({ type: ChangeType.Metadata, doc: newDoc });
                    }
                    else {
                        changeSet.track({ type: ChangeType.Modified, doc: newDoc });
                    }
                    if (lastDocInLimit &&
                        _this.query.docComparator(newDoc, lastDocInLimit) > 0) {
                        // This doc moved from inside the limit to after the limit.
                        // That means there may be some doc in the local cache that's
                        // actually less than this one.
                        needsRefill = true;
                    }
                }
            }
            else if (!oldDoc && newDoc) {
                changeSet.track({ type: ChangeType.Added, doc: newDoc });
            }
            else if (oldDoc && !newDoc) {
                changeSet.track({ type: ChangeType.Removed, doc: oldDoc });
                if (lastDocInLimit) {
                    // A doc was removed from a full limit query. We'll need to
                    // requery from the local cache to see if we know about some other
                    // doc that should be in the results.
                    needsRefill = true;
                }
            }
        });
        if (this.query.hasLimit()) {
            // TODO(klimt): Make DocumentSet size be constant time.
            while (newDocumentSet.size > this.query.limit) {
                var oldDoc = newDocumentSet.last();
                newDocumentSet = newDocumentSet.delete(oldDoc.key);
                changeSet.track({ type: ChangeType.Removed, doc: oldDoc });
            }
        }
        assert(!needsRefill || !previousChanges, 'View was refilled using docs that themselves needed refilling.');
        return {
            documentSet: newDocumentSet,
            changeSet: changeSet,
            needsRefill: needsRefill,
            mutatedKeys: newMutatedKeys
        };
    };
    /**
     * Updates the view with the given ViewDocumentChanges and updates limbo docs
     * and sync state from the given (optional) target change.
     * @param docChanges The set of changes to make to the view's docs.
     * @param targetChange A target change to apply for computing limbo docs and
     *        sync state.
     * @return A new ViewChange with the given docs, changes, and sync state.
     */
    View.prototype.applyChanges = function (docChanges, targetChange) {
        var _this = this;
        assert(!docChanges.needsRefill, 'Cannot apply changes that need a refill');
        var oldDocs = this.documentSet;
        this.documentSet = docChanges.documentSet;
        this.mutatedKeys = docChanges.mutatedKeys;
        // Sort changes based on type and query comparator
        var changes = docChanges.changeSet.getChanges();
        changes.sort(function (c1, c2) {
            return (compareChangeType(c1.type, c2.type) ||
                _this.query.docComparator(c1.doc, c2.doc));
        });
        var limboChanges = this.applyTargetChange(targetChange);
        var synced = this.limboDocuments.size === 0 && this.current;
        var newSyncState = synced ? SyncState.Synced : SyncState.Local;
        var syncStateChanged = newSyncState !== this.syncState;
        this.syncState = newSyncState;
        if (changes.length === 0 && !syncStateChanged) {
            // no changes
            return { limboChanges: limboChanges };
        }
        else {
            return {
                snapshot: {
                    query: this.query,
                    docs: docChanges.documentSet,
                    oldDocs: oldDocs,
                    docChanges: changes,
                    fromCache: newSyncState === SyncState.Local,
                    syncStateChanged: syncStateChanged,
                    hasPendingWrites: !docChanges.mutatedKeys.isEmpty()
                },
                limboChanges: limboChanges
            };
        }
    };
    /**
     * Returns whether the doc for the given key should be in limbo.
     */
    View.prototype.shouldBeInLimbo = function (key) {
        // If the remote end says it's part of this query, it's not in limbo.
        if (this.syncedDocuments.has(key)) {
            return false;
        }
        // The local store doesn't think it's a result, so it shouldn't be in limbo.
        if (!this.documentSet.has(key)) {
            return false;
        }
        // If there are local changes to the doc, they might explain why the server
        // doesn't know that it's part of the query. So don't put it in limbo.
        // TODO(klimt): Ideally, we would only consider changes that might actually
        // affect this specific query.
        if (this.documentSet.get(key).hasLocalMutations) {
            return false;
        }
        // Everything else is in limbo.
        return true;
    };
    /**
     * Updates syncedDocuments, current, and limbo docs based on the given change.
     * Returns the list of changes to which docs are in limbo.
     */
    View.prototype.applyTargetChange = function (targetChange) {
        var _this = this;
        if (targetChange) {
            var targetMapping = targetChange.mapping;
            if (targetMapping instanceof ResetMapping) {
                this.syncedDocuments = targetMapping.documents;
            }
            else if (targetMapping instanceof UpdateMapping) {
                this.syncedDocuments = targetMapping.applyToKeySet(this.syncedDocuments);
            }
            switch (targetChange.currentStatusUpdate) {
                case CurrentStatusUpdate.MarkCurrent:
                    this.current = true;
                    break;
                case CurrentStatusUpdate.MarkNotCurrent:
                    this.current = false;
                    break;
                case CurrentStatusUpdate.None:
                    break;
                default:
                    fail('Unknown current status update: ' + targetChange.currentStatusUpdate);
            }
        }
        // Recompute the set of limbo docs.
        // TODO(klimt): Do this incrementally so that it's not quadratic when
        // updating many documents.
        var oldLimboDocuments = this.limboDocuments;
        this.limboDocuments = documentKeySet();
        if (this.current) {
            this.documentSet.forEach(function (doc) {
                if (_this.shouldBeInLimbo(doc.key)) {
                    _this.limboDocuments = _this.limboDocuments.add(doc.key);
                }
            });
        }
        // Diff the new limbo docs with the old limbo docs.
        var changes = [];
        oldLimboDocuments.forEach(function (key) {
            if (!_this.limboDocuments.has(key)) {
                changes.push(new RemovedLimboDocument(key));
            }
        });
        this.limboDocuments.forEach(function (key) {
            if (!oldLimboDocuments.has(key)) {
                changes.push(new AddedLimboDocument(key));
            }
        });
        return changes;
    };
    return View;
}());

function compareChangeType(c1, c2) {
    var order = function (change) {
        switch (change) {
            case ChangeType.Added:
                return 1;
            case ChangeType.Modified:
                return 2;
            case ChangeType.Metadata:
                // A metadata change is converted to a modified change at the public
                // api layer.  Since we sort by document key and then change type,
                // metadata and modified changes must be sorted equivalently.
                return 2;
            case ChangeType.Removed:
                return 0;
            default:
                return fail('Unknown ChangeType: ' + change);
        }
    };
    return order(c1) - order(c2);
}

//# sourceMappingURL=view.js.map

// CONCATENATED MODULE: ../firestore/dist/esm/src/core/sync_engine.js
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


















var sync_engine_LOG_TAG = 'SyncEngine';
/**
 * QueryView contains all of the data that SyncEngine needs to keep track of for
 * a particular query.
 */
var QueryView = /** @class */ (function () {
    function QueryView(
        /**
         * The query itself.
         */
        query, 
        /**
         * The target number created by the client that is used in the watch
         * stream to identify this query.
         */
        targetId, 
        /**
         * An identifier from the datastore backend that indicates the last state
         * of the results that was received. This can be used to indicate where
         * to continue receiving new doc changes for the query.
         */
        resumeToken, 
        /**
         * The view is responsible for computing the final merged truth of what
         * docs are in the query. It gets notified of local and remote changes,
         * and applies the query filters and limits to determine the most correct
         * possible results.
         */
        view) {
        this.query = query;
        this.targetId = targetId;
        this.resumeToken = resumeToken;
        this.view = view;
    }
    return QueryView;
}());
/**
 * SyncEngine is the central controller in the client SDK architecture. It is
 * the glue code between the EventManager, LocalStore, and RemoteStore. Some of
 * SyncEngine's responsibilities include:
 * 1. Coordinating client requests and remote events between the EventManager
 *    and the local and remote data stores.
 * 2. Managing a View object for each query, providing the unified view between
 *    the local and remote data stores.
 * 3. Notifying the RemoteStore when the LocalStore has new mutations in its
 *    queue that need sending to the backend.
 *
 * The SyncEngine’s methods should only ever be called by methods running in the
 * global async queue.
 */
var sync_engine_SyncEngine = /** @class */ (function () {
    function SyncEngine(localStore, remoteStore, currentUser) {
        this.localStore = localStore;
        this.remoteStore = remoteStore;
        this.currentUser = currentUser;
        this.viewHandler = null;
        this.errorHandler = null;
        this.queryViewsByQuery = new obj_map_ObjectMap(function (q) {
            return q.canonicalId();
        });
        this.queryViewsByTarget = {};
        this.limboTargetsByKey = new sorted_map_SortedMap(document_key_DocumentKey.comparator);
        this.limboKeysByTarget = {};
        this.limboDocumentRefs = new reference_set_ReferenceSet();
        this.limboCollector = new eager_garbage_collector_EagerGarbageCollector();
        /** Stores user completion handlers, indexed by User and BatchId. */
        this.mutationUserCallbacks = {};
        this.targetIdGenerator = TargetIdGenerator.forSyncEngine();
    }
    /** Subscribes view and error handler. Can be called only once. */
    SyncEngine.prototype.subscribe = function (viewHandler, errorHandler) {
        assert(viewHandler !== null && errorHandler !== null, 'View and error handlers cannot be null');
        assert(this.viewHandler === null && this.errorHandler === null, 'SyncEngine already has a subscriber.');
        this.viewHandler = viewHandler;
        this.errorHandler = errorHandler;
        this.limboCollector.addGarbageSource(this.limboDocumentRefs);
    };
    /**
     * Initiates the new listen, resolves promise when listen enqueued to the
     * server. All the subsequent view snapshots or errors are sent to the
     * subscribed handlers. Returns the targetId of the query.
     */
    SyncEngine.prototype.listen = function (query) {
        var _this = this;
        this.assertSubscribed('listen()');
        assert(!this.queryViewsByQuery.has(query), 'We already listen to the query: ' + query);
        return this.localStore.allocateQuery(query).then(function (queryData) {
            return _this.localStore
                .executeQuery(query)
                .then(function (docs) {
                return _this.localStore
                    .remoteDocumentKeys(queryData.targetId)
                    .then(function (remoteKeys) {
                    var view = new view_View(query, remoteKeys);
                    var viewDocChanges = view.computeDocChanges(docs);
                    var viewChange = view.applyChanges(viewDocChanges);
                    assert(viewChange.limboChanges.length === 0, 'View returned limbo docs before target ack from the server.');
                    assert(!!viewChange.snapshot, 'applyChanges for new view should always return a snapshot');
                    var data = new QueryView(query, queryData.targetId, queryData.resumeToken, view);
                    _this.queryViewsByQuery.set(query, data);
                    _this.queryViewsByTarget[queryData.targetId] = data;
                    _this.viewHandler([viewChange.snapshot]);
                    _this.remoteStore.listen(queryData);
                });
            })
                .then(function () {
                return queryData.targetId;
            });
        });
    };
    /** Stops listening to the query. */
    SyncEngine.prototype.unlisten = function (query) {
        var _this = this;
        this.assertSubscribed('unlisten()');
        var queryView = this.queryViewsByQuery.get(query);
        assert(!!queryView, 'Trying to unlisten on query not found:' + query);
        return this.localStore.releaseQuery(query).then(function () {
            _this.remoteStore.unlisten(queryView.targetId);
            return _this.removeAndCleanupQuery(queryView).then(function () {
                return _this.localStore.collectGarbage();
            });
        });
    };
    /**
     * Initiates the write of local mutation batch which involves adding the
     * writes to the mutation queue, notifying the remote store about new
     * mutations and raising events for any changes this write caused.
     *
     * The promise returned by this call is resolved when the above steps
     * have completed, *not* when the write was acked by the backend. The
     * userCallback is resolved once the write was acked/rejected by the
     * backend (or failed locally for any other reason).
     */
    SyncEngine.prototype.write = function (batch, userCallback) {
        var _this = this;
        this.assertSubscribed('write()');
        return this.localStore
            .localWrite(batch)
            .then(function (result) {
            _this.addMutationCallback(result.batchId, userCallback);
            return _this.emitNewSnapsAndNotifyLocalStore(result.changes);
        })
            .then(function () {
            return _this.remoteStore.fillWritePipeline();
        });
    };
    // TODO(klimt): Wrap the given error in a standard Firestore error object.
    SyncEngine.prototype.wrapUpdateFunctionError = function (error) {
        return error;
    };
    /**
     * Takes an updateFunction in which a set of reads and writes can be performed
     * atomically. In the updateFunction, the client can read and write values
     * using the supplied transaction object. After the updateFunction, all
     * changes will be committed. If some other client has changed any of the data
     * referenced, then the updateFunction will be called again. If the
     * updateFunction still fails after the given number of retries, then the
     * transaction will be rejection.
     *
     * The transaction object passed to the updateFunction contains methods for
     * accessing documents and collections. Unlike other datastore access, data
     * accessed with the transaction will not reflect local changes that have not
     * been committed. For this reason, it is required that all reads are
     * performed before any writes. Transactions must be performed while online.
     *
     * The promise returned is resolved when the transaction is fully committed.
     */
    SyncEngine.prototype.runTransaction = function (updateFunction, retries) {
        var _this = this;
        if (retries === void 0) { retries = 5; }
        assert(retries >= 0, 'Got negative number of retries for transaction.');
        var transaction = this.remoteStore.createTransaction();
        var wrappedUpdateFunction = function () {
            try {
                var userPromise = updateFunction(transaction);
                if (isNullOrUndefined(userPromise) ||
                    !userPromise.catch ||
                    !userPromise.then) {
                    return Promise.reject(Error('Transaction callback must return a Promise'));
                }
                return userPromise.catch(function (e) {
                    return Promise.reject(_this.wrapUpdateFunctionError(e));
                });
            }
            catch (e) {
                return Promise.reject(_this.wrapUpdateFunctionError(e));
            }
        };
        return wrappedUpdateFunction().then(function (result) {
            return transaction
                .commit()
                .then(function () {
                return result;
            })
                .catch(function (error) {
                if (retries === 0) {
                    return Promise.reject(error);
                }
                // TODO(klimt): Put in a retry delay?
                return _this.runTransaction(updateFunction, retries - 1);
            });
        });
    };
    SyncEngine.prototype.applyRemoteEvent = function (remoteEvent) {
        var _this = this;
        this.assertSubscribed('applyRemoteEvent()');
        // Make sure limbo documents are deleted if there were no results
        forEachNumber(remoteEvent.targetChanges, function (targetId, targetChange) {
            var limboKey = _this.limboKeysByTarget[targetId];
            if (limboKey &&
                targetChange.currentStatusUpdate ===
                    CurrentStatusUpdate.MarkCurrent &&
                !remoteEvent.documentUpdates.get(limboKey)) {
                // When listening to a query the server responds with a snapshot
                // containing documents matching the query and a current marker
                // telling us we're now in sync. It's possible for these to arrive
                // as separate remote events or as a single remote event.
                // For a document query, there will be no documents sent in the
                // response if the document doesn't exist.
                //
                // If the snapshot arrives separately from the current marker,
                // we handle it normally and updateTrackedLimbos will resolve the
                // limbo status of the document, removing it from limboDocumentRefs.
                // This works because clients only initiate limbo resolution when
                // a target is current and because all current targets are
                // always at a consistent snapshot.
                //
                // However, if the document doesn't exist and the current marker
                // arrives, the document is not present in the snapshot and our
                // normal view handling would consider the document to remain in
                // limbo indefinitely because there are no updates to the document.
                // To avoid this, we specially handle this just this case here:
                // synthesizing a delete.
                //
                // TODO(dimond): Ideally we would have an explicit lookup query
                // instead resulting in an explicit delete message and we could
                // remove this special logic.
                remoteEvent.addDocumentUpdate(new document_NoDocument(limboKey, remoteEvent.snapshotVersion));
            }
        });
        return this.localStore.applyRemoteEvent(remoteEvent).then(function (changes) {
            return _this.emitNewSnapsAndNotifyLocalStore(changes, remoteEvent);
        });
    };
    SyncEngine.prototype.rejectListen = function (targetId, err) {
        var _this = this;
        this.assertSubscribed('rejectListens()');
        var limboKey = this.limboKeysByTarget[targetId];
        if (limboKey) {
            // Since this query failed, we won't want to manually unlisten to it.
            // So go ahead and remove it from bookkeeping.
            this.limboTargetsByKey = this.limboTargetsByKey.remove(limboKey);
            delete this.limboKeysByTarget[targetId];
            // TODO(klimt): We really only should do the following on permission
            // denied errors, but we don't have the cause code here.
            // It's a limbo doc. Create a synthetic event saying it was deleted.
            // This is kind of a hack. Ideally, we would have a method in the local
            // store to purge a document. However, it would be tricky to keep all of
            // the local store's invariants with another method.
            var docMap = new sorted_map_SortedMap(document_key_DocumentKey.comparator);
            docMap = docMap.insert(limboKey, new document_NoDocument(limboKey, snapshot_version_SnapshotVersion.forDeletedDoc()));
            var event_1 = new remote_event_RemoteEvent(snapshot_version_SnapshotVersion.MIN, {}, docMap);
            return this.applyRemoteEvent(event_1);
        }
        else {
            var queryView_1 = this.queryViewsByTarget[targetId];
            assert(!!queryView_1, 'Unknown targetId: ' + targetId);
            return this.localStore.releaseQuery(queryView_1.query).then(function () {
                return _this.removeAndCleanupQuery(queryView_1).then(function () {
                    _this.errorHandler(queryView_1.query, err);
                });
            });
        }
    };
    SyncEngine.prototype.applySuccessfulWrite = function (mutationBatchResult) {
        var _this = this;
        this.assertSubscribed('applySuccessfulWrite()');
        // The local store may or may not be able to apply the write result and
        // raise events immediately (depending on whether the watcher is caught
        // up), so we raise user callbacks first so that they consistently happen
        // before listen events.
        this.processUserCallback(mutationBatchResult.batch.batchId, 
        /*error=*/ null);
        return this.localStore
            .acknowledgeBatch(mutationBatchResult)
            .then(function (changes) {
            return _this.emitNewSnapsAndNotifyLocalStore(changes);
        });
    };
    SyncEngine.prototype.rejectFailedWrite = function (batchId, error) {
        var _this = this;
        this.assertSubscribed('rejectFailedWrite()');
        // The local store may or may not be able to apply the write result and
        // raise events immediately (depending on whether the watcher is caught up),
        // so we raise user callbacks first so that they consistently happen before
        // listen events.
        this.processUserCallback(batchId, error);
        return this.localStore.rejectBatch(batchId).then(function (changes) {
            return _this.emitNewSnapsAndNotifyLocalStore(changes);
        });
    };
    SyncEngine.prototype.addMutationCallback = function (batchId, callback) {
        var newCallbacks = this.mutationUserCallbacks[this.currentUser.toKey()];
        if (!newCallbacks) {
            newCallbacks = new sorted_map_SortedMap(primitiveComparator);
        }
        newCallbacks = newCallbacks.insert(batchId, callback);
        this.mutationUserCallbacks[this.currentUser.toKey()] = newCallbacks;
    };
    /**
     * Resolves or rejects the user callback for the given batch and then discards
     * it.
     */
    SyncEngine.prototype.processUserCallback = function (batchId, error) {
        var newCallbacks = this.mutationUserCallbacks[this.currentUser.toKey()];
        // NOTE: Mutations restored from persistence won't have callbacks, so it's
        // okay for there to be no callback for this ID.
        if (newCallbacks) {
            var callback = newCallbacks.get(batchId);
            if (callback) {
                assert(batchId === newCallbacks.minKey(), 'Mutation callbacks processed out-of-order?');
                if (error) {
                    callback.reject(error);
                }
                else {
                    callback.resolve();
                }
                newCallbacks = newCallbacks.remove(batchId);
            }
            this.mutationUserCallbacks[this.currentUser.toKey()] = newCallbacks;
        }
    };
    SyncEngine.prototype.removeAndCleanupQuery = function (queryView) {
        this.queryViewsByQuery.delete(queryView.query);
        delete this.queryViewsByTarget[queryView.targetId];
        this.limboDocumentRefs.removeReferencesForId(queryView.targetId);
        return this.gcLimboDocuments();
    };
    SyncEngine.prototype.updateTrackedLimbos = function (targetId, limboChanges) {
        for (var _i = 0, limboChanges_1 = limboChanges; _i < limboChanges_1.length; _i++) {
            var limboChange = limboChanges_1[_i];
            if (limboChange instanceof AddedLimboDocument) {
                this.limboDocumentRefs.addReference(limboChange.key, targetId);
                this.trackLimboChange(limboChange);
            }
            else if (limboChange instanceof RemovedLimboDocument) {
                debug(sync_engine_LOG_TAG, 'Document no longer in limbo: ' + limboChange.key);
                this.limboDocumentRefs.removeReference(limboChange.key, targetId);
            }
            else {
                fail('Unknown limbo change: ' + JSON.stringify(limboChange));
            }
        }
        return this.gcLimboDocuments();
    };
    SyncEngine.prototype.trackLimboChange = function (limboChange) {
        var key = limboChange.key;
        if (!this.limboTargetsByKey.get(key)) {
            debug(sync_engine_LOG_TAG, 'New document in limbo: ' + key);
            var limboTargetId = this.targetIdGenerator.next();
            var query = query_Query.atPath(key.path);
            this.limboKeysByTarget[limboTargetId] = key;
            this.remoteStore.listen(new query_data_QueryData(query, limboTargetId, QueryPurpose.Listen));
            this.limboTargetsByKey = this.limboTargetsByKey.insert(key, limboTargetId);
        }
    };
    SyncEngine.prototype.gcLimboDocuments = function () {
        var _this = this;
        // HACK: We can use a null transaction here, because we know that the
        // reference set is entirely within memory and doesn't need a store engine.
        return this.limboCollector
            .collectGarbage(null)
            .next(function (keys) {
            keys.forEach(function (key) {
                var limboTargetId = _this.limboTargetsByKey.get(key);
                if (limboTargetId === null) {
                    // This target already got removed, because the query failed.
                    return;
                }
                _this.remoteStore.unlisten(limboTargetId);
                _this.limboTargetsByKey = _this.limboTargetsByKey.remove(key);
                delete _this.limboKeysByTarget[limboTargetId];
            });
        })
            .toPromise();
    };
    // Visible for testing
    SyncEngine.prototype.currentLimboDocs = function () {
        return this.limboTargetsByKey;
    };
    SyncEngine.prototype.emitNewSnapsAndNotifyLocalStore = function (changes, remoteEvent) {
        var _this = this;
        var newSnaps = [];
        var docChangesInAllViews = [];
        var queriesProcessed = [];
        this.queryViewsByQuery.forEach(function (_, queryView) {
            queriesProcessed.push(Promise.resolve()
                .then(function () {
                var viewDocChanges = queryView.view.computeDocChanges(changes);
                if (!viewDocChanges.needsRefill) {
                    return viewDocChanges;
                }
                // The query has a limit and some docs were removed, so we need
                // to re-run the query against the local store to make sure we
                // didn't lose any good docs that had been past the limit.
                return _this.localStore.executeQuery(queryView.query).then(function (docs) {
                    return queryView.view.computeDocChanges(docs, viewDocChanges);
                });
            })
                .then(function (viewDocChanges) {
                var targetChange = remoteEvent && remoteEvent.targetChanges[queryView.targetId];
                var viewChange = queryView.view.applyChanges(viewDocChanges, targetChange);
                return _this.updateTrackedLimbos(queryView.targetId, viewChange.limboChanges).then(function () {
                    if (viewChange.snapshot) {
                        newSnaps.push(viewChange.snapshot);
                        var docChanges = local_view_changes_LocalViewChanges.fromSnapshot(viewChange.snapshot);
                        docChangesInAllViews.push(docChanges);
                    }
                });
            }));
        });
        return Promise.all(queriesProcessed)
            .then(function () {
            _this.viewHandler(newSnaps);
            return _this.localStore.notifyLocalViewChanges(docChangesInAllViews);
        })
            .then(function () {
            return _this.localStore.collectGarbage();
        });
    };
    SyncEngine.prototype.assertSubscribed = function (fnName) {
        assert(this.viewHandler !== null && this.errorHandler !== null, 'Trying to call ' + fnName + ' before calling subscribe().');
    };
    SyncEngine.prototype.handleUserChange = function (user) {
        var _this = this;
        this.currentUser = user;
        return this.localStore
            .handleUserChange(user)
            .then(function (changes) {
            return _this.emitNewSnapsAndNotifyLocalStore(changes);
        })
            .then(function () {
            return _this.remoteStore.handleUserChange(user);
        });
    };
    return SyncEngine;
}());


//# sourceMappingURL=sync_engine.js.map

// CONCATENATED MODULE: ../firestore/dist/esm/src/model/mutation_batch.js
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



var BATCHID_UNKNOWN = -1;
/**
 * A batch of mutations that will be sent as one unit to the backend.
 */
var mutation_batch_MutationBatch = /** @class */ (function () {
    function MutationBatch(batchId, localWriteTime, mutations) {
        this.batchId = batchId;
        this.localWriteTime = localWriteTime;
        this.mutations = mutations;
    }
    /**
     * Applies all the mutations in this MutationBatch to the specified document
     * to create a new remote document
     *
     * @param docKey The key of the document to apply mutations to.
     * @param maybeDoc The document to apply mutations to.
     * @param batchResult The result of applying the MutationBatch to the
     * backend.
     */
    MutationBatch.prototype.applyToRemoteDocument = function (docKey, maybeDoc, batchResult) {
        if (maybeDoc) {
            assert(maybeDoc.key.equals(docKey), "applyToRemoteDocument: key " + docKey + " should match maybeDoc key\n        " + maybeDoc.key);
        }
        var mutationResults = batchResult.mutationResults;
        assert(mutationResults.length === this.mutations.length, "Mismatch between mutations length\n      (" + this.mutations.length + ") and mutation results length\n      (" + mutationResults.length + ").");
        for (var i = 0; i < this.mutations.length; i++) {
            var mutation = this.mutations[i];
            if (mutation.key.equals(docKey)) {
                var mutationResult = mutationResults[i];
                maybeDoc = mutation.applyToRemoteDocument(maybeDoc, mutationResult);
            }
        }
        return maybeDoc;
    };
    /**
     * Computes the local view of a document given all the mutations in this
     * batch.
     *
     * @param docKey The key of the document to apply mutations to.
     * @param maybeDoc The document to apply mutations to.
     */
    MutationBatch.prototype.applyToLocalView = function (docKey, maybeDoc) {
        if (maybeDoc) {
            assert(maybeDoc.key.equals(docKey), "applyToLocalDocument: key " + docKey + " should match maybeDoc key\n        " + maybeDoc.key);
        }
        for (var i = 0; i < this.mutations.length; i++) {
            var mutation = this.mutations[i];
            if (mutation.key.equals(docKey)) {
                maybeDoc = mutation.applyToLocalView(maybeDoc, this.localWriteTime);
            }
        }
        return maybeDoc;
    };
    MutationBatch.prototype.keys = function () {
        var keySet = documentKeySet();
        for (var _i = 0, _a = this.mutations; _i < _a.length; _i++) {
            var mutation = _a[_i];
            keySet = keySet.add(mutation.key);
        }
        return keySet;
    };
    MutationBatch.prototype.equals = function (other) {
        return (this.batchId === other.batchId &&
            arrayEquals(this.mutations, other.mutations));
    };
    /**
     * Returns true if this mutation batch has already been removed from the
     * mutation queue.
     *
     * Note that not all implementations of the MutationQueue necessarily use
     * tombstones as part of their implementation and generally speaking no code
     * outside the mutation queues should really care about this.
     */
    MutationBatch.prototype.isTombstone = function () {
        return this.mutations.length === 0;
    };
    /** Converts this batch into a tombstone */
    MutationBatch.prototype.toTombstone = function () {
        return new MutationBatch(this.batchId, this.localWriteTime, []);
    };
    return MutationBatch;
}());

/** The result of applying a mutation batch to the backend. */
var mutation_batch_MutationBatchResult = /** @class */ (function () {
    function MutationBatchResult(batch, commitVersion, mutationResults, streamToken, 
        /**
         * A pre-computed mapping from each mutated document to the resulting
         * version.
         */
        docVersions) {
        this.batch = batch;
        this.commitVersion = commitVersion;
        this.mutationResults = mutationResults;
        this.streamToken = streamToken;
        this.docVersions = docVersions;
    }
    /**
     * Creates a new MutationBatchResult for the given batch and results. There
     * must be one result for each mutation in the batch. This static factory
     * caches a document=>version mapping (docVersions).
     */
    MutationBatchResult.from = function (batch, commitVersion, results, streamToken) {
        assert(batch.mutations.length === results.length, 'Mutations sent ' +
            batch.mutations.length +
            ' must equal results received ' +
            results.length);
        var versionMap = documentVersionMap();
        var mutations = batch.mutations;
        for (var i = 0; i < mutations.length; i++) {
            var version = results[i].version;
            if (version === null) {
                // deletes don't have a version, so we substitute the commitVersion
                // of the entire batch.
                version = commitVersion;
            }
            versionMap = versionMap.insert(mutations[i].key, version);
        }
        return new MutationBatchResult(batch, commitVersion, results, streamToken, versionMap);
    };
    return MutationBatchResult;
}());


//# sourceMappingURL=mutation_batch.js.map

// CONCATENATED MODULE: ../firestore/dist/esm/src/local/encoded_resource_path.js
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


var escapeChar = '\u0001';
var encodedSeparatorChar = '\u0001';
var encodedNul = '\u0010';
var encodedEscape = '\u0011';
/**
 * Encodes a resource path into a IndexedDb-compatible string form.
 */
function encode(path) {
    var result = '';
    for (var i = 0; i < path.length; i++) {
        if (result.length > 0) {
            result = encodeSeparator(result);
        }
        result = encodeSegment(path.get(i), result);
    }
    return encodeSeparator(result);
}
/** Encodes a single segment of a resource path into the given result */
function encodeSegment(segment, resultBuf) {
    var result = resultBuf;
    var length = segment.length;
    for (var i = 0; i < length; i++) {
        var c = segment.charAt(i);
        switch (c) {
            case '\0':
                result += escapeChar + encodedNul;
                break;
            case escapeChar:
                result += escapeChar + encodedEscape;
                break;
            default:
                result += c;
        }
    }
    return result;
}
/** Encodes a path separator into the given result */
function encodeSeparator(result) {
    return result + escapeChar + encodedSeparatorChar;
}
/**
 * Decodes the given IndexedDb-compatible string form of a resource path into
 * a ResourcePath instance. Note that this method is not suitable for use with
 * decoding resource names from the server; those are One Platform format
 * strings.
 */
function decode(path) {
    // Event the empty path must encode as a path of at least length 2. A path
    // with exactly 2 must be the empty path.
    var length = path.length;
    assert(length >= 2, 'Invalid path ' + path);
    if (length === 2) {
        assert(path.charAt(0) === escapeChar && path.charAt(1) === encodedSeparatorChar, 'Non-empty path ' + path + ' had length 2');
        return path_ResourcePath.EMPTY_PATH;
    }
    // Escape characters cannot exist past the second-to-last position in the
    // source value.
    var lastReasonableEscapeIndex = length - 2;
    var segments = [];
    var segmentBuilder = '';
    for (var start = 0; start < length;) {
        // The last two characters of a valid encoded path must be a separator, so
        // there must be an end to this segment.
        var end = path.indexOf(escapeChar, start);
        if (end < 0 || end > lastReasonableEscapeIndex) {
            fail('Invalid encoded resource path: "' + path + '"');
        }
        var next = path.charAt(end + 1);
        switch (next) {
            case encodedSeparatorChar:
                var currentPiece = path.substring(start, end);
                var segment = void 0;
                if (segmentBuilder.length === 0) {
                    // Avoid copying for the common case of a segment that excludes \0
                    // and \001
                    segment = currentPiece;
                }
                else {
                    segmentBuilder += currentPiece;
                    segment = segmentBuilder;
                    segmentBuilder = '';
                }
                segments.push(segment);
                break;
            case encodedNul:
                segmentBuilder += path.substring(start, end);
                segmentBuilder += '\0';
                break;
            case encodedEscape:
                // The escape character can be used in the output to encode itself.
                segmentBuilder += path.substring(start, end + 1);
                break;
            default:
                fail('Invalid encoded resource path: "' + path + '"');
        }
        start = end + 2;
    }
    return new path_ResourcePath(segments);
}
/**
 * Computes the prefix successor of the given path, computed by encode above.
 * A prefix successor is the first key that cannot be prefixed by the given
 * path. It's useful for defining the end of a prefix scan such that all keys
 * in the scan have the same prefix.
 *
 * Note that this is not a general prefix successor implementation, which is
 * tricky to get right with Strings, given that they encode down to UTF-8.
 * Instead this relies on the fact that all paths encoded by this class are
 * always terminated with a separator, and so a successor can always be
 * cheaply computed by incrementing the last character of the path.
 */
function prefixSuccessor(path) {
    var c = path.charCodeAt(path.length - 1);
    // TODO(mcg): this really should be a general thing, but not worth it right
    // now
    assert(c === 1, 'successor may only operate on paths generated by encode');
    return path.substring(0, path.length - 1) + String.fromCharCode(c + 1);
}

//# sourceMappingURL=encoded_resource_path.js.map

// CONCATENATED MODULE: ../firestore/dist/esm/src/local/indexeddb_schema.js
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


var SCHEMA_VERSION = 1;
/** Performs database creation and (in the future) upgrades between versions. */
function createOrUpgradeDb(db, oldVersion) {
    assert(oldVersion === 0, 'Unexpected upgrade from version ' + oldVersion);
    db.createObjectStore(DbMutationQueue.store, {
        keyPath: DbMutationQueue.keyPath
    });
    // TODO(mikelehen): Get rid of "as any" if/when TypeScript fixes their
    // types. https://github.com/Microsoft/TypeScript/issues/14322
    db.createObjectStore(
    // tslint:disable-next-line:no-any
    DbMutationBatch.store, { keyPath: DbMutationBatch.keyPath });
    var targetDocumentsStore = db.createObjectStore(
    // tslint:disable-next-line:no-any
    DbTargetDocument.store, { keyPath: DbTargetDocument.keyPath });
    targetDocumentsStore.createIndex(DbTargetDocument.documentTargetsIndex, DbTargetDocument.documentTargetsKeyPath, { unique: true });
    var targetStore = db.createObjectStore(DbTarget.store, {
        keyPath: DbTarget.keyPath
    });
    // NOTE: This is unique only because the TargetId is the suffix.
    targetStore.createIndex(DbTarget.queryTargetsIndexName, DbTarget.queryTargetsKeyPath, { unique: true });
    // NOTE: keys for these stores are specified explicitly rather than using a
    // keyPath.
    db.createObjectStore(indexeddb_schema_DbDocumentMutation.store);
    db.createObjectStore(DbRemoteDocument.store);
    db.createObjectStore(DbOwner.store);
    db.createObjectStore(DbTargetGlobal.store);
}
/**
 * Wrapper class to store timestamps (seconds and nanos) in IndexedDb objects.
 */
var DbTimestamp = /** @class */ (function () {
    function DbTimestamp(seconds, nanos) {
        this.seconds = seconds;
        this.nanos = nanos;
    }
    return DbTimestamp;
}());

/**
 * A singleton object to be stored in the 'owner' store in IndexedDb.
 *
 * A given database can be owned by a single tab at a given time. That tab
 * must validate that it is still the owner before every write operation and
 * should regularly write an updated timestamp to prevent other tabs from
 * "stealing" ownership of the db.
 */
var DbOwner = /** @class */ (function () {
    function DbOwner(ownerId, leaseTimestampMs) {
        this.ownerId = ownerId;
        this.leaseTimestampMs = leaseTimestampMs;
    }
    /** Name of the IndexedDb object store. */
    DbOwner.store = 'owner';
    return DbOwner;
}());

/**
 * An object to be stored in the 'mutationQueues' store in IndexedDb.
 *
 * Each user gets a single queue of MutationBatches to apply to the server.
 * DbMutationQueue tracks the metadata about the queue.
 */
var DbMutationQueue = /** @class */ (function () {
    function DbMutationQueue(
        /**
         * The normalized user ID to which this queue belongs.
         */
        userId, 
        /**
         * An identifier for the highest numbered batch that has been acknowledged
         * by the server. All MutationBatches in this queue with batchIds less
         * than or equal to this value are considered to have been acknowledged by
         * the server.
         */
        lastAcknowledgedBatchId, 
        /**
         * A stream token that was previously sent by the server.
         *
         * See StreamingWriteRequest in datastore.proto for more details about
         * usage.
         *
         * After sending this token, earlier tokens may not be used anymore so
         * only a single stream token is retained.
         */
        lastStreamToken) {
        this.userId = userId;
        this.lastAcknowledgedBatchId = lastAcknowledgedBatchId;
        this.lastStreamToken = lastStreamToken;
    }
    /** Name of the IndexedDb object store.  */
    DbMutationQueue.store = 'mutationQueues';
    /** Keys are automatically assigned via the userId property. */
    DbMutationQueue.keyPath = 'userId';
    return DbMutationQueue;
}());

/**
 * An object to be stored in the 'mutations' store in IndexedDb.
 *
 * Represents a batch of user-level mutations intended to be sent to the server
 * in a single write. Each user-level batch gets a separate DbMutationBatch
 * with a new batchId.
 */
var DbMutationBatch = /** @class */ (function () {
    function DbMutationBatch(
        /**
         * The normalized user ID to which this batch belongs.
         */
        userId, 
        /**
         * An identifier for this batch, allocated by the mutation queue in a
         * monotonically increasing manner.
         */
        batchId, 
        /**
         * The local write time of the batch, stored as milliseconds since the
         * epoch.
         */
        localWriteTimeMs, 
        /**
         * A list of mutations to apply. All mutations will be applied atomically.
         *
         * Mutations are serialized via JsonProtoSerializer.toMutation().
         */
        mutations) {
        this.userId = userId;
        this.batchId = batchId;
        this.localWriteTimeMs = localWriteTimeMs;
        this.mutations = mutations;
    }
    /** Name of the IndexedDb object store.  */
    DbMutationBatch.store = 'mutations';
    /** Keys are automatically assigned via the userId, batchId properties. */
    DbMutationBatch.keyPath = ['userId', 'batchId'];
    return DbMutationBatch;
}());

/**
 * An object to be stored in the 'documentMutations' store in IndexedDb.
 *
 * A manually maintained index of all the mutation batches that affect a given
 * document key. The rows in this table are references based on the contents of
 * DbMutationBatch.mutations.
 */
var indexeddb_schema_DbDocumentMutation = /** @class */ (function () {
    function DbDocumentMutation() {
    }
    /**
     * Creates a [userId] key for use in the DbDocumentMutations index to iterate
     * over all of a user's document mutations.
     */
    DbDocumentMutation.prefixForUser = function (userId) {
        return [userId];
    };
    /**
     * Creates a [userId, encodedPath] key for use in the DbDocumentMutations
     * index to iterate over all at document mutations for a given path or lower.
     */
    DbDocumentMutation.prefixForPath = function (userId, path) {
        return [userId, encode(path)];
    };
    /**
     * Creates a full index key of [userId, encodedPath, batchId] for inserting
     * and deleting into the DbDocumentMutations index.
     */
    DbDocumentMutation.key = function (userId, path, batchId) {
        return [userId, encode(path), batchId];
    };
    DbDocumentMutation.store = 'documentMutations';
    /**
     * Because we store all the useful information for this store in the key,
     * there is no useful information to store as the value. The raw (unencoded)
     * path cannot be stored because IndexedDb doesn't store prototype
     * information.
     */
    DbDocumentMutation.PLACEHOLDER = new DbDocumentMutation();
    return DbDocumentMutation;
}());

/**
 * Represents the known absence of a document at a particular version.
 * Stored in IndexedDb as part of a DbRemoteDocument object.
 */
var DbNoDocument = /** @class */ (function () {
    function DbNoDocument(path, readTime) {
        this.path = path;
        this.readTime = readTime;
    }
    return DbNoDocument;
}());

/**
 * An object to be stored in the 'remoteDocuments' store in IndexedDb. It
 * represents either a cached document (if it exists) or a cached "no-document"
 * (if it is known to not exist).
 *
 * Note: This is the persisted equivalent of a MaybeDocument and could perhaps
 * be made more general if necessary.
 */
var DbRemoteDocument = /** @class */ (function () {
    function DbRemoteDocument(
        /**
         * Set to an instance of a DbNoDocument if it is known that no document
         * exists.
         */
        noDocument, 
        /**
         * Set to an instance of a Document if there's a cached version of the
         * document.
         */
        document) {
        this.noDocument = noDocument;
        this.document = document;
    }
    DbRemoteDocument.store = 'remoteDocuments';
    return DbRemoteDocument;
}());

/**
 * An object to be stored in the 'targets' store in IndexedDb.
 *
 * This is based on and should be kept in sync with the proto used in the iOS
 * client.
 *
 * Each query the client listens to against the server is tracked on disk so
 * that the query can be efficiently resumed on restart.
 */
var DbTarget = /** @class */ (function () {
    function DbTarget(
        /**
         * An auto-generated sequential numeric identifier for the query.
         *
         * Queries are stored using their canonicalId as the key, but these
         * canonicalIds can be quite long so we additionally assign a unique
         * queryId which can be used by referenced data structures (e.g.
         * indexes) to minimize the on-disk cost.
         */
        targetId, 
        /**
         * The canonical string representing this query. This is not unique.
         */
        canonicalId, 
        /**
         * The last readTime received from the Watch Service for this query.
         *
         * This is the same value as TargetChange.read_time in the protos.
         */
        readTime, 
        /**
         * An opaque, server-assigned token that allows watching a query to be
         * resumed after disconnecting without retransmitting all the data
         * that matches the query. The resume token essentially identifies a
         * point in time from which the server should resume sending results.
         *
         * This is related to the snapshotVersion in that the resumeToken
         * effectively also encodes that value, but the resumeToken is opaque
         * and sometimes encodes additional information.
         *
         * A consequence of this is that the resumeToken should be used when
         * asking the server to reason about where this client is in the watch
         * stream, but the client should use the snapshotVersion for its own
         * purposes.
         *
         * This is the same value as TargetChange.resume_token in the protos.
         */
        resumeToken, 
        /**
         * A sequence number representing the last time this query was
         * listened to, used for garbage collection purposes.
         *
         * Conventionally this would be a timestamp value, but device-local
         * clocks are unreliable and they must be able to create new listens
         * even while disconnected. Instead this should be a monotonically
         * increasing number that's incremented on each listen call.
         *
         * This is different from the queryId since the queryId is an
         * immutable identifier assigned to the Query on first use while
         * lastListenSequenceNumber is updated every time the query is
         * listened to.
         */
        lastListenSequenceNumber, 
        /**
         * The query for this target.
         *
         * Because canonical ids are not unique we must store the actual query. We
         * use the proto to have an object we can persist without having to
         * duplicate translation logic to and from a `Query` object.
         */
        query) {
        this.targetId = targetId;
        this.canonicalId = canonicalId;
        this.readTime = readTime;
        this.resumeToken = resumeToken;
        this.lastListenSequenceNumber = lastListenSequenceNumber;
        this.query = query;
    }
    DbTarget.store = 'targets';
    /** Keys are automatically assigned via the targetId property. */
    DbTarget.keyPath = 'targetId';
    /** The name of the queryTargets index. */
    DbTarget.queryTargetsIndexName = 'queryTargetsIndex';
    /**
     * The index of all canonicalIds to the targets that they match. This is not
     * a unique mapping because canonicalId does not promise a unique name for all
     * possible queries, so we append the targetId to make the mapping unique.
     */
    DbTarget.queryTargetsKeyPath = ['canonicalId', 'targetId'];
    return DbTarget;
}());

/**
 * An object representing an association between a target and a document.
 * Stored in the targetDocument object store to store the documents tracked by a
 * particular target.
 */
var DbTargetDocument = /** @class */ (function () {
    function DbTargetDocument(
        /**
         * The targetId identifying a target.
         */
        targetId, 
        /**
         * The path to the document, as encoded in the key.
         */
        path) {
        this.targetId = targetId;
        this.path = path;
    }
    /** Name of the IndexedDb object store.  */
    DbTargetDocument.store = 'targetDocuments';
    /** Keys are automatically assigned via the targetId, path properties. */
    DbTargetDocument.keyPath = ['targetId', 'path'];
    /** The index name for the reverse index. */
    DbTargetDocument.documentTargetsIndex = 'documentTargetsIndex';
    /** We also need to create the reverse index for these properties. */
    DbTargetDocument.documentTargetsKeyPath = ['path', 'targetId'];
    return DbTargetDocument;
}());

/**
 * A record of global state tracked across all Targets, tracked separately
 * to avoid the need for extra indexes.
 *
 * This should be kept in-sync with the proto used in the iOS client.
 */
var DbTargetGlobal = /** @class */ (function () {
    function DbTargetGlobal(
        /**
         * The highest numbered target id across all targets.
         *
         * See DbTarget.targetId.
         */
        highestTargetId, 
        /**
         * The highest numbered lastListenSequenceNumber across all targets.
         *
         * See DbTarget.lastListenSequenceNumber.
         */
        highestListenSequenceNumber, 
        /**
         * A global snapshot version representing the last consistent snapshot we
         * received from the backend. This is monotonically increasing and any
         * snapshots received from the backend prior to this version (e.g. for
         * targets resumed with a resumeToken) should be suppressed (buffered)
         * until the backend has caught up to this snapshot version again. This
         * prevents our cache from ever going backwards in time.
         */
        lastRemoteSnapshotVersion) {
        this.highestTargetId = highestTargetId;
        this.highestListenSequenceNumber = highestListenSequenceNumber;
        this.lastRemoteSnapshotVersion = lastRemoteSnapshotVersion;
    }
    /**
     * The key string used for the single object that exists in the
     * DbTargetGlobal store.
     */
    DbTargetGlobal.key = 'targetGlobalKey';
    DbTargetGlobal.store = 'targetGlobal';
    return DbTargetGlobal;
}());

/**
 * The list of all IndexedDB stored used by the SDK. This is used when creating
 * transactions so that access across all stores is done atomically.
 */
var ALL_STORES = [
    DbMutationQueue.store,
    DbMutationBatch.store,
    indexeddb_schema_DbDocumentMutation.store,
    DbRemoteDocument.store,
    DbTarget.store,
    DbOwner.store,
    DbTargetGlobal.store,
    DbTargetDocument.store
];

//# sourceMappingURL=indexeddb_schema.js.map

// CONCATENATED MODULE: ../firestore/dist/esm/src/local/simple_db.js
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



var simple_db_LOG_TAG = 'SimpleDb';
/**
 * Provides a wrapper around IndexedDb with a simplified interface that uses
 * Promise-like return values to chain operations. Real promises cannot be used
 * since .then() continuations are executed asynchronously (e.g. via
 * .setImmediate), which would cause IndexedDB to end the transaction.
 * See PersistencePromise for more details.
 */
var simple_db_SimpleDb = /** @class */ (function () {
    function SimpleDb(db) {
        this.db = db;
    }
    /** Opens the specified database, creating or upgrading it if necessary. */
    SimpleDb.openOrCreate = function (name, version, runUpgrade) {
        assert(SimpleDb.isAvailable(), 'IndexedDB not supported in current environment.');
        debug(simple_db_LOG_TAG, 'Opening database:', name);
        return new persistence_promise_PersistencePromise(function (resolve, reject) {
            // TODO(mikelehen): Investigate browser compatibility.
            // https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB
            // suggests IE9 and older WebKit browsers handle upgrade
            // differently.
            var request = window.indexedDB.open(name, version);
            request.onsuccess = function (event) {
                var db = event.target.result;
                resolve(new SimpleDb(db));
            };
            request.onerror = function (event) {
                reject(event.target.error);
            };
            request.onupgradeneeded = function (event) {
                debug(simple_db_LOG_TAG, 'Database "' + name + '" requires upgrade from version:', event.oldVersion);
                // TODO(mikelehen): If/when we need to do an actual data
                // migration, we'll want to wrap db in a SimpleDb and have the
                // runUpgrade function return a PersistencePromise, since we'll
                // likely need to do async reads and writes. For now we're
                // cheating and just passing the raw IndexedDB in, since
                // createObjectStore(), etc. are synchronous.
                var db = event.target.result;
                runUpgrade(db, event.oldVersion);
            };
        }).toPromise();
    };
    /** Deletes the specified database. */
    SimpleDb.delete = function (name) {
        debug(simple_db_LOG_TAG, 'Removing database:', name);
        return wrapRequest(window.indexedDB.deleteDatabase(name)).toPromise();
    };
    /** Returns true if IndexedDB is available in the current environment. */
    SimpleDb.isAvailable = function () {
        if (typeof window === 'undefined' || window.indexedDB == null) {
            return false;
        }
        // We extensively use indexed array values and compound keys,
        // which IE and Edge do not support. However, they still have indexedDB
        // defined on the window, so we need to check for them here and make sure
        // to return that persistence is not enabled for those browsers.
        // For tracking support of this feature, see here:
        // https://developer.microsoft.com/en-us/microsoft-edge/platform/status/indexeddbarraysandmultientrysupport/
        // Check the UA string to find out the browser.
        var ua = window.navigator.userAgent;
        // IE 10
        // ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';
        // IE 11
        // ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';
        // Edge
        // ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML,
        // like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';
        if (ua.indexOf('MSIE ') > 0 ||
            ua.indexOf('Trident/') > 0 ||
            ua.indexOf('Edge/') > 0) {
            return false;
        }
        else {
            return true;
        }
    };
    SimpleDb.prototype.runTransaction = function (mode, objectStores, transactionFn) {
        var transaction = new simple_db_SimpleDbTransaction(this.db, mode, objectStores);
        var transactionFnResult = transactionFn(transaction)
            .catch(function (error) {
            // Abort the transaction if there was an
            // error.
            transaction.abort();
            return persistence_promise_PersistencePromise.reject(error);
        })
            .toPromise();
        // Wait for the transaction to complete (i.e. IndexedDb's onsuccess event to
        // fire), but still return the original transactionFnResult back to the
        // caller.
        return transaction.completionPromise.then(function () { return transactionFnResult; });
    };
    SimpleDb.prototype.close = function () {
        this.db.close();
    };
    return SimpleDb;
}());

/**
 * A controller for iterating over a key range or index. It allows an iterate
 * callback to delete the currently-referenced object, or jump to a new key
 * within the key range or index.
 */
var IterationController = /** @class */ (function () {
    function IterationController(dbCursor) {
        this.dbCursor = dbCursor;
        this.shouldStop = false;
        this.nextKey = null;
    }
    Object.defineProperty(IterationController.prototype, "isDone", {
        get: function () {
            return this.shouldStop;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IterationController.prototype, "skipToKey", {
        get: function () {
            return this.nextKey;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IterationController.prototype, "cursor", {
        set: function (value) {
            this.dbCursor = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * This function can be called to stop iteration at any point.
     */
    IterationController.prototype.done = function () {
        this.shouldStop = true;
    };
    /**
     * This function can be called to skip to that next key, which could be
     * an index or a primary key.
     */
    IterationController.prototype.skip = function (key) {
        this.nextKey = key;
    };
    /**
     * Delete the current cursor value from the object store.
     *
     * NOTE: You CANNOT do this with a keysOnly query.
     */
    IterationController.prototype.delete = function () {
        return wrapRequest(this.dbCursor.delete());
    };
    return IterationController;
}());

/**
 * Wraps an IDBTransaction and exposes a store() method to get a handle to a
 * specific object store.
 */
var simple_db_SimpleDbTransaction = /** @class */ (function () {
    function SimpleDbTransaction(db, mode, objectStoresNames) {
        var _this = this;
        this.aborted = false;
        this.transaction = db.transaction(objectStoresNames, mode);
        this.completionPromise = new Promise(function (resolve, reject) {
            // We consider aborting to be "normal" and just resolve the promise.
            // May need to revisit if/when we actually need to abort transactions.
            _this.transaction.onabort = _this.transaction.oncomplete = function (event) {
                resolve();
            };
            _this.transaction.onerror = function (event) {
                reject(event.target.error);
            };
        });
    }
    SimpleDbTransaction.prototype.abort = function () {
        if (!this.aborted) {
            debug(simple_db_LOG_TAG, 'Aborting transaction.');
            this.aborted = true;
            this.transaction.abort();
        }
    };
    /**
     * Returns a SimpleDbStore<KeyType, ValueType> for the specified store. All
     * operations performed on the SimpleDbStore happen within the context of this
     * transaction and it cannot be used anymore once the transaction is
     * completed.
     *
     * Note that we can't actually enforce that the KeyType and ValueType are
     * correct, but they allow type safety through the rest of the consuming code.
     */
    SimpleDbTransaction.prototype.store = function (storeName) {
        var store = this.transaction.objectStore(storeName);
        assert(!!store, 'Object store not part of transaction: ' + storeName);
        return new simple_db_SimpleDbStore(store);
    };
    return SimpleDbTransaction;
}());

/**
 * A wrapper around an IDBObjectStore providing an API that:
 *
 * 1) Has generic KeyType / ValueType parameters to provide strongly-typed
 * methods for acting against the object store.
 * 2) Deals with IndexedDB's onsuccess / onerror event callbacks, making every
 * method return a PersistencePromise instead.
 * 3) Provides a higher-level API to avoid needing to do excessive wrapping of
 * intermediate IndexedDB types (IDBCursorWithValue, etc.)
 */
var simple_db_SimpleDbStore = /** @class */ (function () {
    function SimpleDbStore(store) {
        this.store = store;
    }
    SimpleDbStore.prototype.put = function (keyOrValue, value) {
        var request;
        if (value !== undefined) {
            debug(simple_db_LOG_TAG, 'PUT', this.store.name, keyOrValue, value);
            request = this.store.put(value, keyOrValue);
        }
        else {
            debug(simple_db_LOG_TAG, 'PUT', this.store.name, '<auto-key>', keyOrValue);
            request = this.store.put(keyOrValue);
        }
        return wrapRequest(request);
    };
    /**
     * Gets the object with the specified key from the specified store, or null
     * if no object exists with the specified key.
     *
     * @key The key of the object to get.
     * @return The object with the specified key or null if no object exists.
     */
    SimpleDbStore.prototype.get = function (key) {
        var _this = this;
        var request = this.store.get(key);
        // tslint:disable-next-line:no-any We're doing an unsafe cast to ValueType.
        return wrapRequest(request).next(function (result) {
            // Normalize nonexistence to null.
            if (result === undefined) {
                result = null;
            }
            debug(simple_db_LOG_TAG, 'GET', _this.store.name, key, result);
            return result;
        });
    };
    SimpleDbStore.prototype.delete = function (key) {
        debug(simple_db_LOG_TAG, 'DELETE', this.store.name, key);
        var request = this.store.delete(key);
        return wrapRequest(request);
    };
    SimpleDbStore.prototype.loadAll = function (indexOrRange, range) {
        var cursor = this.cursor(this.options(indexOrRange, range));
        var results = [];
        return this.iterateCursor(cursor, function (key, value) {
            results.push(value);
        }).next(function () {
            return results;
        });
    };
    SimpleDbStore.prototype.deleteAll = function (indexOrRange, range) {
        debug(simple_db_LOG_TAG, 'DELETE ALL', this.store.name);
        var options = this.options(indexOrRange, range);
        options.keysOnly = false;
        var cursor = this.cursor(options);
        return this.iterateCursor(cursor, function (key, value, control) {
            // NOTE: Calling delete() on a cursor is documented as more efficient than
            // calling delete() on an object store with a single key
            // (https://developer.mozilla.org/en-US/docs/Web/API/IDBObjectStore/delete),
            // however, this requires us *not* to use a keysOnly cursor
            // (https://developer.mozilla.org/en-US/docs/Web/API/IDBCursor/delete). We
            // may want to compare the performance of each method.
            return control.delete();
        });
    };
    SimpleDbStore.prototype.iterate = function (optionsOrCallback, callback) {
        var options;
        if (!callback) {
            options = {};
            callback = optionsOrCallback;
        }
        else {
            options = optionsOrCallback;
        }
        var cursor = this.cursor(options);
        return this.iterateCursor(cursor, callback);
    };
    SimpleDbStore.prototype.iterateCursor = function (cursorRequest, fn) {
        var results = [];
        return new persistence_promise_PersistencePromise(function (resolve, reject) {
            cursorRequest.onerror = function (event) {
                reject(event.target.error);
            };
            cursorRequest.onsuccess = function (event) {
                var cursor = event.target.result;
                if (!cursor) {
                    resolve();
                    return;
                }
                var controller = new IterationController(cursor);
                var userResult = fn(cursor.primaryKey, cursor.value, controller);
                if (userResult instanceof persistence_promise_PersistencePromise) {
                    results.push(userResult);
                }
                if (controller.isDone) {
                    resolve();
                }
                else if (controller.skipToKey === null) {
                    cursor.continue();
                }
                else {
                    cursor.continue(controller.skipToKey);
                }
            };
        }).next(function () {
            return persistence_promise_PersistencePromise.waitFor(results);
        });
    };
    SimpleDbStore.prototype.options = function (indexOrRange, range) {
        var indexName = undefined;
        if (indexOrRange !== undefined) {
            if (typeof indexOrRange === 'string') {
                indexName = indexOrRange;
            }
            else {
                assert(range === undefined, '3rd argument must not be defined if 2nd is a range.');
                range = indexOrRange;
            }
        }
        return { index: indexName, range: range };
    };
    SimpleDbStore.prototype.cursor = function (options) {
        var direction = 'next';
        if (options.reverse) {
            direction = 'prev';
        }
        if (options.index) {
            var index = this.store.index(options.index);
            if (options.keysOnly) {
                return index.openKeyCursor(options.range, direction);
            }
            else {
                return index.openCursor(options.range, direction);
            }
        }
        else {
            return this.store.openCursor(options.range, direction);
        }
    };
    return SimpleDbStore;
}());

/**
 * Wraps an IDBRequest in a PersistencePromise, using the onsuccess / onerror
 * handlers to resolve / reject the PersistencePromise as appropriate.
 */
function wrapRequest(request) {
    return new persistence_promise_PersistencePromise(function (resolve, reject) {
        request.onsuccess = function (event) {
            var result = event.target.result;
            resolve(result);
        };
        request.onerror = function (event) {
            reject(event.target.error);
        };
    });
}

//# sourceMappingURL=simple_db.js.map

// CONCATENATED MODULE: ../firestore/dist/esm/src/local/indexeddb_mutation_queue.js
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








/** A mutation queue for a specific user, backed by IndexedDB. */
var indexeddb_mutation_queue_IndexedDbMutationQueue = /** @class */ (function () {
    function IndexedDbMutationQueue(
        /**
         * The normalized userId (e.g. null UID => "" userId) used to store /
         * retrieve mutations.
         */
        userId, serializer) {
        this.userId = userId;
        this.serializer = serializer;
        this.garbageCollector = null;
    }
    /**
     * Creates a new mutation queue for the given user.
     * @param user The user for which to create a mutation queue.
     * @param serializer The serializer to use when persisting to IndexedDb.
     */
    IndexedDbMutationQueue.forUser = function (user, serializer) {
        // TODO(mcg): Figure out what constraints there are on userIDs
        // In particular, are there any reserved characters? are empty ids allowed?
        // For the moment store these together in the same mutations table assuming
        // that empty userIDs aren't allowed.
        assert(user.uid !== '', 'UserID must not be an empty string.');
        var userId = user.isUnauthenticated() ? '' : user.uid;
        return new IndexedDbMutationQueue(userId, serializer);
    };
    IndexedDbMutationQueue.prototype.start = function (transaction) {
        var _this = this;
        return IndexedDbMutationQueue.loadNextBatchIdFromDb(transaction)
            .next(function (nextBatchId) {
            _this.nextBatchId = nextBatchId;
            return mutationQueuesStore(transaction).get(_this.userId);
        })
            .next(function (metadata) {
            if (!metadata) {
                metadata = new DbMutationQueue(_this.userId, BATCHID_UNKNOWN, 
                /*lastStreamToken=*/ '');
            }
            _this.metadata = metadata;
            // On restart, nextBatchId may end up lower than
            // lastAcknowledgedBatchId since it's computed from the queue
            // contents, and there may be no mutations in the queue. In this
            // case, we need to reset lastAcknowledgedBatchId (which is safe
            // since the queue must be empty).
            if (_this.metadata.lastAcknowledgedBatchId >= _this.nextBatchId) {
                return _this.checkEmpty(transaction).next(function (empty) {
                    assert(empty, 'Reset nextBatchID is only possible when the queue is empty');
                    _this.metadata.lastAcknowledgedBatchId = BATCHID_UNKNOWN;
                    return mutationQueuesStore(transaction).put(_this.metadata);
                });
            }
            else {
                return persistence_promise_PersistencePromise.resolve();
            }
        });
    };
    /**
     * Returns one larger than the largest batch ID that has been stored. If there
     * are no mutations returns 0. Note that batch IDs are global.
     */
    IndexedDbMutationQueue.loadNextBatchIdFromDb = function (txn) {
        var maxBatchId = BATCHID_UNKNOWN;
        return mutationsStore(txn)
            .iterate({ reverse: true }, function (key, batch, control) {
            var userId = key[0], batchId = key[1];
            if (batchId > maxBatchId) {
                maxBatchId = batch.batchId;
            }
            if (userId === '') {
                // We can't compute a predecessor for the empty string, since it
                // is lexographically first. That also means that no other
                // userIds can come before this one, so we can just exit early.
                control.done();
            }
            else {
                var nextUser = immediatePredecessor(userId);
                control.skip([nextUser]);
            }
        })
            .next(function () { return maxBatchId + 1; });
    };
    IndexedDbMutationQueue.prototype.checkEmpty = function (transaction) {
        var empty = true;
        var range = IDBKeyRange.bound(this.keyForBatchId(Number.NEGATIVE_INFINITY), this.keyForBatchId(Number.POSITIVE_INFINITY));
        return mutationsStore(transaction)
            .iterate({ range: range }, function (key, value, control) {
            empty = false;
            control.done();
        })
            .next(function () { return empty; });
    };
    IndexedDbMutationQueue.prototype.getNextBatchId = function (transaction) {
        return persistence_promise_PersistencePromise.resolve(this.nextBatchId);
    };
    IndexedDbMutationQueue.prototype.getHighestAcknowledgedBatchId = function (transaction) {
        return persistence_promise_PersistencePromise.resolve(this.metadata.lastAcknowledgedBatchId);
    };
    IndexedDbMutationQueue.prototype.acknowledgeBatch = function (transaction, batch, streamToken) {
        var batchId = batch.batchId;
        assert(batchId > this.metadata.lastAcknowledgedBatchId, 'Mutation batchIDs must be acknowledged in order');
        this.metadata.lastAcknowledgedBatchId = batchId;
        this.metadata.lastStreamToken = validateStreamToken(streamToken);
        return mutationQueuesStore(transaction).put(this.metadata);
    };
    IndexedDbMutationQueue.prototype.getLastStreamToken = function (transaction) {
        return persistence_promise_PersistencePromise.resolve(this.metadata.lastStreamToken);
    };
    IndexedDbMutationQueue.prototype.setLastStreamToken = function (transaction, streamToken) {
        this.metadata.lastStreamToken = validateStreamToken(streamToken);
        return mutationQueuesStore(transaction).put(this.metadata);
    };
    IndexedDbMutationQueue.prototype.addMutationBatch = function (transaction, localWriteTime, mutations) {
        var _this = this;
        var batchId = this.nextBatchId;
        this.nextBatchId++;
        var batch = new mutation_batch_MutationBatch(batchId, localWriteTime, mutations);
        var dbBatch = this.serializer.toDbMutationBatch(this.userId, batch);
        return mutationsStore(transaction)
            .put(dbBatch)
            .next(function () {
            var promises = [];
            for (var _i = 0, mutations_1 = mutations; _i < mutations_1.length; _i++) {
                var mutation = mutations_1[_i];
                var encodedPath = encode(mutation.key.path);
                var indexKey = indexeddb_schema_DbDocumentMutation.key(_this.userId, mutation.key.path, batchId);
                documentMutationsStore(transaction).put(indexKey, indexeddb_schema_DbDocumentMutation.PLACEHOLDER);
            }
            return persistence_promise_PersistencePromise.waitFor(promises);
        })
            .next(function () {
            return batch;
        });
    };
    IndexedDbMutationQueue.prototype.lookupMutationBatch = function (transaction, batchId) {
        var _this = this;
        return mutationsStore(transaction)
            .get(this.keyForBatchId(batchId))
            .next(function (dbBatch) {
            return dbBatch ? _this.serializer.fromDbMutationBatch(dbBatch) : null;
        });
    };
    IndexedDbMutationQueue.prototype.getNextMutationBatchAfterBatchId = function (transaction, batchId) {
        var _this = this;
        var range = IDBKeyRange.lowerBound(this.keyForBatchId(batchId + 1));
        var foundBatch = null;
        return mutationsStore(transaction)
            .iterate({ range: range }, function (key, dbBatch, control) {
            if (dbBatch.userId === _this.userId) {
                assert(dbBatch.batchId > batchId, 'Should have found mutation after ' + batchId);
                foundBatch = _this.serializer.fromDbMutationBatch(dbBatch);
            }
            control.done();
        })
            .next(function () { return foundBatch; });
    };
    IndexedDbMutationQueue.prototype.getAllMutationBatches = function (transaction) {
        var _this = this;
        var range = IDBKeyRange.bound(this.keyForBatchId(BATCHID_UNKNOWN), this.keyForBatchId(Number.POSITIVE_INFINITY));
        return mutationsStore(transaction)
            .loadAll(range)
            .next(function (dbBatches) {
            return dbBatches.map(function (dbBatch) { return _this.serializer.fromDbMutationBatch(dbBatch); });
        });
    };
    IndexedDbMutationQueue.prototype.getAllMutationBatchesThroughBatchId = function (transaction, batchId) {
        var _this = this;
        var range = IDBKeyRange.bound(this.keyForBatchId(BATCHID_UNKNOWN), this.keyForBatchId(batchId));
        return mutationsStore(transaction)
            .loadAll(range)
            .next(function (dbBatches) {
            return dbBatches.map(function (dbBatch) { return _this.serializer.fromDbMutationBatch(dbBatch); });
        });
    };
    IndexedDbMutationQueue.prototype.getAllMutationBatchesAffectingDocumentKey = function (transaction, documentKey) {
        var _this = this;
        // Scan the document-mutation index starting with a prefix starting with
        // the given documentKey.
        var indexPrefix = indexeddb_schema_DbDocumentMutation.prefixForPath(this.userId, documentKey.path);
        var indexStart = IDBKeyRange.lowerBound(indexPrefix);
        var results = [];
        return documentMutationsStore(transaction)
            .iterate({ range: indexStart }, function (indexKey, _, control) {
            var userID = indexKey[0], encodedPath = indexKey[1], batchID = indexKey[2];
            // Only consider rows matching exactly the specific key of
            // interest. Note that because we order by path first, and we
            // order terminators before path separators, we'll encounter all
            // the index rows for documentKey contiguously. In particular, all
            // the rows for documentKey will occur before any rows for
            // documents nested in a subcollection beneath documentKey so we
            // can stop as soon as we hit any such row.
            var path = decode(encodedPath);
            if (userID !== _this.userId || !documentKey.path.equals(path)) {
                control.done();
                return;
            }
            var mutationKey = _this.keyForBatchId(batchID);
            // Look up the mutation batch in the store.
            // PORTING NOTE: because iteration is callback driven in the web,
            // we just look up the key instead of keeping an open iterator
            // like iOS.
            return mutationsStore(transaction)
                .get(mutationKey)
                .next(function (dbBatch) {
                if (dbBatch === null) {
                    fail('Dangling document-mutation reference found: ' +
                        indexKey +
                        ' which points to ' +
                        mutationKey);
                }
                results.push(_this.serializer.fromDbMutationBatch(dbBatch));
            });
        })
            .next(function () { return results; });
    };
    IndexedDbMutationQueue.prototype.getAllMutationBatchesAffectingQuery = function (transaction, query) {
        var _this = this;
        assert(!query.isDocumentQuery(), "Document queries shouldn't go down this path");
        var queryPath = query.path;
        var immediateChildrenLength = queryPath.length + 1;
        // TODO(mcg): Actually implement a single-collection query
        //
        // This is actually executing an ancestor query, traversing the whole
        // subtree below the collection which can be horrifically inefficient for
        // some structures. The right way to solve this is to implement the full
        // value index, but that's not in the cards in the near future so this is
        // the best we can do for the moment.
        //
        // Since we don't yet index the actual properties in the mutations, our
        // current approach is to just return all mutation batches that affect
        // documents in the collection being queried.
        var indexPrefix = indexeddb_schema_DbDocumentMutation.prefixForPath(this.userId, queryPath);
        var encodedQueryPath = indexPrefix[1];
        var indexStart = IDBKeyRange.lowerBound(indexPrefix);
        // Collect up unique batchIDs encountered during a scan of the index. Use a
        // SortedSet to accumulate batch IDs so they can be traversed in order in a
        // scan of the main table.
        var uniqueBatchIDs = new sorted_set_SortedSet(primitiveComparator);
        return documentMutationsStore(transaction)
            .iterate({ range: indexStart }, function (indexKey, _, control) {
            var userID = indexKey[0], encodedPath = indexKey[1], batchID = indexKey[2];
            var path = decode(encodedPath);
            if (userID !== _this.userId || !queryPath.isPrefixOf(path)) {
                control.done();
                return;
            }
            // Rows with document keys more than one segment longer than the
            // query path can't be matches. For example, a query on 'rooms'
            // can't match the document /rooms/abc/messages/xyx.
            // TODO(mcg): we'll need a different scanner when we implement
            // ancestor queries.
            if (path.length !== immediateChildrenLength) {
                return;
            }
            uniqueBatchIDs = uniqueBatchIDs.add(batchID);
        })
            .next(function () {
            var results = [];
            var promises = [];
            // TODO(rockwood): Implement this using iterate.
            uniqueBatchIDs.forEach(function (batchID) {
                var mutationKey = _this.keyForBatchId(batchID);
                promises.push(mutationsStore(transaction)
                    .get(mutationKey)
                    .next(function (mutation) {
                    if (mutation === null) {
                        fail('Dangling document-mutation reference found, ' +
                            'which points to ' +
                            mutationKey);
                    }
                    results.push(_this.serializer.fromDbMutationBatch(mutation));
                }));
            });
            return persistence_promise_PersistencePromise.waitFor(promises).next(function () { return results; });
        });
    };
    IndexedDbMutationQueue.prototype.removeMutationBatches = function (transaction, batches) {
        var txn = mutationsStore(transaction);
        var indexTxn = documentMutationsStore(transaction);
        var promises = [];
        var _loop_1 = function (batch) {
            var range = IDBKeyRange.only(this_1.keyForBatchId(batch.batchId));
            var numDeleted = 0;
            var removePromise = txn.iterate({ range: range }, function (key, value, control) {
                numDeleted++;
                return control.delete();
            });
            promises.push(removePromise.next(function () {
                assert(numDeleted === 1, 'Dangling document-mutation reference found: Missing batch ' +
                    batch.batchId);
            }));
            for (var _i = 0, _a = batch.mutations; _i < _a.length; _i++) {
                var mutation = _a[_i];
                var indexKey = indexeddb_schema_DbDocumentMutation.key(this_1.userId, mutation.key.path, batch.batchId);
                promises.push(indexTxn.delete(indexKey));
                if (this_1.garbageCollector !== null) {
                    this_1.garbageCollector.addPotentialGarbageKey(mutation.key);
                }
            }
        };
        var this_1 = this;
        for (var _i = 0, batches_1 = batches; _i < batches_1.length; _i++) {
            var batch = batches_1[_i];
            _loop_1(batch);
        }
        return persistence_promise_PersistencePromise.waitFor(promises);
    };
    IndexedDbMutationQueue.prototype.performConsistencyCheck = function (txn) {
        var _this = this;
        return this.checkEmpty(txn).next(function (empty) {
            if (!empty) {
                return persistence_promise_PersistencePromise.resolve();
            }
            // Verify that there are no entries in the documentMutations index if
            // the queue is empty.
            var startRange = IDBKeyRange.lowerBound(indexeddb_schema_DbDocumentMutation.prefixForUser(_this.userId));
            var danglingMutationReferences = [];
            return documentMutationsStore(txn)
                .iterate({ range: startRange }, function (key, _, control) {
                var userID = key[0];
                if (userID !== _this.userId) {
                    control.done();
                    return;
                }
                else {
                    var path = decode(key[1]);
                    danglingMutationReferences.push(path);
                }
            })
                .next(function () {
                assert(danglingMutationReferences.length === 0, 'Document leak -- detected dangling mutation references when queue is empty. Dangling keys: ' +
                    danglingMutationReferences.map(function (p) { return p.canonicalString(); }));
            });
        });
    };
    IndexedDbMutationQueue.prototype.setGarbageCollector = function (gc) {
        this.garbageCollector = gc;
    };
    IndexedDbMutationQueue.prototype.containsKey = function (txn, key) {
        var _this = this;
        var indexKey = indexeddb_schema_DbDocumentMutation.prefixForPath(this.userId, key.path);
        var encodedPath = indexKey[1];
        var startRange = IDBKeyRange.lowerBound(indexKey);
        var containsKey = false;
        return documentMutationsStore(txn)
            .iterate({ range: startRange, keysOnly: true }, function (key, _, control) {
            var userID = key[0], keyPath = key[1], batchID = key[2];
            if (userID === _this.userId && keyPath === encodedPath) {
                containsKey = true;
            }
            control.done();
        })
            .next(function () { return containsKey; });
    };
    /**
     * Creates a [userId, batchId] key for use with the DbMutationQueue object
     * store.
     */
    IndexedDbMutationQueue.prototype.keyForBatchId = function (batchId) {
        return [this.userId, batchId];
    };
    return IndexedDbMutationQueue;
}());

function validateStreamToken(token) {
    assert(typeof token === 'string', 'Persisting non-string stream token not supported.');
    return token;
}
/**
 * Helper to get a typed SimpleDbStore for the mutations object store.
 */
function mutationsStore(txn) {
    return getStore(txn, DbMutationBatch.store);
}
/**
 * Helper to get a typed SimpleDbStore for the mutationQueues object store.
 */
function documentMutationsStore(txn) {
    return getStore(txn, indexeddb_schema_DbDocumentMutation.store);
}
/**
 * Helper to get a typed SimpleDbStore for the mutationQueues object store.
 */
function mutationQueuesStore(txn) {
    return getStore(txn, DbMutationQueue.store);
}
/**
 * Helper to get a typed SimpleDbStore from a transaction.
 */
function getStore(txn, store) {
    if (txn instanceof simple_db_SimpleDbTransaction) {
        return txn.store(store);
    }
    else {
        return fail('Invalid transaction object provided!');
    }
}

//# sourceMappingURL=indexeddb_mutation_queue.js.map

// CONCATENATED MODULE: ../firestore/dist/esm/src/local/indexeddb_query_cache.js
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










var indexeddb_query_cache_IndexedDbQueryCache = /** @class */ (function () {
    function IndexedDbQueryCache(serializer) {
        this.serializer = serializer;
        /**
         * The last received snapshot version. We store this seperately from the
         * metadata to avoid the extra conversion to/from DbTimestamp.
         */
        this.lastRemoteSnapshotVersion = snapshot_version_SnapshotVersion.MIN;
        /**
         * A cached copy of the metadata for the query cache.
         */
        this.metadata = new DbTargetGlobal(
        /*highestTargetId=*/ 0, 
        /*lastListenSequenceNumber=*/ 0, snapshot_version_SnapshotVersion.MIN.toTimestamp());
        /** The garbage collector to notify about potential garbage keys. */
        this.garbageCollector = null;
    }
    IndexedDbQueryCache.prototype.start = function (transaction) {
        var _this = this;
        return globalTargetStore(transaction)
            .get(DbTargetGlobal.key)
            .next(function (metadata) {
            if (metadata !== null) {
                _this.metadata = metadata;
                var lastSavedVersion = metadata.lastRemoteSnapshotVersion;
                _this.lastRemoteSnapshotVersion = snapshot_version_SnapshotVersion.fromTimestamp(new timestamp_Timestamp(lastSavedVersion.seconds, lastSavedVersion.nanos));
            }
            return persistence_promise_PersistencePromise.resolve();
        });
    };
    IndexedDbQueryCache.prototype.getHighestTargetId = function () {
        return this.metadata.highestTargetId;
    };
    IndexedDbQueryCache.prototype.getLastRemoteSnapshotVersion = function () {
        return this.lastRemoteSnapshotVersion;
    };
    IndexedDbQueryCache.prototype.setLastRemoteSnapshotVersion = function (transaction, snapshotVersion) {
        this.lastRemoteSnapshotVersion = snapshotVersion;
        this.metadata.lastRemoteSnapshotVersion = snapshotVersion.toTimestamp();
        return globalTargetStore(transaction).put(DbTargetGlobal.key, this.metadata);
    };
    IndexedDbQueryCache.prototype.addQueryData = function (transaction, queryData) {
        var _this = this;
        var targetId = queryData.targetId;
        var addedQueryPromise = targetsStore(transaction).put(this.serializer.toDbTarget(queryData));
        if (targetId > this.metadata.highestTargetId) {
            this.metadata.highestTargetId = targetId;
            return addedQueryPromise.next(function () {
                return globalTargetStore(transaction).put(DbTargetGlobal.key, _this.metadata);
            });
        }
        else {
            return addedQueryPromise;
        }
    };
    IndexedDbQueryCache.prototype.removeQueryData = function (transaction, queryData) {
        return this.removeMatchingKeysForTargetId(transaction, queryData.targetId).next(function () {
            targetsStore(transaction).delete(queryData.targetId);
        });
    };
    IndexedDbQueryCache.prototype.getQueryData = function (transaction, query) {
        var _this = this;
        // Iterating by the canonicalId may yield more than one result because
        // canonicalId values are not required to be unique per target. This query
        // depends on the queryTargets index to be efficent.
        var canonicalId = query.canonicalId();
        var range = IDBKeyRange.bound([canonicalId, Number.NEGATIVE_INFINITY], [canonicalId, Number.POSITIVE_INFINITY]);
        var result = null;
        return targetsStore(transaction)
            .iterate({ range: range, index: DbTarget.queryTargetsIndexName }, function (key, value, control) {
            var found = _this.serializer.fromDbTarget(value);
            // After finding a potential match, check that the query is
            // actually equal to the requested query.
            if (query.equals(found.query)) {
                result = found;
                control.done();
            }
        })
            .next(function () { return result; });
    };
    IndexedDbQueryCache.prototype.addMatchingKeys = function (txn, keys, targetId) {
        // PORTING NOTE: The reverse index (documentsTargets) is maintained by
        // Indexeddb.
        var promises = [];
        var store = documentTargetStore(txn);
        keys.forEach(function (key) {
            var path = encode(key.path);
            promises.push(store.put(new DbTargetDocument(targetId, path)));
        });
        return persistence_promise_PersistencePromise.waitFor(promises);
    };
    IndexedDbQueryCache.prototype.removeMatchingKeys = function (txn, keys, targetId) {
        var _this = this;
        // PORTING NOTE: The reverse index (documentsTargets) is maintained by
        // IndexedDb.
        var promises = [];
        var store = documentTargetStore(txn);
        keys.forEach(function (key) {
            var path = encode(key.path);
            promises.push(store.delete([targetId, path]));
            if (_this.garbageCollector !== null) {
                _this.garbageCollector.addPotentialGarbageKey(key);
            }
        });
        return persistence_promise_PersistencePromise.waitFor(promises);
    };
    IndexedDbQueryCache.prototype.removeMatchingKeysForTargetId = function (txn, targetId) {
        var store = documentTargetStore(txn);
        var range = IDBKeyRange.bound([targetId], [targetId + 1], 
        /*lowerOpen=*/ false, 
        /*upperOpen=*/ true);
        return this.notifyGCForRemovedKeys(txn, range).next(function () {
            return store.delete(range);
        });
    };
    IndexedDbQueryCache.prototype.notifyGCForRemovedKeys = function (txn, range) {
        var _this = this;
        var store = documentTargetStore(txn);
        if (this.garbageCollector !== null && this.garbageCollector.isEager) {
            // In order to generate garbage events properly, we need to read these
            // keys before deleting.
            return store.iterate({ range: range, keysOnly: true }, function (key, _, control) {
                var path = decode(key[1]);
                var docKey = new document_key_DocumentKey(path);
                // Paranoid assertion in case the the collector is set to null
                // during the iteration.
                assert(_this.garbageCollector !== null, 'GarbageCollector for query cache set to null during key removal.');
                _this.garbageCollector.addPotentialGarbageKey(docKey);
            });
        }
        else {
            return persistence_promise_PersistencePromise.resolve();
        }
    };
    IndexedDbQueryCache.prototype.getMatchingKeysForTargetId = function (txn, targetId) {
        var promises = [];
        var range = IDBKeyRange.bound([targetId], [targetId + 1], 
        /*lowerOpen=*/ false, 
        /*upperOpen=*/ true);
        var store = documentTargetStore(txn);
        var result = documentKeySet();
        return store
            .iterate({ range: range, keysOnly: true }, function (key, _, control) {
            var path = decode(key[1]);
            var docKey = new document_key_DocumentKey(path);
            result = result.add(docKey);
        })
            .next(function () { return result; });
    };
    IndexedDbQueryCache.prototype.setGarbageCollector = function (gc) {
        this.garbageCollector = gc;
    };
    IndexedDbQueryCache.prototype.containsKey = function (txn, key) {
        assert(txn !== null, 'Persistence Transaction cannot be null for query cache containsKey');
        var path = encode(key.path);
        var range = IDBKeyRange.bound([path], [immediateSuccessor(path)], 
        /*lowerOpen=*/ false, 
        /*upperOpen=*/ true);
        var count = 0;
        return documentTargetStore(txn)
            .iterate({
            index: DbTargetDocument.documentTargetsIndex,
            keysOnly: true,
            range: range
        }, function (key, _, control) {
            count++;
            control.done();
        })
            .next(function () { return count > 0; });
    };
    return IndexedDbQueryCache;
}());

/**
 * Helper to get a typed SimpleDbStore for the queries object store.
 */
function targetsStore(txn) {
    return indexeddb_query_cache_getStore(txn, DbTarget.store);
}
/**
 * Helper to get a typed SimpleDbStore for the target globals object store.
 */
function globalTargetStore(txn) {
    return indexeddb_query_cache_getStore(txn, DbTargetGlobal.store);
}
/**
 * Helper to get a typed SimpleDbStore for the document target object store.
 */
function documentTargetStore(txn) {
    return indexeddb_query_cache_getStore(txn, DbTargetDocument.store);
}
/**
 * Helper to get a typed SimpleDbStore from a transaction.
 */
function indexeddb_query_cache_getStore(txn, store) {
    if (txn instanceof simple_db_SimpleDbTransaction) {
        return txn.store(store);
    }
    else {
        return fail('Invalid transaction object provided!');
    }
}

//# sourceMappingURL=indexeddb_query_cache.js.map

// CONCATENATED MODULE: ../firestore/dist/esm/src/local/indexeddb_remote_document_cache.js
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





var indexeddb_remote_document_cache_IndexedDbRemoteDocumentCache = /** @class */ (function () {
    function IndexedDbRemoteDocumentCache(serializer) {
        this.serializer = serializer;
    }
    IndexedDbRemoteDocumentCache.prototype.addEntry = function (transaction, maybeDocument) {
        return remoteDocumentsStore(transaction).put(dbKey(maybeDocument.key), this.serializer.toDbRemoteDocument(maybeDocument));
    };
    IndexedDbRemoteDocumentCache.prototype.removeEntry = function (transaction, documentKey) {
        return remoteDocumentsStore(transaction).delete(dbKey(documentKey));
    };
    IndexedDbRemoteDocumentCache.prototype.getEntry = function (transaction, documentKey) {
        var _this = this;
        return remoteDocumentsStore(transaction)
            .get(dbKey(documentKey))
            .next(function (dbRemoteDoc) {
            return dbRemoteDoc
                ? _this.serializer.fromDbRemoteDocument(dbRemoteDoc)
                : null;
        });
    };
    IndexedDbRemoteDocumentCache.prototype.getDocumentsMatchingQuery = function (transaction, query) {
        var _this = this;
        var results = documentMap();
        // Documents are ordered by key, so we can use a prefix scan to narrow down
        // the documents we need to match the query against.
        var startKey = query.path.toArray();
        var range = IDBKeyRange.lowerBound(startKey);
        return remoteDocumentsStore(transaction)
            .iterate({ range: range }, function (key, dbRemoteDoc, control) {
            var maybeDoc = _this.serializer.fromDbRemoteDocument(dbRemoteDoc);
            if (!query.path.isPrefixOf(maybeDoc.key.path)) {
                control.done();
            }
            else if (maybeDoc instanceof document_Document && query.matches(maybeDoc)) {
                results = results.insert(maybeDoc.key, maybeDoc);
            }
        })
            .next(function () { return results; });
    };
    return IndexedDbRemoteDocumentCache;
}());

/**
 * Helper to get a typed SimpleDbStore for the remoteDocuments object store.
 */
function remoteDocumentsStore(txn) {
    if (txn instanceof simple_db_SimpleDbTransaction) {
        return txn.store(DbRemoteDocument.store);
    }
    else {
        return fail('Invalid transaction object provided!');
    }
}
function dbKey(docKey) {
    return docKey.path.toArray();
}

//# sourceMappingURL=indexeddb_remote_document_cache.js.map

// CONCATENATED MODULE: ../firestore/dist/esm/src/local/local_serializer.js
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








/** Serializer for values stored in the LocalStore. */
var local_serializer_LocalSerializer = /** @class */ (function () {
    function LocalSerializer(remoteSerializer) {
        this.remoteSerializer = remoteSerializer;
    }
    /** Decodes a remote document from storage locally to a Document. */
    LocalSerializer.prototype.fromDbRemoteDocument = function (remoteDoc) {
        if (remoteDoc.document) {
            return this.remoteSerializer.fromDocument(remoteDoc.document);
        }
        else if (remoteDoc.noDocument) {
            var key = document_key_DocumentKey.fromSegments(remoteDoc.noDocument.path);
            var readTime = remoteDoc.noDocument.readTime;
            var timestamp = new timestamp_Timestamp(readTime.seconds, readTime.nanos);
            return new document_NoDocument(key, snapshot_version_SnapshotVersion.fromTimestamp(timestamp));
        }
        else {
            return fail('Unexpected DbRemoteDocument');
        }
    };
    /** Encodes a document for storage locally. */
    LocalSerializer.prototype.toDbRemoteDocument = function (maybeDoc) {
        if (maybeDoc instanceof document_Document) {
            var doc = this.remoteSerializer.toDocument(maybeDoc);
            return new DbRemoteDocument(null, doc);
        }
        else {
            var path = maybeDoc.key.path.toArray();
            var timestamp = maybeDoc.version.toTimestamp();
            var readTime = new DbTimestamp(timestamp.seconds, timestamp.nanos);
            return new DbRemoteDocument(new DbNoDocument(path, readTime), null);
        }
    };
    /** Encodes a batch of mutations into a DbMutationBatch for local storage. */
    LocalSerializer.prototype.toDbMutationBatch = function (userId, batch) {
        var _this = this;
        var serializedMutations = batch.mutations.map(function (m) {
            return _this.remoteSerializer.toMutation(m);
        });
        return new DbMutationBatch(userId, batch.batchId, batch.localWriteTime.toEpochMilliseconds(), serializedMutations);
    };
    /** Decodes a DbMutationBatch into a MutationBatch */
    LocalSerializer.prototype.fromDbMutationBatch = function (dbBatch) {
        var _this = this;
        var mutations = dbBatch.mutations.map(function (m) {
            return _this.remoteSerializer.fromMutation(m);
        });
        var timestamp = timestamp_Timestamp.fromEpochMilliseconds(dbBatch.localWriteTimeMs);
        return new mutation_batch_MutationBatch(dbBatch.batchId, timestamp, mutations);
    };
    /** Decodes a DbTarget into QueryData */
    LocalSerializer.prototype.fromDbTarget = function (dbTarget) {
        var readTime = new timestamp_Timestamp(dbTarget.readTime.seconds, dbTarget.readTime.nanos);
        var version = snapshot_version_SnapshotVersion.fromTimestamp(readTime);
        var query;
        if (isDocumentQuery(dbTarget.query)) {
            query = this.remoteSerializer.fromDocumentsTarget(dbTarget.query);
        }
        else {
            query = this.remoteSerializer.fromQueryTarget(dbTarget.query);
        }
        return new query_data_QueryData(query, dbTarget.targetId, QueryPurpose.Listen, version, dbTarget.resumeToken);
    };
    /** Encodes QueryData into a DbTarget for storage locally. */
    LocalSerializer.prototype.toDbTarget = function (queryData) {
        assert(QueryPurpose.Listen === queryData.purpose, 'Only queries with purpose ' +
            QueryPurpose.Listen +
            ' may be stored, got ' +
            queryData.purpose);
        var timestamp = queryData.snapshotVersion.toTimestamp();
        var dbTimestamp = new DbTimestamp(timestamp.seconds, timestamp.nanos);
        var queryProto;
        if (queryData.query.isDocumentQuery()) {
            queryProto = this.remoteSerializer.toDocumentsTarget(queryData.query);
        }
        else {
            queryProto = this.remoteSerializer.toQueryTarget(queryData.query);
        }
        assert(typeof queryData.resumeToken === 'string', 'Persisting non-string resume token not supported.');
        var resumeToken = queryData.resumeToken;
        // lastListenSequenceNumber is always 0 until we do real GC.
        return new DbTarget(queryData.targetId, queryData.query.canonicalId(), dbTimestamp, resumeToken, 0, queryProto);
    };
    return LocalSerializer;
}());

/**
 * A helper function for figuring out what kind of query has been stored.
 */
function isDocumentQuery(dbQuery) {
    return dbQuery.documents !== undefined;
}

//# sourceMappingURL=local_serializer.js.map

// CONCATENATED MODULE: ../firestore/dist/esm/src/local/indexeddb_persistence.js
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












var indexeddb_persistence_LOG_TAG = 'IndexedDbPersistence';
/** If the owner lease is older than 5 seconds, try to take ownership. */
var OWNER_LEASE_MAX_AGE_MS = 5000;
/** Refresh the owner lease every 4 seconds while owner. */
var OWNER_LEASE_REFRESH_INTERVAL_MS = 4000;
/** LocalStorage location to indicate a zombied ownerId (see class comment). */
var ZOMBIE_OWNER_LOCALSTORAGE_SUFFIX = 'zombiedOwnerId';
/** Error when the owner lease cannot be acquired or is lost. */
var EXISTING_OWNER_ERROR_MSG = 'There is another tab open with offline' +
    ' persistence enabled. Only one such tab is allowed at a time. The' +
    ' other tab must be closed or persistence must be disabled.';
var UNSUPPORTED_PLATFORM_ERROR_MSG = 'This platform is either missing' +
    ' IndexedDB or is known to have an incomplete implementation. Offline' +
    ' persistence has been disabled.';
/**
 * An IndexedDB-backed instance of Persistence. Data is stored persistently
 * across sessions.
 *
 * Currently the Firestore SDK only supports a single consumer of the database,
 * but browsers obviously support multiple tabs. IndexedDbPersistence ensures a
 * single consumer of the database via an "owner lease" stored in the database.
 *
 * On startup, IndexedDbPersistence assigns itself a random "ownerId" and writes
 * it to a special "owner" object in the database (if no entry exists already or
 * the current entry is expired). This owner lease is then verified inside every
 * transaction to ensure the lease has not been lost.
 *
 * If a tab opts not to acquire the owner lease (because there's an existing
 * non-expired owner) or loses the owner lease, IndexedDbPersistence enters a
 * failed state and all subsequent operations will automatically fail.
 *
 * The current owner regularly refreshes the owner lease with new timestamps to
 * prevent newly-opened tabs from taking over ownership.
 *
 * Additionally there is an optimization so that when a tab is closed, the owner
 * lease is released immediately (this is especially important to make sure that
 * a refreshed tab is able to immediately re-acquire the owner lease).
 * Unfortunately, IndexedDB cannot be reliably used in window.unload since it is
 * an asynchronous API. So in addition to attempting to give up the lease,
 * the owner writes its ownerId to a "zombiedOwnerId" entry in LocalStorage
 * which acts as an indicator that another tab should go ahead and take the
 * owner lease immediately regardless of the current lease timestamp.
 */
var indexeddb_persistence_IndexedDbPersistence = /** @class */ (function () {
    function IndexedDbPersistence(prefix, serializer) {
        this.ownerId = this.generateOwnerId();
        this.dbName = prefix + IndexedDbPersistence.MAIN_DATABASE;
        this.serializer = new local_serializer_LocalSerializer(serializer);
        this.localStoragePrefix = prefix;
    }
    IndexedDbPersistence.prototype.start = function () {
        var _this = this;
        if (!IndexedDbPersistence.isAvailable()) {
            this.persistenceError = new FirestoreError(Code.UNIMPLEMENTED, UNSUPPORTED_PLATFORM_ERROR_MSG);
            return Promise.reject(this.persistenceError);
        }
        assert(!this.started, 'IndexedDbPersistence double-started!');
        this.started = true;
        return simple_db_SimpleDb.openOrCreate(this.dbName, SCHEMA_VERSION, createOrUpgradeDb)
            .then(function (db) {
            _this.simpleDb = db;
        })
            .then(function () { return _this.tryAcquireOwnerLease(); })
            .then(function () {
            _this.scheduleOwnerLeaseRefreshes();
            _this.attachWindowUnloadHook();
        });
    };
    IndexedDbPersistence.prototype.shutdown = function () {
        var _this = this;
        assert(this.started, 'IndexedDbPersistence shutdown without start!');
        this.started = false;
        this.detachWindowUnloadHook();
        this.stopOwnerLeaseRefreshes();
        return this.releaseOwnerLease().then(function () {
            _this.simpleDb.close();
        });
    };
    IndexedDbPersistence.prototype.getMutationQueue = function (user) {
        return indexeddb_mutation_queue_IndexedDbMutationQueue.forUser(user, this.serializer);
    };
    IndexedDbPersistence.prototype.getQueryCache = function () {
        return new indexeddb_query_cache_IndexedDbQueryCache(this.serializer);
    };
    IndexedDbPersistence.prototype.getRemoteDocumentCache = function () {
        return new indexeddb_remote_document_cache_IndexedDbRemoteDocumentCache(this.serializer);
    };
    IndexedDbPersistence.prototype.runTransaction = function (action, operation) {
        var _this = this;
        if (this.persistenceError) {
            return Promise.reject(this.persistenceError);
        }
        debug(indexeddb_persistence_LOG_TAG, 'Starting transaction:', action);
        // Do all transactions as readwrite against all object stores, since we
        // are the only reader/writer.
        return this.simpleDb.runTransaction('readwrite', ALL_STORES, function (txn) {
            // Verify that we still have the owner lease as part of every transaction.
            return _this.ensureOwnerLease(txn).next(function () { return operation(txn); });
        });
    };
    IndexedDbPersistence.isAvailable = function () {
        return simple_db_SimpleDb.isAvailable();
    };
    /**
     * Generates a string used as a prefix when storing data in IndexedDB and
     * LocalStorage.
     */
    IndexedDbPersistence.buildStoragePrefix = function (databaseInfo) {
        // Use two different prefix formats:
        //
        //   * firestore / persistenceKey / projectID . databaseID / ...
        //   * firestore / persistenceKey / projectID / ...
        //
        // projectIDs are DNS-compatible names and cannot contain dots
        // so there's no danger of collisions.
        var database = databaseInfo.databaseId.projectId;
        if (!databaseInfo.databaseId.isDefaultDatabase) {
            database += '.' + databaseInfo.databaseId.database;
        }
        return 'firestore/' + databaseInfo.persistenceKey + '/' + database + '/';
    };
    /**
     * Acquires the owner lease if there's no valid owner. Else returns a rejected
     * promise.
     */
    IndexedDbPersistence.prototype.tryAcquireOwnerLease = function () {
        var _this = this;
        // NOTE: Don't use this.runTransaction, since it requires us to already
        // have the lease.
        return this.simpleDb.runTransaction('readwrite', [DbOwner.store], function (txn) {
            var store = txn.store(DbOwner.store);
            return store.get('owner').next(function (dbOwner) {
                if (!_this.validOwner(dbOwner)) {
                    var newDbOwner = new DbOwner(_this.ownerId, Date.now());
                    debug(indexeddb_persistence_LOG_TAG, 'No valid owner. Acquiring owner lease. Current owner:', dbOwner, 'New owner:', newDbOwner);
                    return store.put('owner', newDbOwner);
                }
                else {
                    debug(indexeddb_persistence_LOG_TAG, 'Valid owner already. Failing. Current owner:', dbOwner);
                    _this.persistenceError = new FirestoreError(Code.FAILED_PRECONDITION, EXISTING_OWNER_ERROR_MSG);
                    return persistence_promise_PersistencePromise.reject(_this.persistenceError);
                }
            });
        });
    };
    /** Checks the owner lease and deletes it if we are the current owner. */
    IndexedDbPersistence.prototype.releaseOwnerLease = function () {
        var _this = this;
        // NOTE: Don't use this.runTransaction, since it requires us to already
        // have the lease.
        return this.simpleDb.runTransaction('readwrite', [DbOwner.store], function (txn) {
            var store = txn.store(DbOwner.store);
            return store.get('owner').next(function (dbOwner) {
                if (dbOwner !== null && dbOwner.ownerId === _this.ownerId) {
                    debug(indexeddb_persistence_LOG_TAG, 'Releasing owner lease.');
                    return store.delete('owner');
                }
                else {
                    return persistence_promise_PersistencePromise.resolve();
                }
            });
        });
    };
    /**
     * Checks the owner lease and returns a rejected promise if we are not the
     * current owner. This should be included in every transaction to guard
     * against losing the owner lease.
     */
    IndexedDbPersistence.prototype.ensureOwnerLease = function (txn) {
        var _this = this;
        var store = txn.store(DbOwner.store);
        return store.get('owner').next(function (dbOwner) {
            if (dbOwner === null || dbOwner.ownerId !== _this.ownerId) {
                _this.persistenceError = new FirestoreError(Code.FAILED_PRECONDITION, EXISTING_OWNER_ERROR_MSG);
                return persistence_promise_PersistencePromise.reject(_this.persistenceError);
            }
            else {
                return persistence_promise_PersistencePromise.resolve();
            }
        });
    };
    /**
     * Returns true if the provided owner exists, has a recent timestamp, and
     * isn't zombied.
     *
     * NOTE: To determine if the owner is zombied, this method reads from
     * LocalStorage which could be mildly expensive.
     */
    IndexedDbPersistence.prototype.validOwner = function (dbOwner) {
        var now = Date.now();
        var minAcceptable = now - OWNER_LEASE_MAX_AGE_MS;
        var maxAcceptable = now;
        if (dbOwner === null) {
            return false; // no owner.
        }
        else if (dbOwner.leaseTimestampMs < minAcceptable) {
            return false; // owner lease has expired.
        }
        else if (dbOwner.leaseTimestampMs > maxAcceptable) {
            log_error('Persistence owner-lease is in the future. Discarding.', dbOwner);
            return false;
        }
        else if (dbOwner.ownerId === this.getZombiedOwnerId()) {
            return false; // owner's tab closed.
        }
        else {
            return true;
        }
    };
    /**
     * Schedules a recurring timer to update the owner lease timestamp to prevent
     * other tabs from taking the lease.
     */
    IndexedDbPersistence.prototype.scheduleOwnerLeaseRefreshes = function () {
        var _this = this;
        // NOTE: This doesn't need to be scheduled on the async queue and doing so
        // would increase the chances of us not refreshing on time if the queue is
        // backed up for some reason.
        this.ownerLeaseRefreshHandle = setInterval(function () {
            var txResult = _this.runTransaction('Refresh owner timestamp', function (txn) {
                // NOTE: We don't need to validate the current owner contents, since
                // runTransaction does that automatically.
                var store = txn.store(DbOwner.store);
                return store.put('owner', new DbOwner(_this.ownerId, Date.now()));
            });
            txResult.catch(function (reason) {
                // Probably means we lost the lease. Report the error and stop trying to
                // refresh the lease.
                log_error(reason);
                _this.stopOwnerLeaseRefreshes();
            });
        }, OWNER_LEASE_REFRESH_INTERVAL_MS);
    };
    IndexedDbPersistence.prototype.stopOwnerLeaseRefreshes = function () {
        if (this.ownerLeaseRefreshHandle) {
            clearInterval(this.ownerLeaseRefreshHandle);
            this.ownerLeaseRefreshHandle = null;
        }
    };
    /**
     * Attaches a window.unload handler that will synchronously write our
     * ownerId to a "zombie owner id" location in localstorage. This can be used
     * by tabs trying to acquire the lease to determine that the lease should be
     * acquired immediately even if the timestamp is recent. This is particularly
     * important for the refresh case (so the tab correctly re-acquires the owner
     * lease). LocalStorage is used for this rather than IndexedDb because it is
     * a synchronous API and so can be used reliably from an unload handler.
     */
    IndexedDbPersistence.prototype.attachWindowUnloadHook = function () {
        var _this = this;
        this.windowUnloadHandler = function () {
            // Record that we're zombied.
            _this.setZombiedOwnerId(_this.ownerId);
            // Attempt graceful shutdown (including releasing our owner lease), but
            // there's no guarantee it will complete.
            _this.shutdown();
        };
        window.addEventListener('unload', this.windowUnloadHandler);
    };
    IndexedDbPersistence.prototype.detachWindowUnloadHook = function () {
        if (this.windowUnloadHandler) {
            window.removeEventListener('unload', this.windowUnloadHandler);
            this.windowUnloadHandler = null;
        }
    };
    /**
     * Returns any recorded "zombied owner" (i.e. a previous owner that became
     * zombied due to their tab closing) from LocalStorage, or null if no such
     * record exists.
     */
    IndexedDbPersistence.prototype.getZombiedOwnerId = function () {
        try {
            var zombiedOwnerId = window.localStorage.getItem(this.zombiedOwnerLocalStorageKey());
            debug(indexeddb_persistence_LOG_TAG, 'Zombied ownerID from LocalStorage:', zombiedOwnerId);
            return zombiedOwnerId;
        }
        catch (e) {
            // Gracefully handle if LocalStorage isn't available / working.
            log_error(indexeddb_persistence_LOG_TAG, 'Failed to get zombie owner id.', e);
            return null;
        }
    };
    /**
     * Records a zombied owner (an owner that had its tab closed) in LocalStorage
     * or, if passed null, deletes any recorded zombied owner.
     */
    IndexedDbPersistence.prototype.setZombiedOwnerId = function (zombieOwnerId) {
        try {
            if (zombieOwnerId === null) {
                window.localStorage.removeItem(this.zombiedOwnerLocalStorageKey());
            }
            else {
                window.localStorage.setItem(this.zombiedOwnerLocalStorageKey(), zombieOwnerId);
            }
        }
        catch (e) {
            // Gracefully handle if LocalStorage isn't available / working.
            log_error(indexeddb_persistence_LOG_TAG, 'Failed to set zombie owner id.', e);
        }
    };
    IndexedDbPersistence.prototype.zombiedOwnerLocalStorageKey = function () {
        return this.localStoragePrefix + ZOMBIE_OWNER_LOCALSTORAGE_SUFFIX;
    };
    IndexedDbPersistence.prototype.generateOwnerId = function () {
        // For convenience, just use an AutoId.
        return misc_AutoId.newId();
    };
    /**
     * The name of the main (and currently only) IndexedDB database. this name is
     * appended to the prefix provided to the IndexedDbPersistence constructor.
     */
    IndexedDbPersistence.MAIN_DATABASE = 'main';
    return IndexedDbPersistence;
}());


//# sourceMappingURL=indexeddb_persistence.js.map

// CONCATENATED MODULE: ../firestore/dist/esm/src/local/local_documents_view.js
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






/**
 * A readonly view of the local state of all documents we're tracking (i.e. we
 * have a cached version in remoteDocumentCache or local mutations for the
 * document). The view is computed by applying the mutations in the
 * MutationQueue to the RemoteDocumentCache.
 */
var local_documents_view_LocalDocumentsView = /** @class */ (function () {
    function LocalDocumentsView(remoteDocumentCache, mutationQueue) {
        this.remoteDocumentCache = remoteDocumentCache;
        this.mutationQueue = mutationQueue;
    }
    /**
     * Get the local view of the document identified by `key`.
     *
     * @return Local view of the document or null if we don't have any cached
     * state for it.
     */
    LocalDocumentsView.prototype.getDocument = function (transaction, key) {
        var _this = this;
        return this.remoteDocumentCache
            .getEntry(transaction, key)
            .next(function (remoteDoc) {
            return _this.computeLocalDocument(transaction, key, remoteDoc);
        });
    };
    /**
     * Gets the local view of the documents identified by `keys`.
     *
     * If we don't have cached state for a document in `keys`, a NoDocument will
     * be stored for that key in the resulting set.
     */
    LocalDocumentsView.prototype.getDocuments = function (transaction, keys) {
        var _this = this;
        var promises = [];
        var results = maybeDocumentMap();
        keys.forEach(function (key) {
            promises.push(_this.getDocument(transaction, key).next(function (maybeDoc) {
                // TODO(http://b/32275378): Don't conflate missing / deleted.
                if (!maybeDoc) {
                    maybeDoc = new document_NoDocument(key, snapshot_version_SnapshotVersion.forDeletedDoc());
                }
                results = results.insert(key, maybeDoc);
            }));
        });
        return persistence_promise_PersistencePromise.waitFor(promises).next(function () { return results; });
    };
    /** Performs a query against the local view of all documents. */
    LocalDocumentsView.prototype.getDocumentsMatchingQuery = function (transaction, query) {
        if (document_key_DocumentKey.isDocumentKey(query.path)) {
            return this.getDocumentsMatchingDocumentQuery(transaction, query.path);
        }
        else {
            return this.getDocumentsMatchingCollectionQuery(transaction, query);
        }
    };
    LocalDocumentsView.prototype.getDocumentsMatchingDocumentQuery = function (transaction, docPath) {
        // Just do a simple document lookup.
        return this.getDocument(transaction, new document_key_DocumentKey(docPath)).next(function (maybeDoc) {
            var result = documentMap();
            if (maybeDoc instanceof document_Document) {
                result = result.insert(maybeDoc.key, maybeDoc);
            }
            return result;
        });
    };
    LocalDocumentsView.prototype.getDocumentsMatchingCollectionQuery = function (transaction, query) {
        var _this = this;
        // Query the remote documents and overlay mutations.
        // TODO(mikelehen): There may be significant overlap between the mutations
        // affecting these remote documents and the
        // getAllMutationBatchesAffectingQuery() mutations. Consider optimizing.
        var results;
        return this.remoteDocumentCache
            .getDocumentsMatchingQuery(transaction, query)
            .next(function (queryResults) {
            return _this.computeLocalDocuments(transaction, queryResults);
        })
            .next(function (promisedResults) {
            results = promisedResults;
            // Now use the mutation queue to discover any other documents that may
            // match the query after applying mutations.
            return _this.mutationQueue.getAllMutationBatchesAffectingQuery(transaction, query);
        })
            .next(function (matchingMutationBatches) {
            var matchingKeys = documentKeySet();
            for (var _i = 0, matchingMutationBatches_1 = matchingMutationBatches; _i < matchingMutationBatches_1.length; _i++) {
                var batch = matchingMutationBatches_1[_i];
                for (var _a = 0, _b = batch.mutations; _a < _b.length; _a++) {
                    var mutation = _b[_a];
                    // TODO(mikelehen): PERF: Check if this mutation actually
                    // affects the query to reduce work.
                    if (!results.get(mutation.key)) {
                        matchingKeys = matchingKeys.add(mutation.key);
                    }
                }
            }
            // Now add in the results for the matchingKeys.
            var promises = [];
            matchingKeys.forEach(function (key) {
                promises.push(_this.getDocument(transaction, key).next(function (doc) {
                    if (doc instanceof document_Document) {
                        results = results.insert(doc.key, doc);
                    }
                }));
            });
            return persistence_promise_PersistencePromise.waitFor(promises);
        })
            .next(function () {
            // Finally, filter out any documents that don't actually match
            // the query.
            results.forEach(function (key, doc) {
                if (!query.matches(doc)) {
                    results = results.remove(key);
                }
            });
            return results;
        });
    };
    /**
     * Takes a remote document and applies local mutations to generate the local
     * view of the document.
     * @param transaction The transaction in which to perform any persistence
     *     operations.
     * @param documentKey The key of the document (necessary when remoteDocument
     *     is null).
     * @param document The base remote document to apply mutations to or null.
     */
    LocalDocumentsView.prototype.computeLocalDocument = function (transaction, documentKey, document) {
        return this.mutationQueue
            .getAllMutationBatchesAffectingDocumentKey(transaction, documentKey)
            .next(function (batches) {
            for (var _i = 0, batches_1 = batches; _i < batches_1.length; _i++) {
                var batch = batches_1[_i];
                document = batch.applyToLocalView(documentKey, document);
            }
            return document;
        });
    };
    /**
     * Takes a set of remote documents and applies local mutations to generate the
     * local view of the documents.
     * @param transaction The transaction in which to perform any persistence
     *     operations.
     * @param documents The base remote documents to apply mutations to.
     * @return The local view of the documents.
     */
    LocalDocumentsView.prototype.computeLocalDocuments = function (transaction, documents) {
        var _this = this;
        var promises = [];
        documents.forEach(function (key, doc) {
            promises.push(_this.computeLocalDocument(transaction, key, doc).next(function (mutatedDoc) {
                if (mutatedDoc instanceof document_Document) {
                    documents = documents.insert(mutatedDoc.key, mutatedDoc);
                }
                else if (mutatedDoc instanceof document_NoDocument) {
                    documents = documents.remove(mutatedDoc.key);
                }
                else {
                    fail('Unknown MaybeDocument: ' + mutatedDoc);
                }
            }));
        });
        return persistence_promise_PersistencePromise.waitFor(promises).next(function () { return documents; });
    };
    return LocalDocumentsView;
}());


//# sourceMappingURL=local_documents_view.js.map

// CONCATENATED MODULE: ../firestore/dist/esm/src/local/remote_document_change_buffer.js
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



/**
 * An in-memory buffer of entries to be written to a RemoteDocumentCache.
 * It can be used to batch up a set of changes to be written to the cache, but
 * additionally supports reading entries back with the `getEntry()` method,
 * falling back to the underlying RemoteDocumentCache if no entry is
 * buffered.
 *
 * NOTE: This class was introduced in iOS to work around a limitation in
 * LevelDB. Given IndexedDb has full transaction support with
 * read-your-own-writes capability, this class is not technically needed, but
 * has been preserved as a convenience and to aid portability.
 */
var remote_document_change_buffer_RemoteDocumentChangeBuffer = /** @class */ (function () {
    function RemoteDocumentChangeBuffer(remoteDocumentCache) {
        this.remoteDocumentCache = remoteDocumentCache;
        this.changes = maybeDocumentMap();
    }
    /** Buffers a `RemoteDocumentCache.addEntry()` call. */
    RemoteDocumentChangeBuffer.prototype.addEntry = function (maybeDocument) {
        var changes = this.assertChanges();
        this.changes = changes.insert(maybeDocument.key, maybeDocument);
    };
    // NOTE: removeEntry() is not presently necessary and so is omitted.
    /**
     * Looks up an entry in the cache. The buffered changes will first be checked,
     * and if no buffered change applies, this will forward to
     * `RemoteDocumentCache.getEntry()`.
     *
     * @param transaction The transaction in which to perform any persistence
     *     operations.
     * @param documentKey The key of the entry to look up.
     * @return The cached Document or NoDocument entry, or null if we have nothing
     * cached.
     */
    RemoteDocumentChangeBuffer.prototype.getEntry = function (transaction, documentKey) {
        var changes = this.assertChanges();
        var bufferedEntry = changes.get(documentKey);
        if (bufferedEntry) {
            return persistence_promise_PersistencePromise.resolve(bufferedEntry);
        }
        else {
            return this.remoteDocumentCache.getEntry(transaction, documentKey);
        }
    };
    /**
     * Applies buffered changes to the underlying RemoteDocumentCache, using
     * the provided transaction.
     */
    RemoteDocumentChangeBuffer.prototype.apply = function (transaction) {
        var _this = this;
        var changes = this.assertChanges();
        var promises = [];
        changes.forEach(function (key, maybeDoc) {
            promises.push(_this.remoteDocumentCache.addEntry(transaction, maybeDoc));
        });
        // We should not be used to buffer any more changes.
        this.changes = null;
        return persistence_promise_PersistencePromise.waitFor(promises);
    };
    /** Helper to assert this.changes is not null and return it. */
    RemoteDocumentChangeBuffer.prototype.assertChanges = function () {
        assert(this.changes !== null, 'Changes have already been applied.');
        return this.changes;
    };
    return RemoteDocumentChangeBuffer;
}());


//# sourceMappingURL=remote_document_change_buffer.js.map

// CONCATENATED MODULE: ../firestore/dist/esm/src/local/local_store.js
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














var local_store_LOG_TAG = 'LocalStore';
/**
 * Local storage in the Firestore client. Coordinates persistence components
 * like the mutation queue and remote document cache to present a
 * latency-compensated view of stored data.
 *
 * The LocalStore is responsible for accepting mutations from the Sync Engine.
 * Writes from the client are put into a queue as provisional Mutations until
 * they are processed by the RemoteStore and confirmed as having been written
 * to the server.
 *
 * The local store provides the local version of documents that have been
 * modified locally. It maintains the constraint:
 *
 *   LocalDocument = RemoteDocument + Active(LocalMutations)
 *
 * (Active mutations are those that are enqueued and have not been previously
 * acknowledged or rejected).
 *
 * The RemoteDocument ("ground truth") state is provided via the
 * applyChangeBatch method. It will be some version of a server-provided
 * document OR will be a server-provided document PLUS acknowledged mutations:
 *
 *   RemoteDocument' = RemoteDocument + Acknowledged(LocalMutations)
 *
 * Note that this "dirty" version of a RemoteDocument will not be identical to a
 * server base version, since it has LocalMutations added to it pending getting
 * an authoritative copy from the server.
 *
 * Since LocalMutations can be rejected by the server, we have to be able to
 * revert a LocalMutation that has already been applied to the LocalDocument
 * (typically done by replaying all remaining LocalMutations to the
 * RemoteDocument to re-apply).
 *
 * The LocalStore is responsible for the garbage collection of the documents it
 * contains. For now, it every doc referenced by a view, the mutation queue, or
 * the RemoteStore.
 *
 * It also maintains the persistence of mapping queries to resume tokens and
 * target ids. It needs to know this data about queries to properly know what
 * docs it would be allowed to garbage collect.
 *
 * The LocalStore must be able to efficiently execute queries against its local
 * cache of the documents, to provide the initial set of results before any
 * remote changes have been received.
 *
 * Note: In TypeScript, most methods return Promises since the implementation
 * may rely on fetching data from IndexedDB which is async.
 * These Promises will only be rejected on an I/O error or other internal
 * (unexpected) failure (e.g. failed assert) and always represent an
 * unrecoverable error (should be caught / reported by the async_queue).
 */
var local_store_LocalStore = /** @class */ (function () {
    function LocalStore(
        /** Manages our in-memory or durable persistence. */
        persistence, initialUser, 
        /**
         * The garbage collector collects documents that should no longer be
         * cached (e.g. if they are no longer retained by the above reference sets
         * and the garbage collector is performing eager collection).
         */
        garbageCollector) {
        this.persistence = persistence;
        this.garbageCollector = garbageCollector;
        /**
         * The set of document references maintained by any local views.
         */
        this.localViewReferences = new reference_set_ReferenceSet();
        /** Maps a targetID to data about its query. */
        this.targetIds = {};
        /** Used to generate targetIDs for queries tracked locally. */
        this.targetIdGenerator = TargetIdGenerator.forLocalStore();
        /**
         * A heldBatchResult is a mutation batch result (from a write acknowledgement)
         * that arrived before the watch stream got notified of a snapshot that
         * includes the write. So we "hold" it until the watch stream catches up. It
         * ensures that the local write remains visible (latency compensation) and
         * doesn't temporarily appear reverted because the watch stream is slower than
         * the write stream and so wasn't reflecting it.
         *
         * NOTE: Eventually we want to move this functionality into the remote store.
         */
        this.heldBatchResults = [];
        this.mutationQueue = persistence.getMutationQueue(initialUser);
        this.remoteDocuments = persistence.getRemoteDocumentCache();
        this.queryCache = persistence.getQueryCache();
        this.localDocuments = new local_documents_view_LocalDocumentsView(this.remoteDocuments, this.mutationQueue);
        this.garbageCollector.addGarbageSource(this.localViewReferences);
        this.garbageCollector.addGarbageSource(this.queryCache);
        this.garbageCollector.addGarbageSource(this.mutationQueue);
    }
    /** Performs any initial startup actions required by the local store. */
    LocalStore.prototype.start = function () {
        var _this = this;
        return this.persistence.runTransaction('Start LocalStore', function (txn) {
            return _this.startMutationQueue(txn).next(function () { return _this.startQueryCache(txn); });
        });
    };
    /**
     * Tells the LocalStore that the currently authenticated user has changed.
     *
     * In response the local store switches the mutation queue to the new user and
     * returns any resulting document changes.
     */
    LocalStore.prototype.handleUserChange = function (user) {
        var _this = this;
        return this.persistence.runTransaction('Handle user change', function (txn) {
            // Swap out the mutation queue, grabbing the pending mutation batches
            // before and after.
            var oldBatches;
            return _this.mutationQueue
                .getAllMutationBatches(txn)
                .next(function (promisedOldBatches) {
                oldBatches = promisedOldBatches;
                _this.garbageCollector.removeGarbageSource(_this.mutationQueue);
                _this.mutationQueue = _this.persistence.getMutationQueue(user);
                _this.garbageCollector.addGarbageSource(_this.mutationQueue);
                return _this.startMutationQueue(txn);
            })
                .next(function () {
                // Recreate our LocalDocumentsView using the new
                // MutationQueue.
                _this.localDocuments = new local_documents_view_LocalDocumentsView(_this.remoteDocuments, _this.mutationQueue);
                return _this.mutationQueue.getAllMutationBatches(txn);
            })
                .next(function (newBatches) {
                // Union the old/new changed keys.
                var changedKeys = documentKeySet();
                for (var _i = 0, _a = [oldBatches, newBatches]; _i < _a.length; _i++) {
                    var batches = _a[_i];
                    for (var _b = 0, batches_1 = batches; _b < batches_1.length; _b++) {
                        var batch = batches_1[_b];
                        for (var _c = 0, _d = batch.mutations; _c < _d.length; _c++) {
                            var mutation = _d[_c];
                            changedKeys = changedKeys.add(mutation.key);
                        }
                    }
                }
                // Return the set of all (potentially) changed documents as the
                // result of the user change.
                return _this.localDocuments.getDocuments(txn, changedKeys);
            });
        });
    };
    LocalStore.prototype.startQueryCache = function (txn) {
        var _this = this;
        return this.queryCache.start(txn).next(function () {
            var targetId = _this.queryCache.getHighestTargetId();
            _this.targetIdGenerator = TargetIdGenerator.forLocalStore(targetId);
        });
    };
    LocalStore.prototype.startMutationQueue = function (txn) {
        var _this = this;
        return this.mutationQueue
            .start(txn)
            .next(function () {
            // If we have any leftover mutation batch results from a prior run,
            // just drop them.
            // TODO(http://b/33446471): We probably need to repopulate
            // heldBatchResults or similar instead, but that is not
            // straightforward since we're not persisting the write ack versions.
            _this.heldBatchResults = [];
            return _this.mutationQueue.getHighestAcknowledgedBatchId(txn);
        })
            .next(function (highestAck) {
            // TODO(mikelehen): This is the only usage of
            // getAllMutationBatchesThroughBatchId(). Consider removing it in
            // favor of a getAcknowledgedBatches() method.
            if (highestAck !== BATCHID_UNKNOWN) {
                return _this.mutationQueue.getAllMutationBatchesThroughBatchId(txn, highestAck);
            }
            else {
                return persistence_promise_PersistencePromise.resolve([]);
            }
        })
            .next(function (ackedBatches) {
            if (ackedBatches.length > 0) {
                return _this.mutationQueue.removeMutationBatches(txn, ackedBatches);
            }
            else {
                return persistence_promise_PersistencePromise.resolve();
            }
        });
    };
    /* Accept locally generated Mutations and commit them to storage. */
    LocalStore.prototype.localWrite = function (mutations) {
        var _this = this;
        return this.persistence.runTransaction('Locally write mutations', function (txn) {
            var batch;
            var localWriteTime = timestamp_Timestamp.now();
            return _this.mutationQueue
                .addMutationBatch(txn, localWriteTime, mutations)
                .next(function (promisedBatch) {
                batch = promisedBatch;
                // TODO(koss): This is doing an N^2 update by replaying ALL the
                // mutations on each document (instead of just the ones added) in
                // this batch.
                var keys = batch.keys();
                return _this.localDocuments.getDocuments(txn, keys);
            })
                .next(function (changedDocuments) {
                return { batchId: batch.batchId, changes: changedDocuments };
            });
        });
    };
    /**
     * Acknowledge the given batch.
     *
     * On the happy path when a batch is acknowledged, the local store will
     *
     *  + remove the batch from the mutation queue;
     *  + apply the changes to the remote document cache;
     *  + recalculate the latency compensated view implied by those changes (there
     *    may be mutations in the queue that affect the documents but haven't been
     *    acknowledged yet); and
     *  + give the changed documents back the sync engine
     *
     * @returns The resulting (modified) documents.
     */
    LocalStore.prototype.acknowledgeBatch = function (batchResult) {
        var _this = this;
        return this.persistence.runTransaction('Acknowledge batch', function (txn) {
            var affected;
            return _this.mutationQueue
                .acknowledgeBatch(txn, batchResult.batch, batchResult.streamToken)
                .next(function () {
                if (_this.shouldHoldBatchResult(batchResult.commitVersion)) {
                    _this.heldBatchResults.push(batchResult);
                    affected = documentKeySet();
                    return persistence_promise_PersistencePromise.resolve();
                }
                else {
                    var documentBuffer_1 = new remote_document_change_buffer_RemoteDocumentChangeBuffer(_this.remoteDocuments);
                    return _this.releaseBatchResults(txn, [batchResult], documentBuffer_1).next(function (promisedAffectedKeys) {
                        affected = promisedAffectedKeys;
                        return documentBuffer_1.apply(txn);
                    });
                }
            })
                .next(function () {
                return _this.mutationQueue.performConsistencyCheck(txn);
            })
                .next(function () {
                return _this.localDocuments.getDocuments(txn, affected);
            });
        });
    };
    /**
     * Remove mutations from the MutationQueue for the specified batch;
     * LocalDocuments will be recalculated.
     *
     * @returns The resulting modified documents.
     */
    LocalStore.prototype.rejectBatch = function (batchId) {
        var _this = this;
        return this.persistence.runTransaction('Reject batch', function (txn) {
            var toReject;
            var affectedKeys;
            return _this.mutationQueue
                .lookupMutationBatch(txn, batchId)
                .next(function (promisedToReject) {
                assert(promisedToReject != null, 'Attempt to reject nonexistent batch!');
                toReject = promisedToReject;
                return _this.mutationQueue
                    .getHighestAcknowledgedBatchId(txn)
                    .next(function (lastAcked) {
                    assert(batchId > lastAcked, "Acknowledged batches can't be rejected.");
                    return toReject;
                });
            })
                .next(function () {
                return _this.removeMutationBatch(txn, toReject);
            })
                .next(function (promisedAffectedKeys) {
                affectedKeys = promisedAffectedKeys;
                return _this.mutationQueue.performConsistencyCheck(txn);
            })
                .next(function () {
                return _this.localDocuments.getDocuments(txn, affectedKeys);
            });
        });
    };
    /** Returns the last recorded stream token for the current user. */
    LocalStore.prototype.getLastStreamToken = function () {
        var _this = this;
        return this.persistence.runTransaction('Get last stream token', function (txn) {
            return _this.mutationQueue.getLastStreamToken(txn);
        });
    };
    /**
     * Sets the stream token for the current user without acknowledging any
     * mutation batch. This is usually only useful after a stream handshake or in
     * response to an error that requires clearing the stream token.
     */
    LocalStore.prototype.setLastStreamToken = function (streamToken) {
        var _this = this;
        return this.persistence.runTransaction('Set last stream token', function (txn) {
            return _this.mutationQueue.setLastStreamToken(txn, streamToken);
        });
    };
    /**
     * Returns the last consistent snapshot processed (used by the RemoteStore to
     * determine whether to buffer incoming snapshots from the backend).
     */
    LocalStore.prototype.getLastRemoteSnapshotVersion = function () {
        return this.queryCache.getLastRemoteSnapshotVersion();
    };
    /**
     * Update the "ground-state" (remote) documents. We assume that the remote
     * event reflects any write batches that have been acknowledged or rejected
     * (i.e. we do not re-apply local mutations to updates from this event).
     *
     * LocalDocuments are re-calculated if there are remaining mutations in the
     * queue.
     */
    LocalStore.prototype.applyRemoteEvent = function (remoteEvent) {
        var _this = this;
        var documentBuffer = new remote_document_change_buffer_RemoteDocumentChangeBuffer(this.remoteDocuments);
        return this.persistence.runTransaction('Apply remote event', function (txn) {
            var promises = [];
            forEachNumber(remoteEvent.targetChanges, function (targetId, change) {
                // Do not ref/unref unassigned targetIds - it may lead to leaks.
                var queryData = _this.targetIds[targetId];
                if (!queryData)
                    return;
                var mapping = change.mapping;
                if (mapping) {
                    // First make sure that all references are deleted
                    if (mapping instanceof ResetMapping) {
                        promises.push(_this.queryCache
                            .removeMatchingKeysForTargetId(txn, targetId)
                            .next(function () {
                            return _this.queryCache.addMatchingKeys(txn, mapping.documents, targetId);
                        }));
                    }
                    else if (mapping instanceof UpdateMapping) {
                        promises.push(_this.queryCache
                            .removeMatchingKeys(txn, mapping.removedDocuments, targetId)
                            .next(function () {
                            return _this.queryCache.addMatchingKeys(txn, mapping.addedDocuments, targetId);
                        }));
                    }
                    else {
                        return fail('Unknown mapping type: ' + JSON.stringify(mapping));
                    }
                }
                // Update the resume token if the change includes one. Don't clear
                // any preexisting value.
                var resumeToken = change.resumeToken;
                if (resumeToken.length > 0) {
                    queryData = queryData.update({
                        resumeToken: resumeToken,
                        snapshotVersion: change.snapshotVersion
                    });
                    _this.targetIds[targetId] = queryData;
                    promises.push(_this.queryCache.addQueryData(txn, queryData));
                }
            });
            var changedDocKeys = documentKeySet();
            remoteEvent.documentUpdates.forEach(function (key, doc) {
                changedDocKeys = changedDocKeys.add(key);
                promises.push(documentBuffer.getEntry(txn, key).next(function (existingDoc) {
                    // Make sure we don't apply an old document version to the remote
                    // cache, though we make an exception for SnapshotVersion.MIN which
                    // can happen for manufactured events (e.g. in the case of a limbo
                    // document resolution failing).
                    if (existingDoc == null ||
                        doc.version.equals(snapshot_version_SnapshotVersion.MIN) ||
                        doc.version.compareTo(existingDoc.version) >= 0) {
                        documentBuffer.addEntry(doc);
                    }
                    else {
                        debug(local_store_LOG_TAG, 'Ignoring outdated watch update for ', key, '. Current version:', existingDoc.version, ' Watch version:', doc.version);
                    }
                    // The document might be garbage because it was unreferenced by
                    // everything. Make sure to mark it as garbage if it is...
                    _this.garbageCollector.addPotentialGarbageKey(key);
                }));
            });
            // HACK: The only reason we allow a null snapshot version is so that we
            // can synthesize remote events when we get permission denied errors while
            // trying to resolve the state of a locally cached document that is in
            // limbo.
            var lastRemoteVersion = _this.queryCache.getLastRemoteSnapshotVersion();
            var remoteVersion = remoteEvent.snapshotVersion;
            if (!remoteVersion.equals(snapshot_version_SnapshotVersion.MIN)) {
                assert(remoteVersion.compareTo(lastRemoteVersion) >= 0, 'Watch stream reverted to previous snapshot?? ' +
                    remoteVersion +
                    ' < ' +
                    lastRemoteVersion);
                promises.push(_this.queryCache.setLastRemoteSnapshotVersion(txn, remoteVersion));
            }
            var releasedWriteKeys;
            return persistence_promise_PersistencePromise.waitFor(promises)
                .next(function () { return _this.releaseHeldBatchResults(txn, documentBuffer); })
                .next(function (promisedReleasedWriteKeys) {
                releasedWriteKeys = promisedReleasedWriteKeys;
                return documentBuffer.apply(txn);
            })
                .next(function () {
                return _this.localDocuments.getDocuments(txn, changedDocKeys.unionWith(releasedWriteKeys));
            });
        });
    };
    /**
     * Notify local store of the changed views to locally pin documents.
     */
    LocalStore.prototype.notifyLocalViewChanges = function (viewChanges) {
        var _this = this;
        return this.persistence.runTransaction('Notify local view changes', function (txn) {
            var promises = [];
            var _loop_1 = function (view) {
                promises.push(_this.queryCache
                    .getQueryData(txn, view.query)
                    .next(function (queryData) {
                    assert(queryData !== null, 'Local view changes contain unallocated query.');
                    var targetId = queryData.targetId;
                    _this.localViewReferences.addReferences(view.addedKeys, targetId);
                    _this.localViewReferences.removeReferences(view.removedKeys, targetId);
                }));
            };
            for (var _i = 0, viewChanges_1 = viewChanges; _i < viewChanges_1.length; _i++) {
                var view = viewChanges_1[_i];
                _loop_1(view);
            }
            return persistence_promise_PersistencePromise.waitFor(promises);
        });
    };
    /**
     * Gets the mutation batch after the passed in batchId in the mutation queue
     * or null if empty.
     * @param afterBatchId If provided, the batch to search after.
     * @returns The next mutation or null if there wasn't one.
     */
    LocalStore.prototype.nextMutationBatch = function (afterBatchId) {
        var _this = this;
        return this.persistence.runTransaction('Get next mutation batch', function (txn) {
            if (afterBatchId === undefined) {
                afterBatchId = BATCHID_UNKNOWN;
            }
            return _this.mutationQueue.getNextMutationBatchAfterBatchId(txn, afterBatchId);
        });
    };
    /**
     * Read the current value of a Document with a given key or null if not
     * found - used for testing.
     */
    LocalStore.prototype.readDocument = function (key) {
        var _this = this;
        return this.persistence.runTransaction('read document', function (txn) {
            return _this.localDocuments.getDocument(txn, key);
        });
    };
    /**
     * Assigns the given query an internal ID so that its results can be pinned so
     * they don't get GC'd. A query must be allocated in the local store before
     * the store can be used to manage its view.
     */
    LocalStore.prototype.allocateQuery = function (query) {
        var _this = this;
        return this.persistence.runTransaction('Allocate query', function (txn) {
            var queryData;
            return _this.queryCache
                .getQueryData(txn, query)
                .next(function (cached) {
                if (cached) {
                    // This query has been listened to previously, so reuse the
                    // previous targetID.
                    // TODO(mcg): freshen last accessed date?
                    queryData = cached;
                    return persistence_promise_PersistencePromise.resolve();
                }
                else {
                    var targetId = _this.targetIdGenerator.next();
                    queryData = new query_data_QueryData(query, targetId, QueryPurpose.Listen);
                    return _this.queryCache.addQueryData(txn, queryData);
                }
            })
                .next(function () {
                assert(!_this.targetIds[queryData.targetId], 'Tried to allocate an already allocated query: ' + query);
                _this.targetIds[queryData.targetId] = queryData;
                return queryData;
            });
        });
    };
    /** Unpin all the documents associated with the given query. */
    LocalStore.prototype.releaseQuery = function (query) {
        var _this = this;
        return this.persistence.runTransaction('Release query', function (txn) {
            return _this.queryCache
                .getQueryData(txn, query)
                .next(function (queryData) {
                assert(queryData != null, 'Tried to release nonexistent query: ' + query);
                _this.localViewReferences.removeReferencesForId(queryData.targetId);
                delete _this.targetIds[queryData.targetId];
                if (_this.garbageCollector.isEager) {
                    return _this.queryCache.removeQueryData(txn, queryData);
                }
                else {
                    return persistence_promise_PersistencePromise.resolve();
                }
            })
                .next(function () {
                // If this was the last watch target, then we won't get any more
                // watch snapshots, so we should release any held batch results.
                if (isEmpty(_this.targetIds)) {
                    var documentBuffer_2 = new remote_document_change_buffer_RemoteDocumentChangeBuffer(_this.remoteDocuments);
                    return _this.releaseHeldBatchResults(txn, documentBuffer_2).next(function () {
                        documentBuffer_2.apply(txn);
                    });
                }
                else {
                    return persistence_promise_PersistencePromise.resolve();
                }
            });
        });
    };
    /**
     * Runs the specified query against all the documents in the local store and
     * returns the results.
     */
    LocalStore.prototype.executeQuery = function (query) {
        var _this = this;
        return this.persistence.runTransaction('Execute query', function (txn) {
            return _this.localDocuments.getDocumentsMatchingQuery(txn, query);
        });
    };
    /**
     * Returns the keys of the documents that are associated with the given
     * target id in the remote table.
     */
    LocalStore.prototype.remoteDocumentKeys = function (targetId) {
        var _this = this;
        return this.persistence.runTransaction('Remote document keys', function (txn) {
            return _this.queryCache.getMatchingKeysForTargetId(txn, targetId);
        });
    };
    /**
     * Collect garbage if necessary.
     * Should be called periodically by Sync Engine to recover resources. The
     * implementation must guarantee that GC won't happen in other places than
     * this method call.
     */
    LocalStore.prototype.collectGarbage = function () {
        var _this = this;
        // Call collectGarbage regardless of whether isGCEnabled so the referenceSet
        // doesn't continue to accumulate the garbage keys.
        return this.persistence.runTransaction('Garbage collection', function (txn) {
            return _this.garbageCollector.collectGarbage(txn).next(function (garbage) {
                var promises = [];
                garbage.forEach(function (key) {
                    promises.push(_this.remoteDocuments.removeEntry(txn, key));
                });
                return persistence_promise_PersistencePromise.waitFor(promises);
            });
        });
    };
    LocalStore.prototype.releaseHeldBatchResults = function (txn, documentBuffer) {
        var toRelease = [];
        for (var _i = 0, _a = this.heldBatchResults; _i < _a.length; _i++) {
            var batchResult = _a[_i];
            if (!this.isRemoteUpToVersion(batchResult.commitVersion)) {
                break;
            }
            toRelease.push(batchResult);
        }
        if (toRelease.length === 0) {
            return persistence_promise_PersistencePromise.resolve(documentKeySet());
        }
        else {
            this.heldBatchResults.splice(0, toRelease.length);
            return this.releaseBatchResults(txn, toRelease, documentBuffer);
        }
    };
    LocalStore.prototype.isRemoteUpToVersion = function (version) {
        // If there are no watch targets, then we won't get remote snapshots, and
        // we are always "up-to-date."
        var lastRemoteVersion = this.queryCache.getLastRemoteSnapshotVersion();
        return (version.compareTo(lastRemoteVersion) <= 0 ||
            isEmpty(this.targetIds));
    };
    LocalStore.prototype.shouldHoldBatchResult = function (version) {
        // Check if watcher isn't up to date or prior results are already held.
        return (!this.isRemoteUpToVersion(version) || this.heldBatchResults.length > 0);
    };
    LocalStore.prototype.releaseBatchResults = function (txn, batchResults, documentBuffer) {
        var _this = this;
        var promiseChain = persistence_promise_PersistencePromise.resolve();
        var _loop_2 = function (batchResult) {
            promiseChain = promiseChain.next(function () {
                return _this.applyWriteToRemoteDocuments(txn, batchResult, documentBuffer);
            });
        };
        for (var _i = 0, batchResults_1 = batchResults; _i < batchResults_1.length; _i++) {
            var batchResult = batchResults_1[_i];
            _loop_2(batchResult);
        }
        return promiseChain.next(function () {
            return _this.removeMutationBatches(txn, batchResults.map(function (result) { return result.batch; }));
        });
    };
    LocalStore.prototype.removeMutationBatch = function (txn, batch) {
        return this.removeMutationBatches(txn, [batch]);
    };
    /** Removes all the mutation batches named in the given array. */
    LocalStore.prototype.removeMutationBatches = function (txn, batches) {
        var affectedDocs = documentKeySet();
        for (var _i = 0, batches_2 = batches; _i < batches_2.length; _i++) {
            var batch = batches_2[_i];
            for (var _a = 0, _b = batch.mutations; _a < _b.length; _a++) {
                var mutation = _b[_a];
                var key = mutation.key;
                affectedDocs = affectedDocs.add(key);
            }
        }
        return this.mutationQueue
            .removeMutationBatches(txn, batches)
            .next(function () { return affectedDocs; });
    };
    LocalStore.prototype.applyWriteToRemoteDocuments = function (txn, batchResult, documentBuffer) {
        var batch = batchResult.batch;
        var docKeys = batch.keys();
        var promiseChain = persistence_promise_PersistencePromise.resolve();
        docKeys.forEach(function (docKey) {
            promiseChain = promiseChain
                .next(function () {
                return documentBuffer.getEntry(txn, docKey);
            })
                .next(function (remoteDoc) {
                var doc = remoteDoc;
                var ackVersion = batchResult.docVersions.get(docKey);
                assert(ackVersion !== null, 'ackVersions should contain every doc in the write.');
                if (!doc || doc.version.compareTo(ackVersion) < 0) {
                    doc = batch.applyToRemoteDocument(docKey, doc, batchResult);
                    if (!doc) {
                        assert(!remoteDoc, 'Mutation batch ' +
                            batch +
                            ' applied to document ' +
                            remoteDoc +
                            ' resulted in null');
                    }
                    else {
                        documentBuffer.addEntry(doc);
                    }
                }
            });
        });
        return promiseChain;
    };
    return LocalStore;
}());


//# sourceMappingURL=local_store.js.map

// CONCATENATED MODULE: ../firestore/dist/esm/src/local/memory_mutation_queue.js
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








var memory_mutation_queue_MemoryMutationQueue = /** @class */ (function () {
    function MemoryMutationQueue() {
        /**
         * The set of all mutations that have been sent but not yet been applied to
         * the backend.
         */
        this.mutationQueue = [];
        /** Next value to use when assigning sequential IDs to each mutation batch. */
        this.nextBatchId = 1;
        /** The highest acknowledged mutation in the queue. */
        this.highestAcknowledgedBatchId = BATCHID_UNKNOWN;
        /** The last received stream token from the server, used to acknowledge which
         * responses the client has processed. Stream tokens are opaque checkpoint
         * markers whose only real value is their inclusion in the next request.
         */
        this.lastStreamToken = emptyByteString();
        /** The garbage collector to notify about potential garbage keys. */
        this.garbageCollector = null;
        /** An ordered mapping between documents and the mutations batch IDs. */
        this.batchesByDocumentKey = new sorted_set_SortedSet(reference_set_DocReference.compareByKey);
    }
    MemoryMutationQueue.prototype.start = function (transaction) {
        // NOTE: The queue may be shutdown / started multiple times, since we
        // maintain the queue for the duration of the app session in case a user
        // logs out / back in. To behave like the LevelDB-backed MutationQueue (and
        // accommodate tests that expect as much), we reset nextBatchId and
        // highestAcknowledgedBatchId if the queue is empty.
        if (this.mutationQueue.length === 0) {
            this.nextBatchId = 1;
            this.highestAcknowledgedBatchId = BATCHID_UNKNOWN;
        }
        assert(this.highestAcknowledgedBatchId < this.nextBatchId, 'highestAcknowledgedBatchId must be less than the nextBatchId');
        return persistence_promise_PersistencePromise.resolve();
    };
    MemoryMutationQueue.prototype.checkEmpty = function (transaction) {
        return persistence_promise_PersistencePromise.resolve(this.mutationQueue.length === 0);
    };
    MemoryMutationQueue.prototype.getNextBatchId = function (transaction) {
        return persistence_promise_PersistencePromise.resolve(this.nextBatchId);
    };
    MemoryMutationQueue.prototype.getHighestAcknowledgedBatchId = function (transaction) {
        return persistence_promise_PersistencePromise.resolve(this.highestAcknowledgedBatchId);
    };
    MemoryMutationQueue.prototype.acknowledgeBatch = function (transaction, batch, streamToken) {
        var batchId = batch.batchId;
        assert(batchId > this.highestAcknowledgedBatchId, 'Mutation batchIDs must be acknowledged in order');
        var batchIndex = this.indexOfExistingBatchId(batchId, 'acknowledged');
        // Verify that the batch in the queue is the one to be acknowledged.
        var check = this.mutationQueue[batchIndex];
        assert(batchId === check.batchId, 'Queue ordering failure: expected batch ' +
            batchId +
            ', got batch ' +
            check.batchId);
        assert(!check.isTombstone(), "Can't acknowledge a previously removed batch");
        this.highestAcknowledgedBatchId = batchId;
        this.lastStreamToken = streamToken;
        return persistence_promise_PersistencePromise.resolve();
    };
    MemoryMutationQueue.prototype.getLastStreamToken = function (transaction) {
        return persistence_promise_PersistencePromise.resolve(this.lastStreamToken);
    };
    MemoryMutationQueue.prototype.setLastStreamToken = function (transaction, streamToken) {
        this.lastStreamToken = streamToken;
        return persistence_promise_PersistencePromise.resolve();
    };
    MemoryMutationQueue.prototype.addMutationBatch = function (transaction, localWriteTime, mutations) {
        assert(mutations.length !== 0, 'Mutation batches should not be empty');
        var batchId = this.nextBatchId;
        this.nextBatchId++;
        if (this.mutationQueue.length > 0) {
            var prior = this.mutationQueue[this.mutationQueue.length - 1];
            assert(prior.batchId < batchId, 'Mutation batchIDs must be monotonically increasing order');
        }
        var batch = new mutation_batch_MutationBatch(batchId, localWriteTime, mutations);
        this.mutationQueue.push(batch);
        // Track references by document key.
        for (var _i = 0, mutations_1 = mutations; _i < mutations_1.length; _i++) {
            var mutation = mutations_1[_i];
            this.batchesByDocumentKey = this.batchesByDocumentKey.add(new reference_set_DocReference(mutation.key, batchId));
        }
        return persistence_promise_PersistencePromise.resolve(batch);
    };
    MemoryMutationQueue.prototype.lookupMutationBatch = function (transaction, batchId) {
        return persistence_promise_PersistencePromise.resolve(this.findMutationBatch(batchId));
    };
    MemoryMutationQueue.prototype.getNextMutationBatchAfterBatchId = function (transaction, batchId) {
        var size = this.mutationQueue.length;
        // All batches with batchId <= this.highestAcknowledgedBatchId have been
        // acknowledged so the first unacknowledged batch after batchID will have a
        // batchID larger than both of these values.
        batchId = Math.max(batchId + 1, this.highestAcknowledgedBatchId);
        // The requested batchId may still be out of range so normalize it to the
        // start of the queue.
        var rawIndex = this.indexOfBatchId(batchId);
        var index = rawIndex < 0 ? 0 : rawIndex;
        // Finally return the first non-tombstone batch.
        for (; index < size; index++) {
            var batch = this.mutationQueue[index];
            if (!batch.isTombstone()) {
                return persistence_promise_PersistencePromise.resolve(batch);
            }
        }
        return persistence_promise_PersistencePromise.resolve(null);
    };
    MemoryMutationQueue.prototype.getAllMutationBatches = function (transaction) {
        return persistence_promise_PersistencePromise.resolve(this.getAllLiveMutationBatchesBeforeIndex(this.mutationQueue.length));
    };
    MemoryMutationQueue.prototype.getAllMutationBatchesThroughBatchId = function (transaction, batchId) {
        var count = this.mutationQueue.length;
        var endIndex = this.indexOfBatchId(batchId);
        if (endIndex < 0) {
            endIndex = 0;
        }
        else if (endIndex >= count) {
            endIndex = count;
        }
        else {
            // The endIndex is in the queue so increment to pull everything in the
            // queue including it.
            endIndex++;
        }
        return persistence_promise_PersistencePromise.resolve(this.getAllLiveMutationBatchesBeforeIndex(endIndex));
    };
    MemoryMutationQueue.prototype.getAllMutationBatchesAffectingDocumentKey = function (transaction, documentKey) {
        var _this = this;
        var start = new reference_set_DocReference(documentKey, 0);
        var end = new reference_set_DocReference(documentKey, Number.POSITIVE_INFINITY);
        var result = [];
        this.batchesByDocumentKey.forEachInRange([start, end], function (ref) {
            assert(documentKey.equals(ref.key), "Should only iterate over a single key's batches");
            var batch = _this.findMutationBatch(ref.targetOrBatchId);
            assert(batch !== null, 'Batches in the index must exist in the main table');
            result.push(batch);
        });
        return persistence_promise_PersistencePromise.resolve(result);
    };
    MemoryMutationQueue.prototype.getAllMutationBatchesAffectingQuery = function (transaction, query) {
        var _this = this;
        // Use the query path as a prefix for testing if a document matches the
        // query.
        var prefix = query.path;
        var immediateChildrenPathLength = prefix.length + 1;
        // Construct a document reference for actually scanning the index. Unlike
        // the prefix the document key in this reference must have an even number of
        // segments. The empty segment can be used a suffix of the query path
        // because it precedes all other segments in an ordered traversal.
        var startPath = prefix;
        if (!document_key_DocumentKey.isDocumentKey(startPath)) {
            startPath = startPath.child('');
        }
        var start = new reference_set_DocReference(new document_key_DocumentKey(startPath), 0);
        // Find unique batchIDs referenced by all documents potentially matching the
        // query.
        var uniqueBatchIDs = new sorted_set_SortedSet(primitiveComparator);
        this.batchesByDocumentKey.forEachWhile(function (ref) {
            var rowKeyPath = ref.key.path;
            if (!prefix.isPrefixOf(rowKeyPath)) {
                return false;
            }
            else {
                // Rows with document keys more than one segment longer than the query
                // path can't be matches. For example, a query on 'rooms' can't match
                // the document /rooms/abc/messages/xyx.
                // TODO(mcg): we'll need a different scanner when we implement
                // ancestor queries.
                if (rowKeyPath.length === immediateChildrenPathLength) {
                    uniqueBatchIDs = uniqueBatchIDs.add(ref.targetOrBatchId);
                }
                return true;
            }
        }, start);
        // Construct an array of matching batches, sorted by batchID to ensure that
        // multiple mutations affecting the same document key are applied in order.
        var result = [];
        uniqueBatchIDs.forEach(function (batchId) {
            var batch = _this.findMutationBatch(batchId);
            if (batch !== null) {
                result.push(batch);
            }
        });
        return persistence_promise_PersistencePromise.resolve(result);
    };
    MemoryMutationQueue.prototype.removeMutationBatches = function (transaction, batches) {
        var batchCount = batches.length;
        assert(batchCount > 0, 'Should not remove mutations when none exist.');
        var firstBatchId = batches[0].batchId;
        var queueCount = this.mutationQueue.length;
        // Find the position of the first batch for removal. This need not be the
        // first entry in the queue.
        var startIndex = this.indexOfExistingBatchId(firstBatchId, 'removed');
        assert(this.mutationQueue[startIndex].batchId === firstBatchId, 'Removed batches must exist in the queue');
        // Check that removed batches are contiguous (while excluding tombstones).
        var batchIndex = 1;
        var queueIndex = startIndex + 1;
        while (batchIndex < batchCount && queueIndex < queueCount) {
            var batch = this.mutationQueue[queueIndex];
            if (batch.isTombstone()) {
                queueIndex++;
                continue;
            }
            assert(batch.batchId === batches[batchIndex].batchId, 'Removed batches must be contiguous in the queue');
            batchIndex++;
            queueIndex++;
        }
        // Only actually remove batches if removing at the front of the queue.
        // Previously rejected batches may have left tombstones in the queue, so
        // expand the removal range to include any tombstones.
        if (startIndex === 0) {
            for (; queueIndex < queueCount; queueIndex++) {
                var batch = this.mutationQueue[queueIndex];
                if (!batch.isTombstone()) {
                    break;
                }
            }
            var length_1 = queueIndex - startIndex;
            this.mutationQueue.splice(startIndex, length_1);
        }
        else {
            // Mark the tombstones
            for (var i = startIndex; i < queueIndex; i++) {
                this.mutationQueue[i] = this.mutationQueue[i].toTombstone();
            }
        }
        var references = this.batchesByDocumentKey;
        for (var _i = 0, batches_1 = batches; _i < batches_1.length; _i++) {
            var batch = batches_1[_i];
            var batchId = batch.batchId;
            for (var _a = 0, _b = batch.mutations; _a < _b.length; _a++) {
                var mutation = _b[_a];
                var key = mutation.key;
                if (this.garbageCollector !== null) {
                    this.garbageCollector.addPotentialGarbageKey(key);
                }
                var ref = new reference_set_DocReference(key, batchId);
                references = references.delete(ref);
            }
        }
        this.batchesByDocumentKey = references;
        return persistence_promise_PersistencePromise.resolve();
    };
    MemoryMutationQueue.prototype.setGarbageCollector = function (garbageCollector) {
        this.garbageCollector = garbageCollector;
    };
    MemoryMutationQueue.prototype.containsKey = function (txn, key) {
        var ref = new reference_set_DocReference(key, 0);
        var firstRef = this.batchesByDocumentKey.firstAfterOrEqual(ref);
        return persistence_promise_PersistencePromise.resolve(key.equals(firstRef && firstRef.key));
    };
    MemoryMutationQueue.prototype.performConsistencyCheck = function (txn) {
        if (this.mutationQueue.length === 0) {
            assert(this.batchesByDocumentKey.isEmpty(), 'Document leak -- detected dangling mutation references when queue is empty.');
        }
        return persistence_promise_PersistencePromise.resolve();
    };
    /**
     * A private helper that collects all the mutations batches in the queue up to
     * but not including the given endIndex. All tombstones in the queue are
     * excluded.
     */
    MemoryMutationQueue.prototype.getAllLiveMutationBatchesBeforeIndex = function (endIndex) {
        var result = [];
        for (var i = 0; i < endIndex; i++) {
            var batch = this.mutationQueue[i];
            if (!batch.isTombstone()) {
                result.push(batch);
            }
        }
        return result;
    };
    /**
     * Finds the index of the given batchId in the mutation queue and asserts that
     * the resulting index is within the bounds of the queue.
     *
     * @param batchId The batchId to search for
     * @param action A description of what the caller is doing, phrased in passive
     * form (e.g. "acknowledged" in a routine that acknowledges batches).
     */
    MemoryMutationQueue.prototype.indexOfExistingBatchId = function (batchId, action) {
        var index = this.indexOfBatchId(batchId);
        assert(index >= 0 && index < this.mutationQueue.length, 'Batches must exist to be ' + action);
        return index;
    };
    /**
     * Finds the index of the given batchId in the mutation queue. This operation
     * is O(1).
     *
     * @return The computed index of the batch with the given batchId, based on
     * the state of the queue. Note this index can be negative if the requested
     * batchId has already been remvoed from the queue or past the end of the
     * queue if the batchId is larger than the last added batch.
     */
    MemoryMutationQueue.prototype.indexOfBatchId = function (batchId) {
        if (this.mutationQueue.length === 0) {
            // As an index this is past the end of the queue
            return 0;
        }
        // Examine the front of the queue to figure out the difference between the
        // batchId and indexes in the array. Note that since the queue is ordered
        // by batchId, if the first batch has a larger batchId then the requested
        // batchId doesn't exist in the queue.
        var firstBatchId = this.mutationQueue[0].batchId;
        return batchId - firstBatchId;
    };
    /**
     * A version of lookupMutationBatch that doesn't return a promise, this makes
     * other functions that uses this code easier to read and more efficent.
     */
    MemoryMutationQueue.prototype.findMutationBatch = function (batchId) {
        var index = this.indexOfBatchId(batchId);
        if (index < 0 || index >= this.mutationQueue.length) {
            return null;
        }
        var batch = this.mutationQueue[index];
        assert(batch.batchId === batchId, 'If found batch must match');
        return batch.isTombstone() ? null : batch;
    };
    return MemoryMutationQueue;
}());


//# sourceMappingURL=memory_mutation_queue.js.map

// CONCATENATED MODULE: ../firestore/dist/esm/src/local/memory_query_cache.js
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




var memory_query_cache_MemoryQueryCache = /** @class */ (function () {
    function MemoryQueryCache() {
        /**
         * Maps a query to the data about that query
         */
        this.queries = new obj_map_ObjectMap(function (q) { return q.canonicalId(); });
        /** The last received snapshot version. */
        this.lastRemoteSnapshotVersion = snapshot_version_SnapshotVersion.MIN;
        /** The highest numbered target ID encountered. */
        this.highestTargetId = 0;
        /**
         * A ordered bidirectional mapping between documents and the remote target
         * IDs.
         */
        this.references = new reference_set_ReferenceSet();
    }
    MemoryQueryCache.prototype.start = function (transaction) {
        // Nothing to do.
        return persistence_promise_PersistencePromise.resolve();
    };
    MemoryQueryCache.prototype.getLastRemoteSnapshotVersion = function () {
        return this.lastRemoteSnapshotVersion;
    };
    MemoryQueryCache.prototype.getHighestTargetId = function () {
        return this.highestTargetId;
    };
    MemoryQueryCache.prototype.setLastRemoteSnapshotVersion = function (transaction, snapshotVersion) {
        this.lastRemoteSnapshotVersion = snapshotVersion;
        return persistence_promise_PersistencePromise.resolve();
    };
    MemoryQueryCache.prototype.addQueryData = function (transaction, queryData) {
        this.queries.set(queryData.query, queryData);
        var targetId = queryData.targetId;
        if (targetId > this.highestTargetId) {
            this.highestTargetId = targetId;
        }
        return persistence_promise_PersistencePromise.resolve();
    };
    MemoryQueryCache.prototype.removeQueryData = function (transaction, queryData) {
        this.queries.delete(queryData.query);
        this.references.removeReferencesForId(queryData.targetId);
        return persistence_promise_PersistencePromise.resolve();
    };
    MemoryQueryCache.prototype.getQueryData = function (transaction, query) {
        var queryData = this.queries.get(query) || null;
        return persistence_promise_PersistencePromise.resolve(queryData);
    };
    MemoryQueryCache.prototype.addMatchingKeys = function (txn, keys, targetId) {
        this.references.addReferences(keys, targetId);
        return persistence_promise_PersistencePromise.resolve();
    };
    MemoryQueryCache.prototype.removeMatchingKeys = function (txn, keys, targetId) {
        this.references.removeReferences(keys, targetId);
        return persistence_promise_PersistencePromise.resolve();
    };
    MemoryQueryCache.prototype.removeMatchingKeysForTargetId = function (txn, targetId) {
        this.references.removeReferencesForId(targetId);
        return persistence_promise_PersistencePromise.resolve();
    };
    MemoryQueryCache.prototype.getMatchingKeysForTargetId = function (txn, targetId) {
        var matchingKeys = this.references.referencesForId(targetId);
        return persistence_promise_PersistencePromise.resolve(matchingKeys);
    };
    MemoryQueryCache.prototype.setGarbageCollector = function (gc) {
        this.references.setGarbageCollector(gc);
    };
    MemoryQueryCache.prototype.containsKey = function (txn, key) {
        return this.references.containsKey(txn, key);
    };
    return MemoryQueryCache;
}());


//# sourceMappingURL=memory_query_cache.js.map

// CONCATENATED MODULE: ../firestore/dist/esm/src/local/memory_remote_document_cache.js
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




var memory_remote_document_cache_MemoryRemoteDocumentCache = /** @class */ (function () {
    function MemoryRemoteDocumentCache() {
        this.docs = maybeDocumentMap();
    }
    MemoryRemoteDocumentCache.prototype.addEntry = function (transaction, maybeDocument) {
        this.docs = this.docs.insert(maybeDocument.key, maybeDocument);
        return persistence_promise_PersistencePromise.resolve();
    };
    MemoryRemoteDocumentCache.prototype.removeEntry = function (transaction, documentKey) {
        this.docs = this.docs.remove(documentKey);
        return persistence_promise_PersistencePromise.resolve();
    };
    MemoryRemoteDocumentCache.prototype.getEntry = function (transaction, documentKey) {
        return persistence_promise_PersistencePromise.resolve(this.docs.get(documentKey));
    };
    MemoryRemoteDocumentCache.prototype.getDocumentsMatchingQuery = function (transaction, query) {
        var results = documentMap();
        // Documents are ordered by key, so we can use a prefix scan to narrow down
        // the documents we need to match the query against.
        var prefix = new document_key_DocumentKey(query.path.child(''));
        var iterator = this.docs.getIteratorFrom(prefix);
        while (iterator.hasNext()) {
            var _a = iterator.getNext(), key = _a.key, maybeDoc = _a.value;
            if (!query.path.isPrefixOf(key.path)) {
                break;
            }
            if (maybeDoc instanceof document_Document && query.matches(maybeDoc)) {
                results = results.insert(maybeDoc.key, maybeDoc);
            }
        }
        return persistence_promise_PersistencePromise.resolve(results);
    };
    return MemoryRemoteDocumentCache;
}());


//# sourceMappingURL=memory_remote_document_cache.js.map

// CONCATENATED MODULE: ../firestore/dist/esm/src/local/memory_persistence.js
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





var memory_persistence_LOG_TAG = 'MemoryPersistence';
/**
 * A memory-backed instance of Persistence. Data is stored only in RAM and
 * not persisted across sessions.
 */
var memory_persistence_MemoryPersistence = /** @class */ (function () {
    function MemoryPersistence() {
        /**
         * Note that these are retained here to make it easier to write tests
         * affecting both the in-memory and IndexedDB-backed persistence layers. Tests
         * can create a new LocalStore wrapping this Persistence instance and this
         * will make the in-memory persistence layer behave as if it were actually
         * persisting values.
         */
        this.mutationQueues = {};
        this.remoteDocumentCache = new memory_remote_document_cache_MemoryRemoteDocumentCache();
        this.queryCache = new memory_query_cache_MemoryQueryCache();
        this.started = false;
    }
    MemoryPersistence.prototype.start = function () {
        assert(!this.started, 'MemoryPersistence double-started!');
        this.started = true;
        // No durable state to read on startup.
        return Promise.resolve();
    };
    MemoryPersistence.prototype.shutdown = function () {
        // No durable state to ensure is closed on shutdown.
        assert(this.started, 'MemoryPersistence shutdown without start!');
        this.started = false;
        return Promise.resolve();
    };
    MemoryPersistence.prototype.getMutationQueue = function (user) {
        var queue = this.mutationQueues[user.toKey()];
        if (!queue) {
            queue = new memory_mutation_queue_MemoryMutationQueue();
            this.mutationQueues[user.toKey()] = queue;
        }
        return queue;
    };
    MemoryPersistence.prototype.getQueryCache = function () {
        return this.queryCache;
    };
    MemoryPersistence.prototype.getRemoteDocumentCache = function () {
        return this.remoteDocumentCache;
    };
    MemoryPersistence.prototype.runTransaction = function (action, operation) {
        debug(memory_persistence_LOG_TAG, 'Starting transaction:', action);
        return operation(new MemoryPersistenceTransaction()).toPromise();
    };
    return MemoryPersistence;
}());

/** Dummy class since memory persistence doesn't actually use transactions. */
var MemoryPersistenceTransaction = /** @class */ (function () {
    function MemoryPersistenceTransaction() {
    }
    return MemoryPersistenceTransaction;
}());

//# sourceMappingURL=memory_persistence.js.map

// CONCATENATED MODULE: ../firestore/dist/esm/src/local/no_op_garbage_collector.js
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


/**
 * A garbage collector implementation that does absolutely nothing. It ignores
 * all addGarbageSource and addPotentialGarbageKey messages and and never
 * produces any garbage.
 */
var no_op_garbage_collector_NoOpGarbageCollector = /** @class */ (function () {
    function NoOpGarbageCollector() {
        this.isEager = false;
    }
    NoOpGarbageCollector.prototype.addGarbageSource = function (garbageSource) {
        // Not tracking garbage so don't track sources.
    };
    NoOpGarbageCollector.prototype.removeGarbageSource = function (garbageSource) {
        // Not tracking garbage so don't track sources.
    };
    NoOpGarbageCollector.prototype.addPotentialGarbageKey = function (key) {
        // Not tracking garbage so ignore.
    };
    NoOpGarbageCollector.prototype.collectGarbage = function (txn) {
        return persistence_promise_PersistencePromise.resolve(documentKeySet());
    };
    return NoOpGarbageCollector;
}());


//# sourceMappingURL=no_op_garbage_collector.js.map

// CONCATENATED MODULE: ../firestore/dist/esm/src/util/promise.js
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
var Deferred = /** @class */ (function () {
    function Deferred() {
        var _this = this;
        this.promise = new Promise(function (resolve, reject) {
            _this.resolve = resolve;
            _this.reject = reject;
        });
    }
    return Deferred;
}());

/**
 * Takes an array of values and sequences them using the promise (or value)
 * returned by the supplied callback. The callback for each item is called
 * after the promise is resolved for the previous item.
 * The function returns a promise which is resolved after the promise for
 * the last item is resolved.
 */
function sequence(values, fn, initialValue) {
    var result = Promise.resolve(initialValue);
    values.forEach(function (value) {
        result = result.then(function (lastResult) { return fn(value, lastResult); });
    });
    return result;
}

//# sourceMappingURL=promise.js.map

// CONCATENATED MODULE: ../firestore/dist/esm/src/remote/backoff.js
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


var backoff_LOG_TAG = 'ExponentialBackoff';
/**
 * A helper for running delayed tasks following an exponential backoff curve
 * between attempts.
 *
 * Each delay is made up of a "base" delay which follows the exponential
 * backoff curve, and a +/- 50% "jitter" that is calculated and added to the
 * base delay. This prevents clients from accidentally synchronizing their
 * delays causing spikes of load to the backend.
 */
var backoff_ExponentialBackoff = /** @class */ (function () {
    function ExponentialBackoff(
        /**
         * The initial delay (used as the base delay on the first retry attempt).
         * Note that jitter will still be applied, so the actual delay could be as
         * little as 0.5*initialDelayMs.
         */
        initialDelayMs, 
        /**
         * The multiplier to use to determine the extended base delay after each
         * attempt.
         */
        backoffFactor, 
        /**
         * The maximum base delay after which no further backoff is performed.
         * Note that jitter will still be applied, so the actual delay could be as
         * much as 1.5*maxDelayMs.
         */
        maxDelayMs) {
        this.initialDelayMs = initialDelayMs;
        this.backoffFactor = backoffFactor;
        this.maxDelayMs = maxDelayMs;
        this.reset();
    }
    /**
     * Resets the backoff delay.
     *
     * The very next backoffAndWait() will have no delay. If it is called again
     * (i.e. due to an error), initialDelayMs (plus jitter) will be used, and
     * subsequent ones will increase according to the backoffFactor.
     */
    ExponentialBackoff.prototype.reset = function () {
        this.currentBaseMs = 0;
    };
    /**
     * Resets the backoff delay to the maximum delay (e.g. for use after a
     * RESOURCE_EXHAUSTED error).
     */
    ExponentialBackoff.prototype.resetToMax = function () {
        this.currentBaseMs = this.maxDelayMs;
    };
    /**
     * Returns a promise that resolves after currentDelayMs, and increases the
     * delay for any subsequent attempts.
     */
    ExponentialBackoff.prototype.backoffAndWait = function () {
        var def = new Deferred();
        // First schedule using the current base (which may be 0 and should be
        // honored as such).
        var delayWithJitterMs = this.currentBaseMs + this.jitterDelayMs();
        if (this.currentBaseMs > 0) {
            debug(backoff_LOG_TAG, "Backing off for " + delayWithJitterMs + " ms " +
                ("(base delay: " + this.currentBaseMs + " ms)"));
        }
        setTimeout(function () {
            def.resolve();
        }, delayWithJitterMs);
        // Apply backoff factor to determine next delay and ensure it is within
        // bounds.
        this.currentBaseMs *= this.backoffFactor;
        if (this.currentBaseMs < this.initialDelayMs) {
            this.currentBaseMs = this.initialDelayMs;
        }
        if (this.currentBaseMs > this.maxDelayMs) {
            this.currentBaseMs = this.maxDelayMs;
        }
        return def.promise;
    };
    /** Returns a random value in the range [-currentBaseMs/2, currentBaseMs/2] */
    ExponentialBackoff.prototype.jitterDelayMs = function () {
        return (Math.random() - 0.5) * this.currentBaseMs;
    };
    return ExponentialBackoff;
}());


//# sourceMappingURL=backoff.js.map

// CONCATENATED MODULE: ../firestore/dist/esm/src/remote/persistent_stream.js
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
var persistent_stream___extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var persistent_stream_LOG_TAG = 'PersistentStream';
var PersistentStreamState;
(function (PersistentStreamState) {
    /**
     * The streaming RPC is not running and there's no error condition.
     * Calling `start` will start the stream immediately without backoff.
     * While in this state isStarted will return false.
     */
    PersistentStreamState[PersistentStreamState["Initial"] = 0] = "Initial";
    /**
     * The stream is starting, and is waiting for an auth token to attach to
     * the initial request. While in this state, isStarted will return
     * true but isOpen will return false.
     */
    PersistentStreamState[PersistentStreamState["Auth"] = 1] = "Auth";
    /**
     * The streaming RPC is up and running. Requests and responses can flow
     * freely. Both isStarted and isOpen will return true.
     */
    PersistentStreamState[PersistentStreamState["Open"] = 2] = "Open";
    /**
     * The stream encountered an error. The next start attempt will back off.
     * While in this state isStarted() will return false.
     *
     */
    PersistentStreamState[PersistentStreamState["Error"] = 3] = "Error";
    /**
     * An in-between state after an error where the stream is waiting before
     * re-starting. After
     * waiting is complete, the stream will try to open. While in this
     * state isStarted() will return YES but isOpen will return false.
     */
    PersistentStreamState[PersistentStreamState["Backoff"] = 4] = "Backoff";
    /**
     * The stream has been explicitly stopped; no further events will be emitted.
     */
    PersistentStreamState[PersistentStreamState["Stopped"] = 5] = "Stopped";
})(PersistentStreamState || (PersistentStreamState = {}));
/**
 * Initial backoff time in milliseconds after an error.
 * Set to 1s according to https://cloud.google.com/apis/design/errors.
 */
var BACKOFF_INITIAL_DELAY_MS = 1000;
/** Maximum backoff time in milliseconds */
var BACKOFF_MAX_DELAY_MS = 60 * 1000;
var BACKOFF_FACTOR = 1.5;
/** The time a stream stays open after it is marked idle. */
var IDLE_TIMEOUT_MS = 60 * 1000;
/**
 * A PersistentStream is an abstract base class that represents a streaming RPC
 * to the Firestore backend. It's built on top of the connections own support
 * for streaming RPCs, and adds several critical features for our clients:
 *
 *   - Exponential backoff on failure
 *   - Authentication via CredentialsProvider
 *   - Dispatching all callbacks into the shared worker queue
 *
 * Subclasses of PersistentStream implement serialization of models to and
 * from the JSON representation of the protocol buffers for a specific
 * streaming RPC.
 *
 * ## Starting and Stopping
 *
 * Streaming RPCs are stateful and need to be `start`ed before messages can
 * be sent and received. The PersistentStream will call the onOpen function
 * of the listener once the stream is ready to accept requests.
 *
 * Should a `start` fail, PersistentStream will call the registered
 * onClose with a FirestoreError indicating what went wrong.
 *
 * A PersistentStream can be started and stopped repeatedly.
 *
 * Generic types:
 *  SendType: The type of the outgoing message of the underlying
 *    connection stream
 *  ReceiveType: The type of the incoming message of the underlying
 *    connection stream
 *  ListenerType: The type of the listener that will be used for callbacks
 */
var persistent_stream_PersistentStream = /** @class */ (function () {
    function PersistentStream(queue, connection, credentialsProvider, 
        // Used for faster retries in testing
        initialBackoffDelay) {
        this.queue = queue;
        this.connection = connection;
        this.credentialsProvider = credentialsProvider;
        this.idle = false;
        this.stream = null;
        this.listener = null;
        this.backoff = new backoff_ExponentialBackoff(initialBackoffDelay ? initialBackoffDelay : BACKOFF_INITIAL_DELAY_MS, BACKOFF_FACTOR, BACKOFF_MAX_DELAY_MS);
        this.state = PersistentStreamState.Initial;
    }
    /**
     * Returns true if `start` has been called and no error has occurred. True
     * indicates the stream is open or in the process of opening (which
     * encompasses respecting backoff, getting auth tokens, and starting the
     * actual RPC). Use `isOpen` to determine if the stream is open and ready for
     * outbound requests.
     */
    PersistentStream.prototype.isStarted = function () {
        return (this.state === PersistentStreamState.Backoff ||
            this.state === PersistentStreamState.Auth ||
            this.state === PersistentStreamState.Open);
    };
    /**
     * Returns true if the underlying RPC is open (the openHandler has been
     * called) and the stream is ready for outbound requests.
     */
    PersistentStream.prototype.isOpen = function () {
        return this.state === PersistentStreamState.Open;
    };
    /**
     * Starts the RPC. Only allowed if isStarted returns false. The stream is
     * not immediately ready for use: onOpen will be invoked when the RPC is ready
     * for outbound requests, at which point isOpen will return true.
     *
     *  When start returns, isStarted will return true.
     */
    PersistentStream.prototype.start = function (listener) {
        if (this.state === PersistentStreamState.Error) {
            this.performBackoff(listener);
            return;
        }
        assert(this.state === PersistentStreamState.Initial, 'Already started');
        this.listener = listener;
        this.auth();
    };
    /**
     * Stops the RPC. This call is idempotent and allowed regardless of the
     * current isStarted state.
     *
     * When stop returns, isStarted and isOpen will both return false.
     */
    PersistentStream.prototype.stop = function () {
        if (this.isStarted()) {
            this.close(PersistentStreamState.Stopped);
        }
    };
    /**
     * After an error the stream will usually back off on the next attempt to
     * start it. If the error warrants an immediate restart of the stream, the
     * sender can use this to indicate that the receiver should not back off.
     *
     * Each error will call the onClose function. That function can decide to
     * inhibit backoff if required.
     */
    PersistentStream.prototype.inhibitBackoff = function () {
        assert(!this.isStarted(), 'Can only inhibit backoff in a stopped state');
        this.state = PersistentStreamState.Initial;
        this.backoff.reset();
    };
    /**
     * Initializes the idle timer. If no write takes place within one minute, the
     * WebChannel stream will be closed.
     */
    PersistentStream.prototype.markIdle = function () {
        var _this = this;
        this.idle = true;
        this.queue
            .schedule(function () {
            return _this.handleIdleCloseTimer();
        }, IDLE_TIMEOUT_MS)
            .catch(function (err) {
            // When the AsyncQueue gets drained during testing, pending Promises
            // (including these idle checks) will get rejected. We special-case
            // these cancelled idle checks to make sure that these specific Promise
            // rejections are not considered unhandled.
            assert(err.code === Code.CANCELLED, "Received unexpected error in idle timeout closure. Expected CANCELLED, but was: " + err);
        });
    };
    /** Sends a message to the underlying stream. */
    PersistentStream.prototype.sendRequest = function (msg) {
        this.cancelIdleCheck();
        this.stream.send(msg);
    };
    /** Called by the idle timer when the stream should close due to inactivity. */
    PersistentStream.prototype.handleIdleCloseTimer = function () {
        if (this.isOpen() && this.idle) {
            // When timing out an idle stream there's no reason to force the stream into backoff when
            // it restarts so set the stream state to Initial instead of Error.
            return this.close(PersistentStreamState.Initial);
        }
        return Promise.resolve();
    };
    /** Marks the stream as active again. */
    PersistentStream.prototype.cancelIdleCheck = function () {
        this.idle = false;
    };
    /**
     * Closes the stream and cleans up as necessary:
     *
     * * closes the underlying GRPC stream;
     * * calls the onClose handler with the given 'error';
     * * sets internal stream state to 'finalState';
     * * adjusts the backoff timer based on the error
     *
     * A new stream can be opened by calling `start` unless `finalState` is set to
     * `PersistentStreamState.Stopped`.
     *
     * @param finalState the intended state of the stream after closing.
     * @param error the error the connection was closed with.
     */
    PersistentStream.prototype.close = function (finalState, error) {
        assert(finalState == PersistentStreamState.Error || isNullOrUndefined(error), "Can't provide an error when not in an error state.");
        this.cancelIdleCheck();
        if (finalState != PersistentStreamState.Error) {
            // If this is an intentional close ensure we don't delay our next connection attempt.
            this.backoff.reset();
        }
        else if (error && error.code === Code.RESOURCE_EXHAUSTED) {
            debug(persistent_stream_LOG_TAG, 'Using maximum backoff delay to prevent overloading the backend.');
            this.backoff.resetToMax();
        }
        // Clean up the underlying stream because we are no longer interested in events.
        if (this.stream !== null) {
            this.tearDown();
            this.stream.close();
            this.stream = null;
        }
        // This state must be assigned before calling onClose() to allow the callback to
        // inhibit backoff or otherwise manipulate the state in its non-started state.
        this.state = finalState;
        var listener = this.listener;
        // Clear the listener to avoid bleeding of events from the underlying streams.
        this.listener = null;
        // If the caller explicitly requested a stream stop, don't notify them of a closing stream (it
        // could trigger undesirable recovery logic, etc.).
        if (finalState != PersistentStreamState.Stopped) {
            return listener.onClose(error);
        }
        else {
            return Promise.resolve();
        }
    };
    /**
     * Can be overridden to perform additional cleanup before the stream is closed.
     * Calling super.tearDown() is not required.
     */
    PersistentStream.prototype.tearDown = function () { };
    PersistentStream.prototype.auth = function () {
        var _this = this;
        assert(this.state === PersistentStreamState.Initial, 'Must be in initial state to auth');
        this.state = PersistentStreamState.Auth;
        this.credentialsProvider.getToken(/*forceRefresh=*/ false).then(function (token) {
            // Normally we'd have to schedule the callback on the AsyncQueue.
            // However, the following calls are safe to be called outside the
            // AsyncQueue since they don't chain asynchronous calls
            _this.startStream(token);
        }, function (error) {
            _this.queue.schedule(function () {
                if (_this.state !== PersistentStreamState.Stopped) {
                    // Stream can be stopped while waiting for authorization.
                    var rpcError = new FirestoreError(Code.UNKNOWN, 'Fetching auth token failed: ' + error.message);
                    return _this.handleStreamClose(rpcError);
                }
                else {
                    return Promise.resolve();
                }
            });
        });
    };
    PersistentStream.prototype.startStream = function (token) {
        var _this = this;
        if (this.state === PersistentStreamState.Stopped) {
            // Stream can be stopped while waiting for authorization.
            return;
        }
        assert(this.state === PersistentStreamState.Auth, 'Trying to start stream in a non-auth state');
        // Helper function to dispatch to AsyncQueue and make sure that any
        // close will seem instantaneous and events are prevented from being
        // raised after the close call
        var dispatchIfStillActive = function (stream, fn) {
            _this.queue.schedule(function () {
                // Only raise events if the stream instance has not changed
                if (_this.stream === stream) {
                    return fn();
                }
                else {
                    return Promise.resolve();
                }
            });
        };
        // Only start stream if listener has not changed
        if (this.listener !== null) {
            var currentStream_1 = this.startRpc(token);
            this.stream = currentStream_1;
            this.stream.onOpen(function () {
                dispatchIfStillActive(currentStream_1, function () {
                    assert(_this.state === PersistentStreamState.Auth, 'Expected stream to be in state auth, but was ' + _this.state);
                    _this.state = PersistentStreamState.Open;
                    return _this.listener.onOpen();
                });
            });
            this.stream.onClose(function (error) {
                dispatchIfStillActive(currentStream_1, function () {
                    return _this.handleStreamClose(error);
                });
            });
            this.stream.onMessage(function (msg) {
                dispatchIfStillActive(currentStream_1, function () {
                    return _this.onMessage(msg);
                });
            });
        }
    };
    PersistentStream.prototype.performBackoff = function (listener) {
        var _this = this;
        assert(this.state === PersistentStreamState.Error, 'Should only perform backoff in an error case');
        this.state = PersistentStreamState.Backoff;
        this.backoff.backoffAndWait().then(function () {
            // Backoff does not run on the AsyncQueue, so we need to reschedule to
            // make sure the queue blocks
            _this.queue.schedule(function () {
                if (_this.state === PersistentStreamState.Stopped) {
                    // Stream can be stopped while waiting for backoff to complete.
                    return Promise.resolve();
                }
                _this.state = PersistentStreamState.Initial;
                _this.start(listener);
                assert(_this.isStarted(), 'PersistentStream should have started');
                return Promise.resolve();
            });
        });
    };
    PersistentStream.prototype.handleStreamClose = function (error) {
        assert(this.isStarted(), "Can't handle server close on non-started stream");
        debug(persistent_stream_LOG_TAG, "close with error: " + error);
        this.stream = null;
        // In theory the stream could close cleanly, however, in our current model
        // we never expect this to happen because if we stop a stream ourselves,
        // this callback will never be called. To prevent cases where we retry
        // without a backoff accidentally, we set the stream to error in all cases.
        return this.close(PersistentStreamState.Error, error);
    };
    return PersistentStream;
}());

/**
 * A PersistentStream that implements the Listen RPC.
 *
 * Once the Listen stream has called the openHandler, any number of listen and
 * unlisten calls calls can be sent to control what changes will be sent from
 * the server for ListenResponses.
 */
var PersistentListenStream = /** @class */ (function (_super) {
    persistent_stream___extends(PersistentListenStream, _super);
    function PersistentListenStream(databaseInfo, queue, connection, credentials, serializer, initialBackoffDelay) {
        var _this = _super.call(this, queue, connection, credentials, initialBackoffDelay) || this;
        _this.databaseInfo = databaseInfo;
        _this.serializer = serializer;
        return _this;
    }
    PersistentListenStream.prototype.startRpc = function (token) {
        return this.connection.openStream('Listen', token);
    };
    PersistentListenStream.prototype.onMessage = function (watchChangeProto) {
        // A successful response means the stream is healthy
        this.backoff.reset();
        var watchChange = this.serializer.fromWatchChange(watchChangeProto);
        var snapshot = this.serializer.versionFromListenResponse(watchChangeProto);
        return this.listener.onWatchChange(watchChange, snapshot);
    };
    /**
     * Registers interest in the results of the given query. If the query
     * includes a resumeToken it will be included in the request. Results that
     * affect the query will be streamed back as WatchChange messages that
     * reference the targetId.
     */
    PersistentListenStream.prototype.watch = function (queryData) {
        var request = {};
        request.database = this.serializer.encodedDatabaseId;
        request.addTarget = this.serializer.toTarget(queryData);
        var labels = this.serializer.toListenRequestLabels(queryData);
        if (labels) {
            request.labels = labels;
        }
        this.sendRequest(request);
    };
    /**
     * Unregisters interest in the results of the query associated with the
     * given targetId.
     */
    PersistentListenStream.prototype.unwatch = function (targetId) {
        var request = {};
        request.database = this.serializer.encodedDatabaseId;
        request.removeTarget = targetId;
        this.sendRequest(request);
    };
    return PersistentListenStream;
}(persistent_stream_PersistentStream));

/**
 * A Stream that implements the Write RPC.
 *
 * The Write RPC requires the caller to maintain special streamToken
 * state in between calls, to help the server understand which responses the
 * client has processed by the time the next request is made. Every response
 * will contain a streamToken; this value must be passed to the next
 * request.
 *
 * After calling start() on this stream, the next request must be a handshake,
 * containing whatever streamToken is on hand. Once a response to this
 * request is received, all pending mutations may be submitted. When
 * submitting multiple batches of mutations at the same time, it's
 * okay to use the same streamToken for the calls to writeMutations.
 *
 * TODO(b/33271235): Use proto types
 */
var persistent_stream_PersistentWriteStream = /** @class */ (function (_super) {
    persistent_stream___extends(PersistentWriteStream, _super);
    function PersistentWriteStream(databaseInfo, queue, connection, credentials, serializer, initialBackoffDelay) {
        var _this = _super.call(this, queue, connection, credentials, initialBackoffDelay) || this;
        _this.databaseInfo = databaseInfo;
        _this.serializer = serializer;
        _this.handshakeComplete_ = false;
        return _this;
    }
    Object.defineProperty(PersistentWriteStream.prototype, "handshakeComplete", {
        /**
         * Tracks whether or not a handshake has been successfully exchanged and
         * the stream is ready to accept mutations.
         */
        get: function () {
            return this.handshakeComplete_;
        },
        enumerable: true,
        configurable: true
    });
    // Override of PersistentStream.start
    PersistentWriteStream.prototype.start = function (listener) {
        this.handshakeComplete_ = false;
        _super.prototype.start.call(this, listener);
    };
    PersistentWriteStream.prototype.tearDown = function () {
        if (this.handshakeComplete_) {
            this.writeMutations([]);
        }
    };
    PersistentWriteStream.prototype.startRpc = function (token) {
        return this.connection.openStream('Write', token);
    };
    PersistentWriteStream.prototype.onMessage = function (responseProto) {
        // Always capture the last stream token.
        assert(!!responseProto.streamToken, 'Got a write response without a stream token');
        this.lastStreamToken = responseProto.streamToken;
        if (!this.handshakeComplete_) {
            // The first response is always the handshake response
            assert(!responseProto.writeResults || responseProto.writeResults.length === 0, 'Got mutation results for handshake');
            this.handshakeComplete_ = true;
            return this.listener.onHandshakeComplete();
        }
        else {
            // A successful first write response means the stream is healthy,
            // Note, that we could consider a successful handshake healthy, however,
            // the write itself might be causing an error we want to back off from.
            this.backoff.reset();
            var results = this.serializer.fromWriteResults(responseProto.writeResults);
            var commitVersion = this.serializer.fromVersion(responseProto.commitTime);
            return this.listener.onMutationResult(commitVersion, results);
        }
    };
    /**
     * Sends an initial streamToken to the server, performing the handshake
     * required to make the StreamingWrite RPC work. Subsequent
     * calls should wait until onHandshakeComplete was called.
     */
    PersistentWriteStream.prototype.writeHandshake = function () {
        assert(this.isOpen(), 'Writing handshake requires an opened stream');
        assert(!this.handshakeComplete_, 'Handshake already completed');
        // TODO(dimond): Support stream resumption. We intentionally do not set the
        // stream token on the handshake, ignoring any stream token we might have.
        var request = {};
        request.database = this.serializer.encodedDatabaseId;
        this.sendRequest(request);
    };
    /** Sends a group of mutations to the Firestore backend to apply. */
    PersistentWriteStream.prototype.writeMutations = function (mutations) {
        var _this = this;
        assert(this.isOpen(), 'Writing mutations requires an opened stream');
        assert(this.handshakeComplete_, 'Handshake must be complete before writing mutations');
        assert(this.lastStreamToken.length > 0, 'Trying to write mutation without a token');
        var request = {
            // Protos are typed with string, but we support UInt8Array on Node
            // tslint:disable-next-line:no-any
            streamToken: this.lastStreamToken,
            writes: mutations.map(function (mutation) { return _this.serializer.toMutation(mutation); })
        };
        this.sendRequest(request);
    };
    return PersistentWriteStream;
}(persistent_stream_PersistentStream));


//# sourceMappingURL=persistent_stream.js.map

// CONCATENATED MODULE: ../firestore/dist/esm/src/remote/datastore.js
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



/**
 * Datastore is a wrapper around the external Google Cloud Datastore grpc API,
 * which provides an interface that is more convenient for the rest of the
 * client SDK architecture to consume.
 */
var datastore_Datastore = /** @class */ (function () {
    function Datastore(databaseInfo, queue, connection, credentials, serializer, initialBackoffDelay) {
        this.databaseInfo = databaseInfo;
        this.queue = queue;
        this.connection = connection;
        this.credentials = credentials;
        this.serializer = serializer;
        this.initialBackoffDelay = initialBackoffDelay;
    }
    Datastore.prototype.newPersistentWriteStream = function () {
        return new persistent_stream_PersistentWriteStream(this.databaseInfo, this.queue, this.connection, this.credentials, this.serializer, this.initialBackoffDelay);
    };
    Datastore.prototype.newPersistentWatchStream = function () {
        return new PersistentListenStream(this.databaseInfo, this.queue, this.connection, this.credentials, this.serializer, this.initialBackoffDelay);
    };
    Datastore.prototype.commit = function (mutations) {
        var _this = this;
        var params = {
            writes: mutations.map(function (m) { return _this.serializer.toMutation(m); })
        };
        return this.invokeRPC('commit', params).then(function (response) {
            return _this.serializer.fromWriteResults(response.writeResults);
        });
    };
    Datastore.prototype.lookup = function (keys) {
        var _this = this;
        var params = {
            documents: keys.map(function (k) { return _this.serializer.toName(k); })
        };
        return this.invokeRPC('batchGet', params).then(function (response) {
            var docs = maybeDocumentMap();
            response.forEach(function (proto) {
                var doc = _this.serializer.fromMaybeDocument(proto);
                docs = docs.insert(doc.key, doc);
            });
            var result = [];
            keys.forEach(function (key) {
                var doc = docs.get(key);
                assert(!!doc, 'Missing entity in write response for ' + key);
                result.push(doc);
            });
            return result;
        });
    };
    /** Gets an auth token and invokes the provided RPC. */
    Datastore.prototype.invokeRPC = function (rpcName, request) {
        var _this = this;
        // TODO(mikelehen): Retry (with backoff) on token failures?
        return this.credentials.getToken(/*forceRefresh=*/ false).then(function (token) {
            return _this.connection.invoke(rpcName, request, token);
        });
    };
    return Datastore;
}());


//# sourceMappingURL=datastore.js.map

// CONCATENATED MODULE: ../firestore/dist/esm/src/core/transaction.js
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





/**
 * Internal transaction object responsible for accumulating the mutations to
 * perform and the base versions for any documents read.
 */
var transaction_Transaction = /** @class */ (function () {
    function Transaction(datastore) {
        this.datastore = datastore;
        // The version of each document that was read during this transaction.
        this.readVersions = documentVersionMap();
        this.mutations = [];
        this.committed = false;
    }
    Transaction.prototype.recordVersion = function (doc) {
        var docVersion = doc.version;
        if (doc instanceof document_NoDocument) {
            // For deleted docs, we must use baseVersion 0 when we overwrite them.
            docVersion = snapshot_version_SnapshotVersion.forDeletedDoc();
        }
        var existingVersion = this.readVersions.get(doc.key);
        if (existingVersion !== null) {
            if (!docVersion.equals(existingVersion)) {
                // This transaction will fail no matter what.
                throw new FirestoreError(Code.ABORTED, 'Document version changed between two reads.');
            }
        }
        else {
            this.readVersions = this.readVersions.insert(doc.key, docVersion);
        }
    };
    Transaction.prototype.lookup = function (keys) {
        var _this = this;
        if (this.committed) {
            return Promise.reject('Transaction has already completed.');
        }
        if (this.mutations.length > 0) {
            return Promise.reject('Transactions lookups are invalid after writes.');
        }
        return this.datastore.lookup(keys).then(function (docs) {
            docs.forEach(function (doc) { return _this.recordVersion(doc); });
            return docs;
        });
    };
    Transaction.prototype.write = function (mutations) {
        if (this.committed) {
            throw new FirestoreError(Code.FAILED_PRECONDITION, 'Transaction has already completed.');
        }
        this.mutations = this.mutations.concat(mutations);
    };
    /**
     * Returns the version of this document when it was read in this transaction,
     * as a precondition, or no precondition if it was not read.
     */
    Transaction.prototype.precondition = function (key) {
        var version = this.readVersions.get(key);
        if (version) {
            return mutation_Precondition.updateTime(version);
        }
        else {
            return mutation_Precondition.NONE;
        }
    };
    /**
     * Returns the precondition for a document if the operation is an update.
     */
    Transaction.prototype.preconditionForUpdate = function (key) {
        var version = this.readVersions.get(key);
        if (version && version.equals(snapshot_version_SnapshotVersion.forDeletedDoc())) {
            // The document doesn't exist, so fail the transaction.
            throw new FirestoreError(Code.FAILED_PRECONDITION, "Can't update a document that doesn't exist.");
        }
        else if (version) {
            // Document exists, base precondition on document update time.
            return mutation_Precondition.updateTime(version);
        }
        else {
            // Document was not read, so we just use the preconditions for a blind
            // update.
            return mutation_Precondition.exists(true);
        }
    };
    Transaction.prototype.set = function (key, data) {
        this.write(data.toMutations(key, this.precondition(key)));
    };
    Transaction.prototype.update = function (key, data) {
        this.write(data.toMutations(key, this.preconditionForUpdate(key)));
    };
    Transaction.prototype.delete = function (key) {
        this.write([new mutation_DeleteMutation(key, this.precondition(key))]);
        // Since the delete will be applied before all following writes, we need to
        // ensure that the precondition for the next write will be exists: false.
        this.readVersions = this.readVersions.insert(key, snapshot_version_SnapshotVersion.forDeletedDoc());
    };
    Transaction.prototype.commit = function () {
        var _this = this;
        var unwritten = this.readVersions;
        // For each mutation, note that the doc was written.
        this.mutations.forEach(function (mutation) {
            unwritten = unwritten.remove(mutation.key);
        });
        if (!unwritten.isEmpty()) {
            return Promise.reject(Error('Every document read in a transaction must also be written.'));
        }
        return this.datastore.commit(this.mutations).then(function () {
            _this.committed = true;
        });
    };
    return Transaction;
}());


//# sourceMappingURL=transaction.js.map

// CONCATENATED MODULE: ../firestore/dist/esm/src/remote/remote_store.js
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















var remote_store_LOG_TAG = 'RemoteStore';
// TODO(b/35853402): Negotiate this with the stream.
var MAX_PENDING_WRITES = 10;
// The RemoteStore notifies an onlineStateHandler with OnlineState.Failed if we
// fail to connect to the backend. This subsequently triggers get() requests to
// fail or use cached data, etc. Unfortunately, our connections have
// historically been subject to various transient failures. So we wait for
// multiple failures before notifying the onlineStateHandler.
var ONLINE_ATTEMPTS_BEFORE_FAILURE = 2;
/**
 * RemoteStore - An interface to remotely stored data, basically providing a
 * wrapper around the Datastore that is more reliable for the rest of the
 * system.
 *
 * RemoteStore is responsible for maintaining the connection to the server.
 * - maintaining a list of active listens.
 * - reconnecting when the connection is dropped.
 * - resuming all the active listens on reconnect.
 *
 * RemoteStore handles all incoming events from the Datastore.
 * - listening to the watch stream and repackaging the events as RemoteEvents
 * - notifying SyncEngine of any changes to the active listens.
 *
 * RemoteStore takes writes from other components and handles them reliably.
 * - pulling pending mutations from LocalStore and sending them to Datastore.
 * - retrying mutations that failed because of network problems.
 * - acking mutations to the SyncEngine once they are accepted or rejected.
 */
var remote_store_RemoteStore = /** @class */ (function () {
    function RemoteStore(databaseInfo, asyncQueue, 
        /**
         * The local store, used to fill the write pipeline with outbound
         * mutations and resolve existence filter mismatches.
         */
        localStore, 
        /** The client-side proxy for interacting with the backend. */
        datastore, onlineStateHandler) {
        this.databaseInfo = databaseInfo;
        this.asyncQueue = asyncQueue;
        this.localStore = localStore;
        this.datastore = datastore;
        this.onlineStateHandler = onlineStateHandler;
        this.pendingWrites = [];
        this.lastBatchSeen = BATCHID_UNKNOWN;
        /**
         * A mapping of watched targets that the client cares about tracking and the
         * user has explicitly called a 'listen' for this target.
         *
         * These targets may or may not have been sent to or acknowledged by the
         * server. On re-establishing the listen stream, these targets should be sent
         * to the server. The targets removed with unlistens are removed eagerly
         * without waiting for confirmation from the listen stream.
         */
        this.listenTargets = {};
        /**
         * A mapping of targetId to pending acks needed.
         *
         * If a targetId is present in this map, then we're waiting for watch to
         * acknowledge a removal or addition of the target. If a target is not in this
         * mapping, and it's in the listenTargets map, then we consider the target to
         * be active.
         *
         * We increment the count here every time we issue a request over the stream
         * to watch or unwatch. We then decrement the count every time we get a target
         * added or target removed message from the server. Once the count is equal to
         * 0 we know that the client and server are in the same state (once this state
         * is reached the targetId is removed from the map to free the memory).
         */
        this.pendingTargetResponses = {};
        this.accumulatedWatchChanges = [];
        this.watchStream = null;
        this.writeStream = null;
        /**
         * The online state of the watch stream. The state is set to healthy if and
         * only if there are messages received by the backend.
         */
        this.watchStreamOnlineState = OnlineState.Unknown;
        /** A count of consecutive failures to open the stream. */
        this.watchStreamFailures = 0;
    }
    /**
     * Starts up the remote store, creating streams, restoring state from
     * LocalStore, etc.
     */
    RemoteStore.prototype.start = function () {
        return this.enableNetwork();
    };
    RemoteStore.prototype.setOnlineStateToHealthy = function () {
        this.updateAndBroadcastOnlineState(OnlineState.Healthy);
    };
    RemoteStore.prototype.setOnlineStateToUnknown = function () {
        // The state is set to unknown when a healthy stream is closed (e.g. due to
        // a token timeout) or when we have no active listens and therefore there's
        // no need to start the stream. Assuming there is (possibly in the future)
        // an active listen, then we will eventually move to state Online or Failed,
        // but we always want to make at least ONLINE_ATTEMPTS_BEFORE_FAILURE
        // attempts before failing, so we reset the count here.
        this.watchStreamFailures = 0;
        this.updateAndBroadcastOnlineState(OnlineState.Unknown);
    };
    RemoteStore.prototype.updateOnlineStateAfterFailure = function () {
        // The first failure after we are successfully connected moves us to the
        // 'Unknown' state. We then may make multiple attempts (based on
        // ONLINE_ATTEMPTS_BEFORE_FAILURE) before we actually report failure.
        if (this.watchStreamOnlineState === OnlineState.Healthy) {
            this.setOnlineStateToUnknown();
        }
        else {
            this.watchStreamFailures++;
            if (this.watchStreamFailures >= ONLINE_ATTEMPTS_BEFORE_FAILURE) {
                this.updateAndBroadcastOnlineState(OnlineState.Failed);
            }
        }
    };
    RemoteStore.prototype.updateAndBroadcastOnlineState = function (onlineState) {
        var didChange = this.watchStreamOnlineState !== onlineState;
        this.watchStreamOnlineState = onlineState;
        if (didChange) {
            this.onlineStateHandler(onlineState);
        }
    };
    RemoteStore.prototype.isNetworkEnabled = function () {
        assert((this.watchStream == null) == (this.writeStream == null), 'WatchStream and WriteStream should both be null or non-null');
        return this.watchStream != null;
    };
    /** Re-enables the network. Only to be called as the counterpart to disableNetwork(). */
    RemoteStore.prototype.enableNetwork = function () {
        var _this = this;
        assert(this.watchStream == null, 'enableNetwork() called with non-null watchStream.');
        assert(this.writeStream == null, 'enableNetwork() called with non-null writeStream.');
        // Create new streams (but note they're not started yet).
        this.watchStream = this.datastore.newPersistentWatchStream();
        this.writeStream = this.datastore.newPersistentWriteStream();
        // Load any saved stream token from persistent storage
        return this.localStore.getLastStreamToken().then(function (token) {
            _this.writeStream.lastStreamToken = token;
            if (_this.shouldStartWatchStream()) {
                _this.startWatchStream();
            }
            _this.updateAndBroadcastOnlineState(OnlineState.Unknown);
            return _this.fillWritePipeline(); // This may start the writeStream.
        });
    };
    /** Temporarily disables the network. The network can be re-enabled using enableNetwork(). */
    RemoteStore.prototype.disableNetwork = function () {
        this.updateAndBroadcastOnlineState(OnlineState.Failed);
        // NOTE: We're guaranteed not to get any further events from these streams (not even a close
        // event).
        this.watchStream.stop();
        this.writeStream.stop();
        this.cleanUpWatchStreamState();
        this.cleanUpWriteStreamState();
        this.writeStream = null;
        this.watchStream = null;
        return Promise.resolve();
    };
    RemoteStore.prototype.shutdown = function () {
        debug(remote_store_LOG_TAG, 'RemoteStore shutting down.');
        this.disableNetwork();
        return Promise.resolve(undefined);
    };
    /** Starts new listen for the given query. Uses resume token if provided */
    RemoteStore.prototype.listen = function (queryData) {
        assert(!contains(this.listenTargets, queryData.targetId), 'listen called with duplicate targetId!');
        // Mark this as something the client is currently listening for.
        this.listenTargets[queryData.targetId] = queryData;
        if (this.shouldStartWatchStream()) {
            // The listen will be sent in onWatchStreamOpen
            this.startWatchStream();
        }
        else if (this.isNetworkEnabled() && this.watchStream.isOpen()) {
            this.sendWatchRequest(queryData);
        }
    };
    /** Removes the listen from server */
    RemoteStore.prototype.unlisten = function (targetId) {
        assert(contains(this.listenTargets, targetId), 'unlisten called without assigned target ID!');
        var queryData = this.listenTargets[targetId];
        delete this.listenTargets[targetId];
        if (this.isNetworkEnabled() && this.watchStream.isOpen()) {
            this.sendUnwatchRequest(targetId);
            if (isEmpty(this.listenTargets)) {
                this.watchStream.markIdle();
            }
        }
    };
    /**
     * We need to increment the the expected number of pending responses we're due
     * from watch so we wait for the ack to process any messages from this target.
     */
    RemoteStore.prototype.sendWatchRequest = function (queryData) {
        this.recordPendingTargetRequest(queryData.targetId);
        this.watchStream.watch(queryData);
    };
    /**
     * We need to increment the expected number of pending responses we're due
     * from watch so we wait for the removal on the server before we process any
     * messages from this target.
     */
    RemoteStore.prototype.sendUnwatchRequest = function (targetId) {
        this.recordPendingTargetRequest(targetId);
        this.watchStream.unwatch(targetId);
    };
    /**
     * Increment the mapping of how many acks are needed from watch before we can
     * consider the server to be 'in-sync' with the client's active targets.
     */
    RemoteStore.prototype.recordPendingTargetRequest = function (targetId) {
        // For each request we get we need to record we need a response for it.
        this.pendingTargetResponses[targetId] =
            (this.pendingTargetResponses[targetId] || 0) + 1;
    };
    RemoteStore.prototype.startWatchStream = function () {
        assert(this.shouldStartWatchStream(), 'startWriteStream() called when shouldStartWatchStream() is false.');
        this.watchStream.start({
            onOpen: this.onWatchStreamOpen.bind(this),
            onClose: this.onWatchStreamClose.bind(this),
            onWatchChange: this.onWatchStreamChange.bind(this)
        });
    };
    /**
     * Returns whether the watch stream should be started because there are
     * active targets trying to be listened too
     */
    RemoteStore.prototype.shouldStartWatchStream = function () {
        return (this.isNetworkEnabled() &&
            !this.watchStream.isStarted() &&
            !isEmpty(this.listenTargets));
    };
    RemoteStore.prototype.cleanUpWatchStreamState = function () {
        // If the connection is closed then we'll never get a snapshot version for
        // the accumulated changes and so we'll never be able to complete the batch.
        // When we start up again the server is going to resend these changes
        // anyway, so just toss the accumulated state.
        this.accumulatedWatchChanges = [];
        this.pendingTargetResponses = {};
    };
    RemoteStore.prototype.onWatchStreamOpen = function () {
        var _this = this;
        // TODO(b/35852690): close the stream again (with some timeout?) if no watch
        // targets are active
        forEachNumber(this.listenTargets, function (targetId, queryData) {
            _this.sendWatchRequest(queryData);
        });
        return Promise.resolve();
    };
    RemoteStore.prototype.onWatchStreamClose = function (error) {
        assert(this.isNetworkEnabled(), 'onWatchStreamClose() should only be called when the network is enabled');
        this.cleanUpWatchStreamState();
        // If there was an error, retry the connection.
        if (this.shouldStartWatchStream()) {
            this.updateOnlineStateAfterFailure();
            this.startWatchStream();
        }
        else {
            // No need to restart watch stream because there are no active targets.
            // The online state is set to unknown because there is no active attempt
            // at establishing a connection
            this.setOnlineStateToUnknown();
        }
        return Promise.resolve();
    };
    RemoteStore.prototype.onWatchStreamChange = function (watchChange, snapshotVersion) {
        // Mark the connection as healthy because we got a message from the server
        this.setOnlineStateToHealthy();
        if (watchChange instanceof watch_change_WatchTargetChange &&
            watchChange.state === WatchTargetChangeState.Removed &&
            watchChange.cause) {
            // There was an error on a target, don't wait for a consistent snapshot
            // to raise events
            return this.handleTargetError(watchChange);
        }
        // Accumulate watch changes but don't process them if there's no
        // snapshotVersion or it's older than a previous snapshot we've processed
        // (can happen after we resume a target using a resume token).
        this.accumulatedWatchChanges.push(watchChange);
        if (!snapshotVersion.equals(snapshot_version_SnapshotVersion.MIN) &&
            snapshotVersion.compareTo(this.localStore.getLastRemoteSnapshotVersion()) >= 0) {
            var changes = this.accumulatedWatchChanges;
            this.accumulatedWatchChanges = [];
            return this.handleWatchChangeBatch(snapshotVersion, changes);
        }
        else {
            return Promise.resolve();
        }
    };
    /**
     * Takes a batch of changes from the Datastore, repackages them as a
     * RemoteEvent, and passes that on to the listener, which is typically the
     * SyncEngine.
     */
    RemoteStore.prototype.handleWatchChangeBatch = function (snapshotVersion, changes) {
        var _this = this;
        var aggregator = new watch_change_WatchChangeAggregator(snapshotVersion, this.listenTargets, this.pendingTargetResponses);
        aggregator.addChanges(changes);
        var remoteEvent = aggregator.createRemoteEvent();
        // Get the new response counts from the aggregator
        this.pendingTargetResponses = aggregator.pendingTargetResponses;
        var promises = [];
        // Handle existence filters and existence filter mismatches.
        forEachNumber(aggregator.existenceFilters, function (targetId, filter) {
            var queryData = _this.listenTargets[targetId];
            if (!queryData) {
                // A watched target might have been removed already.
                return;
            }
            var query = queryData.query;
            if (query.isDocumentQuery()) {
                if (filter.count === 0) {
                    // The existence filter told us the document does not exist.
                    // We need to deduce that this document does not exist and apply
                    // a deleted document to our updates. Without applying a deleted
                    // document there might be another query that will raise this
                    // document as part of a snapshot until it is resolved,
                    // essentially exposing inconsistency between queries.
                    var key = new document_key_DocumentKey(query.path);
                    var deletedDoc = new document_NoDocument(key, snapshotVersion);
                    remoteEvent.addDocumentUpdate(deletedDoc);
                }
                else {
                    assert(filter.count === 1, 'Single document existence filter with count: ' + filter.count);
                }
            }
            else {
                // Not a document query.
                var promise = _this.localStore
                    .remoteDocumentKeys(targetId)
                    .then(function (trackedRemote) {
                    if (remoteEvent.targetChanges[targetId]) {
                        var mapping = remoteEvent.targetChanges[targetId].mapping;
                        if (mapping !== null) {
                            if (mapping instanceof UpdateMapping) {
                                trackedRemote = mapping.applyToKeySet(trackedRemote);
                            }
                            else {
                                assert(mapping instanceof ResetMapping, 'Expected either reset or update mapping but got something else: ' +
                                    mapping);
                                trackedRemote = mapping.documents;
                            }
                        }
                    }
                    if (trackedRemote.size !== filter.count) {
                        // Existence filter mismatch, resetting mapping.
                        // Make sure the mismatch is exposed in the remote event.
                        remoteEvent.handleExistenceFilterMismatch(targetId);
                        // Clear the resume token for the query, since we're in a
                        // known mismatch state.
                        var newQueryData = new query_data_QueryData(query, targetId, queryData.purpose);
                        _this.listenTargets[targetId] = newQueryData;
                        // Cause a hard reset by unwatching and rewatching
                        // immediately, but deliberately don't send a resume token
                        // so that we get a full update.
                        // Make sure we expect that this acks are going to happen.
                        _this.sendUnwatchRequest(targetId);
                        // Mark the query we send as being on behalf of an existence
                        // filter mismatch, but don't actually retain that in
                        // listenTargets. This ensures that we flag the first
                        // re-listen this way without impacting future listens of
                        // this target (that might happen e.g. on reconnect).
                        var requestQueryData = new query_data_QueryData(query, targetId, QueryPurpose.ExistenceFilterMismatch);
                        _this.sendWatchRequest(requestQueryData);
                    }
                });
                promises.push(promise);
            }
        });
        return Promise.all(promises).then(function () {
            // Update in-memory resume tokens. LocalStore will update the
            // persistent view of these when applying the completed RemoteEvent.
            forEachNumber(remoteEvent.targetChanges, function (targetId, change) {
                if (change.resumeToken.length > 0) {
                    var queryData = _this.listenTargets[targetId];
                    // A watched target might have been removed already.
                    if (queryData) {
                        _this.listenTargets[targetId] = queryData.update({
                            resumeToken: change.resumeToken,
                            snapshotVersion: change.snapshotVersion
                        });
                    }
                }
            });
            // Finally handle remote event
            return _this.syncEngine.applyRemoteEvent(remoteEvent);
        });
    };
    /** Handles an error on a target */
    RemoteStore.prototype.handleTargetError = function (watchChange) {
        var _this = this;
        assert(!!watchChange.cause, 'Handling target error without a cause');
        var error = watchChange.cause;
        var promiseChain = Promise.resolve();
        watchChange.targetIds.forEach(function (targetId) {
            promiseChain = promiseChain.then(function () {
                if (contains(_this.listenTargets, targetId)) {
                    delete _this.listenTargets[targetId];
                    return _this.syncEngine.rejectListen(targetId, error);
                }
                else {
                    // A watched target might have been removed already.
                    return Promise.resolve();
                }
            });
        });
        return promiseChain;
    };
    RemoteStore.prototype.cleanUpWriteStreamState = function () {
        this.lastBatchSeen = BATCHID_UNKNOWN;
        this.pendingWrites = [];
    };
    /**
     * Notifies that there are new mutations to process in the queue. This is
     * typically called by SyncEngine after it has sent mutations to LocalStore.
     */
    RemoteStore.prototype.fillWritePipeline = function () {
        var _this = this;
        if (!this.canWriteMutations()) {
            return Promise.resolve();
        }
        else {
            return this.localStore
                .nextMutationBatch(this.lastBatchSeen)
                .then(function (batch) {
                if (batch === null) {
                    if (_this.pendingWrites.length == 0) {
                        _this.writeStream.markIdle();
                    }
                    return Promise.resolve();
                }
                else {
                    _this.commit(batch);
                    return _this.fillWritePipeline();
                }
            });
        }
    };
    /**
     * Returns true if the backend can accept additional write requests.
     *
     * When sending mutations to the write stream (e.g. in fillWritePipeline),
     * call this method first to check if more mutations can be sent.
     *
     * Currently the only thing that can prevent the backend from accepting
     * write requests is if there are too many requests already outstanding. As
     * writes complete the backend will be able to accept more.
     */
    RemoteStore.prototype.canWriteMutations = function () {
        return (this.isNetworkEnabled() && this.pendingWrites.length < MAX_PENDING_WRITES);
    };
    // For testing
    RemoteStore.prototype.outstandingWrites = function () {
        return this.pendingWrites.length;
    };
    /**
     * Given mutations to commit, actually commits them to the Datastore. Note
     * that this does *not* return a Promise specifically because the AsyncQueue
     * should not block operations for this.
     */
    RemoteStore.prototype.commit = function (batch) {
        assert(this.canWriteMutations(), "commit called when batches can't be written");
        this.lastBatchSeen = batch.batchId;
        this.pendingWrites.push(batch);
        if (this.shouldStartWriteStream()) {
            this.startWriteStream();
        }
        else if (this.isNetworkEnabled() && this.writeStream.handshakeComplete) {
            this.writeStream.writeMutations(batch.mutations);
        }
    };
    RemoteStore.prototype.shouldStartWriteStream = function () {
        return (this.isNetworkEnabled() &&
            !this.writeStream.isStarted() &&
            this.pendingWrites.length > 0);
    };
    RemoteStore.prototype.startWriteStream = function () {
        assert(this.shouldStartWriteStream(), 'startWriteStream() called when shouldStartWriteStream() is false.');
        this.writeStream.start({
            onOpen: this.onWriteStreamOpen.bind(this),
            onClose: this.onWriteStreamClose.bind(this),
            onHandshakeComplete: this.onWriteHandshakeComplete.bind(this),
            onMutationResult: this.onMutationResult.bind(this)
        });
    };
    RemoteStore.prototype.onWriteStreamOpen = function () {
        this.writeStream.writeHandshake();
        return Promise.resolve();
    };
    RemoteStore.prototype.onWriteHandshakeComplete = function () {
        var _this = this;
        // Record the stream token.
        return this.localStore
            .setLastStreamToken(this.writeStream.lastStreamToken)
            .then(function () {
            // Drain any pending writes.
            //
            // Note that at this point pendingWrites contains mutations that
            // have already been accepted by fillWritePipeline/commitBatch. If
            // the pipeline is full, canWriteMutations will be false, despite
            // the fact that we actually need to send mutations over.
            //
            // This also means that this method indirectly respects the limits
            // imposed by canWriteMutations since writes can't be added to the
            // pendingWrites array when canWriteMutations is false. If the
            // limits imposed by canWriteMutations actually protect us from
            // DOSing ourselves then those limits won't be exceeded here and
            // we'll continue to make progress.
            for (var _i = 0, _a = _this.pendingWrites; _i < _a.length; _i++) {
                var batch = _a[_i];
                _this.writeStream.writeMutations(batch.mutations);
            }
        });
    };
    RemoteStore.prototype.onMutationResult = function (commitVersion, results) {
        var _this = this;
        // This is a response to a write containing mutations and should be
        // correlated to the first pending write.
        assert(this.pendingWrites.length > 0, 'Got result for empty pending writes');
        var batch = this.pendingWrites.shift();
        var success = mutation_batch_MutationBatchResult.from(batch, commitVersion, results, this.writeStream.lastStreamToken);
        return this.syncEngine.applySuccessfulWrite(success).then(function () {
            // It's possible that with the completion of this mutation another
            // slot has freed up.
            return _this.fillWritePipeline();
        });
    };
    RemoteStore.prototype.onWriteStreamClose = function (error) {
        var _this = this;
        assert(this.isNetworkEnabled(), 'onWriteStreamClose() should only be called when the network is enabled');
        // If the write stream closed due to an error, invoke the error callbacks if
        // there are pending writes.
        if (error && this.pendingWrites.length > 0) {
            assert(!!error, 'We have pending writes, but the write stream closed without an error');
            // A promise that is resolved after we processed the error
            var errorHandling = void 0;
            if (this.writeStream.handshakeComplete) {
                // This error affects the actual write.
                errorHandling = this.handleWriteError(error);
            }
            else {
                // If there was an error before the handshake has finished, it's
                // possible that the server is unable to process the stream token
                // we're sending. (Perhaps it's too old?)
                errorHandling = this.handleHandshakeError(error);
            }
            return errorHandling.then(function () {
                // The write stream might have been started by refilling the write
                // pipeline for failed writes
                if (_this.shouldStartWriteStream()) {
                    _this.startWriteStream();
                }
            });
        }
        else {
            // No pending writes, nothing to do
            return Promise.resolve();
        }
    };
    RemoteStore.prototype.handleHandshakeError = function (error) {
        // Reset the token if it's a permanent error or the error code is
        // ABORTED, signaling the write stream is no longer valid.
        if (isPermanentError(error.code) || error.code === Code.ABORTED) {
            debug(remote_store_LOG_TAG, 'RemoteStore error before completed handshake; resetting stream token: ', this.writeStream.lastStreamToken);
            this.writeStream.lastStreamToken = emptyByteString();
            return this.localStore.setLastStreamToken(emptyByteString());
        }
        else {
            // Some other error, don't reset stream token. Our stream logic will
            // just retry with exponential backoff.
            return Promise.resolve();
        }
    };
    RemoteStore.prototype.handleWriteError = function (error) {
        var _this = this;
        if (isPermanentError(error.code)) {
            // This was a permanent error, the request itself was the problem
            // so it's not going to succeed if we resend it.
            var batch = this.pendingWrites.shift();
            // In this case it's also unlikely that the server itself is melting
            // down -- this was just a bad request so inhibit backoff on the next
            // restart.
            this.writeStream.inhibitBackoff();
            return this.syncEngine
                .rejectFailedWrite(batch.batchId, error)
                .then(function () {
                // It's possible that with the completion of this mutation
                // another slot has freed up.
                return _this.fillWritePipeline();
            });
        }
        else {
            // Transient error, just let the retry logic kick in.
            return Promise.resolve();
        }
    };
    RemoteStore.prototype.createTransaction = function () {
        return new transaction_Transaction(this.datastore);
    };
    RemoteStore.prototype.handleUserChange = function (user) {
        debug(remote_store_LOG_TAG, 'RemoteStore changing users: uid=', user.uid);
        // Tear down and re-create our network streams. This will ensure we get a fresh auth token
        // for the new user and re-fill the write pipeline with new mutations from the LocalStore
        // (since mutations are per-user).
        this.disableNetwork();
        return this.enableNetwork();
    };
    return RemoteStore;
}());


//# sourceMappingURL=remote_store.js.map

// CONCATENATED MODULE: ../firestore/dist/esm/src/core/firestore_client.js
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













var firestore_client_LOG_TAG = 'FirestoreClient';
/**
 * FirestoreClient is a top-level class that constructs and owns all of the
 * pieces of the client SDK architecture. It is responsible for creating the
 * async queue that is shared by all of the other components in the system.
 */
var firestore_client_FirestoreClient = /** @class */ (function () {
    function FirestoreClient(platform, databaseInfo, credentials, 
        /**
         * Asynchronous queue responsible for all of our internal processing. When
         * we get incoming work from the user (via public API) or the network
         * (incoming GRPC messages), we should always schedule onto this queue.
         * This ensures all of our work is properly serialized (e.g. we don't
         * start processing a new operation while the previous one is waiting for
         * an async I/O to complete).
         */
        asyncQueue) {
        this.platform = platform;
        this.databaseInfo = databaseInfo;
        this.credentials = credentials;
        this.asyncQueue = asyncQueue;
    }
    /**
     * Starts up the FirestoreClient, returning only whether or not enabling
     * persistence succeeded.
     *
     * The intent here is to "do the right thing" as far as users are concerned.
     * Namely, in cases where offline persistence is requested and possible,
     * enable it, but otherwise fall back to persistence disabled. For the most
     * part we expect this to succeed one way or the other so we don't expect our
     * users to actually wait on the firestore.enablePersistence Promise since
     * they generally won't care.
     *
     * Of course some users actually do care about whether or not persistence
     * was successfully enabled, so the Promise returned from this method
     * indicates this outcome.
     *
     * This presents a problem though: even before enablePersistence resolves or
     * rejects, users may have made calls to e.g. firestore.collection() which
     * means that the FirestoreClient in there will be available and will be
     * enqueuing actions on the async queue.
     *
     * Meanwhile any failure of an operation on the async queue causes it to
     * panic and reject any further work, on the premise that unhandled errors
     * are fatal.
     *
     * Consequently the fallback is handled internally here in start, and if the
     * fallback succeeds we signal success to the async queue even though the
     * start() itself signals failure.
     *
     * @param usePersistence Whether or not to attempt to enable persistence.
     * @returns A deferred result indicating the user-visible result of enabling
     *     offline persistence. This method will reject this if IndexedDB fails to
     *     start for any reason. If usePersistence is false this is
     *     unconditionally resolved.
     */
    FirestoreClient.prototype.start = function (usePersistence) {
        var _this = this;
        // We defer our initialization until we get the current user from
        // setUserChangeListener(). We block the async queue until we got the
        // initial user and the initialization is completed. This will prevent
        // any scheduled work from happening before initialization is completed.
        //
        // If initializationDone resolved then the FirestoreClient is in a usable
        // state.
        var initializationDone = new Deferred();
        // If usePersistence is true, certain classes of errors while starting are
        // recoverable but only by falling back to persistence disabled.
        //
        // If there's an error in the first case but not in recovery we cannot
        // reject the promise blocking the async queue because this will cause the
        // async queue to panic.
        var persistenceResult = new Deferred();
        var initialized = false;
        this.credentials.setUserChangeListener(function (user) {
            if (!initialized) {
                initialized = true;
                _this.initializePersistence(usePersistence, persistenceResult)
                    .then(function () { return _this.initializeRest(user); })
                    .then(initializationDone.resolve, initializationDone.reject);
            }
            else {
                _this.asyncQueue.schedule(function () {
                    return _this.handleUserChange(user);
                });
            }
        });
        // Block the async queue until initialization is done
        this.asyncQueue.schedule(function () {
            return initializationDone.promise;
        });
        // Return only the result of enabling persistence. Note that this does not
        // need to await the completion of initializationDone because the result of
        // this method should not reflect any other kind of failure to start.
        return persistenceResult.promise;
    };
    /** Enables the network connection and requeues all pending operations. */
    FirestoreClient.prototype.enableNetwork = function () {
        var _this = this;
        return this.asyncQueue.schedule(function () {
            return _this.remoteStore.enableNetwork();
        });
    };
    /**
     * Initializes persistent storage, attempting to use IndexedDB if
     * usePersistence is true or memory-only if false.
     *
     * If IndexedDB fails because it's already open in another tab or because the
     * platform can't possibly support our implementation then this method rejects
     * the persistenceResult and falls back on memory-only persistence.
     *
     * @param usePersistence indicates whether or not to use offline persistence
     * @param persistenceResult A deferred result indicating the user-visible
     *     result of enabling offline persistence. This method will reject this if
     *     IndexedDB fails to start for any reason. If usePersistence is false
     *     this is unconditionally resolved.
     * @returns a Promise indicating whether or not initialization should
     *     continue, i.e. that one of the persistence implementations actually
     *     succeeded.
     */
    FirestoreClient.prototype.initializePersistence = function (usePersistence, persistenceResult) {
        var _this = this;
        if (usePersistence) {
            return this.startIndexedDbPersistence()
                .then(persistenceResult.resolve)
                .catch(function (error) {
                // Regardless of whether or not the retry succeeds, from an user
                // perspective, offline persistence has failed.
                persistenceResult.reject(error);
                // An unknown failure on the first stage shuts everything down.
                if (!_this.canFallback(error)) {
                    return Promise.reject(error);
                }
                console.warn('Error enabling offline storage. Falling back to' +
                    ' storage disabled: ' +
                    error);
                return _this.startMemoryPersistence();
            });
        }
        else {
            // When usePersistence == false, enabling offline persistence is defined
            // to unconditionally succeed. This allows start() to have the same
            // signature for both cases, despite the fact that the returned promise
            // is only used in the enablePersistence call.
            persistenceResult.resolve();
            return this.startMemoryPersistence();
        }
    };
    FirestoreClient.prototype.canFallback = function (error) {
        return (error.code === Code.FAILED_PRECONDITION ||
            error.code === Code.UNIMPLEMENTED);
    };
    /**
     * Starts IndexedDB-based persistence.
     *
     * @returns A promise indicating success or failure.
     */
    FirestoreClient.prototype.startIndexedDbPersistence = function () {
        // TODO(http://b/33384523): For now we just disable garbage collection
        // when persistence is enabled.
        this.garbageCollector = new no_op_garbage_collector_NoOpGarbageCollector();
        var storagePrefix = indexeddb_persistence_IndexedDbPersistence.buildStoragePrefix(this.databaseInfo);
        // Opt to use proto3 JSON in case the platform doesn't support Uint8Array.
        var serializer = new serializer_JsonProtoSerializer(this.databaseInfo.databaseId, {
            useProto3Json: true
        });
        this.persistence = new indexeddb_persistence_IndexedDbPersistence(storagePrefix, serializer);
        return this.persistence.start();
    };
    /**
     * Starts Memory-backed persistence. In practice this cannot fail.
     *
     * @returns A promise that will successfully resolve.
     */
    FirestoreClient.prototype.startMemoryPersistence = function () {
        this.garbageCollector = new eager_garbage_collector_EagerGarbageCollector();
        this.persistence = new memory_persistence_MemoryPersistence();
        return this.persistence.start();
    };
    /**
     * Initializes the rest of the FirestoreClient, assuming the initial user
     * has been obtained from the credential provider and some persistence
     * implementation is available in this.persistence.
     */
    FirestoreClient.prototype.initializeRest = function (user) {
        var _this = this;
        return this.platform
            .loadConnection(this.databaseInfo)
            .then(function (connection) {
            _this.localStore = new local_store_LocalStore(_this.persistence, user, _this.garbageCollector);
            var serializer = _this.platform.newSerializer(_this.databaseInfo.databaseId);
            var datastore = new datastore_Datastore(_this.databaseInfo, _this.asyncQueue, connection, _this.credentials, serializer);
            var onlineStateChangedHandler = function (onlineState) {
                _this.eventMgr.onOnlineStateChanged(onlineState);
            };
            _this.remoteStore = new remote_store_RemoteStore(_this.databaseInfo, _this.asyncQueue, _this.localStore, datastore, onlineStateChangedHandler);
            _this.syncEngine = new sync_engine_SyncEngine(_this.localStore, _this.remoteStore, user);
            // Setup wiring between sync engine and remote store
            _this.remoteStore.syncEngine = _this.syncEngine;
            _this.eventMgr = new event_manager_EventManager(_this.syncEngine);
            // NOTE: RemoteStore depends on LocalStore (for persisting stream
            // tokens, refilling mutation queue, etc.) so must be started after
            // LocalStore.
            return _this.localStore.start();
        })
            .then(function () {
            return _this.remoteStore.start();
        });
    };
    FirestoreClient.prototype.handleUserChange = function (user) {
        this.asyncQueue.verifyOperationInProgress();
        debug(firestore_client_LOG_TAG, 'User Changed: ' + user.uid);
        return this.syncEngine.handleUserChange(user);
    };
    /** Disables the network connection. Pending operations will not complete. */
    FirestoreClient.prototype.disableNetwork = function () {
        var _this = this;
        return this.asyncQueue.schedule(function () {
            return _this.remoteStore.disableNetwork();
        });
    };
    FirestoreClient.prototype.shutdown = function () {
        var _this = this;
        return this.asyncQueue
            .schedule(function () {
            _this.credentials.removeUserChangeListener();
            return _this.remoteStore.shutdown();
        })
            .then(function () {
            // PORTING NOTE: LocalStore does not need an explicit shutdown on web.
            return _this.persistence.shutdown();
        });
    };
    FirestoreClient.prototype.listen = function (query, observer, options) {
        var _this = this;
        var listener = new event_manager_QueryListener(query, observer, options);
        this.asyncQueue.schedule(function () {
            return _this.eventMgr.listen(listener);
        });
        return listener;
    };
    FirestoreClient.prototype.unlisten = function (listener) {
        var _this = this;
        this.asyncQueue.schedule(function () {
            return _this.eventMgr.unlisten(listener);
        });
    };
    FirestoreClient.prototype.write = function (mutations) {
        var _this = this;
        var deferred = new Deferred();
        this.asyncQueue.schedule(function () { return _this.syncEngine.write(mutations, deferred); });
        return deferred.promise;
    };
    FirestoreClient.prototype.databaseId = function () {
        return this.databaseInfo.databaseId;
    };
    FirestoreClient.prototype.transaction = function (updateFunction) {
        var _this = this;
        // We have to wait for the async queue to be sure syncEngine is initialized.
        return this.asyncQueue
            .schedule(function () {
            return Promise.resolve();
        })
            .then(function () {
            return _this.syncEngine.runTransaction(updateFunction);
        });
    };
    return FirestoreClient;
}());


//# sourceMappingURL=firestore_client.js.map

// CONCATENATED MODULE: ../firestore/dist/esm/src/util/async_observer.js
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
/*
 * A wrapper implementation of Observer<T> that will dispatch events
 * asynchronously. To allow immediate silencing, a mute call is added which
 * causes events scheduled to no longer be raised.
 */
var AsyncObserver = /** @class */ (function () {
    function AsyncObserver(observer) {
        this.observer = observer;
        /**
         * When set to true, will not raise future events. Necessary to deal with
         * async detachment of listener.
         */
        this.muted = false;
    }
    AsyncObserver.prototype.next = function (value) {
        this.scheduleEvent(this.observer.next, value);
    };
    AsyncObserver.prototype.error = function (error) {
        this.scheduleEvent(this.observer.error, error);
    };
    AsyncObserver.prototype.mute = function () {
        this.muted = true;
    };
    AsyncObserver.prototype.scheduleEvent = function (eventHandler, event) {
        var _this = this;
        if (!this.muted) {
            setTimeout(function () {
                if (!_this.muted) {
                    eventHandler(event);
                }
            }, 0);
        }
    };
    return AsyncObserver;
}());


//# sourceMappingURL=async_observer.js.map

// CONCATENATED MODULE: ../firestore/dist/esm/src/util/async_queue.js
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




var async_queue_AsyncQueue = /** @class */ (function () {
    function AsyncQueue() {
        // The last promise in the queue.
        this.tail = Promise.resolve();
        // A list with timeout handles and their respective deferred promises.
        // Contains an entry for each operation that is queued to run in the future
        // (i.e. it has a delay that has not yet elapsed). Prior to cleanup, this list
        // may also contain entries that have already been run (in which case `handle` is
        // null).
        this.delayedOperations = [];
        // The number of operations that are queued to be run in the future (i.e. they
        // have a delay that has not yet elapsed). Unlike `delayedOperations`, this
        // is guaranteed to only contain operations that have not yet been run.
        //
        // Visible for testing.
        this.delayedOperationsCount = 0;
        // Flag set while there's an outstanding AsyncQueue operation, used for
        // assertion sanity-checks.
        this.operationInProgress = false;
    }
    /**
     * Adds a new operation to the queue. Returns a promise that will be resolved
     * when the promise returned by the new operation is (with its value).
     *
     * Can optionally specify a delay (in milliseconds) to wait before queuing the
     * operation.
     */
    AsyncQueue.prototype.schedule = function (op, delay) {
        var _this = this;
        if (this.failure) {
            fail('AsyncQueue is already failed: ' +
                (this.failure.stack || this.failure.message));
        }
        if ((delay || 0) > 0) {
            this.delayedOperationsCount++;
            var delayedOp_1 = {
                handle: null,
                op: op,
                deferred: new Deferred()
            };
            delayedOp_1.handle = setTimeout(function () {
                _this.scheduleInternal(function () {
                    return delayedOp_1.op().then(function (result) {
                        delayedOp_1.deferred.resolve(result);
                    });
                });
                delayedOp_1.handle = null;
                _this.delayedOperationsCount--;
                if (_this.delayedOperationsCount === 0) {
                    _this.delayedOperations = [];
                }
            }, delay);
            this.delayedOperations.push(delayedOp_1);
            return delayedOp_1.deferred.promise;
        }
        else {
            return this.scheduleInternal(op);
        }
    };
    AsyncQueue.prototype.scheduleInternal = function (op) {
        var _this = this;
        this.tail = this.tail.then(function () {
            _this.operationInProgress = true;
            return op()
                .catch(function (error) {
                _this.failure = error;
                _this.operationInProgress = false;
                var message = error.stack || error.message || '';
                log_error('INTERNAL UNHANDLED ERROR: ', message);
                // Escape the promise chain and throw the error globally so that
                // e.g. any global crash reporting library detects and reports it.
                // (but not for simulated errors in our tests since this breaks mocha)
                if (message.indexOf('Firestore Test Simulated Error') < 0) {
                    setTimeout(function () {
                        throw error;
                    }, 0);
                }
                // Re-throw the error so that this.tail becomes a rejected Promise and
                // all further attempts to chain (via .then) will just short-circuit
                // and return the rejected Promise.
                throw error;
            })
                .then(function () {
                _this.operationInProgress = false;
            });
        });
        return this.tail;
    };
    /**
     * Verifies there's an operation currently in-progress on the AsyncQueue.
     * Unfortunately we can't verify that the running code is in the promise chain
     * of that operation, so this isn't a foolproof check, but it should be enough
     * to catch some bugs.
     */
    AsyncQueue.prototype.verifyOperationInProgress = function () {
        assert(this.operationInProgress, 'verifyOpInProgress() called when no op in progress on this queue.');
    };
    /**
     * Waits until all currently scheduled tasks are finished executing. Tasks
     * scheduled with a delay can be rejected or queued for immediate execution.
     */
    AsyncQueue.prototype.drain = function (executeDelayedTasks) {
        var _this = this;
        this.delayedOperations.forEach(function (entry) {
            if (entry.handle) {
                clearTimeout(entry.handle);
                if (executeDelayedTasks) {
                    _this.scheduleInternal(entry.op).then(entry.deferred.resolve, entry.deferred.reject);
                }
                else {
                    entry.deferred.reject(new FirestoreError(Code.CANCELLED, 'Operation cancelled by shutdown'));
                }
            }
        });
        this.delayedOperations = [];
        this.delayedOperationsCount = 0;
        return this.schedule(function () { return Promise.resolve(); });
    };
    return AsyncQueue;
}());


//# sourceMappingURL=async_queue.js.map

// CONCATENATED MODULE: ../firestore/dist/esm/src/auth/user.js
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
/**
 * Simple wrapper around a nullable UID. Mostly exists to make code more
 * readable.
 */
var User = /** @class */ (function () {
    function User(uid) {
        this.uid = uid;
    }
    User.prototype.isUnauthenticated = function () {
        return this.uid == null;
    };
    /**
     * Returns a key representing this user, suitable for inclusion in a
     * dictionary.
     */
    User.prototype.toKey = function () {
        if (this.isUnauthenticated()) {
            return 'anonymous-user';
        }
        else {
            return 'uid:' + this.uid;
        }
    };
    User.prototype.equals = function (otherUser) {
        return otherUser.uid === this.uid;
    };
    /** A user with a null UID. */
    User.UNAUTHENTICATED = new User(null);
    // TODO(mikelehen): Look into getting a proper uid-equivalent for
    // non-FirebaseAuth providers.
    User.GOOGLE_CREDENTIALS = new User('google-credentials-uid');
    User.FIRST_PARTY = new User('first-party-uid');
    return User;
}());


//# sourceMappingURL=user.js.map

// CONCATENATED MODULE: ../firestore/dist/esm/src/api/credentials.js
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



var OAuthToken = /** @class */ (function () {
    function OAuthToken(value, user) {
        this.user = user;
        this.type = 'OAuth';
        this.authHeaders = { Authorization: "Bearer " + value };
    }
    return OAuthToken;
}());

/** A CredentialsProvider that always yields an empty token. */
var credentials_EmptyCredentialsProvider = /** @class */ (function () {
    function EmptyCredentialsProvider() {
        /**
         * Stores the User listener registered with setUserChangeListener()
         * This isn't actually necessary since the UID never changes, but we use this
         * to verify the listen contract is adhered to in tests.
         */
        this.userListener = null;
    }
    EmptyCredentialsProvider.prototype.getToken = function (forceRefresh) {
        return Promise.resolve(null);
    };
    EmptyCredentialsProvider.prototype.setUserChangeListener = function (listener) {
        assert(!this.userListener, 'Can only call setUserChangeListener() once.');
        this.userListener = listener;
        // Fire with initial user.
        listener(User.UNAUTHENTICATED);
    };
    EmptyCredentialsProvider.prototype.removeUserChangeListener = function () {
        assert(this.userListener !== null, 'removeUserChangeListener() when no listener registered');
        this.userListener = null;
    };
    return EmptyCredentialsProvider;
}());

var credentials_FirebaseCredentialsProvider = /** @class */ (function () {
    function FirebaseCredentialsProvider(app) {
        var _this = this;
        this.app = app;
        /**
         * The auth token listener registered with FirebaseApp, retained here so we
         * can unregister it.
         */
        this.tokenListener = null;
        /**
         * Counter used to detect if the user changed while a getToken request was
         * outstanding.
         */
        this.userCounter = 0;
        /** The User listener registered with setUserChangeListener(). */
        this.userListener = null;
        // We listen for token changes but all we really care about is knowing when
        // the uid may have changed.
        this.tokenListener = function () {
            var newUser = _this.getUser();
            if (!_this.currentUser || !newUser.equals(_this.currentUser)) {
                _this.currentUser = newUser;
                _this.userCounter++;
                if (_this.userListener) {
                    _this.userListener(_this.currentUser);
                }
            }
        };
        this.userCounter = 0;
        // Will fire at least once where we set this.currentUser
        this.app.INTERNAL.addAuthTokenListener(this.tokenListener);
    }
    FirebaseCredentialsProvider.prototype.getToken = function (forceRefresh) {
        var _this = this;
        assert(this.tokenListener != null, 'getToken cannot be called after listener removed.');
        // Take note of the current value of the userCounter so that this method can
        // fail (with an ABORTED error) if there is a user change while the request
        // is outstanding.
        var initialUserCounter = this.userCounter;
        return this.app.INTERNAL.getToken(forceRefresh).then(function (tokenData) {
            // Cancel the request since the user changed while the request was
            // outstanding so the response is likely for a previous user (which
            // user, we can't be sure).
            if (_this.userCounter !== initialUserCounter) {
                throw new FirestoreError(Code.ABORTED, 'getToken aborted due to uid change.');
            }
            else {
                if (tokenData) {
                    assert(typeof tokenData.accessToken === 'string', 'Invalid tokenData returned from getToken():' + tokenData);
                    return new OAuthToken(tokenData.accessToken, _this.currentUser);
                }
                else {
                    return null;
                }
            }
        });
    };
    FirebaseCredentialsProvider.prototype.setUserChangeListener = function (listener) {
        assert(!this.userListener, 'Can only call setUserChangeListener() once.');
        this.userListener = listener;
        // Fire the initial event, but only if we received the initial user
        if (this.currentUser) {
            listener(this.currentUser);
        }
    };
    FirebaseCredentialsProvider.prototype.removeUserChangeListener = function () {
        assert(this.tokenListener != null, 'removeUserChangeListener() called twice');
        assert(this.userListener !== null, 'removeUserChangeListener() called when no listener registered');
        this.app.INTERNAL.removeAuthTokenListener(this.tokenListener);
        this.tokenListener = null;
        this.userListener = null;
    };
    FirebaseCredentialsProvider.prototype.getUser = function () {
        // TODO(mikelehen): Remove this check once we're shipping with firebase.js.
        if (typeof this.app.INTERNAL.getUid !== 'function') {
            fail('This version of the Firestore SDK requires at least version' +
                ' 3.7.0 of firebase.js.');
        }
        var currentUid = this.app.INTERNAL.getUid();
        assert(currentUid === null || typeof currentUid === 'string', 'Received invalid UID: ' + currentUid);
        return new User(currentUid);
    };
    return FirebaseCredentialsProvider;
}());

// Wrap a google-auth-library client as a CredentialsProvider.
// NOTE: grpc-connection can natively accept a google-auth-library
// client via createFromGoogleCredential(), but we opt to plumb the tokens
// through our CredentialsProvider interface, at least for now.
var credentials_GoogleCredentialsProvider = /** @class */ (function () {
    function GoogleCredentialsProvider(authClient) {
        this.authClient = authClient;
    }
    GoogleCredentialsProvider.prototype.getToken = function (forceRefresh) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // TODO(b/32935141): ideally this would be declared as an extern
            _this.authClient['getAccessToken'](function (error, tokenLiteral) {
                if (error) {
                    reject(error);
                }
                else {
                    resolve(new OAuthToken(tokenLiteral, User.GOOGLE_CREDENTIALS));
                }
            });
        });
    };
    // NOTE: A google-auth-library client represents an immutable "user", so
    // once we fire the initial event, it'll never change.
    GoogleCredentialsProvider.prototype.setUserChangeListener = function (listener) {
        // Fire with initial uid.
        listener(User.GOOGLE_CREDENTIALS);
    };
    GoogleCredentialsProvider.prototype.removeUserChangeListener = function () { };
    return GoogleCredentialsProvider;
}());

/*
 * FirstPartyToken provides a fresh token each time its value
 * is requested, because if the token is too old, requests will be rejected.
 * TODO(b/33147818) this implementation violates the current assumption that
 * tokens are immutable.  We need to either revisit this assumption or come
 * up with some way for FPA to use the listen/unlisten interface.
 */
var credentials_FirstPartyToken = /** @class */ (function () {
    function FirstPartyToken(gapi, sessionIndex) {
        this.gapi = gapi;
        this.sessionIndex = sessionIndex;
        this.type = 'FirstParty';
        this.user = User.FIRST_PARTY;
        assert(this.gapi &&
            this.gapi['auth'] &&
            this.gapi['auth']['getAuthHeaderValueForFirstParty'], 'unexpected gapi interface');
    }
    Object.defineProperty(FirstPartyToken.prototype, "authHeaders", {
        get: function () {
            return {
                Authorization: this.gapi['auth']['getAuthHeaderValueForFirstParty']([]),
                'X-Goog-AuthUser': this.sessionIndex
            };
        },
        enumerable: true,
        configurable: true
    });
    return FirstPartyToken;
}());

/*
 * Provides user credentials required for the Firestore JavaScript SDK
 * to authenticate the user, using technique that is only available
 * to applications hosted by Google.
 */
var credentials_FirstPartyCredentialsProvider = /** @class */ (function () {
    function FirstPartyCredentialsProvider(gapi, sessionIndex) {
        this.gapi = gapi;
        this.sessionIndex = sessionIndex;
        assert(this.gapi &&
            this.gapi['auth'] &&
            this.gapi['auth']['getAuthHeaderValueForFirstParty'], 'unexpected gapi interface');
    }
    FirstPartyCredentialsProvider.prototype.getToken = function (forceRefresh) {
        return Promise.resolve(new credentials_FirstPartyToken(this.gapi, this.sessionIndex));
    };
    // TODO(33108925): can someone switch users w/o a page refresh?
    // TODO(33110621): need to understand token/session lifecycle
    FirstPartyCredentialsProvider.prototype.setUserChangeListener = function (listener) {
        // Fire with initial uid.
        listener(User.FIRST_PARTY);
    };
    FirstPartyCredentialsProvider.prototype.removeUserChangeListener = function () { };
    return FirstPartyCredentialsProvider;
}());

/**
 * Builds a CredentialsProvider depending on the type of
 * the credentials passed in.
 */
function makeCredentialsProvider(credentials) {
    if (!credentials) {
        return new credentials_EmptyCredentialsProvider();
    }
    switch (credentials.type) {
        case 'google-auth':
            return new credentials_GoogleCredentialsProvider(credentials.client);
        case 'gapi':
            return new credentials_FirstPartyCredentialsProvider(credentials.client, credentials.sessionIndex || '0');
        case 'provider':
            return credentials.client;
        default:
            throw new FirestoreError(Code.INVALID_ARGUMENT, 'makeCredentialsProvider failed due to invalid credential type');
    }
}

//# sourceMappingURL=credentials.js.map

// CONCATENATED MODULE: ../firestore/dist/esm/src/api/observer.js
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
function isPartialObserver(obj) {
    return implementsAnyMethods(obj, ['next', 'error', 'complete']);
}
/**
 * Returns true if obj is an object and contains at least one of the specified
 * methods.
 */
function implementsAnyMethods(obj, methods) {
    if (typeof obj !== 'object' || obj === null) {
        return false;
    }
    var object = obj;
    for (var _i = 0, methods_1 = methods; _i < methods_1.length; _i++) {
        var method = methods_1[_i];
        if (method in object && typeof object[method] === 'function') {
            return true;
        }
    }
    return false;
}

//# sourceMappingURL=observer.js.map

// CONCATENATED MODULE: ../firestore/dist/esm/src/api/field_value.js
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
var api_field_value___extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/**
 * An opaque base class for FieldValue sentinel objects in our public API,
 * with public static methods for creating said sentinel objects.
 */
// tslint:disable-next-line:class-as-namespace  We use this as a base class.
var FieldValueImpl = /** @class */ (function () {
    function FieldValueImpl() {
    }
    FieldValueImpl.delete = function () {
        return DeleteFieldValueImpl.instance;
    };
    FieldValueImpl.serverTimestamp = function () {
        return ServerTimestampFieldValueImpl.instance;
    };
    return FieldValueImpl;
}());

var DeleteFieldValueImpl = /** @class */ (function (_super) {
    api_field_value___extends(DeleteFieldValueImpl, _super);
    function DeleteFieldValueImpl() {
        return _super.call(this) || this;
    }
    /** Singleton instance. */
    DeleteFieldValueImpl.instance = new DeleteFieldValueImpl();
    return DeleteFieldValueImpl;
}(FieldValueImpl));

var ServerTimestampFieldValueImpl = /** @class */ (function (_super) {
    api_field_value___extends(ServerTimestampFieldValueImpl, _super);
    function ServerTimestampFieldValueImpl() {
        return _super.call(this) || this;
    }
    /** Singleton instance. */
    ServerTimestampFieldValueImpl.instance = new ServerTimestampFieldValueImpl();
    return ServerTimestampFieldValueImpl;
}(FieldValueImpl));

// Public instance that disallows construction at runtime. This constructor is
// used when exporting FieldValueImpl on firebase.firestore.FieldValue and will
// be called FieldValue publicly. Internally we still use FieldValueImpl which
// has a type-checked private constructor. Note that FieldValueImpl and
// PublicFieldValue can be used interchangeably in instanceof checks.
// For our internal TypeScript code PublicFieldValue doesn't exist as a type,
// and so we need to use FieldValueImpl as type and export it too.
// tslint:disable-next-line:variable-name  We treat this as a class name.
var PublicFieldValue = makeConstructorPrivate(FieldValueImpl, 'Use FieldValue.<field>() instead.');

//# sourceMappingURL=field_value.js.map

// CONCATENATED MODULE: ../firestore/dist/esm/src/api/user_data_converter.js
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
















var RESERVED_FIELD_REGEX = /^__.*__$/;
/** The result of parsing document data (e.g. for a setData call). */
var user_data_converter_ParsedSetData = /** @class */ (function () {
    function ParsedSetData(data, fieldMask, fieldTransforms) {
        this.data = data;
        this.fieldMask = fieldMask;
        this.fieldTransforms = fieldTransforms;
    }
    ParsedSetData.prototype.toMutations = function (key, precondition) {
        var mutations = [];
        if (this.fieldMask !== null) {
            mutations.push(new mutation_PatchMutation(key, this.data, this.fieldMask, precondition));
        }
        else {
            mutations.push(new mutation_SetMutation(key, this.data, precondition));
        }
        if (this.fieldTransforms.length > 0) {
            mutations.push(new mutation_TransformMutation(key, this.fieldTransforms));
        }
        return mutations;
    };
    return ParsedSetData;
}());

/** The result of parsing "update" data (i.e. for an updateData call). */
var user_data_converter_ParsedUpdateData = /** @class */ (function () {
    function ParsedUpdateData(data, fieldMask, fieldTransforms) {
        this.data = data;
        this.fieldMask = fieldMask;
        this.fieldTransforms = fieldTransforms;
    }
    ParsedUpdateData.prototype.toMutations = function (key, precondition) {
        var mutations = [
            new mutation_PatchMutation(key, this.data, this.fieldMask, precondition)
        ];
        if (this.fieldTransforms.length > 0) {
            mutations.push(new mutation_TransformMutation(key, this.fieldTransforms));
        }
        return mutations;
    };
    return ParsedUpdateData;
}());

/*
 * Represents what type of API method provided the data being parsed; useful
 * for determining which error conditions apply during parsing and providing
 * better error messages.
 */
var UserDataSource;
(function (UserDataSource) {
    UserDataSource[UserDataSource["Set"] = 0] = "Set";
    UserDataSource[UserDataSource["Update"] = 1] = "Update";
    UserDataSource[UserDataSource["MergeSet"] = 2] = "MergeSet";
    UserDataSource[UserDataSource["QueryValue"] = 3] = "QueryValue"; // from a where clause or cursor bound
})(UserDataSource || (UserDataSource = {}));
function isWrite(dataSource) {
    switch (dataSource) {
        case UserDataSource.Set: // fall through
        case UserDataSource.MergeSet: // fall through
        case UserDataSource.Update:
            return true;
        case UserDataSource.QueryValue:
            return false;
        default:
            throw fail("Unexpected case for UserDataSource: " + dataSource);
    }
}
/** A "context" object passed around while parsing user data. */
var user_data_converter_ParseContext = /** @class */ (function () {
    /**
     * Initializes a ParseContext with the given source and path.
     *
     * @param dataSource Indicates what kind of API method this data came from.
     * @param methodName The name of the method the user called to create this
     *     ParseContext.
     * @param path A path within the object being parsed. This could be an empty
     *     path (in which case the context represents the root of the data being
     *     parsed), or a nonempty path (indicating the context represents a nested
     *     location within the data).
     * @param arrayElement Whether or not this context corresponds to an element
     *     of an array.
     * @param fieldTransforms A mutable list of field transforms encountered while
     *     parsing the data.
     * @param fieldMask A mutable list of field paths encountered while parsing
     *     the data.
     *
     * TODO(b/34871131): We don't support array paths right now, so path can be
     * null to indicate the context represents any location within an array (in
     * which case certain features will not work and errors will be somewhat
     * compromised).
     */
    function ParseContext(dataSource, methodName, path, arrayElement, fieldTransforms, fieldMask) {
        this.dataSource = dataSource;
        this.methodName = methodName;
        this.path = path;
        this.arrayElement = arrayElement;
        // Minor hack: If fieldTransforms is undefined, we assume this is an
        // external call and we need to validate the entire path.
        if (fieldTransforms === undefined) {
            this.validatePath();
        }
        this.arrayElement = arrayElement !== undefined ? arrayElement : false;
        this.fieldTransforms = fieldTransforms || [];
        this.fieldMask = fieldMask || [];
    }
    ParseContext.prototype.childContextForField = function (field) {
        var childPath = this.path == null ? null : this.path.child(field);
        var context = new ParseContext(this.dataSource, this.methodName, childPath, 
        /*arrayElement=*/ false, this.fieldTransforms, this.fieldMask);
        context.validatePathSegment(field);
        return context;
    };
    ParseContext.prototype.childContextForFieldPath = function (field) {
        var childPath = this.path == null ? null : this.path.child(field);
        var context = new ParseContext(this.dataSource, this.methodName, childPath, 
        /*arrayElement=*/ false, this.fieldTransforms, this.fieldMask);
        context.validatePath();
        return context;
    };
    ParseContext.prototype.childContextForArray = function (index) {
        // TODO(b/34871131): We don't support array paths right now; so make path
        // null.
        return new ParseContext(this.dataSource, this.methodName, 
        /*path=*/ null, 
        /*arrayElement=*/ true, this.fieldTransforms, this.fieldMask);
    };
    ParseContext.prototype.createError = function (reason) {
        var fieldDescription = this.path === null || this.path.isEmpty()
            ? ''
            : " (found in field " + this.path.toString() + ")";
        return new FirestoreError(Code.INVALID_ARGUMENT, "Function " + this.methodName + "() called with invalid data. " +
            reason +
            fieldDescription);
    };
    ParseContext.prototype.validatePath = function () {
        // TODO(b/34871131): Remove null check once we have proper paths for fields
        // within arrays.
        if (this.path === null) {
            return;
        }
        for (var i = 0; i < this.path.length; i++) {
            this.validatePathSegment(this.path.get(i));
        }
    };
    ParseContext.prototype.validatePathSegment = function (segment) {
        if (isWrite(this.dataSource) && RESERVED_FIELD_REGEX.test(segment)) {
            throw this.createError('Document fields cannot begin and end with __');
        }
    };
    ParseContext.prototype.isWrite = function () {
        return (this.dataSource === UserDataSource.Set ||
            this.dataSource === UserDataSource.Update);
    };
    return ParseContext;
}());
/**
 * A placeholder object for DocumentReferences in this file, in order to
 * avoid a circular dependency. See the comments for `DataPreConverter` for
 * the full context.
 */
var DocumentKeyReference = /** @class */ (function () {
    function DocumentKeyReference(databaseId, key) {
        this.databaseId = databaseId;
        this.key = key;
    }
    return DocumentKeyReference;
}());

/**
 * Helper for parsing raw user input (provided via the API) into internal model
 * classes.
 */
var user_data_converter_UserDataConverter = /** @class */ (function () {
    function UserDataConverter(preConverter) {
        this.preConverter = preConverter;
    }
    /** Parse document data from a non-merge set() call.*/
    UserDataConverter.prototype.parseSetData = function (methodName, input) {
        var context = new user_data_converter_ParseContext(UserDataSource.Set, methodName, path_FieldPath.EMPTY_PATH);
        validatePlainObject('Data must be an object, but it was:', context, input);
        var updateData = this.parseData(input, context);
        return new user_data_converter_ParsedSetData(updateData, 
        /* fieldMask= */ null, context.fieldTransforms);
    };
    /** Parse document data from a set() call with '{merge:true}'. */
    UserDataConverter.prototype.parseMergeData = function (methodName, input) {
        var context = new user_data_converter_ParseContext(UserDataSource.MergeSet, methodName, path_FieldPath.EMPTY_PATH);
        validatePlainObject('Data must be an object, but it was:', context, input);
        var updateData = this.parseData(input, context);
        var fieldMask = new mutation_FieldMask(context.fieldMask);
        return new user_data_converter_ParsedSetData(updateData, fieldMask, context.fieldTransforms);
    };
    /** Parse update data from an update() call. */
    UserDataConverter.prototype.parseUpdateData = function (methodName, input) {
        var _this = this;
        var context = new user_data_converter_ParseContext(UserDataSource.Update, methodName, path_FieldPath.EMPTY_PATH);
        validatePlainObject('Data must be an object, but it was:', context, input);
        var fieldMaskPaths = [];
        var updateData = field_value_ObjectValue.EMPTY;
        forEach(input, function (key, value) {
            var path = fieldPathFromDotSeparatedString(methodName, key);
            var childContext = context.childContextForFieldPath(path);
            value = _this.runPreConverter(value, childContext);
            if (value instanceof DeleteFieldValueImpl) {
                // Add it to the field mask, but don't add anything to updateData.
                fieldMaskPaths.push(path);
            }
            else {
                var parsedValue = _this.parseData(value, childContext);
                if (parsedValue != null) {
                    fieldMaskPaths.push(path);
                    updateData = updateData.set(path, parsedValue);
                }
            }
        });
        var mask = new mutation_FieldMask(fieldMaskPaths);
        return new user_data_converter_ParsedUpdateData(updateData, mask, context.fieldTransforms);
    };
    /** Parse update data from a list of field/value arguments. */
    UserDataConverter.prototype.parseUpdateVarargs = function (methodName, field, value, moreFieldsAndValues) {
        var context = new user_data_converter_ParseContext(UserDataSource.Update, methodName, path_FieldPath.EMPTY_PATH);
        var keys = [fieldPathFromArgument(methodName, field)];
        var values = [value];
        if (moreFieldsAndValues.length % 2 !== 0) {
            throw new FirestoreError(Code.INVALID_ARGUMENT, "Function " + methodName + "() needs to be called with an even number " +
                'of arguments that alternate between field names and values.');
        }
        for (var i = 0; i < moreFieldsAndValues.length; i += 2) {
            keys.push(fieldPathFromArgument(methodName, moreFieldsAndValues[i]));
            values.push(moreFieldsAndValues[i + 1]);
        }
        var fieldMaskPaths = [];
        var updateData = field_value_ObjectValue.EMPTY;
        for (var i = 0; i < keys.length; ++i) {
            var path = keys[i];
            var childContext = context.childContextForFieldPath(path);
            var value_1 = this.runPreConverter(values[i], childContext);
            if (value_1 instanceof DeleteFieldValueImpl) {
                // Add it to the field mask, but don't add anything to updateData.
                fieldMaskPaths.push(path);
            }
            else {
                var parsedValue = this.parseData(value_1, childContext);
                if (parsedValue != null) {
                    fieldMaskPaths.push(path);
                    updateData = updateData.set(path, parsedValue);
                }
            }
        }
        var mask = new mutation_FieldMask(fieldMaskPaths);
        return new user_data_converter_ParsedUpdateData(updateData, mask, context.fieldTransforms);
    };
    /**
     * Parse a "query value" (e.g. value in a where filter or a value in a cursor
     * bound).
     */
    UserDataConverter.prototype.parseQueryValue = function (methodName, input) {
        var context = new user_data_converter_ParseContext(UserDataSource.QueryValue, methodName, path_FieldPath.EMPTY_PATH);
        var parsed = this.parseData(input, context);
        assert(parsed != null, 'Parsed data should not be null.');
        assert(context.fieldTransforms.length === 0, 'Field transforms should have been disallowed.');
        return parsed;
    };
    /** Sends data through this.preConverter, handling any thrown errors. */
    UserDataConverter.prototype.runPreConverter = function (input, context) {
        try {
            return this.preConverter(input);
        }
        catch (e) {
            var message = errorMessage(e);
            throw context.createError(message);
        }
    };
    /**
     * Internal helper for parsing user data.
     *
     * @param input Data to be parsed.
     * @param context A context object representing the current path being parsed,
     * the source of the data being parsed, etc.
     * @return The parsed value, or null if the value was a FieldValue sentinel
     * that should not be included in the resulting parsed data.
     */
    UserDataConverter.prototype.parseData = function (input, context) {
        input = this.runPreConverter(input, context);
        if (input instanceof Array) {
            // TODO(b/34871131): Include the path containing the array in the error
            // message.
            if (context.arrayElement) {
                throw context.createError('Nested arrays are not supported');
            }
            // If context.path is null we are already inside an array and we don't
            // support field mask paths more granular than the top-level array.
            if (context.path) {
                context.fieldMask.push(context.path);
            }
            return this.parseArray(input, context);
        }
        else if (looksLikeJsonObject(input)) {
            validatePlainObject('Unsupported field value:', context, input);
            return this.parseObject(input, context);
        }
        else {
            // If context.path is null, we are inside an array and we should have
            // already added the root of the array to the field mask.
            if (context.path) {
                context.fieldMask.push(context.path);
            }
            return this.parseScalarValue(input, context);
        }
    };
    UserDataConverter.prototype.parseArray = function (array, context) {
        var result = [];
        var entryIndex = 0;
        for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
            var entry = array_1[_i];
            var parsedEntry = this.parseData(entry, context.childContextForArray(entryIndex));
            if (parsedEntry == null) {
                // Just include nulls in the array for fields being replaced with a
                // sentinel.
                parsedEntry = NullValue.INSTANCE;
            }
            result.push(parsedEntry);
            entryIndex++;
        }
        return new field_value_ArrayValue(result);
    };
    UserDataConverter.prototype.parseObject = function (obj, context) {
        var _this = this;
        var result = new sorted_map_SortedMap(primitiveComparator);
        forEach(obj, function (key, val) {
            var parsedValue = _this.parseData(val, context.childContextForField(key));
            if (parsedValue != null) {
                result = result.insert(key, parsedValue);
            }
        });
        return new field_value_ObjectValue(result);
    };
    /**
     * Helper to parse a scalar value (i.e. not an Object or Array)
     *
     * @return The parsed value, or null if the value was a FieldValue sentinel
     * that should not be included in the resulting parsed data.
     */
    UserDataConverter.prototype.parseScalarValue = function (value, context) {
        if (value === null) {
            return NullValue.INSTANCE;
        }
        else if (typeof value === 'number') {
            if (isSafeInteger(value)) {
                return new IntegerValue(value);
            }
            else {
                return new DoubleValue(value);
            }
        }
        else if (typeof value === 'boolean') {
            return field_value_BooleanValue.of(value);
        }
        else if (typeof value === 'string') {
            return new field_value_StringValue(value);
        }
        else if (value instanceof Date) {
            return new TimestampValue(timestamp_Timestamp.fromDate(value));
        }
        else if (value instanceof geo_point_GeoPoint) {
            return new GeoPointValue(value);
        }
        else if (value instanceof blob_Blob) {
            return new BlobValue(value);
        }
        else if (value instanceof DocumentKeyReference) {
            return new field_value_RefValue(value.databaseId, value.key);
        }
        else if (value instanceof FieldValueImpl) {
            if (value instanceof DeleteFieldValueImpl) {
                if (context.dataSource == UserDataSource.MergeSet) {
                    return null;
                }
                else if (context.dataSource === UserDataSource.Update) {
                    assert(context.path == null || context.path.length > 0, 'FieldValue.delete() at the top level should have already' +
                        ' been handled.');
                    throw context.createError('FieldValue.delete() can only appear at the top level ' +
                        'of your update data');
                }
                else {
                    // We shouldn't encounter delete sentinels for queries or non-merge set() calls.
                    throw context.createError('FieldValue.delete() can only be used with update() and set() with {merge:true}');
                }
            }
            else if (value instanceof ServerTimestampFieldValueImpl) {
                if (!isWrite(context.dataSource)) {
                    throw context.createError('FieldValue.serverTimestamp() can only be used with set()' +
                        ' and update()');
                }
                if (context.path === null) {
                    throw context.createError('FieldValue.serverTimestamp() is not currently' +
                        ' supported inside arrays');
                }
                context.fieldTransforms.push(new FieldTransform(context.path, ServerTimestampTransform.instance));
                // Return null so this value is omitted from the parsed result.
                return null;
            }
            else {
                return fail('Unknown FieldValue type: ' + value);
            }
        }
        else {
            throw context.createError("Unsupported field value: " + valueDescription(value));
        }
    };
    return UserDataConverter;
}());

/**
 * Checks whether an object looks like a JSON object that should be converted
 * into a struct. Normal class/prototype instances are considered to look like
 * JSON objects since they should be converted to a struct value. Arrays, Dates,
 * GeoPoints, etc. are not considered to look like JSON objects since they map
 * to specific FieldValue types other than ObjectValue.
 */
function looksLikeJsonObject(input) {
    return (typeof input === 'object' &&
        input !== null &&
        !(input instanceof Array) &&
        !(input instanceof Date) &&
        !(input instanceof geo_point_GeoPoint) &&
        !(input instanceof blob_Blob) &&
        !(input instanceof DocumentKeyReference) &&
        !(input instanceof FieldValueImpl));
}
function validatePlainObject(message, context, input) {
    if (!looksLikeJsonObject(input) || !isPlainObject(input)) {
        var description = valueDescription(input);
        if (description === 'an object') {
            // Massage the error if it was an object.
            throw context.createError(message + ' a custom object');
        }
        else {
            throw context.createError(message + ' ' + description);
        }
    }
}
/**
 * Helper that calls fromDotSeparatedString() but wraps any error thrown.
 */
function fieldPathFromArgument(methodName, path) {
    if (path instanceof field_path_FieldPath) {
        return path._internalPath;
    }
    else if (typeof path === 'string') {
        return fieldPathFromDotSeparatedString(methodName, path);
    }
    else {
        var message = 'Field path arguments must be of type string or FieldPath.';
        throw new FirestoreError(Code.INVALID_ARGUMENT, "Function " + methodName + "() called with invalid data. " + message);
    }
}
/**
 * Wraps fromDotSeparatedString with an error message about the method that
 * was thrown.
 * @param methodName The publicly visible method name
 * @param path The dot-separated string form of a field path which will be split
 * on dots.
 */
function fieldPathFromDotSeparatedString(methodName, path) {
    try {
        return fromDotSeparatedString(path)._internalPath;
    }
    catch (e) {
        var message = errorMessage(e);
        throw new FirestoreError(Code.INVALID_ARGUMENT, "Function " + methodName + "() called with invalid data. " + message);
    }
}
/**
 * Extracts the message from a caught exception, which should be an Error object
 * though JS doesn't guarantee that.
 */
function errorMessage(error) {
    return error instanceof Error ? error.message : error.toString();
}

//# sourceMappingURL=user_data_converter.js.map

// CONCATENATED MODULE: ../firestore/dist/esm/src/api/database.js
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
var database___extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
























// The objects that are a part of this API are exposed to third-parties as
// compiled javascript so we want to flag our private members with a leading
// underscore to discourage their use.
// tslint:disable:strip-private-property-underscore
var DEFAULT_HOST = 'firestore.googleapis.com';
var DEFAULT_SSL = true;
/**
 * A concrete type describing all the values that can be applied via a
 * user-supplied firestore.Settings object. This is a separate type so that
 * defaults can be supplied and the value can be checked for equality.
 */
var database_FirestoreSettings = /** @class */ (function () {
    function FirestoreSettings(settings) {
        if (settings.host === undefined) {
            if (settings.ssl !== undefined) {
                throw new FirestoreError(Code.INVALID_ARGUMENT, "Can't provide ssl option if host option is not set");
            }
            this.host = DEFAULT_HOST;
            this.ssl = DEFAULT_SSL;
        }
        else {
            validateNamedType('settings', 'string', 'host', settings.host);
            this.host = settings.host;
            validateNamedOptionalType('settings', 'boolean', 'ssl', settings.ssl);
            this.ssl = defaulted(settings.ssl, DEFAULT_SSL);
        }
        validateOptionNames('settings', settings, ['host', 'ssl', 'credentials']);
        validateNamedOptionalType('settings', 'object', 'credentials', settings.credentials);
        this.credentials = settings.credentials;
    }
    FirestoreSettings.prototype.equals = function (other) {
        return (this.host === other.host &&
            this.ssl === other.ssl &&
            this.credentials === other.credentials);
    };
    return FirestoreSettings;
}());
var FirestoreConfig = /** @class */ (function () {
    function FirestoreConfig() {
    }
    return FirestoreConfig;
}());
/**
 * The root reference to the database.
 */
var database_Firestore = /** @class */ (function () {
    function Firestore(databaseIdOrApp) {
        var _this = this;
        this._queue = new async_queue_AsyncQueue();
        this.INTERNAL = {
            delete: function () {
                if (_this._firestoreClient) {
                    return _this._firestoreClient.shutdown();
                }
                else {
                    return Promise.resolve();
                }
            },
            // Exposed via INTERNAL for use in tests.
            disableNetwork: function () { return _this._firestoreClient.disableNetwork(); },
            enableNetwork: function () { return _this._firestoreClient.enableNetwork(); },
            drainAsyncQueue: function (executeDelayedTasks) {
                return _this._queue.drain(executeDelayedTasks);
            }
        };
        var config = new FirestoreConfig();
        if (typeof databaseIdOrApp.options === 'object') {
            // This is very likely a Firebase app object
            // TODO(b/34177605): Can we somehow use instanceof?
            var app = databaseIdOrApp;
            config.firebaseApp = app;
            config.databaseId = Firestore.databaseIdFromApp(app);
            config.persistenceKey = config.firebaseApp.name;
            config.credentials = new credentials_FirebaseCredentialsProvider(app);
        }
        else {
            var external_1 = databaseIdOrApp;
            if (!external_1.projectId) {
                throw new FirestoreError(Code.INVALID_ARGUMENT, 'Must provide projectId');
            }
            config.databaseId = new database_info_DatabaseId(external_1.projectId, external_1.database);
            // Use a default persistenceKey that lines up with FirebaseApp.
            config.persistenceKey = '[DEFAULT]';
            config.credentials = new credentials_EmptyCredentialsProvider();
        }
        config.settings = new database_FirestoreSettings({});
        this._config = config;
        this._databaseId = config.databaseId;
    }
    Firestore.prototype.settings = function (settingsLiteral) {
        validateExactNumberOfArgs('Firestore.settings', arguments, 1);
        validateArgType('Firestore.settings', 'object', 1, settingsLiteral);
        if (contains(settingsLiteral, 'persistence')) {
            throw new FirestoreError(Code.INVALID_ARGUMENT, '"persistence" is now specified with a separate call to ' +
                'firestore.enablePersistence().');
        }
        var newSettings = new database_FirestoreSettings(settingsLiteral);
        if (this._firestoreClient && !this._config.settings.equals(newSettings)) {
            throw new FirestoreError(Code.FAILED_PRECONDITION, 'Firestore has already been started and its settings can no longer ' +
                'be changed. You can only call settings() before calling any other ' +
                'methods on a Firestore object.');
        }
        this._config.settings = newSettings;
        if (newSettings.credentials !== undefined) {
            this._config.credentials = makeCredentialsProvider(newSettings.credentials);
        }
    };
    Firestore.prototype.enablePersistence = function () {
        if (this._firestoreClient) {
            throw new FirestoreError(Code.FAILED_PRECONDITION, 'Firestore has already been started and persistence can no longer ' +
                'be enabled. You can only call enablePersistence() before calling ' +
                'any other methods on a Firestore object.');
        }
        return this.configureClient(/* persistence= */ true);
    };
    Firestore.prototype.ensureClientConfigured = function () {
        if (!this._firestoreClient) {
            this.configureClient(/* persistence= */ false);
        }
        return this._firestoreClient;
    };
    Firestore.prototype.configureClient = function (persistence) {
        var _this = this;
        assert(!!this._config.settings.host, 'FirestoreSettings.host cannot be falsey');
        assert(!this._firestoreClient, 'configureClient() called multiple times');
        var databaseInfo = new DatabaseInfo(this._config.databaseId, this._config.persistenceKey, this._config.settings.host, this._config.settings.ssl);
        var preConverter = function (value) {
            if (value instanceof database_DocumentReference) {
                var thisDb = _this._config.databaseId;
                var otherDb = value.firestore._config.databaseId;
                if (!otherDb.equals(thisDb)) {
                    throw new FirestoreError(Code.INVALID_ARGUMENT, 'Document reference is for database ' +
                        (otherDb.projectId + "/" + otherDb.database + " but should be ") +
                        ("for database " + thisDb.projectId + "/" + thisDb.database));
                }
                return new DocumentKeyReference(_this._config.databaseId, value._key);
            }
            else {
                return value;
            }
        };
        this._dataConverter = new user_data_converter_UserDataConverter(preConverter);
        this._firestoreClient = new firestore_client_FirestoreClient(platform_PlatformSupport.getPlatform(), databaseInfo, this._config.credentials, this._queue);
        return this._firestoreClient.start(persistence);
    };
    Firestore.databaseIdFromApp = function (app) {
        var options = app.options;
        if (!contains(options, 'projectId')) {
            // TODO(b/62673263): We can safely remove the special handling of
            // 'firestoreId' once alpha testers have upgraded.
            if (contains(options, 'firestoreId')) {
                throw new FirestoreError(Code.INVALID_ARGUMENT, '"firestoreId" is now specified as "projectId" in ' +
                    'firebase.initializeApp.');
            }
            throw new FirestoreError(Code.INVALID_ARGUMENT, '"projectId" not provided in firebase.initializeApp.');
        }
        if (contains(options, 'firestoreOptions')) {
            // TODO(b/62673263): We can safely remove the special handling of
            // 'firestoreOptions' once alpha testers have upgraded.
            throw new FirestoreError(Code.INVALID_ARGUMENT, '"firestoreOptions" values are now specified with ' +
                'Firestore.settings()');
        }
        var projectId = options['projectId'];
        if (!projectId || typeof projectId !== 'string') {
            throw new FirestoreError(Code.INVALID_ARGUMENT, 'projectId must be a string in FirebaseApp.options');
        }
        return new database_info_DatabaseId(projectId);
    };
    Object.defineProperty(Firestore.prototype, "app", {
        get: function () {
            if (!this._config.firebaseApp) {
                throw new FirestoreError(Code.FAILED_PRECONDITION, "Firestore was not initialized using the Firebase SDK. 'app' is " +
                    'not available');
            }
            return this._config.firebaseApp;
        },
        enumerable: true,
        configurable: true
    });
    Firestore.prototype.collection = function (pathString) {
        validateExactNumberOfArgs('Firestore.collection', arguments, 1);
        validateArgType('Firestore.collection', 'string', 1, pathString);
        if (!pathString) {
            throw new FirestoreError(Code.INVALID_ARGUMENT, 'Must provide a non-empty collection path to collection()');
        }
        this.ensureClientConfigured();
        return new database_CollectionReference(path_ResourcePath.fromString(pathString), this);
    };
    Firestore.prototype.doc = function (pathString) {
        validateExactNumberOfArgs('Firestore.doc', arguments, 1);
        validateArgType('Firestore.doc', 'string', 1, pathString);
        if (!pathString) {
            throw new FirestoreError(Code.INVALID_ARGUMENT, 'Must provide a non-empty document path to doc()');
        }
        this.ensureClientConfigured();
        return database_DocumentReference.forPath(path_ResourcePath.fromString(pathString), this);
    };
    Firestore.prototype.runTransaction = function (updateFunction) {
        var _this = this;
        validateExactNumberOfArgs('Firestore.runTransaction', arguments, 1);
        validateArgType('Firestore.runTransaction', 'function', 1, updateFunction);
        return this.ensureClientConfigured().transaction(function (transaction) {
            return updateFunction(new database_Transaction(_this, transaction));
        });
    };
    Firestore.prototype.batch = function () {
        this.ensureClientConfigured();
        return new database_WriteBatch(this);
    };
    Object.defineProperty(Firestore, "logLevel", {
        get: function () {
            switch (getLogLevel()) {
                case LogLevel.DEBUG:
                    return 'debug';
                case LogLevel.ERROR:
                    return 'error';
                case LogLevel.SILENT:
                    return 'silent';
                default:
                    return fail('Unknown log level: ' + getLogLevel());
            }
        },
        enumerable: true,
        configurable: true
    });
    Firestore.setLogLevel = function (level) {
        validateExactNumberOfArgs('Firestore.setLogLevel', arguments, 1);
        validateArgType('Firestore.setLogLevel', 'string', 1, level);
        switch (level) {
            case 'debug':
                setLogLevel(LogLevel.DEBUG);
                break;
            case 'error':
                setLogLevel(LogLevel.ERROR);
                break;
            case 'silent':
                setLogLevel(LogLevel.SILENT);
                break;
            default:
                throw new FirestoreError(Code.INVALID_ARGUMENT, 'Invalid log level: ' + level);
        }
    };
    return Firestore;
}());

/**
 * A reference to a transaction.
 */
var database_Transaction = /** @class */ (function () {
    function Transaction(_firestore, _transaction) {
        this._firestore = _firestore;
        this._transaction = _transaction;
    }
    Transaction.prototype.get = function (documentRef) {
        var _this = this;
        validateExactNumberOfArgs('Transaction.get', arguments, 1);
        var ref = validateReference('Transaction.get', documentRef, this._firestore);
        return this._transaction
            .lookup([ref._key])
            .then(function (docs) {
            if (!docs || docs.length !== 1) {
                return fail('Mismatch in docs returned from document lookup.');
            }
            var doc = docs[0];
            if (doc instanceof document_NoDocument) {
                return new database_DocumentSnapshot(_this._firestore, ref._key, null, false);
            }
            return new database_DocumentSnapshot(_this._firestore, ref._key, doc, false);
        });
    };
    Transaction.prototype.set = function (documentRef, value, options) {
        validateBetweenNumberOfArgs('Transaction.set', arguments, 2, 3);
        var ref = validateReference('Transaction.set', documentRef, this._firestore);
        options = validateSetOptions('Transaction.set', options);
        var parsed = options.merge
            ? this._firestore._dataConverter.parseMergeData('Transaction.set', value)
            : this._firestore._dataConverter.parseSetData('Transaction.set', value);
        this._transaction.set(ref._key, parsed);
        return this;
    };
    Transaction.prototype.update = function (documentRef, fieldOrUpdateData, value) {
        var moreFieldsAndValues = [];
        for (var _i = 3; _i < arguments.length; _i++) {
            moreFieldsAndValues[_i - 3] = arguments[_i];
        }
        var ref;
        var parsed;
        if (typeof fieldOrUpdateData === 'string' ||
            fieldOrUpdateData instanceof field_path_FieldPath) {
            validateAtLeastNumberOfArgs('Transaction.update', arguments, 3);
            ref = validateReference('Transaction.update', documentRef, this._firestore);
            parsed = this._firestore._dataConverter.parseUpdateVarargs('Transaction.update', fieldOrUpdateData, value, moreFieldsAndValues);
        }
        else {
            validateExactNumberOfArgs('Transaction.update', arguments, 2);
            ref = validateReference('Transaction.update', documentRef, this._firestore);
            parsed = this._firestore._dataConverter.parseUpdateData('Transaction.update', fieldOrUpdateData);
        }
        this._transaction.update(ref._key, parsed);
        return this;
    };
    Transaction.prototype.delete = function (documentRef) {
        validateExactNumberOfArgs('Transaction.delete', arguments, 1);
        var ref = validateReference('Transaction.delete', documentRef, this._firestore);
        this._transaction.delete(ref._key);
        return this;
    };
    return Transaction;
}());

var database_WriteBatch = /** @class */ (function () {
    function WriteBatch(_firestore) {
        this._firestore = _firestore;
        this._mutations = [];
        this._committed = false;
    }
    WriteBatch.prototype.set = function (documentRef, value, options) {
        validateBetweenNumberOfArgs('WriteBatch.set', arguments, 2, 3);
        this.verifyNotCommitted();
        var ref = validateReference('WriteBatch.set', documentRef, this._firestore);
        options = validateSetOptions('WriteBatch.set', options);
        var parsed = options.merge
            ? this._firestore._dataConverter.parseMergeData('WriteBatch.set', value)
            : this._firestore._dataConverter.parseSetData('WriteBatch.set', value);
        this._mutations = this._mutations.concat(parsed.toMutations(ref._key, mutation_Precondition.NONE));
        return this;
    };
    WriteBatch.prototype.update = function (documentRef, fieldOrUpdateData, value) {
        var moreFieldsAndValues = [];
        for (var _i = 3; _i < arguments.length; _i++) {
            moreFieldsAndValues[_i - 3] = arguments[_i];
        }
        this.verifyNotCommitted();
        var ref;
        var parsed;
        if (typeof fieldOrUpdateData === 'string' ||
            fieldOrUpdateData instanceof field_path_FieldPath) {
            validateAtLeastNumberOfArgs('WriteBatch.update', arguments, 3);
            ref = validateReference('WriteBatch.update', documentRef, this._firestore);
            parsed = this._firestore._dataConverter.parseUpdateVarargs('WriteBatch.update', fieldOrUpdateData, value, moreFieldsAndValues);
        }
        else {
            validateExactNumberOfArgs('WriteBatch.update', arguments, 2);
            ref = validateReference('WriteBatch.update', documentRef, this._firestore);
            parsed = this._firestore._dataConverter.parseUpdateData('WriteBatch.update', fieldOrUpdateData);
        }
        this._mutations = this._mutations.concat(parsed.toMutations(ref._key, mutation_Precondition.exists(true)));
        return this;
    };
    WriteBatch.prototype.delete = function (documentRef) {
        validateExactNumberOfArgs('WriteBatch.delete', arguments, 1);
        this.verifyNotCommitted();
        var ref = validateReference('WriteBatch.delete', documentRef, this._firestore);
        this._mutations = this._mutations.concat(new mutation_DeleteMutation(ref._key, mutation_Precondition.NONE));
        return this;
    };
    WriteBatch.prototype.commit = function () {
        this.verifyNotCommitted();
        this._committed = true;
        if (this._mutations.length > 0) {
            return this._firestore.ensureClientConfigured().write(this._mutations);
        }
        else {
            return Promise.resolve();
        }
    };
    WriteBatch.prototype.verifyNotCommitted = function () {
        if (this._committed) {
            throw new FirestoreError(Code.FAILED_PRECONDITION, 'A write batch can no longer be used after commit() ' +
                'has been called.');
        }
    };
    return WriteBatch;
}());

/**
 * A reference to a particular document in a collection in the database.
 */
var database_DocumentReference = /** @class */ (function () {
    function DocumentReference(_key, firestore) {
        this._key = _key;
        this.firestore = firestore;
        this._firestoreClient = this.firestore.ensureClientConfigured();
    }
    DocumentReference.forPath = function (path, firestore) {
        if (path.length % 2 !== 0) {
            throw new FirestoreError(Code.INVALID_ARGUMENT, 'Invalid document reference. Document ' +
                'references must have an even number of segments, but ' +
                (path.canonicalString() + " has " + path.length));
        }
        return new DocumentReference(new document_key_DocumentKey(path), firestore);
    };
    Object.defineProperty(DocumentReference.prototype, "id", {
        get: function () {
            return this._key.path.lastSegment();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DocumentReference.prototype, "parent", {
        get: function () {
            return new database_CollectionReference(this._key.path.popLast(), this.firestore);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DocumentReference.prototype, "path", {
        get: function () {
            return this._key.path.canonicalString();
        },
        enumerable: true,
        configurable: true
    });
    DocumentReference.prototype.collection = function (pathString) {
        validateExactNumberOfArgs('DocumentReference.collection', arguments, 1);
        validateArgType('DocumentReference.collection', 'string', 1, pathString);
        if (!pathString) {
            throw new FirestoreError(Code.INVALID_ARGUMENT, 'Must provide a non-empty collection name to collection()');
        }
        var path = path_ResourcePath.fromString(pathString);
        return new database_CollectionReference(this._key.path.child(path), this.firestore);
    };
    DocumentReference.prototype.isEqual = function (other) {
        if (!(other instanceof DocumentReference)) {
            throw invalidClassError('isEqual', 'DocumentReference', 1, other);
        }
        return this.firestore === other.firestore && this._key.equals(other._key);
    };
    DocumentReference.prototype.set = function (value, options) {
        validateBetweenNumberOfArgs('DocumentReference.set', arguments, 1, 2);
        options = validateSetOptions('DocumentReference.set', options);
        var parsed = options.merge
            ? this.firestore._dataConverter.parseMergeData('DocumentReference.set', value)
            : this.firestore._dataConverter.parseSetData('DocumentReference.set', value);
        return this._firestoreClient.write(parsed.toMutations(this._key, mutation_Precondition.NONE));
    };
    DocumentReference.prototype.update = function (fieldOrUpdateData, value) {
        var moreFieldsAndValues = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            moreFieldsAndValues[_i - 2] = arguments[_i];
        }
        var parsed;
        if (typeof fieldOrUpdateData === 'string' ||
            fieldOrUpdateData instanceof field_path_FieldPath) {
            validateAtLeastNumberOfArgs('DocumentReference.update', arguments, 2);
            parsed = this.firestore._dataConverter.parseUpdateVarargs('DocumentReference.update', fieldOrUpdateData, value, moreFieldsAndValues);
        }
        else {
            validateExactNumberOfArgs('DocumentReference.update', arguments, 1);
            parsed = this.firestore._dataConverter.parseUpdateData('DocumentReference.update', fieldOrUpdateData);
        }
        return this._firestoreClient.write(parsed.toMutations(this._key, mutation_Precondition.exists(true)));
    };
    DocumentReference.prototype.delete = function () {
        validateExactNumberOfArgs('DocumentReference.delete', arguments, 0);
        return this._firestoreClient.write([
            new mutation_DeleteMutation(this._key, mutation_Precondition.NONE)
        ]);
    };
    DocumentReference.prototype.onSnapshot = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        validateBetweenNumberOfArgs('DocumentReference.onSnapshot', arguments, 1, 4);
        var options = {
            includeMetadataChanges: false
        };
        var observer;
        var currArg = 0;
        if (typeof args[currArg] === 'object' &&
            !isPartialObserver(args[currArg])) {
            options = args[currArg];
            validateOptionNames('DocumentReference.onSnapshot', options, [
                'includeMetadataChanges'
            ]);
            validateNamedOptionalType('DocumentReference.onSnapshot', 'boolean', 'includeMetadataChanges', options.includeMetadataChanges);
            currArg++;
        }
        var internalOptions = {
            includeDocumentMetadataChanges: options.includeMetadataChanges,
            includeQueryMetadataChanges: options.includeMetadataChanges
        };
        if (isPartialObserver(args[currArg])) {
            observer = args[currArg];
        }
        else {
            validateArgType('DocumentReference.onSnapshot', 'function', currArg, args[currArg]);
            validateOptionalArgType('DocumentReference.onSnapshot', 'function', currArg + 1, args[currArg + 1]);
            validateOptionalArgType('DocumentReference.onSnapshot', 'function', currArg + 2, args[currArg + 2]);
            observer = {
                next: args[currArg],
                error: args[currArg + 1],
                complete: args[currArg + 2]
            };
        }
        return this.onSnapshotInternal(internalOptions, observer);
    };
    DocumentReference.prototype.onSnapshotInternal = function (options, observer) {
        var _this = this;
        var errHandler = function (err) {
            console.error('Uncaught Error in onSnapshot:', err);
        };
        if (observer.error) {
            errHandler = observer.error.bind(observer);
        }
        var asyncObserver = new AsyncObserver({
            next: function (snapshot) {
                if (observer.next) {
                    assert(snapshot.docs.size <= 1, 'Too many documents returned on a document query');
                    var doc = snapshot.docs.get(_this._key);
                    observer.next(new database_DocumentSnapshot(_this.firestore, _this._key, doc, snapshot.fromCache));
                }
            },
            error: errHandler
        });
        var internalListener = this._firestoreClient.listen(query_Query.atPath(this._key.path), asyncObserver, options);
        return function () {
            asyncObserver.mute();
            _this._firestoreClient.unlisten(internalListener);
        };
    };
    DocumentReference.prototype.get = function () {
        var _this = this;
        validateExactNumberOfArgs('DocumentReference.get', arguments, 0);
        return new Promise(function (resolve, reject) {
            var unlisten = _this.onSnapshotInternal({
                includeQueryMetadataChanges: true,
                includeDocumentMetadataChanges: true,
                waitForSyncWhenOnline: true
            }, {
                next: function (snap) {
                    // Remove query first before passing event to user to avoid
                    // user actions affecting the now stale query.
                    unlisten();
                    if (!snap.exists && snap.metadata.fromCache) {
                        // TODO(dimond): If we're online and the document doesn't
                        // exist then we resolve with a doc.exists set to false. If
                        // we're offline however, we reject the Promise in this
                        // case. Two options: 1) Cache the negative response from
                        // the server so we can deliver that even when you're
                        // offline 2) Actually reject the Promise in the online case
                        // if the document doesn't exist.
                        reject(new FirestoreError(Code.ABORTED, 'Failed to get document because the client is ' + 'offline.'));
                    }
                    else {
                        resolve(snap);
                    }
                },
                error: reject
            });
        });
    };
    return DocumentReference;
}());

var database_DocumentSnapshot = /** @class */ (function () {
    function DocumentSnapshot(_firestore, _key, _document, _fromCache) {
        this._firestore = _firestore;
        this._key = _key;
        this._document = _document;
        this._fromCache = _fromCache;
    }
    DocumentSnapshot.prototype.data = function () {
        validateExactNumberOfArgs('DocumentSnapshot.data', arguments, 0);
        if (!this._document) {
            throw new FirestoreError(Code.NOT_FOUND, "This document doesn't exist. Check doc.exists to make sure " +
                'the document exists before calling doc.data().');
        }
        return this.convertObject(this._document.data);
    };
    DocumentSnapshot.prototype.get = function (fieldPath) {
        validateExactNumberOfArgs('DocumentSnapshot.get', arguments, 1);
        if (!this._document) {
            throw new FirestoreError(Code.NOT_FOUND, "This document doesn't exist. Check doc.exists to make sure " +
                'the document exists before calling doc.get().');
        }
        var value = this._document.data.field(fieldPathFromArgument('DocumentSnapshot.get', fieldPath));
        return value === undefined ? undefined : this.convertValue(value);
    };
    Object.defineProperty(DocumentSnapshot.prototype, "id", {
        get: function () {
            return this._key.path.lastSegment();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DocumentSnapshot.prototype, "ref", {
        get: function () {
            return new database_DocumentReference(this._key, this._firestore);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DocumentSnapshot.prototype, "exists", {
        get: function () {
            return this._document !== null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DocumentSnapshot.prototype, "metadata", {
        get: function () {
            return {
                hasPendingWrites: this._document !== null && this._document.hasLocalMutations,
                fromCache: this._fromCache
            };
        },
        enumerable: true,
        configurable: true
    });
    DocumentSnapshot.prototype.convertObject = function (data) {
        var _this = this;
        var result = {};
        data.forEach(function (key, value) {
            result[key] = _this.convertValue(value);
        });
        return result;
    };
    DocumentSnapshot.prototype.convertValue = function (value) {
        if (value instanceof field_value_ObjectValue) {
            return this.convertObject(value);
        }
        else if (value instanceof field_value_ArrayValue) {
            return this.convertArray(value);
        }
        else if (value instanceof field_value_RefValue) {
            var key = value.value();
            var database = this._firestore.ensureClientConfigured().databaseId();
            if (!value.databaseId.equals(database)) {
                // TODO(b/64130202): Somehow support foreign references.
                log_error("Document " + this._key.path + " contains a document " +
                    "reference within a different database (" +
                    (value.databaseId.projectId + "/" + value.databaseId.database + ") which is not ") +
                    "supported. It will be treated as a reference in the current " +
                    ("database (" + database.projectId + "/" + database.database + ") ") +
                    "instead.");
            }
            return new database_DocumentReference(key, this._firestore);
        }
        else {
            return value.value();
        }
    };
    DocumentSnapshot.prototype.convertArray = function (data) {
        var _this = this;
        return data.internalValue.map(function (value) {
            return _this.convertValue(value);
        });
    };
    return DocumentSnapshot;
}());

var database_Query = /** @class */ (function () {
    function Query(_query, firestore) {
        this._query = _query;
        this.firestore = firestore;
    }
    Query.prototype.where = function (field, opStr, value) {
        validateExactNumberOfArgs('Query.where', arguments, 3);
        validateArgType('Query.where', 'string', 2, opStr);
        validateDefined('Query.where', 3, value);
        var fieldValue;
        var fieldPath = fieldPathFromArgument('Query.where', field);
        if (fieldPath.isKeyField()) {
            if (typeof value === 'string') {
                if (value.indexOf('/') !== -1) {
                    // TODO(dimond): Allow slashes once ancestor queries are supported
                    throw new FirestoreError(Code.INVALID_ARGUMENT, 'Function Query.where() requires its third parameter to be a ' +
                        'valid document ID if the first parameter is ' +
                        'FieldPath.documentId(), but it contains a slash.');
                }
                if (value === '') {
                    throw new FirestoreError(Code.INVALID_ARGUMENT, 'Function Query.where() requires its third parameter to be a ' +
                        'valid document ID if the first parameter is ' +
                        'FieldPath.documentId(), but it was an empty string.');
                }
                var path = this._query.path.child(new path_ResourcePath([value]));
                assert(path.length % 2 === 0, 'Path should be a document key');
                fieldValue = new field_value_RefValue(this.firestore._databaseId, new document_key_DocumentKey(path));
            }
            else if (value instanceof database_DocumentReference) {
                var ref = value;
                fieldValue = new field_value_RefValue(this.firestore._databaseId, ref._key);
            }
            else {
                throw new FirestoreError(Code.INVALID_ARGUMENT, "Function Query.where() requires its third parameter to be a " +
                    "string or a DocumentReference if the first parameter is " +
                    "FieldPath.documentId(), but it was: " +
                    (valueDescription(value) + "."));
            }
        }
        else {
            fieldValue = this.firestore._dataConverter.parseQueryValue('Query.where', value);
        }
        var filter = fieldFilter(fieldPath, query_RelationOp.fromString(opStr), fieldValue);
        this.validateNewFilter(filter);
        return new Query(this._query.addFilter(filter), this.firestore);
    };
    Query.prototype.orderBy = function (field, directionStr) {
        validateBetweenNumberOfArgs('Query.orderBy', arguments, 1, 2);
        validateOptionalArgType('Query.orderBy', 'string', 2, directionStr);
        var direction;
        if (directionStr === undefined || directionStr === 'asc') {
            direction = Direction.ASCENDING;
        }
        else if (directionStr === 'desc') {
            direction = Direction.DESCENDING;
        }
        else {
            throw new FirestoreError(Code.INVALID_ARGUMENT, "Function Query.orderBy() has unknown direction '" + directionStr + "', " +
                "expected 'asc' or 'desc'.");
        }
        if (this._query.startAt !== null) {
            throw new FirestoreError(Code.INVALID_ARGUMENT, 'Invalid query. You must not call Query.startAt() or ' +
                'Query.startAfter() before calling Query.orderBy().');
        }
        if (this._query.endAt !== null) {
            throw new FirestoreError(Code.INVALID_ARGUMENT, 'Invalid query. You must not call Query.endAt() or ' +
                'Query.endBefore() before calling Query.orderBy().');
        }
        var fieldPath = fieldPathFromArgument('Query.orderBy', field);
        var orderBy = new query_OrderBy(fieldPath, direction);
        this.validateNewOrderBy(orderBy);
        return new Query(this._query.addOrderBy(orderBy), this.firestore);
    };
    Query.prototype.limit = function (n) {
        validateExactNumberOfArgs('Query.limit', arguments, 1);
        validateArgType('Query.limit', 'number', 1, n);
        if (n <= 0) {
            throw new FirestoreError(Code.INVALID_ARGUMENT, "Invalid Query. Query limit (" + n + ") is invalid. Limit must be " +
                'positive.');
        }
        return new Query(this._query.withLimit(n), this.firestore);
    };
    Query.prototype.startAt = function (docOrField) {
        var fields = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            fields[_i - 1] = arguments[_i];
        }
        validateAtLeastNumberOfArgs('Query.startAt', arguments, 1);
        var bound = this.boundFromDocOrFields('Query.startAt', docOrField, fields, 
        /*before=*/ true);
        return new Query(this._query.withStartAt(bound), this.firestore);
    };
    Query.prototype.startAfter = function (docOrField) {
        var fields = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            fields[_i - 1] = arguments[_i];
        }
        validateAtLeastNumberOfArgs('Query.startAfter', arguments, 1);
        var bound = this.boundFromDocOrFields('Query.startAfter', docOrField, fields, 
        /*before=*/ false);
        return new Query(this._query.withStartAt(bound), this.firestore);
    };
    Query.prototype.endBefore = function (docOrField) {
        var fields = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            fields[_i - 1] = arguments[_i];
        }
        validateAtLeastNumberOfArgs('Query.endBefore', arguments, 1);
        var bound = this.boundFromDocOrFields('Query.endBefore', docOrField, fields, 
        /*before=*/ true);
        return new Query(this._query.withEndAt(bound), this.firestore);
    };
    Query.prototype.endAt = function (docOrField) {
        var fields = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            fields[_i - 1] = arguments[_i];
        }
        validateAtLeastNumberOfArgs('Query.endAt', arguments, 1);
        var bound = this.boundFromDocOrFields('Query.endAt', docOrField, fields, 
        /*before=*/ false);
        return new Query(this._query.withEndAt(bound), this.firestore);
    };
    Query.prototype.isEqual = function (other) {
        if (!(other instanceof Query)) {
            throw invalidClassError('isEqual', 'Query', 1, other);
        }
        return (this.firestore === other.firestore && this._query.equals(other._query));
    };
    /** Helper function to create a bound from a document or fields */
    Query.prototype.boundFromDocOrFields = function (methodName, docOrField, fields, before) {
        validateDefined(methodName, 1, docOrField);
        if (docOrField instanceof database_DocumentSnapshot) {
            if (fields.length > 0) {
                throw new FirestoreError(Code.INVALID_ARGUMENT, "Too many arguments provided to " + methodName + "().");
            }
            var snap = docOrField;
            if (!snap.exists) {
                throw new FirestoreError(Code.NOT_FOUND, "Can't use a DocumentSnapshot that doesn't exist for " +
                    (methodName + "()."));
            }
            return this.boundFromDocument(methodName, snap._document, before);
        }
        else {
            var allFields = [docOrField].concat(fields);
            return this.boundFromFields(methodName, allFields, before);
        }
    };
    /**
     * Create a Bound from a query and a document.
     *
     * Note that the Bound will always include the key of the document
     * and so only the provided document will compare equal to the returned
     * position.
     *
     * Will throw if the document does not contain all fields of the order by
     * of the query.
     */
    Query.prototype.boundFromDocument = function (methodName, doc, before) {
        var components = [];
        // Because people expect to continue/end a query at the exact document
        // provided, we need to use the implicit sort order rather than the explicit
        // sort order, because it's guaranteed to contain the document key. That way
        // the position becomes unambiguous and the query continues/ends exactly at
        // the provided document. Without the key (by using the explicit sort
        // orders), multiple documents could match the position, yielding duplicate
        // results.
        for (var _i = 0, _a = this._query.orderBy; _i < _a.length; _i++) {
            var orderBy = _a[_i];
            if (orderBy.field.isKeyField()) {
                components.push(new field_value_RefValue(this.firestore._databaseId, doc.key));
            }
            else {
                var value = doc.field(orderBy.field);
                if (value !== undefined) {
                    components.push(value);
                }
                else {
                    var field = orderBy.field.canonicalString();
                    throw new FirestoreError(Code.INVALID_ARGUMENT, "Invalid query. You are trying to start or end a query using a " +
                        ("document for which the field '" + field + "' (used as the ") +
                        "orderBy) does not exist.");
                }
            }
        }
        return new query_Bound(components, before);
    };
    /**
     * Converts a list of field values to a Bound for the given query.
     */
    Query.prototype.boundFromFields = function (methodName, values, before) {
        // Use explicit order by's because it has to match the query the user made
        var orderBy = this._query.explicitOrderBy;
        if (values.length > orderBy.length) {
            throw new FirestoreError(Code.INVALID_ARGUMENT, "Too many arguments provided to " + methodName + "(). " +
                "The number of arguments must be less than or equal to the " +
                "number of Query.orderBy() clauses");
        }
        var components = [];
        for (var i = 0; i < values.length; i++) {
            var rawValue = values[i];
            var orderByComponent = orderBy[i];
            if (orderByComponent.field.isKeyField()) {
                if (typeof rawValue !== 'string') {
                    throw new FirestoreError(Code.INVALID_ARGUMENT, "Invalid query. Expected a string for document ID in " +
                        (methodName + "(), but got a " + typeof rawValue));
                }
                if (rawValue.indexOf('/') !== -1) {
                    throw new FirestoreError(Code.INVALID_ARGUMENT, "Invalid query. Document ID '" + rawValue + "' contains a slash in " +
                        (methodName + "()"));
                }
                var key = new document_key_DocumentKey(this._query.path.child(rawValue));
                components.push(new field_value_RefValue(this.firestore._databaseId, key));
            }
            else {
                var wrapped = this.firestore._dataConverter.parseQueryValue(methodName, rawValue);
                components.push(wrapped);
            }
        }
        return new query_Bound(components, before);
    };
    Query.prototype.onSnapshot = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        validateBetweenNumberOfArgs('Query.onSnapshot', arguments, 1, 4);
        var options = {};
        var observer;
        var currArg = 0;
        if (typeof args[currArg] === 'object' &&
            !isPartialObserver(args[currArg])) {
            options = args[currArg];
            validateOptionNames('Query.onSnapshot', options, [
                'includeQueryMetadataChanges',
                'includeDocumentMetadataChanges'
            ]);
            validateNamedOptionalType('Query.onSnapshot', 'boolean', 'includeDocumentMetadataChanges', options.includeDocumentMetadataChanges);
            validateNamedOptionalType('Query.onSnapshot', 'boolean', 'includeQueryMetadataChanges', options.includeQueryMetadataChanges);
            currArg++;
        }
        if (isPartialObserver(args[currArg])) {
            observer = args[currArg];
        }
        else {
            validateArgType('Query.onSnapshot', 'function', currArg, args[currArg]);
            validateOptionalArgType('Query.onSnapshot', 'function', currArg + 1, args[currArg + 1]);
            validateOptionalArgType('Query.onSnapshot', 'function', currArg + 2, args[currArg + 2]);
            observer = {
                next: args[currArg],
                error: args[currArg + 1],
                complete: args[currArg + 2]
            };
        }
        return this.onSnapshotInternal(options, observer);
    };
    Query.prototype.onSnapshotInternal = function (options, observer) {
        var _this = this;
        var errHandler = function (err) {
            console.error('Uncaught Error in onSnapshot:', err);
        };
        if (observer.error) {
            errHandler = observer.error.bind(observer);
        }
        var asyncObserver = new AsyncObserver({
            next: function (result) {
                if (observer.next) {
                    observer.next(new database_QuerySnapshot(_this.firestore, _this._query, result));
                }
            },
            error: errHandler
        });
        var firestoreClient = this.firestore.ensureClientConfigured();
        var internalListener = firestoreClient.listen(this._query, asyncObserver, options);
        return function () {
            asyncObserver.mute();
            firestoreClient.unlisten(internalListener);
        };
    };
    Query.prototype.get = function () {
        var _this = this;
        validateExactNumberOfArgs('Query.get', arguments, 0);
        return new Promise(function (resolve, reject) {
            var unlisten = _this.onSnapshotInternal({
                includeDocumentMetadataChanges: false,
                includeQueryMetadataChanges: true,
                waitForSyncWhenOnline: true
            }, {
                next: function (result) {
                    // Remove query first before passing event to user to avoid
                    // user actions affecting the now stale query.
                    unlisten();
                    resolve(result);
                },
                error: reject
            });
        });
    };
    Query.prototype.validateNewFilter = function (filter) {
        if (filter instanceof query_RelationFilter && filter.isInequality()) {
            var existingField = this._query.getInequalityFilterField();
            if (existingField !== null && !existingField.equals(filter.field)) {
                throw new FirestoreError(Code.INVALID_ARGUMENT, 'Invalid query. All where filters with an inequality' +
                    ' (<, <=, >, or >=) must be on the same field. But you have' +
                    (" inequality filters on '" + existingField.toString() + "'") +
                    (" and '" + filter.field.toString() + "'"));
            }
            var firstOrderByField = this._query.getFirstOrderByField();
            if (firstOrderByField !== null) {
                this.validateOrderByAndInequalityMatch(filter.field, firstOrderByField);
            }
        }
    };
    Query.prototype.validateNewOrderBy = function (orderBy) {
        if (this._query.getFirstOrderByField() === null) {
            // This is the first order by. It must match any inequality.
            var inequalityField = this._query.getInequalityFilterField();
            if (inequalityField !== null) {
                this.validateOrderByAndInequalityMatch(inequalityField, orderBy.field);
            }
        }
    };
    Query.prototype.validateOrderByAndInequalityMatch = function (inequality, orderBy) {
        if (!orderBy.equals(inequality)) {
            throw new FirestoreError(Code.INVALID_ARGUMENT, "Invalid query. You have a where filter with an inequality " +
                ("(<, <=, >, or >=) on field '" + inequality.toString() + "' ") +
                ("and so you must also use '" + inequality.toString() + "' ") +
                "as your first Query.orderBy(), but your first Query.orderBy() " +
                ("is on field '" + orderBy.toString() + "' instead."));
        }
    };
    return Query;
}());

var database_QuerySnapshot = /** @class */ (function () {
    function QuerySnapshot(_firestore, _originalQuery, _snapshot) {
        this._firestore = _firestore;
        this._originalQuery = _originalQuery;
        this._snapshot = _snapshot;
        this._cachedChanges = null;
        this.metadata = {
            fromCache: _snapshot.fromCache,
            hasPendingWrites: _snapshot.hasPendingWrites
        };
    }
    Object.defineProperty(QuerySnapshot.prototype, "docs", {
        get: function () {
            var result = [];
            this.forEach(function (doc) { return result.push(doc); });
            return result;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuerySnapshot.prototype, "empty", {
        get: function () {
            return this._snapshot.docs.isEmpty();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuerySnapshot.prototype, "size", {
        get: function () {
            return this._snapshot.docs.size;
        },
        enumerable: true,
        configurable: true
    });
    QuerySnapshot.prototype.forEach = function (callback, thisArg) {
        var _this = this;
        validateBetweenNumberOfArgs('QuerySnapshot.forEach', arguments, 1, 2);
        validateArgType('QuerySnapshot.forEach', 'function', 1, callback);
        this._snapshot.docs.forEach(function (doc) {
            callback.call(thisArg, _this.convertToDocumentImpl(doc));
        });
    };
    Object.defineProperty(QuerySnapshot.prototype, "query", {
        get: function () {
            return new database_Query(this._originalQuery, this._firestore);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuerySnapshot.prototype, "docChanges", {
        get: function () {
            if (!this._cachedChanges) {
                this._cachedChanges = changesFromSnapshot(this._firestore, this._snapshot);
            }
            return this._cachedChanges;
        },
        enumerable: true,
        configurable: true
    });
    QuerySnapshot.prototype.convertToDocumentImpl = function (doc) {
        return new database_DocumentSnapshot(this._firestore, doc.key, doc, this.metadata.fromCache);
    };
    return QuerySnapshot;
}());

var database_CollectionReference = /** @class */ (function (_super) {
    database___extends(CollectionReference, _super);
    function CollectionReference(path, firestore) {
        var _this = _super.call(this, query_Query.atPath(path), firestore) || this;
        if (path.length % 2 !== 1) {
            throw new FirestoreError(Code.INVALID_ARGUMENT, 'Invalid collection reference. Collection ' +
                'references must have an odd number of segments, but ' +
                (path.canonicalString() + " has " + path.length));
        }
        return _this;
    }
    Object.defineProperty(CollectionReference.prototype, "id", {
        get: function () {
            return this._query.path.lastSegment();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CollectionReference.prototype, "parent", {
        get: function () {
            var parentPath = this._query.path.popLast();
            if (parentPath.isEmpty()) {
                return null;
            }
            else {
                return new database_DocumentReference(new document_key_DocumentKey(parentPath), this.firestore);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CollectionReference.prototype, "path", {
        get: function () {
            return this._query.path.canonicalString();
        },
        enumerable: true,
        configurable: true
    });
    CollectionReference.prototype.doc = function (pathString) {
        validateBetweenNumberOfArgs('CollectionReference.doc', arguments, 0, 1);
        // We allow omission of 'pathString' but explicitly prohibit passing in both
        // 'undefined' and 'null'.
        if (arguments.length === 0) {
            pathString = misc_AutoId.newId();
        }
        validateArgType('CollectionReference.doc', 'string', 1, pathString);
        if (pathString === '') {
            throw new FirestoreError(Code.INVALID_ARGUMENT, 'Document path must be a non-empty string');
        }
        var path = path_ResourcePath.fromString(pathString);
        return database_DocumentReference.forPath(this._query.path.child(path), this.firestore);
    };
    CollectionReference.prototype.add = function (value) {
        validateExactNumberOfArgs('CollectionReference.add', arguments, 1);
        validateArgType('CollectionReference.add', 'object', 1, value);
        var docRef = this.doc();
        return docRef.set(value).then(function () { return docRef; });
    };
    return CollectionReference;
}(database_Query));

function validateSetOptions(methodName, options) {
    if (options === undefined) {
        return {
            merge: false
        };
    }
    validateOptionNames(methodName, options, ['merge']);
    validateNamedOptionalType(methodName, 'boolean', 'merge', options.merge);
    return options;
}
function validateReference(methodName, documentRef, firestore) {
    if (!(documentRef instanceof database_DocumentReference)) {
        throw invalidClassError(methodName, 'DocumentReference', 1, documentRef);
    }
    else if (documentRef.firestore !== firestore) {
        throw new FirestoreError(Code.INVALID_ARGUMENT, 'Provided document reference is from a different Firestore instance.');
    }
    else {
        return documentRef;
    }
}
/**
 * Calculates the array of firestore.DocumentChange's for a given ViewSnapshot.
 *
 * Exported for testing.
 */
function changesFromSnapshot(firestore, snapshot) {
    if (snapshot.oldDocs.isEmpty()) {
        // Special case the first snapshot because index calculation is easy and
        // fast
        var lastDoc_1;
        var index_1 = 0;
        return snapshot.docChanges.map(function (change) {
            var doc = new database_DocumentSnapshot(firestore, change.doc.key, change.doc, snapshot.fromCache);
            assert(change.type === ChangeType.Added, 'Invalid event type for first snapshot');
            assert(!lastDoc_1 || snapshot.query.docComparator(lastDoc_1, change.doc) < 0, 'Got added events in wrong order');
            lastDoc_1 = change.doc;
            return {
                type: 'added',
                doc: doc,
                oldIndex: -1,
                newIndex: index_1++
            };
        });
    }
    else {
        // A DocumentSet that is updated incrementally as changes are applied to use
        // to lookup the index of a document.
        var indexTracker_1 = snapshot.oldDocs;
        return snapshot.docChanges.map(function (change) {
            var doc = new database_DocumentSnapshot(firestore, change.doc.key, change.doc, snapshot.fromCache);
            var oldIndex = -1;
            var newIndex = -1;
            if (change.type !== ChangeType.Added) {
                oldIndex = indexTracker_1.indexOf(change.doc.key);
                assert(oldIndex >= 0, 'Index for document not found');
                indexTracker_1 = indexTracker_1.delete(change.doc.key);
            }
            if (change.type !== ChangeType.Removed) {
                indexTracker_1 = indexTracker_1.add(change.doc);
                newIndex = indexTracker_1.indexOf(change.doc.key);
            }
            return { type: resultChangeType(change.type), doc: doc, oldIndex: oldIndex, newIndex: newIndex };
        });
    }
}
function resultChangeType(type) {
    switch (type) {
        case ChangeType.Added:
            return 'added';
        case ChangeType.Modified:
        case ChangeType.Metadata:
            return 'modified';
        case ChangeType.Removed:
            return 'removed';
        default:
            return fail('Unknown change type: ' + type);
    }
}
// Export the classes with a private constructor (it will fail if invoked
// at runtime). Note that this still allows instanceof checks.
// We're treating the variables as class names, so disable checking for lower
// case variable names.
// tslint:disable:variable-name
var PublicFirestore = makeConstructorPrivate(database_Firestore, 'Use firebase.firestore() instead.');
var PublicTransaction = makeConstructorPrivate(database_Transaction, 'Use firebase.firestore().runTransaction() instead.');
var PublicWriteBatch = makeConstructorPrivate(database_WriteBatch, 'Use firebase.firestore().batch() instead.');
var PublicDocumentReference = makeConstructorPrivate(database_DocumentReference, 'Use firebase.firestore().doc() instead.');
var PublicDocumentSnapshot = makeConstructorPrivate(database_DocumentSnapshot);
var PublicQuery = makeConstructorPrivate(database_Query);
var PublicQuerySnapshot = makeConstructorPrivate(database_QuerySnapshot);
var PublicCollectionReference = makeConstructorPrivate(database_CollectionReference, 'Use firebase.firestore().collection() instead.');
// tslint:enable:variable-name

//# sourceMappingURL=database.js.map

// CONCATENATED MODULE: ../firestore/dist/esm/src/platform/config.js
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






var firestoreNamespace = {
    Firestore: PublicFirestore,
    GeoPoint: geo_point_GeoPoint,
    Blob: PublicBlob,
    Transaction: PublicTransaction,
    WriteBatch: PublicWriteBatch,
    DocumentReference: PublicDocumentReference,
    DocumentSnapshot: PublicDocumentSnapshot,
    Query: PublicQuery,
    QuerySnapshot: PublicQuerySnapshot,
    CollectionReference: PublicCollectionReference,
    FieldPath: field_path_FieldPath,
    FieldValue: PublicFieldValue,
    setLogLevel: database_Firestore.setLogLevel
};
/**
 * Configures Firestore as part of the Firebase SDK by calling registerService.
 */
function configureForFirebase(firebase) {
    firebase.INTERNAL.registerService('firestore', function (app) { return new database_Firestore(app); }, shallowCopy(firestoreNamespace));
}
/**
 * Exports the Firestore namespace into the provided `exportObject` object under
 * the key 'firestore'. This is used for wrapped binary that exposes Firestore
 * as a goog module.
 */
function configureForStandalone(exportObject) {
    var copiedNamespace = shallowCopy(firestoreNamespace);
    // Unlike the use with Firebase, the standalone allows the use of the
    // constructor, so export it's internal class
    copiedNamespace['Firestore'] = database_Firestore;
    exportObject['firestore'] = copiedNamespace;
}

//# sourceMappingURL=config.js.map

// CONCATENATED MODULE: ../firestore/dist/esm/index.js
/* harmony export (immutable) */ __webpack_exports__["registerFirestore"] = registerFirestore;
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



function registerFirestore(instance) {
    configureForFirebase(instance);
}
registerFirestore(esm["default"]);

//# sourceMappingURL=index.js.map


/***/ }),

/***/ 115:
/***/ (function(module, exports, __webpack_require__) {

(function() {var g,goog=goog||{},k=this;function l(a){return"string"==typeof a}function aa(){}
function ba(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function n(a){return"array"==ba(a)}function ca(a){var b=ba(a);return"array"==b||"object"==b&&"number"==typeof a.length}function da(a){return"function"==ba(a)}function p(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}var q="closure_uid_"+(1E9*Math.random()>>>0),ea=0;function fa(a,b,c){return a.call.apply(a.bind,arguments)}
function ha(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function r(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?r=fa:r=ha;return r.apply(null,arguments)}
function ia(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}}var t=Date.now||function(){return+new Date};function u(a,b){function c(){}c.prototype=b.prototype;a.L=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Ab=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}};function ja(a){if(Error.captureStackTrace)Error.captureStackTrace(this,ja);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}u(ja,Error);ja.prototype.name="CustomError";function ka(a,b){for(var c=a.split("%s"),d="",e=Array.prototype.slice.call(arguments,1);e.length&&1<c.length;)d+=c.shift()+e.shift();return d+c.join("%s")}var la=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};function ma(a,b){return a<b?-1:a>b?1:0};function na(a,b){b.unshift(a);ja.call(this,ka.apply(null,b));b.shift()}u(na,ja);na.prototype.name="AssertionError";function oa(a,b){throw new na("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1));};function w(){0!=qa&&(ra[this[q]||(this[q]=++ea)]=this);this.i=this.i;this.w=this.w}var qa=0,ra={};w.prototype.i=!1;w.prototype.Z=function(){if(!this.i&&(this.i=!0,this.A(),0!=qa)){var a=this[q]||(this[q]=++ea);delete ra[a]}};w.prototype.A=function(){if(this.w)for(;this.w.length;)this.w.shift()()};var sa=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(l(a))return l(b)&&1==b.length?a.indexOf(b,0):-1;for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},ta=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=l(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)};
function ua(a){a:{var b=va;for(var c=a.length,d=l(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:l(a)?a.charAt(b):a[b]}function wa(a){if(!n(a))for(var b=a.length-1;0<=b;b--)delete a[b];a.length=0}function xa(a){return Array.prototype.concat.apply([],arguments)}function ya(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};var x;a:{var za=k.navigator;if(za){var Aa=za.userAgent;if(Aa){x=Aa;break a}}x=""}function y(a){return-1!=x.indexOf(a)};function Ba(a,b,c){for(var d in a)b.call(c,a[d],d,a)}function Ca(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b}function Da(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b}function Ea(a){var b={},c;for(c in a)b[c]=a[c];return b}var Fa="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function Ga(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Fa.length;f++)c=Fa[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};function Ha(a){Ha[" "](a);return a}Ha[" "]=aa;function Ia(a,b){var c=Ja;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)};var Ka=y("Opera"),z=y("Trident")||y("MSIE"),La=y("Edge"),Ma=y("Gecko")&&!(-1!=x.toLowerCase().indexOf("webkit")&&!y("Edge"))&&!(y("Trident")||y("MSIE"))&&!y("Edge"),Na=-1!=x.toLowerCase().indexOf("webkit")&&!y("Edge");function Oa(){var a=k.document;return a?a.documentMode:void 0}var Pa;
a:{var Qa="",Ra=function(){var a=x;if(Ma)return/rv:([^\);]+)(\)|;)/.exec(a);if(La)return/Edge\/([\d\.]+)/.exec(a);if(z)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Na)return/WebKit\/(\S+)/.exec(a);if(Ka)return/(?:Version)[ \/]?(\S+)/.exec(a)}();Ra&&(Qa=Ra?Ra[1]:"");if(z){var Sa=Oa();if(null!=Sa&&Sa>parseFloat(Qa)){Pa=String(Sa);break a}}Pa=Qa}var Ja={};
function Ta(a){return Ia(a,function(){for(var b=0,c=la(String(Pa)).split("."),d=la(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var h=c[f]||"",m=d[f]||"";do{h=/(\d*)(\D*)(.*)/.exec(h)||["","","",""];m=/(\d*)(\D*)(.*)/.exec(m)||["","","",""];if(0==h[0].length&&0==m[0].length)break;b=ma(0==h[1].length?0:parseInt(h[1],10),0==m[1].length?0:parseInt(m[1],10))||ma(0==h[2].length,0==m[2].length)||ma(h[2],m[2]);h=h[3];m=m[3]}while(0==b)}return 0<=b})}var Ua;var Va=k.document;
Ua=Va&&z?Oa()||("CSS1Compat"==Va.compatMode?parseInt(Pa,10):5):void 0;var Wa=Object.freeze||function(a){return a};var Xa=!z||9<=Number(Ua),Ya=z&&!Ta("9"),Za=function(){if(!k.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});k.addEventListener("test",aa,b);k.removeEventListener("test",aa,b);return a}();function A(a,b){this.type=a;this.a=this.target=b;this.Pa=!0}A.prototype.b=function(){this.Pa=!1};function $a(a,b){A.call(this,a?a.type:"");this.relatedTarget=this.a=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.pointerId=0;this.pointerType="";this.c=null;if(a){var c=this.type=a.type,d=a.changedTouches?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.a=b;if(b=a.relatedTarget){if(Ma){a:{try{Ha(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=
a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;null===d?(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0):(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0);this.button=a.button;this.key=a.key||"";this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=
a.metaKey;this.pointerId=a.pointerId||0;this.pointerType=l(a.pointerType)?a.pointerType:ab[a.pointerType]||"";this.c=a;a.defaultPrevented&&this.b()}}u($a,A);var ab=Wa({2:"touch",3:"pen",4:"mouse"});$a.prototype.b=function(){$a.L.b.call(this);var a=this.c;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,Ya)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var bb="closure_listenable_"+(1E6*Math.random()|0);function cb(a){return!(!a||!a[bb])}var db=0;function eb(a,b,c,d,e){this.listener=a;this.a=null;this.src=b;this.type=c;this.capture=!!d;this.ga=e;this.key=++db;this.Y=this.ca=!1}function fb(a){a.Y=!0;a.listener=null;a.a=null;a.src=null;a.ga=null};function gb(a){this.src=a;this.a={};this.b=0}gb.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.a[f];a||(a=this.a[f]=[],this.b++);var h=hb(a,b,d,e);-1<h?(b=a[h],c||(b.ca=!1)):(b=new eb(b,this.src,f,!!d,e),b.ca=c,a.push(b));return b};function ib(a,b){var c=b.type;if(c in a.a){var d=a.a[c],e=sa(d,b),f;(f=0<=e)&&Array.prototype.splice.call(d,e,1);f&&(fb(b),0==a.a[c].length&&(delete a.a[c],a.b--))}}function jb(a,b,c,d,e){a=a.a[b.toString()];b=-1;a&&(b=hb(a,c,d,e));return-1<b?a[b]:null}
function hb(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.Y&&f.listener==b&&f.capture==!!c&&f.ga==d)return e}return-1};var kb="closure_lm_"+(1E6*Math.random()|0),lb={},mb=0;function nb(a,b,c,d,e){if(d&&d.once)return ob(a,b,c,d,e);if(n(b)){for(var f=0;f<b.length;f++)nb(a,b[f],c,d,e);return null}c=pb(c);return cb(a)?a.aa(b,c,p(d)?!!d.capture:!!d,e):qb(a,b,c,!1,d,e)}
function qb(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var h=p(e)?!!e.capture:!!e,m=rb(a);m||(a[kb]=m=new gb(a));c=m.add(b,c,d,h,f);if(c.a)return c;d=sb();c.a=d;d.src=a;d.listener=c;if(a.addEventListener)Za||(e=h),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(tb(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");mb++;return c}
function sb(){var a=ub,b=Xa?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);if(!c)return c};return b}function ob(a,b,c,d,e){if(n(b)){for(var f=0;f<b.length;f++)ob(a,b[f],c,d,e);return null}c=pb(c);return cb(a)?a.Ha(b,c,p(d)?!!d.capture:!!d,e):qb(a,b,c,!0,d,e)}function vb(a,b,c,d,e){if(n(b))for(var f=0;f<b.length;f++)vb(a,b[f],c,d,e);else d=p(d)?!!d.capture:!!d,c=pb(c),cb(a)?a.va(b,c,d,e):a&&(a=rb(a))&&(b=jb(a,b,c,d,e))&&wb(b)}
function wb(a){if("number"!=typeof a&&a&&!a.Y){var b=a.src;if(cb(b))ib(b.c,a);else{var c=a.type,d=a.a;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(tb(c),d):b.addListener&&b.removeListener&&b.removeListener(d);mb--;(c=rb(b))?(ib(c,a),0==c.b&&(c.src=null,b[kb]=null)):fb(a)}}}function tb(a){return a in lb?lb[a]:lb[a]="on"+a}
function xb(a,b,c,d){var e=!0;if(a=rb(a))if(b=a.a[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.capture==c&&!f.Y&&(f=yb(f,d),e=e&&!1!==f)}return e}function yb(a,b){var c=a.listener,d=a.ga||a.src;a.ca&&wb(a);return c.call(d,b)}
function ub(a,b){if(a.Y)return!0;if(!Xa){if(!b)a:{b=["window","event"];for(var c=k,d=0;d<b.length;d++)if(c=c[b[d]],null==c){b=null;break a}b=c}d=b;b=new $a(d,this);c=!0;if(!(0>d.keyCode||void 0!=d.returnValue)){a:{var e=!1;if(0==d.keyCode)try{d.keyCode=-1;break a}catch(h){e=!0}if(e||void 0==d.returnValue)d.returnValue=!0}d=[];for(e=b.a;e;e=e.parentNode)d.push(e);a=a.type;for(e=d.length-1;0<=e;e--){b.a=d[e];var f=xb(d[e],a,!0,b);c=c&&f}for(e=0;e<d.length;e++)b.a=d[e],f=xb(d[e],a,!1,b),c=c&&f}return c}return yb(a,
new $a(b,this))}function rb(a){a=a[kb];return a instanceof gb?a:null}var zb="__closure_events_fn_"+(1E9*Math.random()>>>0);function pb(a){if(da(a))return a;a[zb]||(a[zb]=function(b){return a.handleEvent(b)});return a[zb]};function B(){w.call(this);this.c=new gb(this);this.P=this;this.J=null}u(B,w);B.prototype[bb]=!0;g=B.prototype;g.addEventListener=function(a,b,c,d){nb(this,a,b,c,d)};g.removeEventListener=function(a,b,c,d){vb(this,a,b,c,d)};
g.dispatchEvent=function(a){var b,c=this.J;if(c)for(b=[];c;c=c.J)b.push(c);c=this.P;var d=a.type||a;if(l(a))a=new A(a,c);else if(a instanceof A)a.target=a.target||c;else{var e=a;a=new A(d,c);Ga(a,e)}e=!0;if(b)for(var f=b.length-1;0<=f;f--){var h=a.a=b[f];e=Ab(h,d,!0,a)&&e}h=a.a=c;e=Ab(h,d,!0,a)&&e;e=Ab(h,d,!1,a)&&e;if(b)for(f=0;f<b.length;f++)h=a.a=b[f],e=Ab(h,d,!1,a)&&e;return e};
g.A=function(){B.L.A.call(this);if(this.c){var a=this.c,b=0,c;for(c in a.a){for(var d=a.a[c],e=0;e<d.length;e++)++b,fb(d[e]);delete a.a[c];a.b--}}this.J=null};g.aa=function(a,b,c,d){return this.c.add(String(a),b,!1,c,d)};g.Ha=function(a,b,c,d){return this.c.add(String(a),b,!0,c,d)};g.va=function(a,b,c,d){var e=this.c;a=String(a).toString();if(a in e.a){var f=e.a[a];b=hb(f,b,c,d);-1<b&&(fb(f[b]),Array.prototype.splice.call(f,b,1),0==f.length&&(delete e.a[a],e.b--))}};
function Ab(a,b,c,d){b=a.c.a[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var h=b[f];if(h&&!h.Y&&h.capture==c){var m=h.listener,v=h.ga||h.src;h.ca&&ib(a.c,h);e=!1!==m.call(v,d)&&e}}return e&&0!=d.Pa};function Bb(a){return/^\s*$/.test(a)?!1:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,""))}function Cb(a){a=String(a);if(Bb(a))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);}function Db(a){var b=[];Eb(new Fb,a,b);return b.join("")}function Fb(){}
function Eb(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(n(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),Eb(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),Gb(d,c),c.push(":"),Eb(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Gb(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}var Hb={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Ib=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;
function Gb(a,b){b.push('"',a.replace(Ib,function(a){var b=Hb[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),Hb[a]=b);return b}),'"')};function Jb(a,b){this.c=a;this.f=b;this.b=0;this.a=null}Jb.prototype.get=function(){if(0<this.b){this.b--;var a=this.a;this.a=a.next;a.next=null}else a=this.c();return a};function Kb(){this.b=this.a=null}var Nb=new Jb(function(){return new Lb},function(a){a.reset()});Kb.prototype.add=function(a,b){var c=Nb.get();c.set(a,b);this.b?this.b.next=c:this.a=c;this.b=c};function Ob(){var a=Pb,b=null;a.a&&(b=a.a,a.a=a.a.next,a.a||(a.b=null),b.next=null);return b}function Lb(){this.next=this.b=this.a=null}Lb.prototype.set=function(a,b){this.a=a;this.b=b;this.next=null};Lb.prototype.reset=function(){this.next=this.b=this.a=null};function Qb(a){k.setTimeout(function(){throw a;},0)}var Rb;
function Sb(){var a=k.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!y("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow;a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host;a=r(function(a){if(("*"==d||a.origin==d)&&a.data==
c)this.port1.onmessage()},this);b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});if("undefined"!==typeof a&&!y("Trident")&&!y("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var a=c.za;c.za=null;a()}};return function(a){d.next={za:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};document.documentElement.appendChild(b)}:function(a){k.setTimeout(a,0)}};var Tb;function Ub(){if(-1!=String(k.Promise).indexOf("[native code]")){var a=k.Promise.resolve(void 0);Tb=function(){a.then(Vb)}}else Tb=function(){var a=Vb;!da(k.setImmediate)||k.Window&&k.Window.prototype&&!y("Edge")&&k.Window.prototype.setImmediate==k.setImmediate?(Rb||(Rb=Sb()),Rb(a)):k.setImmediate(a)}}var Wb=!1,Pb=new Kb;function Vb(){for(var a;a=Ob();){try{a.a.call(a.b)}catch(c){Qb(c)}var b=Nb;b.f(a);100>b.b&&(b.b++,a.next=b.a,b.a=a)}Wb=!1};function Xb(a,b){B.call(this);this.b=a||1;this.a=b||k;this.f=r(this.ib,this);this.g=t()}u(Xb,B);g=Xb.prototype;g.$=!1;g.K=null;g.ib=function(){if(this.$){var a=t()-this.g;0<a&&a<.8*this.b?this.K=this.a.setTimeout(this.f,this.b-a):(this.K&&(this.a.clearTimeout(this.K),this.K=null),this.dispatchEvent("tick"),this.$&&(this.K=this.a.setTimeout(this.f,this.b),this.g=t()))}};g.start=function(){this.$=!0;this.K||(this.K=this.a.setTimeout(this.f,this.b),this.g=t())};
function Yb(a){a.$=!1;a.K&&(a.a.clearTimeout(a.K),a.K=null)}g.A=function(){Xb.L.A.call(this);Yb(this);delete this.a};function Zb(a,b,c){if(da(a))c&&(a=r(a,c));else if(a&&"function"==typeof a.handleEvent)a=r(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:k.setTimeout(a,b||0)};function $b(a,b,c){w.call(this);this.f=null!=c?r(a,c):a;this.c=b;this.b=r(this.bb,this);this.a=[]}u($b,w);g=$b.prototype;g.ha=!1;g.X=null;g.Xa=function(a){this.a=arguments;this.X?this.ha=!0:ac(this)};g.A=function(){$b.L.A.call(this);this.X&&(k.clearTimeout(this.X),this.X=null,this.ha=!1,this.a=[])};g.bb=function(){this.X=null;this.ha&&(this.ha=!1,ac(this))};function ac(a){a.X=Zb(a.b,a.c);a.f.apply(null,a.a)};function C(a){w.call(this);this.b=a;this.a={}}u(C,w);var bc=[];C.prototype.aa=function(a,b,c,d){n(b)||(b&&(bc[0]=b.toString()),b=bc);for(var e=0;e<b.length;e++){var f=nb(a,b[e],c||this.handleEvent,d||!1,this.b||this);if(!f)break;this.a[f.key]=f}return this};
C.prototype.va=function(a,b,c,d,e){if(n(b))for(var f=0;f<b.length;f++)this.va(a,b[f],c,d,e);else c=c||this.handleEvent,d=p(d)?!!d.capture:!!d,e=e||this.b||this,c=pb(c),d=!!d,b=cb(a)?jb(a.c,String(b),c,d,e):a?(a=rb(a))?jb(a,b,c,d,e):null:null,b&&(wb(b),delete this.a[b.key])};function cc(a){Ba(a.a,function(a,c){this.a.hasOwnProperty(c)&&wb(a)},a);a.a={}}C.prototype.A=function(){C.L.A.call(this);cc(this)};C.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented");};function dc(a,b,c){this.reset(a,b,c,void 0,void 0)}dc.prototype.a=null;var ec=0;dc.prototype.reset=function(a,b,c,d,e){"number"==typeof e||ec++;d||t();delete this.a};function fc(a){this.f=a;this.b=this.c=this.a=null}function D(a,b){this.name=a;this.value=b}D.prototype.toString=function(){return this.name};var gc=new D("SEVERE",1E3),hc=new D("WARNING",900),ic=new D("INFO",800),jc=new D("CONFIG",700),kc=new D("FINE",500);function lc(a){if(a.c)return a.c;if(a.a)return lc(a.a);oa("Root logger has no level set.");return null}fc.prototype.log=function(a,b,c){if(a.value>=lc(this).value)for(da(b)&&(b=b()),a=new dc(a,String(b),this.f),c&&(a.a=c),c=this;c;)c=c.a};
var mc={},nc=null;function oc(a){nc||(nc=new fc(""),mc[""]=nc,nc.c=jc);var b;if(!(b=mc[a])){b=new fc(a);var c=a.lastIndexOf("."),d=a.substr(c+1);c=oc(a.substr(0,c));c.b||(c.b={});c.b[d]=b;b.a=c;mc[a]=b}return b};function E(a,b){a&&a.log(hc,b,void 0)}function pc(a,b){a&&a.log(ic,b,void 0)}function F(a,b){a&&a.log(kc,b,void 0)};function qc(){this.a=oc("goog.labs.net.webChannel.WebChannelDebug");this.b=!0}qc.prototype.Ea=function(){this.b=!1};function rc(a,b,c,d,e,f){H(a,function(){if(a.b)if(f){var h="";for(var m=f.split("&"),v=0;v<m.length;v++){var G=m[v].split("=");if(1<G.length){var Z=G[0];G=G[1];var Mb=Z.split("_");h=2<=Mb.length&&"type"==Mb[1]?h+(Z+"="+G+"&"):h+(Z+"=redacted&")}}}else h=null;else h=f;return"XMLHTTP REQ ("+d+") [attempt "+e+"]: "+b+"\n"+c+"\n"+h})}
function sc(a,b,c,d,e,f,h){H(a,function(){return"XMLHTTP RESP ("+d+") [ attempt "+e+"]: "+b+"\n"+c+"\n"+f+" "+h})}function tc(a,b,c,d){H(a,function(){return"XMLHTTP TEXT ("+b+"): "+uc(a,c)+(d?" "+d:"")})}function vc(a,b){H(a,function(){return"TIMEOUT: "+b})}function I(a,b){F(a.a,b)}function wc(a,b,c){(a=a.a)&&a.log(gc,c||"Exception",b)}function H(a,b){pc(a.a,b)}function xc(a,b){(a=a.a)&&a.log(gc,b,void 0)}
function uc(a,b){if(!a.b)return b;if(!b)return null;try{var c=JSON.parse(b);if(c)for(var d=0;d<c.length;d++)if(n(c[d])){var e=c[d];if(!(2>e.length)){var f=e[1];if(n(f)&&!(1>f.length)){var h=f[0];if("noop"!=h&&"stop"!=h&&"close"!=h)for(var m=1;m<f.length;m++)f[m]=""}}}return Db(c)}catch(v){return I(a,"Exception parsing expected JS array - probably was not JS"),b}};var yc=new B;function zc(a){A.call(this,"serverreachability",a)}u(zc,A);function Ac(a){yc.dispatchEvent(new zc(yc,a))}function Bc(a){A.call(this,"statevent",a)}u(Bc,A);function J(a){yc.dispatchEvent(new Bc(yc,a))}function Cc(a){A.call(this,"timingevent",a)}u(Cc,A);function Dc(a,b,c){yc.dispatchEvent(new Cc(yc,a,b,c))}function Ec(a,b){if(!da(a))throw Error("Fn must not be null and must be a function");return k.setTimeout(function(){a()},b)};var Fc={NO_ERROR:0,jb:1,qb:2,pb:3,mb:4,ob:5,rb:6,Ra:7,TIMEOUT:8,ub:9};var Gc={lb:"complete",yb:"success",Sa:"error",Ra:"abort",wb:"ready",xb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",vb:"progress",nb:"downloadprogress",zb:"uploadprogress"};function Hc(){}Hc.prototype.a=null;function Ic(a){var b;(b=a.a)||(b={},Jc(a)&&(b[0]=!0,b[1]=!0),b=a.a=b);return b};var Kc;function Lc(){}u(Lc,Hc);function Mc(a){return(a=Jc(a))?new ActiveXObject(a):new XMLHttpRequest}function Jc(a){if(!a.b&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.b=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.b}Kc=new Lc;function K(a,b,c,d){this.i=a;this.b=b;this.f=c;this.T=d||1;this.N=new C(this);this.S=Nc;a=this.H=new Xb;a.b=Oc;a.K&&a.$?(Yb(a),a.start()):a.K&&Yb(a);this.j=null;this.c=!1;this.m=this.g=this.h=this.J=this.D=this.U=this.w=null;this.s=[];this.a=null;this.F=0;this.l=this.o=null;this.C=-1;this.B=!1;this.P=0;this.I=null;this.M=!1}var Nc=45E3,Oc=250;
function Pc(a,b){switch(a){case 0:return"Non-200 return code ("+b+")";case 1:return"XMLHTTP failure (no data)";case 2:return"HttpConnection timeout";default:return"Unknown error"}}var Qc={},Rc={};g=K.prototype;g.setTimeout=function(a){this.S=a};function Sc(a,b,c){a.J=1;a.h=Tc(L(b));a.m=c;a.M=!0;Uc(a,null)}function Vc(a,b,c,d){a.J=1;a.h=Tc(L(b));a.m=null;a.M=c;Uc(a,d)}
function Uc(a,b){a.D=t();Wc(a);a.g=L(a.h);Xc(a.g,"t",a.T);a.F=0;a.a=a.i.da(a.i.ia()?b:null);0<a.P&&(a.I=new $b(r(a.Qa,a,a.a),a.P));a.N.aa(a.a,"readystatechange",a.fb);b=a.j?Ea(a.j):{};a.m?(a.o||(a.o="POST"),b["Content-Type"]="application/x-www-form-urlencoded",a.a.fa(a.g,a.o,a.m,b)):(a.o="GET",a.a.fa(a.g,a.o,null,b));Ac(1);rc(a.b,a.o,a.g,a.f,a.T,a.m)}g.fb=function(a){a=a.target;var b=this.I;b&&3==M(a)?(I(this.b,"Throttling readystatechange."),b.Xa()):this.Qa(a)};
g.Qa=function(a){try{a==this.a?Yc(this):E(this.b.a,"Called back with an unexpected xmlhttp")}catch(c){if(I(this.b,"Failed call to OnXmlHttpReadyStateChanged_"),this.a&&this.a.V()){var b=this;wc(this.b,c,function(){return"ResponseText: "+b.a.V()})}else wc(this.b,c,"No response text")}finally{}};
function Yc(a){var b=M(a.a),c=a.a.Fa(),d=a.a.W();if(!(3>b||3==b&&!Ka&&!a.a.V())){a.B||4!=b||7==c||(8==c||0>=d?Ac(3):Ac(2));Zc(a);var e=a.a.W();a.C=e;(c=a.a.V())||I(a.b,function(){return"No response text for uri "+a.g+" status "+e});a.c=200==e;sc(a.b,a.o,a.g,a.f,a.T,b,e);a.c?(a.M?($c(a,b,c),Ka&&a.c&&3==b&&ad(a)):(tc(a.b,a.f,c,null),bd(a,c)),4==b&&cd(a),a.c&&!a.B&&(4==b?a.i.ua(a):(a.c=!1,Wc(a)))):(400==e&&0<c.indexOf("Unknown SID")?(a.l=3,J(12),E(a.b.a,"XMLHTTP Unknown SID ("+a.f+")")):(a.l=0,J(13),
E(a.b.a,"XMLHTTP Bad status "+e+" ("+a.f+")")),cd(a),dd(a))}}function $c(a,b,c){for(var d=!0;!a.B&&a.F<c.length;){var e=ed(a,c);if(e==Rc){4==b&&(a.l=4,J(14),d=!1);tc(a.b,a.f,null,"[Incomplete Response]");break}else if(e==Qc){a.l=4;J(15);tc(a.b,a.f,c,"[Invalid Chunk]");d=!1;break}else tc(a.b,a.f,e,null),bd(a,e)}4==b&&0==c.length&&(a.l=1,J(16),d=!1);a.c=a.c&&d;d||(tc(a.b,a.f,c,"[Invalid Chunked Response]"),cd(a),dd(a))}
g.eb=function(){var a=M(this.a),b=this.a.V();this.F<b.length&&(Zc(this),$c(this,a,b),this.c&&4!=a&&Wc(this))};function ad(a){a.N.aa(a.H,"tick",a.eb);a.H.start()}function ed(a,b){var c=a.F,d=b.indexOf("\n",c);if(-1==d)return Rc;c=Number(b.substring(c,d));if(isNaN(c))return Qc;d+=1;if(d+c>b.length)return Rc;b=b.substr(d,c);a.F=d+c;return b}g.cancel=function(){this.B=!0;cd(this)};function Wc(a){a.U=t()+a.S;fd(a,a.S)}
function fd(a,b){if(null!=a.w)throw Error("WatchDog timer not null");a.w=Ec(r(a.cb,a),b)}function Zc(a){a.w&&(k.clearTimeout(a.w),a.w=null)}g.cb=function(){this.w=null;var a=t();0<=a-this.U?(this.c&&xc(this.b,"Received watchdog timeout even though request loaded successfully"),vc(this.b,this.g),2!=this.J&&(Ac(3),J(17)),cd(this),this.l=2,dd(this)):(E(this.b.a,"WatchDog timer called too early"),fd(this,this.U-a))};function dd(a){a.i.Ja()||a.B||a.i.ua(a)}
function cd(a){Zc(a);var b=a.I;b&&"function"==typeof b.Z&&b.Z();a.I=null;Yb(a.H);cc(a.N);a.a&&(b=a.a,a.a=null,b.abort(),b.Z())}function bd(a,b){try{a.i.Ma(a,b),Ac(4)}catch(c){wc(a.b,c,"Error in httprequest callback")}};function gd(a){if(a.v&&"function"==typeof a.v)return a.v();if(l(a))return a.split("");if(ca(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}return Ca(a)}
function hd(a,b){if(a.forEach&&"function"==typeof a.forEach)a.forEach(b,void 0);else if(ca(a)||l(a))ta(a,b,void 0);else{if(a.O&&"function"==typeof a.O)var c=a.O();else if(a.v&&"function"==typeof a.v)c=void 0;else if(ca(a)||l(a)){c=[];for(var d=a.length,e=0;e<d;e++)c.push(e)}else c=Da(a);d=gd(a);e=d.length;for(var f=0;f<e;f++)b.call(void 0,d[f],c&&c[f],a)}};function N(a,b){this.b={};this.a=[];this.c=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a){a instanceof N?(c=a.O(),d=a.v()):(c=Da(a),d=Ca(a));for(var e=0;e<c.length;e++)this.set(c[e],d[e])}}g=N.prototype;g.u=function(){return this.c};g.v=function(){id(this);for(var a=[],b=0;b<this.a.length;b++)a.push(this.b[this.a[b]]);return a};g.O=function(){id(this);return this.a.concat()};
function jd(a){a.b={};a.a.length=0;a.c=0}function kd(a,b){return O(a.b,b)?(delete a.b[b],a.c--,a.a.length>2*a.c&&id(a),!0):!1}function id(a){if(a.c!=a.a.length){for(var b=0,c=0;b<a.a.length;){var d=a.a[b];O(a.b,d)&&(a.a[c++]=d);b++}a.a.length=c}if(a.c!=a.a.length){var e={};for(c=b=0;b<a.a.length;)d=a.a[b],O(e,d)||(a.a[c++]=d,e[d]=1),b++;a.a.length=c}}g.get=function(a,b){return O(this.b,a)?this.b[a]:b};g.set=function(a,b){O(this.b,a)||(this.c++,this.a.push(a));this.b[a]=b};
g.forEach=function(a,b){for(var c=this.O(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};function O(a,b){return Object.prototype.hasOwnProperty.call(a,b)};var ld=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function md(a,b){if(a){a=a.split("&");for(var c=0;c<a.length;c++){var d=a[c].indexOf("="),e=null;if(0<=d){var f=a[c].substring(0,d);e=a[c].substring(d+1)}else f=a[c];b(f,e?decodeURIComponent(e.replace(/\+/g," ")):"")}}};function P(a,b){this.b=this.j=this.f="";this.i=null;this.g=this.a="";this.h=!1;var c;a instanceof P?(this.h=void 0!==b?b:a.h,nd(this,a.f),this.j=a.j,od(this,a.b),pd(this,a.i),this.a=a.a,qd(this,rd(a.c)),this.g=a.g):a&&(c=String(a).match(ld))?(this.h=!!b,nd(this,c[1]||"",!0),this.j=sd(c[2]||""),od(this,c[3]||"",!0),pd(this,c[4]),this.a=sd(c[5]||"",!0),qd(this,c[6]||"",!0),this.g=sd(c[7]||"")):(this.h=!!b,this.c=new td(null,this.h))}
P.prototype.toString=function(){var a=[],b=this.f;b&&a.push(ud(b,vd,!0),":");var c=this.b;if(c||"file"==b)a.push("//"),(b=this.j)&&a.push(ud(b,vd,!0),"@"),a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.i,null!=c&&a.push(":",String(c));if(c=this.a)this.b&&"/"!=c.charAt(0)&&a.push("/"),a.push(ud(c,"/"==c.charAt(0)?wd:xd,!0));(c=this.c.toString())&&a.push("?",c);(c=this.g)&&a.push("#",ud(c,yd));return a.join("")};
P.prototype.resolve=function(a){var b=L(this),c=!!a.f;c?nd(b,a.f):c=!!a.j;c?b.j=a.j:c=!!a.b;c?od(b,a.b):c=null!=a.i;var d=a.a;if(c)pd(b,a.i);else if(c=!!a.a){if("/"!=d.charAt(0))if(this.b&&!this.a)d="/"+d;else{var e=b.a.lastIndexOf("/");-1!=e&&(d=b.a.substr(0,e+1)+d)}e=d;if(".."==e||"."==e)d="";else if(-1!=e.indexOf("./")||-1!=e.indexOf("/.")){d=0==e.lastIndexOf("/",0);e=e.split("/");for(var f=[],h=0;h<e.length;){var m=e[h++];"."==m?d&&h==e.length&&f.push(""):".."==m?((1<f.length||1==f.length&&""!=
f[0])&&f.pop(),d&&h==e.length&&f.push("")):(f.push(m),d=!0)}d=f.join("/")}else d=e}c?b.a=d:c=""!==a.c.toString();c?qd(b,rd(a.c)):c=!!a.g;c&&(b.g=a.g);return b};function L(a){return new P(a)}function nd(a,b,c){a.f=c?sd(b,!0):b;a.f&&(a.f=a.f.replace(/:$/,""))}function od(a,b,c){a.b=c?sd(b,!0):b}function pd(a,b){if(b){b=Number(b);if(isNaN(b)||0>b)throw Error("Bad port number "+b);a.i=b}else a.i=null}function qd(a,b,c){b instanceof td?(a.c=b,zd(a.c,a.h)):(c||(b=ud(b,Ad)),a.c=new td(b,a.h))}
function Q(a,b,c){a.c.set(b,c)}function Xc(a,b,c){n(c)||(c=[String(c)]);Bd(a.c,b,c)}function Tc(a){Q(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^t()).toString(36));return a}function Cd(a){return a instanceof P?L(a):new P(a,void 0)}function Dd(a,b,c,d){var e=new P(null,void 0);a&&nd(e,a);b&&od(e,b);c&&pd(e,c);d&&(e.a=d);return e}function sd(a,b){return a?b?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}
function ud(a,b,c){return l(a)?(a=encodeURI(a).replace(b,Ed),c&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Ed(a){a=a.charCodeAt(0);return"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var vd=/[#\/\?@]/g,xd=/[#\?:]/g,wd=/[#\?]/g,Ad=/[#\?@]/g,yd=/#/g;function td(a,b){this.b=this.a=null;this.c=a||null;this.f=!!b}function R(a){a.a||(a.a=new N,a.b=0,a.c&&md(a.c,function(b,c){a.add(decodeURIComponent(b.replace(/\+/g," ")),c)}))}g=td.prototype;g.u=function(){R(this);return this.b};
g.add=function(a,b){R(this);this.c=null;a=Fd(this,a);var c=this.a.get(a);c||this.a.set(a,c=[]);c.push(b);this.b+=1;return this};function Gd(a,b){R(a);b=Fd(a,b);O(a.a.b,b)&&(a.c=null,a.b-=a.a.get(b).length,kd(a.a,b))}function Hd(a,b){R(a);b=Fd(a,b);return O(a.a.b,b)}g.forEach=function(a,b){R(this);this.a.forEach(function(c,d){ta(c,function(c){a.call(b,c,d,this)},this)},this)};
g.O=function(){R(this);for(var a=this.a.v(),b=this.a.O(),c=[],d=0;d<b.length;d++)for(var e=a[d],f=0;f<e.length;f++)c.push(b[d]);return c};g.v=function(a){R(this);var b=[];if(l(a))Hd(this,a)&&(b=xa(b,this.a.get(Fd(this,a))));else{a=this.a.v();for(var c=0;c<a.length;c++)b=xa(b,a[c])}return b};g.set=function(a,b){R(this);this.c=null;a=Fd(this,a);Hd(this,a)&&(this.b-=this.a.get(a).length);this.a.set(a,[b]);this.b+=1;return this};g.get=function(a,b){a=a?this.v(a):[];return 0<a.length?String(a[0]):b};
function Bd(a,b,c){Gd(a,b);0<c.length&&(a.c=null,a.a.set(Fd(a,b),ya(c)),a.b+=c.length)}g.toString=function(){if(this.c)return this.c;if(!this.a)return"";for(var a=[],b=this.a.O(),c=0;c<b.length;c++){var d=b[c],e=encodeURIComponent(String(d));d=this.v(d);for(var f=0;f<d.length;f++){var h=e;""!==d[f]&&(h+="="+encodeURIComponent(String(d[f])));a.push(h)}}return this.c=a.join("&")};function rd(a){var b=new td;b.c=a.c;a.a&&(b.a=new N(a.a),b.b=a.b);return b}
function Fd(a,b){b=String(b);a.f&&(b=b.toLowerCase());return b}function zd(a,b){b&&!a.f&&(R(a),a.c=null,a.a.forEach(function(a,b){var c=b.toLowerCase();b!=c&&(Gd(this,b),Bd(this,c,a))},a));a.f=b};function Id(){this.a=t()}var Jd=null;Id.prototype.set=function(a){this.a=a};Id.prototype.reset=function(){this.set(t())};Id.prototype.get=function(){return this.a};function Kd(){Jd||(Jd=new Id)}function Ld(){Jd||(Jd=new Id)}u(Ld,Kd);function Md(){}var Nd={OPEN:"a",kb:"b",Sa:"c",tb:"d"};function Od(){A.call(this,"d")}u(Od,A);function Pd(){A.call(this,"c")}u(Pd,A);function Qd(a,b){this.a=a;this.b=b;this.c=this.i=null;this.h=!1;this.l=null;this.f=-1;this.m=this.g=null}g=Qd.prototype;g.R=null;
function Rd(a){I(a.b,"TestConnection: starting stage 2");var b=a.a.H.a;if(null!=b)I(a.b,function(){return true?"Buffered":"Unbuffered"}),J(4),b?(J(10),Sd(a.a,a,!1)):(J(11),Sd(a.a,a,!0));else{a.c=new K(a,a.b,void 0,void 0);a.c.j=a.i;var c=Td(a.a,a.g,a.l);J(4);Xc(c,"TYPE","xmlhttp");var d=a.a.j,e=a.a.J;d&&e&&Q(c,d,e);Vc(a.c,c,!1,a.g)}}g.da=function(a){return this.a.da(a)};g.abort=function(){this.c&&(this.c.cancel(),this.c=null);this.f=-1};
g.Ja=function(){return!1};
g.Ma=function(a,b){this.f=a.C;if(0==this.R){I(this.b,"TestConnection: Got data for stage 1");if(!this.a.D&&(a=a.a)){var c=a.a?a.a.getResponseHeader("X-Client-Wire-Protocol"):null;this.m=c?c:null;this.a.j&&((a=a.a?a.a.getResponseHeader("X-HTTP-Session-Id"):null)?this.a.J=a:E(this.b.a,"Missing X_HTTP_SESSION_ID in the handshake response"))}if(b){try{var d=this.a.ma.a.parse(b)}catch(e){wc(this.b,e);Ud(this.a,this);return}this.g=d[0]}else I(this.b,"TestConnection: Null responseText"),Ud(this.a,this)}else if(1==
this.R)if(this.h)J(6);else if("11111"==b){if(J(5),this.h=!0,!z||10<=Number(Ua))this.f=200,this.c.cancel(),I(this.b,"Test connection succeeded; using streaming connection"),J(11),Sd(this.a,this,!0)}else J(7),this.h=!1};
g.ua=function(){this.f=this.c.C;this.c.c?0==this.R?(this.R=1,I(this.b,"TestConnection: request complete for initial check"),Rd(this)):1==this.R&&(I(this.b,"TestConnection: request complete for stage 2"),this.h?(I(this.b,"Test connection succeeded; using streaming connection"),J(11),Sd(this.a,this,!0)):(I(this.b,"Test connection failed; not using streaming"),J(10),Sd(this.a,this,!1))):(I(this.b,"TestConnection: request failed, in state "+this.R),0==this.R?J(8):1==this.R&&J(9),Ud(this.a,this))};
g.ia=function(){return this.a.ia()};g.ra=function(){return this.a.ra()};function Vd(){this.a=this.b=null};function S(){this.a=new N}function Wd(a){var b=typeof a;return"object"==b&&a||"function"==b?"o"+(a[q]||(a[q]=++ea)):b.charAt(0)+a}S.prototype.u=function(){return this.a.u()};S.prototype.add=function(a){this.a.set(Wd(a),a)};S.prototype.contains=function(a){a=Wd(a);return O(this.a.b,a)};S.prototype.v=function(){return this.a.v()};function Xd(a,b){this.a=a;this.b=b};function Yd(a){this.g=a||Zd;this.f=k.pa&&k.pa.Ka&&k.pa.Ka()&&k.pa.Ka().Bb?this.g:1;this.a=null;1<this.f&&(this.a=new S);this.b=null;this.c=[]}var Zd=10;function $d(a,b){a.a||-1==b.indexOf("spdy")&&-1==b.indexOf("quic")&&-1==b.indexOf("h2")||(a.f=a.g,a.a=new S,a.b&&(ae(a,a.b),a.b=null))}function be(a){return a.b?!0:a.a?a.a.u()>=a.f:!1}function ce(a,b){return a.b?a.b==b:a.a?a.a.contains(b):!1}function ae(a,b){a.a?a.a.add(b):a.b=b}
function de(a,b){a.b&&a.b==b?a.b=null:a.a&&a.a.contains(b)&&kd(a.a.a,Wd(b))}Yd.prototype.cancel=function(){this.c=ee(this);this.b?(this.b.cancel(),this.b=null):this.a&&0!=this.a.a.c&&(ta(this.a.v(),function(a){a.cancel()}),jd(this.a.a))};function ee(a){if(null!=a.b)return a.c.concat(a.b.s);if(null!=a.a&&0!=a.a.a.c){var b=a.c;ta(a.a.v(),function(a){b=b.concat(a.s)});return b}return ya(a.c)}function fe(a,b){a.c=a.c.concat(b)};function ge(){}ge.prototype.stringify=function(a){return k.JSON.stringify(a,void 0)};ge.prototype.parse=function(a){return k.JSON.parse(a,void 0)};function he(){this.a=new ge}function ie(a,b,c){var d=c||"";try{hd(a,function(a,c){var e=a;p(a)&&(e=Db(a));b.push(d+c+"="+encodeURIComponent(e))})}catch(e){throw b.push(d+"type="+encodeURIComponent("_badmap")),e;}};function je(a,b){var c=new qc;I(c,"TestLoadImage: loading "+a);var d=new Image;d.onload=ia(ke,c,d,"TestLoadImage: loaded",!0,b);d.onerror=ia(ke,c,d,"TestLoadImage: error",!1,b);d.onabort=ia(ke,c,d,"TestLoadImage: abort",!1,b);d.ontimeout=ia(ke,c,d,"TestLoadImage: timeout",!1,b);k.setTimeout(function(){if(d.ontimeout)d.ontimeout()},1E4);d.src=a}function ke(a,b,c,d,e){try{I(a,c),b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null,e(d)}catch(f){wc(a,f)}};function T(a){B.call(this);this.headers=new N;this.F=a||null;this.f=!1;this.D=this.a=null;this.M=this.s="";this.j=0;this.g="";this.h=this.I=this.o=this.H=!1;this.l=0;this.B=null;this.N=le;this.C=this.m=!1}u(T,B);var le="";T.prototype.b=oc("goog.net.XhrIo");var me=/^https?$/i,ne=["POST","PUT"];g=T.prototype;
g.fa=function(a,b,c,d){if(this.a)throw Error("[goog.net.XhrIo] Object is active with another request="+this.s+"; newUri="+a);b=b?b.toUpperCase():"GET";this.s=a;this.g="";this.j=0;this.M=b;this.H=!1;this.f=!0;this.a=this.F?Mc(this.F):Mc(Kc);this.D=this.F?Ic(this.F):Ic(Kc);this.a.onreadystatechange=r(this.La,this);try{F(this.b,U(this,"Opening Xhr")),this.I=!0,this.a.open(b,String(a),!0),this.I=!1}catch(f){F(this.b,U(this,"Error opening Xhr: "+f.message));oe(this,f);return}a=c||"";var e=new N(this.headers);
d&&hd(d,function(a,b){e.set(b,a)});d=ua(e.O());c=k.FormData&&a instanceof k.FormData;!(0<=sa(ne,b))||d||c||e.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");e.forEach(function(a,b){this.a.setRequestHeader(b,a)},this);this.N&&(this.a.responseType=this.N);"withCredentials"in this.a&&this.a.withCredentials!==this.m&&(this.a.withCredentials=this.m);try{pe(this),0<this.l&&(this.C=qe(this.a),F(this.b,U(this,"Will abort after "+this.l+"ms if incomplete, xhr2 "+this.C)),this.C?(this.a.timeout=
this.l,this.a.ontimeout=r(this.Ia,this)):this.B=Zb(this.Ia,this.l,this)),F(this.b,U(this,"Sending request")),this.o=!0,this.a.send(a),this.o=!1}catch(f){F(this.b,U(this,"Send error: "+f.message)),oe(this,f)}};function qe(a){return z&&Ta(9)&&"number"==typeof a.timeout&&void 0!==a.ontimeout}function va(a){return"content-type"==a.toLowerCase()}
g.Ia=function(){"undefined"!=typeof goog&&this.a&&(this.g="Timed out after "+this.l+"ms, aborting",this.j=8,F(this.b,U(this,this.g)),this.dispatchEvent("timeout"),this.abort(8))};function oe(a,b){a.f=!1;a.a&&(a.h=!0,a.a.abort(),a.h=!1);a.g=b;a.j=5;re(a);se(a)}function re(a){a.H||(a.H=!0,a.dispatchEvent("complete"),a.dispatchEvent("error"))}
g.abort=function(a){this.a&&this.f&&(F(this.b,U(this,"Aborting")),this.f=!1,this.h=!0,this.a.abort(),this.h=!1,this.j=a||7,this.dispatchEvent("complete"),this.dispatchEvent("abort"),se(this))};g.A=function(){this.a&&(this.f&&(this.f=!1,this.h=!0,this.a.abort(),this.h=!1),se(this,!0));T.L.A.call(this)};g.La=function(){this.i||(this.I||this.o||this.h?te(this):this.ab())};g.ab=function(){te(this)};
function te(a){if(a.f&&"undefined"!=typeof goog)if(a.D[1]&&4==M(a)&&2==a.W())F(a.b,U(a,"Local request error detected and ignored"));else if(a.o&&4==M(a))Zb(a.La,0,a);else if(a.dispatchEvent("readystatechange"),4==M(a)){F(a.b,U(a,"Request complete"));a.f=!1;try{var b=a.W();a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}var d;if(!(d=c)){var e;if(e=0===b){var f=String(a.s).match(ld)[1]||null;if(!f&&k.self&&k.self.location){var h=k.self.location.protocol;
f=h.substr(0,h.length-1)}e=!me.test(f?f.toLowerCase():"")}d=e}d?(a.dispatchEvent("complete"),a.dispatchEvent("success")):(a.j=6,a.g=a.Ga()+" ["+a.W()+"]",re(a))}finally{se(a)}}}function se(a,b){if(a.a){pe(a);var c=a.a,d=a.D[0]?aa:null;a.a=null;a.D=null;b||a.dispatchEvent("ready");try{c.onreadystatechange=d}catch(e){(a=a.b)&&a.log(gc,"Problem encountered resetting onreadystatechange: "+e.message,void 0)}}}function pe(a){a.a&&a.C&&(a.a.ontimeout=null);a.B&&(k.clearTimeout(a.B),a.B=null)}
function M(a){return a.a?a.a.readyState:0}g.W=function(){try{return 2<M(this)?this.a.status:-1}catch(a){return-1}};g.Ga=function(){try{return 2<M(this)?this.a.statusText:""}catch(a){return F(this.b,"Can not get status: "+a.message),""}};g.V=function(){try{return this.a?this.a.responseText:""}catch(a){return F(this.b,"Can not get responseText: "+a.message),""}};
g.Ya=function(a){if(this.a){var b=this.a.responseText;a&&0==b.indexOf(a)&&(b=b.substring(a.length));a:{a=b;if(k.JSON)try{var c=k.JSON.parse(a);break a}catch(d){}c=Cb(a)}return c}};g.Fa=function(){return this.j};g.Za=function(){return l(this.g)?this.g:String(this.g)};function U(a,b){return b+" ["+a.M+" "+a.s+" "+a.W()+"]"};function ue(a){var b="";Ba(a,function(a,d){b+=d;b+=":";b+=a;b+="\r\n"});return b}function ve(a,b,c){a:{for(d in c){var d=!1;break a}d=!0}if(d)return a;c=ue(c);if(l(a)){b=encodeURIComponent(String(b));c=null!=c?"="+encodeURIComponent(String(c)):"";if(b+=c){c=a.indexOf("#");0>c&&(c=a.length);d=a.indexOf("?");if(0>d||d>c){d=c;var e=""}else e=a.substring(d+1,c);a=[a.substr(0,d),e,a.substr(c)];c=a[1];a[1]=b?c?c+"&"+b:b:c;a=a[0]+(a[1]?"?"+a[1]:"")+a[2]}return a}Q(a,b,c);return a};function we(a){this.ya=0;this.g=[];this.a=new qc;this.H=new Vd;this.ja=this.wa=this.F=this.ka=this.b=this.J=this.j=this.U=this.h=this.M=this.i=null;this.Ua=this.P=0;this.la=this.B=this.o=this.m=this.l=this.f=null;this.s=this.xa=this.N=-1;this.T=this.w=this.C=0;this.S=a&&a.supportsCrossDomainXhr||!1;this.I="";this.c=new Yd(a&&a.concurrentRequestLimit);this.ma=new he;this.D=a&&void 0!==a.backgroundChannelTest?a.backgroundChannelTest:!0;this.Ta=a&&a.fastHandshake||!1;a&&a.Ea&&this.a.Ea()}g=we.prototype;
g.oa=8;g.G=1;function xe(a){I(a.a,"disconnect()");ye(a);if(3==a.G){var b=a.P++,c=L(a.F);Q(c,"SID",a.I);Q(c,"RID",b);Q(c,"TYPE","terminate");ze(a,c);b=new K(a,a.a,b,void 0);b.J=2;b.h=Tc(L(c));c=!1;k.navigator&&k.navigator.sendBeacon&&(c=k.navigator.sendBeacon(b.h.toString(),""));!c&&k.Image&&((new Image).src=b.h,c=!0);c||(b.a=b.i.da(null),b.a.fa(b.h));b.D=t();Wc(b)}Ae(a)}
function ye(a){a.B&&(a.B.abort(),a.B=null);a.b&&(a.b.cancel(),a.b=null);a.m&&(k.clearTimeout(a.m),a.m=null);Be(a);a.c.cancel();a.l&&(k.clearTimeout(a.l),a.l=null)}function Ce(a,b){1E3==a.g.length&&xc(a.a,function(){return"Already have 1000 queued maps upon queueing "+Db(b)});a.g.push(new Xd(a.Ua++,b));3==a.G&&De(a)}g.Ja=function(){return 0==this.G};function De(a){be(a.c)||a.l||(a.l=Ec(r(a.Oa,a),0),a.C=0)}
function Ee(a,b){var c=a.c;if((c.b?1:c.a?c.a.u():0)>=a.c.f-(a.l?1:0))return xc(a.a,"Unexpected retry request is scheduled."),!1;if(a.l)return I(a.a,"Use the retry request that is already scheduled."),a.g=b.s.concat(a.g),!0;if(1==a.G||2==a.G||2<=a.C)return!1;I(a.a,"Going to retry POST");a.l=Ec(r(a.Oa,a,b),Fe(a,a.C));a.C++;return!0}
g.Oa=function(a){this.l=null;I(this.a,"startForwardChannel_");if(1==this.G)if(a)xc(this.a,"Not supposed to retry the open");else{I(this.a,"open_()");this.P=Math.floor(1E5*Math.random());a=this.P++;var b=new K(this,this.a,a,void 0),c=this.i;this.M&&(c?(c=Ea(c),Ga(c,this.M)):c=this.M);null===this.h&&(b.j=c);var d=Ge(this,b),e=L(this.F);Q(e,"RID",a);Q(e,"CVER",21);this.D&&this.j&&Q(e,"X-HTTP-Session-Id",this.j);ze(this,e);this.h&&c&&ve(e,this.h,c);ae(this.c,b);this.Ta?(Q(e,"$req",d),Sc(b,e,null)):Sc(b,
e,d);this.G=2}else 3==this.G&&(a?He(this,a):0==this.g.length?I(this.a,"startForwardChannel_ returned: nothing to send"):be(this.c)?xc(this.a,"startForwardChannel_ returned: connection already in progress"):(He(this),I(this.a,"startForwardChannel_ finished, sent request")))};
function He(a,b){var c;b?c=b.f:c=a.P++;var d=L(a.F);Q(d,"SID",a.I);Q(d,"RID",c);Q(d,"AID",a.N);ze(a,d);a.h&&a.i&&ve(d,a.h,a.i);c=new K(a,a.a,c,a.C+1);null===a.h&&(c.j=a.i);b&&(a.g=b.s.concat(a.g));b=Ge(a,c);c.setTimeout(Math.round(1E4)+Math.round(1E4*Math.random()));ae(a.c,c);Sc(c,d,b)}function ze(a,b){a.f&&hd({},function(a,d){Q(b,d,a)})}
function Ge(a,b){var c=Math.min(a.g.length,1E3),d=a.f?r(a.f.Va,a.f,a):null;a:for(var e=a.g,f=-1;;){var h=["count="+c];-1==f?0<c?(f=e[0].a,h.push("ofs="+f)):f=0:h.push("ofs="+f);for(var m=!0,v=0;v<c;v++){var G=e[v].a,Z=e[v].b;G-=f;if(0>G)f=Math.max(0,e[v].a-100),m=!1;else try{ie(Z,h,"req"+G+"_")}catch(Mb){d&&d(Z)}}if(m){d=h.join("&");break a}}a=a.g.splice(0,c);b.s=a;return d}function Ie(a){if(!a.b&&!a.m){a.T=1;var b=a.Na;Tb||Ub();Wb||(Tb(),Wb=!0);Pb.add(b,a);a.w=0}}
function Je(a){if(a.b||a.m)return xc(a.a,"Request already in progress"),!1;if(3<=a.w)return!1;I(a.a,"Going to retry GET");a.T++;a.m=Ec(r(a.Na,a),Fe(a,a.w));a.w++;return!0}
g.Na=function(){this.m=null;I(this.a,"Creating new HttpRequest");this.b=new K(this,this.a,"rpc",this.T);null===this.h&&(this.b.j=this.i);this.b.P=0;var a=L(this.wa);Q(a,"RID","rpc");Q(a,"SID",this.I);Q(a,"CI",this.la?"0":"1");Q(a,"AID",this.N);ze(this,a);Q(a,"TYPE","xmlhttp");this.h&&this.i&&ve(a,this.h,this.i);Vc(this.b,a,!0,this.ja);I(this.a,"New Request created")};
function Sd(a,b,c){I(a.a,"Test Connection Finished");var d=b.m;d&&$d(a.c,d);a.la=c;a.s=b.f;I(a.a,"connectChannel_()");a.F=Ke(a,a.ka);De(a)}function Ud(a,b){I(a.a,"Test Connection Failed");a.s=b.f;V(a,2)}
g.Ma=function(a,b){if(0!=this.G&&(this.b==a||ce(this.c,a)))if(this.s=a.C,ce(this.c,a)&&3==this.G){try{var c=this.ma.a.parse(b)}catch(f){c=null}if(n(c)&&3==c.length)if(b=c,0==b[0])a:if(I(this.a,"Server claims our backchannel is missing."),this.m)I(this.a,"But we are currently starting the request.");else{if(this.b)if(this.b.D+3E3<a.D)Be(this),this.b.cancel(),this.b=null;else break a;else E(this.a.a,"We do not have a BackChannel established");Je(this);J(18)}else this.xa=b[1],a=this.xa-this.N,0<a&&(b=
b[2],I(this.a,b+" bytes (in "+a+" arrays) are outstanding on the BackChannel"),37500>b&&this.la&&0==this.w&&!this.o&&(this.o=Ec(r(this.$a,this),6E3)));else I(this.a,"Bad POST response data returned"),V(this,11)}else if(this.b==a&&Be(this),!/^[\s\xa0]*$/.test(b))for(b=c=this.ma.a.parse(b),c=0;c<b.length;c++){var d=b[c];this.N=d[0];d=d[1];if(2==this.G)if("c"==d[0]){this.I=d[1];this.ja=d[2];var e=d[3];null!=e&&(this.oa=e,H(this.a,"VER="+this.oa));d=d[4];null!=d&&(this.ya=d,H(this.a,"SVER="+this.ya));
this.D&&(d=a.a)&&((e=d.a?d.a.getResponseHeader("X-Client-Wire-Protocol"):null)&&$d(this.c,e),this.j&&((d=d.a?d.a.getResponseHeader("X-HTTP-Session-Id"):null)?(this.J=d,Q(this.F,this.j,d)):E(this.a.a,"Missing X_HTTP_SESSION_ID in the handshake response")));this.G=3;this.f&&this.f.Da();this.wa=Td(this,this.ja,this.ka);Ie(this)}else"stop"!=d[0]&&"close"!=d[0]||V(this,7);else 3==this.G&&("stop"==d[0]||"close"==d[0]?"stop"==d[0]?V(this,7):xe(this):"noop"!=d[0]&&this.f&&this.f.Ca(d),this.w=0)}};
g.$a=function(){null!=this.o&&(this.o=null,this.b.cancel(),this.b=null,Je(this),J(19))};function Be(a){null!=a.o&&(k.clearTimeout(a.o),a.o=null)}
g.ua=function(a){I(this.a,"Request complete");var b=null;if(this.b==a){Be(this);this.b=null;var c=2}else if(ce(this.c,a))b=a.s,de(this.c,a),c=1;else return;this.s=a.C;if(0!=this.G)if(a.c)1==c?(Dc(a.m?a.m.length:0,t()-a.D,this.C),De(this)):Ie(this);else{var d=a.l;if(3==d||0==d&&0<this.s)I(this.a,"Not retrying due to error type");else{var e=this;I(this.a,function(){return"Maybe retrying, last error: "+Pc(d,e.s)});if(1==c&&Ee(this,a)||2==c&&Je(this))return;I(this.a,"Exceeded max number of retries")}b&&
0<b.length&&fe(this.c,b);I(this.a,"Error: HTTP request failed");switch(d){case 1:V(this,5);break;case 4:V(this,10);break;case 3:V(this,6);break;default:V(this,2)}}};function Fe(a,b){var c=5E3+Math.floor(1E4*Math.random());a.ra()||(I(a.a,"Inactive channel"),c*=2);return c*b}
function V(a,b){H(a.a,"Error code "+b);if(2==b){var c=null;a.f&&(c=null);var d=r(a.hb,a);c||(c=new P("//www.google.com/images/cleardot.gif"),k.location&&"http"==k.location.protocol||nd(c,"https"),Tc(c));je(c.toString(),d)}else J(2);I(a.a,"HttpChannel: error - "+b);a.G=0;a.f&&a.f.Ba(b);Ae(a);ye(a)}g.hb=function(a){a?(H(this.a,"Successfully pinged google.com"),J(2)):(H(this.a,"Failed to ping google.com"),J(1))};
function Ae(a){a.G=0;a.s=-1;if(a.f){var b=ee(a.c);if(0!=b.length||0!=a.g.length)I(a.a,function(){return"Number of undelivered maps, pending: "+b.length+", outgoing: "+a.g.length}),a.c.c.length=0,ya(a.g),a.g.length=0;a.f.Aa()}}function Ke(a,b){b=Le(a,null,b);I(a.a,"GetForwardChannelUri: "+b);return b}function Td(a,b,c){b=Le(a,a.ia()?b:null,c);I(a.a,"GetBackChannelUri: "+b);return b}
function Le(a,b,c){var d=Cd(c);if(""!=d.b)b&&od(d,b+"."+d.b),pd(d,d.i);else{var e=k.location,f;b?f=b+"."+e.hostname:f=e.hostname;d=Dd(e.protocol,f,e.port,c)}a.U&&Ba(a.U,function(a,b){Q(d,b,a)});b=a.j;c=a.J;b&&c&&Q(d,b,c);Q(d,"VER",a.oa);ze(a,d);return d}g.da=function(a){if(a&&!this.S)throw Error("Can't create secondary domain capable XhrIo object.");a=new T;a.m=this.S;return a};g.ra=function(){return!!this.f&&!0};g.ia=function(){return this.S};new Ld;function Me(){}g=Me.prototype;g.Da=function(){};
g.Ca=function(){};g.Ba=function(){};g.Aa=function(){};g.Va=function(){};function Ne(a){for(var b=arguments[0],c=1;c<arguments.length;c++){var d=arguments[c];if(0==d.lastIndexOf("/",0))b=d;else{var e;(e=""==b)||(e=b.length-1,e=0<=e&&b.indexOf("/",e)==e);e?b+=d:b+="/"+d}}return b};function Oe(){if(z&&!(10<=Number(Ua)))throw Error("Environmental error: no available transport.");}Oe.prototype.a=function(a,b){return new W(a,b)};
function W(a,b){B.call(this);this.a=new we(b);this.b=a;this.s=b&&b.testUrl?b.testUrl:Ne(this.b,"test");this.f=oc("goog.labs.net.webChannel.WebChannelBaseTransport");this.g=b&&b.messageUrlParams||null;a=b&&b.messageHeaders||null;b&&b.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"});this.a.i=a;a=b&&b.initMessageHeaders||null;b&&b.messageContentType&&(a?a["X-WebChannel-Content-Type"]=b.messageContentType:a={"X-WebChannel-Content-Type":b.messageContentType});
this.a.M=a;(a=b&&b.httpHeadersOverwriteParam)&&!/^[\s\xa0]*$/.test(a)&&(this.a.h=a);this.o=b&&b.supportsCrossDomainXhr||!1;this.m=b&&b.sendRawJson||!1;(b=b&&b.httpSessionIdParam)&&!/^[\s\xa0]*$/.test(b)&&(this.a.j=b,a=this.g,null!==a&&b in a&&(a=this.g,b in a&&delete a[b],E(this.f,"Ignore httpSessionIdParam also specified with messageUrlParams: "+b)));this.h=new Pe(this)}u(W,B);
W.prototype.j=function(){this.a.f=this.h;this.o&&(this.a.S=!0);var a=this.a,b=this.s,c=this.b,d=this.g||void 0;I(a.a,"connect()");J(0);a.ka=c;a.U=d||{};a.D&&(I(a.a,"connect() bypassed channel-test."),a.H.b=[],a.H.a=!1);I(a.a,"connectTest_()");a.B=new Qd(a,a.a);null===a.h&&(a.B.i=a.i);c=b;a.h&&a.i&&(c=ve(b,a.h,a.i));a=a.B;a.l=c;b=Ke(a.a,a.l);J(3);c=a.a.H.b;null!=c?(a.g=c[0],a.R=1,Rd(a)):(Xc(b,"MODE","init"),!a.a.D&&a.a.j&&Xc(b,"X-HTTP-Session-Id",a.a.j),a.c=new K(a,a.b,void 0,void 0),a.c.j=a.i,Vc(a.c,
b,!1,null),a.R=0)};W.prototype.close=function(){xe(this.a)};W.prototype.l=function(a){if(l(a)){var b={};b.__data__=a;Ce(this.a,b)}else this.m?(b={},b.__data__=Db(a),Ce(this.a,b)):Ce(this.a,a)};W.prototype.A=function(){this.a.f=null;delete this.h;xe(this.a);delete this.a;W.L.A.call(this)};function Qe(a){Od.call(this);var b=a.__sm__;if(b){a:{for(var c in b){a=c;break a}a=void 0}(this.c=a)?(a=this.c,this.data=null!==b&&a in b?b[a]:void 0):this.data=b}else this.data=a}u(Qe,Od);
function Re(){Pd.call(this);this.status=1}u(Re,Pd);function Pe(a){this.a=a}u(Pe,Me);Pe.prototype.Da=function(){pc(this.a.f,"WebChannel opened on "+this.a.b);this.a.dispatchEvent("a")};Pe.prototype.Ca=function(a){this.a.dispatchEvent(new Qe(a))};Pe.prototype.Ba=function(a){pc(this.a.f,"WebChannel aborted on "+this.a.b+" due to channel error: "+a);this.a.dispatchEvent(new Re(a))};Pe.prototype.Aa=function(){pc(this.a.f,"WebChannel closed on "+this.a.b);this.a.dispatchEvent("b")};var Se=ia(function(a,b){function c(){}c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d},Oe);function Te(){this.b=[];this.a=[]}function Ue(a){0==a.b.length&&(a.b=a.a,a.b.reverse(),a.a=[]);return a.b.pop()}Te.prototype.u=function(){return this.b.length+this.a.length};Te.prototype.contains=function(a){return 0<=sa(this.b,a)||0<=sa(this.a,a)};Te.prototype.v=function(){for(var a=[],b=this.b.length-1;0<=b;--b)a.push(this.b[b]);var c=this.a.length;for(b=0;b<c;++b)a.push(this.a[b]);return a};function Ve(a,b){w.call(this);this.h=a||0;this.c=b||10;if(this.h>this.c)throw Error(We);this.a=new Te;this.b=new S;this.g=null;this.ba()}u(Ve,w);var We="[goog.structs.Pool] Min can not be greater than max";g=Ve.prototype;g.ea=function(){var a=t();if(!(null!=this.g&&0>a-this.g)){for(var b;0<this.a.u()&&(b=Ue(this.a),!this.ta(b));)this.ba();!b&&this.u()<this.c&&(b=this.qa());b&&(this.g=a,this.b.add(b));return b}};g.gb=function(a){return kd(this.b.a,Wd(a))?(this.na(a),!0):!1};
g.na=function(a){kd(this.b.a,Wd(a));this.ta(a)&&this.u()<this.c?this.a.a.push(a):Xe(a)};g.ba=function(){for(var a=this.a;this.u()<this.h;){var b=this.qa();a.a.push(b)}for(;this.u()>this.c&&0<this.a.u();)Xe(Ue(a))};g.qa=function(){return{}};function Xe(a){if("function"==typeof a.Z)a.Z();else for(var b in a)a[b]=null}g.ta=function(a){return"function"==typeof a.Wa?a.Wa():!0};g.contains=function(a){return this.a.contains(a)||this.b.contains(a)};g.u=function(){return this.a.u()+this.b.u()};
g.A=function(){Ve.L.A.call(this);if(0<this.b.u())throw Error("[goog.structs.Pool] Objects not released");delete this.b;for(var a=this.a;0!=a.b.length||0!=a.a.length;)Xe(Ue(a));delete this.a};function Ye(a,b){this.a=a;this.b=b};function Ze(a){this.a=[];if(a)a:{if(a instanceof Ze){var b=a.O();a=a.v();if(0>=this.u()){for(var c=this.a,d=0;d<b.length;d++)c.push(new Ye(b[d],a[d]));break a}}else b=Da(a),a=Ca(a);for(d=0;d<b.length;d++)$e(this,b[d],a[d])}}function $e(a,b,c){var d=a.a;d.push(new Ye(b,c));b=d.length-1;a=a.a;for(c=a[b];0<b;)if(d=b-1>>1,a[d].a>c.a)a[b]=a[d],b=d;else break;a[b]=c}Ze.prototype.v=function(){for(var a=this.a,b=[],c=a.length,d=0;d<c;d++)b.push(a[d].b);return b};
Ze.prototype.O=function(){for(var a=this.a,b=[],c=a.length,d=0;d<c;d++)b.push(a[d].a);return b};Ze.prototype.u=function(){return this.a.length};function af(){Ze.call(this)}u(af,Ze);function X(a,b){this.f=new af;Ve.call(this,a,b)}u(X,Ve);g=X.prototype;g.ea=function(a,b){if(!a)return X.L.ea.call(this);$e(this.f,void 0!==b?b:100,a);this.sa()};g.sa=function(){for(var a=this.f;0<a.u();){var b=this.ea();if(b){var c=a,d=c.a,e=d.length;var f=d[0];if(0>=e)f=void 0;else{if(1==e)wa(d);else{d[0]=d.pop();d=0;c=c.a;e=c.length;for(var h=c[d];d<e>>1;){var m=2*d+1,v=2*d+2;m=v<e&&c[v].a<c[m].a?v:m;if(c[m].a>h.a)break;c[d]=c[m];d=m}c[d]=h}f=f.b}f.apply(this,[b])}else break}};
g.na=function(a){X.L.na.call(this,a);this.sa()};g.ba=function(){X.L.ba.call(this);this.sa()};g.A=function(){X.L.A.call(this);k.clearTimeout(void 0);wa(this.f.a);this.f=null};function Y(a,b,c,d){this.l=a;this.j=!!d;X.call(this,b,c)}u(Y,X);Y.prototype.qa=function(){var a=new T,b=this.l;b&&b.forEach(function(b,d){a.headers.set(d,b)});this.j&&(a.m=!0);return a};Y.prototype.ta=function(a){return!a.i&&!a.a};Oe.prototype.createWebChannel=Oe.prototype.a;W.prototype.send=W.prototype.l;W.prototype.open=W.prototype.j;W.prototype.close=W.prototype.close;Fc.NO_ERROR=0;Fc.TIMEOUT=8;Fc.HTTP_ERROR=6;Gc.COMPLETE="complete";Md.EventType=Nd;Nd.OPEN="a";Nd.CLOSE="b";Nd.ERROR="c";Nd.MESSAGE="d";B.prototype.listen=B.prototype.aa;Y.prototype.getObject=Y.prototype.ea;Y.prototype.releaseObject=Y.prototype.gb;T.prototype.listenOnce=T.prototype.Ha;T.prototype.getLastError=T.prototype.Za;T.prototype.getLastErrorCode=T.prototype.Fa;
T.prototype.getStatus=T.prototype.W;T.prototype.getStatusText=T.prototype.Ga;T.prototype.getResponseJson=T.prototype.Ya;T.prototype.getResponseText=T.prototype.V;T.prototype.getResponseText=T.prototype.V;T.prototype.send=T.prototype.fa;module.exports={createWebChannelTransport:Se,ErrorCode:Fc,EventType:Gc,WebChannel:Md,XhrIoPool:Y};}).call(typeof window !== 'undefined' ? window : this)


/***/ })

},[113]);
        } catch(error) {
          throw new Error(
            'Cannot instantiate firebase-firestore.js - ' +
            'be sure to load firebase-app.js first.'
          )
        }
//# sourceMappingURL=firebase-firestore.js.map