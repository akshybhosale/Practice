const language = [
    "Javascript",
    "Typescript",
    "Core Java"
];

function ArrayRender(){
    return (
        <div>
            <h2>How to render an array of Elements</h2>
            <p>To render an array of elements, you can use the <strong>map()</strong> method to iterate over the aaray and return a new array of React elements.</p>
            <ul>{language.map((language) => <li>{language}</li>)}</ul>
        </div>
    );
}export default ArrayRender;