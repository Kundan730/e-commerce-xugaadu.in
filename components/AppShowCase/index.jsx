const AppShowCase = () => {
  return (
    <section className="flex items-center max-lg:flex-col-reverse justify-around gap-8 max-lg:text-center overflow-hidden">
      <div className="relative">
        <img width={370} src='/images/app/app.png' alt="Image of the mobile app" />

        {/* Background Rings */}
        <div className="absolute top-0 right-0 w-24 h-24 rounded-full border-4 border-yellow-500 opacity-30"></div>
        <div className="absolute top-0 left-0 w-32 h-32 rounded-full border-4 border-slate-400 opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 rounded-full border-4 border-yellow-500 opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-16 h-16 rounded-full border-4 border-slate-400 opacity-30"></div>

        {/* Span Rings */}
        <span className="block w-8 h-8 rounded-full bg-yellow-500 absolute top-16 -right-4"></span>
        <span className="block w-4 h-4 rounded-full bg-slate-400 absolute top-12 -left-4"></span>
        <span className="block w-5 h-5 rounded-full bg-yellow-500 absolute bottom-24 -left-8"></span>
        <span className="block w-2 h-2 rounded-full bg-slate-400 absolute bottom-32 -right-8"></span>
      </div>
    </section>
  );
};

export default AppShowCase;
