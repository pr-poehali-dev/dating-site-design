import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [ageRange, setAgeRange] = useState([18, 35]);
  const [selectedCity, setSelectedCity] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const users = [
    {
      id: 1,
      name: 'Анна',
      age: 25,
      city: 'Москва',
      description: 'Обожаю путешествия, йогу и крутые фильмы! В поиске чего-то серьезного ✨',
      interests: ['Путешествия', 'Йога', 'Кино'],
      photo: '/img/b37921f7-7695-4980-a27a-f5a8f07b57c8.jpg',
      match: 89
    },
    {
      id: 2,
      name: 'Дмитрий',
      age: 28,
      city: 'Санкт-Петербург',
      description: 'IT-бро, фотографирую закаты и покоряю горные вершины 🏔️',
      interests: ['Программирование', 'Фотография', 'Туризм'],
      photo: '/img/7e75b3ba-6ac2-42d9-bfbd-4c283c15fa19.jpg',
      match: 76
    },
    {
      id: 3,
      name: 'Мария',
      age: 26,
      city: 'Казань',
      description: 'Креативный дизайнер, меломан и фанатка активного лайфстайла 🎨',
      interests: ['Дизайн', 'Музыка', 'Спорт'],
      photo: '/img/3c9856e1-ce0d-45cf-88a0-f0c385dbeeb9.jpg',
      match: 92
    }
  ];

  const cities = ['Все города', 'Москва', 'Санкт-Петербург', 'Казань', 'Екатеринбург', 'Новосибирск'];
  const interests = ['Путешествия', 'Спорт', 'Музыка', 'Кино', 'Искусство', 'Технологии', 'Кулинария', 'Чтение'];

  const filteredUsers = users.filter(user => {
    const ageMatch = user.age >= ageRange[0] && user.age <= ageRange[1];
    const cityMatch = !selectedCity || selectedCity === 'Все города' || user.city === selectedCity;
    const searchMatch = !searchQuery || user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       user.interests.some(interest => interest.toLowerCase().includes(searchQuery.toLowerCase()));
    return ageMatch && cityMatch && searchMatch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-800 to-indigo-900 font-roboto relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.3),transparent_50%)] animate-pulse"></div>
      <div className="absolute top-10 left-10 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
      
      <div className="relative z-10">
        {/* Header */}
        <header className="bg-black/20 backdrop-blur-xl border-b border-white/10 sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Icon name="Heart" className="text-pink-400" size={32} />
                <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">VibeMatch 💜</h1>
              </div>
              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
                  <Icon name="User" size={20} className="mr-2" />
                  Профиль
                </Button>
                <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  Сообщения
                </Button>
              </div>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-white mb-4 drop-shadow-lg">
              Найди свой <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">вайб</span> 🔥
            </h2>
            <p className="text-xl text-purple-200 max-w-2xl mx-auto">
              Миллионы молодых людей уже нашли свои пары! Время и тебе засиять ✨
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-12">
            <div className="relative">
              <Icon name="Search" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-300" size={20} />
              <Input
                placeholder="Найди свой вайб..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 py-3 text-lg border-2 border-purple-400/30 bg-white/10 backdrop-blur-lg text-white placeholder-purple-200 focus:border-pink-400 focus:ring-2 focus:ring-pink-400/50 transition-all rounded-xl"
              />
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <aside className="lg:w-80 space-y-6">
              <Card className="p-6 bg-black/30 backdrop-blur-xl border border-purple-400/20 shadow-2xl rounded-2xl">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <Icon name="SlidersHorizontal" className="mr-2 text-pink-400" size={20} />
                  Настрой фильтры 🎯
                </h3>
                
                <div className="space-y-6">
                  {/* Age Filter */}
                  <div>
                    <label className="text-sm font-medium text-purple-200 mb-3 block">
                      Возраст: {ageRange[0]} - {ageRange[1]} лет
                    </label>
                    <Slider
                      value={ageRange}
                      onValueChange={setAgeRange}
                      min={18}
                      max={65}
                      step={1}
                      className="mb-4"
                    />
                  </div>

                  {/* Location Filter */}
                  <div>
                    <label className="text-sm font-medium text-purple-200 mb-3 block">
                      Локация 📍
                    </label>
                    <Select value={selectedCity} onValueChange={setSelectedCity}>
                      <SelectTrigger className="bg-white/10 border-purple-400/30 text-white">
                        <SelectValue placeholder="Выберите город" />
                      </SelectTrigger>
                      <SelectContent className="bg-black/90 border-purple-400/20">
                        {cities.map(city => (
                          <SelectItem key={city} value={city} className="text-white hover:bg-purple-600/50">{city}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Interests Filter */}
                  <div>
                    <label className="text-sm font-medium text-purple-200 mb-3 block">
                      Интересы 🎨
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {interests.map(interest => (
                        <Badge
                          key={interest}
                          variant="outline"
                          className="cursor-pointer hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 hover:text-white transition-all hover:scale-105 border-purple-400/30 text-purple-200"
                        >
                          {interest}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 transition-all hover:scale-105 shadow-lg hover:shadow-pink-500/25">
                    <Icon name="Search" className="mr-2" size={16} />
                    Погнали искать! 🚀
                  </Button>
                </div>
              </Card>
            </aside>

            {/* User Cards Grid */}
            <main className="flex-1">
              <div className="mb-6 flex items-center justify-between">
                <h3 className="text-xl font-semibold text-white">
                  Найдено {filteredUsers.length} вайбовых анкет ✨
                </h3>
                <Select defaultValue="match">
                  <SelectTrigger className="w-48 bg-white/10 border-purple-400/30 text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-black/90 border-purple-400/20">
                    <SelectItem value="match" className="text-white hover:bg-purple-600/50">По вайбу 🔥</SelectItem>
                    <SelectItem value="age" className="text-white hover:bg-purple-600/50">По возрасту</SelectItem>
                    <SelectItem value="distance" className="text-white hover:bg-purple-600/50">По близости 📍</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredUsers.map(user => (
                  <Card key={user.id} className="group hover:shadow-2xl hover:shadow-pink-500/25 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 bg-black/40 backdrop-blur-xl border border-purple-400/20 rounded-2xl overflow-hidden">
                    <CardContent className="p-0">
                      <div className="relative">
                        <img
                          src={user.photo}
                          alt={user.name}
                          className="w-full h-64 object-cover rounded-t-2xl"
                        />
                        <div className="absolute top-4 right-4 bg-gradient-to-r from-pink-500 to-purple-600 backdrop-blur-sm px-3 py-1 rounded-full shadow-lg">
                          <span className="text-sm font-bold text-white">{user.match}% вайб 🔥</span>
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="text-xl font-bold text-white">{user.name}, {user.age}</h3>
                          <div className="flex items-center text-purple-300">
                            <Icon name="MapPin" size={16} className="mr-1" />
                            <span className="text-sm">{user.city}</span>
                          </div>
                        </div>
                        
                        <p className="text-purple-200 mb-4 line-clamp-2">
                          {user.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-1 mb-4">
                          {user.interests.map(interest => (
                            <Badge key={interest} variant="secondary" className="text-xs bg-purple-600/30 text-purple-200">
                              {interest}
                            </Badge>
                          ))}
                        </div>
                        
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" className="flex-1 border-pink-400/50 text-pink-300 hover:bg-pink-500 hover:text-white transition-all hover:scale-105">
                            <Icon name="Heart" size={16} className="mr-2" />
                            Лайк
                          </Button>
                          <Button size="sm" className="flex-1 bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 transition-all hover:scale-105 shadow-lg">
                            <Icon name="MessageCircle" size={16} className="mr-2" />
                            Писать
                          </Button>
                          <Button variant="outline" size="sm" className="border-yellow-400/50 text-yellow-400 hover:bg-yellow-400 hover:text-black transition-all hover:scale-105">
                            <Icon name="Star" size={16} />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {filteredUsers.length === 0 && (
                <div className="text-center py-12">
                  <Icon name="Users" size={64} className="mx-auto text-purple-300 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Никого не найдено 😢
                  </h3>
                  <p className="text-purple-200">
                    Попробуй поменять настройки фильтров
                  </p>
                </div>
              )}
            </main>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-black/40 backdrop-blur-xl text-white mt-20 border-t border-white/10">
          <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <Icon name="Heart" className="text-pink-400" size={24} />
                  <h4 className="text-lg font-semibold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">VibeMatch</h4>
                </div>
                <p className="text-purple-200">
                  Платформа для поиска твоего идеального вайба и настоящих отношений ✨
                </p>
              </div>
              <div>
                <h5 className="font-semibold mb-4 text-pink-400">Компания</h5>
                <ul className="space-y-2 text-purple-200">
                  <li><a href="#" className="hover:text-pink-400 transition-colors">О нас</a></li>
                  <li><a href="#" className="hover:text-pink-400 transition-colors">Карьера</a></li>
                  <li><a href="#" className="hover:text-pink-400 transition-colors">Блог</a></li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold mb-4 text-pink-400">Поддержка</h5>
                <ul className="space-y-2 text-purple-200">
                  <li><a href="#" className="hover:text-pink-400 transition-colors">Помощь</a></li>
                  <li><a href="#" className="hover:text-pink-400 transition-colors">Безопасность</a></li>
                  <li><a href="#" className="hover:text-pink-400 transition-colors">Контакты</a></li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold mb-4 text-pink-400">Социальные сети</h5>
                <div className="flex space-x-4">
                  <Button variant="ghost" size="sm" className="text-purple-200 hover:text-pink-400 hover:bg-white/10">
                    <Icon name="Instagram" size={20} />
                  </Button>
                  <Button variant="ghost" size="sm" className="text-purple-200 hover:text-pink-400 hover:bg-white/10">
                    <Icon name="Twitter" size={20} />
                  </Button>
                  <Button variant="ghost" size="sm" className="text-purple-200 hover:text-pink-400 hover:bg-white/10">
                    <Icon name="Facebook" size={20} />
                  </Button>
                </div>
              </div>
            </div>
            <div className="border-t border-white/10 mt-8 pt-8 text-center text-purple-300">
              <p>&copy; 2024 VibeMatch. Все права защищены. Made with 💜</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;