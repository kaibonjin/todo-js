//jsでcssを読み込む
var element = document.createElement("link");
element.setAttribute("rel", "stylesheet");
element.setAttribute("type", "text/css");
element.setAttribute("href", "src/styles.css");
document.getElementsByTagName("head")[0].appendChild(element);

// JS動いているチェック
console.log("this is working");

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  // liの生成
  const li = document.createElement("li");
  //divの生成
  const div = document.createElement("div");
  div.className = "list-row";
  // liの生成
  const p = document.createElement("p");
  p.className = "todo-name";
  p.innerText = inputText;
  // 完了button生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    deleteFromImcompleteList(completeButton.parentNode.parentNode);
  });
  // 削除button生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    deleteFromImcompleteList(deleteButton.parentNode.parentNode);
  });
  // （共通処理）未完了リストから指定の要素を削除
  const deleteFromImcompleteList = (target) => {
    document.getElementById("incomplete-list").removeChild(target);
  };
  // divの子要素に入れる
  li.appendChild(div);
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  // 未完了のリストに追加
  document.getElementById("incomplete-list").appendChild(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
