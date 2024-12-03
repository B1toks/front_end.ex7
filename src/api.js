export const fetchDogImages = async () => {
    try {
      const response = await fetch("https://dog.ceo/api/breeds/image/random/10");
      const data = await response.json();
      return data.message; // Повертає масив з URL зображень
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
  };
  