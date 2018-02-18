import getMuiTheme from 'material-ui/styles/getMuiTheme';

const ThemeDark = getMuiTheme({
  palette: {
    primary1Color: '#00bcd4',
    primary2Color: '#0097a7',
    primary3Color: '#bdbdbd',
    accent1Color: '#ff4081',
    accent2Color: '#f5f5f5',
    accent3Color: '#9e9e9e',
    textColor: 'rgba(0, 0, 0, 0.87)',
    secondaryTextColor: 'rgba(0, 0, 0, 0.54)',
    alternateTextColor: '#ffffff',
    canvasColor: '#ffffff',
    borderColor: '#e0e0e0',
    disabledColor: 'rgba(0, 0, 0, 0.3)',
    pickerHeaderColor: '#00bcd4',
    clockCircleColor: 'rgba(0, 0, 0, 0.07)',
    shadowColor: 'rgba(0, 0, 0, 1)',
  },
  appBar: {
    height: 50,
  },
  drawer: {
    width: 230,
    left: 150,
  },

});

export default ThemeDark;
