
export default function Item({name, quantity, category}) {

     return (
        <section>
            <p>{name}</p>
            <p>{category}</p>
            <p>{quantity}</p>
        </section>
    );
}