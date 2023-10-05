document.querySelector('.menu-icon').addEventListener('click', function() {
    const header = document.querySelector('header');
    const overlay = document.getElementById('overlay');

    this.classList.toggle('clicked');
    header.classList.toggle('clicked');

    if(this.classList.contains('clicked')) {
        overlay.style.display = 'block';
    } else {
        overlay.style.display = 'none';
    }
});

document.querySelector('.close-menu').addEventListener('click', function() {
    const header = document.querySelector('header');
    const menuIcon = document.querySelector('.menu-icon');
    const overlay = document.getElementById('overlay');

    menuIcon.classList.remove('clicked');
    header.classList.remove('clicked');
    overlay.style.display = 'none';
});


$(document).ready(function() {
    $('.formacao').click(function() {
        console.log("Clique detectado em:", $(this).text());

        var targetBoxID = $(this).data('target');
        console.log("Tentando mostrar:", targetBoxID);

        $('.box_formacao').hide();
        $('#' + targetBoxID).show();

        console.log("Box atualmente visível:", $('#' + targetBoxID).is(':visible'));
    });
});
function showBox(boxID) {
    console.log("Função showBox chamada para:", boxID);
    $('.box_formacao').hide();
    $('#' + boxID).show();
}








