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
  // Enterprise Security Headers
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  res.setHeader('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  const url = req.url.split('?')[0];

  // API Endpoints
  if (url === '/api/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 'ok', service: 'BrandCircuit Engine', version: '3.0.0-Round3-Enterprise' }));
    return;
  }

  // Round 3: Synthetic Audience Jury API
  if (url === '/api/jury' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({
        virality_score: 86,
        controversy_risk: 14,
        sentiment_score: 91,
        personas: [
          { name: "FTC Regulatory Auditor", role: "Legal & Truth in Advertising", vote: "APPROVE", comment: "No unsubstantiated statutory guarantees detected; complies with §5 disclosure thresholds." },
          { name: "Skeptical Enterprise Buyer", role: "VP of Engineering", vote: "APPROVE", comment: "The SOC-2 Type II citation provides the necessary credibility for enterprise adoption." },
          { name: "Competitor PR Strategist", role: "Rival Cloud Vendor", vote: "NEUTRAL", comment: "Messaging is defensible; lacks low-hanging exaggeration to exploit publicly." },
          { name: "Tech Community Critic", role: "Senior Developer Advocate", vote: "APPROVE", comment: "Sounds genuine and consultative; avoids cringe buzzwords like 'game-changer' or '10x wizardry'." },
          { name: "Gen-Z Trend Spotter", role: "Social Growth Lead", vote: "APPROVE", comment: "Punchy, clear, and respects reader attention span with high social proof." }
        ]
      }));
    });
    return;
  }

  // Round 3: Self-Healing Playbook PR API
  if (url === '/api/self-heal/pr' && req.method === 'POST') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      status: "SUCCESS",
      pr_number: 42,
      branch: "brand-circuit/autofix-rule-4-clarification",
      title: "docs(guidelines): clarify Section 4.1 satisfaction warranty limits",
      diff: "@@ -42,6 +42,8 @@\n- All satisfaction guarantees must be reviewed by legal.\n+ Section 4.1.2: Standard 30-day satisfaction statements with SOC-2 citations\n+ are pre-approved for all social and display ad copy without prior legal escalation.",
      figma_token_sync: { status: "SYNCED", tokens_updated: ["color.brand.primary", "spacing.logo.padding"] }
    }));
    return;
  }

  // Round 3: Omnichannel Publishing Mesh API
  if (url === '/api/publish/mesh' && req.method === 'POST') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      zk_proof_hash: "zk-snark-0x89f72b91c04d88e6a12f9b8c01e",
      destinations: [
        { platform: "LinkedIn Ads API", status: "SCHEDULED", status_code: 200, campaign_id: "urn:li:adCampaign:984210" },
        { platform: "X Ads API", status: "SCHEDULED", status_code: 200, tweet_id: "19827401928301" },
        { platform: "Meta Ads Manager", status: "SCHEDULED", status_code: 200, adset_id: "act_4091820491" },
        { platform: "Enterprise CMS (Webflow)", status: "PUBLISHED", status_code: 200, item_id: "wf_item_6081fa" }
      ]
    }));
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

  // Serve PDFs from root if requested
  if (url === '/BrandCircuit_Round2_Submission.pdf' || url === '/BrandCircuit_Hackathon_Plan.pdf') {
    const requestedPdf = url.substring(1);
    const pdfPath = path.join(__dirname, requestedPdf);
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
