import classes from './article.module.css'

function Article (props) {
    return (
        <div className={classes.container}>
            <h3>{props.title}</h3> {/*Era string "Article title", care l-am schimbat pe element dianmic */}

            <p>{props.description}</p>{/*Era string "Descriere...", care l-am schimbat pe element dianmic */}

            <img width={60} src={props.image} alt="image" />

            <ul>{props.list}</ul>

            <p>{props.conslusion}</p>

            <footer>{props.footer}</footer>
        </div>
    );
}

export default Article;