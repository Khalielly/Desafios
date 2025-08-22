# Desafios de Desenvolvimento - CRUD Completo

Este repositório contém três desafios progressivos para aprimorar habilidades em desenvolvimento front-end, programação em Java e integração com banco de dados.  

---

## Desafio 1 - Front-End

### Objetivo
Criar uma aplicação web que permita gerenciar usuários e seus contatos.

### Tecnologias
- HTML  
- CSS  
- JavaScript  

### Funcionalidades
- Cadastrar Usuário com os campos:
  - Nome  
  - Telefone  
  - E-mail  
  - CPF  

- Listar usuários em uma tabela dinâmica.  
- Editar e excluir usuários cadastrados.  

### Bônus
- Cada usuário deve possuir no mínimo dois contatos vinculados, com os campos:
  - Nome  
  - Telefone  
  - E-mail  

- Deve ser possível editar ou excluir contatos.  
- Se o usuário não possuir ao menos dois contatos, o cadastro deve ser bloqueado.  

### Validações Obrigatórias
- Telefone no formato válido.  
- CPF válido (padrão brasileiro).  
- E-mail no formato correto.  

---

## Desafio 2 - Java (Terminal)

### Objetivo
Implementar as mesmas funcionalidades do Desafio 1, porém utilizando Java no terminal, sem interface gráfica.

### Funcionalidades
- Criar usuários com os mesmos campos.  
- Listar todos os usuários cadastrados.  
- Editar dados de usuários existentes.  
- Deletar usuários.  

Validações (telefone, CPF e e-mail) continuam obrigatórias.

---

## Desafio 3 - Java + Banco de Dados

### Objetivo
Aprimorar o Desafio 2 adicionando persistência de dados em um banco de dados.

### Requisitos
- Utilizar JDBC ou frameworks ORM (opcional).  
- Salvar, editar, listar e excluir usuários diretamente no banco.  

---

## Meta Final
Ao concluir os três desafios, você terá:
- Experiência com CRUD em Front-End;  
- Domínio de Java no terminal;  
- Conhecimento em persistência de dados com banco;  
- Validações e boas práticas de desenvolvimento.

---

## Organização
- `/desafio1` → Código Front-End  
- `/desafio2` → Código Java (Terminal)  
- `/desafio3` → Código Java + Banco de Dados  
