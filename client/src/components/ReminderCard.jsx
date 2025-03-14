
import React, {useState, useEffect} from 'react';
import axios from 'axios'

const ReminderCard = ()=>{
// set state to store reminders
const [ reminders, setReminders] = useState([]);

// set new reminders 
const[newReminders, setNewReminders] = useState({
  title: '',
  description: '',
  date: ''

});


//mounts fetched reminders 
useEffect(()=>{
  getReminders();
}, [])

//axios get request 
const getReminders = ()=>{
axios.get('/reminders')
.then((response)=>{
setReminders(response.data)
})
.catch((err)=>{
  console.error("Can not get all reminders:", err)
})
}


//axios Post
 const postReminders = () =>{
axios.post('/reminders'),{
  title: newReminders.title,
  description: newReminders.description,
  date: newReminders.date,
  user:userId,
}
.then(()=>{

  setReminders([...reminders, response.data])
  setNewReminders({
    title: '',
    description: '',
    date: ''
  //userId:????
  })
})
.catch((err)=>{
console.error("Can not create reminder:", err)
})
 }


// axios request to update
const updateReminders = (id, updatedReminder) =>{
axios.patch(`/reminders/${id}`, updatedReminder)
.then(()=>{
  getReminders();
})
.catch((err)=>{
  console.error(err)

})
}


// axios DELETE reminder
const deleteReminders = (id) =>{
axios.delete(`/reminders/${id}`)
.then(()=>{
  getReminders();
})
.catch((err)=>{
  console.error(err)

})
}

return (
  <div>
    <h2>Reminders</h2>
  <div>
{reminders.map((reminder)=> {
<div key={reminder._id}>
<h3>{reminder.title}</h3>
<p>{reminder.description}</p>
<p>{new Date(reminder.date).toLocaleString()}</p>
<button onClick={()=>updateReminders(reminder._id, {completed: true})}>Completed!</button>
<button onClick={()=>deleteReminders(reminder._id)}>Delete</button>

</div>
})}

  </div>



  <div>
    <h3>Create New Reminder</h3>
    <input></input>
    <input></input>
    <input></input>
  <button onClick={postReminders}>Create Reminder</button>
  </div>
  </div>
)

}
export default ReminderCard;