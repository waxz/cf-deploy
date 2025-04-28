webproxy on cloudflare
# run 

```bash
git clone git@github.com:waxz/WebProxy.git /tmp/WebProxy

npm install wrangler --save-dev -C /tmp/WebProxy

npx -C /tmp/WebProxy wrangler pages dev  . --port 8888 --ip 0.0.0.0

# npx wrangler pages dev --local-protocol=https . --port 8888 --ip 0.0.0.0

# deploy to cloudflare
npx -C /tmp/WebProxy wrangler pages deploy
# npx -C /tmp/WebProxy wrangler pages deploy --project-name=my-proxy --branch=main --commit-dirty=true --commit-message="Manual deploy from /tmp/WebProxy"

```

# use d1

https://blog.cloudflare.com/making-static-sites-dynamic-with-cloudflare-d1/ 
add permission https://dash.cloudflare.com/profile/api-tokens, account -> d1 -> edit

```bash
export CLOUDFLARE_API_TOKEN=xxxxx 
npx wrangler d1 create d1-example

npx  wrangler d1 execute d1-example --file src/create.sql
# upload to Pages
npx  wrangler d1 execute d1-example --remote  --file src/clean.sql
npx  wrangler d1 execute d1-example --remote  --file src/create.sql
```