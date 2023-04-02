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
  // divの生成
  const li = document.createElement("li");
  li.className = "list-row";
  // liの生成
  const p = document.createElement("p");
  p.className = "todo-name";
  p.innerText = inputText;
  // 完了button生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    alert("完了");
  });
  // 削除button生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    const deleteTarget = deleteButton.parentNode;
    document.getElementById("incomplete-list").removeChild(deleteTarget);
  });
  // divの子要素に入れる
  li.appendChild(p);
  li.appendChild(completeButton);
  li.appendChild(deleteButton);
  // 未完了のリストに追加
  document.getElementById("incomplete-list").appendChild(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
