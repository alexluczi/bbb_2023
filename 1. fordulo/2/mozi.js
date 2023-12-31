//Leírás a filmajánló JS működéséről

//Filmfeltöltő sablon:
//movies.push({title: "", categories: ["", ""], relase_date: "", img: "", link: ""});

var movies = []
movies.push({ title: "Mission: Impossible", categories: ["Akció", "Kaland", "Thriller"], relase_date: "1996. május 22.", img: "https://upload.wikimedia.org/wikipedia/en/e/e1/MissionImpossiblePoster.jpg", link: "https://www.imdb.com/title/tt0117060/" });
movies.push({ title: "Ready Player One", categories: ["Akció", "Sci-Fi"], relase_date: "2018. március 29.", img: "https://m.media-amazon.com/images/M/MV5BY2JiYTNmZTctYTQ1OC00YjU4LWEwMjYtZjkwY2Y5MDI0OTU3XkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_.jpg", link: "https://www.imdb.com/title/tt1677720/" });
movies.push({ title: "The Suicide Squad", categories: ["Vígjáték", "Fantasy"], relase_date: "2021. július 30.", img: "https://m.media-amazon.com/images/M/MV5BMWU4NDQ2NjEtNjhkOS00Y2MwLWJkODItZmJhZGE0MDU1OWM4XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg", link: "https://www.imdb.com/title/tt6334354/" });
movies.push({ title: "Don't Look Up", categories: ["Vígjáték", "Dráma", "Sci-Fi"], relase_date: "2021. december 5.", img: "https://fr.web.img3.acsta.net/pictures/21/11/16/17/11/5656957.jpg", link: "https://www.imdb.com/title/tt11286314/" });
movies.push({ title: "Countdown", categories: ["Horror", "Thriller"], relase_date: "2019. október 25.", img: "https://m.media-amazon.com/images/M/MV5BODY3OGEyMTgtYTZjZi00Y2YzLWFjY2UtMjEwYWE1MjRkOTc4XkEyXkFqcGdeQXVyODQxMTI4MjM@._V1_.jpg", link: "https://www.imdb.com/title/tt10039344/" });
movies.push({ title: "No Time to Die", categories: ["Akció", "Thriller"], relase_date: "2021. szeptember 30.", img: "https://m.media-amazon.com/images/M/MV5BYWQ2NzQ1NjktMzNkNS00MGY1LTgwMmMtYTllYTI5YzNmMmE0XkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_.jpg", link: "https://www.imdb.com/title/tt2382320/" });
movies.push({ title: "Top Gun: Maverick", categories: ["Akció", "Dráma"], relase_date: "2022. május 26.", img: "https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_FMjpg_UX1000_.jpg", link: "https://www.imdb.com/title/tt1745960/" });
movies.push({ title: "Buddy Games", categories: ["Vígjáték"], relase_date: "2019. február 10.", img: "https://m.media-amazon.com/images/M/MV5BNmE4ZTZmYjAtNGU2OS00NDFlLWI2OWYtMjYwZmVjOWJlOWE1XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_FMjpg_UX1000_.jpg", link: "https://www.imdb.com/title/tt7070818/" });
movies.push({ title: "Love in the Villa", categories: ["Vígjáték", "Romantikus"], relase_date: "2022. szeptember 1.", img: "https://m.media-amazon.com/images/M/MV5BMjI5NmZmYTUtM2MzZS00ZmI0LTgyMzAtMTgwNWMyY2NjYjVkXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_FMjpg_UX1000_.jpg", link: "https://www.imdb.com/title/tt15463032/" });
movies.push({ title: "Panama", categories: ["Akció", "Thriller"], relase_date: "2022.március 18.", img: "https://m.media-amazon.com/images/M/MV5BMWQ0Mjc5ZjAtZmRjNi00MGY4LWFlNDYtOGVlMjc3YjJiNTk4XkEyXkFqcGdeQXVyMTI3NDk1ODY0._V1_FMjpg_UX1000_.jpg", link: "https://www.imdb.com/title/tt4029412/" });
movies.push({ title: "Fall", categories: ["Thriller"], relase_date: "2022.augusztus 12.", img: "https://m.media-amazon.com/images/M/MV5BNGI3MWYwYjItNzZhYi00ZWIzLTkyMzYtN2JmNjg3ODg1NTg4XkEyXkFqcGdeQXVyMTMwMDA5ODU3._V1_FMjpg_UX1000_.jpg", link: "https://www.imdb.com/title/tt15325794/" });
movies.push({ title: "I Me Wed", categories: ["Vígjáték", "Romantikus"], relase_date: "2009. május 6.", img: "https://m.media-amazon.com/images/M/MV5BMTA5NTA5MTAyNjJeQTJeQWpwZ15BbWU3MDA2MTA1NTE@._V1_FMjpg_UX1000_.jpg", link: "https://www.imdb.com/title/tt0991164/" });
movies.push({ title: "Girl in Progress", categories: ["Vígjáték", "Dráma"], relase_date: "2012. május 11.", img: "https://m.media-amazon.com/images/M/MV5BMjEyMzk3MTgwNV5BMl5BanBnXkFtZTcwMTU3Njg2Nw@@._V1_FMjpg_UX1000_.jpg", link: "https://www.imdb.com/title/tt1817676/" });
movies.push({ title: "Demigod", categories: ["Horror"], relase_date: "2021. oktober 15.", img: "https://m.media-amazon.com/images/M/MV5BZDRhZWQzYTctNzQwNy00MjUzLWI1ZWUtNDdlNDQ5NWEzZDRlXkEyXkFqcGdeQXVyNDM1MDI0MjA@._V1_FMjpg_UX1000_.jpg", link: "https://www.imdb.com/title/tt12058582/" });
movies.push({ title: "The Dunes", categories: ["Thriller"], relase_date: "2021. október 21.", img: "https://m.media-amazon.com/images/M/MV5BNjE3OTJiNmQtZjBhOC00MzA0LWE2YzktNGQxOWI5ODA4OGZjXkEyXkFqcGdeQXVyMTI4NDM0MjE@._V1_FMjpg_UX1000_.jpg", link: "https://www.imdb.com/title/tt6910678/" });
movies.push({ title: "Every Day", categories: ["Dráma", "Fantasy", "Romantikus"], relase_date: "2018. február 23.", img: "https://m.media-amazon.com/images/M/MV5BZTFiNzQ2OGUtYTdmMi00NjRjLWExN2MtZmNiODI4MTY3MGM3XkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_FMjpg_UX1000_.jpg", link: "https://www.imdb.com/title/tt7026672/" });
movies.push({ title: "Instant Family", categories: ["Vígjáték", "Dráma"], relase_date: "2018. november 16.", img: "https://m.media-amazon.com/images/M/MV5BMTkzMzgzMTc1OF5BMl5BanBnXkFtZTgwNjQ4MzE0NjM@._V1_FMjpg_UX1000_.jpg", link: "https://www.imdb.com/title/tt7401588/" });
movies.push({ title: "To All the Boys I've Loved Before", categories: ["Vígjáték", "Dráma", "Romantikus"], relase_date: "2018. augusztus 17.", img: "https://m.media-amazon.com/images/M/MV5BMjQ3NjM5MTAzN15BMl5BanBnXkFtZTgwODQzMDAwNjM@._V1_FMjpg_UX1000_.jpg", link: "https://www.imdb.com/title/tt3846674/" });
movies.push({ title: "Oppenheimer", categories: ["Történelem", "Dráma", "Életrajz"], relase_date: "2023. július 20.", img: "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_.jpg" });
movies.push({ title: "Barbie", categories: ["Vígjáték", "Fantasy", "Kaland"], relase_date: "2023. július 21.", img: "https://m.media-amazon.com/images/M/MV5BNjU3N2QxNzYtMjk1NC00MTc4LTk1NTQtMmUxNTljM2I0NDA5XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg" });

