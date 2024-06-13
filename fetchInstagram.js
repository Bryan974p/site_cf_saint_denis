export async function fetchInstagramData(accessToken, userId) {
    const endpoint = `https://graph.instagram.com/${userId}/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp&access_token=${accessToken}`;
  
    try {
      const response = await fetch(endpoint);
      const data = await response.json();
      return data.data;
    } catch (error) {
      console.error('Error fetching Instagram data:', error);
      return [];
    }
  }
  