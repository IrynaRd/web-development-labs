import React, { useState, useEffect, useCallback } from "react"
import CardItem from "../CardItem/CardItem";
import { GenreOptions, OriginOptions, CoverOptions } from "../../assets/data/data";
import { CardWrapper, HeadWrapper, FilterWrapper } from "../Catalog/Catalog.styled";
import Filter from "./Select/Select";
import { Button } from './Catalog.styled';
import Item from './Item/Item';
import api from "./../api/books";
import { getBooks } from "../api/books_get";
import Loader from "./../api/Loader.styled";
import MainPicture from "../../assets/icons/books.png";


const Catalog = () => {

    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchBooks = useCallback(async (params = {}) => {
        setLoading(true);
        try {
            const data = await getBooks(params);
            setBooks(data);
            // console.log(data);
        } catch (err) {
            console.log(`Error: ${err.message}`);
            setBooks([]);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchBooks();
    }, [fetchBooks]);


    const [selectedBookID, setSelectedBookID] = useState(null);

    const [search, setSearch] = useState("");

    const [selectedGenre, setSelectedGenre] = useState(null);
    const [selectedOrigin, setSelectedOrigin] = useState(null);
    const [selectedCover, setSelectedCover] = useState(null);


    const applyFilters = () => {
        const filters = {};
        if (selectedGenre) {
            filters.genre = selectedGenre;
        }

        if (selectedOrigin) {
            filters.origin = selectedOrigin;
        }

        if (selectedCover) {
            filters.cover = selectedCover;
        }

        if (search) {
            filters.search = search;
        }
        
        fetchBooks(filters);
    };

    if (selectedBookID) {
        const selectedBook = books.find(book => book.id === selectedBookID);
        return (
            <Item book={selectedBook} onGoBack={() => setSelectedBookID(null)}></Item>
        )
    }

    return (
        <div>
            <HeadWrapper>
                <FilterWrapper>
                    <Filter placeholder={"Genre"} options={GenreOptions} onChange={value => setSelectedGenre(value)} />
                    <Filter placeholder={"Origin"} options={OriginOptions} onChange={value => setSelectedOrigin(value)} />
                    <Filter placeholder={"Book Cover"} options={CoverOptions} onChange={value => setSelectedCover(value)} />
                    <input type="text" placeholder="Search..." value = {search}
                        onChange={(e) => setSearch(e.target.value)} />
                </FilterWrapper>

                <Button onClick={applyFilters}>Apply</Button>
            </HeadWrapper>

            {loading ? <Loader /> :
            <CardWrapper>
                {books.map(({ title, author, text, image, price, id }) => (
                    <CardItem
                        key={id}
                        title={title}
                        author={author}
                        text={text}
                        imageSrc={MainPicture}
                        price={price}
                        onShowMore={() => setSelectedBookID(id)}
                    />
                )
                )}
            </CardWrapper>
            }
        </div>
    )
}

export default Catalog;