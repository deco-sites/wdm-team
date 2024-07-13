import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface Cards {
  nameSection: string;
  title: string;
  text: string;
  image: ImageWidget;
  tag: string;
}

export interface Props {
  nameSection?: string;
  cards?: Cards[];
}

const DEFAULT_IMAGE =
  "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4763/682eb374-def2-4e85-a45d-b3a7ff8a31a9";

export default function CardPreview(
  {
    nameSection = "All components",
    cards = [
      {
        nameSection: "All components",
        title: "Title of card 1",
        image: DEFAULT_IMAGE,
        text: "Text of card 1",
        tag: "Tag #1",
      },
      {
        nameSection: "All components",
        title: "Title of card 2",
        image: DEFAULT_IMAGE,
        text: "Text of card 2",
        tag: "Tag #2",
      },
      {
        nameSection: "All components",
        title: "Title of card 3",
        image: DEFAULT_IMAGE,
        text: "Text of card 3",
        tag: "Tag #3",
      },
    ],
  }: Props,
) {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 lg:mb-14">
        <div class="max-w-2xl text-center mx-auto mb-10 lg:mb-14">
          <h2 class="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
            {nameSection}
          </h2>
        </div>

        {cards?.map((card: Cards) => {
          <a
            className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-neutral-900 dark:border-neutral-800"
            href="#"
          >
            <div className="aspect-w-16 aspect-h-9">
              <Image
                width={60}
                height={30}
                className="w-full object-cover rounded-t-xl"
                src="https://images.unsplash.com/photo-1668869713519-9bcbb0da7171?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80"
                alt="Image Description"
                decoding="async"
                loading="lazy"
              />
              <span class="rounded-se-xl rounded-es-xl text-xs font-medium bg-gray-800 text-white py-1.5 px-3 dark:bg-neutral-900">
                {card.tag}
              </span>
            </div>
            <div className="p-4 md:p-5">
              <p className="mt-2 text-xs uppercase text-gray-600 dark:text-neutral-400">
                {card.title}
              </p>
              <h3 className="mt-2 text-lg font-medium text-gray-800 group-hover:text-blue-600 dark:text-neutral-300 dark:group-hover:text-white">
                {card.text}
              </h3>
            </div>
          </a>;
        })}
      </div>
    </div>
  );
}
