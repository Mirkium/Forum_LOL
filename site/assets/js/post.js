const submit = document.getElementById('post');
const title = document.getElementById('titre').textContent;
const content = document.getElementById('comment').textContent;

submit.addEventListener('click', async () => {
    await fetch('localhost:8080')
})