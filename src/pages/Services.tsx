import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Users, CalendarClock, ArrowRight } from "lucide-react";
import ShareButtons from "@/components/ShareButtons";

const Services = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-3xl mx-auto mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Наши образовательные услуги</h1>
        <p className="text-lg text-muted-foreground">
          Мы предлагаем широкий спектр образовательных услуг, чтобы помочь вам достичь ваших целей в обучении
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <BookOpen className="text-primary h-6 w-6" />
            </div>
            <CardTitle>Онлайн обучение</CardTitle>
            <CardDescription>Гибкие программы для удобного обучения из любой точки мира</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <span className="mr-2 text-primary">✓</span>
                <span>Интерактивные видеоуроки по востребованным дисциплинам</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-primary">✓</span>
                <span>Персональная консультация с преподавателем</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-primary">✓</span>
                <span>Удобный график и доступ к материалам 24/7</span>
              </li>
            </ul>
            <Button variant="outline" className="w-full group">
              Подробнее <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Users className="text-primary h-6 w-6" />
            </div>
            <CardTitle>Групповые занятия</CardTitle>
            <CardDescription>Эффективное обучение в дружественной атмосфере</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <span className="mr-2 text-primary">✓</span>
                <span>Группы до 8 человек для максимального внимания</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-primary">✓</span>
                <span>Практические проекты и групповая работа</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-primary">✓</span>
                <span>Сертификат о прохождении программы</span>
              </li>
            </ul>
            <Button variant="outline" className="w-full group">
              Подробнее <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="mb-16">
        <Card className="border-primary/20">
          <CardHeader>
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <CalendarClock className="text-primary h-6 w-6" />
            </div>
            <CardTitle>Индивидуальные консультации</CardTitle>
            <CardDescription>Персональный подход к вашим образовательным потребностям</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 rounded-lg bg-muted">
                <h3 className="font-medium mb-2">Карьерная консультация</h3>
                <p className="text-sm text-muted-foreground mb-4">Поможем определить оптимальную траекторию развития</p>
                <Button size="sm" className="w-full">Записаться</Button>
              </div>
              
              <div className="p-4 rounded-lg bg-muted">
                <h3 className="font-medium mb-2">Профориентация</h3>
                <p className="text-sm text-muted-foreground mb-4">Выявление склонностей и выбор подходящей профессии</p>
                <Button size="sm" className="w-full">Записаться</Button>
              </div>
              
              <div className="p-4 rounded-lg bg-muted">
                <h3 className="font-medium mb-2">Академическая помощь</h3>
                <p className="text-sm text-muted-foreground mb-4">Поддержка в сложных предметах и подготовка к экзаменам</p>
                <Button size="sm" className="w-full">Записаться</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-4">Поделиться страницей</h2>
        <ShareButtons title="Образовательные услуги" />
      </div>
    </div>
  );
};

export default Services;
