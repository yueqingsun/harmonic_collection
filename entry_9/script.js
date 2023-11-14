const sentences = [
    "You wake up.",
    "Good morning. You send voice messages to some people.",
    "The alarm goes off three times.",
    "Time is tight, and it gets later every day, but it doesn't matter.",
    "You go to an expensive place, as if to waste money, and as if not.",
    "Two hours and forty minutes.",
    "Sometimes it's a lot of two hours and forty minutes.",
    "You want to run away.",
    "Dwelling narrowness.",
    "It looks like there are stars outside the window. No, you are one of them.",
    "Very sleepy, the body is not very good, sleep is the only way to survive.",
    "Several hours passed.",
    "Do something about it.",
    "It's either three hours of walking or three hours of sitting.",
    "You lose your time.",
    "Well, that's what happens to everyone.",
    "There's no change.",
    "It's time, perhaps a rare time for yourself, though often interspersed in places where it shouldn't be.",
    "On the count of three, you have a chance to see whoever you want.",
    "The abstinence reaction.",
    "You rely on dreams to sustain your emotions."


  ];

  
  const sentenceContainer = document.getElementById("sentence-container");
  const sentenceElement = document.getElementById("sentence");
  
  let currentIndex = 0;
  let mouseMoveCount = 0;
  const threshold = 20; // 设置移动多少像素后切换句子的阈值
  
  // 添加鼠标移动事件监听器
  sentenceContainer.addEventListener("mousemove", (e) => {
    // 计算鼠标移动的像素数
    mouseMoveCount += Math.abs(e.movementY);
  
    // 如果达到阈值，切换到下一个句子
    if (mouseMoveCount >= threshold) {
      currentIndex = (currentIndex + 1) % sentences.length;
      sentenceElement.textContent = sentences[currentIndex];
      mouseMoveCount = 0; // 重置计数器
    }
  });
  
  // 初始显示第一个句子
  sentenceElement.textContent = sentences[currentIndex];
  


