import { Factory, Wrench, Leaf, HeadphonesIcon } from "lucide-react";
import { site } from "../data/site";

const icons = [Factory, Leaf, Wrench, HeadphonesIcon];

export default function TrustBar() {
  return (
    <section className="border-b border-black/5 bg-white">
      <div className="container-shell grid divide-y divide-black/5 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
        {site.trustItems.map((item, i) => {
          const Icon = icons[i] || Factory;
          return (
            <div key={item.title} className="flex items-start gap-4 px-5 py-7 sm:px-6">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-sand text-forest">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <p className="font-semibold text-ink">{item.title}</p>
                <p className="mt-0.5 text-sm text-ink/55">{item.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
