//1. forEach(): O Anunciante de Hobbies
const hobbies = ["jogar", "comer", "dormir", "nada", "correr"];

hobbies.forEach(function(hobby){
    console.log("oi sou o hobbie " + hobby + "!");
});

//2. map(): O Transformador de Hobbies
const bookTitles = hobbies.map(function(hobby) {
    return "O incrível mundo de " + hobby;
    });
    console.log(bookTitles);

//3. filter(): O Caçador de Hobbies Especiais
    const hobby = hobbies.filter((hobby) => hobby.length > 4)
        console.log(hobby);

//4. findIndex(): O Localizador de Posições
const runningPosition = hobbies.findIndex(function(hobby) {
    return hobby === 'jogar';
    });
    console.log("Correr está na posição: " + runningPosition);

//5. reduce(): O Grande Somador de Hobbies
const allHobbies = hobbies.reduce(function(accumulator, hobby) {
    return accumulator + hobby + " e "; }, "");
        
    console.log("Goste de " + allHobbies);

//6. some(): A Varinha Mágica de Verificação
const hasVHobby = hobbies.some((hobby) => hobby.length > 8)
    console.log("Eu tenho um hobby com mais de 8 letras? " + hasVHobby);

//7. every(): O Escudo Protetor
const todosHobbiesEmMinusculas = hobbies.every(hobby => hobby[0] === hobby[0].toLowerCase());

if (todosHobbiesEmMinusculas) {
  console.log('Todos os hobbies começam com letras minúsculas.');
} else {
  console.log('Pelo menos um hobby não começa com letra minúscula.');
}

//8. find(): O Farol no Nevoeiro
const hobbyComZ = hobbies.find(hobby => hobby.includes('z'));
if (hobbyComZ) {
  console.log(`Encontrou o hobby com a letra 'z': ${hobbyComZ}`);
} else {
  console.log('Nenhum hobby contém a letra "z".');
}

//9. slice(): O Mágico das Fatias
const firstThreeHobbies = hobbies.slice(1, 3); console.log("Meus três primeiros hobbies são: ",
firstThreeHobbies);