for(let i=0;i<50;i++){

    let star=document.createElement("div");

    star.innerHTML="✦";
    star.classList.add("star");

    star.style.left=Math.random()*100+"vw";
    star.style.fontSize=(Math.random()*20+10)+"px";
    star.style.animationDuration=(Math.random()*5+5)+"s";

    document.body.appendChild(star);
}
