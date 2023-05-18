let pessoas = document.getElementById('count.value')

document.addEventListener("keydown", function(){
    pessoas = Number(pessoas)
    pessoas++
    document.getElementById('count').innerText = pessoas
})