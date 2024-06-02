import type { Post_t } from '@app/models/Posts';

export function toPost(attributes: Post_t, body: string): Post_t {
  return {
    postId: attributes.postId,
    filename: attributes.filename,
    title: attributes.title,
    slug: attributes.slug,
    authors: attributes.authors,
    cover: attributes.cover,
    chips: attributes.chips,
    categories: attributes.categories,
    keywords: attributes.keywords,
    summary: attributes.summary,
    content: body
  };
}
