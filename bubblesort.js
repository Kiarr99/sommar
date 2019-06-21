function bubblesort(array) {
    var i;
    var j;
    for (j = (array.length-1); j > 0; j = j-1){
      
      for (i = 0; i <= j; i = i+1){
      
      if (array[i] > array[i+1]) {
        const value_next = array[i+1];
        array[i+1] = array[i];
        array[i] = value_next;
      
        
      }
      
      
    }
    
    }
    return array;
    
  
  }
  
  
  console.log(bubblesort([5,1,4,2,8,9]));
  console.log(bubblesort([3,2,1]));
  console.log(bubblesort([-1,-2,3,4,5,-5, 100]))
  