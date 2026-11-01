# Production Deployment Guide: beauty.oskar4you.pp.ua
**Target Domain:** `beauty.oskar4you.pp.ua`  
**Apex Domain:** `oskar4you.pp.ua`  
**Chosen Deployment Architecture:** **Path A (Vercel Edge Platform)**  

---

## 1. Prerequisites

1. Access to the DNS management panel for domain `oskar4you.pp.ua` (e.g., Cloudflare, Nic.ua, Reg.ru, Namecheap).
2. A free or Pro account on [Vercel](https://vercel.com).
3. The GitHub repository holding this codebase (`beauty-oskar4you`).

---

## 2. Step-by-Step DNS Configuration

Log into your DNS provider for `oskar4you.pp.ua` and add the following single record:

| Field | Value | Notes |
| :--- | :--- | :--- |
| **Record Type** | `CNAME` | Standard alias record for subdomain routing |
| **Name / Host** | `beauty` | Routes `beauty.oskar4you.pp.ua` |
| **Target / Destination** | `cname.vercel-dns.com.` | Vercel Global Edge anycast network |
| **TTL** | `Auto` or `60 seconds` | Allows rapid propagation |
| **Proxy Status (Cloudflare only)** | **DNS Only (Gray Cloud)** | Disable Cloudflare proxy during initial SSL certificate issuance to prevent challenge conflicts. |

---

## 3. Vercel Project Setup

1. Push this repository to GitHub (`beauty-oskar4you`).
2. In Vercel Dashboard, click **Add New... > Project** and import the repository.
3. Configure **Environment Variables** in Vercel settings (copied from `.env.production`):
   ```bash
   NEXT_PUBLIC_SITE_URL=https://beauty.oskar4you.pp.ua
   NEXT_PUBLIC_CURRENCY=₪
   NEXT_PUBLIC_PHONE=+972585964040
   NEXT_PUBLIC_WHATSAPP_URL=https://wa.me/972585964040
   NEXT_PUBLIC_TELEGRAM_URL=https://t.me/polinaLashAshdod
   NEXT_PUBLIC_INSTAGRAM_URL=https://www.instagram.com/brow._.poli
   NEXT_PUBLIC_INSTAGRAM2_URL=https://www.instagram.com/vugoraniya_net
   NEXT_PUBLIC_TIKTOK_URL=https://www.tiktok.com/@polilash.ashdod
   NEXT_PUBLIC_STUDIO_ADDRESS="Ashdod, Israel"
   ```
4. Click **Deploy**. Vercel will run `npm run build` and provision the preview URL (`beauty-oskar4you.vercel.app`).

---

## 4. Custom Subdomain Linking & SSL Verification

1. In the Vercel Project Dashboard, navigate to **Settings > Domains**.
2. Type `beauty.oskar4you.pp.ua` into the input field and click **Add**.
3. Vercel will automatically query DNS for `beauty.oskar4you.pp.ua`.
4. Once the CNAME record is detected:
   - Status changes to **Valid Configuration** (green checkmark).
   - Vercel automatically requests and installs a Let's Encrypt TLS 1.3 / SSL certificate.
   - SSL issuance typically completes within 60 to 180 seconds.
5. Test the live site:
   - Open `https://beauty.oskar4you.pp.ua` in mobile Safari/Chrome.
   - Verify phone call link (`tel:+972585964040`), WhatsApp pre-filled messages, and Telegram deep links.
