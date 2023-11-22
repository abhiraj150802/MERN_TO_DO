const {Router}=require('express')
const router=Router()
const {getToDo,saveToDO, updateToDO, deleteToDO}= require('../controller/ToDo_controller')

router.get('/',getToDo)
router.post('/save',saveToDO)
router.put('/update/:id',updateToDO)
router.delete('/delete/:id',deleteToDO)

module.exports=router;