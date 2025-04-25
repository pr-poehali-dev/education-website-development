import { Link } from "react-router-dom";
import { ArrowRight, Lightbulb, Users, Award, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import ShareButtons from "@/components/ShareButtons";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-edu-accent to-edu-light py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Открывайте новые горизонты с <span className="text-edu-primary">ОбразумЦентром</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-700">
              Мы помогаем раскрыть потенциал через индивидуальный подход, современные методики обучения и профессиональные консультации.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-edu-primary hover:bg-edu-secondary transition-colors">
                <Link to="/services">Наши услуги</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">Связаться с нами</Link>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80" 
              alt="Образование" 
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Почему выбирают нас</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Наш центр объединяет лучшие образовательные практики и индивидуальный подход
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Lightbulb className="h-12 w-12 text-edu-primary mb-4" />
                <CardTitle>Инновационные методики</CardTitle>
                <CardDescription>
                  Мы используем современные образовательные технологии, адаптированные под индивидуальные потребности
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Link to="/services" className="text-edu-primary hover:text-edu-secondary flex items-center transition-colors">
                  Узнать больше <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardFooter>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-edu-primary mb-4" />
                <CardTitle>Опытные преподаватели</CardTitle>
                <CardDescription>
                  Наша команда состоит из квалифицированных специалистов с многолетним опытом работы
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Link to="/about" className="text-edu-primary hover:text-edu-secondary flex items-center transition-colors">
                  Наша команда <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardFooter>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Award className="h-12 w-12 text-edu-primary mb-4" />
                <CardTitle>Сертифицированные программы</CardTitle>
                <CardDescription>
                  Все наши образовательные программы сертифицированы и соответствуют международным стандартам
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Link to="/services" className="text-edu-primary hover:text-edu-secondary flex items-center transition-colors">
                  Программы обучения <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши услуги</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Комплексный подход к образованию для всех возрастов
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
              <img 
                src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" 
                alt="Обучение" 
                className="h-64 w-full object-cover"
              />
              <div className="p-6 flex-grow">
                <h3 className="text-2xl font-bold mb-3">Обучение</h3>
                <p className="text-gray-600 mb-4">
                  Индивидуальные и групповые занятия по различным дисциплинам для школьников, студентов и взрослых.
                </p>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-center">
                    <BookOpen className="h-5 w-5 text-edu-primary mr-2" />
                    <span>Языковые курсы</span>
                  </li>
                  <li className="flex items-center">
                    <BookOpen className="h-5 w-5 text-edu-primary mr-2" />
                    <span>Школьные предметы</span>
                  </li>
                  <li className="flex items-center">
                    <BookOpen className="h-5 w-5 text-edu-primary mr-2" />
                    <span>Профессиональные навыки</span>
                  </li>
                </ul>
              </div>
              <div className="px-6 pb-6 mt-auto">
                <Button asChild className="w-full bg-edu-primary hover:bg-edu-secondary transition-colors">
                  <Link to="/services#training">Подробнее</Link>
                </Button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
              <img 
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" 
                alt="Консультации" 
                className="h-64 w-full object-cover"
              />
              <div className="p-6 flex-grow">
                <h3 className="text-2xl font-bold mb-3">Консультации</h3>
                <p className="text-gray-600 mb-4">
                  Профессиональные консультации по образовательным вопросам, выбору профессии и планированию карьеры.
                </p>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-center">
                    <BookOpen className="h-5 w-5 text-edu-primary mr-2" />
                    <span>Профориентация</span>
                  </li>
                  <li className="flex items-center">
                    <BookOpen className="h-5 w-5 text-edu-primary mr-2" />
                    <span>Психологическая поддержка</span>
                  </li>
                  <li className="flex items-center">
                    <BookOpen className="h-5 w-5 text-edu-primary mr-2" />
                    <span>Карьерное консультирование</span>
                  </li>
                </ul>
              </div>
              <div className="px-6 pb-6 mt-auto">
                <Button asChild className="w-full bg-edu-primary hover:bg-edu-secondary transition-colors">
                  <Link to="/services#consultations">Подробнее</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Отзывы наших клиентов</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Что говорят о нас студенты и родители
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((testimonial) => (
              <Card key={testimonial} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span key={star} className="text-yellow-400 text-2xl">★</span>
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6">
                    "Благодаря ОбразумЦентру мой ребенок значительно улучшил свои знания по математике и английскому языку. Преподаватели находят индивидуальный подход и делают обучение интересным."
                  </p>
                  <div className="flex items-center">
                    <div className="h-12 w-12 rounded-full bg-edu-accent text-edu-primary flex items-center justify-center font-bold text-xl">
                      {String.fromCharCode(64 + testimonial)}
                    </div>
                    <div className="ml-4">
                      <h4 className="font-bold">Анна Иванова</h4>
                      <p className="text-gray-500 text-sm">Мама ученика</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-edu-primary">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Готовы начать свой образовательный путь?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Запишитесь на бесплатную консультацию и узнайте, как мы можем помочь вам достичь ваших образовательных целей
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="default" className="bg-white text-edu-primary hover:bg-edu-accent hover:text-edu-primary transition-colors">
              <Link to="/contact">Записаться на консультацию</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10 transition-colors">
              <Link to="/services">Узнать больше об услугах</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold">Наш блог</h2>
            <Link to="/blog" className="text-edu-primary hover:text-edu-secondary flex items-center transition-colors">
              Все статьи <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Как эффективно организовать процесс обучения",
                image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
                date: "15 апреля 2025"
              },
              {
                title: "Современные методики преподавания иностранных языков",
                image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80",
                date: "10 апреля 2025"
              },
              {
                title: "Как помочь ребенку определиться с выбором профессии",
                image: "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
                date: "5 апреля 2025"
              }
            ].map((post, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                  <h3 className="text-xl font-bold mb-3 line-clamp-2">{post.title}</h3>
                  <Link to="/blog" className="text-edu-primary hover:text-edu-secondary flex items-center transition-colors font-medium">
                    Читать статью <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </CardContent>
                <CardFooter className="border-t px-6 py-4">
                  <div className="flex justify-between items-center w-full">
                    <p className="text-sm text-gray-500">5 мин. чтения</p>
                    <ShareButtons className="justify-end" />
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
