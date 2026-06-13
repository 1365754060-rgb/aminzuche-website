import type { Metadata } from "next";
import Link from "next/link";
import { articles } from "@/lib/articles";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "印尼租车攻略｜雅加达租车｜巴厘岛包车｜Amin Zuche",
  description:
    "Amin Zuche 印尼中文租车攻略，覆盖雅加达租车、巴厘岛包车、机场接送、商务考察、投资考察、工业园考察、矿山考察和长期用车。",
  alternates: {
    canonical: "/articles"
  },
  openGraph: {
    title: "印尼租车攻略｜Amin Zuche",
    description:
      "印尼中文租车 SEO 攻略，帮助中国游客、商务考察、投资考察、工业园考察、矿山考察和驻外人员规划用车。",
    url: `${siteUrl}/articles`,
    type: "website"
  }
};

export default function ArticlesPage() {
  return (
    <main className="bg-white text-ink">
      <section className="bg-ink px-5 py-16 text-white sm:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <Link href="/" className="text-sm font-semibold text-gold">
            Amin Zuche
          </Link>
          <h1 className="mt-8 max-w-4xl text-4xl font-semibold leading-tight tracking-normal sm:text-5xl">
            印尼租车攻略
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/68">
            围绕雅加达租车、巴厘岛包车、机场接送、商务考察、投资考察、工业园考察、矿山考察和长期用车，整理适合中文客户的出行参考。
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8 lg:py-20">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/articles/${article.slug}`}
              className="rounded-md border border-ink/10 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-gold/50 hover:shadow-business"
            >
              <p className="text-xs font-semibold text-gold">
                {article.category} · {article.city}
              </p>
              <h2 className="mt-4 text-xl font-semibold leading-7 text-ink">
                {article.title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-ink/62">
                {article.description}
              </p>
              <p className="mt-5 text-xs font-medium text-ink/45">
                {article.readTime}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
