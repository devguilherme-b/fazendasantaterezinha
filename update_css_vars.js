const fs = require('fs');
const path = require('path');

const replacements = {
    '--verde-musgo': '--fst-verde-musgo',
    '--verde-oliva': '--fst-verde-oliva',
    '--verde-sage': '--fst-verde-sage',
    '--cafe-terra': '--fst-cafe-terra',
    '--ouro-vintage': '--fst-ouro-vintage',
    '--marfim': '--fst-marfim',
    '--bege-palha': '--fst-bege-palha',
    '--terra-roxa': '--fst-terra-roxa',
    '--font-display': '--fst-font-display',
    '--font-body': '--fst-font-body',
    '--transition': '--fst-transition'
};

const dir = path.join(__dirname, 'src', 'app', 'components');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.ts')).map(f => path.join(dir, f));
files.push(path.join(__dirname, 'src', 'styles.css'));

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;
    for (const [oldVar, newVar] of Object.entries(replacements)) {
        content = content.split(oldVar).join(newVar);
    }
    if (content !== original) {
        fs.writeFileSync(file, content, 'utf8');
        console.log('Updated ' + file);
    }
});
