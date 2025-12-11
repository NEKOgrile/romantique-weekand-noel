import { Calendar, Heart, Sparkles, Clock, MapPin } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-red-50">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjZmVlMmU4IiBzdHJva2Utd2lkdGg9IjIiIG9wYWNpdHk9Ii4zIi8+PC9nPjwvc3ZnPg==')] opacity-40"></div>

      <div className="relative max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center mb-4">
            <Heart className="w-12 h-12 text-rose-500 fill-rose-500 animate-pulse" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-rose-900 mb-4">
            Notre Week-end Magique
          </h1>
          <p className="text-xl text-rose-700 italic">
            Deux jours inoubliables ensemble
          </p>
        </div>

        <div className="space-y-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 border-2 border-rose-200 transform hover:scale-105 transition-transform duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-rose-500 rounded-full p-4">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-rose-900">Samedi 20</h2>
                <p className="text-rose-600">Le début de notre aventure</p>
              </div>
            </div>

            <div className="space-y-6 ml-4 pl-8 border-l-4 border-rose-300">
              <div className="relative">
                <div className="absolute -left-11 top-0 bg-rose-100 rounded-full p-2">
                  <Clock className="w-5 h-5 text-rose-600" />
                </div>
                <div className="bg-rose-50 rounded-xl p-6 transform hover:scale-105 transition-transform duration-300 cursor-pointer">
                  <h3 className="text-xl font-semibold text-rose-900 mb-2">18h00 - Rendez-vous</h3>
                  <p className="text-rose-700">
                    Notre moment commence... Le cœur qui bat, l'excitation de se retrouver 💕
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -left-11 top-0 bg-red-100 rounded-full p-2">
                  <Sparkles className="w-5 h-5 text-red-600" />
                </div>
                <div className="bg-gradient-to-r from-red-50 to-rose-50 rounded-xl p-6 transform hover:scale-105 transition-transform duration-300 cursor-pointer">
                  <h3 className="text-xl font-semibold text-rose-900 mb-2">Marché de Noël ✨</h3>
                  <p className="text-rose-700">
                    Les lumières scintillantes, l'odeur du vin chaud, la magie de Noël...
                    Main dans la main entre les stands enchantés
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -left-11 top-0 bg-rose-100 rounded-full p-2">
                  <MapPin className="w-5 h-5 text-rose-600" />
                </div>
                <div className="bg-rose-50 rounded-xl p-6 transform hover:scale-105 transition-transform duration-300 cursor-pointer">
                  <h3 className="text-xl font-semibold text-rose-900 mb-2">Soirée au Casino 🎰</h3>
                  <p className="text-rose-700">
                    Toi qui gagneras tout et moi qui perdrai comme d'habitude...
                    Mais on rigolera bien ! L'important, c'est de partager ces bons moments 😄
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 border-2 border-rose-200 transform hover:scale-105 transition-transform duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-red-500 rounded-full p-4">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-rose-900">Dimanche 21</h2>
                <p className="text-rose-600">La suite de notre histoire</p>
              </div>
            </div>

            <div className="space-y-6 ml-4 pl-8 border-l-4 border-red-300">
              <div className="relative">
                <div className="absolute -left-11 top-0 bg-blue-100 rounded-full p-2">
                  <Sparkles className="w-5 h-5 text-blue-600" />
                </div>
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 transform hover:scale-105 transition-transform duration-300 cursor-pointer">
                  <h3 className="text-xl font-semibold text-rose-900 mb-2">Patinoire sur glace ⛸️</h3>
                  <p className="text-rose-700">
                    Glisser sur la glace, rire ensemble, se tenir chaud...
                    Des moments de complicité givrés !
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -left-11 top-0 bg-rose-100 rounded-full p-2">
                  <Heart className="w-5 h-5 text-rose-600" />
                </div>
                <div className="bg-rose-50 rounded-xl p-6 transform hover:scale-105 transition-transform duration-300 cursor-pointer">
                  <h3 className="text-xl font-semibold text-rose-900 mb-2">Balade romantique 🌸</h3>
                  <p className="text-rose-700">
                    Profiter de l'instant présent, marcher côte à côte,
                    créer des souvenirs précieux
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center bg-gradient-to-r from-rose-500 to-red-500 rounded-3xl p-8 shadow-2xl">
          <Heart className="w-16 h-16 text-white mx-auto mb-4 fill-white animate-pulse" />
          <p className="text-2xl md:text-3xl text-white font-semibold italic">
            "Les plus beaux moments sont ceux qu'on partage à deux"
          </p>
          <div className="mt-6 flex items-center justify-center gap-2">
            <Sparkles className="w-6 h-6 text-rose-200" />
            <p className="text-rose-100 text-lg">Un week-end créé avec amour</p>
            <Sparkles className="w-6 h-6 text-rose-200" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
