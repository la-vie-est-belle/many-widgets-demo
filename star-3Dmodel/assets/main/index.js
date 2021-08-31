System.register("chunks:///_virtual/GameManager.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var t,r,o,a,n,i,s,l;return{setters:[function(e){t=e.applyDecoratedDescriptor,r=e.inheritsLoose,o=e.initializerDefineProperty,a=e.assertThisInitialized},function(e){n=e.cclegacy,i=e._decorator,s=e.Node,l=e.Component}],execute:function(){var u,c,d,g,p;n._RF.push({},"c8e02zZRM1LBIkWuxGsmRa/","GameManager",void 0);var f=i.ccclass,h=i.property;e("GameManager",(u=f("GameManager"),c=h({type:s}),u((p=t((g=function(e){function t(){for(var t,r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return t=e.call.apply(e,[this].concat(n))||this,o(a(t),"targetNode",p,a(t)),t}r(t,e);var n=t.prototype;return n.start=function(){},n.rotateClockwise=function(){this.targetNode.setRotationFromEuler(this.targetNode.eulerAngles.add3f(0,-10,0))},n.rotateAntiClockwise=function(){this.targetNode.setRotationFromEuler(this.targetNode.eulerAngles.add3f(0,10,0))},n.rotateUp=function(){this.targetNode.setRotationFromEuler(this.targetNode.eulerAngles.add3f(-10,0,0))},n.rotateDown=function(){this.targetNode.setRotationFromEuler(this.targetNode.eulerAngles.add3f(10,0,0))},t}(l)).prototype,"targetNode",[c],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),d=g))||d));n._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./GameManager.ts"],(function(){"use strict";return{setters:[null],execute:function(){}}}));

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