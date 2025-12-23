# Deploy the Redirect Loop Fix

## 🚨 Issue Found & Fixed
**Problem**: Your `next.config.js` had a redirect rule that was conflicting with Vercel's domain handling, causing a 308 redirect loop.

**Fix Applied**: Temporarily disabled the www → non-www redirect in `next.config.js`

## 🚀 Deploy Options

### Option 1: Push to GitHub (Recommended)
If your Vercel project is connected to GitHub:

```bash
git push origin main
```

Vercel will automatically deploy the fix.

### Option 2: Install Vercel CLI and Deploy
```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy to production
vercel --prod
```

### Option 3: Manual Deploy via Vercel Dashboard
1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Find your project
3. Go to **Deployments** tab
4. Click **Redeploy** on the latest deployment
5. Select **Use existing Build Cache** = No
6. Click **Redeploy**

## 🔍 After Deployment

### Test Your Domain:
1. Wait 2-3 minutes for deployment
2. Clear browser cache (Ctrl+Shift+R)
3. Test in incognito mode
4. Try: `https://bestrudraksha.com`

### If Still Not Working:

#### Check Vercel Domain Settings:
1. Go to Vercel Dashboard → Your Project
2. **Settings** → **Domains**
3. Make sure only `bestrudraksha.com` is listed
4. If `www.bestrudraksha.com` is there, remove it temporarily

#### Alternative: Use Vercel's Domain Redirect
Instead of Next.js redirects, let Vercel handle it:
1. In Vercel Dashboard → **Settings** → **Domains**
2. Add `www.bestrudraksha.com`
3. Set it to **Redirect to** `bestrudraksha.com`

## 🔧 Long-term Solution

Once your site is working, you can re-enable the redirect properly:

```javascript
// In next.config.js - Better redirect configuration
async redirects() {
  return [
    {
      source: '/:path*',
      has: [
        {
          type: 'host',
          value: 'www.bestrudraksha.com',
        },
      ],
      destination: 'https://bestrudraksha.com/:path*',
      permanent: false, // Use 307 instead of 308
    },
  ];
},
```

## 📞 Need Help?

If the issue persists after deployment:
1. Share your Vercel project URL
2. Check browser developer tools → Network tab
3. Look for the redirect chain

The fix should resolve your redirect loop issue!