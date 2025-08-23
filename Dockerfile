# #  Build stage
# FROM node:18-alpine AS build
# WORKDIR /app
# COPY package*.json ./
# RUN npm ci
# COPY . .
#  RUN npm run build || true

# # Runtime  stage
# FROM node:18-alpine
# WORKDIR /app
# ENV NODE_ENV=production
# COPY package*.json ./
# RUN npm ci --omit=dev
# COPY --from=build /app /app
# EXPOSE 3000
# CMD ["npm", "start"]
FROM node:20-alpine

RUN addgroup -S nodegrp && adduser -S nodeusr -G nodegrp
WORKDIR /app

COPY package*.json ./
RUN npm ci --omit=dev

COPY src/ ./src/

ENV NODE_ENV=production
ENV PORT=3000
EXPOSE 3000

USER nodeusr

HEALTHCHECK --interval=30s --timeout=3s --start-period=10s --retries=3 \
  CMD wget -qO- "http://127.0.0.1:${PORT}/healthz" >/dev/null || exit 1

CMD ["npm", "start"]
