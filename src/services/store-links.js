export async function getSavedLinks (key) {
  const myLinks = await localStorage.getItem(key)

  let saveLinks = JSON.parse(myLinks) || [];

  return saveLinks;
}

export async function saveLink (key, newLink) {
  let storedLinks = await getSavedLinks(key);

  const hasLink = storedLinks.some( link => link.id === newLink.id )
  if (hasLink) {
    console.log ('ESTE LINK JÁ EXISTE NA SUA LISTA')
    return;
  }

  storedLinks.push (newLink)
  await localStorage.setItem(key, JSON.stringify(storedLinks))
  console.log('LINK SALVO COM SUCESSO');
}

export function deleteLink (links, id) {
  let myLinks = links.filter(item => {
    return (item.id !== id)
  })

  localStorage.setItem('@encurtaLink', JSON.stringify(myLinks))
  
  return myLinks;

}