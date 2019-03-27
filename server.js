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
var dataOFF = JSON.parse(contents)
var arrayDataOFF = dataOFF.data

var contents = fs.readFileSync("ps_off_promo.json")
var dataOffPromo = JSON.parse(contents)
var arrayDataOffPromo = dataOffPromo.data

var contents = fs.readFileSync("PS_ENL_FMT.js")
var dataENL = JSON.parse(contents)
var arrayDataENL = dataENL.data

var contents = fs.readFileSync("ps_off_enl_ad.js")
var dataALL = JSON.parse(contents)
var arrayDataALL = dataALL.data

var contents = fs.readFileSync("ps_off_enl_ang.js")
var dataANG = JSON.parse(contents)
var arrayDataANG = dataANG.data

var contents = fs.readFileSync("ps_off_enl_ar.js")
var dataAFR = JSON.parse(contents)
var arrayDataAFR = dataAFR.data

var contents = fs.readFileSync("PS_ENL_RET.js")
var dataALL = JSON.parse(contents)
var arrayDataEnlRet = dataALL.data

var contents = fs.readFileSync("ps_enlisted_promo.json")
var dataEnlPromo = JSON.parse(contents)
var arrayDataEnlPromo = dataEnlPromo.data

var contents = fs.readFileSync("ps_civilian_inv.json")
var dataCiv = JSON.parse(contents)
var arrayDataCiv = dataCiv.data

var contents = fs.readFileSync("Joint.js")
var dataJoint = JSON.parse(contents)
var arrayDataJoint = dataJoint.data

var contents = fs.readFileSync("PS_OFF_TOS.js")
var dataOffTos = JSON.parse(contents)
var arrayDataOffTos = dataOffTos.data

var contents = fs.readFileSync("PS_ENL_TOS.js")
var dataEnlTos = JSON.parse(contents)
var arrayDataEnlTos = dataEnlTos.data

var contents = fs.readFileSync("EFMP.js")
var dataEFMP = JSON.parse(contents)
var arrayDataEFMP = dataEFMP.data

var contents = fs.readFileSync("PS_STEM.js")
var dataSTEM = JSON.parse(contents)
var arrayDataSTEM = dataSTEM.data

var contents = fs.readFileSync("ps_high_ed_level.js")
var dataHighEdLevel = JSON.parse(contents)
var arrayDataHighEdLevel = dataHighEdLevel.data

var contents = fs.readFileSync("ps_prom_year_group.js")
var dataYRGP = JSON.parse(contents)
var arrayDataYRGP = dataYRGP.data

var contents = fs.readFileSync("ps_high_ed_level_ang.js")
var dataHighEdLevelANG = JSON.parse(contents)
var arrayDataHighEdLevelANG = dataHighEdLevelANG.data

var contents = fs.readFileSync("PS_OFF_ANG.js")
var dataOFFANG = JSON.parse(contents)
var arrayDataOFFANG = dataOFFANG.data

var contents = fs.readFileSync("PS_ENL_ANG.js")
var dataENLANG = JSON.parse(contents)
var arrayDataENLANG = dataENLANG.data

var contents = fs.readFileSync("ps_officer_promo_ang.js")
var dataOffANGPromo = JSON.parse(contents)
var arrayDataOffANGPromo = dataOffANGPromo.data

var contents = fs.readFileSync("ps_enlisted_promo_ang.js")
var dataEnlANGPromo = JSON.parse(contents)
var arrayDataEnlANGPromo = dataEnlANGPromo.data

var contents = fs.readFileSync("ps_enl_ret_ang.js")
var dataEnlRetANG = JSON.parse(contents)
var arrayDataEnlRetANG = dataEnlRetANG.data

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
        // whitelist-test fail@click="dynamicComponent='join'" 
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

//API endpoint for AD Manning
apiRoutes.get('/admanning', (req, res)=>{
    setTimeout(function() {
        res.json( {
            success: true,
            ASOFDATE: "31-JAN-2018",
            data: arrayDataALL 
        } )
    },1000)
})

//API endpoint for officers submitting ranked billets
apiRoutes.post('/adManning_post', (req, res)=>{
    res.json( {
        success: true,
        ASOFDATE: "31-JAN-2018",
        data: arrayDataALL
    } )
})

//API endpoint for ANG Manning
apiRoutes.get('/angmanning', (req, res)=>{
    setTimeout(function() {
        res.json( {
            success: true,
            ASOFDATE: "31-JAN-2018",
            data: arrayDataANG
        } )
    },1000)
})

apiRoutes.post('/angmanning_post', (req, res)=>{
    res.json( {
        success: true,
        ASOFDATE: "31-JAN-2018",
        data: arrayDataANG
    } )
})

