const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const router = express.Router();
const bodyParser = require('body-parser');

const { Player } = require('../models/player');

//Get all players
router.get('/api/players', (req, res) => {
    Player.find({}, (error, data) => {
        if (!error){
            res.send(data);
        } else {
            console.log(error);
        }
    });
});

//Save player
router.post('/api/player/add', (req, res) => {
    const player = new Player({
        name: req.body.name,
        jersey_number: req.body.jersey_number,
        salary: req.body.salary,
        ppg: req.body.ppg,
        rpg: req.body.rpg,
        apg: req.body.apg
    });

    player.save((error, data) => {
        res.status(200).json({ code:200, message: 'Player Added Successfully', addPlayer:data });
    });
});

//Get a single player
router.get('/api/player/:id', (req, res) => {
    Player.findById(req.params.id, (error, data) => {
        if (!error) {
            res.send(data);
        } else {
            console.log(error);
        }
    })
});

//Update player
router.put('/api/player/edit/:id', (req, res) => {
    const player = {
        name: req.body.name,
        jersey_number: req.body.jersey_number,
        salary: req.body.salary,
        ppg: req.body.ppg,
        rpg: req.body.rpg,
        apg: req.body.apg
    };
    Player.findByIdAndUpdate(req.params.id, { $set:player }, { new:true }, (error, data) => {
        if (!error) {
            res.status(200).json({ code:200, message: 'Player Updated Successfully', updatePlayer: data })
        } else {
            console.log(error);
        }
    });
});

//Delete player
router.delete('/api/player/:id', (req, res) => {
    Player.findByIdAndRemove(req.params.id, (error, data) => {
        if (!error) {
            res.status(200).json({ code:200, message: 'Player Deleted Successfully', deletePlayer: data });
        }
    });
});

//Get highest PPG
router.get('/api/get-ppg', (req, res) => {
    
    Player.find({}, (error, data) => {
        if(error){
            res.json({error});
        }else{
            data = data.reduce((max, obj) => parseInt(max.ppg) > parseInt(obj.ppg) ? max : obj);
            res.json(data);
        }
    })
});

//Get highest RPG
router.get('/api/get-rpg', (req, res) => {
    
    Player.find({}, (error, data) => {
        if(error){
            res.json({error});
        }else{
            data = data.reduce((max, obj) => parseInt(max.rpg) > parseInt(obj.rpg) ? max : obj);
            res.json(data);
        }
    })
});

//Get highest APG
router.get('/api/get-apg', (req, res) => {
    
    Player.find({}, (error, data) => {
        if(error){
            res.json({error});
        }else{
            data = data.reduce((max, obj) => parseInt(max.apg) > parseInt(obj.apg) ? max : obj);
            res.json(data);
        }
    })
});

//Get highest salary
router.get('/api/get-salary', (req, res) => {
    
    Player.find({}, (error, data) => {
        if(error){
            res.json({error});
        }else{
            data = data.reduce((max, obj) => parseInt(max.salary) > parseInt(obj.salary) ? max : obj);
            res.json(data);
        }
    })
});

//Get highest jersey number
router.get('/api/get-jerseynumber', (req, res) => {
    
    Player.find({}, (error, data) => {
        if(error){
            res.json({error});
        }else{
            data = data.reduce((max, obj) => parseInt(max.jersey_number) > parseInt(obj.jersey_number) ? max : obj);
            res.json(data);
        }
    })
});


module.exports = router;