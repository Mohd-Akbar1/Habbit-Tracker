const express=require('express')
const router=express.Router()
const {homeController,
    createHabitController,
    deleteHabitController,
    habitDetailsController,
    updateStatus}=require('../controller/user')

//get request to display details on home page
router.get('/',homeController)

//post request to add habbits in database
router.post('/addHabbit',createHabitController)

//request to delete selected habbit name
router.get('/delete',deleteHabitController)

//router to redirect on next page and display details of that particular habbit
router.get('/details',habitDetailsController)

// router to change status of previous day
router.get('/ChangeStatus',updateStatus)





module.exports=router;