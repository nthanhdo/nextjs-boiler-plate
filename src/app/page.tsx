'use client';
import { useState } from 'react';
import { useI18n } from '@/contexts/i18n';
import { useRouter } from 'next/navigation';

export default function Page() {
  const { translations, setLocale } = useI18n();
  const router = useRouter();

  const handleChangeLang = (lang: string) => {
    setLocale(lang);
    router.refresh();  // Refresh trang để áp dụng ngôn ngữ mới
  };

  const [money, setMoney] = useState("$53,000");
  const [users, setUsers] = useState(2300);
  const [newClients, setNewClients] = useState(4942);
  const [sales, setSales] = useState("$191,430");

  const  handleRedirectLogin = async () => {
    router.push('/login');
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white">
      {/* Header */}
      <header className="w-full flex justify-between p-6">
        <h1 className="text-4xl font-bold">MEMS System</h1>
        <nav>
          <a href="#" className="mr-6">Features</a>
          <a href="#" className="mr-6">Pricing</a>
          <a href="#" className="mr-6">About us</a>
          <button onClick={handleRedirectLogin} className="btn bg-white text-black px-4 py-2 rounded-full">{translations.common.btn_login}</button>
        </nav>
      </header>

      {/* Main Content */}
      <main className="p-8">
        <section className="text-center mb-12">
          <h2 className="text-3xl font-semibold mb-4">Providing modern clinic management solutions</h2>
          <p className="text-lg mb-8">Delivering simple and effective clinic management solutions with fast and easy setup.</p>
          <button className="bg-white text-black px-6 py-2 rounded-full">Talk to an expert</button>
        </section>

        {/* Dashboard Overview */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center text-black">
            <h3 className="text-xl font-semibold">Today's Money</h3>
            <p className="text-2xl font-bold">{money}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center text-black">
            <h3 className="text-xl font-semibold">Today's Users</h3>
            <p className="text-2xl font-bold">{users}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center text-black">
            <h3 className="text-xl font-semibold">New Clients</h3>
            <p className="text-2xl font-bold">{newClients}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center text-black">
            <h3 className="text-xl font-semibold">Sales</h3>
            <p className="text-2xl font-bold">{sales}</p>
          </div>
        </section>

        {/* Image and Progress Track */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img src="/path-to-your-image.jpg" alt="Medical Visual" className="w-full h-64 object-cover rounded-lg" />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Progress Track</h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span>React Master Dashboard</span>
                <span>80%</span>
              </div>
              <div className="flex justify-between">
                <span>Agara Design System</span>
                <span>60%</span>
              </div>
              <div className="flex justify-between">
                <span>Vagh Huar KZ MND</span>
                <span>40%</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
