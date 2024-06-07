# Use a imagem oficial do Node.js como base
FROM node:21

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Atualiza o npm para a versão mais recente
RUN npm install -g npm@latest

# Copie o arquivo package.json e package-lock.json para o diretório de trabalho
COPY package.json package-lock.json ./

# Instale as dependências do Node.js
RUN npm install

# Copie o conteúdo do diretório frontend para o diretório de trabalho
COPY . .

# Construa o aplicativo React
RUN npm run build

# Expõe a porta 3000 para acessar a aplicação
EXPOSE 3000

# Define o comando padrão para iniciar o servidor
CMD ["npm", "run", "dev"]