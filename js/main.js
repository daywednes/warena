(function($) {

    window.setTimeout(() => {
        $('#w_loading').fadeOut(500);
    }, 500)

    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })

    $.fn.pluginSwiper = function(opts) {
        var defaults = {
            navigation: {
                nextEl: $(this)[0].querySelector('.swiper-button-next'),
                prevEl: $(this)[0].querySelector('.swiper-button-prev')
            },
            pagination: {
                el: $(this)[0].querySelector('.swiper-pagination'),
                clickable: true
            }
        };
        var options = $.extend({}, defaults, opts);

        new Swiper($(this)[0], options);
        return this;
    }
}(jQuery));

$(document).ready(function() {
    // $('[data-plugin="swiper"]').each(function() {
    //     $(this).pluginSwiper($(this).data('options'));
    // });

    var swiper0 = new Swiper(".mySwiper0", {
        slidesPerView: 1,
        spaceBetween: 0,
        freeMode: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: $(this)[0].querySelector('.swiper-button-next0'),
            prevEl: $(this)[0].querySelector('.swiper-button-prev0')
        },
    });
    var swiper1 = new Swiper(".mySwiper1", {
        slidesPerView: 3,
        spaceBetween: 30,
        freeMode: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
                spaceBetween: 0
            },
            // when window width is >= 480px
            767: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            // when window width is >= 640px
            991: {
                slidesPerView: 3,
                spaceBetween: 30,
            }
        },
        navigation: {
            nextEl: $(this)[0].querySelector('.swiper-button-next1'),
            prevEl: $(this)[0].querySelector('.swiper-button-prev1')
        },
    });

    $("#particles-js").length && particlesJS("particles-js", {
            particles: {
                number: {
                    value: 150
                },
                color: {
                    value: ["#7bc2ff", "#fff", "#7bc2ff"]
                },
                shape: {
                    type: "circle"
                },
                opacity: {
                    value: 0.4,
                    random: !1,
                    anim: {
                        enable: !1
                    }
                },
                size: {
                    value: 4,
                    random: !0,
                    anim: {
                        enable: !1
                    }
                },
                line_linked: {
                    enable: !1
                },
                move: {
                    enable: !0,
                    speed: 5,
                    direction: "none",
                    random: !0,
                    straight: !1,
                    out_mode: "out"
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: {
                        enable: !1
                    },
                    onclick: {
                        enable: !1
                    },
                    resize: !0
                }
            },
            retina_detect: !0
        })
        // var swiper = new Swiper(".mySwiper2", {
        //     effect: "coverflow",
        //     grabCursor: true,
        //     centeredSlides: true,
        //     slidesPerView: "auto",
        //     coverflowEffect: {
        //         rotate: 50,
        //         stretch: 0,
        //         depth: 100,
        //         modifier: 1,
        //         slideShadows: true,
        //     },
        //     pagination: {
        //         el: ".swiper-pagination",
        //     },

    // });
    // swiper.slideTo(2);


    window.onload = () => {
        try {
            const coingeckoPrice = document.querySelector('#coingecko-price');
            coingeckoPrice.shadowRoot.querySelector('.cg-container')
                .setAttribute('style', 'border:0;background-color:transparent;padding:0;');
            coingeckoPrice.shadowRoot.querySelector('div.cg-base')
                .setAttribute('style', 'padding:0;');
            coingeckoPrice.shadowRoot.querySelector('a')
                .setAttribute('style', 'margin-left:0 !important;display:flex;align-items: flex-start;color:#fff;font-size:20px;font-weight:bold');
            coingeckoPrice.shadowRoot.querySelector('img.cg-mr-2')
                .setAttribute('style', 'width:45px;height:45px;');
            coingeckoPrice.shadowRoot.querySelector('.cg-lg')
                .setAttribute('style', 'font-size:20px;margin-bottom:0 !important;');
            coingeckoPrice.shadowRoot.querySelector('span.cg-base')
                .setAttribute('style', 'display:none;');
            coingeckoPrice.shadowRoot.querySelector('.cg-footer')
                .setAttribute('style', 'display:none !important;');
            $('#coingecko-block').show();
            $('#coingecko-na').hide();
        } catch (err) {

        }
    }
});