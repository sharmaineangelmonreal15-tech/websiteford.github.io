document.addEventListener("DOMContentLoaded", function () {
  const readButtons = document.querySelectorAll(".read-btn");
  const modal = document.getElementById("modal");
  const modalTitle = document.getElementById("modal-title");
  const modalText = document.getElementById("modal-text");
  const closeModal = document.getElementById("closeModal");
  const contentData = [
    {
      title: "History of Ford",
      text: "Ford Motor Company was founded by Henry Ford in 1903. He revolutionized the auto industry by introducing mass production through the moving assembly line. The Model T, introduced in 1908, became the first affordable car for the average American. Ford’s innovations not only changed how cars were built but also influenced modern manufacturing."
    },
    {
      title: "Ford’s Mission and Vision",
      text: "Ford's mission is to help build a better world, where every person is free to move and pursue their dreams. Their vision centers around designing smart vehicles for a smart world, leading the way in innovation, sustainability, and customer satisfaction."
    },
    {
      title: "Ford’s Innovations",
      text: "Ford is at the forefront of automotive innovation. From introducing the first moving assembly line to developing cutting-edge electric vehicles like the Mustang Mach-E and F-150 Lightning, Ford continues to drive progress in mobility, connectivity, and environmental responsibility."
    },
    {
      title: "Ford’s Global Reach",
      text: "Ford operates in over 100 countries around the world. With manufacturing plants, R&D facilities, and sales networks globally, the brand has become a symbol of innovation and reliability. Ford’s global strategies are tailored to meet the unique needs of customers across different regions."
    }
  ];
  readButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const index = parseInt(button.getAttribute("data-index"));
      const data = contentData[index];
      modalTitle.textContent = data.title;
      modalText.textContent = data.text;
      modal.style.display = "block";
    });
  });

  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});
