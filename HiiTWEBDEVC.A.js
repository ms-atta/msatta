const leftArrows = document.querySelectorAll('.icon-list .icon-arrow');
const rightArrows = document.querySelectorAll('.icon-list .icon-arrow-right');
const iconItemsContainers = document.querySelectorAll('.icon-items');

leftArrows.forEach((leftArrow, index) => {
  leftArrow.addEventListener('click', () => {
    const iconItemsContainer = iconItemsContainers[index];
    const iconWidth = iconItemsContainer.children[0].offsetWidth;
    iconItemsContainer.scrollLeft -= iconWidth;
    iconItemsContainer.scrollTo({
      left: iconItemsContainer.scrollLeft,
      behavior: 'smooth'
    });
  });
});

rightArrows.forEach((rightArrow, index) => {
  rightArrow.addEventListener('click', () => {
    const iconItemsContainer = iconItemsContainers[index];
    const iconWidth = iconItemsContainer.children[0].offsetWidth;
    iconItemsContainer.scrollLeft += iconWidth;
    iconItemsContainer.scrollTo({
      left: iconItemsContainer.scrollLeft,
      behavior: 'smooth'
    });
  });
});