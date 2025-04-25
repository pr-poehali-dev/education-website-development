import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { BookOpen, Users, CalendarClock, ArrowRight, CheckCircle2, Phone, Mail, MapPin, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";

const Index = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary/5 to-primary/10 py-20 px-4">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Современное образование для успешного будущего
            </h1>
            <p className="text-xl text-muted-foreground">
              Раскройте свой потенциал с нашими образовательными программами и экспертной поддержкой
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <Link to="/services">Начать обучение</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/about">Узнать больше</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <img
              className="rounded-lg shadow-xl"
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              alt="Образовательный процесс"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
              <div className="flex items-center space-x-2">
                <div className="rounded-full bg-primary/10 p-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">5000+</p>
                  <p className="text-xs text-muted-foreground">выпускников</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Наши образовательные услуги</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Выберите подходящий формат обучения и развивайте необходимые навыки с поддержкой опытных преподавателей
          </p>
        </div>

        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                <BookOpen className="text-primary h-6 w-6" />
              </div>
              <h3 className="font-bold text-xl mb-2 text-center">Онлайн обучение</h3>
              <p className="text-muted-foreground text-center mb-6">
                Удобные видеоуроки, интерактивные задания и личная поддержка преподавателя
              </p>
              <Button variant="outline" className="w-full group" asChild>
                <Link to="/services">
                  Подробнее <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                <Users className="text-primary h-6 w-6" />
              </div>
              <h3 className="font-bold text-xl mb-2 text-center">Групповые занятия</h3>
              <p className="text-muted-foreground text-center mb-6">
                Эффективное обучение в небольших группах с опытными преподавателями
              </p>
              <Button variant="outline" className="w-full group" asChild>
                <Link to="/services">
                  Подробнее <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                <CalendarClock className="text-primary h-6 w-6" />
              </div>
              <h3 className="font-bold text-xl mb-2 text-center">Индивидуальные консультации</h3>
              <p className="text-muted-foreground text-center mb-6">
                Персональный подход и индивидуальная программа для достижения ваших целей
              </p>
              <Button variant="outline" className="w-full group" asChild>
                <Link to="/services">
                  Подробнее <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-primary/5 py-16 px-4">
        <div className="container mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Отзывы наших учеников</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Узнайте, что говорят о нас те, кто уже прошел обучение в нашем центре
          </p>
        </div>

        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              text: "Благодаря курсам я смогла значительно улучшить свои знания и поступить в желаемый университет. Преподаватели доступно объясняют материал и всегда готовы ответить на вопросы.",
              name: "Мария К.",
              role: "Студентка"
            },
            {
              text: "Отличный образовательный центр! Программа обучения составлена очень грамотно, все объясняется доступным языком. После прохождения курса мой ребенок полюбил математику!",
              name: "Андрей П.",
              role: "Родитель ученика"
            },
            {
              text: "Я прошел программу профессиональной переподготовки, и это помогло мне сменить сферу деятельности. Высокое качество обучения и поддержка на всех этапах!",
              name: "Елена С.",
              role: "Выпускница"
            }
          ].map((testimonial, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="mb-4 text-primary">
                  {"★".repeat(5)}
                </div>
                <p className="mb-6 italic">{testimonial.text}</p>
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Последние статьи нашего блога</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Читайте полезные материалы по образованию, развитию и карьере
          </p>
        </div>

        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {[
            {
              title: "Как эффективно подготовиться к экзаменам",
              image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            },
            {
              title: "Преимущества и недостатки онлайн-обучения",
              image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80"
            },
            {
              title: "Профессии будущего: какие навыки будут востребованы",
              image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
            }
          ].map((article, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">{article.title}</h3>
                <Button variant="link" className="p-0" asChild>
                  <Link to="/blog">
                    Читать статью <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild>
            <Link to="/blog">Все статьи</Link>
          </Button>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-primary/5 py-16 px-4">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Остались вопросы?</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Заполните форму, и мы свяжемся с вами в ближайшее время, чтобы ответить на все интересующие вас вопросы
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                { icon: <Phone className="h-5 w-5 text-primary" />, text: "+7 (800) 123-45-67" },
                { icon: <Mail className="h-5 w-5 text-primary" />, text: "info@образование.рф" },
                { icon: <MapPin className="h-5 w-5 text-primary" />, text: "г. Москва, ул. Образовательная, 42" },
                { icon: <Clock className="h-5 w-5 text-primary" />, text: "Пн-Пт: 9:00-21:00" }
              ].map((item, index) => (
                <div key={index} className="flex items-center">
                  <div className="mr-3">{item.icon}</div>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
            <Button size="lg" asChild>
              <Link to="/contact">Все контакты</Link>
            </Button>
          </div>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-6">Форма обратной связи</h3>
              <ContactForm />
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Index;
