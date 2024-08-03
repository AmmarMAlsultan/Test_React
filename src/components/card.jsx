export default function Card(props){
    return (
        <div>
            <h1>{props.titel}</h1>
            <h2>{props.old}</h2>
            <h2>{props.name}</h2>
        </div>
    );
}