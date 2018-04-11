echo "REACT_APP_BASEURL=/arena.utt.fr-2018" > .env.production.local

mv package.json package.json.bak
awk '/arena\.utt\.fr\-2018/ { print; print "  \"homepage\": \"https:\/\/ungdev.github.com\/arena.utt.fr-2018\/\","; next }1' package.json.bak > package.json


echo "Deploying to github-pages..."

yarn build
git add --force build
git commit -m "chore: deploy"
git subtree push --prefix build origin gh-pages

# clean
git reset HEAD~
git reset HEAD build/
mv package.json.bak package.json
rm .env.production.local
