var test = "http://localhost:8080/appstore";
$(function () {

    $.get(test, function (data) {
        for (var x = 0; x < 9; x++) {
            var row = ` 

            <div class="col-lg-4 col-md-6 mb-4">
                <div class="card h-100">
                    <a href="#"><img class="card-img-top" src="https://images.pexels.com/photos/1097456/pexels-photo-1097456.jpeg?cs=srgb&dl=person-wearing-red-hoodie-1097456.jpg&fm=jpg" alt=""></a>
                    <div class="card-body">
                        <h4 class="card-title">
                            <a href="#">${data[x].app}</a>
                        </h4>
                        <h5>${data[x].type}</h5>
                        <p class="card-text">reviews ${data[x].reviews}</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">${data[x].genres}</small>
                    </div>
                </div>
                </div>`;
            $("#show").append(row);

        }

    });

});




