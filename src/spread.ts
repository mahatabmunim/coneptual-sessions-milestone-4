const arr = [1,2,3,4,5,6,7,8];
const newArr = [...arr];
newArr.push(9)
newArr.push(10)

console.log(newArr);
console.log("Original array: ", arr);


const user = {
    name: "Munim",
    age: 342,
    city: "Barisal"
}

const newUser = {...user, image:"fdg"};
newUser.image = "url----"

console.log(newUser);
console.log("Original user: ", user);