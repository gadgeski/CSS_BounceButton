// 弾んだり色変わったりしよるヤツ
const colors = ["#0bd", "#f66", "#0c6", "#f83"];
let colorIndex = 0;
const button = document.querySelector(".btn-click-bounce");

button.addEventListener("click", () => {
  button.style.transition = "translate 0.2s ease, background-color 0.2s ease";
  button.style.translate = "0 -10px";
  button.style.backgroundColor = colors[colorIndex];

  setTimeout(() => (button.style.translate = "0"), 200);
  colorIndex = (colorIndex + 1) % colors.length;
});

// ローディング画面
const loadingElement = document.getElementById("loading");

// 進捗状況確認
let progress = 0;

// 10秒ごとに数値加算、テキスト更新
const intervalId = setInterval(() => {
  progress++;
  loadingElement.textContent = progress + "%";

  // 100%に到達後ローディング終了しフェードアウト
  if (progress >= 100) {
    clearInterval(intervalId);
    loadingElement.classList.add("fade-out");
  }
}, 10);
