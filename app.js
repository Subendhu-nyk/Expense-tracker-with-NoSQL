const express=require('express')
const app=express()
const path=require('path')
const bcrypt=require('bcrypt')
const Expense = require('./models/expense')
const User=require('./models/user')
const purchaseRoutes = require('./routes/purchase')
const premiumFeatureRoutes = require('./routes/premiumFeatures')
const bodyParser=require('body-parser')
const router=require('./routes/expense')
const userRoutes = require('./routes/user')
app.use(express.json());
const cors=require('cors')
const connectDB = require('./util/expense');
const dotenv=require('dotenv')
dotenv.config();
app.use(cors())
app.use(express.static(path.join(__dirname, '..','views')));
app.use(express.static(path.join(__dirname,'public')))
app.use(bodyParser.urlencoded({extended:false}))


app.use(router)
app.use('/user', userRoutes)
app.use('/purchase', purchaseRoutes)
app.use('/premium', premiumFeatureRoutes)

connectDB()
    .then(() => {
        app.listen(2000, () => {
            console.log('Server is running on port 2000');
        });
    })
    .catch((error) => {
        console.log('Failed to connect to database', error);
    });






