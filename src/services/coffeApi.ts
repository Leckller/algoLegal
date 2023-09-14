export const coffeApi = async () => {
  const data = await fetch('https://quokka.pics/api/');

  return data
}