objects = []
status = ""

function preload() {
    video = createVideo("video.mp4")
}

function setup() {
    canvas = createCanvas(480, 380)
    canvas.center()

    video.hide()
}

function draw() {
    image(video, 0, 0, 480, 380)

    if (status != "") {
        r = random(255)
        g = random(255)
        b = random(255)

        objectDetector.detect(video, gotResults)

        fill(r, g, b)
        percentage 
    }
}

function start() {
    objectDetector = ml5.objectDetector("cocossd", modelLoaded)
    document.getElementById("status").innerHTML = "Status : Detecting Objects"
}

function modelLoaded() {
    console.log("Model is Loaded")
    status = true
    video.loop()
    video.speed(1)
    video.volume(0)
}

function gotResults(error, results) {
    if (error) {
        console.log(error)
    } else {
        console.log(results)
        objects = results
    }
}