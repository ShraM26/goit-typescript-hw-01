async function fetchData<T>(url: string): Promise<T> {
  try {
   
    const mockResponse = {
      data: {
       
        name: 'John Doe',
        age: 30
      }
    };

   
    return mockResponse.data as T;
  } catch (error) {
    throw new Error(`Error fetching from ${url}: ${error}`);
  }
}


fetchData<{ name: string; age: number }>('mock-url')
  .then(data => {
    console.log(data.name); 
    console.log(data.age);
  })
  .catch(error => {
    console.error(error);
  });


fetchData<{ id: number; title: string }>('mock-url')
  .then(data => {
    console.log(data.id); 
    console.log(data.title);
  })
  .catch(error => {
    console.error(error);
  });