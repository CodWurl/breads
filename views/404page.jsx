const React = require ('react')
const Def = require ('./default')




//Adding 404 page view
function error404 ({bread}) {
return (
    <Default>
        <main>
            <h1>404 : PAGE NOT FOUND</h1>
            <p>Oops, sorry, we can't find this page!</p>
        </main>
    </Default>
)

}

module.exports = breads