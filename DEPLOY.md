# Production Deployment Guide: beauty.oskar4you.com
**Target Domain:** `beauty.oskar4you.com`  
**Chosen Deployment Architecture:** **Path A (Vercel Edge Platform)**  
*(Per approved architectural directive, Path B [VPS/Caddy] is deactivated to eliminate server maintenance overhead).*

---

## 1. Prerequisites

1. Access to the DNS management panel for apex domain `oskar4you.com` (e.g., Cloudflare, Namecheap, Reg.ru, GoDaddy).
2. A free or Pro account on [Vercel](https://vercel.com).
3. The GitHub repository holding this codebase.

---

## 2. Step-by-Step DNS Configuration

Log into your DNS provider for `oskar4you.com` and add the following single record:

| Field | Value | Notes |
| :--- | :--- | :--- |
| **Record Type** | `CNAME` | Standard alias record for subdomain routing |
| **Name / Host** | `beauty` | Routes `beauty.oskar4you.com` |
| **Target / Destination** | `cname.vercel-dns.com.` | Vercel Global Edge anycast network |
| **TTL** | `Auto` or `60 seconds` | Allows rapid propagation |
| **Proxy Status (Cloudflare only)** | **DNS Only (Gray Cloud)** | **CRITICAL:** Disable Cloudflare proxy (orange cloud) during initial SSL issuance to prevent Let's Encrypt challenge conflicts. |

---

## 3. Vercel Project Setup

1. Push this repository to GitHub (e.g. `github.com/oskar4you/beauty-oskar4you`).
2. In Vercel Dashboard, click **Add New... > Project** and import the repository.
3. Configure **Environment Variables** in Vercel settings (copied from `.env.production`):
   ```bash
   NEXT_PUBLIC_SITE_URL=https://beauty.oskar4you.com
   NEXT_PUBLIC_CURRENCY=UAH
   NEXT_PUBLIC_TELEGRAM_URL=https://t.me/your_real_username
   NEXT_PUBLIC_INSTAGRAM_URL=https://instagram.com/your_real_username
   NEXT_PUBLIC_PHONE=+380XXXXXXXXX
   NEXT_PUBLIC_STUDIO_ADDRESS="Studio Address / By Appointment"
   ```
4. Click **Deploy**. Vercel will run `npm run build` and provision the preview URL.

---

## 4. Custom Subdomain Linking & SSL Verification

1. In the Vercel Project Dashboard, navigate to **Settings > Domains**.
2. Type `beauty.oskar4you.com` into the input field and click **Add**.
3. Vercel will automatically query DNS for `beauty.oskar4you.com`.
4. Once the CNAME record is detected:
   - Status changes to **Valid Configuration** (green checkmark).
   - Vercel automatically requests and installs a Let's Encrypt TLS 1.3 / SSL certificate.
   - SSL issuance typically completes within 60 to 180 seconds.
5. Test the live site:
   - Open `https://beauty.oskar4you.com` in mobile Safari/Chrome.
   - Verify the HTTPS padlock and test Telegram/Instagram deep links.
