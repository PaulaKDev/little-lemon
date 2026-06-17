const seededRandom = function (seed) {
  var m = 2 ** 35 - 31;
  var a = 185852;
  var s = seed % m;
  return function () {
    return (s = s * a % m) / m;
  };
};

const normalizeDate = (date) => {
  if (date instanceof Date && !Number.isNaN(date.getTime())) {
    return date;
  }

  const parsedDate = new Date(date);
  return Number.isNaN(parsedDate.getTime()) ? new Date() : parsedDate;
};

const fetchAPI = function (date) {
  const selectedDate = normalizeDate(date);
  let result = [];
  let random = seededRandom(selectedDate.getDate());

  for (let i = 17; i <= 23; i++) {
    if (random() < 0.5) {
      result.push(`${i}:00`);
    }
    if (random() < 0.5) {
      result.push(`${i}:30`);
    }
  }

  return result;
};

const submitAPI = function (formData) {
  return Boolean(formData && formData.date && formData.time && formData.guests && formData.occasion);
};

export { fetchAPI, submitAPI };