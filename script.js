var dev = document.getElementById('dev');
var types = ['Web', 'Front End', 'JavaScript', 'React'];

function escrever(str, done) {
    var char = str.split('').reverse();
    var typer = setInterval(() =>  {
        if (!char.length) {
            clearInterval(typer);
            return setTimeout(done, 600);
        }
        var next = char.pop();
        dev.innerHTML += next;
    }, 140);
}

function limpar(done) {
    var char = dev.innerHTML;
    var nr = char.length;
    var typer = setInterval(() =>  {
        if (nr-- == 0) {
            clearInterval(typer);
            return done();
        }
        dev.innerHTML = char.slice(0, nr);
    }, 140);
}

function rodape(conteudos, el) {
    var atual = -1;
    function prox(cb){
        if (atual < conteudos.length - 1) atual++;
        else atual = 0;
        var str = conteudos[atual];
        escrever(str, () => {
            limpar(prox);
        });
    }
    prox(prox);
}
rodape(types);