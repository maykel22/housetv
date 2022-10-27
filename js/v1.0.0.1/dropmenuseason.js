$(document).ready(function () {
    $('div.tabs a:first').addClass('active');
    $('.secciones article').hide();
    $('.secciones article:first').show();

    $('div.tabs a').click(function () {
        $('div.tabs a').removeClass('active');
        $(this).addClass('active');
        $('.secciones article').hide();

        var activeTab = $(this).attr('href');
        $(activeTab).show();
        return false;
    });
});

function show(anything) {
    document.querySelector('.textBox').value = anything;
}


let dropdown2 = document.querySelector('.dropMenu2');
dropdown2.onclick = function () {
    dropdown2.classList.toggle('dropMenu2-active')
}
