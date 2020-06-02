
$(() => {
    $('#navbar').load('/components/navbar.html', loginIfNeeded)
    $('#footer').load('/components/footer.html')
    $('#contents').load('/components/all-posts.html') // this contains it's own scripts too
   // $('#contents').load('/components/myPosts.html')
  })
  
  function loginIfNeeded() {
    window.currentUser = window.localStorage.user ? JSON.parse(window.localStorage.user) : null
    if (!currentUser) {
      $.post('/api/users', {}, (user) => {
        if (user) {
          console.log('registered current user as ', user.username)
          let b=$(user.userId).val()
          console.log(b)
          window.localStorage.user = JSON.stringify(user)
          currentUser = user
          $('#nav-username').text(currentUser.username)
        }
      })
    } else {
      console.log('resuming session as ', currentUser.username)
      //console.log($('#nav-username'))
      let b=$(currentUser.userId).val()
     // console.log(b)
      $('#nav-username').text(currentUser.username)
    }
  }

 