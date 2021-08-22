System.register("chunks:///_virtual/MW_SpinBox.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var n,i,e,r,s,u,o,a,c,h,l,p;return{setters:[function(t){n=t.applyDecoratedDescriptor,i=t.inheritsLoose,e=t.initializerDefineProperty,r=t.assertThisInitialized,s=t.defineProperty},function(t){u=t.cclegacy,o=t._decorator,a=t.EditBox,c=t.Button,h=t.Label,l=t.Node,p=t.Component}],execute:function(){var _,m,d,f,b;u._RF.push({},"5b3d1OdbnVC95AEyyt0BFYC","MW_SpinBox",void 0);var N=o.ccclass,g=o.property;t("MWSpinBox",N("MWSpinBox")((d=n((m=function(t){function n(){for(var n,i=arguments.length,u=new Array(i),o=0;o<i;o++)u[o]=arguments[o];return n=t.call.apply(t,[this].concat(u))||this,e(r(n),"step",d,r(n)),e(r(n),"minValue",f,r(n)),e(r(n),"maxValue",b,r(n)),s(r(n),"_currtentNum",0),s(r(n),"_spinTextLabel",new l),s(r(n),"_spinLabelComponent",new h),s(r(n),"_upBtn",new l),s(r(n),"_downBtn",new l),n}i(n,t);var u=n.prototype;return u.start=function(){this._init()},u._init=function(){this._initNode(),this._initEvent(),this._initLabelComponent()},u._initNode=function(){var t=this.node.children[0];t.on(a.EventType.TEXT_CHANGED,this._checkText,this),this._spinTextLabel=t.children[0],this._upBtn=this.node.children[1].children[0],this._downBtn=this.node.children[1].children[1]},u._initEvent=function(){this._upBtn.on(c.EventType.CLICK,this._addNum,this),this._downBtn.on(c.EventType.CLICK,this._minusNum,this)},u._initLabelComponent=function(){this._spinLabelComponent=this._spinTextLabel.getComponent(h)},u._addNum=function(){this._currtentNum+=this.step,this._currtentNum>this.maxValue&&(this._currtentNum=this.maxValue),this._spinLabelComponent.string=this._currtentNum.toString()},u._minusNum=function(){this._currtentNum-=this.step,this._currtentNum<this.minValue&&(this._currtentNum=this.minValue),this._spinLabelComponent.string=this._currtentNum.toString()},u._checkText=function(){var t=Number(this._spinLabelComponent.string);isNaN(t)||t<this.maxValue&&t>this.minValue&&(this._currtentNum=t),this._spinLabelComponent.string=this._currtentNum.toString()},u.setValue=function(t){this._currtentNum=t,this._spinLabelComponent.string=this._currtentNum.toString()},u.clear=function(){this._currtentNum=0,this._spinLabelComponent.string=this._currtentNum.toString()},u.setMaxValue=function(t){this.maxValue=t},u.setMinValue=function(t){this.minValue=t},u.setStep=function(t){this.step=t},n}(p)).prototype,"step",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 1}}),f=n(m.prototype,"minValue",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),b=n(m.prototype,"maxValue",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 99999}}),_=m))||_);u._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./MW_SpinBox.ts"],(function(){"use strict";return{setters:[null],execute:function(){}}}));

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