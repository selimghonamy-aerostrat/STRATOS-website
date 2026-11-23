#!/bin/zsh
# Usage: scripts/lh.sh <label> [rootdir] [pages...]  — mobile Lighthouse via local gzip server, median of 3
LABEL=$1; R=${2:-$(cd "$(dirname $0)/.." && pwd)}; shift 2 2>/dev/null
PAGES=("$@"); [ ${#PAGES} -eq 0 ] && PAGES=(/ /about /solutions /ebt-cbta /tms /clients /contact /glossary /privacy /legal/subprocessors)
DIR=$(cd "$(dirname $0)" && pwd); OUT=$DIR/../docs/uiux-v3/lighthouse; mkdir -p $OUT
PORT=$((4600 + RANDOM % 300))
(cd $DIR && ROOT=$R SERVE_ONLY=1 PORT=$PORT node shots.mjs >/dev/null 2>&1 &) ; sleep 1
for p in $PAGES; do
  n=$([ "$p" = / ] && echo home || echo ${p#/} | tr / -)
  for i in 1 2 3; do CHROME_PATH="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" npx --yes lighthouse "http://127.0.0.1:$PORT$p" --quiet --chrome-flags="--headless=new" --only-categories=performance,accessibility,best-practices,seo --output=json --output-path=$OUT/$LABEL-$n-$i.json >/dev/null 2>&1; done
  node -e "
const runs=[1,2,3].map(i=>require('$OUT/$LABEL-$n-'+i+'.json')).sort((a,b)=>a.categories.performance.score-b.categories.performance.score);const r=runs[1],c=r.categories,a=r.audits;
console.log('| $p | '+['performance','accessibility','best-practices','seo'].map(k=>Math.round(c[k].score*100)).join(' | ')+' | '+a['cumulative-layout-shift'].displayValue+' | '+a['largest-contentful-paint'].displayValue+' |')"
  rm -f $OUT/$LABEL-$n-1.json $OUT/$LABEL-$n-3.json
done
pkill -f "PORT=$PORT" 2>/dev/null; lsof -ti tcp:$PORT | xargs kill 2>/dev/null; true
