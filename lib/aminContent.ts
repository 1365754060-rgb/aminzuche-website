import { siteName, siteUrl, wechatId, whatsappNumber, whatsappUrl } from "./site";

export type FaqItem = {
  question: string;
  answer: string;
};

export type GuideArticle = {
  slug: string;
  title: string;
  description: string;
  sections: Array<{
    heading: string;
    body: string;
  }>;
  tip: string;
};

export const navItems = [
  { href: "/", label: "首页" },
  { href: "/business-charter.html", label: "商务考察包车" },
  { href: "/airport-transfer.html", label: "机场接送" },
  { href: "/fleet-price.html", label: "车型价格" },
  { href: "/guide.html", label: "考察攻略" },
  { href: "/about.html", label: "关于我们" },
  { href: "/contact.html", label: "联系我们" }
];

export const routeStops = [
  { title: "CGK 机场", desc: "苏加诺-哈达", hot: true },
  { title: "雅加达市区", desc: "SCBD · Thamrin", hot: false },
  { title: "卡拉旺 / 芝卡朗", desc: "KIIC · GIIC 工业园", hot: false },
  { title: "万隆", desc: "西爪哇首府", hot: true }
];

export const homeFaqs: FaqItem[] = [
  {
    question: "雅加达包车一天多少钱？",
    answer:
      "5座欧萌达880元/天，7座Fortuner或帕杰罗1200元/天，7座埃尔法1650元/天，7座威尔法1850元/天。报价含停车费、高速费、燃油费、司机费。需中文司机加500元/天。每天服务10小时、含120公里。发送行程至微信 Amin-car 获取一口价。"
  },
  {
    question: "你们的司机会中文吗？",
    answer:
      "默认配印尼司机；可加配中文司机500元/天（负责日常沟通与路线交流），或中文司机兼导游800元/天（含景点讲解与行程陪同）。"
  },
  {
    question: "可以提供报销凭证吗？",
    answer:
      "可以。提供行程单、服务确认单与合同，支持对公及人民币结算（微信/支付宝/转账），满足企业差旅报销要求。"
  },
  {
    question: "去卡拉旺、万隆等工业园区可以包车吗？",
    answer:
      "可以，这正是我们的核心路线。卡拉旺KIIC、芝卡朗GIIC、德尔塔玛斯及万隆方向均常年往返，跨城包车提前一天预订即可。"
  },
  {
    question: "如何预订？",
    answer: `微信 ${wechatId} 或 WhatsApp ${whatsappNumber} 发送日期、人数、行程，10分钟内回复报价方案。`
  }
];

export const businessFaqs: FaqItem[] = [
  {
    question: "雅加达市区拜访怎么安排用车？",
    answer:
      "市区两点之间预留1小时车程，一天最多排3个拜访点。我们司机熟悉SCBD、Thamrin政商区各楼宇落客点，会按堵车规律建议出发时间。"
  },
  {
    question: "去卡拉旺/芝卡朗工业园区考察怎么走？",
    answer:
      "园区位于雅加达以东50-70公里，建议6:30出发避开早高峰，一天可考察2个园区＋1家工厂。网约车去得了回不来，包车是唯一稳妥方案。"
  },
  {
    question: "雅加达到万隆考察包车多少钱？",
    answer:
      "按日租＋超公里计：以7座Fortuner为例1200元/天（含120公里），雅加达至万隆单程约150公里，超出里程按每公里10元计，含停车费、高速费、燃油费、司机费。发送具体行程获取一口价，也可单程雅万高铁＋单程包车组合。"
  },
  {
    question: "考察团5天包车总预算大概多少？",
    answer:
      "以7座Fortuner为例：1200元/天×5天＝6000元，加配中文司机500元/天另计；6人以上建议双车编队（如Fortuner＋埃尔法组合），按车型组合报价。每天含10小时、120公里，跨城超出部分按规则透明计费。"
  }
];

