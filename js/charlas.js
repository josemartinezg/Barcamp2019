function charlas() {

    fetch("json/charlas.json")
        .then(function (response) {
            if (!response.ok) {
                throw Error(response.statusText);
            }

            return response.json();
        })
        .then(function (speakersJson) {

            var sala1 = document.getElementById("tab1");
            var sala2 = document.getElementById("tab2");
            var sala3 = document.getElementById("tab3");
            var sala4 = document.getElementById("tab4");

            var json = speakersJson.charlas;
            for (i in json) {

                if (i < 6) {

                    sala1.innerHTML += createCharlasCard(json[i]);

                } else if (i < 12) {
                    sala2.innerHTML += createCharlasCard(json[i]);

                } else if (i < 18) {
                    sala3.innerHTML += createCharlasCard(json[i]);

                } else {
                    sala4.innerHTML += createCharlasCard(json[i]);

                }

            }
        });

}

function createCharlasCard(charlistaJson) {

    console.log(charlistaJson.description);

    var speakerHtml =
        "<li> " +
        "<div class=\"row justify-content-evenly\">" +
        "<div class=\"col-lg-2\"> <p class='date'></p> </div>" +
        "<div class='col-lg-9'>" +
        "<h5>" + charlistaJson.charla + "</h5>" +
        "<p><i>Por: " + charlistaJson.nombre + "</i></p>" +
        "<p>" + charlistaJson.abstract + "</p>" +
        "<a class='bg-primary see-more'>Ver más</a>" +
        "<div class='body-description'>" +
        "<p>" + charlistaJson.description + "</p>" +
        +"</div>" +
        "</div>" +
        "</div>" +
        "</li>";

    return speakerHtml;
}
