import { FC } from "react";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  Users, 
  TrendingUp,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowRight,
  Banknote,
  Award,
  Clock,
  Shield
} from "lucide-react";
import logo from "../assets/logoC.svg";

const Footer: FC = () => {
  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-gray-300 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #3b82f6 0%, transparent 50%), 
                             radial-gradient(circle at 75% 75%, #06b6d4 0%, transparent 50%)`,
          }}
        />
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600"></div>
      
      <div className="relative container mx-auto px-6 pt-16 pb-8">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 mb-12">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 cursor-pointer">
              <img
                src={logo}
                alt="Capital Analytics"
                className="w-14 h-14 sm:w-16 sm:h-16 object-contain"
              />
              <div className="hidden sm:block">
                <h1 className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">
                  apital Analysis
                </h1>
                <p className="text-sm text-blue-200 opacity-80 mt-1">
                  la perspective de vos chiffres
                </p>
              </div>
            </div>

            <p className="text-gray-400 mb-6 mt-4 leading-relaxed">
              Nous offrons des solutions digitales sur mesure : création de sites web,
              conseil stratégique, ingénierie financière et accompagnement personnalisé pour propulser votre activité vers le succès.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-all duration-300 transform hover:scale-110 hover:shadow-lg group">
                <Facebook className="w-5 h-5 group-hover:text-white transition-colors" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-sky-500 transition-all duration-300 transform hover:scale-110 hover:shadow-lg group">
                <Twitter className="w-5 h-5 group-hover:text-white transition-colors" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-all duration-300 transform hover:scale-110 hover:shadow-lg group">
                <Linkedin className="w-5 h-5 group-hover:text-white transition-colors" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-pink-600 transition-all duration-300 transform hover:scale-110 hover:shadow-lg group">
                <Instagram className="w-5 h-5 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg relative">
              Contact
              <div className="w-8 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 mt-2"></div>
            </h3>
            <div className="space-y-4">
              <div className="flex items-center group">
                <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center mr-3 group-hover:bg-blue-600 transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="group-hover:text-white transition-colors">+227 97 40 00 12</span>
              </div>
              <div className="flex items-center group">
                <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center mr-3 group-hover:bg-blue-600 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="group-hover:text-white transition-colors">contact@capital-analysis.com</span>
              </div>
              <div className="flex items-center group">
                <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center mr-3 group-hover:bg-blue-600 transition-colors">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="group-hover:text-white transition-colors">Niamey, Niger</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg relative">
              Nos Services
              <div className="w-8 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 mt-2"></div>
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="flex items-center group hover:text-white transition-colors">
                  <Banknote className="w-4 h-4 mr-3 text-green-400" />
                  <span>Ingénierie Financière</span>
                  <ArrowRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="#services" className="flex items-center group hover:text-white transition-colors">
                  <Globe className="w-4 h-4 mr-3 text-blue-400" />
                  <span>IT & Développement</span>
                  <ArrowRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="#services" className="flex items-center group hover:text-white transition-colors">
                  <Users className="w-4 h-4 mr-3 text-cyan-400" />
                  <span>Etude & Conseil</span>
                  <ArrowRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="#services" className="flex items-center group hover:text-white transition-colors">
                  <TrendingUp className="w-4 h-4 mr-3 text-green-400" />
                  <span>Suivi & Assistance Comptable</span>
                  <ArrowRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg relative">
              Newsletter
              <div className="w-8 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 mt-2"></div>
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Restez informé des dernières tendances digitales et de nos actualités.
            </p>
            <div className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Votre adresse email"
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors"
                />
                <Mail className="absolute right-3 top-3.5 w-5 h-5 text-gray-400" />
              </div>
              <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center group">
                S'abonner
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <div className="text-gray-400 text-sm text-center md:text-left">
           © 2025 Capital Analysis. Tous droits réservés.
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center md:justify-center gap-6">
            <div className="flex items-center space-x-2 text-sm">
              <Shield className="w-4 h-4 text-green-400" />
              <span className="text-gray-400">100% Sécurisé</span>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <Clock className="w-4 h-4 text-blue-400" />
              <span className="text-gray-400">Support 24/7</span>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <Award className="w-4 h-4 text-yellow-400" />
              <span className="text-gray-400">Certifié</span>
            </div>
          </div>

          {/* Legal Links */}
          <div className="flex items-center space-x-6 text-sm text-center md:text-right">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Politique de confidentialité
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Mentions légales
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
