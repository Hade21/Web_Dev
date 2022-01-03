// const del = document.querySelector('.hapus');
// del.addEventListener("click", function() {
//     const card = document.querySelector('.card-wrapper');
//     card.style.display = 'none';
// })

// const del = document.querySelectorAll(".hapus")
// del.forEach(function(event) {
//     event.addEventListener("click", function(el) {
//         el.target.parentElement.style.display = "none";
//         el.preventDefault();
//         el.stopPropagation();
//         console.log(el);
//     });
// });

// //event bubbling example
// const cards = document.querySelectorAll(".card-wrapper");
// cards.forEach(function(event) {
//     event.addEventListener("click", function() {
//         alert("Oke.!");
//     })
// })

//modif efektivitas script
const container = document.querySelector(".container");
container.addEventListener("click", function(el) {
    if(el.target.className == "hapus") {
        el.target.parentElement.style.display = "none";
        el.preventDefault();
        el.stopPropagation();
    }
})