export const NAV_LINKS = [
  { id: 'home', label: 'Home', labelZh: '首页' },
  { id: 'about', label: 'About', labelZh: '履历' },
  { id: 'projects', label: 'Projects', labelZh: '项目' },
  { id: 'insights', label: 'Skills', labelZh: '能力' },
  { id: 'contact', label: 'Contact', labelZh: '联络' },
]

export const ELEVATOR_LINKS = [
  { id: 'home', label: '00 首页' },
  { id: 'about', label: '01 履历' },
  { id: 'projects', label: '02 项目' },
  { id: 'insights', label: '03 能力' },
  { id: 'contact', label: '04 联络' },
]

export const TYPEWRITER_PHRASES = [
  '海外交付经理 / 海外基地负责人',
  '吉隆坡基地 0 → 120 人',
  '具身数据 1,500+ 有效小时',
  '普通话 / 英语 / 粤语',
]

export const PROFILE_IMG = '/cv-photo.png'

export const EMAIL = '3113284392@qq.com'
export const PHONE = '15916263442'
export const PHONE_HREF = 'tel:15916263442'
export const JC_URL = 'http://43.103.49.144/'

export const STATS = [
  {
    node: 'HOURS',
    nodeColor: 'text-tertiary',
    hoverBorder: 'hover:border-primary/40',
    value: 1500,
    unit: '+ 小时',
    unitColor: 'text-primary',
    title: '具身数据累计交付',
    desc: 'C 客户工厂场景采集的有效小时，覆盖芜湖工厂与台州基地。',
  },
  {
    node: 'QA',
    nodeColor: 'text-secondary',
    hoverBorder: 'hover:border-secondary/40',
    value: 95,
    unit: '%+',
    unitColor: 'text-secondary',
    title: '验收通过率',
    desc: '工厂 / ego / 标注三条线。',
  },
  {
    node: 'BASE',
    nodeColor: 'text-tertiary',
    hoverBorder: 'hover:border-primary/40',
    value: 120,
    unit: '人',
    unitColor: 'text-primary',
    title: '吉隆坡基地从 0 起盘',
    desc: '2025.11 本地 0 人起步，2026 年底规模 120 人，办公室经理 / 交付运营 / HR 三层架构。',
  },
  {
    node: 'SPAN',
    nodeColor: 'text-secondary',
    hoverBorder: 'hover:border-secondary/40',
    value: 200,
    unit: '+ 人',
    unitColor: 'text-secondary',
    title: '管理带宽',
    desc: '峰值带宽，经中层主管三层管理。',
  },
]

export const TIMELINE = [
  {
    phase: '2025.08 – 至今',
    phaseClass: 'bg-emerald-950/60 text-emerald-400 border border-emerald-800/40',
    border: 'border-emerald-400',
    hoverBorder: 'hover:border-emerald-500/50',
    location: '广州景烁数据科技 · 文远知行全资子公司',
    title: '海外交付经理',
    desc: '2025.08 入职广州，2026.02 转深圳。负责海外交付与基地运营全链路：商务承接、技术标与报价、生产管理、质检验收、海外用工合规。重点项目直接向 VP 与 CEO 汇报。入职首年获 20% 加薪与季度之星。母公司为全球首家美股 + 港股双重主要上市的自动驾驶企业。',
  },
  {
    phase: '2024.03 – 2025.04',
    phaseClass: 'bg-primary-container/20 text-primary',
    border: 'border-primary',
    hoverBorder: 'hover:border-primary/50',
    location: '香港有光科技',
    title: 'AI 项目负责人',
    desc: '负责恒生银行 Fano Callinter 智能金融客服，以及国泰航空 Fano Accobot 智能出行助手。',
  },
  {
    phase: '2022.08 – 2024.01',
    phaseClass: 'bg-secondary-container/20 text-secondary',
    border: 'border-secondary',
    hoverBorder: 'hover:border-secondary/50',
    location: '精神茶记 · 餐饮外卖',
    title: '创始人',
    desc: '团队由 15 人扩至 20 人，搭建三层管理架构。月销从 5 万做到峰值 22.5 万（+450%），峰值月销 6,000 单；复购 34%、入店转化 28%，横琴好评与复购稳居片区前 10%。',
  },
  {
    phase: '2020.08 – 2022.07',
    phaseClass: 'bg-primary-container/20 text-primary',
    border: 'border-primary',
    hoverBorder: 'hover:border-primary/50',
    location: '珠海世联行 · 横琴片区',
    title: '项目副总监',
    desc: '2020.08 入职，半年内晋升横琴片区项目副总监。谈下 12 个重点项目协议，覆盖横琴新房 85%、非内渠中介签约率 90%。回款节点达成 75%，2021 年回款破千万；华发、中交项目销售与 GMV 第一，年度团队 36 亿 GMV。',
  },
  {
    phase: '2013.02 – 2017.10',
    phaseClass: 'bg-tertiary-container/30 text-tertiary',
    border: 'border-tertiary',
    hoverBorder: 'hover:border-tertiary/50',
    location: '瑞士酒店管理大学（SHMS）& 英国德比大学',
    title: '国际酒店与会展管理 · 双学位',
    desc: '文学学士（荣誉级）。QS 学科世界排名前三。',
  },
]

