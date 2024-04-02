
#Using alpine node
FROM node:21-alpine3.18

WORKDIR /src/app

#Copy files to your package
COPY package*.json ./

#Install dependencies
RUN npm  install 

#Copy everything else
COPY . . 

#TELL PORT
EXPOSE 6900

#COmmand to run the app 
CMD ["node","index.js"]