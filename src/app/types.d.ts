export type Language_t = 'es-ES' | 'en-GB'

export type FileBlog_t = {
  id: number;
  name: string;
  filename: string;
}

export type InfoBlog_t = {
  data: FileBlog_t[]
}

export type Matter_t = {
  attributes: {
    postId: number;
    filename: string;
    title: string;
    cover: string;
    chips: PostChips_t;
    authors: PostAuthors_t;
    keywords: string[];
    categories: string[];
    summary: string,
  };
  body: string;
}

export type PostChip_t = {
  id: number,
  label: string,
  icon: string
}
export type PostChips_t = PostChip_t[]

export type PostAuthor_t = {
  id: number,
  name: string,
  image: string
}
export type PostAuthors_t = PostAuthor_t[]

export type Post_t = {
  postId: number;
  filename: string;
  title: string;
  cover: string;
  chips: PostChip_t[];
  authors: PostAuthor_t[]
  summary: string;
  keywords: string[];
  categories: string[];

  content: string;
}
