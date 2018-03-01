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
    export async function getWorldChartData (campaignId ,order) {
      const url = `${baseURL}${campaignId}/country?sort=${order}`;
      return request(url, {
          method: 'GET',
      })
  }

  export async function getDeviceData (campaignId ,order) {
    const url = `${baseURL}${campaignId}/device?sort=${order}`;
    return request(url, {
        method: 'GET',
    })
}
    
export async function getInterestData (campaignId ,order,field) {
  const url = `${baseURL}${campaignId}/content?sort=${order}&field=${field}`;
  return request(url, {
      method: 'GET',
  })
}
    export async function getCount (campaignId,item,period,start,limit) {
      
      const url = `${baseURL}${campaignId}/${item}/data?agg=count&period=${period}&start=${start}&limit=${limit}`;
      return request(url, {
          method: 'GET',
      })
  }