import { useState, useEffect } from 'react';

function JsonplaceholderPhotos() {
    const [photos, setPhotos] = useState([]),
        [currentPage, setCurrentPage] = useState(1),
        [fetching, setFetching] = useState(true),
        [totalCount, setTotalCount] = useState(0),
        [error, setError] = useState(null);

    // console.log('totalCount- ', totalCount);

    useEffect(() => {
        async function fetchData() {
            try {
                setError(null);
                const response = await fetch(`https://jsonplaceholder.typicode.com/photos?_limit=10&_page=${currentPage}`);
                const total = response.headers.get('X-Total-Count');
                setTotalCount(total);
                if (!response.ok) throw new Error(response.status);
                setPhotos([...photos, ...await response.json()]);
                setCurrentPage(prevState => prevState + 1);
            } catch (err) {
                setError(err);
            } finally {
                setFetching(false);
            }
        }
        fetchData();
    }, [fetching]);

    if (error) return <div className="error">Oшибка {error.message}</div>;

    useEffect(() => {
        document.addEventListener('scroll', scrollHadler);

        return function () {
            document.removeEventListener('scroll', scrollHadler);
        }
    }, [])

    const scrollHadler = (evt) => {
        if (evt.target.documentElement.scrollHeight - (evt.target.documentElement.scrollTop + window.innerHeight) < 100
            && photos.length === totalCount) {
            // console.log('scroll');
            setFetching(true);
        }
        // console.log('scrollHeight', evt.target.documentElement.scrollHeight);
        // console.log('scrollTop', evt.target.documentElement.scrollTop);
        // console.log('innerHeight', window.innerHeight);
    }

    // console.log('Запуск JsonplaceholderPhotos. photos ', photos);


    if (error)
        return <div>Ошибка: {error.message}</div>;

    if (fetching || photos) return <>
        {photos && <div className='photos'>
            <div>
                {photos.map(photo =>
                    <div key={photo.id} className='photo'>
                        <div className='title'>{photo.id}.{photo.title}</div>
                        <img src={photo.thumbnailUrl} alt='' />
                    </div>
                )}
            </div>
        </div>}
        {fetching && <div className="spinner" />}
    </>
}

export default JsonplaceholderPhotos