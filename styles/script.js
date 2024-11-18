function hideSections() {
    document.querySelectorAll('section').forEach(section => {
        section.style.display = 'none';
    });
}

function showSection(id) {
    const element = document.getElementById(id);
    if (element) {
        element.style.display = 'block';
    }
}
  
const navLinks = document.querySelectorAll("#menu nav a");

navLinks.forEach(link =>{
    link.addEventListener('click', event => {
        event.preventDefault();

        const targetId = link.getAttribute("href").substring(1);

        hideSections();
        showSection(targetId);
    });
});