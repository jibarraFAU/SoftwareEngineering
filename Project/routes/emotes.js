var express = require('express');
var mongojs = require('mongojs');
var router = express.Router();
var db = mongojs('mongodb+srv://testuser:test123@cluster0.bmzze.mongodb.net/emotes?retryWrites=true&w=majority');


// Get ALL Emotes
router.get('/emotes', function (req, res, next) {

    db.emotes.find(function (err, emotes) {
        if (err) {
            res.send(err);
        }
        res.json(emotes);
    });
});

// Get Single Emote
//:id is dynamic address placeholder.
// example get function for later updating to get date range.
router.get('/emote/:id', function (req, res, next) {

    db.emotes.findOne({ _id: mongojs.ObjectId(req.params.id) }, function (err, emote) {
        if (err) {
            res.send(err);
        }
        res.json(emote);
    });
});


// Post Emote
router.post('/emote', function (req, res, next) {
    var emote = req.body;
    if (!emote.title || !(emote.date + '')) {
        res.status(400);
        res.json({
            "error": "bad data"
        });
    }
    else {
        db.emotes.save(emote, function (err, emote) {
            if (err) {
                res.send(err);
            }
            res.json(emote);
        });
    }
});

//Delete emote
router.delete('/emote/:id', function (req, res, next) {

    db.emotes.remove({ _id: mongojs.ObjectId(req.params.id) }, function (err, emote) {
        if (err) {
            res.send(err);
        }
        res.json(emote);
    });
});

//Update
router.put('/emote/:id', function (req, res, next) {
    var emotes = req.body;
    var updEmote = {};

    if (emote.date) {
        updEmote.date = emote.date;
    }

    if (emote.title) {
        updEmote.title = emote.title;
    }

    if (!updEmote) {
        res.status(400);
        res.json({
            "error": "bad data"
        });
    }
    else {
        db.emotes.update({ _id: mongojs.ObjectId(req.params.id) }, updEmote, {}, function (err, emote) {
            if (err) {
                res.send(err);
            }
            res.json(emote);
        });
    }


});
module.exports = router;