// -------------------------------------    
//  Create user account on server
// -------------------------------------    
function create() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var balance = document.getElementById('balance').value;
    var transactions = 						document.getElementById('transactions').value;


    var url = '/posts/' + name + '/' + email + '/' + password 				  + '/' + balance + '/' + transactions;


    superagent
        .get(url)
        .end(function(err, res){
            if(err){
                console.log(err);
            }
            else{
                console.log(res);
                createstatus.innerHTML = 									JSON.stringify(res.text);		
            }

        });
}


// -------------------------------------    
//  Login to the Account - Validation
// -------------------------------------    
function login() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password= document.getElementById('password').value;
    var balance= document.getElementById('balance').value;

    var url = '/posts/' + name + '/' + email + '/' + password + '/' + balance;


    superagent
        .get(url)
        .end(function(err, res){
            if(err){
                console.log(err);
            }
            else{
                console.log(res);
                loginstatus.innerHTML = 									JSON.stringify(res.text);		
            }

        });

}


// -------------------------------------    
//  Deposit Amount for a user account 
// -------------------------------------    
function deposit() {

    var email = document.getElementById('email').value;
    var amount = document.getElementById('amount').value;
    var balance = document.getElementById('balance').value;

    var url = '/posts/' + email + '/' + amount + '/' + 								  balance;


    superagent
        .get(url)
        .end(function(err, res){
            if(err){
                console.log(err);
            }
            else{
                console.log(res);
                depositstatus.innerHTML = 									JSON.stringify(res.text);		
            }

        });
}


// -------------------------------------    
//  Withdraw Amount for a user account 
// -------------------------------------    
function withdraw() {
    var email = document.getElementById('email').value;
    var amount = document.getElementById('amount').value;

    var url = '/posts/' + email + '/' + amount;


    superagent
        .get(url)
        .end(function(err, res){
            if(err){
                console.log(err);
            }
            else{
                console.log(res);
                withdrawstatus.innerHTML = 									JSON.stringify(res.text);		

            }

        });
}




// -------------------------------------    
//  Get all Transactions for a user account 
// -------------------------------------    
function transactions() {
    var audit = document.getElementById('password').value;
    var email = document.getElementById('email').value;

    var url = '/audit/' + email;

    superagent
        .get(url)
        .end(function(err, res){
            if(err){
                console.log(err);
            }
            else{
                console.log(res);
                transstatus.innerHTML = 									JSON.stringify(res.body);		
            }

        });
}



// -------------------------------------    
//  Get the Balance Amount for a user account 
// -------------------------------------    
function balance() {
    var email = document.getElementById('email').value;
    var url = '/posts/' + email;


    superagent
        .get(url)
        .end(function(err, res){
            if(err){
                console.log(err);
            }
            else{
                console.log(res);
                balstatus.innerHTML = 									JSON.stringify(res.body);		
            }

        });
}



// -------------------------------------    
//  Get All the Data
// -------------------------------------    
function allData() {
    var status  = document.getElementById('status');
    var url = '/data';

    superagent
        .get(url)
        .end(function(err, res){
            if(err){
                console.log(err);
            }
            else{
                console.log(res);
                status.innerHTML = JSON.stringify(res.body);
            }

        });

}