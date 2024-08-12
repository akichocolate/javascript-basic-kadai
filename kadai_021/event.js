//idがbtnのHTML要素を取得し、定数に代入する
const btn = document.getElementById('btn');

 // HTML要素がクリックされたときにイベント処理を実行する
 btn.addEventListener('click', () => {
  // textというidを持つHTML要素を取得し、定数に代入する
  const text = document.getElementById('text');

  //2秒後に中身を書き換える
  setTimeout(() => {
    text.innerText = 'ボタンをクリックしました';
  },2000);
 });