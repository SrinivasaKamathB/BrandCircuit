# BrandCircuit — Multimodal Pre-Flight CI/CD & Claims Ledger

<div align="center">

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Render%20Online-10b981?style=for-the-badge&logo=render&logoColor=white)](https://brandcircuit.onrender.com/)
[![Repository](https://img.shields.io/badge/GitHub-Repository-06b6d4?style=for-the-badge&logo=github&logoColor=white)](https://github.com/SrinivasaKamathB/BrandCircuit)
[![Round 2 MVP](https://img.shields.io/badge/Hackathon-Round%202%20The%20Build-8b5cf6?style=for-the-badge)](https://brandcircuit.onrender.com/)
[![Security](https://img.shields.io/badge/Security-WebCrypto%20SHA--256-blue?style=for-the-badge&logo=shield)](https://brandcircuit.onrender.com/)

**The Intelligent Pre-Publication Brand Governance Platform for Enterprise Content**  
*Built for the Inkloom AI Hackathon (Round 2 — The Build)*

[🌐 **Explore Live Application**](https://brandcircuit.onrender.com/) • [📄 **View Submission PDF**](./BrandCircuit_Round2_Submission.pdf) • [⚡ **Quick Start Guide**](#-quick-evaluator-walkthrough)

</div>

---

## 💡 The Problem: Content Entropy in the GenAI Era

Growing organizations publish content at unprecedented velocity across employees, agencies, and generative AI tools (ChatGPT, Midjourney, Jasper). This decentralized publishing leads to three structural enterprise failures:

1. **Unsubstantiated Promotional Claims:** GenAI frequently hallucinates statistics (e.g., *"10x faster"*, *"100% money-back guarantee with zero risk"*) that create legal liabilities and FTC regulatory penalties.
2. **Visual & Tone Drift:** Off-brand hex colors, crowded logos, and aggressive sales messaging damage credibility before anyone notices.
3. **The Creative vs. Compliance Deadlock:** Copywriters hate rigid compliance blockers that destroy marketing punch, while brand managers spend 15+ hours weekly proofreading routine social posts.

---

## ⚡ The Solution: BrandCircuit

**BrandCircuit** operates as a continuous compliance **Pre-Flight CI/CD Pipeline** for digital content. Instead of acting as an obstructive gatekeeper, it explains violations, validates factual assertions against a Single Source of Truth (SSOT), and uses multi-agent negotiation to synthesize intent-preserving creative rewrites.

```
[ Creator Draft / Banner Upload ]
               │
               ▼
[ Multimodal Pre-Flight Engine ]
  ├── 1. Verified Claims Ledger (Facts & Statistics Check)
  ├── 2. PR Blast Radius & Crisis Simulator (FTC Risk & Viral Backlash)
  ├── 3. Multimodal Visual DNA Inspector (Logo Clear-Space, ΔE Hex Drift, WCAG)
  └── 4. Maverick vs. Guardian Agent Debate (Growth vs. Compliance Compromise)
               │
               ▼
[ WebCrypto Cryptographic Brand Passport (SHA-256 Digest) ]
               │
               ▼
[ Production Publishing / Reviewer Sign-Off ]
```

---

## 📦 Core Completed Features (Round 2 MVP)

| Feature Pillar | Technical Implementation | Enterprise Impact |
| :--- | :--- | :--- |
| **1. Verified Claims Ledger (SSOT)** | Deconstructs text into discrete atomic assertions. Categorizes claims into 🟢 **Verified SSOT**, 🟡 **Needs Citation**, or 🔴 **Disputed Claim**. | Prevents false advertising and ensures single-source fact alignment. |
| **2. PR Blast Radius & Crisis Simulator** | Generates simulated viral Twitter/X backlash threads with community notes and estimates financial exposure under FTC §5 ($45,000). | Visualizes real-world business risks before hitting publish. |
| **3. Maverick vs. Guardian Debate** | Multi-agent negotiation between **The Maverick** (Growth Marketer) and **The Guardian** (Compliance Counsel) with 3 quick-click presets (*Strict Legal*, *Balanced*, *High Growth*). | Balances legal safety with high-converting marketing hooks. |
| **4. Multimodal Visual DNA Inspector** | Client-side HTML5 Canvas and FileReader analyzing image banners for **Logo Exclusion Zone**, **Color Drift ($\Delta E = 4.2$)**, and **WCAG AAA contrast (7.2:1)**. | Catches visual identity and accessibility violations in graphics. |
| **5. Cryptographic Brand Passport** | Mints real browser WebCrypto API (`crypto.subtle.digest`) **SHA-256 mathematical digests** once content achieves 100% compliance. | Tamper-proof certificate for automated CMS and social schedulers. |
| **6. Role-Based Workspaces** | Live header toggle between **Creator Drafting Mode** and **Reviewer Compliance Queue**. | Streamlines agency-to-enterprise review handoffs. |

---

## 🎯 Quick Evaluator Walkthrough (Test in 60 Seconds)

You can test the entire workflow live at **[https://brandcircuit.onrender.com/](https://brandcircuit.onrender.com/)** or locally:

1. **Load Risky Demo:** Click **`Load Risky Campaign (Violations)`** at the top right.
   * *Observe:* Compliance drops to **64% (Red)**; PR Crisis spikes to **87%** with a simulated Twitter backlash thread and FTC penalty estimate.
2. **Review Claims Ledger:** Scroll down to the **Verified Claims Ledger** to see atomic flags. Click **`Resolve`** next to the red claim.
3. **Agent Negotiation:** In the **Maverick vs. Guardian Debate**, click **`⚖️ Balanced`** or **`🚀 High Growth`**, then click **`Apply Fix`**.
   * *Observe:* Draft updates automatically; **Compliance jumps to 96% (Green)**; PR Crisis cools down to Low risk.
4. **Inspect Banner Graphics:** Click **`Upload Banner`** (or click **`Get Test Image`**), then click **`Inspect DNA`** to see the multimodal logo boundary and color drift overlay.
5. **Mint Brand Passport:** Click **`Certify & Mint Cryptographic Passport`** to generate a real mathematical SHA-256 seal for publishing.

---

## 🛠️ Technology Stack & Architecture

- **Frontend Application:** Single Page Application styled with Tailwind CSS, reactive state controls, and HTML5 Canvas inspection.
- **Backend Service:** Asynchronous Node.js v24 HTTP microserver (`server.js`) with zero external runtime dependencies for maximum portability.
- **AI & Reasoning Pipeline:** Multi-agent structured schema designed for Google Gemini multimodal vision and reasoning.
- **Cryptographic Security:** Browser WebCrypto API (`crypto.subtle.digest`) generating authentic SHA-256 content hashes.
- **Enterprise Hardening:** Production OWASP security headers (CSP, `nosniff`, `X-Frame-Options: DENY`, strict referrer policy, zero data retention).

---

## 🔄 Changes Made to Original Plan (Round 1 → Round 2)

During Round 1, our plan proposed static text highlighting and standard guideline lookup. In Round 2, we elevated the product with three deliberate design changes:

1. **From Passive Warnings to Consequence Simulation:** Replaced boring error labels with the *PR Blast Radius Simulator* to visualize the concrete cost of failure (viral backlash and FTC regulatory fines).
2. **From Rigid Overrides to Multi-Agent Negotiation:** Replaced robotic text replacements with the *Maverick vs. Guardian* debate and compromise engine, preserving creative conversion punch.
3. **From Status Flags to Cryptographic Passports:** Upgraded simple boolean approvals to mathematically verifiable SHA-256 digital passports for downstream API publishing pipelines.

---

## 🔮 Round 3 Mastermind Capabilities (Now Fully Implemented & Live)

All three enterprise capabilities proposed for Round 3 are now fully operational in the live product:

1. **👥 The 10-Persona Synthetic Audience & Regulatory Jury:**
   * Features 10 autonomous stakeholder personas (*FTC Auditor, Skeptical Enterprise Buyer, Competitor PR Strategist, Tech Critic, Gen-Z Trend Spotter, SEC Compliance Lead, WCAG Lead, Performance Marketer, Brand Guardian, Crisis PR Lead*).
   * Generates real-time **Virality (86/100)**, **Controversy Risk (14%)**, and **Sentiment Index (91%)** scorecards before ad distribution.
2. **🧬 Autonomous Self-Healing Playbook (Auto-PR to Git & Figma):**
   * Aggregates recurring team blindspots (e.g. 42% §4.1 warranty violation frequency).
   * Autonomously generates and dispatches GitHub Pull Requests (`docs/brand-guidelines.md`) and syncs design tokens into Figma (`tokens.json`).
3. **🌐 Zero-Knowledge Brand Verification (ZK-Proof) & Omnichannel Publishing Mesh:**
   * Generates a zk-SNARK cryptographic certificate proving brand clearance without leaking embargoed copy.
   * Simulates real-time authenticated webhooks with HTTP 200 responses to **LinkedIn Ads**, **X (Twitter)**, **Meta Business Suite**, and **Webflow CMS**.

---

## 💻 Local Installation & Setup

```bash
# Clone the repository
git clone https://github.com/SrinivasaKamathB/BrandCircuit.git
cd BrandCircuit

# Start the application
node server.js
```
Open **`http://localhost:3000`** in any modern web browser.

---

## 📜 License
Developed under the **MIT License** for the **Inkloom AI Hackathon (October 2026)**.
