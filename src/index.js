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

  createIncompleteList(inputText)
};

// （共通処理）未完了リストから指定の要素を削除
const deleteFromImcompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

// (共通処理) 未完了リストに追加する関数
const createIncompleteList = (text) => {
  // liの生成
  const li = document.createElement("li");
  //divの生成
  const div = document.createElement("div");
  div.className = "list-row";
  // pの生成
  const p = document.createElement("p");
  p.className = "todo-name";
  p.innerText = text;
  // 完了button生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 押された完了ボタンの親タグを未完了リストから削除
    const addTarget = completeButton.parentNode.parentNode;
    deleteFromImcompleteList(addTarget);
    // TODOのテキスト内容取得
    const text = completeButton.parentNode.firstElementChild.innerText;
    // liタグ配下を初期化
    addTarget.firstChild.textContent = null;
    // pタグを生成
    const pTag = document.createElement("p");
    pTag.className = "todo-name"
    pTag.innerText = text;
    //戻すボタン生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      //押された戻すボタンの親タグを完了リストから削除
      const deleteTarget = backButton.parentNode.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      // テキスト取得
      const text = backButton.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    });
    // divの子要素に各要素を設定
    addTarget.firstChild.appendChild(pTag);
    addTarget.firstChild.appendChild(backButton);
    // 完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget);
  });

  // 削除button生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    deleteFromImcompleteList(deleteButton.parentNode.parentNode);
  });

  // divの子要素に入れる
  li.appendChild(div);
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // 未完了のリストに追加
  document.getElementById("incomplete-list").appendChild(li);
}

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
