//Services
var MOVIES_SERVICE = {
    getAll: function(){
            return $.ajax({
                type: 'get',
                url: MOVIES_API
            });
        },
    getOne: function(){
            return $.ajax({
                type: 'get',
                url: SINGLE_MOVIE_API
            });
        }
}




