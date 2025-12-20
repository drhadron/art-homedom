import Image from "next/image";

const team = [
  {
    name: "Аслан Кабардоков",
    role: "Директор компании",
    desc: "Автор проектов и инициатив, 20 лет в строительстве, художественное образование.",
    image: "/Image/image copy 22.png",
  },
  {
    name: "Коготыжев Андемир",
    role: "Коммерческий директор, маркетолог",
    desc: "Опыт финансового учёта и 5+ лет в маркетинге, креативный продюсер компании.",
    image: "/Image/image copy 3.png",
  },
  {
    name: "Темиркан Нальчиков",
    role: "Дизайнер",
    desc: "Многолетний опыт, выпускник школы дизайна, пунктуальный и творческий.",
    image: "/Image/image copy 20.png",
  },
  {
    name: "Жантемир Керефов",
    role: "Архитектор",
    desc: "Глубокое знание систем и сложных структур, высшее архитектурное образование.",
    image: "/Image/image copy 21.png",
  },
  {
    name: "Борис",
    role: "Дизайнер",
    desc: "Работает с деталями и материалами, нацелен на реализацию без сюрпризов.",
    image: "/Image/image copy 11.png",
  },
  {
    name: "Алим Мисиров",
    role: "Видеограф, продюсер",
    desc: "Снимает и продюсирует проекты, лучшие кадры проектов — его рук дело.",
    image: "/Image/image copy 14.png",
  },
  {
    name: "Беслан",
    role: "Дизайнер",
    desc: "Создаёт концепты и визуализации, держит план по срокам и качеству.",
    image: "/Image/image copy 24.png",
  },
  {
    name: "Камбулат",
    role: "Чертежник",
    desc: "Рабочая документация, узлы и спецификации — без лишних вопросов для подрядчиков.",
    image: "/Image/image copy 13.png",
  },
  {
    name: "Долов Асланбек",
    role: "Архитектор",
    desc: "Планировки, конструктив и инженерия, учитывает риски до стройки.",
    image: "/Image/telegram-peer-photo-size-2-3128430994629175256-1-0-0.jpg",
  },
  {
    name: "Амина",
    role: "Менеджер по работе с клиентами",
    desc: "Первой выходит на связь, напоминает о встречах, держит коммуникацию в порядке.",
    image: "/Image/image copy 2.png",
  },
  {
    name: "Умар",
    role: "PR-менеджер",
    desc: "Рекламные кампании, интервью и медиаповоды — его зона ответственности.",
    image: "/Image/telegram-peer-photo-size-2-5285282537536162830-1-0-0.jpg",
  },
  {
    name: "Андрей Ярцев",
    role: "Руководитель ИТ-отдела",
    desc: "Сайты, системы управления проектами, автоматизация продаж, интеграции с ИИ.",
    image: "/Image/image copy 23.png",
  },
  {
    name: "Султанов Марсель",
    role: "Менеджер проектов",
    desc: "Пунктуальный и требовательный: следит за регламентами и сроками.",
    image: "/Image/image copy 4.png",
  },
  {
    name: "Ильдус Акрамович",
    role: "Отдел автоматизации бизнеса",
    desc: "10+ лет внедрения систем, 30+ лет управления командами, обучает дисциплине и навыкам.",
    image: "/Image/image copy 6.png",
  },
  {
    name: "Залина Дохова",
    role: "Бухгалтер",
    desc: "Управляет учётом и финансовыми потоками, держит бюджет проектов под контролем.",
    image: "/Image/image copy 3.png",
  },
];

export default function TeamPage() {
  return (
    <div className="bg-[var(--bg)] text-[var(--text)]">
      <section className="relative overflow-hidden bg-[var(--bg)] py-12 md:py-20">
        <div className="pointer-events-none absolute -left-40 -top-32 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,106,0,0.12),transparent_60%)] blur-3xl" />
        <div className="pointer-events-none absolute right-[-10%] bottom-0 h-96 w-96 rounded-full bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.12),transparent_60%)] blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-4 md:px-6">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--orange)]" aria-hidden />
              Команда
            </div>
            <h1 className="text-4xl font-semibold tracking-tight text-white md:text-5xl md:leading-[1.05]">
              Art HomeDom — люди, которые доводят проекты до реализации
            </h1>
            <p className="max-w-3xl text-base leading-relaxed text-white/75 md:text-lg">
              Архитекторы, дизайнеры, продюсеры и менеджеры, которые считают риски заранее,
              контролируют стройку и отвечают за результат.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full overflow-hidden bg-[var(--bg)] pb-12 md:pb-20">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <div
                key={member.name}
                className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[var(--surface)] text-white shadow-[0_20px_60px_-50px_rgba(0,0,0,0.7)]"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 320px, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/10" />
                </div>
                <div className="flex flex-1 flex-col justify-between px-4 py-4">
                  <div className="space-y-1.5">
                    <h3 className="text-lg font-semibold">{member.name}</h3>
                    <p className="text-sm font-medium text-white/80">{member.role}</p>
                    <p className="text-sm leading-relaxed text-white/70">{member.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
