const URL = "https://teachablemachine.withgoogle.com/models/qp3f1jkqq/";
var b = 0;
var c = 0;
var d = 0;
var f = (e*60)*60
var y = 0;
var z;

            let model, webcam, labelContainer, maxPredictions;
            async function init() {
                const modelURL = URL + "model.json";
                const metadataURL = URL + "metadata.json";
                model = await tmImage.load(modelURL, metadataURL);
                maxPredictions = model.getTotalClasses();
                const flip = true;
                webcam = new tmImage.Webcam(200, 200, flip);
                await webcam.setup();
                await webcam.play();
                window.requestAnimationFrame(loop);
                document.getElementById("webcam-container").appendChild(webcam.canvas);
                document.getElementById("webcam-container").style.display = "none";
                labelContainer = document.getElementById("label-container");
                for (let i = 0; i < maxPredictions; i++) {
                    labelContainer.appendChild(document.createElement("div"));
                }
                var a="";
                return a;
            }
            async function loop() {
                webcam.update();
                await predict();
                window.requestAnimationFrame(loop);
            }
            async function predict() {
                const prediction = await model.predict(webcam.canvas);
                for (let i = 0; i < maxPredictions; i++) {
                    if (prediction[0].probability.toFixed(2) >= 0.501){
                        var a=document.getElementById('final_result').innerHTML = "Sitting";
                        z="Sitting";
                    }
                    else{
                        var a=document.getElementById('final_result').innerHTML = "Standing";
                        z="Standing";

                    }
                }

                }

                window.setInterval(function(){
                    if(z=="Sitting"){
                        y = y+1;
                        b = b+1;
                        document.getElementById("counter").innerHTML = y;
                        document.getElementById("sitting-counter").innerHTML = b;
                    }

                    if(z=="Standing"){
                        y = 0;
                        c = c+1;
                        document.getElementById("counter").innerHTML = y;
                        document.getElementById("standing-counter").innerHTML = c;
                    }

                    if(y >= f){
                        y= 0;
                        document.getElementById("counter").innerHTML = y;
                        document.getElementById("sitting-counter").innerHTML = b;
                        document.getElementById("standing-counter").innerHTML = c;
                        sendemail();
                        play();
                        alert('It has been ' + e + ' hours, ' + g + ' time to get up!' + 'You can use these stretching exercises to help keep you body fit while at work: stretch.stand-up.ca');
                    }
                  }, 1000);
                  function sendemail(){
                              emailjs.send('service_hzmfugp', 'template_y2lfizi', templateParams).then(function(response) {
                              console.log('SUCCESS!', response.status, response.text);}, 
function(error) {
       console.log('FAILED...', error);
    });
            }
function play(){
         var audio=  new Audio('https://raw.githubusercontent.com/Megaman222111/standup-css/main/mixkit-happy-bells-notification-937.wav')
         audio.play();
      }
var video = document.querySelector("#videoElement");
            if (navigator.mediaDevices.getUserMedia) {
                navigator.mediaDevices.getUserMedia({ video: true })
                .then(function (stream) {
                    video.srcObject = stream;
                })
                .catch(function (err0r) {
                    console.log("Something went wrong!");
                });
            }
