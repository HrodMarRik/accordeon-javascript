const accordions = Array.from(document.querySelectorAll(".accordion"));

accordions.map((accordion) => {
  const content = accordion.nextElementSibling; // Sélectionnez le contenu associé à ce bouton

    accordion.addEventListener("click", function() {
      if (content.style.display === "none" || content.style.display === "") {
          content.style.display = "block";
      } else {
          content.style.display = "none";
      }
    });
});
