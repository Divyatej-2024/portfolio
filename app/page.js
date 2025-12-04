'use client';
import { useEffect } from 'react';
import 'globals.css';
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
          <div style="font-size:13px;color:#98a0ad">BSc (Hons) Cybersecurity — Software & ML</div>
        </div>
      </div>
      <nav aria-label="Primary">
        <a href="#/" data-link class="nav-link active">Home</a>
        <a href="#/about" data-link class="nav-link">About</a>
        <a href="#/projects" data-link class="nav-link">Projects</a>
        <a href="#/skills" data-link class="nav-link">Skills</a>
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
      <div style="margin-top:8px;color:#98a0ad">Made with focus on clarity • © Divya Tej Pendela</div>
    </footer>
  </div>

  <!-- Templates for each "page" -->
  <template id="tpl-home">
    <section class="hero">
      <div>
        <h1>Hi — I'm Divya, a Cybersecurity & Software Developer.</h1>
        <p style="color:#98a0ad">I build secure web apps, ML models for threat detection, and infrastructure designs for scalable networks. Graduating May 2026, seeking graduate roles in FinTech/software engineering.</p>
        <p style="margin-top:12px">
          <a class="btn" href="#/projects" data-link>View Projects</a> 
          <a style="margin-left:10px;color:#98a0ad;text-decoration:none" href="#/contact" data-link>Contact</a>
        </p>

        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:16px;margin-top:18px">
          <div style="background:rgba(255,255,255,0.03);padding:14px;border-radius:10px">
            <strong>Availability</strong>
            <div style="color:#98a0ad;margin-top:6px">Full-time from Sep 2026 • Eligible to work in UK</div>
          </div>
          <div style="background:rgba(255,255,255,0.03);padding:14px;border-radius:10px">
            <strong>Current</strong>
            <div style="color:#98a0ad;margin-top:6px">British Applied College & Teesside University — Research Intern (ML for email security)</div>
          </div>
          <div style="background:rgba(255,255,255,0.03);padding:14px;border-radius:10px">
            <strong>Contact</strong>
            <div style="color:#98a0ad;margin-top:6px">pdivyatej2003@gmail.com • 07776751102</div>
          </div>
        </div>
      </div>

      <aside>
        <div style="background:rgba(255,255,255,0.03);padding:14px;border-radius:10px;margin-top:12px">
          <h3 style="margin-top:0">Snapshot</h3>
          <p style="margin-top:6px;color:#98a0ad">Python · JavaScript · ML · PenTesting · IPv6 · Secure APIs</p>
          <div style="margin-top:12px"><a class="btn" href="#/about" data-link>Learn more</a></div>
        </div>

        <div style="background:rgba(255,255,255,0.03);padding:14px;border-radius:10px;margin-top:12px">
          <strong>Quick Links</strong>
          <div style="margin-top:8px;color:#98a0ad;font-size:14px">CV • Portfolio • GitHub</div>
        </div>
      </aside>
    </section>
  </template>

  <template id="tpl-about">
    <section>
      <h2>About Me</h2>
      <p style="color:#98a0ad">I’m a BSc (Hons) Cybersecurity student at Teesside University (graduating May 2026). My work blends software development and security: I’ve built full-stack web apps, implemented ML models for phishing detection, and designed enterprise network infrastructure with IPv6.</p>
    </section>
  </template>

  <template id="tpl-projects">
    <section>
      <h2>Projects</h2>
      <div style="background:rgba(255,255,255,0.03);padding:14px;border-radius:10px;margin-top:8px">
        <h3>ML-Based Phishing Detector — Research</h3>
        <p style="color:#98a0ad">Random Forest vs SVM for enterprise phishing detection pipelines.</p>
      </div>
      <div style="background:rgba(255,255,255,0.03);padding:14px;border-radius:10px;margin-top:8px">
        <h3>Full-Stack E-Commerce Mock</h3>
        <p style="color:#98a0ad">Dynamic product catalog, cart logic, mock payment flow, secure auth endpoints.</p>
      </div>
      <div style="background:rgba(255,255,255,0.03);padding:14px;border-radius:10px;margin-top:8px">
        <h3>Data Centre IPv6 Plan</h3>
        <p style="color:#98a0ad">Enterprise addressing using 2001:db8:abcd::/48 with /64 subnets for VLANs and routing/firewall rules.</p>
      </div>
    </section>
  </template>

  <template id="tpl-skills">
    <section>
      <h2>Skills</h2>
      <ul>
        <li>Python · JavaScript · SQL · Bash · HTML/CSS</li>
        <li>Penetration testing · Incident response · Vulnerability assessment · Firewalls</li>
        <li>Wireshark · Burp Suite · Metasploit · Git · Packet Tracer</li>
      </ul>
    </section>
  </template>

  <template id="tpl-contact">
    <section>
      <h2>Contact</h2>
      <p style="color:#98a0ad">Reach out for graduate roles, collaborations, or project enquiries.</p>
      <form onsubmit="event.preventDefault();alert('Demo: email pdivyatej2003@gmail.com')">
        <label>Name</label>
        <input placeholder="Your name">
        <label>Email</label>
        <input placeholder="you@example.com">
        <label>Message</label>
        <textarea rows="4" placeholder="Short message"></textarea>
        <div style="margin-top:10px"><button class="btn">Send</button></div>
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
  '/contact': 'tpl-contact'
};

function setActiveNav(path) {
  document.querySelectorAll('.nav-link').forEach(a => a.classList.remove('active'));
  const link = document.querySelector(`nav a[href="#${path}"]`);
  if (link) link.classList.add('active');
}

function render() {
  const hash = location.hash.replace('#', '') || '/';
  const tplId = routes[hash] ? routes[hash] : 'tpl-home';
  const tpl = document.getElementById(tplId);
  const app = document.getElementById('app');
  if (tpl) app.innerHTML = tpl.innerHTML;
  setActiveNav(hash);
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
