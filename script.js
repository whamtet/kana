const trim = s => s.replaceAll('	', '').replaceAll('\n', '');

const hiragana = trim(`あ	い	う	え	お
か	き	く	け	こ
が	ぎ	ぐ	げ	ご
さ	し	す	せ	そ
ざ	じ	ず	ぜ	ぞ
た	ち	つ	て	と
だ	ぢ	づ	で	ど
な	に	ぬ	ね	の
は	ひ	ふ	へ	ほ
ば	び	ぶ	べ	ぼ
ぱ	ぴ	ぷ	ぺ	ぽ
ま	み	む	め	も
や		ゆ		よ
ら	り	る	れ	ろ
わ	ゐ		ゑ	を`);

const katakana = trim(`ア	イ	ウ	エ	オ
カ	キ	ク	ケ	コ
サ	シ	ス	セ	ソ
タ	チ	ツ	テ	ト
ナ	ニ	ヌ	ネ	ノ
ハ	ヒ	フ	ヘ	ホ
マ	ミ	ム	メ	モ
ヤ		ユ	ヨ
ラ	リ	ル	レ	ロ
ワ	ヰ		ヱ	ヲ
ン`);

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
const shuffleString = s => shuffle(s.split(''));

function* cycle(src) {
  while (true) {
    for (s of shuffleString(src)) {
      yield s;
    }
  }
}
const cycleElement = (id, src) => {
  const c = cycle(src);
  return () => {
    document.getElementById(id).innerHTML = c.next().value;
  };
};
const clickHiragana = cycleElement('hiragana', hiragana);
const clickKatakana = cycleElement('katakana', katakana);

clickHiragana();
clickKatakana();
