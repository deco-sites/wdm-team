import { SectionProps } from "deco/mod.ts";

export interface TabMenu {
  /**
   * @title Título do componente
   */
  title: string;
  /**
   * @title Texto do botão Pré-visualização
   */
  previewButton: string;
  /**
   * @title Texto do botão HTML
   */
  htmlButton: string;
}

export interface Props {
  /**
   * @title Título
   */
  title?: string;
  /**
   * @title Descrição
   * @format html
   */
  description?: string;
  /**
   * @title Menu Tab
   */
  tabMenu?: TabMenu[];
}

export async function loader(props: Props, req: Request) {
  const FilePath = import.meta.resolve(
    "site/sections/CardPreview/CardPreview.tsx",
  );

  const content = await fetch(FilePath).then((reponse) => reponse.text());

  console.log(req.url);

  return { props, content };
}

export default function TabMenu({
  props,
  content,
}: SectionProps<typeof loader>) {
  const { title, description, tabMenu } = props;
  const FilePath =
    `{"sections":[{"__resolveType":"preview","block": "site/sections/CardPreview/CardPreview.tsx" },{"__resolveType":"deco"}]}`;

  const URL_PREVIEW =
    `https://bren--wdm-team.deco.site/live/previews/website/pages/Page.tsx?props=${
      btoa(
        FilePath,
      )
    }`;

  return (
    <div class="container pt-24">
      <div class="flex flex-col items-center justify-center gap-4 w-full max-w-3xl mx-auto">
        <h2 class="text-4xl lg:text-6xl leading-none font-normal text-primary">
          {title}
        </h2>
        <span
          class="text-base md:text-lg leading-[150%] text-center"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
      {tabMenu?.map((tabMenu) => (
        <>
          <p class="pb-4 text-white">{tabMenu.title}</p>
          <div role="tablist" class="tabs">
            <input
              type="radio"
              name="my_tabs_1"
              role="tab"
              class="tab border-none border-slate-800 rounded-md bg-black checked:bg-[#019049] checked:border:#019049"
              aria-label={tabMenu.previewButton}
              checked="checked"
            />
            <div
              role="tabpanel"
              class="tab-content outline-none p-10 border-[#019049] my-4 rounded-lg"
            >
              <div class="pl-24">
                <iframe
                  src={URL_PREVIEW}
                  class={"w-full  overflow-y-hidden"}
                  scrolling="no"
                  style={{ height: "calc(100vh - 24rem)" }}
                >
                  <p>Your browser does not support iframes.</p>
                </iframe>
              </div>
            </div>

            <input
              type="radio"
              name="my_tabs_1"
              role="tab"
              class="tab border border-slate-800 rounded-md bg-black checked:bg-[#019049] checked:border-none"
              aria-label={tabMenu.htmlButton}
            />
            <div
              role="tabpanel"
              class="tab-content p-10 border-[#019049] my-4 rounded-lg"
            >
              <div class="pl-24">{content}</div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
}
