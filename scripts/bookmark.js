import { Navbar } from "../Components/Navbar.js";
let navbar = document.getElementById("links");

navbar.innerHTML = Navbar();

let Bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
DisplayItems();
function DisplayItems() {
  let tbody = document.getElementById("body");
  tbody.innerHTML = "";
  Bookmarks.map(({ name, email, JobType, expected }, index) => {
    let row = document.createElement("tr");
    row.innerHTML = `
       <td>${name}</td>
       <td>${email}</td>
       <td>${JobType}</td>
       `;
    let btn = document.createElement("button");
    btn.innerText = "Delete";
    btn.style.color = "red";
    btn.style.fontWeight = "bold";
    btn.style.margin = "0px";
    btn.style.marginTop = "10px";
    btn.style.marginLeft = "50px";
    btn.style.cursor = "pointer";
    btn.style.backgroundColor = "transparent";
    btn.style.border = "none";
    btn.addEventListener("click", function () {
      RemoveFromBookmark(name, email, JobType, expected, index);
    });
    row.append(btn);
    tbody.append(row);
  });
}

function RemoveFromBookmark(index) {
  Bookmarks.splice(index, 1);
  localStorage.setItem("bookmarks", JSON.stringify(Bookmarks));
  DisplayItems();
}
