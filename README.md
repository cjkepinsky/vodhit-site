# VODhit — beta landing page

Static English landing page for **vodhit.app**. Built without frameworks, CDNs, API keys, cookies or external fonts. No software source code is included.

## Contents

- `index.html` — complete public landing page, FAQ, product sections and CTA.
- `styles.css` — responsive dark UI styling.
- `main.js` — accessible mobile menu and waitlist setup.
- `config.js` — select the third-party waitlist provider.
- `privacy.html` — accurate **pre-waitlist placeholder notice**, not a substitute for a completed privacy notice.
- `assets/` — favicon and social sharing artwork.
- `.nojekyll` — static GitHub Pages source.

## Important: waitlist is NOT active yet

This site shows the email field disabled until you connect a provider. No visitor emails are silently collected. Before activating signups:

1. Create a form at Tally, MailerLite or Formspree under an account you control.
2. Update `privacy.html` with the actual data controller, contact address, signup service/provider, legal basis, retention and unsubscribe process (consult a professional for GDPR compliance if needed).
3. In `config.js`, configure exactly one of:
   - `hostedWaitlistUrl`: public `https://tally.so/r/...` (or equivalent) form link. The site will hide the nonfunctional email input and show a working button to the hosted form.
   - `formEndpoint`: supported HTML form endpoint, e.g. `https://formspree.io/f/xxxxx`. The site will enable the email input and submit via native HTML POST.
4. Test with a throwaway email and verify email delivery, consent and removal/unsubscribe.
5. Replace illustrative UI mockups with **approved, sanitized screenshots** when available. Current sample data and screenshots are *illustrative*, not a demonstration of verified analytics.

## Publish using GitHub Pages

1. Create a **new public repository** in your GitHub account, e.g. `cjkepinsky/vodhit-site`. Keep your application repository (`shotkot`) private and separate.
2. Upload these site files and folders to the repository's root (`index.html` must be at root). Commit.
3. GitHub repository **Settings → Pages → Build and deployment → Deploy from a branch → main / (root)**.
4. Verify initial website `https://cjkepinsky.github.io/vodhit-site/` before adding the domain. 
5. In **Settings → Pages → Custom domain**, enter `vodhit.app` and save. GitHub creates/uses `CNAME` for branch publishing. You can also verify ownership of your domain in GitHub account settings, recommended before DNS changes.
6. In Namecheap → Domain List → Manage → Advanced DNS, create **four A records for host `@`**, values:

   ```text
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```

   And a **CNAME** for host `www` → `cjkepinsky.github.io` (not `.../vodhit-site`). Remove conflicting parking/redirect records. Do not create wildcard DNS.
7. After DNS has propagated and GitHub has provisioned the certificate, enable **Enforce HTTPS** in Settings → Pages. `.app` needs HTTPS.
8. Validate `https://vodhit.app`, `https://www.vodhit.app`, mobile layout, external form and HTTPS.

### Official docs

- Publishing: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
- Custom domain: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site
- HTTPS: https://docs.github.com/en/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https

**Note:** GitHub Pages is intended for project sites/showcases, not a commercial storefront or SaaS hosting. If VODhit transitions to a sales-focused website, move hosting to a provider that permits commercial transactions (e.g. Cloudflare Pages) while keeping the same domain and source files.

## Local preview

Open `index.html` in a browser. Or run `python3 -m http.server 8000` from this folder and visit `http://localhost:8000`.

## Before a public launch

- Confirm final brand, logo and trademark situation.
- Activate real waitlist & publish proper GDPR privacy policy.
- Supply real, privacy-safe product screenshots and confirm every feature claim.
- Perform accessibility, cross-browser and mobile tests.
- Add a favicon/OG image if final branding changes.