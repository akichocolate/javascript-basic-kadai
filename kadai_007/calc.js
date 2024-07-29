//変数numに1以上の正の数を代入する
let n = 100;
let num = Math.floor(Math.random() * n) + 1;

// 変数numの値が3と5の倍数であれば、「3と5の倍数です」という文字列を出力する
if (num % 3 === 0 && num % 5 === 0){
  console.log('3と5の倍数です');
}

// 変数numの値が3の倍数であれば、「3の倍数です」という文字列を出力する
else if (num % 3 === 0) {
  console.log('3の倍数です');

// 変数numの値が5の倍数であれば、「5の倍数です」という文字列を出力する
} else if (num % 5 === 0) {
  console.log('5の倍数です');

//いずれでもない場合、numを出力する
} else {
  console.log(num);
}