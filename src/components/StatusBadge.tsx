type StatusBadgeProps = {
  status: string;
};

const statusClasses: Record<string, string> = {
  Paid: 'bg-[#D9F4EB] text-[#1D6D4B]',
  Success: 'bg-[#D9F4EB] text-[#1D6D4B]',
  Active: 'bg-[#D9F4EB] text-[#1D6D4B]',
  Pending: 'bg-[#FFF4D7] text-[#A67C1B]',
  Unpaid: 'bg-[#FFF4D7] text-[#A67C1B]',
  Delivered: 'bg-[#E7F4FF] text-[#1E5B8A]',
  Completed: 'bg-[#D9F4EB] text-[#1D6D4B]',
  Planned: 'bg-[#E8F3FF] text-[#1F5F93]',
  Inactive: 'bg-[#FBEFE9] text-[#A42C1B]'
};

export default function StatusBadge({ status }: StatusBadgeProps) {
  return <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${statusClasses[status] || 'bg-slate-100 text-slate-700'}`}>{status}</span>;
}