export const PROJECTS = [
  {
    id: 'kl-base',
    hoverBorder: 'hover:border-primary/60',
    titleHover: 'group-hover:text-primary',
    resultColor: 'text-primary',
    tags: [
      { label: '基地从 0 到 1', className: 'bg-primary-container/20 text-primary' },
      { label: '2025.11–至今', className: 'bg-surface-container text-on-surface-variant' },
      { label: '包人力 / 计件', className: 'bg-secondary-container/20 text-secondary' },
    ],
    title: '吉隆坡交付基地从 0 到 1',
    desc: '本地 0 人起步，2026 年底扩至 120 人。搭建办公室经理、交付运营、HR 三层架构，招聘、培训、SOP 自建，并推进实体注册前置与用工合规。',
    result: '0 → 120 人 · 已常态交付',
  },
  {
    id: 'factory-c',
    hoverBorder: 'hover:border-secondary/60',
    titleHover: 'group-hover:text-secondary',
    resultColor: 'text-secondary',
    tags: [
      { label: 'C 客户', className: 'bg-secondary-container/20 text-secondary' },
      { label: '工厂具身采集', className: 'bg-surface-container text-on-surface-variant' },
      { label: '2026.08–至今', className: 'bg-primary-container/20 text-primary' },
    ],
    title: '工厂场景具身数据采集',
    desc: '公司此前没有工厂与设备采集 SOP。自建流程和验收口径，覆盖芜湖工厂与台州基地 100+ 工序，按全包交付管理客户预期、交付与回款。',
    result: '1,500+ 有效小时 · 验收 95%+',
  },
  {
    id: 'ego-d',
    hoverBorder: 'hover:border-tertiary/60',
    titleHover: 'group-hover:text-tertiary',
    resultColor: 'text-tertiary',
    tags: [
      { label: 'D 客户', className: 'bg-tertiary-container/30 text-tertiary' },
      { label: 'ego 采集 / 视频标注', className: 'bg-surface-container text-on-surface-variant' },
      { label: '2026.06–至今', className: 'bg-primary-container/20 text-primary' },
    ],
    title: '具身 ego 采集与视频标注验收',
    desc: '70–80 人、3 个月周期。客户系统内直标、没有后置质检，质量靠培训、试标、标注、bad-case 归因和再培训压在前端。',
    result: '验收通过率 95%+',
  },
  {
    id: 'asr-b',
    hoverBorder: 'hover:border-primary/60',
    titleHover: 'group-hover:text-primary',
    resultColor: 'text-primary',
    tags: [
      { label: 'B 客户', className: 'bg-primary-container/20 text-primary' },
      { label: '海外 ASR + 视频评测', className: 'bg-surface-container text-on-surface-variant' },
      { label: '2025.09–2025.12', className: 'bg-secondary-container/20 text-secondary' },
    ],
    title: '海外 ASR 与视频评测',
    desc: '50–60 人，以海外供应商为主，周期 3 个月。在 7 美元/小时口径下重算人力结构。',
    result: '稳定 1,000 小时/月 · 毛利 3% → 10%+',
  },
  {
    id: 'hangseng',
    hoverBorder: 'hover:border-secondary/60',
    titleHover: 'group-hover:text-secondary',
    resultColor: 'text-secondary',
    tags: [
      { label: '有光科技', className: 'bg-surface-container text-on-surface-variant' },
      { label: '恒生银行', className: 'bg-secondary-container/20 text-secondary' },
      { label: '中 / 英 / 粤', className: 'bg-primary-container/20 text-primary' },
    ],
    title: 'Fano Callinter · 智能金融客服',
    desc: '三语智能客服，打通意图识别、个性化产品推荐（RAG）和坐席实时辅助。统筹 30+ 人跨境团队（含中国台湾分部），向 ExCo 汇报。',
    result: '意图识别 78% → 95% · 漏检 <2% · 投诉率 -25%',
  },
  {
    id: 'cathay',
    hoverBorder: 'hover:border-emerald-500/60',
    titleHover: 'group-hover:text-emerald-400',
    resultColor: 'text-emerald-400',
    tags: [
      { label: '有光科技', className: 'bg-surface-container text-on-surface-variant' },
      { label: '国泰航空', className: 'bg-emerald-950/60 text-emerald-400' },
      { label: '2024.03–2024.05', className: 'bg-primary-container/20 text-primary' },
    ],
    title: 'Fano Accobot · 智能出行助手',
    desc: '模型数据项目经理阶段主导 SFT 标注：中英双语规则、评测框架和质检流程，带领中国台湾 15 人团队。评测看意图准确率、工具调用成功率、对话连贯性和幻觉率。',
    result: '自助解决率 25% → 70% · 人力成本 -20%+ · 意图识别 78% → 93%',
  },
]