export const airportFaqs: FaqItem[] = [
  {
    question: "雅加达机场到市区接机多少钱？",
    answer:
      "接送机提供单程一口价，含举牌、停车费、高速费、燃油费，等待1小时（航班延误免费顺延），价格随车型（5座欧萌达至7座埃尔法/威尔法）浮动。发送航班号至微信 Amin-car 即可获取报价；包车期间的接送机已含在日租内。"
  },
  {
    question: "凌晨航班可以接吗？",
    answer:
      "可以。常规服务时间为6:00–23:00，23点后的深夜及凌晨时段按加班费用计，预订时一次性报全包价，不会临时加价。"
  },
  {
    question: "送机要提前多久出发？",
    answer:
      "国际航班建议提前3.5小时从市区出发；雨季（11月-3月）午后常有暴雨级拥堵，再加30分钟余量。"
  },
  {
    question: "落地后怎么找到司机？",
    answer:
      "提前把航班号发到微信 Amin-car，落地开机即可在微信收到司机位置与车牌号，出口举牌等候，无需当地电话卡。"
  }
];

export const priceFaqs: FaqItem[] = [
  {
    question: "日租价格包含什么？",
    answer:
      "包含停车费、高速费、燃油费、司机费。每天服务10小时（服务时间6:00-23:00之间）、含120公里里程（以仪表盘为准），一口价无任何隐形加价。"
  },
  {
    question: "超时或超公里怎么计费？",
    answer:
      "超时按每小时收取当日租金的10%；超公里按每公里10元计，以车辆里程表为准。超过晚上23点用车，即使当天不满10小时也按加班计费。"
  },
  {
    question: "中文司机怎么收费？",
    answer:
      "加配中文司机500元/天，负责日常沟通与路线交流；中文司机兼导游800元/天，可提供景点讲解与全程陪同，并可代为定制游玩行程。"
  },
  {
    question: "取消政策是什么？",
    answer:
      "用车48小时前取消免费；24小时内取消收取50%违约金；车辆已出发但因不可抗力未能接到客户，收取50%定金、余款不再收取；用车过程中因不可抗力导致超时，按正常超时费计。"
  },
  {
    question: "怎么付款？",
    answer: "支持人民币（微信/支付宝/对公转账）与印尼盾，可签服务合同，提供行程单与结算凭证。"
  }
];

export const fleetPrices = [
  ["奇瑞 欧萌达 Omoda", "5座", "1-3人出行", "¥880 / 天"],
  ["丰田 Fortuner", "7座", "商务出行 · 多人组", "¥1200 / 天"],
  ["三菱 帕杰罗 Pajero", "7座", "商务出行 · 长途路况", "¥1200 / 天"],
  ["丰田 埃尔法 Alphard", "7座", "高管接待", "¥1650 / 天"],
  ["丰田 威尔法 Vellfire", "7座", "高管接待", "¥1850 / 天"]
];

