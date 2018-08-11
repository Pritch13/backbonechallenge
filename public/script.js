$.get("/api/product", (data)=>{
    console.log(data);

    for (let i = 0; i < data.length; i++) {
        $('#product').append('<tr><td>'+data[i].name+'</td><td>'+data[i].price+'</td><td>'+data[i].code+'</td><td>'+data[i].creator+'</td><td>'+data[i].modified+'</td><td><button id="delete" data-id='+data[i].id+'>Delete</button><button id="edit" data-id='+data[i].id+'>Edit price</button></td></tr>');
    }

})

$("body").on("click", "#delete", function () {
    
})