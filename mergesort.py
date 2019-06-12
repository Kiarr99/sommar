#Merge sort
#Kiar Fatah
import numpy as np


#help_func is needed to call is_list_sorted
def help_func(arr):
    return is_list_sorted(mergesort(arr))
    


#Check if the list is sorted for testing
def is_list_sorted(arr):
    for i in range(0,len(arr)):
        if arr[i] > arr [i]:
            return False
        else:
            return True


def mergesort(arr): #Calls itself to divide the array in to size one

    if len(arr) == 1:
        return arr
    
    arr1 = arr[:len(arr)//2] #First half of arr
    arr2 = arr[len(arr)//2:] #Second half of arr
    
    array_one = mergesort(arr1)
    array_two = mergesort(arr2)

    #print("gang" + str(arr1) + str(arr2))

    return merge(array_one,array_two)


def merge(arr1,arr2): #Merging the arr
    arr_merge = []

    while len(arr1) and len(arr2) != 0:
        if arr1[0] > arr2[0]:
            arr_merge.append(arr2[0])
            arr2.remove(arr2[0])
        else:
            arr_merge.append(arr1[0])
            arr1.remove(arr1[0])

    #Either arr1 is empty or arr2 is empty

    while len(arr1) != 0:
        arr_merge.append(arr1[0])
        arr1.remove(arr1[0])
    while len(arr2) != 0:
        arr_merge.append(arr2[0])
        arr2.remove(arr2[0])

    return arr_merge

#Test
if __name__ == "__main__":
    #assert help_func(1) == False
    #assert help_func([]) == False
    assert help_func([3,2,1,4,5,6]) == True
    assert help_func([9,100,32,43,546,10,2,3]) == True
    assert help_func([2392,43092,239103,3242]) == True
    assert help_func([1,2,3,4]) == True


    assert help_func([-1,-1,2,1]) == True
    assert help_func([-1,-1,-22,1]) == True
    assert help_func([-23242,-424232,-431,-1,-343,23,43023,349034]) == True
