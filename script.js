function createStar() {
    const star = document.createElement("div");
    star.innerHTML = "✦";
    star.style.position = "fixed";
    star.style.left = Math.random() * window.innerWidth + "px";
    star.style.top = "-20px";
    star.style.color = "silver";
    star.style.fontSize = Math.random() * 15 + 10 + "px";
    star.style.pointerEvents = "none";
    document.body.appendChild(star);

    let pos = -20;

    const fall = setInterval(() => {
        pos += 3;
        star.style.top = pos + "px";

        if (pos > window.innerHeight) {
            clearInterval(fall);
            star.remove();
        }
    }, 20);
}

setInterval(createStar, 200);
