fetch(`http://localhost:4000/`).then((data)=>{
    return data.json()
}).then((response)=>{
    console.log(response)
    var i=1;
    let data=``;
    let crypto=``;
    response.map((item)=>{
      crypto+=`
      <form>
       <select id="cars" name="cars">
       <option value="${item.base_unit}">${item.base_unit.toUpperCase()}</option>
       </select>
      </form>
      `
      document.getElementById("Crypto").innerHTML=crypto;
      data+=`
      <div style="display: flex;">
        <div >${i++}</div>
        <div>${item.name}</div>
        <div>&#8377 ${item.last}</div>
        <div>&#8377 ${item.buy}/&#8377 ${item.sell}</div>
        <div>${item.volume}</div>
        <div >${item.base_unit}</div>
      </div>
        `
    })
    document.getElementById("hmm").innerHTML=data;
}).catch((error)=>{
    console.log(error)
})