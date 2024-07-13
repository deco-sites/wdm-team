import Icon from "site/components/ui/Icon.tsx";

export interface SocialItem {
  label: "Linkedin" | "Github" | "Discord";
  link: string;
  newTab?: boolean;
}

export default function Social({ items }: { items?: SocialItem[] }) {
  return (
    <>
      {items && items.length > 0
        ? (
          items.map((item) => {
            return (
              <li className="h-[50px] grid items-center" key={item.label}>
                <a
                  href={item.link}
                  title={item.newTab ? "_blank" : ""}
                  rel="noopener noreferrer"
                  target={item.newTab ? "_blank" : "_self"}
                  className="block px-3 font-normal text-[16px] leading-[19.36px] text-[#0A2121] hover:text-[#1d6262] transition duration-300 ease-in-out"
                >
                  <Icon size={18} id={item.label} />
                </a>
              </li>
            );
          })
        )
        : null}
    </>
  );
}
