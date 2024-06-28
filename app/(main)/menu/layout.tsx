export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="w-full h-full bg-slate-600 flex flex-col items-center justify-center">
      <div className="w-full h-full inline-block text-center justify-center">
        {children}
      </div>
    </section>
  );
}
