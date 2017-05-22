$(document).ready(function(){

    $("#get-accel").on("click",function(e){
            e.preventDefault();
            function onSuccess(acceleration) {
                $("#zone-accel").html('Acceleration X: ' + acceleration.x + '<br>' +
                      'Acceleration Y: ' + acceleration.y + '<br>' +
                      'Acceleration Z: ' + acceleration.z + '<br>' +
                      'Timestamp: '      + acceleration.timestamp + '<br>'
                      )
            }

            function onError() {
                alert('onError!');
            }

            navigator.accelerometer.getCurrentAcceleration(onSuccess, onError);
    })

})