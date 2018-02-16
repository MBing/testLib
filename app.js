// var g = G$('John', 'Doe', 'English');

$('#login').click(function () {
    var lang = $('#lang').val();
    var loginGr = G$('John', 'Doe');

    console.log(lang);
    loginGr.setLang(lang)
            .greetHTMLJQuery('#greeting', true)
            .log();
});
