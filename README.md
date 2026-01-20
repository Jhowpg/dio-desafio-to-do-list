# ✅ Todo List - Organização Simples e Eficiente

> Um projeto de lista de tarefas focado em lógica de JavaScript, manipulação de DOM e persistência de dados.

![Preview do Projeto](assets/IMG/Captura%20de%20tela%202026-01-20%20195413.png)

---

## 🚀 Funcionalidades Principais

- **✍️ Criação Inteligente:** Adicione tarefas clicando no botão ou pressionando a tecla `Enter`.
- **🧹 Limpeza Total:** Botão dedicado para remover todas as tarefas concluídas de uma só vez.
- **📊 Contador em Tempo Real:** O rodapé exibe automaticamente quantos itens pendentes restam.
- **🔍 Filtros Dinâmicos:** Visualize apenas o que importa no momento (Todas, Pendentes ou Concluídas).
- **💾 Memória de Longo Prazo:** Suas tarefas não somem ao atualizar a página (uso de **LocalStorage**).

---

## 🛠️ Tecnologias Utilizadas

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black)

---

## 🧠 Como a "Mágica" Acontece?

O diferencial deste projeto é a lógica por trás da interface. Abaixo estão os principais conceitos de TI aplicados:

| Conceito                 | Aplicação no Projeto                                                                                                               |
| :----------------------- | :--------------------------------------------------------------------------------------------------------------------------------- |
| **Delegação de Eventos** | Um único `addEventListener` gerencia todos os cliques da lista (lixeira e checkboxes), otimizando a performance.                   |
| **LocalStorage & JSON**  | O sistema converte a lista de objetos em Strings (JSON) para salvar no navegador e reconstrói os elementos ao recarregar a página. |
| **Lógica de Filtros**    | Utiliza `switch/case` para alternar a propriedade `display` dos itens baseada na classe `.completed`.                              |
| **Manipulação do DOM**   | Criação dinâmica de elementos HTML (`document.createElement`) com injeção de classes e atributos.                                  |

---

## 🎮 Como Usar

1.  **Adicionar:** Digite sua tarefa no campo de texto e aperte `Enter`.
2.  **Concluir:** Clique no círculo (checkbox) ou no texto para riscar a tarefa.
3.  **Filtrar:** Utilize os botões no rodapé ("All", "Pending", "Completed") para organizar a visão.
4.  **Excluir:** Clique no ícone da lixeira para remover definitivamente um item.
5.  **Persistência:** Pode fechar a aba ou o navegador; quando voltar, suas tarefas estarão lá!

---

## 📝 Aprendizados

Durante o desenvolvimento, foram solidificados conhecimentos sobre:

- **Serialização de Dados:** Uso de `JSON.stringify` e `JSON.parse`.
- **Arrays e Loops:** Uso de `forEach` para varrer a lista e aplicar filtros ou salvar dados.
- **CSS Dinâmico:** Uso de classes de estado (`.completed`) para alterar o estilo dos elementos filhos via CSS.

---

Made with 💻 and ☕ by Jhonata H A dos Santos.
