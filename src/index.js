const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`<!doctype html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>ترحيب</title>
  <style>
    :root{
      --bg: #0d1117;   /* لون الصفحة */
      --fg: #e6edf3;   /* لون الكتابة */
      --accent: #4f46e5;
    }
    *{ box-sizing:border-box; margin:0; padding:0; }
    body{
      min-height:100vh;
      background: var(--bg);
      color: var(--fg);
      display:flex;
      align-items:center;
      justify-content:center;
      font-family: system-ui, -apple-system, "Segoe UI", Roboto, Arial, "Noto Sans", sans-serif;
    }
    .wrap{
      position:relative;
      width:100%;
      max-width:1000px;
      padding:24px 20px;
      text-align:center;
    }
    .center{
      font-size:clamp(28px, 6vw, 64px);
      font-weight:800;
      letter-spacing:.5px;
    }
    .badge{
      position:absolute;
      top:16px;
      font-weight:700;
      font-size:clamp(14px, 2vw, 18px);
      opacity:.95;
    }
    .right{ right:16px; }  /* يمين الصفحة */
    .left{ left:16px; }    /* يسار الصفحة */
    .highlight{ color: var(--accent); }
  </style>
</head>
<body>
  <div class="wrap">
    <div class="badge right">raedbari</div>
    <div class="badge left" dir="ltr">ramibari</div>
    <div class="center">ترحيب <span class="highlight">بك</span></div>
  </div>
</body>
</html>`);
});

app.listen(PORT, () => {
  console.log(\`Server is running on port \${PORT}\`);
});
