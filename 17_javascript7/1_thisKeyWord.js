/*this keyword refersto an object that is executing current piece of code  */

const details = {
  name: "Sarvjeet",
  age: 21,
  eng: 93,
  math: 95,
  phy: 100,
  average() {
    let avg = (this.eng + this.math + this.phy) / 3;
    console.log(`${this.name} got average marks of  ${avg}`);
  },
};
details.average()