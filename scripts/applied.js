

import {Navbar} from '../Components/Navbar.js'
let navbar = document.getElementById('links');

navbar.innerHTML = Navbar();

let AppliedJobs = JSON.parse(localStorage.getItem('joblists')) || [];
DisplayItems()
function DisplayItems(){
    let tbody = document.getElementById('body')
    tbody.innerHTML="";
    AppliedJobs.map(({name,email,JobType,expected},index)=>{
       let row = document.createElement("tr");
       row.innerHTML = `
       <td>${name}</td>
       <td>${email}</td>
       <td>${JobType}</td>
       <td>${expected}</td>
       `
       let btn = document.createElement('button');
       btn.innerText = "ADD TO BOOKMARK"
       btn.style.color = 'green';
       btn.style.fontWeight = 'bold';
       btn.style.margin = '0px'
       btn.style.marginTop = '10px'
       btn.style.marginLeft = '50px'
       btn.style.cursor = 'pointer'
       btn.style.backgroundColor ='transparent';
       btn.style.border = 'none'
       btn.addEventListener('click',function(){AddToBookmark(name,email,JobType,expected,index)})
       row.append(btn);
       tbody.append(row);
    })
}

let Bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
function AddToBookmark(name,email,JobType,expected,index){
let jobobj = {
    name : name,
    email : email,
    JobType : JobType,
     expected : expected,
}
Bookmarks.push(jobobj);
localStorage.setItem('bookmarks',JSON.stringify(Bookmarks));
alert('Added To Bookmarks')
}