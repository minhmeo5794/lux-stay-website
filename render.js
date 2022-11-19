function Render() {
    /* Declare Variable*/
    var mainSlipSlide = document.querySelector('.main__slip-slide');
    var mainList = document.querySelector('.main__list');
    var optionWelcomeList = document.querySelector('.option__welcome-list');
    var optionPlaceList = document.querySelector('.option__place-list');
    var optionBargainList = document.querySelector('.option__bargain-list');
    var optionHintList = document.querySelector('.option__hint-list');
    var optionDiscoverList = document.querySelector('.option__discover-list');
    var optionGuideList = document.querySelector('.option__guide-list');
    /* ------------------ */
    var textListTopHomestay = document.querySelector(".text__list-top-homestay");
    var textListFavouriteSpace = document.querySelector(".text__list-favourite-space");
    var textListAboutUs = document.querySelector(".text__list-about-us");

    /* Declare Array */
    var mainSlipSlideArray = [
        {
            id: 1,
            image: 'https://minhmeo5794.github.io/lux-stay-website/assets/image/code30.png',
        },
        {
            id: 2,
            image: 'https://minhmeo5794.github.io/lux-stay-website/assets/image/home.png',
        },
        {
            id: 3,
            image: 'https://minhmeo5794.github.io/lux-stay-website/assets/image/discount300k.png',
        },
        {
            id: 4,
            image: 'https://minhmeo5794.github.io/lux-stay-website/assets/image/code20.png',
        },
    ];

    var mainListArray = [
        {
            id: 1,
            name: 'Địa điểm nổi bật',
            describe: 'Cùng Luxstay bắt đầu chuyến hành trình chinh phục thế giới của bạn',
        },
        {
            id: 2,
            name: 'Ưu đãi độc quyền',
            describe: 'Chỉ có tại Luxstay, hấp dẫn và hữu hạn, book ngay',
        },
        {
            id: 3,
            name: 'Gợi ý từ Luxstay',
            describe: 'Những địa điểm thường đến mà Luxstay gợi ý dành cho bạn',
        },
        {
            id: 4,
            name: 'Gợi ý khám phá',
            describe: 'Để mỗi chuyến đi là một hành trình truyền cảm hứng, mỗi căn phòng là một khoảng trời an yên',
        },
        {
            id: 5,
            name: 'Hưỡng dẫn sử dụng',
            describe: 'Đặt chỗ nhanh, thanh toán đơn giản, sử dụng dễ dàng',
        },
    ];

    var optionWelcomeArray = [
        {
            id: 1,
            name: 'Homestay',
            describe: 'Căn hộ dịch vụ & Biệt thự',
            backgroundImage: '/assets/image/ghedai.png'
        },
        {
            id: 2,
            name: 'Vé tham quan',
            describe: 'Mua vé thật dễ dàng',
            backgroundImage: '/assets/image/congvien.jpg'
        },
    ];

    var optionPlaceArray = [
        {
            id: 1,
            image: './assets/image/location_1_HaNoi.png',
            name: 'Hà Nội',
            describeQuantity: '2917',
            describeText: 'Chỗ ở'
        },
        {
            id: 2,
            image: './assets/image/location_2_TPHCM.png',
            name: 'TP. Hồ Chí Minh',
            describeQuantity: '2356',
            describeText: 'Chỗ ở'
        },
        {
            id: 3,
            image: './assets/image/location_3_VungTau.png',
            name: 'Vũng Tàu',
            describeQuantity: '542',
            describeText: 'Chỗ ở'
        },
        {
            id: 4,
            image: './assets/image/location_4_DaLat.png',
            name: 'Đà Lạt',
            describeQuantity: '1475',
            describeText: 'Chỗ ở'
        },
        {
            id: 5,
            image: './assets/image/location_5_DaNang.png',
            name: 'Đà Nẵng',
            describeQuantity: '904',
            describeText: 'Chỗ ở'
        },
        {
            id: 6,
            image: './assets/image/location_6_NhaTrang.png',
            name: 'Nha Trang',
            describeQuantity: '643',
            describeText: 'Chỗ ở'
        },
        {
            id: 7,
            image: './assets/image/location_7_QuangNinh.png',
            name: 'Quảng Ninh',
            describeQuantity: '217',
            describeText: 'Chỗ ở'
        },
        {
            id: 8,
            image: './assets/image/location_8_HoiAn.png',
            name: 'Hội An',
            describeQuantity: '321',
            describeText: 'Chỗ ở'
        },
        
    ];

    var optionBargainArray = [
        {
            id: 1,
            image: './assets/image/event_1_code20.jpg'
        },
        {
            id: 2,
            image: './assets/image/event_2_discount300k.jpg'
        },
        {
            id: 3,
            image: './assets/image/event_3_discount15.jpg'
        },
        {
            id: 4,
            image: './assets/image/event_4_covid.jpg'
        },
    ];

    var optionHintArray = [
        {
            id: 1,
            name: 'Vũng Tàu Biệt thự hồ bơi',
            describe: 'Những căn biệt thự có hồ bơi dành cho kỳ nghỉ của bạn tại Vũng Tàu',
            backgroundImage: './assets/image/hint_1.jpg'
        },
        {
            id: 2,
            name: 'Vi vu ngoại thành Hà Nội',
            describe: 'Trải nghiệm không gian thoáng đãng cho chuyến đi ngay gần Hà Nội',
            backgroundImage: './assets/image/hint_2.jpg'
        },
        {
            id: 3,
            name: 'Hà Nội nội thành lãng mạn',
            describe: 'Không gian lãng mạn dành cho cặp đôi tại trung tâm Hà Nội',
            backgroundImage: './assets/image/hint_3.jpg'
        },
        {
            id: 4,
            name: 'Sài Gòn cần là có ngay',
            describe: 'Những căn homestay có 01 phòng ngủ tại Sài Gòn có thể đặt nhanh chóng',
            backgroundImage: './assets/image/hint_4.jpg'
        },
        {
            id: 5,
            name: 'Bể bơi & BBQ',
            describe: 'Trải nghiệm đẳng cấp tại những căn homestay có bể bơi đẹp và khu vực BBQ ấm cúng.',
            backgroundImage: './assets/image/hint_5.jpg'
        },
        {
            id: 6,
            name: 'Siêu giảm giá!',
            describe: 'Top chỗ ở giảm giá đến 50% từ các chủ nhà thân thiện trên Luxstay.',
            backgroundImage: './assets/image/hint_6.jpg'
        },
        {
            id: 7,
            name: 'Gần Trung tâm!',
            describe: 'Dễ dàng di chuyển khắp nơi với top chỗ ở khu vực trung tâm thành phố Hồ Chí Minh',
            backgroundImage: './assets/image/hint_7.jpg'
        },
    ];

    var optionDiscoverArray = [
        {
            id: 1,
            backgroundImage: './assets/image/khampha_1.jpg',
            name: 'thông tin homestay',
            describe: '5 resort hạng sang ở Việt Nam xuất hiện trên tạp chí du lịch Anh'
        },
        {
            id: 2,
            backgroundImage: './assets/image/khampha_2.jpg',
            name: 'thông tin homestay',
            describe: 'Du lịch Cần Thơ nhất định phải ghé thăm những địa điểm này'
        },
        {
            id: 3,
            backgroundImage: './assets/image/khampha_3.jpg',
            name: 'tp. hồ chí minh',
            describe: 'Tuần lễ “Tôi yêu bánh mì Sài Gòn” chính thức diễn ra từ ngày 24/3'
        },
        {
            id: 4,
            backgroundImage: './assets/image/khampha_4.jpg',
            name: 'thông tin homestay',
            describe: 'Trải nghiệm thú vị ở sở thú Zoodoo Đà Lạt'
        },
        {
            id: 5,
            backgroundImage: './assets/image/khampha_5.jpg',
            name: 'hội an',
            describe: 'Hội An sẽ lập chốt quản lý du khách đeo khẩu trang khi vào thành phố'
        },
        {
            id: 6,
            backgroundImage: './assets/image/khampha_6.jpg',
            name: 'thông tin homestay',
            describe: 'Mức phí cách ly tại khách sạn, resort ở Việt Nam cho du khách có nhu cầu'
        },
        {
            id: 7,
            backgroundImage: './assets/image/khampha_7.png',
            name: 'thông tin homestay',
            describe: 'Thủ đô Hà Nội nằm trong danh sách những thành phố đẹp nhất thế giới'
        },
        {
            id: 8,
            backgroundImage: './assets/image/khampha_8.jpg',
            name: 'thông tin homestay',
            describe: 'Cách đặt phòng tại Đà Lạt cho chuyến du lịch tiết kiệm nhất'
        },
        {
            id: 9,
            backgroundImage: './assets/image/khampha_9.jpg',
            name: 'thông tin homestay',
            describe: 'Cách lập kế hoạch tài chính cho chuyến du lịch hoàn hảo'
        },
        {
            id: 10,
            backgroundImage: './assets/image/khampha_10.jpg',
            name: 'vũng tàu',
            describe: 'List homestay Vũng Tàu cho nhóm đông người, vui cười hưởng giá tốt!'
        },
        {
            id: 11,
            backgroundImage: './assets/image/khampha_11.jpg',
            name: 'vũng tàu',
            describe: 'Xuất hiện thế giới đảo lộn ở Vũng Tàu, bạn sẵn sàng thử chưa?'
        },
        {
            id: 12,
            backgroundImage: './assets/image/khampha_12.jpg',
            name: 'tp. hồ chí minh',
            describe: 'Những điều nên tuân thủ trước khi trả phòng homestay để lợi cả đôi đường'
        },
        {
            id: 13,
            backgroundImage: './assets/image/khampha_13.jpg',
            name: 'Thông tin hữu ích dành cho chủ nhà (For host)',
            describe: 'Lakeside villa garden: điểm dừng chân mới toanh của giới trẻ Hà thành'
        },
        {
            id: 14,
            backgroundImage: './assets/image/khampha_14.jpg',
            name: 'thông tin homestay',
            describe: 'Những điều kiêng kị khi ở homestay dưới góc nhìn độc & lạ của Tạ Quốc Kỳ Nam'
        },
        {
            id: 15,
            backgroundImage: './assets/image/khampha_15.jpeg',
            name: 'thông tin homestay',
            describe: 'Tại sao gọi Đà Lạt là thành phố tình yêu?'
        },
    ];

    var optionGuideArray = [
        {
            id: 1,
            backgroundImage: './assets/image/huongdan_1.jpg'
        },
        {
            id: 2,
            backgroundImage: './assets/image/huongdan_2.jpg'
        },
        {
            id: 3,
            backgroundImage: './assets/image/huongdan_3.jpg'
        },
        {
            id: 4,
            backgroundImage: './assets/image/huongdan_4.jpg'
        },
        {
            id: 5,
            backgroundImage: './assets/image/huongdan_5.jpg'
        },
    ];
    /* ------------------ */
    var textListTopHomestayArray = [
        {
            id: 1,
            text: 'Homestay Đà Lạt'
        },
        {
            id: 2,
            text: 'Homestay Hà Nội'
        },
        {
            id: 3,
            text: 'Homestay Hồ Chí Minh'
        },
        {
            id: 4,
            text: 'Homestay Sapa'
        },
        {
            id: 5,
            text: 'Homestay Vũng Tàu'
        },
        {
            id: 6,
            text: 'Homestay Tam Đảo'
        },
        {
            id: 7,
            text: 'Homestay Hội An'
        },
        {
            id: 8,
            text: 'Homestay Đà Nẵng'
        },
        {
            id: 9,
            text: 'Homestay Hạ Long'
        },
        {
            id: 10,
            text: 'Homestay Phan Thiết'
        },
    ];
    var textListFavouriteSpaceArray = [
        {
            id: 1,
            text: 'Căn hộ dịch vụ'
        },
        {
            id: 2,
            text: 'Biệt thự'
        },
        {
            id: 3,
            text: 'Nhà riêng'
        },
        {
            id: 4,
            text: 'Studio'
        },
    ];
    var textListAboutUsArray = [
        {
            id: 1,
            text: 'Blog'
        },
        {
            id: 2,
            text: 'Điều khoản hoạt động'
        },
        {
            id: 3,
            text: '1800 6586'
        },
        {
            id: 4,
            text: '+84 8898 66666'
        },
        {
            id: 5,
            text: 'info@luxstay.com'
        },
        {
            id: 6,
            text: 'Trang thông tin dành cho chủ nhà'
        },
        {
            id: 7,
            text: 'Cơ hội nghề nghiệp'
        },
        {
            id: 8,
            text: 'Tạp chí du lịch'
        },
    ];



    
    /* Render */
    var mainSlipSlideRender = mainSlipSlideArray.map((item, index) => {
        return (
            `
                <a class="main__slip-slide-link" href="">
                    <img src="${item.image}" alt="">
                </a>
            `
        );
    });
    mainSlipSlide.innerHTML = mainSlipSlideRender.join('');
    // console.log(mainSlipSlideRender.join(''));

    var mainListRender = mainListArray.map((item, index) => {
        return (
            `
                <li class="main__item">
                    <div class="main__item-wrapper">
                        <div class="main__item-intro">
                            <h3 class="main__title">${item.name}</h3>
                            <p class="main__text">${item.describe}</p>
                        </div>
                        <ul class="option__place-list owl-carousel owl-theme"></ul>
                    </div>
                </li>
            `
        );
    });

    var optionWelcomeRender = optionWelcomeArray.map((item, index) => {
        return (
            `
                <li class="option__welcome-item">
                    <a class="option__welcome-link" href="">
                        <div class="item__welcome-bg-img" style="background-image: url(${item.backgroundImage})"></div>
                        <div class="item__welcome-content">
                            <h4 class="item__welcome-name">${item.name}</h4>
                            <p class="item__welcome-text">${item.describe}</p>
                        </div>
                    </a>
                </li>
            `
        );
    });
    optionWelcomeList.innerHTML = optionWelcomeRender.join('');

    var optionPlaceRender = optionPlaceArray.map((item, index) => {
        return (
            `
                <li class="option__place-item">
                    <a class="option__place-link" href="">
                        <div class="item__place-wrapper">
                            <img class="item__place-img" src="${item.image}" alt="">
                            <div class="item__place-content">
                                <h3 class="item__place-name">${item.name}</h3>
                                <p class="item__place-text">
                                    <b>${item.describeQuantity}</b> 
                                    ${item.describeText}
                                </p>
                            </div>
                        </div>
                    </a>
                </li>
            `
        );
    });
    optionPlaceList.innerHTML = optionPlaceRender.join('');

    var optionBargainRender = optionBargainArray.map((item, index) => {
        return (
            `
                <li class="option__bargain-item">
                    <a class="option__bargain-link" href="">
                        <div class="item__bargain-wrapper">
                            <img class="item__bargain-img" src="${item.image}" alt="">
                        </div>
                    </a>
                </li>
            `
        );
    });
    optionBargainList.innerHTML = optionBargainRender.join('');

    var optionHintRender = optionHintArray.map((item, index) => {
        return (
            `
                <li class="option__hint-item">
                    <a class="option__hint-link" href="">
                        <div class="item__hint-wrapper">
                            <div class="item__hint-bg-img" style="background-image: url(${item.backgroundImage})"></div>
                        </div>
                        <div class="item__hint-content">
                            <h3 class="item__hint-name">${item.name}</h3>
                            <p class="item__hint-text">${item.describe}</p>
                        </div>
                    </a>
                </li>
            `
        );
    });
    optionHintList.innerHTML = optionHintRender.join('');

    var optionDiscoverRender = optionDiscoverArray.map((item, index) => {
        return (
            `
                <li class="option__discover-item">
                    <div class="option__discover-link" href="">
                        <div class="option__discover-wrapper">
                            <div class="item__discover-bg-img" style="background-image: url(${item.backgroundImage})">
                                <div class="item__discover-content">
                                    <div class="item__discover-info">
                                        <a href="">${item.name}</a>
                                    </div>
                                    <div class="item__discover-text">
                                        <a href="">${item.describe}</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            `
        );
    });
    optionDiscoverList.innerHTML = optionDiscoverRender.join('');

    var optionGuideListRender = optionGuideArray.map((item, index) => {
        return (
            `
                <li class="option__guide-item">
                    <a class="option__guide-link" href="">
                        <div class="item__guide-wrapper">
                            <div class="item__guide-bg-img" style="background-image: url(${item.backgroundImage})"></div>
                        </div>
                    </a>
                </li>
            `
        );
    });
    optionGuideList.innerHTML = optionGuideListRender.join('');

    /* ------------------ */
    var textListTopHomestayRender = textListTopHomestayArray.map((item) => {
        return (
            `
                <li class="text__item">
                    <a href="" class="text__link">${item.text}</a>
                </li>
            `
        );
    });
    textListTopHomestay.innerHTML = textListTopHomestayRender.join('');

    var textListFavouriteSpaceRender = textListFavouriteSpaceArray.map((item) => {
        return (
            `
                <li class="text__item">
                    <a href="" class="text__link">${item.text}</a>
                </li>
            `
        );
    });
    textListFavouriteSpace.innerHTML = textListFavouriteSpaceRender.join('');

    var textListAboutUsRender = textListAboutUsArray.map((item) => {
        return (
            `
                <li class="text__item">
                    <a href="" class="text__link">${item.text}</a>
                </li>
            `
        );
    });
    textListAboutUs.innerHTML = textListAboutUsRender.join('');
}


export default Render;