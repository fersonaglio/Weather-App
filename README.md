# Weather App

## Descrição

O **Weather App** é um aplicativo simples que permite aos usuários verificar as condições climáticas atuais em qualquer cidade do mundo. Utilizando a API do OpenWeatherMap, ele fornece informações sobre temperatura, umidade e velocidade do vento, além de exibir um ícone que representa o estado do tempo.

## Tecnologias Utilizadas

- **HTML**: Estrutura básica do aplicativo.
- **CSS**: Estilização da interface para uma melhor experiência do usuário.
- **JavaScript**: Lógica do aplicativo e interações com a API do OpenWeatherMap.
- **API do OpenWeatherMap**: Para buscar informações climáticas.

## Funcionalidades

- Busca de clima por cidade.
- Exibição da temperatura atual, umidade e velocidade do vento.
- Mensagem de erro para entradas inválidas (ex: cidade não encontrada).
- Interface responsiva que se adapta a diferentes tamanhos de tela.

## Como Usar

1. Clone ou baixe o repositório.
2. Certifique-se de ter uma conexão com a internet, pois o aplicativo faz chamadas a uma API externa.
3. Abra o arquivo `index.html` em um navegador.
4. Digite o nome de uma cidade no campo de busca e clique no ícone de busca.
5. O aplicativo exibirá as informações climáticas para a cidade pesquisada ou uma mensagem de erro se a cidade não for encontrada.

## Estrutura do Projeto

```plaintext
Weather-App/
│
├── index.html
├── style.css
├── script.js
└── images/
    ├── clouds.png
    ├── clear.png
    ├── drizzle.png
    ├── rain.png
    └── mist.png
```

- **index.html**: Contém a estrutura do aplicativo.
- **style.css**: Responsável pela estilização do aplicativo.
- **script.js**: Lógica do aplicativo, incluindo chamadas à API.
- **images/**: Diretório contendo os ícones do clima.

## Responsividade

O aplicativo é projetado para ser responsivo, adaptando-se a diferentes tamanhos de tela. O CSS utiliza media queries para ajustar o layout e a estética do aplicativo em dispositivos móveis.

## Contribuição

Sinta-se à vontade para contribuir com melhorias, correções de bugs ou novas funcionalidades. Sinta-se à vontade para abrir issues ou pull requests.

## Licença

Este projeto é de código aberto e pode ser utilizado, modificado e distribuído livremente.
