FROM node:latest
WORKDIR /app
COPY . . 
RUN npm install
RUN npm run build
EXPOSE 3005
CMD ["node", "dist/src/server.js"]
