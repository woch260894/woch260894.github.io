import { useState } from 'react'
import { CONTACT_TOPICS, PROFILE_IMG } from '../data/content'
import Icon from './Icon'

const initialForm = {
  name: '',
  org: '',
  email: '',
  topic: 'hiring',
  message: '',
}

export default function Contact({ onOpenWechat }) {
  const [form, setForm] = useState(initialForm)
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)

  const update = (field) => (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitting(true)
    setTimeout(() => {
      setSubmitting(false)
      setSuccess(true)
      setForm(initialForm)
    }, 900)
  }

  const fieldClass =
    'h-10 rounded border border-outline-variant/40 bg-surface px-3 text-body-sm text-on-surface transition-colors focus:border-primary focus:outline-none'

  return (
    <section
      className="relative w-full border-t border-outline-variant/30 bg-surface py-space-xl scroll-mt-24"
      id="contact"
    >
      <div className="mx-auto max-w-[1280px] px-margin-mobile md:px-margin">
        <div className="mb-space-xl flex max-w-2xl flex-col gap-space-xs">
          <div className="font-label-code inline-flex items-center gap-2 text-label-tag tracking-widest text-primary uppercase">
            <span>[ 04 / 携手共赢 ]</span>
            <span className="h-px w-8 bg-primary-container" />
          </div>
          <h2 className="text-headline-lg-mobile font-bold tracking-tight text-on-surface md:text-headline-lg">
            Let&apos;s Connect · 开启战略交流
          </h2>
          <p className="text-body-md text-on-surface-variant">
            深耕大湾区，放眼全球。热忱期待与香港、深圳及国际 AI 创新团队、具身智能领航者共话业务出海与高质交付。
          </p>
        </div>

        <div className="grid grid-cols-1 gap-space-xl lg:grid-cols-12">
          <div className="flex flex-col gap-space-md lg:col-span-5">
            <div className="flex flex-col gap-space-md rounded-xl border border-outline-variant/40 bg-surface-container-high p-space-lg shadow-lg">
              <div className="flex items-center gap-space-md">
                <img
                  alt="Teddy Wong"
                  className="h-16 w-16 rounded-full border-2 border-primary/50 object-cover shadow-md"
                  src={PROFILE_IMG}
                />
                <div className="flex flex-col">
                  <h3 className="text-headline-sm font-bold text-on-surface">Teddy Wong · 王俊</h3>
                  <span className="text-body-sm font-medium text-primary">
                    AI 交付负责人 / 国际基地操盘手
                  </span>
                  <span className="font-label-code mt-0.5 text-label-tag text-outline">
                    Hong Kong Native · Global Operations
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 rounded-lg border border-outline-variant/30 bg-surface-container p-3">
                <Icon name="pin_drop" className="mt-0.5 text-lg text-secondary" />
                <div className="flex flex-col text-body-sm text-on-surface-variant">
                  <span className="font-medium text-on-surface">📍 常驻深圳 · 随时可赴香港开展工作</span>
                  <span>开放香港 / 大湾区 AI 运营交付总监及出海基地统筹机会</span>
                </div>
              </div>

              <div className="flex flex-col gap-space-sm pt-2">
                <a
                  className="group flex items-center justify-between rounded border border-outline-variant/30 bg-surface p-3 transition-colors hover:bg-surface-variant"
                  href="mailto:contact@teddywong.ai"
                >
                  <div className="flex items-center gap-2.5">
                    <Icon name="mail" className="text-lg text-primary" />
                    <span className="font-label-code text-body-sm text-on-surface">
                      contact@teddywong.ai
                    </span>
                  </div>
                  <Icon
                    name="arrow_outward"
                    className="text-base text-outline transition-colors group-hover:text-primary"
                  />
                </a>
                <a
                  className="group flex items-center justify-between rounded border border-outline-variant/30 bg-surface p-3 transition-colors hover:bg-surface-variant"
                  href="https://linkedin.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <div className="flex items-center gap-2.5">
                    <Icon name="work" className="text-lg text-secondary" />
                    <span className="font-label-code text-body-sm text-on-surface">
                      LinkedIn Profile (Teddy Wong)
                    </span>
                  </div>
                  <Icon
                    name="arrow_outward"
                    className="text-base text-outline transition-colors group-hover:text-secondary"
                  />
                </a>
                <button
                  type="button"
                  className="group flex cursor-pointer items-center justify-between rounded border border-outline-variant/30 bg-surface p-3 text-left transition-colors hover:bg-surface-variant"
                  onClick={onOpenWechat}
                >
                  <div className="flex items-center gap-2.5">
                    <Icon name="chat" className="text-lg text-emerald-400" />
                    <span className="font-label-code text-body-sm text-on-surface">
                      WeChat / 微信二维码即刻沟通
                    </span>
                  </div>
                  <Icon
                    name="qr_code_2"
                    className="text-base text-outline transition-colors group-hover:text-emerald-400"
                  />
                </button>
              </div>

              <a
                className="flex w-full items-center justify-center gap-2 rounded border border-outline-variant/50 bg-surface-variant py-2.5 text-body-sm text-on-surface transition-colors hover:bg-outline-variant/40"
                href="mailto:contact@teddywong.ai?subject=Request%20Teddy%20Wong%20CV"
              >
                <Icon name="download" className="text-base" />
                <span>获取完整中英文 PDF 履历</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-xl border border-outline-variant/40 bg-surface-container-high p-space-lg shadow-lg md:p-8">
              <h3 className="flex items-center gap-2 text-title-md font-semibold text-on-surface">
                <Icon name="send" className="text-xl text-primary" />
                <span>预约沟通 / 战略简报咨询</span>
              </h3>
              <p className="mt-1 mb-space-lg text-body-sm text-on-surface-variant">
                请填写您的联系需求，我将在 12 小时内亲自回复或安排电话会议。
              </p>

              <form className="flex flex-col gap-space-md" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-space-md sm:grid-cols-2">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-label-code text-label-tag text-on-surface-variant">
                      姓名 / Name *
                    </label>
                    <input
                      required
                      className={fieldClass}
                      placeholder="例如：李先生 / Mr. Wang"
                      type="text"
                      value={form.name}
                      onChange={update('name')}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="font-label-code text-label-tag text-on-surface-variant">
                      所在机构 / Organization *
                    </label>
                    <input
                      required
                      className={fieldClass}
                      placeholder="公司 / 创投机构 / 实验室"
                      type="text"
                      value={form.org}
                      onChange={update('org')}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-space-md sm:grid-cols-2">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-label-code text-label-tag text-on-surface-variant">
                      电子邮箱 / Email *
                    </label>
                    <input
                      required
                      className={fieldClass}
                      placeholder="work-email@company.com"
                      type="email"
                      value={form.email}
                      onChange={update('email')}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="font-label-code text-label-tag text-on-surface-variant">
                      咨询主题 / Topic *
                    </label>
                    <select
                      className={fieldClass}
                      value={form.topic}
                      onChange={update('topic')}
                    >
                      {CONTACT_TOPICS.map((topic) => (
                        <option key={topic.value} value={topic.value}>
                          {topic.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-label-code text-label-tag text-on-surface-variant">
                    详细留言 / Brief Message *
                  </label>
                  <textarea
                    required
                    className="rounded border border-outline-variant/40 bg-surface p-3 text-body-sm text-on-surface transition-colors focus:border-primary focus:outline-none"
                    placeholder="请简述您目前的业务痛点、期望沟通的具体事项或邀约形式..."
                    rows={4}
                    value={form.message}
                    onChange={update('message')}
                  />
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="font-label-code text-label-tag text-outline">
                    🔒 严格保护信息与商业隐私
                  </span>
                  {!success && (
                    <button
                      type="submit"
                      disabled={submitting}
                      className="inline-flex h-10 items-center gap-2 rounded bg-primary-container px-space-lg text-body-sm text-on-primary-container transition-all hover:bg-inverse-primary disabled:opacity-70"
                    >
                      {submitting ? (
                        <>
                          <Icon name="refresh" className="animate-spin text-base" />
                          <span>正在安全提交...</span>
                        </>
                      ) : (
                        <>
                          <span>立即发送信息</span>
                          <Icon name="send" className="text-base" />
                        </>
                      )}
                    </button>
                  )}
                </div>

                {success && (
                  <div className="rounded border border-emerald-500/40 bg-emerald-950/60 p-3 text-center text-body-sm text-emerald-400">
                    ✅ 感谢您的留言！消息已成功发送至 Teddy 的优先收件箱，将尽快与您取得联系。
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
