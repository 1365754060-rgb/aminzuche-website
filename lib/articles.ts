import { siteUrl } from "./site";

export type SeoArticle = {
  slug: string;
  title: string;
  description: string;
  category: string;
  city: string;
  publishedAt: string;
  readTime: string;
  keywords: string[];
  sections: Array<{
    heading: string;
    body: string;
  }>;
};

export const articles: SeoArticle[] = [
  {
    slug: "jakarta-car-rental-chinese-driver",
    title: "雅加达租车中文司机怎么选",
    description:
      "面向中国游客和商务人士的雅加达租车指南，说明中文司机、包车时长、机场接送和商务拜访用车的选择要点。",
    category: "雅加达租车",
    city: "雅加达",
    publishedAt: "2026-06-13",
    readTime: "4分钟",
    keywords: ["雅加达租车", "中文司机", "印尼包车"],
    sections: [
      {
        heading: "先确认行程类型",
        body: "雅加达交通节奏较快，商务拜访、机场接送和城市观光对车辆安排的要求不同。下单前建议先确认用车日期、人数、行李数量、拜访点数量和是否需要中文沟通。"
      },
      {
        heading: "中文司机的价值",
        body: "中文司机不仅解决语言问题，也能帮助确认集合点、酒店大堂、航班抵达时间和临时路线调整。对第一次到印尼的中国客户来说，沟通效率通常比单纯低价更重要。"
      },
      {
        heading: "车型选择建议",
        body: "少量乘客可选择经济型或商务型；如果涉及客户接待，Alphard 更适合商务形象；多人团队或考察团可以优先考虑 Hiace。"
      }
    ]
  },
  {
    slug: "bali-private-car-charter-guide",
    title: "巴厘岛包车一日游用车指南",
    description:
      "介绍巴厘岛包车常见路线、中文沟通需求、车型选择和家庭出行注意事项，帮助中国游客提前安排用车。",
    category: "巴厘岛包车",
    city: "巴厘岛",
    publishedAt: "2026-06-13",
    readTime: "4分钟",
    keywords: ["巴厘岛包车", "巴厘岛租车", "中文司机"],
    sections: [
      {
        heading: "巴厘岛适合包车的原因",
        body: "巴厘岛景点分散，酒店、海滩、餐厅和景区之间距离不短。包车可以减少临时叫车等待，也方便根据天气和体力调整行程。"
      },
      {
        heading: "常见用车场景",
        body: "家庭游客常用于机场接送、乌布一日游、南部海滩路线和婚礼旅拍接送。商务客户则更关注准时、车况和司机沟通能力。"
      },
      {
        heading: "提前告知行李和人数",
        body: "巴厘岛机场接送尤其要确认行李数量。人数不多但行李较多时，车型空间比座位数量更关键。"
      }
    ]
  },
  {
    slug: "indonesia-airport-transfer-chinese-service",
    title: "印尼机场接送中文服务注意事项",
    description:
      "整理雅加达、巴厘岛等印尼机场接送的预约要点，包括航班信息、等待时间、集合点和中文司机沟通。",
    category: "机场接送",
    city: "印尼",
    publishedAt: "2026-06-13",
    readTime: "3分钟",
    keywords: ["印尼机场接送", "雅加达机场接送", "巴厘岛机场接送"],
    sections: [
      {
        heading: "预约时需要提供什么",
        body: "建议提供航班号、抵达日期、预计人数、行李数量、目的地酒店或地址，以及是否需要中文司机。航班号可以帮助司机判断延误和抵达航站楼。"
      },
      {
        heading: "集合点要提前确认",
        body: "不同机场和航站楼的接人规则不同。提前确认司机等待位置、联系人和备用联系方式，可以避免落地后因为网络或语言问题耽误行程。"
      },
      {
        heading: "商务接机更重视稳定",
        body: "如果是客户或团队接机，建议选择更舒适的商务车型，并预留等待时间，避免航班排队、入境和取行李造成延误。"
      }
    ]
  },
  {
    slug: "indonesia-business-trip-car-service",
    title: "印尼商务考察用车如何安排",
    description:
      "面向中国企业出海、商务考察和客户拜访，说明印尼商务用车的路线、司机、车型和多点行程安排。",
    category: "商务考察",
    city: "印尼",
    publishedAt: "2026-06-13",
    readTime: "5分钟",
    keywords: ["印尼商务考察", "印尼商务用车", "雅加达商务租车"],
    sections: [
      {
        heading: "先梳理拜访节奏",
        body: "商务考察通常包含酒店、工厂、客户办公室、餐厅和机场等多个节点。提前整理每个地点、预计停留时间和联系人，有助于司机规划路线。"
      },
      {
        heading: "车辆形象影响接待体验",
        body: "商务场景不只看价格，也看车况、空间、安静程度和司机服务。接待客户或高管时，Alphard 或同级商务车型更适合。"
      },
      {
        heading: "预留交通缓冲",
        body: "雅加达高峰期拥堵明显，商务拜访不要把会议排得过密。用车计划中保留缓冲时间，通常比临时赶路更可靠。"
      }
    ]
  },
  {
    slug: "monthly-car-rental-indonesia-expats",
    title: "印尼长期用车适合哪些人",
    description:
      "介绍驻外人员、项目团队和长期商务人员在印尼选择长期租车或固定司机服务时需要考虑的因素。",
    category: "长期用车",
    city: "印尼",
    publishedAt: "2026-06-13",
    readTime: "4分钟",
    keywords: ["印尼长期租车", "驻外人员用车", "印尼司机服务"],
    sections: [
      {
        heading: "适合长期停留人群",
        body: "驻外员工、项目团队、长期商务考察人员和家庭陪同人员，通常更适合固定车辆和司机安排。这样可以减少每天重新叫车和沟通路线的成本。"
      },
      {
        heading: "明确用车范围",
        body: "长期用车前应确认城市范围、每日用车时长、周末安排、是否跨城、油费停车费和加班规则。规则越清楚，后续沟通越顺畅。"
      },
      {
        heading: "重视稳定性",
        body: "长期服务最重要的是稳定、安全和响应速度。建议优先选择沟通顺畅、车况透明、能固定服务规则的供应商。"
      }
    ]
  },
  {
    slug: "alphard-rental-jakarta-business",
    title: "雅加达 Alphard 租车适合什么场景",
    description:
      "说明 Alphard 在雅加达商务接待、机场接送、高管出行和客户拜访中的适用场景与预约要点。",
    category: "车型选择",
    city: "雅加达",
    publishedAt: "2026-06-13",
    readTime: "3分钟",
    keywords: ["雅加达 Alphard", "Alphard 租车", "商务接待用车"],
    sections: [
      {
        heading: "适合高端接待",
        body: "Alphard 空间宽敞、乘坐舒适，常用于高管接送、客户接待、商务拜访和重要机场接机。它更适合重视形象和舒适度的行程。"
      },
      {
        heading: "提前确认版本和座位",
        body: "不同车辆年份和配置可能不同。预约时建议确认座位布局、行李空间、是否需要中文司机，以及是否全天包车。"
      },
      {
        heading: "价格不是唯一标准",
        body: "高端车型的价值在于准时、车况、司机服务和行程执行。商务客户应优先关注整体服务稳定性。"
      }
    ]
  },
  {
    slug: "hiace-rental-indonesia-team-trip",
    title: "印尼 Hiace 包车适合团队出行吗",
    description:
      "介绍 Hiace 在印尼团队出行、商务考察、家庭旅行和多人机场接送中的优势与注意事项。",
    category: "车型选择",
    city: "印尼",
    publishedAt: "2026-06-13",
    readTime: "3分钟",
    keywords: ["印尼 Hiace 包车", "团队用车", "多人机场接送"],
    sections: [
      {
        heading: "适合多人和多行李",
        body: "Hiace 的优势是空间和载客能力，适合商务考察团、家庭团、摄影团队和多人机场接送。多人同车也有利于统一行程节奏。"
      },
      {
        heading: "路线要提前规划",
        body: "大车在部分狭窄道路、酒店入口或景区停车点可能有限制。提前说明路线和停靠点，有助于判断是否适合使用 Hiace。"
      },
      {
        heading: "沟通集合时间",
        body: "团队出行容易因为集合慢而影响后续行程。建议明确集合点、出发时间和联系人，减少临时等待。"
      }
    ]
  },
  {
    slug: "jakarta-airport-to-city-transfer",
    title: "雅加达机场到市区接送指南",
    description:
      "说明从雅加达机场到市区、酒店和商务区的接送安排，包括航班、行李、车型和高峰期时间预留。",
    category: "机场接送",
    city: "雅加达",
    publishedAt: "2026-06-13",
    readTime: "4分钟",
    keywords: ["雅加达机场接送", "雅加达机场到市区", "Soekarno Hatta 接送"],
    sections: [
      {
        heading: "高峰期要预留时间",
        body: "雅加达机场到市区的时间受交通影响明显。早晚高峰、雨天和大型活动期间，建议为后续会议或转机预留更多缓冲。"
      },
      {
        heading: "航班号很重要",
        body: "提供航班号可以帮助司机跟踪航班状态。国际到达还要考虑入境排队和取行李时间，不建议把接送后的安排排得太紧。"
      },
      {
        heading: "根据行李选车型",
        body: "多人或多行李建议选择空间更大的车型。商务客户如需接待形象，可以选择 Alphard 或商务型车辆。"
      }
    ]
  },
  {
    slug: "bali-airport-transfer-to-hotel",
    title: "巴厘岛机场到酒店接送怎么预约",
    description:
      "介绍巴厘岛机场接送到酒店的预约信息、集合点、家庭出行和中文沟通注意事项。",
    category: "机场接送",
    city: "巴厘岛",
    publishedAt: "2026-06-13",
    readTime: "3分钟",
    keywords: ["巴厘岛机场接送", "巴厘岛酒店接送", "巴厘岛中文司机"],
    sections: [
      {
        heading: "落地第一程要稳定",
        body: "巴厘岛机场到酒店是很多游客抵达印尼后的第一段行程。提前预约可以避免落地后临时沟通价格、车型和目的地。"
      },
      {
        heading: "家庭出行要说明儿童和行李",
        body: "如果有儿童、老人或大件行李，建议提前说明。这样更容易匹配合适车型，也方便司机安排接人位置。"
      },
      {
        heading: "中文沟通减少误会",
        body: "中文客户可提前把酒店名称、订单截图和联系人发给服务方，司机接送时确认更高效。"
      }
    ]
  },
  {
    slug: "indonesia-car-rental-price-factors",
    title: "印尼租车价格通常受哪些因素影响",
    description:
      "从城市、车型、用车时长、路线、司机语言和节假日等角度说明印尼租车报价差异。",
    category: "租车报价",
    city: "印尼",
    publishedAt: "2026-06-13",
    readTime: "4分钟",
    keywords: ["印尼租车价格", "印尼包车报价", "租车费用"],
    sections: [
      {
        heading: "城市和路线影响报价",
        body: "雅加达、巴厘岛和跨城路线的成本不同。市内短途、全天包车、机场接送和跨城行程的报价方式也不一样。"
      },
      {
        heading: "车型决定基础成本",
        body: "经济型、商务型、Alphard 和 Hiace 的车辆成本不同。人数、行李和接待规格会影响车型选择，从而影响报价。"
      },
      {
        heading: "服务要求也会影响价格",
        body: "是否需要中文司机、是否凌晨接送、是否长时间等待、是否跨区域，都可能影响最终费用。"
      }
    ]
  },
  {
    slug: "chinese-tourists-indonesia-car-charter",
    title: "中国游客到印尼为什么适合提前包车",
    description:
      "面向第一次到印尼的中国游客，说明提前包车在语言、路线、行李、安全感和时间安排上的优势。",
    category: "游客用车",
    city: "印尼",
    publishedAt: "2026-06-13",
    readTime: "4分钟",
    keywords: ["中国游客印尼包车", "印尼中文包车", "印尼旅游租车"],
    sections: [
      {
        heading: "语言沟通更顺畅",
        body: "第一次到印尼，机场、酒店和景点之间的沟通可能存在语言成本。提前包车并安排中文沟通，可以减少落地后的不确定性。"
      },
      {
        heading: "行程更容易调整",
        body: "旅行中可能遇到天气、堵车、景点排队或临时想更换餐厅。包车服务比点对点叫车更适合一整天的灵活行程。"
      },
      {
        heading: "适合家庭和多人",
        body: "带老人、儿童或行李较多时，提前安排车辆能减少等待和搬运行李的压力。"
      }
    ]
  },
  {
    slug: "jakarta-business-car-rental-route-planning",
    title: "雅加达商务租车路线规划建议",
    description:
      "帮助商务客户规划雅加达多点拜访路线，说明酒店、办公区、工业区和机场之间的时间安排。",
    category: "商务考察",
    city: "雅加达",
    publishedAt: "2026-06-13",
    readTime: "5分钟",
    keywords: ["雅加达商务租车", "雅加达商务拜访", "雅加达路线规划"],
    sections: [
      {
        heading: "不要把会议排得太密",
        body: "雅加达交通不确定性较高。商务拜访建议按区域集中安排，减少跨城穿梭，避免把一天拆成过多地点。"
      },
      {
        heading: "先安排关键会议",
        body: "如果一天有多个拜访点，应优先保障最重要会议的准时性。其他餐叙、看点和临时会面可以作为弹性安排。"
      },
      {
        heading: "司机需要完整地址",
        body: "印尼地址有时相似，建议提供 Google Maps 链接、公司名称、联系人和停车入口说明。"
      }
    ]
  },
  {
    slug: "bali-family-trip-car-rental",
    title: "巴厘岛家庭出游包车注意事项",
    description:
      "介绍带老人儿童到巴厘岛旅行时的包车安排，包括车型空间、行程节奏、酒店接送和中文司机沟通。",
    category: "游客用车",
    city: "巴厘岛",
    publishedAt: "2026-06-13",
    readTime: "4分钟",
    keywords: ["巴厘岛家庭包车", "巴厘岛亲子游租车", "巴厘岛中文司机"],
    sections: [
      {
        heading: "行程节奏要放慢",
        body: "家庭出游不建议一天安排过多景点。老人和儿童更需要休息时间，包车可以让行程更灵活。"
      },
      {
        heading: "车型空间比价格更重要",
        body: "家庭出行通常行李较多，也可能需要更舒适的座位。选择车型时应同时考虑人数、行李和乘坐时间。"
      },
      {
        heading: "提前说明特殊需求",
        body: "如果有儿童座椅、老人上下车、轮椅或婴儿车等需求，应提前说明，以便判断车辆和路线是否合适。"
      }
    ]
  },
  {
    slug: "indonesia-car-rental-safety-tips",
    title: "印尼租车安全和沟通注意事项",
    description:
      "说明中国客户在印尼租车、包车和机场接送时需要关注的司机沟通、车况、路线和付款安全。",
    category: "用车安全",
    city: "印尼",
    publishedAt: "2026-06-13",
    readTime: "4分钟",
    keywords: ["印尼租车安全", "印尼包车注意事项", "中文司机"],
    sections: [
      {
        heading: "确认车辆和司机信息",
        body: "出发前应确认车辆类型、司机联系方式、车牌信息和集合地点。机场接送尤其要提前保存备用联系方式。"
      },
      {
        heading: "路线和费用提前说清",
        body: "用车前确认是否包含油费、停车费、过路费、等待费和加班费。跨城或多点行程要明确范围。"
      },
      {
        heading: "保留沟通记录",
        body: "建议通过 WhatsApp、微信或邮件确认关键事项，方便后续核对行程、费用和服务要求。"
      }
    ]
  },
  {
    slug: "indonesia-car-rental-for-exhibition",
    title: "印尼展会期间商务用车怎么安排",
    description:
      "面向参加印尼展会的中国企业，说明展馆接送、酒店往返、客户拜访和团队用车的安排方式。",
    category: "商务考察",
    city: "印尼",
    publishedAt: "2026-06-13",
    readTime: "4分钟",
    keywords: ["印尼展会用车", "雅加达展会租车", "商务接送"],
    sections: [
      {
        heading: "展会期间要提前订车",
        body: "大型展会期间酒店、展馆和机场之间的交通需求集中，临时约车不一定稳定。建议提前确认日期、人数和每日用车时间。"
      },
      {
        heading: "团队用车要统一联系人",
        body: "展会团队常有不同成员分批出发。指定一个联系人统一沟通，可以减少司机和乘客之间的信息差。"
      },
      {
        heading: "预留撤展和客户拜访时间",
        body: "展会最后一天可能涉及撤展、样品搬运和临时客户拜访。用车计划应预留弹性时间。"
      }
    ]
  },
  {
    slug: "jakarta-hotel-to-factory-car-service",
    title: "雅加达酒店到工厂考察用车指南",
    description:
      "介绍从雅加达酒店前往工厂、园区或客户现场考察时的车辆安排、时间预留和中文沟通事项。",
    category: "商务考察",
    city: "雅加达",
    publishedAt: "2026-06-13",
    readTime: "4分钟",
    keywords: ["雅加达工厂考察", "雅加达包车", "印尼商务用车"],
    sections: [
      {
        heading: "工厂地址要核对准确",
        body: "工厂和工业园区地址可能离市区较远，名称也可能相似。建议提供地图链接、联系人电话和门岗说明。"
      },
      {
        heading: "跨区域要预留路程",
        body: "从雅加达市区到周边工业区可能需要较长时间。早出发、少换点、明确返程时间更稳妥。"
      },
      {
        heading: "选择舒适车型",
        body: "工厂考察往返时间较长，商务型或 Alphard 能提升乘坐舒适度，也更适合接待客户。"
      }
    ]
  },
  {
    slug: "bali-wedding-photo-car-charter",
    title: "巴厘岛婚礼旅拍包车建议",
    description:
      "介绍巴厘岛婚礼、旅拍和婚纱摄影用车安排，包括多点拍摄、服装行李、司机等待和路线沟通。",
    category: "游客用车",
    city: "巴厘岛",
    publishedAt: "2026-06-13",
    readTime: "3分钟",
    keywords: ["巴厘岛旅拍包车", "巴厘岛婚礼用车", "巴厘岛包车"],
    sections: [
      {
        heading: "拍摄路线要提前排好",
        body: "旅拍常涉及酒店、海滩、教堂、悬崖或餐厅等多点移动。提前给司机完整路线，可以减少现场等待。"
      },
      {
        heading: "行李和服装空间要考虑",
        body: "婚纱、礼服、摄影器材和随行人员会增加空间需求。车型选择不能只看人数，还要看携带物品。"
      },
      {
        heading: "等待时间要说清",
        body: "拍摄过程可能出现等待和临时变更。预约时应说明预计用车时长和是否需要司机全天待命。"
      }
    ]
  },
  {
    slug: "indonesia-cross-city-car-charter",
    title: "印尼跨城包车需要注意什么",
    description:
      "说明印尼跨城包车的路线、用车时长、司机安排、费用规则和安全注意事项。",
    category: "跨城包车",
    city: "印尼",
    publishedAt: "2026-06-13",
    readTime: "4分钟",
    keywords: ["印尼跨城包车", "印尼长途租车", "印尼中文司机"],
    sections: [
      {
        heading: "跨城行程要确认可行性",
        body: "印尼跨城路况、距离和时间差异较大。预约前应提供出发地、目的地、停靠点和返程安排。"
      },
      {
        heading: "费用规则要提前说明",
        body: "跨城可能涉及油费、过路费、司机餐补、住宿或返程空驶成本。提前确认能避免后续误会。"
      },
      {
        heading: "不要过度压缩时间",
        body: "长途行驶应预留休息和堵车时间。商务客户尤其应避免把跨城路程和重要会议排得过近。"
      }
    ]
  },
  {
    slug: "indonesia-car-rental-for-chinese-expats",
    title: "中国驻外人员在印尼用车建议",
    description:
      "面向中国驻外员工、家属和项目人员，说明日常通勤、商务拜访、家庭出行和长期用车安排。",
    category: "长期用车",
    city: "印尼",
    publishedAt: "2026-06-13",
    readTime: "4分钟",
    keywords: ["印尼驻外人员用车", "印尼长期租车", "中文司机"],
    sections: [
      {
        heading: "日常用车重视稳定",
        body: "驻外人员常有固定通勤、采购、拜访和家庭出行需求。稳定的车辆和司机比临时叫车更容易形成习惯。"
      },
      {
        heading: "沟通方式要固定",
        body: "建议用 WhatsApp、微信或邮件固定沟通渠道，清楚记录时间、地点和特殊需求。"
      },
      {
        heading: "长期服务要定规则",
        body: "长期用车要提前说明工作日、周末、超时、跨城、费用包含项和结算方式。"
      }
    ]
  },
  {
    slug: "how-to-book-indonesia-car-rental",
    title: "如何预约印尼中文租车服务",
    description:
      "整理预约印尼租车、中文司机、机场接送和商务用车时需要提供的信息，帮助更快获得报价。",
    category: "预约指南",
    city: "印尼",
    publishedAt: "2026-06-13",
    readTime: "3分钟",
    keywords: ["预约印尼租车", "印尼中文租车", "印尼包车咨询"],
    sections: [
      {
        heading: "提供完整用车信息",
        body: "建议一次性提供日期、城市、人数、行李、起终点、用车时长、车型偏好和是否需要中文司机。信息越完整，报价越准确。"
      },
      {
        heading: "说明出行目的",
        body: "商务考察、家庭旅行、机场接送和长期用车的服务重点不同。说明目的有助于推荐更合适的车型和行程安排。"
      },
      {
        heading: "保留联系方式",
        body: "请留下 WhatsApp、微信或邮箱，便于确认细节、发送报价和安排司机。"
      }
    ]
  }
];

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}

export function articleUrl(slug: string) {
  return `${siteUrl}/articles/${slug}`;
}
