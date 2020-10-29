const closePath = "./assets/closed.jpg"
const openPath = "./assets/open.jpg"
const brokenPath = "./assets/broken.jpg"

document.addEventListener("DOMContentLoaded", function() {
    const $img = document.querySelector("img")

    $img.src = closePath

    $img.addEventListener("mouseover", () => {
        $img.src = openPath
    })

    $img.addEventListener("mouseout", () => {
        $img.src = closePath
    })

    $img.addEventListener("click", () => {
        $img.src = brokenPath
    })
})