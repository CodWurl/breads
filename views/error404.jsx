const React = require ('react')
const Default = require ('./views')

//Adding 404 page view
function error404 () {
return (
    <Default>
        <head>
            <h1>404 : PAGE NOT FOUND</h1>
            <p>Oops, sorry, we can't find this page!</p>
        </head>
    </Default>
)
}
module.exports = error404