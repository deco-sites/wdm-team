import Icon, { AvailableIcons } from "site/components/ui/Icon.tsx";

export interface SocialItem {
  icon: AvailableIcons;
  stroke: number;
  link: string;
  newTab?: boolean;
  alt: string;
}
export default function Social({ items }: { items?: SocialItem[] }) {
  return (
    <>
      {items && items.length > 0
        ? (
          items.map((item) => {
            return (
              <li className="h-[50px] grid items-center" key={item.icon}>
                <a
                  href={item.link}
                  title={item.newTab ? "_blank" : ""}
                  alt={item.alt}
                  rel="noopener noreferrer"
                  target={item.newTab ? "_blank" : "_self"}
                  className="block px-3 font-normal text-[16px] leading-[19.36px] text-primary-content hover:text-accent-content transition duration-300 ease-in-out"
                >
                  <Icon size={18} id={item.icon} strokeWidth={item.stroke} />
                </a>
              </li>
            );
          })
        )
        : null}
    </>
  );
}
