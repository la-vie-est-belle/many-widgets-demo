System.register("chunks:///_virtual/GameManager.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(n){"use strict";var t,e,o,i,r,a,s,c,u,p,l,v;return{setters:[function(n){t=n.applyDecoratedDescriptor,e=n.inheritsLoose,o=n.initializerDefineProperty,i=n.assertThisInitialized,r=n.defineProperty},function(n){a=n.cclegacy,s=n._decorator,c=n.Node,u=n.find,p=n.UITransform,l=n.Vec3,v=n.Component}],execute:function(){var h,f,y,d,g,_,T;a._RF.push({},"0ef62pavldP5qf/8czgxbJ9","GameManager",void 0);var m=s.ccclass,b=s.property;n("GameManager",(h=m("GameManager"),f=b({type:c}),y=b({type:c}),h((_=t((g=function(n){function t(){for(var t,e=arguments.length,a=new Array(e),s=0;s<e;s++)a[s]=arguments[s];return t=n.call.apply(n,[this].concat(a))||this,o(i(t),"person",_,i(t)),o(i(t),"arrow",T,i(t)),r(i(t),"canvas",new c),t}e(t,n);var a=t.prototype;return a.start=function(){this._initNodes(),this._initEvents()},a._initNodes=function(){this.canvas=u("Canvas")},a._initEvents=function(){this.canvas.on(c.EventType.TOUCH_START,this._onTouchStart,this),this.canvas.on(c.EventType.TOUCH_MOVE,this._onTouchMove,this)},a._onTouchStart=function(n){var t,e=n.getUILocation().x,o=n.getUILocation().y,i=null===(t=this.canvas.getComponent(p))||void 0===t?void 0:t.convertToNodeSpaceAR(new l(e,o,0));this.person.setPosition(i.x,i.y,0)},a._onTouchMove=function(n){var t,e=n.getUILocation().x,o=n.getUILocation().y,i=null===(t=this.canvas.getComponent(p))||void 0===t?void 0:t.convertToNodeSpaceAR(new l(e,o,0));this.person.setPosition(i.x,i.y,0)},t}(v)).prototype,"person",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),T=t(g.prototype,"arrow",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),d=g))||d));a._RF.pop()}}}));

System.register("chunks:///_virtual/shader-test.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var t,r,i,n,o,l,s,a,p,u,c;return{setters:[function(e){t=e.applyDecoratedDescriptor,r=e.inheritsLoose,i=e.initializerDefineProperty,n=e.assertThisInitialized},function(e){o=e.cclegacy,l=e._decorator,s=e.Node,a=e.Slider,p=e.Label,u=e.Sprite,c=e.Component}],execute:function(){var d,h,y,b,f,g,v,m,S;o._RF.push({},"1bb17bFyipE856EyORI3p5H","shader-test",void 0);var z=l.ccclass,N=l.property;e("ShaderTest",(d=z("ShaderTest"),h=N({type:s}),y=N({type:a}),b=N({type:p}),d((v=t((g=function(e){function t(){for(var t,r=arguments.length,o=new Array(r),l=0;l<r;l++)o[l]=arguments[l];return t=e.call.apply(e,[this].concat(o))||this,i(n(t),"spriteNode",v,n(t)),i(n(t),"slider",m,n(t)),i(n(t),"label",S,n(t)),t}r(t,e);var o=t.prototype;return o.start=function(){var e=this.spriteNode.getComponent(u).material;null==e||e.setProperty("poisonousThreshold",0)},o.changeAgingValue=function(){var e=this.spriteNode.getComponent(u),t=null==e?void 0:e.material;null==t||t.setProperty("poisonousThreshold",this.slider.progress),this.label.string=this.slider.progress.toFixed(2).toString()},t}(c)).prototype,"spriteNode",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),m=t(g.prototype,"slider",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),S=t(g.prototype,"label",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),f=g))||f));o._RF.pop()}}}));

System.register("chunks:///_virtual/test.ts",["cc"],(function(){"use strict";var t;return{setters:[function(e){t=e.cclegacy}],execute:function(){t._RF.push({},"c8e02zZRM1LBIkWuxGsmRa/","test",void 0),t._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./GameManager.ts","./shader-test.ts","./test.ts"],(function(){"use strict";return{setters:[null,null,null],execute:function(){}}}));

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