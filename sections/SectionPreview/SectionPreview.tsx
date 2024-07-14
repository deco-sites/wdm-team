import type { Section } from "deco/blocks/section.ts";
import { SectionProps } from "deco/mod.ts";
import type { ComponentChildren } from "preact";

export interface Props {
  children?: ComponentChildren | null;
  sectionChildrens?: Section[];
}

export async function loader(props: Props, req: Request) {
  const FilePath = import.meta.resolve("site/sections/hero-1.tsx");

  const content = await fetch(FilePath).then((reponse) => reponse.text());

  console.log(req.url);

  return { props, content };
}

export default function SectionPreview({
  props,
  content,
}: SectionProps<typeof loader>) {
  const FilePath = `{"sections":[{"__resolveType":"preview","block": "site/sections/hero-1.tsx" },{"__resolveType":"deco"}]}`;

  const URL_PREVIEW = `https://localhost--wdm-team.deco.site/live/previews/website/pages/Page.tsx?props=${btoa(
    FilePath
  )}`;

  return (
    <iframe src={URL_PREVIEW} width="300" height="300">
      <p>Your browser does not support iframes.</p>
    </iframe>
  );
}
