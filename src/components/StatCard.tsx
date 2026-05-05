type StatCardProps = {
  label: string;
  value: string;
  description?: string;
  accent?: string;
};

export default function StatCard({ label, value, description = 'Monthly', accent = 'bg-primary/10 text-primary' }: StatCardProps) {
  return (
    <div className="overflow-hidden rounded-[28px] bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-sm font-medium text-slate-500">{label}</p>
          <p className="mt-3 text-3xl font-semibold text-slate-900">{value}</p>
        </div>
        <div className={`rounded-3xl px-3 py-2 text-sm font-semibold ${accent}`}> {description} </div>
      </div>
    </div>
  );
}
