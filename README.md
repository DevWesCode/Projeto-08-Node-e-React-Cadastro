# 🧑‍💻 Projeto Full Stack - Cadastro de Usuários

## 📌 Descrição:

Este projeto full stack tem como objetivo realizar o **cadastro, listagem e exclusão de usuários**, simulando um pequeno sistema **CRUD completo**, com integração entre front-end e back-end.

📚 **Este projeto tem foco na consolidação dos estudos em Node e React**, sendo parte do processo de aprendizado das tecnologias citadas a baixo. Ele visa consolidar o entendimento prático sobre o funcionamento de uma aplicação fullstack moderna.

---

## 🔧 Tecnologias utilizadas:

- **Back-end:** Node.js | Express | Prisma ORM | MongoDB 
- **Front-end:** React | styled-components | React Router DOM | Axios  
- **Outros:** Vite | JavaScript ES6+ | REST API | Componentização

---

## 🛠️ Back-end:

A API foi desenvolvida com **Node.js**, utilizando **Express** para roteamento e **Prisma** para comunicação com o banco de dados **MongoDB**.

### Funcionalidades:

- `GET` - Lista todos os usuários  
- `POST` - Cria um novo usuário  
- `PUT` - Atualiza os dados de um usuário  
- `DELETE` - Remove um usuário do banco

---

## 🖥️ Front-end:

A interface foi construída com **React** e **styled-components**, seguindo boas práticas de **componentização**, **responsividade** e **separação de responsabilidades**.

### Funcionalidades:

- Cadastro de usuário (nome, idade e email)
- Exibição de uma lista de usuários com avatar dinâmico  
- Remoção de usuários com confirmação  
- Navegação entre páginas com React Router DOM

---

## 💡 Diferenciais:

- Separação clara entre camadas (back-end e front-end)  
- Uso de `useRef` para manipular inputs no cadastro  
- Avatar personalizado via API pública baseado no ID do usuário  
- Design moderno com gradientes e feedback visual nos botões

---

## 💡 Aprendizados:

- Criação de API REST com Express  
- Integração do Prisma com MongoDB  
- Criação e consumo de rotas no front-end com React  
- Manipulação de formulários com `useRef` e `useState`  
- Estilização com styled-components e GlobalStyles  
- Comunicação com a API usando Axios  
- Navegação SPA com React Router DOM  
- Boas práticas de organização de código

---

## 📷 Captura de Tela:

![image](https://github.com/user-attachments/assets/321130a4-6950-490d-a201-d84b349addc4)

![image](https://github.com/user-attachments/assets/14bf2e7f-f001-41dc-b5c7-d02e17e25886)

---

## 📌 Status do Projeto:

✅ **Finalizado** – As principais funcionalidades do CRUD estão totalmente implementadas e funcionando corretamente, com integração completa entre front-end e back-end.

🚧 **Possíveis melhorias futuras:**
- Implementar **upload ou seleção de foto do usuário**, permitindo personalização visual além do avatar gerado automaticamente.
- Adicionar **novos campos no formulário de cadastro**, como telefone, endereço e profissão, para enriquecer o perfil dos usuários.
- Criar um **formulário de edição em modal**, permitindo que os dados do usuário sejam atualizados sem sair da lista.
- Incluir **validação de dados mais robusta** e mensagens de erro amigáveis.
- Adicionar **indicadores de carregamento** e feedback visual nas ações de cadastro e exclusão.
- Implementar **paginação ou busca por nome/email/id**, caso o número de usuários cadastrados aumente significativamente.

