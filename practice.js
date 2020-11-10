var emp1 = {
  name: "John",
  age: 26,
  likes: ["Cars", " Sports", " Fun"]
};
document.getElementById("empName").innerHTML = emp1.name;
document.getElementById("empAge").innerHTML = emp1.age;
document.getElementById("empLikes").innerHTML = emp1.likes;

function Employee (name, age, likes) {
  this.name = name;
  this.age = age;
  this.likes = likes;
}

var employee2 = new Employee("Todd", 21, ["Learning", " Movies", " Music"]);

document.getElementById("ConsEmpName").innerHTML = employee2.name;
document.getElementById("ConsEmpAge").innerHTML = employee2.age;
document.getElementById("ConsEmpLikes").innerHTML = employee2.likes;

var scores = [];

function namesAndScores (fName, lName, score) {
  this.fName = fName;
  this.lName = lname;
  this.score = score;
}



document.getElementById("ConsEmpName").innerHTML = employee2.name;
document.getElementById("ConsEmpAge").innerHTML = employee2.age;
document.getElementById("ConsEmpLikes").innerHTML = employee2.likes;
