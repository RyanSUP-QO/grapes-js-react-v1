const baseUrl = `https://staging-optins-backend-8592.encr.app/api/v1`;

export async function getAllOptins(siteId) {
  try {
    const response = await fetch(`${baseUrl}/${siteId}/config`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json(); // or response.text(), etc.
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
  }
}

export async function getOptin(siteId, optinId) {
  try {
    const response = await fetch(`${baseUrl}/${siteId}/config/${optinId}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json(); // or response.text(), etc.
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
  }
}

export async function createOptin(siteId, name) {
  try {
    const response = await fetch(`${baseUrl}/${siteId}/config`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error during POST:", error);
  }
}

export async function updateOptin(siteId, data) {
  console.log(data)
  try {
    const response = await fetch(`${baseUrl}/${siteId}/config/${data.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error during PUT:", error);
  }
}
