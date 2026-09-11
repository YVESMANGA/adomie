"use client";
import React, { useState } from "react";
import emailjs from "emailjs-com"; // npm install emailjs-com

export default function Fcontacts() {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Utilise EmailJS pour envoyer le mail
      await emailjs.send(
        "service_xxxxx", // ton service ID EmailJS
        "template_xxxxx", // ton template ID EmailJS
        {
          from_name: formData.nom,
          from_email: formData.email,
          message: formData.message,
          to_email: "281144945@qq.com",
        },
        "user_xxxxx" // ton user ID EmailJS
      );

      alert("Votre message a bien été envoyé ✅");
      setFormData({ nom: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      alert("Une erreur est survenue, veuillez réessayer plus tard ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-20 px-6">
      <div className="max-w-3xl mx-auto bg-white shadow-2xl rounded-3xl p-10">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-4 text-center">
          Contactez-nous
        </h1>
        <p className="text-gray-600 mb-10 text-center text-lg">
          Vous avez une question ou un projet ? Remplissez le formulaire et notre équipe vous répondra rapidement.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Nom */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="nom">
              Nom
            </label>
            <input
              type="text"
              id="nom"
              name="nom"
              value={formData.nom}
              onChange={handleChange}
              required
              className="w-full px-5 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm transition"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-5 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm transition"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              required
              className="w-full px-5 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm transition"
            ></textarea>
          </div>

          {/* Bouton */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold py-3 px-6 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition duration-300 shadow-lg"
          >
            {loading ? "Envoi..." : "Envoyer"}
          </button>
        </form>
      </div>
    </main>
  );
}
