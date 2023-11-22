const TodoModel = require('../models/TodoModel')
const toDoModel=require('../models/TodoModel')


module.exports.getToDo=async(req,resp)=>{
    const ToDoData=await toDoModel.find()
    resp.send(ToDoData)

}
module.exports.saveToDO=(req,resp)=>{
    const {toDo}=req.body
    toDoModel.create({toDo})
    .then((data)=>{
        console.log("data saved")
        resp.status(201).send(data);
    })
    .catch((err)=>console.log(`error while saving data`,err));
}

module.exports.updateToDO=(req,resp)=>{
    const {id}=req.params
    const {toDo}=req.body
    TodoModel.findByIdAndUpdate(id,{toDo})
    .then(()=>{
      resp.send("data updated successfully....")    
    })
    .catch((err)=>{ 
       
        resp.send({error:err,msg:"something went wrong"})
        
    });
}

module.exports.deleteToDO=(req,resp)=>{
    const {id}=req.params
    
    TodoModel.findByIdAndDelete(id)
    .then(()=>{
      resp.send("data deleted successfully....")    
    })
    .catch((err)=>{
        resp.send({error:err,msg:"something went wrong"})
        
    });
}