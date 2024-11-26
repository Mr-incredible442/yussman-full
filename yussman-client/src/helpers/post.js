import axios from 'axios';

const stock = [];

const apiUrl =
  'http://192.168.0.100:9000/api/shopb/65a12f452b76884f26d3d031/addtostock'; // Replace with your API endpoint

async function postDataToApi(item) {
  try {
    const response = await axios.post(apiUrl, item);
    console.log(`Successfully posted data for ${item.name}.`);
  } catch (error) {
    console.error(`Error posting data for ${item.name}:`, error.message);
  }
}

async function postStockData() {
  for (const item of stock) {
    await postDataToApi(item);
  }
}

// Call the function to start posting data
postStockData();
