import classes from './post.module.css'

function Post(props) {//in React fiecare component are acces la proprietati. Acest 'props' reprezinta proprietatile acestui component. O proprietate a acestui obiect pot fi 'id', etc. Avand acest argument props noi putem defini continut dinamic.
    return (
        <div className={classes.container}> 
            <h3>{props.title}</h3> {/*Daca static aici era pur si simplu un string "Post", acum, noi facem referinta la proprietatea title din "Posts.jsx":
<Post title ="Postare 1"/>
            */}
            <h5>{props.subTitle}</h5>

            <div>
                <p>{props.description}</p>{/*Avand aceasta proprietate declarata ca argument, trebuie sa ma asigur ca trimit aceatsa proprietate atunci cand randez acest component in Posts.jsx */}
                <img width={50} src={props.image} alt="" />
            </div>

            <footer>
                {props.footerDescription}
            </footer>
        </div>
    );
}

export default Post;