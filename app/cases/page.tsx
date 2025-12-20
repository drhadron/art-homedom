import Image from "next/image";

const caseSections = [
  {
    id: "design-kvartiry",
    title: "Дизайн проект — квартира",
    cases: [
      {
        title: "Квартира 120 м²",
        service: "Дизайн проект квартиры",
        timeline: "Срок: 6 недель",
        team: "Команда: дизайнер, чертежник, снабжение",
        status: "Ремонт в процессе",
        result: "Планировки, визуализации, рабочие чертежи; комплектация согласована, идёт авторский надзор.",
        image: "/Image/image copy 18.png",
      },
    ],
  },
  {
    id: "design-doma",
    title: "Дизайн проект — дом",
    cases: [
      {
        title: "Частный дом 280 м²",
        service: "Дизайн проект дома",
        timeline: "Срок: 10 недель",
        team: "Команда: архитектор, дизайнер, инженер",
        status: "Ремонт реализован",
        result: "Интерьер и экстерьер с узлами инженерии; сдан в стройку без переделок.",
        image: "/Image/image copy 11.png",
      },
    ],
  },
  {
    id: "design-commerce",
    title: "Дизайн проект — коммерция",
    cases: [
      {
        title: "Ресторан 450 м²",
        service: "Дизайн коммерческой недвижимости",
        timeline: "Срок: 8 недель",
        team: "Команда: дизайнер, маркетолог, инженер",
        status: "Ремонт реализован",
        result: "Зонирование потоков, визуализации, ведомости и чертежи; открытие без штрафов.",
        image: "/Image/image copy 2.png",
      },
    ],
  },
  {
    id: "design-exteriyer",
    title: "Дизайн проект — экстерьер",
    cases: [
      {
        title: "Фасады офисного центра",
        service: "Дизайн экстерьера",
        timeline: "Срок: 5 недель",
        team: "Команда: архитектор, светотехник",
        status: "Монтаж в процессе",
        result: "Узлы фасада, свет, навигация; согласовано с подрядчиком, идёт сборка.",
        image: "/Image/image copy 16.png",
      },
    ],
  },
  {
    id: "design-spa",
    title: "Дизайн проект — SPA",
    cases: [
      {
        title: "SPA-зона частного дома",
        service: "Дизайн SPA / wellness",
        timeline: "Срок: 7 недель",
        team: "Команда: дизайнер, инженер ОВ, водоподготовка",
        status: "Ремонт реализован",
        result: "Проработаны узлы гидроизоляции, вентиляции и оборудования; смонтировано без протечек.",
        image: "/Image/image copy 14.png",
      },
    ],
  },
  {
    id: "architecture-doma",
    title: "Архитектурный проект — дом",
    cases: [
      {
        title: "Дом с плоской кровлей",
        service: "Архитектура дома",
        timeline: "Срок: 12 недель",
        team: "Команда: архитектор, конструктор, инженер",
        status: "Строится",
        result: "Планировки, фасады, конструктив, инженерия; стройка идёт по проекту.",
        image: "/Image/image copy 16.png",
      },
    ],
  },
  {
    id: "architecture-commerce",
    title: "Архитектурный проект — коммерция",
    cases: [
      {
        title: "Торговые площади",
        service: "Архитектура коммерческих объектов",
        timeline: "Срок: 9 недель",
        team: "Команда: архитектор, инженер, нормоконтроль",
        status: "Проектирование завершено",
        result: "Зонирование, конструктив, узлы инженерии и фасадов; готово к монтажу.",
        image: "/Image/image copy 2.png",
      },
    ],
  },
  {
    id: "architecture-fasad",
    title: "Архитектурный проект — фасад",
    cases: [
      {
        title: "Входные группы ТЦ",
        service: "Фасады и входные группы",
        timeline: "Срок: 6 недель",
        team: "Команда: архитектор, светотехник",
        status: "Монтаж в процессе",
        result: "Узлы, свет, навигация; подрядчик собирает по проекту.",
        image: "/Image/image copy 14.png",
      },
    ],
  },
  {
    id: "landscape-doma",
    title: "Ландшафт — двор частного дома",
    cases: [
      {
        title: "Участок 12 соток",
        service: "Ландшафт двора",
        timeline: "Срок: 5 недель",
        team: "Команда: ландшафтник, инженер, свет",
        status: "Реализация завершена",
        result: "Дорожки, свет, дренаж, озеленение; сделано без копки «по второму кругу».",
        image: "/Image/image copy 19.png",
      },
    ],
  },
  {
    id: "landscape-mnogokvartir",
    title: "Ландшафт — многоквартирный дом",
    cases: [
      {
        title: "Двор ЖК",
        service: "Ландшафт многоквартирного дома",
        timeline: "Срок: 6 недель",
        team: "Команда: ландшафтник, инженер, свет",
        status: "Ремонт в процессе",
        result: "Навигация, детские и спортивные зоны, свет и покрытие — в работе по проекту.",
        image: "/Image/image copy 4.png",
      },
    ],
  },
  {
    id: "landscape-commerce",
    title: "Ландшафт — коммерция",
    cases: [
      {
        title: "Входная группа бизнес-центра",
        service: "Ландшафт коммерческих объектов",
        timeline: "Срок: 4 недели",
        team: "Команда: ландшафтник, свет, навигация",
        status: "Реализация завершена",
        result: "Паркинг, навигация, освещение и озеленение — сдано без штрафов и задержек.",
        image: "/Image/image copy 2.png",
      },
    ],
  },
  {
    id: "landscape-park",
    title: "Ландшафт — парки и водоёмы",
    cases: [
      {
        title: "Парк с водоёмом",
        service: "Парки и водоёмы",
        timeline: "Срок: 8 недель",
        team: "Команда: ландшафтник, дендролог, инженер",
        status: "Проектирование завершено",
        result: "Маршруты, озеленение, водный сценарий, свет и дренаж — готовы к реализации.",
        image: "/Image/image copy 5.png",
      },
    ],
  },
  {
    id: "plan-commerce",
    title: "Чертежи — коммерция",
    cases: [
      {
        title: "Офисное здание",
        service: "Чертежи коммерческих зданий",
        timeline: "Срок: 3 недели",
        team: "Команда: инженер, чертежник",
        status: "Проектирование завершено",
        result: "Инженерные узлы, спецификации и ведомости — передано подрядчику.",
        image: "/Image/image copy 13.png",
      },
    ],
  },
  {
    id: "plan-kvartiry",
    title: "Чертежи — квартира",
    cases: [
      {
        title: "Квартира 80 м²",
        service: "Чертежи квартир",
        timeline: "Срок: 2 недели",
        team: "Команда: чертежник, инженер",
        status: "Ремонт в процессе",
        result: "Электрика, сантехника, узлы и раскладки — подрядчик работает по проекту.",
        image: "/Image/image copy 18.png",
      },
    ],
  },
  {
    id: "plan-doma",
    title: "Чертежи — дом",
    cases: [
      {
        title: "Дом 240 м²",
        service: "Чертежи домов",
        timeline: "Срок: 4 недели",
        team: "Команда: инженер, чертежник",
        status: "Строится",
        result: "Инженерия, узлы, раскладки и спецификации — стройка идёт по листам.",
        image: "/Image/image copy 11.png",
      },
    ],
  },
  {
    id: "plan-territorii",
    title: "Чертежи — территории",
    cases: [
      {
        title: "Благоустройство территории",
        service: "Чертежи территорий",
        timeline: "Срок: 3 недели",
        team: "Команда: инженер, ландшафтник",
        status: "Проектирование завершено",
        result: "Дренаж, свет, покрытие и малые формы — готово к строительству.",
        image: "/Image/image copy 19.png",
      },
    ],
  },
];

