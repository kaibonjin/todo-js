// import "/styles.css";

console.log("this is working");

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  // divの生成
  const div = document.createElement("div");
  div.className = "list-row";
  // liの生成
  const li = document.createElement("li");
  li.innerText = inputText;
  // divの子要素に入れる
  div.appendChild(li);
  // 未完了のリストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
