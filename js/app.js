// efecto preloader
$('#status').delay(3000).fadeOut();
$('#preloader').delay(3000).fadeOut('slow');

// Restaurantes 

var container = $('.row');
var modal = $('.modal');

// Funcion que muestra los restaurantes
function restaurant() {
  for (i = 0; i < restaurants.length; i++) {
    container.append('<div class="col-xs-5 col-md-2 group all-boxes" data-name="' + restaurants[i].name + '" data-type="' + restaurants[i].type + '" data-address="' + restaurants[i].address + '" data-toggle="modal" data-target="#myModal" ><p class="titles-box">' + restaurants[i].name + '</p><img class="image"  src=' + restaurants[i].image + '></div>');
  }
}

restaurant();

// filtro.

// se ejecuta esta funcion cuando el usuario busca por nombre.

$('#inputSearch').keyup(function () {
  var name = $(this).val().toLowerCase();
  $('.group').hide();
  $('.group').each(function () {
    var search = $(this).text();
    if (search.indexOf(name) !== -1) {
      $(this).show();
    }
  });
});

$('.all-boxes').on('click', function() {
  for (i = 0; i < restaurants.length; i++) {
    if (restaurants[i]['name'] === $(this).data('name')) {
      $('.logo-rest').attr('src', restaurants[i].logo);
      $('.ubication').append(restaurants[i].ubication);
      $('.direction').text(restaurants[i].description);
      $('.district').text(restaurants[i].address);
      $('.restaurants-stars').text(restaurants[i].stars);
      $('.price').text(restaurants[i].money);
    }
  }
});