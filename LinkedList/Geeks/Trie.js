class Node {
  constructor() {
    this.keys = new Map();
    this.end = false;
  }
  setEnd() {
    this.end = true;
  }
  isEnd() {
    return this.end;
  }
}

  class Trie {
      constructor() {
          this.root = new Node();
      }
      insert(str, node = this.root) {
        if (str.length === 0) {
          node.setEnd();
          return;
        } else if (!node.keys.has(str[0])) {
          node.keys.set(str[0], new Node());
          return this.insert(str.substr(1), node.keys.get(str[0]));
        } else {
          return this.insert(str.substr(1), node.keys.get(str[0]))
        }
      }

      fetchAllWords(node, word, finalWords) {
        if (node.isEnd()) {
          finalWords.push(word);
        }
       node.keys.forEach((item, index) => this.fetchAllWords(item, word + index, finalWords));
      }
      fetchAutoSuggestions(str) {
        let top = this.root;
        let notAvailable = false;
        let wordavailable = '';
        let finalWords = [];
        for (let p = 0; p < str.length; p++) {
          if (!top.keys.has(str[p])) {
            notAvailable = true;
            break;
          }
          wordavailable += str[p];
          top = top.keys.get(str[p]);
        }
        if (notAvailable) return finalWords;
        this.fetchAllWords(top, wordavailable, finalWords);
        return finalWords;
      }
      wordExist(word) {
        let top = this.root;
        let available = true;
        for (let p = 0; p < word.length; p++) {
          if (!top.keys.has(word[p])) {
            available = false;
            break;
          }
          top = top.keys.get(word[p]);
        }
        return top && top.isEnd() && available;
      }
  }

  const trie = new Trie();

  trie.insert('ris');
  trie.insert('rishu');
  trie.insert('richa');
  trie.insert('ria');
  trie.insert('rahul');
  trie.insert('jain');
  console.log(trie.fetchAutoSuggestions('ri'));
  console.log(trie.wordExist('jain'))
  console.log(trie.wordExist('anchit'))