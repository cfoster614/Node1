const facts = document.querySelector('.facts');
const url = 'http://numbersapi.com';


async function numberFact(num) {
    let numData = await axios.get(`${url}/${num}?json`);
    console.log(numData.data.text);
}

async function multipleNums(numbersArr){
    let numbers = await Promise.all(
        numbersArr.map((num) => {return axios.get(`${url}/${num}?json`)})
        );
        console.log(numbers);

        for(let num of numbers){
            const newLi = document.createElement('li');
            newLi.innerText = num.data.text;
            facts.append(newLi);
        }
}

async function multipleFacts(num, amount) {
    let numbers = await Promise.all(
        Array.from({ length: amount }, () => axios.get(`${url}/${num}?json`))
    );

    for(let num of numbers){
        const newLi = document.createElement('li');
        newLi.innerText = num.data.text;
        facts.append(newLi);
    }
}