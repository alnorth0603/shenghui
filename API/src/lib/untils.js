/*
 * @Author:  alnorth.wang 
 * @Date:  2017-09-06 18:04:30 
 * @Last Modified by: alnorth.wang
 * @Last Modified time: 2017-09-06 19:01:44
 * @Explain:  工具类
 */
export let HandleData =(status,data)=>{
  return new Promise((resolve, reject)=>{
    let result ={};
    result.success = status;
    if(status){
      result.data = data;
    }else{
      result.data = data;
    }
  })
}