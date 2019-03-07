//This exports all of the cityposts
const 
  db = require('../models')

module.exports = {
    index: (req,res)=>{
        db.Post.find({}, (err,cityposts)=>{
            res.json(cityposts)
        })
    },
}

