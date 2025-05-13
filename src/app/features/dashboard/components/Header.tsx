export function Header() {
  return (
    <header className="w-full px-4 py-3 border-b flex justify-between items-center">
      <h2 className="text-lg font-semibold">Dashboard</h2>
      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-600">Welcome, Admin</span>
        {/* Avatar or other control */}
      </div>
    </header>
  );
}
