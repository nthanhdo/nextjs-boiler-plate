export async function getDashboardStats() {
  // Fake API response
  return Promise.resolve([
    { label: 'Users', value: 128 },
    { label: 'Sales', value: 256 },
    { label: 'Visits', value: 512 },
  ]);
}
