let dictionary = [];
    function addWord() {
        let word = document.getElementById('word').value;
        let newWord = { word: word };
        dictionary.push(newWord);
    }
    function searchWord() {
        let search = document.getElementById('search').value;
        let result = dictionary.find(item => item.word === search);
        if (result) {
            document.getElementById('checkWord').innerText = 'The word "' + result.word + '" was found!';
        } else {
            document.getElementById('checkWord').innerText = 'The word was not found in the dictionary';
        }
    }