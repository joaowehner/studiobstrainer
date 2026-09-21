# Studio BS Trainer — Landing Page Premium

Landing page oficial de alta conversão do **BS Trainer Studio** (Campo Grande — MS), desenvolvida sob medida para posicionamento premium, agendamento de aula experimental e conversão via WhatsApp.

---

## 📌 1. Informações Centrais da Empresa

- **Empresa:** BS Trainer Studio / Studio Bs Personal Trainer LTDA
- **CNPJ:** 27.421.717/0001-63
- **Endereço:** Rua Vitório Zeolla, 1965 — Carandá Bosque, Campo Grande — MS (CEP 79032-360)
- **Telefone:** (67) 98445-0951
- **Instagram:** [@studiobstrainer](https://www.instagram.com/studiobstrainer/)
- **Horário de Atendimento:** Segunda a sexta-feira, das 05h00 às 20h00
- **Fundação:** Março de 2017 (~9 anos de operação)
- **Fundador / Diretor:** Brunno Schneider (mais de 16 anos atuando na área de personal training)
- **Reputação Pública:** 4,6 estrelas no Google com aproximadamente 59 avaliações

> **Atenção:** Não misturar dados desta empresa com a homônima de São Paulo (BS MM Studio / manobrista / DDD 11). Toda informação deste projeto foi validada pelo Dossiê oficial da empresa.

---

## 🚀 2. Stack Tecnológica

- **Framework:** React 19 + TypeScript
- **Bundler:** Vite 8
- **Estilização:** Tailwind CSS v4 (design tokens centralizados)
- **Ícones:** Lucide React
- **SEO & Metadados:** Schema.org `SportsActivityLocation` (JSON-LD), Open Graph, Twitter Cards, sitemap.xml e robots.txt

---

## 🛠️ 3. Como Rodar o Projeto

```bash
# Instalar dependências (usando yarn ou npm)
yarn install

# Iniciar servidor de desenvolvimento
yarn dev

# Gerar build de produção para deploy
yarn build

# Visualizar build localmente
yarn preview
```

---

## ⚙️ 4. Guia Rápido de Manutenção

Toda a inteligência e os dados factuais do negócio estão centralizados para fácil edição:

### 4.1 Onde alterar dados da empresa, telefone e WhatsApp
Abra o arquivo:
👉 `src/data/business.ts`
- Para alterar o WhatsApp principal: altere `whatsappNumber: "5567984450951"`.
- Para alterar a mensagem padrão: altere `defaultWhatsAppMessage`.
- Para trocar o telefone exibido: altere `phonePrimary`.

### 4.2 Onde alterar horários de funcionamento
No mesmo arquivo `src/data/business.ts`:
- Edite o campo `hours.weekdays`, `hours.saturday` e `hours.sunday`.

### 4.3 Onde adicionar depoimentos de alunos
Abra o arquivo:
👉 `src/components/SocialProofSection.tsx`
- O componente já possui estrutura pronta para receber avaliações individuais autorizadas assim que disponibilizadas pelo Studio.

### 4.4 Onde adicionar membros da equipe
Abra o arquivo:
👉 `src/components/AuthoritySection.tsx`
- A seção do fundador está configurada em `businessData.founder`. Caso queira adicionar novos profissionais, inclua no array correspondente.

### 4.5 Identidade Visual & Branding Oficial
- **Logo Oficial:** `public/logo.png` (brasão do Studio com silhueta de casal, tipografia gradiente BS em tons ciano/cobalto, fitas "TRAINER", "PERSONAL" e "SINCE 2017").
- **Favicon Oficial:** `public/favicon.png` e `public/favicon.svg` (brasão do Studio centrado).
- **Componente de Marca:** `src/components/BrandLogo.tsx`.
- **Paleta Oficial (Instagram @studiobstrainer):**
  - **Azul Cobalto Real:** `#0072CE` / `#0077D4` (cor principal de destaque e CTAs)
  - **Azul Ciano / Gelo:** `#38BDF8` / `#5CB8FF` (realces, badges, ícones e gradientes)
  - **Dark Navy / Grafite Profundo:** `#07090E` (fundo principal), `#0D111A` (superfícies), `#131926` (cards)
  - **Dourado:** Exclusivo para as estrelas de avaliação oficial do Google (`fill-amber-400 text-amber-400`).
- **Design Tokens:** `src/style.css`.

### 4.6 Onde configurar Analytics (Google Tag Manager / Meta Pixel)
Abra o arquivo:
👉 `index.html`
- Insira as tags do Google Tag Manager ou Meta Pixel dentro do `<head>`.
- Os botões de ação e CTAs já utilizam parâmetros de rastreamento padronizados (`cta_whatsapp_hero`, `header_whatsapp`, `mobile_drawer_whatsapp`, etc.).

---

## 📐 5. Responsividade & Auditoria

Testado e validado em múltiplos breakpoints:
- **Desktop Grande:** 1440px+
- **Tablets:** 768px a 1024px (iPad e similares)
- **Mobiles:** 360px, 390px e 430px (iPhone e Android)
- **Overflow horizontal:** 0px (sem scroll indesejado)
- **Console errors:** 0 warnings / 0 errors
