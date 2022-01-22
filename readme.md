# レポートの自動生成

Webからデータをダウンロードして、データベースに保存しただけでは意味がありません。
保存したデータを解析して、レポートとして出力する必要があります。

## レポートを自動的に生成する

Webダウンロードしたデータをそのままレポートとして出力することはまれでしょう。
たいていの場合、何らかの分析や集計を行ったうえで、レポートとして出力するケースが多いと思います。
どんな、レポートを出力できるのか、その出力形式や、どんなライブラリを利用できるのかを解説します。

### レポートを出力する目的をはっきりさせよう

され、なんの為にレポートを出力するのでしょうか。
そもそも、レポートを書く目的は「自分の考えや主張、それらを形にして自分自身と誰かに報告する為」です。
自分自身のなかではっきりとさせたいことや、誰かに伝えたいことをレポートとしてまとめるのです。

もちろん、完全なレポートをJavaScriptのプログラムだけで生成することはできません。
プログラムでは、レポートの参考資料を自動生成したらするというのが相応しいでしょう。

したがって、レポートを自動生成するには、「誰に何を伝えるのか」という部分を意識して選定するのが良いと思います。

## 出力形式について

ここでは、どんなレポートを誰の為に出力するのかの部分にフォーカスをして考えてみましょう。

### レポートをWebで公開する場合

まず、Webでレポートを公表ｓると言う前提があるのであれば、HTMLやPDFで出力することになるでしょう。
また、ExcelやWord形式でデータが配布されているのも見かけます。
これらの形式では、Webブラウザーからダウンロードした上で見てもらうことになるので、一段階、手間がかかりますが、ExcelあｙWordであれば、誰もが持っているアプリを利用して見てもらうことが出来ます。

他にも、特定の目的を持って配布されているデータ形式もあります。

**Webで公開するレポート**
| ファイル形式           | 特徴                                          |
| :--------------------- | :-------------------------------------------- |
| HTML形式               | Webブラウザーで見られる                       |
| PDF形式                | Webブラウザーの中でビューワーが開いて見られる |
| Excel/Word形式         | ダウンロードしてローカルで見てもらう          |
| 専門分野のファイル形式 | 特定のアプリでダウンロードしてみてもらう      |

### 自分用にレポートを出力する場合

自分用にレポートを出力することを考えてみましょう。
自分用であれば、それほど、形式や出力品質にこだわる必要はないでしょう。
分析や集計の結果が直感的にわかる形式で十分です。
ですから、最低限のデータと言うことで、テキストファイルで出力しても問題無いでしょうし、テキストデータに簡単に見出しや段落を付けた、HTMLファイルを生成するのも、ほとんど手間が掛からないのでお勧めです。
加えて、自分用であれば、CSV形式を出力するだけでも十分でしょう。CSV形式はテキストデータをカンマと改行で区切っただけの物ですから、データの作成は簡単です。
しかし、Excelなどの表計算アプリでデータ読み込む事で、手軽でありながら、リッチなレポートして見ることができます。
CSV形式と同じように、XML形式でも出力できるでしょう。多くのWebブラウザーはXML形式のデータをきれいに色分けして、タグの階層に分けて表示する機能を備えています。
また、HTMLを書くのと、それほど手間は変わらないものの、WIKI記法やMarkdown形式で書き出す事も検討できます。と言うのは、これらのデータは手軽にHTMLやPDFなどのファイル形式に変換することができるからです。

**自分向けレポート**
| フォーマット          | 特徴                                          |
| :-------------------- | :-------------------------------------------- |
| テキスト形式          | 手間がかからない                              |
| HTML形式              | 簡単なタグ付で見栄えもよくなる                |
| CSV形式               | Excelなどの表計算アプリで読み込めば見栄えいい |
| XML形式               | Webブラウザーの中にはきれいに表現してくれる   |
| WIKI記法/Markdown形式 | 手軽にHTMLやPDFに出力できる                   |

