import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import ShareButtons from "@/components/ShareButtons";

const Contact = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-3xl mx-auto mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Свяжитесь с нами</h1>
        <p className="text-lg text-muted-foreground">
          У вас есть вопросы? Мы с радостью поможем вам и предоставим необходимую информацию
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        <Card className="hover:shadow-md transition-shadow">
          <CardContent className="pt-6">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
              <Phone className="text-primary h-6 w-6" />
            </div>
            <h3 className="font-bold text-xl mb-4 text-center">Телефон</h3>
            <div className="text-center mb-2">
              <p className="text-lg font-medium">+7 (800) 123-45-67</p>
              <p className="text-sm text-muted-foreground">Основная линия</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-medium">+7 (800) 765-43-21</p>
              <p className="text-sm text-muted-foreground">Учебный отдел</p>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow">
          <CardContent className="pt-6">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
              <Mail className="text-primary h-6 w-6" />
            </div>
            <h3 className="font-bold text-xl mb-4 text-center">Email</h3>
            <div className="text-center mb-2">
              <p className="text-lg font-medium">info@образование.рф</p>
              <p className="text-sm text-muted-foreground">Общие вопросы</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-medium">support@образование.рф</p>
              <p className="text-sm text-muted-foreground">Техническая поддержка</p>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow">
          <CardContent className="pt-6">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
              <MapPin className="text-primary h-6 w-6" />
            </div>
            <h3 className="font-bold text-xl mb-4 text-center">Адрес</h3>
            <div className="text-center">
              <p className="text-lg font-medium">ул. Образовательная, 42</p>
              <p className="text-sm text-muted-foreground mb-2">Москва, 123456</p>
              <Button variant="outline" size="sm">Показать на карте</Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        <div>
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-6">Написать нам</h2>
              <ContactForm />
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-6">Время работы</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Clock className="text-primary h-5 w-5 mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Учебный центр</h3>
                    <p className="text-sm text-muted-foreground">Пн-Пт: 9:00-21:00</p>
                    <p className="text-sm text-muted-foreground">Сб: 10:00-18:00</p>
                    <p className="text-sm text-muted-foreground">Вс: Выходной</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="text-primary h-5 w-5 mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Отдел консультаций</h3>
                    <p className="text-sm text-muted-foreground">Пн-Пт: 9:00-20:00</p>
                    <p className="text-sm text-muted-foreground">Сб-Вс: 10:00-16:00</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="text-primary h-5 w-5 mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Онлайн поддержка</h3>
                    <p className="text-sm text-muted-foreground">Ежедневно: 8:00-22:00</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="font-medium mb-2">Часто задаваемые вопросы</h3>
                <div className="space-y-2">
                  <Button variant="link" className="p-0 h-auto text-left justify-start">Как записаться на курс?</Button>
                  <Button variant="link" className="p-0 h-auto text-left justify-start">Можно ли отменить запись?</Button>
                  <Button variant="link" className="p-0 h-auto text-left justify-start">Как получить сертификат?</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-4">Поделиться страницей</h2>
        <ShareButtons title="Контакты образовательного центра" />
      </div>
    </div>
  );
};

export default Contact;
