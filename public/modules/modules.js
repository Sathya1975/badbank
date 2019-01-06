var ui = {};

ui.navigation = `
<nav class="navbar navbar-expand-lg navbar-light bg-light">
<a class="navbar-brand" href="#" onclick="defaultModule()" >Bad Bank</a>


<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">

    <div class="navbar-nav">
      <a class="nav-item nav-link" href="#" onclick="loadCreateAccount()" >Create Account</a>
      <a class="nav-item nav-link" href="#" 

onclick="loadLogin()" >Login</a>
      <a class="nav-item nav-link" href="#" 

onclick="loadDeposit()" >Deposit</a>
      <a class="nav-item nav-link" href="#" 

onclick="loadWithdraw()" >Withdraw</a>
      <a class="nav-item nav-link" href="#" 

onclick="loadTransactions()" >Transaction</a>
      <a class="nav-item nav-link" href="#" 

onclick="loadBalance()" >Balance</a>
      <a class="nav-item nav-link" href="#" 

onclick="loadAllData()" >AllData</a>
    </div>

  </div>
</nav>
`;











ui.createAccount = `
    <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
        <div class="card-header">Create Account</div>
        <div class="card-body">
            <form>
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" class="form-control" id="name" placeholder="Enter Name">
                </div>
                <div class="form-group">
                    <label for="email">Email address</label>
                    <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter Email">
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" class="form-control" id="password" placeholder="Enter Password">
                </div>

                <div style="display:none" class="form-group">
                    <label for="balance">balance</label>
                    <input type="balance" value = "0" class="form-control" id="balance" placeholder="Hidden Balance">
                </div>

                <div style="display:none" class="form-group">
                    <label for="transactions">balance</label>
                    <input type="transactions" value = "0" class="form-control" id="transactions" placeholder="Hidden Transactions">
                </div>

                <button type="button" class="btn btn-light" onclick="create()">Create Account</button>
	       <div id="createstatus"></div>   

            </form>
        </div>
    </div>
`;




ui.login = `
<div class="card text-white bg-warning mb-3" style="max-width: 18rem;">
<div class="card-header">Login</div>
<div class="card-body">
    <form>
     <div style="display:none" class="form-group">
                    <label for="name">name</label>
                    <input type="name" value = "0" class="form-control" id="name" placeholder="Hidden Name">
                </div>


        <div class="form-group">
            <label for="email">Email address</label>
            <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter Email">
        </div>
        <div class="form-group">
            <label for="password">Password</label>
            <input type="password" class="form-control" id="password" placeholder="Enter Password">
        </div>

                <div style="display:none" class="form-group">
                    <label for="balance">balance</label>
                    <input type="balance" value = "0" class="form-control" id="balance" placeholder="Hidden Balance">
                </div>


        <button type="button" class="btn btn-light" onclick="login()">Login</button>
	       <div id="loginstatus"></div>   

    </form>
</div>
</div>
`;




ui.deposit = `
    <div class="card text-white bg-success mb-3" style="max-width: 18rem;">
        <div class="card-header">Deposit</div>
        <div class="card-body">
            <form>
                <div class="form-group">
                    <label for="email">Email address</label>
                    <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email">
                </div>
                <div class="form-group">
                    <label for="amount">Amount</label>
                    <input type="number" min="0" class="form-control" id="amount" placeholder="Amount">
                </div>

                <div style="display:none" class="form-group">
                    <label for="balance">balance</label>
                    <input type="balance" value = "0" class="form-control" id="balance" placeholder="Hidden Balance">
                </div>

	       <div id="depositstatus"></div>   

                <button type="button" class="btn btn-light" onclick="deposit()">Deposit</button>
            </form>
        </div>
    </div>
`;



ui.withdraw = `
<div class="card text-white bg-dark mb-3" style="max-width: 18rem;">
    <div class="card-header">Withdraw</div>
    <div class="card-body">
        <form>
            <div class="form-group">
                <label for="email">Email address</label>
                <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email">
            </div>
            <div class="form-group">
                <label for="amount">Amount</label>
                <input type="number" min="0" class="form-control" id="amount" placeholder="Amount">
            </div>

	       <div id="withdrawstatus"></div>   


            <button type="button" class="btn btn-light" onclick="withdraw()">Withdraw</button>
        </form>
    </div>
</div>
`;



ui.transactions = `
<div class="card text-white bg-info mb-3" style="max-width: 18rem;">
    <div class="card-header">Transactions</div>
    <div class="card-body">
        <form>


                <div style="display:none" class="form-group">
                    <label for="password">Password</label>
                    <input type="password" value = "audit" class="form-control" id="password" placeholder="Hidden Balance">
                </div>

            <div class="form-group">
                <label for="email">Email address</label>
                <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email">
            </div>


            <button type="button" class="btn btn-light" onclick="transactions()">Show Transactions</button>
	       <div id="transstatus"></div>   

        </form>
    </div>
</div> 
`;



ui.balance = `
<div class="card text-white bg-info mb-3" style="max-width: 18rem;">
    <div class="card-header">Balance</div>
    <div class="card-body">
        <form>
            <div class="form-group">
                <label for="email">Email address</label>
                <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email">
            </div>
            <button type="button" class="btn btn-light" onclick="balance()">Show Balance</button>
	       <div id="balstatus"></div>   
        </form>
    </div>
</div> 
`;


ui.allData = `
<div class="card text-white bg-danger mb-3" style="max-width: 18rem;">
    <div class="card-header">All Bank Data</div>
    <div class="card-body">
        <form>
            <button type="button" class="btn btn-light" onclick="allData()">Show All Bank Data</button>
	       <div id="status"></div>        
        </form>
    </div>
</div> 
`;


ui.default = `
<div class="card bg-light mb-3" style="max-width: 18rem;">
  <div class="card-header">BadBank Landing Module</div>
  <div class="card-body">
    <h5 class="card-title">Welcome to the bank</h5>
    <p class="card-text">You can move around using the navigation bar. (Solution developed by Sathya).</p>
<img src="bank.png" width="250" height="250" class="d-inline-block align-top" alt=""/>
  </div>
`;








var target = document.getElementById('target');
var navigation = document.getElementById('navigation');
navigation.innerHTML += ui.navigation;



var loadCreateAccount = function () {
    target.innerHTML = ui.createAccount;
};

var loadLogin = function () {
    target.innerHTML = ui.login;
};

var loadDeposit = function () {
    target.innerHTML = ui.deposit;
};

var loadWithdraw = function () {
    target.innerHTML = ui.withdraw;
};

var loadTransactions = function () {
    target.innerHTML = ui.transactions;
};

var loadBalance = function () {
    target.innerHTML = ui.balance;
};

var defaultModule = function () {
    target.innerHTML = ui.default;
};

var loadAllData = function () {
    target.innerHTML = ui.allData;
};

defaultModule();