### レポートを印刷する場合

色々な分野で電子化が進んでいるというものの、やはり、紙に資料を印刷して出力する必要がある場合も、まだまだ多いものです。その理由としては、役所に紙で提出する必要があったりまだまだ、紙で資料を読みたがる人がいたりすることがあるからです。
この場合には、用紙サイズやページ枚数を意識したつくりのアプリ向けにデータを作成する必要があります。となると、PDF形式や、Excel/Word形式に限られてくるでしょう。

**印刷向けのレポート**
| フォーマット   | 特徴                                 |
| :------------- | :----------------------------------- |
| PDF形式        | プリンタに依存しない形式で出力できる |
| Word/Excel形式 | きれいに印刷できる                   |

## PDF形式ファイルの作成

PDF形式はレポート出力の有力な候補となります。PDFで作成すれば、PCやタブレット、スマートフォンなど、多くの環境でデザインの崩れを気にすることなく閲覧出来ます。

### 簡単にPDFを作る方法

自動的に作るわけではありませんが、簡単にPDFを作るには、Microsoft の Excel や Word の PDF 出力機能を利用する方法があります。
メニューの「保存」から「PDF形式で保存」を選ぶ事で、PDF形式で文章を出力することができます。

### PhantomJSでHTMLをPDFとして出力する方法

まずは、HTMLファイルをPDFに変換する為に、**PhantomJS/CapserJS**を利用することで実現出来ます。

