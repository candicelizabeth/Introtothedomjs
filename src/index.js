

const outerNode = document.getElementById('outer-node');

const header = outerNode.getElementsByTagName('h1')[0];

const container = document.getElementById('container');

const pTag = container.children[0];

// let image = document.createElement('img')
// image.src = memes[1]
// container.append(image)

memes.forEach((meme) => {
    container.innerHTML += `<img src="${meme}" />`
    })