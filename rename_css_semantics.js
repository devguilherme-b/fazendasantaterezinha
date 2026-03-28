const fs = require('fs');
const path = require('path');

const replacements = {
    '--fst-verde-musgo': '--fst-color-primary',
    '--fst-verde-oliva': '--fst-color-secondary',
    '--fst-verde-sage': '--fst-color-tertiary',
    '--fst-cafe-terra': '--fst-color-accent',
    '--fst-ouro-vintage': '--fst-color-highlight',
    '--fst-marfim': '--fst-color-bg-primary',
    '--fst-bege-palha': '--fst-color-bg-secondary',
    '--fst-terra-roxa': '--fst-color-bg-tertiary',
    '--fst-font-display': '--fst-font-primary',
    '--fst-font-body': '--fst-font-secondary',
    '--fst-transition': '--fst-transition-base'
};

const dir = path.join(__dirname, 'src', 'app', 'components');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.ts')).map(f => path.join(dir, f));
files.push(path.join(__dirname, 'src', 'styles.css'));

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;

    for (const [oldVar, newVar] of Object.entries(replacements)) {
        // Regex ensures we match the exact variable name and not a substring of it
        const regex = new RegExp(oldVar + '(?![\\\\w-])', 'g');
        content = content.replace(regex, newVar);
    }
    
    if (content !== original) {
        fs.writeFileSync(file, content, 'utf8');
        console.log('Updated ' + file);
    }
});
