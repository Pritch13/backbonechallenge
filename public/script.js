function pageInit() {
    $.get("/api/product", (data) => {
        console.log(data);

        for (let i = 0; i < data.length; i++) {
            $('#product').append('<tr><td>' + data[i].name + '</td><td>$' + data[i].price + '</td><td>' + data[i].code + '</td><td>' + data[i].creator + '</td><td>' + data[i].modified + '</td><td><button id="delete" data-id=' + data[i]._id + '>Delete</button></td><td><button id="edit" data-id=' + data[i]._id + ' >Edit price</button></td></tr>');
        }

    })
}

pageInit();


$("body").on("click", "#delete", function () {
    const selected = $(this).data("id");
    const row = $(this).parent().parent();

    $.ajax({
        url: '/api/product/' + selected,
        type: 'DELETE',
        success: function (result) {
            $(row).remove();
        }
    });
})

$("body").on("click", "#edit", function () {
    const newPrice = $("#textInput").val();

    if (newPrice === "" || isNaN(newPrice)) {
        alert("Please enter a valid number")
    } else {
        const selected = $(this).data("id");
        var dataObject = { "price": newPrice, };

        $.ajax({
            url: '/api/product/' + selected,
            type: 'PUT',
            contentType: 'application/json',
            data: JSON.stringify(dataObject),
            success: function (result) {
                console.log(result);
                window.location.href = window.location.href;
            }
        });
    }
})