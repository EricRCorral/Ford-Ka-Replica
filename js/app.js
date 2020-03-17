// CALL OWL CAROUSEL

// HIDE AND SHOW ON SCROLL THE HEAD

$(document).ready(function() {
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    });
    $(document).scroll(function() {
        if (scrollY > 0) {
            $('#head').slideUp();
        } else {
            $('#head').slideDown();
        }
    });
});

// END HIDE AND SHOW ON SCROLL THE HEAD

// LIGHTBOX

var id = '';

function openLightbox(idx) {

    this.id = idx;

    document.getElementById('lightbox').style.display = 'block';

    switch (this.id) {
        case 'slide1':
            document.getElementById('slide1').style.display = 'block';

            break;
        case 'slide2':
            document.getElementById('slide2').style.display = 'block';

            break;
        case 'slide3':
            document.getElementById('slide3').style.display = 'block';

            break;
        case 'slide4':
            document.getElementById('slide4').style.display = 'block';

            break;
        case 'slide5':
            document.getElementById('slide5').style.display = 'block';

            break;
        case 'slide6':
            document.getElementById('slide6').style.display = 'block';

            break;
        case 'slide7':
            document.getElementById('slide7').style.display = 'block';

            break;
    }
}

function closeLightbox() {

    idclose = this.id;

    $('#lightbox').fadeOut();

    $(idclose).fadeOut();

    setTimeout(function() {

        document.getElementById('lightbox').style.display = 'none';

        document.getElementById(idclose).style.display = 'none';

    }, 500);


}

function Slide(value) {

    if (this.id === 'slide7' && value === 1 || this.id === 'slide1' && value === -1) {

        if (this.id === 'slide7' && value === 1) {

            document.getElementById(this.id).style.display = 'none';

            this.id = 'slide1';

            document.getElementById(this.id).style.display = 'block';

            idvalue = 'slide2';
        }

        if (this.id === 'slide1' && value === -1) {

            document.getElementById(this.id).style.display = 'none';

            this.id = 'slide7';

            document.getElementById(this.id).style.display = 'block';

            idvalue = 'slide6';

        }
    } else {

        idvalue = 'slide' + (Number(this.id.slice(5, 6)) + value);

        document.getElementById(this.id).style.display = 'none';

        document.getElementById(idvalue).style.display = 'block';

        this.id = idvalue;
    }
}

// END LIGHTBOX

// NAV MENU

function mostrar(id) {

    contentId = Object.values(document.getElementById(id).parentElement.nextElementSibling.children);

    for (let i = 0; i < contentId.length; i++) {

        if (contentId[i].id + 'Mostrar' === id) {

            document.getElementById(contentId[i].id).style.display = 'block';
        }

    }

}

function mostrarContent(id) {

    document.getElementById(id).style.display = 'block';

}

function ocultar(id) {

    contentId = Object.values(document.getElementById(id).parentElement.nextElementSibling.children);

    for (let i = 0; i < contentId.length; i++) {

        if (contentId[i].id + 'Mostrar' === id) {

            document.getElementById(contentId[i].id).style.display = 'none';
        }

    }

}

function ocultarContent(id) {
    document.getElementById(id).style.display = 'none';
}

// END NAV MENU