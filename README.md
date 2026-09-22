# Studio BS Trainer

Repositório oficial e pronto para produção do website institucional do **Studio BS Trainer** (Campo Grande — MS).

## Projeto
**Studio BS Trainer** (Studio Bs Personal Trainer LTDA — CNPJ: 27.421.717/0001-63)  
Studio de treinamento personalizado localizado no bairro Carandá Bosque, Campo Grande — MS, fundado em 2017 e liderado pelo fundador e personal trainer Brunno Schneider (mais de 16 anos de atuação profissional).

## Domínio de Produção
```text
https://studiobstrainer.online
```

## Tecnologias Utilizadas
- **React 19** (`^19.3.0`): Interface declarativa e componentes modulares
- **TypeScript** (`~6.0.2`): Tipagem estática estrita
- **Vite 8** (`^8.3.0`): Build tool e empacotador de produção
- **Tailwind CSS v4** (`^4.3.3`): Framework de estilização com engine CSS de alta performance
- **Lucide React** (`^1.47.0`): Ícones vetoriais leves e acessíveis

## Instalação
Para instalar as dependências de forma limpa e determinística utilizando o `package-lock.json`:

```bash
npm ci
```

Ou, caso prefira atualizar dependências compatíveis:

```bash
npm install
```

## Desenvolvimento
Para iniciar o servidor local de desenvolvimento com hot module replacement (HMR):

```bash
npm run dev
```

O servidor iniciará localmente (padrão `http://localhost:5173/`).

## Build
Para compilar e gerar a versão final otimizada para produção:

```bash
npm run build
```

Este comando executa a checagem rigorosa de tipos TypeScript (`tsc`) e o empacotamento com minificação e hashing de assets via Vite (`vite build`).

## Diretório Gerado pelo Build
```text
dist
```

O diretório `dist` é gerado na raiz do projeto e contém:
- `index.html`: Documento HTML principal minificado com metadados SEO, Open Graph e Schema.org JSON-LD apontando para `https://studiobstrainer.online`
- `assets/`: Arquivos JavaScript e CSS compilados e cacheados com hash
- `fonts/`: Fontes locais Barlow Condensed e Plus Jakarta Sans em formatos `.woff2` e `.ttf`
- `images/`: Imagens em formatos modernos `.webp` e `.jpg`
- `videos/`: Vídeos MP4 e pôsteres de carregamento
- `.htaccess`: Regras de reescrita para SPA no Apache / LiteSpeed, redirecionamento HTTPS e cabeçalhos de segurança e cache
- `robots.txt` e `sitemap.xml`: Configurações de indexação para motores de busca
- `favicon.*` e `logo.png`: Identidade visual completa

## Deploy na Hostinger
Este repositório foi especificamente estruturado para importação direta e publicação na **Hostinger**:

- **Domínio configurado:** `studiobstrainer.online`
- **Hospedagem:** Hostinger (Hospedagem Web / Cloud / VPS / Node.js)
- **Método de publicação:** Importação via repositório Git no hPanel da Hostinger
- **Branch principal:** `main`
- **Tipo de aplicação:** Single Page Application (SPA) / Aplicação Web Estática gerada com Vite + React
- **Comando de instalação:** `npm ci` (ou `npm install`)
- **Comando de build:** `npm run build`
- **Diretório de saída (Publish directory / Web root):** `dist`
- **Configurações adicionais necessárias:**
  - O arquivo `.htaccess` já está incluso na raiz do build (`dist/.htaccess`), tratando automaticamente o roteamento de SPA (evitando erro 404 ao recarregar a página ou acessar seções/links diretamente) e forçando conexões seguras HTTPS.
  - Não são necessárias variáveis de ambiente secretas para a execução da aplicação frontend.
  - Nenhuma alteração foi realizada na Hostinger previamente; a importação do repositório deve ser acionada manualmente no painel da Hostinger selecionando este repositório no branch `main`.

## Estrutura do Projeto
```text
├── .github/
│   └── workflows/
│       └── ci.yml             # Validação automática de build no GitHub Actions
├── public/                    # Assets estáticos servidos diretamente na raiz
│   ├── .htaccess              # Configuração Apache / LiteSpeed para SPA e HTTPS
│   ├── fonts/                 # Fontes locais otimizadas (WOFF2)
│   ├── images/                # Fotos e logotipos em alta definição (WebP/JPG)
│   ├── videos/                # Vídeos de demonstração do estúdio
│   ├── favicon.*              # Favicons e ícones da marca
│   ├── robots.txt             # Diretivas para motores de busca
│   └── sitemap.xml            # Mapa do site indexável
├── src/
│   ├── components/            # Componentes visuais do site (Hero, Vídeos, FAQ, etc.)
│   ├── data/                  # Fontes de verdade dos dados (business, photos, videos, lead)
│   ├── motion/                # Gestão de animações e preferências de acessibilidade
│   ├── utils/                 # Utilitários auxiliares (foco de modais, etc.)
│   ├── App.tsx                # Estrutura principal da página
│   ├── main.tsx               # Ponto de entrada React
│   └── style.css              # Design tokens e folhas de estilo
├── package.json               # Configurações do pacote e scripts
├── tsconfig.json              # Configurações do compilador TypeScript
└── vite.config.ts             # Configuração do Vite com base raiz ('/')
```

## Testes e Validação
Para rodar a bateria de testes automatizados de validação de rotas, assets e integridade:

```bash
# Teste de conformidade de dados e metadados
node scripts/verify-delivery.mjs

# Teste de servidor de produção e integridade de assets estáticos
node scripts/test-production.mjs
```
