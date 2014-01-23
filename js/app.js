//[¤[mdx][https://mdx.googlecode.com/git/App.js]@[vers_1.0_¤]¤¤¤ ...

//======== App ===========
// ... local namespace ? ... :/ ...

isF=function(k){return "function"===typeof k}
isS=function(k){return "string"===typeof k}

	var App={

		otl:0,//1//0// ... App_debug ...

		vers:"1.0",

		_:function(k){

			if(isF(k)) return k;

			if(isS(k)&isF(window[k])) return window[k];

			if (Lib._(k)) return k;

			return false;

		}

	}

//<!-- /* [Copyright 11/12/2012 SanEcIn][¤¤] */-->
