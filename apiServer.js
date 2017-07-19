'use strict';

var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);

var app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// API
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/bookshop');
var db = mongoose.connection;
db.on('error', console.error.bind(console, '#MongoDB - connection error: '));

// --->>> SET UP SESSIONS <<<----
app.use(session({
  secret: 'mySecretString',
  saveUninitialized: false,
  resave: false,
  store: new MongoStore({mongooseConnection:db, ttl: 2 * 24 * 60 * 60})
}));

// SAVE SESSION CART API
app.post('/cart', function(req, res){
  var cart = req.body;
  req.session.cart = cart;
  req.session.save(function(err){
    if(err){
      throw err;
    }
    res.json(req.session.cart);
  });
});

// GET SESSION CART API
app.get('/cart', function(req, res){
  if(typeof req.session.cart !=='undefined'){
    res.json(req.session.cart);
  }
});
//--->>> END SESSION SET UP <<<----
 
var Books = require('./models/books.js');

//-------GET BOOKS-------
app.get('/books', function(req, res){
  Books.find(function(err, books){
    if(err){
      throw err;
    }
    res.json(books);
  })
});

//-----POST BOOKS----------
app.post('/books', function(req, res){
  var book = req.body;
  Books.create(book, function(err, books){
    if(err){
      throw err;
    }
    res.json(books);
 }) });

//-----DELETE BOOKS----------
app.delete('/books/:_id', function(req, res) {
  var query = {_id: req.params._id};
  Books.remove(query, function(err, books){
    if(err){
      throw err; 
    }
    res.json(books);
  });
});

//-----UPDATE BOOKS----------
app.put('/books/:_id', function(req, res) {
  var book = req.body;
  var query = req.params._id;
  var update = {
    '$set': {
      title: book.title,
      description: book.description,
      image: book.image,
      price: book.price
    }
  };

  var options = {new: true};
  Books.findOneAndUpdate(query, update,options, function(err, books){
      if(err){
        throw err;
      }
      res.json(books);
  });
});

// ---> GET BOOKS IMAGES API --
app.get('/images', function(req, res) {
  var imageFolder = __dirname + '/public/images';
  var fs = require('fs');
  
  fs.readdir(imageFolder, function(err, images) {
    
    if (err) {
      return console.error(err);
    }

    var imageArray = [];
    images.forEach(function(image) {
      imageArray.push({
        name: image
      });
    });

    // Send the json response with the array
    res.json(imageArray);
  });
});

app.listen(3001, function(err) {
    if(err) {
        return console.log(err);
    }
    console.log(`API Server is listening on http://localhost:3001`);
});