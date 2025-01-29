# Desafio Codepoint - Clone do Twitter

Este projeto faz parte de um desafio da **Codepoint** que tem como objetivo desenvolver uma aplicação funcional que simula algumas funcionalidades básicas do Twitter. O foco principal é aplicar conhecimentos em **React**, **JavaScript**, **HTML**, **CSS** (usando **Tailwind CSS**) e boas práticas de desenvolvimento frontend.

## Funcionalidades Implementadas

- **Postagem de texto**:
  - Um campo de texto onde o usuário pode digitar sua mensagem.
  - Botão para publicar a mensagem.
  - Limpeza automática do campo de texto após a publicação.
  
- **Lista de posts**:
  - Exibição dos posts em ordem decrescente (do mais recente ao mais antigo).
  - Cada post inclui um texto e uma imagem de perfil.

- **Interatividade**:
  - Validação para impedir o envio de posts vazios.
  - Botão de "Postar" desativado quando o campo de texto está vazio.

- **Estilização**:
  - Uso de Tailwind CSS para um design responsivo e moderno.
  - Adição de transições suaves ao interagir com os botões.

## Tecnologias Utilizadas

- **React**:
  - Gerenciamento de estado com `useState`.

- **Tailwind CSS**:
  - Estilização rápida e responsiva diretamente nas classes HTML.

- **JavaScript**:
  - Manipulação de eventos e controle de fluxos (como validações).

## Como Executar o Projeto

1. **Pré-requisitos**:
   - Node.js e npm instalados.

2. **Clonar o repositório**:
   ```bash
   git clone https://github.com/seu-usuario/twitter-clone.git
   cd twitter-clone
   ```

3. **Instalar as dependências**:
   ```bash
   npm install
   ```

4. **Iniciar o servidor de desenvolvimento**:
   ```bash
   npm start
   ```

5. **Acessar a aplicação**:
   - Abra o navegador e vá para `http://localhost:3000`.

## Estrutura do Projeto

- `src/components`
  - Componentes reutilizáveis, como o formulário de postagem e a lista de posts.
- `src/App.js`
  - Componente principal que gerencia o estado da aplicação.
- `src/index.css`
  - Configurações gerais de estilo usando Tailwind CSS.

## Melhorias Futuras

- **Funcionalidades adicionais**:
  - Sistema de "curtir" e "retweetar" posts.
  - Adição de imagens ou vídeos aos posts.
  - Perfis de usuário e timeline personalizada.

- **Melhorias na UI**:
  - Animações mais sofisticadas com `framer-motion`.
  - Design responsivo para diferentes tamanhos de tela.

## Conclusão

Este projeto é uma ótima oportunidade para exercitar habilidades em React e desenvolvimento frontend. Ao longo do desafio, conceitos como gerenciamento de estado, validações e estilização responsiva foram colocados em prática, contribuindo para um aprendizado consistente e prático.

Se tiver dúvidas ou sugestões, sinta-se à vontade para abrir uma issue ou entrar em contato!

