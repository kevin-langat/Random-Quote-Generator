const quotesCon = document.querySelector('.quotes-con');
const refresh = document.querySelector('.refreshbtn');
const load = document.querySelector('.loader');

function showLoader() {
  load.style.display = 'block';
  quotesCon.style.display = 'none';
}
function hideLoader() {
  load.style.display = 'none';
  quotesCon.style.display = 'block';
}

async function fetchListsOfQoutes() {
  try {
    const response = await fetch('https://dummyjson.com/quotes?limit=500', {
      method: 'GET',
    });
    const listOfQoutesData = await response.json();
    if (listOfQoutesData) {
      hideLoader();
      const randomIndex = Math.floor(
        Math.random() * listOfQoutesData.quotes.length
      );
      const randomQuote = listOfQoutesData.quotes[randomIndex];
      displayQuotes(randomQuote);
    }
  } catch (error) {}
}
fetchListsOfQoutes();

function displayQuotes(QuotesData) {
  quotesCon.innerHTML = `<h3>${QuotesData.quote}</h3>
      <h4>${QuotesData.author}</h4>`;
}
refresh.addEventListener('click', () => {
  fetchListsOfQoutes();
});
