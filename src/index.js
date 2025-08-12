const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (_req, res) => {
  res.send(`<!doctype html>
<html lang="en" dir="ltr">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Smart DevOps Deployment Project</title>
  <style>
    :root{
      --bg: #0b1020;
      --grid: rgba(255,255,255,.04);
      --panel: #0f172a;
      --text: #e6edf3;
      --muted: #9aa4b2;
      --accent: #22d3ee;     /* cyan */
      --accent-2: #a78bfa;   /* purple */
      --shadow: 0 10px 30px rgba(0,0,0,.35);
      --radius: 18px;
    }

    *{ box-sizing:border-box; margin:0; padding:0 }
    html,body{ height:100% }
    body{
      font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Arial, "Noto Sans", sans-serif;
      color: var(--text);
      background:
        radial-gradient(circle at 20% 10%, rgba(34,211,238,.08), transparent 40%),
        radial-gradient(circle at 80% 90%, rgba(167,139,250,.08), transparent 40%),
        linear-gradient(180deg, #0a0f1e, #0b1020);
      position:relative;
      overflow-x:hidden;
    }

    /* grid overlay */
    body::before{
      content:"";
      position:fixed; inset:0;
      background:
        linear-gradient(var(--grid) 1px, transparent 1px),
        linear-gradient(90deg, var(--grid) 1px, transparent 1px);
      background-size: 28px 28px;
      mask-image: linear-gradient(to bottom, transparent, black 20%, black 80%, transparent);
      pointer-events:none;
    }

    .wrap{
      min-height:100%;
      display:flex;
      align-items:center;
      justify-content:center;
      padding:56px 20px 72px;
    }

    .hero{
      width:100%;
      max-width:1060px;
      background: linear-gradient(180deg, rgba(255,255,255,.03), rgba(255,255,255,.01));
      border:1px solid rgba(255,255,255,.08);
      border-radius: var(--radius);
      box-shadow: var(--shadow);
      padding:42px 28px 34px;
      position:relative;
      overflow:hidden;
    }

    /* animated accent bar */
    .hero::after{
      content:"";
      position:absolute; inset:auto -30% -2px -30%;
      height:3px;
      background: linear-gradient(90deg, var(--accent), var(--accent-2), var(--accent));
      filter: blur(2px);
      animation: flow 6s linear infinite;
    }
    @keyframes flow { from{ transform: translateX(-20%)} to{ transform: translateX(20%)} }

    .badges{
      position:absolute; top:14px; left:0; right:0;
      display:flex; justify-content:space-between; padding:0 18px; pointer-events:none;
    }
    .badge{
      pointer-events:auto;
      background: rgba(255,255,255,.06);
      border:1px solid rgba(255,255,255,.12);
      backdrop-filter: blur(6px);
      color: var(--text);
      font-weight:700;
      padding:8px 14px;
      border-radius: 999px;
      box-shadow: var(--shadow);
      letter-spacing:.2px;
    }

    .title{
      text-align:center;
      font-size: clamp(28px, 4.6vw, 58px);
      font-weight: 900;
      line-height: 1.1;
      margin-top: 18px;
    }
    .title .hl{
      background: linear-gradient(90deg, var(--accent), var(--accent-2));
      -webkit-background-clip: text; background-clip: text; color: transparent;
      text-shadow: 0 0 18px rgba(34,211,238,.15);
    }

    .subtitle{
      text-align:center;
      margin-top:12px;
      color: var(--muted);
      font-size: clamp(14px, 2.3vw, 18px);
    }

    .cards{
      display:grid;
      grid-template-columns: repeat(6, minmax(0,1fr));
      gap:14px;
      margin:28px auto 6px;
    }
    @media (max-width: 920px){ .cards{ grid-template-columns: repeat(3, minmax(0,1fr)) } }
    @media (max-width: 560px){ .cards{ grid-template-columns: repeat(2, minmax(0,1fr)) } }

    .card{
      background: var(--panel);
      border:1px solid rgba(255,255,255,.08);
      border-radius: 14px;
      padding:14px 12px;
      display:flex; align-items:center; gap:10px;
      justify-content:center;
    }
    .dot{ width:9px; height:9px; border-radius:50%;
      background: radial-gradient(circle at 30% 30%, #fff, var(--accent-2));
      box-shadow: 0 0 12px var(--accent-2);
    }
    .tool{ font-weight:700; font-size:15px; letter-spacing:.2px }

    .footer{
      text-align:center;
      margin-top: 18px;
      color: var(--muted);
      font-size: 13px;
    }
  </style>
</head>
<body>
  <div class="wrap">
    <div class="hero">
      <div class="badges">
        <div class="badge">raedbari</div>
        <div class="badge">ramibari</div>
      </div>

      <h1 class="title">
        Welcome to our <span class="hl">Smart DevOps Deployment project</span>
      </h1>
      <p class="subtitle">Continuous Integration → Containerization → Orchestrated Delivery → Observability → Monitoring → Resilience Testing</p>

      <div class="cards" aria-label="DevOps toolchain">
        <div class="card"><span class="dot"></span><span class="tool">Terraform</span></div>
        <div class="card"><span class="dot"></span><span class="tool">Docker</span></div>
        <div class="card"><span class="dot"></span><span class="tool">Kubernetes</span></div>
        <div class="card"><span class="dot"></span><span class="tool">GitHub Actions</span></div>
        <div class="card"><span class="dot"></span><span class="tool">Prometheus</span></div>
        <div class="card"><span class="dot"></span><span class="tool">Grafana</span></div>
        <div class="card"><span class="dot"></span><span class="tool">Loki</span></div>
        <div class="card"><span class="dot"></span><span class="tool">Ansible</span></div>
        <div class="card"><span class="dot"></span><span class="tool">Chaos Mesh</span></div>
       
      </div>

      <p class="footer">Deployed via Kubernetes • Listening on port \${PORT}</p>
    </div>
  </div>
</body>
</html>`);
});

// listen on 0.0.0.0 inside the container
// listen on 0.0.0.0 inside the container
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
});

