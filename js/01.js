//script de sign in

var mySubmit = document.querySelector('#submit-id')
var myLogin;
var mySenha;

mySubmit.onclick = function()
{
    myLogin = document.getElementById('user-login-id').value
    mySenha = document.getElementById('user-senha-id').value
    if(!mySenha||!myLogin)
    {
        //document.getElementById('erro-id').style.display = 'block';
    } else {
        logon();
    }
}
logon = function() {

}
