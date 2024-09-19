// utils.js

// Function to get the full name of the day
export const getDayName = () => {
  const options = { weekday: 'long' };
  return new Date().toLocaleDateString('en-US', options);
};

// Function to convert UNIX timestamp to 12-hour format (00:00am/pm)
export const convertUnixToTime = (unixTime) => {
  const date = new Date(unixTime * 1000);
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  const strMinutes = minutes < 10 ? '0' + minutes : minutes;
  const formattedTime = `${hours}:${strMinutes} ${ampm}`;
  return formattedTime;
};

// Function to update time every second
export const updateTime = (setCurrentTime) => {
  setInterval(() => {
    const now = new Date();
    setCurrentTime(convertUnixToTime(now.getTime() / 1000));
  }, 1000);
};
