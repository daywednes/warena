/* PRELOADER */
$(function() {
    $("#IC_loading").delay(500).fadeOut("slow");
});

/* SCROLL TO TOP */
function handleToggleScrollToTop() {
    if (window.scrollY > 200) {
        $("#toTop").fadeIn(300);
    } else {
        $("#toTop").fadeOut(300);
    }
}
handleToggleScrollToTop();
window.addEventListener("scroll", handleToggleScrollToTop);

/* SLIDE */

var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
        shadow: true,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});
swiper.slideTo(2);
// var swiper = new Swiper(".mySwiper", {
//     effect: "coverflow",
//     grabCursor: true,
//     centeredSlides: true,
//     slidesPerView: "auto",
//     loop: true,
//     autoplay: {
//         delay: 4000,
//         disableOnInteraction: false,
//     },
//     coverflowEffect: {
//         rotate: 50,
//         stretch: 0,
//         depth: 100,
//         modifier: 1,
//         slideShadows: true,
//     },
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
// });
// var featuresSwiper = new Swiper(".featuresSwiper", {
//     effect: "cube",
//     grabCursor: true,
//     centeredSlides: true,
//     slidesPerView: "auto",
//     loop: true,
//     autoplay: {
//         delay: 4000,
//         disableOnInteraction: false,
//     },
//     cubeEffect: {
//         shadow: true,
//         slideShadows: true,
//         shadowOffset: 20,
//         shadowScale: 0.94,
//     },
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     }
// });

/* DRAW CHART */
// const canvas_border_color = "#7397c9";
// const pie_color = "#3c5a85";
// const pie_hover_color = "#ff3549";
// const data_set = {
//   labels: [
//     "Ecosystem",
//     "Reward",
//     "Dev Team",
//     "Founder Team",
//     "Advisors",
//     "Marketing",
//     "Private sale",
//     "Public IDO",
//   ],
//   titles: "",
//   datasets: [
//     {
//       label: "949",
//       lineTension: 0,
//       backgroundColor: [
//         "#6FAFD5",
//         pie_color,
//         pie_color,
//         pie_color,
//         pie_color,
//         pie_color,
//         pie_color,
//         pie_color,
//       ],
//       hoverBackgroundColor: [
//         pie_hover_color,
//         pie_hover_color,
//         pie_hover_color,
//         pie_hover_color,
//         pie_hover_color,
//         pie_hover_color,
//         pie_hover_color,
//         pie_hover_color,
//       ],
//       borderColor: canvas_border_color,
//       borderWidth: 1,
//       hoverBorderColor: canvas_border_color,
//       data: [30, 35, 10, 6, 3, 10, 4, 2],
//       animationDuration: 400,
//     },
//   ],
// };
// const options_set = {
//   cutout: "40%",
//   plugins: {
//     legend: {
//       display: false,
//     },
//     cutoutPercentage: 0,
//     maintainAspectRatio: false,
//     tooltip: {
//       callbacks: {
//         title: function (tooltipItem) {
//           return [tooltipItem[0]["label"]];
//         },
//         label: function (tooltipItem, data) {
//           return tooltipItem["raw"] + " %";
//         },
//       },
//       backgroundColor: "transparent",
//       titleFontSize: 11,
//       bodyFontColor: "#fff",
//       bodyFontSize: 14,
//       bodyFontStyle: "bold",
//       bodySpacing: 0,
//       yPadding: 0,
//       xPadding: 0,
//       yAlign: "center",
//       xAlign: "center",
//       footerMarginTop: 5,
//       displayColors: false,
//     },
//   },
//   onHover: function (e, i) {
//     if (i.length) {
//       var _cur_idx = i[0].index + 1;
//       $("#ic-chart-legends li").removeClass("active");
//       $("#ic-chart-legends li:nth-child(" + _cur_idx + ")").addClass("active");
//     } else {
//       $("#ic-chart-legends li").removeClass("active");
//     }
//   },
// };

$(function() {
    new WOW().init();

    // var ctx = document.getElementById("WARETokenChart").getContext("2d");
    // var myChart = new Chart(ctx, {
    //   type: "doughnut",
    //   data: data_set,
    //   options: options_set,
    // });
});

/* TOOLTIP */
var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
});

/*---------------------------------
## Top Header
---------------------------------*/
$('.top-header .absolute').click(function(){
  $(this).parents('.top-header').addClass('hidden-note');
});
