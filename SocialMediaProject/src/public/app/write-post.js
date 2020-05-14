


async function writePost(){
    let submit=$("#submit")

    submit.click(()=>{
    const authorname=$('#nav-username').val()
    const postTitle=($('.form-group .form-control').val())
    const postBody=$('/form-group .form-body').val()
    $.post(('/api/posts',{title:postTitle,body:postBody})
    )
    })
    
}writePost()