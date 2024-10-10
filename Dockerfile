# ใช้ base image ของ Node.js
FROM node:16

# ตั้งค่า working directory ภายใน container
WORKDIR /app

# คัดลอก package.json และ package-lock.json
COPY package*.json ./

# ติดตั้ง dependencies
RUN npm install

# คัดลอกไฟล์แอปพลิเคชันทั้งหมด
COPY . .

# คำสั่งที่ใช้รันแอปพลิเคชัน
CMD ["npm", "start"]
