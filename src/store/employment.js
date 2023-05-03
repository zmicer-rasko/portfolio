export default {
  namespaced: true,
  getters: {
    data: state => state.data,
  },
  state: {
    data: [
      {
        title: 'Fullstack web & mobile developer',
        from: 'Mar 2021',
        to: 'Mar 2023',
        duration: '2 years 1 month',
        company: 'Digital Basis',
        img: '/companies/digital-basis.jpeg',
        link: 'https://www.digitalbasis.com',
      },
      {
        title: 'Fullstack web-developer',
        from: 'Jun 2016',
        to: 'Jun 2021',
        duration: '5 years 1 month',
        company: 'Estelogy',
        img: '/companies/estelogy.jpeg',
        link: 'https://estelogy.com',
      },
      {
        title: 'Fullstack web-developer',
        from: 'Jan 2016',
        to: 'Jun 2016',
        duration: '6 months',
        company: 'Freelance',
        img: '/companies/morty.png',
        link: 'me',
      }
    ],
  },
};
