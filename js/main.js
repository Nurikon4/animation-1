$(document).ready(function () {
    $('.signin__form-button').on('click', function (e) {
        e.preventDefault();
        
        var form = $('.signin__form');
        if (form.find('input[name=username]').val() == '' || form.find('input[name=password]').val() == '' || form.find('input[name=nameUp]').val() == '' || form.find('input[name=tel]').val() == '') {
            $('.modal').removeClass('hidden');
            $('.section').addClass('blur');
        }
    });


    $('.modal__ok').on('click', function () {
        $('.modal').addClass('hidden');
        $('.section').removeClass('blur');
    });

});