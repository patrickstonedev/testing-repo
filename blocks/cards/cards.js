import { createOptimizedPicture } from '../../scripts/aem.js';

/**
 * Cards block.
 * Authored as a table: each row = one card, col 1 = image, col 2 = text.
 */
export default function decorate(block) {
  const ul = document.createElement('ul');

  [...block.children].forEach((row) => {
    const li = document.createElement('li');
    while (row.firstElementChild) li.append(row.firstElementChild);

    [...li.children].forEach((div) => {
      div.className = div.querySelector('picture')
        ? 'cards-card-image'
        : 'cards-card-body';
    });

    ul.append(li);
  });

  // Replace images with responsive, optimized versions.
  ul.querySelectorAll('picture > img').forEach((img) => {
    const optimized = createOptimizedPicture(img.src, img.alt, false, [{ width: '600' }]);
    img.closest('picture').replaceWith(optimized);
  });

  block.replaceChildren(ul);
}
