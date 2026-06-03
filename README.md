# DevTinder

-create a Vite+react application  
-remove unnecessary code and create a hello world app  
-Install Tailwind CSS  
-Install Daisy UI  
-Add NavBar component to App.jsx  
-Create NavBar.jsx separate component file  
-Install react router dom  
-Create BrowserRouter >Routes>Route=/Body>RouteChildren  
-Create an outlet in your body component  
-Create a footer  
-create a login page  
-install axios  
-Cors-install cors in backend =>add middleware to with configurations:origin,credentials:true  
-Whenever you are making API call so pass axios => {withCredentials:true}  
-install react-redux + @reduxjs/toolkit - https://redux-toolkit.js.org/tutorials/quick-start  
-configureStore => Provider=> createSlice => add reducer to store        
-add redux dev tools in chrome  
-login and see if your  data is coming properly in the store  
-Navbar should update as soon as the user logs in  
-refactor our code to to add constants file + create a components folder  
-you should not be able to access other routes without login  
-If token is not present,redirect user to login page  
-logout feature  
-Get the feed and add the feed in the store  
-build the user card on feed  
-edit profile feature  
-show toast message on save of profile  
-New page-see all my connections  
-New page-see all my connection requests  
-Feature-Accept/Reject Connection Request  

Remaining:  
-Send/ignore the user card from feed  
-Signup new user  
-E2ETesting  


Body  
    NavBar  
    Route=/ =>Feed  
    Route=/login=>Login  
    Route=/connections=>Connections  
    Route=/profile=>Profile  
