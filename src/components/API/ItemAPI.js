export async function getItems(itemId) {
  try {
    const response = await fetch(`http://localhost:8080/api/items/${itemId}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function getItemsImage(itemId) {
  try {
    const response = await fetch(`http://localhost:8080/api/image/${itemId}/${itemId}`);
    if (response.ok) {
      const imageData = await response.blob();
      return URL.createObjectURL(imageData);
    } else {
      console.error("Error fetching item image:", response.status);
      return null;
    }
  } catch (error) {
    console.error("Error fetching item image:", error);
    return null;
  }
}
