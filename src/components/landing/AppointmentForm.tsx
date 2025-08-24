import React, { useState } from "react";

const AppointmentForm: React.FC = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [showContent, setShowContent] = useState(true); // Efekt kontrolü

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowContent(false); // önce formu kapat
    setTimeout(() => {
      setSubmitted(true);
      setShowContent(true); // mesajı aç
    }, 300); // kapatma efekti süresi

    // 3 saniye sonra mesaj kapanıp form geri gelecek
    setTimeout(() => {
      setShowContent(false); // mesajı kapat
      setTimeout(() => {
        setSubmitted(false);
        setForm({ name: "", phone: "", date: "", message: "" });
        setShowContent(true); // formu aç
      }, 300);
    }, 3000);
  };

  return (
    <section
      className="py-20 px-4 bg-[var(--main-light)] w-full max-w-full"
      id="appointment"
    >
      <div className="w-full max-w-2xl mx-auto rounded-lg shadow p-8 border border-[var(--main-gray)]">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-8 tracking-tight text-[var(--main-red)] text-center">
          Randevu Al
        </h2>
        
        <div
          className={`transition-all duration-300 ease-in-out transform ${
            showContent ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          {submitted ? (
            <div className="text-green-600 text-center font-semibold text-lg">
              Randevu talebiniz alındı! En kısa sürede dönüş yapılacaktır.
            </div>
          ) : (
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label
                  className="block mb-1 font-medium text-[var(--main-dark)]"
                  htmlFor="name"
                >
                  Ad Soyad
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full border border-[var(--main-gray)] rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--main-red)] bg-[var(--main-light)] text-[var(--main-dark)]"
                  value={form.name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  className="block mb-1 font-medium text-[var(--main-dark)]"
                  htmlFor="phone"
                >
                  Telefon
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full border border-[var(--main-gray)] rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--main-red)] bg-[var(--main-light)] text-[var(--main-dark)]"
                  value={form.phone}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  className="block mb-1 font-medium text-[var(--main-dark)]"
                  htmlFor="date"
                >
                  Tarih
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  required
                  className="w-full border border-[var(--main-gray)] rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--main-red)] [&::-webkit-calendar-picker-indicator]:invert-0 [&::-webkit-calendar-picker-indicator]:brightness-0"
                  value={form.date}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  className="block mb-1 font-medium text-[var(--main-dark)]"
                  htmlFor="message"
                >
                  Not
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  className="w-full border border-[var(--main-gray)] rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--main-red)] bg-[var(--main-light)] text-[var(--main-dark)]"
                  value={form.message}
                  onChange={handleChange}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[var(--main-red)] hover:bg-red-700 text-white font-bold py-3 px-6 rounded transition"
              >
                Randevu Talebi Gönder
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default AppointmentForm;