// //User Class for creating a github user
// class User {
//   constructor(str) {
//     let temp = JSON.parse(str);
//     this.avatarLink = temp.avatar_url;
//     this.userName = temp.name;
//     this.handle = temp.login;
//     this.numFollowers = temp.followers;
//     this.numFollowing = temp.following;
//     this.followers = [1,2,34];
//     this.following = [];
//   }

//   static setFollower(listUser) {
//     this.followers = listUser;
//   }

//   static getFollowers() {
//     let xhr = new XMLHttpRequest();
//     let follower = [];
//     xhr.open("GET", `https://api.github.com/users/${this.userName}/followers`);
//     xhr.onload = function () {
//         let temp = JSON.parse(xhr.response);
//         for (let item of temp) {
//             follower.push(item);

//         }
//         User.setFollower(follower);

//     }.bind(this);
//     xhr.send();
//   }

//   static getFollowing() {
//     // let xhr = new XMLHttpRequest();
//     // xhr.open("GET", `https://api.github.com/users/${this.userName}/following`);
//     // JSON.parse(xhr.response).foreach((item) => {
//     //   this.following.push(item.avatar_url);
//     // });
//   }

//   create() {
//     User.getFollowers();
//     User.getFollowing();
//   }

//   // get followers() {
//   //     return this.followers;
//   // }

//   // get following() {
//   //     return this.following;
//   // }
// }

// function handleInput(event) {
//   console.log(event.target.value);
// }

// function xhrRequestHandler(string) {
//   let xhr = new XMLHttpRequest();
//   xhr.open(`GET`, `https://api.github.com/users/${string}`);
// }

// function updateUI(userName, userId, avatarLink, followerList, folloingList) {}

// let input = document.querySelector("input");
// input.addEventListener("keyup", (event) => {
//   handleInput(event);
// });

// let xhr = new XMLHttpRequest();
// xhr.open(`GET`, `https://api.github.com/users/anandvipul`);
// let aa = new User(xhr.response);
// xhr.onload = function () {

//   aa.create();
//   aa.followers;
// };
// xhr.send();

// // let aa = new User(xhr.response);

let user = {
  avatar_link: "",
  name: "",
  handle: "",
  followers: [],
  following: [],
};

function handleInput(event) {
  // console.log(event.target.value);
  let xhr = new XMLHttpRequest();
  xhr.open(`GET`, `https://api.github.com/users/${event.target.value}`);
  xhr.onload = function () {
    let response = JSON.parse(xhr.response);
    user.avatar_link = response.avatar_url;
    user.name = response.name;
    user.handle = response.login;
    getFollowers(`${event.target.value}`);
    
  };
  xhr.send();
}

function getFollowers(str) {
  let xhr = new XMLHttpRequest();
  xhr.open(`GET`, `https://api.github.com/users/${str}/followers`);
  xhr.onload = function () {
    let temp = JSON.parse(xhr.response);
    for (let item of temp) {
      user.followers.push(item.avatar_url);
    }
    getFollowing(str);
    
  };
  xhr.send();
}

function getFollowing(str) {
  let xhr = new XMLHttpRequest();
  xhr.open(`GET`, `https://api.github.com/users/${str}/following`);
  xhr.onload = function () {
    let temp = JSON.parse(xhr.response);
    for (let item of temp) {
      user.following.push(item.avatar_url);
    }
    // console.log(user);
    updateUI(user);
  };
  xhr.send();
}

function updateUI(obj) {
  let img = document.querySelector('.userImage');
  img.src = obj.avatar_link;
  let user_name = document.querySelector(".user-name");
  user_name.innerText = obj.name;
  let user_id = document.querySelector(".user-id");
  user_id.innerText = obj.handle;

  let followersList = document.querySelector(".followersList");
  followersList.innerHTML = "";
  for (let item of obj.followers) {
    let li = document.createElement("li");
    let img = document.createElement("img");
    img.src = item;
    img.classList.add("childImage");
    li.append(img);
    followersList.append(li);
  }

  let followingList = document.querySelector(".followingList");
  followingList.innerHTML = "";
  for (let item of obj.following) {
    let li = document.createElement("li");
    let img = document.createElement("img");
    img.src = item;
    img.classList.add("childImage");
    li.append(img);
    followingList.append(li);
  }

}

let input = document.querySelector("input");
input.addEventListener("keyup", (event) => {
  if (event.keyCode == 13) {
    user = {
        avatar_link: "",
        name: "",
        handle: "",
        followers: [],
        following: [],
      };
    handleInput(event);
  }
});
