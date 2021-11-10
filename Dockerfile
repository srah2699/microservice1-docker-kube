FROM node:latest
WORKDIR /app
COPY . . 
RUN npm install
RUN npm run build
EXPOSE 3003
ENTRYPOINT ["node", "src/app.js"]
