const User=require('../model/user')

const Month = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  //home controller to get data from db and display on home page
async function homeController(req,res){
    try {
      const user=await User.find({}).sort({'updatedAt': -1})
       res.render('home',{users:user})
    } catch (error) {
      res.status(500).send('Internal server error')
    }
    
}

//controller for creating new habbit
async function createHabitController(req,res){
   try {
    const users=await User.create({
      name:req.body.name,
      
  })
  return res.redirect('/')
   } catch (error) {
    res.status(500).send('Internal server error')
   }

   
    
}

// controlller to delete particular habbit from db
async function deleteHabitController(req,res){
   try {
    const id=req.query.id;
    await User.findByIdAndDelete(id)
   
    return res.redirect('back');
   } catch (error) {
    res.status(500).send('Internal server error')
   }

    
}

//controller to display previous 7 days details 
async function habitDetailsController(req,res){
   try {
    const id=req.query.id;
    const data=await User.findById(id)
    
    //--storing track of previos 7 days
    const days_Track = [];
    const d=new Date()
   const dy=d.getDate()
    for (let i = 0; i <Math.min(dy,7); i++) {
      let date1 = new Date().getDate() -i + ', ' + Month[new Date().getMonth()];
      let date =new Date().getDate() -i +', ' +Month[new Date().getMonth()] +' ' +new Date().getFullYear();

      //---now finding status of previous dates
      let find_status = data.days.find((d) => d.date == date);
      if (find_status) {
        days_Track.push({ date: date1, status: find_status.status });
      } else {
        days_Track.push({ date: date1, status: 'None' });
      }
    }
    return res.render('Details', {
      
      habitDetail: data,
      track: days_Track,
    });
   } catch (error) {
    res.status(500).send('Internal server error')
   }

    
}

//updating status of previous days
async function updateStatus(req,res){
   try {
    let id = req.query.id;
    let date = req.query.date + ' ' + new Date().getFullYear();
    let status = req.query.status;
  
    //--find the selected habit
    const data=await User.findById(id)

    
      //----find status of selected habit
      let find = data.days.find((d) => d.date == date);
      //--update the staus
      if (!find) {
        data.days.push({ date: date, status: status });
        data.save();
      } else {
        data.days.remove(find);
        data.days.push({ date: date, status: status });
        data.save();
      }
      res.redirect('back');
   } catch (error) {
    res.status(500).send('Internal server error')
   }
    
}






module.exports={homeController,
    createHabitController,
    deleteHabitController,
    habitDetailsController,
    updateStatus}