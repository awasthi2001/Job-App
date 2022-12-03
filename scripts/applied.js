

import {Navbar} from '../Components/Navbar.js'
let navbar = document.getElementById('links');

navbar.innerHTML = Navbar();

let AppliedJobs = JSON.parse(localStorage.getItem('joblists')) || [];

function DisplayItems(){
    
}
