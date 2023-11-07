const sentences = [
    "The scent of a perfume is an interesting pheromone.",
    "Many of the times I don't actually remember what happened from moment to moment, especially after a long time.",
    "Scent is like a macro memory that takes me back to a certain period and a certain place through smell.",
    "I was not in the habit of wearing perfume, but it doesn't seem to be a bad habit because it helps me record more.",
    "Sometimes it is also a bad habit, because if something bad happens during this period, the scent will be polluted.",
    "So half of my favorite perfumes have turned into bad memories, even though I still love the smell.",
    "Perfume for me is a memory of a frequent place.",
    "Perfume is also a time node for me.",
    "I don't feel it in use. I don't feel it until I change it.",
    "Try to record my life by smell. There is no one who doesn't like pleasant smells.",
    "Life is easy now.",
    "Don't let the scents go away..."


  ];

  
  const sentenceContainer = document.getElementById("sentence-container");
  const sentenceElement = document.getElementById("sentence");
  const movingCircle = document.getElementById("moving-circle");
  
  let currentIndex = 0;
  let mouseMoveCount = 0;
  const threshold = 20; // 设置移动多少像素后切换句子的阈值
  
  // 添加鼠标移动事件监听器
  sentenceContainer.addEventListener("mousemove", (e) => {
    // 计算鼠标移动的像素数
    mouseMoveCount += Math.abs(e.movementX);
  
    // 如果达到阈值，切换到下一个句子
    if (mouseMoveCount >= threshold) {
      currentIndex = (currentIndex + 1) % sentences.length;
      sentenceElement.textContent = sentences[currentIndex];
      mouseMoveCount = 0; // 重置计数器
    }
  });
  
  // 初始显示第一个句子
  sentenceElement.textContent = sentences[currentIndex];
  



// script.js



document.addEventListener("mousemove", (event) => {
  const mouseX = event.clientX;
  
  // 计算圆心的位置
  const circleCenterX = mouseX - movingCircle.offsetWidth / 2;
  
  // 更新圆的位置
  movingCircle.style.left = circleCenterX + "px";
});





