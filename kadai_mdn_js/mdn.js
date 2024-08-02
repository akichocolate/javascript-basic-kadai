//プログラム実行の日付を出力する関数を作成
const getDate = () => {
  let dateNow = new Date();
  let yearNow = String(dateNow.getFullYear());
  let monthNow = String(dateNow.getMonth() + 1);
  let dayNow = String(dateNow.getDate());
  console.log(yearNow + '年' + monthNow + '月' + dayNow + '日');

}

// プログラム実行の日付を出力する関数を呼び出す
getDate();