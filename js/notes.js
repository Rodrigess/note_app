var Notes = (function(){

    var s = {
        container: '#notes',
        item: 'notes__item'
    }

    var index = 0;

    return {

                event: function(){
            $(window).on('addingNote', function(e, data){
                index++;
                $(s.container).append('<div class="'+data.color+' '+s.item+'">'+data.text+' <button class="remove" id="'+index+'">x</button></div>');

                $('#'+index).on('click', function() {
                    $(this).parent().remove();
                })
            })

           
        },


        init: function(){
            this.event();
        }

    }

}())
