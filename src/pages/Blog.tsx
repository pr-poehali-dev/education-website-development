import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CalendarDays, UserRound, ArrowRight } from "lucide-react";
import ShareButtons from "@/components/ShareButtons";

const Blog = () => {
  const articles = [
    {
      title: "Как эффективно подготовиться к экзаменам: 7 проверенных стратегий",
      description: "Проверенные методики, которые помогут вам максимально эффективно организовать подготовку к экзаменам любого уровня сложности.",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      author: "Анна Волкова",
      date: "22 апреля 2025",
      category: "обучение"
    },
    {
      title: "Дистанционное образование: преимущества и недостатки онлайн-обучения",
      description: "Рассматриваем все за и против современного дистанционного образования на основе опыта тысяч студентов.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80",
      author: "Дмитрий Соколов",
      date: "15 апреля 2025",
      category: "технологии"
    },
    {
      title: "Профессии будущего: какие навыки будут востребованы через 5 лет",
      description: "Анализ трендов рынка труда и прогноз, какие специальности и компетенции станут ключевыми в ближайшие годы.",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
      author: "Елена Морозова",
      date: "10 апреля 2025",
      category: "карьера"
    },
    {
      title: "Мотивация к обучению: как поддерживать интерес и избегать выгорания",
      description: "Практические советы по поддержанию высокой мотивации на протяжении всего образовательного процесса.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      author: "Павел Громов",
      date: "5 апреля 2025",
      category: "обучение"
    },
    {
      title: "Цифровые инструменты для повышения продуктивности учебы",
      description: "Обзор лучших приложений и сервисов, которые помогут студентам эффективнее усваивать материал.",
      image: "https://images.unsplash.com/photo-1581287053822-fd7bf4f4bfec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1101&q=80",
      author: "Инна Светлова",
      date: "1 апреля 2025",
      category: "технологии"
    },
    {
      title: "Как составить идеальное резюме для первой работы после учебы",
      description: "Практическое руководство по созданию привлекательного резюме даже при отсутствии значительного опыта работы.",
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      author: "Сергей Николаев",
      date: "25 марта 2025",
      category: "карьера"
    },
  ];

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-3xl mx-auto mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Образовательный блог</h1>
        <p className="text-lg text-muted-foreground">
          Полезные статьи, советы и исследования по вопросам современного образования
        </p>
      </div>

      <Tabs defaultValue="all" className="mb-12">
        <TabsList className="mx-auto flex justify-center">
          <TabsTrigger value="all">Все статьи</TabsTrigger>
          <TabsTrigger value="обучение">Обучение</TabsTrigger>
          <TabsTrigger value="технологии">Технологии</TabsTrigger>
          <TabsTrigger value="карьера">Карьера</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <BlogCard key={index} article={article} />
            ))}
          </div>
        </TabsContent>
        
        {["обучение", "технологии", "карьера"].map((category) => (
          <TabsContent key={category} value={category} className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles
                .filter((article) => article.category === category)
                .map((article, index) => (
                  <BlogCard key={index} article={article} />
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-4">Подпишитесь на обновления</h2>
        <p className="text-muted-foreground mb-6">Получайте уведомления о новых статьях прямо на вашу почту</p>
        <div className="flex max-w-md mx-auto">
          <input 
            type="email" 
            placeholder="Ваш email" 
            className="flex-grow rounded-l-md px-4 py-2 border focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
          <Button className="rounded-l-none">Подписаться</Button>
        </div>
      </div>

      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-4">Поделиться страницей</h2>
        <ShareButtons title="Образовательный блог" />
      </div>
    </div>
  );
};

interface BlogCardProps {
  article: {
    title: string;
    description: string;
    image: string;
    author: string;
    date: string;
    category: string;
  };
}

const BlogCard = ({ article }: BlogCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={article.image} 
          alt={article.title}
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
        />
        <div className="absolute top-2 right-2 bg-primary text-primary-foreground px-2 py-1 rounded text-xs font-medium">
          {article.category}
        </div>
      </div>
      <CardHeader>
        <CardTitle className="line-clamp-2">{article.title}</CardTitle>
        <CardDescription className="line-clamp-2">{article.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center text-sm text-muted-foreground space-x-4">
          <div className="flex items-center">
            <UserRound className="mr-1 h-3 w-3" />
            <span>{article.author}</span>
          </div>
          <div className="flex items-center">
            <CalendarDays className="mr-1 h-3 w-3" />
            <span>{article.date}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full group">
          Читать статью <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Blog;
