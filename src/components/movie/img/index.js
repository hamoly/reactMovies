import React, { useState, useEffect } from "react"
import styled from "styled-components"
import poster from './movie-poster-na.6fafb80a.jpg';

const Image = styled.img`
width:100%;
height:100%;
  // Add a smooth animation on loading
  @keyframes loaded {
    0% {
      opacity: 0.1;
    }
    100% {
      opacity: 1;
    }
  }
  // I use utilitary classes instead of props to avoid style regenerating
  &.loaded:not(.has-error) {
    animation: loaded 1.5s ease-in-out;
  }
  &.has-error {
    // fallback to placeholder image on error
    content: url(${poster});
  }
`

  const LazyImage = ({ src, alt }) => {
  const [imageSrc, setImageSrc] = useState(poster)
  const [imageRef, setImageRef] = useState()

  const onLoad = event => {
    event.target.classList.add("loaded", "img-fluid")
  }

  const onError = event => {
    event.target.classList.add("has-error")
  }

  useEffect(() => {
    let observer
    let didCancel = false

    if (imageRef && imageSrc !== src) {
      if (IntersectionObserver) {
        observer = new IntersectionObserver(
          entries => {
            entries.forEach(entry => {
              if (
                !didCancel &&
                (entry.intersectionRatio > 0 || entry.isIntersecting)
              ) {
                setImageSrc(src)
                observer.unobserve(imageRef)
              }
            })
          },
          {
            threshold: 0.01,
            rootMargin: "1%",
          }
        )
        observer.observe(imageRef)
      } else {
        // Old browsers fallback
        setImageSrc(src)
      }
    }
    return () => {
      didCancel = true
      // on component cleanup, we remove the listner
      if (observer && observer.unobserve) {
        observer.unobserve(imageRef)
      }
    }
  }, [src, imageSrc, imageRef])
  return (
    <div className="col-lg-3 col-sm-12 col-md-12 p-0">
    <Image
    ref={setImageRef}
    src={imageSrc}
    alt={alt}
    onLoad={onLoad}
    onError={onError}
    />
    </div>
  )
}
export default LazyImage