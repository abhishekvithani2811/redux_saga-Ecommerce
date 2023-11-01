const test = () => {
  return new Promise((res, rej)=>{
    res(asyncTest().then((result) => {
      return result
    }).catch((err) => {
      return res
    }))
  })
}




const asyncTest = async () => {
  return "ABC"
  
}

 console.log(await test());