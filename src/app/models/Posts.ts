export interface Post_t {
  refId?: string;

  postId: number;
  slug: string;
  filename: string;
  title: string;
  cover: string;
  chips: PostChip_t[];
  authors: PostAuthor_t[];
  summary: string;
  keywords: string[];
  categories: string[];

  content: string;
}

export interface PostChip_t {
  id: number;
  label: string;
  icon: string;
}

export type PostChips_t = PostChip_t[];

export interface PostAuthor_t {
  id: number;
  name: string;
  image: string;
}

export type PostAuthors_t = PostAuthor_t[];
