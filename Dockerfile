FROM node:lts-alpine as rickMortyVue
ENV NODE_ENV=production
WORKDIR /app
COPY package.json /app
RUN npm install --production --silent && mv node_modules ../
COPY . .
RUN npm run build

FROM nginx:latest
VOLUME /var/cache/nginx
COPY --from=rickMortyVue app/dist/raketech-challenge /usr/share/nginx/html
COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf