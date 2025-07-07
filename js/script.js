document.addEventListener('DOMContentLoaded', function() {

    // ===== スクロールでのアニメーション =====
    const scrollElements = document.querySelectorAll('.animate-on-scroll');

    const elementInView = (el, dividend = 1) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
        );
    };

    const displayScrollElement = (element) => {
        element.classList.add('is-visible');
    };

    const hideScrollElement = (element) => {
        element.classList.remove('is-visible');
    };

    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 1.25)) {
                displayScrollElement(el);
            } 
            // スクロールアウトで非表示にしたい場合は下のコメントアウトを外す
            // else {
            //     hideScrollElement(el);
            // }
        });
    };

    // 初期表示とスクロールイベント
    handleScrollAnimation();
    window.addEventListener('scroll', handleScrollAnimation);


    // ===== モバイル用ナビゲーションメニュー =====
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('is-active');
            mainNav.classList.toggle('is-open');
        });
    }

});