openExplain = () => {
    element = document.getElementById('content');
    element.style.display = 'block';
}

closeExplain = () => {
    element = document.getElementById('content');
    element.style.display='none';
}

doOver = (element) => {
    document.getElementById('imageHover').innerHTML = element.alt;
}

doOut = () => {
    document.getElementById('imageHover').innerHTML = 'Hover over an image below to diplay here..'
}