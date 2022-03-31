FROM node:16-alpine AS builder
WORKDIR /app
COPY package*.json ./
COPY *.config.js ./
RUN yarn install
COPY . .
RUN yarn build

FROM node:16-alpine AS server
WORKDIR /app
RUN yarn install --production
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000
CMD ["yarn", "start"]