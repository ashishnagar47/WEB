function checkThis() {
    console.log(this)
  }

  console.log(''==false)
  
  let obj = {
    "a": 10,
    b: 'asdsa',
    c: true,
    d: function () {
      console.log(this)
    },
    10: 32246,
    true: 'asdasd',
    e: {
      l: 234,
      k:console.log(this),
      m: 'sdgsdg',
      n: function () {
        console.log(this)
      },
    },
  }