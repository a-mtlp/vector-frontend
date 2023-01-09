### STAGE 1: Build ###
FROM node:18-alpine as build
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build
### STAGE 2: Run ###
FROM nginx:latest
COPY default.conf.template /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/dist/vector /usr/share/nginx/html
EXPOSE 80
