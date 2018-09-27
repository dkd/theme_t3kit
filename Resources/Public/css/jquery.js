!function(){"use strict";function Gt(e){return(Gt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var r="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var e,t=(function(e){
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
var t,n;t="undefined"!=typeof window?window:r,n=function(C,e){var t=[],E=C.document,r=Object.getPrototypeOf,s=t.slice,g=t.concat,u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){
// Support: Chrome <=57, Firefox <=52
// In some browsers, typeof returns "function" for HTML <object> elements
// (i.e., `typeof document.createElement( "object" ) === "function"`).
// We don't want to classify *any* DOM node as a function.
return"function"==typeof e&&"number"!=typeof e.nodeType},x=function(e){return null!=e&&e===e.window},c={type:!0,src:!0,noModule:!0};function b(e,t,n){var r,i=(t=t||E).createElement("script");if(i.text=e,n)for(r in c)n[r]&&(i[r]=n[r]);t.head.appendChild(i).parentNode.removeChild(i)}function w(e){return null==e?e+"":"object"===Gt(e)||"function"==typeof e?n[o.call(e)]||"object":Gt(e);// Support: Android <=2.3 only (functionish RegExp)
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module
var f="3.3.1",
// Define a local copy of jQuery
S=function e(t,n){
// The jQuery object is actually just the init constructor 'enhanced'
// Need init if jQuery is called (just allow error to be thrown if not included)
return new e.fn.init(t,n)},
// Support: Android <=4.0 only
// Make sure we trim BOM and NBSP
p=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;function d(e){
// Support: real iOS 8.2 only (not reproducible in simulator)
// `in` check used to prevent JIT error (gh-2145)
// hasOwn isn't used here due to false negatives
// regarding Nodelist length in IE
var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}S.fn=S.prototype={
// The current version of jQuery being used
jquery:f,constructor:S,
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
var t=S.merge(this.constructor(),e);// Add the old object onto the stack (as a reference)
// Return the newly-formed element set
return t.prevObject=this,t},
// Execute a callback for every element in the matched set.
each:function(e){return S.each(this,e)},map:function(n){return this.pushStack(S.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},
// For internal use only.
// Behaves like an Array's method, not like a jQuery method.
push:u,sort:t.sort,splice:t.splice},S.extend=S.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;// Handle a deep copy situation
for("boolean"==typeof a&&(l=a,// Skip the boolean and the target
a=arguments[s]||{},s++),// Handle case when target is a string or something (possible in deep copy)
"object"===Gt(a)||m(a)||(a={}),// Extend jQuery itself if only one argument is passed
s===u&&(a=this,s--);s<u;s++)
// Only deal with non-null/undefined values
if(null!=(e=arguments[s]))
// Extend the base object
for(t in e)n=a[t],// Prevent never-ending loop
a!==(r=e[t])&&(// Recurse if we're merging plain objects or arrays
l&&r&&(S.isPlainObject(r)||(i=Array.isArray(r)))?(o=i?(i=!1,n&&Array.isArray(n)?n:[]):n&&S.isPlainObject(n)?n:{},// Never move original objects, clone them
a[t]=S.extend(l,o,r)):void 0!==r&&(a[t]=r));// Return the modified object
return a},S.extend({
// Unique for each copy of jQuery on the page
expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),
// Assume jQuery is ready without the ready module
isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;// Detect obvious negatives
// Use toString instead of jQuery.type to catch host objects
return!(!e||"[object Object]"!==o.call(e))&&(// Objects with no prototype (e.g., `Object.create( null )`) are plain
!(t=r(e))||"function"==typeof(// Objects with prototype are plain iff they were constructed by a global Object function
n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){
/* eslint-disable no-unused-vars */
// See https://github.com/eslint/eslint/issues/6125
var t;for(t in e)return!1;return!0},
// Evaluates a script in a global context
globalEval:function(e){b(e)},each:function(e,t){var n,r=0;if(d(e))for(n=e.length;r<n&&!1!==t.call(e[r],r,e[r]);r++);else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},
// Support: Android <=4.0 only
trim:function(e){return null==e?"":(e+"").replace(p,"")},
// results is for internal usage only
makeArray:function(e,t){var n=t||[];return null!=e&&(d(Object(e))?S.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},
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
support:y}),"function"==typeof Symbol&&(S.fn[Symbol.iterator]=t[Symbol.iterator]),// Populate the class2type map
S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var h=
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
function(n){var e,d,b,o,i,h,f,g,w,u,l,
// Local document vars
T,C,a,E,v,s,c,y,
// Instance-specific data
S="sizzle"+1*new Date,m=n.document,k=0,r=0,p=ae(),x=ae(),D=ae(),N=function(e,t){return e===t&&(l=!0),0},
// Instance methods
A={}.hasOwnProperty,t=[],j=t.pop,q=t.push,L=t.push,H=t.slice,
// Use a stripped-down indexOf as it's faster than native
// https://jsperf.com/thor-indexof-vs-for/5
O=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},P="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
// Regular expressions
// http://www.w3.org/TR/css3-selectors/#whitespace
M="[\\x20\\t\\r\\n\\f]",
// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
R="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
I="\\["+M+"*("+R+")(?:"+M+// Operator (capture 2)
"*([*^$|!~]?=)"+M+// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+R+"))|)"+M+"*\\]",W=":("+R+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+I+")*)|.*)\\)|)",
// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
$=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),F=new RegExp("^"+M+"*,"+M+"*"),_=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),z=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),X=new RegExp(W),U=new RegExp("^"+R+"$"),V={ID:new RegExp("^#("+R+")"),CLASS:new RegExp("^\\.("+R+")"),TAG:new RegExp("^("+R+"|[*])"),ATTR:new RegExp("^"+I),PSEUDO:new RegExp("^"+W),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+P+")$","i"),
// For use in libraries implementing .is()
// We use this for POS matching in `select`
needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},G=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Q=/^[^{]+\{\s*\[native \w/,
// Easily-parseable/retrievable ID or TAG or CLASS selectors
J=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,K=/[+~]/,
// CSS escapes
// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
Z=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),ee=function(e,t,n){var r="0x"+t-65536;// NaN means non-codepoint
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
re=function(){T()},ie=me(function(e){return!0===e.disabled&&("form"in e||"label"in e)},{dir:"parentNode",next:"legend"});// Optimize for push.apply( _, NodeList )
try{L.apply(t=H.call(m.childNodes),m.childNodes),// Support: Android<4.0
// Detect silently failing push.apply
t[m.childNodes.length].nodeType}catch(e){L={apply:t.length?// Leverage slice if possible
function(e,t){q.apply(e,H.call(t))}:// Support: IE<9
// Otherwise append directly
function(e,t){// Can't trust NodeList.length
for(var n=e.length,r=0;e[n++]=t[r++];);e.length=n-1}}}function oe(e,t,n,r){var i,o,a,s,u,l,c,f=t&&t.ownerDocument,
// nodeType defaults to 9, since context defaults to document
p=t?t.nodeType:9;// Return early from calls with invalid selector or context
if(n=n||[],"string"!=typeof e||!e||1!==p&&9!==p&&11!==p)return n;// Try to shortcut find operations (as opposed to filters) in HTML documents
if(!r&&((t?t.ownerDocument||t:m)!==C&&T(t),t=t||C,E)){
// If the selector is sufficiently simple, try using a "get*By*" DOM method
// (excepting DocumentFragment context, where the methods don't exist)
if(11!==p&&(u=J.exec(e)))
// ID selector
if(i=u[1]){
// Document context
if(9===p){if(!(a=t.getElementById(i)))return n;// Element context
// Support: IE, Opera, Webkit
// TODO: identify versions
// getElementById can match elements by name instead of ID
if(a.id===i)return n.push(a),n}else
// Support: IE, Opera, Webkit
// TODO: identify versions
// getElementById can match elements by name instead of ID
if(f&&(a=f.getElementById(i))&&y(t,a)&&a.id===i)return n.push(a),n;// Type selector
}else{if(u[2])return L.apply(n,t.getElementsByTagName(e)),n;// Class selector
if((i=u[3])&&d.getElementsByClassName&&t.getElementsByClassName)return L.apply(n,t.getElementsByClassName(i)),n}// Take advantage of querySelectorAll
if(d.qsa&&!D[e+" "]&&(!v||!v.test(e))){if(1!==p)f=t,c=e;else if("object"!==t.nodeName.toLowerCase()){for(
// Capture the context ID, setting it first if necessary
(s=t.getAttribute("id"))?s=s.replace(te,ne):t.setAttribute("id",s=S),o=(// Prefix every selector in the list
l=h(e)).length;o--;)l[o]="#"+s+" "+ye(l[o]);c=l.join(","),// Expand context for sibling selectors
f=K.test(e)&&ge(t.parentNode)||t}if(c)try{return L.apply(n,f.querySelectorAll(c)),n}catch(e){}finally{s===S&&t.removeAttribute("id")}}}// All others
return g(e.replace(B,"$1"),t,n,r)}
/**
         * Create key-value caches of limited size
         * @returns {function(string, object)} Returns the Object data after storing it on itself with
         *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
         *	deleting the oldest entry
         */function ae(){var r=[];return function e(t,n){
// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
return r.push(t+" ")>b.cacheLength&&
// Only keep the most recent entries
delete e[r.shift()],e[t+" "]=n}}
/**
         * Mark a function for special use by Sizzle
         * @param {Function} fn The function to mark
         */function se(e){return e[S]=!0,e}
/**
         * Support testing using an element
         * @param {Function} fn Passed the created element and returns a boolean result
         */function ue(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{
// Remove from its parent by default
t.parentNode&&t.parentNode.removeChild(t),// release memory in IE
t=null}}
/**
         * Adds the same handler for all of the specified attrs
         * @param {String} attrs Pipe-separated list of attributes
         * @param {Function} handler The method that will be applied
         */function le(e,t){for(var n=e.split("|"),r=n.length;r--;)b.attrHandle[n[r]]=t}
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
         */function pe(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}
/**
         * Returns a function to use in pseudos for :enabled/:disabled
         * @param {Boolean} disabled true for :disabled; false for :enabled
         */function de(t){
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
for(e in d=oe.support={},
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
T=oe.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:m;// Return early if doc is invalid or already selected
return r!==C&&9===r.nodeType&&r.documentElement&&(// Update global variables
a=(C=r).documentElement,E=!i(C),// Support: IE 9-11, Edge
// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
m!==C&&(n=C.defaultView)&&n.top!==n&&(
// Support: IE 11, Edge
n.addEventListener?n.addEventListener("unload",re,!1):n.attachEvent&&n.attachEvent("onunload",re)),
/* Attributes
          ---------------------------------------------------------------------- */
// Support: IE<8
// Verify that getAttribute really returns attributes and not properties
// (excepting IE8 booleans)
d.attributes=ue(function(e){return e.className="i",!e.getAttribute("className")}),
/* getElement(s)By*
          ---------------------------------------------------------------------- */
// Check if getElementsByTagName("*") returns only elements
d.getElementsByTagName=ue(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),// Support: IE<9
d.getElementsByClassName=Q.test(C.getElementsByClassName),// Support: IE<10
// Check if getElementById returns elements by name
// The broken getElementById methods don't pick up programmatically-set names,
// so use a roundabout getElementsByName test
d.getById=ue(function(e){return a.appendChild(e).id=S,!C.getElementsByName||!C.getElementsByName(S).length}),// ID filter and find
d.getById?(b.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if(void 0!==t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(Z,ee);return function(e){var t=void 0!==e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},// Support: IE 6 - 7 only
// getElementById is not reliable as a find shortcut
b.find.ID=function(e,t){if(void 0!==t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((
// Verify the id attribute
n=o.getAttributeNode("id"))&&n.value===e)return[o];// Fall back on getElementsByName
for(i=t.getElementsByName(e),r=0;o=i[r++];)if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),// Tag
b.find.TAG=d.getElementsByTagName?function(e,t){return void 0!==t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,
// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
o=t.getElementsByTagName(e);// Filter out possible comments
if("*"!==e)return o;for(;n=o[i++];)1===n.nodeType&&r.push(n);return r},// Class
b.find.CLASS=d.getElementsByClassName&&function(e,t){if(void 0!==t.getElementsByClassName&&E)return t.getElementsByClassName(e)},
/* QSA/matchesSelector
          ---------------------------------------------------------------------- */
// QSA and matchesSelector support
// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
s=[],// qSa(:focus) reports false when true (Chrome 21)
// We allow this because of a bug in IE8/9 that throws an error
// whenever `document.activeElement` is accessed on an iframe
// So, we allow :focus to pass through QSA all the time to avoid the IE error
// See https://bugs.jquery.com/ticket/13378
v=[],(d.qsa=Q.test(C.querySelectorAll))&&(
// Build QSA regex
// Regex strategy adopted from Diego Perini
ue(function(e){
// Select is set to empty string on purpose
// This is to test IE's treatment of not explicitly
// setting a boolean content attribute,
// since its presence should be enough
// https://bugs.jquery.com/ticket/12359
a.appendChild(e).innerHTML="<a id='"+S+"'></a><select id='"+S+"-\r\\' msallowcapture=''><option selected=''></option></select>",// Support: IE8, Opera 11-12.16
// Nothing should be selected when empty strings follow ^= or $= or *=
// The test attribute must be unknown in Opera but "safe" for WinRT
// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),// Support: IE8
// Boolean attributes and "value" are not treated correctly
e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+P+")"),// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
e.querySelectorAll("[id~="+S+"-]").length||v.push("~="),// Webkit/Opera - :checked should return selected option elements
// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
// IE8 throws error here and will not see later tests
e.querySelectorAll(":checked").length||v.push(":checked"),// Support: Safari 8+, iOS 8+
// https://bugs.webkit.org/show_bug.cgi?id=136851
// In-page `selector#id sibling-combinator selector` fails
e.querySelectorAll("a#"+S+"+*").length||v.push(".#.+[+~]")}),ue(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";// Support: Windows 8 Native Apps
// The type and name attributes are restricted during .innerHTML assignment
var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),// Support: IE8
// Enforce case-sensitivity of name attribute
e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
// IE8 throws error here and will not see later tests
2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),// Support: IE9-11+
// IE's :disabled selector does not pick up the children of disabled fieldsets
a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),// Opera 10-11 does not throw on post-comma invalid pseudos
e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=Q.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ue(function(e){
// Check to see if it's possible to do matchesSelector
// on a disconnected node (IE 9)
d.disconnectedMatch=c.call(e,"*"),// This should fail with an exception
// Gecko does not error, returns false instead
c.call(e,"[s!='']:x"),s.push("!=",W)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),
/* Contains
          ---------------------------------------------------------------------- */
t=Q.test(a.compareDocumentPosition),// Element contains another
// Purposefully self-exclusive
// As in, an element does not contain itself
y=t||Q.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},
/* Sorting
          ---------------------------------------------------------------------- */
// Document order sorting
N=t?function(e,t){
// Flag for duplicate removal
if(e===t)return l=!0,0;// Sort on method existence if only one input has compareDocumentPosition
var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(// Disconnected nodes
1&(// Calculate position if both inputs belong to the same document
n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):// Otherwise we know they are disconnected
1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?
// Choose the first element that is related to our preferred document
e===C||e.ownerDocument===m&&y(m,e)?-1:t===C||t.ownerDocument===m&&y(m,t)?1:u?O(u,e)-O(u,t):0:4&n?-1:1)}:function(e,t){
// Exit early if the nodes are identical
if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];// Parentless nodes are either documents or disconnected
if(!i||!o)return e===C?-1:t===C?1:i?-1:o?1:u?O(u,e)-O(u,t):0;// If the nodes are siblings, we can do a quick check
// Otherwise we need full lists of their ancestors for comparison
if(i===o)return ce(e,t);for(n=e;n=n.parentNode;)a.unshift(n);for(n=t;n=n.parentNode;)s.unshift(n);// Walk down the tree looking for a discrepancy
for(;a[r]===s[r];)r++;return r?// Do a sibling check if the nodes have a common ancestor
ce(a[r],s[r]):// Otherwise nodes in our document sort first
a[r]===m?-1:s[r]===m?1:0}),C},oe.matches=function(e,t){return oe(e,null,null,t)},oe.matchesSelector=function(e,t){if(
// Set document vars if needed
(e.ownerDocument||e)!==C&&T(e),// Make sure that attribute selectors are quoted
t=t.replace(z,"='$1']"),d.matchesSelector&&E&&!D[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);// IE 9's matchesSelector returns false on disconnected nodes
if(n||d.disconnectedMatch||// As well, disconnected nodes are said to be in a document
// fragment in IE 9
e.document&&11!==e.document.nodeType)return n}catch(e){}return 0<oe(t,C,null,[e]).length},oe.contains=function(e,t){
// Set document vars if needed
return(e.ownerDocument||e)!==C&&T(e),y(e,t)},oe.attr=function(e,t){
// Set document vars if needed
(e.ownerDocument||e)!==C&&T(e);var n=b.attrHandle[t.toLowerCase()],
// Don't get fooled by Object.prototype properties (jQuery #13807)
r=n&&A.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},oe.escape=function(e){return(e+"").replace(te,ne)},oe.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},
/**
         * Document sorting and removing duplicates
         * @param {ArrayLike} results
         */
oe.uniqueSort=function(e){var t,n=[],r=0,i=0;// Unless we *know* we can detect duplicates, assume their presence
if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(N),l){for(;t=e[i++];)t===e[i]&&(r=n.push(i));for(;r--;)e.splice(n[r],1)}// Clear input after sorting to release objects
// See https://github.com/jquery/sizzle/pull/225
return u=null,e},
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
n+=o(t);return n},(b=oe.selectors={
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
e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(// Get excess from tokenize (recursively)
t=h(n,!0))&&(// advance to the next closing parenthesis
t=n.indexOf(")",n.length-t)-n.length)&&(
// excess is a negative index
e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(Z,ee).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=p[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&p(e,function(e){return t.test("string"==typeof e.className&&e.className||void 0!==e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=oe.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace($," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?// Shortcut for :nth-*(n)
function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){
// :(first|last|only)-(child|of-type)
if(y){for(;l;){for(a=e;a=a[l];)if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;// Reverse direction for :only-* (if we haven't yet done so)
u=l="only"===h&&!u&&"nextSibling"}return!0}// non-xml :nth-child(...) stores cache data on `parent`
if(u=[m?c.firstChild:c.lastChild],m&&p){for(
// Seek `elem` from a previously-cached index
// ...in a gzip-friendly way
d=(s=(r=(// Support: IE <9 only
// Defend against cloned attroperties (jQuery gh-1709)
i=(o=(a=c)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1])&&r[2],a=s&&c.childNodes[s];a=++s&&a&&a[l]||(// Fallback to seeking `elem` from the start
d=s=0)||u.pop();)
// When found, cache indexes on `parent` and break
if(1===a.nodeType&&++d&&a===e){i[h]=[k,s,d];break}}else// xml :nth-child(...)
// or :nth-last-child(...) or :nth(-last)?-of-type(...)
if(
// Use previously-cached element index if available
p&&(d=s=(r=(// Support: IE <9 only
// Defend against cloned attroperties (jQuery gh-1709)
i=(o=(
// ...in a gzip-friendly way
a=e)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1]),!1===d)
// Use the same loop as above to seek `elem` from the start
for(;(a=++s&&a&&a[l]||(d=s=0)||u.pop())&&((x?a.nodeName.toLowerCase()!==f:1!==a.nodeType)||!++d||(
// Cache the index of each encountered element
p&&((// Support: IE <9 only
// Defend against cloned attroperties (jQuery gh-1709)
i=(o=a[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[k,d]),a!==e)););// Incorporate the offset, then check against cycle size
return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){
// pseudo-class names are case-insensitive
// http://www.w3.org/TR/selectors/#pseudo-classes
// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
// Remember that setFilters inherits from pseudos
var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||oe.error("unsupported pseudo: "+e);// The user may use createPseudo to indicate that
// arguments are needed to create the filter function
// just as Sizzle does
return a[S]?a(o):// But maintain support for old signatures
1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?se(function(e,t){for(var n,r=a(e,o),i=r.length;i--;)e[n=O(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{
// Potentially complex pseudos
not:se(function(e){
// Trim the selector passed to compile
// to avoid treating leading and trailing
// spaces as combinators
var r=[],i=[],s=f(e.replace(B,"$1"));return s[S]?se(function(e,t,n,r){// Match elements unmatched by `matcher`
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
return U.test(n||"")||oe.error("unsupported lang: "+n),n=n.replace(Z,ee).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),
// Miscellaneous
target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},
// Boolean properties
enabled:de(!1),disabled:de(!0),checked:function(e){
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
for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},
// Element/input types
header:function(e){return Y.test(e.nodeName)},input:function(e){return G.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(// Support: IE<8
// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},
// Position-in-collection
first:he(function(){return[0]}),last:he(function(e,t){return[t-1]}),eq:he(function(e,t,n){return[n<0?n+t:n]}),even:he(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:he(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:he(function(e,t,n){for(var r=n<0?n+t:n;0<=--r;)e.push(r);return e}),gt:he(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=fe(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=pe(e);// Easy API for creating new setFilters
function ve(){}function ye(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function me(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?// Check against closest ancestor/preceding element
function(e,t,n){for(;e=e[u];)if(1===e.nodeType||f)return s(e,t,n);return!1}:// Check against all ancestor/preceding elements
function(e,t,n){var r,i,o,a=[k,p];// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
if(n){for(;e=e[u];)if((1===e.nodeType||f)&&s(e,t,n))return!0}else for(;e=e[u];)if(1===e.nodeType||f)if(// Support: IE <9 only
// Defend against cloned attroperties (jQuery gh-1709)
i=(o=e[S]||(e[S]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===k&&r[1]===p)
// Assign to newCache so results back-propagate to previous elements
return a[2]=r[2];// A match means we're done; a fail means we have to keep checking
if((
// Reuse newcache so results back-propagate to previous elements
i[c]=a)[2]=s(e,t,n))return!0}return!1}}function xe(i){return 1<i.length?function(e,t,n){for(var r=i.length;r--;)if(!i[r](e,t,n))return!1;return!0}:i[0]}function be(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function we(d,h,g,v,y,e){return v&&!v[S]&&(v=we(v)),y&&!y[S]&&(y=we(y,e)),se(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,
// Get initial elements from seed or context
c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)oe(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),
// Prefilter to get matcher input, preserving a map for seed-results synchronization
f=!d||!e&&h?c:be(c,s,d,n,r),p=g?// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
y||(e?d:l||v)?// ...intermediate processing is necessary
[]:// ...otherwise use results directly
t:f;// Find primary matches
// Apply postFilter
if(g&&g(f,p,n,r),v)for(i=be(p,u),v(i,[],n,r),// Un-match failing elements by moving them back to matcherIn
o=i.length;o--;)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a));if(e){if(y||d){if(y){for(
// Get the final matcherOut by condensing this intermediate into postFinder contexts
i=[],o=p.length;o--;)(a=p[o])&&
// Restore matcherIn since elem is not yet a final match
i.push(f[o]=a);y(null,p=[],i,r)}// Move matched elements from seed to results to keep them synchronized
for(o=p.length;o--;)(a=p[o])&&-1<(i=y?O(e,a):s[o])&&(e[i]=!(t[i]=a))}// Add elements to results, through postFinder if defined
}else p=be(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):L.apply(t,p)})}function Te(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,
// The foundational matcher ensures that elements are reachable from top-level context(s)
u=me(function(e){return e===i},a,!0),l=me(function(e){return-1<O(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));// Avoid hanging onto element (issue #299)
return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[me(xe(c),t)];else{// Return special upon seeing a positional matcher
if((t=b.filter[e[s].type].apply(null,e[s].matches))[S]){for(
// Find the next relative operator (if any) for proper handling
n=++s;n<r&&!b.relative[e[n].type];n++);return we(1<s&&xe(c),1<s&&ye(// If the preceding token was a descendant combinator, insert an implicit any-element `*`
e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(B,"$1"),t,s<n&&Te(e.slice(s,n)),n<r&&Te(e=e.slice(n)),n<r&&ye(e))}c.push(t)}return xe(c)}return ve.prototype=b.filters=b.pseudos,b.setFilters=new ve,h=oe.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);for(a=e,s=[],u=b.preFilter;a;){// Filters
for(o in
// Comma and first run
n&&!(r=F.exec(a))||(r&&(
// Don't consume trailing commas as valid
a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,// Combinators
(r=_.exec(a))&&(n=r.shift(),i.push({value:n,
// Cast descendant combinators to space
type:r[0].replace(B," ")}),a=a.slice(n.length)),b.filter)!(r=V[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}// Return the length of the invalid excess
// if we're just parsing
// Otherwise, throw an error or return tokens
return t?a.length:a?oe.error(e):// Cache the tokens
x(e,s).slice(0)},f=oe.compile=function(e,t
/* Internal Use Only */){var n,v,y,m,x,r,i=[],o=[],a=D[e+" "];if(!a){for(
// Generate a function of recursive functions that can be used to check each element
t||(t=h(e)),n=t.length;n--;)(a=Te(t[n]))[S]?i.push(a):o.push(a);// Cache the compiled function
// Save selector and tokenization
(a=D(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,
// We must always have either seed elements or outermost context
d=e||x&&b.find.TAG("*",i),
// Use integer dirruns iff this is the outermost matcher
h=k+=null==p?1:Math.random()||.1,g=d.length;// Add elements passing elementMatchers directly to results
// Support: IE<9, Safari
// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
for(i&&(w=t===C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){for(a=0,t||o.ownerDocument===C||(T(o),n=!E);s=v[a++];)if(s(o,t||C,n)){r.push(o);break}i&&(k=h)}// Track unmatched elements for set filters
m&&(
// They will have gone through all possible matchers
(o=!s&&o)&&u--,// Lengthen the array for every element, matched or not
e&&c.push(o))}// `i` is now the count of elements visited above, and adding it to `matchedCount`
// makes the latter nonnegative.
// Apply set filters to unmatched elements
// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
// no element matchers and no seed.
// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
// case, which will result in a "00" `matchedCount` that differs from `i` but is also
// numerically zero.
if(u+=l,m&&l!==u){for(a=0;s=y[a++];)s(c,f,t,n);if(e){
// Reintegrate element matches to eliminate the need for sorting
if(0<u)for(;l--;)c[l]||f[l]||(f[l]=j.call(r));// Discard index placeholder values to get only actual matches
f=be(f)}// Add matches to results
L.apply(r,f),// Seedless set matches succeeding multiple successful matchers stipulate sorting
i&&!e&&0<f.length&&1<u+y.length&&oe.uniqueSort(r)}// Override manipulation of globals by nested matchers
return i&&(k=h,w=p),c},m?se(r):r))).selector=e}return a},
/**
         * A low-level selection function that works with Sizzle's compiled
         *  selector functions
         * @param {String|Function} selector A selector or a pre-compiled
         *  selector function built with Sizzle.compile
         * @param {Element} context
         * @param {Array} [results]
         * @param {Array} [seed] A set of elements to match against
         */
g=oe.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);// Try to minimize operations if there is only one selector in the list and no seed
// (the latter of which guarantees us context)
if(n=n||[],1===c.length){if(2<(
// Reduce context if the leading compound selector is an ID
o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(Z,ee),t)||[])[0]))return n;// Precompiled matchers will still verify ancestry, so step up a level
l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}// Fetch a seed set for right-to-left matching
for(i=V.needsContext.test(e)?0:o.length;i--&&(a=o[i],!b.relative[s=a.type]);)if((u=b.find[s])&&(r=u(a.matches[0].replace(Z,ee),K.test(o[0].type)&&ge(t.parentNode)||t))){if(
// If seed is empty or no tokens remain, we can return early
o.splice(i,1),!(e=r.length&&ye(o)))return L.apply(n,r),n;break}}// Compile and execute a filtering function if one is not provided
// Provide `match` to avoid retokenization if we modified the selector above
// Compile and execute a filtering function if one is not provided
// Provide `match` to avoid retokenization if we modified the selector above
return(l||f(e,c))(r,t,!E,n,!t||K.test(e)&&ge(t.parentNode)||t),n},// One-time assignments
// Sort stability
d.sortStable=S.split("").sort(N).join("")===S,// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
d.detectDuplicates=!!l,// Initialize against the default document
T(),// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
d.sortDetached=ue(function(e){
// Should return 1, but returns 4 (following)
return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
ue(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||le("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),// Support: IE<9
// Use defaultValue in place of getAttribute("value")
d.attributes&&ue(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||le("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
ue(function(e){return null==e.getAttribute("disabled")})||le(P,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),oe}(C);S.find=h,S.expr=h.selectors,// Deprecated
S.expr[":"]=S.expr.pseudos,S.uniqueSort=S.unique=h.uniqueSort,S.text=h.getText,S.isXMLDoc=h.isXML,S.contains=h.contains,S.escapeSelector=h.escape;var T=function(e,t,n){for(var r=[],i=void 0!==n;(e=e[t])&&9!==e.nodeType;)if(1===e.nodeType){if(i&&S(e).is(n))break;r.push(e)}return r},k=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},D=S.expr.match.needsContext;function N(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var A=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;// Implement the identical functionality for filter and not
function j(e,n,r){return m(n)?S.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):// Single element
n.nodeType?S.grep(e,function(e){return e===n!==r}):// Arraylike of elements (jQuery, arguments, Array)
"string"!=typeof n?S.grep(e,function(e){return-1<i.call(n,e)!==r}):S.filter(n,e,r)}S.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?S.find.matchesSelector(r,e)?[r]:[]:S.find.matches(e,S.grep(t,function(e){return 1===e.nodeType}))},S.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(S(e).filter(function(){for(t=0;t<r;t++)if(S.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)S.find(e,i[t],n);return 1<r?S.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,// If this is a positional/relative selector, check membership in the returned set
// so $("p:first").is("p:last") won't return true for a doc with two "p".
"string"==typeof e&&D.test(e)?S(e):e||[],!1).length}});// Initialize a jQuery object
// A central reference to the root jQuery(document)
var q,
// A simple way to check for HTML strings
// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
// Strict HTML recognition (#11290: must start with <)
// Shortcut simple #id case for speed
L=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;// Give the init function the jQuery prototype for later instantiation
(S.fn.init=function(e,t,n){var r,i;// HANDLE: $(""), $(null), $(undefined), $(false)
if(!e)return this;// Method init() accepts an alternate rootjQuery
// so migrate can support jQuery.sub (gh-2101)
// Handle HTML strings
if(n=n||q,"string"!=typeof e)return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):// Execute immediately if ready is not present
e(S):S.makeArray(e,this);// Match html or make sure no context is specified for #id
if(!(
// Assume that strings that start and end with <> are HTML and skip the regex check
r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:L.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);// HANDLE: $(DOMElement)
// HANDLE: $(html) -> $(array)
if(r[1]){// HANDLE: $(html, props)
if(t=t instanceof S?t[0]:t,// Option to run scripts is true for back-compat
// Intentionally let the error be thrown if parseHTML is not present
S.merge(this,S.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),A.test(r[1])&&S.isPlainObject(t))for(r in t)
// Properties of context are called as methods if possible
m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this;// HANDLE: $(#id)
}// HANDLE: $(expr, $(...))
return(i=E.getElementById(r[2]))&&(
// Inject the element directly into the jQuery object
this[0]=i,this.length=1),this}).prototype=S.fn,// Initialize central reference
q=S(E);var H=/^(?:parents|prev(?:Until|All))/,
// Methods guaranteed to produce a unique set when starting from a unique set
O={children:!0,contents:!0,next:!0,prev:!0};function P(e,t){for(;(e=e[t])&&1!==e.nodeType;);return e}S.fn.extend({has:function(e){var t=S(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(S.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&S(e);// Positional selectors never match, since there's no _selection_ context
if(!D.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)
// Always skip document fragments
if(n.nodeType<11&&(a?-1<a.index(n):// Don't pass non-elements to Sizzle
1===n.nodeType&&S.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?S.uniqueSort(o):o)},
// Determine the position of an element within the set
index:function(e){
// No argument, return index in parent
return e?// Index in selector
"string"==typeof e?i.call(S(e),this[0]):i.call(this,// If it receives a jQuery object, the first element is used
e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(S.uniqueSort(S.merge(this.get(),S(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),S.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return T(e,"parentNode")},parentsUntil:function(e,t,n){return T(e,"parentNode",n)},next:function(e){return P(e,"nextSibling")},prev:function(e){return P(e,"previousSibling")},nextAll:function(e){return T(e,"nextSibling")},prevAll:function(e){return T(e,"previousSibling")},nextUntil:function(e,t,n){return T(e,"nextSibling",n)},prevUntil:function(e,t,n){return T(e,"previousSibling",n)},siblings:function(e){return k((e.parentNode||{}).firstChild,e)},children:function(e){return k(e.firstChild)},contents:function(e){return N(e,"iframe")?e.contentDocument:(// Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
// Treat the template element as a regular one in browsers that
// don't support it.
N(e,"template")&&(e=e.content||e),S.merge([],e.childNodes))}},function(r,i){S.fn[r]=function(e,t){var n=S.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=S.filter(t,n)),1<this.length&&(
// Remove duplicates
O[r]||S.uniqueSort(n),// Reverse order for parents* and prev-derivatives
H.test(r)&&n.reverse()),this.pushStack(n)}});var M=/[^\x20\t\r\n\f]+/g;// Convert String-formatted options into Object-formatted ones
function R(e){return e}function I(e){throw e}function W(e,t,n,r){var i;try{
// Check for promise aspect first to privilege synchronous behavior
e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):
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
S.Callbacks=function(r){var e,n;
// Convert options from String-formatted to Object-formatted if needed
// (we check in cache first)
r="string"==typeof r?(e=r,n={},S.each(e.match(M)||[],function(e,t){n[t]=!0}),n):S.extend({},r);var// Flag to know if list is currently firing
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
u=[],
// Index of currently firing callback (modified by add/remove as needed)
l=-1,
// Fire callbacks
c=function(){for(
// Enforce single-firing
a=a||r.once,// Execute callbacks for all pending executions,
// respecting firingIndex overrides and runtime changes
o=i=!0;u.length;l=-1)for(t=u.shift();++l<s.length;)
// Run callback and check for early termination
!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(
// Jump to end and forget the data so .add doesn't re-fire
l=s.length,t=!1);// Forget the data if we're done with it
r.memory||(t=!1),i=!1,// Clean up if we're done firing for good
a&&(
// Keep an empty list if we have data for future add calls
s=t?[]:"")},
// Actual Callbacks object
f={
// Add a callback or a collection of callbacks to the list
add:function(){return s&&(
// If we have memory from a past run, we should fire after adding
t&&!i&&(l=s.length-1,u.push(t)),function n(e){S.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&
// Inspect recursively
n(t)})}(arguments),t&&!i&&c()),this},
// Remove a callback from the list
remove:function(){return S.each(arguments,function(e,t){for(var n;-1<(n=S.inArray(t,s,n));)s.splice(n,1),// Handle firing indexes
n<=l&&l--}),this},
// Check if a given callback is in the list.
// If no argument is given, return whether or not list has callbacks attached.
has:function(e){return e?-1<S.inArray(e,s):0<s.length},
// Remove all callbacks from the list
empty:function(){return s&&(s=[]),this},
// Disable .fire and .add
// Abort any current/pending executions
// Clear all callbacks and values
disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},
// Disable .fire
// Also disable .add unless we have memory (since it would have no effect)
// Abort any pending executions
lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},
// Call all callbacks with the given context and arguments
fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},
// Call all the callbacks with the given arguments
fire:function(){return f.fireWith(this,arguments),this},
// To know if the callbacks have already been called at least once
fired:function(){return!!o}};return f},S.extend({Deferred:function(e){var o=[// action, add listener, callbacks,
// ... .then handlers, argument index, [final state]
["notify","progress",S.Callbacks("memory"),S.Callbacks("memory"),2],["resolve","done",S.Callbacks("once memory"),S.Callbacks("once memory"),0,"resolved"],["reject","fail",S.Callbacks("once memory"),S.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},catch:function(e){return a.then(null,e)},
// Keep pipe for back-compat
pipe:function(){var i=arguments;return S.Deferred(function(r){S.each(o,function(e,t){
// Map tuples (progress, done, fail) to arguments (done, fail, progress)
var n=m(i[t[4]])&&i[t[4]];// deferred.progress(function() { bind to newDefer or newDefer.notify })
// deferred.done(function() { bind to newDefer or newDefer.resolve })
// deferred.fail(function() { bind to newDefer or newDefer.reject })
s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;// Support: Promises/A+ section 2.3.3.3.3
// https://promisesaplus.com/#point-59
// Ignore double-resolution attempts
if(!(i<u)){// Support: Promises/A+ section 2.3.1
// https://promisesaplus.com/#point-48
if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");// Support: Promises/A+ sections 2.3.3.1, 3.5
// https://promisesaplus.com/#point-54
// https://promisesaplus.com/#point-75
// Retrieve `then` only once
t=e&&(// Support: Promises/A+ section 2.3.4
// https://promisesaplus.com/#point-64
// Only check objects and functions for thenability
"object"===Gt(e)||"function"==typeof e)&&e.then,// Handle a returned thenable
m(t)?
// Special processors (notify) just wait for resolution
s?t.call(e,l(u,o,R,s),l(u,o,I,s)):(
// ...and disregard older resolution values
u++,t.call(e,l(u,o,R,s),l(u,o,I,s),l(u,o,R,o.notifyWith))):(
// Only substitute handlers pass on context
// and multiple values (non-spec behavior)
a!==R&&(n=void 0,r=[e]),// Process the value(s)
// Default process is resolve
(s||o.resolveWith)(n,r))}},
// Only normal processors (resolve) catch and reject exceptions
t=s?e:function(){try{e()}catch(e){S.Deferred.exceptionHook&&S.Deferred.exceptionHook(e,t.stackTrace),// Support: Promises/A+ section 2.3.3.3.4.1
// https://promisesaplus.com/#point-61
// Ignore post-resolution exceptions
u<=i+1&&(
// Only substitute handlers pass on context
// and multiple values (non-spec behavior)
a!==I&&(n=void 0,r=[e]),o.rejectWith(n,r))}};// Support: Promises/A+ section 2.3.3.3.1
// https://promisesaplus.com/#point-57
// Re-resolve promises immediately to dodge false rejection from
// subsequent errors
i?t():(
// Call an optional hook to record the stack, in case of exception
// since it's otherwise lost when execution goes async
S.Deferred.getStackHook&&(t.stackTrace=S.Deferred.getStackHook()),C.setTimeout(t))}}return S.Deferred(function(e){
// progress_handlers.add( ... )
o[0][3].add(l(0,e,m(r)?r:R,e.notifyWith)),// fulfilled_handlers.add( ... )
o[1][3].add(l(0,e,m(t)?t:R)),// rejected_handlers.add( ... )
o[2][3].add(l(0,e,m(n)?n:I))}).promise()},
// Get a promise for this deferred
// If obj is provided, the promise aspect is added to the object
promise:function(e){return null!=e?S.extend(e,a):a}},s={};// Add list-specific methods
// All done!
return S.each(o,function(e,t){var n=t[2],r=t[5];// promise.progress = list.add
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
o=S.Deferred(),
// subordinate callback factory
a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};// Single- and empty arguments are adopted like Promise.resolve
if(n<=1&&(W(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();// Multiple arguments are aggregated like Promise.all array elements
for(;t--;)W(i[t],a(t),o.reject);return o.promise()}});// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var $=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;S.Deferred.exceptionHook=function(e,t){
// Support: IE 8 - 9 only
// Console exists when dev tools are open, which can happen at any time
C.console&&C.console.warn&&e&&$.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},S.readyException=function(e){C.setTimeout(function(){throw e})};// The deferred used on DOM ready
var B=S.Deferred();// The ready event handler and self cleanup method
function F(){E.removeEventListener("DOMContentLoaded",F),C.removeEventListener("load",F),S.ready()}// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
S.fn.ready=function(e){return B.then(e).catch(function(e){S.readyException(e)}),this},S.extend({
// Is the DOM ready to be used? Set to true once it occurs.
isReady:!1,
// A counter to track how many items to wait for before
// the ready event fires. See #6781
readyWait:1,
// Handle when the DOM is ready
ready:function(e){
// Abort if there are pending holds or we're already ready
(!0===e?--S.readyWait:S.isReady)||(// Remember that the DOM is ready
S.isReady=!0)!==e&&0<--S.readyWait||// If there are functions bound, to execute
B.resolveWith(E,[S])}}),S.ready.then=B.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?
// Handle it asynchronously to allow scripts the opportunity to delay ready
C.setTimeout(S.ready):(
// Use the handy event callback
E.addEventListener("DOMContentLoaded",F),// A fallback to window.onload, that will always work
C.addEventListener("load",F));// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var _=function e(t,n,r,i,o,a,s){var u=0,l=t.length,c=null==r;// Sets many values
if("object"===w(r))for(u in o=!0,r)e(t,n,u,r[u],!0,a,s);// Sets one value
else if(void 0!==i&&(o=!0,m(i)||(s=!0),c&&(
// Bulk operations run against the entire set
n=s?(n.call(t,i),null):(c=n,function(e,t,n){return c.call(S(e),n)})),n))for(;u<l;u++)n(t[u],r,s?i:i.call(t[u],u,n(t[u],r)));return o?t:// Gets
c?n.call(t):l?n(t[0],r):a},z=/^-ms-/,X=/-([a-z])/g;// Matches dashed string for camelizing
// Used by camelCase as callback to replace()
function U(e,t){return t.toUpperCase()}// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function V(e){return e.replace(z,"ms-").replace(X,U)}var G=function(e){
// Accepts only:
//  - Node
//    - Node.ELEMENT_NODE
//    - Node.DOCUMENT_NODE
//  - Object
//    - Any
return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function Y(){this.expando=S.expando+Y.uid++}Y.uid=1,Y.prototype={cache:function(e){
// Check if the owner object already has a cache
var t=e[this.expando];// If not, create one
return t||(t={},// We can accept data for non-element nodes in modern browsers,
// but we should not, see #8335.
// Always return an empty object.
G(e)&&(
// If it is a node unlikely to be stringify-ed or looped over
// use plain assignment
e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);// Handle: [ owner, key, value ] args
// Always use camelCase key (gh-2257)
if("string"==typeof t)i[V(t)]=n;// Handle: [ owner, { properties } ] args
else
// Copy the properties one-by-one to the cache object
for(r in t)i[V(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):// Always use camelCase key (gh-2257)
e[this.expando]&&e[this.expando][V(t)]},access:function(e,t,n){
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
t=Array.isArray(t)?t.map(V):(t=V(t))in r?[t]:t.match(M)||[]).length;for(;n--;)delete r[t[n]]}// Remove the expando if there's no more data
(void 0===t||S.isEmptyObject(r))&&(
// Support: Chrome <=35 - 45
// Webkit & Blink performance suffers when deleting properties
// from DOM nodes, so set to undefined instead
// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!S.isEmptyObject(t)}};var Q=new Y,J=new Y,K=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Z=/[A-Z]/g;function ee(e,t,n){var r,i;// If nothing was found internally, try to fetch any
// data from the HTML5 data-* attribute
if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(Z,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:// Only convert to a number if it doesn't change the string
i===+i+""?+i:K.test(i)?JSON.parse(i):i)}catch(e){}// Make sure we set the data so it isn't changed later
J.set(e,t,n)}else n=void 0;return n}S.extend({hasData:function(e){return J.hasData(e)||Q.hasData(e)},data:function(e,t,n){return J.access(e,t,n)},removeData:function(e,t){J.remove(e,t)},
// TODO: Now that all calls to _data and _removeData have been replaced
// with direct calls to dataPriv methods, these can be deprecated.
_data:function(e,t,n){return Q.access(e,t,n)},_removeData:function(e,t){Q.remove(e,t)}}),S.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;// Gets all values
if(void 0!==n)// Sets multiple values
return"object"===Gt(n)?this.each(function(){J.set(this,n)}):_(this,function(e){var t;// The calling jQuery object (element matches) is not empty
// (and therefore has an element appears at this[ 0 ]) and the
// `value` parameter was not undefined. An empty jQuery object
// will result in `undefined` for elem = this[ 0 ] which will
// throw an exception if an attempt to read a data cache is made.
if(o&&void 0===e)return void 0!==(
// Attempt to get data from the cache
// The key will always be camelCased in Data
t=J.get(o,n))?t:void 0!==(// Attempt to "discover" the data in
// HTML5 custom data-* attrs
t=ee(o,n))?t:// We tried really hard, but the data doesn't exist.
void 0;// Set the data...
this.each(function(){
// We always store the camelCased key
J.set(this,n,e)})},null,e,1<arguments.length,null,!0);if(this.length&&(i=J.get(o),1===o.nodeType&&!Q.get(o,"hasDataAttrs"))){for(t=a.length;t--;)
// Support: IE 11 only
// The attrs elements can be null (#14894)
a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=V(r.slice(5)),ee(o,r,i[r]));Q.set(o,"hasDataAttrs",!0)}return i},removeData:function(e){return this.each(function(){J.remove(this,e)})}}),S.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Q.get(e,t),// Speed up dequeue by getting out quickly if this is just a lookup
n&&(!r||Array.isArray(n)?r=Q.access(e,t,S.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=S.queue(e,t),r=n.length,i=n.shift(),o=S._queueHooks(e,t);// If the fx queue is dequeued, always remove the progress sentinel
"inprogress"===i&&(i=n.shift(),r--),i&&(
// Add a progress sentinel to prevent the fx queue from being
// automatically dequeued
"fx"===t&&n.unshift("inprogress"),// Clear up the last queue stop function
delete o.stop,i.call(e,function(){S.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},
// Not public - generate a queueHooks object, or return the current one
_queueHooks:function(e,t){var n=t+"queueHooks";return Q.get(e,n)||Q.access(e,n,{empty:S.Callbacks("once memory").add(function(){Q.remove(e,[t+"queue",n])})})}}),S.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?S.queue(this[0],t):void 0===n?this:this.each(function(){var e=S.queue(this,t,n);// Ensure a hooks for this queue
S._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&S.dequeue(this,t)})},dequeue:function(e){return this.each(function(){S.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},
// Get a promise resolved when queues of a certain type
// are emptied (fx is the type by default)
promise:function(e,t){var n,r=1,i=S.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";a--;)(n=Q.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var te=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ne=new RegExp("^(?:([+-])=|)("+te+")([a-z%]*)$","i"),re=["Top","Right","Bottom","Left"],ie=function(e,t){// Inline style trumps all
return"none"===(
// isHiddenWithinTree might be called from jQuery#filter function;
// in that case, element will be second argument
e=t||e).style.display||""===e.style.display&&// Otherwise, check computed style
// Support: Firefox <=43 - 45
// Disconnected elements can have computed display: none, so first confirm that elem is
// in the document.
S.contains(e.ownerDocument,e)&&"none"===S.css(e,"display")},oe=function(e,t,n,r){var i,o,a={};// Remember the old values, and insert the new ones
for(o in t)a[o]=e.style[o],e.style[o]=t[o];// Revert the old values
for(o in i=n.apply(e,r||[]),t)e.style[o]=a[o];return i};function ae(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return S.css(e,t,"")},u=s(),l=n&&n[3]||(S.cssNumber[t]?"":"px"),
// Starting value computation is required for potential unit mismatches
c=(S.cssNumber[t]||"px"!==l&&+u)&&ne.exec(S.css(e,t));if(c&&c[3]!==l){for(
// Support: Firefox <=54
// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
u/=2,// Trust units reported by jQuery.css
l=l||c[3],// Iteratively approximate from a nonzero starting point
c=+u||1;a--;)
// Evaluate and update our best guess (doubling guesses that zero out).
// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
S.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,S.style(e,t,c+l),// Make sure we update the tween properties later on
n=n||[]}return n&&(c=+c||+u||0,// Apply relative offset (+=/-=) if specified
i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var se={};function ue(e,t){// Determine new display value for elements that need to change
for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?(
// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
// check is required in this first loop unless we have a nonempty display value (either
// inline or about-to-be-restored)
"none"===n&&(l[c]=Q.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ie(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=se[s])||(o=a.body.appendChild(a.createElement(s)),u=S.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),se[s]=u)))):"none"!==n&&(l[c]="none",// Remember what we're overwriting
Q.set(r,"display",n)));// Set the display of the elements in a second loop to avoid constant reflow
for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}S.fn.extend({show:function(){return ue(this,!0)},hide:function(){return ue(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ie(this)?S(this).show():S(this).hide()})}});var le=/^(?:checkbox|radio)$/i,ce=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,fe=/^$|^module$|\/(?:java|ecma)script/i,pe={
// Support: IE <=9 only
option:[1,"<select multiple='multiple'>","</select>"],
// XHTML parsers do not magically insert elements in the
// same way that tag soup parsers do. So we cannot shorten
// this by omitting <tbody> or other required elements.
thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function de(e,t){
// Support: IE <=9 - 11 only
// Use typeof to avoid zero-argument method invocation on host objects (#15151)
var n;return n=void 0!==e.getElementsByTagName?e.getElementsByTagName(t||"*"):void 0!==e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&N(e,t)?S.merge([e],n):n}// Mark scripts as having already been evaluated
function he(e,t){for(var n=0,r=e.length;n<r;n++)Q.set(e[n],"globalEval",!t||Q.get(t[n],"globalEval"))}// Support: IE <=9 only
pe.optgroup=pe.option,pe.tbody=pe.tfoot=pe.colgroup=pe.caption=pe.thead,pe.th=pe.td;var ge,ve,ye=/<|&#?\w+;/;function me(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)
// Add nodes directly
if("object"===w(o))
// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
S.merge(p,o.nodeType?[o]:o);// Convert non-html into a text node
else if(ye.test(o)){for(a=a||f.appendChild(t.createElement("div")),// Deserialize a standard representation
s=(ce.exec(o)||["",""])[1].toLowerCase(),u=pe[s]||pe._default,a.innerHTML=u[1]+S.htmlPrefilter(o)+u[2],// Descend through wrappers to the right content
c=u[0];c--;)a=a.lastChild;// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
S.merge(p,a.childNodes),// Ensure the created nodes are orphaned (#12392)
(// Remember the top-level container
a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));// Convert html into DOM nodes
// Remove wrapper from fragment
for(f.textContent="",d=0;o=p[d++];)
// Skip elements already in the context collection (trac-4087)
if(r&&-1<S.inArray(o,r))i&&i.push(o);else// Capture executables
if(l=S.contains(o.ownerDocument,o),// Append to fragment
a=de(f.appendChild(o),"script"),// Preserve script evaluation history
l&&he(a),n)for(c=0;o=a[c++];)fe.test(o.type||"")&&n.push(o);return f}ge=E.createDocumentFragment().appendChild(E.createElement("div")),// Support: Android 4.0 - 4.3 only
// Check state lost if the name is set (#11217)
// Support: Windows Web Apps (WWA)
// `name` and `type` must use .setAttribute for WWA (#14901)
(ve=E.createElement("input")).setAttribute("type","radio"),ve.setAttribute("checked","checked"),ve.setAttribute("name","t"),ge.appendChild(ve),// Support: Android <=4.1 only
// Older WebKit doesn't clone checked state correctly in fragments
y.checkClone=ge.cloneNode(!0).cloneNode(!0).lastChild.checked,// Support: IE <=11 only
// Make sure textarea (and checkbox) defaultValue is properly cloned
ge.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!ge.cloneNode(!0).lastChild.defaultValue;var xe=E.documentElement,be=/^key/,we=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Te=/^([^.]*)(?:\.(.+)|)/;function Ce(){return!0}function Ee(){return!1}// Support: IE <=9 only
// See #13393 for more info
function Se(){try{return E.activeElement}catch(e){}}function ke(e,t,n,r,i,o){var a,s;// Types can be a map of types/handlers
if("object"===Gt(t)){for(s in
// ( types-Object, selector, data )
"string"!=typeof n&&(
// ( types-Object, data )
r=r||n,n=void 0),t)ke(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(
// ( types, fn )
i=n,r=n=void 0):null==i&&("string"==typeof n?(
// ( types, selector, fn )
i=r,r=void 0):(
// ( types, data, fn )
i=r,r=n,n=void 0)),!1===i)i=Ee;else if(!i)return e;return 1===o&&(a=i,// Use same guid so caller can remove using origFn
(i=function(e){
// Can use an empty set, since event contains the info
return S().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=S.guid++)),e.each(function(){S.event.add(this,t,i,r,n)})}
/*
       * Helper functions for managing events -- not part of the public interface.
       * Props to Dean Edwards' addEvent library for many of the ideas.
       */S.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Q.get(t);// Don't attach events to noData or text/comment nodes (but allow plain objects)
if(v)for(// Caller can pass in an object of custom data in lieu of the handler
n.handler&&(n=(o=n).handler,i=o.selector),// Ensure that invalid selectors throw exceptions at attach time
// Evaluate against documentElement in case elem is a non-element node (e.g., document)
i&&S.find.matchesSelector(xe,i),// Make sure that the handler has a unique ID, used to find/remove it later
n.guid||(n.guid=S.guid++),// Init the element's event structure and main handler, if this is the first
(u=v.events)||(u=v.events={}),(a=v.handle)||(a=v.handle=function(e){
// Discard the second event of a jQuery.event.trigger() and
// when an event is called after a page has unloaded
return void 0!==S&&S.event.triggered!==e.type?S.event.dispatch.apply(t,arguments):void 0}),l=(// Handle multiple events separated by a space
e=(e||"").match(M)||[""]).length;l--;)d=g=(s=Te.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),// There *must* be a type, no attaching namespace-only handlers
d&&(// If event changes its type, use the special event handlers for the changed type
f=S.event.special[d]||{},// If selector defined, determine special event api type, otherwise given type
d=(i?f.delegateType:f.bindType)||d,// Update special based on newly reset type
f=S.event.special[d]||{},// handleObj is passed to all event handlers
c=S.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&S.expr.match.needsContext.test(i),namespace:h.join(".")},o),// Init the event handler queue if we're the first
(p=u[d])||((p=u[d]=[]).delegateCount=0,// Only use addEventListener if the special events handler returns false
f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),// Add to the element's handler list, delegates in front
i?p.splice(p.delegateCount++,0,c):p.push(c),// Keep track of which events have ever been used, for event optimization
S.event.global[d]=!0)},
// Detach an event or set of events from an element
remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Q.hasData(e)&&Q.get(e);if(v&&(u=v.events)){for(l=(// Once for each type.namespace in types; type may be omitted
t=(t||"").match(M)||[""]).length;l--;)// Unbind all events (on this namespace, if provided) for the element
if(d=g=(s=Te.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){for(f=S.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),// Remove matching events
a=o=p.length;o--;)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));// Remove generic event handler if we removed something and no more handlers exist
// (avoids potential for endless recursion during removal of special event handlers)
a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||S.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)S.event.remove(e,d+t[l],n,r,!0);// Remove data and the expando if it's no longer used
S.isEmptyObject(u)&&Q.remove(e,"handle events")}},dispatch:function(e){
// Make a writable jQuery.Event from the native event object
var t,n,r,i,o,a,s=S.event.fix(e),u=new Array(arguments.length),l=(Q.get(this,"events")||{})[s.type]||[],c=S.event.special[s.type]||{};for(// Use the fix-ed jQuery.Event rather than the (read-only) native event
u[0]=s,t=1;t<arguments.length;t++)u[t]=arguments[t];// Call the preDispatch hook for the mapped type, and let it bail if desired
if(s.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,s)){for(// Determine handlers
a=S.event.handlers.call(this,s,l),// Run delegates first; they may want to stop propagation beneath us
t=0;(i=a[t++])&&!s.isPropagationStopped();)for(s.currentTarget=i.elem,n=0;(o=i.handlers[n++])&&!s.isImmediatePropagationStopped();)
// Triggered event must either 1) have no namespace, or 2) have namespace(s)
// a subset or equal to those in the bound event (both can have no namespace).
s.rnamespace&&!s.rnamespace.test(o.namespace)||(s.handleObj=o,s.data=o.data,void 0!==(r=((S.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,u))&&!1===(s.result=r)&&(s.preventDefault(),s.stopPropagation()));// Call the postDispatch hook for the mapped type
return c.postDispatch&&c.postDispatch.call(this,s),s.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;// Find delegate handlers
if(u&&// Support: IE <=9
// Black-hole SVG <use> instance trees (trac-13180)
l.nodeType&&// Support: Firefox <=42
// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
// Support: IE 11 only
// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)
// Don't check non-elements (#13208)
// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[// Don't conflict with Object.prototype properties (#13203)
i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<S(i,this).index(l):S.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}// Add the remaining (directly-bound) handlers
return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(S.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[S.expando]?e:new S.Event(e)},special:{load:{
// Prevent triggered image.load events from bubbling to window.load
noBubble:!0},focus:{
// Fire native event if possible so blur/focus sequence is correct
trigger:function(){if(this!==Se()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===Se()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{
// For checkbox, fire native event so checked state will be right
trigger:function(){if("checkbox"===this.type&&this.click&&N(this,"input"))return this.click(),!1},
// For cross-browser consistency, don't fire native .click() on links
_default:function(e){return N(e.target,"a")}},beforeunload:{postDispatch:function(e){
// Support: Firefox 20+
// Firefox doesn't alert if the returnValue field is not set.
void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},S.removeEvent=function(e,t,n){
// This "if" is needed for plain objects
e.removeEventListener&&e.removeEventListener(t,n)},S.Event=function(e,t){
// Allow instantiation without the 'new' keyword
if(!(this instanceof S.Event))return new S.Event(e,t);// Event object
e&&e.type?(this.originalEvent=e,this.type=e.type,// Events bubbling up the document may have been marked as prevented
// by a handler lower down the tree; reflect the correct value.
this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&// Support: Android <=2.3 only
!1===e.returnValue?Ce:Ee,// Create target properties
// Support: Safari <=6 - 7 only
// Target should not be a text node (#504, #13143)
this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,// Put explicitly provided properties onto the event object
t&&S.extend(this,t),// Create a timestamp if incoming event doesn't have one
this.timeStamp=e&&e.timeStamp||Date.now(),// Mark it as fixed
this[S.expando]=!0},// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
S.Event.prototype={constructor:S.Event,isDefaultPrevented:Ee,isPropagationStopped:Ee,isImmediatePropagationStopped:Ee,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ce,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ce,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ce,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},// Includes all common event props including KeyEvent and MouseEvent specific props
S.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;// Add which for key events
return null==e.which&&be.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:// Add which for click: 1 === left; 2 === middle; 3 === right
!e.which&&void 0!==t&&we.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},S.event.addProp),// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
S.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){S.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;// For mouseenter/leave call the handler if related is outside the target.
// NB: No relatedTarget if the mouse left/entered the browser window
return n&&(n===this||S.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),S.fn.extend({on:function(e,t,n,r){return ke(this,e,t,n,r)},one:function(e,t,n,r){return ke(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)
// ( event )  dispatched jQuery.Event
return r=e.handleObj,S(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"!==Gt(e))return!1!==t&&"function"!=typeof t||(
// ( types [, fn] )
n=t,t=void 0),!1===n&&(n=Ee),this.each(function(){S.event.remove(this,e,n,t)});
// ( types-object [, selector] )
for(i in e)this.off(i,t,e[i]);return this}});var
/* eslint-disable max-len */
// See https://github.com/eslint/eslint/issues/3229
De=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
/* eslint-enable */
// Support: IE <=10 - 11, Edge 12 - 13 only
// In IE/Edge using regex groups here causes severe slowdowns.
// See https://connect.microsoft.com/IE/feedback/details/1736512/
Ne=/<script|<style|<link/i,
// checked="checked" or checked
Ae=/checked\s*(?:[^=]|=\s*.checked.)/i,je=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;// Prefer a tbody over its parent table for containing new rows
function qe(e,t){return N(e,"table")&&N(11!==t.nodeType?t:t.firstChild,"tr")&&S(e).children("tbody")[0]||e}// Replace/restore the type attribute of script elements for safe DOM manipulation
function Le(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function He(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Oe(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){// 1. Copy private data: events, handlers, etc.
if(Q.hasData(e)&&(o=Q.access(e),a=Q.set(t,o),l=o.events))for(i in delete a.handle,a.events={},l)for(n=0,r=l[i].length;n<r;n++)S.event.add(t,i,l[i][n]);// 2. Copy user data
J.hasData(e)&&(s=J.access(e),u=S.extend({},s),J.set(t,u))}}// Fix IE bugs, see support tests
function Pe(n,r,i,o){
// Flatten any nested arrays
r=g.apply([],r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);// We can't cloneNode fragments that contain checked, in WebKit
if(h||1<f&&"string"==typeof d&&!y.checkClone&&Ae.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),Pe(t,r,i,o)});if(f&&(t=(e=me(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){// Use the original fragment for the last item
// instead of the first because it can end up
// being emptied incorrectly in certain situations (#8070).
for(s=(a=S.map(de(e,"script"),Le)).length;c<f;c++)u=e,c!==p&&(u=S.clone(u,!0,!0),// Keep references to cloned scripts for later restoration
s&&
// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
S.merge(a,de(u,"script"))),i.call(n[c],u,c);if(s)// Evaluate executable scripts on first document insertion
for(l=a[a.length-1].ownerDocument,// Reenable scripts
S.map(a,He),c=0;c<s;c++)u=a[c],fe.test(u.type||"")&&!Q.access(u,"globalEval")&&S.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?
// Optional AJAX dependency, but won't run scripts if not present
S._evalUrl&&S._evalUrl(u.src):b(u.textContent.replace(je,""),l,u))}return n}function Me(e,t,n){for(var r,i=t?S.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||S.cleanData(de(r)),r.parentNode&&(n&&S.contains(r.ownerDocument,r)&&he(de(r,"script")),r.parentNode.removeChild(r));return e}S.extend({htmlPrefilter:function(e){return e.replace(De,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=S.contains(e.ownerDocument,e);// Fix IE cloning issues
if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||S.isXMLDoc(e)))for(
// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
a=de(c),r=0,i=(o=de(e)).length;r<i;r++)s=o[r],u=a[r],void 0,// Fails to persist the checked state of a cloned checkbox or radio button.
"input"===(l=u.nodeName.toLowerCase())&&le.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);// Copy the events from the original to the clone
if(t)if(n)for(o=o||de(e),a=a||de(c),r=0,i=o.length;r<i;r++)Oe(o[r],a[r]);else Oe(e,c);// Preserve script evaluation history
// Return the cloned set
return 0<(a=de(c,"script")).length&&he(a,!f&&de(e,"script")),c},cleanData:function(e){for(var t,n,r,i=S.event.special,o=0;void 0!==(n=e[o]);o++)if(G(n)){if(t=n[Q.expando]){if(t.events)for(r in t.events)i[r]?S.event.remove(n,r):S.removeEvent(n,r,t.handle);// Support: Chrome <=35 - 45+
// Assign undefined instead of using delete, see Data#remove
n[Q.expando]=void 0}n[J.expando]&&(
// Support: Chrome <=35 - 45+
// Assign undefined instead of using delete, see Data#remove
n[J.expando]=void 0)}}}),S.fn.extend({detach:function(e){return Me(this,e,!0)},remove:function(e){return Me(this,e)},text:function(e){return _(this,function(e){return void 0===e?S.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Pe(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||qe(this,e).appendChild(e)})},prepend:function(){return Pe(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=qe(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Pe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Pe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(
// Prevent memory leaks
S.cleanData(de(e,!1)),// Remove any remaining nodes
e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return S.clone(this,e,t)})},html:function(e){return _(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;// See if we can take a shortcut and just use innerHTML
if("string"==typeof e&&!Ne.test(e)&&!pe[(ce.exec(e)||["",""])[1].toLowerCase()]){e=S.htmlPrefilter(e);try{for(;n<r;n++)// Remove element nodes and prevent memory leaks
1===(t=this[n]||{}).nodeType&&(S.cleanData(de(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];// Make the changes, replacing each non-ignored context element with the new content
return Pe(this,arguments,function(e){var t=this.parentNode;S.inArray(this,n)<0&&(S.cleanData(de(this)),t&&t.replaceChild(e,this));// Force callback invocation
},n)}}),S.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){S.fn[e]=function(e){for(var t,n=[],r=S(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),S(r[o])[a](t),// Support: Android <=4.0 only, PhantomJS 1 only
// .get() because push.apply(_, arraylike) throws on ancient WebKit
u.apply(n,t.get());return this.pushStack(n)}});var Re=new RegExp("^("+te+")(?!px)[a-z%]+$","i"),Ie=function(e){
// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
// IE throws on elements created in popups
// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},We=new RegExp(re.join("|"),"i");function $e(e,t,n){var r,i,o,a,
// Support: Firefox 51+
// Retrieving style before computed somehow
// fixes an issue with getting wrong values
// on detached elements
s=e.style;// getPropertyValue is needed for:
//   .css('filter') (IE 9 only, #12537)
//   .css('--customProperty) (#3144)
return(n=n||Ie(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||S.contains(e.ownerDocument,e)||(a=S.style(e,t)),// A tribute to the "awesome hack by Dean Edwards"
// Android Browser returns percentage for some values,
// but width seems to be reliably pixels.
// This is against the CSSOM draft spec:
// https://drafts.csswg.org/cssom/#resolved-values
!y.pixelBoxStyles()&&Re.test(a)&&We.test(t)&&(
// Remember the original values
r=s.width,i=s.minWidth,o=s.maxWidth,// Put in the new values to get a computed value out
s.minWidth=s.maxWidth=s.width=a,a=n.width,// Revert the changed values
s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?// Support: IE <=9 - 11 only
// IE returns zIndex value as an integer.
a+"":a}function Be(e,t){
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
if(u){s.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",u.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",xe.appendChild(s).appendChild(u);var e=C.getComputedStyle(u);n="1%"!==e.top,// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
a=12===t(e.marginLeft),// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
// Some styles come back with percentage values, even though they shouldn't
u.style.right="60%",o=36===t(e.right),// Support: IE 9 - 11 only
// Detect misreporting of content dimensions for box-sizing:border-box elements
r=36===t(e.width),// Support: IE 9 only
// Detect overflow:scroll screwiness (gh-3699)
u.style.position="absolute",i=36===u.offsetWidth||"absolute",xe.removeChild(s),// Nullify the div so it wouldn't be stored in the memory and
// it will also be a sign that checks already performed
u=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s=E.createElement("div"),u=E.createElement("div");// Finish early in limited (non-browser) environments
u.style&&(// Support: IE <=9 - 11 only
// Style of cloned element affects source element cloned (#8908)
u.style.backgroundClip="content-box",u.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===u.style.backgroundClip,S.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),a},scrollboxSize:function(){return e(),i}}))}();var// Swappable if display is none or starts with table
// except "table", "table-cell", or "table-caption"
// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
Fe=/^(none|table(?!-c[ea]).+)/,_e=/^--/,ze={position:"absolute",visibility:"hidden",display:"block"},Xe={letterSpacing:"0",fontWeight:"400"},Ue=["Webkit","Moz","ms"],Ve=E.createElement("div").style;// Return a css property mapped to a potentially vendor prefixed property
// Return a property mapped along what jQuery.cssProps suggests or to
// a vendor prefixed property.
function Ge(e){var t=S.cssProps[e];return t||(t=S.cssProps[e]=function(e){
// Shortcut for names that are not vendor prefixed
if(e in Ve)return e;// Check for vendor prefixed names
for(var t=e[0].toUpperCase()+e.slice(1),n=Ue.length;n--;)if((e=Ue[n]+t)in Ve)return e}(e)||e),t}function Ye(e,t,n){
// Any relative (+/-) values have already been
// normalized at this point
var r=ne.exec(t);return r?// Guard against undefined "subtract", e.g., when used as in cssHooks
Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Qe(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;// Adjustment may not be necessary
if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)
// Both box models exclude margin
"margin"===n&&(u+=S.css(e,n+re[a],!0,i)),// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
r?(
// For "content", subtract padding
"content"===n&&(u-=S.css(e,"padding"+re[a],!0,i)),// For "content" or "padding", subtract border
"margin"!==n&&(u-=S.css(e,"border"+re[a]+"Width",!0,i))):(
// Add padding
u+=S.css(e,"padding"+re[a],!0,i),// For "border" or "margin", add border
"padding"!==n?u+=S.css(e,"border"+re[a]+"Width",!0,i):s+=S.css(e,"border"+re[a]+"Width",!0,i));// Account for positive content-box scroll gutter when requested by providing computedVal
return!r&&0<=o&&(
// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
// Assuming integer scroll gutter, subtract the rest and round down
u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))),u}function Je(e,t,n){
// Start with computed style
var r=Ie(e),i=$e(e,t,r),o="border-box"===S.css(e,"boxSizing",!1,r),a=o;// Support: Firefox <=54
// Return a confounding non-pixel value or feign ignorance, as appropriate.
if(Re.test(i)){if(!n)return i;i="auto"}// Check for style in case a browser which returns unreliable values
// for getComputedStyle silently falls back to the reliable elem.style
// Adjust for the element's box model
return a=a&&(y.boxSizingReliable()||i===e.style[t]),// Fall back to offsetWidth/offsetHeight when value is "auto"
// This happens for inline elements with no explicit setting (gh-3571)
// Support: Android <=4.1 - 4.3 only
// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
("auto"===i||!parseFloat(i)&&"inline"===S.css(e,"display",!1,r))&&(i=e["offset"+t[0].toUpperCase()+t.slice(1)],// offsetWidth/offsetHeight provide border-box values
a=!0),(// Normalize "" and auto
i=parseFloat(i)||0)+Qe(e,t,n||(o?"border":"content"),a,r,// Provide the current computed size to request scroll gutter calculation (gh-3589)
i)+"px"}function Ke(e,t,n,r,i){return new Ke.prototype.init(e,t,n,r,i)}S.extend({
// Add in style property hooks for overriding the default
// behavior of getting and setting a style property
cssHooks:{opacity:{get:function(e,t){if(t){
// We should always get a number back from opacity
var n=$e(e,"opacity");return""===n?"1":n}}}},
// Don't automatically add "px" to these possibly-unitless properties
cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},
// Add in properties whose names you wish to fix before
// setting or getting the value
cssProps:{},
// Get and set the style property on a DOM Node
style:function(e,t,n,r){
// Don't set styles on text and comment nodes
if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){// Make sure that we're working with the right name
var i,o,a,s=V(t),u=_e.test(t),l=e.style;// Make sure that we're working with the right name. We don't
// want to query the value if it is a CSS custom property
// since they are user-defined.
// Check if we're setting a value
if(u||(t=Ge(s)),// Gets hook for the prefixed version, then unprefixed version
a=S.cssHooks[t]||S.cssHooks[s],void 0===n)
// If a hook was provided get the non-computed value from there
return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];// Otherwise just get the value from the style object
// Convert "+=" or "-=" to relative numbers (#7345)
"string"===(o=Gt(n))&&(i=ne.exec(n))&&i[1]&&(n=ae(e,t,i),// Fixes bug #9237
o="number"),// Make sure that null and NaN values aren't set (#7116)
null!=n&&n==n&&(// If a number was passed in, add the unit (except for certain CSS properties)
"number"===o&&(n+=i&&i[3]||(S.cssNumber[s]?"":"px")),// background-* props affect original clone's values
y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),// If a hook was provided, use that value, otherwise just set the specified value
a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=V(t);// Make sure that we're working with the right name. We don't
// want to modify the value if it is a CSS custom property
// since they are user-defined.
// Make numeric if forced or a qualifier was provided and val looks numeric
return _e.test(t)||(t=Ge(s)),// If a hook was provided get the computed value from there
(// Try prefixed name followed by the unprefixed name
a=S.cssHooks[t]||S.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),// Otherwise, if a way to get the computed value exists, use that
void 0===i&&(i=$e(e,t,r)),// Convert "normal" to computed value
"normal"===i&&t in Xe&&(i=Xe[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),S.each(["height","width"],function(e,s){S.cssHooks[s]={get:function(e,t,n){if(t)
// Certain elements can have dimension info if we invisibly show them
// but it must have a current display style that would benefit
return!Fe.test(S.css(e,"display"))||// Support: Safari 8+
// Table columns in Safari have non-zero offsetWidth & zero
// getBoundingClientRect().width unless display is changed.
// Support: IE <=11 only
// Running getBoundingClientRect on a disconnected node
// in IE throws an error.
e.getClientRects().length&&e.getBoundingClientRect().width?Je(e,s,n):oe(e,ze,function(){return Je(e,s,n)})},set:function(e,t,n){var r,i=Ie(e),o="border-box"===S.css(e,"boxSizing",!1,i),a=n&&Qe(e,s,n,o,i);// Account for unreliable border-box dimensions by comparing offset* to computed and
// faking a content-box to get border and padding (gh-3699)
return o&&y.scrollboxSize()===i.position&&(a-=Math.ceil(e["offset"+s[0].toUpperCase()+s.slice(1)]-parseFloat(i[s])-Qe(e,s,"border",!1,i)-.5)),// Convert to pixels if value adjustment is needed
a&&(r=ne.exec(t))&&"px"!==(r[3]||"px")&&(e.style[s]=t,t=S.css(e,s)),Ye(0,t,a)}}}),S.cssHooks.marginLeft=Be(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat($e(e,"marginLeft"))||e.getBoundingClientRect().left-oe(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),// These hooks are used by animate to expand properties
S.each({margin:"",padding:"",border:"Width"},function(i,o){S.cssHooks[i+o]={expand:function(e){for(var t=0,n={},
// Assumes a single number if not a string
r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+re[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(S.cssHooks[i+o].set=Ye)}),S.fn.extend({css:function(e,t){return _(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Ie(e),i=t.length;a<i;a++)o[t[a]]=S.css(e,t[a],!1,r);return o}return void 0!==n?S.style(e,t,n):S.css(e,t)},e,t,1<arguments.length)}}),((S.Tween=Ke).prototype={constructor:Ke,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||S.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(S.cssNumber[n]?"":"px")},cur:function(){var e=Ke.propHooks[this.prop];return e&&e.get?e.get(this):Ke.propHooks._default.get(this)},run:function(e){var t,n=Ke.propHooks[this.prop];return this.options.duration?this.pos=t=S.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Ke.propHooks._default.set(this),this}}).init.prototype=Ke.prototype,// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
(Ke.propHooks={_default:{get:function(e){var t;// Use a property on the element directly when it is not a DOM element,
// or when there is no matching style property that exists.
return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(// Passing an empty string as a 3rd parameter to .css will automatically
// attempt a parseFloat and fallback to a string if the parse fails.
// Simple values such as "10px" are parsed to Float;
// complex values such as "rotate(1rad)" are returned as-is.
t=S.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){
// Use step hook for back compat.
// Use cssHook if its there.
// Use .style if available and use plain properties where available.
S.fx.step[e.prop]?S.fx.step[e.prop](e):1!==e.elem.nodeType||null==e.elem.style[S.cssProps[e.prop]]&&!S.cssHooks[e.prop]?e.elem[e.prop]=e.now:S.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=Ke.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},S.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},S.fx=Ke.prototype.init,// Back compat <1.8 extension point
S.fx.step={};var Ze,et,tt,nt,rt=/^(?:toggle|show|hide)$/,it=/queueHooks$/;function ot(){et&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(ot):C.setTimeout(ot,S.fx.interval),S.fx.tick())}// Animations created synchronously will run synchronously
function at(){return C.setTimeout(function(){Ze=void 0}),Ze=Date.now()}// Generate parameters to create a standard animation
function st(e,t){var n,r=0,i={height:e};// If we include width, step value is 1 to do all cssExpand values,
// otherwise step value is 2 to skip over Left and Right
for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=re[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function ut(e,t,n){for(var r,i=(lt.tweeners[t]||[]).concat(lt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))
// We're done with this property
return r}function lt(o,e,t){var n,a,r=0,i=lt.prefilters.length,s=S.Deferred().always(function(){
// Don't match elem in the :animated selector
delete u.elem}),u=function(){if(a)return!1;for(var e=Ze||at(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);// If there's more to do, yield
return s.notifyWith(o,[l,n,t]),n<1&&i?t:(// If this was an empty animation, synthesize a final progress notification
i||s.notifyWith(o,[l,1,0]),// Resolve the animation and report its conclusion
s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:S.extend({},e),opts:S.extend(!0,{specialEasing:{},easing:S.easing._default},t),originalProperties:e,originalOptions:t,startTime:Ze||at(),duration:t.duration,tweens:[],createTween:function(e,t){var n=S.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,
// If we are going to the end, we want to run all the tweens
// otherwise we skip this part
n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);// Resolve when we played the last frame; otherwise, reject
return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;// camelCase, specialEasing and expand cssHook pass
for(n in e)if(i=t[r=V(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=S.cssHooks[r])&&"expand"in a)// Not quite $.extend, this won't overwrite existing keys.
// Reusing 'index' because we have the correct "name"
for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=lt.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(S._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return S.map(c,ut,l),m(l.opts.start)&&l.opts.start.call(o,l),// Attach callbacks from options
l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),S.fx.timer(S.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}S.Animation=S.extend(lt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return ae(n.elem,e,ne.exec(t),n),n}]},tweener:function(e,t){for(var n,r=0,i=(e=m(e)?(t=e,["*"]):e.match(M)).length;r<i;r++)n=e[r],lt.tweeners[n]=lt.tweeners[n]||[],lt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ie(e),v=Q.get(e,"fxshow");// Queue-skipping animations hijack the fx hooks
// Detect show/hide animations
for(r in n.queue||(null==(a=S._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){
// Ensure the complete handler is called before this completes
p.always(function(){a.unqueued--,S.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],rt.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){
// Pretend to be hidden if this is a "show" and
// there is still data from a stopped show/hide
if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||S.style(e,r)}// Bail out if this is a no-op like .hide().hide()
if((u=!S.isEmptyObject(t))||!S.isEmptyObject(d))for(r in// Restrict "overflow" and "display" styles during box animations
f&&1===e.nodeType&&(
// Support: IE <=9 - 11, Edge 12 - 15
// Record all 3 overflow attributes because IE does not infer the shorthand
// from identically-valued overflowX and overflowY and Edge just mirrors
// the overflowX value there.
n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(// Identify a display type, preferring old show/hide data over the CSS cascade
l=v&&v.display)&&(l=Q.get(e,"display")),"none"===(c=S.css(e,"display"))&&(l?c=l:(
// Get nonempty value(s) by temporarily forcing visibility
ue([e],!0),l=e.style.display||l,c=S.css(e,"display"),ue([e]))),// Animate inline elements as inline-block
("inline"===c||"inline-block"===c&&null!=l)&&"none"===S.css(e,"float")&&(
// Restore the original display value at the end of pure show/hide animations
u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),// Implement show/hide animations
u=!1,d)
// General show/hide setup for this element animation
u||(v?"hidden"in v&&(g=v.hidden):v=Q.access(e,"fxshow",{display:l}),// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
o&&(v.hidden=!g),// Show elements before animating them
g&&ue([e],!0)
/* eslint-disable no-loop-func */,p.done(function(){for(r in
/* eslint-enable no-loop-func */
// The final step of a "hide" animation is actually hiding the element
g||ue([e]),Q.remove(e,"fxshow"),d)S.style(e,r,d[r])})),// Per-property setup
u=ut(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?lt.prefilters.unshift(e):lt.prefilters.push(e)}}),S.speed=function(e,t,n){var r=e&&"object"===Gt(e)?S.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};// Go to the end state if fx are off
return S.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in S.fx.speeds?r.duration=S.fx.speeds[r.duration]:r.duration=S.fx.speeds._default),// Normalize opt.queue - true/undefined/null -> "fx"
null!=r.queue&&!0!==r.queue||(r.queue="fx"),// Queueing
r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&S.dequeue(this,r.queue)},r},S.fn.extend({fadeTo:function(e,t,n,r){
// Show any hidden elements after setting opacity to 0
return this.filter(ie).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=S.isEmptyObject(t),o=S.speed(e,n,r),a=function(){
// Operate on a copy of prop so per-property easing won't be lost
var e=lt(this,S.extend({},t),o);// Empty animations, or finishing resolves immediately
(i||Q.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&!1!==i&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=S.timers,r=Q.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&it.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));// Start the next in the queue if the last step wasn't forced.
// Timers currently will call their complete callbacks, which
// will dequeue but only if they were gotoEnd.
!e&&o||S.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Q.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=S.timers,o=n?n.length:0;// Enable finishing flag on private data
// Look for any active animations, and finish them
for(t.finish=!0,// Empty the queue first
S.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));// Look for any animations in the old queue and finish them
for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);// Turn off finishing flag
delete t.finish})}}),S.each(["toggle","show","hide"],function(e,r){var i=S.fn[r];S.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(st(r,!0),e,t,n)}}),// Generate shortcuts for custom animations
S.each({slideDown:st("show"),slideUp:st("hide"),slideToggle:st("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){S.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),S.timers=[],S.fx.tick=function(){var e,t=0,n=S.timers;for(Ze=Date.now();t<n.length;t++)// Run the timer and safely remove it when done (allowing for external removal)
(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||S.fx.stop(),Ze=void 0},S.fx.timer=function(e){S.timers.push(e),S.fx.start()},S.fx.interval=13,S.fx.start=function(){et||(et=!0,ot())},S.fx.stop=function(){et=null},S.fx.speeds={slow:600,fast:200,
// Default speed
_default:400},// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
S.fn.delay=function(r,e){return r=S.fx&&S.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},tt=E.createElement("input"),nt=E.createElement("select").appendChild(E.createElement("option")),tt.type="checkbox",// Support: Android <=4.3 only
// Default value for a checkbox should be "on"
y.checkOn=""!==tt.value,// Support: IE <=11 only
// Must access selectedIndex to make default options select
y.optSelected=nt.selected,(// Support: IE <=11 only
// An input loses its value after becoming a radio
tt=E.createElement("input")).value="t",tt.type="radio",y.radioValue="t"===tt.value;var ct,ft=S.expr.attrHandle;S.fn.extend({attr:function(e,t){return _(this,S.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){S.removeAttr(this,e)})}}),S.extend({attr:function(e,t,n){var r,i,o=e.nodeType;// Don't get/set attributes on text, comment and attribute nodes
if(3!==o&&8!==o&&2!==o)// Fallback to prop when attributes are not supported
return void 0===e.getAttribute?S.prop(e,t,n):(// Attribute hooks are determined by the lowercase version
// Grab necessary hook if one is defined
1===o&&S.isXMLDoc(e)||(i=S.attrHooks[t.toLowerCase()]||(S.expr.match.bool.test(t)?ct:void 0)),void 0!==n?null===n?void S.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=S.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&N(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,
// Attribute names can contain non-HTML whitespace characters
// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
i=t&&t.match(M);if(i&&1===e.nodeType)for(;n=i[r++];)e.removeAttribute(n)}}),// Hooks for boolean attributes
ct={set:function(e,t,n){return!1===t?
// Remove boolean attributes when set to false
S.removeAttr(e,n):e.setAttribute(n,n),n}},S.each(S.expr.match.bool.source.match(/\w+/g),function(e,t){var a=ft[t]||S.find.attr;ft[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(
// Avoid an infinite loop by temporarily removing this function from the getter
i=ft[o],ft[o]=r,r=null!=a(e,t,n)?o:null,ft[o]=i),r}});var pt=/^(?:input|select|textarea|button)$/i,dt=/^(?:a|area)$/i;// Strip and collapse whitespace according to HTML spec
// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
function ht(e){return(e.match(M)||[]).join(" ")}function gt(e){return e.getAttribute&&e.getAttribute("class")||""}function vt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(M)||[]}S.fn.extend({prop:function(e,t){return _(this,S.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[S.propFix[e]||e]})}}),S.extend({prop:function(e,t,n){var r,i,o=e.nodeType;// Don't get/set properties on text, comment and attribute nodes
if(3!==o&&8!==o&&2!==o)return 1===o&&S.isXMLDoc(e)||(
// Fix name and attach hooks
t=S.propFix[t]||t,i=S.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){
// Support: IE <=9 - 11 only
// elem.tabIndex doesn't always return the
// correct value when it hasn't been explicitly set
// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
// Use proper attribute retrieval(#12072)
var t=S.find.attr(e,"tabindex");return t?parseInt(t,10):pt.test(e.nodeName)||dt.test(e.nodeName)&&e.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
y.optSelected||(S.propHooks.selected={get:function(e){
/* eslint no-unused-expressions: "off" */
var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){
/* eslint no-unused-expressions: "off" */
var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),S.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){S.propFix[this.toLowerCase()]=this}),S.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).addClass(t.call(this,e,gt(this)))});if((e=vt(t)).length)for(;n=this[u++];)if(i=gt(n),r=1===n.nodeType&&" "+ht(i)+" "){for(a=0;o=e[a++];)r.indexOf(" "+o+" ")<0&&(r+=o+" ");// Only assign if different to avoid unneeded rendering.
i!==(s=ht(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).removeClass(t.call(this,e,gt(this)))});if(!arguments.length)return this.attr("class","");if((e=vt(t)).length)for(;n=this[u++];)if(i=gt(n),// This expression is here for better compressibility (see addClass)
r=1===n.nodeType&&" "+ht(i)+" "){for(a=0;o=e[a++];)
// Remove *all* instances
for(;-1<r.indexOf(" "+o+" ");)r=r.replace(" "+o+" "," ");// Only assign if different to avoid unneeded rendering.
i!==(s=ht(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=Gt(i),a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){S(this).toggleClass(i.call(this,e,gt(this),t),t)}):this.each(function(){var e,t,n,r;if(a)for(
// Toggle individual class names
t=0,n=S(this),r=vt(i);e=r[t++];)
// Check each className given, space separated list
n.hasClass(e)?n.removeClass(e):n.addClass(e);// Toggle whole class name
else void 0!==i&&"boolean"!==o||((e=gt(this))&&
// Store className if set
Q.set(this,"__className__",e),// If the element has a class name or if we're passed `false`,
// then remove the whole classname (if there was one, the above saved it).
// Otherwise bring back whatever was previously saved (if anything),
// falling back to the empty string if nothing was stored.
this.setAttribute&&this.setAttribute("class",e||!1===i?"":Q.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;for(t=" "+e+" ";n=this[r++];)if(1===n.nodeType&&-1<(" "+ht(gt(n))+" ").indexOf(t))return!0;return!1}});var yt=/\r/g;S.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(// Treat null/undefined as ""; convert numbers to string
null==(t=i?n.call(this,e,S(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=S.map(t,function(e){return null==e?"":e+""})),// If set returns undefined, fall back to normal setting
(r=S.valHooks[this.type]||S.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=S.valHooks[t.type]||S.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:// Handle most common string cases
"string"==typeof(e=t.value)?e.replace(yt,""):null==e?"":e:void 0}}),S.extend({valHooks:{option:{get:function(e){var t=S.find.attr(e,"value");return null!=t?t:// Support: IE <=10 - 11 only
// option.text throws exceptions (#14686, #14858)
// Strip and collapse whitespace
// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
ht(S.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;// Loop through all the selected options
for(r=o<0?u:a?o:0;r<u;r++)// Support: IE <=9 only
// IE8-9 doesn't update selected after form reset (#2551)
if(((n=i[r]).selected||r===o)&&// Don't return options that are disabled or in a disabled optgroup
!n.disabled&&(!n.parentNode.disabled||!N(n.parentNode,"optgroup"))){// We don't need an array for one selects
if(
// Get the specific value for the option
t=S(n).val(),a)return t;// Multi-Selects return an array
s.push(t)}return s},set:function(e,t){for(var n,r,i=e.options,o=S.makeArray(t),a=i.length;a--;)
/* eslint-disable no-cond-assign */
((r=i[a]).selected=-1<S.inArray(S.valHooks.option.get(r),o))&&(n=!0)
/* eslint-enable no-cond-assign */;// Force browsers to behave consistently when non-matching value is set
return n||(e.selectedIndex=-1),o}}}}),// Radios and checkboxes getter/setter
S.each(["radio","checkbox"],function(){S.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<S.inArray(S(e).val(),t)}},y.checkOn||(S.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),// Return jQuery for attributes-only inclusion
y.focusin="onfocusin"in C;var mt=/^(?:focusinfocus|focusoutblur)$/,xt=function(e){e.stopPropagation()};S.extend(S.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];// Don't do events on text and comment nodes
if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!mt.test(d+S.event.triggered)&&(-1<d.indexOf(".")&&(
// Namespaced trigger; create a regexp to match event type in handle()
d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
(// Caller can pass in a jQuery.Event object, Object, or just an event type string
e=e[S.expando]?e:new S.Event(d,"object"===Gt(e)&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,// Clean up the event in case it is being reused
e.result=void 0,e.target||(e.target=n),// Clone any incoming data and prepend the event, creating the handler arg list
t=null==t?[e]:S.makeArray(t,[e]),// Allow special events to draw outside the lines
c=S.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){// Determine event propagation path in advance, per W3C events spec (#9951)
// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,mt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;// Only add window if we got to document (e.g., not plain obj or detached DOM)
a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}// Fire handlers on the event path
for(i=0;(o=p[i++])&&!e.isPropagationStopped();)f=o,e.type=1<i?s:c.bindType||d,(// jQuery handler
l=(Q.get(o,"events")||{})[e.type]&&Q.get(o,"handle"))&&l.apply(o,t),(// Native handler
l=u&&o[u])&&l.apply&&G(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,// If nobody prevented the default action, do it now
r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!G(n)||
// Call a native DOM method on the target with the same name as the event.
// Don't do default actions on window, that's where global variables be (#6170)
u&&m(n[d])&&!x(n)&&(
// Don't re-trigger an onFOO event when we call its FOO() method
(a=n[u])&&(n[u]=null),// Prevent re-triggering of the same event, since we already bubbled it above
S.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,xt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,xt),S.event.triggered=void 0,a&&(n[u]=a)),e.result}// focus/blur morphs to focusin/out; ensure we're not firing them right now
},
// Piggyback on a donor event to simulate a different one
// Used only for `focus(in | out)` events
simulate:function(e,t,n){var r=S.extend(new S.Event,n,{type:e,isSimulated:!0});S.event.trigger(r,null,t)}}),S.fn.extend({trigger:function(e,t){return this.each(function(){S.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return S.event.trigger(e,t,n,!0)}}),// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
y.focusin||S.each({focus:"focusin",blur:"focusout"},function(n,r){
// Attach a single capturing handler on the document while someone wants focusin/focusout
var i=function(e){S.event.simulate(r,e.target,S.event.fix(e))};S.event.special[r]={setup:function(){var e=this.ownerDocument||this,t=Q.access(e,r);t||e.addEventListener(n,i,!0),Q.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this,t=Q.access(e,r)-1;t?Q.access(e,r,t):(e.removeEventListener(n,i,!0),Q.remove(e,r))}}});var bt=C.location,wt=Date.now(),Tt=/\?/;// Cross-browser xml parsing
S.parseXML=function(e){var t;if(!e||"string"!=typeof e)return null;// Support: IE 9 - 11 only
// IE throws on parseFromString with invalid input.
try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){t=void 0}return t&&!t.getElementsByTagName("parsererror").length||S.error("Invalid XML: "+e),t};var Ct=/\[\]$/,Et=/\r?\n/g,St=/^(?:submit|button|image|reset|file)$/i,kt=/^(?:input|select|textarea|keygen)/i;function Dt(n,e,r,i){var t;if(Array.isArray(e))
// Serialize array item.
S.each(e,function(e,t){r||Ct.test(n)?
// Treat each array item as a scalar.
i(n,t):
// Item is non-scalar (array or object), encode its numeric index.
Dt(n+"["+("object"===Gt(t)&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))
// Serialize scalar item.
i(n,e);else
// Serialize object item.
for(t in e)Dt(n+"["+t+"]",e[t],r,i)}// Serialize an array of form elements or a set of
// key/values into a query string
S.param=function(e,t){var n,r=[],i=function(e,t){
// If value is a function, invoke it and use its return value
var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};// If an array was passed in, assume that it is an array of form elements.
if(Array.isArray(e)||e.jquery&&!S.isPlainObject(e))
// Serialize the form elements
S.each(e,function(){i(this.name,this.value)});else
// If traditional, encode the "old" way (the way 1.3.2 or older
// did it), otherwise encode params recursively.
for(n in e)Dt(n,e[n],t,i);// Return the resulting serialization
return r.join("&")},S.fn.extend({serialize:function(){return S.param(this.serializeArray())},serializeArray:function(){return this.map(function(){
// Can add propHook for "elements" to filter or add form elements
var e=S.prop(this,"elements");return e?S.makeArray(e):this}).filter(function(){var e=this.type;// Use .is( ":disabled" ) so that fieldset[disabled] works
return this.name&&!S(this).is(":disabled")&&kt.test(this.nodeName)&&!St.test(e)&&(this.checked||!le.test(e))}).map(function(e,t){var n=S(this).val();return null==n?null:Array.isArray(n)?S.map(n,function(e){return{name:t.name,value:e.replace(Et,"\r\n")}}):{name:t.name,value:n.replace(Et,"\r\n")}}).get()}});var Nt=/%20/g,At=/#.*$/,jt=/([?&])_=[^&]*/,qt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Lt=/^(?:GET|HEAD)$/,Ht=/^\/\//,
/* Prefilters
       * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
       * 2) These are called:
       *    - BEFORE asking for a transport
       *    - AFTER param serialization (s.data is a string if s.processData is true)
       * 3) key is the dataType
       * 4) the catchall symbol "*" can be used
       * 5) execution will start with transport dataType and THEN continue down to "*" if needed
       */
Ot={},
/* Transports bindings
       * 1) key is the dataType
       * 2) the catchall symbol "*" can be used
       * 3) selection will start with transport dataType and THEN go to "*" if needed
       */
Pt={},
// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
Mt="*/".concat("*"),
// Anchor tag for parsing the document origin
Rt=E.createElement("a");// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function It(o){
// dataTypeExpression is optional and defaults to "*"
return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(M)||[];if(m(t))
// For each dataType in the dataTypeExpression
for(;n=i[r++];)
// Prepend if requested
"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}// Base inspection function for prefilters and transports
function Wt(t,i,o,a){var s={},u=t===Pt;function l(e){var r;return s[e]=!0,S.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function $t(e,t){var n,r,i=S.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&S.extend(!0,e,r),e}
/* Handles responses to an ajax request:
       * - finds the right dataType (mediates between content-type and expected dataType)
       * - returns the corresponding response
       */Rt.href=bt.href,S.extend({
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
accepts:{"*":Mt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},
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
"text xml":S.parseXML},
// For options that shouldn't be deep extended:
// you can add your own custom options here if
// and when you create one that shouldn't be
// deep extended (see ajaxExtend)
flatOptions:{url:!0,context:!0}},
// Creates a full fledged settings object into target
// with both ajaxSettings and settings fields.
// If target is omitted, writes into ajaxSettings.
ajaxSetup:function(e,t){return t?// Building a settings object
$t($t(e,S.ajaxSettings),t):// Extending ajaxSettings
$t(S.ajaxSettings,e)},ajaxPrefilter:It(Ot),ajaxTransport:It(Pt),
// Main method
ajax:function(e,t){
// If url is an object, simulate pre-1.5 signature
"object"===Gt(e)&&(t=e,e=void 0),// Force options to be an object
t=t||{};var c,
// URL without anti-cache param
f,
// Response headers
p,n,
// timeout handle
d,
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
v=S.ajaxSetup({},t),
// Callbacks context
y=v.context||v,
// Context for global events is callbackContext if it is a DOM node or jQuery collection
m=v.context&&(y.nodeType||y.jquery)?S(y):S.event,
// Deferreds
x=S.Deferred(),b=S.Callbacks("once memory"),
// Status-dependent callbacks
w=v.statusCode||{},
// Headers (they are sent all at once)
a={},s={},
// Default abort message
u="canceled",
// Fake xhr
T={readyState:0,
// Builds headers hashtable if needed
getResponseHeader:function(e){var t;if(h){if(!n)for(n={};t=qt.exec(p);)n[t[1].toLowerCase()]=t[2];t=n[e.toLowerCase()]}return null==t?null:t},
// Raw string
getAllResponseHeaders:function(){return h?p:null},
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
abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};// Attach deferreds
// A cross-domain request is in order when the origin doesn't match the current origin.
if(x.promise(T),// Add protocol if not provided (prefilters might expect it)
// Handle falsy url in the settings object (#10093: consistency with old signature)
// We also use the url parameter if available
v.url=((e||v.url||bt.href)+"").replace(Ht,bt.protocol+"//"),// Alias method option to type as per ticket #12004
v.type=t.method||t.type||v.method||v.type,// Extract dataTypes list
v.dataTypes=(v.dataType||"*").toLowerCase().match(M)||[""],null==v.crossDomain){r=E.createElement("a");// Support: IE <=8 - 11, Edge 12 - 15
// IE throws exception on accessing the href property if url is malformed,
// e.g. http://example.com:80x/
try{r.href=v.url,// Support: IE <=8 - 11 only
// Anchor's host property isn't correctly set when s.url is relative
r.href=r.href,v.crossDomain=Rt.protocol+"//"+Rt.host!=r.protocol+"//"+r.host}catch(e){
// If there is an error parsing the URL, assume it is crossDomain,
// it can be rejected by the transport if it is invalid
v.crossDomain=!0}}// Convert data if not already a string
// If request was aborted inside a prefilter, stop there
if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=S.param(v.data,v.traditional)),// Apply prefilters
Wt(Ot,v,t,T),h)return T;// We can fire global events as of now if asked to
// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
// Check for headers option
for(i in// Watch for a new set of requests
(g=S.event&&v.global)&&0==S.active++&&S.event.trigger("ajaxStart"),// Uppercase the type
v.type=v.type.toUpperCase(),// Determine if request has content
v.hasContent=!Lt.test(v.type),// Save the URL in case we're toying with the If-Modified-Since
// and/or If-None-Match header later on
// Remove hash to simplify url manipulation
f=v.url.replace(At,""),// More options handling for requests with no content
v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(Nt,"+")):(
// Remember the hash so we can put it back
o=v.url.slice(f.length),// If data is available and should be processed, append data to url
v.data&&(v.processData||"string"==typeof v.data)&&(f+=(Tt.test(f)?"&":"?")+v.data,// #9682: remove data so that it's not used in an eventual retry
delete v.data),// Add or update anti-cache param if needed
!1===v.cache&&(f=f.replace(jt,"$1"),o=(Tt.test(f)?"&":"?")+"_="+wt+++o),// Put hash and anti-cache on the URL that will be requested (gh-1732)
v.url=f+o),// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
v.ifModified&&(S.lastModified[f]&&T.setRequestHeader("If-Modified-Since",S.lastModified[f]),S.etag[f]&&T.setRequestHeader("If-None-Match",S.etag[f])),// Set the correct header, if data is being sent
(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),// Set the Accepts header for the server, depending on the dataType
T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+Mt+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);// Allow custom headers/mimetypes and early abort
if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))
// Abort if not done already and return
return T.abort();// Aborting is no longer a cancellation
// If no transport, we auto-abort
if(u="abort",// Install callbacks on deferreds
b.add(v.complete),T.done(v.success),T.fail(v.error),// Get transport
c=Wt(Pt,v,t,T)){// If request was aborted inside ajaxSend, stop there
if(T.readyState=1,// Send global event
g&&m.trigger("ajaxSend",[T,v]),h)return T;// Timeout
v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){
// Rethrow post-completion exceptions
if(h)throw e;// Propagate others as results
l(-1,e)}}// Callback for when everything is done
else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;// Ignore repeat invocations
h||(h=!0,// Clear timeout if it exists
d&&C.clearTimeout(d),// Dereference transport for early garbage collection
// (no matter how long the jqXHR object will be used)
c=void 0,// Cache response headers
p=r||"",// Set readyState
T.readyState=0<e?4:0,// Determine if successful
i=200<=e&&e<300||304===e,// Get response data
n&&(s=function(e,t,n){// Remove auto dataType and get content-type in the process
for(var r,i,o,a,s=e.contents,u=e.dataTypes;"*"===u[0];)u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));// Check if we're dealing with a known content-type
if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}// Check to see if we have a response for the expected dataType
if(u[0]in n)o=u[0];else{
// Try convertible dataTypes
for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}// Or just use first one
o=o||a}// If we found a dataType
// We add the dataType to the list if needed
// and return the corresponding response
if(o)return o!==u[0]&&u.unshift(o),n[o]}
/* Chain conversions given the request and the original response
       * Also sets the responseXXX fields on the jqXHR instance
       */(v,T,n)),// Convert no matter what (that way responseXXX fields are always set)
s=function(e,t,n,r){var i,o,a,s,u,l={},
// Work with a copy of dataTypes in case we need to modify it for conversion
c=e.dataTypes.slice();// Create converters map with lowercased keys
if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];// Convert to each sequential dataType
for(o=c.shift();o;)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),// Apply the dataFilter if provided
!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())
// There's only work to do if current dataType is non-auto
if("*"===o)o=u;// Convert response if prev dataType is non-auto and differs from current
else if("*"!==u&&u!==o){// If none found, seek a pair
if(!(
// Seek a direct converter
a=l[u+" "+o]||l["* "+o]))for(i in l)if((
// If conv2 outputs current
s=i.split(" "))[1]===o&&(
// If prev can be converted to accepted input
a=l[u+" "+s[0]]||l["* "+s[0]])){
// Condense equivalence converters
!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}// Apply converter (if not an equivalence)
if(!0!==a)
// Unless errors are allowed to bubble, catch and return them
if(a&&e.throws)t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),// If successful, handle type chaining
i?(
// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(S.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(S.etag[f]=u)),// if no content
204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(
// Extract error from statusText and normalize for non-aborts
a=l,!e&&l||(l="error",e<0&&(e=0))),// Set data for the fake xhr object
T.status=e,T.statusText=(t||l)+"",// Success/Error
i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),// Status-dependent callbacks
T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),// Complete
b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),// Handle the global AJAX counter
--S.active||S.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return S.get(e,t,n,"json")},getScript:function(e,t){return S.get(e,void 0,t,"script")}}),S.each(["get","post"],function(e,i){S[i]=function(e,t,n,r){// The url can be an options object (which then must have .url)
// Shift arguments if data argument was omitted
return m(t)&&(r=r||n,n=t,t=void 0),S.ajax(S.extend({url:e,type:i,dataType:r,data:t,success:n},S.isPlainObject(e)&&e))}}),S._evalUrl=function(e){return S.ajax({url:e,
// Make this explicit, since user can override this through ajaxSetup (#11264)
type:"GET",dataType:"script",cache:!0,async:!1,global:!1,throws:!0})},S.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),// The elements to wrap the target around
t=S(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var e=this;e.firstElementChild;)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){S(this).wrapInner(n.call(this,e))}):this.each(function(){var e=S(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){S(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){S(this).replaceWith(this.childNodes)}),this}}),S.expr.pseudos.hidden=function(e){return!S.expr.pseudos.visible(e)},S.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},S.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var Bt={
// File protocol always yields status code 0, assume 200
0:200,
// Support: IE <=9 only
// #1450: sometimes IE returns 1223 when it should be 204
1223:204},Ft=S.ajaxSettings.xhr();y.cors=!!Ft&&"withCredentials"in Ft,y.ajax=Ft=!!Ft,S.ajaxTransport(function(i){var o,a;// Cross domain only allowed if supported through XMLHttpRequest
if(y.cors||Ft&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();// Apply custom fields if provided
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
r.status,r.statusText):t(Bt[r.status]||r.status,r.statusText,// Support: IE <=9 only
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
S.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),// Install script dataType
S.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return S.globalEval(e),e}}}),// Handle cache's special case and crossDomain
S.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),// Bind script tag hack transport
S.ajaxTransport("script",function(n){var r,i;
// This transport only deals with cross domain requests
if(n.crossDomain)return{send:function(e,t){r=S("<script>").prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),// Use native DOM manipulation to avoid our domManip AJAX trickery
E.head.appendChild(r[0])},abort:function(){i&&i()}}});var _t,zt=[],Xt=/(=)\?(?=&|$)|\?\?/;// Default jsonp settings
S.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=zt.pop()||S.expando+"_"+wt++;return this[e]=!0,e}}),// Detect, normalize options and install callbacks for jsonp requests
S.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Xt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Xt.test(e.data)&&"data");// Handle iff the expected data type is "jsonp" or we have a parameter to set
if(a||"jsonp"===e.dataTypes[0])// Delegate to script
// Get callback name, remembering preexisting value associated with it
return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,// Insert callback into url or form data
a?e[a]=e[a].replace(Xt,"$1"+r):!1!==e.jsonp&&(e.url+=(Tt.test(e.url)?"&":"?")+e.jsonp+"="+r),// Use data converter to retrieve json after script execution
e.converters["script json"]=function(){return o||S.error(r+" was not called"),o[0]},// Force json dataType
e.dataTypes[0]="json",// Install callback
i=C[r],C[r]=function(){o=arguments},// Clean-up function (fires after converters)
n.always(function(){
// If previous value didn't exist - remove it
void 0===i?S(C).removeProp(r):C[r]=i,// Save back as free
e[r]&&(
// Make sure that re-using the options doesn't screw things around
e.jsonpCallback=t.jsonpCallback,// Save the callback name for future use
zt.push(r)),// Call if it was a function and we have a response
o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
y.createHTMLDocument=((_t=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===_t.childNodes.length),// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
S.parseHTML=function(e,t,n){return"string"!=typeof e?[]:(// Single tag
"boolean"==typeof t&&(n=t,t=!1),t||(
// Stop scripts or inline event handlers from being executed immediately
// by using document.implementation
y.createHTMLDocument?((// Set the base href for the created document
// so any parsed elements with URLs
// are based on the document's URL (gh-2965)
r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=A.exec(e))?[t.createElement(i[1])]:(i=me([e],t,o),o&&o.length&&S(o).remove(),S.merge([],i.childNodes)));var r,i,o},
/**
       * Load a url into a page
       */
S.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=ht(e.slice(s)),e=e.slice(0,s)),// If it's a function
m(t)?(
// We assume that it's the callback
n=t,t=void 0):t&&"object"===Gt(t)&&(i="POST"),// If we have elements to modify, make the request
0<a.length&&S.ajax({url:e,
// If "type" variable is undefined, then "GET" method will be used.
// Make value of this field explicit since
// user can override it through ajaxSetup method
type:i||"GET",dataType:"html",data:t}).done(function(e){
// Save response for use in complete callback
o=arguments,a.html(r?// If a selector was specified, locate the right elements in a dummy div
// Exclude scripts to avoid IE 'Permission Denied' errors
S("<div>").append(S.parseHTML(e)).find(r):// Otherwise use the full result
e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},// Attach a bunch of functions for handling common AJAX events
S.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){S.fn[t]=function(e){return this.on(t,e)}}),S.expr.pseudos.animated=function(t){return S.grep(S.timers,function(e){return t===e.elem}).length},S.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=S.css(e,"position"),c=S(e),f={};// Set position first, in-case top/left are set even on static elem
"static"===l&&(e.style.position="relative"),s=c.offset(),o=S.css(e,"top"),u=S.css(e,"left"),// Need to be able to calculate position if either
// top or left is auto and position is either absolute or fixed
i=("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,r.left):(a=parseFloat(o)||0,parseFloat(u)||0),m(t)&&(
// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
t=t.call(e,n,S.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},S.fn.extend({
// offset() relates an element's border box to the document origin
offset:function(t){
// Preserve chaining for setter
if(arguments.length)return void 0===t?this:this.each(function(e){S.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
// Support: IE <=11 only
// Running getBoundingClientRect on a
// disconnected node in IE throws an error
r.getClientRects().length?(// Get document-relative position by adding viewport scroll to viewport-relative gBCR
e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},
// position() relates an element's margin box to its offset parent's padding box
// This corresponds to the behavior of CSS absolute positioning
position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};// position:fixed elements are offset from the viewport, which itself always has zero offset
if("fixed"===S.css(r,"position"))
// Assume position:fixed implies availability of getBoundingClientRect
t=r.getBoundingClientRect();else{for(t=this.offset(),// Account for the *real* offset parent, which can be the document or its root element
// when a statically positioned element is identified
n=r.ownerDocument,e=r.offsetParent||n.documentElement;e&&(e===n.body||e===n.documentElement)&&"static"===S.css(e,"position");)e=e.parentNode;e&&e!==r&&1===e.nodeType&&(
// Incorporate borders into its offset, since they are outside its content origin
(i=S(e).offset()).top+=S.css(e,"borderTopWidth",!0),i.left+=S.css(e,"borderLeftWidth",!0))}// Subtract parent offsets and element margins
return{top:t.top-i.top-S.css(r,"marginTop",!0),left:t.left-i.left-S.css(r,"marginLeft",!0)}}},
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
offsetParent:function(){return this.map(function(){for(var e=this.offsetParent;e&&"static"===S.css(e,"position");)e=e.offsetParent;return e||xe})}}),// Create scrollLeft and scrollTop methods
S.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;S.fn[t]=function(e){return _(this,function(e,t,n){
// Coalesce documents and windows
var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
S.each(["top","left"],function(e,n){S.cssHooks[n]=Be(y.pixelPosition,function(e,t){if(t)// If curCSS returns percentage, fallback to offset
return t=$e(e,n),Re.test(t)?S(e).position()[n]+"px":t})}),// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
S.each({Height:"height",Width:"width"},function(a,s){S.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){
// Margin is only for outerHeight, outerWidth
S.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return _(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:// Get document width or height
9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?// Get width or height on the element, requesting but not forcing parseFloat
S.css(e,t,i):// Set width or height on the element
S.style(e,t,n,i)},s,n?e:void 0,n)}})}),S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){
// Handle event binding
S.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}}),S.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),S.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){
// ( namespace ) or ( selector, types [, fn] )
return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
S.proxy=function(e,t){var n,r,i;// Quick check to determine if target is callable, in the spec
// this throws a TypeError, but we will just return undefined.
if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))// Simulated bind
return r=s.call(arguments,2),// Set the guid of unique handler to the same of original handler, so it can be removed
(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||S.guid++,i},S.holdReady=function(e){e?S.readyWait++:S.ready(!0)},S.isArray=Array.isArray,S.parseJSON=JSON.parse,S.nodeName=N,S.isFunction=m,S.isWindow=x,S.camelCase=V,S.type=w,S.now=Date.now,S.isNumeric=function(e){
// As of jQuery 3.0, isNumeric is limited to
// strings and numbers (primitives or objects)
// that can be coerced to finite numbers (gh-2662)
var t=S.type(e);return("number"===t||"string"===t)&&// parseFloat NaNs numeric-cast false positives ("")
// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
// subtraction forces infinities to NaN
!isNaN(e-parseFloat(e))};// Register as a named AMD module, since jQuery can be concatenated with other
var// Map over jQuery in case of overwrite
Ut=C.jQuery,
// Map over the $ in case of overwrite
Vt=C.$;return S.noConflict=function(e){return C.$===S&&(C.$=Vt),e&&C.jQuery===S&&(C.jQuery=Ut),S},// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
e||(C.jQuery=C.$=S),S},
// For CommonJS and CommonJS-like environments where a proper `window`
// is present, execute the factory and get jQuery.
// For environments that do not have a `window` with a `document`
// (such as Node.js), expose a factory as module.exports.
// This accentuates the need for the creation of a real `window`.
// e.g. var jQuery = require("jquery")(window);
// See ticket #14549 for more info.
e.exports=t.document?n(t,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return n(e)}}(e={exports:{}},e.exports),e.exports);
// jquery
window.jQuery=window.$=t}();

//# sourceMappingURL=jquery.js.map