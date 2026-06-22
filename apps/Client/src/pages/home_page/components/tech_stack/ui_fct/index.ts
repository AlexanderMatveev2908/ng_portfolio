import { SvgAdvCsharp } from '@/common/components/svgs/advanced/csharp/csharp';
import { SvgAdvCss } from '@/common/components/svgs/advanced/css/css';
import { SvgAdvGit } from '@/common/components/svgs/advanced/git/git';
import { SvgAdvHtml } from '@/common/components/svgs/advanced/html/html';
import { SvgAdvJava } from '@/common/components/svgs/advanced/java/java';
import { SvgAdvJavascript } from '@/common/components/svgs/advanced/javascript/javascript';
import { SvgAdvLinux } from '@/common/components/svgs/advanced/linux/linux';
import { SvgAdvPython } from '@/common/components/svgs/advanced/python/python';
import { SvgAdvSass } from '@/common/components/svgs/advanced/sass/sass';
import { SvgFillGithub } from '@/common/components/svgs/fill/github/github';
import { SvgFillMarkdown } from '@/common/components/svgs/fill/markdown/markdown';
import { SvgFillZsh } from '@/common/components/svgs/fill/zsh/zsh';
import { v4 } from 'uuid';

export class TechStackUiFct {
  public static readonly data = [
    {
      Svg: SvgAdvHtml,
    },
    {
      Svg: SvgAdvCss,
    },
    {
      Svg: SvgAdvSass,
    },
    {
      Svg: SvgAdvJavascript,
    },
    {
      Svg: SvgAdvPython,
    },
    {
      Svg: SvgAdvJava,
    },
    {
      Svg: SvgAdvCsharp,
    },

    {
      Svg: SvgAdvLinux,
    },
    {
      Svg: SvgFillZsh,
      clr: 'var)=(--neutral__300)',
    },
    {
      Svg: SvgFillMarkdown,
    },
    {
      Svg: SvgAdvGit,
    },
    {
      Svg: SvgFillGithub,
    },
  ].map((el) => ({
    ...el,
    id: v4(),
  }));
}
