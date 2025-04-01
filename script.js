let canvas = document.getElementById("canv")

let slider = document.getElementById("slider")

let btn = document.getElementsByTagName("button")[0]

btn.addEventListener("click", downloadFun)

canvas.width = slider.value
canvas.height = slider.value

let canvasCTx = canvas.getContext("2d")

canvasCTx.textBaseline = "middle";
canvasCTx.textAlign = "center"
canvasCTx.fillStyle = "#777777"
canvasCTx.fillRect(0, 0, canvas.width, canvas.width)
canvasCTx.fillStyle = "#000000"
canvasCTx.fillText(`${canvas.width}x${canvas.width}`, canvas.width / 2, canvas.width / 2)

slider.oninput = () => {
    canvas.width = slider.value
    canvas.height = slider.value
    
    let canvasCTx = canvas.getContext("2d")
    
    canvasCTx.fillStyle = "#777777"
    canvasCTx.fillRect(0, 0, canvas.width, canvas.width)
    canvasCTx.fillStyle = "#000000"
    
    canvasCTx.font = "1rem Arial"

    canvasCTx.textBaseline = "middle";
    canvasCTx.textAlign = "center"
    
    canvasCTx.fillText(`${canvas.width}x${canvas.width}`, canvas.width / 2, canvas.width / 2)
}

function downloadFun() {
    let link = document.createElement("a")
    link.href = canvas.toDataURL("image/png")
    link.download = `canvas-image-${canvas.width}x${canvas.height}.png`
    link.click()
}