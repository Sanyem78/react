# React

using React we can create our own HTML elements
Babel is used to convert the JSX code to JS Code
React & React DOM is used when we want to create web apps
React & React Native is used when we want to create mobile apps

Component is a JS Function which allow to create smaller piece in your website, it also allow to create our own HTML elements  

Props means Properties which is sued inside Component to make it reusable

Fragments (<></>) It groups elements together , without creating an extra <div>

useState() is used to refresh the HTML page whenever there is an update in data
it will give 2 data, 1 st is the actual data and the second is the function which is use to update the data

display: flex by default force all the elements to be horizontally , to change this we have to use flex-direction: column

useEffect() run some code after the component is created or updated
1. second argument of useEffect() is [] (Dependency Array), if its empty then code will only run once after the compnent is created
2. if its not null and some data is present in the array, so every time the code will run when the component is created and data is updated

useRef() is used to automatically save the HTML element from the component