export type Language_t = 'es-ES' | 'en-GB'

export type FileBlog_t = {
  id: number;
  name: string;
  path: string;
}

export type InfoBlog_t = {
  data: FileBlog_t[]
}

export type Matter_t = {
  attributes: {
    title: string;
    cover: string;
    chips: PostChips_t;
    authors: PostAuthors_t;
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
  title: string;
  cover: string;
  chips: PostChips_t;
  authors: PostAuthors_t;
  summary: string,
  content: string;
}
