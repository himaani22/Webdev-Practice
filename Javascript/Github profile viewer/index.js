let user = document.getElementById('userID');

async function fetchUser(username) {
    let response = await fetch(`https://api.github.com/users/${username}`)
    let result = await response.json();
   // console.log(result);
 displayUser(result);
}

document.getElementById("btn").addEventListener('click' , () =>{
    document.getElementById('userProfile').innerHTML = ` <span class = "loader"></span>`
let userid = user.value;
document.getElementById('userProfile').classList.remove('secondDivhidden')
document.getElementById('userProfile').classList.add('secondDiv')

fetchUser(userid);
})
function displayUser(result){
    const{avatar_url,name,bio,followers,following,public_repos,html_url} = result;
    if(!avatar_url){
        document.getElementById(
    "userProfile"
).innerHTML = ` <h1>User Not Found</h1>`
return
    }

    
  document.getElementById(
    "userProfile"
).innerHTML = `
   <div class="userInfo">
    <img src=${avatar_url} class = "userImg" alt="err">
    <div class="userDetail">
        <p class="userName">${name}</p>
        <p class="userBio">${bio}</p>
    </div>
</div>
<div class="userFollow">
    <div class="follower">
        <div class="repo">
            <p>Follower</p>
            <p>${followers}</p>
        </div>
        <div class="repo">
            <p>Following</p>
            <p>${following}</p>
        </div>
        <div class="repo">
            <p>Repo</p>
            <p>${public_repos}</p>
        </div>
      
    </div>
    <a href = "${html_url}" target = '_blank' class="visit">
 <div class="visit">
        Visit Profile
    </div>
    </a>
      
        </div>
   
    `
}