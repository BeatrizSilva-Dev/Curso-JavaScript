let num = [5,8,7,9,3]
console.log(`Nosso vetor é o ${num}`);
let pos = num.indexOf(4)
if (pos == -1) {
    console.log('O valor não foi encontrado');
} else {
    console.log(`O valor está na posição ${pos}`);
}
//num[5] = 6
//num.push(6) // adiciona no final da lista
//console.log(`Nosso vetor é o ${num}`);
//console.log(`O vetor tem ${num.length} posições`);
//num.sort() // coloca a lista em ordem
//console.log(`Nosso vetor é o ${num}`);
for (let pos = 0; pos < num.length; pos++) {
    console.log(num[pos]);
    
}