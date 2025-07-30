# Build stage
FROM node:18-slim AS build
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Build the app
RUN npm run build

# Production stage
FROM node:18-slim
WORKDIR /app

# Copy node modules and built files
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist
COPY --from=build /app/package*.json ./

# Expose the port used by `vite preview`
EXPOSE 4173

# Run the preview server
CMD ["npx", "vite", "preview", "--port", "4173", "--host"]
