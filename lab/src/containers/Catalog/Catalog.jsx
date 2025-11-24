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

import { setInventory, setInventoryLoading, decreaseAvailability } from "../../states/available/availableSlice";
import { useSelector, useDispatch } from 'react-redux';

const Catalog = () => {
    const books = useSelector((state) => state.inventory.books);
    const loading = useSelector((state) => state.inventory.loading);
    const dispatch = useDispatch();
    
    const fetchBooks = useCallback(async (params = {}) => {
        dispatch(setInventoryLoading(true));
        try {
            const data = await getBooks(params);
            dispatch(setInventory(data));
        } catch (err) {
            console.log(`Error: ${err.message}`);
            dispatch(setInventory([]));
        } finally {
            dispatch(setInventoryLoading(false));
        }
    }, [dispatch]);

    // useEffect(() => {
    //     if (books.length === 0 && !loading) { 
    //     fetchBooks();}
    // }, []);
    useEffect(() => {
        if (books.length === 0 && !loading) {
            fetchBooks();
        }
    }, [books.length, loading, fetchBooks]);

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
        console.log("Catalog availability:", selectedBook?.availability);

        if (!selectedBook) return <div>Book not found or loading...</div>;

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
                    <input type="text" placeholder="Search..." value={search}
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