export const guideArticles: GuideArticle[] = [
  {
    slug: "guide-kaocha-jiaotong.html",
    title: "2026中国企业印尼商务考察攻略：交通用车全解析",
    description:
      "驻印尼6年的一线经验亲述：印尼商务考察能不能自己打车、包车一天多少钱、司机怎么选、行程怎么排最高效。",
    sections: [
      {
        heading: "雅加达商务考察可以自己打车吗？",
        body:
          "短距离市区移动可以，但真正的商务考察不建议依赖临时打车。雅加达堵车、楼宇落客点复杂，去卡拉旺、芝卡朗、万隆等工业园区更需要稳定车辆。网约车能去，不一定愿意等，也不一定愿意空车返回。"
      },
      {
        heading: "印尼商务考察包车一天多少钱？",
        body:
          "阿敏租车的日租全包价从5座欧萌达880元/天起，7座Fortuner或帕杰罗1200元/天，埃尔法1650元/天，威尔法1850元/天。价格含司机、油费、高速费、停车费，每天10小时、120公里。"
      },
      {
        heading: "商务包车要选什么样的司机？",
        body:
          "商务考察司机不是简单开车。要熟悉政商区、工业园区门禁、酒店接送点，懂提前到位和商务分寸。需要中文沟通时，可加配中文司机或中文司机兼导游。"
      },
      {
        heading: "考察行程怎么安排交通最高效？",
        body:
          "建议同区域拜访排在同一天，早高峰前出发去东部工业园区，市区拜访每天最多排3个点。跨城线路要预留堵车和园区门禁时间，避免把关键会议排得过满。"
      }
    ],
    tip:
      "阿敏租车由驻印尼6年的中国创始团队运营，专门服务中国来印尼的商务考察团：中文司机、商务车队、行程规划、机场接送一站式。"
  },
  {
    slug: "guide-jakarta-jichang.html",
    title: "雅加达机场到市区怎么走？驻印尼6年老司机告诉你",
    description:
      "雅加达苏加诺-哈达机场到市区的全部方式对比：机场快线、Grab、蓝鸟出租车、中文包车接机，价格与避坑提醒。",
    sections: [
      {
        heading: "雅加达机场离市区多远？",
        body:
          "苏加诺-哈达机场到雅加达市区约30公里，顺畅时40-60分钟，高峰和雨天常常需要2小时左右。商务出差建议按更保守的时间预留。"
      },
      {
        heading: "有哪几种方式？",
        body:
          "常见方式包括机场快线、Grab、蓝鸟出租车和提前预约中文包车接机。第一次来印尼、带行李、落地后有会议或需要中文沟通的客户，更适合提前订接机。"
      },
      {
        heading: "商务出差为什么建议提前订接机？",
        body:
          "雅加达机场出关后场面比较混乱。提前订接机，落地开机就能在微信上联系到司机，不需要装当地卡、不需要会印尼语。很多商务客人落地当天就有安排，车上这一小时正好和中文协调员过行程。"
      },
      {
        heading: "避坑提醒",
        body:
          "不要在出口临时接受陌生人报价；航班延误要提前告知；国际航班返程建议提前3.5小时从市区出发，雨季再加30分钟。"
      }
    ],
    tip:
      "阿敏租车提供CGK机场24小时中文接送机：发航班号到微信 Amin-car 即可预订，落地微信直联司机。"
  },
  {
    slug: "guide-5tian-xingcheng.html",
    title: "中国企业印尼考察5天标准行程模板（含交通安排）",
    description:
      "被数十个考察团验证过的印尼考察5天行程：政商拜访、工业园区、同行交流怎么排，交通预算多少。",
    sections: [
      {
        heading: "Day 1：落地＋市区适应",
        body:
          "机场接机后入住酒店，下午可安排市区轻量拜访或内部行前会。第一天不要排太满，重点是适应交通和确认后续行程。"
      },
      {
        heading: "Day 2：政府与商协会拜访",
        body:
          "安排投资部、商协会、园区代表或服务机构拜访。市区两点之间建议预留1小时车程，一天最多3个正式拜访点。"
      },
      {
        heading: "Day 3：工业园区考察",
        body:
          "建议早上6:30左右从雅加达出发前往卡拉旺、芝卡朗、德尔塔玛斯等工业园区，一天安排2个园区和1家企业较稳妥。"
      },
      {
        heading: "Day 4：同行企业交流＋市场走访",
        body:
          "根据行业安排同行企业、市场渠道或样板项目走访。可结合晚餐交流，但不要压缩返程时间。"
      },
      {
        heading: "Day 5：补充会议＋返程",
        body:
          "上午安排补充会或采购资料，国际航班建议提前3.5小时从市区出发前往机场。雨季和高峰期要再加余量。"
      },
      {
        heading: "交通预算怎么做？",
        body:
          "以7座Fortuner为例，1200元/天×5天约6000元，加配中文司机另计。跨城超公里按规则计费，多人团队可双车编队。"
      }
    ],
    tip:
      "阿敏租车提供考察团全程用车＋行程规划建议，创始团队驻印尼6年，懂你要见谁、怎么排最顺。"
  },
  {
    slug: "guide-zuche-bikeng.html",
    title: "中国人在印尼租车避坑指南：6年驻外人的大实话",
    description:
      "在印尼租车最常见的6个坑：隐形加价、自驾风险、机场黑车、郊区叫不到车、司机不懂商务、没有凭证。来印尼前必读。",
    sections: [
      {
        heading: "坑1：报价不含油费过路费",
        body:
          "低价报价如果不含油费、停车费、高速费，最后结算很容易超预算。商务用车建议确认全包价，避免临时加项。"
      },
      {
        heading: "坑2：自驾",
        body:
          "理论上中国驾照＋翻译件/国际驾照可以在印尼开车，但强烈不建议：右舵左行、摩托车流密集、事故后处理流程对外国人极不友好。在印尼，包车含司机才是常规操作。"
      },
      {
        heading: "坑3：机场黑车",
        body:
          "机场出口临时拉客报价不透明，容易出现加价和沟通困难。第一次来雅加达，建议提前确认司机、车牌和集合点。"
      },
      {
        heading: "坑4：临时叫车去郊区",
        body:
          "去卡拉旺、芝卡朗、万隆等方向，临时网约车可能不愿等待或返程。商务考察最好全天包车。"
      },
      {
        heading: "坑5：司机不懂商务场景",
        body:
          "商务司机要懂提前到位、安静等待、楼宇落客和路线沟通。便宜司机不一定适合接待客户。"
      },
      {
        heading: "坑6：没有报销凭证",
        body:
          "企业客户要提前确认是否能提供行程单、服务合同、结算凭证和对公支持，避免回国报销困难。"
      }
    ],
    tip:
      "阿敏租车，由驻印尼6年的中国人创办，就是为了让国内来的朋友别再踩这些坑。商务考察、接送机、长包月租，全程中文。"
  },
  {
    slug: "guide-wanlong-luxian.html",
    title: "印尼制造业考察怎么走？雅加达-卡拉旺-万隆经典路线全解",
    description:
      "印尼制造业考察经典路线详解：雅加达政商资源、卡拉旺/芝卡朗工业园区、万隆轻工腹地，行程节奏与用车方案。",
    sections: [
      {
        heading: "这条线上有什么？",
        body:
          "雅加达适合政商资源和总部拜访，卡拉旺、芝卡朗、德尔塔玛斯聚集大量工业园区，万隆则适合轻工、教育和区域市场考察。"
      },
      {
        heading: "交通怎么安排？",
        body:
          "建议以雅加达为中心，先做市区拜访，再早起前往东部工业园区。万隆方向可以安排单独一天或过夜，避免当天往返过度疲劳。"
      },
      {
        heading: "用车配置建议",
        body:
          "3-4人可选Fortuner或帕杰罗，客户接待可用埃尔法或威尔法，多人团组建议双车编队。跨城路线必须提前确认里程和等待规则。"
      },
      {
        heading: "一个本地人的建议",
        body:
          "制造业考察最怕临时改点和交通误判。把关键会议放上午，把弹性走访放下午，司机和协调员提前拿到完整地址，会显著降低风险。"
      }
    ],
    tip:
      "阿敏租车跑这条线很熟，提供「用车＋路线建议＋园区预约提醒」打包服务。创始团队驻印尼6年。"
  }
];

export function guideUrl(slug: string) {
  return `${siteUrl}/${slug}`;
}

export function faqSchema(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };
}

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: siteName,
  description:
    "雅加达中资租车团队，提供商务考察包车、机场接送、长期月租，中文司机服务。",
  url: siteUrl,
  telephone: whatsappNumber,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Jakarta",
    addressCountry: "ID"
  },
  areaServed: ["Jakarta", "Karawang", "Cikarang", "Bandung"],
  priceRange: "¥¥",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    availableLanguage: ["Chinese", "Indonesian", "English"],
    url: whatsappUrl
  }
};
