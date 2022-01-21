var url = "https://www.yahoo.co.jp";
var savepath = "test.pdf";

// CasperJSのオブジェクトを作成
var casper = require('casper').create();
casper.start();
casper.open(url);

// ページの設定
casper.page.paperSize = {
	width: '8.5in',
	height: '11in',
	orientation: "portrait",
	margin: '1cm'
};
casper.open(url);
// CSSを書き換え
casper.then(function () {
	casper.evaluate(function () {
		var els = document.querySelectorAll('h1');
		for (var i = 0; i < els.length; i++) {
			var e = els[i];
			e.style.backgroundColor = "red";
			e.style.color = "white";
		}
	});
});
casper.then(function () {
	casper.capture(savepath);
});
casper.run();


