// require mongoose 
const mongoose = require('mongoose')
// creating shorthand for the Schema constructor 
// require mongoose 
const mongoose = require('mongoose')
// creating shorthand for the Schema constructor 
const { Schema } = mongoose 

// schema
const breadSchema = new Schema({
    name: { type: String, required: true },
    hasGluten: Boolean,
    image: { type: String, default: 'http://placehold.it/500x500.png' }
})

// model and export 
const Bread = mongoose.model('Bread', breadSchema)
module.exports = Bread




//module.exports = [
    //{
     // name: 'Rye',
     // hasGluten: true,
    //  image: 'https://images.unsplash.com/photo-1595535873420-a599195b3f4a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
     // ingredients : '2 packages active dry yeast, 2 1/2 cups warm water, 2/3 cup molasses,2 tablespoons caraway seeds,1 tablespoon salt,1/4 cup vegetable oil,1/4 cup cocoa powder (unsweetened),2 cups rye flour,5 cups bread flour',
   // },
   // {
   //   name: 'French',
   //   hasGluten: true,
   //   image: 'https://images.unsplash.com/photo-1534620808146-d33bb39128b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
   //   ingredients : '1 tablespoon cornmeal, 6 cups all-purpose flour, 2 ½ (.25 ounce) packages active dry yeast, 1½teaspoonssalt, 2 cups warm water (110 degreesF/45degrees C), 1 egg white, 1 tablespoon water',
   //   },
   // {
   //   name: 'Gluten-Free',
   //   hasGluten: false,
   //   image: 'https://images.unsplash.com/photo-1546538490-0fe0a8eba4e6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80',
   //   ingredients : 'active dried yeast, sugar (to kick-start the yeast action), warm water, psyllium husk (which acts as a gluten substitute – more on that below), potato starch (not to be confused with potato flour – these are two completely different things!), brown rice flour (needs to be very finely milled, also called “superfine”), buckwheat flour, salt (adds flavour), apple cider vinegar'
      
   // },
   // {
   //   name: 'Pumpernickel',
   //   hasGluten: true,
   //   image: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80',
   //   ingredients : '1 1/3 dark rye flour, 1/2 cup cornmeal, 1/4 cup whole-wheat flour, 1/4 cup unsweetened cocoa powder, 1 tablespoon kosher salt, 2 cups milk, 1 1/2 tablespoons dark brown sugar, 1 tablespoon active dry yeast, 1/4 cup unsulphured molasses, 3 tablespoons unsalted butter, softened, plus more for greasing',
   // },
//  ]
  