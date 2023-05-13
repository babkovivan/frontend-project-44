import realineSync from 'readline-sync';
const sayGreetings = () =>{
    console.log("Welcome to the Brain Games!");
    const name = realineSync.questions('May I have your name?');
    console.log(`Hello, ${name}!`);
};
export default sayGreetings