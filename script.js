$('#submit').on('click', function() {
    $('#dateform').val()

    $.ajax({
        url: 'https://api.nasa.gov/planetary/apod?api_key=JTxUnXJn18LhDuXfqLxnVQCgJxrN7T70bbyZclUd&date=' + $('#dateform').val(),

     'success': function(resultado) {
      $('#title').html(`<h2>${resultado.explanation}</h2> `)
      $('#foto').html(`<img class="imagem" src="${resultado.url}" alt="Imagem da Nasa">`);





        }



    })



})