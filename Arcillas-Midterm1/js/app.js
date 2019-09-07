$(function(){
    var allmovies = $('#movie-list')
    var x = document.createElement("IMG");

      MOVIES_SERVICE.getAll()
      .then(res =>{
         console.log(res);
                  var a = [];
            for ( var i = 0; i < 100; i++ ) {
                var list = `
              <div class="ggg">
                <li>
                 <p class="shity">${res[i].title}</p>
                 <img src="${res[i].poster||" "}" />
                  <p>${res[i].plot}</p>
                <p>${res[i].genres[0]||""}</p>
                </li>
                </div>`;
                 allmovies.append(list);

             }
      });
      


  })