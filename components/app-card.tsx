import Image from "next/image";
import Badge from "@/public/images/badge.svg";

export default function AppCard({
  app,
  children,
}: {
  app: {
    name: string;
    image: any;
    link: string;
    badge?: boolean;
  };
  children: React.ReactNode;
}) {
  return (
    <article className="group relative flex w-full flex-col rounded-2xl bg-white/70 p-5 shadow-lg shadow-black/[0.03] transition before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(var(--color-gray-100),var(--color-gray-200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-white">
      <div className="mb-3 inline-flex">
        <div className="relative">
          <Image
            className="rounded-full shadow-lg shadow-black/[0.03]"
            src={app.image}
            width={48}
            height={48}
            alt={app.name}
          />
          {app.badge && (
            <Image
              className="absolute right-0 top-0"
              src={Badge}
              width={16}
              height={16}
              alt="Badge"
              aria-hidden="true"
            />
          )}
        </div>
      </div>
      <h3 className="mb-1">
        <div className="font-bold before:absolute before:inset-0">
          {app.name}
        </div>
      </h3>
      <p className="text-sm text-gray-700">{children}</p>
    </article>
  );
}
