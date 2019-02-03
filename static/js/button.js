

// グローバル変数
var syncerSounds = {
	flag: {} ,
	currentTime: null ,
} ;

var koujo = {
	"C-b": "ベイビー",
	"C-r": "化膿してるHART",
	"D-b": "プリーズ",
	"D-r": "見せてよ",
	"E-b": "メイク・ラブ",
	"E-r": "スキルアップにつながる",
	"F-b": "ヴァージン！ヴァージン！",
	"F-r": "俺のキャパシティ",
	"G-b": "ラブ・ミー",
	"G-r": "君のインナースペース",
	"A-b": "パラレルワールド",
	"A-r": "ハン押してくれ",
	"B-b": "バイト帰り",
	"B-r": "飛びこんで来い",
	"X": "僕はね、もう音楽なんてどうでもよくて、君のことが好きなんやけど、でも、あの、その、だから楽器を握るんじゃなくて、君の手を握りたいけど、だけれども、だけれでも、僕はもう、こうやって音楽を奏でて、君に言葉を伝えるその術しか持ってないから、僕は君の為に、歌う、も、ぼ、僕のために歌いたいんです",
	"Cm-b": "俺のCマイナーコード",
	"Cm-r": "それでもいいから",
	"Dm-b": "セクシー・アマゾネス",
	"Dm-r": "ハンパねえぜ",
	"Em-b": "キス・ミー",
	"Em-r": "俺の一問一答",
	"Fm-b": "長いフェイドアウト",
	"Fm-r": "メールがこない",
	"Gm-b": "ヨイトマケ",
	"Gm-r": "天候に恵まれない地方に生まれて",
	"Am-b": "キャッチ・ミー・イフ・ユー・キャン",
	"Am-r": "怖がらないで",
	"Bm-b": "ウォンチュー",
	"Bm-r": "君の名前のイレズミ",
	"Y": "君が好き好き好っきゃねん ボコッ"
};

(function()
{
	// 設定
	var soundsClass = 'sounds';	// ボタン要素のクラス名
	var setDir = './sounds/'; // 音声ファイルがあるフォルダ(最後は[/])

	// クラス名が付いた要素を取得する
	var sounds = document.getElementsByClassName( soundsClass );

	// 全ての要素にクリックイベントを設定する
	for( var i=0,l=sounds.length ; l>i ; i++ )
	{
		// クリックイベントの設定
		sounds[i].onclick = function()
		{
			// ファイル名の取得
			var file = this.getAttribute( 'data-file' ) ;
			 $('.main_image').attr('src', 'images/' + file + '.jpg');
			 $('.koujo').text(koujo[file]);

 			// [audio]を生成するQ
			var audio = document.createElement( 'audio' ) ;
			audio.src = setDir + file + '.mp3' ;
			document.body.appendChild( audio ) ;

			// 再生
			audio.volume = 0.2;
			audio.play();
			return false ;
		}
	}
})() ;
