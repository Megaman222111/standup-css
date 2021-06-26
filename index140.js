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

                    if(y>=f){
                        y= 0;
                        document.getElementById("counter").innerHTML = y;
                        document.getElementById("sitting-counter").innerHTML = b;
                        document.getElementById("standing-counter").innerHTML = c;
                        sendemail();
                        play();
                    }
                  }, 1000);
                  function sendemail(){
                  Email.send({
                    SecureToken : "0bebc91d-41f4-400c-8424-683f10fd8be4",
                    To : a,
                    From : "stand-up@stand-up.ca",
                    Subject : "Time to get up!",
                    Body : "<body class="center text-center"><main class="form-signin"> <div class="border border-dark"> <form class="pure-form pure-form-aligned" method="POST" action="."> <section> <fieldset> <img class="mb-4" src="https://raw.githubusercontent.com/Megaman222111/standup-css/main/LogoWhite.png" alt="" > <h1>This Page Isn't Working (Error 500)</h1> <p>This page is not working as it is supposed to. Try logging in to the website or refreshing your browser tab.</p> </fieldset> </form> </section> </div> </main> <link href="https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/lux/bootstrap.min.css" crossorigin="anonymous" rel="stylesheet"> <link href="https://unpkg.com/purecss@2.0.6/build/pure-min.css" crossorigin="anonymous" rel="stylesheet"> <link href="https://cdn.jsdelivr.net/gh/Megaman222111/standup-css/login.css" crossorigin="anonymous" rel="stylesheet"> </body> </html>",
                }).then(
                  message => alert("It has been 2 hours, time to get up!")
                );
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
