System.register("chunks:///_virtual/GameManager.ts",["cc"],(function(){"use strict";var e;return{setters:[function(t){e=t.cclegacy}],execute:function(){e._RF.push({},"0ef62pavldP5qf/8czgxbJ9","GameManager",void 0),e._RF.pop()}}}));

System.register("chunks:///_virtual/shader-test.ts",["cc","./_rollupPluginModLoBabelHelpers.js"],(function(e){"use strict";var t,r,i,n,l,o,s,a,p,u,c;return{setters:[function(e){t=e.cclegacy,r=e._decorator,i=e.Node,n=e.Slider,l=e.Label,o=e.Sprite,s=e.Component},function(e){a=e.applyDecoratedDescriptor,p=e.inheritsLoose,u=e.initializerDefineProperty,c=e.assertThisInitialized}],execute:function(){var d,h,f,y,b,g,v,m,S;t._RF.push({},"1bb17bFyipE856EyORI3p5H","shader-test",void 0);var z=r.ccclass,N=r.property;e("ShaderTest",(d=z("ShaderTest"),h=N({type:i}),f=N({type:n}),y=N({type:l}),d((v=a((g=function(e){function t(){for(var t,r=arguments.length,i=new Array(r),n=0;n<r;n++)i[n]=arguments[n];return t=e.call.apply(e,[this].concat(i))||this,u(c(t),"spriteNode",v,c(t)),u(c(t),"slider",m,c(t)),u(c(t),"label",S,c(t)),t}p(t,e);var r=t.prototype;return r.start=function(){var e=this.spriteNode.getComponent(o).material;null==e||e.setProperty("reliefThreshold",0)},r.changeAgingValue=function(){var e=this.spriteNode.getComponent(o),t=null==e?void 0:e.material;null==t||t.setProperty("reliefThreshold",this.slider.progress),this.label.string=this.slider.progress.toFixed(2).toString()},t}(s)).prototype,"spriteNode",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),m=a(g.prototype,"slider",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),S=a(g.prototype,"label",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),b=g))||b));t._RF.pop()}}}));

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