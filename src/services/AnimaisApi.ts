export const ApiDog = async () => {
  const response = await fetch('https://random.dog/woof.json');
  const data = await response.json()
  return data.url;
}

export const Apifox =async () => {
  const response = await fetch('https://random-d.uk/api/random')
  const data = await response.json()
  return data.url;
}

export const ApiDuck =async () => {
  const response = await fetch('https://randomfox.ca/floof/')
  const data = await response.json()
  return data.image;
}