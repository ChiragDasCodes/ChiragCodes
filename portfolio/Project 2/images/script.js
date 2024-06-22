document.addEventListener('DOMContentLoaded', function() {
    tinymce.init({
        selector: '#post-content',
        plugins: 'advlist autolink link image lists charmap print preview',
        toolbar: 'undo redo | styleselect | bold italic | alignleft aligncenter alignright | bullist numlist outdent indent | link image',
        height: 300,
        menubar: false
    });

    const toggleKeyboardBtn = document.getElementById('toggle-keyboard-btn');
    const virtualKeyboard = document.getElementById('virtual-keyboard');

    toggleKeyboardBtn.addEventListener('click', () => {
        virtualKeyboard.classList.toggle('d-none');
    });

    const postForm = document.getElementById('post-form');
    postForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const title = document.getElementById('post-title').value;
        const content = tinymce.get('post-content').getContent();
        addPost(title, content);
    });
});

function formatText(command) {
    tinymce.activeEditor.execCommand(command);
}

function insertImage() {
    const url = prompt('Enter the image URL');
    if (url) {
        tinymce.activeEditor.execCommand('mceInsertContent', false, `<img src="${url}" />`);
    }
}

function addPost(title, content) {
    const postsContainer = document.querySelector('.posts');
    const postElement = document.createElement('div');
    postElement.classList.add('col-lg-4', 'mb-4');
    postElement.innerHTML = `
        <div class="card h-100 animate__animated animate__fadeInUp">
            <div class="card-body">
                <h5 class="card-title">${title}</h5>
                <div class="card-text">${content}</div>
            </div>
        </div>`;
    postsContainer.appendChild(postElement);
}

function virtualKeyPress(key) {
    const editor = tinymce.activeEditor;
    editor.focus();
    editor.execCommand('mceInsertContent', false, key);
}
