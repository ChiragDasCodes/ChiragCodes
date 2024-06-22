// Initialize TinyMCE editor
tinymce.init({
    selector: '#post-content',
    skin: 'oxide',
    plugins: 'lists image imagetools',
    toolbar: 'bold italic underline strikethrough | alignleft aligncenter alignright | bullist numlist | image',
    setup: function (editor) {
        editor.on('change', function () {
            editor.save();
        });
    },
    height: 300
});

// Function to format text in TinyMCE editor
function formatText(command) {
    tinymce.get('post-content').execCommand(command);
}

// Function to insert image into TinyMCE editor
function insertImage() {
    const url = prompt('Enter the URL of the image:');
    if (url) {
        tinymce.get('post-content').execCommand('mceInsertContent', false, `<img src="${url}" alt="Image">`);
    }
}
