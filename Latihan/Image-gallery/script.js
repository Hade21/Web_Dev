const image = document.querySelector(".thumbnail");
const preview = document.querySelector(".img-preview")
const thumbnail = document.querySelectorAll(".img-thumbnail");

image.addEventListener("click", function(event) {
    if(event.target.className == "img-thumbnail") {
        preview.src = event.target.src;
        preview.classList.add("fade");
        setTimeout(function(){
            preview.classList.remove("fade");
        }, 500)
        thumbnail.forEach(function(thumb) {
            // if( thumb.classList.contains("active") ) {
            //     thumb.classList.remove("active");
            // }
            thumb.className = "img-thumbnail"
        })
        event.target.classList.add("active");
    }
});