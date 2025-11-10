import React, {useState} from "react"
import CardItem from "../CardItem/CardItem";
import { books, GenreOptions, OriginOptions, CoverOptions } from "../../assets/data/data";
import { CardWrapper, HeadWrapper, FilterWrapper } from "../Catalog/Catalog.styled";
import Filter from "./Select/Select";
import { Button } from './Catalog.styled';
import Item from './Item/Item';

const Catalog = () => {
    const [selectedBookID, setSelectedBookID] = useState(null);

    const [search, setSearch] = useState("");
    

    const [selectedGenre, setSelectedGenre] = useState(null);
    const [selectedOrigin, setSelectedOrigin] = useState(null);
    const [selectedCover, setSelectedCover] = useState(null);

    const [appliedGenre, setAppliedGenre] = useState(null);
    const [appliedOrigin, setAppliedOrigin] = useState(null);
    const [appliedCover, setAppliedCover] = useState(null);

    const applyFilters = () => {
        setAppliedGenre(selectedGenre);
        setAppliedOrigin(selectedOrigin);
        setAppliedCover(selectedCover);
    };

    const currentBooks = books.filter(book => {
        const searched = search.toLowerCase().trim();
        const searchMatch = (searched === '') ? true : (
            book.title.toLowerCase().includes(searched) || 
            book.author.toLowerCase().includes(searched) || 
            book.text.toLowerCase().includes(searched)
        );

        const genreMatch = !appliedGenre ? true : book.genre === appliedGenre;
        const originMatch = !appliedOrigin ? true : book.origin === appliedOrigin;
        const coverMatch = !appliedCover ? true : book.cover === appliedCover;
        
        return searchMatch && genreMatch && originMatch && coverMatch;
    })


    if (selectedBookID) {
        const selectedBook = books.find(book => book.id === selectedBookID);
        return (
            <Item book={selectedBook} onGoBack={()=>setSelectedBookID(null)}></Item>
        )
        
    }
    


    return (
        <div>
            <HeadWrapper>
                <FilterWrapper>
                    <Filter placeholder = {"Genre"} options = {GenreOptions} onChange={value => setSelectedGenre(value)}/>
                    <Filter placeholder = {"Origin"} options = {OriginOptions} onChange={value => setSelectedOrigin(value)}/>
                    <Filter placeholder = {"Book Cover"} options = {CoverOptions} onChange={value => setSelectedCover(value)}/>
                    <input type="text" placeholder="Search..." 
                        onChange={(e) => setSearch(e.target.value)}/>
                </FilterWrapper>

                <Button onClick={applyFilters}>Apply</Button>
            </HeadWrapper>

            <CardWrapper>
                {currentBooks.map(({ title, author, text, image, price, id }) => (
                    <CardItem
                        key={id}
                        title={title}
                        author={author}
                        text={text}
                        imageSrc={image}
                        price={price}
                        onShowMore={()=>setSelectedBookID(id)}
                    />
                )

                )}
            </CardWrapper>

        </div>
    )
}


export default Catalog;