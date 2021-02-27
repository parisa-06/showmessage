// var error = {

//     'title': "Good job!",
//     'text': "You clicked the button!",
//     'icon': 'error',
//     'button': "Aww yiss!"

// };
var message = {

    'title': "Good job!",
    'text': "You clicked the button!",
    'icon': 'sussecc',
    'button': "Aww yiss!",
    'type': 'error'

};

// var type = {
//     'title': 'Signed in successfully',
//     'icon': 'success',
//     'toast': true,
//     'position': 'button',
//     'showConfirmButton': false,
//     'timer': 3000,
//     'timerProgressBar': true


// }



$.ajax({
    url: 'https://api.noaeincloud.ir/api/sample',
    data: { 'username': 'admoointest', 'password': 'pass123' },
    type: 'GET',
    dataType: 'JSON',
    beforeSend: function() {
        //  alert("gfh");
    },
    success: function(xhr, response) {
        console.log(xhr['message']);
        showMessage(xhr['message']);




    },
    error: function(xhr, status, error) {
        console.log(xhr.message)

    },




});


function showMessage(message) {

    var defultTtitle = "hellow world";
    if (message.title) {
        defultTtitle = message.title;
    };

    switch (message.type) {
        case 'error':

            swal({
                icon: 'error',
                title: defultTtitle,
                text: message.text,
                closeOnClickOutside: true,
            })
            break;

        case 'success':
            swal({
                icon: 'success',
                title: defultTtitle,
                text: message.text,
                closeOnClickOutside: true,
            })
            break;

        case 'toast':
            const Toast = Swal.mixin({
                toast: true,
                position: 'button',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            })

            Toast.fire({
                icon: 'success',
                title: 'Signed in successfully'
            });
    }






}