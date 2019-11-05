function charlistas() {

    fetch("json/charlistas.json")
        .then(function (response) {
            if (!response.ok) {
                throw Error(response.statusText);
            }

            return response.json();
        })
        .then(function (speakersJson) {
            var speakers = document.getElementById('informacionCharlistas');
            // traitement de l'objet

            var json = speakersJson.charlistas;
            for (i in json) {
                speakers.innerHTML += createCharlistaCard(json[i]);
            }
        });

}

function createCharlistaCard(charlistaJson) {


    var speakerHtml = "<div class=\"col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-8\">" +
        "<div class=\"charlista\" style='background-image:url(" + charlistaJson.imagen + ");'>" +
        "<div class='info'>" +
        "<h5>" + charlistaJson.nombre + "</h5>" +
        "<div class='social'>";

    for (i in charlistaJson.socials) {
        speakerHtml += '<a href="' + charlistaJson.socials[i].link + '" target="_blank"> <span><i class="' + charlistaJson.socials[i].icon + '"></i></span></a> ';
    }


    speakerHtml += "</div>" +
        "</div>" +
        "</div>" +
        "</div>";

    return speakerHtml;
}
