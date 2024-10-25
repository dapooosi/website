
# Verwende ein Node.js Basis-Image
FROM node:18-alpine

# Setze das Arbeitsverzeichnis
WORKDIR /app

# Kopiere package.json und package-lock.json
COPY package*.json ./

# Installiere Abhängigkeiten
RUN npm install

# Kopiere den Rest des Codes
COPY . .

# Baue das TypeScript-Projekt
RUN npm run build

# Exponiere Port 3000
EXPOSE 3000

# Starte die Anwendung
CMD ["npm", "start"]

