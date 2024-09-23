function changeVisibility() {
    let register_page = document.getElementById("id_register_page");
    switch(register_page.className) {
        case "register_page":
            register_page.className = "register_page_disabled";
            break;
        case "register_page_disabled":
            register_page.className = "register_page";
            break;
        default:
      }
}

function moviesOnPanel(){
    let moviesss_page = document.getElementById("id_movies_page");
    switch(moviesss_page.className){
        case "movies_page":
            moviesss_page.className = "movies_page_disabled";
            break;
        case "movies_page_disabled":
            moviesss_page.className = "movies_page";
            break;
        default:
    }
}