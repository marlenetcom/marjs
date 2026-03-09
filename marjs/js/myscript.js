
function setImages() {
    options = ["dog1.jpg", "dog2.jpg", "dog3.jpg", "dog4.jpg", "dog5.jpg", "dog6.jpg"];

    let currentImages = document.querySelectorAll(".flex img")

    for (let i=0; i< currentImages.length; i++) {
        console.log("Image "+ i)

        randomImg = "images/" + options[Math.floor(Math.random() * options.length)];

        currentImages[i].src = randomImg

        currentImages[i].setAttribute("tabindex","0")
        
        currentImages[i].addEventListener("focus", function() {
            upDate(this); 
        });

        currentImages[i].addEventListener("blur", unDo);
    }
}

function upDate(previewPic) {
            console.log(previewPic);
            document.getElementById('image').innerHTML = previewPic.alt;
            document.getElementById('image').style.backgroundImage = "url('" + previewPic.src + "')";
        }

function unDo() {
            document.getElementById('image').style.backgroundImage = "url('')";
            document.getElementById('image').innerHTML = "Hover over an image below to display here.";
        }



