let boxTop = 200;
let boxLeft = 200;


document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    console.log(keyName)
    if (keyName === "ArrowUp") {
        document.getElementById("box").style.top = boxTop + 10 px;
        console.log(boxTop)

    }
    if (keyName === "ArrowDown") {
        document.getElementById("box").style.top = boxTop - 10 px;
        console.log(boxTop)
    }
});