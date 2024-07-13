import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Icon from "../components/ui/Icon.tsx";

export interface CTA {
  id?: string;
  href: string;
  text: string;
  outline?: boolean;
}

interface LinkProps {
  label?: string;
  url?: string;
}

interface LinkMenu extends LinkProps {
  subLinks?: LinkProps[]
}

export interface Nav {
  logo?: {
    src?: ImageWidget;
    alt?: string;
  };
  navigation?: {
    links: LinkMenu[];
    buttons: CTA[];
  };
}

export default function Header({
  logo = {
    src:
      "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/530/1e79cc6e-caeb-4289-a689-b9fa1e6968aa",
    alt: "deco.cx",
  },
  navigation = {
    links: [
      { label: "Resources", url: "/", subLinks: [
        { label: "Store", url: "/" },
        { label: "Community", url: "/" },
        { label: "deco.camp", url: "/" },
        { label: "Blog", url: "/" },
        { label: "Customer Stories", url: "/" },
        { label: "Live Projects", url: "/" },
      ]},
      { label: "Docs", url: "/" },
      { label: "Princing", url: "/" },
    ],
    buttons: [
      { id: "sign-in", href: "/", text: "Sign in", outline: true },
      { id: "try-now", href: "/", text: "Try now", outline: false },
    ],
  },
}: Nav) {

  const BUTTON_STYLE: Record<string, string> = {
    normal: 'flex items-center text-[#b6b6b6] md:hover:text-[#fff] font-medium text-[16px] px-4 py-2 transition ease-in-out duration-300',
    full: 'flex items-center md:w-auto transition-all duration-300 ease-out border-[#02F67C] border-2 text-base text-[#0A2121] bg-[#02F67C] md:hover:bg-[#2FD180] font-medium text-[16px] max-h-[37px] px-4 py-2 rounded-lg md:transition md:ease-in-out md:duration-300'
  }

  return (
    <nav class="drawer drawer-end fixed z-50">
      <input id="mobile-drawer-nav" type="checkbox" class="drawer-toggle" />

      {/* main content */}
      <div class="drawer-content container lg:px-0 px-4 flex gap-8 items-center justify-between py-4">
        <div class="hidden items-center justify-between lg:flex w-full">
          <a href="/">
            <Image src={logo.src || ""} width={100} height={28} alt={logo.alt} />
          </a>
          <ul class="relative lg:flex lg:flex-row items-center h-full px-3 py-1.5 rounded-xl bg-[#0035184d] border border-[#FFFFFF33] gap-14 justify-between">
            {navigation.links.map((link) => (
              <li class={link.subLinks ? 'group relative' : ''}>
                <a
                  href={link.url}
                  aria-label={link.label}
                  class={`link no-underline hover:underline p-4`}
                >
                  {link.label}
                </a>
                {link.subLinks &&
                  <ul class="hidden group-hover:flex absolute top-[37px] z-20 flex-col gap-3 rounded-lg border border-[#FFFFFF33] p-6 bg-[#0035184d] backdrop-blur-2xl">
                    {link.subLinks.map(subLink => {
                      return (
                        <li>
                          <a
                            href={subLink.url}
                            aria-label={subLink.label}
                            class={`link no-underline hover:underline p-4`}
                          >
                            {subLink.label}
                          </a>
                        </li>
                      )
                    })}
                  </ul>
                }
              </li>
            ))}
          </ul>
          <ul class="flex gap-3">
            {navigation.buttons?.map((item) => (
              <a
                key={item?.id}
                id={item?.id}
                href={item?.href ?? "#"}
                target={item?.href.includes("http") ? "_blank" : "_self"}
                class={item.outline ? BUTTON_STYLE['normal'] : BUTTON_STYLE['full']}
              >
                {item?.text}
              </a>
            ))}
          </ul>
        </div>

        <label
          htmlFor="mobile-drawer-nav"
          class="flex lg:hidden btn btn-ghost drawer-button"
        >
          <Icon id="Bars3" size={24} strokeWidth={0.1} />
        </label>
      </div>

      {/* sidebar */}
      <aside class="drawer-side z-50">
        {/* Close when clicking on overlay */}
        <label
          htmlFor="mobile-drawer-nav"
          aria-label="close sidebar"
          class="drawer-overlay"
        />

        <div class="flex flex-col gap-8 min-h-full w-80 bg-base-100 text-base-content">
          <a class="p-4" href="/">
            <Image
              src={logo.src || ""}
              width={100}
              height={28}
              alt={logo.alt}
            />
          </a>

          <ul class="menu">
            {navigation?.links.map((link) => {
              if(!link.subLinks) {
                return (
                  <li>
                    <a href={link.url} aria-label={link.label}>
                      {link.label}
                    </a>
                  </li>
                )
              }

              return link.subLinks.map(subLink => 
                <li>
                  <a href={subLink.url} aria-label={subLink.label}>
                    {subLink.label}
                  </a>
                </li>
              )
            })}
          </ul>

          <ul class="p-4 flex items-center gap-3">
            {navigation.buttons?.map((item) => (
              <a
                key={item?.id}
                id={item?.id}
                href={item?.href ?? "#"}
                target={item?.href.includes("http") ? "_blank" : "_self"}
                class={item.outline ? BUTTON_STYLE['normal'] : BUTTON_STYLE['full']}
              >
                {item?.text}
              </a>
            ))}
          </ul>
        </div>
      </aside>
    </nav>
  );
}
