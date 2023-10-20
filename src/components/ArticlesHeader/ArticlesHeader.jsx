import classes from './articles-header.module.css'

function ArticlesHeader() {
    return (
        <header>
            <nav className={classes.navbar}>
                <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                </ul>
            </nav>
            <h2>Header</h2>

            <p>Aceasta este descrierea din Header!</p>
        </header>
    );
}

export default ArticlesHeader;