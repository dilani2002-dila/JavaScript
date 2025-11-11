function getFileExtension() {
    let fileName = '2025-11-13-Hello my world 2025';
    let extension = fileName.split('.').pop();
    console.log('File extension:', extension);
}

getFileExtension();
