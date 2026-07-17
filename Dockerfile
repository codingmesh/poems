# 诗云星图 — 静态站点 Docker 镜像
# 构建:  docker build -t xingtu .
# 运行:  docker run -d -p 8080:80 xingtu

FROM node:22-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY deploy/nginx-xingtu.conf /etc/nginx/conf.d/default.conf
RUN sed -i 's|/var/www/xingtu|/usr/share/nginx/html|' /etc/nginx/conf.d/default.conf
EXPOSE 80
