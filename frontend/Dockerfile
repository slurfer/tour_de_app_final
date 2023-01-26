# stage1 as builder
FROM node:alpine as builder

# copy the package.json to install dependencies
COPY package.json package-lock.json ./

# Install the dependencies and make the folder
RUN npm install && mkdir /nextjs-ui && mv ./node_modules ./nextjs-ui

WORKDIR /nextjs-ui

COPY . .
RUN ls -la
# Build the project and copy the files
RUN npm run build


FROM nginx:alpine

#!/bin/sh

COPY ./.nginx/nginx.conf /etc/nginx/nginx.conf

## Remove default nginx index page
RUN rm -rf /usr/share/nginx/html/*

# Copy from the stahg 1
# COPY --from=builder /nextjs-ui/out /usr/share/nginx/html
RUN mkdir /usr/share/nginx/html/frontend
# COPY --from=builder /nextjs-ui/ /usr/share/nginx/html/frontend
COPY --from=builder / /usr/share/nginx/html/frontend

EXPOSE 3000 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]