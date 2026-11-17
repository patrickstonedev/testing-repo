/**
 * Accordion block.
 * Authored as a 2-column table: col 1 = question/label, col 2 = answer.
 * Uses native <details>/<summary>, which is keyboard accessible by default
 * and exposes expanded/collapsed state to screen readers.
 */
export default function decorate(block) {
  [...block.children].forEach((row) => {
    const [label, body] = row.children;

    const summary = document.createElement('summary');
    summary.className = 'accordion-item-label';
    summary.append(...label.childNodes);

    body.className = 'accordion-item-body';

    const details = document.createElement('details');
    details.className = 'accordion-item';
    details.append(summary, body);

    row.replaceWith(details);
  });
}
