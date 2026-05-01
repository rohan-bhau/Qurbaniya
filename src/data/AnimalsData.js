export const getAnimals = async () => {
  const res = await fetch("https://qurbaniya-server.onrender.com/animals");
  return res.json();
};
