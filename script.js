const api_url = "https://api.quotable.io/random";

async function callData(url) {
  const response = await fetch(url);
  var data = await response.json();
  console.log(data);

  document.getElementById("author").innerHTML=data.author
  document.getElementById("quote").innerHTML=data.content
  document.getElementById("date").innerHTML=data.dateAdded
  document.getElementById("tag").innerHTML=data.author
  document.getElementById("author").innerHTML=data.author
}

callData(api_url);
