const Key = process.env.KEY;

const citys = (city) =>
  `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&&appid=${Key}`;

const icons = (icon) => `http://openweathermap.org/img/w/${icon}.png`;

const htmls = (name, main, pressure, wind, clouds, sys) =>
  `Sizning shahringiz 🏢 <b>${name}</b>:
Temperature: 🌡 <b>${main.temp} °C </b>
Bosim: 🪁 <b>${main.pressure} hPa</b>
Namlik: 💦 <b>${main.humidity} %</b>
Shomol kuchi: 💨 <b>${wind.speed} meter/sec</b>
Bulutlar: ☁️ <b>${clouds.all} %</b>
Yurtingiz: 🌍 <b>${sys.country}</b>
`;

module.exports = { citys, icons, htmls };
