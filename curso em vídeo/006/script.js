function send() {
    tabuada.innerHTML = null

    var c = 1
    var num = document.getElementById('inum');

    for (cont = num.value; c <= 10; c++)
    tabuada.innerHTML += `${cont} x ${c} = ${cont*c} <br>`
}
