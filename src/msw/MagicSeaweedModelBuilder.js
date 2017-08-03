class MagicSeaweedModelBuilder {
  extractModel(from) {
    if(!from || from.length === 0) return {};
    const msw = Object.assign({}, {
      swell:{},
      condition:{}
    },
    from[0])
    return {
      waves:{
        description:this.formatWaves(msw.swell.minBreakingHeight, msw.swell.maxBreakingHeight, msw.swell.unit)
      },
      weather: this.formatWeather(msw.condition)
    };
  }
  formatWaves(min, max, unit) {
    if(min===null||max===null||unit===null) {
      return null;
    }
    return `${min}-${max}${unit} waves`;
  }
  formatWeather(condition) {
    if(condition===null||
      condition.temperature===undefined||
      condition.weather===undefined) return null;
    return {
      icon: {
        uri:`http://cdnimages.magicseaweed.com/30x30/${condition.weather}.png`,
      },
      temperature:`${condition.temperature}°`
    };
  }
}
export default MagicSeaweedModelBuilder;
