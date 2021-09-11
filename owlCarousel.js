function OwlCarousel() {
    $(document).ready(function(){
        $(".main__slip-slide.owl-carousel").owlCarousel({
            items: 1,
            margin: 20,
            // stagePadding: 20,
            loop: true,
            dots: true,
            // slideTransition: `linear`,
            rewind: true,
            autoplay: true,
            autoplayTimeout: 5000,
            smartSpeed: 600,
            autoplayHoverPause: true,
            lazyLoad: true
            // autoplaySpeed: 1000/true,
        });

        $(".option__welcome-list.owl-carousel").owlCarousel({
            margin: 16,
            dots: false,
            navText: ["<i class='fi-rr-angle-left'></i>","<i class='fi-rr-angle-right'></i>"],
            responsive: {
                0: {
                    items: 2,
                    nav: false,
                },
                740: {
                    items: 3,
                    nav: true,
                },
                1024: {
                    items: 6,
                    nav: true,
                }
            },
        });

        $(".option__place-list.owl-carousel").owlCarousel({
            margin: 16,
            dots: false,
            navText: ["<i class='fi-rr-angle-left'></i>","<i class='fi-rr-angle-right'></i>"],
            responsive: {
                0: {
                    items: 2,
                    nav: false,
                },
                740: {
                    items: 3,
                    nav: true,
                },
                1024: {
                    items: 5,
                    nav: true,
                }
            },
        });

        $(".option__bargain-list.owl-carousel").owlCarousel({
            margin: 16,
            dots: false,
            navText: ["<i class='fi-rr-angle-left'></i>","<i class='fi-rr-angle-right'></i>"],
            responsive: {
                0: {
                    items: 1,
                    nav: false,
                },
                740: {
                    items: 2,
                    nav: true,
                },
                1024: {
                    items: 3,
                    nav: true,
                }
            },
        });
        
        $(".option__hint-list.owl-carousel").owlCarousel({
            margin: 16,
            dots: false,
            navText: ["<i class='fi-rr-angle-left'></i>","<i class='fi-rr-angle-right'></i>"],
            responsive: {
                0: {
                    items: 1,
                    nav: false,
                },
                740: {
                    items: 2,
                    nav: true,
                },
                1024: {
                    items: 4,
                    nav: true,
                }
            },
        });

        $(".option__discover-list.owl-carousel").owlCarousel({
            margin: 16,
            dots: false,
            navText: ["<i class='fi-rr-angle-left'></i>","<i class='fi-rr-angle-right'></i>"],
            responsive: {
                0: {
                    items: 1,
                    nav: false,
                },
                740: {
                    items: 1,
                    nav: true,
                },
                1024: {
                    items: 3,
                    nav: true,
                }
            },
        });

        $(".option__guide-list.owl-carousel").owlCarousel({
            margin: 16,
            dots: false,
            navText: ["<i class='fi-rr-angle-left'></i>","<i class='fi-rr-angle-right'></i>"],
            responsive: {
                0: {
                    items: 1,
                    nav: false,
                },
                740: {
                    items: 2,
                    nav: true,
                },
                1024: {
                    items: 5,
                    nav: true,
                }
            },
        });

        $(".owl-carousel").owlCarousel({
            // items: 3,
            margin: 16,
            dots: false,
        });
    });
}

export default OwlCarousel;