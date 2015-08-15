//[¤[mdx][https://mdx.googlecode.com/git/id.js][https://github.sanecin.ru/code/js/id.js]@[vers_1.0_¤]¤¤¤ ...

//======== Id ===========
// ... in case ... event.js REQUIRED ...
// ... element ID query ... speed  !q?w ... ... element[ID="f"] => Id.f ...

	var Id={

		_:function(){for(i=(j=document.querySelectorAll('[id]')).length;i--;Id[j[i].id]=j[i]){}}

	};

	Event.On(window,"load",Id._);

//<!-- /* [Copyright 11/12/2012 SanEcIn][¤¤] */-->
