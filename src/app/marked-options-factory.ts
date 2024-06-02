import { type MarkedOptions, MarkedRenderer } from 'ngx-markdown';
import type { AnchorService } from '@shared/anchor';

export function markedOptionsFactory(
  anchorService: AnchorService
): MarkedOptions {
  const renderer = new MarkedRenderer();

  // fix `href` for absolute link with fragments so that _copy-paste_ urls are correct
  renderer.link = (href: string, title: string, text: string) => {
    return MarkedRenderer.prototype.link.call(
      renderer,
      anchorService.normalizeExternalUrl(href),
      title,
      text
    );
  };

  renderer.blockquote = (text: string) => {
    return `<blockquote class="blockquote"><p>${text}</p></blockquote>`;
  };

  // renderer.table = (header, body)=>{
  //
  // }

  return {
    renderer
  };
}
