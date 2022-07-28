const React = require('react')
const Default = require('./layouts/Default')

function Show({ bread, index }) {
    //Confirm we are getting our bread data in the terminal
    //console.log(bread.name)
    return (
        <Default>
            <h2>Show Page</h2>
            <h4>{bread.name}</h4>
            <h4>Ingredients</h4>
            <h4>{bread.ingredients}</h4>
            
               
            
            

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