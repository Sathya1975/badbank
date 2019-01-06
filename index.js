//-----------------------------------------------------------
// setup server
//-----------------------------------------------------------
const express = require('express');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync')
//-----------------------------------------------------------


//-----------------------------------------------------------
// Create server
//-----------------------------------------------------------
const app = express()
//-----------------------------------------------------------


//-----------------------------------------------------------
// setup directory used to serve static files
// conf express to serve static files from public 
//-----------------------------------------------------------
app.use(express.static('public'));
//-----------------------------------------------------------

//-----------------------------------------------------------
// set view engine& allow Cross-Origin Resource Sharing (CORS)
//-----------------------------------------------------------
var cors = require('cors');
app.use(cors());
//-----------------------------------------------------------


//-----------------------------------------------------------
// Create database instance and start server
//-----------------------------------------------------------
const adapter = new FileSync('db.json')
const db = low(adapter)
 
// Set some defaults (required if your JSON file is empty)
db.defaults({ posts: [], transactions: [], balance: [] } ).write()
// ----------------------------------------------------


// ----------------------------------------------------
// shortid is more minimalist and returns a unique id that you // can use when creating resources.
// ----------------------------------------------------
const shortid = require('shortid')
// ----------------------------------------------------


// ----------------------------------------------------
// add post (5 parameters) - test using:
//      curl //http://localhost:3000/posts/sathyan1975/
//      	  s_sathyanarayanan@hotmail.com/Sathya@CDC1/0/tx
// ----------------------------------------------------
app.get('/posts/:name/:email/:password/:balance/:transactions', function (req, res) {

    	// Create account route
	// return success or failure string
     // ----------------------------------------------------
     var accounts = {
        "name" : req.params.name,
        "email" : req.params.email,
        "balance" : req.params.balance,
        "password"    : req.params.password,
        "transactions"    : shortid.generate()
     };
     db.get('posts').push(accounts).write();
     console.log(db.get('posts').value());   
     res.send('Account Created!');
});



// ----------------------------------------------------
// add post (4 parameters) - test using:
// login to an account - very simple validation test using:
//http://localhost:3000/posts/sathyan1975/sathya@gmail.com/pwd// /0
// ----------------------------------------------------
app.get('/posts/:name/:email/:password/:balance', function (req, res) {

    	// First check with email if record exists
	// return success or failure string
     // ----------------------------------------------------

	var emailexists = db.get('posts')
				   .find({ email: req.params.email })
				   .value();

	if(emailexists){

	    		// Then check if the password exists
			// return success or failure string			   		// -----------------------------------
			var pwdexists = db.get('posts')
				   .find({ password: 										req.params.password})
				   .value();


			if(pwdexists)
			{
			    console.log('Login Successful!');   
 			    res.send('Login Successful!');

			}
			else
			{
			    console.log('Login Failed!');  
 			    res.send('Login Failed!');
 
			}
	}
	else
	{
	    console.log('Login Failed!');   
	    res.send('Login Failed!');
	}
	
});



// ----------------------------------------------------
// add post (3 parameters) - test using:
// deposit amount to an account - test using:
// http://localhost:3000/posts/sathya@gmail.com/1000/0
// :balance is used just for routing and nothing else
// ----------------------------------------------------
app.get('/posts/:email/:amount/:balance', function (req, res) {

    	// Deposit amount to an account 
	// return success or failure string


    	// Create transactions route for each deposit for audit 
	// return success or failure string
     // ----------------------------------------------------
     var accounts = {
        "name" : "audit",
        "email" : req.params.email,
        "balance" : req.params.amount,
        "password"    : "audit",
        "transactions"    : shortid.generate()
     };
     db.get('transactions').push(accounts).write();
     console.log(db.get('transactions').value());   
     res.send('Transaction for Account Created!');


     // ----------------------------------------------------
    	// Create Balance Account for Specific User Account 
	// return success or failure string
     // ----------------------------------------------------
     // First check if an existing balance exists in balance 	// account and if so update it , if not create it
     // ----------------------------------------------------
	var balexists = db.get('balance')
				   .find({ email: req.params.email })
				   .value();

	if(balexists){
		var newbal = parseFloat(balexists.balance) + 					  parseFloat(req.params.amount);
		
		db.get('balance')
		  .find({ email: req.params.email})
		  .assign({ balance: newbal})
		  .write()

		console.log(balexists);   
	}
	else
	{
	     var bal  = {
		      	  "email" : req.params.email,
	      		  "balance" : req.params.amount
			     };

	     db.get('balance').push(bal).write();
	     console.log(db.get('balance').value());   
	}
});




// ----------------------------------------------------
// add post (2 parameters) - test using:
// withdraw amount from an account - test using:
// http://localhost:3000/posts/sathya@gmail.com/1000
// ----------------------------------------------------
app.get('/posts/:email/:amount', function (req, res) {

    	// Withdraw amount from an account 
	// return success or failure string


    	// Create account route for each withdraw for audit 
	// return success or failure string
     // ----------------------------------------------------
     var accounts = {
        "name" : "audit",
        "email" : req.params.email,
        "balance" : -req.params.amount,
        "password"    : "audit",
        "transactions"    : shortid.generate()
     };
     db.get('transactions').push(accounts).write();
     console.log(db.get('transactions').value());   
     res.send('Transaction for Account Created!');


     // ----------------------------------------------------
    	// Create Balance Account for Specific User Account 
	// return success or failure string
     // ----------------------------------------------------
     // First check if an existing balance exists in balance 	// account and if so update it , if not create it
     // ----------------------------------------------------
	var balexists = db.get('balance')
				   .find({ email: req.params.email })
				   .value();

	if(balexists){
		var newbal = parseFloat(balexists.balance) - 					  parseFloat(req.params.amount);
		
		db.get('balance')
		  .find({ email: req.params.email})
		  .assign({ balance: newbal})
		  .write()

		
		console.log(balexists);   

	}
	else
	{
	     var bal  = {
		      	  "email" : req.params.email,
	      		  "balance" : -req.params.amount
			     };

	     db.get('balance').push(bal).write();
	     console.log(db.get('balance').value());   

	}
});




// ----------------------------------------------------
// add post (2 parameters) - test using:
// list all transactions from an account - test using:
// http://localhost:3000/posts/sathya@gmail.com/audit
// ----------------------------------------------------
app.get('/audit/:email', function (req, res) {

	console.log(db.get('transactions')
			 .filter({email: req.params.email})
			 .value());

      res.send(db.get('transactions')
			 .filter({email: req.params.email})
			 .value());
});



// ----------------------------------------------------
// add post (1 parameter) - test using:
// Get Balance Amount for an account - test using:
//      curl http://localhost:3000/posts/sathya@gmail.com
// ----------------------------------------------------
app.get('/posts/:email', function (req, res) {

    	// Get the Balance amount for an account 
	// return success or failure string
     // ----------------------------------------------------

	 console.log(
		db.get('balance')
	  		.find({ email: req.params.email})
			.value());

       res.send(
		db.get('balance')
	  		.find({ email: req.params.email})
			.value());
});



// ----------------------------------------------------
// Display all data 
// ----------------------------------------------------
// add post - test using:
//      curl http://localhost:3000/account/all
// ----------------------------------------------------
app.get('/data', function (req, res) {
    // Return data for all accounts

    console.log(db.get('transactions').value());
    res.send(db.get('transactions').value());
});
// ----------------------------------------------------



//-----------------------------------------------------------
app.listen(3000, function(){
	console.log('Running on port: 3000');
});
//-----------------------------------------------------------