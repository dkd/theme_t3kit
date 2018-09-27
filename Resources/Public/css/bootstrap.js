!function(){"use strict";function Vt(e){return(Vt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function e(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}function s(i){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{},t=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(o).filter(function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable}))),t.forEach(function(e){var t,n,r;t=i,r=o[n=e],n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r})}return i}var i="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var t,o,n,l,u,c,f,d,p,h,g,v,m,y,b,x,w,T,C,_,E,k,A,D,S,N,j,I,L,O,q,H,P,R,M,W,F,B,$,U,Q,z,V,X,K,Y,G,J,Z,ee,te,ne,re,ie,oe,ae,se,le,ue,ce,fe,de,pe,he,ge,ve,me,ye,be,xe,we,Te,Ce,_e,Ee,ke,Ae,De,Se,Ne,je,Ie,Le,Oe,qe,He,Pe,Re,Me,We,Fe=(function(e){
/*!
     * jQuery JavaScript Library v3.3.1
     * https://jquery.com/
     *
     * Includes Sizzle.js
     * https://sizzlejs.com/
     *
     * Copyright JS Foundation and other contributors
     * Released under the MIT license
     * https://jquery.org/license
     *
     * Date: 2018-01-20T17:24Z
     */
var t,n;t="undefined"!=typeof window?window:i,n=function(C,e){var t=[],_=C.document,r=Object.getPrototypeOf,s=t.slice,g=t.concat,l=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,u=a.call(Object),m={},y=function(e){
// Support: Chrome <=57, Firefox <=52
// In some browsers, typeof returns "function" for HTML <object> elements
// (i.e., `typeof document.createElement( "object" ) === "function"`).
// We don't want to classify *any* DOM node as a function.
return"function"==typeof e&&"number"!=typeof e.nodeType},b=function(e){return null!=e&&e===e.window},c={type:!0,src:!0,noModule:!0};function x(e,t,n){var r,i=(t=t||_).createElement("script");if(i.text=e,n)for(r in c)n[r]&&(i[r]=n[r]);t.head.appendChild(i).parentNode.removeChild(i)}function w(e){return null==e?e+"":"object"===Vt(e)||"function"==typeof e?n[o.call(e)]||"object":Vt(e);// Support: Android <=2.3 only (functionish RegExp)
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module
var
// Define a local copy of jQuery
E=function e(t,n){
// The jQuery object is actually just the init constructor 'enhanced'
// Need init if jQuery is called (just allow error to be thrown if not included)
return new e.fn.init(t,n)},
// Support: Android <=4.0 only
// Make sure we trim BOM and NBSP
f=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;function d(e){
// Support: real iOS 8.2 only (not reproducible in simulator)
// `in` check used to prevent JIT error (gh-2145)
// hasOwn isn't used here due to false negatives
// regarding Nodelist length in IE
var t=!!e&&"length"in e&&e.length,n=w(e);return!y(e)&&!b(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}E.fn=E.prototype={
// The current version of jQuery being used
jquery:"3.3.1",constructor:E,
// The default length of a jQuery object is 0
length:0,toArray:function(){return s.call(this)},
// Get the Nth element in the matched element set OR
// Get the whole matched element set as a clean array
get:function(e){
// Return all the elements in a clean array
return null==e?s.call(this):e<0?this[e+this.length]:this[e];// Return just the one element from the set
},
// Take an array of elements and push it onto the stack
// (returning the new matched element set)
pushStack:function(e){
// Build a new jQuery matched element set
var t=E.merge(this.constructor(),e);// Add the old object onto the stack (as a reference)
// Return the newly-formed element set
return t.prevObject=this,t},
// Execute a callback for every element in the matched set.
each:function(e){return E.each(this,e)},map:function(n){return this.pushStack(E.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},
// For internal use only.
// Behaves like an Array's method, not like a jQuery method.
push:l,sort:t.sort,splice:t.splice},E.extend=E.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,l=arguments.length,u=!1;// Handle a deep copy situation
for("boolean"==typeof a&&(u=a,// Skip the boolean and the target
a=arguments[s]||{},s++),// Handle case when target is a string or something (possible in deep copy)
"object"===Vt(a)||y(a)||(a={}),// Extend jQuery itself if only one argument is passed
s===l&&(a=this,s--);s<l;s++)
// Only deal with non-null/undefined values
if(null!=(e=arguments[s]))
// Extend the base object
for(t in e)n=a[t],// Prevent never-ending loop
a!==(r=e[t])&&(// Recurse if we're merging plain objects or arrays
u&&r&&(E.isPlainObject(r)||(i=Array.isArray(r)))?(o=i?(i=!1,n&&Array.isArray(n)?n:[]):n&&E.isPlainObject(n)?n:{},// Never move original objects, clone them
a[t]=E.extend(u,o,r)):void 0!==r&&(a[t]=r));// Return the modified object
return a},E.extend({
// Unique for each copy of jQuery on the page
expando:"jQuery"+("3.3.1"+Math.random()).replace(/\D/g,""),
// Assume jQuery is ready without the ready module
isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;// Detect obvious negatives
// Use toString instead of jQuery.type to catch host objects
return!(!e||"[object Object]"!==o.call(e))&&(// Objects with no prototype (e.g., `Object.create( null )`) are plain
!(t=r(e))||"function"==typeof(// Objects with prototype are plain iff they were constructed by a global Object function
n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===u)},isEmptyObject:function(e){
/* eslint-disable no-unused-vars */
// See https://github.com/eslint/eslint/issues/6125
var t;for(t in e)return!1;return!0},
// Evaluates a script in a global context
globalEval:function(e){x(e)},each:function(e,t){var n,r=0;if(d(e))for(n=e.length;r<n&&!1!==t.call(e[r],r,e[r]);r++);else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},
// Support: Android <=4.0 only
trim:function(e){return null==e?"":(e+"").replace(f,"")},
// results is for internal usage only
makeArray:function(e,t){var n=t||[];return null!=e&&(d(Object(e))?E.merge(n,"string"==typeof e?[e]:e):l.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},
// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){// Go through the array, only saving the items
// that pass the validator function
for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},
// arg is for internal usage only
map:function(e,t,n){var r,i,o=0,a=[];// Go through the array, translating each of the items to their new values
if(d(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);// Go through every key on the object,
else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);// Flatten any nested arrays
return g.apply([],a)},
// A global GUID counter for objects
guid:1,
// jQuery.support is not used in Core but other projects attach their
// properties to it so it needs to exist.
support:m}),"function"==typeof Symbol&&(E.fn[Symbol.iterator]=t[Symbol.iterator]),// Populate the class2type map
E.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var p=
/*!
       * Sizzle CSS Selector Engine v2.3.3
       * https://sizzlejs.com/
       *
       * Copyright jQuery Foundation and other contributors
       * Released under the MIT license
       * http://jquery.org/license
       *
       * Date: 2016-08-08
       */
function(n){var e,p,x,o,i,h,f,g,w,l,u,
// Local document vars
T,C,a,_,v,s,c,m,
// Instance-specific data
E="sizzle"+1*new Date,y=n.document,k=0,r=0,d=ae(),b=ae(),A=ae(),D=function(e,t){return e===t&&(u=!0),0},
// Instance methods
S={}.hasOwnProperty,t=[],N=t.pop,j=t.push,I=t.push,L=t.slice,
// Use a stripped-down indexOf as it's faster than native
// https://jsperf.com/thor-indexof-vs-for/5
O=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},q="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
// Regular expressions
// http://www.w3.org/TR/css3-selectors/#whitespace
H="[\\x20\\t\\r\\n\\f]",
// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
P="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
R="\\["+H+"*("+P+")(?:"+H+// Operator (capture 2)
"*([*^$|!~]?=)"+H+// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+P+"))|)"+H+"*\\]",M=":("+P+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+R+")*)|.*)\\)|)",
// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
W=new RegExp(H+"+","g"),F=new RegExp("^"+H+"+|((?:^|[^\\\\])(?:\\\\.)*)"+H+"+$","g"),B=new RegExp("^"+H+"*,"+H+"*"),$=new RegExp("^"+H+"*([>+~]|"+H+")"+H+"*"),U=new RegExp("="+H+"*([^\\]'\"]*?)"+H+"*\\]","g"),Q=new RegExp(M),z=new RegExp("^"+P+"$"),V={ID:new RegExp("^#("+P+")"),CLASS:new RegExp("^\\.("+P+")"),TAG:new RegExp("^("+P+"|[*])"),ATTR:new RegExp("^"+R),PSEUDO:new RegExp("^"+M),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+H+"*(even|odd|(([+-]|)(\\d*)n|)"+H+"*(?:([+-]|)"+H+"*(\\d+)|))"+H+"*\\)|)","i"),bool:new RegExp("^(?:"+q+")$","i"),
// For use in libraries implementing .is()
// We use this for POS matching in `select`
needsContext:new RegExp("^"+H+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+H+"*((?:-\\d)?\\d*)"+H+"*\\)|)(?=[^-]|$)","i")},X=/^(?:input|select|textarea|button)$/i,K=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,
// Easily-parseable/retrievable ID or TAG or CLASS selectors
G=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,J=/[+~]/,
// CSS escapes
// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
Z=new RegExp("\\\\([\\da-f]{1,6}"+H+"?|("+H+")|.)","ig"),ee=function(e,t,n){var r="0x"+t-65536;// NaN means non-codepoint
// Support: Firefox<24
// Workaround erroneous numeric interpretation of +"0x"
return r!=r||n?t:r<0?// BMP codepoint
String.fromCharCode(r+65536):// Supplemental Plane codepoint (surrogate pair)
String.fromCharCode(r>>10|55296,1023&r|56320)},
// CSS string/identifier serialization
// https://drafts.csswg.org/cssom/#common-serializing-idioms
te=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ne=function(e,t){return t?
// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
"\0"===e?"�":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e;// Other potentially-special ASCII characters get backslash-escaped
},
// Used for iframes
// See setDocument()
// Removing the function wrapper causes a "Permission Denied"
// error in IE
re=function(){T()},ie=ye(function(e){return!0===e.disabled&&("form"in e||"label"in e)},{dir:"parentNode",next:"legend"});// Optimize for push.apply( _, NodeList )
try{I.apply(t=L.call(y.childNodes),y.childNodes),// Support: Android<4.0
// Detect silently failing push.apply
t[y.childNodes.length].nodeType}catch(e){I={apply:t.length?// Leverage slice if possible
function(e,t){j.apply(e,L.call(t))}:// Support: IE<9
// Otherwise append directly
function(e,t){// Can't trust NodeList.length
for(var n=e.length,r=0;e[n++]=t[r++];);e.length=n-1}}}function oe(e,t,n,r){var i,o,a,s,l,u,c,f=t&&t.ownerDocument,
// nodeType defaults to 9, since context defaults to document
d=t?t.nodeType:9;// Return early from calls with invalid selector or context
if(n=n||[],"string"!=typeof e||!e||1!==d&&9!==d&&11!==d)return n;// Try to shortcut find operations (as opposed to filters) in HTML documents
if(!r&&((t?t.ownerDocument||t:y)!==C&&T(t),t=t||C,_)){
// If the selector is sufficiently simple, try using a "get*By*" DOM method
// (excepting DocumentFragment context, where the methods don't exist)
if(11!==d&&(l=G.exec(e)))
// ID selector
if(i=l[1]){
// Document context
if(9===d){if(!(a=t.getElementById(i)))return n;// Element context
// Support: IE, Opera, Webkit
// TODO: identify versions
// getElementById can match elements by name instead of ID
if(a.id===i)return n.push(a),n}else
// Support: IE, Opera, Webkit
// TODO: identify versions
// getElementById can match elements by name instead of ID
if(f&&(a=f.getElementById(i))&&m(t,a)&&a.id===i)return n.push(a),n;// Type selector
}else{if(l[2])return I.apply(n,t.getElementsByTagName(e)),n;// Class selector
if((i=l[3])&&p.getElementsByClassName&&t.getElementsByClassName)return I.apply(n,t.getElementsByClassName(i)),n}// Take advantage of querySelectorAll
if(p.qsa&&!A[e+" "]&&(!v||!v.test(e))){if(1!==d)f=t,c=e;else if("object"!==t.nodeName.toLowerCase()){for(
// Capture the context ID, setting it first if necessary
(s=t.getAttribute("id"))?s=s.replace(te,ne):t.setAttribute("id",s=E),o=(// Prefix every selector in the list
u=h(e)).length;o--;)u[o]="#"+s+" "+me(u[o]);c=u.join(","),// Expand context for sibling selectors
f=J.test(e)&&ge(t.parentNode)||t}if(c)try{return I.apply(n,f.querySelectorAll(c)),n}catch(e){}finally{s===E&&t.removeAttribute("id")}}}// All others
return g(e.replace(F,"$1"),t,n,r)}
/**
         * Create key-value caches of limited size
         * @returns {function(string, object)} Returns the Object data after storing it on itself with
         *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
         *	deleting the oldest entry
         */function ae(){var r=[];return function e(t,n){
// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
return r.push(t+" ")>x.cacheLength&&
// Only keep the most recent entries
delete e[r.shift()],e[t+" "]=n}}
/**
         * Mark a function for special use by Sizzle
         * @param {Function} fn The function to mark
         */function se(e){return e[E]=!0,e}
/**
         * Support testing using an element
         * @param {Function} fn Passed the created element and returns a boolean result
         */function le(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{
// Remove from its parent by default
t.parentNode&&t.parentNode.removeChild(t),// release memory in IE
t=null}}
/**
         * Adds the same handler for all of the specified attrs
         * @param {String} attrs Pipe-separated list of attributes
         * @param {Function} handler The method that will be applied
         */function ue(e,t){for(var n=e.split("|"),r=n.length;r--;)x.attrHandle[n[r]]=t}
/**
         * Checks document order of two siblings
         * @param {Element} a
         * @param {Element} b
         * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
         */function ce(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;// Use IE sourceIndex if available on both nodes
if(r)return r;// Check if b follows a
if(n)for(;n=n.nextSibling;)if(n===t)return-1;return e?1:-1}
/**
         * Returns a function to use in pseudos for input types
         * @param {String} type
         */function fe(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}
/**
         * Returns a function to use in pseudos for buttons
         * @param {String} type
         */function de(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}
/**
         * Returns a function to use in pseudos for :enabled/:disabled
         * @param {Boolean} disabled true for :disabled; false for :enabled
         */function pe(t){
// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
return function(e){
// Only certain elements can match :enabled or :disabled
// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
return"form"in e?
// Check for inherited disabledness on relevant non-disabled elements:
// * listed form-associated elements in a disabled fieldset
//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
// * option elements in a disabled optgroup
//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
// All such elements have a "form" property.
e.parentNode&&!1===e.disabled?
// Option elements defer to a parent optgroup if present
"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||// Where there is no isDisabled, check manually
/* jshint -W018 */
e.isDisabled!==!t&&ie(e)===t:e.disabled===t:"label"in e&&e.disabled===t;// Remaining elements are neither :enabled nor :disabled
}}
/**
         * Returns a function to use in pseudos for positionals
         * @param {Function} fn
         */function he(a){return se(function(o){return o=+o,se(function(e,t){// Match elements found at the specified indexes
for(var n,r=a([],e.length,o),i=r.length;i--;)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}
/**
         * Checks a node for validity as a Sizzle context
         * @param {Element|Object=} context
         * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
         */function ge(e){return e&&void 0!==e.getElementsByTagName&&e}// Expose support vars for convenience
// Add button/input type pseudos
for(e in p=oe.support={},
/**
         * Detects XML nodes
         * @param {Element|Object} elem An element or a document
         * @returns {Boolean} True iff elem is a non-HTML XML node
         */
i=oe.isXML=function(e){
// documentElement is verified for cases where it doesn't yet exist
// (such as loading iframes in IE - #4833)
var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},
/**
         * Sets document-related variables once based on the current document
         * @param {Element|Object} [doc] An element or document object to use to set the document
         * @returns {Object} Returns the current document
         */
T=oe.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:y;// Return early if doc is invalid or already selected
return r!==C&&9===r.nodeType&&r.documentElement&&(// Update global variables
a=(C=r).documentElement,_=!i(C),// Support: IE 9-11, Edge
// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
y!==C&&(n=C.defaultView)&&n.top!==n&&(
// Support: IE 11, Edge
n.addEventListener?n.addEventListener("unload",re,!1):n.attachEvent&&n.attachEvent("onunload",re)),
/* Attributes
          ---------------------------------------------------------------------- */
// Support: IE<8
// Verify that getAttribute really returns attributes and not properties
// (excepting IE8 booleans)
p.attributes=le(function(e){return e.className="i",!e.getAttribute("className")}),
/* getElement(s)By*
          ---------------------------------------------------------------------- */
// Check if getElementsByTagName("*") returns only elements
p.getElementsByTagName=le(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),// Support: IE<9
p.getElementsByClassName=Y.test(C.getElementsByClassName),// Support: IE<10
// Check if getElementById returns elements by name
// The broken getElementById methods don't pick up programmatically-set names,
// so use a roundabout getElementsByName test
p.getById=le(function(e){return a.appendChild(e).id=E,!C.getElementsByName||!C.getElementsByName(E).length}),// ID filter and find
p.getById?(x.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){return e.getAttribute("id")===t}},x.find.ID=function(e,t){if(void 0!==t.getElementById&&_){var n=t.getElementById(e);return n?[n]:[]}}):(x.filter.ID=function(e){var n=e.replace(Z,ee);return function(e){var t=void 0!==e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},// Support: IE 6 - 7 only
// getElementById is not reliable as a find shortcut
x.find.ID=function(e,t){if(void 0!==t.getElementById&&_){var n,r,i,o=t.getElementById(e);if(o){if((
// Verify the id attribute
n=o.getAttributeNode("id"))&&n.value===e)return[o];// Fall back on getElementsByName
for(i=t.getElementsByName(e),r=0;o=i[r++];)if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),// Tag
x.find.TAG=p.getElementsByTagName?function(e,t){return void 0!==t.getElementsByTagName?t.getElementsByTagName(e):p.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,
// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
o=t.getElementsByTagName(e);// Filter out possible comments
if("*"!==e)return o;for(;n=o[i++];)1===n.nodeType&&r.push(n);return r},// Class
x.find.CLASS=p.getElementsByClassName&&function(e,t){if(void 0!==t.getElementsByClassName&&_)return t.getElementsByClassName(e)},
/* QSA/matchesSelector
          ---------------------------------------------------------------------- */
// QSA and matchesSelector support
// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
s=[],// qSa(:focus) reports false when true (Chrome 21)
// We allow this because of a bug in IE8/9 that throws an error
// whenever `document.activeElement` is accessed on an iframe
// So, we allow :focus to pass through QSA all the time to avoid the IE error
// See https://bugs.jquery.com/ticket/13378
v=[],(p.qsa=Y.test(C.querySelectorAll))&&(
// Build QSA regex
// Regex strategy adopted from Diego Perini
le(function(e){
// Select is set to empty string on purpose
// This is to test IE's treatment of not explicitly
// setting a boolean content attribute,
// since its presence should be enough
// https://bugs.jquery.com/ticket/12359
a.appendChild(e).innerHTML="<a id='"+E+"'></a><select id='"+E+"-\r\\' msallowcapture=''><option selected=''></option></select>",// Support: IE8, Opera 11-12.16
// Nothing should be selected when empty strings follow ^= or $= or *=
// The test attribute must be unknown in Opera but "safe" for WinRT
// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+H+"*(?:''|\"\")"),// Support: IE8
// Boolean attributes and "value" are not treated correctly
e.querySelectorAll("[selected]").length||v.push("\\["+H+"*(?:value|"+q+")"),// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
e.querySelectorAll("[id~="+E+"-]").length||v.push("~="),// Webkit/Opera - :checked should return selected option elements
// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
// IE8 throws error here and will not see later tests
e.querySelectorAll(":checked").length||v.push(":checked"),// Support: Safari 8+, iOS 8+
// https://bugs.webkit.org/show_bug.cgi?id=136851
// In-page `selector#id sibling-combinator selector` fails
e.querySelectorAll("a#"+E+"+*").length||v.push(".#.+[+~]")}),le(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";// Support: Windows 8 Native Apps
// The type and name attributes are restricted during .innerHTML assignment
var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),// Support: IE8
// Enforce case-sensitivity of name attribute
e.querySelectorAll("[name=d]").length&&v.push("name"+H+"*[*^$|!~]?="),// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
// IE8 throws error here and will not see later tests
2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),// Support: IE9-11+
// IE's :disabled selector does not pick up the children of disabled fieldsets
a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),// Opera 10-11 does not throw on post-comma invalid pseudos
e.querySelectorAll("*,:x"),v.push(",.*:")})),(p.matchesSelector=Y.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&le(function(e){
// Check to see if it's possible to do matchesSelector
// on a disconnected node (IE 9)
p.disconnectedMatch=c.call(e,"*"),// This should fail with an exception
// Gecko does not error, returns false instead
c.call(e,"[s!='']:x"),s.push("!=",M)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),
/* Contains
          ---------------------------------------------------------------------- */
t=Y.test(a.compareDocumentPosition),// Element contains another
// Purposefully self-exclusive
// As in, an element does not contain itself
m=t||Y.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},
/* Sorting
          ---------------------------------------------------------------------- */
// Document order sorting
D=t?function(e,t){
// Flag for duplicate removal
if(e===t)return u=!0,0;// Sort on method existence if only one input has compareDocumentPosition
var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(// Disconnected nodes
1&(// Calculate position if both inputs belong to the same document
n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):// Otherwise we know they are disconnected
1)||!p.sortDetached&&t.compareDocumentPosition(e)===n?
// Choose the first element that is related to our preferred document
e===C||e.ownerDocument===y&&m(y,e)?-1:t===C||t.ownerDocument===y&&m(y,t)?1:l?O(l,e)-O(l,t):0:4&n?-1:1)}:function(e,t){
// Exit early if the nodes are identical
if(e===t)return u=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];// Parentless nodes are either documents or disconnected
if(!i||!o)return e===C?-1:t===C?1:i?-1:o?1:l?O(l,e)-O(l,t):0;// If the nodes are siblings, we can do a quick check
// Otherwise we need full lists of their ancestors for comparison
if(i===o)return ce(e,t);for(n=e;n=n.parentNode;)a.unshift(n);for(n=t;n=n.parentNode;)s.unshift(n);// Walk down the tree looking for a discrepancy
for(;a[r]===s[r];)r++;return r?// Do a sibling check if the nodes have a common ancestor
ce(a[r],s[r]):// Otherwise nodes in our document sort first
a[r]===y?-1:s[r]===y?1:0}),C},oe.matches=function(e,t){return oe(e,null,null,t)},oe.matchesSelector=function(e,t){if(
// Set document vars if needed
(e.ownerDocument||e)!==C&&T(e),// Make sure that attribute selectors are quoted
t=t.replace(U,"='$1']"),p.matchesSelector&&_&&!A[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);// IE 9's matchesSelector returns false on disconnected nodes
if(n||p.disconnectedMatch||// As well, disconnected nodes are said to be in a document
// fragment in IE 9
e.document&&11!==e.document.nodeType)return n}catch(e){}return 0<oe(t,C,null,[e]).length},oe.contains=function(e,t){
// Set document vars if needed
return(e.ownerDocument||e)!==C&&T(e),m(e,t)},oe.attr=function(e,t){
// Set document vars if needed
(e.ownerDocument||e)!==C&&T(e);var n=x.attrHandle[t.toLowerCase()],
// Don't get fooled by Object.prototype properties (jQuery #13807)
r=n&&S.call(x.attrHandle,t.toLowerCase())?n(e,t,!_):void 0;return void 0!==r?r:p.attributes||!_?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},oe.escape=function(e){return(e+"").replace(te,ne)},oe.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},
/**
         * Document sorting and removing duplicates
         * @param {ArrayLike} results
         */
oe.uniqueSort=function(e){var t,n=[],r=0,i=0;// Unless we *know* we can detect duplicates, assume their presence
if(u=!p.detectDuplicates,l=!p.sortStable&&e.slice(0),e.sort(D),u){for(;t=e[i++];)t===e[i]&&(r=n.push(i));for(;r--;)e.splice(n[r],1)}// Clear input after sorting to release objects
// See https://github.com/jquery/sizzle/pull/225
return l=null,e},
/**
         * Utility function for retrieving the text value of an array of DOM nodes
         * @param {Array|Element} elem
         */
o=oe.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){
// Use textContent for elements
// innerText usage removed for consistency of new lines (jQuery #11153)
if("string"==typeof e.textContent)return e.textContent;
// Traverse its children
for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue;// Do not include comment or processing instruction nodes
}else
// If no nodeType, this is expected to be an array
for(;t=e[r++];)
// Do not traverse comment nodes
n+=o(t);return n},(x=oe.selectors={
// Can be adjusted by the user
cacheLength:50,createPseudo:se,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(Z,ee),// Move the given value to match[3] whether quoted or unquoted
e[3]=(e[3]||e[4]||e[5]||"").replace(Z,ee),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){
/* matches from matchExpr["CHILD"]
              	1 type (only|nth|...)
              	2 what (child|of-type)
              	3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
              	4 xn-component of xn+y argument ([+-]?\d*n|)
              	5 sign of xn-component
              	6 x of xn-component
              	7 sign of y-component
              	8 y of y-component
              */
return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(
// nth-* requires argument
e[3]||oe.error(e[0]),// numeric x and y parameters for Expr.filter.CHILD
// remember that false/true cast respectively to 0/1
e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&oe.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return V.CHILD.test(e[0])?null:(// Accept quoted arguments as-is
e[3]?e[2]=e[4]||e[5]||"":n&&Q.test(n)&&(// Get excess from tokenize (recursively)
t=h(n,!0))&&(// advance to the next closing parenthesis
t=n.indexOf(")",n.length-t)-n.length)&&(
// excess is a negative index
e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(Z,ee).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=d[e+" "];return t||(t=new RegExp("(^|"+H+")"+e+"("+H+"|$)"))&&d(e,function(e){return t.test("string"==typeof e.className&&e.className||void 0!==e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=oe.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(W," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var m="nth"!==h.slice(0,3),y="last"!==h.slice(-4),b="of-type"===e;return 1===g&&0===v?// Shortcut for :nth-*(n)
function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,l,u=m!==y?"nextSibling":"previousSibling",c=e.parentNode,f=b&&e.nodeName.toLowerCase(),d=!n&&!b,p=!1;if(c){
// :(first|last|only)-(child|of-type)
if(m){for(;u;){for(a=e;a=a[u];)if(b?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;// Reverse direction for :only-* (if we haven't yet done so)
l=u="only"===h&&!l&&"nextSibling"}return!0}// non-xml :nth-child(...) stores cache data on `parent`
if(l=[y?c.firstChild:c.lastChild],y&&d){for(
// Seek `elem` from a previously-cached index
// ...in a gzip-friendly way
p=(s=(r=(// Support: IE <9 only
// Defend against cloned attroperties (jQuery gh-1709)
i=(o=(a=c)[E]||(a[E]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1])&&r[2],a=s&&c.childNodes[s];a=++s&&a&&a[u]||(// Fallback to seeking `elem` from the start
p=s=0)||l.pop();)
// When found, cache indexes on `parent` and break
if(1===a.nodeType&&++p&&a===e){i[h]=[k,s,p];break}}else// xml :nth-child(...)
// or :nth-last-child(...) or :nth(-last)?-of-type(...)
if(
// Use previously-cached element index if available
d&&(p=s=(r=(// Support: IE <9 only
// Defend against cloned attroperties (jQuery gh-1709)
i=(o=(
// ...in a gzip-friendly way
a=e)[E]||(a[E]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1]),!1===p)
// Use the same loop as above to seek `elem` from the start
for(;(a=++s&&a&&a[u]||(p=s=0)||l.pop())&&((b?a.nodeName.toLowerCase()!==f:1!==a.nodeType)||!++p||(
// Cache the index of each encountered element
d&&((// Support: IE <9 only
// Defend against cloned attroperties (jQuery gh-1709)
i=(o=a[E]||(a[E]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[k,p]),a!==e)););// Incorporate the offset, then check against cycle size
return(p-=v)===g||p%g==0&&0<=p/g}}},PSEUDO:function(e,o){
// pseudo-class names are case-insensitive
// http://www.w3.org/TR/selectors/#pseudo-classes
// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
// Remember that setFilters inherits from pseudos
var t,a=x.pseudos[e]||x.setFilters[e.toLowerCase()]||oe.error("unsupported pseudo: "+e);// The user may use createPseudo to indicate that
// arguments are needed to create the filter function
// just as Sizzle does
return a[E]?a(o):// But maintain support for old signatures
1<a.length?(t=[e,e,"",o],x.setFilters.hasOwnProperty(e.toLowerCase())?se(function(e,t){for(var n,r=a(e,o),i=r.length;i--;)e[n=O(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{
// Potentially complex pseudos
not:se(function(e){
// Trim the selector passed to compile
// to avoid treating leading and trailing
// spaces as combinators
var r=[],i=[],s=f(e.replace(F,"$1"));return s[E]?se(function(e,t,n,r){// Match elements unmatched by `matcher`
for(var i,o=s(e,null,r,[]),a=e.length;a--;)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),// Don't keep the element (issue #299)
r[0]=null,!i.pop()}}),has:se(function(t){return function(e){return 0<oe(t,e).length}}),contains:se(function(t){return t=t.replace(Z,ee),function(e){return-1<(e.textContent||e.innerText||o(e)).indexOf(t)}}),
// "Whether an element is represented by a :lang() selector
// is based solely on the element's language value
// being equal to the identifier C,
// or beginning with the identifier C immediately followed by "-".
// The matching of C against the element's language value is performed case-insensitively.
// The identifier C does not have to be a valid language name."
// http://www.w3.org/TR/selectors/#lang-pseudo
lang:se(function(n){
// lang value must be a valid identifier
return z.test(n||"")||oe.error("unsupported lang: "+n),n=n.replace(Z,ee).toLowerCase(),function(e){var t;do{if(t=_?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),
// Miscellaneous
target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},
// Boolean properties
enabled:pe(!1),disabled:pe(!0),checked:function(e){
// In CSS3, :checked should return both checked and selected elements
// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){
// Accessing this property makes selected-by-default
// options in Safari work properly
return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},
// Contents
empty:function(e){
// http://www.w3.org/TR/selectors/#empty-pseudo
// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
//   but not by others (comment: 8; processing instruction: 7; etc.)
// nodeType < 6 works because attributes (2) do not appear as children
for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!x.pseudos.empty(e)},
// Element/input types
header:function(e){return K.test(e.nodeName)},input:function(e){return X.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(// Support: IE<8
// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},
// Position-in-collection
first:he(function(){return[0]}),last:he(function(e,t){return[t-1]}),eq:he(function(e,t,n){return[n<0?n+t:n]}),even:he(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:he(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:he(function(e,t,n){for(var r=n<0?n+t:n;0<=--r;)e.push(r);return e}),gt:he(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=x.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})x.pseudos[e]=fe(e);for(e in{submit:!0,reset:!0})x.pseudos[e]=de(e);// Easy API for creating new setFilters
function ve(){}function me(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function ye(s,e,t){var l=e.dir,u=e.next,c=u||l,f=t&&"parentNode"===c,d=r++;return e.first?// Check against closest ancestor/preceding element
function(e,t,n){for(;e=e[l];)if(1===e.nodeType||f)return s(e,t,n);return!1}:// Check against all ancestor/preceding elements
function(e,t,n){var r,i,o,a=[k,d];// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
if(n){for(;e=e[l];)if((1===e.nodeType||f)&&s(e,t,n))return!0}else for(;e=e[l];)if(1===e.nodeType||f)if(// Support: IE <9 only
// Defend against cloned attroperties (jQuery gh-1709)
i=(o=e[E]||(e[E]={}))[e.uniqueID]||(o[e.uniqueID]={}),u&&u===e.nodeName.toLowerCase())e=e[l]||e;else{if((r=i[c])&&r[0]===k&&r[1]===d)
// Assign to newCache so results back-propagate to previous elements
return a[2]=r[2];// A match means we're done; a fail means we have to keep checking
if((
// Reuse newcache so results back-propagate to previous elements
i[c]=a)[2]=s(e,t,n))return!0}return!1}}function be(i){return 1<i.length?function(e,t,n){for(var r=i.length;r--;)if(!i[r](e,t,n))return!1;return!0}:i[0]}function xe(e,t,n,r,i){for(var o,a=[],s=0,l=e.length,u=null!=t;s<l;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),u&&t.push(s)));return a}function we(p,h,g,v,m,e){return v&&!v[E]&&(v=we(v)),m&&!m[E]&&(m=we(m,e)),se(function(e,t,n,r){var i,o,a,s=[],l=[],u=t.length,
// Get initial elements from seed or context
c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)oe(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),
// Prefilter to get matcher input, preserving a map for seed-results synchronization
f=!p||!e&&h?c:xe(c,s,p,n,r),d=g?// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
m||(e?p:u||v)?// ...intermediate processing is necessary
[]:// ...otherwise use results directly
t:f;// Find primary matches
// Apply postFilter
if(g&&g(f,d,n,r),v)for(i=xe(d,l),v(i,[],n,r),// Un-match failing elements by moving them back to matcherIn
o=i.length;o--;)(a=i[o])&&(d[l[o]]=!(f[l[o]]=a));if(e){if(m||p){if(m){for(
// Get the final matcherOut by condensing this intermediate into postFinder contexts
i=[],o=d.length;o--;)(a=d[o])&&
// Restore matcherIn since elem is not yet a final match
i.push(f[o]=a);m(null,d=[],i,r)}// Move matched elements from seed to results to keep them synchronized
for(o=d.length;o--;)(a=d[o])&&-1<(i=m?O(e,a):s[o])&&(e[i]=!(t[i]=a))}// Add elements to results, through postFinder if defined
}else d=xe(d===t?d.splice(u,d.length):d),m?m(null,t,d,r):I.apply(t,d)})}function Te(e){for(var i,t,n,r=e.length,o=x.relative[e[0].type],a=o||x.relative[" "],s=o?1:0,
// The foundational matcher ensures that elements are reachable from top-level context(s)
l=ye(function(e){return e===i},a,!0),u=ye(function(e){return-1<O(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?l(e,t,n):u(e,t,n));// Avoid hanging onto element (issue #299)
return i=null,r}];s<r;s++)if(t=x.relative[e[s].type])c=[ye(be(c),t)];else{// Return special upon seeing a positional matcher
if((t=x.filter[e[s].type].apply(null,e[s].matches))[E]){for(
// Find the next relative operator (if any) for proper handling
n=++s;n<r&&!x.relative[e[n].type];n++);return we(1<s&&be(c),1<s&&me(// If the preceding token was a descendant combinator, insert an implicit any-element `*`
e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(F,"$1"),t,s<n&&Te(e.slice(s,n)),n<r&&Te(e=e.slice(n)),n<r&&me(e))}c.push(t)}return be(c)}return ve.prototype=x.filters=x.pseudos,x.setFilters=new ve,h=oe.tokenize=function(e,t){var n,r,i,o,a,s,l,u=b[e+" "];if(u)return t?0:u.slice(0);for(a=e,s=[],l=x.preFilter;a;){// Filters
for(o in
// Comma and first run
n&&!(r=B.exec(a))||(r&&(
// Don't consume trailing commas as valid
a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,// Combinators
(r=$.exec(a))&&(n=r.shift(),i.push({value:n,
// Cast descendant combinators to space
type:r[0].replace(F," ")}),a=a.slice(n.length)),x.filter)!(r=V[o].exec(a))||l[o]&&!(r=l[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}// Return the length of the invalid excess
// if we're just parsing
// Otherwise, throw an error or return tokens
return t?a.length:a?oe.error(e):// Cache the tokens
b(e,s).slice(0)},f=oe.compile=function(e,t
/* Internal Use Only */){var n,v,m,y,b,r,i=[],o=[],a=A[e+" "];if(!a){for(
// Generate a function of recursive functions that can be used to check each element
t||(t=h(e)),n=t.length;n--;)(a=Te(t[n]))[E]?i.push(a):o.push(a);// Cache the compiled function
// Save selector and tokenization
(a=A(e,(v=o,y=0<(m=i).length,b=0<v.length,r=function(e,t,n,r,i){var o,a,s,l=0,u="0",c=e&&[],f=[],d=w,
// We must always have either seed elements or outermost context
p=e||b&&x.find.TAG("*",i),
// Use integer dirruns iff this is the outermost matcher
h=k+=null==d?1:Math.random()||.1,g=p.length;// Add elements passing elementMatchers directly to results
// Support: IE<9, Safari
// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
for(i&&(w=t===C||t||i);u!==g&&null!=(o=p[u]);u++){if(b&&o){for(a=0,t||o.ownerDocument===C||(T(o),n=!_);s=v[a++];)if(s(o,t||C,n)){r.push(o);break}i&&(k=h)}// Track unmatched elements for set filters
y&&(
// They will have gone through all possible matchers
(o=!s&&o)&&l--,// Lengthen the array for every element, matched or not
e&&c.push(o))}// `i` is now the count of elements visited above, and adding it to `matchedCount`
// makes the latter nonnegative.
// Apply set filters to unmatched elements
// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
// no element matchers and no seed.
// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
// case, which will result in a "00" `matchedCount` that differs from `i` but is also
// numerically zero.
if(l+=u,y&&u!==l){for(a=0;s=m[a++];)s(c,f,t,n);if(e){
// Reintegrate element matches to eliminate the need for sorting
if(0<l)for(;u--;)c[u]||f[u]||(f[u]=N.call(r));// Discard index placeholder values to get only actual matches
f=xe(f)}// Add matches to results
I.apply(r,f),// Seedless set matches succeeding multiple successful matchers stipulate sorting
i&&!e&&0<f.length&&1<l+m.length&&oe.uniqueSort(r)}// Override manipulation of globals by nested matchers
return i&&(k=h,w=d),c},y?se(r):r))).selector=e}return a},
/**
         * A low-level selection function that works with Sizzle's compiled
         *  selector functions
         * @param {String|Function} selector A selector or a pre-compiled
         *  selector function built with Sizzle.compile
         * @param {Element} context
         * @param {Array} [results]
         * @param {Array} [seed] A set of elements to match against
         */
g=oe.select=function(e,t,n,r){var i,o,a,s,l,u="function"==typeof e&&e,c=!r&&h(e=u.selector||e);// Try to minimize operations if there is only one selector in the list and no seed
// (the latter of which guarantees us context)
if(n=n||[],1===c.length){if(2<(
// Reduce context if the leading compound selector is an ID
o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&_&&x.relative[o[1].type]){if(!(t=(x.find.ID(a.matches[0].replace(Z,ee),t)||[])[0]))return n;// Precompiled matchers will still verify ancestry, so step up a level
u&&(t=t.parentNode),e=e.slice(o.shift().value.length)}// Fetch a seed set for right-to-left matching
for(i=V.needsContext.test(e)?0:o.length;i--&&(a=o[i],!x.relative[s=a.type]);)if((l=x.find[s])&&(r=l(a.matches[0].replace(Z,ee),J.test(o[0].type)&&ge(t.parentNode)||t))){if(
// If seed is empty or no tokens remain, we can return early
o.splice(i,1),!(e=r.length&&me(o)))return I.apply(n,r),n;break}}// Compile and execute a filtering function if one is not provided
// Provide `match` to avoid retokenization if we modified the selector above
// Compile and execute a filtering function if one is not provided
// Provide `match` to avoid retokenization if we modified the selector above
return(u||f(e,c))(r,t,!_,n,!t||J.test(e)&&ge(t.parentNode)||t),n},// One-time assignments
// Sort stability
p.sortStable=E.split("").sort(D).join("")===E,// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
p.detectDuplicates=!!u,// Initialize against the default document
T(),// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
p.sortDetached=le(function(e){
// Should return 1, but returns 4 (following)
return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
le(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||ue("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),// Support: IE<9
// Use defaultValue in place of getAttribute("value")
p.attributes&&le(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||ue("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
le(function(e){return null==e.getAttribute("disabled")})||ue(q,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),oe}(C);E.find=p,E.expr=p.selectors,// Deprecated
E.expr[":"]=E.expr.pseudos,E.uniqueSort=E.unique=p.uniqueSort,E.text=p.getText,E.isXMLDoc=p.isXML,E.contains=p.contains,E.escapeSelector=p.escape;var h=function(e,t,n){for(var r=[],i=void 0!==n;(e=e[t])&&9!==e.nodeType;)if(1===e.nodeType){if(i&&E(e).is(n))break;r.push(e)}return r},T=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},k=E.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var D=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;// Implement the identical functionality for filter and not
function S(e,n,r){return y(n)?E.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):// Single element
n.nodeType?E.grep(e,function(e){return e===n!==r}):// Arraylike of elements (jQuery, arguments, Array)
"string"!=typeof n?E.grep(e,function(e){return-1<i.call(n,e)!==r}):E.filter(n,e,r)}E.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?E.find.matchesSelector(r,e)?[r]:[]:E.find.matches(e,E.grep(t,function(e){return 1===e.nodeType}))},E.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(E(e).filter(function(){for(t=0;t<r;t++)if(E.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)E.find(e,i[t],n);return 1<r?E.uniqueSort(n):n},filter:function(e){return this.pushStack(S(this,e||[],!1))},not:function(e){return this.pushStack(S(this,e||[],!0))},is:function(e){return!!S(this,// If this is a positional/relative selector, check membership in the returned set
// so $("p:first").is("p:last") won't return true for a doc with two "p".
"string"==typeof e&&k.test(e)?E(e):e||[],!1).length}});// Initialize a jQuery object
// A central reference to the root jQuery(document)
var N,
// A simple way to check for HTML strings
// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
// Strict HTML recognition (#11290: must start with <)
// Shortcut simple #id case for speed
j=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;// Give the init function the jQuery prototype for later instantiation
(E.fn.init=function(e,t,n){var r,i;// HANDLE: $(""), $(null), $(undefined), $(false)
if(!e)return this;// Method init() accepts an alternate rootjQuery
// so migrate can support jQuery.sub (gh-2101)
// Handle HTML strings
if(n=n||N,"string"!=typeof e)return e.nodeType?(this[0]=e,this.length=1,this):y(e)?void 0!==n.ready?n.ready(e):// Execute immediately if ready is not present
e(E):E.makeArray(e,this);// Match html or make sure no context is specified for #id
if(!(
// Assume that strings that start and end with <> are HTML and skip the regex check
r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:j.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);// HANDLE: $(DOMElement)
// HANDLE: $(html) -> $(array)
if(r[1]){// HANDLE: $(html, props)
if(t=t instanceof E?t[0]:t,// Option to run scripts is true for back-compat
// Intentionally let the error be thrown if parseHTML is not present
E.merge(this,E.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:_,!0)),D.test(r[1])&&E.isPlainObject(t))for(r in t)
// Properties of context are called as methods if possible
y(this[r])?this[r](t[r]):this.attr(r,t[r]);return this;// HANDLE: $(#id)
}// HANDLE: $(expr, $(...))
return(i=_.getElementById(r[2]))&&(
// Inject the element directly into the jQuery object
this[0]=i,this.length=1),this}).prototype=E.fn,// Initialize central reference
N=E(_);var I=/^(?:parents|prev(?:Until|All))/,
// Methods guaranteed to produce a unique set when starting from a unique set
L={children:!0,contents:!0,next:!0,prev:!0};function O(e,t){for(;(e=e[t])&&1!==e.nodeType;);return e}E.fn.extend({has:function(e){var t=E(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(E.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&E(e);// Positional selectors never match, since there's no _selection_ context
if(!k.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)
// Always skip document fragments
if(n.nodeType<11&&(a?-1<a.index(n):// Don't pass non-elements to Sizzle
1===n.nodeType&&E.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?E.uniqueSort(o):o)},
// Determine the position of an element within the set
index:function(e){
// No argument, return index in parent
return e?// Index in selector
"string"==typeof e?i.call(E(e),this[0]):i.call(this,// If it receives a jQuery object, the first element is used
e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(E.uniqueSort(E.merge(this.get(),E(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),E.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return h(e,"parentNode")},parentsUntil:function(e,t,n){return h(e,"parentNode",n)},next:function(e){return O(e,"nextSibling")},prev:function(e){return O(e,"previousSibling")},nextAll:function(e){return h(e,"nextSibling")},prevAll:function(e){return h(e,"previousSibling")},nextUntil:function(e,t,n){return h(e,"nextSibling",n)},prevUntil:function(e,t,n){return h(e,"previousSibling",n)},siblings:function(e){return T((e.parentNode||{}).firstChild,e)},children:function(e){return T(e.firstChild)},contents:function(e){return A(e,"iframe")?e.contentDocument:(// Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
// Treat the template element as a regular one in browsers that
// don't support it.
A(e,"template")&&(e=e.content||e),E.merge([],e.childNodes))}},function(r,i){E.fn[r]=function(e,t){var n=E.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=E.filter(t,n)),1<this.length&&(
// Remove duplicates
L[r]||E.uniqueSort(n),// Reverse order for parents* and prev-derivatives
I.test(r)&&n.reverse()),this.pushStack(n)}});var q=/[^\x20\t\r\n\f]+/g;// Convert String-formatted options into Object-formatted ones
function H(e){return e}function P(e){throw e}function R(e,t,n,r){var i;try{
// Check for promise aspect first to privilege synchronous behavior
e&&y(i=e.promise)?i.call(e).done(t).fail(n):e&&y(i=e.then)?i.call(e,t,n):
// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
// * false: [ value ].slice( 0 ) => resolve( value )
// * true: [ value ].slice( 1 ) => resolve()
t.apply(void 0,[e].slice(r));// For Promises/A+, convert exceptions into rejections
// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
// Deferred#then to conditionally suppress rejection.
}catch(e){
// Support: Android 4.0 only
// Strict mode functions invoked without .call/.apply get global-object context
n.apply(void 0,[e])}}
/*
       * Create a callback list using the following parameters:
       *
       *	options: an optional list of space-separated options that will change how
       *			the callback list behaves or a more traditional option object
       *
       * By default a callback list will act like an event callback list and can be
       * "fired" multiple times.
       *
       * Possible options:
       *
       *	once:			will ensure the callback list can only be fired once (like a Deferred)
       *
       *	memory:			will keep track of previous values and will call any callback added
       *					after the list has been fired right away with the latest "memorized"
       *					values (like a Deferred)
       *
       *	unique:			will ensure a callback can only be added once (no duplicate in the list)
       *
       *	stopOnFalse:	interrupt callings when a callback returns false
       *
       */
E.Callbacks=function(r){var e,n;
// Convert options from String-formatted to Object-formatted if needed
// (we check in cache first)
r="string"==typeof r?(e=r,n={},E.each(e.match(q)||[],function(e,t){n[t]=!0}),n):E.extend({},r);var// Flag to know if list is currently firing
i,
// Last fire value for non-forgettable lists
t,
// Flag to know if list was already fired
o,
// Flag to prevent firing
a,
// Actual callback list
s=[],
// Queue of execution data for repeatable lists
l=[],
// Index of currently firing callback (modified by add/remove as needed)
u=-1,
// Fire callbacks
c=function(){for(
// Enforce single-firing
a=a||r.once,// Execute callbacks for all pending executions,
// respecting firingIndex overrides and runtime changes
o=i=!0;l.length;u=-1)for(t=l.shift();++u<s.length;)
// Run callback and check for early termination
!1===s[u].apply(t[0],t[1])&&r.stopOnFalse&&(
// Jump to end and forget the data so .add doesn't re-fire
u=s.length,t=!1);// Forget the data if we're done with it
r.memory||(t=!1),i=!1,// Clean up if we're done firing for good
a&&(
// Keep an empty list if we have data for future add calls
s=t?[]:"")},
// Actual Callbacks object
f={
// Add a callback or a collection of callbacks to the list
add:function(){return s&&(
// If we have memory from a past run, we should fire after adding
t&&!i&&(u=s.length-1,l.push(t)),function n(e){E.each(e,function(e,t){y(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&
// Inspect recursively
n(t)})}(arguments),t&&!i&&c()),this},
// Remove a callback from the list
remove:function(){return E.each(arguments,function(e,t){for(var n;-1<(n=E.inArray(t,s,n));)s.splice(n,1),// Handle firing indexes
n<=u&&u--}),this},
// Check if a given callback is in the list.
// If no argument is given, return whether or not list has callbacks attached.
has:function(e){return e?-1<E.inArray(e,s):0<s.length},
// Remove all callbacks from the list
empty:function(){return s&&(s=[]),this},
// Disable .fire and .add
// Abort any current/pending executions
// Clear all callbacks and values
disable:function(){return a=l=[],s=t="",this},disabled:function(){return!s},
// Disable .fire
// Also disable .add unless we have memory (since it would have no effect)
// Abort any pending executions
lock:function(){return a=l=[],t||i||(s=t=""),this},locked:function(){return!!a},
// Call all callbacks with the given context and arguments
fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],l.push(t),i||c()),this},
// Call all the callbacks with the given arguments
fire:function(){return f.fireWith(this,arguments),this},
// To know if the callbacks have already been called at least once
fired:function(){return!!o}};return f},E.extend({Deferred:function(e){var o=[// action, add listener, callbacks,
// ... .then handlers, argument index, [final state]
["notify","progress",E.Callbacks("memory"),E.Callbacks("memory"),2],["resolve","done",E.Callbacks("once memory"),E.Callbacks("once memory"),0,"resolved"],["reject","fail",E.Callbacks("once memory"),E.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},catch:function(e){return a.then(null,e)},
// Keep pipe for back-compat
pipe:function(){var i=arguments;return E.Deferred(function(r){E.each(o,function(e,t){
// Map tuples (progress, done, fail) to arguments (done, fail, progress)
var n=y(i[t[4]])&&i[t[4]];// deferred.progress(function() { bind to newDefer or newDefer.notify })
// deferred.done(function() { bind to newDefer or newDefer.resolve })
// deferred.fail(function() { bind to newDefer or newDefer.reject })
s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&y(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var l=0;function u(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;// Support: Promises/A+ section 2.3.3.3.3
// https://promisesaplus.com/#point-59
// Ignore double-resolution attempts
if(!(i<l)){// Support: Promises/A+ section 2.3.1
// https://promisesaplus.com/#point-48
if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");// Support: Promises/A+ sections 2.3.3.1, 3.5
// https://promisesaplus.com/#point-54
// https://promisesaplus.com/#point-75
// Retrieve `then` only once
t=e&&(// Support: Promises/A+ section 2.3.4
// https://promisesaplus.com/#point-64
// Only check objects and functions for thenability
"object"===Vt(e)||"function"==typeof e)&&e.then,// Handle a returned thenable
y(t)?
// Special processors (notify) just wait for resolution
s?t.call(e,u(l,o,H,s),u(l,o,P,s)):(
// ...and disregard older resolution values
l++,t.call(e,u(l,o,H,s),u(l,o,P,s),u(l,o,H,o.notifyWith))):(
// Only substitute handlers pass on context
// and multiple values (non-spec behavior)
a!==H&&(n=void 0,r=[e]),// Process the value(s)
// Default process is resolve
(s||o.resolveWith)(n,r))}},
// Only normal processors (resolve) catch and reject exceptions
t=s?e:function(){try{e()}catch(e){E.Deferred.exceptionHook&&E.Deferred.exceptionHook(e,t.stackTrace),// Support: Promises/A+ section 2.3.3.3.4.1
// https://promisesaplus.com/#point-61
// Ignore post-resolution exceptions
l<=i+1&&(
// Only substitute handlers pass on context
// and multiple values (non-spec behavior)
a!==P&&(n=void 0,r=[e]),o.rejectWith(n,r))}};// Support: Promises/A+ section 2.3.3.3.1
// https://promisesaplus.com/#point-57
// Re-resolve promises immediately to dodge false rejection from
// subsequent errors
i?t():(
// Call an optional hook to record the stack, in case of exception
// since it's otherwise lost when execution goes async
E.Deferred.getStackHook&&(t.stackTrace=E.Deferred.getStackHook()),C.setTimeout(t))}}return E.Deferred(function(e){
// progress_handlers.add( ... )
o[0][3].add(u(0,e,y(r)?r:H,e.notifyWith)),// fulfilled_handlers.add( ... )
o[1][3].add(u(0,e,y(t)?t:H)),// rejected_handlers.add( ... )
o[2][3].add(u(0,e,y(n)?n:P))}).promise()},
// Get a promise for this deferred
// If obj is provided, the promise aspect is added to the object
promise:function(e){return null!=e?E.extend(e,a):a}},s={};// Add list-specific methods
// All done!
return E.each(o,function(e,t){var n=t[2],r=t[5];// promise.progress = list.add
// promise.done = list.add
// promise.fail = list.add
a[t[1]]=n.add,// Handle state
r&&n.add(function(){
// state = "resolved" (i.e., fulfilled)
// state = "rejected"
i=r},// rejected_callbacks.disable
// fulfilled_callbacks.disable
o[3-e][2].disable,// rejected_handlers.disable
// fulfilled_handlers.disable
o[3-e][3].disable,// progress_callbacks.lock
o[0][2].lock,// progress_handlers.lock
o[0][3].lock),// progress_handlers.fire
// fulfilled_handlers.fire
// rejected_handlers.fire
n.add(t[3].fire),// deferred.notify = function() { deferred.notifyWith(...) }
// deferred.resolve = function() { deferred.resolveWith(...) }
// deferred.reject = function() { deferred.rejectWith(...) }
s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},// deferred.notifyWith = list.fireWith
// deferred.resolveWith = list.fireWith
// deferred.rejectWith = list.fireWith
s[t[0]+"With"]=n.fireWith}),// Make the deferred a promise
a.promise(s),// Call given func if any
e&&e.call(s,s),s},
// Deferred helper
when:function(e){var// count of uncompleted subordinates
n=arguments.length,
// count of unprocessed arguments
t=n,
// subordinate fulfillment data
r=Array(t),i=s.call(arguments),
// the master Deferred
o=E.Deferred(),
// subordinate callback factory
a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};// Single- and empty arguments are adopted like Promise.resolve
if(n<=1&&(R(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||y(i[t]&&i[t].then)))return o.then();// Multiple arguments are aggregated like Promise.all array elements
for(;t--;)R(i[t],a(t),o.reject);return o.promise()}});// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var M=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;E.Deferred.exceptionHook=function(e,t){
// Support: IE 8 - 9 only
// Console exists when dev tools are open, which can happen at any time
C.console&&C.console.warn&&e&&M.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},E.readyException=function(e){C.setTimeout(function(){throw e})};// The deferred used on DOM ready
var W=E.Deferred();// The ready event handler and self cleanup method
function F(){_.removeEventListener("DOMContentLoaded",F),C.removeEventListener("load",F),E.ready()}// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
E.fn.ready=function(e){return W.then(e).catch(function(e){E.readyException(e)}),this},E.extend({
// Is the DOM ready to be used? Set to true once it occurs.
isReady:!1,
// A counter to track how many items to wait for before
// the ready event fires. See #6781
readyWait:1,
// Handle when the DOM is ready
ready:function(e){
// Abort if there are pending holds or we're already ready
(!0===e?--E.readyWait:E.isReady)||(// Remember that the DOM is ready
E.isReady=!0)!==e&&0<--E.readyWait||// If there are functions bound, to execute
W.resolveWith(_,[E])}}),E.ready.then=W.then,"complete"===_.readyState||"loading"!==_.readyState&&!_.documentElement.doScroll?
// Handle it asynchronously to allow scripts the opportunity to delay ready
C.setTimeout(E.ready):(
// Use the handy event callback
_.addEventListener("DOMContentLoaded",F),// A fallback to window.onload, that will always work
C.addEventListener("load",F));// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var B=function e(t,n,r,i,o,a,s){var l=0,u=t.length,c=null==r;// Sets many values
if("object"===w(r))for(l in o=!0,r)e(t,n,l,r[l],!0,a,s);// Sets one value
else if(void 0!==i&&(o=!0,y(i)||(s=!0),c&&(
// Bulk operations run against the entire set
n=s?(n.call(t,i),null):(c=n,function(e,t,n){return c.call(E(e),n)})),n))for(;l<u;l++)n(t[l],r,s?i:i.call(t[l],l,n(t[l],r)));return o?t:// Gets
c?n.call(t):u?n(t[0],r):a},$=/^-ms-/,U=/-([a-z])/g;// Matches dashed string for camelizing
// Used by camelCase as callback to replace()
function Q(e,t){return t.toUpperCase()}// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function z(e){return e.replace($,"ms-").replace(U,Q)}var V=function(e){
// Accepts only:
//  - Node
//    - Node.ELEMENT_NODE
//    - Node.DOCUMENT_NODE
//  - Object
//    - Any
return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function X(){this.expando=E.expando+X.uid++}X.uid=1,X.prototype={cache:function(e){
// Check if the owner object already has a cache
var t=e[this.expando];// If not, create one
return t||(t={},// We can accept data for non-element nodes in modern browsers,
// but we should not, see #8335.
// Always return an empty object.
V(e)&&(
// If it is a node unlikely to be stringify-ed or looped over
// use plain assignment
e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);// Handle: [ owner, key, value ] args
// Always use camelCase key (gh-2257)
if("string"==typeof t)i[z(t)]=n;// Handle: [ owner, { properties } ] args
else
// Copy the properties one-by-one to the cache object
for(r in t)i[z(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):// Always use camelCase key (gh-2257)
e[this.expando]&&e[this.expando][z(t)]},access:function(e,t,n){
// In cases where either:
//
//   1. No key was specified
//   2. A string key was specified, but no value provided
//
// Take the "read" path and allow the get method to determine
// which value to return, respectively either:
//
//   1. The entire cache object
//   2. The data stored at the key
//
return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(// When the key is not a string, or both a key and value
// are specified, set or extend (existing objects) with either:
//
//   1. An object of properties
//   2. A key and value
//
this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(
// Support array or space separated string of keys
// If key is an array of keys...
// We always set camelCase keys, so remove that.
t=Array.isArray(t)?t.map(z):(t=z(t))in r?[t]:t.match(q)||[]).length;for(;n--;)delete r[t[n]]}// Remove the expando if there's no more data
(void 0===t||E.isEmptyObject(r))&&(
// Support: Chrome <=35 - 45
// Webkit & Blink performance suffers when deleting properties
// from DOM nodes, so set to undefined instead
// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!E.isEmptyObject(t)}};var K=new X,Y=new X,G=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,J=/[A-Z]/g;function Z(e,t,n){var r,i;// If nothing was found internally, try to fetch any
// data from the HTML5 data-* attribute
if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(J,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:// Only convert to a number if it doesn't change the string
i===+i+""?+i:G.test(i)?JSON.parse(i):i)}catch(e){}// Make sure we set the data so it isn't changed later
Y.set(e,t,n)}else n=void 0;return n}E.extend({hasData:function(e){return Y.hasData(e)||K.hasData(e)},data:function(e,t,n){return Y.access(e,t,n)},removeData:function(e,t){Y.remove(e,t)},
// TODO: Now that all calls to _data and _removeData have been replaced
// with direct calls to dataPriv methods, these can be deprecated.
_data:function(e,t,n){return K.access(e,t,n)},_removeData:function(e,t){K.remove(e,t)}}),E.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;// Gets all values
if(void 0!==n)// Sets multiple values
return"object"===Vt(n)?this.each(function(){Y.set(this,n)}):B(this,function(e){var t;// The calling jQuery object (element matches) is not empty
// (and therefore has an element appears at this[ 0 ]) and the
// `value` parameter was not undefined. An empty jQuery object
// will result in `undefined` for elem = this[ 0 ] which will
// throw an exception if an attempt to read a data cache is made.
if(o&&void 0===e)return void 0!==(
// Attempt to get data from the cache
// The key will always be camelCased in Data
t=Y.get(o,n))?t:void 0!==(// Attempt to "discover" the data in
// HTML5 custom data-* attrs
t=Z(o,n))?t:// We tried really hard, but the data doesn't exist.
void 0;// Set the data...
this.each(function(){
// We always store the camelCased key
Y.set(this,n,e)})},null,e,1<arguments.length,null,!0);if(this.length&&(i=Y.get(o),1===o.nodeType&&!K.get(o,"hasDataAttrs"))){for(t=a.length;t--;)
// Support: IE 11 only
// The attrs elements can be null (#14894)
a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=z(r.slice(5)),Z(o,r,i[r]));K.set(o,"hasDataAttrs",!0)}return i},removeData:function(e){return this.each(function(){Y.remove(this,e)})}}),E.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=K.get(e,t),// Speed up dequeue by getting out quickly if this is just a lookup
n&&(!r||Array.isArray(n)?r=K.access(e,t,E.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=E.queue(e,t),r=n.length,i=n.shift(),o=E._queueHooks(e,t);// If the fx queue is dequeued, always remove the progress sentinel
"inprogress"===i&&(i=n.shift(),r--),i&&(
// Add a progress sentinel to prevent the fx queue from being
// automatically dequeued
"fx"===t&&n.unshift("inprogress"),// Clear up the last queue stop function
delete o.stop,i.call(e,function(){E.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},
// Not public - generate a queueHooks object, or return the current one
_queueHooks:function(e,t){var n=t+"queueHooks";return K.get(e,n)||K.access(e,n,{empty:E.Callbacks("once memory").add(function(){K.remove(e,[t+"queue",n])})})}}),E.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?E.queue(this[0],t):void 0===n?this:this.each(function(){var e=E.queue(this,t,n);// Ensure a hooks for this queue
E._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&E.dequeue(this,t)})},dequeue:function(e){return this.each(function(){E.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},
// Get a promise resolved when queues of a certain type
// are emptied (fx is the type by default)
promise:function(e,t){var n,r=1,i=E.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";a--;)(n=K.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],re=function(e,t){// Inline style trumps all
return"none"===(
// isHiddenWithinTree might be called from jQuery#filter function;
// in that case, element will be second argument
e=t||e).style.display||""===e.style.display&&// Otherwise, check computed style
// Support: Firefox <=43 - 45
// Disconnected elements can have computed display: none, so first confirm that elem is
// in the document.
E.contains(e.ownerDocument,e)&&"none"===E.css(e,"display")},ie=function(e,t,n,r){var i,o,a={};// Remember the old values, and insert the new ones
for(o in t)a[o]=e.style[o],e.style[o]=t[o];// Revert the old values
for(o in i=n.apply(e,r||[]),t)e.style[o]=a[o];return i};function oe(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return E.css(e,t,"")},l=s(),u=n&&n[3]||(E.cssNumber[t]?"":"px"),
// Starting value computation is required for potential unit mismatches
c=(E.cssNumber[t]||"px"!==u&&+l)&&te.exec(E.css(e,t));if(c&&c[3]!==u){for(
// Support: Firefox <=54
// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
l/=2,// Trust units reported by jQuery.css
u=u||c[3],// Iteratively approximate from a nonzero starting point
c=+l||1;a--;)
// Evaluate and update our best guess (doubling guesses that zero out).
// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
E.style(e,t,c+u),(1-o)*(1-(o=s()/l||.5))<=0&&(a=0),c/=o;c*=2,E.style(e,t,c+u),// Make sure we update the tween properties later on
n=n||[]}return n&&(c=+c||+l||0,// Apply relative offset (+=/-=) if specified
i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=u,r.start=c,r.end=i)),i}var ae={};function se(e,t){// Determine new display value for elements that need to change
for(var n,r,i,o,a,s,l,u=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?(
// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
// check is required in this first loop unless we have a nonempty display value (either
// inline or about-to-be-restored)
"none"===n&&(u[c]=K.get(r,"display")||null,u[c]||(r.style.display="")),""===r.style.display&&re(r)&&(u[c]=(l=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(l=ae[s])||(o=a.body.appendChild(a.createElement(s)),l=E.css(o,"display"),o.parentNode.removeChild(o),"none"===l&&(l="block"),ae[s]=l)))):"none"!==n&&(u[c]="none",// Remember what we're overwriting
K.set(r,"display",n)));// Set the display of the elements in a second loop to avoid constant reflow
for(c=0;c<f;c++)null!=u[c]&&(e[c].style.display=u[c]);return e}E.fn.extend({show:function(){return se(this,!0)},hide:function(){return se(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){re(this)?E(this).show():E(this).hide()})}});var le=/^(?:checkbox|radio)$/i,ue=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,ce=/^$|^module$|\/(?:java|ecma)script/i,fe={
// Support: IE <=9 only
option:[1,"<select multiple='multiple'>","</select>"],
// XHTML parsers do not magically insert elements in the
// same way that tag soup parsers do. So we cannot shorten
// this by omitting <tbody> or other required elements.
thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function de(e,t){
// Support: IE <=9 - 11 only
// Use typeof to avoid zero-argument method invocation on host objects (#15151)
var n;return n=void 0!==e.getElementsByTagName?e.getElementsByTagName(t||"*"):void 0!==e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?E.merge([e],n):n}// Mark scripts as having already been evaluated
function pe(e,t){for(var n=0,r=e.length;n<r;n++)K.set(e[n],"globalEval",!t||K.get(t[n],"globalEval"))}// Support: IE <=9 only
fe.optgroup=fe.option,fe.tbody=fe.tfoot=fe.colgroup=fe.caption=fe.thead,fe.th=fe.td;var he,ge,ve=/<|&#?\w+;/;function me(e,t,n,r,i){for(var o,a,s,l,u,c,f=t.createDocumentFragment(),d=[],p=0,h=e.length;p<h;p++)if((o=e[p])||0===o)
// Add nodes directly
if("object"===w(o))
// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
E.merge(d,o.nodeType?[o]:o);// Convert non-html into a text node
else if(ve.test(o)){for(a=a||f.appendChild(t.createElement("div")),// Deserialize a standard representation
s=(ue.exec(o)||["",""])[1].toLowerCase(),l=fe[s]||fe._default,a.innerHTML=l[1]+E.htmlPrefilter(o)+l[2],// Descend through wrappers to the right content
c=l[0];c--;)a=a.lastChild;// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
E.merge(d,a.childNodes),// Ensure the created nodes are orphaned (#12392)
(// Remember the top-level container
a=f.firstChild).textContent=""}else d.push(t.createTextNode(o));// Convert html into DOM nodes
// Remove wrapper from fragment
for(f.textContent="",p=0;o=d[p++];)
// Skip elements already in the context collection (trac-4087)
if(r&&-1<E.inArray(o,r))i&&i.push(o);else// Capture executables
if(u=E.contains(o.ownerDocument,o),// Append to fragment
a=de(f.appendChild(o),"script"),// Preserve script evaluation history
u&&pe(a),n)for(c=0;o=a[c++];)ce.test(o.type||"")&&n.push(o);return f}he=_.createDocumentFragment().appendChild(_.createElement("div")),// Support: Android 4.0 - 4.3 only
// Check state lost if the name is set (#11217)
// Support: Windows Web Apps (WWA)
// `name` and `type` must use .setAttribute for WWA (#14901)
(ge=_.createElement("input")).setAttribute("type","radio"),ge.setAttribute("checked","checked"),ge.setAttribute("name","t"),he.appendChild(ge),// Support: Android <=4.1 only
// Older WebKit doesn't clone checked state correctly in fragments
m.checkClone=he.cloneNode(!0).cloneNode(!0).lastChild.checked,// Support: IE <=11 only
// Make sure textarea (and checkbox) defaultValue is properly cloned
he.innerHTML="<textarea>x</textarea>",m.noCloneChecked=!!he.cloneNode(!0).lastChild.defaultValue;var ye=_.documentElement,be=/^key/,xe=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,we=/^([^.]*)(?:\.(.+)|)/;function Te(){return!0}function Ce(){return!1}// Support: IE <=9 only
// See #13393 for more info
function _e(){try{return _.activeElement}catch(e){}}function Ee(e,t,n,r,i,o){var a,s;// Types can be a map of types/handlers
if("object"===Vt(t)){for(s in
// ( types-Object, selector, data )
"string"!=typeof n&&(
// ( types-Object, data )
r=r||n,n=void 0),t)Ee(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(
// ( types, fn )
i=n,r=n=void 0):null==i&&("string"==typeof n?(
// ( types, selector, fn )
i=r,r=void 0):(
// ( types, data, fn )
i=r,r=n,n=void 0)),!1===i)i=Ce;else if(!i)return e;return 1===o&&(a=i,// Use same guid so caller can remove using origFn
(i=function(e){
// Can use an empty set, since event contains the info
return E().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=E.guid++)),e.each(function(){E.event.add(this,t,i,r,n)})}
/*
       * Helper functions for managing events -- not part of the public interface.
       * Props to Dean Edwards' addEvent library for many of the ideas.
       */E.event={global:{},add:function(t,e,n,r,i){var o,a,s,l,u,c,f,d,p,h,g,v=K.get(t);// Don't attach events to noData or text/comment nodes (but allow plain objects)
if(v)for(// Caller can pass in an object of custom data in lieu of the handler
n.handler&&(n=(o=n).handler,i=o.selector),// Ensure that invalid selectors throw exceptions at attach time
// Evaluate against documentElement in case elem is a non-element node (e.g., document)
i&&E.find.matchesSelector(ye,i),// Make sure that the handler has a unique ID, used to find/remove it later
n.guid||(n.guid=E.guid++),// Init the element's event structure and main handler, if this is the first
(l=v.events)||(l=v.events={}),(a=v.handle)||(a=v.handle=function(e){
// Discard the second event of a jQuery.event.trigger() and
// when an event is called after a page has unloaded
return void 0!==E&&E.event.triggered!==e.type?E.event.dispatch.apply(t,arguments):void 0}),u=(// Handle multiple events separated by a space
e=(e||"").match(q)||[""]).length;u--;)p=g=(s=we.exec(e[u])||[])[1],h=(s[2]||"").split(".").sort(),// There *must* be a type, no attaching namespace-only handlers
p&&(// If event changes its type, use the special event handlers for the changed type
f=E.event.special[p]||{},// If selector defined, determine special event api type, otherwise given type
p=(i?f.delegateType:f.bindType)||p,// Update special based on newly reset type
f=E.event.special[p]||{},// handleObj is passed to all event handlers
c=E.extend({type:p,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&E.expr.match.needsContext.test(i),namespace:h.join(".")},o),// Init the event handler queue if we're the first
(d=l[p])||((d=l[p]=[]).delegateCount=0,// Only use addEventListener if the special events handler returns false
f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(p,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),// Add to the element's handler list, delegates in front
i?d.splice(d.delegateCount++,0,c):d.push(c),// Keep track of which events have ever been used, for event optimization
E.event.global[p]=!0)},
// Detach an event or set of events from an element
remove:function(e,t,n,r,i){var o,a,s,l,u,c,f,d,p,h,g,v=K.hasData(e)&&K.get(e);if(v&&(l=v.events)){for(u=(// Once for each type.namespace in types; type may be omitted
t=(t||"").match(q)||[""]).length;u--;)// Unbind all events (on this namespace, if provided) for the element
if(p=g=(s=we.exec(t[u])||[])[1],h=(s[2]||"").split(".").sort(),p){for(f=E.event.special[p]||{},d=l[p=(r?f.delegateType:f.bindType)||p]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),// Remove matching events
a=o=d.length;o--;)c=d[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(d.splice(o,1),c.selector&&d.delegateCount--,f.remove&&f.remove.call(e,c));// Remove generic event handler if we removed something and no more handlers exist
// (avoids potential for endless recursion during removal of special event handlers)
a&&!d.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||E.removeEvent(e,p,v.handle),delete l[p])}else for(p in l)E.event.remove(e,p+t[u],n,r,!0);// Remove data and the expando if it's no longer used
E.isEmptyObject(l)&&K.remove(e,"handle events")}},dispatch:function(e){
// Make a writable jQuery.Event from the native event object
var t,n,r,i,o,a,s=E.event.fix(e),l=new Array(arguments.length),u=(K.get(this,"events")||{})[s.type]||[],c=E.event.special[s.type]||{};for(// Use the fix-ed jQuery.Event rather than the (read-only) native event
l[0]=s,t=1;t<arguments.length;t++)l[t]=arguments[t];// Call the preDispatch hook for the mapped type, and let it bail if desired
if(s.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,s)){for(// Determine handlers
a=E.event.handlers.call(this,s,u),// Run delegates first; they may want to stop propagation beneath us
t=0;(i=a[t++])&&!s.isPropagationStopped();)for(s.currentTarget=i.elem,n=0;(o=i.handlers[n++])&&!s.isImmediatePropagationStopped();)
// Triggered event must either 1) have no namespace, or 2) have namespace(s)
// a subset or equal to those in the bound event (both can have no namespace).
s.rnamespace&&!s.rnamespace.test(o.namespace)||(s.handleObj=o,s.data=o.data,void 0!==(r=((E.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,l))&&!1===(s.result=r)&&(s.preventDefault(),s.stopPropagation()));// Call the postDispatch hook for the mapped type
return c.postDispatch&&c.postDispatch.call(this,s),s.result}},handlers:function(e,t){var n,r,i,o,a,s=[],l=t.delegateCount,u=e.target;// Find delegate handlers
if(l&&// Support: IE <=9
// Black-hole SVG <use> instance trees (trac-13180)
u.nodeType&&// Support: Firefox <=42
// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
// Support: IE 11 only
// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
!("click"===e.type&&1<=e.button))for(;u!==this;u=u.parentNode||this)
// Don't check non-elements (#13208)
// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
if(1===u.nodeType&&("click"!==e.type||!0!==u.disabled)){for(o=[],a={},n=0;n<l;n++)void 0===a[// Don't conflict with Object.prototype properties (#13203)
i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<E(i,this).index(u):E.find(i,this,null,[u]).length),a[i]&&o.push(r);o.length&&s.push({elem:u,handlers:o})}// Add the remaining (directly-bound) handlers
return u=this,l<t.length&&s.push({elem:u,handlers:t.slice(l)}),s},addProp:function(t,e){Object.defineProperty(E.Event.prototype,t,{enumerable:!0,configurable:!0,get:y(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[E.expando]?e:new E.Event(e)},special:{load:{
// Prevent triggered image.load events from bubbling to window.load
noBubble:!0},focus:{
// Fire native event if possible so blur/focus sequence is correct
trigger:function(){if(this!==_e()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===_e()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{
// For checkbox, fire native event so checked state will be right
trigger:function(){if("checkbox"===this.type&&this.click&&A(this,"input"))return this.click(),!1},
// For cross-browser consistency, don't fire native .click() on links
_default:function(e){return A(e.target,"a")}},beforeunload:{postDispatch:function(e){
// Support: Firefox 20+
// Firefox doesn't alert if the returnValue field is not set.
void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},E.removeEvent=function(e,t,n){
// This "if" is needed for plain objects
e.removeEventListener&&e.removeEventListener(t,n)},E.Event=function(e,t){
// Allow instantiation without the 'new' keyword
if(!(this instanceof E.Event))return new E.Event(e,t);// Event object
e&&e.type?(this.originalEvent=e,this.type=e.type,// Events bubbling up the document may have been marked as prevented
// by a handler lower down the tree; reflect the correct value.
this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&// Support: Android <=2.3 only
!1===e.returnValue?Te:Ce,// Create target properties
// Support: Safari <=6 - 7 only
// Target should not be a text node (#504, #13143)
this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,// Put explicitly provided properties onto the event object
t&&E.extend(this,t),// Create a timestamp if incoming event doesn't have one
this.timeStamp=e&&e.timeStamp||Date.now(),// Mark it as fixed
this[E.expando]=!0},// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
E.Event.prototype={constructor:E.Event,isDefaultPrevented:Ce,isPropagationStopped:Ce,isImmediatePropagationStopped:Ce,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Te,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Te,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Te,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},// Includes all common event props including KeyEvent and MouseEvent specific props
E.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;// Add which for key events
return null==e.which&&be.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:// Add which for click: 1 === left; 2 === middle; 3 === right
!e.which&&void 0!==t&&xe.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},E.event.addProp),// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
E.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){E.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;// For mouseenter/leave call the handler if related is outside the target.
// NB: No relatedTarget if the mouse left/entered the browser window
return n&&(n===this||E.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),E.fn.extend({on:function(e,t,n,r){return Ee(this,e,t,n,r)},one:function(e,t,n,r){return Ee(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)
// ( event )  dispatched jQuery.Event
return r=e.handleObj,E(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"!==Vt(e))return!1!==t&&"function"!=typeof t||(
// ( types [, fn] )
n=t,t=void 0),!1===n&&(n=Ce),this.each(function(){E.event.remove(this,e,n,t)});
// ( types-object [, selector] )
for(i in e)this.off(i,t,e[i]);return this}});var
/* eslint-disable max-len */
// See https://github.com/eslint/eslint/issues/3229
ke=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
/* eslint-enable */
// Support: IE <=10 - 11, Edge 12 - 13 only
// In IE/Edge using regex groups here causes severe slowdowns.
// See https://connect.microsoft.com/IE/feedback/details/1736512/
Ae=/<script|<style|<link/i,
// checked="checked" or checked
De=/checked\s*(?:[^=]|=\s*.checked.)/i,Se=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;// Prefer a tbody over its parent table for containing new rows
function Ne(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&E(e).children("tbody")[0]||e}// Replace/restore the type attribute of script elements for safe DOM manipulation
function je(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Ie(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Le(e,t){var n,r,i,o,a,s,l,u;if(1===t.nodeType){// 1. Copy private data: events, handlers, etc.
if(K.hasData(e)&&(o=K.access(e),a=K.set(t,o),u=o.events))for(i in delete a.handle,a.events={},u)for(n=0,r=u[i].length;n<r;n++)E.event.add(t,i,u[i][n]);// 2. Copy user data
Y.hasData(e)&&(s=Y.access(e),l=E.extend({},s),Y.set(t,l))}}// Fix IE bugs, see support tests
function Oe(n,r,i,o){
// Flatten any nested arrays
r=g.apply([],r);var e,t,a,s,l,u,c=0,f=n.length,d=f-1,p=r[0],h=y(p);// We can't cloneNode fragments that contain checked, in WebKit
if(h||1<f&&"string"==typeof p&&!m.checkClone&&De.test(p))return n.each(function(e){var t=n.eq(e);h&&(r[0]=p.call(this,e,t.html())),Oe(t,r,i,o)});if(f&&(t=(e=me(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){// Use the original fragment for the last item
// instead of the first because it can end up
// being emptied incorrectly in certain situations (#8070).
for(s=(a=E.map(de(e,"script"),je)).length;c<f;c++)l=e,c!==d&&(l=E.clone(l,!0,!0),// Keep references to cloned scripts for later restoration
s&&
// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
E.merge(a,de(l,"script"))),i.call(n[c],l,c);if(s)// Evaluate executable scripts on first document insertion
for(u=a[a.length-1].ownerDocument,// Reenable scripts
E.map(a,Ie),c=0;c<s;c++)l=a[c],ce.test(l.type||"")&&!K.access(l,"globalEval")&&E.contains(u,l)&&(l.src&&"module"!==(l.type||"").toLowerCase()?
// Optional AJAX dependency, but won't run scripts if not present
E._evalUrl&&E._evalUrl(l.src):x(l.textContent.replace(Se,""),u,l))}return n}function qe(e,t,n){for(var r,i=t?E.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||E.cleanData(de(r)),r.parentNode&&(n&&E.contains(r.ownerDocument,r)&&pe(de(r,"script")),r.parentNode.removeChild(r));return e}E.extend({htmlPrefilter:function(e){return e.replace(ke,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s,l,u,c=e.cloneNode(!0),f=E.contains(e.ownerDocument,e);// Fix IE cloning issues
if(!(m.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||E.isXMLDoc(e)))for(
// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
a=de(c),r=0,i=(o=de(e)).length;r<i;r++)s=o[r],l=a[r],void 0,// Fails to persist the checked state of a cloned checkbox or radio button.
"input"===(u=l.nodeName.toLowerCase())&&le.test(s.type)?l.checked=s.checked:"input"!==u&&"textarea"!==u||(l.defaultValue=s.defaultValue);// Copy the events from the original to the clone
if(t)if(n)for(o=o||de(e),a=a||de(c),r=0,i=o.length;r<i;r++)Le(o[r],a[r]);else Le(e,c);// Preserve script evaluation history
// Return the cloned set
return 0<(a=de(c,"script")).length&&pe(a,!f&&de(e,"script")),c},cleanData:function(e){for(var t,n,r,i=E.event.special,o=0;void 0!==(n=e[o]);o++)if(V(n)){if(t=n[K.expando]){if(t.events)for(r in t.events)i[r]?E.event.remove(n,r):E.removeEvent(n,r,t.handle);// Support: Chrome <=35 - 45+
// Assign undefined instead of using delete, see Data#remove
n[K.expando]=void 0}n[Y.expando]&&(
// Support: Chrome <=35 - 45+
// Assign undefined instead of using delete, see Data#remove
n[Y.expando]=void 0)}}}),E.fn.extend({detach:function(e){return qe(this,e,!0)},remove:function(e){return qe(this,e)},text:function(e){return B(this,function(e){return void 0===e?E.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Oe(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Ne(this,e).appendChild(e)})},prepend:function(){return Oe(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Ne(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Oe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Oe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(
// Prevent memory leaks
E.cleanData(de(e,!1)),// Remove any remaining nodes
e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return E.clone(this,e,t)})},html:function(e){return B(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;// See if we can take a shortcut and just use innerHTML
if("string"==typeof e&&!Ae.test(e)&&!fe[(ue.exec(e)||["",""])[1].toLowerCase()]){e=E.htmlPrefilter(e);try{for(;n<r;n++)// Remove element nodes and prevent memory leaks
1===(t=this[n]||{}).nodeType&&(E.cleanData(de(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];// Make the changes, replacing each non-ignored context element with the new content
return Oe(this,arguments,function(e){var t=this.parentNode;E.inArray(this,n)<0&&(E.cleanData(de(this)),t&&t.replaceChild(e,this));// Force callback invocation
},n)}}),E.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){E.fn[e]=function(e){for(var t,n=[],r=E(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),E(r[o])[a](t),// Support: Android <=4.0 only, PhantomJS 1 only
// .get() because push.apply(_, arraylike) throws on ancient WebKit
l.apply(n,t.get());return this.pushStack(n)}});var He=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),Pe=function(e){
// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
// IE throws on elements created in popups
// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},Re=new RegExp(ne.join("|"),"i");function Me(e,t,n){var r,i,o,a,
// Support: Firefox 51+
// Retrieving style before computed somehow
// fixes an issue with getting wrong values
// on detached elements
s=e.style;// getPropertyValue is needed for:
//   .css('filter') (IE 9 only, #12537)
//   .css('--customProperty) (#3144)
return(n=n||Pe(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||E.contains(e.ownerDocument,e)||(a=E.style(e,t)),// A tribute to the "awesome hack by Dean Edwards"
// Android Browser returns percentage for some values,
// but width seems to be reliably pixels.
// This is against the CSSOM draft spec:
// https://drafts.csswg.org/cssom/#resolved-values
!m.pixelBoxStyles()&&He.test(a)&&Re.test(t)&&(
// Remember the original values
r=s.width,i=s.minWidth,o=s.maxWidth,// Put in the new values to get a computed value out
s.minWidth=s.maxWidth=s.width=a,a=n.width,// Revert the changed values
s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?// Support: IE <=9 - 11 only
// IE returns zIndex value as an integer.
a+"":a}function We(e,t){
// Define the hook, we'll check on the first run if it's really needed.
return{get:function(){if(!e())// Hook needed; redefine it so that the support test is not executed again.
return(this.get=t).apply(this,arguments);
// Hook not needed (or it's not possible to use it due
// to missing dependency), remove it.
delete this.get}}}!function(){
// Executing both pixelPosition & boxSizingReliable tests require only one layout
// so they're executed at the same time to save the second computation.
function e(){
// This is a singleton, we need to execute it only once
if(l){s.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",ye.appendChild(s).appendChild(l);var e=C.getComputedStyle(l);n="1%"!==e.top,// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
a=12===t(e.marginLeft),// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
// Some styles come back with percentage values, even though they shouldn't
l.style.right="60%",o=36===t(e.right),// Support: IE 9 - 11 only
// Detect misreporting of content dimensions for box-sizing:border-box elements
r=36===t(e.width),// Support: IE 9 only
// Detect overflow:scroll screwiness (gh-3699)
l.style.position="absolute",i=36===l.offsetWidth||"absolute",ye.removeChild(s),// Nullify the div so it wouldn't be stored in the memory and
// it will also be a sign that checks already performed
l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s=_.createElement("div"),l=_.createElement("div");// Finish early in limited (non-browser) environments
l.style&&(// Support: IE <=9 - 11 only
// Style of cloned element affects source element cloned (#8908)
l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",m.clearCloneStyle="content-box"===l.style.backgroundClip,E.extend(m,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),a},scrollboxSize:function(){return e(),i}}))}();var// Swappable if display is none or starts with table
// except "table", "table-cell", or "table-caption"
// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
Fe=/^(none|table(?!-c[ea]).+)/,Be=/^--/,$e={position:"absolute",visibility:"hidden",display:"block"},Ue={letterSpacing:"0",fontWeight:"400"},Qe=["Webkit","Moz","ms"],ze=_.createElement("div").style;// Return a css property mapped to a potentially vendor prefixed property
// Return a property mapped along what jQuery.cssProps suggests or to
// a vendor prefixed property.
function Ve(e){var t=E.cssProps[e];return t||(t=E.cssProps[e]=function(e){
// Shortcut for names that are not vendor prefixed
if(e in ze)return e;// Check for vendor prefixed names
for(var t=e[0].toUpperCase()+e.slice(1),n=Qe.length;n--;)if((e=Qe[n]+t)in ze)return e}(e)||e),t}function Xe(e,t,n){
// Any relative (+/-) values have already been
// normalized at this point
var r=te.exec(t);return r?// Guard against undefined "subtract", e.g., when used as in cssHooks
Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ke(e,t,n,r,i,o){var a="width"===t?1:0,s=0,l=0;// Adjustment may not be necessary
if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)
// Both box models exclude margin
"margin"===n&&(l+=E.css(e,n+ne[a],!0,i)),// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
r?(
// For "content", subtract padding
"content"===n&&(l-=E.css(e,"padding"+ne[a],!0,i)),// For "content" or "padding", subtract border
"margin"!==n&&(l-=E.css(e,"border"+ne[a]+"Width",!0,i))):(
// Add padding
l+=E.css(e,"padding"+ne[a],!0,i),// For "border" or "margin", add border
"padding"!==n?l+=E.css(e,"border"+ne[a]+"Width",!0,i):s+=E.css(e,"border"+ne[a]+"Width",!0,i));// Account for positive content-box scroll gutter when requested by providing computedVal
return!r&&0<=o&&(
// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
// Assuming integer scroll gutter, subtract the rest and round down
l+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-l-s-.5))),l}function Ye(e,t,n){
// Start with computed style
var r=Pe(e),i=Me(e,t,r),o="border-box"===E.css(e,"boxSizing",!1,r),a=o;// Support: Firefox <=54
// Return a confounding non-pixel value or feign ignorance, as appropriate.
if(He.test(i)){if(!n)return i;i="auto"}// Check for style in case a browser which returns unreliable values
// for getComputedStyle silently falls back to the reliable elem.style
// Adjust for the element's box model
return a=a&&(m.boxSizingReliable()||i===e.style[t]),// Fall back to offsetWidth/offsetHeight when value is "auto"
// This happens for inline elements with no explicit setting (gh-3571)
// Support: Android <=4.1 - 4.3 only
// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
("auto"===i||!parseFloat(i)&&"inline"===E.css(e,"display",!1,r))&&(i=e["offset"+t[0].toUpperCase()+t.slice(1)],// offsetWidth/offsetHeight provide border-box values
a=!0),(// Normalize "" and auto
i=parseFloat(i)||0)+Ke(e,t,n||(o?"border":"content"),a,r,// Provide the current computed size to request scroll gutter calculation (gh-3589)
i)+"px"}function Ge(e,t,n,r,i){return new Ge.prototype.init(e,t,n,r,i)}E.extend({
// Add in style property hooks for overriding the default
// behavior of getting and setting a style property
cssHooks:{opacity:{get:function(e,t){if(t){
// We should always get a number back from opacity
var n=Me(e,"opacity");return""===n?"1":n}}}},
// Don't automatically add "px" to these possibly-unitless properties
cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},
// Add in properties whose names you wish to fix before
// setting or getting the value
cssProps:{},
// Get and set the style property on a DOM Node
style:function(e,t,n,r){
// Don't set styles on text and comment nodes
if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){// Make sure that we're working with the right name
var i,o,a,s=z(t),l=Be.test(t),u=e.style;// Make sure that we're working with the right name. We don't
// want to query the value if it is a CSS custom property
// since they are user-defined.
// Check if we're setting a value
if(l||(t=Ve(s)),// Gets hook for the prefixed version, then unprefixed version
a=E.cssHooks[t]||E.cssHooks[s],void 0===n)
// If a hook was provided get the non-computed value from there
return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:u[t];// Otherwise just get the value from the style object
// Convert "+=" or "-=" to relative numbers (#7345)
"string"===(o=Vt(n))&&(i=te.exec(n))&&i[1]&&(n=oe(e,t,i),// Fixes bug #9237
o="number"),// Make sure that null and NaN values aren't set (#7116)
null!=n&&n==n&&(// If a number was passed in, add the unit (except for certain CSS properties)
"number"===o&&(n+=i&&i[3]||(E.cssNumber[s]?"":"px")),// background-* props affect original clone's values
m.clearCloneStyle||""!==n||0!==t.indexOf("background")||(u[t]="inherit"),// If a hook was provided, use that value, otherwise just set the specified value
a&&"set"in a&&void 0===(n=a.set(e,n,r))||(l?u.setProperty(t,n):u[t]=n))}},css:function(e,t,n,r){var i,o,a,s=z(t);// Make sure that we're working with the right name. We don't
// want to modify the value if it is a CSS custom property
// since they are user-defined.
// Make numeric if forced or a qualifier was provided and val looks numeric
return Be.test(t)||(t=Ve(s)),// If a hook was provided get the computed value from there
(// Try prefixed name followed by the unprefixed name
a=E.cssHooks[t]||E.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),// Otherwise, if a way to get the computed value exists, use that
void 0===i&&(i=Me(e,t,r)),// Convert "normal" to computed value
"normal"===i&&t in Ue&&(i=Ue[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),E.each(["height","width"],function(e,s){E.cssHooks[s]={get:function(e,t,n){if(t)
// Certain elements can have dimension info if we invisibly show them
// but it must have a current display style that would benefit
return!Fe.test(E.css(e,"display"))||// Support: Safari 8+
// Table columns in Safari have non-zero offsetWidth & zero
// getBoundingClientRect().width unless display is changed.
// Support: IE <=11 only
// Running getBoundingClientRect on a disconnected node
// in IE throws an error.
e.getClientRects().length&&e.getBoundingClientRect().width?Ye(e,s,n):ie(e,$e,function(){return Ye(e,s,n)})},set:function(e,t,n){var r,i=Pe(e),o="border-box"===E.css(e,"boxSizing",!1,i),a=n&&Ke(e,s,n,o,i);// Account for unreliable border-box dimensions by comparing offset* to computed and
// faking a content-box to get border and padding (gh-3699)
return o&&m.scrollboxSize()===i.position&&(a-=Math.ceil(e["offset"+s[0].toUpperCase()+s.slice(1)]-parseFloat(i[s])-Ke(e,s,"border",!1,i)-.5)),// Convert to pixels if value adjustment is needed
a&&(r=te.exec(t))&&"px"!==(r[3]||"px")&&(e.style[s]=t,t=E.css(e,s)),Xe(0,t,a)}}}),E.cssHooks.marginLeft=We(m.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Me(e,"marginLeft"))||e.getBoundingClientRect().left-ie(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),// These hooks are used by animate to expand properties
E.each({margin:"",padding:"",border:"Width"},function(i,o){E.cssHooks[i+o]={expand:function(e){for(var t=0,n={},
// Assumes a single number if not a string
r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+ne[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(E.cssHooks[i+o].set=Xe)}),E.fn.extend({css:function(e,t){return B(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Pe(e),i=t.length;a<i;a++)o[t[a]]=E.css(e,t[a],!1,r);return o}return void 0!==n?E.style(e,t,n):E.css(e,t)},e,t,1<arguments.length)}}),((E.Tween=Ge).prototype={constructor:Ge,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||E.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(E.cssNumber[n]?"":"px")},cur:function(){var e=Ge.propHooks[this.prop];return e&&e.get?e.get(this):Ge.propHooks._default.get(this)},run:function(e){var t,n=Ge.propHooks[this.prop];return this.options.duration?this.pos=t=E.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Ge.propHooks._default.set(this),this}}).init.prototype=Ge.prototype,// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
(Ge.propHooks={_default:{get:function(e){var t;// Use a property on the element directly when it is not a DOM element,
// or when there is no matching style property that exists.
return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(// Passing an empty string as a 3rd parameter to .css will automatically
// attempt a parseFloat and fallback to a string if the parse fails.
// Simple values such as "10px" are parsed to Float;
// complex values such as "rotate(1rad)" are returned as-is.
t=E.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){
// Use step hook for back compat.
// Use cssHook if its there.
// Use .style if available and use plain properties where available.
E.fx.step[e.prop]?E.fx.step[e.prop](e):1!==e.elem.nodeType||null==e.elem.style[E.cssProps[e.prop]]&&!E.cssHooks[e.prop]?e.elem[e.prop]=e.now:E.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=Ge.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},E.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},E.fx=Ge.prototype.init,// Back compat <1.8 extension point
E.fx.step={};var Je,Ze,et,tt,nt=/^(?:toggle|show|hide)$/,rt=/queueHooks$/;function it(){Ze&&(!1===_.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(it):C.setTimeout(it,E.fx.interval),E.fx.tick())}// Animations created synchronously will run synchronously
function ot(){return C.setTimeout(function(){Je=void 0}),Je=Date.now()}// Generate parameters to create a standard animation
function at(e,t){var n,r=0,i={height:e};// If we include width, step value is 1 to do all cssExpand values,
// otherwise step value is 2 to skip over Left and Right
for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=ne[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function st(e,t,n){for(var r,i=(lt.tweeners[t]||[]).concat(lt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))
// We're done with this property
return r}function lt(o,e,t){var n,a,r=0,i=lt.prefilters.length,s=E.Deferred().always(function(){
// Don't match elem in the :animated selector
delete l.elem}),l=function(){if(a)return!1;for(var e=Je||ot(),t=Math.max(0,u.startTime+u.duration-e),n=1-(t/u.duration||0),r=0,i=u.tweens.length;r<i;r++)u.tweens[r].run(n);// If there's more to do, yield
return s.notifyWith(o,[u,n,t]),n<1&&i?t:(// If this was an empty animation, synthesize a final progress notification
i||s.notifyWith(o,[u,1,0]),// Resolve the animation and report its conclusion
s.resolveWith(o,[u]),!1)},u=s.promise({elem:o,props:E.extend({},e),opts:E.extend(!0,{specialEasing:{},easing:E.easing._default},t),originalProperties:e,originalOptions:t,startTime:Je||ot(),duration:t.duration,tweens:[],createTween:function(e,t){var n=E.Tween(o,u.opts,e,t,u.opts.specialEasing[e]||u.opts.easing);return u.tweens.push(n),n},stop:function(e){var t=0,
// If we are going to the end, we want to run all the tweens
// otherwise we skip this part
n=e?u.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)u.tweens[t].run(1);// Resolve when we played the last frame; otherwise, reject
return e?(s.notifyWith(o,[u,1,0]),s.resolveWith(o,[u,e])):s.rejectWith(o,[u,e]),this}}),c=u.props;for(!function(e,t){var n,r,i,o,a;// camelCase, specialEasing and expand cssHook pass
for(n in e)if(i=t[r=z(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=E.cssHooks[r])&&"expand"in a)// Not quite $.extend, this won't overwrite existing keys.
// Reusing 'index' because we have the correct "name"
for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,u.opts.specialEasing);r<i;r++)if(n=lt.prefilters[r].call(u,o,c,u.opts))return y(n.stop)&&(E._queueHooks(u.elem,u.opts.queue).stop=n.stop.bind(n)),n;return E.map(c,st,u),y(u.opts.start)&&u.opts.start.call(o,u),// Attach callbacks from options
u.progress(u.opts.progress).done(u.opts.done,u.opts.complete).fail(u.opts.fail).always(u.opts.always),E.fx.timer(E.extend(l,{elem:o,anim:u,queue:u.opts.queue})),u}E.Animation=E.extend(lt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return oe(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){for(var n,r=0,i=(e=y(e)?(t=e,["*"]):e.match(q)).length;r<i;r++)n=e[r],lt.tweeners[n]=lt.tweeners[n]||[],lt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,l,u,c,f="width"in t||"height"in t,d=this,p={},h=e.style,g=e.nodeType&&re(e),v=K.get(e,"fxshow");// Queue-skipping animations hijack the fx hooks
// Detect show/hide animations
for(r in n.queue||(null==(a=E._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,d.always(function(){
// Ensure the complete handler is called before this completes
d.always(function(){a.unqueued--,E.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],nt.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){
// Pretend to be hidden if this is a "show" and
// there is still data from a stopped show/hide
if("show"!==i||!v||void 0===v[r])continue;g=!0}p[r]=v&&v[r]||E.style(e,r)}// Bail out if this is a no-op like .hide().hide()
if((l=!E.isEmptyObject(t))||!E.isEmptyObject(p))for(r in// Restrict "overflow" and "display" styles during box animations
f&&1===e.nodeType&&(
// Support: IE <=9 - 11, Edge 12 - 15
// Record all 3 overflow attributes because IE does not infer the shorthand
// from identically-valued overflowX and overflowY and Edge just mirrors
// the overflowX value there.
n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(// Identify a display type, preferring old show/hide data over the CSS cascade
u=v&&v.display)&&(u=K.get(e,"display")),"none"===(c=E.css(e,"display"))&&(u?c=u:(
// Get nonempty value(s) by temporarily forcing visibility
se([e],!0),u=e.style.display||u,c=E.css(e,"display"),se([e]))),// Animate inline elements as inline-block
("inline"===c||"inline-block"===c&&null!=u)&&"none"===E.css(e,"float")&&(
// Restore the original display value at the end of pure show/hide animations
l||(d.done(function(){h.display=u}),null==u&&(c=h.display,u="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",d.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),// Implement show/hide animations
l=!1,p)
// General show/hide setup for this element animation
l||(v?"hidden"in v&&(g=v.hidden):v=K.access(e,"fxshow",{display:u}),// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
o&&(v.hidden=!g),// Show elements before animating them
g&&se([e],!0)
/* eslint-disable no-loop-func */,d.done(function(){for(r in
/* eslint-enable no-loop-func */
// The final step of a "hide" animation is actually hiding the element
g||se([e]),K.remove(e,"fxshow"),p)E.style(e,r,p[r])})),// Per-property setup
l=st(g?v[r]:0,r,d),r in v||(v[r]=l.start,g&&(l.end=l.start,l.start=0))}],prefilter:function(e,t){t?lt.prefilters.unshift(e):lt.prefilters.push(e)}}),E.speed=function(e,t,n){var r=e&&"object"===Vt(e)?E.extend({},e):{complete:n||!n&&t||y(e)&&e,duration:e,easing:n&&t||t&&!y(t)&&t};// Go to the end state if fx are off
return E.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in E.fx.speeds?r.duration=E.fx.speeds[r.duration]:r.duration=E.fx.speeds._default),// Normalize opt.queue - true/undefined/null -> "fx"
null!=r.queue&&!0!==r.queue||(r.queue="fx"),// Queueing
r.old=r.complete,r.complete=function(){y(r.old)&&r.old.call(this),r.queue&&E.dequeue(this,r.queue)},r},E.fn.extend({fadeTo:function(e,t,n,r){
// Show any hidden elements after setting opacity to 0
return this.filter(re).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=E.isEmptyObject(t),o=E.speed(e,n,r),a=function(){
// Operate on a copy of prop so per-property easing won't be lost
var e=lt(this,E.extend({},t),o);// Empty animations, or finishing resolves immediately
(i||K.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&!1!==i&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=E.timers,r=K.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&rt.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));// Start the next in the queue if the last step wasn't forced.
// Timers currently will call their complete callbacks, which
// will dequeue but only if they were gotoEnd.
!e&&o||E.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=K.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=E.timers,o=n?n.length:0;// Enable finishing flag on private data
// Look for any active animations, and finish them
for(t.finish=!0,// Empty the queue first
E.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));// Look for any animations in the old queue and finish them
for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);// Turn off finishing flag
delete t.finish})}}),E.each(["toggle","show","hide"],function(e,r){var i=E.fn[r];E.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(at(r,!0),e,t,n)}}),// Generate shortcuts for custom animations
E.each({slideDown:at("show"),slideUp:at("hide"),slideToggle:at("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){E.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),E.timers=[],E.fx.tick=function(){var e,t=0,n=E.timers;for(Je=Date.now();t<n.length;t++)// Run the timer and safely remove it when done (allowing for external removal)
(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||E.fx.stop(),Je=void 0},E.fx.timer=function(e){E.timers.push(e),E.fx.start()},E.fx.interval=13,E.fx.start=function(){Ze||(Ze=!0,it())},E.fx.stop=function(){Ze=null},E.fx.speeds={slow:600,fast:200,
// Default speed
_default:400},// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
E.fn.delay=function(r,e){return r=E.fx&&E.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},et=_.createElement("input"),tt=_.createElement("select").appendChild(_.createElement("option")),et.type="checkbox",// Support: Android <=4.3 only
// Default value for a checkbox should be "on"
m.checkOn=""!==et.value,// Support: IE <=11 only
// Must access selectedIndex to make default options select
m.optSelected=tt.selected,(// Support: IE <=11 only
// An input loses its value after becoming a radio
et=_.createElement("input")).value="t",et.type="radio",m.radioValue="t"===et.value;var ut,ct=E.expr.attrHandle;E.fn.extend({attr:function(e,t){return B(this,E.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){E.removeAttr(this,e)})}}),E.extend({attr:function(e,t,n){var r,i,o=e.nodeType;// Don't get/set attributes on text, comment and attribute nodes
if(3!==o&&8!==o&&2!==o)// Fallback to prop when attributes are not supported
return void 0===e.getAttribute?E.prop(e,t,n):(// Attribute hooks are determined by the lowercase version
// Grab necessary hook if one is defined
1===o&&E.isXMLDoc(e)||(i=E.attrHooks[t.toLowerCase()]||(E.expr.match.bool.test(t)?ut:void 0)),void 0!==n?null===n?void E.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=E.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!m.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,
// Attribute names can contain non-HTML whitespace characters
// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
i=t&&t.match(q);if(i&&1===e.nodeType)for(;n=i[r++];)e.removeAttribute(n)}}),// Hooks for boolean attributes
ut={set:function(e,t,n){return!1===t?
// Remove boolean attributes when set to false
E.removeAttr(e,n):e.setAttribute(n,n),n}},E.each(E.expr.match.bool.source.match(/\w+/g),function(e,t){var a=ct[t]||E.find.attr;ct[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(
// Avoid an infinite loop by temporarily removing this function from the getter
i=ct[o],ct[o]=r,r=null!=a(e,t,n)?o:null,ct[o]=i),r}});var ft=/^(?:input|select|textarea|button)$/i,dt=/^(?:a|area)$/i;// Strip and collapse whitespace according to HTML spec
// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
function pt(e){return(e.match(q)||[]).join(" ")}function ht(e){return e.getAttribute&&e.getAttribute("class")||""}function gt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(q)||[]}E.fn.extend({prop:function(e,t){return B(this,E.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[E.propFix[e]||e]})}}),E.extend({prop:function(e,t,n){var r,i,o=e.nodeType;// Don't get/set properties on text, comment and attribute nodes
if(3!==o&&8!==o&&2!==o)return 1===o&&E.isXMLDoc(e)||(
// Fix name and attach hooks
t=E.propFix[t]||t,i=E.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){
// Support: IE <=9 - 11 only
// elem.tabIndex doesn't always return the
// correct value when it hasn't been explicitly set
// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
// Use proper attribute retrieval(#12072)
var t=E.find.attr(e,"tabindex");return t?parseInt(t,10):ft.test(e.nodeName)||dt.test(e.nodeName)&&e.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
m.optSelected||(E.propHooks.selected={get:function(e){
/* eslint no-unused-expressions: "off" */
var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){
/* eslint no-unused-expressions: "off" */
var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),E.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){E.propFix[this.toLowerCase()]=this}),E.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,l=0;if(y(t))return this.each(function(e){E(this).addClass(t.call(this,e,ht(this)))});if((e=gt(t)).length)for(;n=this[l++];)if(i=ht(n),r=1===n.nodeType&&" "+pt(i)+" "){for(a=0;o=e[a++];)r.indexOf(" "+o+" ")<0&&(r+=o+" ");// Only assign if different to avoid unneeded rendering.
i!==(s=pt(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,l=0;if(y(t))return this.each(function(e){E(this).removeClass(t.call(this,e,ht(this)))});if(!arguments.length)return this.attr("class","");if((e=gt(t)).length)for(;n=this[l++];)if(i=ht(n),// This expression is here for better compressibility (see addClass)
r=1===n.nodeType&&" "+pt(i)+" "){for(a=0;o=e[a++];)
// Remove *all* instances
for(;-1<r.indexOf(" "+o+" ");)r=r.replace(" "+o+" "," ");// Only assign if different to avoid unneeded rendering.
i!==(s=pt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=Vt(i),a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):y(i)?this.each(function(e){E(this).toggleClass(i.call(this,e,ht(this),t),t)}):this.each(function(){var e,t,n,r;if(a)for(
// Toggle individual class names
t=0,n=E(this),r=gt(i);e=r[t++];)
// Check each className given, space separated list
n.hasClass(e)?n.removeClass(e):n.addClass(e);// Toggle whole class name
else void 0!==i&&"boolean"!==o||((e=ht(this))&&
// Store className if set
K.set(this,"__className__",e),// If the element has a class name or if we're passed `false`,
// then remove the whole classname (if there was one, the above saved it).
// Otherwise bring back whatever was previously saved (if anything),
// falling back to the empty string if nothing was stored.
this.setAttribute&&this.setAttribute("class",e||!1===i?"":K.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;for(t=" "+e+" ";n=this[r++];)if(1===n.nodeType&&-1<(" "+pt(ht(n))+" ").indexOf(t))return!0;return!1}});var vt=/\r/g;E.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=y(n),this.each(function(e){var t;1===this.nodeType&&(// Treat null/undefined as ""; convert numbers to string
null==(t=i?n.call(this,e,E(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=E.map(t,function(e){return null==e?"":e+""})),// If set returns undefined, fall back to normal setting
(r=E.valHooks[this.type]||E.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=E.valHooks[t.type]||E.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:// Handle most common string cases
"string"==typeof(e=t.value)?e.replace(vt,""):null==e?"":e:void 0}}),E.extend({valHooks:{option:{get:function(e){var t=E.find.attr(e,"value");return null!=t?t:// Support: IE <=10 - 11 only
// option.text throws exceptions (#14686, #14858)
// Strip and collapse whitespace
// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
pt(E.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],l=a?o+1:i.length;// Loop through all the selected options
for(r=o<0?l:a?o:0;r<l;r++)// Support: IE <=9 only
// IE8-9 doesn't update selected after form reset (#2551)
if(((n=i[r]).selected||r===o)&&// Don't return options that are disabled or in a disabled optgroup
!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){// We don't need an array for one selects
if(
// Get the specific value for the option
t=E(n).val(),a)return t;// Multi-Selects return an array
s.push(t)}return s},set:function(e,t){for(var n,r,i=e.options,o=E.makeArray(t),a=i.length;a--;)
/* eslint-disable no-cond-assign */
((r=i[a]).selected=-1<E.inArray(E.valHooks.option.get(r),o))&&(n=!0)
/* eslint-enable no-cond-assign */;// Force browsers to behave consistently when non-matching value is set
return n||(e.selectedIndex=-1),o}}}}),// Radios and checkboxes getter/setter
E.each(["radio","checkbox"],function(){E.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<E.inArray(E(e).val(),t)}},m.checkOn||(E.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),// Return jQuery for attributes-only inclusion
m.focusin="onfocusin"in C;var mt=/^(?:focusinfocus|focusoutblur)$/,yt=function(e){e.stopPropagation()};E.extend(E.event,{trigger:function(e,t,n,r){var i,o,a,s,l,u,c,f,d=[n||_],p=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];// Don't do events on text and comment nodes
if(o=f=a=n=n||_,3!==n.nodeType&&8!==n.nodeType&&!mt.test(p+E.event.triggered)&&(-1<p.indexOf(".")&&(
// Namespaced trigger; create a regexp to match event type in handle()
p=(h=p.split(".")).shift(),h.sort()),l=p.indexOf(":")<0&&"on"+p,// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
(// Caller can pass in a jQuery.Event object, Object, or just an event type string
e=e[E.expando]?e:new E.Event(p,"object"===Vt(e)&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,// Clean up the event in case it is being reused
e.result=void 0,e.target||(e.target=n),// Clone any incoming data and prepend the event, creating the handler arg list
t=null==t?[e]:E.makeArray(t,[e]),// Allow special events to draw outside the lines
c=E.event.special[p]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){// Determine event propagation path in advance, per W3C events spec (#9951)
// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
if(!r&&!c.noBubble&&!b(n)){for(s=c.delegateType||p,mt.test(s+p)||(o=o.parentNode);o;o=o.parentNode)d.push(o),a=o;// Only add window if we got to document (e.g., not plain obj or detached DOM)
a===(n.ownerDocument||_)&&d.push(a.defaultView||a.parentWindow||C)}// Fire handlers on the event path
for(i=0;(o=d[i++])&&!e.isPropagationStopped();)f=o,e.type=1<i?s:c.bindType||p,(// jQuery handler
u=(K.get(o,"events")||{})[e.type]&&K.get(o,"handle"))&&u.apply(o,t),(// Native handler
u=l&&o[l])&&u.apply&&V(o)&&(e.result=u.apply(o,t),!1===e.result&&e.preventDefault());return e.type=p,// If nobody prevented the default action, do it now
r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(d.pop(),t)||!V(n)||
// Call a native DOM method on the target with the same name as the event.
// Don't do default actions on window, that's where global variables be (#6170)
l&&y(n[p])&&!b(n)&&(
// Don't re-trigger an onFOO event when we call its FOO() method
(a=n[l])&&(n[l]=null),// Prevent re-triggering of the same event, since we already bubbled it above
E.event.triggered=p,e.isPropagationStopped()&&f.addEventListener(p,yt),n[p](),e.isPropagationStopped()&&f.removeEventListener(p,yt),E.event.triggered=void 0,a&&(n[l]=a)),e.result}// focus/blur morphs to focusin/out; ensure we're not firing them right now
},
// Piggyback on a donor event to simulate a different one
// Used only for `focus(in | out)` events
simulate:function(e,t,n){var r=E.extend(new E.Event,n,{type:e,isSimulated:!0});E.event.trigger(r,null,t)}}),E.fn.extend({trigger:function(e,t){return this.each(function(){E.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return E.event.trigger(e,t,n,!0)}}),// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
m.focusin||E.each({focus:"focusin",blur:"focusout"},function(n,r){
// Attach a single capturing handler on the document while someone wants focusin/focusout
var i=function(e){E.event.simulate(r,e.target,E.event.fix(e))};E.event.special[r]={setup:function(){var e=this.ownerDocument||this,t=K.access(e,r);t||e.addEventListener(n,i,!0),K.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this,t=K.access(e,r)-1;t?K.access(e,r,t):(e.removeEventListener(n,i,!0),K.remove(e,r))}}});var bt=C.location,xt=Date.now(),wt=/\?/;// Cross-browser xml parsing
E.parseXML=function(e){var t;if(!e||"string"!=typeof e)return null;// Support: IE 9 - 11 only
// IE throws on parseFromString with invalid input.
try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){t=void 0}return t&&!t.getElementsByTagName("parsererror").length||E.error("Invalid XML: "+e),t};var Tt=/\[\]$/,Ct=/\r?\n/g,_t=/^(?:submit|button|image|reset|file)$/i,Et=/^(?:input|select|textarea|keygen)/i;function kt(n,e,r,i){var t;if(Array.isArray(e))
// Serialize array item.
E.each(e,function(e,t){r||Tt.test(n)?
// Treat each array item as a scalar.
i(n,t):
// Item is non-scalar (array or object), encode its numeric index.
kt(n+"["+("object"===Vt(t)&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))
// Serialize scalar item.
i(n,e);else
// Serialize object item.
for(t in e)kt(n+"["+t+"]",e[t],r,i)}// Serialize an array of form elements or a set of
// key/values into a query string
E.param=function(e,t){var n,r=[],i=function(e,t){
// If value is a function, invoke it and use its return value
var n=y(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};// If an array was passed in, assume that it is an array of form elements.
if(Array.isArray(e)||e.jquery&&!E.isPlainObject(e))
// Serialize the form elements
E.each(e,function(){i(this.name,this.value)});else
// If traditional, encode the "old" way (the way 1.3.2 or older
// did it), otherwise encode params recursively.
for(n in e)kt(n,e[n],t,i);// Return the resulting serialization
return r.join("&")},E.fn.extend({serialize:function(){return E.param(this.serializeArray())},serializeArray:function(){return this.map(function(){
// Can add propHook for "elements" to filter or add form elements
var e=E.prop(this,"elements");return e?E.makeArray(e):this}).filter(function(){var e=this.type;// Use .is( ":disabled" ) so that fieldset[disabled] works
return this.name&&!E(this).is(":disabled")&&Et.test(this.nodeName)&&!_t.test(e)&&(this.checked||!le.test(e))}).map(function(e,t){var n=E(this).val();return null==n?null:Array.isArray(n)?E.map(n,function(e){return{name:t.name,value:e.replace(Ct,"\r\n")}}):{name:t.name,value:n.replace(Ct,"\r\n")}}).get()}});var At=/%20/g,Dt=/#.*$/,St=/([?&])_=[^&]*/,Nt=/^(.*?):[ \t]*([^\r\n]*)$/gm,jt=/^(?:GET|HEAD)$/,It=/^\/\//,
/* Prefilters
       * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
       * 2) These are called:
       *    - BEFORE asking for a transport
       *    - AFTER param serialization (s.data is a string if s.processData is true)
       * 3) key is the dataType
       * 4) the catchall symbol "*" can be used
       * 5) execution will start with transport dataType and THEN continue down to "*" if needed
       */
Lt={},
/* Transports bindings
       * 1) key is the dataType
       * 2) the catchall symbol "*" can be used
       * 3) selection will start with transport dataType and THEN go to "*" if needed
       */
Ot={},
// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
qt="*/".concat("*"),
// Anchor tag for parsing the document origin
Ht=_.createElement("a");// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function Pt(o){
// dataTypeExpression is optional and defaults to "*"
return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(q)||[];if(y(t))
// For each dataType in the dataTypeExpression
for(;n=i[r++];)
// Prepend if requested
"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}// Base inspection function for prefilters and transports
function Rt(t,i,o,a){var s={},l=t===Ot;function u(e){var r;return s[e]=!0,E.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||l||s[n]?l?!(r=n):void 0:(i.dataTypes.unshift(n),u(n),!1)}),r}return u(i.dataTypes[0])||!s["*"]&&u("*")}// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function Mt(e,t){var n,r,i=E.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&E.extend(!0,e,r),e}
/* Handles responses to an ajax request:
       * - finds the right dataType (mediates between content-type and expected dataType)
       * - returns the corresponding response
       */Ht.href=bt.href,E.extend({
// Counter for holding the number of active queries
active:0,
// Last-Modified header cache for next request
lastModified:{},etag:{},ajaxSettings:{url:bt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(bt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",
/*
          timeout: 0,
          data: null,
          dataType: null,
          username: null,
          password: null,
          cache: null,
          throws: false,
          traditional: false,
          headers: {},
          */
accepts:{"*":qt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},
// Data converters
// Keys separate source (or catchall "*") and destination types with a single space
converters:{
// Convert anything to text
"* text":String,
// Text to html (true = no transformation)
"text html":!0,
// Evaluate text as a json expression
"text json":JSON.parse,
// Parse text as xml
"text xml":E.parseXML},
// For options that shouldn't be deep extended:
// you can add your own custom options here if
// and when you create one that shouldn't be
// deep extended (see ajaxExtend)
flatOptions:{url:!0,context:!0}},
// Creates a full fledged settings object into target
// with both ajaxSettings and settings fields.
// If target is omitted, writes into ajaxSettings.
ajaxSetup:function(e,t){return t?// Building a settings object
Mt(Mt(e,E.ajaxSettings),t):// Extending ajaxSettings
Mt(E.ajaxSettings,e)},ajaxPrefilter:Pt(Lt),ajaxTransport:Pt(Ot),
// Main method
ajax:function(e,t){
// If url is an object, simulate pre-1.5 signature
"object"===Vt(e)&&(t=e,e=void 0),// Force options to be an object
t=t||{};var c,
// URL without anti-cache param
f,
// Response headers
d,n,
// timeout handle
p,
// Url cleanup var
r,
// Request state (becomes false upon send and true upon completion)
h,
// To know if global events are to be dispatched
g,
// Loop variable
i,
// uncached part of the url
o,
// Create the final options object
v=E.ajaxSetup({},t),
// Callbacks context
m=v.context||v,
// Context for global events is callbackContext if it is a DOM node or jQuery collection
y=v.context&&(m.nodeType||m.jquery)?E(m):E.event,
// Deferreds
b=E.Deferred(),x=E.Callbacks("once memory"),
// Status-dependent callbacks
w=v.statusCode||{},
// Headers (they are sent all at once)
a={},s={},
// Default abort message
l="canceled",
// Fake xhr
T={readyState:0,
// Builds headers hashtable if needed
getResponseHeader:function(e){var t;if(h){if(!n)for(n={};t=Nt.exec(d);)n[t[1].toLowerCase()]=t[2];t=n[e.toLowerCase()]}return null==t?null:t},
// Raw string
getAllResponseHeaders:function(){return h?d:null},
// Caches the header
setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},
// Overrides response content-type header
overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},
// Status-dependent callbacks
statusCode:function(e){var t;if(e)if(h)
// Execute the appropriate callbacks
T.always(e[T.status]);else
// Lazy-add the new callbacks in a way that preserves old ones
for(t in e)w[t]=[w[t],e[t]];return this},
// Cancel the request
abort:function(e){var t=e||l;return c&&c.abort(t),u(0,t),this}};// Attach deferreds
// A cross-domain request is in order when the origin doesn't match the current origin.
if(b.promise(T),// Add protocol if not provided (prefilters might expect it)
// Handle falsy url in the settings object (#10093: consistency with old signature)
// We also use the url parameter if available
v.url=((e||v.url||bt.href)+"").replace(It,bt.protocol+"//"),// Alias method option to type as per ticket #12004
v.type=t.method||t.type||v.method||v.type,// Extract dataTypes list
v.dataTypes=(v.dataType||"*").toLowerCase().match(q)||[""],null==v.crossDomain){r=_.createElement("a");// Support: IE <=8 - 11, Edge 12 - 15
// IE throws exception on accessing the href property if url is malformed,
// e.g. http://example.com:80x/
try{r.href=v.url,// Support: IE <=8 - 11 only
// Anchor's host property isn't correctly set when s.url is relative
r.href=r.href,v.crossDomain=Ht.protocol+"//"+Ht.host!=r.protocol+"//"+r.host}catch(e){
// If there is an error parsing the URL, assume it is crossDomain,
// it can be rejected by the transport if it is invalid
v.crossDomain=!0}}// Convert data if not already a string
// If request was aborted inside a prefilter, stop there
if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=E.param(v.data,v.traditional)),// Apply prefilters
Rt(Lt,v,t,T),h)return T;// We can fire global events as of now if asked to
// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
// Check for headers option
for(i in// Watch for a new set of requests
(g=E.event&&v.global)&&0==E.active++&&E.event.trigger("ajaxStart"),// Uppercase the type
v.type=v.type.toUpperCase(),// Determine if request has content
v.hasContent=!jt.test(v.type),// Save the URL in case we're toying with the If-Modified-Since
// and/or If-None-Match header later on
// Remove hash to simplify url manipulation
f=v.url.replace(Dt,""),// More options handling for requests with no content
v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(At,"+")):(
// Remember the hash so we can put it back
o=v.url.slice(f.length),// If data is available and should be processed, append data to url
v.data&&(v.processData||"string"==typeof v.data)&&(f+=(wt.test(f)?"&":"?")+v.data,// #9682: remove data so that it's not used in an eventual retry
delete v.data),// Add or update anti-cache param if needed
!1===v.cache&&(f=f.replace(St,"$1"),o=(wt.test(f)?"&":"?")+"_="+xt+++o),// Put hash and anti-cache on the URL that will be requested (gh-1732)
v.url=f+o),// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
v.ifModified&&(E.lastModified[f]&&T.setRequestHeader("If-Modified-Since",E.lastModified[f]),E.etag[f]&&T.setRequestHeader("If-None-Match",E.etag[f])),// Set the correct header, if data is being sent
(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),// Set the Accepts header for the server, depending on the dataType
T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+qt+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);// Allow custom headers/mimetypes and early abort
if(v.beforeSend&&(!1===v.beforeSend.call(m,T,v)||h))
// Abort if not done already and return
return T.abort();// Aborting is no longer a cancellation
// If no transport, we auto-abort
if(l="abort",// Install callbacks on deferreds
x.add(v.complete),T.done(v.success),T.fail(v.error),// Get transport
c=Rt(Ot,v,t,T)){// If request was aborted inside ajaxSend, stop there
if(T.readyState=1,// Send global event
g&&y.trigger("ajaxSend",[T,v]),h)return T;// Timeout
v.async&&0<v.timeout&&(p=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,u)}catch(e){
// Rethrow post-completion exceptions
if(h)throw e;// Propagate others as results
u(-1,e)}}// Callback for when everything is done
else u(-1,"No Transport");function u(e,t,n,r){var i,o,a,s,l,u=t;// Ignore repeat invocations
h||(h=!0,// Clear timeout if it exists
p&&C.clearTimeout(p),// Dereference transport for early garbage collection
// (no matter how long the jqXHR object will be used)
c=void 0,// Cache response headers
d=r||"",// Set readyState
T.readyState=0<e?4:0,// Determine if successful
i=200<=e&&e<300||304===e,// Get response data
n&&(s=function(e,t,n){// Remove auto dataType and get content-type in the process
for(var r,i,o,a,s=e.contents,l=e.dataTypes;"*"===l[0];)l.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));// Check if we're dealing with a known content-type
if(r)for(i in s)if(s[i]&&s[i].test(r)){l.unshift(i);break}// Check to see if we have a response for the expected dataType
if(l[0]in n)o=l[0];else{
// Try convertible dataTypes
for(i in n){if(!l[0]||e.converters[i+" "+l[0]]){o=i;break}a||(a=i)}// Or just use first one
o=o||a}// If we found a dataType
// We add the dataType to the list if needed
// and return the corresponding response
if(o)return o!==l[0]&&l.unshift(o),n[o]}
/* Chain conversions given the request and the original response
       * Also sets the responseXXX fields on the jqXHR instance
       */(v,T,n)),// Convert no matter what (that way responseXXX fields are always set)
s=function(e,t,n,r){var i,o,a,s,l,u={},
// Work with a copy of dataTypes in case we need to modify it for conversion
c=e.dataTypes.slice();// Create converters map with lowercased keys
if(c[1])for(a in e.converters)u[a.toLowerCase()]=e.converters[a];// Convert to each sequential dataType
for(o=c.shift();o;)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),// Apply the dataFilter if provided
!l&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),l=o,o=c.shift())
// There's only work to do if current dataType is non-auto
if("*"===o)o=l;// Convert response if prev dataType is non-auto and differs from current
else if("*"!==l&&l!==o){// If none found, seek a pair
if(!(
// Seek a direct converter
a=u[l+" "+o]||u["* "+o]))for(i in u)if((
// If conv2 outputs current
s=i.split(" "))[1]===o&&(
// If prev can be converted to accepted input
a=u[l+" "+s[0]]||u["* "+s[0]])){
// Condense equivalence converters
!0===a?a=u[i]:!0!==u[i]&&(o=s[0],c.unshift(s[1]));break}// Apply converter (if not an equivalence)
if(!0!==a)
// Unless errors are allowed to bubble, catch and return them
if(a&&e.throws)t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+l+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),// If successful, handle type chaining
i?(
// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
v.ifModified&&((l=T.getResponseHeader("Last-Modified"))&&(E.lastModified[f]=l),(l=T.getResponseHeader("etag"))&&(E.etag[f]=l)),// if no content
204===e||"HEAD"===v.type?u="nocontent":304===e?u="notmodified":(u=s.state,o=s.data,i=!(a=s.error))):(
// Extract error from statusText and normalize for non-aborts
a=u,!e&&u||(u="error",e<0&&(e=0))),// Set data for the fake xhr object
T.status=e,T.statusText=(t||u)+"",// Success/Error
i?b.resolveWith(m,[o,u,T]):b.rejectWith(m,[T,u,a]),// Status-dependent callbacks
T.statusCode(w),w=void 0,g&&y.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),// Complete
x.fireWith(m,[T,u]),g&&(y.trigger("ajaxComplete",[T,v]),// Handle the global AJAX counter
--E.active||E.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return E.get(e,t,n,"json")},getScript:function(e,t){return E.get(e,void 0,t,"script")}}),E.each(["get","post"],function(e,i){E[i]=function(e,t,n,r){// The url can be an options object (which then must have .url)
// Shift arguments if data argument was omitted
return y(t)&&(r=r||n,n=t,t=void 0),E.ajax(E.extend({url:e,type:i,dataType:r,data:t,success:n},E.isPlainObject(e)&&e))}}),E._evalUrl=function(e){return E.ajax({url:e,
// Make this explicit, since user can override this through ajaxSetup (#11264)
type:"GET",dataType:"script",cache:!0,async:!1,global:!1,throws:!0})},E.fn.extend({wrapAll:function(e){var t;return this[0]&&(y(e)&&(e=e.call(this[0])),// The elements to wrap the target around
t=E(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var e=this;e.firstElementChild;)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return y(n)?this.each(function(e){E(this).wrapInner(n.call(this,e))}):this.each(function(){var e=E(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=y(t);return this.each(function(e){E(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){E(this).replaceWith(this.childNodes)}),this}}),E.expr.pseudos.hidden=function(e){return!E.expr.pseudos.visible(e)},E.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},E.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var Wt={
// File protocol always yields status code 0, assume 200
0:200,
// Support: IE <=9 only
// #1450: sometimes IE returns 1223 when it should be 204
1223:204},Ft=E.ajaxSettings.xhr();m.cors=!!Ft&&"withCredentials"in Ft,m.ajax=Ft=!!Ft,E.ajaxTransport(function(i){var o,a;// Cross domain only allowed if supported through XMLHttpRequest
if(m.cors||Ft&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();// Apply custom fields if provided
if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];// Override mime type if needed
// Set headers
for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),// X-Requested-With header
// For cross-domain requests, seeing as conditions for a preflight are
// akin to a jigsaw puzzle, we simply never set it to be sure.
// (it can always be set on a per-request basis or even using ajaxSetup)
// For same-domain requests, won't change header if already provided.
i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);// Callback
o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?
// Support: IE <=9 only
// On a manual native abort, IE9 throws
// errors on any property access that is not readyState
"number"!=typeof r.status?t(0,"error"):t(// File: protocol always yields status 0; see #8605, #14207
r.status,r.statusText):t(Wt[r.status]||r.status,r.statusText,// Support: IE <=9 only
// IE9 has no XHR2 but throws on binary (trac-11426)
// For XHR2 non-text, let the caller handle it (gh-2498)
"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},// Listen to events
r.onload=o(),a=r.onerror=r.ontimeout=o("error"),// Support: IE 9 only
// Use onreadystatechange to replace onabort
// to handle uncaught aborts
void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){
// Check readyState before timeout as it changes
4===r.readyState&&
// Allow onerror to be called first,
// but that will not handle a native abort
// Also, save errorCallback to a variable
// as xhr.onerror cannot be accessed
C.setTimeout(function(){o&&a()})},// Create the abort callback
o=o("abort");try{
// Do send the request (this may raise an exception)
r.send(i.hasContent&&i.data||null)}catch(e){
// #14683: Only rethrow if this hasn't been notified as an error yet
if(o)throw e}},abort:function(){o&&o()}}}),// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
E.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),// Install script dataType
E.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return E.globalEval(e),e}}}),// Handle cache's special case and crossDomain
E.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),// Bind script tag hack transport
E.ajaxTransport("script",function(n){var r,i;
// This transport only deals with cross domain requests
if(n.crossDomain)return{send:function(e,t){r=E("<script>").prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),// Use native DOM manipulation to avoid our domManip AJAX trickery
_.head.appendChild(r[0])},abort:function(){i&&i()}}});var Bt,$t=[],Ut=/(=)\?(?=&|$)|\?\?/;// Default jsonp settings
E.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=$t.pop()||E.expando+"_"+xt++;return this[e]=!0,e}}),// Detect, normalize options and install callbacks for jsonp requests
E.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Ut.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ut.test(e.data)&&"data");// Handle iff the expected data type is "jsonp" or we have a parameter to set
if(a||"jsonp"===e.dataTypes[0])// Delegate to script
// Get callback name, remembering preexisting value associated with it
return r=e.jsonpCallback=y(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,// Insert callback into url or form data
a?e[a]=e[a].replace(Ut,"$1"+r):!1!==e.jsonp&&(e.url+=(wt.test(e.url)?"&":"?")+e.jsonp+"="+r),// Use data converter to retrieve json after script execution
e.converters["script json"]=function(){return o||E.error(r+" was not called"),o[0]},// Force json dataType
e.dataTypes[0]="json",// Install callback
i=C[r],C[r]=function(){o=arguments},// Clean-up function (fires after converters)
n.always(function(){
// If previous value didn't exist - remove it
void 0===i?E(C).removeProp(r):C[r]=i,// Save back as free
e[r]&&(
// Make sure that re-using the options doesn't screw things around
e.jsonpCallback=t.jsonpCallback,// Save the callback name for future use
$t.push(r)),// Call if it was a function and we have a response
o&&y(i)&&i(o[0]),o=i=void 0}),"script"}),// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
m.createHTMLDocument=((Bt=_.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Bt.childNodes.length),// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
E.parseHTML=function(e,t,n){return"string"!=typeof e?[]:(// Single tag
"boolean"==typeof t&&(n=t,t=!1),t||(
// Stop scripts or inline event handlers from being executed immediately
// by using document.implementation
m.createHTMLDocument?((// Set the base href for the created document
// so any parsed elements with URLs
// are based on the document's URL (gh-2965)
r=(t=_.implementation.createHTMLDocument("")).createElement("base")).href=_.location.href,t.head.appendChild(r)):t=_),o=!n&&[],(i=D.exec(e))?[t.createElement(i[1])]:(i=me([e],t,o),o&&o.length&&E(o).remove(),E.merge([],i.childNodes)));var r,i,o},
/**
       * Load a url into a page
       */
E.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=pt(e.slice(s)),e=e.slice(0,s)),// If it's a function
y(t)?(
// We assume that it's the callback
n=t,t=void 0):t&&"object"===Vt(t)&&(i="POST"),// If we have elements to modify, make the request
0<a.length&&E.ajax({url:e,
// If "type" variable is undefined, then "GET" method will be used.
// Make value of this field explicit since
// user can override it through ajaxSetup method
type:i||"GET",dataType:"html",data:t}).done(function(e){
// Save response for use in complete callback
o=arguments,a.html(r?// If a selector was specified, locate the right elements in a dummy div
// Exclude scripts to avoid IE 'Permission Denied' errors
E("<div>").append(E.parseHTML(e)).find(r):// Otherwise use the full result
e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},// Attach a bunch of functions for handling common AJAX events
E.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){E.fn[t]=function(e){return this.on(t,e)}}),E.expr.pseudos.animated=function(t){return E.grep(E.timers,function(e){return t===e.elem}).length},E.offset={setOffset:function(e,t,n){var r,i,o,a,s,l,u=E.css(e,"position"),c=E(e),f={};// Set position first, in-case top/left are set even on static elem
"static"===u&&(e.style.position="relative"),s=c.offset(),o=E.css(e,"top"),l=E.css(e,"left"),// Need to be able to calculate position if either
// top or left is auto and position is either absolute or fixed
i=("absolute"===u||"fixed"===u)&&-1<(o+l).indexOf("auto")?(a=(r=c.position()).top,r.left):(a=parseFloat(o)||0,parseFloat(l)||0),y(t)&&(
// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
t=t.call(e,n,E.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},E.fn.extend({
// offset() relates an element's border box to the document origin
offset:function(t){
// Preserve chaining for setter
if(arguments.length)return void 0===t?this:this.each(function(e){E.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
// Support: IE <=11 only
// Running getBoundingClientRect on a
// disconnected node in IE throws an error
r.getClientRects().length?(// Get document-relative position by adding viewport scroll to viewport-relative gBCR
e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},
// position() relates an element's margin box to its offset parent's padding box
// This corresponds to the behavior of CSS absolute positioning
position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};// position:fixed elements are offset from the viewport, which itself always has zero offset
if("fixed"===E.css(r,"position"))
// Assume position:fixed implies availability of getBoundingClientRect
t=r.getBoundingClientRect();else{for(t=this.offset(),// Account for the *real* offset parent, which can be the document or its root element
// when a statically positioned element is identified
n=r.ownerDocument,e=r.offsetParent||n.documentElement;e&&(e===n.body||e===n.documentElement)&&"static"===E.css(e,"position");)e=e.parentNode;e&&e!==r&&1===e.nodeType&&(
// Incorporate borders into its offset, since they are outside its content origin
(i=E(e).offset()).top+=E.css(e,"borderTopWidth",!0),i.left+=E.css(e,"borderLeftWidth",!0))}// Subtract parent offsets and element margins
return{top:t.top-i.top-E.css(r,"marginTop",!0),left:t.left-i.left-E.css(r,"marginLeft",!0)}}},
// This method will return documentElement in the following cases:
// 1) For the element inside the iframe without offsetParent, this method will return
//    documentElement of the parent window
// 2) For the hidden or detached element
// 3) For body or html element, i.e. in case of the html node - it will return itself
//
// but those exceptions were never presented as a real life use-cases
// and might be considered as more preferable results.
//
// This logic, however, is not guaranteed and can change at any point in the future
offsetParent:function(){return this.map(function(){for(var e=this.offsetParent;e&&"static"===E.css(e,"position");)e=e.offsetParent;return e||ye})}}),// Create scrollLeft and scrollTop methods
E.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;E.fn[t]=function(e){return B(this,function(e,t,n){
// Coalesce documents and windows
var r;if(b(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
E.each(["top","left"],function(e,n){E.cssHooks[n]=We(m.pixelPosition,function(e,t){if(t)// If curCSS returns percentage, fallback to offset
return t=Me(e,n),He.test(t)?E(e).position()[n]+"px":t})}),// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
E.each({Height:"height",Width:"width"},function(a,s){E.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){
// Margin is only for outerHeight, outerWidth
E.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return B(this,function(e,t,n){var r;return b(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:// Get document width or height
9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?// Get width or height on the element, requesting but not forcing parseFloat
E.css(e,t,i):// Set width or height on the element
E.style(e,t,n,i)},s,n?e:void 0,n)}})}),E.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){
// Handle event binding
E.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}}),E.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),E.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){
// ( namespace ) or ( selector, types [, fn] )
return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
E.proxy=function(e,t){var n,r,i;// Quick check to determine if target is callable, in the spec
// this throws a TypeError, but we will just return undefined.
if("string"==typeof t&&(n=e[t],t=e,e=n),y(e))// Simulated bind
return r=s.call(arguments,2),// Set the guid of unique handler to the same of original handler, so it can be removed
(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||E.guid++,i},E.holdReady=function(e){e?E.readyWait++:E.ready(!0)},E.isArray=Array.isArray,E.parseJSON=JSON.parse,E.nodeName=A,E.isFunction=y,E.isWindow=b,E.camelCase=z,E.type=w,E.now=Date.now,E.isNumeric=function(e){
// As of jQuery 3.0, isNumeric is limited to
// strings and numbers (primitives or objects)
// that can be coerced to finite numbers (gh-2662)
var t=E.type(e);return("number"===t||"string"===t)&&// parseFloat NaNs numeric-cast false positives ("")
// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
// subtraction forces infinities to NaN
!isNaN(e-parseFloat(e))};// Register as a named AMD module, since jQuery can be concatenated with other
var// Map over jQuery in case of overwrite
Qt=C.jQuery,
// Map over the $ in case of overwrite
zt=C.$;return E.noConflict=function(e){return C.$===E&&(C.$=zt),e&&C.jQuery===E&&(C.jQuery=Qt),E},// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
e||(C.jQuery=C.$=E),E},
// For CommonJS and CommonJS-like environments where a proper `window`
// is present, execute the factory and get jQuery.
// For environments that do not have a `window` with a `document`
// (such as Node.js), expose a factory as module.exports.
// This accentuates the need for the creation of a real `window`.
// e.g. var jQuery = require("jquery")(window);
// See ticket #14549 for more info.
e.exports=t.document?n(t,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return n(e)}}(t={exports:{}},t.exports),t.exports),Be=function(r){
/**
     * ------------------------------------------------------------------------
     * Private TransitionEnd Helpers
     * ------------------------------------------------------------------------
     */
var t=!1;function e(e){var t=this,n=!1;return r(this).one(l.TRANSITION_END,function(){n=!0}),setTimeout(function(){n||l.triggerTransitionEnd(t)},e),this}
/**
     * --------------------------------------------------------------------------
     * Public Util Api
     * --------------------------------------------------------------------------
     */
var l={TRANSITION_END:"bsTransitionEnd",getUID:function(e){for(;
// eslint-disable-next-line no-bitwise
e+=~~(1e6*Math.random()),document.getElementById(e););return e},getSelectorFromElement:function(e){var t,n=e.getAttribute("data-target");n&&"#"!==n||(n=e.getAttribute("href")||""),// If it's an ID
"#"===n.charAt(0)&&(t=n,n=
// We escape IDs in case of special selectors (selector = '#myId:something')
// $.escapeSelector does not exist in jQuery < 3
t="function"==typeof r.escapeSelector?r.escapeSelector(t).substr(1):t.replace(/(:|\.|\[|\]|,|=|@)/g,"\\$1"));try{return 0<r(document).find(n).length?n:null}catch(e){return null}},reflow:function(e){return e.offsetHeight},triggerTransitionEnd:function(e){r(e).trigger(t.end)},supportsTransitionEnd:function(){return Boolean(t)},isElement:function(e){return(e[0]||e).nodeType},typeCheckConfig:function(e,t,n){for(var r in n)if(Object.prototype.hasOwnProperty.call(n,r)){var i=n[r],o=t[r],a=o&&l.isElement(o)?"element":(s=o,{}.toString.call(s).match(/\s([a-zA-Z]+)/)[1].toLowerCase());if(!new RegExp(i).test(a))throw new Error("".concat(e.toUpperCase(),": ")+'Option "'.concat(r,'" provided type "').concat(a,'" ')+'but expected type "'.concat(i,'".'))}// Shoutout AngusCroll (https://goo.gl/pxwQGp)
var s}};return t=("undefined"==typeof window||!window.QUnit)&&{end:"transitionend"},r.fn.emulateTransitionEnd=e,l.supportsTransitionEnd()&&(r.event.special[l.TRANSITION_END]={bindType:t.end,delegateType:t.end,handle:function(e){if(r(e.target).is(this))return e.handleObj.handler.apply(this,arguments);// eslint-disable-line prefer-rest-params
}}),l}(Fe);
/**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.0.0): util.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */o=Fe,n="alert",u=".".concat(l="bs.alert"),c=o.fn[n],f={CLOSE:"close".concat(u),CLOSED:"closed".concat(u),CLICK_DATA_API:"click".concat(u).concat(".data-api")},d="alert",p="fade",h="show"
/**
       * ------------------------------------------------------------------------
       * Class Definition
       * ------------------------------------------------------------------------
       */,g=
/* */
function(){function r(e){a(this,r),this._element=e}// Getters
return e(r,[{key:"close",
// Public
value:function(e){e=e||this._element;var t=this._getRootElement(e);this._triggerCloseEvent(t).isDefaultPrevented()||this._removeElement(t)}},{key:"dispose",value:function(){o.removeData(this._element,l),this._element=null}// Private
},{key:"_getRootElement",value:function(e){var t=Be.getSelectorFromElement(e),n=!1;return t&&(n=o(t)[0]),n||(n=o(e).closest(".".concat(d))[0]),n}},{key:"_triggerCloseEvent",value:function(e){var t=o.Event(f.CLOSE);return o(e).trigger(t),t}},{key:"_removeElement",value:function(t){var n=this;o(t).removeClass(h),Be.supportsTransitionEnd()&&o(t).hasClass(p)?o(t).one(Be.TRANSITION_END,function(e){return n._destroyElement(t,e)}).emulateTransitionEnd(150):this._destroyElement(t)}},{key:"_destroyElement",value:function(e){o(e).detach().trigger(f.CLOSED).remove()}// Static
}],[{key:"_jQueryInterface",value:function(n){return this.each(function(){var e=o(this),t=e.data(l);t||(t=new r(this),e.data(l,t)),"close"===n&&t[n](this)})}},{key:"_handleDismiss",value:function(t){return function(e){e&&e.preventDefault(),t.close(this)}}},{key:"VERSION",get:function(){return"4.0.0"}}]),r}(),
/**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */
o(document).on(f.CLICK_DATA_API,'[data-dismiss="alert"]',g._handleDismiss(new g)),
/**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */
o.fn[n]=g._jQueryInterface,o.fn[n].Constructor=g,o.fn[n].noConflict=function(){return o.fn[n]=c,g._jQueryInterface},v=Fe,m="button",b=".".concat(y="bs.button"),x=".data-api",w=v.fn[m],T="active",C="btn",_="focus",E='[data-toggle^="button"]',k='[data-toggle="buttons"]',A="input",D=".active",S=".btn",N={CLICK_DATA_API:"click".concat(b).concat(x),FOCUS_BLUR_DATA_API:"focus".concat(b).concat(x," ")+"blur".concat(b).concat(x)
/**
       * ------------------------------------------------------------------------
       * Class Definition
       * ------------------------------------------------------------------------
       */},j=
/* */
function(){function n(e){a(this,n),this._element=e}// Getters
return e(n,[{key:"toggle",
// Public
value:function(){var e=!0,t=!0,n=v(this._element).closest(k)[0];if(n){var r=v(this._element).find(A)[0];if(r){if("radio"===r.type)if(r.checked&&v(this._element).hasClass(T))e=!1;else{var i=v(n).find(D)[0];i&&v(i).removeClass(T)}if(e){if(r.hasAttribute("disabled")||n.hasAttribute("disabled")||r.classList.contains("disabled")||n.classList.contains("disabled"))return;r.checked=!v(this._element).hasClass(T),v(r).trigger("change")}r.focus(),t=!1}}t&&this._element.setAttribute("aria-pressed",!v(this._element).hasClass(T)),e&&v(this._element).toggleClass(T)}},{key:"dispose",value:function(){v.removeData(this._element,y),this._element=null}// Static
}],[{key:"_jQueryInterface",value:function(t){return this.each(function(){var e=v(this).data(y);e||(e=new n(this),v(this).data(y,e)),"toggle"===t&&e[t]()})}},{key:"VERSION",get:function(){return"4.0.0"}}]),n}(),
/**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */
v(document).on(N.CLICK_DATA_API,E,function(e){e.preventDefault();var t=e.target;v(t).hasClass(C)||(t=v(t).closest(S)),j._jQueryInterface.call(v(t),"toggle")}).on(N.FOCUS_BLUR_DATA_API,E,function(e){var t=v(e.target).closest(S)[0];v(t).toggleClass(_,/^focus(in)?$/.test(e.type))}),
/**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */
v.fn[m]=j._jQueryInterface,v.fn[m].Constructor=j,v.fn[m].noConflict=function(){return v.fn[m]=w,j._jQueryInterface},I=Fe,L="carousel",q=".".concat(O="bs.carousel"),H=".data-api",P=I.fn[L],R={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0},M={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean"},W="next",F="prev",B="left",$="right",U={SLIDE:"slide".concat(q),SLID:"slid".concat(q),KEYDOWN:"keydown".concat(q),MOUSEENTER:"mouseenter".concat(q),MOUSELEAVE:"mouseleave".concat(q),TOUCHEND:"touchend".concat(q),LOAD_DATA_API:"load".concat(q).concat(H),CLICK_DATA_API:"click".concat(q).concat(H)},Q="carousel",z="active",V="slide",X="carousel-item-right",K="carousel-item-left",Y="carousel-item-next",G="carousel-item-prev",J=".active",Z=".active.carousel-item",ee=".carousel-item",te=".carousel-item-next, .carousel-item-prev",ne=".carousel-indicators",re="[data-slide], [data-slide-to]",ie='[data-ride="carousel"]'
/**
       * ------------------------------------------------------------------------
       * Class Definition
       * ------------------------------------------------------------------------
       */,oe=
/* */
function(){function o(e,t){a(this,o),this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this._config=this._getConfig(t),this._element=I(e)[0],this._indicatorsElement=I(this._element).find(ne)[0],this._addEventListeners()}// Getters
return e(o,[{key:"next",
// Public
value:function(){this._isSliding||this._slide(W)}},{key:"nextWhenVisible",value:function(){
// Don't call next when the page isn't visible
// or the carousel or its parent isn't visible
!document.hidden&&I(this._element).is(":visible")&&"hidden"!==I(this._element).css("visibility")&&this.next()}},{key:"prev",value:function(){this._isSliding||this._slide(F)}},{key:"pause",value:function(e){e||(this._isPaused=!0),I(this._element).find(te)[0]&&Be.supportsTransitionEnd()&&(Be.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null}},{key:"cycle",value:function(e){e||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))}},{key:"to",value:function(e){var t=this;this._activeElement=I(this._element).find(Z)[0];var n=this._getItemIndex(this._activeElement);if(!(e>this._items.length-1||e<0))if(this._isSliding)I(this._element).one(U.SLID,function(){return t.to(e)});else{if(n===e)return this.pause(),void this.cycle();var r=n<e?W:F;this._slide(r,this._items[e])}}},{key:"dispose",value:function(){I(this._element).off(q),I.removeData(this._element,O),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null}// Private
},{key:"_getConfig",value:function(e){return e=s({},R,e),Be.typeCheckConfig(L,e,M),e}},{key:"_addEventListeners",value:function(){var t=this;this._config.keyboard&&I(this._element).on(U.KEYDOWN,function(e){return t._keydown(e)}),"hover"===this._config.pause&&(I(this._element).on(U.MOUSEENTER,function(e){return t.pause(e)}).on(U.MOUSELEAVE,function(e){return t.cycle(e)}),"ontouchstart"in document.documentElement&&
// If it's a touch-enabled device, mouseenter/leave are fired as
// part of the mouse compatibility events on first tap - the carousel
// would stop cycling until user tapped out of it;
// here, we listen for touchend, explicitly pause the carousel
// (as if it's the second time we tap on it, mouseenter compat event
// is NOT fired) and after a timeout (to allow for mouse compatibility
// events to fire) we explicitly restart cycling
I(this._element).on(U.TOUCHEND,function(){t.pause(),t.touchTimeout&&clearTimeout(t.touchTimeout),t.touchTimeout=setTimeout(function(e){return t.cycle(e)},500+t._config.interval)}))}},{key:"_keydown",value:function(e){if(!/input|textarea/i.test(e.target.tagName))switch(e.which){case 37:e.preventDefault(),this.prev();break;case 39:e.preventDefault(),this.next()}}},{key:"_getItemIndex",value:function(e){return this._items=I.makeArray(I(e).parent().find(ee)),this._items.indexOf(e)}},{key:"_getItemByDirection",value:function(e,t){var n=e===W,r=e===F,i=this._getItemIndex(t),o=this._items.length-1;if((r&&0===i||n&&i===o)&&!this._config.wrap)return t;var a=(i+(e===F?-1:1))%this._items.length;return-1===a?this._items[this._items.length-1]:this._items[a]}},{key:"_triggerSlideEvent",value:function(e,t){var n=this._getItemIndex(e),r=this._getItemIndex(I(this._element).find(Z)[0]),i=I.Event(U.SLIDE,{relatedTarget:e,direction:t,from:r,to:n});return I(this._element).trigger(i),i}},{key:"_setActiveIndicatorElement",value:function(e){if(this._indicatorsElement){I(this._indicatorsElement).find(J).removeClass(z);var t=this._indicatorsElement.children[this._getItemIndex(e)];t&&I(t).addClass(z)}}},{key:"_slide",value:function(e,t){var n,r,i,o=this,a=I(this._element).find(Z)[0],s=this._getItemIndex(a),l=t||a&&this._getItemByDirection(e,a),u=this._getItemIndex(l),c=Boolean(this._interval);if(i=e===W?(n=K,r=Y,B):(n=X,r=G,$),l&&I(l).hasClass(z))this._isSliding=!1;else if(!this._triggerSlideEvent(l,i).isDefaultPrevented()&&a&&l){this._isSliding=!0,c&&this.pause(),this._setActiveIndicatorElement(l);var f=I.Event(U.SLID,{relatedTarget:l,direction:i,from:s,to:u});Be.supportsTransitionEnd()&&I(this._element).hasClass(V)?(I(l).addClass(r),Be.reflow(l),I(a).addClass(n),I(l).addClass(n),I(a).one(Be.TRANSITION_END,function(){I(l).removeClass("".concat(n," ").concat(r)).addClass(z),I(a).removeClass("".concat(z," ").concat(r," ").concat(n)),o._isSliding=!1,setTimeout(function(){return I(o._element).trigger(f)},0)}).emulateTransitionEnd(600)):(I(a).removeClass(z),I(l).addClass(z),this._isSliding=!1,I(this._element).trigger(f)),c&&this.cycle()}}// Static
}],[{key:"_jQueryInterface",value:function(r){return this.each(function(){var e=I(this).data(O),t=s({},R,I(this).data());"object"===Vt(r)&&(t=s({},t,r));var n="string"==typeof r?r:t.slide;if(e||(e=new o(this,t),I(this).data(O,e)),"number"==typeof r)e.to(r);else if("string"==typeof n){if(void 0===e[n])throw new TypeError('No method named "'.concat(n,'"'));e[n]()}else t.interval&&(e.pause(),e.cycle())})}},{key:"_dataApiClickHandler",value:function(e){var t=Be.getSelectorFromElement(this);if(t){var n=I(t)[0];if(n&&I(n).hasClass(Q)){var r=s({},I(n).data(),I(this).data()),i=this.getAttribute("data-slide-to");i&&(r.interval=!1),o._jQueryInterface.call(I(n),r),i&&I(n).data(O).to(i),e.preventDefault()}}}},{key:"VERSION",get:function(){return"4.0.0"}},{key:"Default",get:function(){return R}}]),o}(),
/**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */
I(document).on(U.CLICK_DATA_API,re,oe._dataApiClickHandler),I(window).on(U.LOAD_DATA_API,function(){I(ie).each(function(){var e=I(this);oe._jQueryInterface.call(e,e.data())})}),
/**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */
I.fn[L]=oe._jQueryInterface,I.fn[L].Constructor=oe,I.fn[L].noConflict=function(){return I.fn[L]=P,oe._jQueryInterface},ae=Fe,se="collapse",ue=".".concat(le="bs.collapse"),ce=ae.fn[se],fe={toggle:!0,parent:""},de={toggle:"boolean",parent:"(string|element)"},pe={SHOW:"show".concat(ue),SHOWN:"shown".concat(ue),HIDE:"hide".concat(ue),HIDDEN:"hidden".concat(ue),CLICK_DATA_API:"click".concat(ue).concat(".data-api")},he="show",ge="collapse",ve="collapsing",me="collapsed",ye="width",be="height",xe=".show, .collapsing",we='[data-toggle="collapse"]'
/**
       * ------------------------------------------------------------------------
       * Class Definition
       * ------------------------------------------------------------------------
       */,Te=
/* */
function(){function l(e,t){a(this,l),this._isTransitioning=!1,this._element=e,this._config=this._getConfig(t),this._triggerArray=ae.makeArray(ae('[data-toggle="collapse"][href="#'.concat(e.id,'"],')+'[data-toggle="collapse"][data-target="#'.concat(e.id,'"]')));for(var n=ae(we),r=0;r<n.length;r++){var i=n[r],o=Be.getSelectorFromElement(i);null!==o&&0<ae(o).filter(e).length&&(this._selector=o,this._triggerArray.push(i))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}// Getters
return e(l,[{key:"toggle",
// Public
value:function(){ae(this._element).hasClass(he)?this.hide():this.show()}},{key:"show",value:function(){var e,t,n=this;if(!this._isTransitioning&&!ae(this._element).hasClass(he)&&(this._parent&&0===(e=ae.makeArray(ae(this._parent).find(xe).filter('[data-parent="'.concat(this._config.parent,'"]')))).length&&(e=null),!(e&&(t=ae(e).not(this._selector).data(le))&&t._isTransitioning))){var r=ae.Event(pe.SHOW);if(ae(this._element).trigger(r),!r.isDefaultPrevented()){e&&(l._jQueryInterface.call(ae(e).not(this._selector),"hide"),t||ae(e).data(le,null));var i=this._getDimension();ae(this._element).removeClass(ge).addClass(ve),(this._element.style[i]=0)<this._triggerArray.length&&ae(this._triggerArray).removeClass(me).attr("aria-expanded",!0),this.setTransitioning(!0);var o=function(){ae(n._element).removeClass(ve).addClass(ge).addClass(he),n._element.style[i]="",n.setTransitioning(!1),ae(n._element).trigger(pe.SHOWN)};if(Be.supportsTransitionEnd()){var a=i[0].toUpperCase()+i.slice(1),s="scroll".concat(a);ae(this._element).one(Be.TRANSITION_END,o).emulateTransitionEnd(600),this._element.style[i]="".concat(this._element[s],"px")}else o()}}}},{key:"hide",value:function(){var e=this;if(!this._isTransitioning&&ae(this._element).hasClass(he)){var t=ae.Event(pe.HIDE);if(ae(this._element).trigger(t),!t.isDefaultPrevented()){var n=this._getDimension();if(this._element.style[n]="".concat(this._element.getBoundingClientRect()[n],"px"),Be.reflow(this._element),ae(this._element).addClass(ve).removeClass(ge).removeClass(he),0<this._triggerArray.length)for(var r=0;r<this._triggerArray.length;r++){var i=this._triggerArray[r],o=Be.getSelectorFromElement(i);if(null!==o)ae(o).hasClass(he)||ae(i).addClass(me).attr("aria-expanded",!1)}this.setTransitioning(!0);var a=function(){e.setTransitioning(!1),ae(e._element).removeClass(ve).addClass(ge).trigger(pe.HIDDEN)};this._element.style[n]="",Be.supportsTransitionEnd()?ae(this._element).one(Be.TRANSITION_END,a).emulateTransitionEnd(600):a()}}}},{key:"setTransitioning",value:function(e){this._isTransitioning=e}},{key:"dispose",value:function(){ae.removeData(this._element,le),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null}// Private
},{key:"_getConfig",value:function(e){return(e=s({},fe,e)).toggle=Boolean(e.toggle),// Coerce string values
Be.typeCheckConfig(se,e,de),e}},{key:"_getDimension",value:function(){return ae(this._element).hasClass(ye)?ye:be}},{key:"_getParent",value:function(){var n=this,e=null;Be.isElement(this._config.parent)?(e=this._config.parent,// It's a jQuery object
void 0!==this._config.parent.jquery&&(e=this._config.parent[0])):e=ae(this._config.parent)[0];var t='[data-toggle="collapse"][data-parent="'.concat(this._config.parent,'"]');return ae(e).find(t).each(function(e,t){n._addAriaAndCollapsedClass(l._getTargetFromElement(t),[t])}),e}},{key:"_addAriaAndCollapsedClass",value:function(e,t){if(e){var n=ae(e).hasClass(he);0<t.length&&ae(t).toggleClass(me,!n).attr("aria-expanded",n)}}// Static
}],[{key:"_getTargetFromElement",value:function(e){var t=Be.getSelectorFromElement(e);return t?ae(t)[0]:null}},{key:"_jQueryInterface",value:function(r){return this.each(function(){var e=ae(this),t=e.data(le),n=s({},fe,e.data(),"object"===Vt(r)&&r);if(!t&&n.toggle&&/show|hide/.test(r)&&(n.toggle=!1),t||(t=new l(this,n),e.data(le,t)),"string"==typeof r){if(void 0===t[r])throw new TypeError('No method named "'.concat(r,'"'));t[r]()}})}},{key:"VERSION",get:function(){return"4.0.0"}},{key:"Default",get:function(){return fe}}]),l}(),
/**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */
ae(document).on(pe.CLICK_DATA_API,we,function(e){
// preventDefault only for <a> elements (which change the URL) not inside the collapsible element
"A"===e.currentTarget.tagName&&e.preventDefault();var n=ae(this),t=Be.getSelectorFromElement(this);ae(t).each(function(){var e=ae(this),t=e.data(le)?"toggle":n.data();Te._jQueryInterface.call(e,t)})}),
/**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */
ae.fn[se]=Te._jQueryInterface,ae.fn[se].Constructor=Te,ae.fn[se].noConflict=function(){return ae.fn[se]=ce,Te._jQueryInterface},Ce=Fe,Ee=".".concat(_e="bs.tab"),ke=Ce.fn.tab,Ae={HIDE:"hide".concat(Ee),HIDDEN:"hidden".concat(Ee),SHOW:"show".concat(Ee),SHOWN:"shown".concat(Ee),CLICK_DATA_API:"click".concat(Ee).concat(".data-api")},De="dropdown-menu",Se="active",Ne="disabled",je="fade",Ie="show",Le=".dropdown",Oe=".nav, .list-group",qe=".active",He="> li > .active",Pe='[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',Re=".dropdown-toggle",Me="> .dropdown-menu .active"
/**
       * ------------------------------------------------------------------------
       * Class Definition
       * ------------------------------------------------------------------------
       */,We=
/* */
function(){function r(e){a(this,r),this._element=e}// Getters
return e(r,[{key:"show",
// Public
value:function(){var n=this;if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&Ce(this._element).hasClass(Se)||Ce(this._element).hasClass(Ne))){var e,r,t=Ce(this._element).closest(Oe)[0],i=Be.getSelectorFromElement(this._element);if(t){var o="UL"===t.nodeName?He:qe;r=(r=Ce.makeArray(Ce(t).find(o)))[r.length-1]}var a=Ce.Event(Ae.HIDE,{relatedTarget:this._element}),s=Ce.Event(Ae.SHOW,{relatedTarget:r});if(r&&Ce(r).trigger(a),Ce(this._element).trigger(s),!s.isDefaultPrevented()&&!a.isDefaultPrevented()){i&&(e=Ce(i)[0]),this._activate(this._element,t);var l=function(){var e=Ce.Event(Ae.HIDDEN,{relatedTarget:n._element}),t=Ce.Event(Ae.SHOWN,{relatedTarget:r});Ce(r).trigger(e),Ce(n._element).trigger(t)};e?this._activate(e,e.parentNode,l):l()}}}},{key:"dispose",value:function(){Ce.removeData(this._element,_e),this._element=null}// Private
},{key:"_activate",value:function(e,t,n){var r=this,i=("UL"===t.nodeName?Ce(t).find(He):Ce(t).children(qe))[0],o=n&&Be.supportsTransitionEnd()&&i&&Ce(i).hasClass(je),a=function(){return r._transitionComplete(e,i,n)};i&&o?Ce(i).one(Be.TRANSITION_END,a).emulateTransitionEnd(150):a()}},{key:"_transitionComplete",value:function(e,t,n){if(t){Ce(t).removeClass("".concat(Ie," ").concat(Se));var r=Ce(t.parentNode).find(Me)[0];r&&Ce(r).removeClass(Se),"tab"===t.getAttribute("role")&&t.setAttribute("aria-selected",!1)}if(Ce(e).addClass(Se),"tab"===e.getAttribute("role")&&e.setAttribute("aria-selected",!0),Be.reflow(e),Ce(e).addClass(Ie),e.parentNode&&Ce(e.parentNode).hasClass(De)){var i=Ce(e).closest(Le)[0];i&&Ce(i).find(Re).addClass(Se),e.setAttribute("aria-expanded",!0)}n&&n()}// Static
}],[{key:"_jQueryInterface",value:function(n){return this.each(function(){var e=Ce(this),t=e.data(_e);if(t||(t=new r(this),e.data(_e,t)),"string"==typeof n){if(void 0===t[n])throw new TypeError('No method named "'.concat(n,'"'));t[n]()}})}},{key:"VERSION",get:function(){return"4.0.0"}}]),r}(),
/**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */
Ce(document).on(Ae.CLICK_DATA_API,Pe,function(e){e.preventDefault(),We._jQueryInterface.call(Ce(this),"show")}),
/**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */
Ce.fn.tab=We._jQueryInterface,Ce.fn.tab.Constructor=We,Ce.fn.tab.noConflict=function(){return Ce.fn.tab=ke,We._jQueryInterface}}();

//# sourceMappingURL=bootstrap.js.map