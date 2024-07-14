import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Icon from "../components/ui/Icon.tsx";
import { StarsGithub } from "site/loaders/getGitHubStars.ts";

export interface CTA {
  id?: string;
  href: string;
  text: string;
}

interface LinkProps {
  label?: string;
  url?: string;
}

interface LinkMenu extends LinkProps {
  subLinks?: LinkProps[];
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
  github: StarsGithub;
}

export default function Header({
  logo = {
    src: "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/530/1e79cc6e-caeb-4289-a689-b9fa1e6968aa",
    alt: "deco.cx",
  },
  navigation = {
    links: [
      {
        label: "Produtos",
        url: "/",
        subLinks: [
          { label: "Admin", url: "/" },
          { label: "Analytics", url: "/" },
          { label: "Deco.pilot", url: "/" },
          { label: "Dashboard de Logs", url: "/" },
        ],
      },
      { label: "Documentação", url: "/" },
      { label: "Recursos", url: "/" },
      { label: "Empresa", url: "/" },
      { label: "Contato", url: "/" },
    ],
    buttons: [{ id: "sign-in", href: "/", text: "Entrar" }],
  },
  github,
}: Nav) {
  return (
    <nav class="drawer drawer-end w-full fixed z-50">
      <input id="mobile-drawer-nav" type="checkbox" class="drawer-toggle" />

      {/* main content */}
      <div class="drawer-content container lg:px-0 px-4 flex gap-8 items-center justify-between py-4 backdrop-blur-2xl w-full lg:my-4 lg:p-0 lg:w-fit">
        <div class="hidden items-center gap-12 lg:flex w-full p-2 border-2 border-[#02F67C] rounded-lg">
          <a href="/">
            <Image
              src={logo.src || ""}
              width={100}
              height={28}
              alt={logo.alt}
              loading="lazy"
            />
          </a>
          <ul class="relative lg:flex lg:flex-row items-center h-full gap-4 justify-between">
            {navigation.links.map((link) => (
              <li
                class={
                  link.subLinks
                    ? "group relative before:absolute before:top-4 before:left-0 before:w-full before:h-8"
                    : ""
                }
              >
                <a
                  href={link.url}
                  aria-label={link.label}
                  class={`link no-underline hover:text-[#02F67C]`}
                >
                  {link.label}
                </a>
                {link.subLinks && (
                  <ul class="hidden group-hover:flex absolute top-[44px] z-20 flex-col gap-3 p-4 w-52 opacity-90 rounded-xl bg-primary-content">
                    {link.subLinks.map((subLink) => {
                      return (
                        <li>
                          <a
                            href={subLink.url}
                            aria-label={subLink.label}
                            class={`link no-underline hover:text-[#02F67C]`}
                          >
                            {subLink.label}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                )}
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
                class={`bg-primary text-primary-content h-8 px-3 flex justify-center items-center rounded-md no-underline`}
              >
                {item?.text}
              </a>
            ))}
            <a
              href={github.urlRepository}
              target="_blank"
              class="bg-transparent h-8 px-3 flex justify-center items-center rounded-md no-underline"
            >
              Star us {github.stars}
            </a>
          </ul>
        </div>

        <a href="/" class="lg:hidden">
          <Image
            src={logo.src || ""}
            width={100}
            height={28}
            alt={logo.alt}
            loading="lazy"
          />
        </a>

        <label
          htmlFor="mobile-drawer-nav"
          class="flex lg:hidden btn btn-ghost drawer-button"
        >
          <Icon id="Bars3" size={24} strokeWidth={0.1} />
        </label>
      </div>

      {/* sidebar */}
      <aside class="drawer-side overflow-y-auto overflow-x-hidden overscroll-contain z-50">
        <div class="flex flex-col gap-8 min-h-full bg-base-100 text-base-content w-full bg-transparent backdrop-blur-2xl">
          <div class="flex justify-between items-center">
            <a class="p-4" href="/">
              <Image
                src={logo.src || ""}
                width={100}
                height={28}
                alt={logo.alt}
                loading="lazy"
              />
            </a>
            <label
              htmlFor="mobile-drawer-nav"
              aria-label="close sidebar"
              class="cursor-pointer text-lg font-bold p-4"
            >
              X
            </label>
          </div>

          <ul class="menu">
            {navigation?.links.map((link) => {
              if (!link.subLinks) {
                return (
                  <li>
                    <a href={link.url} aria-label={link.label}>
                      {link.label}
                    </a>
                  </li>
                );
              }

              return link.subLinks.map((subLink) => (
                <li>
                  <a href={subLink.url} aria-label={subLink.label}>
                    {subLink.label}
                  </a>
                </li>
              ));
            })}
          </ul>

          <ul class="p-4 flex items-center gap-3">
            {navigation.buttons?.map((item) => (
              <a
                key={item?.id}
                id={item?.id}
                href={item?.href ?? "#"}
                target={item?.href.includes("http") ? "_blank" : "_self"}
                class={`bg-primary text-primary-content h-8 px-3 flex justify-center items-center rounded-md no-underline`}
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
