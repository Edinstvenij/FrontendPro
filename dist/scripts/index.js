"use strict";

$(document).ready(function () {
  var $modal = $('.js--modal');
  var $activeImages = $('.js--gal_item').first();
  $('.gallery').on('click', function (event) {
    if (event.target.tagName === 'IMG') {
      $activeImages = $(event.target.closest('.js--gal_item'));
      $modal.css('display', 'block');
      $modal.find('img').attr('src', event.target.getAttribute('src'));
    }
  });
  $('.js--modal__prev').on('click', function () {
    $modal.find('img').attr('src', $activeImages.prev().find('img').attr('src'));
    if ($activeImages.prev().length > 0) {
      $activeImages = $activeImages.prev();
    }
  });
  $('.js--modal__next').on('click', function () {
    $modal.find('img').attr('src', $activeImages.next().find('img').attr('src'));
    if ($activeImages.next().length > 0) {
      $activeImages = $activeImages.next();
    }
  });
  $('.js--modal__close').on('click', function () {
    $('.js--modal').hide();
  });
});