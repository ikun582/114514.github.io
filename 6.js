function burnIncense() {
    var incense = document.getElementById("incense");
    incense.style.display = "block"; // 显示动画
    setTimeout(function() {
        incense.style.display = "none"; // 2秒后隐藏动画

        var goldText = document.createElement("div"); // 创建金榜题名文字元素
        goldText.id = "goldText";
        goldText.innerText = "金榜题名";
        document.body.appendChild(goldText); // 将金榜题名文字添加到页面中
    }, 2000);
}