export default function CasesPage() {
  return (
    <div className="bg-[var(--bg)] text-[var(--text)]">
      <section className="relative overflow-hidden bg-[var(--bg)] py-12 md:py-20">
        <div className="pointer-events-none absolute -left-40 -top-32 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,106,0,0.12),transparent_60%)] blur-3xl" />
        <div className="pointer-events-none absolute right-[-10%] bottom-0 h-96 w-96 rounded-full bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.12),transparent_60%)] blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-4 md:px-6 space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--orange)]" aria-hidden />
            Кейсы по услугам
          </div>
          <h1 className="text-4xl font-semibold tracking-tight text-white md:text-5xl md:leading-[1.05]">
            Реализованные и текущие проекты
          </h1>
          <p className="max-w-3xl text-base leading-relaxed text-white/75 md:text-lg">
            Показываем, как дизайн, архитектура, ландшафт и чертежи доходят до стройки: сроки, команды и
            статус реализации.
          </p>
        </div>
      </section>

      {caseSections.map((section) => (
        <section
          key={section.id}
          id={section.id}
          className="w-full overflow-hidden bg-[var(--bg)] py-10 md:py-16"
        >
          <div className="mx-auto max-w-6xl px-4 md:px-6 space-y-4">
            <h2 className="text-2xl font-semibold text-white md:text-3xl">{section.title}</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {section.cases.map((item) => (
                <div
                  key={item.title}
                  className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[var(--surface)] text-white"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 320px, 100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/10" />
                  </div>
                  <div className="flex flex-1 flex-col justify-between px-4 py-4">
                    <div className="space-y-1.5">
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      <p className="text-sm text-white/80">{item.service}</p>
                      <p className="text-sm text-white/70">{item.timeline}</p>
                      <p className="text-sm text-white/70">{item.team}</p>
                      <p className="text-sm text-white/70">Статус: {item.status}</p>
                      <p className="text-sm leading-relaxed text-white/75">{item.result}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
