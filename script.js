/* Wersja funkcji $.get() */

$(document).ready(function () {

    $('button').click(function () {

        $.get('https://akademia108.pl/api/ajax/get-post.php', function (data) {

            let newP = $('<p></p>')

            $('body').append(newP)

            $('p').html(`UserId: ${data.userId} </br>
                             Id: ${data.id}</br>
                             Title: ${data.title}</br>
                             Body: ${data.body}
                `)
        })
    })
})

/* Wersja funkcji $.getJSON() */

$(document).ready(function () {

    $('button').click(function () {

        $.getJSON('https://akademia108.pl/api/ajax/get-post.php', function (data) {

            let newP = $('<p></p>')

            $('body').append(newP)

            $('p').html(`UserId: ${data.userId} </br>
                             Id: ${data.id}</br>
                             Title: ${data.title}</br>
                             Body: ${data.body}
                `)
        })
    })
})