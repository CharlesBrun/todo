### Todo project

O objetivo deste projeto é demonstrar as habilidades em desenvolvimento utilizando React e Python. Ele utiliza Docker para simplificar a instalação e manter as versões com a configuração padrão.

#### Instalação

Para construir e criar os containers, utilize o seguinte comando:

```bash
docker-compose up --build
```

#### Frontend

O Frontend deste projeto utiliza React e Next.js para auxiliar com as rotas, no caso de ser necessário criar outras páginas. No entanto, a ideia principal é que o cliente faça tudo na mesma página, sem precisar trocar de aba.

##### Funcionalidades do FrontEnd:

- Modal para criação de nova tarefa.
- Modal para edição de uma tarefa ou marcá-la como inativa.

#### Bibliotecas Utilizadas:

- **AntDesign**: Framework visual utilizado para acelerar o processo de criação do projeto.
- **Moment.js**: Utilizado para formatação de datas vindas do backend.

#### Backend

O Backend é feito com Django, SQLite e `rest_framework` para a criação dos endpoints.

##### Endpoints:

- **View List**: `http://localhost:8000/api/v1/tarefas/`
- **Delete, Update e View One**: `http://localhost:8000/api/v1/tarefas/1`
