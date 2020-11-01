import React,{ Component } from 'react';

export default class Testimonial extends React.Component {
    constructor(){
        super()
    }

    componentDidMount() {

        function syncPosition(el) {
            //if you set loop to false, you have to restore this next line
            //var current = el.item.index;

            //if you disable loop you have to comment this block
            var count = el.item.count - 1;
            var current = Math.round(el.item.index - (el.item.count / 2) - .5);

            if (current < 0) {
                current = count;
            }
            if (current > count) {
                current = 0;
            }

            //end block

            sync2
                .find(".owl-item")
                .removeClass("current")
                .eq(current)
                .addClass("current");
            var onscreen = sync2.find('.owl-item.active').length - 1;
            var start = sync2.find('.owl-item.active').first().index();
            var end = sync2.find('.owl-item.active').last().index();

            if (current > end) {
                sync2.data('owl.carousel').to(current, 100, true);
            }
            if (current < start) {
                sync2.data('owl.carousel').to(current - onscreen, 100, true);
            }
        }

        function syncPosition2(el) {
            if (syncedSecondary) {
                var number = el.item.index;
                sync1.data('owl.carousel').to(number, 100, true);
            }
        }

        function callThumbOnNav(e) {
            var idx = e.item.index;
            var currentThumb = sync1.find('.item').eq(idx).find('.testimonials-one__single').data('thumb-img');
            var nxtThumb = sync1.find('.item').eq(idx + 1).find('.testimonials-one__single').data('thumb-img');
            var prvThumb = sync1.find('.item').eq(idx - 1).find('.testimonials-one__single').data('thumb-img');

            prevThumbBtn.css('background-image', 'url(' + prvThumb + ')');
            nextThumbBtn.css('background-image', 'url(' + nxtThumb + ')');
            currentThumbBtn.css('background-image', 'url(' + currentThumb + ')');
        }


        if ($('.testimonials-one').length) {
            var sync1 = $("#sync1");
            var sync2 = $("#sync2");

            var currentThumbBtn = $('.testimonials-one__button__current-btn');
            var prevThumbBtn = $('.testimonials-one__button__prev-btn');
            var nextThumbBtn = $('.testimonials-one__button__next-btn');

            var slidesPerPage = 1; //globaly define number of elements per page
            var syncedSecondary = true;

            sync1.owlCarousel({
                items: 1,
                smartSpeed: 700,
                autoplayHoverPause: true,
                nav: false,
                autoplay: true,
                dots: false,
                animateOut: 'fadeOut',
                animateIn: 'fadeIn',
                mouseDrag: false,
                touchDrag: false,
                pullDrag: false,
                freeDrag: false,
                loop: true,
                autoplayTimeout: 5000,
                responsiveRefreshRate: 5000,
                onInitialize: callThumbOnNav,
                onTranslate: callThumbOnNav,
                navText: ['<i class="catch fa fa-angle-right"></i>', '<i class="catch fa fa-angle-left"></i>'],
            }).on('changed.owl.carousel', syncPosition);

            sync2
                .on('initialized.owl.carousel', function (e) {
                    sync2.find(".owl-item").eq(0).addClass("current");
                })
                .owlCarousel({
                    items: slidesPerPage,
                    dots: false,
                    nav: false,
                    // loop: true,
                    mouseDrag: false,
                    touchDrag: false,
                    pullDrag: false,
                    freeDrag: false,
                    animateOut: 'fadeOut',
                    animateIn: 'fadeIn',
                    smartSpeed: 700,
                    slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
                    responsiveRefreshRate: 5000
                }).on('changed.owl.carousel', syncPosition2);

            sync2.on("click", ".owl-item", function (e) {
                e.preventDefault();
                var number = $(this).index();
                sync1.data('owl.carousel').to(number, 300, true);
            });

            nextThumbBtn.on('click', function (e) {
                sync1.trigger('next.owl.carousel');
                e.preventDefault();
            });
            prevThumbBtn.on('click', function (e) {
                sync1.trigger('prev.owl.carousel');
                e.preventDefault();
            });
        }
    }

