import Image from "next/image";
import Link from "next/link";

const services = ["雅加达租车", "巴厘岛包车", "机场接送", "商务考察", "长期用车"];

const vehicles = [
  {
    name: "经济型",
    desc: "适合城市短途、机场接送与轻量行程。"
  },
  {
    name: "商务型",
    desc: "适合客户接待、会议通勤与全天候包车。"
  },
  {
    name: "Alphard",
    desc: "高端接待首选，重视舒适度与商务形象。"
  },
  {
    name: "Hiace",
    desc: "适合团队出行、考察团与多点行程。"
  }
];

const reviews = [
  "司机中文沟通顺畅，雅加达商务拜访路线安排得很稳。",
  "巴厘岛家庭出游用车体验很好，接送准时，车内干净。",
  "机场落地后直接对接，省去了很多沟通成本。"
];

const faqs = [
  {
    q: "可以安排中文司机吗？",
    a: "可以。具体以城市、日期和车型排班为准，建议提前提交需求。"
  },
  {
    q: "是否支持机场接送？",
    a: "支持雅加达、巴厘岛等主要机场接送，可按航班时间安排等候。"
  },
  {
    q: "商务考察可以多点用车吗？",
    a: "可以。请提前说明城市、人数、拜访点和预计用车时长。"
  },
  {
    q: "留资后多久回复？",
    a: "收到需求后会通过 WhatsApp、微信或邮箱与你确认细节。"
  }
];

