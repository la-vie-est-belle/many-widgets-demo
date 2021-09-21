System.register("chunks:///_virtual/GameManager.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var t,r,n,a;return{setters:[function(e){t=e.inheritsLoose},function(e){r=e.cclegacy,n=e._decorator,a=e.Component}],execute:function(){var o;r._RF.push({},"0ef62pavldP5qf/8czgxbJ9","GameManager",void 0);var c=n.ccclass;n.property,e("GameManager",c("GameManager")(o=function(e){function r(){return e.apply(this,arguments)||this}return t(r,e),r.prototype.start=function(){},r}(a))||o);r._RF.pop()}}}));

System.register("chunks:///_virtual/test.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var e,r,o,n,i,a,s,l;return{setters:[function(t){e=t.applyDecoratedDescriptor,r=t.inheritsLoose,o=t.initializerDefineProperty,n=t.assertThisInitialized},function(t){i=t.cclegacy,a=t._decorator,s=t.Node,l=t.Component}],execute:function(){var u,c,d,p,f;i._RF.push({},"c8e02zZRM1LBIkWuxGsmRa/","test",void 0);var g=a.ccclass,h=a.property;t("Test",(u=g("Test"),c=h({type:s}),u((f=e((p=function(t){function e(){for(var e,r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];return e=t.call.apply(t,[this].concat(i))||this,o(n(e),"targetNode",f,n(e)),e}r(e,t);var i=e.prototype;return i.start=function(){},i.rotateClockwise=function(){this.targetNode.setRotationFromEuler(this.targetNode.eulerAngles.add3f(0,-10,0))},i.rotateAntiClockwise=function(){this.targetNode.setRotationFromEuler(this.targetNode.eulerAngles.add3f(0,10,0))},i.rotateUp=function(){this.targetNode.setRotationFromEuler(this.targetNode.eulerAngles.add3f(-10,0,0))},i.rotateDown=function(){this.targetNode.setRotationFromEuler(this.targetNode.eulerAngles.add3f(10,0,0))},e}(l)).prototype,"targetNode",[c],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),d=p))||d));i._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./GameManager.ts","./test.ts"],(function(){"use strict";return{setters:[null,null],execute:function(){}}}));

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