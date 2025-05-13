
const divskins = document.querySelector('#divskins');
const catname = document.querySelector('#name')
const desctext = document.querySelector('#desctext')
const catclass = document.querySelector('#catclass')

function changeskin() {

    const selectedCatHTML = cats
    .filter(cat => cat.id === catskin)
    .map(cat => `<img src="${cat.image}" class ="skin">`)
    
    divskins.innerHTML = selectedCatHTML;

    const selectedname = cats
    .filter(cat => cat.id === catskin)
    .map(cat => cat.name);
console.log(selectedname)

    catname.innerHTML = selectedname

    const selecttext = cats
    .filter(cat => cat.id === catskin)
    .map(cat => cat.description)

    desctext.innerHTML = selecttext
    
}
changeskin();

