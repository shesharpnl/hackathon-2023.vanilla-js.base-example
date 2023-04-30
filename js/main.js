document.querySelector('button').addEventListener('click', showMeData);

async function showMeData() {
    const getData = async () => {
        const response = await fetch('../assets/data.json');
        const data = await response.json();
        console.log(data)
        return data;
    }
    let data = await getData();
    document.getElementById('output').innerHTML = data['one']
    document.getElementById('output2').innerHTML = data['two']
}