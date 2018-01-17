var AddNote = (function(){

    var s = {
        form: '#addNote',
        field: '.add-note__ta'
    }


    return {

        init: function(){

            var chosenColor = Colors.getColors().defaultColor;

            $(window).on('choosingColor', function(e, color){
                chosenColor = color;
            })

            $(s.form).submit(function(e){
                e.preventDefault();
                var text = $(s.form).find(s.field).val();
                if(text){
                    var note = {
                        text: $(s.form).find(s.field).val(),
                        color: chosenColor
                    }
                    $(window).trigger('addingNote', note);
                }
            })
        }

    }

}())