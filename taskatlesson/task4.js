const URL = "https://67fe475358f18d7209ed7ab7.mockapi.io/workers/"
async function callData(url){
    const res = await fetch (url);
    const data = await res.json();
    console.log(data);
    
}
callData(URL);