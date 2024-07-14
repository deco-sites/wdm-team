export interface Props {
  title?: string;
}

export default function CardPreview({
  title = "Basic Components for your projects",
}: Props) {

  return (
    <div
      class="lg:container px-8 md:max-w-5xl lg:mx-auto text-sm lg:py-8 lg:px-0"
      id="card-preview"
    >
      <div class="space-y-16">
        <div class="flex flex-col lg:flex-row gap-4 justify-between">
          <div class="space-y-6 lg:w-1/2">
            <h2 class="text-[#02F67C] text-4xl fw7">
              {title}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
