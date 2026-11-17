/**
 * Hero block.
 * Authored as a 1-column table: picture + heading + paragraph (+ optional link).
 * Variants (add in parentheses in the block name): "Hero (left)".
 */
export default function decorate(block) {
  const picture = block.querySelector('picture');
  if (picture) {
    // First image is the LCP element: make sure it loads eagerly.
    const img = picture.querySelector('img');
    if (img) {
      img.loading = 'eager';
      img.setAttribute('fetchpriority', 'high');
    }
    picture.classList.add('hero-image');
  }

  const content = block.querySelector('div > div');
  if (content) content.classList.add('hero-content');

  // Turn the first link into a button.
  const link = block.querySelector('a');
  if (link) link.classList.add('button');
}
