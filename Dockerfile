FROM node:latest
WORKDIR /app
COPY . . 
RUN npm install
RUN npm run build
EXPOSE 3005
ENTRYPOINT ["node", "src/app.js"]
