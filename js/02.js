//script de registro

var mySubmit = document.querySelector('#submit-id')
var myLogin
var mySenha
var myEmail
var myNome

mySubmit.onclick = function()
{
    myNome = document.getElementById('user-nome-id').value;
    myLogin = document.getElementById('user-login-id').value;
    mySenha = document.getElementById('user-senha-id').value;
    myEmail = document.getElementById('user-email-id').value;
    if(!mySenha||!myLogin)
    {
        document.getElementById('erro-id').style.display = 'block';
    } else {
        registrar();
    }
}
registrar = function()
{

}