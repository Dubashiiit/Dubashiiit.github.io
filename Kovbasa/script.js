var pics = ["pictures/pic.png", 
            "pictures/pic.png",
            "pictures/pic.png", 
            "pictures/pic.png", 
            "pictures/pic.png", 
            "pictures/pic.png"];

function changePicture(value)
{
    switch(value)
    {
        case 0: document.getElementById('main_pic').src = pics[value]; break;
        case 1: document.getElementById('main_pic').src = pics[value]; break;
        case 2: document.getElementById('main_pic').src = pics[value]; break;
        case 3: document.getElementById('main_pic').src = pics[value]; break;
        case 4: document.getElementById('main_pic').src = pics[value]; break;
        case 5: document.getElementById('main_pic').src = pics[value]; break;
    }
}

function initMap()
{
    var opt = {
        center: {lat: 50.382553, lng: 30.496118},
        zoom: 15
    };

    var map = new google.maps.Map(document.getElementById('map'), opt);
    var pos = {lat: 50.382553, lng: 30.496118}
    var marker = new google.maps.Marker({
        position: pos,
        map: map,
        title: "Nules"
    });
}