$(document).ready(function () {
  $.get('https://fourtonfish.com/hellosalut/', { lang: 'fr' }, (data, status) => {
    $('DIV#hello').text(data.hello);
  });
});
