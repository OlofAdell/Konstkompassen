var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var data = require("../initdata");

var db = mongoose.connect('mongodb://localhost/test'),
	Schema = mongoose.Schema,
	verkSchema = new Schema({
		title: String,
		created: { type: Date, default: Date.now },
	});
	Verk = mongoose.model('Verk',verkSchema); // collection name

router.get('/:nr', function(req, res) {
	var txt = data[req.params.nr].title;
	var newVerk = new Verk({title: txt});
	newVerk.save();

	res.send(txt);

});

router.get('/', function(req, res) {
	var txt = "<h1>Alla verk</h1>";

	Verk.find(function(err, verken) {
		verken.forEach(function(verk) {
			txt += verk.title + "<br>";
		});
		res.send(txt);
	});
});






module.exports = router;
