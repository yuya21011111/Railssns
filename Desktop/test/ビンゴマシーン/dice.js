// ビンゴマシーンのプログラム
    var max = 99;                      // 表示する数値の最大値
    var bingo = [];

    for (var i = 1; i <= max; i++) {
        bingo.push(i);                 // ビンゴマシーンで画面に表示する数字を格納
}
  function dice(){
  for (var i = 1; i<= 99;i++){
  let get = bingo.splice(Math.floor(Math.random() * bingo.length),1)[0];
  console.log(bingo);
  return get;                                                            // ランダムな数値を１つ表示する
  }
}

let num = dice();
document.getElementById('bingo').innerHTML = num;



