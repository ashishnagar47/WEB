$(function(){
    let productName=$("#productName")
    let productManufacturer=$("#productManufacturer")
    let productPrice=$("#productPrice")

    $('#btnProductAdd').click(function(){
        addProduct(
            productName.val(),
            productManufacturer.val(),
            productPrice.val(),
            function(addedProduct){
                window.alert("Added"+addedProduct.name+'to Database')
            }
        )
        // function addProduct(name,manuf,price,done){
        //     $.post('/api/products',{
        //         name:name,
        //         manufacturer:manuf,
        //         price:price
        //     }),function(data){
        //         done(data)
        //     }
        // }
    })
})