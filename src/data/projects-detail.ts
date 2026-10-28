export const detail = {
  es: [
    { slug: 'panel-infracciones', year: '2026', eyebrow: 'Control de flota · Panel web', tagline: 'Del dato de infracción a la decisión.',
      body: 'Panel de control que reúne las infracciones de conducción y descanso y el cumplimiento de las descargas de tacógrafo de toda la flota. Analiza tendencias y evolución mes a mes, mide la reincidencia de cada conductor y señala los riesgos antes de que se conviertan en sanciones. Incluye indicadores de compliance, comparativas entre periodos, un análisis individual por conductor y un control de los avisos enviados a cada delegación, para revisar la situación de la flota sin abrir cada listado.',
      note: 'Todas las vistas usan las mismas cifras: lo que ves en un indicador se puede comprobar en el detalle de infracciones.' },
    { slug: 'cruce-descargas', year: '2026', eyebrow: 'Cumplimiento · Descargas', tagline: 'Que las fechas cuadren en las dos fuentes.',
      body: 'Cruza las descargas de tacógrafo de VDO y de Webfleet, por conductor y por vehículo, para comprobar si coinciden las últimas fechas. Así se detectan las descargas pendientes o las diferencias entre fuentes antes de que se conviertan en incumplimiento.',
      note: 'Las descargas remotas de Webfleet se transfieren a VDO, por eso el cruce usa las dos fuentes y el plazo se recalcula cada día.' },
    { slug: 'seguimiento-descargas', year: '2026', eyebrow: 'Seguimiento · Conductores', tagline: 'Cada conductor, con su última descarga a la vista.',
      body: 'Controla la fecha de la última descarga de cada conductor y prepara avisos individuales para quien esté fuera de plazo. Todo en una sola vista, sin buscar fila a fila en las hojas de cálculo.',
      note: 'Cada conductor tiene su plazo legal de descarga: se marca en ámbar cuando quedan 7 días o menos y en rojo cuando está vencido.' },
  ],
  en: [
    { slug: 'panel-infracciones', year: '2026', eyebrow: 'Fleet control · Web dashboard', tagline: 'From infringement data to decisions.',
      body: 'A control dashboard that brings together driving and rest-time infringements and tachograph download compliance across the whole fleet. It analyses trends and monthly evolution, measures each driver’s repeat infringements and flags risks before they turn into penalties. It includes compliance indicators, period comparisons, an individual analysis per driver and a log of the notices sent to each delegation, so the fleet status can be reviewed without opening every listing.',
      note: 'Every view uses the same figures: anything you see in an indicator can be checked in the infringement detail.' },
    { slug: 'cruce-descargas', year: '2026', eyebrow: 'Compliance · Downloads', tagline: 'Making sure the dates match across both sources.',
      body: 'Cross-checks tachograph downloads from VDO and Webfleet, by driver and by vehicle, to confirm whether the latest dates match. Pending downloads and differences between sources show up before they turn into non-compliance.',
      note: 'Remote Webfleet downloads are transferred to VDO, so the cross-check uses both sources and the deadline is recalculated every day.' },
    { slug: 'seguimiento-descargas', year: '2026', eyebrow: 'Tracking · Drivers', tagline: 'Every driver’s last download, in view.',
      body: 'Tracks the date of each driver’s last download and prepares individual notices for anyone out of time. Everything in one view, without searching spreadsheet rows one by one.',
      note: 'Each driver has a legal download deadline: it turns amber when 7 days or fewer remain and red when it has expired.' },
  ],
};
