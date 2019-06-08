#Kiar Fatah
#Insertion sort
import numpy as np


def is_list_sorted(arr): #A function to check if the list is sorted for testing
    for i in range(0,len(arr)-1):
        if arr[i] <= arr[i+1]:   return True #Simple, check if the element the right is greater.
            
        else:   return False #If not return false

        
def insertion(arr):

    if len(arr) == 0:    return False  #In consideration if the array is empty
            
    for i in range(0,len(arr)-1): #Looping through the array
        if arr[i] > arr[i+1]: #If the element is greater than the element to the right
            for j in range(i,-1,-1): #A loop thats loops down, note that the last element in the for loop is not bothered  
                if arr[j+1] < arr[j]: #Below follows how to replace elements in an array
                    save_arr = arr[j+1]
                    arr[j+1] = arr[j]
                    arr[j] = save_arr

    return is_list_sorted(arr)

#Test
if __name__ == "__main__":
    #Asserting 97 random generated arrays to see if they become sorted after entering the function insertion
    for i in range(2,100): #Less is more
        assert insertion(np.random.rand(i,1)) == True
