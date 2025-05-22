// Nhạc nền tự động phát khi vào trang
window.addEventListener("DOMContentLoaded", () => {
  const audio = new Audio("assets/music/happy_birthday.mp3");
  audio.volume = 0.5;
  audio.play().catch(() => {
    console.log("Tự động phát bị chặn, người dùng cần tương tác trước.");
  });

  // Lời chúc ngẫu nhiên
  const messages = [
    "Chúc Vi mãi xinh đẹp và luôn rạng rỡ như ánh mặt trời ;) ☀️",
    "Chúc Vi luôn vững bước trên hành trình sáng tạo của mình! 💫",
    "Mong ước gì thì được nấy(trong khả năng của god :?) sinh nhật vui vẻ nhé Vi! 🎁",
    "24, 8, 48 có cùng ước là 8",
  ];
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  const messageEl = document.querySelector(".message");
  const fullMsg = messageEl.innerHTML + `${randomMessage}`;
  messageEl.innerHTML = "";

  // Gõ từng chữ cho lời chúc
  let j = 0;
  const typeMessage = setInterval(() => {
    if (j < fullMsg.length) {
      messageEl.innerHTML += fullMsg[j];
      j++;
    } else {
      clearInterval(typeMessage);
    }
  }, 40);

  // Hiệu ứng rung và xoay nút khi hover
  const button = document.getElementById("giftButton");
  button.addEventListener("mouseover", () => button.classList.add("shake"));
  button.addEventListener("mouseout", () => button.classList.remove("shake"));

  // Gõ từng chữ cho tiêu đề
  const title = document.querySelector("h1");
  const fullText = title.textContent;
  title.textContent = "";
  let i = 0;
  const typeInterval = setInterval(() => {
    if (i < fullText.length) {
      title.textContent += fullText[i];
      i++;
    } else {
      clearInterval(typeInterval);
    }
  }, 80);

  // Hiệu ứng mở màn
  const curtain = document.createElement("div");
  curtain.style.position = "fixed";
  curtain.style.top = 0;
  curtain.style.left = 0;
  curtain.style.width = "100%";
  curtain.style.height = "100%";
  curtain.style.backgroundColor = "#fff0f5";
  curtain.style.zIndex = 9999;
  curtain.style.transition = "transform 2s ease";
  curtain.style.transform = "translateY(0)";
  document.body.appendChild(curtain);

  setTimeout(() => {
    curtain.style.transform = "translateY(-100%)";
  }, 800);

  setTimeout(() => {
    curtain.remove();
  }, 3000);
});

// Hiển thị hộp quà và hiệu ứng pháo hoa
const button = document.getElementById("giftButton");
button.addEventListener("click", function () {
  const box = document.getElementById("giftBox");
  box.classList.remove("hidden");
  box.classList.add("visible");
  this.disabled = true;
  this.innerText = "💝 Đã mở quà";

  // Tạo hiệu ứng pháo hoa bằng canvas
  createFireworks();
});

function createFireworks() {
  const script = document.createElement("script");
  script.src =
    "https://cdn.jsdelivr.net/npm/confetti-js@0.0.18/dist/index.min.js";
  script.onload = () => {
    const canvas = document.createElement("canvas");
    canvas.id = "fireworks";
    canvas.style.position = "fixed";
    canvas.style.top = 0;
    canvas.style.left = 0;
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.pointerEvents = "none";
    document.body.appendChild(canvas);

    const confettiSettings = {
      target: "fireworks",
      max: 150,
      size: 1.2,
      animate: true,
      props: ["circle", "square", "triangle"],
    };
    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();

    // Tự động xóa sau 6 giây
    setTimeout(() => {
      confetti.clear();
      document.body.removeChild(canvas);
    }, 6000);
  };
  document.body.appendChild(script);
}
