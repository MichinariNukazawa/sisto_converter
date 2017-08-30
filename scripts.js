window.onload = function(){
	console.log("load window");
	conv();
}
function cb_onkeyup_code(){
	console.log("cb_onkeyup_code");
	conv();
}
function cb_kind_sistemo(){
	console.log("cb_kind_sistemo");
	conv();
}

function conv(){
	console.log("conv");
	var obj_is_lnum = document.getElementById('is_sistemo');

	var obj_code = document.getElementById('code');
	var obj_preview = document.getElementById('preview');
	var obj_output = document.getElementById('html_output');
	var obj_syntax = document.getElementById('kind_syntax');
	var code = obj_code.value;
	//console.log(code);

	// HTMLで表示できない記号を特殊文字に変換する
	code = htmlspecialchars(code);
	// エスペラント代用表記のダイアクリティカルマーク変換
	code = convert_diacritical_mark(code);
	// HTML改行を付与する
	code = add_linefeed(code);
	// 枠(および標準の装飾)を付与する
	// code = add_border(code);

	// ソースを表示する
	obj_preview.innerHTML = code;
	obj_output.value = code;
}


// 外枠を追加する
function add_border(code){
	code = '<div style="font-family: monospace; '
		+ ' background-color: #fcfcfc; '
		+ ' border: 1px solid #ccbbcc; ">' + "\n"
		+ code + "\n"
		+ "</div>\n"
		return code;
}

// HTML改行(行末<br />)を加える
function add_linefeed(code){
	//code=code.replace(/^(.*)$/mg,"$1<br />");
	code = code.replace(/\n/g,"<br />\n");
	return code;
}

// HTMLタグなどをエスケープする
function htmlspecialchars(code) { 
	code = code.replace(/&/g,"&amp;") ;
	code = code.replace(/"/g,"&quot;") ;
	code = code.replace(/'/g,"&#039;") ;
	code = code.replace(/</g,"&lt;") ;
	code = code.replace(/>/g,"&gt;") ;
	// 半角空白を処理する
	//code = code.replace(/ /g,"&#32;") ;
	code = code.replace(/\x20/g,"&ensp;") ;
	// タブを処理する
	var tab = '<pre style="margin-top:0pt;margin-bottom:0pt;'
		+ 'display: inline-block; _display: inline;" >&#x0009;</pre>' + "";
	code = code.replace(/\t/g, tab);
	return code ;
}

function convert_diacritical_mark(code) {
	code = code.replace(/C\^/g,"&#x0108;");
	code = code.replace(/c\^/g,"&#x0109;");
	code = code.replace(/G\^/g,"&#x011C;");
	code = code.replace(/g\^/g,"&#x011D;");
	code = code.replace(/H\^/g,"&#x0124;");
	code = code.replace(/h\^/g,"&#x0125;");
	code = code.replace(/J\^/g,"&#x0134;");
	code = code.replace(/j\^/g,"&#x0135;");
	code = code.replace(/S\^/g,"&#x015C;");
	code = code.replace(/s\^/g,"&#x015D;");
	code = code.replace(/U\^/g,"&#x016C;"); // 公式の変換には無いがとりあえず
	code = code.replace(/u\^/g,"&#x016D;"); // 公式の変換には無いがとりあえず
	code = code.replace(/U\~/g,"&#x016C;");
	code = code.replace(/u\~/g,"&#x016D;");
	return code;
}

