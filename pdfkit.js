var PDFDocument = require('pdfkit');
var fs = require('fs');
const { lineTo } = require('pdfkit');
// ドキュメントを作る
var doc = new PDFDocument();
// 出力ファイルを設定する
doc.pipe(fs.createWriteStream('output.pdf'));
// フォントを埋め込む
doc.font('sazanami-gothic.ttf');
// 文字を表示する
doc.fontSize(40).text('親父からの一言', 90, 100);
doc.fontSize(30).text(
	"人を大事にする者は\n\n" +
	"人からも\n\n" +
	"大切にされると\n\n" +
	"考えよ", 100, 180);
// 図形を描画する
doc.save()
	.moveTo(80, 80)
	.lineTo(400, 80)
	.lineTo(400, 150)
	.lineTo(80, 150)
	.lineTo(80, 80)
	.stroke('#0000FF');
// 改ページを行う
doc.addPage();
// 図形を描画する
doc.save()
	.moveTo(100, 150)
	.lineTo(100, 200)
	.lineTo(200, 200)
	.fill('#FF0000');
// 描画を終了する
doc.end();