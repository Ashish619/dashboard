const Ajax = require('robe-ajax')

export default function request(url, options) {
  if (options.weather) {
    return Ajax.getJSON(url, {
      q: "select * from weather.forecast where woeid in (select woeid from geo.places(1) w" +
          "here text='(" + options.data.cityData.coords.latitude + ',' + options.data.cityData.coords.longitude + ")') and u='c'",
      format: 'json'
    })
  } else if (options.cross) {
    return Ajax.getJSON(url, {
      q: Ajax.param(options.data),
      format: 'json'
    })
  } else {
    return Ajax.ajax({
      url: url,
      method: options.method || 'get',
      data: options.data || {},
      processData: options.method === 'get',
      dataType: 'JSON'
    }).done((data) => {
      // console.log(data);
      return data
    })
  }
}
