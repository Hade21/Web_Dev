// const del = document.querySelector('.hapus');
// del.addEventListener("click", function() {
//     const card = document.querySelector('.card-wrapper');
//     card.style.display = 'none';
// })

const del = document.querySelectorAll(".hapus")
del.forEach(function(event) {
    event.addEventListener("click", function(el) {
        el.target.parentElement.style.display = "none";
    });
});