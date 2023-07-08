// Model - Person
function Person(name, age) {
    this.name = name;
    this.age = age;
  
    this.getName = function() {
      return this.name;
    };
  
    this.setName = function(name) {
      this.name = name;
    };
  
    this.getAge = function() {
      return this.age;
    };
  
    this.setAge = function(age) {
      this.age = age;
    };
}

module.exports = Person