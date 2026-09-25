(() => {
  const copy = {
    en: {
      code: "ELT / 04",
      title: "TSE 2026 Open Data ELT Pipeline",
      description:
        "Automated data engineering pipeline for Brazil’s 2026 elections. It downloads the TSE open-data catalog, transforms electoral datasets with Python, DuckDB and dbt, and checks data quality with Great Expectations. GitHub Actions runs the workflow and publishes the clean dataset to Kaggle.",
      tags: ["Python", "DuckDB", "dbt", "Great Expectations", "GitHub Actions", "CI/CD", "ELT / ETL", "Data Quality"],
      links: ["GitHub repository", "Kaggle dataset", "Kaggle notebook"],
    },
    pt: {
      code: "ELT / 04",
      title: "Pipeline ELT de Dados Abertos do TSE 2026",
      description:
        "Pipeline automatizada de engenharia de dados para as eleições brasileiras de 2026. Baixa o catálogo de dados abertos do TSE, transforma bases eleitorais com Python, DuckDB e dbt e verifica a qualidade com Great Expectations. O GitHub Actions executa o fluxo e publica o dataset tratado no Kaggle.",
      tags: ["Python", "DuckDB", "dbt", "Great Expectations", "GitHub Actions", "CI/CD", "ELT / ETL", "Qualidade de Dados"],
      links: ["Repositório no GitHub", "Dataset no Kaggle", "Notebook no Kaggle"],
    },
  };

  const urls = [
    "https://github.com/OPedroZampier/tse-2026-elt",
    "https://www.kaggle.com/datasets/pedrozampier/brazil-elections-2026-clean-tse-data",
    "https://www.kaggle.com/code/pedrozampier/brazil-elections-2026-exploring-tse-open-data",
  ];

  function updateCard() {
    const list = document.querySelector("#work .project-index");
    if (!list) return;

    let card = list.querySelector('[data-project-id="tse-2026-elt"]');
    if (!card) {
      card = document.createElement("article");
      card.dataset.projectId = "tse-2026-elt";
      const code = document.createElement("span");
      code.className = "project-code";
      const copyBlock = document.createElement("div");
      copyBlock.className = "project-copy";
      const title = document.createElement("h3");
      const description = document.createElement("p");
      const tags = document.createElement("div");
      tags.className = "project-tags";
      copyBlock.append(title, description, tags);
      const links = document.createElement("div");
      links.className = "project-links";
      card.append(code, copyBlock, links);
      list.prepend(card);
    }

    const language = document.documentElement.lang.toLowerCase().startsWith("pt") ? "pt" : "en";
    if (card.dataset.language === language) return;
    card.dataset.language = language;
    const text = copy[language];
    card.querySelector(".project-code").textContent = text.code;
    card.querySelector("h3").textContent = text.title;
    card.querySelector(".project-copy > p").textContent = text.description;

    const tags = card.querySelector(".project-tags");
    tags.replaceChildren(
      ...text.tags.map((label) => {
        const tag = document.createElement("span");
        tag.dataset.slot = "badge";
        tag.className = "inline-flex items-center border px-2 py-0.5";
        tag.textContent = label;
        return tag;
      }),
    );

    const links = card.querySelector(".project-links");
    links.replaceChildren(
      ...text.links.map((label, index) => {
        const link = document.createElement("a");
        link.href = urls[index];
        link.target = "_blank";
        link.rel = "noreferrer";
        link.textContent = label;
        return link;
      }),
    );
  }

  new MutationObserver(updateCard).observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["lang"],
    childList: true,
    subtree: true,
  });
  updateCard();
})();
