const express = require('express')
const breads = express.Router()
const Bread = require('../models/bread.js')


//NEW breads INDEX

breads.get('/', (req, res) => {
  Bread.find()
    .then(foundBreads => {
      res.render('index', {
        breads: foundBreads,
        title: 'Index Page'
      })
    })
})



//OLD breads INDEX
/*breads.get('/', (req, res) => {
    res.render('Index',
        {
            breads: Bread,
            title: 'Index Page'
        }
    )

    
})*/

// NEW
breads.get('/new', (req, res) => {
  res.render('new')
})



//res.send(Bread)

// NEW
//breads.get('/', (req, res) => {
//Bread.find()
//  .then(foundBreads => {
//    res.render('index', {
//      breads: foundBreads,
//    title: 'Index Page'
//})
//})
//})

//NEW SHOW Route

breads.get('/:id', (req, res) => {
  Bread.findById(req.params.id)
    .then(foundBread => {
      res.render('show', {
        bread: foundBread
      })
    })
    .catch(err => {
      res.send('404')
    })
})




// OLD SHOW Route
/*breads.get('/:arrayIndex', (req, res) => {
    if (Bread[req.params.arrayIndex]) {
      res.render('Show', {
        bread:Bread[req.params.arrayIndex],
        index:req.params.arrayIndex,

      })
    } else {
      res.render('error404')
    }
  })*/


//NEW POST Route
// NEW CREATE Route

breads.post('/', (req, res) => {
  if (!req.body.image) {
    req.body.image = undefined
  }
  if (req.body.hasGluten === 'on') {
    req.body.hasGluten = true
  } else {
    req.body.hasGluten = false
  }
  Bread.create(req.body)
  res.redirect('/breads')
})



//OLD POST Route
// OLD CREATE
/*breads.post('/', (req, res) => {
  if (!req.body.image) {
    req.body.image = 'https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
  }
  if(req.body.hasGluten === 'on') {
    req.body.hasGluten = true
  } else {
    req.body.hasGluten = false
  }
  Bread.push(req.body)
  res.redirect('/breads')
})*/

// UPDATE Route
breads.put('/:id', (req, res) => {
  if (req.body.hasGluten === 'on') {
    req.body.hasGluten = true
  } else {
    req.body.hasGluten = false
  }
  Bread.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(updatedBread => {
      console.log(updatedBread)
      res.redirect(`/breads/${req.params.id}`)
    })
})

// EDIT Route
breads.get('/:id/edit', (req, res) => {
  Bread.findById(req.params.id)
    .then(foundBread => {
      res.render('edit', {
        bread: foundBread
      })
    })
})


//DELETE Route
breads.delete('/:id', (req, res) => {
  Bread.findByIdAndDelete(req.params.id)
    .then(deletedBread => {
      res.status(303).redirect('/breads')
    })
})

//Ingredients Route
breads.get('/IngredientsList', (req, res) => {
  res.render('IngredientsList')
})



module.exports = breads



