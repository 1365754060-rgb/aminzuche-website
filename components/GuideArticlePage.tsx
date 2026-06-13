import Link from "next/link";
import { CTASection, JsonLd, PageShell } from "@/components/AminLayout";
import { GuideArticle, guideUrl } from "@/lib/aminContent";
import { siteName } from "@/lib/site";

export function GuideArticlePage({ article }: { article: GuideArticle }) {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    author: {
      "@type": "Person",
      name: "阿敏",
      description: "驻印尼6年，印尼商务考察攻略作者"
    },
    publisher: {
      "@type": "Organization",
      name: siteName
    },
    inLanguage: "zh-CN",
    mainEntityOfPage: guideUrl(article.slug)
  };

  return (
    <PageShell active="/guide.html">
      <JsonLd data={articleSchema} />
      <article>
        <header className="bg-ink px-5 py-14 text-white sm:px-8 lg:py-20">
          <div className="mx-auto max-w-3xl">
            <Link href="/guide.html" className="text-sm font-semibold text-gold">
              印尼考察攻略
            </Link>
            <h1 className="mt-7 text-4xl font-semibold leading-tight tracking-normal sm:text-5xl">
              {article.title}
            </h1>
            <p className="mt-5 text-base leading-7 text-white/70">
              {article.description}
            </p>
          </div>
        </header>

        <div className="mx-auto max-w-3xl px-5 py-12 sm:px-8 lg:py-16">
          {article.sections.map((section) => (
            <section key={section.heading} className="mb-10">
              <h2 className="text-2xl font-semibold tracking-normal text-ink">
                {section.heading}
              </h2>
              <p className="mt-4 text-base leading-8 text-ink/70">
                {section.body}
              </p>
            </section>
          ))}
          <div className="rounded-md border border-[#9f1d1d]/20 bg-[#fff7ed] p-5 text-sm leading-7 text-ink/72">
            {article.tip} 微信 Amin-car ｜ WhatsApp +62 813-1120-6651
          </div>
        </div>
      </article>
      <CTASection />
    </PageShell>
  );
}
