const React = require('react')
const Default = require('./layouts/Default')

function Show({ bread, index }) {
    //Confirm we are getting our bread data in the terminal
    //console.log(bread.name)
    return (
        <Default>
            {/*Bread CRUD 6 Bonus Array of Ingredients*/}
            {/*ADD SOME CSS DESIGN*/}
            <h2>Show Page</h2>
            <h6>{bread.name}</h6>
            <h6>Ingredients</h6>
            <h6>{bread.ingredients}</h6>
             
            <p>
                and it
                {
                    bread.hasGluten
                        ? <span> does </span>
                        : <span> does not </span>
                }
                have gluten.

                <form action={`/breads/${index}?_method=DELETE`} method="POST">
                    <input type='submit' value="DELETE" />

                    <a href={`/breads/${index}/edit`}><button>Edit</button></a>

                </form>

            </p>
            <img src={bread.image} alt={bread.name} />
            <li><a href="/breads">Go home</a></li>

            
        </Default>
    )
}





module.exports = Show