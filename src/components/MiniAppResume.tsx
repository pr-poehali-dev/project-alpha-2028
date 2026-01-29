export function MiniAppResume() {
  return (
    <div className="max-w-3xl">
      <h2 className="text-4xl font-black mb-6 border-b-[3px] border-black pb-2">Резюме</h2>

      <div className="space-y-6">
        <div className="bg-white p-6 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <h3 className="text-2xl font-black mb-4">Опыт</h3>

          <div className="space-y-4">
            <div className="border-l-[4px] border-[#FF2E63] pl-4">
              <h4 className="text-xl font-bold">Ведущий инженер</h4>
              <p className="text-gray-600 font-medium">TechSystems - 2022 - настоящее время</p>
              <p className="mt-2">
                Руковожу разработкой сложных технических систем, оптимизирую производственные процессы и внедряю инновационные решения.
              </p>
            </div>

            <div className="border-l-[4px] border-[#FF2E63] pl-4">
              <h4 className="text-xl font-bold">Инженер-проектировщик</h4>
              <p className="text-gray-600 font-medium">Industrial Solutions - 2020 - 2022</p>
              <p className="mt-2">
                Разрабатывал технические решения от концепции до реализации, работал с CAD-системами и автоматизацией.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <h3 className="text-2xl font-black mb-4">Проекты</h3>

          <div className="grid gap-4">
            <div className="p-4 bg-gray-50 border-[2px] border-black">
              <h4 className="text-lg font-bold">Система автоматизации производства</h4>
              <p className="text-sm text-gray-600 mb-2">Python, PLC, IoT sensors</p>
              <p>Разработка системы мониторинга и управления производственными линиями с повышением эффективности на 40%.</p>
            </div>

            <div className="p-4 bg-gray-50 border-[2px] border-black">
              <h4 className="text-lg font-bold">Оптимизация теплообменников</h4>
              <p className="text-sm text-gray-600 mb-2">CAD, CFD analysis, MATLAB</p>
              <p>Редизайн системы охлаждения с улучшением эффективности теплообмена и снижением энергопотребления.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}