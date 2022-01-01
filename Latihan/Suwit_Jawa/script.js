function pilComp() {
    const comp = Math.random();
    if(comp < 0.34) return "gajah";
    if(comp > 0.34 && comp < 0.67) return "orang";
    return "semut";
}

function rules(comp, player)  {
    if(player == comp) return "SERI.!";
    if(player == "gajah") return (comp == "orang") ? "MENANG" : "KALAH.!";
    if(player == "orang") return (comp == "gajah") ? "KALAH.!" : "MENANG.!";
    if(player == "semut") return (comp == "orang") ? "KALAH.!" : "MENANG.!";
}

function acak() {
    const imgcomp = document.querySelector(".imgComputer");
    const gambar = ["gajah", "orang", "semut"];
    let i = 0;
    const waktuMulai = new Date().getTime();
    setInterval(function() {
        if(new Date().getTime() - waktuMulai > 1000){
            clearInterval;
            return;
        }
        imgcomp.setAttribute("src", "assets/" + gambar[i++] + ".png");
        if(i == gambar.length) i = 0;
    }, 100)
}

const pilPlayer = document.querySelectorAll("li img");
pilPlayer.forEach(function (pil){
    pil.addEventListener("click", function() {
        const pilihComp = pilComp();
        const pilihPlayer = pil.className;
        const hasil = rules(pilihComp, pilihPlayer);

        acak();
        setTimeout(function(){
            const imgComputer = document.querySelector(".imgComputer");
            imgComputer.setAttribute("src", "assets/" + pilihComp + ".png");

            const info = document.querySelector(".info");
            info.innerHTML = hasil;
        }, 1000)

        
    });
});

