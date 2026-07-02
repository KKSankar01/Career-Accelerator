// Returns mock EventHub events dataset
function buildMockEvents() {
  return [
    { id: 'evt-101', title: 'Tech Summit 2026', category: 'Technology', city: 'San Francisco', price: 299, availableSeats: 120 },
    { id: 'evt-102', title: 'Music Fiesta', category: 'Entertainment', city: 'New York', price: 99, availableSeats: 300 },
    { id: 'evt-103', title: 'Startup Pitch Night', category: 'Business', city: 'Austin', price: 49, availableSeats: 80 },
    { id: 'evt-104', title: 'Marathon 10K', category: 'Sports', city: 'Chicago', price: 25, availableSeats: 500 }
  ];
}

module.exports = { buildMockEvents };
