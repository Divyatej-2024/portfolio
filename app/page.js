'use client';
import { useEffect } from 'react';
import './globals.css';
export default function HomePage() {
  useEffect(() => {
// Inject the full portfolio page dynamically
document.body.innerHTML = `
  <div class="container">
    <header>
  <div class="brand">
    <div class="avatar">DT</div>
    <div>
      <div style="font-weight:700">Divya Tej Pendela</div>
      <div style="font-size:13px;color:var(--muted)">BSc (Hons) Cybersecurity — Software & ML</div>
    </div>
  </div>
  
  <!-- Mobile Menu Toggle -->
  <button class="menu-toggle" id="menuToggle" aria-label="Toggle navigation">
    ☰
  </button>
  
  <nav aria-label="Primary" id="mainNav">
    <a href="#/" data-link class="nav-link active">Home</a>
    <a href="#/about" data-link class="nav-link">About</a>
    <a href="#/projects" data-link class="nav-link">Projects</a>
    <a href="#/skills" data-link class="nav-link">Skills</a>
    <a href="#/certificates" data-link class="nav-link">Certificates</a>
    <a href="#/contact" data-link class="nav-link">Contact</a>
  </nav>
</header>

    <main id="app">
      <!-- dynamic content will be injected here -->
    </main>

    <footer>
      <div class="micro">
        <a href="https://www.linkedin.com/in/divya-tej-pendela-50ab98291" target="_blank">LinkedIn</a>
        <a href="https://portfolio-divya-tej-pendela.vercel.app/" target="_blank">Live Portfolio</a>
        <a href="#/projects" data-link>GitHub</a>
      </div>
      <div style="margin-top:8px;color:var(--muted)">Made with focus on clarity • © Divya Tej Pendela</div>
    </footer>
  </div>

  <!-- Templates for each "page" -->
  <template id="tpl-home">
    <section class="hero">
      <div>
        <div class="eyebrow">Graduate Cybersecurity • Software & ML</div>
        <h1>Hi — I'm Divya, a Cybersecurity & Software Developer.</h1>
        <p class="lead">I build secure web apps, ML models for threat detection, and infrastructure designs for scalable networks. I’m graduating in May 2026 and seeking graduate roles in FinTech and software engineering.</p>
        <div style="margin-top:12px">
          <a class="btn" href="#/projects" data-link>View Projects</a>
          <a style="margin-left:10px;color:var(--muted);text-decoration:none" href="#/contact" data-link>Contact</a>
          <span style="margin-left:12px" class="badge">Available Sep 2026</span>
        </div>

        <div class="grid" style="margin-top:18px">
          <div class="card">
            <strong>Availability</strong>
            <div style="color:var(--muted);margin-top:6px">Full-time from Sep 2026 • Eligible to work in UK</div>
          </div>
          <div class="card">
            <strong>Current</strong>
            <div style="color:var(--muted);margin-top:6px">British Applied College & Teesside University — Research Intern (ML for email security)</div>
          </div>
          <div class="card">
            <strong>Contact</strong>
            <div style="color:var(--muted);margin-top:6px">pdivyatej2003@gmail.com • 07776751102</div>
          </div>
        </div>
      </div>

      <aside>
<div class="card">
  <h3 style="margin-top:0">Snapshot</h3>
  <p class="lead" style="margin-top:6px;color:var(--muted)">Python · JavaScript · ML · PenTesting · IPv6 · Secure APIs</p>
  <p style="margin-top:8px;font-size:14px;color:var(--accent)">✓ 24 Microsoft Certifications</p>
  <div style="margin-top:12px"><a class="btn" href="#/certificates" data-link>View Certificates</a></div>
</div>

        <div class="card" style="margin-top:12px">
          <strong>Quick Links</strong>
          <div style="margin-top:8px;color:var(--muted);font-size:14px">CV • Portfolio • GitHub</div>
        </div>
      </aside>
    </section>
  </template>

  <template id="tpl-about">
    <section>
      <h2>About Me</h2>
      <p class="lead">I’m a BSc (Hons) Cybersecurity student at Teesside University (graduating May 2026). My work blends software development and security: I’ve built full-stack web apps, implemented ML models for phishing detection, and designed enterprise network infrastructure with IPv6.</p>
      <div class="grid">
        <div class="card">
          <strong>Education</strong>
          <div style="color:var(--muted);margin-top:6px">Teesside University — BSc (Hons) Cybersecurity (2:1 predicted)</div>
        </div>
       <div class="card">
  <strong>Certifications</strong>
  <div style="color:var(--muted);margin-top:6px">24 Microsoft Learn (Security, Cloud, M365), Cisco, Kaggle Python, Cybersecurity job simulations (JPMorgan, Mastercard, PwC)</div>
</div>
        <div class="card">
          <strong>Interests</strong>
          <div style="color:var(--muted);margin-top:6px">FinTech, secure systems, ML for security, backend engineering</div>
        </div>
      </div>
    </section>
  </template>

  <template id="tpl-projects">
    <section>
      <h2>Projects (brief)</h2>
      <div class="project card">
        <h3>ML-Based Phishing Detector — Research</h3>
        <div class="tags"><span class="tag">Python</span><span class="tag">Random Forest</span><span class="tag">SVM</span><span class="tag">Data Processing</span></div>
        <p style="color:var(--muted)">Built preprocessing pipeline and compared Random Forest vs SVM models to classify phishing emails. Focused on precision and enterprise deployment considerations.</p>
      </div>

      <div class="project card" style="margin-top:12px">
        <h3>Full-Stack E-Commerce Mock</h3>
        <div class="tags"><span class="tag">HTML</span><span class="tag">JavaScript</span><span class="tag">MySQL</span></div>
        <p style="color:var(--muted)">Dynamic product catalog, cart logic, and mock payment flow—designed secure authentication and basic backend endpoints.</p>
      </div>

      <div class="project card" style="margin-top:12px">
        <h3>Data Centre IPv6 Plan</h3>
        <div class="tags"><span class="tag">Networking</span><span class="tag">IPv6</span><span class="tag">Design</span></div>
        <p style="color:var(--muted)">Enterprise addressing using 2001:db8:abcd::/48 with /64 subnets for VLANs, routing and firewall rules documented.</p>
      </div>

      <p style="margin-top:12px;color:var(--muted)">For full repos and write-ups, link to GitHub on the live portfolio.</p>
    </section>
  </template>

   <template id="tpl-certificates">
  <section>
    <h2>Microsoft Learn Certifications</h2>
    <p class="lead">I've completed over 20+ Microsoft Learn certifications focusing on cloud security, identity management, threat protection, and Microsoft 365 solutions.</p>
    
    <!-- Certification Counter Badge -->
    <div style="background: linear-gradient(90deg, var(--accent), #00f5a0); color: #021018; padding: 8px 16px; border-radius: 8px; display: inline-block; margin-bottom: 20px; font-weight: 700;">
      24 Microsoft Certifications
    </div>

    <!-- Filter Buttons -->
    <div class="tags" style="margin-bottom: 20px;">
      <button class="tag filter-btn active" data-filter="all">All</button>
      <button class="tag filter-btn" data-filter="identity">Identity</button>
      <button class="tag filter-btn" data-filter="security">Security</button>
      <button class="tag filter-btn" data-filter="cloud">Cloud</button>
      <button class="tag filter-btn" data-filter="m365">M365</button>
      <button class="tag filter-btn" data-filter="operations">Operations</button>
    </div>

    <!-- Certifications Grid -->
    <div class="certifications-grid">
      <!-- Identity & Access Management -->
      <div class="cert-card" data-category="identity">
        <div class="cert-header">
          <span class="cert-category">Identity & Access</span>
          <span class="cert-date">Aug 2025</span>
        </div>
        <h3>Modernizing Identity and Data Security</h3>
        <p class="cert-subtitle">Interactive Case Study • Microsoft Learn</p>
        <div class="tags">
          <span class="tag">Azure Security</span>
          <span class="tag">Entra ID</span>
          <span class="tag">Zero Trust</span>
        </div>
      </div>

      <div class="cert-card" data-category="identity">
        <div class="cert-header">
          <span class="cert-category">Identity & Access</span>
          <span class="cert-date">Aug 2025</span>
        </div>
        <h3>Modernizing User Access Control</h3>
        <p class="cert-subtitle">Interactive Case Study • Microsoft Learn</p>
        <div class="tags">
          <span class="tag">Access Control</span>
          <span class="tag">Threat Resilience</span>
        </div>
      </div>

      <div class="cert-card" data-category="identity">
        <div class="cert-header">
          <span class="cert-category">Identity & Access</span>
          <span class="cert-date">Dec 2024</span>
        </div>
        <h3>Manage Identities in Microsoft Entra ID</h3>
        <p class="cert-subtitle">Microsoft Learn</p>
        <div class="tags">
          <span class="tag">Entra ID</span>
          <span class="tag">IAM</span>
        </div>
      </div>

      <!-- Security & Threat Protection -->
      <div class="cert-card" data-category="security">
        <div class="cert-header">
          <span class="cert-category">Threat Protection</span>
          <span class="cert-date">Aug 2025</span>
        </div>
        <h3>Introduction to Microsoft Defender XDR</h3>
        <p class="cert-subtitle">Microsoft Learn</p>
        <div class="tags">
          <span class="tag">Defender XDR</span>
          <span class="tag">Threat Protection</span>
        </div>
      </div>

      <div class="cert-card" data-category="security">
        <div class="cert-header">
          <span class="cert-category">Security</span>
          <span class="cert-date">Jun 2025</span>
        </div>
        <h3>Microsoft Sentinel Security Capabilities</h3>
        <p class="cert-subtitle">Microsoft Learn</p>
        <div class="tags">
          <span class="tag">Sentinel</span>
          <span class="tag">SIEM</span>
        </div>
      </div>

      <div class="cert-card" data-category="security">
        <div class="cert-header">
          <span class="cert-category">Security</span>
          <span class="cert-date">Oct 2024</span>
        </div>
        <h3>Design Solutions for Security Operations</h3>
        <p class="cert-subtitle">Microsoft Learn</p>
        <div class="tags">
          <span class="tag">SecOps</span>
          <span class="tag">Design</span>
        </div>
      </div>

      <!-- Cloud Security & Architecture -->
      <div class="cert-card" data-category="cloud">
        <div class="cert-header">
          <span class="cert-category">Cloud Security</span>
          <span class="cert-date">Dec 2024</span>
        </div>
        <h3>Design Solutions for Securing Data</h3>
        <p class="cert-subtitle">Microsoft Learn</p>
        <div class="tags">
          <span class="tag">Data Security</span>
          <span class="tag">Cloud</span>
        </div>
      </div>

      <div class="cert-card" data-category="cloud">
        <div class="cert-header">
          <span class="cert-category">Cloud Security</span>
          <span class="cert-date">Jul 2024</span>
        </div>
        <h3>Introduction to Zero Trust</h3>
        <p class="cert-subtitle">Microsoft Learn</p>
        <div class="tags">
          <span class="tag">Zero Trust</span>
          <span class="tag">Frameworks</span>
        </div>
      </div>

      <!-- Microsoft 365 -->
      <div class="cert-card" data-category="m365">
        <div class="cert-header">
          <span class="cert-category">Microsoft 365</span>
          <span class="cert-date">Mar 2025</span>
        </div>
        <h3>Design Solutions for Securing M365</h3>
        <p class="cert-subtitle">Microsoft Learn</p>
        <div class="tags">
          <span class="tag">M365 Security</span>
          <span class="tag">Design</span>
        </div>
      </div>

      <div class="cert-card" data-category="m365">
        <div class="cert-header">
          <span class="cert-category">Microsoft 365</span>
          <span class="cert-date">Jun 2025</span>
        </div>
        <h3>Microsoft 365 Collaboration Solutions</h3>
        <p class="cert-subtitle">Microsoft Learn</p>
        <div class="tags">
          <span class="tag">M365</span>
          <span class="tag">Collaboration</span>
        </div>
      </div>

      <!-- Compliance & Operations -->
      <div class="cert-card" data-category="operations">
        <div class="cert-header">
          <span class="cert-category">Compliance</span>
          <span class="cert-date">Oct 2024</span>
        </div>
        <h3>Design Solutions for Regulatory Compliance</h3>
        <p class="cert-subtitle">Microsoft Learn</p>
        <div class="tags">
          <span class="tag">Compliance</span>
          <span class="tag">Governance</span>
        </div>
      </div>

      <!-- View All Button -->
      <div class="cert-card view-all">
        <div class="cert-header">
          <span class="cert-category">All Certifications</span>
          <span class="cert-date">2024-2025</span>
        </div>
        <h3>View Complete List</h3>
        <p class="cert-subtitle">24 Microsoft Learn achievements including cloud fundamentals, security design, and case studies</p>
        <div class="tags">
          <span class="tag">Microsoft Certified</span>
          <span class="tag">Verified</span>
        </div>
      </div>
    </div>

    <!-- Summary Stats -->
    <div class="grid" style="margin-top: 30px;">
      <div class="card">
        <strong>Certification Areas</strong>
        <div style="color: var(--muted); margin-top: 6px;">Identity • Cloud Security • Threat Protection • M365 • Compliance</div>
      </div>
      <div class="card">
        <strong>Verification</strong>
        <div style="color: var(--muted); margin-top: 6px;">All certificates verified by Microsoft Learn • Available upon request</div>
      </div>
      <div class="card">
        <strong>Timeline</strong>
        <div style="color: var(--muted); margin-top: 6px;">Jul 2024 → Aug 2025 • Progressive learning path</div>
      </div>
    </div>
  </section>
</template>
 <template id="tpl-skills">
  <section>
    <h2>Skills</h2>
    <div class="grid">
      <div class="card">
        <strong>Programming & Development</strong>
        <div style="color:var(--muted);margin-top:6px">Python · JavaScript · SQL · Bash · HTML/CSS · Git</div>
      </div>
      <div class="card">
        <strong>Security & Cybersecurity</strong>
        <div style="color:var(--muted);margin-top:6px">Penetration Testing · Incident Response · Vulnerability Assessment · Firewalls · Zero Trust</div>
      </div>
      <div class="card">
        <strong>Microsoft & Cloud Tools</strong>
        <div style="color:var(--muted);margin-top:6px">Microsoft Entra ID · Defender XDR · Sentinel · M365 Security · Azure Security</div>
      </div>
    </div>
    
    <div style="margin-top: 30px;">
      <h3>Certified Knowledge Areas</h3>
      <div class="grid" style="margin-top: 15px;">
        <div class="card">
          <strong>Identity & Access Management</strong>
          <div style="color:var(--muted);margin-top:6px">Microsoft Entra ID · Authentication · Authorization · Privileged Access</div>
        </div>
        <div class="card">
          <strong>Cloud Security Architecture</strong>
          <div style="color:var(--muted);margin-top:6px">Zero Trust · CAF · WAF · MCRA · Cloud Security Benchmark</div>
        </div>
        <div class="card">
          <strong>Threat Protection</strong>
          <div style="color:var(--muted);margin-top:6px">Defender XDR · Sentinel · Cloud Apps Security · Ransomware Defense</div>
        </div>
      </div>
    </div>
  </section>
</template>
  <template id="tpl-contact">
    <section>
      <h2>Contact</h2>
      <p class="lead">Feel free to reach out for graduate roles, collaborations, or project enquiries.</p>
      <form onsubmit="event.preventDefault();var name=document.getElementById('name').value||'Visitor';var email=document.getElementById('email').value||'';var msg=document.getElementById('msg').value||'';var subject=encodeURIComponent('Portfolio message from '+name);var body=encodeURIComponent('Name: '+name+'\\nEmail: '+email+'\\n\\n'+msg);window.location.href='mailto:pdivyatej2003@gmail.com?subject='+subject+'&body='+body;">
        <label for="name">Name</label>
        <input id="name" placeholder="Your name" />
        <label for="email">Email</label>
        <input id="email" placeholder="you@example.com" />
        <label for="msg">Message</label>
        <textarea id="msg" rows="4" placeholder="Short message"></textarea>
        <div style="margin-top:10px"><button class="btn">Send message</button></div>
      </form>
    </section>
  </template>
`;

// ROUTER
const routes = {
  '/': 'tpl-home',
  '/about': 'tpl-about',
  '/projects': 'tpl-projects',
  '/skills': 'tpl-skills',
  '/certificates':'tpl-certificates',
  '/contact': 'tpl-contact'
};
function setActiveNav(path){
    document.querySelectorAll('.nav-link').forEach(a=>a.classList.remove('active'));
    const link = document.querySelector(`nav a[href="#${path}"]`);
    if(link) link.classList.add('active');
  }

  function render(){
    const hash = location.hash.replace('#','') || '/';
    const tplId = routes[hash] ? routes[hash] : 'tpl-home';
    const tpl = document.getElementById(tplId);
    const app = document.getElementById('app');
    app.innerHTML = tpl.innerHTML;
    setActiveNav(hash);
     if (hash === '/certificates') {
      setTimeout(initCertificatesFilter, 50);
    }
    
    // small UX: focus first heading
    const h = app.querySelector('h2, h1'); 
    if(h) h.tabIndex = -1; 
    try{h && h.focus()}catch(e){}

  }
     function initCertificatesFilter() {
    // Set all filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    if (filterButtons.length > 0) {
      filterButtons.forEach(btn => btn.classList.remove('active'));
      document.querySelector('.filter-btn[data-filter="all"]')?.classList.add('active');
      
      // Add click listeners
      filterButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
          e.preventDefault();
          
          // Update active button
          filterButtons.forEach(b => b.classList.remove('active'));
          this.classList.add('active');
          
          // Filter certifications
          const filter = this.dataset.filter;
          const certs = document.querySelectorAll('.cert-card');
          
          certs.forEach(cert => {
            if (filter === 'all' || cert.dataset.category === filter || cert.classList.contains('view-all')) {
              cert.style.display = 'block';
            } else {
              cert.style.display = 'none';
            }
          });
        });
      });
    }
  }
    const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');

if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    mainNav.classList.toggle('active');
    menuToggle.textContent = mainNav.classList.contains('active') ? '✕' : '☰';
  });
  
  // Close menu when clicking a link
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 900) {
        mainNav.classList.remove('active');
        menuToggle.textContent = '☰';
      }
    });
  });
  
  // Close menu on window resize
  window.addEventListener('resize', () => {
    if (window.innerWidth > 900) {
      mainNav.classList.remove('active');
      menuToggle.textContent = '☰';
    }
  });
}
document.addEventListener('click', e => {
  const a = e.target.closest('a[data-link]');
  if (!a) return;
  e.preventDefault();
  const href = a.getAttribute('href');
  location.hash = href.replace('#','');
});

window.addEventListener('hashchange', render);
window.addEventListener('DOMContentLoaded', render);
  },[]);
  return null;
}
