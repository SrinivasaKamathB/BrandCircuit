const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const PUBLIC_DIR = path.join(__dirname, 'public');

const MIME_TYPES = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.pdf': 'application/pdf',
  '.svg': 'image/svg+xml'
};

const server = http.createServer((req, res) => {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  const url = req.url.split('?')[0];

  // API Endpoints
  if (url === '/api/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 'ok', service: 'BrandCircuit Engine', version: '2.0.0' }));
    return;
  }

  if (url === '/api/check' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({
        compliance_score: 64,
        violations: [
          { rule: "§4.1 Absolute Guarantee", severity: "HIGH", text: "100% money-back guarantee with zero risk" },
          { rule: "§2.4 Unverified Metric", severity: "MEDIUM", text: "10x marketing output" }
        ],
        blast_radius: "HIGH_87%",
        verified_claims: ["SOC-2 Type II Certified & GDPR Compliant"]
      }));
    });
    return;
  }

  // Serve PDF from root if requested
  if (url === '/BrandCircuit_Hackathon_Plan.pdf') {
    const pdfPath = path.join(__dirname, 'BrandCircuit_Hackathon_Plan.pdf');
    if (fs.existsSync(pdfPath)) {
      res.writeHead(200, { 'Content-Type': 'application/pdf' });
      fs.createReadStream(pdfPath).pipe(res);
      return;
    }
  }

  // Static File Serving
  let filePath = path.join(PUBLIC_DIR, url === '/' ? 'index.html' : url);
  
  if (!filePath.startsWith(PUBLIC_DIR)) {
    res.writeHead(403);
    res.end('Forbidden');
    return;
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      // Fallback to index.html for SPA routing
      filePath = path.join(PUBLIC_DIR, 'index.html');
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    res.writeHead(200, { 'Content-Type': contentType });
    fs.createReadStream(filePath).pipe(res);
  });
});

server.listen(PORT, () => {
  console.log(`[BrandCircuit v2.0] Server running at http://localhost:${PORT}`);
});
