(function(e){function n(n){for(var a,s,o=n[0],l=n[1],c=n[2],p=0,d=[];p<o.length;p++)s=o[p],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&d.push(r[s][0]),r[s]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);u&&u(n);while(d.length)d.shift()();return i.push.apply(i,c||[]),t()}function t(){for(var e,n=0;n<i.length;n++){for(var t=i[n],a=!0,o=1;o<t.length;o++){var l=t[o];0!==r[l]&&(a=!1)}a&&(i.splice(n--,1),e=s(s.s=t[0]))}return e}var a={},r={app:0},i=[];function s(n){if(a[n])return a[n].exports;var t=a[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.m=e,s.c=a,s.d=function(e,n,t){s.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,n){if(1&n&&(e=s(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(s.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)s.d(t,a,function(n){return e[n]}.bind(null,a));return t},s.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(n,"a",n),n},s.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=n,o=o.slice();for(var c=0;c<o.length;c++)n(o[c]);var u=l;i.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"022a":function(e,n,t){},"034f":function(e,n,t){"use strict";t("85ec")},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var a=t("2b0e"),r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("h1",{staticClass:"h1"},[e._v("Decimal To IEEE745 and IEEE745 To Decimal Online Converter")]),t("BinToIeee"),e._m(0)],1)},i=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("h6",{staticClass:"h6"},[e._v("Made By "),t("a",{staticClass:"h6a",attrs:{href:"https://www.linkedin.com/in/zied-maaloul-162a9b96/",target:"_blank"}},[e._v("Zied Maaloul")])])}],s=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",[t("b-field",{attrs:{horizontal:"",label:"Decimal"}},[t("b-input",{attrs:{name:"decimal",expanded:""},model:{value:e.Decimal,callback:function(n){e.Decimal=n},expression:"Decimal"}})],1),t("b-field",{staticClass:"recadredclass",attrs:{grouped:""}},[t("b-field",{attrs:{label:"Exposant"}},[t("b-input",{attrs:{name:"Exposant",expanded:"",readonly:""},model:{value:e.Exposant,callback:function(n){e.Exposant=n},expression:"Exposant"}})],1),t("b-field",{attrs:{label:"Exposant Norme",expanded:""}},[t("b-input",{attrs:{name:"ExposantNorme",expanded:"",readonly:""},model:{value:e.ExposantNorme,callback:function(n){e.ExposantNorme=n},expression:"ExposantNorme"}})],1),t("b-field",{attrs:{label:"Exposant Binary",expanded:""}},[t("b-input",{attrs:{name:"ExposantBinary",expanded:"",readonly:""},model:{value:e.ExposantBinary,callback:function(n){e.ExposantBinary=n},expression:"ExposantBinary"}})],1)],1),t("b-field",{staticClass:"recadredclass",attrs:{grouped:""}},[t("b-field",{attrs:{label:"Mantisse"}},[t("b-input",{attrs:{name:"Mantisse",expanded:"",readonly:""},model:{value:e.Mantisse,callback:function(n){e.Mantisse=n},expression:"Mantisse"}})],1),t("b-field",{attrs:{label:"Mantisse Norme",expanded:""}},[t("b-input",{attrs:{name:"MantisseNorme",expanded:"",readonly:""},model:{value:e.MantisseNorme,callback:function(n){e.MantisseNorme=n},expression:"MantisseNorme"}})],1),t("b-field",{attrs:{label:"Mantisse Binary",expanded:""}},[t("b-input",{attrs:{name:"MantisseBinary",expanded:"",readonly:""},model:{value:e.MantisseBinary,callback:function(n){e.MantisseBinary=n},expression:"MantisseBinary"}})],1)],1),t("b-field",{attrs:{horizontal:"",label:"IEEE745 Binaire"}},[t("b-input",{attrs:{name:"ieee745bin",expanded:""},model:{value:e.IeeeBin,callback:function(n){e.IeeeBin=n},expression:"IeeeBin"}})],1),t("b-field",{attrs:{horizontal:"",label:"IEEE745 Hexa"}},[t("b-input",{attrs:{name:"ieee745hexa",expanded:""},model:{value:e.IeeeHexa,callback:function(n){e.IeeeHexa=n},expression:"IeeeHexa"}})],1),t("b-field",{attrs:{horizontal:""}},[t("p",{staticClass:"control"},[t("b-button",{attrs:{label:"Convert Bin To Ieee",type:"is-primary"},on:{click:function(n){return e.ConvertDecimalToIeee()}}})],1)])],1)},o=[],l=(t("d3b7"),t("25f0"),t("ac1f"),t("5319"),t("289d"));t("5abe");a["a"].use(l["a"]);var c={name:"BinToIeee",props:{msg:String},methods:{dec2bin:function(e){return(e>>>0).toString(2)},DecimalApresVirgule2bin:function(e){var n=parseFloat(e);console.log(n);var t="";while(0!=n)n*=2,n>=1?(t+="1",n-=1):t+="0",console.log("newValue ==> "+n);return t},getNewExposant:function(e){var n="";return"1"==e[0]?n=e.indexOf(",")-1:"1"==e[e.indexOf(",")+1]&&(n=-1),n},getExposantFullBinary:function(e){var n=e;if(e.length<8)for(var t=0;t<8-e.length;t++)n="0"+n;return n},getMantisseFullBinary:function(e){var n=e,t="",a=0;if(n.length<23){a=23-n.length;for(var r=0;r<a;r++)t+="0";n+=t}return n},calculHexaDecimalFormBinary:function(e){for(var n=["A","B","C","D","E","F"],t="",a="",r="",i=0;i<8;i++)r=e[4*i]*Math.pow(2,3)+e[4*i+1]*Math.pow(2,2)+e[4*i+2]*Math.pow(2,1)+e[4*i+3]*Math.pow(2,0),a=r<10?r:n[r-10],t+=a;return t},ConvertDecimalToIeee:function(){var e;e="";var n=this.Decimal,t="";"-"==n[0]?(e=1,n=n.substring(1)):e=0;var a=n.substring(0,n.indexOf(",")),r=n.substring(n.indexOf(",")+1);r="0."+r;var i=this.DecimalApresVirgule2bin(r),s=this.dec2bin(a)+" "+i;this.Bin=s;var o=this.dec2bin(a)+","+i,l=this.getNewExposant(o);this.Exposant=l;var c=l+127;this.ExposantNorme=c;var u=this.dec2bin(c),p=this.getExposantFullBinary(u);this.ExposantBinary=u,this.Mantisse=o;var d=o.replace(",","."),f=d*Math.pow(10,-1*l);f=f.toString().replace(".",","),this.MantisseNorme=f;var b=f.substring(f.indexOf(",")+1);this.MantisseBinary=b;var x=this.getMantisseFullBinary(b);this.BinConsoled=o,t=e+p+x,this.IeeeBin=t;var m=this.calculHexaDecimalFormBinary(t);this.IeeeHexa=m}},data:function(){return{Decimal:"0",Bin:"",Hexa:"",IeeeBin:"",IeeeHexa:"",BinConsoled:"",Exposant:"",ExposantNorme:"",ExposantBinary:"",Mantisse:"",MantisseNorme:"",MantisseBinary:""}}},u=c,p=(t("9829"),t("2877")),d=Object(p["a"])(u,s,o,!1,null,"e9c666b2",null),f=d.exports,b={name:"App",components:{BinToIeee:f}},x=b,m=(t("034f"),Object(p["a"])(x,r,i,!1,null,null,null)),h=m.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(h)}}).$mount("#app")},"85ec":function(e,n,t){},9829:function(e,n,t){"use strict";t("022a")}});
//# sourceMappingURL=app.d90126bd.js.map