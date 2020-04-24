#!/usr/bin/env sh
##发布到github
# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npx vuepress build docs

# 进入生成的文件夹
#cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
git push -f git@github.com:ventoso/project.git master

# 发布到upyun
# 进入生成文件夹前文件夹
cd docs/.vuepress

# 删除upyun原文件夹
upx rm -d dist/
# 推送
upx put dist/ /

cd -
