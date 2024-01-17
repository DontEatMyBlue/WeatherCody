    const axios = require('axios');
    const moment = require('moment');
    
   
    let time = moment().hours()-1 + "00";
    const  url = 'http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst';
    let queryParams = '?' + encodeURIComponent('serviceKey') + '=' + process.env.API_KEY; /* Service Key*/
    queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /* */
    queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('1000'); /* */
    queryParams += '&' + encodeURIComponent('dataType') + '=' + encodeURIComponent('JSON'); /* */
    queryParams += '&' + encodeURIComponent('base_date') + '=' + encodeURIComponent(moment().format("YYYYMMDD")); /* */
    queryParams += '&' + encodeURIComponent('base_time') + '=' + encodeURIComponent(time); /* */
    queryParams += '&' + encodeURIComponent('nx') + '=' + encodeURIComponent('55'); /* */
    queryParams += '&' + encodeURIComponent('ny') + '=' + encodeURIComponent('127'); /* */

   exports.getWeather = (req,res,next)=>{
    axios.get(url+queryParams)
    .then(response=>{
        req.temp = response.data.response.body.items.item[3].obsrValue;
        next();
    })
    .catch(error=>{ console.log(error)});

}