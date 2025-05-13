interface Props {
  label: string;
  value: string | number;
}

export function StatsCard({ label, value }: Props) {
  return (
    <div className="p-4 rounded-lg shadow bg-white">
      <p className="text-sm text-gray-500">{label}</p>
      <p className="text-xl font-semibold">{value}</p>
    </div>
  );
}
