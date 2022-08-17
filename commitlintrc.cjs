module.exports = {
  extends: ['@commitlint/config-conventional']
}
npx husky add .husky/commit-msg "npx --no-install commitlint -e $HUSKY_GIT_PARAMS"