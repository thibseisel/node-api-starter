FROM node:14-alpine

# Store project files into the *nix standard source directory; create it if not exists
WORKDIR /usr/src/app

# Install npm dependencies using package.json and package-lock.json
COPY ./package*.json ./
RUN npm install

# Copy all project files except those in .dockerignore
COPY . ./

# Define hostname and port as environment variable
ENV HOST=0.0.0.0 PORT=3000

# Informs that the node server should expose its port
EXPOSE ${PORT}

# Build project before running it
RUN npm run build

# Run a script from package.json
# By default, start server in production mode
ENTRYPOINT [ "npm", "run" ]
CMD [ "start" ]
