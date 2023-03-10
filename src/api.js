// Base URL
const BASE_URL = "https://api.rawg.io/api/"
const apiKey = `${process.env.REACT_APP_RAWG_API}`

// Getting the date

const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

const getCurrentDay = () => {
  const day = new Date().getDate() + 1;
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};
// Current day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
//const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

// Popular Games
const popularGames = `games?key=${apiKey}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`

export const popularGamesURL = () => `${BASE_URL}${popularGames}`;
