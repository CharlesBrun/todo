# Use a imagem oficial do Python como base
FROM python:3.9

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Atualiza o pip para a versão mais recente
RUN python -m pip install --upgrade pip

# Copie o arquivo requirements.txt para o diretório de trabalho
COPY requirements.txt .

# Instale as dependências do Python
RUN pip install --no-cache-dir -r requirements.txt

# Copie o conteúdo do diretório backend para o diretório de trabalho
COPY . .

# Expõe a porta 8000 para acessar a aplicação
EXPOSE 8000

# Define o comando padrão para iniciar a aplicação
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
