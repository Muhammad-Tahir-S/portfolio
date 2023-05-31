export function AddProjectCardTails() {
  const cards: NodeListOf<HTMLElement> = document.querySelectorAll(`.card`);
  // Add the tails to each card
  cards?.forEach((card) => {
    [`top`, `right`, `bottom`, `left`].forEach((side) => {
      const tail = document.createElement(`div`);
      tail.classList.add(`tail`, side);
      return card.appendChild(tail);
    });
  });
}
