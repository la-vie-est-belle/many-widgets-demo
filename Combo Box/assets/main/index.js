System.register("chunks:///_virtual/MW_ComboBox.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var e,i,n,s,o,r,c,h,l,_;return{setters:[function(t){e=t.inheritsLoose,i=t.defineProperty,n=t.assertThisInitialized},function(t){s=t.cclegacy,o=t._decorator,r=t.Button,c=t.Node,h=t.instantiate,l=t.Label,_=t.Component}],execute:function(){var a;s._RF.push({},"91ecdycsFBB7ZD5BGtic4pE","MW_ComboBox",void 0);var u=o.ccclass;o.property,t("MWComboBox",u("MWComboBox")(a=function(t){function s(){for(var e,s=arguments.length,o=new Array(s),r=0;r<s;r++)o[r]=arguments[r];return e=t.call.apply(t,[this].concat(o))||this,i(n(e),"_itemsTextArray",[]),i(n(e),"_openSign","v"),i(n(e),"_closeSign","<"),i(n(e),"_currentLabel",new c),i(n(e),"_btnSign",new c),i(n(e),"_scrollView",new c),i(n(e),"_content",new c),i(n(e),"_firstItem",new c),e}e(s,t);var o=s.prototype;return o.start=function(){this._init(),this._bugFix(),this.setItems(["Many Widgets","Cocos Creator","Cocos Creator 3D","la vie est belle","Hello, world!"])},o._init=function(){this._initChildNode(),this._initEvent()},o._initChildNode=function(){this._currentLabel=this.node.children[0],this._btnSign=this.node.children[1],this._scrollView=this.node.children[2],this._content=this._scrollView.children[0].children[0],this._firstItem=this._content.children[0]},o._initEvent=function(){this.node.on(r.EventType.CLICK,this._openCloseComboBox,this),this._firstItem.on(r.EventType.CLICK,this._itemClicked,this)},o._bugFix=function(){var t=this;this.scheduleOnce((function(){t._scrollView.active=!0}),.05),this.scheduleOnce((function(){t._scrollView.active=!1}),.1)},o.setItems=function(t){this._itemsTextArray=t,this._recycle(),this.setCurrentText(this._itemsTextArray[0]),this._setItemText(this._firstItem,this._itemsTextArray[0]),this._spawnItems()},o._recycle=function(){for(var t=1;t<this._content.children.length;t++)this._content.children[t].removeFromParent()},o._spawnItems=function(){for(var t=0;t<this._itemsTextArray.length-1;t++){var e=new c;e=h(this._firstItem),this._content.addChild(e),this._setItemText(e,this._itemsTextArray[t+1]),e.on(r.EventType.CLICK,this._itemClicked,this)}},o._setItemText=function(t,e){new l;t.children[0].getComponent(l).string=e},o._openCloseComboBox=function(){if(this._scrollView.active){this._scrollView.active=!1;new l;this._btnSign.getComponent(l).string=this._closeSign}else{this._scrollView.active=!0;new l;this._btnSign.getComponent(l).string=this._openSign}},o.getCurrentText=function(){var t;return null===(t=this._currentLabel.getComponent(l))||void 0===t?void 0:t.string},o.setCurrentText=function(t){new l;this._currentLabel.getComponent(l).string=t},o.setOpenSign=function(t){this._openSign=t},o.setCloseSign=function(t){this._closeSign=t},o._itemClicked=function(t){this._currentLabel.getComponent(l).string=t.node.children[0].getComponent(l).string,this._openCloseComboBox()},s}(_))||a);s._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./MW_ComboBox.ts"],(function(){"use strict";return{setters:[null],execute:function(){}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});