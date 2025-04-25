import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import ShareButtons from "@/components/ShareButtons";

const About = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-3xl mx-auto mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight mb-4">О нашем образовательном центре</h1>
        <p className="text-lg text-muted-foreground">
          Наша миссия — делать качественное образование доступным каждому
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">Наша история</h2>
          <p className="mb-4">
            Образовательный центр был основан в 2015 году группой опытных преподавателей, 
            объединенных общей идеей сделать обучение более персонализированным и доступным.
          </p>
          <p className="mb-4">
            За 10 лет работы мы помогли более 5000 студентам успешно освоить новые предметы,
            подготовиться к экзаменам и поступить в ведущие университеты страны и мира.
          </p>
          <p>
            Сегодня мы продолжаем развивать наши программы, внедряя инновационные методики
            и современные технологии для обеспечения максимальной эффективности обучения.
          </p>
        </div>
        <div>
          <img 
            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
            alt="Наша команда" 
            className="rounded-lg shadow-lg w-full object-cover h-[400px]"
          />
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Наши ценности</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="pt-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                <span className="text-primary text-xl">🎯</span>
              </div>
              <h3 className="font-bold text-xl mb-2 text-center">Результативность</h3>
              <p className="text-muted-foreground text-center">
                Мы ориентированы на достижение конкретных измеримых результатов для каждого ученика
              </p>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="pt-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                <span className="text-primary text-xl">🤝</span>
              </div>
              <h3 className="font-bold text-xl mb-2 text-center">Индивидуальный подход</h3>
              <p className="text-muted-foreground text-center">
                Мы учитываем особенности и потребности каждого ученика при составлении программы
              </p>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="pt-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                <span className="text-primary text-xl">💡</span>
              </div>
              <h3 className="font-bold text-xl mb-2 text-center">Инновации</h3>
              <p className="text-muted-foreground text-center">
                Мы применяем современные методики и технологии для эффективного обучения
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Наша команда</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            {
              name: "Александра Петрова",
              role: "Основатель и директор",
              image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            },
            {
              name: "Михаил Сидоров",
              role: "Старший преподаватель",
              image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            },
            {
              name: "Елена Иванова",
              role: "Методолог",
              image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            },
          ].map((member, index) => (
            <div key={index} className="text-center">
              <Avatar className="w-24 h-24 mx-auto mb-4">
                <AvatarImage src={member.image} alt={member.name} />
                <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <h3 className="font-bold text-lg">{member.name}</h3>
              <p className="text-muted-foreground">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-4">Поделиться страницей</h2>
        <ShareButtons title="О нашем образовательном центре" />
      </div>
    </div>
  );
};

export default About;
