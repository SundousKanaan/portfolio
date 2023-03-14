const API_URL= "https://api.github.com/users/SundousKanaan/repos";
async function fetchData(API_URL) {
    try{
      const response1 = await fetch(API_URL);
      const data1 = await response1.json();
      
    //   return data1;
      console.log(data1);
    } 
    catch (error) {
      console.error('Error fetching data:', error);
    }
}

fetchData(API_URL) ;