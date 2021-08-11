const idLength = 5;

let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let capitals = ["A", "B", "C", "D", "E", "F", "G", "H"];
let smalls = ["a", "b", "c", "d", "e", "f", "g", "h"];
let all = [...numbers, ...capitals, ...smalls];

let generatedID = [];

function generateRandomIndex(id) {
  return all.length * id;
}

function generate() {
  let gen = [];
  for (let y = 0; y < idLength; y++) {
    let generated = generateRandomIndex(Math.random());
    generatedID.push(generated.toString());
    let id = Math.floor(Number(generatedID[y]));
    gen.push(all[id]);
  }

  return gen;
}

let a = generate().join("");

console.log(a);
