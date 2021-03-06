const trim = s => s.replaceAll('	', '').replaceAll('\n', '').replaceAll(' ', '');

const romanji = [], romanji2 = [];
for (const suffix of ['a', 'i', 'u', 'e', 'o']) {
  for (const prefix of ['', 'k', 'g', 's', 'z', 't', 'd', 'n', 'h', 'b', 'p', 'm', 'y', 'r', 'w']) {
    romanji.push(prefix + suffix);
  }
  for (const prefix of ['', 'k', 's', 't', 'n', 'h', 'm', 'y', 'r', 'w']) {
    romanji2.push(prefix + suffix);
  }
}

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
わ	ん	を`);

const hiraganaShort = trim(`あ	い	う	え	お
か	き	く	け	こ
さ	し	す	せ	そ
た	ち	つ	て	と
な	に	ぬ	ね	の
は	ひ	ふ	へ	ほ
ま	み	む	め	も
や		ゆ		よ
ら	り	る	れ	ろ
わ	ん	を`);

const katakana = trim(`ア	イ	ウ	エ	オ
カ	キ	ク	ケ	コ
ガ	ギ	グ	ゲ	ゴ
サ	シ	ス	セ	ソ
ザ	ジ	ズ	ゼ	ゾ
タ	チ	ツ	テ	ト
ダ	ヂ	ヅ	デ	ド
ナ	ニ	ヌ	ネ	ノ
ハ	ヒ	フ	ヘ	ホ
バ	ビ	ブ	ベ	ボ
パ	ピ	プ	ペ	ポ
マ	ミ	ム	メ	モ
ヤ		ユ		ヨ
ラ	リ	ル	レ	ロ
ワ	ヲ ン`);

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

function* cycle(src) {
  while (true) {
    for (s of shuffle(src)) {
      yield s;
    }
  }
}
const cycleElement = (id, src) => {
  const c = cycle(src);
  return () => {
    const char = c.next().value;
    document.getElementById(id).innerHTML = char;
  };
};

const clickRomanji = cycleElement('romanji', romanji);
const clickRomanji2 = cycleElement('romanji2', romanji2);

clickRomanji();
clickRomanji2();
