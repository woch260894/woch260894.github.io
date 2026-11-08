import { useState } from 'react'
import { useLocale } from '../i18n/LanguageContext'
import Icon from './Icon'

const initialForm = {
  name: '',
  org: '',
  email: '',
  topic: 'hiring',
  message: '',
}

export default function Contact() {
  const { copy, email, phone, phoneHref, jcUrl, profile } = useLocale()
  const { ui } = copy
  const [form, setForm] = useState(initialForm)

  const update = (field) => (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const topic = copy.topics.find((item) => item.value === form.topic)?.label ?? form.topic
    const body = [
      `${ui.mailName}：${form.name}`,
      `${ui.mailOrg}：${form.org}`,
      `${ui.mailEmail}：${form.email}`,
      `${ui.mailTopic}：${topic}`,
      '',
      form.message,
    ].join('\n')
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(`${ui.mailSubject} / ${form.name}`)}&body=${encodeURIComponent(body)}`
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
            <span>{ui.contactKicker}</span>
            <span className="h-px w-8 bg-primary-container" />
          </div>
          <h2 className="text-headline-lg-mobile font-bold tracking-tight text-on-surface md:text-headline-lg">
            {ui.contactTitle}
          </h2>
          <p className="text-body-md text-on-surface-variant">{ui.contactLead}</p>
        </div>

        <div className="grid grid-cols-1 gap-space-xl lg:grid-cols-12">
          <div className="flex flex-col gap-space-md lg:col-span-5">
            <div className="flex flex-col gap-space-md rounded-xl border border-outline-variant/40 bg-surface-container-high p-space-lg shadow-lg">
              <div className="flex items-center gap-space-md">
                <img
                  alt={ui.portraitAlt}
                  className="h-16 w-16 rounded-full border-2 border-primary/50 object-cover object-center shadow-md"
                  src={profile}
                />
                <div className="flex flex-col">
                  <h3 className="text-headline-sm font-bold text-on-surface">{ui.brandName}</h3>
                  <span className="text-body-sm font-medium text-primary">{ui.contactRole}</span>
                  <span className="font-label-code mt-0.5 text-label-tag text-outline">{ui.contactMeta}</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 rounded-lg border border-outline-variant/30 bg-surface-container p-3">
                <Icon name="pin_drop" className="mt-0.5 text-lg text-secondary" />
                <div className="flex flex-col text-body-sm text-on-surface-variant">
                  <span className="font-medium text-on-surface">{ui.locationTitle}</span>
                  <span>{ui.locationSub}</span>
                </div>
              </div>

              <div className="flex flex-col gap-space-sm pt-2">
                <a
                  className="group flex items-center justify-between rounded border border-outline-variant/30 bg-surface p-3 transition-colors hover:bg-surface-variant"
                  href={`mailto:${email}`}
                >
                  <div className="flex items-center gap-2.5">
                    <Icon name="mail" className="text-lg text-primary" />
                    <span className="font-label-code text-body-sm text-on-surface">{email}</span>
                  </div>
                  <Icon
                    name="arrow_outward"
                    className="text-base text-outline transition-colors group-hover:text-primary"
                  />
                </a>
                <a
                  className="group flex items-center justify-between rounded border border-outline-variant/30 bg-surface p-3 transition-colors hover:bg-surface-variant"
                  href={phoneHref}
                >
                  <div className="flex items-center gap-2.5">
                    <Icon name="call" className="text-lg text-secondary" />
                    <span className="font-label-code text-body-sm text-on-surface">{phone}</span>
                  </div>
                  <Icon
                    name="arrow_outward"
                    className="text-base text-outline transition-colors group-hover:text-secondary"
                  />
                </a>
                <a
                  className="group flex items-center justify-between rounded border border-outline-variant/30 bg-surface p-3 transition-colors hover:bg-surface-variant"
                  href={jcUrl}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <div className="flex items-center gap-2.5">
                    <Icon name="dataset" className="text-lg text-emerald-400" />
                    <span className="font-label-code text-body-sm text-on-surface">
                      {ui.jcLabel}
                    </span>
                  </div>
                  <Icon
                    name="arrow_outward"
                    className="text-base text-outline transition-colors group-hover:text-emerald-400"
                  />
                </a>
              </div>

              <a
                className="flex w-full items-center justify-center gap-2 rounded border border-outline-variant/50 bg-surface-variant py-2.5 text-body-sm text-on-surface transition-colors hover:bg-outline-variant/40"
                href={`mailto:${email}?subject=${encodeURIComponent(ui.pdfSubject)}`}
              >
                <Icon name="mail" className="text-base" />
                <span>{ui.pdfLabel}</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-xl border border-outline-variant/40 bg-surface-container-high p-space-lg shadow-lg md:p-8">
              <h3 className="flex items-center gap-2 text-title-md font-semibold text-on-surface">
                <Icon name="send" className="text-xl text-primary" />
                <span>{ui.formTitle}</span>
              </h3>
              <p className="mt-1 mb-space-lg text-body-sm text-on-surface-variant">
                {ui.formLead} {email}.
              </p>

              <form className="flex flex-col gap-space-md" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-space-md sm:grid-cols-2">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-label-code text-label-tag text-on-surface-variant">
                      {ui.fieldName}
                    </label>
                    <input
                      required
                      className={fieldClass}
                      placeholder={ui.fieldNamePh}
                      type="text"
                      value={form.name}
                      onChange={update('name')}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="font-label-code text-label-tag text-on-surface-variant">
                      {ui.fieldOrg}
                    </label>
                    <input
                      required
                      className={fieldClass}
                      placeholder={ui.fieldOrgPh}
                      type="text"
                      value={form.org}
                      onChange={update('org')}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-space-md sm:grid-cols-2">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-label-code text-label-tag text-on-surface-variant">
                      {ui.fieldEmail}
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
                      {ui.fieldTopic}
                    </label>
                    <select
                      className={fieldClass}
                      value={form.topic}
                      onChange={update('topic')}
                    >
                      {copy.topics.map((topic) => (
                        <option key={topic.value} value={topic.value}>
                          {topic.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-label-code text-label-tag text-on-surface-variant">
                    {ui.fieldMessage}
                  </label>
                  <textarea
                    required
                    className="rounded border border-outline-variant/40 bg-surface p-3 text-body-sm text-on-surface transition-colors focus:border-primary focus:outline-none"
                    placeholder={ui.fieldMessagePh}
                    rows={4}
                    value={form.message}
                    onChange={update('message')}
                  />
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="font-label-code text-label-tag text-outline">
                    {ui.privacy}
                  </span>
                  <button
                    type="submit"
                    className="inline-flex h-10 items-center gap-2 rounded bg-primary-container px-space-lg text-body-sm text-on-primary-container transition-all hover:bg-inverse-primary"
                  >
                    <span>{ui.send}</span>
                    <Icon name="send" className="text-base" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
