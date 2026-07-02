// Returns locator for a single visible event card by title
function findEventCardByTitle(page, title) {
  return page.locator('.event-card', { hasText: title }).first();
}

module.exports = { findEventCardByTitle };
