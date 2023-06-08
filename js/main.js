document.querySelector('button').addEventListener('click', showMeData);

async function showMeData() {
    const getData = async () => {
        const response = await fetch('../assets/data.json');
        const data = await response.json();
        console.log(data)
        return data;
    }
    let jsonData = await getData();
    document.getElementById('output').innerHTML = jsonData.data[0].job_name;
    document.getElementById('output2').innerHTML = jsonData.data[0].tag_categories[0];
}