
// 再代入できない変数の宣言
const aaa = "aaaa";

// constは定数ではない。以下はいける。
const obj = {
    key: "値"
};
// オブジェクトそのものは変更できてしまう
obj.key = "新しい値";



let bbb = "bbb";

bbb = 123;

console.log(obj);



