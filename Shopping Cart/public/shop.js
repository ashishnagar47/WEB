
function fetchProduct(done){
    $.get('/api/products',function(data){
        done(data)
    })
}
function addProduct(name,manuf,price,done){
    $.post('/api/products',{
        name:name,
        manufacturer:manuf,
        price:price
    }),function(data){
        done(data)
    }
}


function CreateProductCard(product){
    return $(`
    <div class='row m-2 p-2' id='product-list'>
        <div class='col card mx-2 p-2'>
        <h-4 class="product-name m-2 p-2">${product.name}</h-4>
        <div class='product-manufacturer  m-2 p-2'>${product.manufacturer}</div>
        <div class='row'>
            <div class='col m-4 p-4'>
                <b> Rs. ${product.price}</b>
            </div>
        </div>
            <button class="=col btn btn-primary m-3 ">BUY</button>
        </div>
    `)
}


