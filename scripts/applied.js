import { Navbar } from "../Components/Navbar.js";
let navbar = document.getElementById("links");

navbar.innerHTML = Navbar();

let AppliedJobs = JSON.parse(localStorage.getItem("joblists")) || [];
DisplayItems(AppliedJobs);
function DisplayItems(AppliedJobs) {
  let tbody = document.getElementById("body");
  tbody.innerHTML = "";
  AppliedJobs.map(({ name, email, JobType, expected }, index) => {
    let row = document.createElement("tr");
    row.innerHTML = `
       <td>${name}</td>
       <td>${email}</td>
       <td>${JobType}</td>
       <td>${expected}</td>
       `;
    let btn = document.createElement("button");
    btn.innerText = "ADD TO BOOKMARK";
    btn.style.color = "green";
    btn.style.fontWeight = "bold";
    btn.style.margin = "0px";
    btn.style.marginTop = "10px";
    btn.style.marginLeft = "50px";
    btn.style.cursor = "pointer";
    btn.style.backgroundColor = "transparent";
    btn.style.border = "none";
    btn.addEventListener("click", function () {
      AddToBookmark(name, email, JobType, expected, index);
    });
    row.append(btn);
    tbody.append(row);
  });
}

let Bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
function AddToBookmark(name, email, JobType, expected, index) {
  let jobobj = {
    name: name,
    email: email,
    JobType: JobType,
    expected: expected,
  };
  Bookmarks.push(jobobj);
  localStorage.setItem("bookmarks", JSON.stringify(Bookmarks));
  alert("Added To Bookmarks");
}
let dummyArr = AppliedJobs;
let SortByNames = document.getElementById("sortNames");
SortByNames.addEventListener("change", handleNamesSort);
function handleNamesSort() {
  let order = document.getElementById("sortNames").value;
  if (order === "ascending") {
    dummyArr.sort(function (a, b) {
      if (a.name > b.name) return 1;
      if (a.name < b.name) return -1;
      return 0;
    });
  }
  if (order === "descending") {
    dummyArr.sort(function (a, b) {
      if (a.name > b.name) return -1;
      if (a.name < b.name) return 1;
      return 0;
    });
  }

  DisplayItems(dummyArr);
}

document.querySelector("#filterrole").addEventListener("change", handlefilter);
function handlefilter() {
  var role = document.querySelector("#filterrole").value;
  dummyArr = AppliedJobs.filter(function (elem, index) {
    if (document.querySelector("#filterrole").value == "All" || role == "") {
      return 1;
    } else {
      return elem.JobType == role;
    }
  });
  DisplayItems(dummyArr);
}

document
  .querySelector("#sortSalary")
  .addEventListener("change", handleSortBySalary);

function handleSortBySalary() {
  let order = document.querySelector("#sortSalary").value;
  if (order == "lth") {
    dummyArr.sort(function (a, b) {
      return a.expected - b.expected;
    });
  } else {
    dummyArr.sort(function (a, b) {
      return b.expected - a.expected;
    });
  }
  DisplayItems(dummyArr);
}
