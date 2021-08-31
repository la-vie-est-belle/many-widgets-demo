System.register("chunks:///_virtual/MW_2DFollow3D.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(n){"use strict";var o,t,e,i,r,a,c,s;return{setters:[function(n){o=n.inheritsLoose,t=n.defineProperty,e=n.assertThisInitialized},function(n){i=n.cclegacy,r=n._decorator,a=n.find,c=n.CameraComponent,s=n.Component}],execute:function(){var l;i._RF.push({},"3fa94coDl1HX5gLb1uYdEeN","MW_2DFollow3D",void 0);var u=r.ccclass;r.property,n("MW2DFollow3D",u("MW2DFollow3D")(l=function(n){function i(){for(var o,i=arguments.length,r=new Array(i),a=0;a<i;a++)r[a]=arguments[a];return o=n.call.apply(n,[this].concat(r))||this,t(e(o),"_cameraComonent",new c),o}o(i,n);var r=i.prototype;return r.onLoad=function(){this._init()},r.start=function(){},r._init=function(){this._initCamera(),this._changeLayer()},r._initCamera=function(){var n=a("Main Camera");this._cameraComonent=n.getComponent(c)},r._changeLayer=function(){this.node.layer=1<<25;for(var n=0;n<this.node.children.length;n++)this.node.children[n].layer=1<<25},r.follow=function(n,o){var t=n.getWorldPosition(),e=this._cameraComonent.convertToUINode(t,a("Canvas"));this.node.setPosition(e.add(o))},i}(s))||l);i._RF.pop()}}}));

System.register("chunks:///_virtual/GameManager.ts",["./_rollupPluginModLoBabelHelpers.js","cc","./MW_2DFollow3D.ts"],(function(e){"use strict";var t,n,o,i,r,s,a,l,c,d,u,p;return{setters:[function(e){t=e.applyDecoratedDescriptor,n=e.inheritsLoose,o=e.initializerDefineProperty,i=e.assertThisInitialized},function(e){r=e.cclegacy,s=e._decorator,a=e.Node,l=e.Vec3,c=e.systemEvent,d=e.SystemEvent,u=e.Component},function(e){p=e.MW2DFollow3D}],execute:function(){var D,h,f,v,y,g,m;r._RF.push({},"6383e9xULRM2ZOngHTSYE7g","GameManager",void 0);var _=s.ccclass,b=s.property;e("GameManager",(D=_("GameManager"),h=b({type:a}),f=b({type:a}),D((g=t((y=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return t=e.call.apply(e,[this].concat(r))||this,o(i(t),"node2D",g,i(t)),o(i(t),"node3D",m,i(t)),t}n(t,e);var r=t.prototype;return r.start=function(){var e;this._initEvent(),null===(e=this.node2D.getComponent(p))||void 0===e||e.follow(this.node3D,new l(0,50,0))},r._initEvent=function(){c.on(d.EventType.KEY_DOWN,this._move,this)},r._move=function(e){var t;switch(e.keyCode){case 65:this.node3D.setPosition(this.node3D.position.add3f(-2,0,0));break;case 68:this.node3D.setPosition(this.node3D.position.add3f(2,0,0));break;case 87:this.node3D.setPosition(this.node3D.position.add3f(0,0,-2));break;case 83:this.node3D.setPosition(this.node3D.position.add3f(0,0,2))}null===(t=this.node2D.getComponent(p))||void 0===t||t.follow(this.node3D,new l(0,50,0))},t}(u)).prototype,"node2D",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),m=t(y.prototype,"node3D",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),v=y))||v));r._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./MW_2DFollow3D.ts","./GameManager.ts"],(function(){"use strict";return{setters:[null,null],execute:function(){}}}));

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