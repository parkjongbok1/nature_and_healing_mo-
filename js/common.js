$(document).ready(function(){
    // // bon haeder
    var Accordion = function(el, active) {
        this.el = el || {};
        active = active || 0;
        var that = this;
        var links = this.el.find('.link');
        links.each(function(i){
            var link = links.eq(i);
            if (link.next().length === 0) { link.find('.fa').hide(); }
            link.on('click', { link: link }, that.dropdown);
        });
        if (active > 0) {
           links.eq(active - 9).trigger('click');
        }
    }
    
    Accordion.prototype.dropdown = function(e) {
        e.preventDefault();
        var $this = e.data.link;
        $this.parent()
            .siblings('.open').find('.submenu').slideUp()
        .addBack().removeClass('open');
        $this.parent()
            .toggleClass('open')
            .find('.submenu').stop().slideToggle();
    };
    var accordion = new Accordion($('#menu-box'), 1);
    
    $(window).scroll(function () {
      if ($(this).scrollTop() > 80) {
        $(".header").addClass("active");
      } else {
        $(".header").removeClass("active");
      }
      if ($(this).scrollTop() > 500) {
        $(".pop_link").addClass("pop_active");
      } else {
        $(".pop_link").removeClass("pop_active");
      }
    });

    // meun-btn
    $(".menu").click(function () {
      $(".menu, .meun-bar").toggleClass("active");
    });
});