//API endpoint for AFR Manning
apiRoutes.get('/afrmanning', (req, res)=>{
    setTimeout(function() {
        res.json( {
            success: true,
            ASOFDATE: "31-JAN-2018",
            data: arrayDataAFR
        } )
    },1000)
})

apiRoutes.post('/afrmanning_post', (req, res)=>{
    res.json( {
        success: true,
        ASOFDATE: "31-JAN-2018",
        data: arrayDataAFR
    } )
})

//API endpoint for officer manning
apiRoutes.get('/officer', (req, res)=>{
    setTimeout(function() {
        res.json( {
            success: true,
            ASOFDATE: "31-JAN-2018",
            data: arrayDataOFF
        } )
    },2000)
})

//API endpoint for officer manning 
apiRoutes.post('/officer_post', (req, res)=>{
    res.json( {
        success: true,
        ASOFDATE: "31-JAN-2018",
        data: arrayDataOFF
    } )
})

//API endpoint for officer promotions
apiRoutes.post('/officer_promo', (req, res)=>{
    res.json( {
        success: true,
        ASOFDATE: "31-JAN-2018",
        data: arrayDataOffPromo
    } )
})

//API endpoint for enlisted manning
apiRoutes.get('/enlisted', (req, res)=>{
        res.json( {
            success: true,
            ASOFDATE: "31-JAN-2018",
            data: arrayDataENL 
        } )
})

//API endpoint for officers submitting ranked billets
apiRoutes.post('/enlisted_post', (req, res)=>{
    res.json( {
        success: true,
        ASOFDATE: "31-JAN-2018",
        data: arrayDataENL
    } )
})

//API endpoint for enlisted retention
apiRoutes.get('/enlisted_ret', (req, res)=>{
        res.json( {
            success: true,
            asofdate: "31-JAN-2018",
            data: arrayDataEnlRet 
        } )
})

//API endpoint for officers submitting ranked billets
apiRoutes.post('/enlisted_ret_post', (req, res)=>{
    res.json( {
        success: true,
        ASOFDATE: "31-JAN-2018",
        data: arrayDataEnlRet
    } )
})

//API endpoint for enlisted promotions 
apiRoutes.post('/enlisted_promo_post', (req, res)=>{
    res.json( {
        success: true,
        ASOFDATE: "31-JAN-2018",
        data: arrayDataEnlPromo
    } )
})

//API endpoint for civilian inventory 
apiRoutes.post('/civilian_inv_post', (req, res)=>{
    res.json( {
        success: true,
        ASOFDATE: "31-JAN-2018",
        data: arrayDataCiv 
    } )
})

//API endpoint for civilian inventory 
apiRoutes.post('/join_spouse', (req, res)=>{
    res.json( {
        success: true,
        ASOFDATE: "31-JAN-2018",
        data: arrayDataJoint 
    } )
})

//API endpoint for off tos
apiRoutes.post('/officer_tos', (req, res)=>{
    res.json( {
        success: true,
        ASOFDATE: "31-JAN-2018",
        data: arrayDataOffTos
    } )
})

//API endpoint for enl tos
apiRoutes.post('/enlisted_tos', (req, res)=>{
    res.json( {
        success: true,
        ASOFDATE: "31-JAN-2018",
        data: arrayDataEnlTos
    } )
})


apiRoutes.post('/EFMP', (req, res)=>{
    res.json( {
        success: true,
        ASOFDATE: "31-JAN-2018",
        data: arrayDataEFMP
    } )
})
//API endpoint for officer STEM
apiRoutes.post('/officer_stem', (req, res)=>{
    res.json( {
        success: true,
        ASOFDATE: "31-JAN-2018",
        data: arrayDataSTEM
    } )
})

//API GET for endpoint officer STEM
apiRoutes.get('/officer_stem_get', (req, res)=>{
    res.json( {
        success: true,
        ASOFDATE: "31-JAN-2018",
        data: arrayDataSTEM
    } )
})

//API endpoint for enlisted STEM
apiRoutes.post('/enlisted_stem', (req, res)=>{
    res.json( {
        success: true,
        ASOFDATE: "31-JAN-2018",
        data: arrayDataSTEM
    } )
})

//API GET for endpoint enlisted STEM
apiRoutes.get('/enlisted_stem_get', (req, res)=>{
    res.json( {
        success: true,
        ASOFDATE: "31-JAN-2018",
        data: arrayDataSTEM
    } )
})

//API endpoint for high education level
apiRoutes.get('/high_ed_level', (req, res)=>{
        res.json( {
            success: true,
            ASOFDATE: "31-JAN-2018",
            data: arrayDataHighEdLevel
        } )
})

//API POST for endpoint high education level
apiRoutes.post('/high_ed_level_post', (req, res)=>{
    res.json( {
        success: true,
        ASOFDATE: "31-JAN-2018",
        data: arrayDataHighEdLevel
    } )
})

