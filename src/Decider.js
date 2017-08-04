class Decider {
  decide(model) {
    /*

      beach: {
        name:"Crystal Cove, Newport Beach, CA"
      },
      tide: { high: "@7:30pm", low:"@4:20am"},
      sun:{ rise:"@6:08am", set:"@7:55pm" },
      weather: {
        icon: {
          uri:"https://cdnjs.cloudflare.com/ajax/libs/fatcow-icons/20130425/FatCow_Icons32x32/weather_sun.png",
          description:"70° and sunny",
        },
        temperature:"70°"
      },
      waves: {
        description:"2-3ft waves"
      },
      crowds: {
        description:"Shouldn't be too crowded!"
      }*/
      var results = {
        go:true,
        reasons:[]
      };
      function maybe(reason) {
        if(!results.go && !reason.go) {
          results.go = false;
        } else {
          reasons.push(reason);
        }
      }
      [decideAboutTime,
        decideAboutWeather,
        decideAboutWaves,
        decideAboutCrowds]
        .forEach((decider)=>decider(model, maybe));
      return results;
  }
  yeah(reason) { return {
    go:true, reasons:[reason] }};
  decideAboutCrowds(model, callback) {
    const go = true;// is it a weekend? Holiday?
    const reason = {
      id:"crowds",
      text:go?"Shouldn't be too crowded":"It might be crowded";
    };
    callback(go, reason);
  }
}
export default Decider;
