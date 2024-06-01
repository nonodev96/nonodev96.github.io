import { Post_t } from '@app/models/Posts';

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
  attributes: Post_t;
  body: string;
}



