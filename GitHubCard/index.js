/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
function formatUserData(data) {
  return {
    "profilePic": data.avatar_url,
    "name": data.name,
    "username": data.login,
    "location": data.location,
    "profileLink": data.html_url,
    "followers": data.followers,
    "following": data.following,
    "bio": data.bio
  }
}

function renderUserData(username) {
  axios.get(`https://api.github.com/users/${username}`)
    .then(res => {
      const userData = formatUserData(res.data);
      document.querySelector('.cards').append(githubCardComponent(userData));
    })
    .catch(error => console.error(error))
}

renderUserData('aurelio4')

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = ["gragonvlad", "MaelstromServer", "BrettRosen", "MicahJank", "akmaln",];
followersArray.forEach(username => renderUserData(username))

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

function githubCardComponent(user) {
  const mainCard = document.createElement('div')
  const mainCardImg = document.createElement('img')
  const mainCardInfo = document.createElement('div')
  const name = document.createElement('h3')
  const username = document.createElement('p')
  const loc = document.createElement('p')
  const profile = document.createElement('p')
  const profileLink = document.createElement('a')
  const profileFollowers = document.createElement('p')
  const profileFollowing = document.createElement('p')
  const profileBio = document.createElement('p')

  mainCardImg.setAttribute('src', user["profilePic"])
  name.textContent = user["name"]
  username.textContent = user["username"]
  loc.textContent = user["location"]
  profile.textContent = "Profile: "
  profileLink.textContent = user["profileLink"]
  profileLink.setAttribute('href', user["profileLink"])
  profileFollowers.textContent = user["followers"]
  profileFollowing.textContent = user["following"]
  profileBio.textContent = user["bio"]

  mainCard.append(mainCardImg)
  mainCard.append(mainCardInfo)
  mainCardInfo.append(name)
  mainCardInfo.append(username)
  mainCardInfo.append(loc)
  mainCardInfo.append(profile)
  profile.append(profileLink)
  mainCardInfo.append(profileFollowers)
  mainCardInfo.append(profileFollowing)
  mainCardInfo.append(profileBio)

  mainCard.classList.add('card');
  mainCardInfo.classList.add('card-info');
  name.classList.add('name');
  username.classList.add('username');

  return mainCard
}

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