//API endpoint for ed prom year group
apiRoutes.get('/ed_prom_year', (req, res)=>{
    res.json( {
        success: true,
        ASOFDATE: "31-JAN-2018",
        data: arrayDataYRGP
    } )
})

//API POST for endpoint ed prom year group
apiRoutes.post('/ed_prom_year_post', (req, res)=>{
res.json( {
    success: true,
    ASOFDATE: "31-JAN-2018",
    data: arrayDataYRGP
} )
})


//API endpoint for ang enlisted manning
apiRoutes.get('/ang_enlisted', (req, res)=>{
    res.json( {
        success: true,
        ASOFDATE: "31-JAN-2018",
        data: arrayDataENL 
    } )
})

//API endpoint for ang enlisted submitting ranked billets
apiRoutes.post('/ang_enlisted_post', (req, res)=>{
res.json( {
    success: true,
    ASOFDATE: "31-JAN-2018",
    data: arrayDataENL
} )
})

//API endpoint for ang tos
apiRoutes.get('/ang_tos', (req, res)=>{
    res.json( {
        success: true,
        ASOFDATE: "31-JAN-2018",
        data: arrayDataENL 
    } )
})

//API endpoint for ang tos submitting ranked billets
apiRoutes.post('/ang_tos_post', (req, res)=>{
res.json( {
    success: true,
    ASOFDATE: "31-JAN-2018",
    data: arrayDataENL
} )
})

//API endpoint for high education level for ANG
apiRoutes.get('/high_ed_level_ang', (req, res)=>{
    res.json( {
        success: true,
        ASOFDATE: "31-JAN-2018",
        data: arrayDataHighEdLevelANG
    } )
})

//API POST for endpoint high education level for ANG
apiRoutes.post('/high_ed_level_ang_post', (req, res)=>{
res.json( {
    success: true,
    ASOFDATE: "31-JAN-2018",
    data: arrayDataHighEdLevelANG
} )
})

//API endpoint for ANG officer manning
apiRoutes.get('/officer_ang', (req, res)=>{
    setTimeout(function() {
        res.json( {
            success: true,
            ASOFDATE: "31-JAN-2018",
            data: arrayDataOFFANG
        } )
    },2000)
})

//API endpoint for ANG officer manning 
apiRoutes.post('/officer_ang_post', (req, res)=>{
    res.json( {
        success: true,
        ASOFDATE: "31-JAN-2018",
        data: arrayDataOFFANG
    } )
})

//API endpoint for ANG enlisted manning
apiRoutes.get('/enlisted_ang', (req, res)=>{
    setTimeout(function() {
        res.json( {
            success: true,
            ASOFDATE: "31-JAN-2018",
            data: arrayDataENLANG
        } )
    },2000)
})

//API endpoint for ANG enlisted manning 
apiRoutes.post('/enlisted_ang_post', (req, res)=>{
    res.json( {
        success: true,
        ASOFDATE: "31-JAN-2018",
        data: arrayDataENLANG
    } )
})

//API endpoint for ANG officer promotions
apiRoutes.get('/officer_promo_ang', (req, res)=>{
    setTimeout(function() {
        res.json( {
            success: true,
            ASOFDATE: "31-JAN-2018",
            data: arrayDataOffANGPromo
        } )
    },2000)
})

//API endpoint for ANG officer promotions
apiRoutes.post('/officer_promo_ang_post', (req, res)=>{
    res.json( {
        success: true,
        ASOFDATE: "31-JAN-2018",
        data: arrayDataOffANGPromo
    } )
})

//API endpoint for ANG enlisted promotions
apiRoutes.get('/enlisted_promo_ang', (req, res)=>{
    setTimeout(function() {
        res.json( {
            success: true,
            ASOFDATE: "31-JAN-2018",
            data: arrayDataEnlANGPromo
        } )
    },2000)
})

//API endpoint for ANG enlisted promotions
apiRoutes.post('/enlisted_promo_ang_post', (req, res)=>{
    res.json( {
        success: true,
        ASOFDATE: "31-JAN-2018",
        data: arrayDataEnlANGPromo
    } )
})

//API endpoint for ANG enlisted retention
apiRoutes.get('/enlisted_ret_ang', (req, res)=>{
    setTimeout(function() {
        res.json( {
            success: true,
            ASOFDATE: "31-JAN-2018",
            data: arrayDataEnlRetANG
        } )
    },2000)
})

//API endpoint for ANG enlisted retention
apiRoutes.post('/enlisted_ret_ang_post', (req, res)=>{
    res.json( {
        success: true,
        ASOFDATE: "31-JAN-2018",
        data: arrayDataEnlRetANG
    } )
})

app.use('/api', apiRoutes)

// =======================
// start the server ======
// =======================


app.listen(port)
console.log('Server up at http://localhost:' + port)

