#Kiar Fatah
#Insertion sort
import numpy as np


def is_list_sorted(arr): #A function to check if the list is sorted for testing
    for i in range(0,len(arr)-1):
        if arr[i] <= arr[i+1]:   return True #Simple, checking if the neighbouring element is greater.
            
        else:   return False #If not return false

        
def insertion(arr):

    if len(arr) == 0:    return False  #In consideration if the array is empty
            
    if isinstance(arr, list): #If the input in the function is an array run this else return False
        for i in range(0,len(arr)-1): #Looping through the array
            if arr[i] > arr[i+1]: #If the element is greater than the element to the right
                for j in range(i,-1,-1): #A loop thats loops down, note that the last element in the for loop is not bothered  
                    if arr[j+1] < arr[j]: #Below follows how to replace elements in an array
                        save_arr = arr[j+1]
                        arr[j+1] = arr[j]
                        arr[j] = save_arr

        return is_list_sorted(arr),print(arr)

    else: return False
#Test
if __name__ == "__main__":
    rand = np.random.rand(20,1)
    #random = [3,2,12,43,13,23,43,54]
    random1 = [3,2,1]
    #print(insertion(random1))
    assert insertion(rand) == True
    for i in range(2,10):
        assert insertion(np.random.rand(i,1)) == True
