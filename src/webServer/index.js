const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
  if (req.url === '/') {
    getTitle(res);
  }
}).listen(8080, () => {
  console.log('Server is on 8080');
});


function getTitle(res) {
  fs.readFile('src/webServer/titles.json', (err, data) => {
    if (err) {
      return hadError(err, res);
    }

    getTemplate(JSON.parse(data.toString()), res);
  });
}

function getTemplate(titles, res) {
  fs.readFile('src/webServer/template.html', (err, data) => {
    if (err) {
      return hadError(err, res);
    }
    formatHtml(titles, data.toString(), res);
  });
}

function formatHtml(titles, tmpl, res) {
  const html = tmpl.replace('%', titles.join('</li><li>'));
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(html);
}

function hadError(err, res) {
  console.error(err);
  res.end(err);
}