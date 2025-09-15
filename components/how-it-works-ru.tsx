import React from 'react';
import NumberCircle from './number-circle';

const HowItWorksRu = () => {
  const steps = [
    {
      number: '01',
      title: 'Запишитесь на подходящий курс',
      description: 'Выберите из нашего списка курсов и соответствующих ценовых уровней.'
    },
    {
      number: '02',
      title: 'Станьте студентом SkillPeak Academy',
      description: 'Получите доступ к нашим учебным материалам, ресурсам и поддержке. Изучайте в своем собственном темпе с круглосуточным доступом к вашим материалам.'
    },
    {
      number: '03',
      title: 'Начните обучение с экспертными уроками',
      description: 'Погрузитесь в интерактивные видео-уроки и реальные кейсы, преподаваемые опытными профессионалами в области бухгалтерии.'
    },
    {
      number: '04',
      title: 'Выполняйте тесты и задания',
      description: 'Применяйте то, что вы изучили на курсе, к тестам и заданиям, чтобы проверить свои знания и укрепить уверенность.'
    },
    {
      number: '05',
      title: 'Получите свой сертификат',
      description: 'После успешного завершения курса получите сертификат, который доказывает ваши навыки и приверженность совершенству.'
    },
    {
      number: '06',
      title: 'Запустите свою карьеру',
      description: 'Выпускайтесь с чем-то большим, чем просто сертификат — у вас будет практический опыт, практические навыки и знания программного обеспечения, которые можно продемонстрировать в вашем резюме. Независимо от того, подаете ли вы заявку на свою первую работу, меняете карьеру или начинаете свой собственный бизнес по ведению бухгалтерии, наша команда поддержки карьеры поможет вам создать выдающееся резюме, построить ваш профиль LinkedIn и подготовиться к собеседованиям. Плюс, вы получите внутренние советы о том, где найти возможности для работы и как получить их с уверенностью.'
    }
  ];

  return (
    <div className="relative pb-10" data-aos="zoom-y-out" data-aos-delay="100">
      <div className="mx-auto max-w-5xl px-4 pb-8 text-center">
        <h2 className="py-2 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1] md:text-6xl">
          Как это работает
        </h2>
        <p className="text-lg text-gray-600">
          Откройте для себя наш упрощенный процесс, который обеспечивает исключительные результаты на каждом этапе
        </p>
      </div>

      <div className="mx-auto w-full max-w-5xl px-4 md:px-6">
        <div className="space-y-8">
          {steps.map((step) => (
            <div key={step.number} className="flex gap-8 items-start">
              <NumberCircle number={step.number} size={32} className="flex-shrink-0" />
              <div className="flex-1">
                <p className="font-semibold text-sky-900">{step.title}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorksRu;
