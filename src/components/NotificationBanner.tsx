export default function NotificationBanner() {
  return (
    <div className="overflow-hidden rounded-full bg-primary text-white shadow-sm">
      <div className="animate-marquee whitespace-nowrap px-4 py-3 text-sm font-semibold tracking-[0.02em]">
        <span className="mx-8">New: Super Admin dashboard and role-based donation controls now live.</span>
        <span className="mx-8">Join ManobSheba and manage village donations with modern transparency.</span>
        <span className="mx-8">Secure API auth with Laravel Sanctum for backend protection.</span>
      </div>
    </div>
  );
}
