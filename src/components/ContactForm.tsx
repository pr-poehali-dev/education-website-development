import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { CheckCircle2 } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, { message: "Имя должно содержать минимум 2 символа" }),
  email: z.string().email({ message: "Введите корректный email" }),
  phone: z.string().min(6, { message: "Введите корректный номер телефона" }),
  subject: z.string().min(3, { message: "Тема должна содержать минимум 3 символа" }),
  message: z.string().min(10, { message: "Сообщение должно содержать минимум 10 символов" }),
});

type FormValues = z.infer<typeof formSchema>;

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormValues) => {
    setIsSubmitting(true);
    
    // Имитация отправки формы
    setTimeout(() => {
      console.log(data);
      setIsSubmitting(false);
      setIsSuccess(true);
      toast({
        title: "Сообщение отправлено",
        description: "Мы свяжемся с вами в ближайшее время",
      });
      reset();
      
      // Сбросить состояние успеха через 5 секунд
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    }, 1000);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      {isSuccess ? (
        <div className="text-center p-8 rounded-lg bg-edu-accent animate-fade-in">
          <CheckCircle2 className="mx-auto h-12 w-12 text-edu-primary mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Спасибо за ваше сообщение!</h3>
          <p className="text-gray-600 mb-4">
            Мы получили ваш запрос и свяжемся с вами в ближайшее время.
          </p>
          <Button
            onClick={() => setIsSuccess(false)}
            className="bg-edu-primary hover:bg-edu-secondary transition-colors"
          >
            Отправить новое сообщение
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <Input
              placeholder="Ваше имя"
              {...register("name")}
              className={errors.name ? "border-red-500" : ""}
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
            )}
          </div>

          <div>
            <Input
              placeholder="Email"
              type="email"
              {...register("email")}
              className={errors.email ? "border-red-500" : ""}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div>
            <Input
              placeholder="Телефон"
              type="tel"
              {...register("phone")}
              className={errors.phone ? "border-red-500" : ""}
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>
            )}
          </div>

          <div>
            <Input
              placeholder="Тема"
              {...register("subject")}
              className={errors.subject ? "border-red-500" : ""}
            />
            {errors.subject && (
              <p className="mt-1 text-sm text-red-500">{errors.subject.message}</p>
            )}
          </div>

          <div>
            <Textarea
              placeholder="Ваше сообщение"
              rows={5}
              {...register("message")}
              className={errors.message ? "border-red-500" : ""}
            />
            {errors.message && (
              <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
            )}
          </div>

          <Button
            type="submit"
            className="w-full bg-edu-primary hover:bg-edu-secondary transition-colors"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Отправка..." : "Отправить сообщение"}
          </Button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
