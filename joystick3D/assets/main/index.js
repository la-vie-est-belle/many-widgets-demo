System.register("chunks:///_virtual/MW_Joystick3D.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var e,i,o,n,s,a,r,h,c,d,l,p;return{setters:[function(t){e=t.applyDecoratedDescriptor,i=t.inheritsLoose,o=t.initializerDefineProperty,n=t.assertThisInitialized,s=t.defineProperty},function(t){a=t.cclegacy,r=t._decorator,h=t.Node,c=t.UITransform,d=t.Vec3,l=t.Vec2,p=t.Component}],execute:function(){var u,_,v,y,f,m,T,g,N;a._RF.push({},"191aaoHjZ1Du4me5a/xI4Db","MW_Joystick3D",void 0);var D=r.ccclass,S=r.property;t("MWJoystick3D",(u=D("MWJoystick3D"),_=S({type:h}),v=S({type:h}),u((m=e((f=function(t){function e(){for(var e,i=arguments.length,a=new Array(i),r=0;r<i;r++)a[r]=arguments[r];return e=t.call.apply(t,[this].concat(a))||this,o(n(e),"targetNode",m,n(e)),o(n(e),"camera3D",T,n(e)),o(n(e),"playerSpeed",g,n(e)),o(n(e),"cameraSpeed",N,n(e)),s(n(e),"_isMoving",!1),s(n(e),"_childNode",new h),s(n(e),"_moveDir",new d(0,1,0)),s(n(e),"_nodeUITransform",new c),s(n(e),"_startPos",new l),s(n(e),"_isOnlyFourDirections",!1),e}i(e,t);var a=e.prototype;return a.onLoad=function(){this._init(),this.isCameraMovable(!0)},a.start=function(){},a._init=function(){this._changeLayer(),this._initNode(),this._initTouchEvent(),this._initUITransform()},a._changeLayer=function(){this.node.layer=1<<25;for(var t=0;t<this.node.children.length;t++)this.node.children[t].layer=1<<25},a._initNode=function(){this._childNode=this.node.children[0]},a._initUITransform=function(){this._nodeUITransform=this.node.getComponent(c)},a._initTouchEvent=function(){this.node.on(h.EventType.TOUCH_START,this._onJoystickTouchStart,this),this.node.on(h.EventType.TOUCH_MOVE,this._onJoystickTouchMove,this),this.node.on(h.EventType.TOUCH_END,this._onJoystickTouchEnd,this),this.node.on(h.EventType.TOUCH_CANCEL,this._onJoystickTouchCancel,this)},a._onJoystickTouchStart=function(t){this._isMoving=!0;var e=t.getUILocation(),i=this._nodeUITransform.convertToNodeSpaceAR(new d(e.x,e.y,0));this._childNode.setPosition(i),this._moveDir=new d(this._childNode.position.x,this._childNode.position.y,0).normalize(),t.propagationStopped=!0},a._onJoystickTouchMove=function(t){var e=t.getDelta();this._childNode.setPosition(this._childNode.position.add3f(e.x,e.y,0)),this._moveDir=new d(this._childNode.position.x,this._childNode.position.y,0).normalize(),t.propagationStopped=!0},a._onJoystickTouchEnd=function(t){this._isMoving=!1,this._childNode.setPosition(d.ZERO),t.propagationStopped=!0},a._onJoystickTouchCancel=function(t){this._isMoving=!1,this._childNode.setPosition(d.ZERO),t.propagationStopped=!0},a._onCanvasTouchStart=function(t){this._startPos=t.getUILocation()},a._onCanvasTouchMove=function(t){var e=t.getUILocation();e.x-this._startPos.x>150?this.camera3D.setRotationFromEuler(this.camera3D.eulerAngles.add3f(0,this.cameraSpeed,0)):e.x-this._startPos.x<-150&&this.camera3D.setRotationFromEuler(this.camera3D.eulerAngles.add3f(0,-this.cameraSpeed,0)),e.y-this._startPos.y>150?this.camera3D.setRotationFromEuler(this.camera3D.eulerAngles.add3f(-this.cameraSpeed,0,0)):e.y-this._startPos.y<-150&&this.camera3D.setRotationFromEuler(this.camera3D.eulerAngles.add3f(this.cameraSpeed,0,0))},a._limitChildNode=function(){var t=this._childNode.position.x,e=this._childNode.position.y,i=new d(t,e,0).length()/(this._nodeUITransform.width/2);i>1&&this._childNode.setPosition(t/i,e/i,0)},a._rotateTargetNode=function(){var t=new l(this._moveDir.x,this._moveDir.y).signAngle(new l(1,0))/Math.PI*180+90;this.targetNode.setRotationFromEuler(0,-t,0)},a._moveTargetNode=function(){var t=this._moveDir.x,e=this._moveDir.y;this.targetNode.setPosition(this.targetNode.position.add3f(t*this.playerSpeed,0,-e*this.playerSpeed))},a.setTargetNode=function(t){this.targetNode=t},a.setPlayerSpeed=function(t){this.playerSpeed=t},a.setCameraSpeed=function(t){this.cameraSpeed=t},a.isCameraMovable=function(t){var e,i,o,n;t?(null===(e=this.node.parent)||void 0===e||e.on(h.EventType.TOUCH_START,this._onCanvasTouchStart,this),null===(i=this.node.parent)||void 0===i||i.on(h.EventType.TOUCH_MOVE,this._onCanvasTouchMove,this)):(null===(o=this.node.parent)||void 0===o||o.off(h.EventType.TOUCH_START,this._onCanvasTouchStart,this),null===(n=this.node.parent)||void 0===n||n.off(h.EventType.TOUCH_MOVE,this._onCanvasTouchMove,this))},a.update=function(t){this._limitChildNode(),this._isMoving&&(this._rotateTargetNode(),this._moveTargetNode())},e}(p)).prototype,"targetNode",[_],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return new h}}),T=e(f.prototype,"camera3D",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return new h}}),g=e(f.prototype,"playerSpeed",[S],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return.1}}),N=e(f.prototype,"cameraSpeed",[S],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return.5}}),y=f))||y));a._RF.pop()}}}));

System.register("chunks:///_virtual/GameManager.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var t,r,o,a,n,i,s,l;return{setters:[function(e){t=e.applyDecoratedDescriptor,r=e.inheritsLoose,o=e.initializerDefineProperty,a=e.assertThisInitialized},function(e){n=e.cclegacy,i=e._decorator,s=e.Node,l=e.Component}],execute:function(){var u,c,d,g,p;n._RF.push({},"c8e02zZRM1LBIkWuxGsmRa/","GameManager",void 0);var f=i.ccclass,h=i.property;e("GameManager",(u=f("GameManager"),c=h({type:s}),u((p=t((g=function(e){function t(){for(var t,r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return t=e.call.apply(e,[this].concat(n))||this,o(a(t),"targetNode",p,a(t)),t}r(t,e);var n=t.prototype;return n.start=function(){},n.rotateClockwise=function(){this.targetNode.setRotationFromEuler(this.targetNode.eulerAngles.add3f(0,-10,0))},n.rotateAntiClockwise=function(){this.targetNode.setRotationFromEuler(this.targetNode.eulerAngles.add3f(0,10,0))},n.rotateUp=function(){this.targetNode.setRotationFromEuler(this.targetNode.eulerAngles.add3f(-10,0,0))},n.rotateDown=function(){this.targetNode.setRotationFromEuler(this.targetNode.eulerAngles.add3f(10,0,0))},t}(l)).prototype,"targetNode",[c],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),d=g))||d));n._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./MW_Joystick3D.ts","./GameManager.ts"],(function(){"use strict";return{setters:[null,null],execute:function(){}}}));

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