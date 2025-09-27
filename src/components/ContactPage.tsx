import { FC, useState } from "react";
import {
  Mail, // Icône principale de la page
  ArrowRight,
  User,
  Phone,
  MessageSquare,
  MapPin,
  Clock,
} from "lucide-react";
import Header from "./header/Header";

// Définition des types pour les données du formulaire
interface ContactFormState {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const ContactPage: FC = () => {
  const [formData, setFormData] = useState<ContactFormState>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<string | null>(null);

  // Gère la mise à jour des champs du formulaire
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Gère la soumission du formulaire
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage(null);

    // Simulation de l'envoi des données (remplacez par votre logique API/Backend)
    setTimeout(() => {
      console.log("Données envoyées:", formData);
      setIsSubmitting(false);
      setSubmitMessage(
        "Votre message a été envoyé avec succès ! Nous vous répondrons rapidement."
      );
      // Réinitialiser le formulaire
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 2000);
  };

  // Liste des sujets pour le champ de sélection
  const subjects = [
    "Information Générale",
    "Demande de Devis (Ingénierie Financière)",
    "Support Technique (Logiciel)",
    "Recrutement / Partenariat",
    "Autre",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ======================================================= */}
      {/* 1. SECTION HERO / TITRE */}
      {/* ======================================================= */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white pt-40 pb-24 md:pt-48 md:pb-32 overflow-hidden">
        <Header />
        {/* Effets de fond similaires à la HomePage */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
              radial-gradient(circle at 50% 10%, rgba(59, 130, 246, 0.4) 0%, transparent 50%), 
              radial-gradient(circle at 10% 80%, rgba(6, 182, 212, 0.3) 0%, transparent 50%)
            `,
            }}
          ></div>
        </div>

        <div className="relative container mx-auto px-6 text-center">
          {/* Icône Mail Géante */}
          <div className="inline-flex items-center justify-center mb-6 p-6 rounded-full bg-blue-600/30 backdrop-blur-sm border-2 border-blue-500/50 shadow-2xl">
            <Mail className="w-16 h-16 md:w-20 md:h-20 text-cyan-400" />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent leading-tight">
            Contactez-Nous
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Nous sommes là pour répondre à vos questions et discuter de votre
            prochain projet.
          </p>
        </div>
      </section>

      {/* ======================================================= */}
      {/* 2. CORPS DE LA PAGE / FORMULAIRE ET INFOS */}
      {/* ======================================================= */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Colonne d'informations de contact (Gauche) */}
            <div className="lg:col-span-1 space-y-8 bg-white p-8 rounded-2xl shadow-xl h-full border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 border-b pb-4 mb-4">
                Nos Coordonnées
              </h2>

              {/* Adresse */}
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Adresse</h3>
                  <p className="text-gray-600">
                    Froncophonie, Niamey, Niger
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Email</h3>
                  <p className="text-blue-600 hover:underline cursor-pointer">
                    contact@capital-analysis.com
                  </p>
                </div>
              </div>

              {/* Téléphone */}
              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Téléphone</h3>
                  <p className="text-gray-600">(+227) 92 01 42 42</p>
                </div>
              </div>

              {/* Heures d'ouverture */}
              <div className="flex items-start space-x-4">
                <Clock className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Heures d'ouverture
                  </h3>
                  <p className="text-gray-600">Lun - Samedi : 8h00 - 17h00 GMT+1</p>
                </div>
              </div>

              {/* Carte Google Maps (Placeholder) */}
              <div className="mt-8 pt-8 border-t border-gray-100">
                <p className="text-sm text-gray-500">
                  Visualisez notre emplacement (Placeholder pour carte) :
                </p>
                <div className="w-full h-48 bg-gray-200 rounded-lg mt-2 flex items-center justify-center text-gray-500 text-sm">
                  [Emplacement de la carte ici]
                </div>
              </div>
            </div>

            {/* Colonne du Formulaire de contact (Droite) */}
            <div className="lg:col-span-2 bg-white p-8 rounded-2xl shadow-xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Envoyez-nous un Message
              </h2>

              {submitMessage && (
                <div
                  className={`p-4 mb-4 rounded-lg font-medium ${
                    submitMessage.includes("succès")
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {submitMessage}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Ligne 1: Nom et Email */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Nom complet *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Votre nom"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition duration-150"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Adresse Email *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="votre.email@exemple.com"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition duration-150"
                      />
                    </div>
                  </div>
                </div>

                {/* Ligne 2: Téléphone et Sujet */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Numéro de Téléphone
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(+227) 99 00 00 00"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition duration-150"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Objet de la demande *
                    </label>
                    <div className="relative">
                      <select
                        name="subject"
                        id="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full pl-4 pr-4 py-3 border border-gray-300 rounded-xl appearance-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition duration-150 bg-white"
                      >
                        <option value="" disabled>
                          Sélectionnez un sujet
                        </option>
                        {subjects.map((subject, index) => (
                          <option key={index} value={subject}>
                            {subject}
                          </option>
                        ))}
                      </select>
                      <ArrowRight className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 rotate-90 pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* Ligne 3: Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Votre Message *
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-4 w-5 h-5 text-gray-400" />
                    <textarea
                      name="message"
                      id="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Décrivez votre demande en détail ici..."
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition duration-150 resize-none"
                    />
                  </div>
                </div>

                {/* Bouton de Soumission */}
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full group bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-[1.005] shadow-xl shadow-blue-500/30 disabled:bg-gray-400 disabled:shadow-none disabled:cursor-not-allowed"
                  >
                    <span className="flex items-center justify-center text-lg">
                      {isSubmitting ? (
                        <>
                          Envoi en cours...
                          <span className="animate-spin ml-2 h-5 w-5 border-t-2 border-b-2 border-white rounded-full"></span>
                        </>
                      ) : (
                        <>
                          Envoyer le Message
                          <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </span>
                  </button>
                </div>
              </form>
            </div>
            {/* Fin du Formulaire */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;