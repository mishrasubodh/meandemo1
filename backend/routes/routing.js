import Issue from '../models/Issue';
import express from 'express';
import mongoose from '../dbConect/dbconfig'
const router = express.Router();


router.get('/',(req,res)=>{
    res.send('router is working')
})



router.post('/issues/add',(req, res) => {
    console.log("================>",req.body)
    let issue = new Issue(req.body);
    console.log('===isssue========again()========>',issue)
    issue.save()
        .then(issue => {
            res.status(200).json({'issue': 'Added successfully'});
        })
        .catch(err => {
            res.status(400).send('Failed to create new record');
        });
});
router.get('/issues',(req, res) => {
    Issue.find((err, issues) => {
        if (err)
            console.log(err);
        else
            res.json(issues);
    });
});

router.get('/issues/:id',(req, res) => {
    Issue.findById(req.params.id, (err, issue) => {
        if (err)
            console.log(err);
        else
            res.json(issue);
    })
});
router.post('/issues/update/:id',(req, res) => {
    Issue.findById(req.params.id, (err, issue) => {
        if (!issue)
            return next(new Error('Could not load Document'));
        else {
            issue.title = req.body.title;
            issue.responsible = req.body.responsible;
            issue.description = req.body.description;
            issue.severity = req.body.severity;
            issue.status = req.body.status;
            issue.save().then(issue => {
                res.json('Update done');
            }).catch(err => {
                res.status(400).send('Update failed');
            });
        }
    });
});
router.get('/issues/delete/:id',(req, res) => {
    console.log("-=-=-=-=-=-=-=-=-=-=>>",req.params);
    let id = parseInt(req.params.id)
    console.log("-=-=-=-=-=-=-=-=-=-=>>",id);
    Issue.findByIdAndRemove( mongoose.Types.ObjectId(req.params.id), (err, issue) => {
        if (err)
            res.json(err);
        else
            res.json('Removed successfully');
    });
});

export default router;