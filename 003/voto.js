var idade = 10
if (idade < 16) {
    console.log('você não tem idade para votar')
} else if (idade >= 16 && idade < 18 || idade > 65){
        console.log('voto opcional')
    } else {
        console.log('você é obrigado a votar')
}