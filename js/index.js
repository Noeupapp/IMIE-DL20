var watchID;

$(document).ready(function(){
    $("#stop-accel").hide();

    $("#get-accel").on("click",function(e){
            e.preventDefault();
            $(this).hide();
            $("#stop-accel").show();
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

            watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError,{frequency:1000});
    })

    $("#stop-accel").on("click",function(e){
            e.preventDefault();
            $(this).hide();
            $("#get-accel").show();
            navigator.accelerometer.clearWatch(watchID);
            $("#zone-accel").html("");
    })



    $("#get-photo").on("click",function(e){
            e.preventDefault();

            navigator.camera.getPicture(onSuccessCamera, onFailCamera, { quality: 50,
                destinationType: Camera.DestinationType.FILE_URI, correctOrientation : true });

            function onSuccessCamera(imageURI) {
                $("#zone-photo img").attr("src","data:image/jpeg;base64," + imageURI);
                $("#zone-photo").show();
                navigator.vibrate(2000);
            }

            function onFailCamera(message) {
                alert('Failed because: ' + message);
            }

    })


    $("#get-mat-toast").on("click",function(e){
        e.preventDefault();
        Materialize.toast('I am a toast!', 2000)
    })


    $("#get-native-toast").on("click",function(e){
        e.preventDefault();

        function alertDismissed() {
            // do something
        }

        navigator.notification.alert(
            'C\'est une notification',  // message
            alertDismissed,         // callback
            'Demo',            // title
            'J\'ai compris'                  // buttonName
        );


    })


})