// Intercepts event APIs and serves mock data
async function installMockEventRoutes(page, mockEvents) {
  // Catalog endpoint
  // Intercept only events catalog API (avoid breaking auth/session APIs)
  await page.route('**/api/events**', async route => {
    // Always mock events API to avoid race conditions with navigation

    console.log('Mocked EVENTS API HIT:', route.request().url());
    // Return a flexible shape to match UI expectations
    const cap = s => s ? s.charAt(0).toUpperCase() + s.slice(1) : s;
    const normalized = mockEvents.map(e => ({
      id: e.id,
      title: e.title,
      description: 'Mock event description',
      category: cap(e.category),
      venue: 'Mock Venue',
      city: e.city,
      eventDate: new Date().toISOString(),
      price: String(e.price),
      totalSeats: e.availableSeats + 50,
      availableSeats: e.availableSeats,
      imageUrl: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800',
      isStatic: true,
      userId: null,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }));

    // Honor server-side filter query params (search, category, city) so
    // filtering behaves realistically against the mock dataset.
    const params = new URL(route.request().url()).searchParams;
    const search = (params.get('search') || '').toLowerCase();
    const category = params.get('category') || '';
    const city = params.get('city') || '';

    const filtered = normalized.filter(e => {
      const matchSearch = !search || e.title.toLowerCase().includes(search);
      const matchCategory = !category || e.category === category;
      const matchCity = !city || e.city === city;
      return matchSearch && matchCategory && matchCity;
    });

    // Match frontend expectation: events should be a top-level array
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({
        success: true,
        data: filtered,
        pagination: {
          total: filtered.length,
          page: 1,
          limit: 12,
          totalPages: 1
        }
      })
    });
  });

  // Detail endpoint
  await page.route(/\/api\/events\/(.+)/, async route => {
    // Always mock event detail API

    console.log('Mocked EVENT DETAIL HIT:', route.request().url());
    const url = route.request().url();
    const id = url.split('/').pop();
    const base = mockEvents.find(e => e.id === id);

    const cap2 = s => s ? s.charAt(0).toUpperCase() + s.slice(1) : s;
    const event = base && {
      id: base.id,
      title: base.title,
      description: 'Mock event description',
      category: cap2(base.category),
      venue: 'Mock Venue',
      city: base.city,
      eventDate: new Date().toISOString(),
      price: String(base.price),
      totalSeats: base.availableSeats + 50,
      availableSeats: base.availableSeats,
      imageUrl: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800',
      isStatic: true,
      userId: null,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    await route.fulfill({
      status: event ? 200 : 404,
      contentType: 'application/json',
      body: JSON.stringify(
        event
          ? {
              success: true,
              data: event
            }
          : { success: false, message: 'Not found' }
      )
    });
  });
}

module.exports = { installMockEventRoutes };
