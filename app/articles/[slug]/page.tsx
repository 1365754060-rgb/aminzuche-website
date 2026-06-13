import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articleUrl, articles, getArticle } from "@/lib/articles";
import { siteName } from "@/lib/site";

type ArticlePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug
  }));
}

export async function generateMetadata({
  params
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) {
    return {};
  }

  return {
    title: `${article.title}｜${siteName}`,
    description: article.description,
    keywords: article.keywords,
    alternates: {
      canonical: `/articles/${article.slug}`
    },
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      url: articleUrl(article.slug),
      publishedTime: article.publishedAt
    }
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.publishedAt,
    dateModified: article.publishedAt,
    author: {
      "@type": "Organization",
      name: siteName
    },
    publisher: {
      "@type": "Organization",
      name: siteName
    },
    mainEntityOfPage: articleUrl(article.slug),
    keywords: article.keywords.join(", ")
  };
  const faqJsonLd = article.faqs
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: article.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer
          }
        }))
      }
    : null;
  const relatedArticles = articles
    .filter((item) => item.slug !== article.slug)
    .filter(
      (item) =>
        item.category === article.category ||
        item.city === article.city ||
        item.keywords.some((keyword) => article.keywords.includes(keyword))
    )
    .slice(0, 3);

  return (
    <main className="bg-white text-ink">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {faqJsonLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      ) : null}
      <article>
        <header className="bg-ink px-5 py-14 text-white sm:px-8 lg:py-20">
          <div className="mx-auto max-w-3xl">
            <Link href="/articles" className="text-sm font-semibold text-gold">
              印尼租车攻略
            </Link>
            <h1 className="mt-7 text-4xl font-semibold leading-tight tracking-normal sm:text-5xl">
              {article.title}
            </h1>
            <p className="mt-5 text-base leading-7 text-white/70">
              {article.description}
            </p>
            <p className="mt-6 text-sm text-white/45">
              {article.category} · {article.city} · {article.readTime}
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

          {article.faqs ? (
            <section className="mt-12">
              <h2 className="text-2xl font-semibold tracking-normal text-ink">
                常见问题
              </h2>
              <div className="mt-5 divide-y divide-ink/10 rounded-md border border-ink/10 bg-white">
                {article.faqs.map((faq) => (
                  <details key={faq.question} className="group p-5">
                    <summary className="cursor-pointer list-none text-base font-semibold text-ink">
                      {faq.question}
                      <span className="float-right text-gold transition group-open:rotate-45">
                        +
                      </span>
                    </summary>
                    <p className="mt-4 text-sm leading-7 text-ink/64">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </section>
          ) : null}

          <div className="mt-12 rounded-md bg-sand/70 p-6">
            <h2 className="text-xl font-semibold text-ink">需要安排印尼用车？</h2>
            <p className="mt-3 text-sm leading-6 text-ink/65">
              请提交城市、日期、人数和行程需求，我们会根据路线和车型为你确认安排。
            </p>
            <Link
              href="/#lead-form"
              className="mt-5 inline-flex rounded-md bg-gold px-5 py-3 text-sm font-semibold text-ink transition hover:bg-[#d5b56d]"
            >
              提交用车需求
            </Link>
          </div>

          {relatedArticles.length > 0 ? (
            <section className="mt-12">
              <h2 className="text-2xl font-semibold tracking-normal text-ink">
                相关文章推荐
              </h2>
              <div className="mt-5 grid gap-4">
                {relatedArticles.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/articles/${related.slug}`}
                    className="rounded-md border border-ink/10 bg-white p-5 transition hover:border-gold/50 hover:shadow-business"
                  >
                    <p className="text-xs font-semibold text-gold">
                      {related.category} · {related.city}
                    </p>
                    <h3 className="mt-3 text-lg font-semibold leading-7 text-ink">
                      {related.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-ink/62">
                      {related.description}
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          ) : null}

          <nav className="mt-8 flex flex-wrap gap-3 text-sm font-semibold">
            <Link
              href="/"
              className="rounded-md border border-ink/10 px-4 py-2 text-ink/70 transition hover:border-gold hover:text-ink"
            >
              首页
            </Link>
            <Link
              href="/business-charter.html"
              className="rounded-md border border-ink/10 px-4 py-2 text-ink/70 transition hover:border-gold hover:text-ink"
            >
              商务考察包车
            </Link>
            <Link
              href="/airport-transfer.html"
              className="rounded-md border border-ink/10 px-4 py-2 text-ink/70 transition hover:border-gold hover:text-ink"
            >
              机场接送
            </Link>
            <Link
              href="/contact.html"
              className="rounded-md border border-ink/10 px-4 py-2 text-ink/70 transition hover:border-gold hover:text-ink"
            >
              联系我们
            </Link>
          </nav>
        </div>
      </article>
    </main>
  );
}
