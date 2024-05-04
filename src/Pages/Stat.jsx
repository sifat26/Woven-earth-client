const Stat = () => {
    return (
        <div>
            <div className="mt-12">
                <h1 className="text-3xl font-bold text-center">Our service Statistics</h1>
            </div>
            <ul className="flex flex-col md:grid grid-cols-3 gap-5 text-redis-neutral-800 max-w-2xl mx-auto p-10 mt-10">

    <li
        className="w-full text-sm font-semibold text-slate-900 p-6 bg-white border border-slate-900/10 bg-clip-padding shadow-md shadow-slate-900/5 rounded-lg flex flex-col justify-center">
        <span className="mb-1 text-teal-400 font-display text-5xl">45K+</span>
        Customers
    </li>
    <li
        className="w-full text-sm font-semibold text-slate-900 p-6 bg-white border border-slate-900/10 bg-clip-padding shadow-md shadow-slate-900/5 rounded-lg flex flex-col justify-center">
        <span className="mb-1 text-teal-400 font-display text-5xl">78K+</span>
        Orders
    </li>
    <li
        className="w-full text-sm font-semibold text-slate-900 p-6 bg-white border border-slate-900/10 bg-clip-padding shadow-md shadow-slate-900/5 rounded-lg flex flex-col justify-center">
        <span className="mb-1 text-teal-400 font-display text-5xl">50k+</span>
        Products
    </li>
</ul>
            
        </div>
    );
};

export default Stat;