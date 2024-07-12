// React Import
import { useCallback, useEffect, useState } from 'react'

// Hooks Import
import useQueryGet from '../../hooks/useQueryGet';

// Layouts Import
import DataLayout1 from '../../layouts/__DataLayout1/DataLayout1';
import DataLayout1Error from '../../layouts/__DataLayout1/DataLayout1Error';
import DataLayout1Loading from '../../layouts/__DataLayout1/DataLayout1Loading';

// Default Function
export default function HomeSlideShow({ query_func, query_key, params, title, heading, path, imgPath }) {
  const [ currentIndex, setCurrentIndex ] = useState(0);
  const { data:slides, isLoading, error } = useQueryGet({ query_key:query_key, query_func:query_func, params:params });

  // Function that generates random index between 0 and the total data
  const getRandomIndex = useCallback((max, exclude) => {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * max);
    } while (newIndex === exclude);
    return newIndex;
  }, []);

  // Function that load next slide
  const handleLoadNext = useCallback(() => {
    if (slides && slides.totalData) {
      setCurrentIndex((prevIndex) => (prevIndex === slides.totalData - 1 ? 0 : prevIndex + 1));
    }
  }, [slides]);

  useEffect(() => {
    // checks if slide data exists or length is equals to 1 therefore aborting the slideshow effect
    if (!slides || slides.totalData === 1) {
      return;
    }
    // Set initial random index
    setCurrentIndex(prevIndex => getRandomIndex(slides.totalData, prevIndex));

    // Load next Slides after a specific interval
    const interval = setInterval(() => {
      handleLoadNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [slides, handleLoadNext, getRandomIndex]);

  return (
    <>
      { ( isLoading ) && <DataLayout1Loading /> }
      { ( error ) && <DataLayout1Error error={error.message} /> }
      { slides && (
        <DataLayout1 
          title={title} 
          heading={heading} 
          image={slides.data[currentIndex].image} 
          isFetched={true} path={path} 
          imgPath={`${imgPath}/${slides.data[currentIndex].id}`} 
        />
      )}
    </>
  )
}
