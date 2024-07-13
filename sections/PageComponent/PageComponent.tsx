export interface Props {
  titleTab: string;
  contentTab: string;
}

export default function PageComponent({ titleTab, contentTab }: Props) {
  return (
    <div role="tablist" class="tabs tabs-bordered">
      <input
        type="radio"
        name="my_tabs_1"
        role="tab"
        class="tab"
        aria-label={titleTab}
      />
      <div role="tabpanel" class="tab-content p-10">{contentTab}</div>

      <input
        type="radio"
        name="my_tabs_1"
        role="tab"
        class="tab"
        aria-label={titleTab}
        checked="checked"
      />
      <div role="tabpanel" class="tab-content p-10">{contentTab}</div>

      <input
        type="radio"
        name="my_tabs_1"
        role="tab"
        class="tab"
        aria-label={titleTab}
      />
      <div role="tabpanel" class="tab-content p-10">{contentTab}</div>
    </div>
  );
}
