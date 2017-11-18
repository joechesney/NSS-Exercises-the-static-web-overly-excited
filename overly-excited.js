var sickArray = ["Here", "are", "some", "words", "and", "some", "more", "words", "right", "here", "so", "this", "is", "a", "nice", "long", "array", "of", "words", "to", "output", "to", "make", "a", "hilariously", "long","console", "to", "test", "this", "goofy", "JavaScript", "function", "and", "also", "hell", "yeah", "I", "love", "this", "class", "and", "Javascript"];

var sentence = ["The", "walrus", "danced", "through", "the", "trees", "by", "the", "light", "of", "the", "moon"];

function addExcitement (someArray) {
    var someWords = ""; // variable to concat a long string
    var counter = 0; // counter for how many words the full string has
    var threesCount = 0; // counter for the 'every third' logic
    for (var i = 0; i < someArray.length; i++) {
        someWords += " " + someArray[i]; // adds a space between each word
        counter++; 
        if (counter%3 === 0) { // an if statement for the 'every third' logic
            threesCount++;
            for(var t = 0; t < threesCount; t++) { // a 'for' loop to add more exclamation points
            someWords += "!";
            }
        }
        console.log(someWords); // prints the current concatenation to the console 
    }
}

addExcitement(sentence); // calls the dank function