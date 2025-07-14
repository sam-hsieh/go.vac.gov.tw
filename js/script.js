//AOS.init();
function scrollHandler() {
    var scrollDistance = $(window).scrollTop();
    if (scrollDistance > 80) {
        $("nav").addClass("affix");
        $("#logo").addClass("affix");
        $('.back-to-top').fadeIn('slow');
    } else {
        $("nav").removeClass("affix");
        $("#logo").removeClass("affix");
        $('.back-to-top').fadeOut('slow');
    }
}

var sitNavCheckbox = document.getElementById("mclick")
var slideOver = document.getElementById("slide-over")
var slide = document.getElementById("site-menu");
var site_nav = document.getElementById("site_nav");
sitNavCheckbox.addEventListener("click", function () {
    if (sitNavCheckbox.classList.contains('open')) {
        closeSiteMenu()
    } else {
        openSiteMenu()
    }
});
slideOver.addEventListener("touchstart", function () {
    closeSiteMenu()
});
const closeSiteMenu = () => {
    sitNavCheckbox.checked = false;
    site_nav.classList.remove('open-menu');
    slide.classList.remove('open-menu');
    slideOver.classList.remove('toggle');
    sitNavCheckbox.classList.remove('open');
}
const openSiteMenu = () => {
    slide.focus();
    sitNavCheckbox.classList.add('open');
    site_nav.classList.add('open-menu');
    slide.classList.add('open-menu');
    slideOver.classList.add('toggle');
    document.querySelectorAll('.submenu').forEach(function (otherSubmenu) {
        otherSubmenu.classList.remove('active');
    });

}
// mobile menu end
scrollHandler();
$(window).scroll(scrollHandler);


$(document).on('click', '.konwledge-nav,.back-to-top,.gotopagetop', function (e) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        if (target.length) {
            e.preventDefault();
            var scrollto = target.offset().top - 100;
            $('html, body').animate({
                scrollTop: scrollto
            }, 500);
            // window.scrollTo({
            //     top:  scrollto,
            //     behavior: 'smooth'
            //   });
            return false;
        }
    }

});

// submenu
document.addEventListener('DOMContentLoaded', function () {
    const menuToggles = document.querySelectorAll('.ulmenu .menu-toggle');
    menuToggles.forEach(function (toggle) {
        toggle.addEventListener('click', function (e) {
            toggle.classList.toggle('active')
            e.preventDefault();
            const parentLi = this.parentElement;
            const submenu = parentLi.querySelector('.submenu');
            document.querySelectorAll('.submenu').forEach(function (otherSubmenu) {
                if (otherSubmenu !== submenu) {
                    otherSubmenu.classList.remove('active');
                }
            });
            submenu?.classList.toggle('active');

        });
    });
});

// showAllToglle button toggle
document.addEventListener('DOMContentLoaded', function () {
    const showAllToggleBtn = document.querySelector('.showAllToglle');
    const allCategories = document.querySelector('#allCategories');
    if (showAllToggleBtn) {
        showAllToggleBtn.addEventListener('click', function (e) {
            e.preventDefault();
            this.classList.toggle('nextClose');
            $(allCategories).stop().slideToggle(200);
        });
    }
});

