const getTimeDifference = () => {
  let lastLogin = parseInt(localStorage.getItem("lastLogin") || 0);
  let currentTime = Date.now();

  return (currentTime - lastLogin) / (1000 * 60 * 60);
};

export default getTimeDifference;
