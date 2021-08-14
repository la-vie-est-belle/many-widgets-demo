System.register("chunks:///_virtual/MW_Typer.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var e,i,n,r,s,l,o,a,u,c;return{setters:[function(t){e=t.applyDecoratedDescriptor,i=t.inheritsLoose,n=t.initializerDefineProperty,r=t.assertThisInitialized,s=t.defineProperty},function(t){l=t.cclegacy,o=t._decorator,a=t.CCFloat,u=t.Label,c=t.Component}],execute:function(){var h,p,f,_,d;l._RF.push({},"fbf04tIfNNFSrQ5Ss+zW+OB","MW_Typer",void 0);var g=o.ccclass,y=o.property;t("MwTyper",(h=g("MWTyper"),p=y({type:a}),h((d=e((_=function(t){function e(){for(var e,i=arguments.length,l=new Array(i),o=0;o<i;o++)l[o]=arguments[o];return e=t.call.apply(t,[this].concat(l))||this,n(r(e),"scheduleInterval",d,r(e)),s(r(e),"_label",new u),s(r(e),"_defaultString",""),s(r(e),"_scheduleCount",0),e}i(e,t);var l=e.prototype;return l.start=function(){this.go()},l.go=function(){this._label=this.node.getComponent(u),this._defaultString=this._label.string,this._label.string="",this.schedule(this._typing,this.scheduleInterval,this._defaultString.length-1)},l._typing=function(){this._label.string+=this._defaultString[this._scheduleCount],this._scheduleCount++},e}(c)).prototype,"scheduleInterval",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return.1}}),f=_))||f));l._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./MW_Typer.ts"],(function(){"use strict";return{setters:[null],execute:function(){}}}));

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