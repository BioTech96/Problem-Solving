/*Given an array a of positive integers your task is to 
find the leader in the array an element of array is leader
 if it is greater than or equal to all the elements to its right side.
  The right most element is always a leader?
  */

const searchLeaders = (arr) => {
    const n = arr.length;
    let maxRight = arr[n - 1];
    const leaders = [maxRight];
  
    for (let i = n - 2; i >= 0; i--) {
      if (arr[i] >= maxRight) {
        maxRight = arr[i];
        leaders.push(maxRight);
      }
    }
  
    return leaders.reverse();
  }
  
//   The inputs:
  const arr = [16, 17, 4, 3, 5, 2];
  const leaders = searchLeaders(arr);


//   Display on the html page
  document.getElementById('display').innerHTML = leaders;

//   Display on the console
  console.log("Leaders:", leaders);
  