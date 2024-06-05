var inputs = document.getElementsByClassName('formulario__input');
for (var i=0; i < inputs.length; i++){
    inputs[i].addEventListener('keyup', function(){
        if(this.value.length>=0){
            this.nextElementSibling.classList.add('fijar');
        }else{
            this.nextElementSibling.classList.remove('fijar');
        }
    });
}

function initMap() {
    var mapOptions = {
        center: { lat: TU_LATITUD, lng: TU_LONGITUD },
        zoom: TU_ZOOM
    };
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);
}