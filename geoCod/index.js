async function getAddressSuggestions(input) {
  const apiKey = "4f8881b6-af18-4ed6-b3cb-88f1305a6cba"; // мой ключ яндекс гео
  const lang = "ru_RU";
  const baseUrl = `https://geocode-maps.yandex.ru/1.x/?apikey=${apiKey}&lang=${lang}&format=json`;

  const response = await fetch(
    `${baseUrl}&geocode=${encodeURIComponent(input)}`
  );
  const data = await response.json();

  const suggestions = [];
  const features = data.response.GeoObjectCollection.featureMember;
  features.forEach((feature) => {
    suggestions.push(feature.GeoObject.metaDataProperty.GeocoderMetaData.text);
  });

  return suggestions;
}

function displayAddressSuggestions(suggestions) {
  const suggestionsList = document.getElementById("suggestionsList");
  suggestionsList.innerHTML = "";

  if (suggestions.length > 0) {
    suggestionsList.style.display = "block";
    suggestions.forEach((suggestion) => {
      const listItem = document.createElement("li");
      listItem.textContent = suggestion;
      listItem.addEventListener("click", () => {
        document.getElementById("addressInput").value = suggestion;
        suggestionsList.style.display = "none";
      });
      suggestionsList.appendChild(listItem);
    });
  } else {
    suggestionsList.style.display = "none";
  }
}

const inputField = document.getElementById("addressInput");
const suggestionsList = document.getElementById("suggestionsList");

inputField.addEventListener("input", async (event) => {
  const userInput = event.target.value;
  if (userInput.length > 0) {
    const suggestions = await getAddressSuggestions(userInput);
    displayAddressSuggestions(suggestions);
  } else {
    suggestionsList.style.display = "none";
  }
});
