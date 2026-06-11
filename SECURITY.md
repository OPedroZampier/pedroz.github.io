# Política de Segurança (SECURITY.md)

Este documento define a política de segurança, conformidade e o procedimento para reporte de vulnerabilidades no ecossistema do **PortfolioHUB**

Como cientista de dados, prezo pela integridade das análises, pela segurança da infraestrutura de código e pelo cumprimento rigoroso das diretrizes de proteção de dados (LGPD).

---

## 1. Versões Suportadas

O suporte ativo e as correções de segurança são aplicados exclusivamente à ramificação estável principal (`main`). Versões legadas, ramificações de rascunho ou forks não oficiais não são monitorados ativamente.

| Versão | Suportada |
| :--- | :--- |
| v1.0.x (Branch `main`) | :white_check_mark: Sim |
| Versões Anteriores / Dev Branches | :x: Não |

---

## 2. O que Consideramos uma Vulnerabilidade?

Para o escopo deste portfólio de Ciência de Dados, são tratados com prioridade crítica os seguintes cenários:
* **Exposição de Credenciais:** Presença acidental de tokens de API, chaves privadas, ou ficheiros de autenticação no histórico do Git.
* **Vazamento de Dados Privados (PII):** Inclusão inadvertida de dados de identificação pessoal em logs, outputs de notebooks ou scripts, violando preceitos da LGPD.

---

## 3. Como Reportar uma Vulnerabilidade

Se você identificou uma falha de segurança, um bug crítico ou uma exposição de credenciais neste repositório, pedimos que **não abra uma Issue pública**. Divulgar a vulnerabilidade publicamente antes que ela seja corrigida expõe o ambiente a riscos desnecessários.

Por favor, siga o procedimento de **Divulgação Responsável**:

1.  Envie um e-mail detalhado para: **pedroperry0@gmail.com**
2.  No assunto, utilize o prefixo: `[SECURITY VULNERABILITY] - Nome do Projeto`
3.  No corpo do e-mail, inclua:
    * A descrição detalhada da falha encontrada.
    * O link do arquivo ou linha de código afetada (se aplicável).
    * Passos detalhados para reproduzir o problema (Proof of Concept).
    * O impacto potencial da vulnerabilidade.

---

## 4. Processo de Resposta e Correção (Triagem)

Assim que o relatório for recebido, adota-se o seguinte fluxo de remediação:
[Recebimento do E-mail] ──► [Triagem e Validação (Até 48h)] ──► [Correção Local (Hotfix)] ──► [Push Seguro para a Main]

```text
[Recebimento do E-mail] ──► [Triagem e Validação (Até 48h)] ──► [Correção Local (Hotfix)] ──► [Push Seguro para a Main]
