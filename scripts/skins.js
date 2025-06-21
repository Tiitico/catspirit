function changeskin() {

    const selectedCatHTML = cats
    .filter(cat => cat.id === catskin)
    .map(cat => `<img src="${cat.image}" class ="skin">`)
    
    divskins.innerHTML = selectedCatHTML;

    const selectedname = cats
    .filter(cat => cat.id === catskin)
    .map(cat => cat.name);
console.log(selectedname)

    namemenu.innerHTML = selectedname

    const selecttext = cats
    .filter(cat => cat.id === catskin)
    .map(cat => cat.description)

    desctext.innerHTML = selecttext
    
}
changeskin();

