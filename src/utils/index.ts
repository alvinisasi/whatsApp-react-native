export const capitalizeFirstLetter = (str: string) => {
  return str && str.length ? str.charAt(0).toUpperCase() + str.slice(1) : str;
};

export const generateRandomNumber = (min: number, max: number) => {
  return Math.floor(min + Math.random() * (max + 1 - min));
};

export const timestampToHHSS = (timestamp: number): string => {
  const date = new Date(timestamp);
  const hours = String(date.getHours()).padStart(2, '0'); // Get hours and pad with leading zeros if needed
  const minutes = String(date.getMinutes()).padStart(2, '0'); // Get minutes and pad with leading zeros if needed
  return `${hours}:${minutes}`;
}

export const timestampToMMDDYYYY = (timestamp: number): string => {
  const date = new Date(timestamp);
  const month = date.getUTCMonth() + 1;
  const day = date.getUTCDate();
  const year = date.getUTCFullYear();
  
  const mm = month < 10 ? `0${month}` : `${month}`;
  const dd = day < 10 ? `0${day}` : `${day}`;
  
  return `${mm}/${dd}/${year}`;
}

export const generateMessageDate = (timestamp: number): string => {
  const date = new Date()
  const todayTimestamp = timestampToMMDDYYYY(date.getTime())
  const messageTimestamp = timestampToMMDDYYYY(timestamp)

  if(todayTimestamp === messageTimestamp){
    return timestampToHHSS(timestamp)
  } else {
    return timestampToMMDDYYYY(timestamp)
  }
}

export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) {
    return text;
  }

  return text.slice(0, maxLength - 3) + '...';
}