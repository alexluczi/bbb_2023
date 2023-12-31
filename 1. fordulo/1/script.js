//Bemutatkozó kártyak szövegének mutatása
function ShowOrNot(element) {
    element = element.id.replace("Button", "Text");
    element = document.getElementById(element);
    if (element.style.display === "block") {
        element.style.display = "none";
    } else {
        element.style.display = "block";
        window.scrollBy(0, 500);
    }
}
//Bemutatkozó kártyak szövegének mutatása

//Image slider-ben használt képek
var images = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Miskolc%2C_Pal%C3%B3czy_L%C3%A1szl%C3%B3_utca%2C_el%C5%91t%C3%A9rben_a_Kand%C3%B3_K%C3%A1lm%C3%A1n_Szakk%C3%B6z%C3%A9piskola._Fortepan_21143.jpg/2560px-Miskolc%2C_Pal%C3%B3czy_L%C3%A1szl%C3%B3_utca%2C_el%C5%91t%C3%A9rben_a_Kand%C3%B3_K%C3%A1lm%C3%A1n_Szakk%C3%B6z%C3%A9piskola._Fortepan_21143.jpg",
    "https://docplayer.hu/docs-images/91/107316652/images/1-1.jpg",
    "https://minap.hu/sites/default/files/terv_kando1.jpg",
];
//Image slider-ben használt képek

// Óra
window.addEventListener("load", (event) => {
    setInterval(() => {
        let dt = new Date();
        document.getElementById("clock").innerHTML = dt.toLocaleTimeString();
    }, 1000);
//Óra
    //Image slider
    let current_Image = 0;
    $("#imgButton").click(function() {
        if (current_Image != images.length) {
            $("#no_img_text").hide();
            $("#image").attr("src", images[current_Image]);
            $('#image').show();
            current_Image += 1;
        } else {
            current_Image = 0;
            $("#no_img_text").show();
            $("#no_img_text").html("Vége!");
            $('#image').hide();
        }
    });

    $('#image').hide();
    //Image slider
});