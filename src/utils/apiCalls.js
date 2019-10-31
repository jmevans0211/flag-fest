export const fetchData = async(url)  => {
  const response = await fetch(url)
  if(response.ok) {
    const data  = await response.json()
    console.log('in apiCalss', data)
    return data;
  } else {
    throw Error(response.statusText)
  }
}