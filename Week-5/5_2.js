function isCharVowel(char) {
    return "aeiou".includes(char);
  }
  
  function vowelCount(str) {
    const stringMap = new Map([
      ["a", 0],
      ["i", 0],
      ["o", 0],
      ["u", 0],
      ["e", 0],
    ]);
    for (alphabet of str) {
      if (isCharVowel(alphabet.toLowerCase())) {
        if (stringMap.has(alphabet.toLowerCase())) {
            stringMap.set(
            alphabet.toLowerCase(),
            stringMap.get(alphabet.toLowerCase()) + 1
          );
        } else {
            stringMap.set(alphabet.toLowerCase(), 1);
        }
      }
    }
    return {
      a: stringMap.get("a"),
      e: stringMap.get("e"),
      i: stringMap.get("i"),
      o: stringMap.get("o"),
      u: stringMap.get("u")
    };
  }
  
  const { a, e, i, o, u } = vowelCount("Shubham");
  console.log({ totalCount: a + e + i + o + u , a, e, i, o, u});