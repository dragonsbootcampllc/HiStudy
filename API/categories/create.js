const createCategory = async (formData, authToken) => {
    try {
      const url = 'https://itc-academy.onrender.com/api/v1/category/create';
      const headers = {
        Authorization: `Bearer ${authToken}`,
      };
  
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('description', formData.description);
      formDataToSend.append('image', formData.image);
      formDataToSend.append('recommended', formData.recommended);
  
      const response = await fetch(url, {
        method: 'POST',
        headers: headers,
        body: formDataToSend,
      });
  
      if (!response.ok) {
        throw new Error('Failed to create category');
      }
  
      return response.json();
    } catch (error) {
      console.error('Error creating category:', error);
      throw error;
    }
};
  
export default createCategory;