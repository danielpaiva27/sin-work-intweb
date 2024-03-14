function main() {
    const mainH1 = document.getElementById("main")
    mainH1.innerText = "meu nome é Daniel"
    mainH1.style.color = "green"

    const colorsSpan = document.getElementById("colors")

    setInterval(() => {
        const [r, g, b] = [randomColor(), randomColor(), randomColor()]

        colorsSpan.innerText = `RGB = ${r},${g},${b}`
        mainH1.style.backgroundColor = `#${r}${g}${b}`
    }, 5000);
}

main()

function randomColor() {
    return Math.round(Math.random() * 256).toString(16).toUpperCase()
}