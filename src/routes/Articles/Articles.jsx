import Article from "../../components/Article/Article";
import ArticlesHeader from "../../components/ArticlesHeader/ArticlesHeader";

function Articles() {
    //adaugam 4 articole in Article
    const items = [
        {
            id: '1',
            title: 'Title 1',
            description: 'Description 1',
            image: './logo512.png',
            list: 'List 1',//Radu, cum sa adaug aici liste?
            conclusion: 'Conclusion 1',
            footer: 'Footer 1', //Radu, cum sa pastrez aici cele 2 buttons?

        },
        {
            id: '2',
            title: 'Title 2',
            description: 'Description 2',
            image: './logo512.png',
            list: 'List 2',
            conclusion: 'Conclusion 2',
            footer: 'Footer 2', //
        },
        {
            id: '3',
            title: 'Title 3',
            description: 'Description 3',
            image: './logo512.png',
            list: 'List 3',
            conclusion: 'Conclusion 3',
            footer: 'Footer 3', //
        },
        {
            id: '4',
            title: 'Title 4',
            description: 'Description 4',
            image: './logo512.png',
            list: 'List 4',
            conclusion: 'Conclusion 4',
            footer: 'Footer 4', //
        },
    ];

    const articleComponents = [];

    for (const item of items) {
        articleComponents.push(
            <Article
                key={item.id}
                title={item.title}
                description={item.description}
                image={item.image}
                list={item.list}
                conclusion={item.conclusion}
                footer={item.footer}
            />
        )
    }


    return (
        <section>
            <ArticlesHeader /> {/*L-am exportat pentru ca el ar putea sa creasca */}
            {articleComponents}
        </section>
    );
}

export default Articles;