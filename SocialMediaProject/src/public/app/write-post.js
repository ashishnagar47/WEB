
function writePost(){
    let postTitle=$("#post-title").val()
    let postBody=$("#post-body").val()
    let username=$("#nav-username").val()

    $('#btn').click(function(){
        $.post('/api/products',{
            title:postTitle,
            body:postBody
        })
        // addNewPost({
        //     title:postTitle.val(),
        //     body:postBody.val()
        // })
    })
    
}

// function loadPost(){
//     $.get('/api/posts',(posts)=>{
//       for(let p of posts){
//         $('#posts-container').append(
//           $(`
//             <div class="card col-3 m-4" style="width: 18rem;">
//                     <div class="card-body">
//                         <h5 class="card-title">${p.title}</h5>
//                             // <h6 class="card-subtitle mb-2 text-muted">${p.user.username}</h6>
//                         <p class="card-text">
//                         ${p.body.substr(0,200)}<a href="#">...read more</a>
//                         </p>
//                         <a href="#" class="card-link">Read more</a>
//                         <a href="#" class="card-link">Like</a>
//                     </div>
//                 </div>
//           )
//         `)
//         )}
//     })
//   }