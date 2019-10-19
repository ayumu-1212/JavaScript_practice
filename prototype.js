var Member = function(firstName, lastName){
  this.firstName = firstName;
  this.lastName = lastName;
};

Member.prototype.getName = function() {
  return this.lastName + " " + this.firstName;
};

var mem = new Member("歩夢", "安部");
console.log(mem.getName());
