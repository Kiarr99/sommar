import numpy as np
import matplotlib.pyplot as plt
#Kiar Fatah
#Applying Eulers method on y = 1/y^2 with initial value y(0) = 1

def euler(h):
    y = 1 #Initial value
    N = int(1/h)
    matrix_eu = [0]*(N) #Creating a size 1x(N+1) array to fill in values
    for i in range(1,N+1): #The intervall is dependent on the for loop
        y = y + h*(1/(y**2)) #Eulers method
        matrix_eu[i-1] = y #filling in values
    return matrix_eu #returning the approximation of y(1)

def trapezoid(h):
    y = 1 # Initial value
    N = int(1/h)
    matrix_t = [0]*(N)
    for i in range(1,N+1):
        y = y + (h/2)*(1/(y**2)+1/(y+h/y**2)**2) #Apprixomation given by the trapezoid method
        matrix_t[i-1] = y
    return matrix_t

def exact(h):
    N = int(1/h) 
    x = np.linspace(0+h,1,N) #Creates a vector with a space of N intervalls up to 1
    y = (3*x+1)**(1/3) #The exact solution given by seperation of variables
    return y

if __name__ == "__main__":
    h = 0.2
    N = int(1/h) #int to convert from float to int
    x = np.linspace(0,1,N) #Creating a 1x(N+1) vector
    plt.scatter(x,euler(h),c='r', label = 'Eulers method') 
    plt.scatter(x, trapezoid(h),c='b', label = 'Trapezoids method')
    plt.scatter(x,exact(h), c= 'y', label = 'Exact solution')
    plt.xlabel('x') #labelling x axis
    plt.ylabel('y') #labelling y axis
    plt.legend() #Needed to show the labels
    plt.show() #Needed to show plot
    