export const STAR_CASES = {
  'kl-base': {
    tag: '海外基地',
    client: '广州景烁 · 吉隆坡',
    title: '吉隆坡交付基地从 0 到 1',
    situation: '2025.11 起筹建吉隆坡交付基地，本地当时没有团队。',
    task: '把基地从 0 人扩到可承接商业化项目的常态交付组织，并跑通用工合规与报价。',
    action: [
      '搭建办公室经理、交付运营、HR 三层架构，招聘、培训和 SOP 自己建。',
      '推进实体注册前置手续与用工合规。',
      '跑通「包人力」和「计件」两套报价模型。',
      '承接 C、D 客户具身标注与采集的搭建、应用和复盘。',
    ],
    result: '2026 年底规模 120 人。已承接首批商业化项目并常态交付。',
  },
  'factory-c': {
    tag: '具身采集',
    client: 'C 客户 · 工厂场景',
    title: '工厂场景具身数据采集',
    situation: '工厂与设备采集在公司属于新业务，此前没有可循的 SOP。时间从 2026.08 至今。',
    task: '跑通首个商业化采集客户，并按全包模式交付可验收的有效小时。',
    action: [
      '自建采集流程和验收口径。',
      '覆盖芜湖工厂和台州基地，工序 100+。',
      '以 Nett / Gross 有效率设基线，管理海外客户的预期、交付和回款。',
      '单 Gross 小时报价 298 元，规模化后单位成本可再降 15%–20%。',
    ],
    result: '累计 1,500+ 有效小时（8–9 月 799，10 月 700+），验收通过率 95%+。',
  },
  'ego-d': {
    tag: '标注验收',
    client: 'D 客户 · ego / 视频',
    title: '具身 ego 采集与视频标注验收',
    situation: '2026.06 至今。规模 70–80 人、周期 3 个月。客户系统内直标，无后置质检。',
    task: '完成具身 ego 采集与视频标注验收。',
    action: [
      '用「培训 → 试标 → 标注 → bad-case 归因 → 再培训」把质量压在前端。',
    ],
    result: '验收通过率 95%+。',
  },
  'asr-b': {
    tag: '海外评测',
    client: 'B 客户 · ASR + 视频',
    title: '海外 ASR 与视频评测',
    situation: '2025.09–2025.12，团队 50–60 人，以海外供应商为主，报价口径是 7 美元/小时。',
    task: '稳定月交付，并在 7 美元/小时口径下重算人力结构。',
    action: ['在 7 美元/小时口径下重算人力结构。'],
    result: '稳定 1,000 小时/月，毛利由 3% 拉回 10%+。',
  },
  hangseng: {
    tag: '金融客服',
    client: '有光科技 · 恒生银行（香港）',
    title: 'Fano Callinter 智能金融客服',
    situation: '恒生银行（香港）智能金融客服项目，使用中、英、粤三语。',
    task: '打通意图识别、个性化产品推荐（RAG）与坐席实时辅助。',
    action: [
      '链路：意图识别 → 个性化产品推荐（RAG）→ 坐席实时辅助。',
      '统筹 30+ 人跨境团队，含中国台湾分部。',
      '向 ExCo 汇报 ROI 与风险。',
    ],
    result: '意图识别准确率 78% → 95%，风险漏检率 <2%。支撑客服上线，高净值客户投诉率下降 25%。',
  },
  cathay: {
    tag: '出行助手',
    client: '有光科技 · 国泰航空',
    title: 'Fano Accobot 智能出行助手',
    situation: '2024.03–2024.05 担任模型数据项目经理，负责国泰航空智能出行助手的 SFT 数据与评测。',
    task: '主导 SFT 标注流程，建立中英双语标注规则、评测框架与质检流程。',
    action: [
      '建立中英双语标注规则、评测框架和质检流程。',
      '带领中国台湾 15 人团队。',
      '评测四项：意图准确率、工具调用成功率、对话连贯性、幻觉率，并做 AB 测试。',
    ],
    result: '自助解决率 25% → 70%，客服人力成本下降 20%+，意图识别准确率 78% → 93%。',
  },
}

