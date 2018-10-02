$(function () {
    
    //upper line on nav bars after scrolling
    $('body').scrollspy({
        target: '#navbarcollapse',
        offset: 90
    });

    //after clicking on reference items the class to remove and add the another one
    $('#filter a').click(function (e) {
        e.preventDefault();

        $('#filter li').removeClass('active');
        
        $(this).parent('li').addClass('active');
        
        var categoryToFilter = $(this).attr('data-filter');

        $('.reference-item').each(function () {

            if ($(this).data('category') === categoryToFilter || categoryToFilter === 'all') {
                $(this).show();
            } else {
                $(this).hide();
            }
        });

    });
    
    /*animations*/

    delayTime = 0;

    $('[data-animate]').waypoint(function (direction) {
        delayTime += 250;

        var element = $(this.element);

        $(this.element).delay(delayTime).queue(function (next) {
            element.addClass('animated');
            element.addClass(element.data('animate'));
            delayTime = 0;
            next();
        });

        this.destroy();

    }, {
        offset: '90%'
    }); 

});
