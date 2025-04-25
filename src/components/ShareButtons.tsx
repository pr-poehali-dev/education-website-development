import { Facebook, Twitter, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ShareButtonsProps {
  url?: string;
  title?: string;
  className?: string;
}

const ShareButtons = ({ url, title, className }: ShareButtonsProps) => {
  const currentUrl = url || window.location.href;
  const pageTitle = title || document.title;
  const encodedUrl = encodeURIComponent(currentUrl);
  const encodedTitle = encodeURIComponent(pageTitle);

  const shareLinks = [
    {
      name: "Facebook",
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      icon: <Facebook size={16} />,
      color: "bg-[#3b5998] hover:bg-[#324b80]"
    },
    {
      name: "Twitter",
      url: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      icon: <Twitter size={16} />,
      color: "bg-[#1DA1F2] hover:bg-[#0d8bd9]"
    },
    {
      name: "LinkedIn",
      url: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`,
      icon: <Linkedin size={16} />,
      color: "bg-[#0077b5] hover:bg-[#00669c]"
    },
    {
      name: "Email",
      url: `mailto:?subject=${encodedTitle}&body=${encodedUrl}`,
      icon: <Mail size={16} />,
      color: "bg-gray-600 hover:bg-gray-700"
    }
  ];

  return (
    <div className={`flex space-x-2 ${className}`}>
      {shareLinks.map((link) => (
        <Button
          key={link.name}
          variant="default"
          size="sm"
          className={`${link.color} text-white rounded-full p-2 h-8 w-8`}
          onClick={() => window.open(link.url, "_blank")}
          aria-label={`Поделиться в ${link.name}`}
        >
          {link.icon}
        </Button>
      ))}
    </div>
  );
};

export default ShareButtons;
