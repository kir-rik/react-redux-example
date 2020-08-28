export default () =>
  new Promise((resolve, reject) => {
    setTimeout(
      () =>
        resolve({
          userName: 'Кирилл',
          location: 'Тольятти',
          age: '30',
          picUrl:
            'https://avatars3.githubusercontent.com/u/28257627?s=460&u=37dd79847a5b17eb502c5ba6caeffe1d5edad02a&v=4',
        }),
      1000
    );
  });