    render(){
        return (

            <section className="testimonials-one" id="testimonials">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="testimonials-one__image-block">
                                <div className="owl-carousel owl-theme" id="sync2">
                                    <div className="item clearfix">
                                        <div className="testimonials-one__image">
                                            <img src="/assets/images/testimonials/testimonials-1-1.jpg"
                                                 className="testimonials-one__thumb" alt="Awesome Image" />
                                            <div className="testimonials-one__qoute">
                                                <img src="/assets/images/testimonials/testimonials-qoute-1-1.png"
                                                     alt="Awesome Image" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item clearfix">
                                        <div className="testimonials-one__image">
                                            <img src="/assets/images/testimonials/testimonials-1-2.jpg"
                                                 className="testimonials-one__thumb" alt="Awesome Image" />
                                            <div className="testimonials-one__qoute">
                                                <img src="/assets/images/testimonials/testimonials-qoute-1-1.png"
                                                     alt="Awesome Image" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item clearfix">
                                        <div className="testimonials-one__image">
                                            <img src="/assets/images/testimonials/testimonials-1-3.jpg"
                                                 className="testimonials-one__thumb" alt="Awesome Image" />
                                            <div className="testimonials-one__qoute">
                                                <img src="/assets/images/testimonials/testimonials-qoute-1-1.png"
                                                     alt="Awesome Image" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item clearfix">
                                        <div className="testimonials-one__image">
                                            <img src="/assets/images/testimonials/testimonials-1-4.jpg"
                                                 className="testimonials-one__thumb" alt="Awesome Image" />
                                            <div className="testimonials-one__qoute">
                                                <img src="/assets/images/testimonials/testimonials-qoute-1-1.png"
                                                     alt="Awesome Image" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item clearfix">
                                        <div className="testimonials-one__image">
                                            <img src="/assets/images/testimonials/testimonials-1-5.jpg"
                                                 className="testimonials-one__thumb" alt="Awesome Image" />
                                            <div className="testimonials-one__qoute">
                                                <img src="/assets/images/testimonials/testimonials-qoute-1-1.png"
                                                     alt="Awesome Image" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item clearfix">
                                        <div className="testimonials-one__image">
                                            <img src="/assets/images/testimonials/testimonials-1-6.jpg"
                                                 className="testimonials-one__thumb" alt="Awesome Image" />
                                            <div className="testimonials-one__qoute">
                                                <img src="/assets/images/testimonials/testimonials-qoute-1-1.png"
                                                     alt="Awesome Image" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="testimonials-one__button-block">
                                    <button className="testimonials-one__button__prev-btn"></button>
                                    <button className="testimonials-one__button__current-btn"></button>
                                    <button className="testimonials-one__button__next-btn"></button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="testimonials-one__content">
                                <div className="block-title text-left">
                                    <h3>What Different Patients Are <br/> Saying About Us</h3>
                                </div>

                                <div className="owl-carousel owl-theme" id="sync1">
                                    <div className="item">
                                        <div className="testimonials-one__single"
                                             data-thumb-img="/assets/images/testimonials/testimonials-1-1.jpg">
                                            <p className="testimonials-one__text">हजुर, मैले पनि पाइल्सको लागि भनेर कत्ति पैसा खर्च गरे, कसैले धागो बाधेर ठिक हुन्छ भन्यो त्यो नि गरे कुनै डाक्टरले ओपेरसन गरेर ठिक हुन्छ भन्यो त्यो नि गराए तर मेरो घाउ अझै बड्दै गयो अनि एक जना मेरो साथीले फेसबुक मार्फत जानकारी गराएर ईजी केयरमा २ वर्ष अगाडी औसधी राखेर उपचार गराए र अहिले सम्म बल्झेको छैन अब फेरी कहिले बल्झिदैन नै भनेका छन् हेरौ</p>
                                            <div className="testimonials-one__bottom">
                                                <h3 className="testimonials-one__title">Shailendra Mandal</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="testimonials-one__single"
                                             data-thumb-img="/assets/images/testimonials/testimonials-1-2.jpg">
                                            <p className="testimonials-one__text">sachai niko hunx</p>
                                            <div className="testimonials-one__bottom">
                                                <h3 className="testimonials-one__title">Sapna Lwagun</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="testimonials-one__single"
                                             data-thumb-img="/assets/images/testimonials/testimonials-1-3.jpg">
                                            <p className="testimonials-one__text">meroni xorako niko vaxa hunxa 6month vo baljeko xain numbr chaiyema ma dinxu hai drn xatachokma xa</p>
                                            <div className="testimonials-one__bottom">
                                                <h3 className="testimonials-one__title">Xuchi Magarnir</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="testimonials-one__single"
                                             data-thumb-img="/assets/images/testimonials/testimonials-1-4.jpg">
                                            <p className="testimonials-one__text">Bina apretion bata garinxa upachaar</p>
                                            <div className="testimonials-one__bottom">
                                                <h3 className="testimonials-one__title">Bendass Tamoong</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="testimonials-one__single"
                                             data-thumb-img="/assets/images/testimonials/testimonials-1-5.jpg">
                                            <p className="testimonials-one__text">Dheroi ramro upchar hunx dhukka vayr dekhaunu hola hami pani dhekhayr dhukka vayka xou</p>
                                            <div className="testimonials-one__bottom">
                                                <h3 className="testimonials-one__title">Lalita Rai</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="testimonials-one__single"
                                             data-thumb-img="/assets/images/testimonials/testimonials-1-6.jpg">
                                            <p className="testimonials-one__text">म पनि पायल्सबाट पिडित थिए।मैले पनि easy care health service pvt.ltd दुहबीमा उपचार गराएको लगभग दुई महिनामा पुरै ठिक भयो।अहिले उपचार गराएको 8/9 महिना भयो।अहिलेसम्म ठिक छ।बल्झिएको छैन यदि हजुरहरुलाई पनि यस्ता समस्याले पिडित बनाएको भए ढुक्क भएर सेवा लिन सक्नु हुन्छ।।</p>
                                            <div className="testimonials-one__bottom">
                                                <h3 className="testimonials-one__title">Riju Kalpana Luitel</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}