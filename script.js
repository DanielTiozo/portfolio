const dev = document.getElementById('dev');
const types = ['Web', 'Front End', 'JavaScript', 'React'];
const contact = document.querySelectorAll('.contact')


function write(str, done) {
    const char = str.split('').reverse();
    let typer = setInterval(() =>  {
        if (!char.length) {
            clearInterval(typer);
            return setTimeout(done, 600);
        }
        let next = char.pop();
        dev.innerHTML += next;
    }, 140);
}

function erase(done) {
    const char = dev.innerHTML;
    let nr = char.length;
    const typer = setInterval(() =>  {
        if (nr-- == 0) {
            clearInterval(typer);
            return done();
        }
        dev.innerHTML = char.slice(0, nr);
    }, 140);
}

function typewrite(conteudos, el) {
    let atual = -1;
    const next = (cb) => {
        if (atual < conteudos.length - 1) atual++;
        else atual = 0;
        const str = conteudos[atual];
        write(str, () => {
            erase(next);
        });
    }
    next(next);
}
typewrite(types);

contact.forEach((string) =>{
    string.addEventListener('mouseenter', () =>{
        
    })
})

