import {Navbar} from '../Components/Navbar.js'
let navbar = document.getElementById('links');

navbar.innerHTML = Navbar();

document.getElementById('form').addEventListener('submit',handleSubmit);

let users = JSON.parse(localStorage.getItem('joblists')) || [];
function handleSubmit (e){
e.preventDefault();
let name = document.getElementById('name').value;
let email = document.getElementById('email').value;
let JobType = document.getElementById('role').value;
let expected = document.getElementById('salary').value;
if(name=='' || email=='' || JobType=='' || expected==''
){
    alert('please fill the required details')
}else{
    let user = {
        name : name,
        email : email,
        JobType : JobType,
        expected : expected
    }
    users.push(user);
    localStorage.setItem('joblists',JSON.stringify(users));
    document.getElementById('name').value='';
    document.getElementById('email').value='';
    //document.getElementById('role').value;
     document.getElementById('salary').value='';
     alert('successfully applied')
}

}