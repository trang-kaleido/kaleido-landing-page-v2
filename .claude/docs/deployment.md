# Deployment

## Environments

| Env | URL | Branch |
|-----|-----|--------|
| Production | kaleido.study | `main` |
| Preview | auto per push | any branch |

## Deploy
```bash
git push kaleido main
```
Vercel auto-deploys on push. No build step. Usually live in < 60 seconds.

## Git remotes
```
kaleido   https://github.com/trang-kaleido/kaleido-landing-page-v2.git  (deploy)
origin    https://github.com/ttrraanng28/claudecode-project-setup.git   (template — ignore)
```
Always push to `kaleido`, not `origin`.

## Vercel config (`vercel.json`)
```json
{
  "buildCommand": null,
  "outputDirectory": ".",
  "cleanUrls": true,
  "trailingSlash": false
}
```
`cleanUrls` strips `.html` and makes `/en/index.html` accessible at `/en`.

## No environment variables
This is a fully static site. No server-side secrets, no env vars.

## After deploy checklist
- [ ] Visit kaleido.study — language selector renders, EN/VI links work
- [ ] Visit kaleido.study/en — full English landing loads
- [ ] Visit kaleido.study/vi — full Vietnamese landing loads
