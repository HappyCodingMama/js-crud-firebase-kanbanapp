var database = firebase.database();

function writeUserData(userId, name, desc) {
  database.ref('users/' + userId).set({
    username: name,
    desc: desc,
  });
}
