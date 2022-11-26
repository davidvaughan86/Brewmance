//must use '' and " " seperately from recipe html btn and eventlistener

Routers
can add many routes to one router file
new folder with router
.js for the file name

-call for express in the module
set the router as express.router()
router.METHOD

copy your route/write your route into the file

export your router module.exports = router

in app.js name the route with a constant and require the path as a string

register routes with app.use and specific the path as a string and the route name variable in the use() argument.

middleware

sending information to the server from the client asa request
the server will send data back as a response
using middleware to minipulate the data that is sent as a request

steps in middleware:
middleware is the second argument in a method fn
the method the function applies to
the path for which the middleware will affect
the middleware function name
the response and res in the argument parameters
the callback known as next by convention
OPTIONAL error argument as a 4th argument

app/router.METHOD('path', MWfn(req, res, next/callback) {
some code
some code
some code that will run when the route is accessed

    next() execute the original request

})
<img src=(./public/images/middleware.jpg)></img>

in order to apply middleware to all routes at once use app.use(MWfn)