//Kedvelt filmek kinyerése
function GetLikedCategories() {
    let x = $('input[name="like"]:checked').map(function() { return $(this).val(); }).get();
    return x;
}

//Nem kedvelt filmek kinyerése
function GetDislikedCategories() {
    let x = $('input[name="dislike"]:checked').map(function() { return $(this).val(); }).get();
    return x;
}

//Minden kategória egy helyre gyűjtése
var categories = []
movies.forEach(movie => {
    movie.categories.forEach(category => {
        if (!categories.includes(category)) {
            categories.push(category);
        }
    });
});

//Kategóriák feltöltése

categories.forEach(category => {
    $('.like_container').append('<input type="checkbox" name="like" id="' + category + '" value="' + category + '"> <label for="' + category + '">' + category + '</label>');
    $('.dislike_container').append('<input type="checkbox" name="dislike" id="dislike_' + category + '" value="' + category + '"> <label for="dislike_' + category + '">' + category + '</label>');
});

$('input[name="like"]').change(function() {
    let likes = GetLikedCategories();
    
    likes.forEach(liked_category => {
        $('#dislike_' + liked_category).prop("checked", false);
    });
});

$('input[name="dislike"]').change(function() {
    let dislikes = GetDislikedCategories();

    dislikes.forEach(disliked_category => {
        $('#' + disliked_category).prop("checked", false);
    });
});

