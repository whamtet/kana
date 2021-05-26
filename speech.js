const words = {};

const setWord = (k, v) => words[k] = v;
const sayWord = (k) => () => {
    const u = new SpeechSynthesisUtterance(words[k]);
    u.lang = 'ja';
    speechSynthesis.speak(u);
};

const sayHiraganaShort = sayWord('hiraganaShort');
const sayHiragana = sayWord('hiragana');
const sayKatakana = sayWord('katakana');