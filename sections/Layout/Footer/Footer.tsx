import { ImageWidget } from "apps/admin/widgets.ts";
import Social from "site/sections/Layout/Footer/Social.tsx";
import { AvailableIcons } from "site/components/ui/Icon.tsx";
import Image from "apps/website/components/Image.tsx";

/**
 * @title {{icon}}
 */

export interface SocialItem {
  link: string;
  stroke?: number;
  icon: AvailableIcons;
}

export interface FooterLogo {
  src: ImageWidget;
  link: string;
  alt: string;
}

/**
 * @title {{topic}}
 */
export interface Topics {
  topic: string;
  topicLink: string;
}

/**
 * @title {{title}}
 */
export interface FooterTopics {
  title: string;
  titleLink: string;
  topics: Topics[];
}

export interface FooterTexts {
  CopyRightText: string;
  label: string;
  termsLink: string;
  PrivacyPolicyLink: string;
}

export interface Props {
  logo?: FooterLogo;
  footerText?: FooterTexts;
  footerTopics?: FooterTopics[];
  social?: SocialItem[];
}

export default function Footer({
  social,
  logo,
  footerText,
  footerTopics,
}: Props) {
  return (
    <section class="bg-primary w-full relative z-10">
      <div class="max-w-screen-2xl m-auto py-8">
        <div class="px-6 py-8 md:px-[2.03rem] flex flex-col gap-12 lg:justify-between">
          <div class="flex flex-col md:flex-row justify-between gap-8">
            <div class="flex flex-col gap-2">
              <a href={logo?.link} class="grid">
                <Image
                  src={logo?.src ?? ""}
                  width={130}
                  height={37}
                  alt={logo?.alt}
                  loading="lazy"
                  fetchPriority="low"
                />
              </a>
              <span class="text-primary-content">
                {footerText?.CopyRightText}
              </span>
              <span class="pt-1 text-[14px] text-primary-content font-normal leading-[150%]">
                {footerText?.label}
              </span>
            </div>
            <div class="flex flex-col md:flex-row gap-4 md:gap-12 lg:gap-20">
              {footerTopics?.map((topicTitle) => (
                <div class="flex flex-col gap-4 md:gap-5 text-primary-content opacity-90">
                  <a
                    href={topicTitle.titleLink}
                    class="font-bold hidden md:block"
                    data-ancestor="true"
                    aria-current="page"
                    data-current="true"
                  >
                    {topicTitle.title}
                  </a>
                  <ul class="flex flex-col gap-4 md:gap-2">
                    {topicTitle.topics.map((textTopic) => (
                      <li>
                        <a
                          href={textTopic.topicLink}
                          class="inline-block group"
                        >
                          <div class="mb-[6px]">{textTopic.topic}</div>
                          <div class="h-[2px] bg-base-200 w-0 group-hover:w-full duration-500"></div>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div class="flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-6 lg:gap-4">
            <div class="flex flex-col md:flex-row gap-5 lg:gap-10 text-primary-content">
              <a
                target="_blank"
                href={footerText?.termsLink}
                class="link text-sm hover:underline"
              >
                Terms of Use
              </a>
              <a
                target="_blank"
                href={footerText?.PrivacyPolicyLink}
                class="link text-sm hover:underline"
              >
                Privacy Policy
              </a>
            </div>
            <ul class="flex flex-row justify-items-start md:justify-end items-start gap-4">
              <Social items={social} />
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
