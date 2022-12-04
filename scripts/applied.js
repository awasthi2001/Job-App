

import {Navbar} from '../Components/Navbar.js'
let navbar = document.getElementById('links');

navbar.innerHTML = Navbar();

let AppliedJobs = JSON.parse(localStorage.getItem('joblists')) || [];
DisplayItems()
function DisplayItems(){
    document.getElementById('body').innerHTML="";
    AppliedJobs.map(({name,email,JobType,expected})=>{

    })
}

console.log(AppliedJobs)