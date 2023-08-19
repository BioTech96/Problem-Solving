function determineGender(username) {
    const charCount = username.length;
  
    if (charCount === 1) {
      return 'boy';
    } else {
      return 'girl';
    }
  }
 
  console.log(determineGender("aaa"))