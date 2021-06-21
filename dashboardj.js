const URL = "https://teachablemachine.withgoogle.com/models/qp3f1jkqq/";
var z;
var y = 0;


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
                async function checkemail(){
                    if(z==="Sitting"){
                        y= y+1;
                        document.getElementById("counter").innerHTML = y;
                        window.location(a);
                    }
                }

                window.setInterval(function(){
                    if(z=="Sitting"){
                        y = y+1;
                        document.getElementById("counter").innerHTML = y;
                    }

                    if(z=="Standing"){
                        y = 0;
                        document.getElementById("counter").innerHTML = y;
                    }

                    if(y==7200){
                    }
                  }, 1000);
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
