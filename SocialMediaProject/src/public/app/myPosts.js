function loadPost(){
    const {id}=JSON.parse(window.localStorage.user)
   $.get(`/api/posts/${id}`,(posts)=>{
      for(let p of posts){
        $('#posts-container').append(
          $(`
            <div class="card col-3 m-4" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">${p.title}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">${p.user.username}</h6>
                        <p class="card-text">
                        ${p.body.substr(0,200)}<a href="#" id="read" >...read more</a>
                        </p>
                        
                        <a href="#" class="card-link">Comments</a>
                        <a href="#" class="card-link">Like</a>
                    </div>
                </div>
          )
        `)
        
        )}
    })
    
  }