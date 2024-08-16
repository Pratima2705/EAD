const express = require('express')
const router = express.Router()
const student = require('../Model/student')
router.get('/', async(req,res) =>
{
    try{
        const a1 =await student.find()
        res.join(a1)
    }
    catch(err)
    {
        res.send("error through get method" +err)
    }
})
router.get('/:id',async(req,res) =>
{
    try{
        const a2=await student.findById(req.params.id)
        res.json(a2)
    }
    catch(err){
        res.send("error through get by id method"+err)
    }
})
router.post('/',async(req,res) =>
{
    const a2 =new student({
        name: req.body.name,
        roll: req.body.roll,
        isPassed: req.body.isPassed,
        class: req.body.class,
        branch: req.body.branch
        })
        try{
            const a3 =await a2.save()
            res.json(a3)
        }
        catch(err)
        {
            res.send("error through post method")
        }
})
router.patch('/:id',async(req,res) =>
{
    try{
        const a2=await student.findById(req.params.id)
        a2.sub=req.body.sub
        const a3=await a2.save()
        res.json(a3)
    }
    catch(err){
        res.send("error through patch method")
    }
})
router.delete('/:id',async(req,res) =>
{
    const a2=await student.findById(req.params.id)
    res.join(a2)
})
module.exports = router