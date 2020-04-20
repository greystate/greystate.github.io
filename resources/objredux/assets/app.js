"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _possibleConstructorReturn(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(function(){var e,t,n,r;null==self.app&&(self.app={}),self.app.Languages={},e=function(){function e(t){var n,r,i,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};_classCallCheck(this,e),this.name=t,this.template=null!=(n=a.template)?n:this.name.toLowerCase(),this.prism=null!=(r=a.prism)?r:this.name.toLowerCase(),this.types=null!=(i=a.types)?i:{default:"string"},self.app.Languages[this.name]=this}return _createClass(e,[{key:"renderInterface",value:function(e){var t=this;return e.nameForType=function(e){var n;return null!=(n=t.types[e])?n:"N/A"},ecoTemplates[this.template](e)}}]),e}(),r=function(){var e,t=function(){function t(e){_classCallCheck(this,t),this.name=e,this.memberList={},this.methods=[],this.properties=[]}return _createClass(t,[{key:"addMethod",value:function(e){if(!this.memberList["m$".concat(e)])return this.methods.push({name:e}),this.memberList["m$".concat(e)]=!0}},{key:"addProperty",value:function(t){var n,r,i=e(t);if(n=i.name,r=i.type,!this.memberList["p$".concat(n)])return this.properties.push({name:n,type:r}),this.memberList["p$".concat(n)]=!0}},{key:"clone",value:function(){var e,n,r,i,a,s,o,c,l;for(e=new t(this.name),n=0,i=(c=this.methods).length;n<i;n++)s=c[n],e.addMethod(s.name);for(r=0,a=(l=this.properties).length;r<a;r++)o=l[r],e.addProperty("".concat(o.name,":").concat(o.type));return e}}]),t}();return e=function(e){var t,n,r,i,a;return t=e.length,n=(a=e.split(":"))[0],"int"===(i=null!=(r=a[1])?r:"default")&&(i="integer"),"?"===e.substr(e.length-1)&&(n=e.substring(0,t-1),i="boolean"),e.match(/\[\]$/)&&(n=e.substring(0,t-2),i="array"),e.match(/\{\}$/)&&(n=e.substring(0,t-2),i="dictionary"),{name:n,type:i}},t}.call(this),new(function(e){function t(){return _classCallCheck(this,t),_possibleConstructorReturn(this,_getPrototypeOf(t).call(this,"CoffeeScript",{template:"coffee"}))}return _inherits(t,e),t}(e)),new(function(e){function t(){return _classCallCheck(this,t),_possibleConstructorReturn(this,_getPrototypeOf(t).call(this,"XML",{prism:"markup",types:{default:"string",boolean:"boolean",string:"string",integer:"integer",double:"double",array:"array",dictionary:"dictionary"}}))}return _inherits(t,e),t}(e)),new(function(e){function t(){return _classCallCheck(this,t),_possibleConstructorReturn(this,_getPrototypeOf(t).call(this,"JavaScript",{types:{default:'""',boolean:"null",string:'""',integer:"0",double:"0.0",array:"[ ]",dictionary:"{ }"}}))}return _inherits(t,e),t}(e)),new(function(e){function t(){return _classCallCheck(this,t),_possibleConstructorReturn(this,_getPrototypeOf(t).call(this,"ES6",{prism:"javascript",types:{default:'""',boolean:"null",string:'""',integer:"0",double:"0.0",array:"[ ]",dictionary:"{ }"}}))}return _inherits(t,e),t}(e)),new(function(e){function t(){return _classCallCheck(this,t),_possibleConstructorReturn(this,_getPrototypeOf(t).call(this,"Swift",{types:{default:"String",boolean:"Bool",string:"String",integer:"Int",double:"Double",array:"[ String ]",dictionary:"[ String: String ]"}}))}return _inherits(t,e),t}(e)),new(function(e){function t(){return _classCallCheck(this,t),_possibleConstructorReturn(this,_getPrototypeOf(t).call(this,"C#",{template:"csharp",prism:"javascript",types:{default:"string",boolean:"bool",string:"string",integer:"int",double:"double",array:"string[]",dictionary:"Dictionary<string, string>"}}))}return _inherits(t,e),t}(e)),new(function(e){function t(){return _classCallCheck(this,t),_possibleConstructorReturn(this,_getPrototypeOf(t).call(this,"Diagram"))}return _inherits(t,e),t}(e)),t=function(){function e(t,n){_classCallCheck(this,e),this.el=t,this.itemPresenter=n,this.collection=[]}return _createClass(e,[{key:"add",value:function(e){return this.collection.push(e),this.changed()}},{key:"get",value:function(e){if(0<=e&&e<this.collection.length)return this.collection[e]}},{key:"remove",value:function(e){return this.collection.slice(e,1),this.changed()}},{key:"changed",value:function(){return this.render()}},{key:"render",value:function(){var e,t,n,r;for(this.el.innerHTML="",r=[],t=e=0,n=this.collection.length;0<=n?e<n:e>n;t=0<=n?++e:--e)r.push(this.el.appendChild(this.renderSavedObject(t)));return r}},{key:"renderSavedObject",value:function(e){var t,n,r;return n=this.collection[e],t=this.itemPresenter.renderInterface(n),(r=document.createElement("div")).dataset.libraryIndex=e,r.classList.add("diagram-saved"),r.innerHTML=t,r}}]),e}(),window.$=function(e){var t;return 1===(t=document.querySelectorAll(e)).length?t[0]:t},window.$val=function(e){var t,n,r,i;for(n=0,r=(t=$("[name='".concat(e,"']"))).length;n<r;n++)if((i=t[n]).checked)return i.value},null==self.app&&(self.app={}),n=function(){var e,n,i=function(){function i(){_classCallCheck(this,i),this.libraryClickHandler=this.libraryClickHandler.bind(this),this.setObjectName=this.setObjectName.bind(this),this.addProperty=this.addProperty.bind(this),this.addMethod=this.addMethod.bind(this),this.saveCurrentObjectToLibrary=this.saveCurrentObjectToLibrary.bind(this),this.handleKeypress=this.handleKeypress.bind(this),this.currentObject=new r,this.library=new t($(".library"),self.app.Languages.Diagram),this.addLanguagesToForm(),this.assignHandlers(),this.setFocusAndPickDefaultLanguage()}return _createClass(i,[{key:"assignHandlers",value:function(){var e,t,n,r,i,a,s,o,c=this;for($("#name").addEventListener("change",this.setObjectName,!1),$("#property").addEventListener("change",this.addProperty,!1),$("#method").addEventListener("change",this.addMethod,!1),e=0,n=(i=$("[name='codelang']")).length;e<n;e++)i[e].addEventListener("change",(function(){return c.changed()}),!1);for($(".library").addEventListener("click",this.libraryClickHandler,!1),$("#name").addEventListener("keypress",this.handleKeypress,!1),$("#property").addEventListener("keypress",this.handleKeypress,!1),$("#method").addEventListener("keypress",this.handleKeypress,!1),$("#save").addEventListener("click",this.saveCurrentObjectToLibrary,!1),s=[],t=0,r=(a=$('input[type="text"]')).length;t<r;t++)o=a[t],s.push(o.addEventListener("keyup",this.validityChecker,!1));return s}},{key:"libraryClickHandler",value:function(e){var t,n;for(n=e.srcElement;"DIV"!==n.nodeName;)n=n.parentNode;if((t=n.dataset.libraryIndex)>=0)return this.loadObjectIntoCurrentObject(this.library.get(t).clone())}},{key:"validityChecker",value:function(e){var t,r;return 0===(t=e.target).value.length?t.classList.remove("invalid"):(r=n.test(t.value),t.classList.toggle("invalid",!r))}},{key:"setObjectName",value:function(e){var t;return"tester"===(t=e.target.value)?this.testObject():(this.currentObject.name=t,this.changed())}},{key:"addProperty",value:function(e){var t;return t=e.target.value,this.currentObject.addProperty(t),this.changed()}},{key:"addMethod",value:function(e){var t;return t=e.target.value,this.currentObject.addMethod(t),this.changed()}},{key:"reset",value:function(){return this.currentObject=new r,this.changed(),this.resetForm()}},{key:"addLanguagesToForm",value:function(){var e,t,n;return e=0,n=function(){var n,r;for(t in r=[],n=self.app.Languages)n[t],"Diagram"!==t?r.push('<p class="radiofield"><input type="radio" value="'.concat(t,'" name="codelang" id="codelang-').concat(++e,'"><label for="codelang-').concat(e,'">').concat(t,"</label></p>")):r.push(void 0);return r}(),$(".language").innerHTML+=n.join("\n")}},{key:"saveCurrentObjectToLibrary",value:function(e){return e.preventDefault(),this.library.add(this.currentObject.clone()),this.reset()}},{key:"loadObjectIntoCurrentObject",value:function(e){return this.currentObject=e,this.changed()}},{key:"removeObject",value:function(e){}},{key:"resetForm",value:function(){return $("#name").value="",$("#property").value="",$("#method").value="",$("#name").focus()}},{key:"testObject",value:function(){return this.currentObject=new r("ObjectDescriptor"),this.currentObject.addMethod("addMethod"),this.currentObject.addMethod("addProperty"),this.currentObject.addMethod("clone"),this.currentObject.addProperty("memberlist{}"),this.currentObject.addProperty("methods[]"),this.currentObject.addProperty("properties[]"),this.changed()}},{key:"renderCode",value:function(e,t){var n,r,i;return r=(i=self.app.Languages[t]).renderInterface(e),(n=$(".output code")).innerText=r,n.className="language-".concat(i.prism)}},{key:"renderObject",value:function(e){var t;return t=self.app.Languages.Diagram.renderInterface(e),$(".diagram").innerHTML=t}},{key:"changed",value:function(){var e;if(e=$val("codelang"),this.renderObject(this.currentObject),null!=e)return this.renderCode(this.currentObject,e),Prism.highlightAll()}},{key:"handleKeypress",value:function(t){var n;if(n=t.target,t.keyCode===e)return"name"===n.id?$("#property").select():n.select()}},{key:"setFocusAndPickDefaultLanguage",value:function(){return $("#codelang-1").checked=!0,$("#name").focus(),$("#name").select(),this.changed()}}]),i}();return e=13,n=/^[^\s,\.()-]+$/,i}.call(this),self.app.controller=new n}).call(void 0);