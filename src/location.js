const GOOGLE_API_KEY = 'AIzaSyCHdgvyDKkdykV9UKSDo_6IBH_f382l-S4';

export async function getAddressFromCoordinates(coords) {
    try {
        let url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${coords.lat},${coords.lng}&key=${GOOGLE_API_KEY}`;

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('Failed to fetch address. Please try again');
        }

        const data = await response.json();

        if (data.error_message) {
            throw new Error(data.error_message);
        }

        const address = data.results[4].formatted_address;
        console.log(data);
        return address;
    } catch (error) {
        console.log(error);
    }
}

export async function getCoordsFromAddress(address) {
    const urlAddress = encodeURI(address);
    let url = `https://maps.googleapis.com/maps/api/geocode/json?address=${urlAddress}&key=${GOOGLE_API_KEY}`;

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error('Failed to fetch coordinates. Please try again');
    }

    const data = await response.json();

    console.log(data);
    if (data.error_message) {
        throw new Error(data.error_message);
    }

    const coordinates = data.results[0].geometry.location;

    return coordinates;
}
