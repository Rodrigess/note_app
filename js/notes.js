var Notes = (function(){

    var s = {
        container: '#notes',
        item: 'notes__item'
    }

    var index = 0;

    return {

        event: function(){
            $(window).on('addingNote', function(e, data){
                $(s.container).append('<div class="'+data.color+' '+s.item+'">'+data.text+' <button class="remove" onclick="this.parentElement.remove()">x</button></div>');
            })
        },


        init: function(){
            this.event();
        }

    }

}())
