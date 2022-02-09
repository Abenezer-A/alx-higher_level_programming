function ReplaceTranslation (InputLang) {
  $.get('https://fourtonfish.com/hellosalut/hello/', { lang: InputLang }, (data, status) => {
    $('DIV#hello').text(data.hello);
  });
}

$(function () {
  const MyButton = $('INPUT#btn_translate');
  MyButton.click(function () {
    const InputLang = $('INPUT#language_code').val();
    ReplaceTranslation(InputLang);
  });
  MyButton.keypress($('INPUT#language_code').val(), ReplaceTranslation);
});
