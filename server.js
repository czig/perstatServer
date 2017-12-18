// =======================
// get the packages we need ============
// =======================
var express     = require('express')
var http        = require('http')
var https       = require('https')
var fs          = require('fs')
var path        = require('path')
var app         = express()
var bodyParser  = require('body-parser')
var morgan      = require('morgan')
var cors        = require('cors')

// load data
var contents = fs.readFileSync("PS_OFF.js")
var data = JSON.parse(contents)
var arrayData = data.Data

// =======================
// configuration =========
// =======================
var port = process.env.PORT || 5005 // used to create, sign, and verify tokens

//cors allows cross-origin request
var whitelist = ['http://localhost:8080','https://localhost:8080']
var corsOptions = {
    origin: function (origin, callback){
        // whitelist-test pass
        if (true){//(whitelist.indexOf(origin) !== -1){
            callback(null, true)
        }
        // whitelist-test fail
        else{
            callback(new Error('Not on whitelist'))    
        }
    }
}
app.use(cors(corsOptions))

// use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// use morgan to log requests to the console
app.use(morgan('dev'))

// =======================
// routes ================
// =======================
// basic route

app.get('/', (req, res)=> {
    res.send('Hello! The API is at http://localhost:' + port + '/api')
})

// API ROUTES -------------------
var apiRoutes = express.Router()

apiRoutes.get('/', (req, res)=>{
    res.json({message: 'Welcome to the API ROOT'})
})

apiRoutes.get('/admanning', (req, res)=>{
    setTimeout(function() {
        res.json( {
            success: true,
            data: arrayData 
        } )
    },2000)
})

//API endpoint for officers submitting ranked billets
apiRoutes.post('/adManning_post', (req, res)=>{
    res.json( {
        success: true,
        data: arrayData
    } )
})

app.use('/api', apiRoutes)

// =======================
// start the server ======
// =======================


app.listen(port)
console.log('Server up at http://localhost:' + port)