export default function Home() {
  return (
    <main className="bg-white text-ink">
      <section className="relative overflow-hidden bg-ink text-white">
        <div className="absolute inset-0">
          <Image
            src="/hero-car-service.png"
            alt="印尼高端商务租车服务"
            fill
            priority
            className="object-cover opacity-45"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/78 to-ink" />
        </div>

        <header className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-8">
          <Link href="/" className="text-base font-semibold tracking-wide">
            Amin Zuche
          </Link>
          <a
            href="#contact"
            className="rounded-md border border-white/20 px-4 py-2 text-sm font-medium text-white transition hover:border-gold hover:text-gold"
          >
            联系我们
          </a>
        </header>

        <div className="relative z-10 mx-auto grid min-h-[720px] max-w-6xl content-end px-5 pb-16 pt-20 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:gap-12 lg:pb-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-semibold leading-tight tracking-normal sm:text-5xl lg:text-6xl">
              印尼租车｜雅加达｜巴厘岛｜中文司机
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/78 sm:text-xl">
              为中国游客、商务考察、驻外人员提供印尼包车、机场接送和商务用车服务。
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="rounded-md bg-gold px-6 py-4 text-center text-sm font-semibold text-ink shadow-business transition hover:bg-[#d5b56d]"
              >
                WhatsApp咨询
              </a>
              <a
                href="#lead-form"
                className="rounded-md border border-white/25 px-6 py-4 text-center text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
              >
                提交用车需求
              </a>
            </div>
          </div>

          <div className="mt-12 rounded-md border border-white/10 bg-white/8 p-5 backdrop-blur lg:mt-0">
            <p className="text-sm font-medium text-gold">服务范围</p>
            <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-white/82">
              {services.map((service) => (
                <span key={service} className="border-t border-white/12 pt-3">
                  {service}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <h2 className="text-3xl font-semibold tracking-normal text-ink">
              覆盖印尼主流出行场景
            </h2>
            <p className="mt-4 text-base leading-7 text-ink/65">
              从落地接机到商务拜访，从家庭旅行到长期驻外用车，按城市、人数和行程安排匹配车辆与司机。
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {services.map((service) => (
              <article
                key={service}
                className="rounded-md border border-ink/10 bg-white p-5 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-ink">{service}</h3>
                <p className="mt-3 text-sm leading-6 text-ink/60">
                  提前确认行程节点、用车时长与沟通语言，适合需要可靠安排的中文客户。
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sand/70 py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <h2 className="text-3xl font-semibold tracking-normal text-ink">
                车型选择
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-ink/65">
                按预算、人数、行李和接待规格选择车型，兼顾舒适度与行程效率。
              </p>
            </div>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {vehicles.map((vehicle) => (
              <article
                key={vehicle.name}
                className="rounded-md bg-white p-6 shadow-sm ring-1 ring-ink/8"
              >
                <h3 className="text-xl font-semibold text-ink">{vehicle.name}</h3>
                <p className="mt-4 text-sm leading-6 text-ink/62">
                  {vehicle.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
        <h2 className="text-3xl font-semibold tracking-normal text-ink">
          客户评价
        </h2>
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {reviews.map((review) => (
            <figure
              key={review}
              className="rounded-md border border-ink/10 bg-white p-6 shadow-sm"
            >
              <blockquote className="text-base leading-7 text-ink/76">
                “{review}”
              </blockquote>
              <figcaption className="mt-5 text-sm font-medium text-gold">
                中国客户评价
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="bg-graphite py-16 text-white lg:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="text-3xl font-semibold tracking-normal">FAQ</h2>
            <p className="mt-4 text-base leading-7 text-white/66">
              常见用车问题可先参考以下说明，具体报价与排班以提交需求后的确认为准。
            </p>
          </div>
          <div className="divide-y divide-white/12 rounded-md border border-white/12">
            {faqs.map((item) => (
              <div key={item.q} className="p-5">
                <h3 className="text-base font-semibold text-white">{item.q}</h3>
                <p className="mt-3 text-sm leading-6 text-white/64">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:py-24"
      >
        <div>
          <h2 className="text-3xl font-semibold tracking-normal text-ink">
            联系方式
          </h2>
          <p className="mt-4 text-base leading-7 text-ink/65">
            可通过以下方式沟通行程、车型、日期和城市，确认后安排车辆与司机。
          </p>
          <div className="mt-8 space-y-4 text-base">
            <p className="flex justify-between border-b border-ink/10 pb-4">
              <span className="text-ink/55">WhatsApp</span>
              <span className="font-medium">占位符</span>
            </p>
            <p className="flex justify-between border-b border-ink/10 pb-4">
              <span className="text-ink/55">微信</span>
              <span className="font-medium">占位符</span>
            </p>
            <p className="flex justify-between border-b border-ink/10 pb-4">
              <span className="text-ink/55">邮箱</span>
              <span className="font-medium">占位符</span>
            </p>
          </div>
        </div>

        <form
          id="lead-form"
          className="rounded-md bg-ink p-5 text-white shadow-business sm:p-8"
        >
          <h2 className="text-2xl font-semibold tracking-normal">提交用车需求</h2>
          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2 text-sm text-white/72">
              姓名
              <input className="form-field" name="name" placeholder="请输入姓名" />
            </label>
            <label className="grid gap-2 text-sm text-white/72">
              联系方式
              <input
                className="form-field"
                name="contact"
                placeholder="WhatsApp / 微信 / 邮箱"
              />
            </label>
            <label className="grid gap-2 text-sm text-white/72">
              日期
              <input className="form-field" name="date" type="date" />
            </label>
            <label className="grid gap-2 text-sm text-white/72">
              城市
              <input className="form-field" name="city" placeholder="雅加达 / 巴厘岛" />
            </label>
            <label className="grid gap-2 text-sm text-white/72 sm:col-span-2">
              需求
              <textarea
                className="form-field min-h-32 resize-y"
                name="request"
                placeholder="请填写人数、行程、车型偏好和用车时长"
              />
            </label>
          </div>
          <button
            type="submit"
            className="mt-6 w-full rounded-md bg-gold px-6 py-4 text-sm font-semibold text-ink transition hover:bg-[#d5b56d]"
          >
            提交按钮
          </button>
        </form>
      </section>
    </main>
  );
}
