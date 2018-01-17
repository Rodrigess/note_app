var App = (function(){
    return {
        init: function(){
            Colors.init();
            AddNote.init();
            Notes.init();
        }
    }
}())

App.init()