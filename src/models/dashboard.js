import {myCity, queryWeather, query} from '../services/dashboard'
import {parse} from 'qs'

let WeatherFunc = {
    ParseActualData: function (actual, air) {
        let weather = {
            icon: './assets/weather/' + WeatherFunc.ReplaceIcon(actual.channel.item.forecast[0].code) + "_big.png",
            name: actual.channel.item.forecast[0].text ,//WeatherFunc.GetWeatherName(actual.wea),
            temperature: actual.channel.item.forecast[0].high,
            dateTime: actual.channel.item.forecast[0].date
        }
        return weather
    },


    ReplaceIcon: function (num) {
        num=parseInt(num)
        if (num === 21) {
            num = 18
        } else if (num === 22) {
            num = 18
        } else if (num === 10 || num === 11 || num === 12 || num === 23 || num === 24 || num === 25) {
            num =20
        } else if (num === 13 || num === 15 || num === 26 || num === 27 || num === 34) {
            num = 14
        } else if (num === 17 || num === 28) {
            num = 16
        } else if (num === 35) {
            num = 18
        } else if (num === 31 || num === 32 || num === 33) {
            num = 20
        } else if (num === 30) {
            num = 29
        }

        return num
    }

}

function getCurrentPosition() {
    return new Promise((resolve, reject) => navigator.geolocation.getCurrentPosition(resolve, reject));
}

export default {
    namespace : 'dashboard',
    state : {
        weather: {
            city: 'Melborne',
            temperature: '5',
            name: 'Clear',
            icon: './assets/weather/0_big.png',
            dateTime: new Date().format('MM-dd hh:mm')
        },
        sales: [],
        quote: {
            avatar: './assets/people/3.jpg'
        },
        numbers: [],
        numbers_2: [],
        numbers_3: [],
        recentSales: [],
        recentSales_2: [],
        recentSales_3: [],
        comments: [],
        completed: [],
        browser: [],
        cpu: {},
        user: {
            avatar: './assets/people/4.jpg'
        }
    },
    subscriptions : {
        setup({dispatch}) {
            dispatch({type: 'queryWeather'})
            dispatch({type: 'query'})
        }
    },
    effects : {
        *query({payload}, {call, put}) {
            const data = yield call(query, parse(payload))
            yield put({type: 'queryWeather', payload: {...data}
            })
        },
        *queryWeather({payload}, {call, put}) {
          try{
                var position = yield call(getCurrentPosition); // get geo information lat,long
                const result = yield call(queryWeather,{cityData:position})
                const data = result.query.results
                const weather = WeatherFunc.ParseActualData(data)
                weather.city = data.channel.location.city
                 yield put({type: 'queryWeatherSuccess', payload: {weather}})
            }catch(e){
                console.log("Error weather update")
           }
               
                    
        }
    },
    reducers : {
        queryWeatherSuccess(state, action) {
            return {
                ...state,
                ...action.payload
            }
        },
        queryWeather(state, action) {
            return {
                ...state,
                ...action.payload
            }
        }
    }
}