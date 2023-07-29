const facts = document.querySelector('.facts');


let url = 'http://numbersapi.com'

function multipleNums(num1, num2, num3){
    
    axios
    .get(`${url}/${num1}?json`)
    .then(num1 => {
        const newLi = document.createElement('li');
        newLi.innerText = num1.data.text
        facts.append(newLi);
        return axios.get(`${url}/${num2}?json`)
    })
    .then(num2 => {
        const newLi = document.createElement('li');
        newLi.innerText = num2.data.text
        facts.append(newLi);
        return axios.get(`${url}/${num3}?json`)
    })
    .then(num3 => {
        const newLi = document.createElement('li');
        newLi.innerText = num3.data.text
        facts.append(newLi);
    })
    .catch(err => {
        console.log(err);
    })
}

function multipleFacts(num) {
    axios
    .get(`${url}/${num}?json`)
    .then(fact1 => {
        const newLi = document.createElement('li');
        newLi.innerText = fact1.data.text;
        facts.append(newLi)
        return axios.get(`${url}/${num}?json`)
    })
    .then(fact2 => {
        const newLi = document.createElement('li');
        newLi.innerText = fact2.data.text;
        facts.append(newLi)
        return axios.get(`${url}/${num}?json`)
    })
    .then(fact3 => {
        const newLi = document.createElement('li');
        newLi.innerText = fact3.data.text;
        facts.append(newLi)
        return axios.get(`${url}/${num}?json`)
    })
    .then(fact4 => {
        const newLi = document.createElement('li');
        newLi.innerText = fact4.data.text;
        facts.append(newLi)
        return axios.get(`${url}/${num}?json`)
    })
    .catch(err => {
        console.log(err);
    })
}