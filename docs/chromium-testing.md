# Portfolio Chromium browser QA

The portfolio uses Playwright + Chromium in CI to check the existing Next.js site. The suite verifies the home page renders, monitors uncaught JavaScript errors, and checks for horizontal overflow at mobile (390px), tablet (768px), and desktop (1365px) viewport sizes.

## Local run

```bash
npm ci
npm run dev
```

In another terminal:

```bash
python -m pip install -r tests/browser/requirements.txt
python -m playwright install chromium
python -m pytest -q tests/browser
```

Set `PORTFOLIO_BASE_URL` to use another authorised local URL. The suite is a UI smoke test, not a complete accessibility or security audit.
