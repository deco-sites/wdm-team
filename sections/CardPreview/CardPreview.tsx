import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface Card {
  title: string;
  excerpt: string;
  image: ImageWidget;
}

export interface Props {
  title?: string;
  description?: string;
  cards?: Card[];
}

const DEFAULT_IMAGE =
  "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4763/682eb374-def2-4e85-a45d-b3a7ff8a31a9";

export default function CardPreview({
  title = "Praticidade nos seus projetos",
  description =
    "Dê início ao seu projeto sem esforço com a ampla variedade do catálogo de componentes  usando partes de interface de usuário pré-criadas, componentes personalizados.",
  cards = [
    {
      title: "Title of Section #1",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      image: DEFAULT_IMAGE,
    },
    {
      title: "Title of Section #2",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      image: DEFAULT_IMAGE,
    },
    {
      title: "Title of Section #3",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      image: DEFAULT_IMAGE,
    },
  ],
}: Props) {
  return (
    <div class="lg:container md:max-w-6xl lg:mx-auto mx-4 text-sm py-12 lg:py-28">
      <div class="space-y-16">
        <div class="flex flex-col lg:flex-row gap-4 justify-between">
          <div class="space-y-6 lg:w-1/2">
            <h2 class="text-[#02F67C] text-4xl leading-snug">
              {title}
            </h2>
            <p class="text-lg">
              {description}
            </p>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards?.map((card) => (
            <div class="border border-secondary rounded-lg overflow-hidden bg-[#1E1E1E]">
              <Image
                width={640}
                class="w-full object-fit z-10"
                sizes="(max-width: 640px) 100vw, 30vw"
                src={card.image}
                alt={card.image}
                decoding="async"
                loading="lazy"
              />
              <div class="p-6 space-y-4">
                <div class="space-y-2">
                  <h3 class="text-2xl text-[#fff]">{card.title}</h3>
                  <p class="text-base text-[#D9D9D9]">{card.excerpt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