export const INSIGHTS = [
  {
    tag: '01',
    tagClass: 'bg-primary-container/20 text-primary',
    meta: '基地',
    hoverBorder: 'hover:border-primary/50',
    calloutBorder: 'border-primary',
    calloutLabel: 'text-primary',
    title: '海外基地从 0 到 1',
    desc: '吉隆坡由 0 人扩至 2026 年底 120 人，香港办公室落地，迪拜站点筹建。办公室经理、交付运营、HR 三层架构，招聘、培训、SOP 自建。',
    callout: '已承接首批商业化项目并常态交付。',
  },
  {
    tag: '02',
    tagClass: 'bg-secondary-container/20 text-secondary',
    meta: '报价',
    hoverBorder: 'hover:border-secondary/50',
    calloutBorder: 'border-secondary',
    calloutLabel: 'text-secondary',
    title: '交付全链路与三种报价',
    desc: '商务承接 → 技术标 → 成本报价与试标 → 采集 / 标注 → 质检 → 验收。报价覆盖全包、包人力、计件，并做毛利核算。',
    callout: '含 Nett / Gross 有效率与单小时成本建模。',
  },
  {
    tag: '03',
    tagClass: 'bg-tertiary-container/30 text-tertiary',
    meta: '产能',
    hoverBorder: 'hover:border-tertiary/50',
    calloutBorder: 'border-tertiary',
    calloutLabel: 'text-tertiary',
    title: '规模化产能与质量',
    desc: '峰值带宽 200+ 人，经中层主管三层管理。包括 SOP 与培训体系、质检与验收口径、供应商分级与产能调配。',
    callout: 'C 客户 1,500+ 小时、验收 95%+；B 客户稳定 1,000 小时/月。',
  },
  {
    tag: '04',
    tagClass: 'bg-primary-container/20 text-primary',
    meta: '语言',
    hoverBorder: 'hover:border-primary/50',
    calloutBorder: 'border-primary',
    calloutLabel: 'text-primary',
    title: '三语跨文化交付',
    desc: '普通话、英语、粤语。对接过欧美、东南亚、中东和中国台湾客户。',
    callout: '地产副总监 → 餐饮创业 → AI 交付，三次换赛道，均在半年内跑通。',
  },
  {
    tag: '05',
    tagClass: 'bg-emerald-950/60 text-emerald-400',
    meta: '工具',
    hoverBorder: 'hover:border-emerald-500/50',
    calloutBorder: 'border-emerald-400',
    calloutLabel: 'text-emerald-400',
    title: '工具与自建平台',
    desc: '飞书多维表格与文档、Excel 成本模型，以及已投入项目使用的采集管理平台 JC Collection。',
    callout: 'JC Collection 为自建，并已投入项目使用。',
  },
]

export const CONTACT_TOPICS = [
  { value: 'hiring', label: '全职机会 / 海外交付或基地负责人' },
  { value: 'delivery', label: '海外基地筹建（东南亚等）' },
  { value: 'embodied', label: '具身采集、标注与验收合作' },
  { value: 'advisory', label: '业务交流' },
]

export const TRIALS = [
  'A：RM 编程评测 900 题、40–50 人。',
  'ALi：ego 视频具身试标 30 人。',
  'F / G / H：人形机器人、内容平台 ASR、车企世界模型，按「试标 → 报价 → 转正」推进，负责技术标与成本测算。客户名按保密要求使用代号。',
]
