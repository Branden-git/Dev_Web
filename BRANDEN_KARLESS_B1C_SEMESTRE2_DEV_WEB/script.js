    const infos = {
      Linux: "Linux est un système d'exploitation libre, robuste et utilisé sur de nombreux serveurs et postes de travail.",
      Python: "Python est un langage facile à apprendre, utilisé en IA, développement web et automatisation.",
      Algèbre: "L'algèbre est une branche des mathématiques essentielle pour comprendre les modèles et les structures de données.",
      Cybersécurité: "La cybersécurité consiste à protéger les systèmes numériques contre les attaques et les vulnérabilités.",
      SQL: "SQL permet de manipuler et interroger efficacement des bases de données relationnelles."
    };

    const clics = {
      Linux: 0,
      Python: 0,
      Algèbre: 0,
      Cybersécurité: 0,
      SQL: 0
    };

    function afficher(competence) {
      document.getElementById("description").textContent = infos[competence];
      clics[competence]++;
      mettreAJourTableau();
    }

    function mettreAJourTableau() {
      const table = document.getElementById("tableauVues");
      // Supprimer toutes les lignes sauf l’en-tête
      while (table.rows.length > 1) {
        table.deleteRow(1);
      }

      for (const [comp, count] of Object.entries(clics)) {
        if (count > 0) {
          const row = table.insertRow();
          row.insertCell(0).textContent = comp;
          row.insertCell(1).textContent = count;
        }
      }
    }
