//[¤[mdx][https://mdx.googlecode.com/git/App.js]@[vers_1.0_¤]¤¤¤ ...

//======== App ===========
// ... local namespace ... :/ ...

isF=function(k){return(typeof k==="function")}
isS=function(k){return(typeof k==="string")}

//(function (){

// 	'use strict';
var App={

	otl:0,//1//0// ... App_debug ...

	vers:"1.0",

	_:function(k){

		if(isF(k)) return k;

		if(typeof k==="string") if(typeof window[k]==="function") return window[k];

	}

}

//	window.App=App;

//}());

//<!-- /* [Copyright 11/12/2012 SanEcIn][¤¤] */-->
