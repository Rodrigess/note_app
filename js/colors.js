var Colors = (function(){

    let s = {
        container: '#colors',
        item: '.colors__item',
        itemClassName: 'colors__item',
        itemActiveMod: 'colors__item--isActive'
    };

    let colors = ['gold', 'red', 'green', 'aqua'];

    let defaultColor = colors[2];

    
    return {

        getColors: function(){
            return {
                colors: colors,
                defaultColor: defaultColor
            };
        },
        
        render: function(){
            for (var i = 0; i < colors.length; i++) {
                $(s.container).append('<div data-color="'+colors[i]+'" class="'+colors[i]+' '+s.itemClassName+'">')
            }
            $(s.item+'[data-color="'+defaultColor+'"]').addClass(s.itemActiveMod);
        },

        event: function(){
            $(s.item).click(function(){
                var color = $(this).attr('data-color');
                $(s.item).removeClass(s.itemActiveMod);
                $(this).addClass(s.itemActiveMod);
                $(window).trigger('choosingColor', color);
            })
        },

        init: function(){
            this.render();
            this.event();
        }

    }

}())