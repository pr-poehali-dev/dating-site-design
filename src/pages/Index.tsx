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
      description: 'Люблю путешествия, йогу и хорошие фильмы. Ищу серьезные отношения.',
      interests: ['Путешествия', 'Йога', 'Кино'],
      photo: '/img/b37921f7-7695-4980-a27a-f5a8f07b57c8.jpg',
      match: 89
    },
    {
      id: 2,
      name: 'Дмитрий',
      age: 28,
      city: 'Санкт-Петербург',
      description: 'IT-специалист, увлекаюсь фотографией и горным туризмом.',
      interests: ['Программирование', 'Фотография', 'Туризм'],
      photo: '/img/7e75b3ba-6ac2-42d9-bfbd-4c283c15fa19.jpg',
      match: 76
    },
    {
      id: 3,
      name: 'Мария',
      age: 26,
      city: 'Казань',
      description: 'Дизайнер, люблю искусство, музыку и активный образ жизни.',
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 font-roboto">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Heart" className="text-primary" size={32} />
              <h1 className="text-2xl font-bold text-slate-800">LoveConnect</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Icon name="User" size={20} className="mr-2" />
                Профиль
              </Button>
              <Button variant="ghost" size="sm">
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
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Найди свою <span className="text-primary">вторую половинку</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Тысячи людей уже нашли любовь благодаря нашей платформе. Присоединяйся!
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-12">
          <div className="relative">
            <Icon name="Search" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
            <Input
              placeholder="Поиск по имени или интересам..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 py-3 text-lg border-2 focus:border-primary transition-colors"
            />
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className="lg:w-80 space-y-6">
            <Card className="p-6 bg-white/90 backdrop-blur-sm border-0 shadow-lg">
              <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center">
                <Icon name="SlidersHorizontal" className="mr-2 text-primary" size={20} />
                Фильтры поиска
              </h3>
              
              <div className="space-y-6">
                {/* Age Filter */}
                <div>
                  <label className="text-sm font-medium text-slate-700 mb-3 block">
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
                  <label className="text-sm font-medium text-slate-700 mb-3 block">
                    Город
                  </label>
                  <Select value={selectedCity} onValueChange={setSelectedCity}>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите город" />
                    </SelectTrigger>
                    <SelectContent>
                      {cities.map(city => (
                        <SelectItem key={city} value={city}>{city}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Interests Filter */}
                <div>
                  <label className="text-sm font-medium text-slate-700 mb-3 block">
                    Интересы
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {interests.map(interest => (
                      <Badge
                        key={interest}
                        variant="outline"
                        className="cursor-pointer hover:bg-primary hover:text-white transition-colors"
                      >
                        {interest}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button className="w-full bg-primary hover:bg-primary/90 transition-colors">
                  <Icon name="Search" className="mr-2" size={16} />
                  Применить фильтры
                </Button>
              </div>
            </Card>
          </aside>

          {/* User Cards Grid */}
          <main className="flex-1">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-xl font-semibold text-slate-800">
                Найдено {filteredUsers.length} анкет
              </h3>
              <Select defaultValue="match">
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="match">По совпадению</SelectItem>
                  <SelectItem value="age">По возрасту</SelectItem>
                  <SelectItem value="distance">По расстоянию</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredUsers.map(user => (
                <Card key={user.id} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white/90 backdrop-blur-sm border-0">
                  <CardContent className="p-0">
                    <div className="relative">
                      <img
                        src={user.photo}
                        alt={user.name}
                        className="w-full h-64 object-cover rounded-t-lg"
                      />
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                        <span className="text-sm font-medium text-primary">{user.match}% совпадение</span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-xl font-semibold text-slate-800">{user.name}, {user.age}</h3>
                        <div className="flex items-center text-slate-500">
                          <Icon name="MapPin" size={16} className="mr-1" />
                          <span className="text-sm">{user.city}</span>
                        </div>
                      </div>
                      
                      <p className="text-slate-600 mb-4 line-clamp-2">
                        {user.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-1 mb-4">
                        {user.interests.map(interest => (
                          <Badge key={interest} variant="secondary" className="text-xs">
                            {interest}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="flex-1 hover:bg-slate-100">
                          <Icon name="Heart" size={16} className="mr-2" />
                          Нравится
                        </Button>
                        <Button size="sm" className="flex-1 bg-secondary hover:bg-secondary/90">
                          <Icon name="MessageCircle" size={16} className="mr-2" />
                          Написать
                        </Button>
                        <Button variant="outline" size="sm">
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
                <Icon name="Users" size={64} className="mx-auto text-slate-300 mb-4" />
                <h3 className="text-xl font-semibold text-slate-600 mb-2">
                  Никого не найдено
                </h3>
                <p className="text-slate-500">
                  Попробуйте изменить критерии поиска
                </p>
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-800 text-white mt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Heart" className="text-primary" size={24} />
                <h4 className="text-lg font-semibold">LoveConnect</h4>
              </div>
              <p className="text-slate-300">
                Платформа для поиска серьезных отношений и настоящей любви.
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Компания</h5>
              <ul className="space-y-2 text-slate-300">
                <li><a href="#" className="hover:text-primary transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Карьера</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Блог</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Поддержка</h5>
              <ul className="space-y-2 text-slate-300">
                <li><a href="#" className="hover:text-primary transition-colors">Помощь</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Безопасность</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Социальные сети</h5>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="text-slate-300 hover:text-primary">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button variant="ghost" size="sm" className="text-slate-300 hover:text-primary">
                  <Icon name="Twitter" size={20} />
                </Button>
                <Button variant="ghost" size="sm" className="text-slate-300 hover:text-primary">
                  <Icon name="Facebook" size={20} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 LoveConnect. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;