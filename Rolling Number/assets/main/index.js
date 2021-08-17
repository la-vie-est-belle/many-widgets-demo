System.register("chunks:///_virtual/MW_Rolling_Number.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var i,e,o,n,r,s,h,a,l,u,c,y,_,d,m;return{setters:[function(t){i=t.applyDecoratedDescriptor,e=t.inheritsLoose,o=t.initializerDefineProperty,n=t.assertThisInitialized,r=t.defineProperty},function(t){s=t.cclegacy,h=t._decorator,a=t.Node,l=t.Layout,u=t.UITransform,c=t.instantiate,y=t.tween,_=t.Vec3,d=t.EditBox,m=t.Component}],execute:function(){var f,p,g,L,A,b;s._RF.push({},"05602AE9IBMT7kI1KZ5hHDf","MW_Rolling_Number",void 0);var v=h.ccclass,N=h.property;t("MWRollingNumber",(f=v("MWRollingNumber"),p=N({type:a}),f((A=i((L=function(t){function i(){for(var i,e=arguments.length,s=new Array(e),h=0;h<e;h++)s[h]=arguments[h];return i=t.call.apply(t,[this].concat(s))||this,o(n(i),"editBox",A,n(i)),o(n(i),"rollTime",b,n(i)),r(n(i),"_numStr",""),r(n(i),"_numberHeight",0),r(n(i),"_isOk2Roll",!1),r(n(i),"_childLayoutsArray",[]),i}e(i,t);var s=i.prototype;return s.start=function(){this._init()},s._init=function(){this._initParentLayout(),this._initParentLayoutAnchorPoint(),this._initNumberLayoutsArray(),this._initChildLayout(),this._initChildAnchorPoint(),this._getNumberHeight()},s._initParentLayout=function(){var t=new l;(t=this.node.getComponent(l)).type=l.Type.HORIZONTAL,t.resizeMode=l.ResizeMode.CONTAINER},s._initParentLayoutAnchorPoint=function(){new u;this.node.getComponent(u).anchorX=.065},s._initNumberLayoutsArray=function(){this._childLayoutsArray.push(this.node.children[0])},s._initChildLayout=function(){var t=new l;(t=this._childLayoutsArray[0].getComponent(l)).type=l.Type.VERTICAL,t.resizeMode=l.ResizeMode.CONTAINER},s._initChildAnchorPoint=function(){new u;this._childLayoutsArray[0].getComponent(u).anchorY=.95},s._getNumberHeight=function(){var t;this._numberHeight=(null===(t=this._childLayoutsArray[0].getComponent(u))||void 0===t?void 0:t.contentSize.height)/11},s.setNumber=function(t){if(this._numStr=t,isNaN(Number(t)))console.log("Not a number!"),this._isOk2Roll=!1;else{var i=t.length-this._childLayoutsArray.length;if(i>0){for(var e=0;e<i;e++){var o=c(this.node.children[0]);this._childLayoutsArray.push(o),this.node.addChild(o)}this._refreshChildLayoutPositionX()}else if(i<0){for(var n=0;n>i;n--)this._childLayoutsArray[this._childLayoutsArray.length-1].removeFromParent(),this._childLayoutsArray.splice(this._childLayoutsArray.length-1,1);this._refreshChildLayoutPositionX()}this._isOk2Roll=!0}},s._refreshChildLayoutPositionX=function(){for(var t,i=null===(t=this._childLayoutsArray[0].getComponent(u))||void 0===t?void 0:t.contentSize.width,e=this._childLayoutsArray[0].position.y,o=0;o<this._childLayoutsArray.length;o++)this._childLayoutsArray[o].setPosition(o*i,e,0)},s.show=function(){this._isOk2Roll?this._roll():console.log("Can not roll a NAN or the previous tween is not finished.")},s._roll=function(){for(var t=0,i=0;i<this._numStr.length;i++){t="."==this._numStr[i]?10*this._numberHeight:Number(this._numStr[i])*this._numberHeight;var e=this._childLayoutsArray[i];e.setPosition(e.position.x,0,0),y(e).by(this.rollTime,{position:new _(0,t,0)},{easing:"sineOut"}).start()}},s.setRollTime=function(t){this.rollTime=t},s.btn=function(){var t,i=null===(t=this.editBox.getComponent(d))||void 0===t?void 0:t.string;this.setNumber(i),this.show()},i}(m)).prototype,"editBox",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),b=i(L.prototype,"rollTime",[N],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 2}}),g=L))||g));s._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./MW_Rolling_Number.ts"],(function(){"use strict";return{setters:[null],execute:function(){}}}));

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