//kiválasztott kategóriák megejelenítése

$('#done').click(function(event) {
    event.preventDefault();

    let likes = GetLikedCategories();
    let dislikes = GetDislikedCategories();

    let filtered_movies = "";

    movies.forEach(movie => { //Film-elemek átlapozása (egyenként)
        let show_movie = true;
        
        if (likes.length == 0 && dislikes.length == 0) {
            show_movie = true;
        } else {
            let liked = false;
            let disliked = false;

            likes.forEach(liked_category => {
                for (let c = 0; c < movie.categories.length; c++) { //Film-elemek kategóriájainak átlapozása (egyenként)
                    let category = movie.categories[c];
                    if (category === liked_category) {  //Azon eset, amikor a film kedveltként van számontartva
                        liked = true;
                        break;
                    }
                }
            });
    
            dislikes.forEach(disliked_category => {
                for (let c = 0; c < movie.categories.length; c++) { //Film-elemek kategóriájainak átlapozása (egyenként)
                    let category = movie.categories[c];
                    if (category === disliked_category) { //Azon eset, amikor a film nem kedveltként van számontartva
                        disliked = true;
                        break;
                    }
                }
            });

            //Filmek kiválasztására szolgáló logikai műveletsor
            if (disliked) {
                show_movie = false;
            } else if (liked) {
                show_movie = true;
            } else if (!liked && likes.length > 0) {
                show_movie = false;
            } else if (!disliked && !liked) {
                show_movie = true;
            }
        }

        if (show_movie) {
            let cats = ''; //Nem macska!! (kategóriák rövidítése)

            movie.categories.forEach(function(category, idx, array) {
                if (idx === array.length - 1) { //Formázás (ha a végén van a felsorolásnak, nem tesz vesszőt)
                    cats += category;
                } else {
                    cats += category + ', ';
                }
            });

            //Megjeleníti az oldalon a már szűrt kategóriákat
            filtered_movies += '<div class="movie_card" data-href="' + movie.link + '"><img src="' + movie.img + '" alt="' + movie.title + ' poszter"><div class="img_shadow"></div><div class="movie_card-details"><b>' + movie.title + '</b><p id="category">' + cats + '</p><p id="release_date">' + movie.relase_date + '</p></div></div>';
        }
    });

    $(".movies").html(filtered_movies);
});


//link megnyitása

$(document).ready(function($) {
    $("body").on("click", ".movie_card", function() {
        window.location = $(this).data("href");
    });

    $('#done').click();
});
