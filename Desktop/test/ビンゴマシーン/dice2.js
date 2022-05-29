//※ビンゴマシーンのプログラム

function dice(dice_len) {
  for(var i = (dice_len.length - 1); 0 < i; i--){

    // 0〜(i+1)の範囲で値を取得
    var num = Math.floor(Math.random() * (i + 1));

    // 要素の並び替えを実行
    var tmp = dice_len[i];
    dice_len[i] = dice_len[num];
    dice_len[num] = tmp;
  }
  return dice_len;
}

    // 表示する数値の最大値
    var max = 99;                      
    var bingo = [];

  for (var i = 1; i <= max; i++) {
 // ビンゴマシーンで画面に表示する数字を格納
        bingo.push(i);                 
  }
  
  // ランダムに配列された数値
  let bingo_num =  dice(bingo);
  console.log(bingo_num);