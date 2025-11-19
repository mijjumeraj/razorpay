export default function RazorpayX() {
  return (
    <section className="mt-20 bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-16 rounded-3xl px-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        <div>
          <h2 className="text-3xl font-extrabold">RazorpayX — Business Banking</h2>

          <p className="text-blue-100 mt-4 max-w-md">
            Manage payouts, automate refunds, handle vendor payments and experience fast business banking.
          </p>

          <ul className="mt-6 space-y-3 text-blue-100">
            <li>✔ Instant Settlements</li>
            <li>✔ Corporate Card</li>
            <li>✔ Automated Accounting</li>
            <li>✔ Powerful APIs</li>
          </ul>

          <button className="mt-8 px-6 py-3 bg-white text-blue-700 rounded-md font-semibold shadow hover:bg-gray-100">
            Explore RazorpayX →
          </button>
        </div>

        <div className="bg-white/10 p-6 rounded-xl backdrop-blur-md shadow-lg border border-white/20">
          <h3 className="text-lg font-bold">Smart Payments</h3>
          <p className="text-blue-200 text-sm mt-1">
            A next-gen platform for seamless fund movement.
          </p>

          <div className="mt-4 grid grid-cols-2 gap-4">
            <div className="bg-white/20 p-4 rounded-md text-center">Payouts</div>
            <div className="bg-white/20 p-4 rounded-md text-center">Payroll</div>
            <div className="bg-white/20 p-4 rounded-md text-center">Vendors</div>
            <div className="bg-white/20 p-4 rounded-md text-center">Reports</div>
          </div>
        </div>

      </div>
    </section>
  );
}
