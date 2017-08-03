import MagicSeaweedModelBuilder from './MagicSeaweedModelBuilder'

describe('extractModel', () => {
  it('should match a comprehensive object when given good data', () => {
    const mswFull = mswSample();
    const msw = mswFull[0];
    const output = new MagicSeaweedModelBuilder()
      .extractModel(mswFull);
    expect(output).toMatchObject({
      waves:{
        description:`${msw.swell.minBreakingHeight}-${msw.swell.maxBreakingHeight}${msw.swell.unit} waves`
      },
      weather: {
        icon: {
          uri:`http://cdnimages.magicseaweed.com/30x30/${msw.condition.weather}.png`,
        },
        temperature:`${msw.condition.temperature}°`
      }
    });
  });
  it('should be an empty object when given a null', ()=>{
    const output = new MagicSeaweedModelBuilder()
      .extractModel(null);
    expect(output).toMatchObject({});
  })
  it('should be an empty object when given an empty array', ()=>{
    const output = new MagicSeaweedModelBuilder()
      .extractModel([]);
    expect(output).toMatchObject({});
  });
  it('should not throw exception when given object missing expected props', ()=>{
    const output = new MagicSeaweedModelBuilder()
      .extractModel([{

      }]);
    expect(output).toMatchObject({});
  })
});
describe('formatWaves', () => {
  function formatWaves(min, max, unit) {
    return new MagicSeaweedModelBuilder().formatWaves(min, max, unit);
  }
  it('should return "2-3ft waves" when given min 2 and max 3 and unit "ft"', () => {
    expect(formatWaves(2,3,"ft")).toEqual("2-3ft waves");
  });
  
  it('should return null when min is null', () => {
    expect(formatWaves(null,3,"ft")).toBeNull()
  });
  it('should return null when max is null', () => {
    expect(formatWaves(2,null,"ft")).toBeNull()
    
  });
  it('should return null when unit is null', () => {
    expect(formatWaves(2,3,null)).toBeNull()
  });
});

describe('formatWeather', () => {
  function formatWeather(condition) {
    return new MagicSeaweedModelBuilder()
      .formatWeather(condition);
  }
  it('matches comprehensive expectation when given good data', () => {
    const msw = mswSample()[0];
    const output = formatWeather(msw.condition);
    expect(output).toMatchObject({
      icon: {
        uri:`http://cdnimages.magicseaweed.com/30x30/${msw.condition.weather}.png`,
      },
      temperature:`${msw.condition.temperature}°`
    });
  });
  
  it('should return null when passed null', () => {
    expect(formatWeather(null)).toBeNull();
  });
  it('should return null when temperature is undefined', () => {
    expect(formatWeather({weather:16})).toBeNull();
  });
  it('should return null when weather is undefined', () => {
    expect(formatWeather({temperature:70})).toBeNull();
  });
  
});
function mswSample() {
  return [
    {
      timestamp: 1366902000,
      localTimestamp: 1366902000,
      issueTimestamp: 1366848000,
      fadedRating: 0,
      solidRating: 0,
      swell: {
        minBreakingHeight: 1,
        absMinBreakingHeight: 1.06,
        maxBreakingHeight: 2,
        absMaxBreakingHeight: 1.66,
        unit: "ft",
        components: {
          combined: {
            height: 1.1,
            period: 14,
            direction: 93.25,
            compassDirection: "W"
          },
          primary: {
            height: 1,
            period: 7,
            direction: 83.37,
            compassDirection: "W"
          },
          secondary: {
            height: 0.4,
            period: 9,
            direction: 92.32,
            compassDirection: "W"
          },
          tertiary: {
            height: 0.3,
            period: 13,
            direction: 94.47,
            compassDirection: "W"
          }
        }
      },
      wind: {
        speed: 10,
        direction: 85,
        compassDirection: "W",
        chill: 15,
        gusts: 13,
        unit: "mph"
      },
      condition: {
        pressure: 1020,
        temperature: 18,
        unitPressure: "mb",
        unit: "c",
        weather: 16
      },
      charts: {
        swell: "http://cdn.magicseaweed.com/wave/750/1-1366902000-1.gif",
        period: "http://cdn.magicseaweed.com/wave/750/1-1366902000-2.gif",
        wind: "http://cdn.magicseaweed.com/gfs/750/1-1366902000-4.gif",
        pressure: "http://cdn.magicseaweed.com/gfs/750/1-1366902000-3.gif",
        sst: "http://cdn.magicseaweed.com/sst/750/1-1366902000-10.gif"
      }
    }
  ];
}