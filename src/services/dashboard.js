import {request} from '../utils'



export async function queryWeather(params) {
  return request('http://query.yahooapis.com/v1/public/yql', {
    method: 'get',
    weather: true,
    data: params
  })
}

export async function query(params) {
  return request('/api/dashboard', {
    method: 'get',
    data: params
  })
}

const baseURL = 'http://hemalvm.westus.cloudapp.azure.com:8002/api/v1/campaign/';

export async function getTotalCount (campaignId, item) {
        const url = `${baseURL}${campaignId}/${item}?agg=count`;
        return request(url, {
            method: 'GET',
        })
    }

    export async function getCount (campaignId,item,interval) {
      const url = `${baseURL}${campaignId}/${item}?agg=count&period=${interval}`;
      return request(url, {
          method: 'GET',
      })
  }