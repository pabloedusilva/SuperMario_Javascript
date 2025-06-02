# Super Mario Runner

Super Mario Runner é um jogo web inspirado no clássico Dino Run do Google Chrome, mas com o universo do Mario! O objetivo é simples: sobreviver o maior tempo possível desviando dos obstáculos (canos) e alcançar a maior pontuação (distância percorrida). O jogo é totalmente responsivo, divertido e viciante, com visual moderno e interativo.

## Como Jogar

- **Inicie o jogo**: O Mario começa a correr automaticamente.
- **Desvie dos canos**: Pressione qualquer tecla do teclado para fazer o Mario pular e evitar colidir com os canos.
- **Pontuação**: O placar mostra a distância percorrida (score) e o seu recorde (high score), que é salvo automaticamente no navegador.
- **Game Over**: Se colidir com um cano, o jogo termina e você pode reiniciar clicando no botão "Reiniciar".

## Funcionalidades

- **Placar com ícone personalizado**: O placar exibe um ícone ao lado do score, tornando a experiência mais visual.
- **Recorde salvo**: O maior score é salvo no navegador (localStorage), permitindo competir consigo mesmo.
- **Visual moderno**: Gráficos do universo Mario, animações suaves e interface amigável.
- **Responsivo**: O jogo se adapta a diferentes tamanhos de tela.
- **Reinício rápido**: Botão de reiniciar para jogar novamente sem recarregar a página.

## Estrutura do Projeto

```
SuperMario_Javascript/
│
├── index.html                # Página principal do jogo
├── README.md                 # Este arquivo
├── css/
│   └── style.css             # Estilos do jogo
├── js/
│   └── script.js             # Lógica do jogo
├── mario-runner-images/      # Imagens do jogo (Mario, cano, nuvem, etc)
│   ├── mario.gif
│   ├── pipe.png
│   ├── clouds.png
│   ├── game-over.png
│   └── star.png
└── ...
```

## Galeria de Imagens

Abaixo você pode conferir imagens do jogo em ação! Para adicionar novas imagens à galeria, basta colocar os arquivos na pasta `mario-runner-images/` e referenciá-los aqui.

### Exemplos:

![Tela inicial](mario-runner-images/mario.gif)
*Mario pronto para correr!*

![Obstáculo](mario-runner-images/pipe.png)
*Desvie dos canos para sobreviver!*

![Nuvens decorativas](mario-runner-images/clouds.png)
*O cenário é dinâmico e animado!*

---

> **Dica:** Para adicionar mais imagens, basta seguir o padrão acima, usando `![descrição](caminho/para/imagem)` e uma breve legenda.

## Créditos

- Desenvolvido por [Seu Nome].
- Imagens e sprites: Nintendo (uso educacional/demonstração).
- Inspiração: Dino Run (Google Chrome).

## Licença

Este projeto é para fins educacionais e de portfólio. Não possui fins comerciais.

---

Divirta-se e compartilhe seu recorde!