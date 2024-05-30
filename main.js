const accordions = Array.from(document.querySelectorAll(".accordion"));

accordions.map((accordion) => {
  const content = accordion.nextElementSibling;

    accordion.addEventListener("click", function() {
      if (content.style.display === "none" || content.style.display === "") {
          content.style.display = "block";
      } else {
          content.style.display = "none";
      }
    });
});
