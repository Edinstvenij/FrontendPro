$(document).ready(function () {
    const $modal = $('.js--modal');
    let $activeImages = $('.js--gal_item').first();

    $('.gallery').on('click', event => {
        if (event.target.tagName === 'IMG') {
            $activeImages = $(event.target.closest('.js--gal_item'));
            $modal.css('display', 'block');
            $modal.find('img').attr('src', event.target.getAttribute('src'));
        }
    });

    $('.js--modal__prev').on('click', () => {
        $modal.find('img').attr('src', $activeImages.prev().find('img').attr('src'));

        if ($activeImages.prev().length > 0) {
            $activeImages = $activeImages.prev();
        }
    });


    $('.js--modal__next').on('click', () => {
        $modal.find('img').attr('src', $activeImages.next().find('img').attr('src'));

        if ($activeImages.next().length > 0) {
            $activeImages = $activeImages.next();
        }
    });

    $('.js--modal__close').on('click', () => {
        $('.js--modal').hide();
    });
});


