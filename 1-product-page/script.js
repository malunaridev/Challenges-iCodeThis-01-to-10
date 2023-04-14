function changeBag(bagType) {
    const img = document.querySelector(".bag-images")
    const buttonColor = document.querySelector(".add-to-cart-1")

    if (!img.classList.contains(bagType)) {
        img.setAttribute("src", `./assets/${bagType}.png`)
        buttonColor.style.setProperty("background-color", `var(--${bagType})`)        
    }
}
