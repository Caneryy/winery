# React uygulamasını oluşturmak için node image'ı kullanılır
FROM node:16-alpine as build

# Çalışma dizini
WORKDIR /app

# Bağımlılıkları kopyala ve yükle
COPY package*.json ./
RUN npm install

# Uygulama dosyalarını kopyala
COPY . .

# Uygulamayı oluştur
RUN npm run build

# Nginx sunucusu kullanılarak oluşturulan dosyalar servis edilir
FROM nginx:alpine

# Nginx ayar dosyasını kopyala
COPY nginx.conf /etc/nginx/nginx.conf

# Oluşturulan dosyaları kopyala
COPY --from=build /app/build /usr/share/nginx/html
