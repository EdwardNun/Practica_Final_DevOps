const fs = require('fs');

test('La página debe contener el texto "Hola Mundo"', () => {
    const html = fs.readFileSync('src/index.html', 'utf8');
    expect(html).toMatch(/Hola Mundo/);
});
