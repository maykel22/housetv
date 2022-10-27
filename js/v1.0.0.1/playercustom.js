window.addEventListener('DOMContentLoaded', () => {
  const players = Array.from(document.querySelectorAll('.js-player')).map((p) => new Plyr(p,{
    youtube: { noCookie: true },
    i18n: {
      quality: 'Calidad',
      speed: 'Velocidad',
      captions: 'Subtítulos',
      disabled: 'Desactivar',
      enabled: 'Activar',
    },
  }));
});
