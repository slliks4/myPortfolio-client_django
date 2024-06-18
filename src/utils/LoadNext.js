// React Import
import { useCallback, useEffect, useRef, useState } from 'react';

// Default Function
export default function LoadNext({ data, fetchNextPage, hasNextPage, setCurrentIndex, currentIndex }) {

  const handleLoadNext = useCallback(() => {
    if( data && data.pages[currentIndex].total === 1 ){
      return
    }else if (data && currentIndex < data.pages.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }else if (hasNextPage) {
      fetchNextPage();
      setCurrentIndex((prev) => prev + 1);
    } else {
      setCurrentIndex(0);
    }
    console.log('Call back func being called')
  }, [data, currentIndex, hasNextPage, fetchNextPage]); // Memoize handleLoadNext with its dependencies

  const handleLoadNextRef = useRef(handleLoadNext);

  useEffect(() => {
    handleLoadNextRef.current = handleLoadNext;
  }, [handleLoadNext]); // Update handleLoadNextRef.current if handleLoadNext changes

  return { handleLoadNextRef };
}
