"use strict";function _toConsumableArray(a){return _arrayWithoutHoles(a)||_iterableToArray(a)||_unsupportedIterableToArray(a)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(a,b){if(a){if("string"==typeof a)return _arrayLikeToArray(a,b);var c=Object.prototype.toString.call(a).slice(8,-1);return"Object"===c&&a.constructor&&(c=a.constructor.name),"Map"===c||"Set"===c?Array.from(a):"Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)?_arrayLikeToArray(a,b):void 0}}function _iterableToArray(a){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(a))return Array.from(a)}function _arrayWithoutHoles(a){if(Array.isArray(a))return _arrayLikeToArray(a)}function _arrayLikeToArray(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=Array(b);c<b;c++)d[c]=a[c];return d}var actions={"🤔1":{start:9.3,duration:1.45},"🤔2":{start:14.8,duration:.8},"🤔3":{start:22,duration:1.2},pojada:{start:12.5,duration:1.9},pojechali:{start:53.7,duration:1.6},"🍺":{start:55.5,duration:2},"💥":{start:34,duration:6.7}},buttons=_toConsumableArray(document.querySelectorAll("button")),video=document.querySelector("video"),clickTimeout=null;buttons.forEach(function(a){a.addEventListener("click",function(){var b=actions[a.dataset.action];clearTimeout(clickTimeout),video.currentTime=b.start,video.play(),clickTimeout=setTimeout(function(){video.pause()},1e3*b.duration)})}),console.log("Jebnie czy nie jebnie?");