# Public Site

Static informational, feature demo, and fundraising site for the platform.

## Purpose

This site presents the platform as a public-interest sustainability data project, shows feature demos from the current MVP direction, and provides links for direct personal project contributions.

The platform does not currently have 501(c)(3) status. Contributions through this site should be described as direct personal project support, not charitable donations, and should not be represented as tax deductible.

## Local Preview

Open `index.html` directly in a browser, or serve the folder with any static file server.

```powershell
npx http-server .
```

## GitHub Pages

This repo is ready to publish from the repository root through GitHub Pages.

1. Create a GitHub repository for this folder.
2. Push the files.
3. In GitHub, open Settings > Pages.
4. Set the source to deploy from the default branch and root folder.

The `.nojekyll` file is included so GitHub Pages serves files exactly as written. If you use a custom domain, copy `CNAME.example` to `CNAME` and replace the example domain.

## Contribution Links

Update the placeholders in `app.js`:

- `supportLinks.paypal`
- `supportLinks.venmo`

Use personal project contribution links until a formal charitable structure exists.
