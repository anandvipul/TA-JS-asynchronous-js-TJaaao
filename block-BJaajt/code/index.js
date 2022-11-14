//User Class for creating a github user
class User {
  constructor(str) {
    let temp = JSON.parse(str);
    this.avatarLink = temp.avatar_url;
    this.userName = temp.name;
    this.handle = temp.login;
    this.numFollowers = temp.followers;
    this.numFollowing = temp.following;
    this.followers = [1,2,34];
    this.following = [];
  }

  static getFollowers() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", `https://api.github.com/users/${this.userName}/followers`);
    xhr.onload = function () {
        let temp = JSON.parse(xhr.response);
        for (let item of temp) {
            console.log(this.followers);
        }

    };
    xhr.send();
  }

  static getFollowing() {
    // let xhr = new XMLHttpRequest();
    // xhr.open("GET", `https://api.github.com/users/${this.userName}/following`);
    // JSON.parse(xhr.response).foreach((item) => {
    //   this.following.push(item.avatar_url);
    // });
  }

  create() {
    User.getFollowers();
    User.getFollowing();
  }

  // get followers() {
  //     return this.followers;
  // }

  // get following() {
  //     return this.following;
  // }
}

function handleInput(event) {
  console.log(event.target.value);
}

function xhrRequestHandler(string) {
  let xhr = new XMLHttpRequest();
  xhr.open(`GET`, `https://api.github.com/users/${string}`);
}

function updateUI(userName, userId, avatarLink, followerList, folloingList) {}

let input = document.querySelector("input");
input.addEventListener("keyup", (event) => {
  handleInput(event);
});

let xhr = new XMLHttpRequest();
xhr.open(`GET`, `https://api.github.com/users/anandvipul`);

xhr.onload = function () {
  let aa = new User(xhr.response);
  aa.create();
};
xhr.send();

// let aa = new User(xhr.response);
