export interface Article {
  id: string;
  title: string;
  category: string;
  image: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    role: string;
    image?: string;
  };
}