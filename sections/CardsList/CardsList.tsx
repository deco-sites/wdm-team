import Image from "apps/website/components/Image.tsx";
import { useSection } from "deco/hooks/useSection.ts";
import { SectionProps } from "deco/mod.ts";
import type { ImageWidget } from "apps/admin/widgets.ts";


export interface Card {
    title: string;
    excerpt: string;
    image: ImageWidget;
    href: string;
  }

export interface Props {
    quantityToShow: number
    quantityToShowByTime: number
    cards: Card[]
}

const DEFAULT_IMAGE =
  "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4763/682eb374-def2-4e85-a45d-b3a7ff8a31a9";

export async function loader(
    {
        quantityToShow = 0,
        quantityToShowByTime = 3,
        cards = [
            {
              title: "Title of Section #1",
              excerpt:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
              image: DEFAULT_IMAGE,
              href: "/",
            },
            {
              title: "Title of Section #2",
              excerpt:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
              image: DEFAULT_IMAGE,
              href: "/",
            },
            {
              title: "Title of Section #3",
              excerpt:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
              image: DEFAULT_IMAGE,
              href: "/",
            },
          ],
    }: Props,
    _req: Request,
) {

    function simulateRequest() {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve('Requisição completa');
          }, 1000);
        });
    }

    await simulateRequest()

    if(cards.length < quantityToShow) {
        return {
            quantityToShow,
            quantityToShowByTime,
            cards: []
        }
    }

    return {
        quantityToShow,
        quantityToShowByTime,
        cards: cards.slice(quantityToShow - 3, quantityToShow)
    }
}

export default function CardsList({
    quantityToShow,
    quantityToShowByTime,
    cards
}: SectionProps<typeof loader>) {

    if(cards.length === 0) {
        return <></>
    }

    return (
        <div
            class="lg:container mt-8 md:max-w-5xl lg:mx-auto text-sm lg:py-8 lg:mt-0"
        >
            <div 
                hx-get={useSection({ props: { quantityToShow: quantityToShow + quantityToShowByTime} })}
                hx-trigger="revealed"
                hx-swap="afterend"
                hx-target="this"
                class="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
                {cards.map((card, index) => {
                    return (
                        <a
                            key={`${card.href}-${index}`}
                            href={card.href}
                        >
                            <div class="rounded-xl overflow-hidden bg-[#1E1E1E] hover:border-primary hover:border-2 border-2 border-[#494a49]">
                                <div class="p-6 space-y-4">
                                    <div class="space-y-2">
                                        <h3 class="text-lg text-[#fff]">{card.title}</h3>
                                        <p class="text-xs text-[#D9D9D9]">{card.excerpt}</p>
                                    </div>
                                </div>
                                <Image
                                    width={205}
                                    class="w-full object-fit z-10"
                                    sizes="(max-width: 205px) 100vw, 30vw"
                                    src={card.image}
                                    alt={card.image}
                                    decoding="async"
                                    loading="lazy"
                                />
                            </div>
                        </a>
                    )
                })}
            </div>
        </div>
    )
}