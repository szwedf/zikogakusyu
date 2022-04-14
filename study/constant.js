//変数のnumに0~4までのランダムな整数を代入する
let num =Math.floor(Math.random() * 9);
console.log(num);

if (num ===7) {
    console.log('大当たりです');
}

else if (num ===4) {
    console.log('当たりです');
}


else {
    console.log('ハズレです');
}