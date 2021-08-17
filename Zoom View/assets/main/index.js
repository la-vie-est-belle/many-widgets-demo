System.register("chunks:///_virtual/MW_ZoomView.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var e,i,o,s,n,r,h,c,a,_;return{setters:[function(t){e=t.inheritsLoose,i=t.defineProperty,o=t.assertThisInitialized},function(t){s=t.cclegacy,n=t._decorator,r=t.UITransform,h=t.SystemEventType,c=t.Vec3,a=t.Node,_=t.Component}],execute:function(){var d;s._RF.push({},"f89cdkEyfFIWrXu8lHXSLCx","MW_ZoomView",void 0);var p=n.ccclass;n.property,t("MWZoomView",p("MWZoomView")(d=function(t){function s(){for(var e,s=arguments.length,n=new Array(s),h=0;h<s;h++)n[h]=arguments[h];return e=t.call.apply(t,[this].concat(n))||this,i(o(e),"_spriteNode",new a),i(o(e),"_scaleViewUITransform",new r),i(o(e),"_startPos1",new c),i(o(e),"_startPos2",new c),i(o(e),"_touchDis",0),e}e(s,t);var n=s.prototype;return n.start=function(){this._init()},n._init=function(){this._changeLayer(),this._initSpriteNode(),this._initScaleViewUITransform(),this._initEvents()},n._changeLayer=function(){this.node.layer=1<<25;for(var t=0;t<this.node.children.length;t++)this.node.children[t].layer=1<<25},n._initSpriteNode=function(){this._spriteNode=this.node.children[0]},n._initScaleViewUITransform=function(){this._scaleViewUITransform=this.node.getComponent(r)},n._initEvents=function(){this.node.on(h.TOUCH_START,this._onTouchStart,this),this.node.on(h.TOUCH_MOVE,this._onTouchMove,this)},n._onTouchStart=function(t){var e=t.getTouches();if(2==e.length){var i=e[0].getLocation(),o=e[1].getLocation();this._startPos1=this._scaleViewUITransform.convertToNodeSpaceAR(new c(i.x,i.y,0)),this._startPos2=this._scaleViewUITransform.convertToNodeSpaceAR(new c(o.x,o.y,0)),this._touchDis=c.distance(this._startPos1,this._startPos2)}},n._onTouchMove=function(t){var e=t.getTouches();if(1==e.length){var i=t.getDelta();this._spriteNode.setPosition(this._spriteNode.position.add3f(i.x,i.y,0))}else if(2==e.length){var o=e[0].getLocation(),s=e[1].getLocation(),n=this._scaleViewUITransform.convertToNodeSpaceAR(new c(o.x,o.y,0)),r=this._scaleViewUITransform.convertToNodeSpaceAR(new c(s.x,s.y,0)),h=c.distance(n,r);if(this._touchDis||(this._touchDis=0),h>this._touchDis)this._touchDis=h,this._spriteNode.setScale(this._spriteNode.scale.add3f(.5,.5,0));else if(h<this._touchDis){if(this._spriteNode.scale.x<=1)return void this._spriteNode.setScale(1,1,0);this._touchDis=h,this._spriteNode.setScale(this._spriteNode.scale.add3f(-.5,-.5,0))}}this._restrictSprite()},n._restrictSprite=function(){var t,e,i,o,s=this._spriteNode.position.x,n=this._spriteNode.position.y,h=(null===(t=this._spriteNode.getComponent(r))||void 0===t?void 0:t.contentSize.width)*this._spriteNode.scale.x,c=(null===(e=this._spriteNode.getComponent(r))||void 0===e?void 0:e.contentSize.height)*this._spriteNode.scale.y,a=null===(i=this.node.getComponent(r))||void 0===i?void 0:i.contentSize.width,_=null===(o=this.node.getComponent(r))||void 0===o?void 0:o.contentSize.height;s>0&&s>h/2-a/2&&(s=h/2-a/2,this._spriteNode.setPosition(s,n,0)),s<0&&s<a/2-h/2&&(s=a/2-h/2,this._spriteNode.setPosition(s,n,0)),n>0&&n>c/2-_/2&&(n=c/2-_/2,this._spriteNode.setPosition(s,n,0)),n<0&&n<_/2-c/2&&(n=_/2-c/2,this._spriteNode.setPosition(s,n,0))},n.setSpriteFrame=function(){},s}(_))||d);s._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./MW_ZoomView.ts"],(function(){"use strict";return{setters:[null],execute:function(){}}}));

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