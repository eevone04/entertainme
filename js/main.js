const movies=[{id:1,title:'Avengers'},{id:2,title:'Batman'}];
const c=document.getElementById('movies');
movies.forEach(m=>{c.innerHTML+=`<div class='col-md-3'><div class='card p-2' onclick='go(${m.id})'>${m.title}</div></div>`});
function go(id){localStorage.setItem('id',id);location='review.html';}