var task = require('../model/usermodel');

exports.show_task = async(req,res) => {
    try {
        var data = await task.find();
        res.status(200).json({
            status:"all show task",
            data
         })
    } catch (error) {
        res.status(200).json({
            status:"error",
            error
         })
    }
}
exports.add_task = async(req,res) => {
    try {
        var data = await task.create({ complate: "flase", title: req.body.title, description: req.body.description, duedate: req.body.duedate, categoryz: req.body.categoryz });
        res.status(200).json({
            status:"task create succesfully",
            data
         })
    } catch (error) {
        res.status(200).json({
           status:"error",
           error
        })
    }
}

exports.edit_task = async(req,res) => {
    try {
        var id = req.params.id;
        var data = await task.findByIdAndUpdate(id, req.body);
        res.status(200).json({
            status:"task update succesfully",
            data
         }) 

    } catch (error) {
        res.status(200).json({
            status:"error",
            error
         })
    }
}

exports.delete_task = async(req,res) => {
    try {
        var id = req.params.id;

        await task.findByIdAndDelete(id);

        res.status(200).json({
            status:"task deletd succesfully",
         }) 
    } catch (error) {
        res.status(200).json({
            status:"error",
            error
         })
    }
}

exports.complete = async(req,res) =>{
    try {
        var id = req.params.id;

        var data = await task.findById(id);
        console.log(data.complate)

       if(data.complate === false)
       {
        const complatetask = await task.findByIdAndUpdate(id, { complate: "true" });
        res.status(200).json({
            status:"task is complted",
            complatetask
         })
       }else{
        res.status(200).json({
            status:"task is already  complted"
         })
       }
      

    } catch (error) {
        res.status(200).json({
            status:"error",
            error
         })
    }
}