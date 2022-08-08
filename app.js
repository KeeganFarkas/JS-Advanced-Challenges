console.log('Q1 Show Rating');

function showRating(num){
    let rating = '';

    for(let i = 1; i <= num; i++){
        rating += '*';
        if(i + 1 <= num){
            rating += ' ';
        }
    }

    if(!Number.isInteger(num)){
        if(num === 0.5){
            rating += '.';
        }
        else{
            rating += ' .';
        }
    }

    return rating;
}

console.log(showRating(3));
console.log(showRating(4.5));
console.log(showRating(0.5));

console.log('Q2 Sort by Lowest to Highest Price');

const sortLowToHigh = arr => arr.sort((a, b) => a - b);

console.log(sortLowToHigh([20, 40, 10, 30, 50, 10]));
console.log(sortLowToHigh([5, 10, 0, -5]));
console.log(sortLowToHigh([3, 2, 1, 0]));

console.log('Q3 Sort by Highest to Lowest Price');

const sorthHighToLow = list => list.sort((a, b) => b.price - a.price);

console.log(sorthHighToLow([
    {id: 1, price: 50},
    {id: 2, price: 30},
    {id: 3, price: 60},
    {id: 4, price: 10}
]))

console.log('Q4 Promises');
console.log('Watch Youtube Videos on Promises');

console.log('Q5 Find All the Posts by a Single User');

async function postsByUser(uid){
    const promise = await fetch("https://jsonplaceholder.typicode.com/posts")

    const result = await promise.json();

    const posts = result.filter(element => element.userId === uid);

    console.log(posts);
}

postsByUser(4);

console.log('Q6 First 6 Incomplete Todos');

async function firstSixIncomplete(){
    const promise = await fetch("https://jsonplaceholder.typicode.com/todos");
    
    const result = await promise.json();
    
    const Incomplete = result.filter(elem => !elem.completed).slice(0, 6);
    
    console.log(Incomplete);
}

firstSixIncomplete();