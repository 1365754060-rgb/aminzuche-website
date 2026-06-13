import type { Metadata } from "next";
import Link from "next/link";
import { CTASection, PageShell } from "@/components/AminLayout";
import { guideArticles } from "@/lib/aminContent";

export const metadata: Metadata = {
  title: "印尼商务考察攻略_雅加达出差指南 - 阿敏租车",
  description:
    "驻印尼6年的一线作者撰写的印尼商务考察攻略：交通用车、机场接送、行程模板、避坑指南、经典考察路线。",
  alternates: {
    canonical: "/guide.html"
  }
};

export default function GuidePage() {
  return (
    <PageShell active="/guide.html">
      <section className="bg-ink px-5 py-14 text-white sm:px-8 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-4xl font-semibold tracking-normal sm:text-5xl">
            印尼考察攻略
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/68">
            驻印尼6年的一线作者撰写：交通用车、机场接送、行程模板、避坑指南、经典考察路线。
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-16 sm:px-8 lg:py-20">
        <div className="grid gap-5">
          {guideArticles.map((article) => (
            <article
              key={article.slug}
              className="rounded-md border border-ink/10 bg-white p-6 shadow-sm"
            >
              <h2 className="text-2xl font-semibold leading-8 text-ink">
                <Link href={`/${article.slug}`}>{article.title}</Link>
              </h2>
              <p className="mt-3 text-sm leading-6 text-ink/62">
                {article.description}
              </p>
              <Link
                href={`/${article.slug}`}
                className="mt-5 inline-block text-sm font-semibold text-[#9f1d1d]"
              >
                阅读全文 →
              </Link>
            </article>
          ))}
        </div>
      </section>
      <CTASection />
    </PageShell>
  );
}