それでは、`html2pdf.js`と言うブログラムを作成していきましょう。
[参考ページ<br>https://github.com/shigetaa/nodejs31scraping](https://github.com/shigetaa/nodejs31scraping)
```javascript
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
```
以下のコマンドを実行すると画面のスクリーンショットをPDFとしてtest.pdfと言うファイル名で保存されます
```bash
casperjs html2pdf.js
```
また、`evaluate`メソッドで読み込んだHTMLのCSSなどを変更してスクリーンショットを生成することが出来ます。


### PDFKitを利用して出力する

PDFをゼロから作ることが出来る「PDFKit」と言うライブラリもNodo.js用に公開されています。
このライブラリもnpm を利用してインストールする事ができます。
```bash
npm i pdfkit
```
ここで、作成するPDFを作成するプログラムで、「さざなみフォント」と言うフォントファイルを利用して、日本語を表示しますので、以下のサイトからフォントファイルをダウンロードして、プログラムファイルを同階層に設定して利用出来るように用意してください。

[さざなみフォント<br>https://ja.osdn.net/projects/efont/](https://ja.osdn.net/projects/efont/)


まずは、`pdfkit.js`ファイル名でプログラムを作成していきます。
```javascript
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
```
上記のプログラムを実行すると、`output.pdf`と言うPDF形式のファイルが生成されます。
```bash
node pdfkit.js
```
| メソッド     | 意味                               |
| :----------- | :--------------------------------- |
| moveTo(x, y) | 図形の始点を指定する               |
| lineTo(x, y) | 前回の座標から(x, y)へ線を引く     |
| stoke(color) | それまでに指定した座標に線を引く   |
| fill(color)  | それまでに指定した座標を塗りつぶす |

### PDFKitでグラフを描く

今度は、データに基づいてPDFに簡単な棒グラフを描画する、プログラム`pdfkit-graph.js`を作成してみましょう。
```javascript
var PDFDocument = require('pdfkit');
var fs = require('fs');

// 描画するデータ
var data = [
	{ label: '国語', value: 76 },
	{ label: '数学', value: 48 },
	{ label: '理科', value: 89 },
	{ label: '社会', value: 68 },
	{ label: '音楽', value: 55 },
	{ label: '英語', value: 73 },
	{ label: '技術', value: 92 },
	{ label: '芸術', value: 58 },
	{ label: '選択', value: 79 }
];

// ドキュメントを作る
var doc = new PDFDocument();
var page_w = doc.page.width;
var page_h = doc.page.height;

// 出力ファイルを設定する
doc.pipe(fs.createWriteStream('output-graph.pdf'));

// フォントを埋め込む
doc.font('sazanami-gothic.ttf');

// タイトルを表示する
doc.fontSize(30)
	.text('成績グラフ', 20, 20);

// グラフを描画する
var margin = 20;
var g_w = page_w - margin * 2 - 50;
var g_x = margin + 50;
var y = 80;
var wpx = g_w / 100;
for (var i = 0; i < data.length; i++) {
	var value = data[i].value;
	var label = data[i].label;
	doc.save()
		.rect(g_x, y, wpx * value, 20)
		.fill((i % 2) ? 'blue' : 'red');
	doc.fontSize(10)
		.fillColor("black")
		.text(label, 30, y + 5)
		.text(value, g_x + 5, y + 5);
	y += 20 + 5;
}

// 描画を終了する
doc.end();
```
上記のプログラムを実行すると、`output-graph.pdf`と言うPDF形式のファイルが生成されます。
```bash
node pdfkit-graph.js
```
| メソッド名                                  | 説明                |
| :------------------------------------------ | :------------------ |
| rect(x, y, width, height)                   | 長方形を描画        |
| roundRect(x, y, width, height, conerRadius) | 角丸長方形を描画    |
| elipse(cx, cy, radiusX, radiusY)            | 楕円を描画          |
| cicle(cx, cy, radius)                       | 正円を描画          |
| polygon(points...)                          | 多角形を描画        |
| path(pathData)                              | SVGのPath指定で描画 |

### PDFKitのより詳しい情報

この他にも、PDFKitでは、図形にグラデーションをかけて描画したり、直接画像データを埋め込んだりと、他にもさまざまな機能が利用できます。

[詳細はPDFkit公式サイト<br>https://pdfkit.org/](https://pdfkit.org/)

## Excel形式ファイル作成

多くの人は、Microsoft Excel ファイルの出力を望んでいます。
これは、普段からオフィースで利用する機会が多いからでしょう。
使い慣れたファイル形式であれば、安心して利用できると言うのは大きいでしょう。
Excelであれば、そこからさらにデータ集計を行ったり、印刷したりもできます。

## Node.js + Officegen を使う方法

しかし、Excel形式のファイルは、基本的にExcelまたはExcel互換オフィースツールを利用しないと作成できません。Excel形式はそれほど単純なデータフォーマットではありませんが、Node.js様にライブラリ「officegen」が用意されています。
これを利用する事で、Excelがインストールされていない環境でもExcelファイルを作成する事ができます。
また、Word等のOfficeのファイル形式も出力することが出来ます。

それでは、まず officegen を npm を利用してインストールしてみましょう。
```bash
npm i officegen
```

新規シートにデータを書き込む簡単なプログラム`officegen.js`を作成してみましょう。
```javascript
var fs = require('fs');
var officegen = require('officegen');
var xlsx = officegen('xlsx');

// 新規シートを作成
var sheet = xlsx.makeNewSheet();
sheet.name = "test";

// 直接データを書き換え
sheet.data[0] = ["商品名", "値段", "備考"];
sheet.data[1] = ["リンゴ", 340];
sheet.data[2] = ["ミカン", 980];
sheet.data[3] = ["バナナ", 280];

// セル名を指定して書き換え
sheet.setCell('C2', '新鮮');
sheet.setCell('C3', '甘い');

// ファイルを書き出す
var strm = fs.createWriteStream('test.xlsx');
xlsx.generate(strm);
```
上記のプログラムを実行すると、`text.xlsx`と言うExcel形式のファイルが生成されます。
```bash
node officegen.js
```

## Rhino と Apache POI を使う方法

### その他の方法

## Web API で取得した値をExcelに書き込む
