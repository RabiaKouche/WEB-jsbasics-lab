/**
 * Return true if it's even, and false if it isn't.
 *
 * @param {Number} i
 */
export const isNumberEven = i => {
  return i % 2 === 0;
};

/**
 * `str` is a string, but it may not have a file extension.
 * Return the file extension (with no period) if it has one, otherwise false
 * @param {String} str
 */
export const getFileExtension = str => {
  if (str.split('.').pop() === str){ return false;}
  return str.split('.').pop();
};

/**
 * `arr`is a string.
 * Return the longest string in the array
 *
 * @param {String} arr
 */
export const longestString = arr => {  
  var taille = 0;
  var emp = 0;
  
  for(var i = 0; i< arr.length; i++){
    if(arr[i].length > taille){
      if (typeof arr[i] === 'string'){
        taille = arr[i].length;
        emp = i;
      }
    }

  }
    return arr[emp];
  
};

/**
 * `str` is an string.
 * Return a new string who's characters are in the opposite order to str's.
 * @param {String} str
 */
export const reverseString = str => {
 
  var splitString = str.split(""); 
  var reverseArray = splitString.reverse();
  var joinArray = reverseArray.join(""); 
  

  return joinArray; 
};

/**
 * `str` is a string.
 * Return true if it is a palindrome and false otherwise.
 * It should be case insensitive and not consider space or punctuation.
 *
 * @param {String} str
 */
export const isPalindrome = str => {
  var re = /[^A-Za-z0-9]/g;
  str = str.toLowerCase().replace(re, '');
  var len = str.length;
  for (var i = 0; i < len/2; i++) {
    if (str[i] !== str[len - 1 - i]) {
        return false;
    }
  }
  return true;
};

/**
 * `arr` will be an array containing integers, strings and/or arrays like itself.
 * Return the sum all the numbers you find, anywhere in the nest of arrays.
 */
export const nestedSum = arr => {
  
 
    return arr.reduce(function(accumulator, currentValue) {
      if (typeof currentValue === "number") {
        return accumulator + currentValue;
      } else if (currentValue instanceof Array) {
        return accumulator + nestedSum(currentValue);
      } else {
        return accumulator;
      }
    }, 0);
  
 
  


};

/**
 * Retire du tableau `tab` pass?? en param??tre les ??l??ments pass??s en
 * param??tres dans `elms`.
 *
 * On utilise la destructuration pour pouvoir utiliser tous les arguments
 * apr??s `tab` comme un tableau.
 *
 * Apr??s l'ex??cution le tableau d'origine est r??ellement modifi??, ce
 * on ne retourne pas une copie.
 *
 * Exemple :
 * let tab = ['a', 'b', 'c', 'b', 'c'];
 * pull(tab, 'a', 'b');
 * tab; // ['c']
 *
 * @param {Array} tab
 * @param  {objects} elms
 */
export const retireDe = (tab, ...elms) => {
  
  for(var i = 0; i< tab.length; i++){
    for(var j =0; j< elms.length; j++){
      if(tab[i] === elms[j]){
        var identique = tab[i];
        for(var k = 0; k< tab.length; k++){
          if(identique === tab[k]){
            tab.splice(k, 1);
          }
        }
      }
    }

  }
  return tab;
};

/**
 * Aplatit en profondeur un tableau pass?? en param??tre.
 *
 * Indications :
 * - Utiliser la r??cursion.
 * - Utiliser `Array.prototype.concat()` avec un tableau vide ([]) et l'op??rateur de d??structuration (...) pour aplatir  un tableau.
 *
 * Exemple :
 * aplatirRecursif([5, [4], [[3], 2], [1], 0]);
 * // [5, 4, 3, 2, 1, 0]
 */
export const aplatirRecursif = tab => {
  var ret = [];
  for(var i = 0; i < tab.length; i++) {
      if(Array.isArray(tab[i])) {
          ret = ret.concat(aplatirRecursif(tab[i]));
      } else {
          ret.push(tab[i]);
      }
  }
  return ret;
};

/**
 * Retourne la liste de toutes les permutations des objets du tableau pass?? en param??tre.
 *
 * Exemple :
 * permutations([0,1,2]);
 * // [ [ 0, 1, 2 ],
 * //   [ 0, 2, 1 ],
 * //   [ 1, 0, 2 ],
 * //   [ 1, 2, 0 ],
 * //   [ 2, 0, 1 ],
 * //   [ 2, 1, 0 ] ]
 *
 * @param {Array} tab
 */
export const permutations = tab => {
  if (tab.length <= 2) {
    return tab.length === 2 ? [tab, [tab[1], tab[0]]] : tab;
  }
  return tab.reduce(
    (acc, item, i) =>
      acc.concat(
        permutations([...tab.slice(0, i), ...tab.slice(i + 1)]).map(val => [
          item,
          ...val,
        ])
      ),
    []
  );
};

/**
 * Retourne un ??l??ment au hazard parmi les ??l??ments du tableau `tab` pass?? en
 * param??tre.
 *
 * @param {Array} tab
 */
export const echantillon = tab => tab[Math.floor(Math.random() * tab.length)];

/**
 * Prend un tableau 'tab' et le transforme en string avec chaque ??l??ment s??par?? par le `separateur`.
 * Les deux derniers ??l??ments sont s??par?? pas le s??parateur `fin`.
 *
 * Exemple:
 * enumerer(['Riri', 'Fifi', 'Loulou'], ', ', ' et ');
 * // 'Riri, Fifi et Loulou'
 *
 *
 * @param {Array} tab
 * @param {string} separateur
 * @param {string} fin
 */
export const enumerer = (tab, separateur = ', ', fin = separateur) => {

    if(tab.length === 0){
      return '';
    }else if(tab.length === 1){
      return tab.join();
    }else if(tab.length === 2){
      return tab.join(` ${fin} `);
    }else{
      var val = tab[tab.length-1];
      tab.pop();
      return (`${tab.join(', ')} ${fin} ${val}`);
    }
    };

/**
 * Retourne, sous forme d'un tableau, les `n` plus grand nombres du tableau `tab` pass?? en param??tre.
 *
 * Attention, on ne doit pas modifier le tableau d'origine.
 *
 * Utiliser `Array.prototype.sort()`, l'op??rateur de destructuration (...) et `Array.prototype.slice()`
 */

export const nMax = (tab, n = 1) => {
  let tab1 = [...tab].sort() ;// le destructuring pour ne pas modifier 'tab'
  let copie=[];

  for (var i = 0; i< n; i++){

  
      if(typeof tab1[tab1.length-1-i] === 'number'){
        if(n<=tab1.length) {
          copie[i] = tab1[tab1.length-1-i];
        }else{
          copie = tab1;
          }
          
       
      } 

  
}
  return copie;

};
