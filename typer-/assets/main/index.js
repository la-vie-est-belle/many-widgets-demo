System.register("chunks:///_virtual/MW_Typer.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var t,n,i,r,s,l,o,a,c,u;return{setters:[function(e){t=e.applyDecoratedDescriptor,n=e.inheritsLoose,i=e.initializerDefineProperty,r=e.assertThisInitialized,s=e.defineProperty},function(e){l=e.cclegacy,o=e._decorator,a=e.CCFloat,c=e.Label,u=e.Component}],execute:function(){var h,p,_,d,g;l._RF.push({},"dd0fd3Kig5IU5BU2jqFVYQc","MW_Typer",void 0);var f=o.ccclass,y=o.property;e("MwTyper",(h=f("MWTyper"),p=y({type:a}),h((g=t((d=function(e){function t(){for(var t,n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return t=e.call.apply(e,[this].concat(l))||this,i(r(t),"scheduleInterval",g,r(t)),s(r(t),"_label",new c),s(r(t),"_defaultString",""),s(r(t),"_scheduleCount",0),t}n(t,e);var l=t.prototype;return l.start=function(){this._changeLayer(),this.go()},l._changeLayer=function(){this.node.layer=1<<25},l.go=function(){this._label=this.node.getComponent(c),this._defaultString=this._label.string,this._label.string="",this.schedule(this._typing,this.scheduleInterval,this._defaultString.length-1)},l._typing=function(){this._label.string+=this._defaultString[this._scheduleCount],this._scheduleCount++},t}(u)).prototype,"scheduleInterval",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return.1}}),_=d))||_));l._RF.pop()}}}));

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