const GetPeople = () => {
  return fetch("https://www.swapi.tech/api/people", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      let newArray=[]

       for (let i = 0; i < data.results.length; i++) {
         let Url = data.results[i].url;
         let obj1 = data.results[i];
         CorrectData(Url).then((response) => {
           obj1.caracteristicas = response.result.properties;
           newArray.push(obj1);
         });
       }
      return newArray
  
    })
    .catch((err) => console.error(err));
};
const GetVehicles = () => {
  return fetch("https://www.swapi.tech/api/vehicles", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      return res.json();
    })

    .then((data) => {
      let newArray=[]

      for (let i = 0; i < data.results.length; i++) {
        let Url = data.results[i].url;
        let obj1 = data.results[i];
        CorrectData(Url).then((response) => {
          obj1.caracteristicas = response.result.properties;
          newArray.push(obj1);
        });
      }
     return newArray
    })

    .catch((err) => console.error(err));
};
const GetPlanets = () => {
  return fetch("https://www.swapi.tech/api/planets", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      return res.json();
    })

    .then((data) => {
      let newArray=[]

      for (let i = 0; i < data.results.length; i++) {
        let Url = data.results[i].url;
        let obj1 = data.results[i];
        CorrectData(Url).then((response) => {
          obj1.caracteristicas = response.result.properties;
          newArray.push(obj1);
        });
      }
      console.log(newArray)
     return newArray
    })

    .catch((err) => console.error(err));
};
const CorrectData = (insideUrl) => {
  return fetch(insideUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      return res.json();
    })

    .catch((err) => console.error(err));
};

export default { GetPeople, GetVehicles, GetPlanets, CorrectData };
