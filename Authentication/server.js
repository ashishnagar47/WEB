const express = require('express')
const session = require('express-session')

const { db, Users } = require('./db')

const app = express()

app.set('view engine', 'hbs')
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: '24knb6k247b2k7b2k7bk247hb2kh7b2',
}))



app.get('/', (req, res) => {
  res.render('welcome')
})

app.get('/signup', (req, res) => {
  res.render('signup')
})

app.post('/signup', async (req, res) => {
  console.log(req.body)
  const user = await Users.create({
  
    username: req.body.username,
    email: req.body.email,
    password: req.body.password, // NOTE: in production we save hash of password
  })
  try{
  res.status(201).send(`User ${user.id} created`)}
  catch{(err)=>console.log(err)}
})

app.get('/login', (req, res) => {
  res.render('login')
})

app.post('/login', async (req, res) => {
  const user = await Users.findOne({where: { email: req.body.email }})
  if (!user) {
    return res.status(404).render('login', { error: 'No such username found' })
  }

  if (user.password !== req.body.password) {
    return res.status(401).render('login', { error: 'Incorrect password' })
  }
  req.session.userId = user.id
  res.redirect('/profile')  
})

app.get('/profile', async (req, res) => {
  if (!req.session.userId) {
    return res.redirect('/login')
  }
  const user = await Users.findByPk(req.session.userId)
  res.render('profile', { user })
})

app.get('/logout', (req, res) => {
  req.session.userId = null
  res.redirect('profile')
})

db.sync()
  .then(() => {
    app.listen(2222, () => console.log('started on http://localhost:2222'))
  })
  .catch(console.error)