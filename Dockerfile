FROM node:20.16.0

# RUN npm install -g yarn

WORKDIR /app
COPY . .
RUN yarn install


CMD [ "yarn", "dev"]
