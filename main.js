function speak() {

    var synth = window.speechSynthesis
    speak_data = "Taking your selfie in 10 seconds"
    var utterthis = new SpeechSynthesisUtterance(speak_data)
    synth.speak(utterthis)


}

setTimeout(function () {
    image_id = "selfie1"
    take_snapshot()
    save()

}, 5000)

setTimeout(function () {
    image_id = "selfie2"
    take_snapshot()
    save()

}, 10000)

setTimeout(function () {
    image_id = "selfie3"
    take_snapshot()
    save()

}, 15000)


function take_snapshot() {
    console.log(image_id)

    Webcam.snap(function (data_uri) {
        if (image_id == "selfie1") 
        {
            document.getElementById("result1").innerHTML = "<img id='selfie1' src='" + data_uri + "'/>"
        }

        if (image_id == "selfie2") 
        {
            document.getElementById("result2").innerHTML = "<img id='selfie2' src='" + data_uri + "'/>"
        }

        if (image_id == "selfie3") 
        {
            document.getElementById("result3").innerHTML = "<img id='selfie3' src='" + data_uri + "'/>"
        }
    })
}
