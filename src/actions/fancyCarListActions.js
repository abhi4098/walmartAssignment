import {
  FANCY_CAR_LIST,
  SHOW_ORDER_DELIVER_LOADING,
  

} from './actionTypes';


export const showFancyCarLoading = (value) => {

  return (dispatch) => {
    dispatch({
      type: SHOW_ORDER_DELIVER_LOADING,
      payload: value
    });
  }
};

export const fancyCarListData = () => {

  return (dispatch) => {
    dispatch({
      type: FANCY_CAR_LIST,
      payload: [{
        id: 1,
        make: 'Porsche',
        model: '911',
        name: "Porsche 911",
        img: 'http://www.pngall.com/wp-content/uploads/2016/04/Porsche-Transparent.png',
        year: 2017
      }, {

        id: 2,
        make: 'Lamborghini',
        model: 'Aventador',
        name: "Lamborghini Aventador",
        img: 'http://www.pngall.com/wp-content/uploads/2016/05/Lamborghini-PNG-File.png',
        year: 2018
      }, {
        id: 3,
        make: 'BMW',
        model: 'M3',
        name: "BMW M3",
        img: 'http://www.pngall.com/wp-content/uploads/2016/04/BMW-PNG-Image.png',
        year: 2019
      },
      {
        id: 4,
        make: 'Dodge',
        model: 'SE',
        name: "Dodge Challenger",
        img: 'http://www.pngmart.com/files/3/Challenger-PNG-File.png',
        year: 1972
      }, {

        id: 5,
        make: 'Ford',
        model: 'Boss 302',
        name: "Mustang boss",
        img: 'http://www.pngmart.com/files/10/Ford-Mustang-PNG-Transparent-Image.png',
        year: 1970
      }, {
        id: 6,
        make: 'Audi',
        model: '100 ls',
        name: "Audi 100 ls",
        img: 'http://www.pngmart.com/files/10/Audi-PNG-Photos.png',
        year: 1971
      },
      {
        id: 7,
        make: 'Toyota',
        model: 'Mark ii',
        name: "Toyota corona ",
        img: 'http://www.pngall.com/wp-content/uploads/2016/04/Toyota-Car-PNG-Picture.png',
        year: 1970
      }]
    });
  }
};






